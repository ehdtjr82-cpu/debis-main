/*amd /AI/fi_301_02_01p.xml 68029 365d4610baaa383caff8c5cf1433e87fe747a28f538d30f9697ad39ea988dddf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'취득일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'취득일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgFixedAsetNo',name:'최초자산번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrieveClsCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'procDt',name:'처리일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgFixedAsetNo',name:'최초고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용년수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',name:'외화금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispAmt',name:'매각금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'disuseAmt',name:'폐기금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',name:'자본적지출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'address',name:'소재지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempTaxDeductYn',name:'임시투자세액공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'취득면적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'realArea',name:'실면적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pyCnt',name:'평수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'공시지가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ancdLprStdDt',name:'공시지가기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr2',name:'주소2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_aset',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetAcqAcctCd',name:'취득계정',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'svcLife',name:'내용연수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNm',name:'고정자산명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqDt',name:'취득일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgAcqAmt',name:'원취득액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmt',name:'취득가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'환종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqAmtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr1',name:'소재지주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'siteAddr2',name:'소재지주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tempTaxDeductYn',name:'임시투자세액공제여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eachRegYn',name:'개별등록여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'area',name:'취득면적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realArea',name:'실면적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pyCnt',name:'평수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLpr',name:'공시지가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ancdLprStdDt',name:'공시지가기준일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dispAmt',name:'매각금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'capExpdAmt',name:'자본적지출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseAmt',name:'폐기금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tranAmt',name:'이관금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reappraiseAmt',name:'재평가금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprCumAmt',name:'감가상각누계액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookAmt',name:'장부가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqCls',name:'취득구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsStdt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acqClsEnddt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNo',name:'리스거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lsClntNm',name:'리스거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'자산번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_landinfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixedAsetNo',name:'고정자산번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNoSeq',name:'지번순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotNo',name:'지번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'landCat',name:'지목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lotArea',name:'면적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lotAcqAmt',name:'취득가액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'자산유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'자산유형명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'areaMgntYn',name:'면적관리여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetKnd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetKndCd',name:'자산종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetKndNm',name:'자산종류명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssets2CMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_aset',action:'/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_aset","key":"OUT_DS1"},{"id":"ds_landinfo","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_aset","key":"OUT_DS1"},{"id":"ds_landinfo","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_aset_submitdone','ev:submiterror':'scwin.sbm_aset_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ac.fi.fixedaset.ChangeAssetsCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_aset","key":"OUT_DS1"},{"id":"ds_landinfo","key":"OUT_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'scwin.sbm_master_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_asetPattern","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_asetPattern","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_asetPattern_submitdone','ev:submiterror':'scwin.sbm_asetPattern_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_asetKnd',action:'/ac.fi.fixedaset.RetrieveFixedAsetKndListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_asetKnd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_asetKnd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_asetKnd_submitdone','ev:submiterror':'scwin.sbm_asetKnd_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.KOREA_WON = "";
scwin.isInPost = false;
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.isSubCompany = false;
scwin.hid_srchAcctDeptCd = "";
scwin.hid_asetAcctDeptCd = "";
scwin.hid_asetPatternNm = "";
scwin.hid_asetAcqAcctCd = "";
scwin.hid_asetKndCd = "";
scwin.hid_asetKndNm = "";
scwin.hid_zip = "";
scwin.txtCoCd = "";
scwin.txtCoClsCd = "";
scwin.valueObject = null;
scwin.SUBSIDIARY_USER_HOME_CLS_CD = "SA";
scwin.CO_CD_DONGBU = "";
scwin.CO_CLS_CD_DONGBU = "0";
scwin.onpageload = async function () {
  scwin.vCoCd = $c.ses.getCoCd() || "";
  scwin.vCoClsCd = $c.ses.getCoClsCd() || "";
  scwin.vUserHomeClsCd = $c.ses.getUserHomeClsCd() || "";
  scwin.valueObject = $c.data.getParameter($p);
  $c.gus.cfTurnCreateFlag($p, true);
  $c.gus.cfDisableKey($p);
  scwin.f_AsetOnOff(false);
  scwin.f_AreaMgntOnOff(false);
  $c.gus.cfDisableBtn($p, [bUpdate, bSave]);
  $c.gus.cfDisableObjects($p, [ed_srchFixedAsetNo, acb_srchDeprCd, acb_srchAsetPatternCd, ed_srchOrgFixedAsetNo, chk_IncluYn, ed_lsClntNo, txt_lsClntNm, acb_acqCls, ed_acqClsStdt, ed_acqClsEnddt]);
  scwin.f_FieldClear();
  scwin.f_setCompanyInfo();
};
scwin.onUdcCompleted = async function () {
  scwin.f_loadAsetPattern();
  if (scwin.valueObject != null && typeof scwin.valueObject != "undefined") {
    let parent_fixedAsetNo = scwin.valueObject.fixedAsetNo;
    if (parent_fixedAsetNo != null && parent_fixedAsetNo != "") {
      ed_srchFixedAsetNo.setValue(parent_fixedAsetNo);
      scwin.f_Retrieve();
    }
  }
};
scwin.f_loadAsetPattern = async function () {
  await $c.sbm.execute($p, sbm_asetPattern);
};
scwin.sbm_asetPattern_submitdone = async function (e) {
  scwin.f_setAsetPatternCombo();
};
scwin.sbm_asetPattern_submiterror = async function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_setAsetPatternCombo = async function () {
  acb_srchAsetPatternCd.removeAll();
  acb_asetPatternCd.removeAll();
  for (let i = 0; i < ds_asetPattern.getRowCount(); i++) {
    let cd = ds_asetPattern.getCellData(i, "asetPatternCd");
    let nm = ds_asetPattern.getCellData(i, "asetPatternNm");
    acb_srchAsetPatternCd.addItem(nm, cd);
    acb_asetPatternCd.addItem(nm, cd);
  }
};
scwin.dataSetDebug = async function (dataList, isDebug) {
  if (isDebug == true) {
    let str = "[[[[" + dataList.getID() + "]]]]]\n";
    for (let dsRow = 0; dsRow < dataList.getRowCount(); dsRow++) {
      let colInfos = dataList.getColumnIDs();
      for (let dsCol = 0; dsCol < colInfos.length; dsCol++) {
        str += "[" + colInfos[dsCol] + "] " + dataList.getCellData(dsRow, colInfos[dsCol]) + ", ";
      }
      str += "\n\n";
    }
    await $c.win.alert($p, str);
  }
};
scwin.f_FieldClear = async function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_acqDtStDt, ica_acqDtEndDt, chb_areaMgntYn]);
  scwin.f_SetSrchDefault();
};
scwin.f_SetSrchDefault = async function () {
  let curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ica_acqDtStDt.setValue(curDate.substring(0, 6) + "01");
  ica_acqDtEndDt.setValue(curDate);
  ed_srchAcctDeptCd.setValue("00000");
  ica_acqDtStDt.setFocus();
  chk_IncluYn.setValue("Y");
};
scwin.f_setCompanyInfo = async function () {
  if (scwin.vUserHomeClsCd == scwin.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.isSubCompany = true;
  } else {
    scwin.vCoCd = scwin.CO_CD_DONGBU;
    scwin.vCoClsCd = scwin.CO_CLS_CD_DONGBU;
  }
  scwin.txtCoCd = scwin.vCoCd;
  scwin.txtCoClsCd = scwin.vCoClsCd;
  scwin.f_srchDeptPopUp("T");
};
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_RetrieveValidate())) {
    return false;
  }
  if (chk_IncluYn.getValue() != "") {
    ds_search.set("retrieveClsCd", "1");
  } else {
    ds_search.set("retrieveClsCd", "");
  }
  ds_search.set("coCd", scwin.txtCoCd);
  ds_search.set("coClsCd", scwin.txtCoClsCd);
  ds_search.set("acctDeptCd", scwin.hid_srchAcctDeptCd);
  ds_search.set("acctDeptNm", txt_srchAcctDeptNm.getValue());
  ds_search.set("asetPatternCd", acb_srchAsetPatternCd.getValue());
  await $c.sbm.execute($p, sbm_search);
};
scwin.f_RetrieveValidate = async function () {
  let chk1 = await $c.gus.cfValidate($p, [ica_acqDtStDt, ica_acqDtEndDt, ed_srchAcctDeptCd]);
  if (!chk1) {
    return false;
  }
  if (ds_aset.getRowCount() > 0 && ds_aset.getUpdatedIndex().length > 0) {
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_005 + "1");
    if (confirmResult == false) {
      return false;
    }
  }
  if (ds_landinfo.getRowCount() > 0 && ds_landinfo.getUpdatedIndex().length > 0) {
    let confirmResult = await $c.gus.cfConfirmMsg($p, MSG_CM_CRM_005 + "2");
    if (confirmResult == false) {
      return false;
    }
  }
  let chk2 = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chk2) {
    return false;
  }
  let acqDtStDtVal = ica_acqDtStDt.getValue();
  let acqDtEndDtVal = ica_acqDtEndDt.getValue();
  if ($c.gus.cfIsNull($p, acqDtStDtVal) && !$c.gus.cfIsNull($p, acqDtEndDtVal)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtStDt.setFocus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, acqDtStDtVal) && $c.gus.cfIsNull($p, acqDtEndDtVal)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ica_acqDtEndDt.setFocus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, acqDtStDtVal) && !$c.gus.cfIsNull($p, acqDtEndDtVal)) {
    if (!$c.gus.cfValidateValue($p, acqDtEndDtVal, "minDate=" + acqDtStDtVal)) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      ica_acqDtStDt.setFocus();
      return false;
    }
  }
  return true;
};
scwin.f_Save = async function () {
  if (ds_aset.getUpdatedIndex().length == 0 && ds_landinfo.getUpdatedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["자료"]);
  } else {
    if (!(await scwin.f_Validation())) {
      return;
    }
    let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirmResult) {
      scwin.isInPost = true;
      await $c.sbm.execute($p, sbm_master);
      scwin.isInPost = false;
    }
  }
};
scwin.f_Update = async function () {
  scwin.f_AsetOnOff(true);
  let areaMgntChecked = chb_areaMgntYn.getValue() != "";
  scwin.f_AreaMgntOnOff(areaMgntChecked);
  $c.gus.cfEnableObjects($p, [btn_asetHistory, btn_deprHistory]);
  $c.gus.cfDisableBtn($p, [bUpdate]);
  txt_fixedAsetNm.setFocus();
};
scwin.f_Validation = async function () {
  if ((await scwin.f_ValidateAset()) == false) {
    return false;
  }
  if ((await scwin.f_ValidateAreaMgnt()) == false) {
    return false;
  }
  return true;
};
scwin.f_ValidateAset = async function () {
  let chk = await $c.gus.cfValidate($p, [txt_fixedAsetNm]);
  if (!chk) {
    return false;
  }
  return true;
};
scwin.f_ValidateAreaMgnt = async function () {
  if (chb_areaMgntYn.getValue() == "") {
    return true;
  }
  if ($c.gus.cfIsNull($p, ed_zip.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["우편번호"]);
    ed_zip.setFocus();
    return false;
  }
  if ($c.gus.cfIsNull($p, txt_siteAddr1.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["주소"]);
    ed_zip.setFocus();
    return false;
  }
  if ($c.gus.cfIsNull($p, txt_siteAddr2.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["상세주소"]);
    txt_siteAddr2.setFocus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_area.getValue()) || parseInt(ed_area.getValue()) <= 0) {
    await $c.win.alert($p, "면적은 0보다 큰 값이어야 합니다.");
    ed_area.setFocus();
    return false;
  }
  if ($c.gus.cfIsNull($p, ed_pyCnt.getValue()) || parseInt(ed_pyCnt.getValue()) <= 0) {
    await $c.win.alert($p, "평수는 0보다 큰 값이어야 합니다.");
    ed_pyCnt.setFocus();
    return false;
  }
  let chk = await $c.gus.cfValidate($p, [gr_landinfo]);
  if (!chk) {
    return false;
  }
  if (ds_landinfo.getRowCount() < 1) {
    await $c.win.alert($p, "지번_지목 내역을 한 행이상 입력해야 합니다.");
    return false;
  }
  let lotAreaSum = 0;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    lotAreaSum += parseFloat(ds_landinfo.getCellData(i, "lotArea") || 0);
  }
  if (lotAreaSum != parseInt(ed_area.getValue())) {
    await $c.win.alert($p, "면적과 지번면적 합계가 틀립니다.");
    ed_area.setFocus();
    return false;
  }
  let lotAcqAmtSum = 0;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    lotAcqAmtSum += parseFloat(ds_landinfo.getCellData(i, "lotAcqAmt") || 0);
  }
  if (lotAcqAmtSum != parseInt(ed_acqAmt.getValue())) {
    await $c.win.alert($p, "취득가액과  지번취득가액 합계가 틀립니다.");
    ed_acqAmt.setFocus();
    return false;
  }
  return true;
};
scwin.f_Reset = async function () {
  ds_aset.removeAll();
  ds_landinfo.removeAll();
  scwin.hid_asetKndNm = "";
  scwin.hid_asetAcctDeptCd = "";
  scwin.f_AsetOnOff(false);
  scwin.f_ClearLandInfo();
};
scwin.f_CancelLandInfo = async function (fixedAsetNo) {
  let rowCnt = 0;
  if (fixedAsetNo == "") return;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    if (ds_landinfo.getCellData(i, "fixedAsetNo") == fixedAsetNo) {
      rowCnt++;
    }
  }
  if (rowCnt == 0) return;
  while (true) {
    let found = false;
    for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
      if (ds_landinfo.getCellData(i, "fixedAsetNo") == fixedAsetNo) {
        ds_landinfo.undoRow(i);
        rowCnt--;
        found = true;
        break;
      }
    }
    if (rowCnt == 0 || !found) return;
  }
};
scwin.f_FindLandInfo = function (fixedAsetNo) {
  if ($c.gus.cfIsNull($p, fixedAsetNo)) return -1;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    if (ds_landinfo.getCellData(i, "fixedAsetNo") == fixedAsetNo) {
      return i;
    }
  }
  return -1;
};
scwin.f_ClearLandInfo = function () {
  ed_area.setValue("0");
  ed_pyCnt.setValue("0");
  ed_ancdLpr.setValue("0");
  ed_ancdLprStdDt.setValue("");
  ds_landinfo.removeAll();
};
scwin.f_GetAsetPatternRow = function () {
  let selectedCd = acb_srchAsetPatternCd.getValue();
  for (let i = 0; i < ds_asetPattern.getRowCount(); i++) {
    if (ds_asetPattern.getCellData(i, "asetPatternCd") == selectedCd) {
      return i;
    }
  }
  return -1;
};
scwin.f_SrchAsetContent = async function () {
  let row = ds_master.getRowPosition();
  if (row < 0) return;
  let fixedAsetNo = ds_master.getCellData(row, "fixedAsetNo");
  let assetCoCd = ds_master.getCellData(row, "coCd");
  let assetCoClsCd = ds_master.getCellData(row, "coClsCd");
  if (fixedAsetNo != "") {
    if (assetCoClsCd > scwin.CO_CLS_CD_DONGBU) {
      sbm_aset.action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do" + "?fixedAsetNo=" + fixedAsetNo + "&coCd=" + assetCoCd + "&coClsCd=" + assetCoClsCd;
    } else {
      sbm_aset.action = "/ac.fi.fixedaset.RetrieveAssetsContentsCMD.do" + "?fixedAsetNo=" + fixedAsetNo;
    }
    await $c.sbm.execute($p, sbm_aset);
  }
};
scwin.f_AsetOnOff = function (bEnable) {
  if (bEnable) {
    $c.gus.cfEnableObjects($p, [txt_fixedAsetNm, ed_zip, txt_siteAddr2, chb_tempTaxDeductYn, ta_rmk]);
  } else {
    $c.gus.cfDisableObjects($p, [txt_fixedAsetNm, ed_zip, txt_siteAddr2, chb_tempTaxDeductYn, ta_rmk]);
  }
};
scwin.f_AreaMgntOnOff = function (bEnable) {
  if (bEnable) {
    $c.gus.cfEnableObjects($p, [ed_area, ed_pyCnt, ed_ancdLpr, ed_ancdLprStdDt, btn_addLandRow, btn_delLandRow, btn_cancelLandRow, gr_landinfo]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_area, ed_realArea, ed_pyCnt, ed_ancdLpr, ed_ancdLprStdDt, btn_addLandRow, btn_delLandRow, btn_cancelLandRow, gr_landinfo]);
  }
};
scwin.f_SrchAsetKnd = async function (asetKndCd) {
  sbm_asetKnd.action = "/ac.fi.fixedaset.RetrieveFixedAsetKndListCMD.do" + "?asetPatternCd=" + acb_srchAsetPatternCd.getValue() + "&asetKndCd=" + asetKndCd;
  await $c.sbm.execute($p, sbm_asetKnd);
};
scwin.f_GetValue = function (inObj) {
  return inObj.getValue();
};
scwin.f_SetValue = function (inObj, val) {
  inObj.setValue(val);
};
scwin.f_grdHeiht = function (objGrdId, size) {
  let objGrd = $p.getComponentById(objGrdId);
  if (objGrd == null) return;
  let strHeight = objGrd.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    objGrd.style.height = intHeight + "px";
  }
};
scwin.f_PopUp = function (cdObj, nmObj, hidKey, nextObj, sIsEvent, sQueryID, sWhere, sWidth) {
  let param1, param2;
  let bReverse = false;
  param1 = sIsEvent == "T" ? scwin.f_GetValue(cdObj).trim() : "";
  param2 = "";
  bReverse = false;
  let rtnList = $c.gus.cfCommonPopUp($p, sQueryID, param1, param2, sIsEvent, null, null, null, null, sWhere, sWidth, null, null, null);
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return rtnList;
    scwin.f_SetValue(cdObj, rtnList[0]);
    if (typeof hidKey === "string") {
      scwin[hidKey] = bReverse ? rtnList[1] : rtnList[0];
    }
    scwin.f_SetValue(nmObj, rtnList[1]);
    if (nextObj != null) nextObj.setFocus();
  } else {
    scwin.f_SetValue(cdObj, "");
    if (typeof hidKey === "string") {
      scwin[hidKey] = "";
    }
    scwin.f_SetValue(nmObj, "");
    cdObj.setFocus();
  }
  return rtnList;
};
scwin.f_asetDeptPopUp = function (sIsEvent) {
  let param = "";
  if (scwin.txtCoClsCd > scwin.CO_CLS_CD_DONGBU) {
    param = "," + scwin.txtCoCd + "," + scwin.txtCoClsCd;
  }
  scwin.f_PopUp(ed_acqAcctDeptCd, txt_acqAcctDeptNm, "hid_asetAcctDeptCd", ed_zip, sIsEvent, "retrieveAcctDeptCdInfo6", param, "410");
};
scwin.f_srchDeptPopUp = function (sIsEvent) {
  let param = "";
  if (scwin.isSubCompany) {
    param = "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  let rtnList = scwin.f_PopUp(ed_srchAcctDeptCd, txt_srchAcctDeptNm, "hid_srchAcctDeptCd", ed_srchAcctDeptCd, sIsEvent, "retrieveAcctDeptCdInfo6", param, "410");
  txt_srchAcctDeptNm.setFocus();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    scwin.txtCoCd = rtnList[8];
    scwin.txtCoClsCd = rtnList[9];
  }
};
scwin.f_zipPopUp = async function () {
  let popupResult = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", {
    width: 530,
    height: 400,
    modal: true
  });
  if (popupResult != null) {
    ed_zip.setValue(popupResult.zip);
    txt_siteAddr1.setValue(popupResult.addr1);
    txt_siteAddr2.setFocus();
  } else {
    ed_zip.setValue("");
    txt_siteAddr1.setValue("");
    txt_siteAddr2.setValue("");
    ed_zip.setFocus();
  }
};
scwin.f_FindDataRow = function (objDataList, sColumn, tempNo) {
  if ($c.gus.cfIsNull($p, tempNo)) return -1;
  for (let i = 0; i < objDataList.getRowCount(); i++) {
    if (objDataList.getCellData(i, sColumn) == tempNo) {
      return i;
    }
  }
  return -1;
};
scwin.f_UndoDataRow = function (objDataList, sColumn, tempNo) {
  if (objDataList == null || objDataList == "undefined") return;
  if (sColumn == "") return;
  if (tempNo == "") return;
  while (scwin.f_FindDataRow(objDataList, sColumn, tempNo) != -1) {
    objDataList.undoRow(scwin.f_FindDataRow(objDataList, sColumn, tempNo));
  }
};
scwin.f_PopUpAsetHistory = async function () {
  if (ds_master.getRowPosition() < 0) {
    await $c.win.alert($p, "선택된 행이 없습니다.");
    return;
  }
  let row = ds_master.getRowPosition();
  let fixedAsetNo = ds_master.getCellData(row, "fixedAsetNo");
  let fixedAsetNm = ds_master.getCellData(row, "fixedAsetNm");
  let obj = {
    fixedAsetNo: fixedAsetNo,
    fixedAsetNm: fixedAsetNm
  };
  await $c.win.openPopup($p, "/ui/ac/fi/fixedaset/fi_301_02_03p.xml", {
    width: 996,
    height: 590,
    modal: true,
    data: obj
  });
};
scwin.f_PopUpDeprHistory = async function () {
  if (ds_master.getRowPosition() < 0) {
    await $c.win.alert($p, "선택된 행이 없습니다.");
    return;
  }
  let row = ds_master.getRowPosition();
  let fixedAsetNo = ds_master.getCellData(row, "fixedAsetNo");
  let fixedAsetNm = ds_master.getCellData(row, "fixedAsetNm");
  let obj = {
    fixedAsetNo: fixedAsetNo,
    fixedAsetNm: fixedAsetNm
  };
  await $c.win.openPopup($p, "/ui/ac/fi/fixedaset/fi_301_02_04p.xml", {
    width: 996,
    height: 590,
    modal: true,
    data: obj
  });
};
scwin.f_CheckComboData = async function (objCombo, comboTitle) {
  let idx = objCombo.getSelectedIndex();
  let val = objCombo.getValue();
  if (idx == -1 && !$c.gus.cfIsNull($p, val)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, [comboTitle + "코드"]);
    objCombo.setFocus();
  }
};
scwin.f_Debug = async function (caller) {
  let row = ds_aset.getRowPosition();
  let fixedAsetNoVal = row >= 0 ? ds_aset.getCellData(row, "fixedAsetNo") : "";
  let landInfoRow = scwin.f_FindLandInfo(fixedAsetNoVal);
  let landInfoData = "";
  if (ds_landinfo.getRowCount() > 0) {
    landInfoData = "rows=" + ds_landinfo.getRowCount();
  }
  await $c.win.alert($p, caller + "\n" + "ds_aset.getCellData(" + row + ",fixedAsetNo) => " + fixedAsetNoVal + "\n" + "f_FindLandInfo(ds_aset.getCellData(" + row + ",fixedAsetNo) => " + landInfoRow + "\n" + "ds_landinfo Data => " + landInfoData);
};
scwin.f_Excel = async function () {
  if (ds_master.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    let confirmResult = await $c.gus.cfConfirmMsg($p, "Excel로 다운로드 하시겠습니까?");
    if (confirmResult) {
      $c.data.downloadGridViewExcel($p, gr_master, "고정자산조회", "고정자산조회.xls");
    }
  }
};
scwin.f_Excel2 = async function () {
  if (ds_landinfo.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    let confirmResult = await $c.gus.cfConfirmMsg($p, "Excel로 다운로드 하시겠습니까?");
    if (confirmResult) {
      $c.data.downloadGridViewExcel($p, gr_landinfo, "지번지목리스트", "지번지목리스트.xls");
    }
  }
};
scwin.jsEnterKey = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.f_Add = function () {
  ds_landinfo.insertRow();
  let landRow = ds_landinfo.getRowPosition();
  let asetRow = ds_aset.getRowPosition();
  if (asetRow >= 0) {
    ds_landinfo.setCellData(landRow, "fixedAsetNo", ds_aset.getCellData(asetRow, "fixedAsetNo"));
  }
};
scwin.f_Delete = async function () {
  let rowCnt = 0;
  for (let i = 0; i < ds_landinfo.getRowCount(); i++) {
    if (ds_landinfo.getRowStatus(i) == "D") {
      rowCnt++;
    }
  }
  if (ds_landinfo.getRowCount() - rowCnt == 1) {
    await $c.win.alert($p, "마지막 행은 삭제할 수 없습니다.");
    return;
  }
  let curRow = ds_landinfo.getRowPosition();
  if (curRow >= 0) {
    ds_landinfo.removeRow(curRow);
  }
};
scwin.f_Cancel = function () {
  let curRow = ds_landinfo.getRowPosition();
  if (curRow >= 0) {
    ds_landinfo.undoRow(curRow);
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_addLandRow_onclick = function (e) {
  scwin.f_Add();
};
scwin.btn_delLandRow_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_cancelLandRow_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.sbm_search_submitdone = async function (e) {
  let rowCnt = ds_master.getRowCount();
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ds_aset.removeAll();
    ds_landinfo.removeAll();
    $c.gus.cfDisableBtn($p, [bUpdate, bSave]);
  } else {
    scwin.f_AsetOnOff(false);
    scwin.f_AreaMgntOnOff(false);
    $c.gus.cfDisableBtn($p, [bSave]);
    scwin.f_SrchAsetKnd("");
    scwin.f_SrchAsetContent();
  }
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_aset_submitdone = function (e) {
  ds_aset.resetStatus();
  ds_landinfo.resetStatus();
};
scwin.sbm_aset_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_master_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};
scwin.sbm_master_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_asetKnd_submitdone = function (e) {};
scwin.sbm_asetKnd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if ($c.gus.cfCheckCreateFlag($p) == true) return;
  scwin.f_SrchAsetContent();
};
scwin.ed_srchFixedAsetNo_onblur = function (e) {
  if (ed_srchFixedAsetNo.getValue().trim() == "") return;
  ed_srchFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchFixedAsetNo.getValue(), 10));
};
scwin.ed_srchOrgFixedAsetNo_onblur = function (e) {
  if (ed_srchOrgFixedAsetNo.getValue().trim() == "") return;
  ed_srchOrgFixedAsetNo.setValue($c.gus.cfGetLeftPad($p, ed_srchOrgFixedAsetNo.getValue(), 10));
};
scwin.ed_srchAcctDeptCd_onblur = function (e) {
  if ($c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue())) {
    txt_srchAcctDeptNm.setValue("");
    scwin.hid_srchAcctDeptCd = "";
    return;
  }
  if (ed_srchAcctDeptCd.getValue().trim() == scwin.hid_srchAcctDeptCd) return;
  scwin.f_srchDeptPopUp("T");
};
scwin.ed_acqAcctDeptCd_onblur = function (e) {
  if (ed_acqAcctDeptCd.getValue().trim() == "") return;
  if (ed_acqAcctDeptCd.getValue().trim() == scwin.hid_asetAcctDeptCd) return;
  scwin.f_asetDeptPopUp("T");
};
scwin.acb_srchAsetPatternCd_onblur = function (e) {
  scwin.f_CheckComboData(acb_srchAsetPatternCd, "자산유형");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_acqDt',refEdDt:'',edFromId:'ica_acqDtStDt',edToId:'ica_acqDtEndDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_srchAcctDeptCd',validTitle:'',nameId:'txt_srchAcctDeptNm',style:'',id:'udc_srchAcctDept'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'최초자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchOrgFixedAsetNo',style:'width: 150px;',ref:'data:ds_search.orgFixedAsetNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchAsetPatternCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_search.asetPatternCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각진행여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchDeprCd',style:'width: 100px;',submenuSize:'fixed'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_IncluYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매각/폐기/이관포함   '}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_srchFixedAsetNo',style:'width: 150px;',ref:'data:ds_search.fixedAsetNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'자산 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'자산</br>번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgFixedAsetNo',inputType:'text',style:'',value:'최초</br>고정자산번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'자산명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetKndNm',inputType:'text',style:'',value:'자산</br>종류',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'취득</br>가액',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'text',style:'',value:'취득</br>일자',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLife',inputType:'text',style:'',value:'내용</br>년수',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'자산유형',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'고정자산명',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'환종',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'환율',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqAmtFcrc',value:'외화금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dispAmt',value:'매각금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'disuseAmt',value:'폐기금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAmt',value:'이관금액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'capExpdAmt',value:'자본적지출',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'address',value:'소재지',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'tempTaxDeductYn',value:'임시투자세액공제여부',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'비고',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'area',value:'취득면적',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realArea',value:'실면적',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pyCnt',value:'평수',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ancdLpr',value:'공시지가',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'ancdLprStdDt',value:'공시지가기준일',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'orgFixedAsetNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetKndNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'svcLife',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'crcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'exchRt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acqAmtFcrc',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dispAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'disuseAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'tranAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'capExpdAmt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'address',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'select',style:'',id:'tempTaxDeductYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'area',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'realArea',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'pyCnt',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ancdLpr',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'ancdLprStdDt',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column74',value:'',displayMode:'label',expression:'sum(\'acqAmt\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column62',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_asetPatternCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_aset.asetPatternCd',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_asetKndNm',style:'width: 150px;',ref:'data:ds_aset.asetKndNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'고정자산명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_fixedAsetNm',style:'',ref:'data:ds_aset.fixedAsetNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'리스거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_lsClntNo',class:'',ref:'data:ds_aset.lsClntNo'}},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_lsClntNm',class:'',ref:'data:ds_aset.lsClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_acqCls',style:'width: 150px;',submenuSize:'fixed',ref:'data:ds_aset.acqCls',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_acqClsStdt',style:'width: 150px;',ref:'data:ds_aset.acqClsStdt'}},{T:1,N:'xf:input',A:{class:'',id:'ed_acqClsEnddt',style:'width: 150px;',ref:'data:ds_aset.acqClsEnddt'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(금융리스, 할부금융)',ref:'',style:'',userData2:''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_acqDtEndDt',style:'',ref:'data:ds_search.acqDtEndDt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'원취득액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_orgAcqAmt',style:'width: 150px;',ref:'data:ds_aset.orgAcqAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_crcCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_aset.crcCd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_acqAmt',style:'width: 150px;',ref:'data:ds_aset.acqAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_qty',style:'width: 150px;',ref:'data:ds_aset.qty'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_acqAmtFcrc',style:'width: 150px;',ref:'data:ds_aset.acqAmtFcrc'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장부가액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_bookAmt',style:'width: 150px;',ref:'data:ds_aset.bookAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'감가상각누계액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_deprCumAmt',style:'width: 150px;',ref:'data:ds_aset.deprCumAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'내용년수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_svcLife',style:'width: 150px;',ref:'data:ds_aset.svcLife'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회계처리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_postDt',style:'',ref:'data:ds_aset.postDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_acqAcctDeptCd',style:'width: 100px;',ref:'data:ds_aset.acctDeptCd'}},{T:1,N:'xf:input',A:{class:'',id:'txt_acqAcctDeptNm',style:'width: 150px;',ref:'data:ds_aset.acctDeptNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매각금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_dispAmt',style:'width: 150px;',ref:'data:ds_aset.dispAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'폐기금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_disuseAmt',style:'width: 150px;',ref:'data:ds_aset.disuseAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이관금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_tranAmt',style:'width: 150px;',ref:'data:ds_aset.tranAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자본적지출',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_capExpdAmt',style:'width: 150px;',ref:'data:ds_aset.capExpdAmt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'재평가금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_reappraiseAmt',style:'width: 150px;',ref:'data:ds_aset.reappraiseAmt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소재지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_zip',selectID:'',popupID:'',validTitle:'',nameId:'txt_siteAddr1',style:'',id:'udc_zip'}},{T:1,N:'xf:input',A:{style:'width: 100px;',id:'txt_siteAddr2',class:'',ref:'data:ds_aset.siteAddr2'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임시투자세<br/>액공제여부',ref:'',style:'',userData2:'',escape:'false'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_tempTaxDeductYn',ref:'data:ds_aset.tempTaxDeductYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'ta_rmk',style:'',ref:'data:ds_aset.rmk'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득면적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_area',style:'width: 100px;',ref:'data:ds_aset.area'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실면적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_realArea',style:'width: 100px;',ref:'data:ds_aset.realArea'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'평수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_pyCnt',style:'width: 100px;',ref:'data:ds_aset.pyCnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공시지가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_ancdLpr',style:'width: 150px;',ref:'data:ds_aset.ancdLpr'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공시지가기준일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_ancdLprStdDt',style:'',ref:'data:ds_aset.ancdLprStdDt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지번지목리스트 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_landinfo',id:'gr_landinfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'고정자산번호',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotNoSeq',inputType:'text',style:'',value:'지번순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotNo',inputType:'text',style:'',value:'지번',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'landCat',inputType:'text',style:'',value:'지목',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotArea',inputType:'text',style:'',value:'면적',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotAcqAmt',inputType:'text',style:'',value:'취득가액',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotNoSeq',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'landCat',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotArea',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lotAcqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column20',value:'',displayMode:'label',expression:'sum(\'lotArea\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column19',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'lotAcqAmt\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})