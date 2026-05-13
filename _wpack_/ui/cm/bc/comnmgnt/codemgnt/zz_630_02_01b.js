/*amd /ui/cm/bc/comnmgnt/codemgnt/zz_630_02_01b.xml 29417 5daba7e3c0561aa2fb4605a2dc41fe2daf553926aa9a1d3604bbebf51e814d37 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_groupCode',repeatNode:'map',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_groupCode_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grpCdNm',name:'그룹코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperGrpCd',name:'상위그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperGrpCdNm',name:'상위그룹코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrDesc1',name:'필터설명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrDesc2',name:'필터설명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrDesc3',name:'필터설명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_code',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'상위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCdNm',name:'상위코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNm',name:'코드영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNmAbbr',name:'코드명_약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명_약어',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortSeq',name:'정렬순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdDesc',name:'코드설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd2',name:'필터코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd3',name:'필터코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_groupCode',action:'/cm.zz.RetrieveGroupCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_groupCode","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_groupCode_submitdone','ev:submiterror':'scwin.sbm_groupCode_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_code',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_code","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_code_submitdone','ev:submiterror':'scwin.sbm_code_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCodeClass',action:'/cm.zz.CUDCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified", "id":"ds_groupCode", "key":"IN_DS1"},{"action":"modified", "id":"ds_code", "key":"IN_DS2"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCodeClass_submitdone','ev:submiterror':'scwin.sbm_saveCodeClass_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 그룹코드의 저장 전 위치
scwin.pos_groupCode = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.ed_grpCd_onkeyup = function (e) {
  $c.gus.cfToUpper($p, this);
};

//-------------------------------------------------------------------------
// DataSet의 Header 정보 생성
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var arrJson = {
    grpCd: ed_grpCd.getValue(),
    grpCdNm: ed_grpCdNm.getValue()
  };
  $c.sbm.execute($p, sbm_groupCode, arrJson);
};

//-------------------------------------------------------------------------
// 첫번째 그리드추가 - 그룹코드 적용
//-------------------------------------------------------------------------
scwin.f_groupCodeAddRow = function () {
  var rowIndex = ds_groupCode.getRowCount();
  if (rowIndex > 0) {
    ds_groupCode.insertRow(rowIndex);
    gr_groupCode.setCellReadOnly(rowIndex, "grpCd", false);
    gr_groupCode.setFocusedCell(rowIndex, "grpCd", true);
    ds_code.setJSON([]);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드삭제 - 서브데이타도 삭제
//-------------------------------------------------------------------------
scwin.f_DelClass = async function () {
  var rowIndex = ds_groupCode.getRowCount();
  if (rowIndex > 0) {
    let confirmResult = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_014, "그룹코드", "하위코드"));
    if (confirmResult) {
      $c.data.deleteRow($p, ds_code);
      let row = ds_groupCode.getRowPosition();
      if (ds_groupCode.getRowStatus(row) == "C") {
        ds_groupCode.removeRow(row);
      } else {
        ds_groupCode.deleteRow(row);
      }
      gr_groupCode.setFocusedCell(row, "grpCd", true);
    }
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드취소 - 서브데이타도 적용
//-------------------------------------------------------------------------
scwin.f_CancelClass = function () {
  $c.data.undoRow($p, ds_code, "Y");
  $c.data.undoRow($p, ds_groupCode, "Y");
};

//-------------------------------------------------------------------------
// 두번째 그리드추가 - 그룹코드 적용
//-------------------------------------------------------------------------
scwin.f_CodeAddRow = function () {
  var toCnt = ds_groupCode.getRowCount();
  if (toCnt == 0) return;
  var rowIndex = ds_groupCode.getRowPosition();
  var vgrpCd = ds_groupCode.getCellData(rowIndex, "grpCd");
  if (vgrpCd == "") {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_002, "그룹코드")); // 그룹코드는 필수입력 항목입니다
    return;
  }
  ;
  var rowIndexC = ds_code.getRowCount();
  ds_code.insertRow(rowIndexC);
  ds_code.setCellData(rowIndexC, "grpCd", vgrpCd);
  ds_code.setCellData(rowIndexC, "useYn", "1");
  gr_code.setCellReadOnly(rowIndexC, "cd", false);
  gr_code.setFocusedCell(rowIndexC, "cd", true);
};
scwin.f_CodeDelRow = function () {
  let row = ds_code.getRowPosition();
  if (ds_code.getRowStatus(row) == "C") {
    ds_code.removeRow(row);
  } else {
    ds_code.deleteRow(row);
  }
  gr_code.setFocusedCell(row, "cd", true);
};
scwin.f_CodeCancelRow = function () {
  $c.data.undoRow($p, ds_code, "Y");
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_groupCode.getModifiedIndex().length == 0 && ds_code.getModifiedIndex().length == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "그룹코드와 공통코드")); // 은(는) 변경사항이 없습니다
    // $c.win.alert(MSG_CM_ERR_001, ["그룹코드와 공통코드"]); // 은(는) 변경사항이 없습니다
    // scwin.f_MsgClear();
  } else {
    let validArry = [{
      id: "grpCd",
      name: "그룹코드",
      key: true
    }];
    let gridName = "그룹코드";
    if (!(await $c.gus.cfValidateGrid($p, gr_groupCode, null, null, validArry, gridName))) {
      return false;
    }
    let validArry2 = [{
      id: "cd",
      name: "코드",
      mandatory: true
    }, {
      id: "cdNm",
      name: "코드명",
      mandatory: true
    }];
    let gridName2 = "코드";
    if (!(await $c.gus.cfValidateGrid($p, gr_code, null, null, validArry2, gridName2))) {
      return false;
    }
    if (await $c.gus.cfValidate($p, [gr_groupCode])) {
      if (await $c.gus.cfValidate($p, [gr_code])) {
        let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
        if (confirmResult) {
          scwin.pos_groupCode = ds_groupCode.getRowPosition();
          $c.sbm.execute($p, sbm_saveCodeClass);
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그룹코드 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_groupCodeToExcel = function () {
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";

  // gr_groupCode.SetExcelTitle(1, "value:그룹코드;"     // 표시할 타이틀
  //                             + "font-face:'돋움체';" // 폰트
  //                             + "font-size:16pt;"    // 폰트 크기
  //                             + "font-color:black;"  // 폰트 색깔
  //                             + "bgcolor:#ffffff;"   // 배경 색깔
  //                             + "align:center;"      // 정렬
  //                             + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  //                             + "line-width:0pt;"    // 타이틀 테두리선 굵기
  //                             + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // var vDay = "조회일자 : "+"<%=strCurDate%>";
  // gr_groupCode.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  //                             //sheet명, 저장파일명,     저장 다이얼로그
  // cfGridToExcel(gr_groupCode, "공통코드-그룹", "공통코드-그룹.xls", 4+8+16);

  let sheetTitle = "공통코드-그룹";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_groupCode, options);
};
scwin.f_codeToExcel = function () {
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";

  // gr_code.SetExcelTitle(1, "value:코드;"     // 표시할 타이틀
  //                             + "font-face:'돋움체';" // 폰트
  //                             + "font-size:16pt;"    // 폰트 크기
  //                             + "font-color:black;"  // 폰트 색깔
  //                             + "bgcolor:#ffffff;"   // 배경 색깔
  //                             + "align:center;"      // 정렬
  //                             + "line-color:white;"  // 타이틀 부분 테두리선 색깔
  //                             + "line-width:0pt;"    // 타이틀 테두리선 굵기
  //                             + "skiprow:1;");       // 타이틀 다음 떼는 로우 수

  // var vDay = "조회일자 : "+"<%=strCurDate%>";
  // gr_code.SetExcelTitle(1, "value:" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  //                             //sheet명, 저장파일명,     저장 다이얼로그
  // cfGridToExcel(gr_code, "공통코드-코드", "공통코드-코드.xls", 4+8+16);

  let sheetTitle = "공통코드-코드";
  const options = {
    fileName: sheetTitle + ".xlsx",
    sheetName: sheetTitle
  };
  $c.data.downloadGridViewExcel($p, gr_code, options);
};
scwin.sbm_groupCode_submitdone = function (e) {
  var rowCnt = ds_groupCode.getRowCount();
  gr_groupCode_spanTotal.setLabel(rowCnt);
  if (rowCnt > 0) {
    gr_groupCode.setFocusedCell(scwin.pos_groupCode, 0);
  } else {
    $c.win.alert($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
  }
};
scwin.sbm_groupCode_submiterror = function (e) {};
scwin.sbm_code_submitdone = function (e) {
  var rowCnt = ds_code.getRowCount();
  gr_code_spanTotal.setLabel(rowCnt);
  gr_code.setFocusedCell(0, 0);
};
scwin.sbm_code_submiterror = function (e) {};
scwin.sbm_saveCodeClass_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_saveCodeClass_submiterror = function (e) {};
scwin.btn_groupCodeSort_onclick = function (e) {
  // $c.gus.cfShowSortPopup(gr_groupCode);
};
scwin.btn_codeSort_onclick = function (e) {
  // $c.gus.cfShowSortPopup(gr_code);
};
scwin.ds_groupCode_onrowpositionchange = function (info) {
  var vgrpCd = ds_groupCode.getCellData(info.newRowIndex, "grpCd");
  if ("" != vgrpCd) {
    var arrJson = {
      grpCd: vgrpCd,
      cd: "",
      cdNm: ""
    };
    $c.sbm.execute($p, sbm_code, arrJson);
  }
};
scwin.gr_groupCode_ontextimageclick = function (rowIndex, columnIndex) {
  switch (gr_groupCode.getColumnID(columnIndex)) {
    case "upperGrpCd":
      var data = {
        callbackFn: scwin.gr_groupCode_callBackFunc
      };
      var opts = {
        id: "smpPop",
        popupName: "상위그룹코드 검색",
        modal: true,
        type: "browserPopup",
        title: "상위그룹코드 검색"
      };
      $c.win.openPopup($p, "/ui/cm/zz/groupCodePopup.xml", opts, data);
      break;
  }
};
scwin.gr_groupCode_callBackFunc = function (ret) {
  var rowIndex = ds_groupCode.getRowPosition();
  ds_groupCode.setCellData(rowIndex, "upperGrpCd", ret[0]);
  ds_groupCode.setCellData(rowIndex, "upperGrpCdNm", ret[1]);
};
scwin.gr_code_ontextimageclick = function (rowIndex, columnIndex) {
  // var vUpGrpCd = ds_groupCode.NameValue(ds_groupCode.RowPosition, "upperGrpCd");
  var rowIndexGr = ds_groupCode.getRowPosition();
  var vUpGrpCd = ds_groupCode.getCellAllData(rowIndexGr, "upperGrpCd");
  if (vUpGrpCd == null || vUpGrpCd == "") {
    //   cfAlertMsg(MSG_CM_ERR_049, ["코드그룹의 상위그룹코드"]); // 코드그룹의 상위그룹코드가 존재하지 않습니다
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_049, "코드그룹의 상위그룹코드")); // 코드그룹의 상위그룹코드가 존재하지 않습니다
    return;
  }
  switch (gr_code.getColumnID(columnIndex)) {
    case "upperCd":
      var data = {
        vUpperGrpCd: vUpGrpCd,
        callbackFn: scwin.gr_code_callBackFunc
      };
      var opts = {
        id: "smpPop",
        popupName: "상위코드 검색",
        modal: true,
        type: "browserPopup",
        title: "상위코드 검색"
      };
      $c.win.openPopup($p, "/ui/cm/zz/codePopup.xml", opts, data);
      break;
  }
};
scwin.gr_code_callBackFunc = function (ret) {
  var rowIndex = ds_code.getRowPosition();
  ds_code.setCellData(rowIndex, "upperCd", ret[0]);
  ds_code.setCellData(rowIndex, "upperCdNm", ret[1]);
};
scwin.btn_search1_init_onclick = function (e) {
  $c.gus.cfInitObjects($p, table1);
};
scwin.ed_grpCd_onkeydown = function (e) {
  if (e.keyCode == "13") {
    scwin.f_Retrieve();
  }
};
scwin.ed_grpCdNm_onkeydown = function (e) {
  if (e.keyCode == "13") {
    scwin.f_Retrieve();
  }
};
scwin.gr_groupCode_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "grpCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
scwin.gr_code_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "grpCd":
    case "cd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_grpCd',style:'',maxlength:'6',allowChar:'0-9a-zA-Z','ev:onkeydown':'scwin.ed_grpCd_onkeydown','ev:onkeyup':'scwin.ed_grpCd_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'그룹코드명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_grpCdNm',style:'',maxlength:'10','ev:onkeydown':'scwin.ed_grpCdNm_onkeydown'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_search1_init',style:'',type:'button','ev:onclick':'scwin.btn_search1_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:''},E:[{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'그룹코드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_groupCodeToExcel',id:'udc_gr_groupCode',gridID:'gr_groupCode'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_groupCode',id:'gr_groupCode',style:'',autoFit:'none',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false',rowStatusWidth:'30',rowStatusVisible:'true','ev:onviewchange':'scwin.gr_groupCode_onviewchange','ev:ontextimageclick':'scwin.gr_groupCode_ontextimageclick',fixedColumn:'1',fixedColumnNoMove:'true','ev:oneditkeyup':'scwin.gr_groupCode_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'그룹코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'그룹코드명',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'상위그룹코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'상위그룹코드명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'등록자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'등록일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'수정자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'수정일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'필터설명1',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'필터설명2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'필터설명3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',class:'req',mandatory:'true',maxLength:'8',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCdNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperGrpCd',inputType:'textImage',style:'',value:'',width:'120',readOnly:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperGrpCdNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modId',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltrDesc1',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fltrDesc2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fltrDesc3',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_groupCode_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',rowAddFunction:'scwin.f_groupCodeAddRow',rowDelFunction:'scwin.f_DelClass',cancelFunction:'scwin.f_CancelClass'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'코드 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_codeToExcel',gridID:'gr_code',id:'udc_gr_code'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_code',id:'gr_code',style:'',autoFit:'none',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false',rowStatusVisible:'true',rowStatusWidth:'30','ev:ontextimageclick':'scwin.gr_code_ontextimageclick',fixedColumn:'4',fixedColumnNoMove:'true','ev:oneditkeyup':'scwin.gr_code_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'그룹코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'코드명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'상위코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'상위코드명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'영어명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'코드약명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'영어약명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'사용여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'정렬순서',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'코드설명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'필터코드1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'필터코드2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'필터코드3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'grpCd',inputType:'text',style:'',value:'',width:'100',readOnly:'true',mandatory:'true',maxLength:'5',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cd',inputType:'text',style:'',value:'',width:'70',readOnly:'true',mandatory:'true',maxLength:'6',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'false',mandatory:'true',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCd',inputType:'textImage',style:'',value:'',width:'100',readOnly:'true',viewType:'icon',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCdNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdEngNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdNmAbbr',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cdEngNmAbbr',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'checkbox',style:'',value:'',width:'100',defaultValue:'0',trueValue:'1',falseValue:'0',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortSeq',inputType:'text',style:'',value:'',width:'100',readOnly:'false',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cdDesc',value:'',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fltrCd1',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fltrCd2',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fltrCd3',value:'',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'gr_code_spanTotal',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',rowAddFunction:'scwin.f_CodeAddRow',rowDelFunction:'scwin.f_CodeDelRow',cancelFunction:'scwin.f_CodeCancelRow'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})