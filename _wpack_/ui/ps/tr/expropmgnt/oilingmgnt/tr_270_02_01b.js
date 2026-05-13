/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_02_01b.xml 47829 356d8ea4c0392dea9b95d86ff39ffea7570e83e5f966183d3fb751ec7e26ec52 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lux_oilStation'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_oilStation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'oilStation',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatDivision',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oilStation',saveRemovedData:'true','ev:ondataload':'scwin.ds_oilStation_ondataload','ev:onrowpositionchange':'scwin.ds_oilStation_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'주유소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClsCd',name:'주유소구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoCd',name:'정유사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilCoNm',name:'정유사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exprClntUprCond',name:'단가조건',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnYn',name:'거래여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_dcUPrice',saveRemovedData:'true','ev:ondataload':'scwin.ds_dcUPrice_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdDt',name:'기준일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가(원)',dataType:'number',defaultValue:'0.00',length:'10.2'}},{T:1,N:'w2:column',A:{id:'uprClsCd',name:'단가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeClsCd',name:'마감구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeYn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lux_oilStation',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_lux_oilStation","key":"IN_DS1"},{"id":"ds_lux_oilStation","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lux_oilStation","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lux_oilStation_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveOilStationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_oilStation","key":"OUT_DS1"},{"id":"ds_dcUPrice","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_oilStation","key":"OUT_DS1"},{"id":"ds_dcUPrice","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_master_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.tr.expropmgnt.oilingmgnt.SavePaymentCommissionDiscountUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_dcUPrice","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 주유소수수료/할인단가등록 (tr_270_02_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-26
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.sort_options = {};
scwin.sort_options.sortIndex = "clntNo oilStatClsCd oilCoCd";
scwin.sort_options.sortOrder = "1 1 1";
scwin.sort_options1 = {};
scwin.sort_options1.sortIndex = "clntNo stdDt";
scwin.sort_options1.sortOrder = "1 0";
scwin.addRow = "";
scwin.pos_rowSts = 0;
scwin.uprBfVal = "";
scwin.stdDtBfVal = "";
scwin.updateStaus = "";
scwin.isClose = "";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  const codeOptions = [{
    grpCd: "ZZ503",
    compID: "gr_oilStation:oilStatClsCd"
  },
  // 주유소구분
  {
    grpCd: "ZZ506",
    compID: "gr_oilStation:exprClntUprCond"
  } // 단가조건
  ];
  $c.data.setCommonCode($p, codeOptions);
  const LxCodeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveOilStatClsCd",
    compID: "lc_oilStatDivision"
  } // 주유소구분
  ];
  $c.data.setGauceUtil($p, LxCodeOptions);
  await scwin.lc_oilStatClsCd_onchange();
};

//-------------------------------------------------------------------------
// 조회조건 : 주유소구분 콤보 조회
//-------------------------------------------------------------------------
scwin.lc_oilStatClsCd_onchange = function (info) {
  scwin.f_RetrieveSecond(lc_oilStatDivision.getValue());
};

