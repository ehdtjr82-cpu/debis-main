/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_01_01b.xml 31663 53b56d912ee079a06ac3ff6c508bc4c475198e91e6a6010f2717e4caac4d1c22 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_oilCompany'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilCompany',saveRemovedData:'true','ev:ondataload':'scwin.ds_oilCompany_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'정유사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'정유사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprClntTelNo',name:'대표전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnYn',name:'거래여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcPrice',saveRemovedData:'true','ev:onaftercolumnfilterchange':'scwin.ds_dcPrice_onaftercolumnfilterchange','ev:ondataload':'scwin.ds_dcPrice_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'정유사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'할인단가(원)',dataType:'number',defaultValue:'0.00',length:'10.2'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilCompany',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_oilCompany',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveOilCompanyListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilCompany","key":"OUT_DS1"},{"id":"ds_dcPrice","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_oilCompany","key":"OUT_DS1"},{"id":"ds_dcPrice","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_oilCompany_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/ps.tr.expropmgnt.oilingmgnt.SaveDiscountUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_dcPrice","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_Save_submit','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 정유사할인단가등록 (tr_270_01_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-14
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.sort_options = {};
scwin.sort_options.sortIndex = "clntNo regDtm";
scwin.sort_options.sortOrder = "1 1";
scwin.sort_options1 = {};
scwin.sort_options1.sortIndex = "clntNo stdDt";
scwin.sort_options1.sortOrder = "1 0";
scwin.isDate = scwin.fromDate_YMD;
scwin.oilC_rowPosit = 0;
scwin.tOilCompany = "";
scwin.chkFlag = false;
scwin.uprBfVal = "";
scwin.onpageload = async function () {
  //작업번호의 마지막 마감완료일 체크
  scwin.isDate = await udc_check.cfLastJobCloseDate("TR39", "YM");
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retrieveOilCompany",
    compID: "lc_oilCompany"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.f_oilCompCallBackFunc);
};
scwin.f_oilCompCallBackFunc = function (ret) {
  lc_oilCompany.addItem("000000", "최저가", 1);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("oilCompany", lc_oilCompany.getValue());
  scwin.tOilCompany = lc_oilCompany.getText("true");
  $c.sbm.execute($p, sbm_oilCompany);
};
scwin.sbm_oilCompany_submitdone = function (e) {
  // console.log("====================>sbm_oilCompany_submitdone-scwin.oilC_rowPosit:"+scwin.oilC_rowPosit);
  // 데이타셋을 저장한 후에도, 저장하기 전에 커서가 있던 위치로 이동시켜 준다.
  // ds_oilCompany.setRowPosition(scwin.oilC_rowPosit);
  if (scwin.oilC_rowPosit > 0) {
    gr_oilCompany.setFocusedCell(scwin.oilC_rowPosit, "clntNo", false);
    scwin.gr_oilCompany_oncellclick(scwin.oilC_rowPosit, null, null);
  }
};

//-------------------------------------------------------------------------
// 기준일자 Format적용
//-------------------------------------------------------------------------
scwin.f_dateFormat = function (data) {
  if (data == null || data === "") {
    return "";
  }
  let strData = data.toString().trim();
  if (strData.length === 8) {
    // 8자리인 경우
    let year = strData.substring(0, 4);
    let month = strData.substring(4, 6);
    let day = strData.substring(6, 8);
    return year + "/" + month + "/" + day;
  } else if (strData.length === 6) {
    // 6자리인 경우
    let year = strData.substring(0, 4);
    let month = strData.substring(4, 6);
    return year + "/" + month + "/";
  } else {
    return strData;
  }
};

//-------------------------------------------------------------------------
// 정유사 목록 ondataload
//-------------------------------------------------------------------------
scwin.ds_oilCompany_ondataload = function () {
  let rowCnt = ds_oilCompany.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    //    $c.gus.cfDisableBtn([btn_Save]);
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  gr_oilCompany.setFocusedCell(0, 0, true);

  // if (rowCnt > 0) {        
  //     ds_oilCompany.multisort(scwin.sort_options);  
  //     gr_oilCompany.setGridReadOnly(true);
  // }    
};

