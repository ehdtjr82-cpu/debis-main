/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_05_01b.xml 18141 ff4c170bda60176cb0dfe5094a4d82342af56c665c5f37bfb7679dce3c27eac1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_up_serviceList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'no',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'address',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'goods',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mgntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'srvcNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt1',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'amt2',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'amt3',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'amt4',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'amt5',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'amt',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'firstDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'promissDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'summary',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_serviceList',style:'',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'num',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'사용료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'가입자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'데이콤관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'srvcNo',name:'서비스번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'conNo',name:'접속번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYm',name:'사용연월',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_tmp_serviceList',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'no',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctDeptCd',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'acctCd',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'userNm',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'address',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'goods',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'mgntNo',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'srvcNo',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'conNo',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt1',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt2',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt3',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt4',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt5',name:''}},{T:1,N:'w2:key',A:{dataType:'number',id:'amt',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'firstDt',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'promissDt',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'summary',name:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'useYm',name:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ac.fi.gnrlaccount.slipmgnt.RegistInformationProcessServiceCostCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_serviceList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 정보처리용역비업로드
 * 메뉴경로 : 회계/재무회계/일반회계/전표관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/gnrlaccount/slipmgnt/fi_201_05_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-16
 * 수정이력  :
 *    - 2025-12-16      정승혜    최초작성
 *    - 2026-01-14      정승혜    기타수정
 *    - 2026-01-18      정승혜    submitdone 조건수정
 * 메모 :
 * 조회조건 : 
 */

scwin.dDate = $c.date.getServerDateTime($p, "yyyyMM");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_Header();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
  ed_useYm.setValue(scwin.dDate);
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function () {};

//-------------------------------------------------------------------------
// function name : f_Upload
// function desc : Excel등록
//-------------------------------------------------------------------------
scwin.f_Upload = function () {
  ds_serviceList.removeAll();
  $c.data.uploadGridViewExcel($p, gr_service);
};
scwin.gr_service_onfilereadend = function (value) {
  ds_serviceList.modifyAllStatus("C");
  totalRows.setValue(ds_serviceList.getRowCount());
  if (ds_serviceList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  } else {
    $c.gus.cfAlertMsg($p, "업로드작업이 완료되었습니다.");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_serviceList.getModifiedIndex().length == 0) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let ret = await $c.gus.cfValidate($p, [ed_useYm]);
  if (!ret) {
    return false;
  }
  if (await $c.gus.cfValidate($p, [gr_service])) {
    if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
      for (i = 0; i < ds_serviceList.getRowCount(); i++) {
        ds_serviceList.setCellData(i, "useYm", ed_useYm.getValue().trim());
      }
      $c.sbm.execute($p, sbm_tr_save);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let nowRow = ds_serviceList.insertRow();
  $c.gus.cfGoPrevPosition($p, gr_service, nowRow);
  ds_serviceList.setCellData(ds_serviceList.getRowPosition(), "useYm", ed_useYm.getValue().trim());
  totalRows.setValue(ds_serviceList.getRowCount());
};

//-------------------------------------------------------------------------
// 행삭제 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  ds_serviceList.removeRow(ds_serviceList.getRowPosition());
  totalRows.setValue(ds_serviceList.getRowCount());
};

//-------------------------------------------------------------------------
// 취소 버튼 클릭시 
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  ds_serviceList.removeRow(ds_serviceList.getRowPosition());
  //ds_serviceList.undoRow(ds_serviceList.getRowPosition());
  totalRows.setValue(ds_serviceList.getRowCount());
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.f_GridPop = async function (sColid, objGrd) {
  let temp = "T,";
  let str = "";
  let param = ",,0,,,0";
  if (objGrd == "acctDeptCd") {
    await udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, str, "", "T", null, null, null, null, param, null, null, null, null);
  }
  if (objGrd == "acctCd") {
    await udc_acctCdInfo.cfCommonPopUp(scwin.udc_acctCdInfo_callBackFunc, str, "", "T", null, null, null, null, temp, null, null, null, null);
  }
};
scwin.acctDeptCd_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "acctDeptCd") {
    scwin.f_GridPop(rowIndex, columnIndex);
  }
};
scwin.acctCd_ontextimageclick = function (rowIndex, columnIndex) {
  if (columnIndex == "acctCd") {
    scwin.f_GridPop(rowIndex, columnIndex);
  }
};
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    let rowIdx = gr_service.getFocusedRowIndex();
    ds_serviceList.setCellData(rowIdx, "acctDeptCd", rtnList[0]);
  }
};
scwin.udc_acctCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    let rowIdx = gr_service.getFocusedRowIndex();
    ds_serviceList.setCellData(rowIdx, "acctCd", rtnList[0]);
  }
};
scwin.numDisplayFm = function (data, formattedData, rowIndex, colIndex) {
  data = rowIndex + 1;
  return data;
};
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, "성공적으로 저장되었습니다");
  ds_serviceList.removeAll();
  ed_useYm.setValue("");
  scwin.f_Header();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:70px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용연월',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_useYm',class:'form-control cal',calendarValueType:'yearMonth',objType:'objType',mandatory:'true',validExp:'사용연월:yes:date=YYYYMM',displayFormat:'yyyy/MM',placeholder:' ',pickerType:'dynamic'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',grp:'grd_section1',style:'',gridUpYn:'Y',gridID:'gr_service',gridUpObjType:'btn_excel',gridUpFn:'scwin.f_Upload',gridUpUserAuth:'X',btnUser:'N',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',scrollByColumn:'false',rowNumHeaderValue:'No',checkReadOnlyOnPasteEnable:'',visibleRowNumFix:'true',dataList:'data:ds_serviceList',style:'',autoFit:'allColumn',id:'gr_service',visibleRowNum:'14',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'20','ev:onfilereadend':'scwin.gr_service_onfilereadend'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'30',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'귀속부서',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'계정코드',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column9',value:'사용료',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column8',value:'가입자명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column7',value:'품목',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column6',value:'데이콤관리번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column5',value:'서비스번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column4',value:'접속번호',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'num',value:'',displayMode:'label',customFormatter:'scwin.numDisplayFm'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'acctDeptCd',allowChar:'0-9',blockSelect:'false',displayMode:'label',maxLength:'5',readOnly:'true',imageClickFunction:'scwin.acctDeptCd_ontextimageclick',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'acctCd',blockSelect:'false',displayMode:'label',readOnly:'true',imageClickFunction:'scwin.acctCd_ontextimageclick',mandatory:'true',maxLength:'7',allowChar:'0-9'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'70',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',defaultValue:'0',mandatory:'true',maxLength:'13',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'userNm',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'goods',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'mgntNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'srvcNo',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'conNo',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column20',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',style:'',id:'column18',value:'',displayMode:'label',expression:'SUM("amt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column14',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',gridID:'gr_service',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',cancelFunction:'scwin.f_UndoRow',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{userAuth:'U',style:'',id:'btn_Save',label:'저장',class:'btn',objType:'bSave','ev:onclick':'scwin.f_Save'}}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',id:'udc_acctDeptCdInfo2',nameId:'ed_coNm',popupID:'',selectID:'retrieveAcctDeptCdInfo2',style:'visibility:hidden;display: none;',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'','ev:onblurCodeEvent':'scwin.udc_companyInfo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_companyInfo_onclickEvent',id:'udc_acctCdInfo',nameId:'ed_coNm',popupID:'',selectID:'retrieveAcctCdInfo',style:'visibility:hidden;display: none;',validTitle:''}}]}]}]}]})