//-------------------------------------------------------------------------
// 조회조건 : 주유소 콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = async function (param1) {
  dma_lux_oilStation.set("cmd", "retriveOilStation");
  dma_lux_oilStation.set("strVal", param1);
  await $c.sbm.execute($p, sbm_lux_oilStation);
};
scwin.sbm_lux_oilStation_submitdone = function (e) {
  if (ds_lux_oilStation.getRowCount() > 0) {
    ds_lux_oilStation.insertRow(1);
    ds_lux_oilStation.setCellData(1, "code", "");
    ds_lux_oilStation.setCellData(1, "name", "전체");
    lc_oilStation.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 주유소목록 DataList : DataList 변경된 경우 발생 이벤트
//-------------------------------------------------------------------------
scwin.ds_oilStation_ondataload = function () {
  let rowCnt = ds_oilStation.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    // ds_oilStation.multisort(scwin.sort_options);  
    gr_oilStation.setGridReadOnly(true);
  }
};

//-------------------------------------------------------------------------
// 주유소목록 DataList : 행의 인덱스 변경된 경우 발생 이벤트
//-------------------------------------------------------------------------
scwin.ds_oilStation_onrowpositionchange = async function (info) {
  var rowIndex = info.newRowIndex;
  let chkVal = await scwin.f_gridValidate();
  if (rowIndex == null) return;

  //Detail그리드에  validate 체크   
  if (!chkVal) {
    //수정중인 포인터로 이동한다.
    for (var idx = 0; idx < ds_oilStation.getRowCount(); idx++) {
      if (ds_oilStation.getCellData(idx, "clntNo") == ds_dcUPrice.getCellData(0, "clntNo")) {
        gr_oilStation.setFocusedCell(idx, 1, false);
        break;
      }
    }

    // if( rowIndex == ds_oilStation.getRowPosition() ) {
    if (scwin.updateStaus != "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ['[수정사항 여부]']); //"@을(를) 확인하여 주십시오.";
      /*
      if(updateStaus=="1"){
      	$c.gus.cfAlertMsg(MSG_CM_ERR_041, [ '단가에 0','입력']); //"@은(는) @할 수 없습니다.";
      }					
      if(updateStaus=="2"){
      	$c.gus.cfAlertMsg(MSG_CM_ERR_018, ['[기준일자의 해당 월]']); //"@은(는) 유효한 날짜가 아닙니다."
      }							
      if(updateStaus=="3"){
      	$c.gus.cfAlertMsg(MSG_CM_ERR_041, [ '기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우','저장']);
      }
      */
    }
    return;
  } else {
    var f_dcPrice = ds_oilStation.getCellData(rowIndex, "clntNo");
    ds_dcUPrice.clearFilter();
    ds_dcUPrice.setColumnFilter({
      type: 'row',
      colIndex: 'clntNo',
      key: f_dcPrice,
      condition: 'and',
      exactMatch: true
    });
    scwin.f_GridTitleChange(rowIndex);
  }
  totalRows1.setValue(ds_dcUPrice.getAllFilteredJSON().length);
  scwin.updateStaus = "";
  await scwin.f_jobCloseYnSet();

  /* for( var i=0; i < ds_dcUPrice.getTotalRow(); i++ ) {
      let fIdx = ds_dcUPrice.getFilteredRowIndex(i);
      if( fIdx >= 0 ) {
          if( scwin.addRow == "true" ) {
              pCloseYM= scwin.fromDate_YMD;
          } else {
              pCloseYM= ds_dcUPrice.getCellData(fIdx, "stdDt");	// 기준일자
          }
          pCloseYM = pCloseYM.substring(0,6);
          pMgntNo	= ds_dcUPrice.getCellData(fIdx, "clntNo");    // 거래처
          
           console.log("=======[1]ds_oilStation_onrowpositionchange==pMgntNo:"+pMgntNo+", pCloseYM:"+pCloseYM+", fIdx:"+fIdx);
          //cfJobCloseYN(마감요청구분, 마감년월, 마감일, 작업번호, 관리번호, 리턴구분, 작업마감+선행마감체크 구분, 회사코드);
           let isCloseYN = await udc_closeYn.cfJobCloseYN("CUR", pCloseYM, "00", "TR25",  pMgntNo, "DAY", "", "");
              console.log("=======[2]ds_oilStation_onrowpositionchange==isCloseYN:"+isCloseYN+", pCloseYM:"+pCloseYM);
         
          if( (isCloseYN == "1") || (isCloseYN == "DNF") ) {
              gr_dcUPrice.setCellReadOnly(fIdx, "upr", false);  // f_EditTrue
          } else {
              gr_dcUPrice.setCellReadOnly(fIdx, "upr", true);   // f_EditNone
          }
      }
  } */

  gr_dcUPrice.setFocusedCell(0, "stdDt", false);
};
scwin.f_jobCloseYnSet = async function () {
  for (var i = 0; i < ds_dcUPrice.getAllFilteredJSON().length; i++) {
    let fIdx = ds_dcUPrice.getFilteredRowIndex(i);
    if (fIdx >= 0) {
      let vCloseYM = ds_dcUPrice.getCellData(fIdx, "stdDt"); // 기준일자
      let pCloseYM = vCloseYM.substring(0, 6);
      let pMgntNo = ds_dcUPrice.getCellData(fIdx, "clntNo"); // 거래처

      console.log("=======[1]ds_oilStation_onrowpositionchange==pMgntNo:" + pMgntNo + ", pCloseYM:" + pCloseYM + ", fIdx:" + fIdx);
      // cfJobCloseYN(마감요청구분, 마감년월, 마감일, 작업번호, 관리번호, 리턴구분, 작업마감+선행마감체크 구분, 회사코드);
      let isCloseYN = await udc_closeYn.cfJobCloseYN("CUR", pCloseYM, "00", "TR25", pMgntNo, "", "N", "");
      console.log("=======[2]ds_oilStation_onrowpositionchange==isCloseYN:" + isCloseYN + ", pCloseYM:" + pCloseYM);
      if (isCloseYN == "1" || isCloseYN == "DNF") {
        gr_dcUPrice.setCellReadOnly(fIdx, "upr", false); // f_EditTrue
      } else {
        gr_dcUPrice.setCellReadOnly(fIdx, "upr", true); // f_EditNone
      }
    }
  }
};
scwin.gr_oilStation_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (scwin.updateStaus == "") {
    // gr_dcUPrice.removeFocusedCell();
  }
};

