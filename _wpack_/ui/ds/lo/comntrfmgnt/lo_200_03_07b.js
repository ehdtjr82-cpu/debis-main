/*amd /ui/ds/lo/comntrfmgnt/lo_200_03_07b.xml 29982 af28053ef74dcc75e0c1342e9b25ed9c5e867b149cbb36ce87c1f93a64ea2594 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrf',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_basetrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'FULL/EMPTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmcTrf',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'taxnCls',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'공통요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchClsCd',name:'매출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuprgnCd',name:'PICKUP권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuprgnNm',name:'PICKUP권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldCntrSizCd',name:'OLD단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldLineCd',name:'OLDLINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldClntNo',name:'OLD공통요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldFullEmptyClsCd',name:'FULL/EMPTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldSelpchClsCd',name:'OLD매출입구분코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comntrfmgnt.RetrieveTMCTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_basetrf","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrf","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve_detail',action:'/ds.lo.comntrfmgnt.RetrieveTMCTariffDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_basetrfList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_basetrfList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveTMCTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_basetrfList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate2 = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자
scwin.pos_groupCode = ""; //저장 후 포커스 찾기용
scwin.hid_selpchItemCd = "";
scwin.hid_adptDt = "";
scwin.hid_alloccarBran = "";
scwin.onpageload = function () {
  // 점소
  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lc_cnd_alloccarBran,acb_lc_alloccarBran"
  }];
  $c.data.setGauceUtil($p, param);

  // 항목
  const param2 = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo2",
    param3: ["11", "1"],
    compID: "acb_lc_cnd_selpchItemCd,acb_lc_selpchItemCd"
  }];
  $c.data.setGauceUtil($p, param2);

  // grid 오더종류
  const param3 = [{
    method: "getGridCombo",
    param1: "OrdKndEBC",
    param2: "retreiveCntrOrdKndList",
    compID: "gr_basetrfList:odrKndCd"
  }];
  $c.data.setGauceUtil($p, param3);
  ica_ed_adptDt.setValue(scwin.strCurDate2);
};

/**
 * UDC onload
 */
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();

  // focus
  acb_lc_cnd_selpchItemCd.focus();
};

/**
 * 조회조건 초기화
 */
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  scwin.f_defaultValue();

  // focus
  acb_lc_cnd_selpchItemCd.focus();
};

/**
 * 컴포넌트 초기화
 */
scwin.f_defaultValue = function () {
  $c.gus.cfDisableObjects($p, [btn_save, btn_cancel, btn_addRow, btn_delRow, acb_lc_selpchItemCd, acb_lc_alloccarBran, ica_ed_adptDt]);
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
};

/**
 * 조회
 */
scwin.btn_retrieve_onclick = function (e) {
  if (ds_basetrfList.getModifiedIndex().length > 0) {
    $c.win.confirm($p, "변경 사항이 존재합니다. 진행하시겠습니까?").then(rtn => {
      if (rtn) {
        scwin.search();
      } else {
        return;
      }
    });
  } else {
    scwin.search();
  }
};
scwin.search = function () {
  ds_basetrfList.removeAll();
  dma_retrieve.set("lobranCd", acb_lc_cnd_alloccarBran.getValue());
  dma_retrieve.set("selpchItemCd", acb_lc_cnd_selpchItemCd.getValue());
  dma_retrieve.set("adptDt", ica_ed_cnd_adptDt.getValue());
  dma_retrieve.set("selpchClsCd", "2"); //매출입구분코드 : 1:매출, 2:매입

  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 callback
 */
scwin.sbm_retrieve_submitdone = function (e) {
  $c.gus.cfGoPrevPosition($p, gr_basetrf, 0);
  let nCnt = ds_basetrf.getRowCount();
  if (nCnt > 0) {
    let row = 0;
    if (scwin.pos_groupCode) {
      row = scwin.pos_groupCode;
      scwin.pos_groupCode = "";
    }
    gr_basetrf.setFocusedCell(row, "lobranNm");
    total.setValue(nCnt);
  } else {
    acb_lc_selpchItemCd.setValue(acb_lc_cnd_selpchItemCd.getValue());
    ica_ed_adptDt.setValue(ica_ed_cnd_adptDt.getValue());
    acb_lc_cnd_alloccarBran.setValue(acb_lc_cnd_alloccarBran.getValue());
    scwin.f_defaultValue();
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); //조회결과가 존재하지 않습니다.
  }

  // $c.gus.cfEnableObjects([btn_new, btn_edit]);
  // $c.gus.cfDisableObjects([btn_save]);
  // udc_bottomGrdBtn.setDisabled(true);
};

/**
 * 요율상세 목록 조회
 */
