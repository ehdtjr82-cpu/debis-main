/*amd /ui/ds/fs/consignmgnt/fs_404_01_01b.xml 24050 ec007dfee6379abf756d1852df61dd8c6cf0000d17b778ba60e02de71f4d0d32 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'장비분류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptCls',name:'보증금적용구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.consignmgnt.longtermvehcl.RetrieveLongTermVehclListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.fs.consignmgnt.longtermvehcl.SaveLongTermVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"IN_DS1", "action":"modified"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vehclNo = "";
scwin.clntNm = "";
scwin.lobranCd = "";
scwin.lobranNm = "";
scwin.clntNo = "";
scwin.eqCd = "";

// 엑셀 다운로드 용 점소명
scwin.lobrancdExcel = "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableBtnOnly($p, [btn_Save, btn_rowAdd, btn_cancel]);
};

//점소
scwin.udc_comCode_lobran_onclickEvent = async function (e) {
  scwin.f_openCommonPopup(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "F");
};

//점소callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};
//거래처
scwin.udc_comCode_clnt_onclickEvent = async function (e) {
  scwin.f_openCommonPopup(2, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
//거래처callback
scwin.udc_comCode_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};

//차량번호
scwin.udc_comCode_vehcl_onclickEvent = function (e) {
  scwin.f_openLongTermVehcl();
};
scwin.udc_comCode_vehcl_onblurCodeEvent = function (e) {
  if (ed_vehclShortCd.getValue() === "") {
    ed_vehclNo.setValue("");
  } else {
    ed_vehclNo.setValue("");
    scwin.f_openLongTermVehcl();
  }
};
scwin.udc_comCode_vehcl_onblurNameEvent = function (e) {
  if (ed_vehclNo.getValue() === "") {
    ed_vehclShortCd.setValue("");
  } else {
    ed_vehclShortCd.setValue("");
    scwin.f_openLongTermVehcl();
  }
};
scwin.f_openLongTermVehcl = async function () {
  // ed_vehclNo 우선
  let vehclNo = ed_vehclNo.getValue() || ed_vehclShortCd.getValue();
  let data = {
    "param0": ed_lobranCd.getValue() // 점소코드
    ,

    "param1": vehclNo // 차량단축번호("2412") or 차량번호("부산99사2412")
    ,

    "param3": "T"
  };
  let opts = {
    id: "searchpop",
    popupName: "장기용차",
    popupTitle: "장기용차조회",
    modal: true,
    type: "",
    width: 800,
    // 가로 크기 (픽셀)
    height: 600,
    // 세로 크기 (픽셀)
    title: "Win pop"
  };
  rtnList = await $c.win.openPopup($p, "/ui/ds/fs/consignmgnt/fs_404_01_01p.xml", opts, data);
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_vehclShortCd, ed_vehclNo);
  } else {
    ed_vehclShortCd.setValue("");
    ed_vehclNo.setValue("");
  }
};

//청구지점pop
scwin.udc_comCode_lobran_onclickEvent = async function (e) {
  scwin.f_openCommonPopup(1, ed_lobranCd.getValue(), ed_lobranNm.getValue(), "F", "F");
};
//청구지점 팝업callback
scwin.udc_comCode_lobran_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lobranCd, ed_lobranNm);
};

//매입거래처
scwin.udc_comCode_clnt_onclickEvent = function (e) {
  scwin.f_openCommonPopup(2, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};

//매입팝업callback
scwin.udc_comCode_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
scwin.udc_comCode_lobran_onblurCodeEvent = e => scwin.f_chkOpenCommonPopup(ed_lobranCd, ed_lobranNm, 1);
scwin.udc_comCode_clnt_onblurCodeEvent = e => scwin.f_chkOpenCommonPopup(ed_clntNo, ed_clntNm, 2);
scwin.udc_comCode_lobran_onviewchangeNameEvent = info => scwin.f_chkOpenCommonPopup(ed_lobranNm, ed_lobranCd, 1, false);
scwin.udc_comCode_clnt_onviewchangeNameEvent = info => scwin.f_chkOpenCommonPopup(ed_clntNm, ed_clntNo, 2, false);

//조회
scwin.btn_retrieve_onclick = async function (e) {
  // 조회조건 필수사항 체크
  let chkValid = await $c.gus.cfValidate($p, [ed_lobranCd]);
  if (!chkValid) return;

  //dataMap setting
  dma_search.set("lobranCd", ed_lobranCd.getValue()); // 점소코드
  dma_search.set("clntNo", ed_clntNo.getValue()); // 거래처 코드
  dma_search.set("vehclNo", ed_vehclNo.getValue()); // 차량번호

  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback.
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_master.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  // 그리드 첫째 행 index선택
  gr_master.setFocusedCell(0, 0);
  total.setValue(nCnt);
  scwin.lobrancdExcel = ed_clntNm.getValue();
  $c.gus.cfEnableBtnOnly($p, [btn_Save, btn_rowAdd, btn_cancel]);
};

//행추가
scwin.f_AddRow = function () {
  let nRow = ds_master.getRowCount();
  ds_master.insertRow(nRow);
  ds_master.setCellData(nRow, "useYn", "1");
  gr_master.setCellReadOnly(nRow, "vehclNo", false); //grid column edit 가능
  gr_master.setCellReadOnly(nRow, "clntNo", true);
  gr_master.setFocusedCell(nRow, "vehclNo");
};

// 취소
scwin.f_UndoRow = function () {
  $c.data.undoRow($p, ds_master, "Y");
};

//저장
scwin.btn_Save_onclick = async function (e) {
  // 필수입력사항 확인
  // 변경 (중복 체크 포함)
  let valInfoArr = [{
    id: 'eqCd',
    name: '장비코드',
    mandatory: true,
    key: true
  }, {
    id: 'vehclNo',
    name: '차량번호',
    mandatory: true
  }];
  let chkValid = await $c.gus.cfValidateGrid($p, gr_master, null, null, valInfoArr, '장기용차 관리비 대상');
  if (!chkValid) return;

  //변경한 데이터가 있는지 체크한다. 
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다."); //변경된 정보가 없습니다.
    return;
  }
  let chkConfirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chkConfirm) {
    $c.sbm.execute($p, sbm_save);
  }
};

//save callback
scwin.sbm_save_submitdone = async function (e) {
  // responseJSON에서 resultDataSet 추출
  var resultDataSet = e.responseJSON.resultDataSet;
  if (!resultDataSet || resultDataSet.length === 0) {
    return;
  }

  // 첫번째 행 = Result (성공/실패 여부)
  var result = resultDataSet[0];
  if (result.Msg === "SUCC") {
    // 성공
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.btn_retrieve_onclick();
  }
};

// 엑셀 Download
scwin.excelDw_gr_master = async function () {
  if (ds_master.getTotalRow() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      // 1. 그리드 객체 확인 (ID 문자열이 아닌 객체 자체를 할당)
      const gridObj = gr_master;

      // 2. 시트명 및 파일명 설정 (특수문자 제거 권장)
      let clntNm = ds_master.getCellData(0, "lobranNm") || "전체";
      let sheetName = "장기용차 관리비 대상_" + clntNm;
      let fileName = sheetName + ".xlsx";

      // 그리드 전체 컬럼 수 (title 병합에 사용)
      let colCount = gridObj.getTotalCol();

      // 4. 추가 정보 설정 (필요 시 헤더 상단에 추가 행 삽입)
      const infoArr = [{
        rowIndex: 0,
        colIndex: 0,
        rowSpan: 1,
        colSpan: colCount,
        text: "장기용차 현황",
        textAlign: "center",
        fontSize: 18,
        fontName: "돋움체",
        color: "black",
        backgroundColor: "#ffffff",
        drawBorder: false
      }
      // 빈 행(skiprow)이 필요하면 rowIndex:1 항목 추가
      ];

      // ② startRowIndex로 그리드 데이터 시작 위치 조정
      const options = {
        fileName: fileName,
        sheetName: sheetName,
        startRowIndex: 2,
        // 0:title행, 1:빈행, 2부터 그리드 데이터
        startColumnIndex: 0,
        type: "1"
      };
      await $c.data.downloadGridViewExcel($p, gridObj, options, infoArr, 26);
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
// 1:조회->부서 , 2:조회->거래처
// 3:입력->부서 , 4:입력->거래처 , 5:입력->계정
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopup = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 점소 
      udc_comCode_lobran.setSelectId("retrieveLobranInfo");
      await udc_comCode_lobran.cfCommonPopUp(scwin.udc_comCode_lobran_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 매입거래처공통팝업
      udc_comCode_clnt.setSelectId("retrieveClntList");
      await udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCode_clnt_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopup = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopup(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopup(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
//그리드 차량번호호 팝업 (이미지 클릭)
//-------------------------------------------------------------------------
scwin.vehclNo_grid = async function (rowIndex, colId, nowValue) {
  let data = {
    "param0": ed_lobranCd.getValue() // 점소코드
    ,

    "param1": ds_master.getCellData(rowIndex, "vehclNo") // 차량번호
    ,

    "param3": "T"
  };
  let opts = {
    id: "searchpop",
    popupName: "장기용차",
    popupTitle: "장기용차조회",
    modal: true,
    type: "",
    width: 800,
    // 가로 크기 (픽셀)
    height: 600,
    // 세로 크기 (픽셀)
    title: "Win pop"
  };
  rtnList = await $c.win.openPopup($p, "/ui/ds/fs/consignmgnt/fs_404_01_01p.xml", opts, data);
  if (rtnList == null || rtnList == undefined || rtnList.length < 1) return;
  let vehclShortCd = rtnList[0] ?? ""; // 단축코드
  let vehclNo = rtnList[1] ?? "";
  let clntNm = rtnList[2] ?? "";
  let lobranNm = rtnList[3] ?? "";
  let clntNo = rtnList[4] ?? "";
  let eqCd = rtnList[5] ?? "";
  let lobranCd = rtnList[6] ?? "";
  ds_master.setCellData(rowIndex, "vehclNo", vehclNo);
  ds_master.setCellData(rowIndex, "clntNo", clntNo);
  ds_master.setCellData(rowIndex, "clntNm", clntNm);
  ds_master.setCellData(rowIndex, "lobranCd", lobranCd);
  ds_master.setCellData(rowIndex, "lobranNm", lobranNm);
  ds_master.setCellData(rowIndex, "eqCd", eqCd);
  gr_master.setFocusedCell(rowIndex, "useYn");
};

//-------------------------------------------------------------------------
//그리드 거래처 팝업 (이미지 클릭)
//-------------------------------------------------------------------------
scwin.clntNo_grid = async function () {
  udc_comCode_clnt.setSelectId("retrieveClntList");
  udc_comCode_clnt.cfCommonPopUp(scwin.udc_comCodeGrid_callBackFunc, ds_master.getCellData(ds_master.getRowPosition(), "clntNo"), "", "T", null, null, null, null, null, null, null, null, null, null, "T", null, null);
};

//grid 거래처callback
scwin.udc_comCodeGrid_callBackFunc = function (ret) {
  //debugger;
  //console.log(ret);

  let clntNo = ret ? ret[0] : "";
  let clntNm = ret ? ret[1] : "";
  let row = ds_master.getRowPosition();
  ds_master.setCellData(row, "clntNo", clntNo); // 거래처코드
  ds_master.setCellData(row, "clntNm", clntNm); // 거래처명    
};

//grid click
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_master.getRowStatusValue(rowIndex) == "2") {
    //신규인경우
    gr_master.setCellReadOnly(rowIndex, "vehclNo", false);
    gr_master.setCellReadOnly(rowIndex, "clntNo", true);
  } else {
    //신규가 아닌경우
    gr_master.setCellReadOnly(rowIndex, "vehclNo", true);
    gr_master.setCellReadOnly(rowIndex, "clntNo", false);
  }
};

// grid 차량번호 입력 시 팝업 실행
scwin.gr_master_onviewchange = function (info) {
  let rowIdx = info.rowIndex;
  if (info.colId === "vehclNo") {
    // 코드값이 공백인 아닌 경우만 호출
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_master.setCellData(rowIdx, "vehclNo", "");
      ds_master.setCellData(rowIdx, "lobranCd", "");
      ds_master.setCellData(rowIdx, "lobranNm", "");
      ds_master.setCellData(rowIdx, "clntNo", "");
      ds_master.setCellData(rowIdx, "clntNm", "");
      ds_master.setCellData(rowIdx, "eqCd", "");
    } else {
      // grid 차량번호 팝업 호출
      scwin.vehclNo_grid(rowIdx);
    }
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lobranCd',nameId:'ed_lobranNm',id:'udc_comCode_lobran',objTypeCode:'Data',mandatoryCode:'true',maxlengthCode:'4',readOnlyCode:'false',objTypeName:'Data',readOnlyName:'false',maxlengthName:'50',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_comCode_lobran_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_lobran_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_lobran_onviewchangeNameEvent',validTitle:'점소',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_comCode_clnt',objTypeCode:'data',objTypeName:'data',mandatoryCode:'false',allowCharCode:'0-9',selectID:'retrieveClntList','ev:onclickEvent':'scwin.udc_comCode_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_clnt_onviewchangeNameEvent',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_vehclShortCd',nameId:'ed_vehclNo',id:'udc_comCode_vehcl',objTypeCode:'Data',mandatoryCode:'false',UpperFlagCode:'1',maxlengthCode:'4',mandatoryName:'false',objTypeName:'key','ev:onclickEvent':'scwin.udc_comCode_vehcl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_vehcl_onblurCodeEvent',allowCharCode:'a-zA-Z0-9','ev:onblurNameEvent':'scwin.udc_comCode_vehcl_onblurNameEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장기용차 관리비 대상',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.excelDw_gr_master',id:'udc_topGrBtn',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_master_oncellclick','ev:onviewchange':'scwin.gr_master_onviewchange',focusMode:'cell',gridName:'장기용차 관리비 대상'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차량번호',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처코드',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'점소코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'점소명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'사용유무',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'textImage',width:'150',textAlign:'center',viewType:'default',readOnly:'true',imageClickFunction:'scwin.vehclNo_grid',mandatory:'true',maxLength:'12'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',textAlign:'center',viewType:'default',imageClickFunction:'scwin.clntNo_grid',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'text',width:'100',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',width:'100',textAlign:'center',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',textAlign:'center'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'아니오'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'예'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnRowDelYn:'N',btnDelYn:'N',btnRowAddYn:'Y',rowAddFunction:'scwin.f_AddRow',gridID:'gr_master',id:'udc_bottomGrdBtn',rowAddUserAuth:'C',cancelFunction:'scwin.f_UndoRow',btnCancelObj:'btn_cancel',btnRowAddObj:'btn_rowAdd'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;display:none;',id:'udc_comCodeGrid'}}]}]}]}]}]}]}]})