//-------------------------------------------------------------------------
// Detail그리드에  Title명 Setting(보관주유소-수수료단가 & 직매주유소-할인단가)
//-------------------------------------------------------------------------
scwin.f_GridTitleChange = function (row) {
  var oilStatClsCd = ds_oilStation.getCellData(row, "oilStatClsCd");
  if (oilStatClsCd == "02") {
    //주유소구분 : 02(보관주유소)
    price.setValue("수수료단가");
  }
  if (oilStatClsCd == "03") {
    //주유소구분 : 03(직매주유소)
    price.setValue("할인단가");
  }
};
scwin.ds_dcUPrice_ondataload = async function () {
  let rowCnt = ds_dcUPrice.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  if (rowCnt > 0) {
    var f_dcPrice = ds_oilStation.getCellData(0, "clntNo");
    ds_dcUPrice.clearFilter();
    ds_dcUPrice.setColumnFilter({
      type: 'row',
      colIndex: 'clntNo',
      key: f_dcPrice,
      condition: 'and',
      exactMatch: true
    });
    ds_dcUPrice.multisort(scwin.sort_options1);
  }
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  var oilStatDivision = "";
  if (lc_oilStatDivision.getValue() == "02") {
    //보관주유소
    oilStatDivision = "01"; //보관
  }
  if (lc_oilStatDivision.getValue() == "03") {
    //직매주유소
    oilStatDivision = "02"; //직매
  }
  dma_search.set("oilStatDivision", oilStatDivision);
  dma_search.set("oilStation", lc_oilStation.getValue());
  $c.sbm.execute($p, sbm_master);
};
scwin.sbm_master_submitdone = function (e) {
  if (scwin.pos_rowSts >= 0) {
    gr_oilStation.setFocusedCell(scwin.pos_rowSts, "clntNo", false);
    if (lc_oilStation.getValue() != "") {
      // gr_dcUPrice.setFocusedCell(scwin.pos_rowSts, "stdDt", false);
    }
  }
};

//-------------------------------------------------------------------------
// 수수료/할인단가 Grid  : 행추가
//-------------------------------------------------------------------------
scwin.f_CostAddRow = async function () {
  let m_row = ds_oilStation.getRowPosition();
  let vIdx = ds_dcUPrice.getRowCount();
  if (m_row == null) return;
  if (ds_oilStation.getCellData(ds_oilStation.getRowPosition(), "clntNo") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, "[주유소코드]"); //필수 입력 항목입니다.		
    return;
  }
  if (ds_oilStation.getRowCount() != 0) {
    let iRow = ds_dcUPrice.insertRow(vIdx);
    // console.log("=========iRow:"+iRow+", vIdx:"+vIdx);

    let oilStatClsCd = ds_oilStation.getCellData(m_row, "oilStatClsCd");
    if (oilStatClsCd == "02") {
      // 보관주유소
      ds_dcUPrice.setCellData(vIdx, "uprClsCd", "01"); // 보관
    }
    if (oilStatClsCd == "03") {
      // 직매주유소
      ds_dcUPrice.setCellData(vIdx, "uprClsCd", "02"); // 직매
    }
    ds_dcUPrice.setCellData(vIdx, "clntNo", ds_oilStation.getCellData(m_row, "clntNo"));
    gr_dcUPrice.setFocusedCell(vIdx, "upr", false);
    scwin.addRow = "true";
    var yyyymmdd = scwin.fromDate_YMD;
    var isCloseYN = await scwin.f_JobCloseYN();
    // console.log("===========isCloseYN:"+isCloseYN);
    if (isCloseYN == "0" || isCloseYN == "2") {
      //(마감중, 마감완료인 경우) Edit 불가능
      if (yyyymmdd.substring(4, 6) >= "12") {
        ds_dcUPrice.setCellData(vIdx, "stdDt", Number(yyyymmdd.substring(0, 4)) + 1);
      } else {
        ds_dcUPrice.setCellData(vIdx, "stdDt", yyyymmdd.substring(0, 4));
      }
      ds_dcUPrice.setCellData(vIdx, "closeClsCd", "");
      scwin.addRow = "false";
      return false;
    } else {
      ds_dcUPrice.setCellData(vIdx, "stdDt", yyyymmdd);
      scwin.addRow = "false";
    }
    gr_dcUPrice.setCellReadOnly(iRow, "stdDt", false);
    gr_dcUPrice.setCellReadOnly(iRow, "upr", false);
  }
};