scwin.f_RetrieveDetail = function (rowIndex) {
  const {
    lobranCd,
    selpchItemCd,
    adptDt
  } = ds_basetrf.getRowJSON(rowIndex);

  // 그리드 상단 세팅
  acb_lc_alloccarBran.setValue(lobranCd); //점소
  acb_lc_selpchItemCd.setValue(selpchItemCd); //항목
  ica_ed_adptDt.setValue(adptDt); //적용일자

  dma_retrieve.set("lobranCd", lobranCd); //점소
  dma_retrieve.set("selpchItemCd", selpchItemCd); //항목
  dma_retrieve.set("adptDt", adptDt); //적용일자
  dma_retrieve.set("selpchClsCd", "2"); //매출입구분코드 : 1:매출, 2:매입		

  $c.sbm.execute($p, sbm_retrieve_detail);
};

/**
 * 요율상세 목록 조회 callback
 */
scwin.sbm_retrieve_detail_submitdone = function (e) {
  gr_basetrfList.setReadOnly("grid", true); //grid readonly

  let nCnt = ds_basetrfList.getRowCount();
  if (nCnt > 0) {
    gr_basetrfList.setFocusedCell(0, 0);
    total2.setValue(nCnt);
  }
  $c.gus.cfEnableObjects($p, [btn_edit, btn_new]);
  $c.gus.cfDisableObjects($p, [btn_save, btn_cancel, btn_addRow, btn_delRow]);
};

/**
 * 매입목록 그리드 row index change
 */
scwin.gr_basetrf_onrowindexchange = async function (rowIndex, oldRow) {
  if (ds_basetrfList.getModifiedIndex().length > 0) {
    let confirm = await $c.win.confirm($p, "변경 사항이 존재합니다. 진행하시겠습니까?");
    if (confirm) {
      scwin.f_RetrieveDetail(rowIndex);
    } else {
      return;
    }
  }
  scwin.f_defaultValue();
  scwin.f_RetrieveDetail(rowIndex);
};

/**
 * 요율상세 목록 그리드 row index change
 */
scwin.gr_basetrfList_onrowindexchange = function (rowIndex, oldRow) {
  // "commCd", "commNm", "unitCd" 사용안해서 제거
  $c.gus.cfPrepareHidVal($p, ds_basetrfList, rowIndex, ["lobranCd", "lobranNm", "lineCd"]);
};

/**
 * 요율상세 목록 그리드 onviewchange
 */
scwin.gr_basetrfList_onviewchange = function (info) {
  const {
    oldValue,
    newValue,
    rowIndex,
    colIndex,
    colId
  } = info;
  if (colId == "lineCd") {
    if ($c.util.isEmpty($p, newValue)) return;
    scwin.pop_grid("T");
  }
};

/**
 * 요율상세 목록 그리드 onafteredit
 */
scwin.gr_basetrfList_onafteredit = function (rowIndex, columnIndex, value) {
  const colID = ds_basetrfList.getColumnID(columnIndex);
  if (colID == "lineCd") {
    // LINE
    // if ($c.util.isEmpty(ds_basetrfList.getCellData(rowIndex, colID))) {
    //     udc_comCode_line_grid.cfCommonPopUp(scwin.udc_comCode_line_grid_callBackFunc,
    //         "","","T",null,null,null,null,null,null,null,null,null,null,null,null,null);
    // }
  }
};

/**
 * 요율상세 목록 LINE 돋보기 클릭 시 공통팝업 호출
 * - 직접입력한 값이 단건 : 팝업 호출x / 다건 : 팝업 호출O
 * - 돋보기 클릭 시 단건/다건 상관없이 팝업 호출 O 또는 전체 조회(데이터 노출)
 * - 돋보기 클릭 시에만 전체조회 가능 (값 입력 후 focus out시 생긴 팝업에서는 전체조회 불가능)
 * 
 * pWinCloseTF 초기값을 F로 설정했지만 ws에서 rowIndex값을 넘김
 *      → 공통에서 T인 경우만 단건일 때 호출을 안하기 때문에 상관 없음
 */
scwin.pop_grid = function (pWinCloseTF = "F") {
  const row = ds_basetrfList.getRowPosition();
  const lineCd = ds_basetrfList.getCellData(row, "lineCd");
  ds_basetrfList.setCellData(row, "lineCd", "");
  udc_comCode_line_grid.cfCommonPopUp(scwin.udc_comCode_line_grid_callBackFunc, lineCd, "", pWinCloseTF, null, null, null, null, null, null, null, null, null, null, "T", null, null);
};

/**
 * LINE 공통팝업 후처리
 */
