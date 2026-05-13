/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_06b.xml 104595 14287f5e9b8eb0a6eb23595cef0cbd388e2a58ce54e6039f00b2b4be7c8873b5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'copCo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'차종코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsAmt',name:'요율여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'계약고객번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCheck',name:'계약체크',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtYn',name:'계약일자여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true','ev:ondataload':'scwin.ds_emp_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sortSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBran',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용구간코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptNm',name:'요율적용구간명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'적용시간From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'적용시간To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'계약시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'계약종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sortSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBran',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expireDt',name:'만기일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptCd',name:'요율적용구간코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfAdptNm',name:'요율적용구간명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'적용시간From',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'적용시간To',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_joblevel','ev:ondataload':'scwin.ds_joblevel_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_TmptranstrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarBran',name:'배차점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'작업단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'copCoClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trfClsCd',name:'요율구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'allt',name:'전체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val1',name:'1t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val2',name:'2.5t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val3',name:'3.5t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val4',name:'5t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val5',name:'8t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val6',name:'11t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val7',name:'13t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val8',name:'15t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val9',name:'18t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val10',name:'25t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val11',name:'1.5t',dataType:'text'}},{T:1,N:'w2:column',A:{id:'val12',name:'5t축',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_trfAdptCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp_GroupExpr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'dummy',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ds.op.adjmbd.pchstrfmgnt.RegistBulkTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_empSave","key":"IN_DS1"},{"id":"dma_retrieve","key":"IN_DS2"},{"action":"modified","id":"ds_emp","key":"OUT_DS1"},{"action":"modified","id":"ds_empSave","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_empSave","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_saveEmp_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp2',action:'/ds.op.adjmbd.pchstrfmgnt.RegistBulkTpchsTariffCopyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_empSave","key":"IN_DS1"},{"id":"dma_retrieve","key":"IN_DS2"},{"action":"modified","id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveBulkTpchsTariffCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"action":"modified","id":"ds_emp","key":"OUT_DS1"},{"action":"modified","id":"ds_empSave","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_emp","key":"OUT_DS1"},{"id":"ds_empSave","key":"OUT_DS2"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve2","key":"IN_DS1"},{"action":"modified","id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp2","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_RetreiveLoBranCMD',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_joblevel","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCodeCMD',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP518&cd=&cdNm=',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_trfAdptCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strDate;
scwin.sLoUpperLobranCd;
scwin.sGroupExpr = "alloccarBran:adptDt:dptDistrictCd:dptDistrictNm:arvDistrictCd:arvDistrictNm:commCd:comm:unitCd:eqKndCd:eqKndNm:trfClsCd:ctrtNo:expireDt:copCoClntNo:copCoClntNm:odrKndCd:trfAdptCd:trfAdptNm:wrkStHh:wrkEndHh,eqNrmNm,pchsAmt";
scwin.xkeycnt = -1;
scwin.insertYN = "0";
scwin.editRow = false;

/**
 * event
 * @name onpageload
 * @description
 */
scwin.onpageload = async function () {
  scwin.strDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.sLoUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") ?? "";
  let codeOptions = [{
    grpCd: "OP253",
    compID: "acb_pchsAmt"
  }, {
    grpCd: "SD113",
    compID: "gr_emp:odrKndCd,gr_empExcelUpload:odrKndCd"
  }, {
    grpCd: "LO102",
    compID: "gr_emp:unitCd,gr_empExcelUpload:unitCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.onCommonCodeLoaded);
  codeOptions = [{
    method: "getLuxeComboData",
    param1: "EquipmentEBC",
    param2: "retrieveBulkLogisticsEquipmentClss",
    param3: ["ZZ213"],
    compID: "acb_eqKndCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.onLoadCommonCode);
  ica_wrkStDt.setValue(scwin.strDate);
  $c.sbm.execute($p, sbm_RetreiveLoBranCMD);
  $c.sbm.execute($p, sbm_RetrieveCodeCMD);
};

/**
 * event
 * @name onUdcCompleted
 * @description UDC 초기화 후 이벤트
 */
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableBtn($p, [btn_Init]);
  $c.data.applyGridViewGroupExpr($p, ds_emp, gr_emp, scwin.sGroupExpr, {});
  let grdObj = $c.util.getObject($p, "gr_emp");
  let colidx = grdObj.getColumnIndex("pchsAmt");
  if (colidx >= 0) {
    grdObj.setColumnVisible("pchsAmt", false);
  }
  $c.util.setTimeout($p, () => ed_bilgMchtCd.focus(), {
    delay: 100
  });
};

/**
 * event
 * @name onCommonCodeLoaded
 * @description
 */
scwin.onCommonCodeLoaded = function () {
  dlt_commonCodeSD113.setRowJSON(0, {
    "cd": "99",
    "cdNm": "전체"
  }, false);
};

/**
 * method
 * @name onLoadCommonCode
 * @description
 */
scwin.onLoadCommonCode = function () {
  acb_eqKndCd.setValue("CT");
};

/**
 * method
 * @name f_Retrieve
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  if (cbx_commonChe.getValue() !== "1") {
    if (ed_bilgMchtCd.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화주코드"]);
      ed_bilgMchtCd.focus();
      return;
    }
    if (ed_bilgMchtNm.getValue() == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["화주명"]);
      ed_bilgMchtNm.focus();
      return;
    }
  }
  if (lc_ctrtNo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["계약서"]);
    ed_bilgMchtCd.focus();
    return;
  }
  dma_retrieve.set("adptDt", ica_wrkStDt.getValue().trim() == "" ? scwin.strDate : ica_wrkStDt.getValue().trim());
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * method
 * @name f_Save
 * @description 저장
 */
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.
  if (!$c.data.isModified($p, ds_empSave)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (scwin.isShowGrEmpExcelUpload()) {
    if (!(await $c.gus.cfValidate($p, [gr_empExcelUpload], null, true))) {
      return;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [gr_emp], null, true))) {
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.insertYN = "0";
    for (let i = 0; i < ds_empSave.getRowCount(); i++) {
      if (ds_empSave.getCellData(i, "copCoClntNm").trim() == "" || ds_empSave.getCellData(i, "copCoClntNm") == null) {
        ds_empSave.setCellData(i, "copCoClntNo", "999999");
      }
    }
    for (let i = 0; i < ds_emp_GroupExpr.getRowCount(); i++) {
      if (ds_emp_GroupExpr.getCellData(i, "wrkStHh").length != 4) {
        await $c.win.alert($p, "적용시간(From)을 확인해 주세요");
        gr_emp.setFocusedCell(i, "wrkStHh", true);
        return;
      } else if (ds_emp_GroupExpr.getCellData(i, "wrkEndHh").length != 4) {
        await $c.win.alert($p, "적용시간(To)을 확인해 주세요");
        gr_emp.setFocusedCell(i, "wrkEndHh", true);
        return;
      }
    }
    dma_retrieve.set("adptDt", ica_wrkStDt.getValue().trim());
    $c.sbm.execute($p, sbm_saveEmp);
  }
};

/**
 * method
 * @name f_Copy
 * @description 저장
 */
scwin.f_Copy = async function () {
  if (ds_empSave.getCellData(1, "ctrtNo") == lc_ctrtNo.getValue() && ds_empSave.getCellData(1, "trfClsCd") == acb_pchsAmt.getValue()) {
    await $c.gus.cfAlertMsg($p, "같은 계약서의 같은요율은 복사할 수 없습니다.");
    return;
  }
  let cnt = ds_empSave.getRowCount();
  for (let i = 0; i < cnt; ++i) {
    ds_empSave.setCellData(i, "ctrtNo", lc_ctrtNo.getValue());
    ds_empSave.setCellData(i, "trfClsCd", acb_pchsAmt.getValue());
  }

  //변경한 데이터가 있는지 체크한다.
  if (!$c.data.isModified($p, ds_empSave)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
    return;
  }
  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (scwin.isShowGrEmpExcelUpload()) {
    if (!(await $c.gus.cfValidate($p, [gr_empExcelUpload], null, true))) {
      return;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [gr_emp], null, true))) {
      return;
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.insertYN = "0";
    dma_retrieve.set("adptDt", ica_wrkStDt.getValue().trim());
    $c.sbm.execute($p, sbm_saveEmp2);
  }
};

/**
 * method
 * @name f_Delete
 * @description 삭제
 */
scwin.f_Delete = function () {
  if (scwin.isShowGrEmpExcelUpload()) {
    let row = gr_empExcelUpload.getFocusedRowIndex();
    if (row == null || row < 0) {
      return;
    }
    let end = ($c.num.parseInt($p, row / scwin.xkeycnt) + 1) * scwin.xkeycnt;
    for (let idx = end - 1; idx >= end - scwin.xkeycnt; --idx) {
      scwin.deleteRow(ds_empSave, idx);
    }
    gr_empExcelUpload.setFocusedCell(0, gr_empExcelUpload.getFocusedColumnIndex() ?? 0, false);
    tbx_totalRows.setValue(ds_empSave.getRowCount().toString());
  } else {
    //ASIS버그: 추가된 row는 ds_emp_GroupExprdp rowStatus가 D인 상태로 남아있지 않아서 ds_empSave에 rowStatus가 C인 상태로 남아있게 된다.
    scwin.deleteMarked(gr_emp, ds_emp_GroupExpr);
    for (let row = 0; row < ds_emp_GroupExpr.getRowCount(); row++) {
      if (ds_emp_GroupExpr.getRowStatus(row) == "D") {
        scwin.deleteRow(ds_emp_GroupExpr, row);
        let newRow = scwin.xkeycnt * row;
        for (let j = newRow + scwin.xkeycnt - 1; j >= newRow; j--) {
          scwin.deleteRow(ds_empSave, j);
        }
      }
    }
    gr_emp.setFocusedCell(0, gr_emp.getFocusedColumnIndex() ?? 0, false);
    let row = gr_emp.getFocusedRowIndex();
    if (row >= 0 && row !== null) {
      scwin.gr_emp_onrowindexchange(row);
    }
    tbx_totalRows.setValue(ds_emp_GroupExpr.getRowCount().toString());
  }
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
  scwin.insertYN = "0";
};

/**
 * method
 * @name f_openCommPopUpGrid
 * @description 품명 조회 Popup 처리 : 그리드에서 입력된 코드정보로 품명을 조회
 */
scwin.f_openCommPopUpGrid = async function (disGubun, row, pClose, pCode, pName, isCrosstab = true) {
  if (disGubun == 1) {
    let param = ",,WDE";
    let ctrtNoVal = lc_ctrtNo.getValue() ?? "";
    if (cbx_commonChe.getValue() !== "1") {
      if (ctrtNoVal != "") {
        param = ",," + ctrtNoVal;
      } else {
        await $c.win.alert($p, "계약서번호를 선택하세요");
        return;
      }
    }
    udc_grdDistrict.cfCommonPopUp(rtnList => {
      if (isCrosstab) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_emp_GroupExpr, row, "dptDistrictCd", "dptDistrictNm");
        scwin.setCrosstabCellData(row, "dptDistrictCd", ds_emp_GroupExpr.getCellData(row, "dptDistrictCd"), false);
        scwin.setCrosstabCellData(row, "dptDistrictNm", ds_emp_GroupExpr.getCellData(row, "dptDistrictNm"), false);
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_empSave, row, "dptDistrictCd", "dptDistrictNm");
      }
    }, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는	컬럼 지정
    , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "T" // 전체검색허용여부	("F")
    , "출발지,출발지코드,출발지명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (disGubun == 2) {
    let param = ",,WDE";
    let ctrtNoVal = lc_ctrtNo.getValue() ?? "";
    if (cbx_commonChe.getValue() !== "1") {
      if (ctrtNoVal != "") {
        param = ",," + ctrtNoVal;
      } else {
        await $c.win.alert($p, "계약서번호를 선택하세요");
        return;
      }
    }
    udc_grdDistrict.cfCommonPopUp(rtnList => {
      if (isCrosstab) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_emp_GroupExpr, row, "arvDistrictCd", "arvDistrictNm");
        scwin.setCrosstabCellData(row, "arvDistrictCd", ds_emp_GroupExpr.getCellData(row, "arvDistrictCd"), false);
        scwin.setCrosstabCellData(row, "arvDistrictNm", ds_emp_GroupExpr.getCellData(row, "arvDistrictNm"), false);
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_empSave, row, "arvDistrictCd", "arvDistrictNm");
      }
    }, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는	컬럼 지정
    , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , "T" // 전체검색허용여부	("F")
    , "도착지,도착지코드,도착지명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  } else if (disGubun == 3) {
    // 품명 코드팝업
    // 품명
    udc_grdComm.cfCommonPopUp(rtnList => {
      if (isCrosstab) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_emp_GroupExpr, row, "commCd", "comm");
        scwin.setCrosstabCellData(row, "commCd", ds_emp_GroupExpr.getCellData(row, "commCd"), false);
        scwin.setCrosstabCellData(row, "comm", ds_emp_GroupExpr.getCellData(row, "comm"), false);
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_empSave, row, "commCd", "comm");
      }
    }, pCode, pName, 'T', '3', '품목／품명코드,품목／품명,구분', '120,170,70', '4,5,6,7,8,9,10', "2,4,,,", '440', '500', null, null, null, null, '품목／품명,품목／품명코드,품목／품명');
  } else if (disGubun == 4) {
    udc_grdCopCo.cfCommonPopUp(rtnList => {
      if (isCrosstab) {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_emp_GroupExpr, row, "copCoClntNo", "copCoClntNm");
        scwin.setCrosstabCellData(row, "copCoClntNo", ds_emp_GroupExpr.getCellData(row, "copCoClntNo"), false);
        scwin.setCrosstabCellData(row, "copCoClntNm", ds_emp_GroupExpr.getCellData(row, "copCoClntNm"), false);
      } else {
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_empSave, row, "copCoClntNo", "copCoClntNm");
      }
    }, pCode // 화면에서의 ??? Code Element의	Value
    , pName // 화면에서의 ??? Name Element의	Value
    , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는	컬럼 지정
    , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의	사용자 정의	폭
    , null // POP-UP뛰을때 우도우의	사용자 정의	높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
  }
};