//-------------------------------------------------------------------------
// 수수료/할인단가 Grid : 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = async function () {
  let vRowPos = ds_dcUPrice.getRowPosition();
  let chkRowStatus = ds_dcUPrice.getRowStatus(vRowPos);
  var isCloseYN = await scwin.f_JobCloseYN();
  if (isCloseYN == "1" || isCloseYN == "DNF") {
    //edit 가능
    // 행추가(삽입)인 경우 삭제
    if (chkRowStatus == "C") {
      ds_dcUPrice.removeRow(vRowPos);
    } else {
      ds_dcUPrice.deleteRow(vRowPos);
      gr_dcUPrice.setFocusedCell(vRowPos, "upr", false);
    }
  } else if (isCloseYN == "0") {
    //isCloseYN:0(마감중) --> edit 불가능
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '삭제']);
    return false;
  } else if (isCloseYN == "2") {
    //isCloseYN:2(마감완료) --> edit 불가능
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '삭제']);
    return false;
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다.(각 dataSet 변경검사)
  if (ds_dcUPrice.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["수수료/할인단가 그리드"]); //변경된 정보가 없습니다.
    return;
  }
  if (ds_dcUPrice.getCellData(ds_dcUPrice.getRowPosition(), "clntNo") == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, "[주유소 코드]"); //필수 입력 항목입니다.
    return false;
  }
  if (!(await $c.gus.cfValidate($p, gr_oilStation, null, true))) return;
  if (!(await $c.gus.cfValidate($p, gr_dcUPrice, null, true))) return;

  //----- Add.2006.02.21 RowStatus가 insert인 "주유소 거래처별" 마감여부 체크(저장가능여부 return)
  if (!(await scwin.f_chkJobCloseYN())) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우','저장"]);
    return false;
  }
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001); //저장하시겠습니까?
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.pos_rowSts = ds_oilStation.getRowPosition(); //저장하기 전에, 커서가 있던 row위치를 변수에 담아놓기
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    // scwin.f_Retrieve();
    scwin.btn_Search_onclick();
  }
};

//-------------------------------------------------------------------------
// RowStatus가 insert인 "주유소 거래처별" 마감여부 체크
//-------------------------------------------------------------------------
scwin.f_chkJobCloseYN = async function () {
  var pReqKind = "CUR"; // 마감요청구분
  var pCloseYM = ""; // 마감년월	---------------> "기준일자" 넣어줌
  var pCloseDD = "00"; // 마감일
  var pWorkNo = "TR25"; // 작업번호    
  var pMgntNo = ""; // 관리번호    	---------------> "주유소별 거래처" 거래처
  var pRtnKind = ""; // 리턴구분
  var pDualChkYN = ""; // 작업마감+선행마감체크 구분
  var isCloseYN = ""; // 마감구분코드	
  var editNoneCnt = 0;

  //Filtering된  row갯수 만큼,, 루프돌리기
  for (let j = 0; j < ds_dcUPrice.getRowCount(); j++) {
    if (ds_dcUPrice.getRowStatus(j) == "C") {
      // as-is 상태값(0: Normal, 1: Insert, 2: Update, 3: Delete)
      pCloseYM = ds_dcUPrice.getCellData(j, "stdDt"); //기준일자
      pMgntNo = ds_dcUPrice.getCellData(j, "clntNo"); //거래처

      isCloseYN = await udc_closeYn.cfJobCloseYN(pReqKind, pCloseYM.substring(0, 6), pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN);
      ds_dcUPrice.setCellData(j, "closeClsCd", isCloseYN);

      //edit불가능 할 경우, cnt를 1씩 증가 한다. "cnt>0"이면 저장불가능.
      if (isCloseYN != "1" && isCloseYN != "DNF") {
        editNoneCnt += 1;
      }
    }
  }
  if (editNoneCnt > 0) {
    //"cnt>0"이면 저장불가능.
    return false;
  } else {
    //"cnt==0"이면 저장가능.
    return true;
  }
};

