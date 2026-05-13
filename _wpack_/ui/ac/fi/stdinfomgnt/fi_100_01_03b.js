/*amd /ui/ac/fi/stdinfomgnt/fi_100_01_03b.xml 20928 0a2807c1bd184dffb1b23915ce4a59228bd0edf5e6b407ec3db8b3022645e9dd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'동부;담당자',dataType:'text',length:''}},{T:1,N:'w2:column',A:{id:'empNm',name:'동부;담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'거래처;담당자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userDeptNm',name:'거래처;담당자부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addCrn',name:'종사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'소속지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'소속지사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repYn',name:'대표이메일;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exceptYn',name:'제외이메일;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'seq',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ac.fi.stdinfomgnt.SaveElecTaxinvcClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ac.fi.electaxinvc.RetreiveElecTaxinvcClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 전자세금계산서거래처정보관리
 * 메뉴경로 : 물류/오더/오더출고예정/컨테이너 출고예정(선수납)
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ac/fi/stdinfomgnt/fi_100_01_03b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-22
 * 수정이력  :
 *    - 2025-12-22      정승혜    최초작성
 *    - 2026-03-16      정승혜    기타수정
 * 메모 :
 * E-mail등록 버튼 클릭 * 
 * 부모페이지 : sd_404_01_02b
 * 물류/오더/오더출고예정/벌크출고예정(선수납)/sd_404_01_03b -> E-mail등록
 * 이외 부모페이지 많음
 * as도 저장안됨 아직 미개발
 * 조회조건 : 565707
 * 해야할 리스트 :
 */

scwin.memJson = $c.data.getMemInfo($p);
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드 

scwin.isSubCompany = false;

// hidden
scwin.ed_coCd = "";
scwin.txtCoClsCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_createHeader();
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {};
scwin.ondataload = async function () {
  await $c.gus.cfDisableObjects($p, [bAdd, bDel, bCancel, btn_save]);
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "전자세금계산서거래처정보관리");
};

//-------------------------------------------------------------------------                                                                                                                                                                                                                                               
// Dataset DEBUG                                                                                                                                                                                                                                                                                                          
//-------------------------------------------------------------------------         
scwin.dataSetDebug = function () {};
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("clntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_Create = async function () {
  let ret = await $c.gus.cfValidate($p, [gr_out]);
  if (!ret) {
    return;
  }
  let row = ds_out.insertRow();
  gr_out.setFocusedCell(row, 0, false);
};

// 행취소
scwin.f_cancelRow = function () {
  let nowRow = ds_out.getRowPosition();
  let sts = ds_out.getRowStatus(gr_out.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_out.removeRow(nowRow);
      gr_out.setFocusedCell(nowRow - 1, 0, false);
    } else {
      //아무동작 하지 않음
      ds_out.undoRow(nowRow);
    }
  }
};