/**
 * method
 * @name f_openPopUp
 * @description 팝업
 */
scwin.f_openPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let param = "";
  let ctrtNoVal = "";
  switch (disGubun) {
    case 1:
      udc_bilgMcht.cfCommonPopUp(async rtnList => {
        $c.gus.cfSetReturnValue($p, rtnList, ed_bilgMchtCd, ed_bilgMchtNm);
        if (rtnList != null) {
          dma_retrieve2.set("ctrtClntNo", rtnList[0]); //화주코드  bilgMchtCd
          dma_retrieve2.set("ctrtCheck", "0"); //계약완료가 아닌 모든 계약번호 가져오기 위한 임시 값
          dma_retrieve2.set("ctrtDtYn", 1); //계약완료가 아닌 모든 계약번호 가져오기 위한 임시 값

          await $c.sbm.execute($p, sbm_retrieve2);
        }
        cbx_commonChe.setValue("");
        ed_copCoCd.setValue("");
        lc_ctrtNo.setDisabled(false);
        ed_copCoCd.setDisabled(false);
      }, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      ctrtNoVal = lc_ctrtNo.getValue() ?? "";
      if (cbx_commonChe.getValue() === "1") {
        param = ",,WDE";
      } else {
        if (ctrtNoVal != "") {
          param = ",," + ctrtNoVal;
        } else {
          await $c.win.alert($p, "계약서번호를 선택하세요");
          return;
        }
      }
      udc_dptDistrict.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_dptDistrictCd, ed_dptDistrictNm), pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "출발지,출발지코드,출발지명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      ctrtNoVal = lc_ctrtNo.getValue() ?? "";
      if (cbx_commonChe.getValue() === "1") {
        param = ",,WDE";
      } else {
        if (ctrtNoVal != "") {
          param = ",," + ctrtNoVal;
        } else {
          await $c.win.alert($p, "계약서번호를 선택하세요");
          return;
        }
      }
      udc_arvDistrict.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_arvDistrictCd, ed_arvDistrictNm), pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , param // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "도착지,도착지코드,도착지명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      if (ed_bilgMchtCd.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주코드"]);
        ed_bilgMchtCd.focus();
        return;
      }
      if (ed_bilgMchtNm.getValue() == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주명"]);
        ed_bilgMchtNm.focus();
        return;
      }
      param = "2,4,,," + "";
      udc_comm.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, ed_comm), pCode, pName, pClose, '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      break;
    case 5:
      udc_copCo.cfCommonPopUp(rtnList => $c.gus.cfSetReturnValue($p, rtnList, ed_copCoCd, ed_copCoNm), pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "협력업체,협력업체코드,협력업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

/**
 * method
 * @name f_chkOpenCommonPopUp
 * @description 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 */
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    await scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업 else
    await scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

/**
 * method
 * @name isShowGrEmpExcelUpload
 * @description 엑셀업로드용 그리드가 보이는가?
 */
scwin.isShowGrEmpExcelUpload = function () {
  return gr_empExcelUpload.getStyle("display") !== "none" ? true : false;
};

/**
 * method
 * @name f_newAddRow
 * @description 행추가시 디폴트값 셋팅
 */
scwin.f_newAddRow = async function () {
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
  if (scwin.isShowGrEmpExcelUpload()) {
    // Grid의 필수 입력 항목에 대해서 Check 한다.
    if (!(await $c.gus.cfValidate($p, [gr_empExcelUpload], null, true))) {
      return;
    }
    let rowObj = ds_emp_GroupExpr.getRowJSON(0);
    let data = {
      "odrKndCd": rowObj.odrKndCd,
      "alloccarBran": rowObj.alloccarBran,
      "copCoClntNo": rowObj.copCoClntNo,
      "copCoClntNm": rowObj.copCoClntNm,
      "ctrtNo": rowObj.ctrtNo,
      "adptDt": rowObj.adptDt,
      "dptDistrictNm": rowObj.dptDistrictNm,
      "arvDistrictNm": rowObj.arvDistrictNm,
      "comm": rowObj.comm,
      "unitCd": rowObj.unitCd,
      "dptDistrictCd": rowObj.dptDistrictCd,
      "arvDistrictCd": rowObj.arvDistrictCd,
      "commCd": rowObj.commCd,
      "expireDt": rowObj.expireDt,
      "trfClsCd": rowObj.trfClsCd,
      "trfAdptNm": rowObj.trfAdptNm,
      "trfAdptCd": rowObj.trfAdptCd,
      "wrkStHh": rowObj.wrkStHh,
      "wrkEndHh": rowObj.wrkEndHh
    };
    const strData = JSON.stringify(data);
    let saveRow = 0;
    for (let i = 0; i < scwin.xkeycnt; i++) {
      saveRow = ds_empSave.insertRow();
      let rowData = JSON.parse(strData);
      rowData.eqKndCd = ds_empSave.getCellData(i, "eqKndCd");
      rowData.eqNrmCd = ds_empSave.getCellData(i, "eqNrmCd");
      rowData.eqNrmNm = ds_empSave.getCellData(i, "eqNrmNm");
      rowData.pchsAmt = rowObj["pchsAmt_" + i];
      ds_empSave.setRowJSON(saveRow, rowData, true);
    }
    gr_empExcelUpload.setFocusedCell(saveRow, "adptDt", true);
    tbx_totalRows.setValue(ds_empSave.getRowCount().toString());
  } else {
    if (!ds_emp_GroupExpr.getRowCount()) {
      return;
    }
    // Grid의 필수 입력 항목에 대해서 Check 한다.
    if (!(await $c.gus.cfValidate($p, [gr_emp], null, true))) {
      return;
    }
    let row = gr_emp.getFocusedRowIndex();
    let rowObj = ds_emp_GroupExpr.getRowJSON(row);
    let data = {
      "odrKndCd": rowObj.odrKndCd,
      "alloccarBran": rowObj.alloccarBran,
      "copCoClntNo": rowObj.copCoClntNo,
      "copCoClntNm": rowObj.copCoClntNm,
      "ctrtNo": rowObj.ctrtNo,
      "adptDt": rowObj.adptDt,
      "dptDistrictNm": rowObj.dptDistrictNm,
      "arvDistrictNm": rowObj.arvDistrictNm,
      "comm": rowObj.comm,
      "unitCd": rowObj.unitCd,
      "dptDistrictCd": rowObj.dptDistrictCd,
      "arvDistrictCd": rowObj.arvDistrictCd,
      "commCd": rowObj.commCd,
      "expireDt": rowObj.expireDt,
      "trfClsCd": rowObj.trfClsCd,
      "trfAdptNm": rowObj.trfAdptNm,
      "trfAdptCd": rowObj.trfAdptCd,
      "wrkStHh": rowObj.wrkStHh,
      "wrkEndHh": rowObj.wrkEndHh
    };
    const strData = JSON.stringify(data);
    let newRow = ds_emp_GroupExpr.insertRow();
    ds_emp_GroupExpr.setCellData(newRow, "odrKndCd", rowObj.odrKndCd);
    ds_emp_GroupExpr.setCellData(newRow, "alloccarBran", rowObj.alloccarBran);
    ds_emp_GroupExpr.setCellData(newRow, "copCoClntNo", rowObj.copCoClntNo);
    ds_emp_GroupExpr.setCellData(newRow, "copCoClntNm", rowObj.copCoClntNm);
    ds_emp_GroupExpr.setCellData(newRow, "ctrtNo", rowObj.ctrtNo);
    ds_emp_GroupExpr.setCellData(newRow, "adptDt", rowObj.adptDt);
    ds_emp_GroupExpr.setCellData(newRow, "dptDistrictNm", rowObj.dptDistrictNm);
    ds_emp_GroupExpr.setCellData(newRow, "arvDistrictNm", rowObj.arvDistrictNm);
    ds_emp_GroupExpr.setCellData(newRow, "comm", rowObj.comm);
    ds_emp_GroupExpr.setCellData(newRow, "unitCd", rowObj.unitCd);
    ds_emp_GroupExpr.setCellData(newRow, "dptDistrictCd", rowObj.dptDistrictCd);
    ds_emp_GroupExpr.setCellData(newRow, "arvDistrictCd", rowObj.arvDistrictCd);
    ds_emp_GroupExpr.setCellData(newRow, "commCd", rowObj.commCd);
    ds_emp_GroupExpr.setCellData(newRow, "expireDt", rowObj.expireDt);
    ds_emp_GroupExpr.setCellData(newRow, "trfClsCd", rowObj.trfClsCd);
    ds_emp_GroupExpr.setCellData(newRow, "trfAdptNm", rowObj.trfAdptNm);
    ds_emp_GroupExpr.setCellData(newRow, "trfAdptCd", rowObj.trfAdptCd);
    ds_emp_GroupExpr.setCellData(newRow, "wrkStHh", rowObj.wrkStHh);
    ds_emp_GroupExpr.setCellData(newRow, "wrkEndHh", rowObj.wrkEndHh);
    ds_emp_GroupExpr.setCellData(newRow, "eqKndCd", rowObj.eqKndCd);
    ds_emp_GroupExpr.setCellData(newRow, "eqNrmCd", rowObj.eqNrmCd);
    ds_emp_GroupExpr.setCellData(newRow, "eqNrmNm", rowObj.eqNrmNm);
    for (let i = 0; i < scwin.xkeycnt; i++) {
      ds_emp_GroupExpr.setCellData(newRow, "pchsAmt_" + i, rowObj["pchsAmt_" + i]);
      let saveRow = ds_empSave.insertRow();
      let rowData = JSON.parse(strData);
      rowData.eqKndCd = ds_empSave.getCellData(i, "eqKndCd");
      rowData.eqNrmCd = ds_empSave.getCellData(i, "eqNrmCd");
      rowData.eqNrmNm = ds_empSave.getCellData(i, "eqNrmNm");
      rowData.pchsAmt = rowObj["pchsAmt_" + i];
      ds_empSave.setRowJSON(saveRow, rowData, true);
    }
    gr_emp.setFocusedCell(newRow, "adptDt", true);
    tbx_totalRows.setValue(ds_emp_GroupExpr.getRowCount().toString());
  }
  scwin.insertYN = "0";
  scwin.editRow = true;
  if (scwin.isShowGrEmpExcelUpload()) {
    gr_empExcelUpload.setReadOnly("grid", false);
  }
};

/**
 * method
 * @name f_cancleRow
 * @description
 */
scwin.f_cancleRow = function () {
  if (scwin.isShowGrEmpExcelUpload()) {
    scwin.undoAll(ds_empSave);
    if (ds_empSave.getRowCount()) {
      gr_empExcelUpload.setFocusedCell(0, gr_empExcelUpload.getFocusedColumnIndex() ?? 0, false);
    }
    tbx_totalRows.setValue(ds_empSave.getRowCount().toString());
  } else {
    //ASIS버그: row하나만 선택해서 취소 해도 ds_empSave에 undoAll을 실행하기 때문에 그리드에 입력한 값이 표시 되더라도 저장시 반영이 안되는경우가 발생함
    scwin.undoMarked(gr_emp, ds_emp_GroupExpr);
    scwin.undoAll(ds_empSave);
    gr_emp.setFocusedCell(0, gr_emp.getFocusedColumnIndex() ?? 0, false);
    let row = gr_emp.getFocusedRowIndex();
    if (row >= 0 && row !== null) {
      scwin.gr_emp_onrowindexchange(row);
    }
    tbx_totalRows.setValue(ds_emp_GroupExpr.getRowCount().toString());
  }
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
  scwin.insertYN = "0";
};

/**
 * method
 * @name f_Update
 * @description
 */
scwin.f_Update = async function () {
  if (!ds_emp_GroupExpr.getRowCount()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
    return;
  }
  gr_emp.setReadOnly("grid", true);
  scwin.editRow = true;
  let row = gr_emp.getFocusedRowIndex();
  if (row >= 0 && row !== null) {
    scwin.gr_emp_onrowindexchange(row);
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableBtn($p, [btn_Upt]);
};

/**
 * method
 * @name f_Reset
 * @description 조회 조건 Reset
 */
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, grp_searchCondition);
  ds_emp2.removeAll();
  ds_emp2.reform();
};

