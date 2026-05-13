/*amd /ui/ds/op/wrkrslts/stvwrkrslts/op_306_02_16b.xml 45119 b73d80fd8053ceee671f1cd28076cf52559b7a6523c9464f922b448726727d94 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_assgncd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onRowPositionChange','ev:oncelldatachange':'scwin.ds_master_chkCellChange','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseExceptYn',name:'제외',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'접안장소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'하선장소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'BL NO.',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packQty',name:'포장수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCubic',name:'총CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNm',name:'수하인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sztp',name:'SIZE/TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transRsltsYn',name:'운송실적여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fl',name:'F/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarPrd',name:'신고기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owhouseWrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mcomAssgnClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_assgncd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveOtherWareHouseAssgnCd'}},{T:1,N:'w2:key',A:{id:'param3',name:'name3',dataType:'text',defaultValue:'NOTAPPLY'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_mcomAssgnClsCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'CommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retrieveOtherWareHouseAssgnCd'}},{T:1,N:'w2:key',A:{id:'param3',name:'name3',dataType:'text',defaultValue:'NOTAPPLY'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ret'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportQryStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arrvlportQryEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'printClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkYn',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'licenceAcqYn',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'owHouseClsCd',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrClsCd',name:'name14',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_assgncd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_assgncd',target:'data:json,{"id":"ds_assgncd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_mcomAssgnClsCd',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_mcomAssgnClsCd',target:'data:json,{"id":"ds_mcomAssgnClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_submit','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ret',action:'/ds.op.wrkrslts.stvwrkrslts.RetrieveOtherWarehouseAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_ret","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ret_Done','ev:submiterror':'scwin.sbm_ret_Error',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.stvwrkrslts.CreateOtherWarehouseAssignListCkOrderCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.login = $c.data.getMemInfo($p, "loUpperLobranCd");
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.olddata = "";

//-------------------------------------------------------------------------
// 화면 로드시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드데이터 호출   
  const codeOptions = [{
    grpCd: "LO119",
    compID: "acb_wHouseClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// UDC 로드 완료시
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $c.sbm.execute($p, sbm_lobran);
  $c.sbm.execute($p, sbm_assgncd);
  $c.sbm.execute($p, sbm_mcomAssgnClsCd);
  $c.gus.cfEnableObjects($p, btn_ManifestEdit);
};
setTimeout(scwin.ondataload = function () {
  acb_lobranCd.setValue(scwin.login);
  acb_assgnClsCd.setValue("B2");
  acb_lobranCd.focus();
  ica_arrvlportQryDt.setInitDate(scwin.strCurDate, scwin.strCurDate);
}, 100);

//-------------------------------------------------------------------------
// 점소데이터 로드 완료시 
//-------------------------------------------------------------------------
scwin.sbm_lobran_submitDone = function (e) {
  acb_lobranCd.setValue(scwin.login);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  ds_master.removeAll();
  dma_ret.undo();
  dma_ret.set("lobranCd", acb_lobranCd.getValue());
  dma_ret.set("wrkPlCd", ed_wrkPlCd.getValue().trim());
  dma_ret.set("arrvlportQryStDt", ica_arrvlportQryStDt.getValue().trim());
  dma_ret.set("arrvlportQryEndDt", ica_arrvlportQryEndDt.getValue().trim());
  dma_ret.set("lineCd", ed_lineCd.getValue().trim());
  dma_ret.set("vsslCd", ed_vsslCd.getValue().trim());
  dma_ret.set("printClsCd", acb_printClsCd.getValue());
  dma_ret.set("staffNm", ed_staffNm.getValue());
  dma_ret.set("wrkYn", acb_wrkYn.getValue());
  ;
  dma_ret.set("assgnClsCd", acb_assgnClsCd.getValue());
  if (cbx_licenceAcqYn.getValue() == "T") {
    dma_ret.set("licenceAcqYn", "Y");
  } else {
    dma_ret.set("licenceAcqYn", "N");
  }
  dma_ret.set("owHouseClsCd", acb_wHouseClsCd.getValue());
  dma_ret.set("odrClsCd", acb_odrClsCd.getValue());
  $c.sbm.execute($p, sbm_ret);
};

//-------------------------------------------------------------------------
// 조회 조건 초기화 
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ica_arrvlportQryStDt.setValue(scwin.strCurDate);
  ica_arrvlportQryEndDt.setValue(scwin.strCurDate);
  acb_lobranCd.setValue(scwin.login);
  acb_lobranCd.focus();
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 1);
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (LINE)
//-------------------------------------------------------------------------
scwin.udc_Line_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_Line_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 2, true);
};
scwin.udc_Line_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(LINE)
//-------------------------------------------------------------------------
scwin.udc_Line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (선박)
//-------------------------------------------------------------------------
scwin.udc_Vssl_onClick = async function (e) {
  scwin.f_openCommonPopUp(3, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'F');
};
scwin.udc_Vssl_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 3, true);
};
scwin.udc_Vssl_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 3, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(LINE)
//-------------------------------------------------------------------------
scwin.udc_Vssl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      var wrkPlGbCd = "7"; //CY,장치장창고,CFS,타창고

      var lodeptCd = acb_lobranCd.getValue();
      var paramList = "," + lodeptCd + "," + wrkPlGbCd;
      udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, pCode, pName, pClose, null, null, null, null, paramList, null, null, null, null); // 작업장

      //작업장코드  작업장명
      break;
    case 2:
      // LINE
      udc_Line.cfCommonPopUp(scwin.udc_Line_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      udc_Vssl.cfCommonPopUp(scwin.udc_Vssl_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , "모선,모선코드,모선명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      udc_comCode_Grid.setSelectId("retrieveAssgnWhouseList");
      udc_comCode_Grid.cfCommonPopUp(scwin.udc_comCode_Grid1_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , acb_lobranCd.getValue() // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업관련
//-------------------------------------------------------------------------
scwin.gr_master_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.olddata = value;
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_master.getColumnID(columnIndex);
  if (colid == "assgnWhouseNm") {
    if (scwin.olddata != ds_master.getCellData(rowIndex, "assgnWhouseNm")) {
      scwin.f_openCommonPopUp(4, '', ds_master.getCellData(rowIndex, "assgnWhouseNm"), 'T', 'T', "onafteredit");
    }
  }
};
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_master.getColumnID(columnIndex);
  if (colid == "assgnWhouseNm") {
    scwin.f_openCommonPopUp(4, '', ds_master.getCellData(rowIndex, "assgnWhouseNm"), 'T', 'T', "ontextimageclick");
  }
};

//-------------------------------------------------------------------------
// 그리드1 공통팝업 중기 종류 callback
//-------------------------------------------------------------------------
scwin.udc_comCode_Grid1_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != 'N/A') {
    ds_master.setCellData(ds_master.getRowPosition(), "assgnWhouseCd", rtnList[0]);
    ds_master.setCellData(ds_master.getRowPosition(), "assgnWhouseNm", rtnList[1]);
  } else {
    ds_master.setCellData(ds_master.getRowPosition(), "assgnWhouseCd", "");
    ds_master.setCellData(ds_master.getRowPosition(), "assgnWhouseNm", "");
  }
};

//-------------------------------------------------------------------------
// 전체선택 클릭시 / f_reverse
//-------------------------------------------------------------------------
scwin.btn_reverse_onClick = function (e) {
  if (ds_master.getTotalRow() == 0) {
    return;
  }
  for (let k = 0; k < ds_master.getTotalRow(); k++) {
    gr_master.setCellDisabled(k, "chk", false);
  }
  let checked = 0;
  for (let i = 0; i < ds_master.getTotalRow(); i++) {
    if (ds_master.getCellData(i, "chk") == "T") {
      checked++;
    }
  }
  for (let j = 0; j < ds_master.getTotalRow(); j++) {
    if (ds_master.getCellData(j, "odrKndCd") == "C2") {
      if (checked > 0) {
        ds_master.setCellData(j, "chk", "F");
      } else {
        ds_master.setCellData(j, "chk", "T");
      }
    }
  }
};

//-------------------------------------------------------------------------
// OnRowPosChange(row)
//-------------------------------------------------------------------------
scwin.ds_master_onRowPositionChange = function (info) {
  let row = info.newRowIndex;
  if (ds_master.getCellData(row, "odrKndCd") != "C2") {
    gr_master.setCellReadOnly(row, "chk", true);
  } else {
    gr_master.setCellReadOnly(row, "chk", false);
  }
  if (ds_master.getCellData(row, "owhouseWrkDt") == "") {
    gr_master.setCellReadOnly(row, "owhouseExceptYn", false);
  } else {
    gr_master.setCellReadOnly(row, "owhouseExceptYn", true);
  }
};

//-------------------------------------------------------------------------
// ASIS와 동일하게 만들기 위해 오더 종류가 C2가 아니면 disable처리
//-------------------------------------------------------------------------
// scwin.gr_master_Click = function (rowIndex, columnIndex, columnId) {
//     for(i = 0; i < ds_master.getTotalRow(); i++){
//         if(ds_master.getCellData(i, "odrKndCd") != "C2") {
//             gr_master.setCellReadOnly(i, "chk", true);
//         }else {
//             gr_master.setCellReadOnly(i, "chk", false);
//         }

//     }

//     if(ds_master.getCellData(rowIndex, "owhouseWrkDt") == "") {
//         gr_master.setCellReadOnly(rowIndex, "owhouseExceptYn", false);
//     } else {
//         gr_master.setCellReadOnly(rowIndex, "owhouseExceptYn", true);
//     }

// };

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onClick = function (e) {
  if (ds_master.getTotalRow() == 0) {
    return;
  }
  if (ds_master.getModifiedIndex().length == 0) {
    return;
  }

  // sbm_save.userData1="noError";
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 적하목록 정정
//----------------------------------------------------------CreateOtherWarehouseAssignListCkOrderCMD---------------
scwin.btn_ManifestEdit_onClick = async function (e) {
  let param = new Array();
  param[0] = new Array("T");
  let opts = {
    height: "700",
    width: "1080px",
    popupName: "적하목록정정(타창고)"
  };
  let rtnList = await $c.win.openPopup($p, "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_04p.xml", opts, param);
  if (ds_master.getTotalRow() > 0 && rtnList == null) {
    scwin.btn_retrieve_onClick();
  }
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, "[타창고배정목록조회] " + MSG_CM_ERR_003);
  }
  spa_totalRows.setValue(rowCnt);
  ds_master.sort("declarPrd", 0);
  for (row = 0; row < rowCnt; row++) {
    if (ds_master.getCellData(row, "odrKndCd") != "C2") {
      gr_master.setCellReadOnly(row, "chk", true);
    } else {
      gr_master.setCellReadOnly(row, "chk", false);
    }
    if (ds_master.getCellData(row, "owhouseWrkDt") == "") {
      gr_master.setCellReadOnly(row, "owhouseExceptYn", false);
    } else {
      gr_master.setCellReadOnly(row, "owhouseExceptYn", true);
    }
  }
};

//-------------------------------------------------------------------------
// 저장 성공시
//-------------------------------------------------------------------------
scwin.sbm_save_submitDone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    // await $c.win.alert(e.responseJSON.resultDataSet[1].Msg);
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    scwin.btn_retrieve_onClick();
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 점소 변경시
//-------------------------------------------------------------------------
scwin.acb_lobran_Change = function (info) {
  ed_wrkPlCd.setValue("");
  ed_wrkPlNm.setValue("");
};

//-------------------------------------------------------------------------
// 그리드 더블클릭
//-------------------------------------------------------------------------
scwin.gr_master_dblClick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex < 0) {
    return;
  }
  let podrNo = ds_master.getCellData(rowIndex, "odrNo");
  let odrKndCd = ds_master.getCellData(rowIndex, "odrKndCd");
  let pmrn = ds_master.getCellData(rowIndex, "mrn");
  let pmsn = ds_master.getCellData(rowIndex, "msn");
  let phsn = ds_master.getCellData(rowIndex, "hsn");
  let pcntrNo = ds_master.getCellData(rowIndex, "cntrNo");
  if ((columnId == "mrn" || columnId == "msn" || columnId == "hsn" || columnId == "odrNo") && odrKndCd == "CK") {
    if (pmrn + pmsn + phsn == "") return;
    let url = "ui/ds/op/wrkrslts/stvwrkrslts/op_306_02_15b.xml"; //타창고 작업오더(ck)실적등록;

    let param = {
      "pmrn": pmrn,
      "pmsn": pmsn,
      "phsn": phsn,
      "pcntrNo": pcntrNo,
      "podrNo": podrNo
    };
    $c.win.openMenu($p, "타창고작업오더실적등록", url, "op_306_02_15b.xml", param);
  } else if (columnId == "odrNo" && (odrKndCd == "C1" || odrKndCd == "C2")) {
    if (podrNo == "") return;
    let param = {
      "odrNo": podrNo,
      "cntrNo": pcntrNo,
      "odrKndCd": odrKndCd
    };
    let url = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml"; //컨테이너오더;

    let option = {};
    $c.win.openMenu($p, "컨테이너오더", url, "sd_402_01_11t.xml", param, option);
  }
  ;
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.runExcel = function () {
  let options = {
    fileName: "Sheet1.xlsx",
    sheetName: "타창고배정목록조회",
    colMerge: "true"
  };
  let grdObj = gr_master;
  let infoArr = {};
  if (ds_master.getTotalRow() == 0) {
    return;
  } else {
    $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onchange':'scwin.acb_lobran_Change',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',validExpCode:'작업장:yes','ev:onclickEvent':'scwin.udc_wrkPl_onClick',selectID:'retrieveWrkPlInfo','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_arrvlportQryDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_arrvlportQryStDt',edToId:'ica_arrvlportQryEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_staffNm',placeholder:'',style:'width:85px;'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_Line',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',selectID:'retrieveLineInfoList','ev:onclickEvent':'scwin.udc_Line_onClick','ev:onblurCodeEvent':'scwin.udc_Line_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_Line_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wrkYn',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'면허취득여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'cbx_licenceAcqYn',ref:'',renderType:'native',rows:'',selectedindex:'1',style:'',falseValue:'F',value:'T'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_Vssl',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',editTypeName:'data',selectID:'retrieveVsslCdInfo','ev:onclickEvent':'scwin.udc_Vssl_onClick','ev:onblurCodeEvent':'scwin.udc_Vssl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_Vssl_onChangeName'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_printClsCd',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'X'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'X'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_assgnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_assgncd'},E:[{T:1,N:'w2:label',A:{ref:'col2'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'창고구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wHouseClsCd',search:'start',style:'width:150px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'6'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrClsCd',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'C1/C2'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'타창고배정 목록조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_master',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_dblClick',resize:'true',columnMove:'true','ev:onbeforeedit':'scwin.gr_master_onbeforeedit','ev:onafteredit':'scwin.gr_master_onafteredit','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'50',value:'선택',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'50',value:'제외',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'140',value:'오더번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더종류'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'선박명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'배정창고명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'접안장소명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'하선장소명',width:'100'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column49',value:'BL NO.',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'배정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'포장단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'포장수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column39',value:'총CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column35',value:'수하인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'SIZE/TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'운송실적여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'F/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'신고기한',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'작업일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column51',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'MSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'HSN',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'owhouseExceptYn',inputType:'select',removeBorderStyle:'false',width:'50',displayFormatter:'scwin.displayFm',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrNo',inputType:'text',removeBorderStyle:'false',width:'140',class:'underline',style:'color: blue;',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndCd',inputType:'text',removeBorderStyle:'false',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',width:'100',readOnly:'true',displayFormat:'####/##/##',colMerge:'true',upperColumn:'vsslNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnWhouseNm',inputType:'textImage',width:'100',textAlign:'left',colMerge:'true',upperColumn:'arrvlportDt'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'assgnWhouseNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dsmbrkPlcNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true',colMerge:'true',upperColumn:'dptWrkPlNm'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'hblNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'mcomAssgnClsCd',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mcomAssgnClsCd'},E:[{T:1,N:'w2:label',A:{ref:'col1'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'packUnitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'packQty',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'totWt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'totCubic',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cnsgnNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sztp',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transRsltsYn',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fl',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'declarPrd',displayMode:'label',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'owhouseWrkDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'color: blue;',id:'mrn',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color: blue;',id:'msn',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'color: blue;',id:'hsn',value:'',displayMode:'label',readOnly:'true',class:'underline'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',disabled:'',escape:'false',id:'btn_reverse',style:'',type:'button','ev:onclick':'scwin.btn_reverse_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체선택(C2)'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ManifestEdit',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_ManifestEdit_onClick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적하목록정정(타창고)'}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}}]}]}]}]})