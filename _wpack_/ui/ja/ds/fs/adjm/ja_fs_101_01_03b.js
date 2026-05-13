/*amd /ui/ja/ds/fs/adjm/ja_fs_101_01_03b.xml 66167 b9ac14b7dee622d3b7ba4d50ac60ab329b8675475cf6538ea3f60fe45f125000 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseOrderDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiCreatYn',name:'거래명세서생성여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_purchaseOrderDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수출입내수구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'운송화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiCreatYn',name:'거래명세서생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'청구처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_purchaseEvidenceDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'공급금액합계',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vat',name:'부가세합계',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_purchaseEvidenceDTOList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptCd',name:'매입부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDeptNm',name:'매입부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'매입예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_nosellPurchaseDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsUpr',name:'단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'공급금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'totPchsAmt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'거래명세서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsGoodsPatternCd',name:'매입물품유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNo',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommNm',name:'품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCommCd',name:'품명코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'차량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSeq',name:'순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_primeCostCreationConsequence'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_attach',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'attachFileId',name:'첨부파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileNm',name:'첨부파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileDesc',name:'첨부파일설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFileSiz',name:'첨부파일SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attachFilePath',name:'첨부파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salesActivId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'fileUploadGDS'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fileId',name:'파일ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filename',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSize',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filepath',name:'파일경로',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ja.ds.fs.adjm.adjmbdcalc.JaRetrieveNosellOrderPrimeCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_queryConditionDTO","key":"IN_DS1"},{"id":"ds_purchaseOrderDTO","key":"OUT_DS1"},{"id":"ds_purchaseEvidenceDTO","key":"OUT_DS2"},{"id":"ds_nosellPurchaseDTOList","key":"OUT_DS3"},{"id":"ds_attach","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_purchaseOrderDTOList","key":"OUT_DS1"},{"id":"ds_purchaseEvidenceDTOList","key":"OUT_DS2"},{"id":"ds_nosellPurchaseDTOList","key":"OUT_DS3"},{"id":"ds_attach","key":"OUT_DS4"}]','ev:submitdone':'scwin.sbm_queryConditionDTO_submitdone','ev:submiterror':'scwin.sbm_queryConditionDTO_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveNosellOrderPrimeCost',action:'/ja.ds.fs.adjm.adjmbdcalc.JaRegistNosellOrderPrimeCostCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_purchaseOrderDTO","key":"IN_DS1"},{"id":"ds_purchaseEvidenceDTO","key":"IN_DS2"},{"id":"ds_nosellPurchaseDTOList","key":"IN_DS3"},{"id":"ds_primeCostCreationConsequence","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_primeCostCreationConsequence","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_saveNosellOrderPrimeCost_submitdone','ev:submiterror':'scwin.sbm_saveNosellOrderPrimeCost_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_saveFile',action:'/ja.ds.fs.adjm.adjmbdcalc.JaSaveFileNosellOrderPrimeCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"action":"modified", "id":"ds_attach","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_saveFile_submitdone','ev:submiterror':'scwin.sbm_saveFile_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.odrNo = "";
scwin.search = "";
scwin.save = "";
scwin.vLoginCoCd = "";
scwin.vLoginCoClsCd = "";
scwin.vUserHomeClsCd = "";
scwin.vCoCd = "";
scwin.vCoClsCd = "";
scwin.vCurDate = "";
scwin.strCurDate = "";
scwin.empNo = "";
scwin.privAdmin = "";
scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.hd_acctCdGbn = "";
scwin.hd_acctDeptCdGbn = "";
scwin.txt_cvsslMgntNm = "";
scwin.txt_vsslNm = "";
scwin.txt_rmk = "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strCurDate = scwin.vCurDate;
  scwin.empNo = $c.data.getMemInfo($p, "userId");
  scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
  scwin.vLoginCoCd = $c.data.getMemInfo($p, "coCd") ?? "";
  scwin.vLoginCoClsCd = $c.data.getMemInfo($p, "coClsCd") ?? "";
  scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd") ?? "";
  scwin.vCoCd = scwin.vLoginCoCd;
  scwin.vCoClsCd = scwin.vLoginCoClsCd;
  let params = $c.data.getParameter($p);
  if (params != null && params["odrNo"] != null && params["odrNo"] != "") {
    scwin.odrNo = params["odrNo"];
  }
  scwin.f_SetDefaultSearchData();
  scwin.f_SetDefaultMainData();
  await scwin.f_setCompanyInfo();
  await scwin.f_GetSellItemCd();
  scwin.search = "LOAD";
  $c.gus.cfTurnCreateFlag($p, true); // 조회 결과가 없다는 메시지를 표시되지 않게 하기 위함
  scwin.f_RetrieveNosellOrderPrimeCost();
  $c.gus.cfDisableBtnOnly($p, [btn_addRow, btn_deleteRow, btn_Save, btn_Delete]);
  if (scwin.odrNo != "NULL" && scwin.odrNo != "" && scwin.odrNo != "null") {
    ed_odrNo.setValue(scwin.odrNo);
    scwin.f_RetrieveNosellOrderPrimeCost();
  }
};
scwin.f_GetSellItemCd = function () {
  let param = [];
  if (scwin.vCoCd == "028") {
    param = [{
      method: "getGridCombo",
      param1: "JA002",
      param2: 1,
      param3: "028",
      param4: false,
      compID: "gr_nosellPurchaseDTOList:selpchItemCd"
    }];
  } else if (scwin.vCoCd == "029") {
    param = [{
      method: "getGridCombo",
      param1: "JA002",
      param2: 1,
      param3: "029",
      param4: false,
      compID: "gr_nosellPurchaseDTOList:selpchItemCd"
    }];
  } else if (scwin.vCoCd == "024") {
    param = [{
      method: "getGridCombo",
      param1: "JA002",
      param2: 1,
      param3: "024",
      param4: false,
      compID: "gr_nosellPurchaseDTOList:selpchItemCd"
    }];
  }
  if (param.length > 0) {
    $c.data.setGauceUtil($p, param);
  }
};
scwin.f_setCompanyInfo = async function () {
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo("T");
  $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm]);
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  return new Promise(function (resolve) {
    udc_co.cfCommonPopUp(function (rtnList) {
      if (rtnList != null) {
        if (rtnList[0] == "N/A") {
          resolve();
          return;
        }
        if (scwin.ed_coCd_hidVal != rtnList[0]) {
          scwin.f_initObj();
        }
        ed_coCd.setValue(rtnList[0]);
        ed_coNm.setValue(rtnList[5]);
        scwin.ed_coCd_hidVal = rtnList[0];
        scwin.txtCoClsCd = rtnList[1];
      } else {
        ed_coCd.setValue("");
        ed_coNm.setValue("");
        scwin.ed_coCd_hidVal = "";
        scwin.txtCoClsCd = "";
      }
      if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        scwin.isSubCompany = true;
      } else {
        scwin.isSubCompany = false;
      }
      resolve();
    }, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  });
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]);
  $c.gus.cfInitObjects($p, [ed_bilgClntNo, ed_bilgClntNm]);
};
scwin.f_deptPopUp = function (deptCd, deptNm, gbn) {
  let param = scwin.strCurDate;
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }

  // 빈값이 아닐때는 아래의 조건으로 팝업실행
  if (deptCd.getValue() != "" || deptNm.getValue() != "") {
    param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
  }
  let paramArray = {};
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = deptCd;
  paramArray.pName = deptNm;
  paramArray.pWhere = param;
  paramArray.gbn = gbn;
  let rtnList = scwin.f_PopUp2(paramArray);
};
scwin.f_PopUp2 = function (paramArray) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  udc_pchsDept.setSelectId(paramArray.pSelectID);
  if (paramArray.gbn == 1) {
    udc_pchsDept.cfCommonPopUp(function (rtnList) {
      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          $c.gus.cfSetValue($p, codeObj, rtnList[0]);
          if (codeObj.hidVal !== undefined) {
            codeObj.hidVal = rtnList[0];
          }
          $c.gus.cfSetValue($p, nameObj, rtnList[1]);
        }
      } else {
        $c.gus.cfSetValue($p, codeObj, "");
        if (codeObj.hidVal !== undefined) {
          codeObj.hidVal = "";
        }
        $c.gus.cfSetValue($p, nameObj, "");
      }
    }, $c.gus.cfGetValue($p, codeObj), "", scwin.f_EventCheck(), null, null, null, null, paramArray.pWhere, null, null, null, null, null, null, null);
  } else {
    udc_bilgLodept.setSelectId(paramArray.pSelectID);
    udc_bilgLodept.cfCommonPopUp(function (rtnList) {
      if (rtnList != null) {
        if (rtnList[0] != "N/A") {
          $c.gus.cfSetValue($p, codeObj, rtnList[0]);
          if (codeObj.hidVal !== undefined) {
            codeObj.hidVal = rtnList[0];
          }
          $c.gus.cfSetValue($p, nameObj, rtnList[1]);
        }
      } else {
        $c.gus.cfSetValue($p, codeObj, "");
        if (codeObj.hidVal !== undefined) {
          codeObj.hidVal = "";
        }
        $c.gus.cfSetValue($p, nameObj, "");
      }
    }, $c.gus.cfGetValue($p, codeObj), "", scwin.f_EventCheck(), paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  }
};
scwin.f_EventCheck = function () {
  return "F";
};
scwin.f_SetDefaultSearchData = function () {
  ed_odrNo.focus();
};
scwin.f_SetDefaultMainData = function () {
  ed_bilgLodeptCd.setValue($c.data.getMemInfo($p, "lobranCd") ?? "");
  ed_bilgLodeptNm.setValue($c.data.getMemInfo($p, "lobranNm") ?? "");
  ed_spplyDt.setValue(scwin.vCurDate);
  //rd_impExpDomesticClsCd.setValue("I");
  //rd_transCargoClsCd.setValue("C");
  rd_certiCreatYn.setValue("1");
  //$c.gus.cfSetIMEModeActiveObjects([ed_bilgLodeptNm, txt_lineNm, txt_summary, ed_pchsClntNm, ed_pchsDeptNm, txt_rmk, ed_bilgClntNm]);  // IME 한글입력
};
scwin.udc_fielUpload_onFileUploadDone = function (isSuccess) {
  if (!isSuccess) {
    return;
  }
  ;
  let data = udc_fielUpload.getData();
  ds_attach.sort("fileId", 0);
  for (let i = 0; i < data.length; i++) {
    let lastRow = ds_attach.insertRow();
    if (lastRow > 0) {
      let prevId = ds_attach.getCellData(lastRow - 1, "attachFileId");
      let fltNxtSeq = parseFloat(prevId) + 1;
      let strNxtSeq = "000" + fltNxtSeq;
      strNxtSeq = strNxtSeq.substr(strNxtSeq.length - 4, strNxtSeq.length);
      ds_attach.setCellData(lastRow, "attachFileId", strNxtSeq);
    } else {
      ds_attach.setCellData(lastRow, "attachFileId", "0001");
    }
    ds_attach.setCellData(lastRow, "attachFileNm", data[i].ORIGIN_FILE_NM);
    ds_attach.setCellData(lastRow, "attachFileDesc", data[i].ORIGIN_FILE_NM);
    ds_attach.setCellData(lastRow, "attachFileSiz", data[i].FILE_SIZE);
    ds_attach.setCellData(lastRow, "salesActivId", ed_odrNo.getValue());
    ds_attach.setCellData(lastRow, "attachFilePath", data[i].FILE_STORED_PATH + data[i].STORED_FILE_NM);
    ds_attach.setCellData(lastRow, "odrNo", ed_odrNo.getValue());
    ds_attach.setCellData(lastRow, "coCd", ed_coCd.getValue());
  }
  gr_attachFile.setFocusedCell(ds_attach.getRowCount() - 1, "attachFileNm", false);
  udc_fielUpload.setGridClear();
};
scwin.f_RetrieveNosellOrderPrimeCost = async function () {
  if (scwin.search == "SEARCH") {
    let chk = await $c.gus.cfValidate($p, [ed_odrNo], null, true);
    if (!chk) {
      return;
    }
  }
  scwin.search = "SEARCH";
  ds_queryConditionDTO.set("odrNo", ed_odrNo.getValue());
  ds_queryConditionDTO.set("coCd", ed_coCd.getValue());
  await $c.sbm.execute($p, sbm_queryConditionDTO);
};
scwin.f_AddRow = function () {
  let curPos = ds_nosellPurchaseDTOList.insertRow();
  totalRows.setValue(ds_nosellPurchaseDTOList.getRowCount());
  ds_nosellPurchaseDTOList.setCellData(curPos, "coCd", ed_coCd.getValue());
  if (curPos > 0) {
    ds_nosellPurchaseDTOList.setCellData(curPos, "selpchItemCd", ds_nosellPurchaseDTOList.getCellData(curPos - 1, "selpchItemCd"));
  }
  ds_nosellPurchaseDTOList.setCellData(curPos, "vol", 1);
  ds_nosellPurchaseDTOList.setCellData(curPos, "rsltsStdDt", ed_spplyDt.getValue());
  gr_nosellPurchaseDTOList.setFocusedCell(curPos, 0, false);
};
scwin.f_DeleteRow = function () {
  var rowIndex = ds_nosellPurchaseDTOList.getRowPosition();
  if ("C" == ds_nosellPurchaseDTOList.getRowStatus(rowIndex)) {
    ds_nosellPurchaseDTOList.removeRow(rowIndex);
  } else {
    ds_nosellPurchaseDTOList.deleteRow(rowIndex);
  }
  totalRows.setValue(ds_nosellPurchaseDTOList.getRowCount());
};
scwin.f_CancelRow = function () {
  var rowIndex = ds_nosellPurchaseDTOList.getRowPosition();
  if ("C" == ds_nosellPurchaseDTOList.getRowStatus(rowIndex)) {
    ds_nosellPurchaseDTOList.removeRow(rowIndex);
  } else {
    ds_nosellPurchaseDTOList.undoRow(rowIndex);
  }
  totalRows.setValue(ds_nosellPurchaseDTOList.getRowCount());
};
scwin.f_Create = function () {
  $c.gus.cfInitObjects($p, tb_searchData);
  $c.gus.cfInitObjects($p, tb_mainData1);
  $c.gus.cfInitObjects($p, tb_mainData2);
  lay_odrNo.setValue("");
  lay_certiNo.setValue("");
  ds_purchaseOrderDTO.setEmptyValue();
  ds_purchaseEvidenceDTO.setEmptyValue();
  ds_purchaseOrderDTOList.removeAll();
  ds_purchaseEvidenceDTOList.removeAll();
  ds_nosellPurchaseDTOList.removeAll();
  totalRows.setValue(0);
  scwin.f_SetDefaultMainData();
  $c.gus.cfEnableObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm, btn_bilgLodept, ed_pchsClntNo, ed_pchsClntNm, btn_pchsClnt, ed_pchsDeptCd, ed_pchsDeptNm, btn_pchsDept, ed_spplyDt, txt_summary, rd_certiCreatYn, ed_bilgClntNo, ed_bilgClntNm]);
  $c.gus.cfEnableBtnOnly($p, [btn_addRow, btn_deleteRow, btn_Save]);
  $c.gus.cfDisableBtnOnly($p, [btn_Delete]);
  gr_nosellPurchaseDTOList.setReadOnly("grid", false);
  scwin.save = "";
  ds_attach.removeAll();
  scwin.f_setCompanyInfo();
};
scwin.f_RegistNosellOrderPrimeCost = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_bilgClntNo, ed_pchsClntNo, ed_pchsDeptCd, ed_spplyDt], null, true);
  if (!chk) {
    return;
  }
  if (ds_nosellPurchaseDTOList.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["매입 내역"]);
    return;
  }
  let chk2 = await $c.gus.cfValidate($p, [gr_nosellPurchaseDTOList], null, true);
  if (!chk2) {
    return;
  }
  for (let i = 0; i < ds_nosellPurchaseDTOList.getRowCount(); i++) {
    let rsltsStdDt = ds_nosellPurchaseDTOList.getCellData(i, "rsltsStdDt");
    if (!scwin.f_DateFormat(rsltsStdDt, "YYYYMMDD")) {
      await $c.gus.cfAlertMsg($p, i + 1 + "번째 데이타에서 실적일자는 'YYYYMMDD' 형식이어야 합니다.");
      return;
    }
  }
  let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirmResult) {
    scwin.save = "REGIST";
    ds_purchaseEvidenceDTO.set("dcsnClsCd", "2");
    ds_purchaseOrderDTO.set("coCd", ed_coCd.getValue());
    ds_purchaseEvidenceDTO.set("coCd", ed_coCd.getValue());
    sbm_saveNosellOrderPrimeCost.action = "/ja.ds.fs.adjm.adjmbdcalc.JaRegistNosellOrderPrimeCostCMD.do";
    await $c.sbm.execute($p, sbm_saveNosellOrderPrimeCost);
  }
};
scwin.dataSetDebug = function (dataList, isDebug) {
  if (isDebug == true) {
    let str = "[[[[" + dataList.id + "]]]]]\n";
    for (let dsRow = 0; dsRow < dataList.getRowCount(); dsRow++) {
      let colCount = dataList.getColumnCount();
      for (let dsCol = 0; dsCol < colCount; dsCol++) {
        let colId = dataList.getColumnID(dsCol);
        str += "[" + colId + "] " + dataList.getCellData(dsRow, colId) + ", ";
      }
      str += "\n\n";
    }
    alert(str);
  }
};
scwin.f_Delete = async function () {
  if (ds_nosellPurchaseDTOList.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "삭제할 목록이 존재하지 않습니다.");
    return;
  }
  let dcsnClsCd = ds_purchaseEvidenceDTO.get("dcsnClsCd");
  let dcsnClsNm = ds_purchaseEvidenceDTO.get("dcsnClsNm");
  if (dcsnClsCd == "1" || dcsnClsCd == "2" || dcsnClsCd == "" || dcsnClsCd == null) {
    let confirmResult = await $c.win.confirm($p, "삭제하시겠습니까?");
    if (confirmResult) {
      scwin.save = "DELETE";
      sbm_saveNosellOrderPrimeCost.action = "/ja.ds.fs.adjm.adjmbdcalc.JaDeleteNosellOrderPrimeCostCMD.do";
      await $c.sbm.execute($p, sbm_saveNosellOrderPrimeCost);
    }
  } else {
    await $c.gus.cfAlertMsg($p, "확정구분이 미확인, 확인인 경우만 삭제가능합니다.");
    return;
  }
};
scwin.f_account = async function () {
  let args = [];
  let curPos = ds_nosellPurchaseDTOList.getRowPosition();
  if (curPos >= 0) {
    args[0] = ds_nosellPurchaseDTOList.getCellData(curPos, "selpchItemCd");
  }
  if (curPos < 0 || ds_nosellPurchaseDTOList.getCellData(curPos, "selpchItemCd") == null) {
    let confirmResult = await $c.win.confirm($p, "전체조회를 하겠습니까?");
    if (!confirmResult) {
      return;
    }
  }
  await $c.win.openPopup($p, "/ui/ds/fs/adjm/fs_101_01_03p.xml", {
    width: 715,
    height: 320,
    modal: true,
    data: args
  });
};
scwin.f_Popup = function (disGubun) {
  let rtnList = [];
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      // 품명코드 팝업 - 원본 주석처리됨
      break;
    case 2:
      // 장비코드 팝업 - 원본 주석처리됨
      break;
    case 3:
      // 작업도구코드 팝업 - 원본 주석처리됨
      break;
    case 4:
      // 차량코드 팝업 - 원본 주석처리됨
      break;
    default:
      break;
  }
};
scwin.f_RunExcel = async function () {
  let count = ds_nosellPurchaseDTOList.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    // 화면에 보이는 그리드 컬럼 개수 세기 (상단 타이틀 병합용)
    let gridColCount = 0;
    for (let i = 0; i < gr_nosellPurchaseDTOList.getTotalCol(); i++) {
      if (gr_nosellPurchaseDTOList.getColumnVisible(i) == true) {
        gridColCount++;
      }
    }
    let infoArr = [
    // ② 메인 타이틀 (가운데 정렬, 12pt)
    {
      rowIndex: 0,
      colIndex: 0,
      colSpan: gridColCount,
      rowSpan: 1,
      text: "무매출오더원가생성 매입내역",
      textAlign: "center",
      fontSize: 12,
      drawBorder: false,
      color: "black",
      backgroundColor: "#ffffff",
      fontFace: "돋움체",
      lineColor: "white",
      lineWidth: 0
    },
    // ③ 타이틀 아래 여백 (AS-IS의 첫 번째 skiprow:1 역할)
    {
      rowIndex: 1,
      colIndex: 0,
      colSpan: gridColCount,
      rowSpan: 1,
      text: "",
      drawBorder: false
    }];
    const options = {
      fileName: "무매출오더원가생성 매입내역.xlsx",
      sheetName: "무매출오더원가생성 매입내역",
      startRowIndex: 2
    };
    $c.data.downloadGridViewExcel($p, gr_nosellPurchaseDTOList, options, infoArr);
  }
};
scwin.f_openOdrNoPopUp = async function () {
  let args = [];
  args[0] = "";
  let rtnValues = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_26p.xml", {
    width: 820,
    height: 510,
    modal: true,
    data: args
  });
  if (rtnValues != null) {
    ed_odrNo.setValue(rtnValues[0]);
  }
};
scwin.f_openPopUp = function (flag, check) {
  let qryYear = scwin.vCurDate.substring(0, 4);
  let rtnList = [];
  switch (flag) {
    case '3':
      let param3 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_bilgLodept.setSelectId("retrieveAcctDeptCdInfo10");
      udc_bilgLodept.cfCommonPopUp(scwin.callbackAcctDeptCdInfo, ed_bilgLodeptCd.getValue().trim(), ed_bilgLodeptNm.getValue(), check, null, null, null, null, param3, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case '4':
      let param4 = ",,," + ed_coCd.getValue();
      udc_bilgClnt.cfCommonPopUp(scwin.callbackClntList, ed_bilgClntNo.getValue().trim(), ed_bilgClntNm.getValue(), check, null, null, null, null, param4, null, null, null, null);
      break;
    case '5':
      let param5 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_bilgLodept.cfCommonPopUp(scwin.callbackAcctDeptCdInfo, ed_bilgLodeptCd.getValue().trim(), ed_bilgLodeptNm.getValue(), check, null, null, null, null, param5, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case '6':
      let param6 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_pchsDept.setSelectId("retrieveAcctDeptCdInfo10");
      udc_pchsDept.cfCommonPopUp(scwin.callbackPchsDeptInfo, ed_pchsDeptCd.getValue().trim(), ed_pchsDeptNm.getValue(), check, null, null, null, null, param6, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case '7':
      let param7 = ",,," + ed_coCd.getValue();
      udc_pchsClnt.cfCommonPopUp(scwin.callbackPchsClntList, ed_pchsClntNo.getValue().trim(), ed_pchsClntNm.getValue(), check, null, null, null, null, param7, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.callbackAcctDeptCdInfo = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_bilgLodeptCd, ed_bilgLodeptNm, rtnList);
  }
};
scwin.callbackClntList = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_bilgClntNo, ed_bilgClntNm, rtnList);
  }
};
scwin.callbackPchsDeptInfo = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_pchsDeptCd, ed_pchsDeptNm, rtnList);
  }
};
scwin.callbackPchsClntList = function (rtnList) {
  if (rtnList != null && rtnList[0].trim() != "N/A") {
    scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
  }
};
scwin.f_openPopUpByCvsslMgmtNo = async function () {
  let arrParam = [];
  let impExpClsCd = rd_impExpDomesticClsCd.getValue();
  arrParam[0] = scwin.ed_cvsslMgntNo_val ? scwin.ed_cvsslMgntNo_val.trim() : "";
  arrParam[1] = impExpClsCd;
  let confirmResult = await $c.win.confirm($p, "본번 수정시 모선/항차도 일괄 수정됩니다. 수정하시겠습니까?");
  if (confirmResult) {
    let returnVal = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", {
      width: 900,
      height: 400,
      modal: true,
      data: arrParam,
      paramTitle: "본선관리번호검색팝업"
    });
    if (returnVal != null) {
      scwin.ed_cvsslMgntNo_val = returnVal[0];
      scwin.ed_cvsslMgntNo_hidVal = returnVal[0];
      scwin.ed_vsslCd_val = returnVal[1];
      scwin.ed_portcnt_val = returnVal[11];
    } else {
      scwin.ed_cvsslMgntNo_val = "";
      scwin.ed_vsslCd_val = "";
      scwin.ed_portcnt_val = "";
      scwin.ed_cvsslMgntNo_hidVal = "";
    }
  }
};
scwin.f_DateFormat = function (date, dateFormat) {
  if (date == null) date = "";
  date = date.trim();
  if (dateFormat == null) {
    dateFormat = "YYYYMMDD";
  }
  if (dateFormat == "YYYYMMDD") {
    if (date.length != 8) return false;
    let year = parseInt(date.substring(0, 4), 10);
    let month = parseInt(date.substring(4, 6), 10);
    let day = parseInt(date.substring(6, 8), 10);
    if (isNaN(year) || isNaN(month) || isNaN(day)) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    return true;
  }
  return true;
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = [];
  let clntNo = ed_bilgClntNo.getValue();
  let qryYear = scwin.vCurDate.substring(0, 4);
  switch (disGubun) {
    case 1:
      udc_comCode.setSelectId("retrieveLineInfo");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0].trim() != "N/A") {
          $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
        }
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      let arrParam2 = [];
      let impExpClsCd2 = "";
      arrParam2[0] = scwin.ed_cvsslMgntNo_val ? scwin.ed_cvsslMgntNo_val.trim() : "";
      arrParam2[1] = impExpClsCd2;
      let rtnVal2 = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11p.xml", {
        width: 600,
        height: 590,
        modal: true,
        data: arrParam2
      });
      $c.gus.cfSetReturnValue($p, rtnVal2, scwin.ed_cvsslMgntNo_val, scwin.ed_vsslCd_val);
      break;
    case 3:
      udc_comCode.setSelectId("retrieveVsslCdInfo");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0].trim() != "N/A") {
          $c.gus.cfSetReturnValue($p, rtnList, scwin.ed_vsslCd_val, scwin.txt_vsslNm);
        }
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 4:
      let param4 = ",,," + ed_coCd.getValue();
      udc_comCode.setSelectId("retrieveClntList2");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        scwin.f_resultPopEd(ed_pchsClntNo, ed_pchsClntNm, rtnList);
      }, ed_pchsClntNo.getValue().trim(), ed_pchsClntNm.getValue(), 'T', null, null, null, null, param4, null, null, null, null);
      break;
    case 5:
      let param5 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_comCode.setSelectId("retrieveAcctDeptCdInfo6");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        scwin.f_resultPopEd(ed_pchsDeptCd, ed_pchsDeptNm, rtnList);
      }, pCode.trim(), pName, 'T', null, null, null, null, param5, null, null, null, null, null, null, null, null, null, qryYear);
      break;
    case 6:
      let param6 = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";
      udc_comCode.setSelectId("retrieveAcctDeptCdInfo6");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        scwin.f_resultPopEd(ed_bilgLodeptCd, ed_bilgLodeptNm, rtnList);
      }, pCode.trim(), pName, pClose, null, null, null, null, param6, null, null, null, null, null, pAllSearch, null, null, null, qryYear);
      break;
    case 7:
      let param7 = ",,," + ed_coCd.getValue();
      udc_comCode.setSelectId("retrieveClntList2");
      udc_comCode.cfCommonPopUp(function (rtnList) {
        scwin.f_resultPopEd(ed_bilgClntNo, ed_bilgClntNm, rtnList);
      }, ed_bilgClntNo.getValue().trim(), ed_bilgClntNm.getValue(), 'T', null, null, null, null, param7, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return;
    }
    strCd.setValue(rtnList[0]);
    strNm.setValue(rtnList[1]);
    if (strCd.hidVal !== undefined) {
      strCd.hidVal = rtnList[0];
    }
  } else {
    strCd.setValue("");
    strNm.setValue("");
    if (strCd.hidVal !== undefined) {
      strCd.hidVal = "";
    }
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, [ed_odrNo]);
  scwin.f_SetDefaultSearchData();
};

//-------------------------------------------------------------------------
// function name : f_delrowFile
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delrowFile = function () {
  let nowRow = ds_attach.getRowPosition();
  let sts = ds_attach.getRowStatus(gr_attachFile.getFocusedRowIndex());
  if (ds_attach.getRowCount() == 0) {
    $c.win.alert($p, "삭제할 데이타가 없습니다");
  } else {
    if (nowRow != null) {
      if (sts == "C") {
        ds_attach.removeRow(nowRow);
        gr_attachFile.setFocusedCell(nowRow - 1, 0, false);
      } else if (sts == "D") {
        //아무동작 하지 않음
      } else {
        ds_attach.deleteRow(nowRow);
        gr_attachFile.setFocusedCell(nowRow, 0, false);
        //gr_attachFile.setRowDisabled(nowRow, true);
      }
    }
  }
};
scwin.f_cancelRowFile = function () {
  let nowRow = ds_attach.getRowPosition();
  let sts = ds_attach.getRowStatus(gr_attachFile.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_attach.removeRow(nowRow);
      gr_attachFile.setFocusedCell(nowRow - 1, 0, false);
    } else {
      ds_attach.undoRow(nowRow);
    }
  }
};
scwin.f_saveFile = async function () {
  if (ds_attach.getRowCount() == 0) {
    await $c.win.alert($p, "오더번호가 없습니다. 조회후 저장해 주세요");
    return false;
  }
  for (let i = 0; i < ds_attach.getRowCount(); i++) {
    if (ds_attach.getCellData(i, "odrNo") == "") {
      await $c.win.alert($p, "오더번호가 없습니다. 조회후 저장해 주세요");
      return false;
    }
  }
  let confirmResult = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (confirmResult) {
    await $c.sbm.execute($p, sbm_saveFile);
  }
};
scwin.gr_nosellPurchaseDTOList_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = ds_nosellPurchaseDTOList.getColumnID(columnIndex);
  if (columnId == "vol" || columnId == "pchsUpr" || columnId == "pchsAmt" || columnId == "vat") {
    let vol = parseFloat(ds_nosellPurchaseDTOList.getCellData(rowIndex, "vol")) || 0;
    let pchsUpr = parseFloat(ds_nosellPurchaseDTOList.getCellData(rowIndex, "pchsUpr")) || 0;
    let pchsAmt = parseFloat(ds_nosellPurchaseDTOList.getCellData(rowIndex, "pchsAmt")) || 0;
    let vat = parseFloat(ds_nosellPurchaseDTOList.getCellData(rowIndex, "vat")) || 0;
    let totPchsAmt = 0;
    let pchsAmtTot = 0;
    let pchsVatAmtTot = 0;
    let totPchsAmtTot = 0;
    switch (columnId) {
      case "vol":
        pchsAmt = vol * pchsUpr;
        vat = Math.round(pchsAmt / 10);
        break;
      case "pchsUpr":
        pchsAmt = vol * pchsUpr;
        vat = Math.round(pchsAmt / 10);
        break;
      case "pchsAmt":
        if (vol != 0) {
          pchsUpr = Math.floor(pchsAmt / vol);
        } else {
          pchsUpr = 0;
        }
        vat = Math.round(pchsAmt / 10);
        break;
    }
    totPchsAmt = pchsAmt + vat;
    ds_nosellPurchaseDTOList.setCellData(rowIndex, "vol", vol);
    ds_nosellPurchaseDTOList.setCellData(rowIndex, "pchsUpr", pchsUpr);
    ds_nosellPurchaseDTOList.setCellData(rowIndex, "pchsAmt", pchsAmt);
    ds_nosellPurchaseDTOList.setCellData(rowIndex, "vat", vat);
    ds_nosellPurchaseDTOList.setCellData(rowIndex, "totPchsAmt", totPchsAmt);
    for (let i = 0; i < ds_nosellPurchaseDTOList.getRowCount(); i++) {
      pchsAmtTot = pchsAmtTot + (parseFloat(ds_nosellPurchaseDTOList.getCellData(i, "pchsAmt")) || 0);
      pchsVatAmtTot = pchsVatAmtTot + (parseFloat(ds_nosellPurchaseDTOList.getCellData(i, "vat")) || 0);
      totPchsAmtTot = totPchsAmtTot + (parseFloat(ds_nosellPurchaseDTOList.getCellData(i, "totPchsAmt")) || 0);
    }
    ds_purchaseEvidenceDTO.set("spplyAmt", pchsAmtTot);
    ds_purchaseEvidenceDTO.set("vat", pchsVatAmtTot);
  }
};
scwin.ds_nosellPurchaseDTOList_onrowpositionchange = function (rowIndex) {
  gr_nosellPurchaseDTOList.setColumnReadOnly("pchsCommCd", false);
};
scwin.gr_nosellPurchaseDTOList_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = ds_nosellPurchaseDTOList.getColumnID(columnIndex);
  if (columnId == "rsltsStdDt") {
    // cfOpenCalendar 그리드 내 달력 팝업 - inputType="calendar"로 대체됨
  }
};
scwin.ed_lineCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 1);
};
scwin.ed_cvsslMgntNo_onblur = async function (e) {
  let cvsslMgntNo = (scwin.ed_cvsslMgntNo_val || "").trim();
  let confirmResult = await $c.win.confirm($p, "본번 수정시 모선/항차도 일괄 수정됩니다. 수정하시겠습니까?");
  if (confirmResult) {
    if (cvsslMgntNo == "") {
      scwin.ed_cvsslMgntNo_val = "";
      scwin.ed_vsslCd_val = "";
      scwin.ed_portcnt_val = "";
      scwin.ed_cvsslMgntNo_hidVal = "";
    } else {
      await scwin.f_openPopUpByCvsslMgmtNo();
    }
  }
};
scwin.ed_vsslCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(scwin.ed_vsslCd_val, scwin.txt_vsslNm, 3);
};

// 회사코드 공통 팝업 이벤트
scwin.udc_co_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_co_onblurCodeEvent = function (e) {};
scwin.udc_co_onviewchangeNameEvent = function (e) {
  ed_coCd.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};

// 매입거래처 공통 팝업 이벤트
scwin.udc_pchsClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('7', 'F');
};
scwin.udc_pchsClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsClntNo, ed_pchsClntNm, 4);
};
scwin.udc_pchsClnt_onviewchangeNameEvent = function (e) {
  ed_pchsClntNo.setValue("");
  scwin.f_openPopUp('7', 'T');
};

// 매입부서 공통 팝업 이벤트
scwin.udc_pchsDept_onclickEvent = function (e) {
  scwin.f_deptPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 1);
};
scwin.udc_pchsDept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_pchsDeptCd, ed_pchsDeptNm, 5);
};
scwin.udc_pchsDept_onviewchangeNameEvent = function (e) {
  ed_pchsDeptCd.setValue("");
  scwin.f_openPopUp('6', 'T');
};

// 귀속부서 공통 팝업 이벤트
scwin.udc_bilgLodept_onclickEvent = function (e) {
  scwin.f_deptPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 2);
};
scwin.udc_bilgLodept_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 6);
};
scwin.udc_bilgLodept_onviewchangeNameEvent = function (e) {
  ed_bilgLodeptCd.setValue("");
  scwin.f_openPopUp('3', 'T');
};

// 청구처 공통 팝업 이벤트
scwin.udc_bilgClnt_onclickEvent = function (e) {
  scwin.f_openPopUp('4', 'F');
};
scwin.udc_bilgClnt_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 7);
};
scwin.udc_bilgClnt_onviewchangeNameEvent = function (e) {
  ed_bilgClntNo.setValue("");
  scwin.f_openPopUp('4', 'T');
};
scwin.gr_attachFile_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "attachFileNm") {
    $c.gus.cfDownloadFile($p, ds_attach.getCellData(rowIndex, "attachFileNm"), ds_attach.getCellData(rowIndex, "attachFilePath"));
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_RetrieveNosellOrderPrimeCost();
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_RegistNosellOrderPrimeCost();
};
scwin.btn_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_saveFile_onclick = function (e) {
  scwin.f_saveFile();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

// 조회완료
scwin.sbm_queryConditionDTO_submitdone = async function (e) {
  let rowCnt = ds_nosellPurchaseDTOList.getRowCount();
  $c.gus.cfDisableObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm, btn_bilgLodept, ed_pchsClntNo, ed_pchsClntNm, btn_pchsClnt, ed_pchsDeptCd, ed_pchsDeptNm, btn_pchsDept, ed_spplyDt, txt_summary, btn_Save, rd_certiCreatYn, ed_bilgClntNo, ed_bilgClntNm]);
  gr_nosellPurchaseDTOList.setReadOnly("grid", true);
  totalRows.setValue(rowCnt);
  totalRows2.setValue(ds_attach.getRowCount());
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      if (scwin.save == "") {
        await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      } else if (scwin.save == "DELETE") {
        await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
      }
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_Delete]);
    gr_nosellPurchaseDTOList.setFocusedCell(0, 0, false);
    gr_attachFile.setFocusedCell(0, 0, false);
    if (scwin.save == "REGIST") {
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    }
    for (let i = 0; i < rowCnt; i++) {
      let pchsAmt = ds_nosellPurchaseDTOList.getCellData(i, "pchsAmt");
      let vat = ds_nosellPurchaseDTOList.getCellData(i, "vat");
      pchsAmt = Number((pchsAmt || "0").toString().replace(/,/g, ""));
      vat = Number((vat || "0").toString().replace(/,/g, ""));
      let totAmt = pchsAmt + vat;
      if (isNaN(totAmt)) totAmt = 0;
      ds_nosellPurchaseDTOList.setCellData(i, "totPchsAmt", totAmt);
    }
    ds_nosellPurchaseDTOList.modifyAllStatus("R"); //모든 행의 상태를 기본('R')로 변경
  }
  scwin.save = "";
  scwin.purchaseOrderSetting();
  scwin.purchaseEvidenceSetting();
};

// list로받은 데이터 map에 세팅
scwin.purchaseOrderSetting = function () {
  ds_purchaseOrderDTO.setEmptyValue();

  // row 없으면 종료
  if (ds_purchaseOrderDTOList.getRowCount() === 0) return;

  // 첫 번째 row를 JSON으로 가져오기
  let json = ds_purchaseOrderDTOList.getRowJSON(0);

  // 단건 dataset에 세팅
  ds_purchaseOrderDTO.setJSON(json);
};

// list로받은 데이터 map에 세팅
scwin.purchaseEvidenceSetting = function () {
  ds_purchaseEvidenceDTO.setEmptyValue();

  // row 없으면 종료
  if (ds_purchaseEvidenceDTOList.getRowCount() === 0) return;

  // 첫 번째 row를 JSON으로 가져오기
  let json = ds_purchaseEvidenceDTOList.getRowJSON(0);

  // 단건 dataset에 세팅
  ds_purchaseEvidenceDTO.setJSON(json);
};
scwin.sbm_queryConditionDTO_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.errorMsg || "");
};
scwin.sbm_saveNosellOrderPrimeCost_submitdone = async function (e) {
  if (scwin.save == "REGIST") {
    let cnt = ds_primeCostCreationConsequence.getRowCount();
    if (cnt > 0) {
      ed_odrNo.setValue(ds_primeCostCreationConsequence.getCellData(0, "odrNo"));
    }
    $c.gus.cfDisableObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm, btn_bilgLodept, ed_pchsClntNo, ed_pchsClntNm, btn_pchsClnt, ed_pchsDeptCd, ed_pchsDeptNm, btn_pchsDept, ed_spplyDt, txt_summary, rd_certiCreatYn, ed_bilgClntNo, ed_bilgClntNm]);
    gr_nosellPurchaseDTOList.setReadOnly("grid", true);
    $c.gus.cfDisableBtnOnly($p, [btn_addRow, btn_deleteRow, btn_Save]);
    await scwin.f_RetrieveNosellOrderPrimeCost();
  } else if (scwin.save == "DELETE") {
    await scwin.f_RetrieveNosellOrderPrimeCost();
  }
};
scwin.sbm_saveNosellOrderPrimeCost_submiterror = function (e) {
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  $c.gus.cfShowError($p, e);
};
scwin.sbm_saveFile_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.win.alert($p, "성공적으로 저장하였습니다.");

  // 1. 삭제 상태(D) row 제거
  for (let i = ds_attach.getRowCount() - 1; i >= 0; i--) {
    if (ds_attach.getRowStatus(i) === "D") {
      ds_attach.removeRow(i);
    }
  }

  // 2. 나머지 상태 R로 변경
  ds_attach.modifyAllStatus("R");
};
scwin.sbm_saveFile_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_results_onloadcompleted = function (e) {
  let rowCnt = ds_results.getRowCount();
  totalRows.setValue(rowCnt);
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tb_searchData',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_co',codeId:'ed_coCd',nameId:'ed_coNm',selectID:'retrieveDongbuGroupCompanyInfo',popupID:'',style:'',refDataCollection:'ds_queryConditionDTO',allowCharCode:'0-9',maxlengthCode:'3','ev:onclickEvent':'scwin.udc_co_onclickEvent','ev:onblurCodeEvent':'scwin.udc_co_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_co_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{'ev:onkeyup':'scwin.toUpperCase',maxlength:'15',allowChar:'a-zA-Z0-9',class:' w150',id:'ed_odrNo',style:'',ref:'data:ds_queryConditionDTO.odrNo',mandatory:'true',validExp:'오더번호:yes'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'tb_mainData1',class:'row-gap-8 '},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'오더 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:140px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'오더번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_odrNo',label:'text',style:'',ref:'data:ds_purchaseOrderDTO.odrNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'귀속부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgLodept',btnId:'btn_bilgLodept',code:'bilgLodeptCd',codeId:'ed_bilgLodeptCd',name:'bilgLodeptNm',nameId:'ed_bilgLodeptNm',selectID:'retrieveAcctDeptCdInfo10',popupID:'',style:'',class:'w250',maxlengthCode:'5',allowCharCode:'0-9',refDataCollection:'ds_purchaseOrderDTO','ev:onclickEvent':'scwin.udc_bilgLodept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래명세서 생성여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_certiCreatYn',ref:'data:ds_purchaseOrderDTO.certiCreatYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Yes'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'No'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'청구처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{maxlengthCode:'6',allowChar:'0-9',btnId:'btn_bilgClnt',id:'udc_bilgClnt',mandatoryCode:'true',code:'clntNo',codeId:'ed_bilgClntNo',name:'clntNm',nameId:'ed_bilgClntNm',selectID:'retrieveClntList2',popupID:'',style:'',class:'w250',validExpCode:'거래처:yes:format=000000',refDataCollection:'ds_purchaseOrderDTO','ev:onclickEvent':'scwin.udc_bilgClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_bilgClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_bilgClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'tb_mainData2',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입 정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:140px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'lay_certiNo',label:'text',style:'',ref:'data:ds_purchaseEvidenceDTO.certiNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_pchsClnt',btnId:'btn_pchsClnt',code:'pchsClntNo',codeId:'ed_pchsClntNo',name:'pchsClntNm',nameId:'ed_pchsClntNm',selectID:'retrieveClntList2',popupID:'',style:'',class:'w250',validExpCode:'매입거래처:yes:format=000000',maxlengthCode:'6',allowChar:'0-9',refDataCollection:'ds_purchaseEvidenceDTO','ev:onclickEvent':'scwin.udc_pchsClnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsClnt_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_pchsDept',btnId:'btn_pchsDept',code:'pchsDeptCd',codeId:'ed_pchsDeptCd',name:'pchsDeptNm',nameId:'ed_pchsDeptNm',selectID:'retrieveAcctDeptCdInfo10',popupID:'',style:'',class:'w250',validExpCode:'매입부서:yes:format=00000',maxlengthCode:'5',allowChar:'0-9',refDataCollection:'ds_purchaseEvidenceDTO','ev:onclickEvent':'scwin.udc_pchsDept_onclickEvent','ev:onblurCodeEvent':'scwin.udc_pchsDept_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_pchsDept_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매입예정일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_spplyDt',style:'',ref:'data:ds_purchaseEvidenceDTO.spplyDt',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_summary',style:'',ref:'data:ds_purchaseEvidenceDTO.summary'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'lay_dcsnClsNm',label:'text',style:'',ref:'data:ds_purchaseEvidenceDTO.dcsnClsNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'매입 내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel',gridDownUserAuth:'X',gridID:'gr_nosellPurchaseDTOList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_nosellPurchaseDTOList',id:'gr_nosellPurchaseDTOList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'false','ev:onafteredit':'scwin.gr_nosellPurchaseDTOList_onafteredit',validExp:'selpchItemCd:매입항목:yes:string&maxlength=4,                                     rsltsStdDt:실적일자:yes:length=8',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'매입항목',width:'200',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',value:'물량',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'단가',width:'70',class:'col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',value:'공급금액',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'부가세',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'실적일자',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',value:'거래명세서',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'select',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vol',inputType:'text',width:'70',textAlign:'right',dataType:'float',maxLength:'15.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsUpr',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totPchsAmt',inputType:'text',width:'100',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'100',allowChar:'0-9',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsCertiNo',inputType:'text',width:'100',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bttomBtn',rowAddFunction:'scwin.f_AddRow',btnCancelYn:'Y',btnDelYn:'N',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_CancelRow',rowAddUserAuth:'C',rowDelUserAuth:'D',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_deleteRow',btnCancelObj:'btn_cancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_saveFile','ev:onclick':'scwin.btn_saveFile_onclick',label:'저장',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'파일저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create','ev:onclick':'scwin.btn_Create_onclick',label:'저장',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Save','ev:onclick':'scwin.btn_Save_onclick',label:'저장',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'매입생성 및 승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Delete','ev:onclick':'scwin.btn_Delete_onclick',label:'저장',style:'',type:'button',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'첨부파일 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_attach',id:'gr_attachFile',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_attachFile_oncelldblclick',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'ID',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'첨부파일명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'첨부파일설명',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'SIZE',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileId',inputType:'text',style:'',value:'',width:'50',dataType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',class:'underline'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileDesc',inputType:'text',style:'',value:'',width:'300',textAlign:'left',readOnly:'false',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attachFileSiz',inputType:'text',style:'',value:'',width:'50',textAlign:'right',displayFormat:'#,###',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',btnCancelYn:'Y',style:'',btnRowAddYn:'N',btnRowDelYn:'Y',rowDelUserAuth:'D',rowDelFunction:'scwin.f_delrowFile',cancelFunction:'scwin.f_cancelRowFile'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'file-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'}}]},{T:1,N:'w2:udc_fileMultiUpload',A:{id:'udc_fielUpload',saveButtonId:'btn_fileSave',subDir:'/cm/bc/cstmrcardmgnt/cstmrcardmgnt',filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',maxFileCount:'10',style:'',totalFileSize:'2009715200',maxFileSize:'536870912',fileGrpSeq:'','ev:onFileUploadDone':'scwin.udc_fielUpload_onFileUploadDone',saveButtonName:'업로드'}},{T:1,N:'xf:group'}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'udc_comCode'}}]}]}]}]}]})