/**
 * method
 * @name f_toExcel
 * @description List 엑셀파일로 저장
 */
scwin.f_toExcel = function () {
  $c.data.downloadGridViewExcel($p, gr_empForExcelDown, {
    fileName: "벌크하불요율_excel.xls",
    sheetName: "벌크하불요율_excel"
  });
};

/**
 * method
 * @name commonCtrt
 * @description
 */
scwin.commonCtrt = function () {
  if (cbx_commonChe.getValue() === "1") {
    let row = ds_emp2.insertRow();
    ds_emp2.setCellData(row, "ctrtNo", '99999999999');
    ds_emp2.setCellData(row, "clntPicNm", '');
    ds_emp2.setCellData(row, "ctrtStDt", '');
    ds_emp2.setCellData(row, "ctrtEndDt", '');
    ds_emp2.setCellData(row, "empNm", '');
    ds_emp2.setCellData(row, "rmk", '');
    ed_copCoCd.setValue("999999");
    lc_ctrtNo.setValue('99999999999');
    lc_ctrtNo.setDisabled(true);
    ed_copCoCd.setDisabled(false);
    ed_copCoNm.setReadOnly(true);
    ed_bilgMchtCd.setDisabled(true);
    ed_bilgMchtNm.setReadOnly(true);
    $c.gus.cfDisableObjects($p, [btn_PopUp1, btn_PopUp2]);
  } else {
    scwin.undoAll(ds_emp2);
    ed_copCoCd.setValue("");
    lc_ctrtNo.setSelectedIndex(0);
    lc_ctrtNo.setDisabled(false);
    ed_copCoCd.setDisabled(false);
    ed_copCoNm.setDisabled(false);
    ed_copCoNm.setReadOnly(false);
    ed_bilgMchtCd.setDisabled(false);
    ed_bilgMchtNm.setReadOnly(false);
    $c.gus.cfEnableObjects($p, [btn_PopUp1, btn_PopUp2]);
  }
};