//-------------------------------------------------------------------------
// "주유소 거래처별" 마감여부 체크 (Add.2006.02.22)
//-------------------------------------------------------------------------
scwin.f_JobCloseYN = async function () {
  var pReqKind = "CUR"; // 마감요청구분
  var pCloseYM = ""; // 마감년월	---------------> "기준일자" 넣어줌
  var pCloseDD = "00"; // 마감일
  var pWorkNo = "TR25"; // 작업번호    
  var pMgntNo = ""; // 관리번호    	---------------> "주유소별 거래처" 거래처
  var pRtnKind = ""; // 리턴구분
  var pDualChkYN = ""; // 작업마감+선행마감체크 구분
  // var isCloseYN	= "";		// 마감구분코드	

  if (scwin.addRow == "true") {
    pCloseYM = scwin.fromDate_YMD;
  } else {
    pCloseYM = ds_dcUPrice.getCellData(ds_dcUPrice.getRowPosition(), "stdDt"); // 기준일자
  }
  pMgntNo = ds_dcUPrice.getCellData(ds_dcUPrice.getRowPosition(), "clntNo"); // 거래처

  //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);    
  /**
   * @param  : pReqKind  : 마감요청구분("PRE":선행마감체크, "CUR":작업마감체크)
   *           pCloseYM  : 마감년월(YYYYMM, MM이 '00'이 들어가는 경우는 년,월 마감일경우)
   *           pCloseDD  : 마감일 | 마감주기 (Y)년마감   : 00
   *                                     (H)반기마감 : 1:전기, 2:후기
   *                                     (Q)분기마감 : 1,2,3,4
   *                                     (M)월마감   : 00
   *                                     (W)주마감   : 1,2,3,4,5
   *                                     (D)일마감   : 해당일(01~31)
   *           pWorkNo   : 작업번호
   *           pMgntNo   : 관리번호(Default : "0")
   *           pRtnKind  : DAY:마감일리턴, ARR:결과를배열로, null:마감여부 결과리턴
   *           pDualChkYN: 작업마감체크기(CUR) 선행마감까지 체크를 할것인가 여부 Y:체크함
   *           pCoCd     : 회사코드
   *
   * @return : 0     : 마감중
   *           1     : 미마감
   *           2     : 마감완료
   *           DNF   : Data Not Found
   *           null  : 파라메터 오류
   *           마감일 : 리턴구분이 "DAY" 일경우(YYYYMMDD)
   *           ArrayObj : 리턴구분이 "ARR" 일경우 (리턴코드,작업번호,작업명,CUR or PRE)
   *           리턴구분이 DAY,ARR이 아닌경우 선행마감이 안된경우 (P0:마감중,P1:미마감 리턴함)
   */
  let isCloseYN = await udc_closeYn.cfJobCloseYN(pReqKind, pCloseYM.substring(0, 6), pCloseDD, pWorkNo, pMgntNo, pRtnKind, pDualChkYN);
  return isCloseYN;
};

//-------------------------------------------------------------------------
// 그리드에서, 칼럼이 PK일 경우 : update 막기, insert는 입력가능하도록 하는 함수
//-------------------------------------------------------------------------	
scwin.f_EditNone = function () {
  //gr_dcUPrice.ColumnProp('stdDt','Edit') = "None";
  // gr_dcUPrice.setColumnDisabled("stdDt", true);
};
scwin.f_EditTrue = function () {
  // gr_dcUPrice.setColumnDisabled("stdDt", false);
};
scwin.f_EditControl = function (Row, Colid) {
  if (Colid == "stdDt") {
    if (Row > 0) {
      if (ds_dcUPrice.getRowStatus(ds_dcUPrice.getRowposition()) == "C") {
        //SysStatus-----상태값(0: Normal, 1: Insert, 2: Update, 3: Delete)
        scwin.f_EditTrue();
      } else {
        scwin.f_EditNone();
      }
    }
  }
  if (Colid == "upr") {
    if (Row > 0) {
      if (ds_dcUPrice.getRowStatus(ds_dcUPrice.getRowposition()) == "C") {
        //SysStatus----- 상태값(0: Normal, 1: Insert, 2: Update, 3: Delete)
        gr_dcUPrice.setColumnDisabled("uPr", false);
      } else {
        var isCloseYN = scwin.f_JobCloseYN();
        if (isCloseYN == "1" || isCloseYN == "DNF") {
          //edit 가능			
          gr_dcUPrice.setColumnDisabled("uPr", false);
        } else {
          //edit 불가능
          gr_dcUPrice.setColumnDisabled("uPr", true);
        }
      }
    }
  }
};

