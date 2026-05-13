/*amd /ui/ac/fi/taxbiz/omissionmgnt/fi_406_01_01b.xml 28426 4c6e605d8f6ccb0b27f3700c24f89e47544f8cfa996c32bba7e57b2af49080a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sapuCls',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'registed',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dongbuMail',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sapuCls',name:'매출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailStd',name:'기준이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userIdStd',name:'기준사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNmStd',name:'기준사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdStd',name:'기준부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNmStd',name:'기준부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailFir',name:'1차이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userIdFir',name:'1차사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNmFir',name:'1차사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdFir',name:'1차부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNmFir',name:'1차부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'emailSec',name:'2차이메일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userIdSec',name:'2차사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNmSec',name:'2차사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCdSec',name:'2차부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNmSec',name:'2차부서명',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.omissionmgnt.RegistOmissionEmailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_evid","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_406_01_01b
// 이름     : 대체e메일등록
// 경로     : 회계/재무회계/세무/세금계산서누락관리/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-31
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.privAdmin = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "privAdmin")) ? '' : $c.data.getMemInfo($p, "privAdmin");
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userHomeClsCd")) ? '' : $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 

scwin.isSubCompany = false;
scwin.txtCoClsCd = "";
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_sapuCls"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  scwin.f_setCalender();
  lc_sapuCls.setSelectedIndex(0);
  chk_registed.setValue(false);
  chk_dongbuMail.setValue(false);
};

//-------------------------------------------------------------------------
// 조회조건 달력 셋팅
//-------------------------------------------------------------------------   	
scwin.f_setCalender = function () {
  ed_startDt.setValue(scwin.today.substring(0, 6) + "01");
  let lastDay = scwin.today.substring(0, 4) + scwin.today.substring(4, 6) + new Date(scwin.today.substring(0, 4), scwin.today.substring(4, 6), 0).getDate(); // 마지막날
  ed_endDt.setValue(lastDay);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_FieldClear();
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_startDt, ed_endDt]);
};
scwin.btn_Copy_onclick = function (e) {
  scwin.f_Copy();
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_evid_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "userNmFir") {}
};

/**
 * 그리드 셀의 편집모드가 종료되어 포커스가 빠져나온 경우 이벤트 발생
 */
scwin.gr_evid_onafteredit = function (rowIndex, columnIndex, value) {
  let columnId = gr_evid.getColumnID(columnIndex);
  if (columnId == "userNmFir") {
    if (!$c.gus.cfIsNull($p, value)) {
      /** 아이콘 클릭 이외 팝업 안열림
      scwin.f_GridPop(columnId, rowIndex, value, value);
       */
    } else {
      ds_evid.setCellData(rowIndex, 'emailFir', '');
      ds_evid.setCellData(rowIndex, 'userIdFir', '');
      ds_evid.setCellData(rowIndex, columnIndex, '');
      ds_evid.setCellData(rowIndex, 'acctDeptCdFir', '');
      ds_evid.setCellData(rowIndex, 'acctDeptNmFir', '');
    }
  }
  if (columnId == "userNmSec") {
    if (!$c.gus.cfIsNull($p, value)) {
      //scwin.f_GridPop(columnId, rowIndex, value, value);
    } else {
      ds_evid.setCellData(rowIndex, 'emailSec', '');
      ds_evid.setCellData(rowIndex, 'userIdSec', '');
      ds_evid.setCellData(rowIndex, columnIndex, '');
      ds_evid.setCellData(rowIndex, 'acctDeptCdSec', '');
      ds_evid.setCellData(rowIndex, 'acctDeptNmSec', '');
    }
  }
};

/**
 * 그리드 이미지셀 클릭 이벤트
*/
scwin.gr_evid_ontextimageclick = function (rowIndex, columnIndex) {
  let columnId = gr_evid.getColumnID(columnIndex);
  let data = gr_evid.getCellData(rowIndex, columnId);
  let status = gr_evid.getRowStatus(rowIndex);
  if (columnId == "userNmFir") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, data);
    }
  } else if (columnId == "userNmSec") {
    if (status != "D") {
      scwin.f_GridPop(columnId, rowIndex, data, data);
    }
  }
  return true;
};

/**
 * 그리드 팝업호출
 */
scwin.f_GridPop = async function (colId, row, data, str) {
  if (colId == "userNmFir") {
    ds_evid.setCellData(row, "userNmFir", "");
    udc_comCode_Grid.setSelectId("retrieveMailList2");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_Fir_callBackFunc, "", str, "", null, null, null, null, null, null, null, null, null, null, "T", null);
  } else if (colId == "userNmSec") {
    ds_evid.setCellData(row, "userNmSec", "");
    udc_comCode_Grid.setSelectId("retrieveMailList2");
    //조회조건 9번째, 전체검색허용여부 15번째
    await udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid_Sec_callBackFunc, "", str, "", null, null, null, null, null, null, null, null, null, null, "T", null);
  }
};