/**
 * method
 * @name f_sampleDownload
 * @description 201609 엑셀샘플다운로드
 */
scwin.f_sampleDownload = function () {
  let fileName = "sample1.csv";
  let filePath = "ds/op/adjmbd/pchstrfmgnt/sample1.csv";
  $c.gus.cfDownloadFile($p, fileName, filePath);
};

/**
 * method
 * @name f_upload
 * @description Excel등록
 */
scwin.f_upload = async function () {
  await $c.win.alert($p, "uploding할 엑셀파일에 ',' 가 있다면, 잘못된 정보가 올라갈수 있으니, 제거해주시기 바랍니다.");
  ds_TmptranstrfList.removeAll();
  udc_grdTop.uploadGridViewExcel(gr_empReadFile, {
    "startRowIndex": 1
  });
};

/**
 * event
 * @name sbm_saveEmp_submitdone
 * @description
 */
scwin.sbm_saveEmp_submitdone = async function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  await $c.win.alert($p, "성공적으로 처리되었습니다.");
  scwin.sbm_retrieve_submitdone(e);
};

/**
* method
* @name sbm_retrieve_submitdone
* @description
*/
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON?.resultDataSet?.length && e.responseJSON.resultDataSet[0].Code == -1) {
    return;
  }
  let grdObj = $c.util.getObject($p, "gr_emp");
  let colidx = grdObj.getColumnIndex("pchsAmt");
  if (colidx >= 0) {
    grdObj.setColumnVisible("pchsAmt", false);
  }
  grdObj.show("");
  gr_empExcelUpload.hide();
  let oGroupExprArr = scwin.sGroupExpr.split(",");
  let oGroupExprJson = $c.data.getGroupExprJson($p, ds_emp.getAllJSON(), oGroupExprArr[0].split(':'), oGroupExprArr[1], oGroupExprArr[2].split(':'));
  scwin.xkeycnt = oGroupExprJson.nGroupCnt;
  $c.data.applyGridViewGroupExpr($p, ds_emp, grdObj, scwin.sGroupExpr, {});
  grdObj = $c.util.getObject($p, "gr_emp", oGroupExprArr[1]);
  scwin.updateHeaderValue(grdObj, oGroupExprArr[1]);
  if (ds_emp_GroupExpr.getRowCount()) {
    grdObj.setFocusedCell(0, grdObj.getFocusedColumnIndex() ?? 0, false);
  }
  scwin.ds_empCross_ondataload();
  tbx_totalRows.setValue(ds_emp_GroupExpr.getRowCount().toString());
};

/**
 * event
 * @name updateHeaderValue
 * @description
 */
scwin.updateHeaderValue = function (grdObj, colid) {
  for (let idx = 0; idx < scwin.xkeycnt; ++idx) {
    let value = ds_empSave.getCellData(idx, colid);
    grdObj.setHeaderValue("_" + idx, value.substring(3));
  }
};

/**
 * event
 * @name ds_emp_ondataload
 * @description
 */
scwin.ds_emp_ondataload = async function () {
  if (!ds_emp.getRowCount()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]); //await $c.win.alert("조회된 데이터가 없습니다.");
  } else {
    scwin.editRow = false;
  }
};

/**
 * event
 * @name ds_empCross_ondataload
 * @description
 */
scwin.ds_empCross_ondataload = function () {
  if (ds_emp_GroupExpr.getCellData(0, "dptDistrictNm") == "" || ds_emp_GroupExpr.getCellData(0, "arvDistrictNm") == "" || ds_emp_GroupExpr.getCellData(0, "comm") == "" || ds_emp_GroupExpr.getCellData(0, "unitCd") == "") {
    gr_emp.setReadOnly("grid", true);
    $c.gus.cfDisableKey($p);
    $c.gus.cfDisableBtn($p, [btn_Upt]);
    scwin.insertYN = "1";
  } else {
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_Init]);
    scwin.insertYN = "0";
  }
};

/**
 * event
 * @name gr_emp_ontextimageclick
 * @description
 */
scwin.gr_emp_ontextimageclick = async function (row, col) {
  let colid = gr_emp.getColumnID(col);
  let value = ds_emp_GroupExpr.getCellData(row, colid);
  switch (colid) {
    case "dptDistrictNm":
      scwin.setCrosstabCellData(row, "dptDistrictCd", "");
      scwin.setCrosstabCellData(row, "dptDistrictNm", "");
      await scwin.f_openCommPopUpGrid(1, row, 'F', "", value);
      break;
    case "arvDistrictNm":
      scwin.setCrosstabCellData(row, "arvDistrictCd", "");
      scwin.setCrosstabCellData(row, "arvDistrictNm", "");
      await scwin.f_openCommPopUpGrid(2, row, 'F', "", value);
      break;
    case "comm":
      scwin.setCrosstabCellData(row, "commCd", "");
      scwin.setCrosstabCellData(row, "comm", "");
      await scwin.f_openCommPopUpGrid(3, row, 'F', "", value);
      break;
    case "copCoClntNm":
      scwin.setCrosstabCellData(row, "copCoClntNo", "");
      scwin.setCrosstabCellData(row, "copCoClntNm", "");
      await scwin.f_openCommPopUpGrid(4, row, 'F', "", value);
      break;
  }
};

/**
 * event
 * @name gr_emp_onrowindexchange
 * @description
 */
scwin.gr_emp_onrowindexchange = function (row, oldRow) {
  let readonly = true;
  if (ds_emp_GroupExpr.getRowStatus(row) == "D") {
    gr_emp.setReadOnly("row", row, true);
  } else if (ds_emp_GroupExpr.getRowStatus(row) == "C" || scwin.insertYN == "1") {
    gr_emp.setReadOnly("row", row, false);
    readonly = false;
  } else {
    gr_emp.setReadOnly("row", row, true);
    readonly = !scwin.editRow;
  }
  for (let i = 0; i < scwin.xkeycnt; i++) {
    gr_emp.setReadOnly("cell", row, "pchsAmt_" + i, readonly);
  }
};

/**
 * event
 * @name gr_emp_onviewchange
 * @description
 */