//-----------------------------------------------------------------------------------
// Master그리드(ds_oilStation) OnRowPosChanged(row)시에, Detail그리드에  validate 체크
//-----------------------------------------------------------------------------------
scwin.f_gridValidate = function () {
  var stdDt = ""; //기준일자
  var rowStatus = ""; //RowStatus
  var isCloseYN = ""; //마감여부

  for (let j = 0; j < ds_dcUPrice.getRowCount(); j++) {
    //row갯수 만큼,, 루프돌리기
    rowStatus = ds_dcUPrice.getRowStatus(j);
    //if( rowStatus==1 || rowStatus==3 ){//RowStatus:1(Insert), 3(Update)
    if (rowStatus == "C" || rowStatus == "U") {
      //RowStatus:1(Insert), 3(Update)

      //2.기준일자 Validate 체크
      stdDt = ds_dcUPrice.getCellData(j, "stdDt");
      if (!$c.date.isDate($p, stdDt) || stdDt.length < 8) {
        // ds_dcUPrice.setCellData(j, "stdDt", ds_dcUPrice.getOriginalCellData(j, "stdDt"));
        scwin.updateStaus = "2";
        return false;
      }

      //3.기준일자 마감여부 체크
      isCloseYN = scwin.f_JobCloseYN();
      if (isCloseYN == "0" || isCloseYN == "2") {
        //edit 불가능	
        scwin.updateStaus = "3";
        return false;
      }

      //1.단가(원) 체크
      if (ds_dcUPrice.getCellData(j, "upr") == 0) {
        // ds_dcUPrice.setCellData(j,"upr", ds_dcUPrice.getOriginalCellData(j,"upr"));
        scwin.updateStaus = "1";
        return false;
      }
    } //end if(rowStatus)	
  } //end for 

  return true;
};

//-------------------------------------------------------------------------
// 기준일자 customFormatter SET
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
  } else if (strData.length === 4) {
    // 4자리인 경우
    let year = strData.substring(0, 4);
    return year + "/" + "" + "/";
  } else {
    return strData;
  }
};

//-------------------------------------------------------------------------
// 할인단가 : 셀 클릭시 발생 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcUPrice_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (gr_dcUPrice.getColumnID(columnIndex) == "stdDt") {
    if (rowIndex >= 0) {
      if (gr_dcUPrice.getFocusedRowStatus() == "C") {
        // SysStatus----- 상태값(0: Normal, 1: Insert, 2: Update, 3: Delete)
        gr_dcUPrice.setCellReadOnly(rowIndex, "stdDt", false); // f_EditTrue
      } else {
        gr_dcUPrice.setCellReadOnly(rowIndex, "stdDt", true); // f_EditNone
      }
    }
  }
  if (gr_dcUPrice.getColumnID(columnIndex) == "upr") {
    if (rowIndex >= 0) {
      if (gr_dcUPrice.getFocusedRowStatus() == "C") {
        // SysStatus-----상태값(0: Normal, 1: Insert, 2: Update, 3: Delete)
        gr_dcUPrice.setCellReadOnly(rowIndex, "upr", false); // f_EditTrue
      } else {
        // let isCloseYN = await scwin.f_JobCloseYN();
        // console.log("==================isCloseYN:"+isCloseYN);

        /* var pReqKind 	= "CUR";	// 마감요청구분
        var pCloseYM 	= "";		// 마감년월	---------------> "기준일자" 넣어줌
        var pCloseDD 	= "00";		// 마감일
        var pWorkNo 	= "TR25";	// 작업번호    
        var pMgntNo		= "";		// 관리번호    	---------------> "주유소별 거래처" 거래처
        var pRtnKind 	= "";		// 리턴구분
        var pDualChkYN 	= "";		// 작업마감+선행마감체크 구분
        // var isCloseYN	= "";		// 마감구분코드	
        
         if( scwin.addRow == "true" ) {
            pCloseYM= scwin.fromDate_YMD;
        } else {
            pCloseYM= ds_dcUPrice.getCellData( rowIndex,  "stdDt" );	// 기준일자
        }
        pMgntNo	= ds_dcUPrice.getCellData( rowIndex,  "clntNo" );		// 거래처
        
        //cfJobCloseYN(마감요청구분,마감년월,마감일,작업번호,관리번호,리턴구분);
        let isCloseYN = await udc_closeYn.cfJobCloseYN(pReqKind,pCloseYM.substring(0,6),pCloseDD,pWorkNo,pMgntNo,pRtnKind,pDualChkYN);
        console.log("==================isCloseYN:"+isCloseYN);
        if( (isCloseYN == "1") || (isCloseYN == "DNF") ) {
            gr_dcUPrice.setCellReadOnly(rowIndex, "upr", false);  // f_EditTrue
        } else {
            gr_dcUPrice.setCellReadOnly(rowIndex, "upr", true);   // f_EditNone
        } */
      }
    }
  }
  // let chkRowStatus = ds_oilUnitPrice.getRowStatus(rowIndex);
  // 행삭제인 경우 편집불가
  if (gr_dcUPrice.getFocusedRowStatus() == "D") {
    gr_dcUPrice.setCellReadOnly(rowIndex, "stdDt", true);
    gr_dcUPrice.setCellReadOnly(rowIndex, "upr", true);
  }
};