scwin.udc_comCode_line_grid_callBackFunc = function (ret) {
  const row = ds_basetrfList.getRowPosition();
  if (ret && ret[0] != "N/A") {
    ds_basetrfList.setCellData(row, "lineCd", ret[0]);
  } else {
    ds_basetrfList.setCellData(row, "lineCd", ds_basetrfList.getUserData("lineCd"));
  }
};

/**
 * 신규
 */
scwin.btn_new_onclick = function (e) {
  // 초기화 세팅	
  acb_lc_alloccarBran.setValue(""); //점소
  acb_lc_selpchItemCd.setValue(""); //항목
  ica_ed_adptDt.setValue(scwin.strCurDate2); //적용일자

  ds_basetrfList.removeAll();
  ds_basetrfList.reform();
  gr_basetrfList.setReadOnly("grid", false);
  total2.setValue(0);
  $c.gus.cfEnableObjects($p, [btn_save, btn_cancel, btn_addRow, btn_delRow, acb_lc_selpchItemCd, acb_lc_alloccarBran, ica_ed_adptDt]);
  $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
};

/**
 * 행추가
 */
scwin.addRow = function () {
  let nRow = ds_basetrfList.getRowCount();
  if (ds_basetrfList.getRowCount() > 0) {
    // 복사
    $c.gus.cfCopyRecord($p, gr_basetrfList);
  } else {
    ds_basetrfList.insertRow(nRow);
    ds_basetrfList.setCellData(nRow, "tmcTrf", "0"); //단가
    ds_basetrfList.setCellData(nRow, "crcCd", "KRW"); //통화코드
  }

  // 신규 입력인 경우만 수정
  // 2026.03.05 하상진님 확인
  gr_basetrfList.setCellReadOnly(nRow, "odrKndCd", false);

  // focus
  gr_basetrfList.setFocusedCell(nRow, "odrKndCd");
};

/**
 * 수정 - 요율상세 목록
 */
scwin.btn_edit_onclick = function (e) {
  if (ds_basetrfList.getRowCount() > 0) {
    gr_basetrfList.setReadOnly("grid", false);
    $c.gus.cfEnableObjects($p, [btn_save, btn_cancel, btn_addRow, btn_delRow]);
    $c.gus.cfDisableObjects($p, [btn_edit, btn_new]);
  } else {
    $c.gus.cfAlertMsg($p, "조회 후 처리하시기 바랍니다.");
  }
};

/**
 * 저장
 */
scwin.btn_save_onclick = async function (e) {
  if (await scwin.f_ReqFieldChk()) {
    let confirm = await $c.win.confirm($p, "저장 하시겠습니까?");
    if (confirm) {
      // 저장하기전 조회조건값 확인
      scwin.hid_selpchItemCd = acb_lc_selpchItemCd.getValue();
      scwin.hid_alloccarBran = acb_lc_alloccarBran.getValue();
      scwin.hid_adptDt = ica_ed_adptDt.getValue();
      scwin.pos_groupCode = ds_basetrf.getRowPosition();
      const rtn = await $c.sbm.execute($p, sbm_save);

      // server exception 시 흐르지 않음
      if (rtn) {
        $c.gus.cfAlertMsg($p, MSG_CM_INF_001).then(() => {
          //저장조건값을 조회조건값으로 세팅
          acb_lc_cnd_selpchItemCd.setValue(scwin.hid_selpchItemCd);
          acb_lc_cnd_alloccarBran.setValue(scwin.hid_alloccarBran);
          ica_ed_cnd_adptDt.setValue(scwin.hid_adptDt);
          ds_basetrfList.reform();
          scwin.btn_retrieve_onclick();
        });
      }
    }
  }
};

/**
 * 필수 입력항목 체크
 */
scwin.f_ReqFieldChk = async function () {
  if (ds_basetrfList.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["TMC요율"]); //"@은(는) 변경된 사항이 없습니다.";
    return false;
  }
  let validate = await $c.gus.cfValidate($p, [tb_param]);
  if (!validate) {
    return false;
  }

  // 항목, 적용일자, 점소 GRID에 세팅
  const selpchItemCd = acb_lc_selpchItemCd.getValue();
  const edAdptDt = ica_ed_adptDt.getValue();
  const lobranCd = acb_lc_alloccarBran.getValue();
  const selpchClsCd = "2";
  const pickuprgnCd = "ZZZ";
  const clntNo = "999999";
  for (let i = 0; i < ds_basetrfList.getRowCount(); i++) {
    const status = ds_basetrfList.getRowStatus(i);
    if (status == "C") {
      //신규
      ds_basetrfList.setCellData(i, "selpchItemCd", selpchItemCd);
      ds_basetrfList.setCellData(i, "adptDt", edAdptDt);
      ds_basetrfList.setCellData(i, "lobranCd", lobranCd);
      ds_basetrfList.setCellData(i, "selpchClsCd", selpchClsCd);
      ds_basetrfList.setCellData(i, "pickuprgnCd", pickuprgnCd);
      ds_basetrfList.setCellData(i, "clntNo", clntNo);
    }
  }
  validate = await $c.gus.cfValidate($p, [gr_basetrfList]);
  if (!validate) {
    return false;
  }
  return true;
};