scwin.gr_emp_onviewchange = async function (info) {
  let row = info.rowIndex;
  let colid = info.colId;
  let value = info.newValue;
  let olddata = info.oldValue;
  switch (colid) {
    case "dptDistrictNm":
      if (value != "") {
        if (value != olddata) {
          scwin.setCrosstabCellData(row, "dptDistrictCd", "");
          scwin.setCrosstabCellData(row, "dptDistrictNm", "");
          await scwin.f_openCommPopUpGrid(1, row, 'T', "", value);
        }
      } else {
        scwin.setCrosstabCellData(row, "dptDistrictCd", "");
        scwin.setCrosstabCellData(row, "dptDistrictNm", "");
      }
      break;
    case "arvDistrictNm":
      if (value != "") {
        if (value != olddata) {
          scwin.setCrosstabCellData(row, "arvDistrictCd", "");
          scwin.setCrosstabCellData(row, "arvDistrictNm", "");
          await scwin.f_openCommPopUpGrid(2, row, 'T', "", value);
        }
      } else {
        scwin.setCrosstabCellData(row, "arvDistrictCd", "");
        scwin.setCrosstabCellData(row, "arvDistrictNm", "");
      }
      break;
    case "comm":
      if (value != "") {
        if (value != olddata) {
          scwin.setCrosstabCellData(row, "commCd", "");
          scwin.setCrosstabCellData(row, "comm", "");
          await scwin.f_openCommPopUpGrid(3, row, 'T', "", value);
        }
      } else {
        scwin.setCrosstabCellData(row, "commCd", "");
        scwin.setCrosstabCellData(row, "comm", "");
      }
      break;
    case "copCoClntNm":
      if (value != "") {
        if (value != olddata) {
          scwin.setCrosstabCellData(row, "copCoClntNo", "");
          scwin.setCrosstabCellData(row, "copCoClntNm", "");
          let newRow = scwin.xkeycnt * row;
          value = ds_empSave.getCellData(newRow, "copCoClntNm");
          await scwin.f_openCommPopUpGrid(4, row, 'T', "", value);
        }
      } else {
        scwin.setCrosstabCellData(row, "copCoClntNo", "");
        scwin.setCrosstabCellData(row, "copCoClntNm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_emp_onafteredit
 * @description
 */
scwin.gr_emp_onafteredit = function (row, col, value) {
  const colid = gr_emp.getColumnID(col);
  scwin.setCrosstabCellData(row, colid, value, false);
};

/**
* method
* @name gr_emp_onheaderclick
* @description
*/
scwin.gr_emp_onheaderclick = function (headerId) {
  switch (headerId) {
    case "dptDistrictNm_header":
    case "arvDistrictNm_header":
    case "comm_header":
      break;
    default:
      return;
  }
  ds_empSave.clearSort();
  $c.util.setTimeout($p, function () {
    if (ds_emp_GroupExpr.sortStatusArr?.length) {
      let sortIndex = [];
      let sortOrder = [];
      for (let info of ds_emp_GroupExpr.sortStatusArr) {
        sortIndex.push(info.colID);
        sortOrder.push(info.sortOrder.toString());
      }
      let options = {
        "sortIndex": sortIndex.join(" "),
        "sortOrder": sortOrder.join(" ")
      };
      ds_empSave.multisort(options);
    }
  }, {
    delay: 50
  });
};

/**
 * event
 * @name setCrosstabCellData
 * @description
 */
scwin.setCrosstabCellData = function (row, colid, value, update = true) {
  if (colid.substring(0, 7) == "pchsAmt") {
    if (value == "" || isNaN(value)) {
      value = "0";
      ds_emp_GroupExpr.setCellData(row, colid, value);
    }
    if (update) {
      ds_emp_GroupExpr.setCellData(row, colid, value);
    }
    let empRow = parseInt(colid.substring(8)) + scwin.xkeycnt * row;
    ds_empSave.setCellData(empRow, "pchsAmt", value);
  } else {
    if (update) {
      ds_emp_GroupExpr.setCellData(row, colid, value);
    }
    let newRow = scwin.xkeycnt * row;
    for (let idx = 0; idx < scwin.xkeycnt; idx++) {
      ds_empSave.setCellData(newRow + idx, colid, value);
    }
  }
};

/**
 * event
 * @name gr_empExcelUpload_onafteredit
 * @description
 */
scwin.gr_empExcelUpload_onafteredit = function (row, col, value) {
  const colid = gr_empExcelUpload.getColumnID(col);
  if (colid == "pchsAmt") {
    if (value == "" || isNaN(value)) {
      ds_empSave.setCellData(row, colid, "0");
    }
  }
};

/**
 * event
 * @name gr_empExcelUpload_ontextimageclick
 * @description
 */
scwin.gr_empExcelUpload_ontextimageclick = async function (row, col) {
  let colid = gr_empExcelUpload.getColumnID(col);
  let value = ds_empSave.getCellData(row, colid);
  switch (colid) {
    case "dptDistrictNm":
      ds_empSave.setCellData(row, "dptDistrictCd", "");
      ds_empSave.setCellData(row, "dptDistrictNm", "");
      await scwin.f_openCommPopUpGrid(1, row, 'F', "", value, false);
      break;
    case "arvDistrictNm":
      ds_empSave.setCellData(row, "arvDistrictCd", "");
      ds_empSave.setCellData(row, "arvDistrictNm", "");
      await scwin.f_openCommPopUpGrid(2, row, 'F', "", value, false);
      break;
    case "comm":
      ds_empSave.setCellData(row, "commCd", "");
      ds_empSave.setCellData(row, "comm", "");
      await scwin.f_openCommPopUpGrid(3, row, 'F', "", value, false);
      break;
    case "copCoClntNm":
      ds_empSave.setCellData(row, "copCoClntNo", "");
      ds_empSave.setCellData(row, "copCoClntNm", "");
      await scwin.f_openCommPopUpGrid(4, row, 'F', "", value, false);
      break;
  }
};

/**
 * event
 * @name gr_empExcelUpload_onviewchange
 * @description
 */
scwin.gr_empExcelUpload_onviewchange = async function (info) {
  let row = info.rowIndex;
  let colid = info.colId;
  let value = info.newValue;
  let olddata = info.oldValue;
  switch (colid) {
    case "dptDistrictNm":
      if (value != "") {
        if (value != olddata) {
          ds_empSave.setCellData(row, "dptDistrictCd", "");
          ds_empSave.setCellData(row, "dptDistrictNm", "");
          await scwin.f_openCommPopUpGrid(1, row, 'T', "", value, false);
        }
      } else {
        ds_empSave.setCellData(row, "dptDistrictCd", "");
        ds_empSave.setCellData(row, "dptDistrictNm", "");
      }
      break;
    case "arvDistrictNm":
      if (value != "") {
        if (value != olddata) {
          ds_empSave.setCellData(row, "arvDistrictCd", "");
          ds_empSave.setCellData(row, "arvDistrictNm", "");
          await scwin.f_openCommPopUpGrid(2, row, 'T', "", value, false);
        }
      } else {
        ds_empSave.setCellData(row, "arvDistrictCd", "");
        ds_empSave.setCellData(row, "arvDistrictNm", "");
      }
      break;
    case "comm":
      if (value != "") {
        if (value != olddata) {
          ds_empSave.setCellData(row, "commCd", "");
          ds_empSave.setCellData(row, "comm", "");
          await scwin.f_openCommPopUpGrid(3, row, 'T', "", value, false);
        }
      } else {
        ds_empSave.setCellData(row, "commCd", "");
        ds_empSave.setCellData(row, "comm", "");
      }
      break;
    case "copCoClntNm":
      if (value != "") {
        if (value != olddata) {
          ds_empSave.setCellData(row, "copCoClntNo", "");
          ds_empSave.setCellData(row, "copCoClntNm", "");
          await scwin.f_openCommPopUpGrid(4, row, 'T', "", value, false);
        }
      } else {
        ds_empSave.setCellData(row, "copCoClntNo", "");
        ds_empSave.setCellData(row, "copCoClntNm", "");
      }
      break;
  }
};

/**
 * event
 * @name gr_empReadFile_onfilereadend
 * @description
 */
scwin.gr_empReadFile_onfilereadend = async function (value) {
  gr_emp.hide();
  gr_empExcelUpload.show("");
  if (!ds_emp_GroupExpr.getRowCount()) {
    return;
  }
  ds_empSave.removeAll();
  ds_empSave.reform();
  tbx_totalRows.setValue(ds_empSave.getRowCount().toString());
  let tmpString = "";
  let tmpUnitCd = "";
  let row = null;
  let readData = null;
  let param = null;
  let baseData = null;
  let allData = ds_TmptranstrfList.getAllJSON();
  for (let i = 0; i < allData.length; i++) {
    readData = allData[i];
    row = ds_empSave.insertRow();
    ds_empSave.setCellData(row, "odrKndCd", "99");
    ds_empSave.setCellData(row, "alloccarBran", readData.alloccarBran);

    //date의 '/' 없애기
    tmpString = readData.adptDt;
    tmpString = tmpString.replaceAll("/", "");
    ds_empSave.setCellData(row, "adptDt", tmpString);

    //출발지 코드 세팅
    param = "";
    let ctrtNoVal = lc_ctrtNo.getValue() ?? "";
    if (cbx_commonChe.getValue() === "1") {
      param = ",,WDE";
    } else {
      if (ctrtNoVal != "") {
        param = ",," + ctrtNoVal;
      } else {
        ds_empSave.removeAll();
        ds_empSave.reform();
        await $c.win.alert($p, "계약서번호를 선택하세요");
        return;
      }
    }
    if (readData.dptDistrictNm != "") {
      rtnList = await udc_grdDistrict.cfCommonPopUpAsync(null, "", readData.dptDistrictNm, "T", null, null, null, null, param, null, null, null, null, null, null, null, "T");
      if (rtnList == 0) {
        ds_empSave.setCellData(row, "dptDistrictCd", "");
        ds_empSave.setCellData(row, "dptDistrictNm", "");
        // ds_empSave.removeAll();
        // ds_empSave.reform();
        // await $c.gus.cfAlertMsg(MSG_SD_ERR_003, new Array(i, "출발권역"));
        // return;
      } else if (rtnList == null) {
        ds_empSave.setCellData(row, "dptDistrictCd", "N/A");
        ds_empSave.setCellData(row, "dptDistrictNm", "");
      } else {
        ds_empSave.setCellData(row, "dptDistrictCd", rtnList[0]);
        ds_empSave.setCellData(row, "dptDistrictNm", rtnList[1]);
      }
    }
    if (readData.arvDistrictNm != "") {
      rtnList = await udc_grdDistrict.cfCommonPopUpAsync(null, "", readData.arvDistrictNm, "T", null, null, null, null, param, null, null, null, null, null, null, null, "T");
      if (rtnList == 0) {
        ds_empSave.setCellData(row, "arvDistrictCd", "");
        ds_empSave.setCellData(row, "arvDistrictNm", "");
        // ds_empSave.removeAll();
        // ds_empSave.reform();
        // await $c.gus.cfAlertMsg(MSG_SD_ERR_003, new Array(i, "도착권역"));
        // return;
      } else if (rtnList == null) {
        ds_empSave.setCellData(row, "arvDistrictCd", "N/A");
        ds_empSave.setCellData(row, "arvDistrictNm", "");
      } else {
        ds_empSave.setCellData(row, "arvDistrictCd", rtnList[0]);
        ds_empSave.setCellData(row, "arvDistrictNm", rtnList[1]);
      }
    }
    if (readData.comm != "") {
      if (ed_bilgMchtCd.getValue() == "") {
        ds_empSave.removeAll();
        ds_empSave.reform();
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주코드"]);
        ed_bilgMchtCd.focus();
        return;
      }
      if (ed_bilgMchtNm.getValue() == "") {
        ds_empSave.removeAll();
        ds_empSave.reform();
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["화주명"]);
        ed_bilgMchtNm.focus();
        return;
      }
      param = "2,4,,,,";
      rtnList = await udc_grdComm.cfCommonPopUpAsync(null, "", readData.comm, 'T', '3', "품목／품명코드,품목／품명,구분", '120,170,70', '4,5,6,7,8,9,10', param, '440', '500', null, null, null, null, "품목／품명,품목／품명코드,품목／품명");
      if (rtnList == 0 || rtnList == null) {
        ds_empSave.setCellData(row, "commCd", "");
        ds_empSave.setCellData(row, "comm", "");
        // ds_empSave.removeAll();
        // ds_empSave.reform();
        // await $c.gus.cfAlertMsg(MSG_SD_ERR_003, new Array(i, "품명"));
        // return;
      } else if (rtnList == null) {
        ds_empSave.setCellData(row, "commCd", "N/A");
        ds_empSave.setCellData(row, "comm", "");
      } else {
        ds_empSave.setCellData(row, "commCd", rtnList[0]);
        ds_empSave.setCellData(row, "comm", rtnList[1]);
      }
    }

    //unitCd 코드만 남기기
    tmpUnitCd = readData.unitCd;
    for (let j = 0; j <= tmpUnitCd.length; j++) {
      if (tmpUnitCd.charAt(j) == ']') {
        tmpUnitCd = tmpUnitCd.substring(1, j).trim();
      }
    }
    ds_empSave.setCellData(row, "unitCd", tmpUnitCd);
    ds_empSave.setCellData(row, "trfClsCd", "01");
    ds_empSave.setCellData(row, "trfAdptCd", "99");
    ds_empSave.setCellData(row, "wrkStHh", "0000");
    ds_empSave.setCellData(row, "wrkEndHh", "2400");
    ds_empSave.setCellData(row, "ctrtNo", ctrtNoVal); //""

    if (readData.copCoClntNm != "") {
      if (readData.copCoClntNm == "전체") {
        ds_empSave.setCellData(row, "copCoClntNo", "999999");
        ds_empSave.setCellData(row, "copCoClntNm", "전체");
      } else {
        rtnList = await udc_grdCopCo.cfCommonPopUpAsync(null, readData.copCoClntNm, "", "T", null, null, null, null, null, null, null, null, null, null, null, null, "T");
        if (rtnList == 0 || rtnList == null) {
          ds_empSave.setCellData(row, "copCoClntNo", "");
          ds_empSave.setCellData(row, "copCoClntNm", "");
          // ds_empSave.removeAll();
          // ds_empSave.reform();
          // await $c.gus.cfAlertMsg(MSG_SD_ERR_003, new Array(i, "협력업체"));
          // return;
        } else if (rtnList == null) {
          ds_empSave.setCellData(row, "copCoClntNo", "N/A");
          ds_empSave.setCellData(row, "copCoClntNm", "");
        } else {
          ds_empSave.setCellData(row, "copCoClntNo", rtnList[0]);
          ds_empSave.setCellData(row, "copCoClntNm", rtnList[1]);
        }
      }
    }
    ds_empSave.setCellData(row, "expireDt", "99999999");
    ds_empSave.setCellData(row, "eqKndCd", "CT");
    ds_empSave.setCellData(row, "eqKndNm", "카고");
    ds_empSave.setCellData(row, "eqNrmCd", "999"); //"01"
    ds_empSave.setCellData(row, "eqNrmNm", "전체"); //"1TON";
    ds_empSave.setCellData(row, "pchsAmt", readData.allt);
    baseData = ds_empSave.getRowJSON(row);
    for (let idx = 1; idx < 13; ++idx) {
      row = ds_empSave.insertRow();
      ds_empSave.setCellData(row, "odrKndCd", baseData.odrKndCd);
      ds_empSave.setCellData(row, "alloccarBran", baseData.alloccarBran);
      ds_empSave.setCellData(row, "adptDt", baseData.adptDt);
      ds_empSave.setCellData(row, "dptDistrictCd", baseData.dptDistrictCd);
      ds_empSave.setCellData(row, "dptDistrictNm", baseData.dptDistrictNm);
      ds_empSave.setCellData(row, "arvDistrictCd", baseData.arvDistrictCd);
      ds_empSave.setCellData(row, "arvDistrictNm", baseData.arvDistrictNm);
      ds_empSave.setCellData(row, "commCd", baseData.commCd);
      ds_empSave.setCellData(row, "comm", baseData.comm);
      ds_empSave.setCellData(row, "unitCd", baseData.unitCd);
      ds_empSave.setCellData(row, "trfClsCd", baseData.trfClsCd);
      ds_empSave.setCellData(row, "ctrtNo", baseData.ctrtNo);
      ds_empSave.setCellData(row, "copCoClntNo", baseData.copCoClntNo);
      ds_empSave.setCellData(row, "copCoClntNm", baseData.copCoClntNm);
      ds_empSave.setCellData(row, "trfAdptNm", baseData.trfAdptNm);
      ds_empSave.setCellData(row, "trfAdptCd", baseData.trfAdptCd);
      ds_empSave.setCellData(row, "wrkStHh", baseData.wrkStHh);
      ds_empSave.setCellData(row, "wrkEndHh", baseData.wrkEndHh);
      ds_empSave.setCellData(row, "expireDt", "99999999");
      ds_empSave.setCellData(row, "eqKndCd", "CT");
      ds_empSave.setCellData(row, "eqKndNm", "카고");
      switch (idx) {
        case 1:
          ds_empSave.setCellData(row, "eqNrmCd", "01");
          ds_empSave.setCellData(row, "eqNrmNm", "1TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val1 == "" ? "0" : readData.val1);
          break;
        case 2:
          ds_empSave.setCellData(row, "eqNrmCd", "02");
          ds_empSave.setCellData(row, "eqNrmNm", "2.5TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val2 == "" ? "0" : readData.val2);
          break;
        case 3:
          ds_empSave.setCellData(row, "eqNrmCd", "87");
          ds_empSave.setCellData(row, "eqNrmNm", "3.5TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val3 == "" ? "0" : readData.val3);
          break;
        case 4:
          ds_empSave.setCellData(row, "eqNrmCd", "03");
          ds_empSave.setCellData(row, "eqNrmNm", "5TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val4 == "" ? "0" : readData.val4);
          break;
        case 5:
          ds_empSave.setCellData(row, "eqNrmCd", "04");
          ds_empSave.setCellData(row, "eqNrmNm", "8TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val5 == "" ? "0" : readData.val5);
          break;
        case 6:
          ds_empSave.setCellData(row, "eqNrmCd", "05");
          ds_empSave.setCellData(row, "eqNrmNm", "11TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val6 == "" ? "0" : readData.val6);
          break;
        case 7:
          ds_empSave.setCellData(row, "eqNrmCd", "184");
          ds_empSave.setCellData(row, "eqNrmNm", "13TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val7 == "" ? "0" : readData.val7);
          break;
        case 8:
          ds_empSave.setCellData(row, "eqNrmCd", "06");
          ds_empSave.setCellData(row, "eqNrmNm", "15TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val8 == "" ? "0" : readData.val8);
          break;
        case 9:
          ds_empSave.setCellData(row, "eqNrmCd", "07");
          ds_empSave.setCellData(row, "eqNrmNm", "18TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val9 == "" ? "0" : readData.val9);
          break;
        case 10:
          ds_empSave.setCellData(row, "eqNrmCd", "08");
          ds_empSave.setCellData(row, "eqNrmNm", "25TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val10 == "" ? "0" : readData.val10);
          break;
        case 11:
          ds_empSave.setCellData(row, "eqNrmCd", "931");
          ds_empSave.setCellData(row, "eqNrmNm", "1.5TON");
          ds_empSave.setCellData(row, "pchsAmt", readData.val11 == "" ? "0" : readData.val11);
          break;
        case 12:
          ds_empSave.setCellData(row, "eqNrmCd", "193");
          ds_empSave.setCellData(row, "eqNrmNm", "5TON(축)");
          ds_empSave.setCellData(row, "pchsAmt", readData.val12 == "" ? "0" : readData.val12);
          break;
      }
    } //for
  } //for

  gr_empExcelUpload.setReadOnly("grid", true);
  gr_empExcelUpload.setFocusedCell(0, gr_empExcelUpload.getFocusedColumnIndex() ?? 0, false);
  tbx_totalRows.setValue(ds_empSave.getRowCount().toString());
};

/**
 * event
 * @name udc_bilgMcht_onblurCodeEvent
 * @description
 */
scwin.udc_bilgMcht_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_bilgMchtCd, ed_bilgMchtNm, 1);
};

/**
 * event
 * @name udc_bilgMcht_onclickEvent
 * @description
 */
scwin.udc_bilgMcht_onclickEvent = async function (e) {
  await scwin.f_openPopUp(1, ed_bilgMchtCd.getValue(), ed_bilgMchtNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_bilgMcht_onviewchangeNameEvent
 * @description
 */
scwin.udc_bilgMcht_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_bilgMchtNm, ed_bilgMchtCd, 1, false);
};

/**
 * event
 * @name udc_dptDistrict_onblurCodeEvent
 * @description
 */
scwin.udc_dptDistrict_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_dptDistrictCd, ed_dptDistrictNm, 2);
};

/**
 * event
 * @name udc_dptDistrict_onclickEvent
 * @description
 */
scwin.udc_dptDistrict_onclickEvent = async function (e) {
  await scwin.f_openPopUp(2, ed_dptDistrictCd.getValue(), ed_dptDistrictNm.getValue(), 'F', 'T');
};

/**
 * event
 * @name udc_dptDistrict_onviewchangeNameEvent
 * @description
 */
scwin.udc_dptDistrict_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_arvDistrictNm, ed_dptDistrictCd, 2, false);
};

/**
 * event
 * @name udc_arvDistrict_onblurCodeEvent
 * @description
 */
scwin.udc_arvDistrict_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_arvDistrictCd, ed_arvDistrictNm, 3);
};

/**
 * event
 * @name udc_arvDistrict_onclickEvent
 * @description
 */
scwin.udc_arvDistrict_onclickEvent = async function (e) {
  await scwin.f_openPopUp(3, ed_arvDistrictCd.getValue(), ed_arvDistrictNm.getValue(), 'F', 'T');
};

/**
 * event
 * @name udc_arvDistrict_onviewchangeNameEvent
 * @description
 */
scwin.udc_arvDistrict_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_arvDistrictNm, ed_arvDistrictCd, 3, false);
};

/**
 * event
 * @name udc_comm_onblurCodeEvent
 * @description
 */
scwin.udc_comm_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_commCd, ed_comm, 4);
};

/**
 * event
 * @name udc_comm_onclickEvent
 * @description
 */
scwin.udc_comm_onclickEvent = async function (e) {
  await scwin.f_openPopUp(4, ed_commCd.getValue(), ed_comm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_comm_onviewchangeNameEvent
 * @description
 */
scwin.udc_comm_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_comm, ed_commCd, 4, false);
};

/**
 * event
 * @name udc_copCo_onblurCodeEvent
 * @description
 */
scwin.udc_copCo_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(ed_copCoCd, ed_copCoNm, 5);
};