/**
 * 사용자 이메일(그리드팝업)
 */
scwin.udc_comCode_Grid_Fir_callBackFunc = function (rtnList) {
  let rowIdx = gr_evid.getFocusedRowIndex();
  if (rtnList[0] != "N/A" && !$c.gus.cfIsNull($p, rtnList)) {
    ds_evid.setCellData(rowIdx, "userIdFir", rtnList[0]); //ID
    ds_evid.setCellData(rowIdx, "userNmFir", rtnList[1]); //이름
    ds_evid.setCellData(rowIdx, "emailFir", rtnList[2]); //이메일
    ds_evid.setCellData(rowIdx, "acctDeptCdFir", rtnList[3]); //귀속부서코드
    ds_evid.setCellData(rowIdx, "acctDeptNmFir", rtnList[4]); //귀속부서명
  } else {
    ds_evid.setCellData(rowIdx, "userIdFir", ""); //ID
    ds_evid.setCellData(rowIdx, "userNmFir", ""); //이름
    ds_evid.setCellData(rowIdx, "emailFir", ""); //이메일
    ds_evid.setCellData(rowIdx, "acctDeptCdFir", ""); //귀속부서코드
    ds_evid.setCellData(rowIdx, "acctDeptNmFir", ""); //귀속부서명
  }
};

/**
 * 사용자 이메일(그리드팝업)
 */