//-------------------------------------------------------------------------
// 할인단가 : 셀 편집모드 발생전 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcUPrice_onbeforeedit = async function (rowIndex, columnIndex, value) {
  // 단가(원) 이전값 설정
  if (gr_dcUPrice.getColumnID(columnIndex) == "upr") {
    scwin.uprBfVal = value;
  }

  // 기준일자
  if (gr_dcUPrice.getColumnID(columnIndex) == "stdDt") {
    scwin.stdDtBfVal = value;
  }
};

//-------------------------------------------------------------------------
// 할인단가이력 : 셀 편집모드 종료시 발생 이벤트
//-------------------------------------------------------------------------
scwin.gr_dcUPrice_onafteredit = async function (rowIndex, columnIndex, value) {
  let isCloseYN = await scwin.f_JobCloseYN();
  // 단가(원)
  if (gr_dcUPrice.getColumnID(columnIndex) == "upr") {
    if (ds_dcUPrice.getCellData(rowIndex, "upr") == 0) {
      $c.gus.cfAlertMsg($p, "0은 입력할 수 없습니다.");
      gr_dcUPrice.setFocusedCell(rowIndex, "upr", false);
      if ($c.gus.cfIsNull($p, value)) {
        ds_dcUPrice.setCellData(rowIndex, "upr", scwin.uprBfVal);
      } else {
        ds_dcUPrice.setCellData(rowIndex, "upr", value);
      }
    }
  }

  // 기준일자
  if (gr_dcUPrice.getColumnID(columnIndex) == "stdDt") {
    let stdDt = ds_dcUPrice.getCellData(rowIndex, "stdDt");
    if (!$c.date.isDate($p, stdDt) || stdDt.length < 8) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_018, ['[' + stdDt + ']']); //은(는) 유효한 날자가 아닙니다.
      ds_dcUPrice.setCellData(rowIndex, "stdDt", scwin.stdDtBfVal);
    }
    if (isCloseYN == "0" || isCloseYN == "2") {
      //(마감중, 마감완료인 경우) Edit 불가능
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ['기준일자의 해당 월에 대한 마감여부가 [마감중]또는 [마감완료]인 경우', '저장']); //"@은(는) @할 수 없습니다.";	 

      let org_stdDt = ds_dcUPrice.getOriginalCellData(rowIndex, "stdDt");
      let vStdDt = ds_dcUPrice.getCellData(rowIndex, "stdDt");
      // console.log("===============>org_stdDt:"+org_stdDt+":"+ org_stdDt.substring(4,6)+"--vStdDt:"+vStdDt+":"+vStdDt.substring(4,6));
      if (vStdDt.substring(4, 6) >= "12") {
        ds_dcUPrice.setCellData(rowIndex, "stdDt", Number(vStdDt.substring(0, 4)) + 1);
      } else {
        ds_dcUPrice.setCellData(rowIndex, "stdDt", vStdDt.substring(0, 4));
      }
      gr_dcUPrice.setFocusedCell(rowIndex, "stdDt", false);
      ds_dcUPrice.setCellData(ds_dcUPrice.getRowPosition(), 'closeClsCd', "");
    }
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력 : 주유소목록
//-------------------------------------------------------------------------
scwin.f_Excel_1 = async function () {
  if (ds_oilStation.getRowCount() == 0) {
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  let gridColCount = gr_oilStation.getTotalCol();
  let startRowIndex = 0;
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "주유소",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "white"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "주유소구분 [" + lc_oilStatDivision.getText(true) + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 3,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "주유소 [" + lc_oilStation.getText(true) + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "주유소.xlsx",
    sheetName: "주유소",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1,
    hiddenVisible: false
  };
  await $c.data.downloadGridViewExcel($p, gr_oilStation, options, infoArr);
};