/**
 * event
 * @name udc_copCo_onclickEvent
 * @description
 */
scwin.udc_copCo_onclickEvent = async function (e) {
  await scwin.f_openPopUp(5, ed_copCoCd.getValue(), ed_copCoNm.getValue(), 'F', 'F');
};

/**
 * event
 * @name udc_copCo_onviewchangeNameEvent
 * @description
 */
scwin.udc_copCo_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(ed_copCoNm, ed_copCoCd, 5, false);
};

/**
 * event
 * @name ds_joblevel_ondataload
 * @description
 */
scwin.ds_joblevel_ondataload = function () {
  acb_logisticsBranch.setValue(scwin.sLoUpperLobranCd);
};

/**
 * event
 * @name commonChe_onviewchange
 * @description
 */
scwin.commonChe_onviewchange = function (info) {
  scwin.commonCtrt();
};

/**
 * event
 * @name btn_fieldClear_onclick
 * @description
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_Reset();
};

/**
 * event
 * @name btn_retrieve_onclick
 * @description
 */
scwin.btn_retrieve_onclick = async function (e) {
  await scwin.f_Retrieve();
};

/**
 * event
 * @name gr_emp_exceldown
 * @description
 */
scwin.gr_emp_exceldown = function (e) {
  scwin.f_toExcel();
};

