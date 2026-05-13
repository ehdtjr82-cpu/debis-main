/*amd /ui/ds/fs/bilg/fs_201_02_05b.xml 41164 a8af1dd9a4503efe0d88dfebbc2d56cd55c12b39b731c3680ec54efb82b3fef3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_formulalist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulalist',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_formulalist_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvlFmlaPatternCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvlFmlaNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaClsCd',name:'상위서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'상위서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPrtnYn',name:'서식출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizClsCd',name:'사업구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'표기서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기서식유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulatitlelist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCdSeq',name:'서식유형코드순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attrNm',name:'속성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'attrEngNm',name:'속성영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_formulaprolist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_formulaprolist',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_formulaprolist_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',name:'실행프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiPatternCdCmb',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_formulalist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulalist_con","key":"IN_DS1"},{"id":"ds_formulalist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_formulalist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulalist_retrieve_submitdone','ev:submiterror':'scwin.sbm_formulalist_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulaprolist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachProgramListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_formulaprolist_con","key":"IN_DS1"},{"id":"ds_formulaprolist","key":"OUT_DS1"},{"id":"ds_formulatitlelist","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_formulaprolist","key":"OUT_DS1"},{"id":"ds_formulatitlelist","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulaprolist_retrieve_submitdone','ev:submiterror':'scwin.sbm_formulaprolist_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_formulapro_save',action:'/ds.fs.bilg.bilgcomncdmgnt.SaveFormulaEachProgramCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_formulaprolist","key":"IN_DS1"},{"action":"modified","id":"ds_formulatitlelist","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_formulapro_save_submitdone','ev:submiterror':'scwin.sbm_formulapro_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/청구/청구공통코드관리/청구서유형별프로그램관리
//6AA
scwin.onpageload = function () {};
scwin.chk_flag = ""; // CanRowPosChange 이벤트 저장 구분
scwin.curGrdPos = 0;
scwin.curMainGrdPos = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //parent.tabFrame.scwin.f_FoldMenu(true);
  ed_bilgLoofcCd.focus();
  rd_fmlaClsCd.setValue("01");
  //$c.gus.cfDisableObjects([btn_addRow, btn_deleteRow, btn_cancelRow, btn_addRow2, btn_deleteRow2, btn_cancelRow2]);
  //$c.gus.cfDisableBtn([bSave]);
  $c.gus.cfDisableObjects($p, [udc_addRow2, udc_addRow3, btn_save]);

  //그리드 콤보박스 셋팅
  ds_certiPatternCdCmb.insertRow(0);
  ds_certiPatternCdCmb.setCellData(0, "code", "V");
  ds_certiPatternCdCmb.setCellData(0, "name", "거래명세서");
  ds_certiPatternCdCmb.insertRow(1);
  ds_certiPatternCdCmb.setCellData(1, "code", "B");
  ds_certiPatternCdCmb.setCellData(1, "name", "BILL");
  ds_certiPatternCdCmb.insertRow(2);
  ds_certiPatternCdCmb.setCellData(2, "code", "C");
  ds_certiPatternCdCmb.setCellData(2, "name", "CERTI");
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //validation check        
  if (!(await $c.gus.cfValidate($p, [ed_bilgLoofcCd]))) {
    return;
  }

  //scwin.f_FormulaListSetDataHeader();

  //tr_formulalist_retrieve.Action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaListCMD.do";
  //tr_formulalist_retrieve.Post();;

  $c.sbm.execute($p, sbm_formulalist_retrieve);
};

//-------------------------------------------------------------------------
// 프로그램 그리드 추가
//-------------------------------------------------------------------------
scwin.f_ProgramAddRow = function () {
  //scwin.chk_flag = "TRUE";

  var row = ds_formulaprolist.insertRow();
  //ds_formulaprolist.AddRow();
  ds_formulaprolist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_formulaprolist.setCellData(row, "fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
  ds_formulaprolist.setCellData(row, "fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
};

//-------------------------------------------------------------------------
// 타이틀 그리드 추가
//-------------------------------------------------------------------------
scwin.f_TitleAddRow = function () {
  //ds_formulatitlelist.AddRow();
  //scwin.chk_flag = "TRUE";
  var row = ds_formulatitlelist.insertRow();

  //거래명세서 행추가시
  if (rd_fmlaClsCd.getValue() == "01") {
    ds_formulatitlelist.setCellData(row, "certiPatternCd", "V");
    ds_formulatitlelist.setCellData(row, "transCargoClsCd", "O");
    ds_formulatitlelist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
    ds_formulatitlelist.setCellData(row, "fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
    ds_formulatitlelist.setCellData(row, "fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
    ds_formulatitlelist.setCellData(row, "clntNo", "0");
    ds_formulatitlelist.setCellData(row, "clntNm", "공통");
    ds_formulatitlelist.setCellData(row, "fmlaPatternCdSeq", "0");
  }
  //BILL행추가시
  else if (rd_fmlaClsCd.getValue() == "03") {
    ds_formulatitlelist.setCellData(row, "certiPatternCd", "C");
    ds_formulatitlelist.setCellData(row, "transCargoClsCd", "O");
    ds_formulatitlelist.setCellData(row, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
    ds_formulatitlelist.setCellData(row, "fmlaPatternCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaPatternCd"));
    ds_formulatitlelist.setCellData(row, "fmlaClsCd", ds_formulalist.getCellData(ds_formulalist.getRowPosition(), "fmlaClsCd"));
    ds_formulatitlelist.setCellData(row, "clntNo", "0");
    ds_formulatitlelist.setCellData(row, "clntNm", "공통");
    ds_formulatitlelist.setCellData(row, "fmlaPatternCdSeq", "0");
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //if(!ds_formulaprolist.IsUpdated && !ds_formulatitlelist.IsUpdated){
  if (ds_formulaprolist.getModifiedIndex().length == 0 && ds_formulatitlelist.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["청구서유형별 프로그램 관리"]);
    return;
  }

  //gr_formulaprolist  ,  gr_formulatitlelist
  let validArry = [{
    id: "pgmId",
    name: "프로그램ID",
    mandatory: true,
    key: true
  }];
  let gridName = "프로그램ID";
  if (!(await $c.gus.cfValidateGrid($p, gr_formulaprolist, null, null, validArry, gridName))) {
    return false;
  }
  validArry = [{
    id: "certiPatternCd",
    name: "거래명세서유형코드",
    mandatory: true,
    key: false
  }, {
    id: "transCargoClsCd",
    name: "운송화물구분코드",
    mandatory: true,
    key: false
  }, {
    id: "clntNo",
    name: "거래처번호",
    mandatory: true,
    key: false
  }, {
    id: "fmlaPatternCdSeq",
    name: "순번",
    mandatory: true,
    key: false
  }, {
    id: "attrNm",
    name: "속성한글명",
    mandatory: true,
    key: false
  }];
  gridName = "순번";
  if (!(await $c.gus.cfValidateGrid($p, gr_formulatitlelist, null, null, validArry, gridName))) {
    return false;
  }
  var errCnt = 0;
  for (var i = 0; i < ds_formulatitlelist.getRowCount(); i++) {
    for (var j = 0; j < ds_formulatitlelist.getRowCount(); j++) {
      if (i != j && ds_formulatitlelist.getCellData(i, 'certiPatternCd') == ds_formulatitlelist.getCellData(j, 'certiPatternCd') && ds_formulatitlelist.getCellData(i, 'transCargoClsCd') == ds_formulatitlelist.getCellData(j, 'transCargoClsCd') && ds_formulatitlelist.getCellData(i, 'fmlaPatternCdSeq') == ds_formulatitlelist.getCellData(j, 'fmlaPatternCdSeq')) {
        errCnt = j + i;
        break;
      }
    }
    if (errCnt > 0) {
      $c.win.alert($p, '순번의 ' + errCnt + '번째 데이터에서 거래명세서유형코드, 운송화물구분코드, 거래처번호, 순번은(는) 중복될 수 없습니다.');
      return;
    }
  }

  //if(!cfConfirmMsg(MSG_CM_CRM_001))
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;

  // CanRowPosChange 이벤트 저장 구분		
  //scwin.chk_flag = "TRUE";
  $c.sbm.execute($p, sbm_formulapro_save);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //청구지점코드팝업			
      //rtnList = cfCommonPopUp('retrieveLobranInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_bilgLoofcCd.setSelectId('retrieveLobranInfo');
      rtnList = udc_bilgLoofcCd.cfCommonPopUp(scwin.udc_bilgLoofcCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //cfSetReturnValue(rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm);  // 청구지점코드, 청구지점명
      break;
    default:
      break;
  }
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
// 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_Popup = function (disGubun) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      // 프로그램ID 팝업			
      pCode = ds_formulaprolist.getCellData(ds_formulaprolist.getRowPosition(), "pgmId").replace(/\s*$/, ''); // 프로그램ID
      pName = ds_formulaprolist.getCellData(ds_formulaprolist.getRowPosition(), "pgmNm").replace(/\s*$/, ''); // 프로그램ID

      //rtnList = cfCommonPopUp('retrievePgmInfo'	// XML상의 SELECT ID

      udc_comCodeGrid.setSelectId('retrievePgmInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridPgmIdCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      );
      /*
      if ( rtnList != null && rtnList[0] != "N/A") {
      	//return value Assign
      	ds_formulaprolist.setCellData(ds_formulaprolist.getRowPosition(),"pgmId", rtnList[0]);	//라인코드
      	ds_formulaprolist.setCellData(ds_formulaprolist.getRowPosition(),"pgmNm", rtnList[1]);	//라인명					
      }
                  */
      break;
    case 2:
      //거래처코드 팝업			
      pCode = ds_formulatitlelist.getCellData(ds_formulatitlelist.getRowPosition(), "clntNo").replace(/\s*$/, ''); // 거래처코드

      //rtnList = cfCommonPopUp('retrieveClntList'	// XML상의 SELECT ID	
      udc_comCodeGrid.setSelectId('retrieveClntList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridClntCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      );
      /*  									
      if ( rtnList != null && rtnList[0] != "N/A") {
      	//return value Assign
      	if(rtnList[0] == "000000"){//공통
      		ds_formulatitlelist.setCellData(ds_formulatitlelist.getRowPosition(),"clntNo", "0");	//거래처코드
      		ds_formulatitlelist.setCellData(ds_formulatitlelist.getRowPosition(),"clntNm", "공통");	//거래처명					
      	} else {
      		ds_formulatitlelist.setCellData(ds_formulatitlelist.getRowPosition(),"clntNo", rtnList[0]);	//거래처코드
      		ds_formulatitlelist.setCellData(ds_formulatitlelist.getRowPosition(),"clntNm", rtnList[1]);	//거래처명					
      	}
      }
      */
      break;
    default:
      break;
  }
};
scwin.sbm_formulalist_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_formulalist.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      ed_bilgLoofcCd.focus();
      $c.gus.cfDisableAllBtn($p);
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }

    //$c.gus.cfEnableObjects([btn_addRow, btn_deleteRow, btn_cancelRow, btn_addRow2, btn_deleteRow2, btn_cancelRow2]);
    $c.gus.cfEnableObjects($p, [udc_addRow2, udc_addRow3, btn_save]);
    $c.gus.cfEnableAllBtn($p);
    gr_formulalist.setFocusedCell(scwin.curMainGrdPos, "lvlFmlaPatternCd", false);
    //gr_formulalist.setFocusedCell(0, "lvlFmlaPatternCd", false);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_formulalist_retrieve_submiterror = function (e) {};