// 삭제
scwin.f_delRow = function () {
  let nowRow = ds_out.getRowPosition();
  let sts = ds_out.getRowStatus(gr_out.getFocusedRowIndex());
  if (nowRow != null) {
    if (sts == "C") {
      ds_out.removeRow(nowRow);
      gr_out.setFocusedCell(nowRow - 1, 0, false);
    } else if (sts == "D") {
      //아무동작 하지 않음
    } else {
      ds_out.deleteRow(nowRow);
      //gr_out.setRowDisabled(nowRow, true);
    }
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = function () {};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_out.getModifiedIndex().length > 0 == false) {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "데이타"));
  } else {
    let ret = await $c.gus.cfValidate($p, [gr_out]);
    if (!ret) {
      return;
    } else {
      let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (confirm) {
        $c.sbm.execute($p, sbm_tr_save);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
// 엑셀다운 8+16
scwin.f_Excel = async function () {
  let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (confirm) {
    let sheetTitle = "전자세금계산서거래처정보관리";
    $c.data.downloadGridViewExcel($p, gr_out, {
      fileName: sheetTitle + ".xlsx",
      sheetName: sheetTitle
    });
  }
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (row, colid, sFlag) {
  switch (colid) {
    case '1':
      scwin.ed_coCd = scwin.vLoginCoCd;
      let param = ",,," + scwin.ed_coCd;
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, ed_clntNo.getValue(), ed_clntNm.getValue(), sFlag, null, null, null, null, param, null, null, null, null);
      break;
    case 'clntNo':
      udc_gr_clntList.cfCommonPopUpAsync(scwin.udc_gr_clntList_callBackFunc, ds_out.getCellData(row, "clntNo"), ds_out.getCellData(row, "clntNm"), 'F', null, null, null, null, null, "410", null, null, null);
      break;
    case 'acctDeptCd':
      udc_gr_acctDeptCdInfo6.cfCommonPopUpAsync(scwin.udc_gr_acctDeptCdInfo6_callBackFunc, ds_out.getCellData(row, "acctDeptCd"), ds_out.getCellData(row, "acctDeptNm"), 'F', null, null, null, null, null, null, null, null, null);
      break;
    case 'empNo':
      udc_gr_empInfo.cfCommonPopUpAsync(scwin.udc_gr_empInfo_callBackFunc, ds_out.getCellData(row, "empNo"), ds_out.getCellData(row, "empNm"), 'F', null, null, null, null, null, null, null, null, null);
      break;
    default:
      break;
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
  }
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('', '1', 'F');
};

//-------------------------------------------------------------------------
// 팝업체크
//-------------------------------------------------------------------------
scwin.f_checkPopEd = function (strCd, strNm, flag) {
  if (strCd.getValue().trim() == strCd.options.hidVal) {
    return;
  }
  strNm.setValue("");
  strCd.options.hidVal = "";
  if (strCd.getValue().trim() != "") {
    scwin.f_openPopUp('', flag, 'T');
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function () {
  //udc
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = function () {
  // 호출되는곳 없음
};
scwin.f_IsPopUp = function () {
  // 호출되는곳 없음
};
scwin.f_EventCheck = function () {
  // udc
};

// 서브미션
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_out.getRowCount());
  if (ds_out.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    ds_out.setRowPosition(0);
    gr_out.setFocusedCell(0, 0, false);
    $c.gus.cfEnableObjects($p, [bAdd, bDel, bCancel, btn_save]);
  }
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_checkPopEd(ed_clntNo, ed_clntNm, '1');
};

//그리드 공통팝업 거래처 clntNo
scwin.gr_clntNo_ontextimageclick = function (rowIndex, colId, nowValue) {
  if (colId == "clntNo") {
    scwin.f_openPopUp(rowIndex, colId);
  }
};

//그리드 공통팝업 귀속부서 acctDeptCd
scwin.gr_acctDeptCd_ontextimageclick = function (rowIndex, colId, nowValue) {
  if (colId == "acctDeptCd") {
    scwin.f_openPopUp(rowIndex, colId);
  }
};

//그리드 공통팝업 작성자사번 empNo
scwin.gr_empNo_ontextimageclick = function (rowIndex, colId, nowValue) {
  if (colId == "empNo") {
    scwin.f_openPopUp(rowIndex, colId);
  }
};

//그리드 공통팝업 거래처 clntNo
scwin.udc_gr_clntList_callBackFunc = function (rtnList) {
  let rowIdx = gr_out.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_out.setCellData(rowIdx, "clntNo", rtnList[0]);
    ds_out.setCellData(rowIdx, "clntNm", rtnList[1]);
    ds_out.setCellData(rowIdx, "crn", rtnList[4]);
  } else {
    ds_out.setCellData(rowIdx, "clntNo", "");
    ds_out.setCellData(rowIdx, "clntNm", "");
    ds_out.setCellData(rowIdx, "crn", "");
  }
};

//그리드 공통팝업 귀속부서 acctDeptCd
scwin.udc_gr_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  let rowIdx = gr_out.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_out.setCellData(rowIdx, "acctDeptCd", rtnList[0]);
    ds_out.setCellData(rowIdx, "acctDeptNm", rtnList[1]);
  } else {
    ds_out.setCellData(rowIdx, "acctDeptCd", "");
    ds_out.setCellData(rowIdx, "acctDeptNm", "");
  }
};

//그리드 공통팝업 작성자사번 empNo
scwin.udc_gr_empInfo_callBackFunc = function (rtnList) {
  let rowIdx = gr_out.getFocusedRowIndex();
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_out.setCellData(rowIdx, "empNo", rtnList[0]);
    ds_out.setCellData(rowIdx, "empNm", rtnList[1]);
  } else {
    ds_out.setCellData(rowIdx, "empNo", "");
    ds_out.setCellData(rowIdx, "empNm", "");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'',nameId:'ed_clntNm',style:'',maxlengthCode:'6',allowCharCode:'0-9',id:'udc_clntList',refDataCollection:'dma_search',code:'clntNo','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',objTypeCode:'data',objTypeName:'data',btnId:'btn_mgntClntNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'거래처코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'동부</br>담당자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'동부</br>담당자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'거래처</br>담당자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'거래처</br>담당자부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'이메일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'종사업자번호',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',style:'',value:'',width:'120',mandatory:'true',objType:'data',imageClickFunction:'scwin.gr_clntNo_ontextimageclick',maxByteLength:'８'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',readOnly:'true',maxByteLength:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNo',inputType:'textImage',style:'',value:'',width:'100',objType:'data',imageClickFunction:'scwin.gr_empNo_ontextimageclick',maxByteLength:'8'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'empNm',inputType:'text',style:'',value:'',width:'100',readOnly:'true',maxByteLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100',maxByteLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userDeptNm',inputType:'text',style:'',value:'',width:'120',maxByteLength:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'email',inputType:'text',style:'',value:'',width:'100',textAlign:'left',maxByteLength:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addCrn',inputType:'text',style:'',value:'',width:'130',maxByteLength:'4'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnRowAddObj:'bAdd',btnCancelObj:'bCancel',rowAddFunction:'scwin.f_Create',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancelRow',btnRowDelObj:'bDel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',selectID:'retrieveClntList',style:'visibility:hidden',validTitle:'',id:'udc_gr_clntList'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_gr_acctDeptCdInfo6',nameId:'',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'visibility:hidden',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_gr_empInfo',nameId:'',popupID:'',selectID:'retrieveEmpInfo',style:'visibility:hidden',validTitle:''}}]}]}]}]}]})