/**
 * event
 * @name btn_Cancel_onclick
 * @description
 */
scwin.btn_Cancel_onclick = function (e) {
  scwin.f_cancleRow();
};

/**
 * event
 * @name btn_rowAdd_onclick
 * @description
 */
scwin.btn_rowAdd_onclick = async function (e) {
  await scwin.f_newAddRow();
};

/**
 * event
 * @name btn_rowDel_onclick
 * @description
 */
scwin.btn_rowDel_onclick = function (e) {
  scwin.f_Delete();
};
/**
 * event
 * @name excel_sample_onclick
 * @description
 */
scwin.excel_sample_onclick = function (e) {
  scwin.f_sampleDownload();
};

/**
 * event
 * @name btn_xls_onclick
 * @description
 */
scwin.btn_xls_onclick = async function (e) {
  await scwin.f_upload();
};

/**
 * event
 * @name btn_Copy_onclick
 * @description
 */
scwin.btn_Copy_onclick = async function (e) {
  await scwin.f_Copy();
};

/**
 * event
 * @name btn_Upt_onclick
 * @description
 */
scwin.btn_Upt_onclick = async function (e) {
  await scwin.f_Update();
};

/**
 * event
 * @name btn_Init_onclick
 * @description
 */
scwin.btn_Init_onclick = function (e) {
  scwin.f_Save();
};