/**
 * excel download - 매입목록
 */
scwin.gridToExcel_basetrf = function () {
  const grdId = this.opts.gridID;
  const grdObj = $c.util.getComponent($p, grdId);
  const excelTitle = "컨테이너매입기타요율목록";
  const options = {
    fileName: `${excelTitle}.xlsx`,
    sheetName: excelTitle,
    bodyWordwrap: true,
    evenRowBackgroundColor: "#f5fff5"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options);
};

/**
 * excel download - 요율상세 목록
 */
scwin.gridToExcel_basetrfList = function () {
  const grdId = this.opts.gridID;
  const grdObj = $c.util.getComponent($p, grdId);
  const excelTitle = $c.util.getComponent($p, this.opts.grp).getUserData("userData1");
  const options = {
    fileName: `${excelTitle}.xlsx`,
    sheetName: excelTitle,
    bodyWordwrap: true,
    evenRowBackgroundColor: "#f5fff5"
  };
  gr_basetrfList.setHeaderValue("hd_fullEmptyClsCd", "FULL");
  $c.data.downloadGridViewExcel($p, grdObj, options);
  gr_basetrfList.setHeaderValue("hd_fullEmptyClsCd", "FULL/EMPTY");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cnd_alloccarBran',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'10',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cnd_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_cnd_adptDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'tb_param',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_alloccarBran',search:'start',style:'width:150px;',submenuSize:'auto',visibleRowNum:'10',mandatory:'true',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',title:'점소'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',title:'항목'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_adptDt',pickerType:'dynamic',style:'',displayFormat:'yyyy/MM/dd',mandatory:'true',title:'적용일자'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_sectionAll',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 40%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'매입 목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_sectionAll',style:'',gridID:'gr_basetrf',gridUpYn:'N',gridDownFn:'scwin.gridToExcel_basetrf',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_section1',class:'gvwbox',userData1:'컨테이너매입기타요율목록'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_basetrf',style:'',autoFit:'allColumn',id:'gr_basetrf',visibleRowNum:'14',class:'wq_gvw',readOnly:'true',focusMove:'true','ev:onrowindexchange':'scwin.gr_basetrf_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column13',value:'항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'적용일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lobranCd',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'lobranNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'adptDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'total',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요율상세 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_section2',style:'',btnPlusYn:'N',gridUpYn:'N',gridID:'gr_basetrfList',gridDownFn:'scwin.gridToExcel_basetrfList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_section2',style:'',userData1:'컨테이너매입기타요율상세목록'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_basetrfList',id:'gr_basetrfList',style:'',visibleRowNum:'14',visibleRowNumFix:'true',focusMove:'true',rowStatusVisible:'true','ev:onrowindexchange':'scwin.gr_basetrfList_onrowindexchange','ev:onviewchange':'scwin.gr_basetrfList_onviewchange','ev:onafteredit':'scwin.gr_basetrfList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'LINE',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'SIZE',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hd_fullEmptyClsCd',inputType:'text',value:'FULL/EMPTY',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'단가',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'과세구분',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'value',id:'odrKndCd',inputType:'select',width:'100',textAlign:'left',mandatory:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'textImage',width:'100',textAlign:'left',mandatory:'true',viewType:'default',imageClickFunction:'scwin.pop_grid',validateOnInput:'true',style:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'select',width:'70',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'45'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'45'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'select',width:'100',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'EMPTY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmcTrf',inputType:'text',width:'100',textAlign:'right',mandatory:'true',dataType:'number',displayFormat:'#,##0',excelCellType:'number',maxLength:'15'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxnCls',inputType:'select',width:'100',mandatory:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'과세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_basetrfList',btnDelYn:'N',btnCancelYn:'Y',rowAddFunction:'scwin.addRow',rowAddUserAuth:'C',rowAddObjType:'data',rowDelUserAuth:'D',rowDelObjType:'data',cancelObjType:'data',btnCancelObj:'btn_cancel',btnRowAddObj:'btn_addRow',btnRowDelObj:'btn_delRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_new_onclick',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_edit_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveLineInfo',codeId:'pCode',validTitle:'',nameId:'pName',style:'display: none;',id:'udc_comCode_line_grid'}}]}]}]}]}]})