//-------------------------------------------------------------------------
// 할인단가 이력 ondataload
//-------------------------------------------------------------------------
scwin.ds_dcPrice_ondataload = function () {
  let rowCnt = ds_dcPrice.getTotalRow();
  /* if( rowCnt == 0 ){
     //    $c.gus.cfDisableBtn([btn_Save]);
      if( $c.gus.cfCheckCreateFlag() == true){
      	$c.gus.cfTurnCreateFlag(false);
      }else{
   		$c.gus.cfAlertMsg(MSG_CM_WRN_002);
      }
        return;
  }  */

  if (rowCnt > 0) {
    totalRows1.setValue(rowCnt);
    var f_dcPrice = ds_oilCompany.getCellData(0, "clntNo");
    ds_dcPrice.clearFilter();
    ds_dcPrice.setColumnFilter({
      type: 'row',
      colIndex: 'clntNo',
      key: f_dcPrice,
      condition: 'and',
      exactMatch: true
    });
    ds_dcPrice.multisort(scwin.sort_options1);
    // gr_dcPrice.setColumnDisabled("clntNo", true);  
    gr_dcPrice.setFocusedCell(0, 1, false);
  }
};

//-------------------------------------------------------------------------
// 조회 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장 전 Validate Check
//-------------------------------------------------------------------------
scwin.f_SaveChk = async function () {
  if (!(await $c.gus.cfValidate($p, gr_oilCompany, null, true))) return;
  if (!(await $c.gus.cfValidate($p, gr_dcPrice, null, true))) return;
  if (scwin.isDate != null) {
    // 당월 체크    
    let chkM = await scwin.f_chkMonth();
    if (!chkM) return false;
  }
  for (let j = 0; j < ds_dcPrice.getRowCount(); j++) {
    let vRowSts = ds_dcPrice.getRowStatus(j);
    // console.log("===========>getRowStatus:"+vRowSts);
    if (vRowSts == "C" || vRowSts == "U") {
      if ($c.gus.cfIsNull($p, ds_dcPrice.getCellData(j, "clntNo"))) {
        await $c.gus.cfAlertMsg($p, "정유사코드는 필수입력항목입니다.");
        return false;
      }
      if ($c.str.trim($p, ds_dcPrice.getCellData(j, "stdDt")).length != 8) {
        await $c.gus.cfAlertMsg($p, "할인단가 등록의 " + (j + 1) + "번째 데이터에서 기준일자는 8자리수만큼 입력하십시오.");
        gr_dcPrice.setFocusedCell(j, "stdDt", false);
        return false;
      }
      t_upr = ds_dcPrice.getCellData(j, "upr");
      if ($c.gus.cfIsNull($p, t_upr) || t_upr >= 0) {
        await $c.gus.cfAlertMsg($p, "할인단가 등록의 " + (j + 1) + "번째 데이터에서 할인단가(원)은 -0.01 이하로 입력하십시오.");
        gr_dcPrice.setFocusedCell(j, "upr", false);
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 변경한 데이터가 있는지 체크한다.(각 dataSet 변경검사)    
  if (ds_dcPrice.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['할인단가 그리드']); //변경된 정보가 없습니다.
    return;
  }

  // Grid 필수 체크
  let chkVal = await scwin.f_SaveChk();
  if (!chkVal) return;
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001); //저장하시겠습니까?
  if (confirm) {
    $c.sbm.execute($p, sbm_Save);
  }
};
scwin.sbm_Save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.oilC_rowPosit = ds_oilCompany.getRowPosition(); //저장하기 전에, 커서가 있던 row위치를 변수에 담아놓기
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 당월 체크
// As-Is	0:Normal/none	1:Insert	2:Delete	3:Update	4:Logical 
// status : R / statusValue : 0 - 초기 상태. (변화없음)
// status : U / statusValue : 1 - 갱신. (update API 호출 시)
// status : C / statusValue : 2 - 삽입. (insert API 호출 시)
// status : D / statusValue : 3 - 삭제. (delete API 호출 시)
// status : V / statusValue : 4 - 삽입 후 삭제. (insert API 후 delete API 호출)
// status : E / statusValue : 5 - 제거. (remove API 호출 시)
//-------------------------------------------------------------------------
scwin.f_chkMonth = async function () {
  var yyyymmdd = "";
  var yyyymm = "";

  //row갯수 만큼,, 루프돌리기
  for (let j = 0; j < ds_dcPrice.getRowCount(); j++) {
    // chkRowStatus= ds_dcPrice.getRowIndexByStatus('CUD');	
    let chkRowStatus = ds_dcPrice.getRowStatus(j);
    yyyymmdd = ds_dcPrice.getCellData(j, "stdDt");
    yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);

    // console.log("===================>scwin.isDate:"+scwin.isDate+", yyyymm:"+yyyymm+", yyyymmdd:"+yyyymmdd+", chkRowStatus:"+chkRowStatus);			
    if (chkRowStatus == "C" || chkRowStatus == "D" || chkRowStatus == "U") {
      //RowStatus:1(Insert),2(Delete),3(Update)
      if (yyyymm > yyyymmdd.substring(0, 6)) {
        $c.gus.cfAlertMsg($p, "기준일자는 마감완료일이후 이어야 합니다.");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// 두번째 그리드  : 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let m_row = ds_oilCompany.getRowPosition();
  let vIdx = ds_dcPrice.getRowCount();
  if (ds_oilCompany.getCellData(ds_oilCompany.getRowPosition(), "clntNo") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, "[정유사코드]"); //필수 입력 항목입니다.		
    return;
  }
  if (ds_oilCompany.getRowCount() != 0) {
    ds_dcPrice.insertRow(vIdx);
    gr_dcPrice.setRowReadOnly(vIdx, false);
    if (scwin.isDate != null) {
      var yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
      ds_dcPrice.setCellData(vIdx, "stdDt", yyyymm);
    }
    ds_dcPrice.setCellData(vIdx, "clntNo", ds_oilCompany.getCellData(m_row, "clntNo"));
    gr_dcPrice.setFocusedCell(vIdx, 2, false);
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드 : 행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  /* if( scwin.isDate != null ) {
  	var yyyymmdd = ds_dcPrice.getCellData(ds_dcPrice.getRowPosition(), "stdDt");
  	var yyyymm	 = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
  	var	chkRowStatus= ds_dcPrice.getRowIndexByStatus('CUD');	
  		if( ( yyyymm > yyyymmdd.substring(0,6) ) &&  (chkRowStatus.length <1 ) ) { //RowStatus:2(Insert) 
  		$c.gus.cfAlertMsg(MSG_CM_ERR_041, [ '기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우','삭제']); //"@은(는) @할 수 없습니다.";
  		return false;		
  	} else {
  		ds_dcPrice.deleteRow(ds_dcPrice.getRowPosition());
  	}
  } else {
  	ds_dcPrice.removeRow(ds_dcPrice.getRowPosition());
  } */

  let vRowPos = ds_dcPrice.getRowPosition();
  let chkRowStatus = ds_dcPrice.getRowStatus(vRowPos);
  if (scwin.isDate != null) {
    var yyyymmdd = ds_dcPrice.getCellData(vRowPos, "stdDt");
    var yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
    if (yyyymm > yyyymmdd.substring(0, 6)) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '삭제']); //"@은(는) @할 수 없습니다.";
      return false;
    } else {
      // 행추가(삽입)인 경우 삭제
      if (chkRowStatus == "C") {
        ds_dcPrice.removeRow(vRowPos);
      } else {
        ds_dcPrice.deleteRow(vRowPos);
        gr_dcPrice.setFocusedCell(vRowPos, "upr", false);
      }
    }
  } else {
    // 행추가(삽입)인 경우 삭제
    if (chkRowStatus == "C") {
      ds_dcPrice.removeRow(vRowPos);
    } else {
      ds_dcPrice.deleteRow(vRowPos);
      gr_dcPrice.setFocusedCell(vRowPos, "upr", false);
    }
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드 : 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  // var d_row = ds_dcPrice.getRowPosition();
  // var m_row = ds_oilCompany.getRowPosition(); 
  // if( $c.gus.cfIsNull(d_row)) {
  //         d_row=0; 
  // }
  // ds_dcPrice.undoRow(d_row);
  // ds_dcPrice.setCellData(d_row, "clntNo", ds_oilCompany.getCellData(m_row,"clntNo"));   

  // let vEdit = gr_dcPrice.isEditing();
  // let vFIdx = gr_dcPrice.getAllFocusedIndex();
  // console.log("=================>vEdit:"+vEdit+", vFIdx:"+vFIdx);
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditNone = function () {
  gr_dcPrice.setColumnDisabled("stdDt", true);
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditTrue = function () {
  gr_dcPrice.setColumnDisabled("stdDt", false);
  gr_dcPrice.setColumnDisabled("upr", true);
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditControl = function (Row, Colid) {
  /*=====  insert[1],delete[2],update[3]  =====*/
  if (Row > 0) {
    if (ds_dcPrice.getRowIndexByStatus("C")) {
      scwin.f_EditTrue();
    } else {
      scwin.f_EditNone();
      if (scwin.isDate != null) {
        scwin.f_chkEdit();
      }
    }
  }
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_chkEdit = function () {
  var yyyymmdd = ds_dcPrice.getCellData(ds_dcPrice.getRowposition(), "stdDt");
  var yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
  if (yyyymm > yyyymmdd.substring(0, 6)) {
    gr_dcPrice.setColumnDisabled("upr", false);
  } else {
    gr_dcPrice.setColumnDisabled("upr", true);
  }
};

//-------------------------------------------------------------------------
//  두번째 그리드에  총 row 구하는 FUNCTION
//-------------------------------------------------------------------------	
scwin.lfn_Click = function (row, colid) {
  var totalCount = ds_dcPrice.getRowCount();

  //	totalRows2.innerHTML = "&nbsp;&nbsp;총 "+totalCount+"건";
};

//-------------------------------------------------------------------------
/**
*  해당월에서 iBase만큼 차이가 나는 월을 구한다.
*
*  sYearMonth   - 해당월
*  sMonth       - 해당월
*  iBase        - 월수 차이
*  iMod         - 0:html에서 호출, 1:js 에서 호출
*/
//-------------------------------------------------------------------------
scwin.lfn_GetMonth = function (sYearMonth, iBase, iMod) {
  var sYear = $c.num.parseFloat($p, sYearMonth.substring(0, 4));
  var sMonth = $c.num.parseFloat($p, sYearMonth.substring(4, 6));
  var sResult;
  sMonth = sMonth + iBase;
  if (sMonth >= 13) {
    sMonth = sMonth - 12;
    sYear = sYear + 1;
  } else if (sMonth <= 0) {
    sMonth = sMonth + 12;
    sYear = sYear - 1;
  }
  if (sMonth < 10) sResult = sYear.toString() + '0' + sMonth.toString();else sResult = sYear.toString() + sMonth.toString();
  if (iMod == 0) return document.write(sResult);else return sResult;
};

//-------------------------------------------------------------------------
// 정유사 목록 셀클릭시 할인단가이력 필터링
//-------------------------------------------------------------------------
scwin.gr_oilCompany_oncellclick = function (rowIndex, columnIndex, columnId) {
  var f_dcPrice = ds_oilCompany.getCellData(rowIndex, "clntNo");
  ds_dcPrice.clearFilter();
  ds_dcPrice.setColumnFilter({
    type: 'row',
    colIndex: 'clntNo',
    key: f_dcPrice,
    condition: 'and',
    exactMatch: true
  });
};

//-------------------------------------------------------------------------
// 할인단가 이력 
//-------------------------------------------------------------------------
scwin.ds_dcPrice_onaftercolumnfilterchange = function () {
  var rowCnt = ds_dcPrice.getAllFilteredJSON();
  totalRows1.setValue(rowCnt.length);
};

//-------------------------------------------------------------------------
// 할인단가이력 : 셀 편집모드 발생전 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcPrice_onbeforeedit = function (rowIndex, columnIndex, value) {
  // 할인단가(원) 이전값 설정
  if (columnIndex == 2) {
    scwin.uprBfVal = value;
  }
};

//-------------------------------------------------------------------------
// 할인단가이력 : 셀 클릭시 발생 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcPrice_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.chkFlag = true;
  let chkRowStatus = ds_dcPrice.getRowStatus(rowIndex);
  if (chkRowStatus == "C") {
    gr_dcPrice.setRowReadOnly(rowIndex, false);
  } else if (chkRowStatus == "D") {
    // 행삭제인 경우 편집불가
    gr_dcPrice.setRowReadOnly(rowIndex, true);
  } else {
    if (scwin.isDate != null) {
      var yyyymmdd = ds_dcPrice.getCellData(rowIndex, "stdDt");
      var yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
      if (yyyymm > yyyymmdd.substring(0, 6)) {
        gr_dcPrice.setCellReadOnly(rowIndex, "upr", true);
      } else {
        gr_dcPrice.setCellReadOnly(rowIndex, "upr", false);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 할인단가이력 : 셀 편집모드 종료시 발생 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcPrice_onafteredit = function (rowIndex, columnIndex, value) {
  // 할인단가(원)
  if (columnIndex == 2) {
    if (ds_dcPrice.getCellData(rowIndex, "upr") == 0) {
      $c.gus.cfAlertMsg($p, "0은 입력할 수 없습니다.");
      if ($c.gus.cfIsNull($p, value)) {
        ds_dcPrice.setCellData(rowIndex, "upr", scwin.uprBfVal);
      } else {
        ds_dcPrice.setCellData(rowIndex, "upr", value);
      }
    }
  }

  // 기준일자
  if (columnIndex == 1) {
    if (scwin.isDate != null) {
      var yyyymmdd = ds_dcPrice.getCellData(rowIndex, "stdDt");
      var yyyymm = scwin.lfn_GetMonth(scwin.isDate, 1, 1);
      if (yyyymm > yyyymmdd.substring(0, 6)) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '저장']); ////"@은(는) @할 수 없습니다.";	 
        ds_dcPrice.setCellData(rowIndex, "stdDt", yyyymm);
        return;
      }
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정유사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilCompany',style:'width: 240px;',submenuSize:'fixed',ref:'',visibleRowNum:'10',sortMethod:'ascending',sortOption:'value',chooseOptionLabel:'전체','ev:onclick':'scwin.lc_oilCompany_onclick'},E:[{T:1,N:'xf:choices'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{id:'udc_check',selectID:'',codeId:'',nameId:'',style:'width:%; height:px;visibility:hidden;display: none;'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정유사 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_oilCompany',gridDownUserAuth:'X',gridUpYn:'N',id:'udc_topGrdBtn1',grdDownOpts:'{"fileName" : "정유사목록.xlsx" , "sheetName" : "정유사목록"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilCompany',id:'gr_oilCompany',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_oilCompany_oncellclick',cellStatusVisible:'false',readOnly:'true',fixedColumn:'2',fixedColumnNoMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'정유사코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'정유사명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'대표전화',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'거래여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crn',inputType:'text',removeBorderStyle:'false',width:'120',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'exprClntTelNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'regDtm',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'txnYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'할인단가 이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_dcPrice',gridUpYn:'N',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "할인단가이력.xlsx" , "sheetName" : "할인단가이력"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_dcPrice',id:'gr_dcPrice',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true','ev:onafteredit':'scwin.gr_dcPrice_onafteredit','ev:oncellclick':'scwin.gr_dcPrice_oncellclick','ev:onbeforeedit':'scwin.gr_dcPrice_onbeforeedit',dataName:'할인단가 등록',validExp:'stdDt:기준일자:yes:date=YYYYMMDD&length=8:key'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'정유사코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'기준일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column13',value:'할인단가(원)',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stdDt',inputType:'text',removeBorderStyle:'false',width:'100',maxLength:'8',customFormatter:'scwin.f_dateFormat',editFormat:'########'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upr',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.00',dataType:'float',defaultValue:'0.00',applyFormat:'all',maxLength:'5.2',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DeleteRow',gridID:'gr_dcPrice',rowAddUserAuth:'C',rowDelUserAuth:'D',id:'udc_bottomGrd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})