/**
* method
* @name undoMarked
* @description
*/
scwin.undoMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  selected.sort();
  selected.reverse();
  dltObj.setBroadcast(false);
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name undoAll
* @description
*/
scwin.undoAll = function (dltObj) {
  dltObj.setBroadcast(false);
  for (let idx = dltObj.getRowCount() - 1; idx >= 0; --idx) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.undoRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name deleteMarked
* @description
*/
scwin.deleteMarked = function (grdObj, dltObj) {
  let selected = grdObj.getAllFocusedRowIndex();
  selected.sort();
  selected.reverse();
  dltObj.setBroadcast(false);
  for (let idx of selected) {
    if (dltObj.getRowStatus(idx) == "C") {
      dltObj.removeRow(idx);
    } else {
      dltObj.deleteRow(idx);
    }
  }
  dltObj.setBroadcast(true, true);
};

/**
* method
* @name deleteRow
* @description
*/
scwin.deleteRow = function (dltObj, row) {
  if (dltObj.getRowStatus(row) == "C") {
    dltObj.removeRow(row);
  } else {
    dltObj.deleteRow(row);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_logisticsBranch',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_retrieve.branCd',visibleRowNum:'10',sortMethod:'ascending',sortOption:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_joblevel'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgMcht',codeId:'ed_bilgMchtCd',nameId:'ed_bilgMchtNm',hideName:'Y',popupID:'',style:'','ev:onblurCodeEvent':'scwin.udc_bilgMcht_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgMcht_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgMcht_onviewchangeNameEvent',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',validTitle:'화주명',refDataCollection:'dma_retrieve',selectID:'retrieveBilgMchtList',btnId:'btn_PopUp1',codeWidth:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'false',disabled:'false',style:'width: 130px;',allOption:'false',id:'lc_ctrtNo',class:'',direction:'auto',objType:'data',ref:'data:dma_retrieve.ctrtNo',visibleRowNum:'20',displayMode:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_emp2',width:'780px',selectedRowColor:'',label:'clntPicNm',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:100px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width:80px',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width:200px',headerStyle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_commonChe',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'','ev:onviewchange':'scwin.commonChe_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통하불요율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td pr16',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-16'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_dptDistrict',codeId:'ed_dptDistrictCd',nameId:'ed_dptDistrictNm',popupID:'',style:'',hideName:'Y','ev:onblurCodeEvent':'scwin.udc_dptDistrict_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dptDistrict_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dptDistrict_onviewchangeNameEvent',validTitle:'출발지',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_retrieve',code:'dptDistrictCd',selectID:'retrieveDistrictList2'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'~',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_arvDistrict',codeId:'ed_arvDistrictCd',nameId:'ed_arvDistrictNm',hideName:'Y',popupID:'',style:'','ev:onblurCodeEvent':'scwin.udc_arvDistrict_onblurCodeEvent','ev:onclickEvent':'scwin.udc_arvDistrict_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_arvDistrict_onviewchangeNameEvent',validTitle:'도착지',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_retrieve',code:'arvDistrictCd',selectID:'retrieveDistrictList2',codeWidth:'70'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처품명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_comm',codeId:'ed_commCd',nameId:'ed_comm',hideName:'Y',popupID:'',style:'','ev:onblurCodeEvent':'scwin.udc_comm_onblurCodeEvent','ev:onclickEvent':'scwin.udc_comm_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_comm_onviewchangeNameEvent',validTitle:'품명',mandatoryCode:'true',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_retrieve',code:'commCd',selectID:'retrieveCommInfo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_pchsAmt',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_retrieve.pchsAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_copCo',codeId:'ed_copCoCd',nameId:'ed_copCoNm',hideName:'Y',popupID:'',style:'','ev:onblurCodeEvent':'scwin.udc_copCo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_copCo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_copCo_onviewchangeNameEvent',validTitle:'협력업체',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_retrieve',code:'copCo',selectID:'retrieveCoopList',btnId:'btn_PopUp2',codeWidth:'70'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',pickerType:'dynamic',style:'width:100px;',objType:'Data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_eqKndCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',ref:'data:dma_retrieve.eqKndCd',visibleRowNum:'10'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',btnUser:'N',gridUpYn:'Y',gridDownFn:'scwin.gr_emp_exceldown',gridUpUserAuth:'C',gridID:'',gridUpFn:'scwin.btn_xls_onclick',id:'udc_grdTop'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:gridView',A:{'ev:ontextimageclick':'scwin.gr_emp_ontextimageclick',rowStatusWidth:'20',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_emp_GroupExpr','ev:onviewchange':'scwin.gr_emp_onviewchange',style:'',dynamic:'true',id:'gr_emp',visibleRowNum:'15','ev:onafteredit':'scwin.gr_emp_onafteredit',class:'wq_gvw',dataName:'벌크',validFeatures:'ignoreStatus=no',validExp:'adptDt:적용일자:date,dptDistrictNm:출발지:yes,arvDistrictNm:도착지:yes,comm:품명:yes,unitCd:작업단위:yes',focusFlow:'linear',readOnlyTabIgnore:'true','ev:onheaderclick':'scwin.gr_emp_onheaderclick','ev:onrowindexchange':'scwin.gr_emp_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column01',value:'오더종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column02',value:'적용일자',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'dptDistrictNm_header',value:'출발지',class:'txt-red',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'arvDistrictNm_header',value:'도착지',class:'txt-red',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'comm_header',value:'품명/품목',class:'txt-red',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column06',value:'작업단위',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column07',value:'협력업체',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column08',value:'요율적용구간',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column09',value:'적용시간<br/>(From)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column10',value:'적용시간<br/>(To)',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'$xkeyname_$$',value:'',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'odrKndCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeSD113'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',viewType:'default',inputType:'textImage',id:'dptDistrictNm',displayMode:'label',maxByteLength:'50'}},{T:1,N:'w2:column',A:{width:'140',viewType:'default',inputType:'textImage',id:'arvDistrictNm',displayMode:'label',maxByteLength:'50'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',viewType:'default',inputType:'textImage',id:'comm',displayMode:'label',maxByteLength:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'unitCd',displayMode:'value delim label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeLO102'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',viewType:'default',inputType:'textImage',id:'copCoClntNm',displayMode:'label',maxByteLength:'70'}},{T:1,N:'w2:column',A:{ref:'',chooseOption:'',width:'100',inputType:'select',id:'trfAdptCd',allOption:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_trfAdptCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{dataType:'text',width:'100',displayFormat:'##:##',inputType:'text',id:'wrkStHh',displayMode:'label',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{dataType:'text',width:'100',displayFormat:'##:##',inputType:'text',id:'wrkEndHh',displayMode:'label',maxLength:'4',allowChar:'0-9'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'100',inputType:'text',id:'pchsAmt',displayMode:'label',dataType:'float',displayFormat:'#,##0.000',maxLength:'35.3'}}]}]}]},{T:1,N:'w2:gridView',A:{rowStatusWidth:'20',rowStatusVisible:'true',visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_empSave',style:'display:none;',id:'gr_empExcelUpload',visibleRowNum:'15',class:'wq_gvw','ev:onafteredit':'scwin.gr_empExcelUpload_onafteredit','ev:ontextimageclick':'scwin.gr_empExcelUpload_ontextimageclick','ev:onviewchange':'scwin.gr_empExcelUpload_onviewchange',readOnlyTabIgnore:'true',focusFlow:'linear',validExp:'adptDt:적용일자:date,dptDistrictNm:출발지:yes,arvDistrictNm:도착지:yes,comm:품명:yes,unitCd:작업단위:yes',dataName:'벌크',validFeatures:'ignoreStatus=no'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column01',value:'오더종류',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column02',value:'부서',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column03',value:'적용일자',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column04',value:'출발지Code',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column05',value:'출발지',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column06',value:'도착지Code',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column07',value:'도착지',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column08',value:'품명/품목Code',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column09',value:'품명/품목',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column10',value:'작업단위',class:'txt-red',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'Tariff구분',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column12',value:'협력업체code',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'협력업체',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column14',value:'만기',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'종류코드',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column16',value:'종류',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'규격코드',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column18',value:'규격',class:'txt-blue',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'요율',class:'txt-blue',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'odrKndCd',displayMode:'label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeSD113'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'alloccarBran',value:'',displayMode:'label',maxByteLength:'4'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',style:'',id:'dptDistrictCd',value:'',displayMode:'label',maxByteLength:'7'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',viewType:'default',inputType:'textImage',id:'dptDistrictNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',style:'',id:'arvDistrictCd',value:'',displayMode:'label',maxByteLength:'7'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'150',viewType:'default',inputType:'textImage',id:'arvDistrictNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',viewType:'default',inputType:'textImage',style:'',id:'commCd',value:'',displayMode:'label',textAlign:'left',maxByteLength:'8'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',viewType:'default',inputType:'textImage',id:'comm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'unitCd',displayMode:'value delim label',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeLO102'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',style:'',id:'trfClsCd',value:'',displayMode:'label',textAlign:'left',maxByteLength:'2'}},{T:1,N:'w2:column',A:{width:'150',viewType:'default',inputType:'textImage',style:'',id:'copCoClntNo',value:'',displayMode:'label',maxByteLength:'6'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',viewType:'default',inputType:'textImage',id:'copCoClntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',viewType:'default',inputType:'textImage',id:'expireDt',displayMode:'label',maxByteLength:'8'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',id:'eqKndCd',displayMode:'label',textAlign:'left',maxByteLength:'32'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',id:'eqKndNm',displayMode:'label',textAlign:'left',maxByteLength:'300'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',id:'eqNrmCd',displayMode:'label',textAlign:'left',maxByteLength:'6'}},{T:1,N:'w2:column',A:{width:'100',viewType:'default',inputType:'textImage',id:'eqNrmNm',displayMode:'label',textAlign:'left',maxByteLength:'303'}},{T:1,N:'w2:column',A:{textAlign:'right',dataType:'float',width:'100',displayFormat:'#,##0.000',inputType:'text',id:'pchsAmt',displayMode:'label',maxLength:'35.3',readOnly:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn_rowAdd',btnRowDelObj:'btn_rowDel',btnCancelObj:'btn_Cancel',cancelFunction:'scwin.btn_Cancel_onclick',rowAddFunction:'scwin.btn_rowAdd_onclick',rowDelFunction:'scwin.btn_rowDel_onclick',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'excel_sample',label:'저장',style:'',type:'button','ev:onclick':'scwin.excel_sample_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등록양식'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white dsN',id:'btn_xls',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_xls_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Excel등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Copy',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Copy_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Upt',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Upt_onclick',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Init',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Init_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'dsN'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw dsN',dataList:'data:ds_TmptranstrfList',id:'gr_empReadFile',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_empReadFile_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column01',inputType:'text',value:'오더종류',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column02',value:'배차점소',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column03',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column04',inputType:'text',value:'출발지',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column05',inputType:'text',value:'도착지',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column06',inputType:'text',value:'품명/품목',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column07',inputType:'text',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-blue',displayMode:'label',id:'column08',inputType:'text',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column09',inputType:'text',value:'trfClsCd',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',value:'allt',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'1t',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',value:'2.5t',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'3.5t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'5t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'8t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column18',value:'11t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'13t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'15t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'18t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'25t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'1.5t',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'5t(축)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'alloccarBran',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'',textAlign:'left',viewType:'default',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'',textAlign:'left',viewType:'default',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'',textAlign:'left',viewType:'default',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'',textAlign:'left',viewType:'default',width:'100'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',id:'trfClsCd',inputType:'',ref:'',textAlign:'left',width:'100'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_trfAdptCd'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cdNm'}}]}]}]},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'##:##',displayMode:'label',id:'allt',inputType:'text',maxLength:'4',width:'100'}},{T:1,N:'w2:column',A:{dataType:'number',displayFormat:'##:##',displayMode:'label',id:'val1',inputType:'text',maxLength:'4',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'val2',inputType:'text',textAlign:'right',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val6',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val7',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val8',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val9',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val10',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val11',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'val12',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw dsN',dataList:'data:ds_empSave',id:'gr_empForExcelDown',readOnly:'true',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowNumVisible:'true',rowNumWidth:'40',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column01',inputType:'text',value:'배차점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column02',inputType:'text',value:'적용일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column03',inputType:'text',value:'출발지코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column04',inputType:'text',value:'출발지명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column05',inputType:'text',value:'도착지코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column06',inputType:'text',value:'도착지명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column07',inputType:'text',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column08',inputType:'text',value:'품명명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column09',inputType:'text',value:'장비종류코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',value:'장비종류명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'장비규격코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',value:'장비규격명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',value:'요율종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',value:'협력업체코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'협력업체명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',value:'오더종류코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'요율적용구간코드',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',value:'요율적용구간명',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'적용시간 from',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',value:'적용시간 to',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'요율',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',value:'만기일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBran',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'unitCd',inputType:'text',width:'100',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfClsCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfAdptCd',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trfAdptNm',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',dataType:'float',maxLength:'35.3',displayFormat:'#,##0.000',excelCellType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expireDt',inputType:'text',width:'100'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'dsN'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_grdDistrict',codeId:'',nameId:'',popupID:'',style:'',hideName:'Y',validTitle:'출발지',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',selectID:'retrieveDistrictList2'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_grdComm',codeId:'',nameId:'',hideName:'Y',popupID:'',style:'',validTitle:'품명',maxlengthCode:'8',allowCharCode:'a-zA-Z0-9',selectID:'retrieveCommInfo'}},{T:1,N:'w2:udc_comCode',A:{id:'udc_grdCopCo',codeId:'',nameId:'',hideName:'Y',popupID:'',style:'',validTitle:'협력업체',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',selectID:'retrieveCoopList'}}]}]}]}]}]})