//-------------------------------------------------------------------------
// 엑셀 출력 : 수수료/할인단가
//-------------------------------------------------------------------------
scwin.f_Excel_2 = async function () {
  if (ds_dcUPrice.getRowCount() == 0) {
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  let gridColCount = gr_dcUPrice.getTotalCol();
  let oilStatClsCd = ds_oilStation.getCellData(ds_oilStation.getRowPosition(), "oilStatClsCd");
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "수수료할인단가",
    textAlign: "center",
    fontSize: 12,
    drawBorder: false,
    color: "black",
    backgroundColor: "white"
  }, {
    rowIndex: 2,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "주유소 [" + lc_oilStation.getText(true) + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }, {
    rowIndex: 3,
    colIndex: 0,
    colSpan: gridColCount,
    rowSpan: 1,
    text: "주유소구분 [" + oilStatClsCd + "]",
    textAlign: "left",
    fontSize: 10,
    drawBorder: false,
    color: "black",
    backgroundColor: "#ffffff"
  }];
  const options = {
    fileName: "수수료할인단가.xlsx",
    sheetName: "수수료할인단가",
    startRowIndex: 4,
    startColumnIndex: 0,
    type: 1,
    hiddenVisible: false
  };
  await $c.data.downloadGridViewExcel($p, gr_dcUPrice, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comChkRes',type:'page',variableClone:'true',src:'/cm/udc/comChkRes.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled','ev:onchange':'scwin.lc_oilStatClsCd_onchange',id:'lc_oilStatDivision',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.oilStatDivision'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주유소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStation',style:'width: 250px;',submenuSize:'fixed',ref:'data:dma_search.oilStation',visibleRowNum:'15',sortMethod:'ascending',sortOption:'label','ev:onclick':'scwin.lc_oilStation_onclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_oilStation'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox wfix flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'주유소 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_oilStation',gridDownUserAuth:'X',gridUpYn:'N',userAuth:'X',id:'udc_topGrdBtn1',gridDownFn:'scwin.f_Excel_1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_oilStation',focusMode:'both',id:'gr_oilStation',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_oilStation_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'주유소</br>코드',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'주유소명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'주유소</br>구분',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'정유사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'정유사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'단가조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'거래여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'crn',inputType:'text',removeBorderStyle:'false',width:'120',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'oilStatClsCd',inputType:'select',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'oilCoCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'oilCoNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'exprClntUprCond',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',style:'',id:'txnYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width:500px;'},E:[{T:1,N:'xf:group',A:{id:'',style:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'price',label:'수수료/할인단가 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_dcUPrice',gridUpYn:'N',gridDownUserAuth:'X',userAuth:'X',gridDownFn:'scwin.f_Excel_2',id:'udc_topGrdBtn2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_dcUPrice',id:'gr_dcUPrice',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',dataName:'수수료단가',validExp:'stdDt:기준일자:yes:date=YYYYMMDD&length=8:key','ev:onbeforeedit':'scwin.gr_dcUPrice_onbeforeedit','ev:oncellclick':'scwin.gr_dcUPrice_oncellclick','ev:onafteredit':'scwin.gr_dcUPrice_onafteredit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:'height:40px'},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'기준일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'단가(원)',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'단가구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'마감구분',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'stdDt',inputType:'text',removeBorderStyle:'false',width:'100',customFormatter:'scwin.f_dateFormat',readOnly:'true',editFormat:'########'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'upr',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'right',dataType:'float',defaultValue:'0.00',excelCellType:'number',applyFormat:'all',displayFormat:'#,###.00',maxLength:'5.2',minWidth:'0',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'uprClsCd',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeClsCd',inputType:'text',style:'',textAlign:'left',value:'',width:'100',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',gridID:'gr_dcUPrice',id:'udc_bottomGrd',rowAddFunction:'scwin.f_CostAddRow',rowAddUserAuth:'C',rowDelFunction:'scwin.f_DelRow',rowDelUserAuth:'D',style:''}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comChkRes',A:{codeId:'',id:'udc_closeYn',nameId:'',selectID:'',style:'width:%; height:px; ;visibility:hidden;display:none;'}}]}]}]}]}]})