scwin.udc_comCode_Grid_Sec_callBackFunc = function (rtnList) {
  let rowIdx = gr_evid.getFocusedRowIndex();
  if (rtnList[0] != "N/A" && !$c.gus.cfIsNull($p, rtnList)) {
    ds_evid.setCellData(rowIdx, "userIdSec", rtnList[0]); //ID
    ds_evid.setCellData(rowIdx, "userNmSec", rtnList[1]); //이름
    ds_evid.setCellData(rowIdx, "emailSec", rtnList[2]); //이메일
    ds_evid.setCellData(rowIdx, "acctDeptCdSec", rtnList[3]); //귀속부서코드
    ds_evid.setCellData(rowIdx, "acctDeptNmSec", rtnList[4]); //귀속부서명
  } else {
    ds_evid.setCellData(rowIdx, "userIdSec", ""); //ID
    ds_evid.setCellData(rowIdx, "userNmSec", ""); //이름
    ds_evid.setCellData(rowIdx, "emailSec", ""); //이메일
    ds_evid.setCellData(rowIdx, "acctDeptCdSec", ""); //귀속부서코드
    ds_evid.setCellData(rowIdx, "acctDeptNmSec", ""); //귀속부서명
  }
};
scwin.f_Excel = function () {
  if (ds_evid.getRowCount() <= 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
    return false;
  }
  let sheetTitle = "대체e메일등록";
  const gridId = gr_evid;
  const infoArr = [];
  const options = {
    fileName: sheetTitle + ".xlsx",
    // + ".xls",
    sheetName: sheetTitle,
    type: 4 + 8 + 16
    // fileName : "총계정원장집계표(외화).xls" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
  };
  $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
};
scwin.f_Copy = function () {
  const curRow = ds_evid.getRowPosition();
  const curDeptCd = ds_evid.getCellData(curRow, "acctDeptCdFir");
  const curUserIdSec = ds_evid.getCellData(curRow, "userIdSec");
  const curUserNmSec = ds_evid.getCellData(curRow, "userNmSec");
  const curEmailSec = ds_evid.getCellData(curRow, "emailSec");
  const curAcctDeptCdSec = ds_evid.getCellData(curRow, "acctDeptCdSec");
  const curAcctDeptNmSec = ds_evid.getCellData(curRow, "acctDeptNmSec");
  const rowCnt = ds_evid.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (curDeptCd === ds_evid.getCellData(i, "acctDeptCdFir")) {
      ds_evid.setCellData(i, "userIdSec", curUserIdSec);
      ds_evid.setCellData(i, "userNmSec", curUserNmSec);
      ds_evid.setCellData(i, "emailSec", curEmailSec);
      ds_evid.setCellData(i, "acctDeptCdSec", curAcctDeptCdSec);
      ds_evid.setCellData(i, "acctDeptNmSec", curAcctDeptNmSec);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장 
// function Parameter : null
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 시작, 종료일자 체크
  if (ed_startDt.getValue() === "" || ed_endDt.getValue() === "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["공급일자 "]);
    ed_startDt.focus();
    return;
  }

  // 시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  if (ds_evid.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  for (let i = 0; i <= ds_evid.getRowCount(); i++) {
    if (ds_evid.getRowStatus(i) === "3") {
      if (ds_evid.getCellData(i, "emailStd") === "") {
        $c.win.alert($p, "수정하신 " + i + " 번째 줄의 " + ds_evid.getCellData(i, "userNmStd") + " 사용자의 기준메일-e메일 값이 없습니다.\n" + "매출인 경우는 공통-시스템관리-사용자-사용자관리 화면에서 E-MAIL을 등록해 주세요.\n" + "권한이 없는 경우는 IT전략팀에 문의해 주십시오.");
        //ds_evid.Undo(i);
        $c.data.undoRow($p, ds_evid, "Y");
        return false;
      }
    }
  }
  let ret = await $c.win.confirm($p, "저장 하시겠습니까?");
  if (ret === true) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_search_submitdone = function (e) {
  scwin.f_setChecked();

  //cfHideDSWaitMsg(gr_evid);
  //cfShowTotalRows(totalRows, rowCnt);
  let rowCnt = ds_evid.getRowCount();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.f_setChecked = function () {
  if (dma_search.get("registed") == "") {
    chk_registed.setValue(false);
  } else if (dma_search.get("registed") == true) {
    chk_registed.setValue(true);
  }
  if (dma_search.get("dongbuMail") == "") {
    chk_dongbuMail.setValue(false);
  } else if (dma_search.get("dongbuMail") == true) {
    chk_dongbuMail.setValue(true);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 시작, 종료일자 체크
  if (ed_startDt.getValue() == "" || ed_endDt.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["공급일자 "]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  if (chk_registed.getValue() == 'true') {
    dma_search.set("registed", "1");
  } else if (chk_registed.getValue() == 'false') {
    dma_search.set("registed", "");
  }
  if (chk_dongbuMail.getValue() == 'true') {
    dma_search.set("dongbuMail", "1");
  } else if (chk_dongbuMail.getValue() == 'false') {
    dma_search.set("dongbuMail", "");
  }

  //ds_search.UseChangeInfo = false;

  if (lc_sapuCls.getSelectedIndex() == 0) {
    sbm_search.action = "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionEmailList1CMD.do";
  } else {
    sbm_search.action = "/ac.fi.taxbiz.omissionmgnt.RetrieveOmissionEmailList2CMD.do";
  }
  $c.sbm.execute($p, sbm_search);
};
scwin.dispSapuCls = function (data) {
  if (data == "SA") return "매출";else return "매입";
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공급일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'startDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'endDt',edFromId:'ed_startDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출/입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_sapuCls',style:'width: 100px;',submenuSize:'fixed',objType:'data',ref:'data:dma_search.sapuCls',sortOption:'value'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_registed',ref:'data:dma_search.registed',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'false'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기등록건제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chk_dongbuMail',ref:'data:dma_search.dongbuMail',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'false'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'dongwon.com 이외의 e메일만 '}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'증빙미등록/전자세금계산서 미전송 리스트 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'X',gridUpYn:'N',gridID:'gr_evid',gridDownYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',focusMode:'cell',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onafteredit':'scwin.gr_evid_onafteredit','ev:ontextimageclick':'scwin.gr_evid_ontextimageclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'매출입</br>구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'기준메일',width:'520',colSpan:'5',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'1차대상(담당자)',width:'570',colSpan:'5',rowSpan:''}},{T:1,N:'w2:column',A:{width:'470',inputType:'text',style:'',id:'column61',value:'2차대상(관리자)',displayMode:'label',colSpan:'5',rowSpan:''}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'180',inputType:'text',style:'',id:'column146',value:'e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'column147',value:'사용자',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column148',value:'사용자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',style:'',id:'column149',value:'부서',displayMode:'label',hiddenCol:'true'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',style:'',id:'column150',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column139',value:'e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'사용자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column137',value:'사용자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column136',value:'부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column135',value:'부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column134',value:'e메일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column133',value:'사용자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column132',value:'사용자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column131',value:'부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column130',value:'부서',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sapuCls',inputType:'text',style:'',value:'',width:'100',readOnly:'true',displayFormatter:'scwin.dispSapuCls'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'emailStd',inputType:'text',style:'',value:'',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userIdStd',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNmStd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCdStd',inputType:'text',style:'',value:'',width:'120',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNmStd',inputType:'text',style:'',value:'',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'emailFir',inputType:'text',style:'',value:'',width:'180',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userIdFir',value:'',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'userNmFir',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCdFir',value:'',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNmFir',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'emailSec',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userIdSec',value:'',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',style:'',id:'userNmSec',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCdSec',value:'',displayMode:'label',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptNmSec',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column40',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column66',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column63',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Copy',style:'',type:'button','ev:onclick':'scwin.btn_Copy_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'복사'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})