scwin.sbm_formulaprolist_retrieve_submitdone = function (e) {
  tbx_totalRows2.setValue(ds_formulaprolist.getRowCount());
  tbx_totalRows3.setValue(ds_formulatitlelist.getRowCount());
};
scwin.sbm_formulaprolist_retrieve_submiterror = function (e) {};
scwin.sbm_formulapro_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_formulapro_save_submiterror = function (e) {};
scwin.btn_retrieve_onclick = function (e) {
  scwin.curMainGrdPos = 0;
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.curMainGrdPos = ds_formulalist.getRowPosition();
  scwin.f_Save();
};
scwin.udc_bilgLoofcCd_onblurCodeEvent = function (e) {
  console.log('scwin.udc_bilgLoofcCd_onblurCodeEvent~~~');
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, ed_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofcCd_onblurNameEvent = function (e) {
  console.log('scwin.udc_bilgLoofcCd_onblurNameEvent~~~');
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcNm, ed_bilgLoofcCd, 1, false);
};
scwin.udc_bilgLoofcCd_onclickEvent = function (e) {
  console.log('scwin.udc_bilgLoofcCd_onclickEvent~~~');
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), ed_bilgLoofcNm.value, 'F', 'F');
};
scwin.ds_formulalist_onbeforerowpositionchange = async function (info) {
  console.log('scwin.ds_formulalist_onbeforerowpositionchange~~~');
  console.log(ds_formulaprolist.getInsertedJSON());
  //console.log(info);
  //저장하지않은 상태로 로우 변경 체크
  //if(ds_formulaprolist.getRowStatus(ds_formulaprolist.getRowPosition()) == "C"){
  if (scwin.chk_flag != "TRUE" && ds_formulaprolist.getInsertedJSON().length > 0) {
    if ((await $c.win.confirm($p, "저장하지 않은 프로그램 데이타를 취소하시겠습니까?")) == true) {
      //ds_formulaprolist.undoAll(); 재조회하면 됨.
      scwin.chk_flag = "TRUE";
    } else {
      ds_formulalist.setEventPause("", true);
      gr_formulalist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulalist.setEventPause("", false);
      return false;
    }
  } else if (scwin.chk_flag != "TRUE" && ds_formulatitlelist.getInsertedJSON().length > 0) {
    console.log('scwin.chk_flag ds_formulalist_onbeforerowpositionchange ==>' + scwin.chk_flag);
    if ((await $c.win.confirm($p, "저장하지 않은 속성 데이타를 취소하시겠습니까?")) == true) {
      //ds_formulatitlelist.undoAll(); 재조회하면 됨.
      scwin.chk_flag = "TRUE";
    } else {
      ds_formulalist.setEventPause("", true);
      gr_formulalist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulalist.setEventPause("", false);
      return false;
    }
  }
  scwin.f_masterRowIdexchange(info.newRowIndex);
  console.log('통과????');
  return true;
};
scwin.ds_formulaprolist_onbeforerowpositionchange = async function (info) {
  console.log('scwin.ds_formulaprolist_onbeforerowpositionchange~~~');
  console.log(info);
  //if(scwin.chk_flag != "TRUE" && ds_formulatitlelist.getRowStatus(ds_formulatitlelist.getRowPosition()) == 1){
  if (scwin.chk_flag != "TRUE" && ds_formulatitlelist.getRowStatus(ds_formulatitlelist.getRowPosition()) == "C") {
    //console.log('scwin.chk_flag ds_formulalist_onbeforerowpositionchange ==>'+scwin.chk_flag);
    console.log('scwin.chk_flag ds_formulaprolist_onbeforerowpositionchange ==>' + scwin.chk_flag);
    if ((await $c.win.confirm($p, "저장하지 않은 속성 데이타를 취소하시겠습니까?")) == true) {
      /*
      //ds_formulatitlelist.undoAll();
      for(var i=0;i<ds_formulatitlelist.getRowCount();i++){
          if(ds_formulatitlelist.getRowStatus(i) == "C"){
              ds_formulatitlelist.removeRow(i);
          }
      }
      */
      //scwin.chk_flag = "";
    } else {
      ds_formulaprolist.setEventPause("", true);
      gr_formulaprolist.setFocusedCell(info.oldRowIndex, 0);
      ds_formulaprolist.setEventPause("", false);
      return false;
    }
  }
  return true;
};
scwin.f_masterRowIdexchange = function (rowIndex) {
  console.log('scwin.f_masterRowIdexchange~~~');
  //f_FormulaProListSetDataHeader(row);

  //tr_formulaprolist_retrieve.Action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveFormulaEachProgramListCMD.do";
  //tr_formulaprolist_retrieve.Post();

  ds_formulaprolist_con.setEmptyValue();
  ds_formulaprolist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_formulaprolist_con.set("fmlaClsCd", ds_formulalist.getCellData(rowIndex, "fmlaClsCd"));
  ds_formulaprolist_con.set("fmlaPatternCd", ds_formulalist.getCellData(rowIndex, "fmlaPatternCd"));
  $c.sbm.execute($p, sbm_formulaprolist_retrieve);
};
scwin.udc_bilgLoofcCdCallback = function (rtnList) {
  console.log('scwin.udc_bilgLoofcCdCallback~~~');
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm); // 청구지점코드, 청구지점명
};
scwin.udc_comCodeGridClntCallback = function (rtnList) {
  console.log('scwin.udc_comCodeGridClntCallback~~~');
  if (rtnList[0] == "000000") {
    //공통
    ds_formulatitlelist.setCellData(scwin.curGrdPos, "clntNo", "0"); //거래처코드
    ds_formulatitlelist.setCellData(scwin.curGrdPos, "clntNm", "공통"); //거래처명					
  } else {
    ds_formulatitlelist.setCellData(scwin.curGrdPos, "clntNo", rtnList[0]); //거래처코드
    ds_formulatitlelist.setCellData(scwin.curGrdPos, "clntNm", rtnList[1]); //거래처명					
  }
};
scwin.udc_comCodeGridPgmIdCallback = function (rtnList) {
  console.log('scwin.udc_comCodeGridPgmIdCallback~~~');
  if (rtnList != null && rtnList[0] != "N/A") {
    //return value Assign
    ds_formulaprolist.setCellData(scwin.curGrdPos, "pgmId", rtnList[0]); //라인코드
    ds_formulaprolist.setCellData(scwin.curGrdPos, "pgmNm", rtnList[1]); //라인명	
  }
};
scwin.gr_formulaprolist_onrowindexchange = function (rowIndex, oldRow) {
  //if(ds_formulaprolist.RowStatus(row) == 1){
  //	gr_formulaprolist.ColumnProp('pgmId','Edit') = "None";		
  //   	gr_formulaprolist.ColumnProp('pgmNm','Edit') = "ANY";			    	
  //} else {
  //	gr_formulaprolist.ColumnProp('pgmId','Edit') = "None";			
  //   	gr_formulaprolist.ColumnProp('pgmNm','Edit') = "None";			    	
  //}
  if (ds_formulaprolist.getRowStatus(rowIndex) == "C") {
    gr_formulaprolist.setCellReadOnly(rowIndex, 'pgmId', true);
    gr_formulaprolist.setCellReadOnly(rowIndex, 'pgmNm', false);
  } else {
    gr_formulaprolist.setCellReadOnly(rowIndex, 'pgmId', true);
    gr_formulaprolist.setCellReadOnly(rowIndex, 'pgmNm', true);
  }
};
scwin.gr_formulatitlelist_onrowindexchange = function (rowIndex, oldRow) {
  //if(ds_formulatitlelist.RowStatus(row) == 1){
  //	gr_formulatitlelist.ColumnProp('fmlaPatternCdSeq','Edit') = "ANY";		
  //	gr_formulatitlelist.ColumnProp('certiPatternCd','Edit')   = "ANY";		
  //	gr_formulatitlelist.ColumnProp('transCargoClsCd','Edit')  = "ANY";		
  //	gr_formulatitlelist.ColumnProp('clntNo','Edit')           = "ANY";		    	    	    	
  //} else {
  //	gr_formulatitlelist.ColumnProp('fmlaPatternCdSeq','Edit') = "None";			
  //	gr_formulatitlelist.ColumnProp('certiPatternCd','Edit')   = "None";			
  //	gr_formulatitlelist.ColumnProp('transCargoClsCd','Edit')  = "None";			
  //	gr_formulatitlelist.ColumnProp('clntNo','Edit')           = "None";			    	    	    	
  //}
  //   	gr_formulatitlelist.ColumnProp('clntNm','Edit') = "None";
  //
  //if(ds_formulatitlelist.NameValue(row,"fmlaClsCd") == "01"){//거래명세서
  //	gr_formulatitlelist.ColumnProp('certiPatternCd','Data') = 'V:거래명세서';
  //} else {   	
  //	gr_formulatitlelist.ColumnProp('certiPatternCd','Data') = 'B:BILL,C:CERTI';
  //}

  if (ds_formulatitlelist.getRowStatus(rowIndex) == "C") {
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'fmlaPatternCdSeq', false);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'certiPatternCd', false);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'transCargoClsCd', false);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'clntNo', false);
  } else {
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'fmlaPatternCdSeq', true);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'certiPatternCd', true);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'transCargoClsCd', true);
    gr_formulatitlelist.setCellReadOnly(rowIndex, 'clntNo', true);
  }
  gr_formulatitlelist.setCellReadOnly(rowIndex, 'clntNm', true);
  console.log('rowidxchange~~~');
  ds_formulatitlelist.clearFilter();
  if (ds_formulatitlelist.getCellData(rowIndex, "fmlaClsCd") == "01") {
    //거래명세서
    //gr_formulatitlelist.ColumnProp('certiPatternCd','Data') = 'V:거래명세서';
    ds_certiPatternCdCmb.clearFilter();
    ds_certiPatternCdCmb.setColumnFilter({
      type: 'row',
      colIndex: 'code',
      key: 'V',
      condition: 'and'
    });
  } else {
    //gr_formulatitlelist.ColumnProp('certiPatternCd','Data') = 'B:BILL,C:CERTI';
    ds_certiPatternCdCmb.clearFilter();
    ds_certiPatternCdCmb.setColumnFilter({
      type: 'regExp',
      colIndex: 'code',
      key: /B|C/gi,
      condition: 'and'
    });
  }
};
scwin.gr_formulaprolist_ontextimageclick = function (rowIndex, columnIndex) {
  console.log('scwin.gr_formulaprolist_ontextimageclick~~~');
  console.log("pgmNm~~~" + gr_formulaprolist.getColumnID(columnIndex));
  var colId = gr_formulaprolist.getColumnID(columnIndex);
  if (colId == "pgmNm") {
    scwin.curGrdPos = rowIndex;
    scwin.f_Popup(1);
  }
};
scwin.gr_formulatitlelist_ontextimageclick = function (rowIndex, columnIndex) {
  console.log('scwin.gr_formulatitlelist_ontextimageclick~~~');
  var colId = gr_formulatitlelis.getColumnID(columnIndex);
  if (colId == "clntNo") {
    scwin.curGrdPos = rowIndex;
    scwin.f_Popup(2);
  }
};
scwin.gr_formulaprolist_onviewchange = function (info) {
  console.log("gr_formulaprolist_onviewchange~~");
  console.log(info);
  /*
  {
      "oldValue": "일반청구오더등록",
      "newValue": "일반청구오더등록321",
      "rowIndex": 1,
      "colIndex": 1,
      "colId": "pgmNm"
  }
  */
  if (info.colId == "pgmNm") {
    //scwin.curPos = ds_formulaprolist.getRowPosition();
    scwin.curGrdPos = info.rowIndex;
    scwin.f_Popup(1);
  }
};
scwin.gr_formulatitlelist_onviewchange = function (info) {
  console.log("gr_formulatitlelist_onviewchange~~");
  console.log(info);
  if (info.colId == "clntNo") {
    //scwin.curPos = ds_formulatitlelist.getRowPosition();
    scwin.curGrdPos = info.rowIndex;
    scwin.f_Popup(2);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgLoofcCd',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',nameId:'ed_bilgLoofcNm',id:'udc_bilgLoofcCd',btnId:'btn_bilgLoofcCd',validTitle:'청구지점','ev:onblurCodeEvent':'scwin.udc_bilgLoofcCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgLoofcCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgLoofcCd_onclickEvent',refDataCollection:'ds_formulalist_con',code:'bilgLoofcCd',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구서유형구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_fmlaClsCd',ref:'data:ds_formulalist_con.fmlaClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BILL'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 30%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_formulalist',style:'',autoFit:'allColumn',id:'gr_formulalist',visibleRowNum:'17',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'청구서<br/>유형코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'유형명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'상위유형명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lvlFmlaPatternCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'lvlFmlaNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'upperFmlaNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_formulaprolist',style:'',autoFit:'allColumn',id:'gr_formulaprolist',visibleRowNum:'7',class:'wq_gvw','ev:ontextimageclick':'scwin.gr_formulaprolist_ontextimageclick','ev:onviewchange':'scwin.gr_formulaprolist_onviewchange','ev:onrowindexchange':'scwin.gr_formulaprolist_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'column1',value:'프로그램ID',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column17',value:'프로그램명',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'250',inputType:'text',style:'',id:'pgmId',value:'',displayMode:'label',readOnly:'true',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'300',inputType:'textImage',style:'',id:'pgmNm',value:'',displayMode:'label',maxLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_formulaprolist',id:'udc_addRow2',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddFunction:'scwin.f_ProgramAddRow',btnDelYn:'N',btnCancelYn:'Y'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_formulatitlelist',id:'gr_formulatitlelist',style:'',visibleRowNum:'7',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_formulatitlelist_ontextimageclick','ev:onviewchange':'scwin.gr_formulatitlelist_onviewchange','ev:onrowindexchange':'scwin.gr_formulatitlelist_onrowindexchange',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래명세서<br/>유형코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'운송화물<br/>구분코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'거래처번호',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'순번',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'속성한글명',width:'200',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'속성영문명',width:'200',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'certiPatternCd',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',maxLength:'2'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_certiPatternCdCmb'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'transCargoClsCd',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:'',maxLength:'1'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공통'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'100',maxLength:'6',dataType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaPatternCdSeq',inputType:'text',width:'70',maxLength:'3',dataType:'number',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attrNm',inputType:'text',width:'200',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'attrEngNm',inputType:'text',width:'200',textAlign:'left',maxLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows3',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_formulatitlelist',id:'udc_addRow3',rowDelUserAuth:'D',rowAddUserAuth:'C',rowAddFunction:'scwin.f_TitleAddRow',btnCancelYn:'Y',btnDelYn:'N'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'visibility:hidden;display: none;'}}]}]}]})