/*amd /ui/ds/fs/bilg/fs_201_02_08b.xml 29100 8f563c6c9d644333fa9e70c3ea10d069060af1a98ae5d5a46cd9a71874f17e96 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_BillingBranchEach_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BillingInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchKorNm',name:'지점한글명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchEngNm',name:'지점영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchAdminKorNm',name:'지점관리자한글명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchAdminEngNm',name:'지점관리자영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchAdminDocNmPath',name:'지점관리자서명경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchAddr',name:'지점주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchTelNo',name:'지점전화번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BankAccountInformation',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fcrcBankAcntInfo',name:'외화계좌정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wcrcBankAcntInfo',name:'원화계좌정보',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_BillingBranchEach_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingBranchEachBillingInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_BillingBranchEach_con","key":"IN_DS1"},{"id":"ds_BillingInformation","key":"OUT_DS1"},{"id":"ds_BankAccountInformation","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_BillingInformation","key":"OUT_DS1"},{"id":"ds_BankAccountInformation","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_BillingBranchEach_retrieve_submitdone','ev:submiterror':'scwin.sbm_BillingBranchEach_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_BillingBranchEach_save',action:'/ds.fs.bilg.bilgcomncdmgnt.SaveBillingBranchEachBillingInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_BankAccountInformation","key":"IN_DS1"},{"action":"modified","id":"ds_BillingInformation","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_BillingBranchEach_save_submitdone','ev:submiterror':'scwin.sbm_BillingBranchEach_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//물류/청구/청구공통코드관리/청구지점별 청구정보관리
//조회조건 , 6AA

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  ed_bilgLoofcCd.focus();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //validation check        
  //if(!await $c.gus.cfValidate([ed_bilgLoofcCd])){
  //	return;
  //}		

  $c.sbm.execute($p, sbm_BillingBranchEach_retrieve);

  //tr_BillingBranchEach_retrieve.Action = "/ds.fs.bilg.bilgcomncdmgnt.RetrieveBillingBranchEachBillingInformationCMD.do";
  //tr_BillingBranchEach_retrieve.Post();
};

//-------------------------------------------------------------------------
// 청구정보 그리드 추가
//-------------------------------------------------------------------------
scwin.f_BillingInformationAddRow = function () {
  $c.data.insertRow($p, gr_BillingInformation);
};

//-------------------------------------------------------------------------
// 계좌정보 그리드 추가
//-------------------------------------------------------------------------
scwin.f_BankAccountInformationAddRow = function () {
  var mCnt = ds_BillingInformation.getRowCount();
  if (mCnt < 1) return;
  var rowPos = ds_BankAccountInformation.insertRow();
  ds_BankAccountInformation.setCellData(rowPos, "bilgLoofcCd", ds_BillingInformation.getCellData(ds_BillingInformation.getRowPosition(), "bilgLoofcCd"));
  //if(ds_BankAccountInformation.getRowCount() == 0){
  if (rowPos == 0) {
    ds_BankAccountInformation.setCellData(rowPos, "seq", 1);
  } else {
    ds_BankAccountInformation.setCellData(rowPos, "seq", parseInt(ds_BankAccountInformation.getCellData(rowPos - 1, "seq")) + 1);
  }
  gr_BankAccountInformation.setFocusedCell(rowPos, 0, false);
};
scwin.f_BankAccountInformationDelRow = function () {
  var mCnt = ds_BankAccountInformation.getRowCount();
  if (mCnt < 1) return;
  var pos = ds_BankAccountInformation.getRowPosition();
  if (ds_BankAccountInformation.getRowStatus(pos) == 'C') {
    ds_BankAccountInformation.removeRow(pos);
  } else {
    ds_BankAccountInformation.deleteRow(pos);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //if(!ds_BillingInformation.IsUpdated && !ds_BankAccountInformation.IsUpdated){
  if (!ds_BillingInformation.getModifiedIndex().length > 0 && !ds_BankAccountInformation.getModifiedIndex().length > 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["청구지점별 청구정보관리"]);
    return;
  }
  var validArry = [{
    id: "bilgLoofcCd",
    name: "지점코드",
    mandatory: true,
    key: true
  }];
  let gridName = "청구정보관리";
  if (!(await $c.gus.cfValidateGrid($p, gr_BillingInformation, null, null, validArry, gridName))) {
    return false;
  }
  validArry = [{
    id: "bilgLoofcCd",
    name: "지점코드",
    mandatory: true,
    key: false
  }];
  gridName = "청구계좌관리";
  if (!(await $c.gus.cfValidateGrid($p, gr_BankAccountInformation, null, null, validArry, gridName))) {
    return false;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  $c.sbm.execute($p, sbm_BillingBranchEach_save);

  //tr_BillingBranchEach_save.Action = "/ds.fs.bilg.bilgcomncdmgnt.SaveBillingBranchEachBillingInformationCMD.do";
  //tr_BillingBranchEach_save.Post();		
};

//-------------------------------------------------------------------------
// 첫번째 그리드삭제 - 서브데이타도 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_BankAccountInformation.getRowCount() > 0) {
    //if (! await $c.win.confirm(MSG_CM_CRM_014, ["청구정보", "계좌정보"])) // 청구정보를 삭제하면 계좌정보도 삭제됩니다. 삭제하시겠습니까?
    if (!(await $c.win.confirm($p, "청구정보를 삭제하면 계좌정보도 삭제됩니다. 삭제하시겠습니까?")))
      // 청구정보를 삭제하면 계좌정보도 삭제됩니다. 삭제하시겠습니까? // %1을(를) 삭제하면 %2도 삭제됩니다. 삭제하시겠습니까?
      return;
    for (var i = ds_BankAccountInformation.getRowCount(); i >= 0; --i) {
      if (ds_BankAccountInformation.getCellData(i, 'bilgLoofcCd') == ds_BillingInformation.getCellData(ds_BillingInformation.getRowPosition(), 'bilgLoofcCd')) {
        if (ds_BankAccountInformation.getRowStatus(i) == 'C') {
          ds_BankAccountInformation.removeRow(i);
        } else {
          ds_BankAccountInformation.deleteRow(i);
        }
      }
    }
  }
  if (ds_BillingInformation.getRowStatus(ds_BillingInformation.getRowPosition()) == 'C') {
    //$c.data.deleteRow(gr_BillingInformation, false);
    ds_BillingInformation.removeRow(ds_BillingInformation.getRowPosition());
  } else {
    ds_BillingInformation.deleteRow(ds_BillingInformation.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드취소 - 서브데이타도 적용
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //if(ds_BillingInformation.getRowStatus(ds_BillingInformation.getRowPosition())==1){ //추가데이타인 경우, 서브데이타삭제
  if (ds_BillingInformation.getRowStatus(ds_BillingInformation.getRowPosition()) == 'C') {
    //추가데이타인 경우, 서브데이타삭제
    //for(var i=ds_BankAccountInformation.getRowCount(); i>=1; i--){
    for (var i = ds_BankAccountInformation.getRowCount(); i >= 0; --i) {
      if (ds_BankAccountInformation.getCellData(i, 'bilgLoofcCd') == ds_BillingInformation.getCellData(ds_BillingInformation.getRowPosition(), 'bilgLoofcCd')) ds_BankAccountInformation.deleteRow(i);
    }
  }
  ds_BillingInformation.undoRow(ds_BillingInformation.getRowPosition());
};
scwin.f_BankAccountInformationCancelRow = function () {
  if (ds_BankAccountInformation.getRowStatus(ds_BankAccountInformation.getRowPosition()) == 'C') {
    ds_BankAccountInformation.removeRow(ds_BankAccountInformation.getRowPosition());
  } else {
    ds_BankAccountInformation.undoRow(ds_BankAccountInformation.getRowPosition());
  }
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
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

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
      // 청구지점 팝업			
      pCode = ds_BillingInformation.getCellData(ds_BillingInformation.getRowPosition(), "bilgLoofcCd").replace(/\s*$/, ''); // 프로그램ID

      //rtnList = cfCommonPopUp('retrieveLobranInfo'	// XML상의 SELECT ID
      udc_comCodeGrid.setSelectId('retrieveLobranInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, pCode // 화면에서의 ??? Code Element의	Value
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

      //if ( rtnList != null && rtnList[0] != "N/A") {
      //	//return value Assign
      //	ds_BillingInformation.NameValue(ds_BillingInformation.getRowPosition(),"bilgLoofcCd") = rtnList[0];	//라인코드
      //	//ds_BillingInformation.NameValue(ds_BillingInformation.getRowPosition(),"bilgLoofcCd") = rtnList[1];	//라인명					
      //}	

      break;
    /*	
    		case 2:								
    	// 청구지점 팝업			
    	pCode = ds_BankAccountInformation.NameValue(ds_BankAccountInformation.getRowPosition(),"bilgLoofcCd").replace(/\s*$/, '');		// 프로그램ID
    	  			
    	rtnList = cfCommonPopUp('retrieveLobranInfo'	// XML상의 SELECT ID	
    							,pCode					// 화면에서의 ??? Code Element의	Value
    							,pName					// 화면에서의 ??? Name Element의	Value
    							,'F'					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
    							,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      							,null					// Title순서	
      							,null					// 보여주는 각 컬럼들의 폭	
      							,null					// 컬럼중에서 숨기는	컬럼 지정	
      							,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      							,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
      							,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
      							,null					// 윈도우 위치 Y좌표	
      							,null					// 윈도우 위치 X좌표
    							,null                   // 중복체크여부
    							,null                   // 전체검색허용여부
    							,null                   // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      							); 
    	  									
    	//if ( rtnList != null && rtnList[0] != "N/A") {
    	//	//return value Assign
    	//	ds_BankAccountInformation.NameValue(ds_BankAccountInformation.getRowPosition(),"bilgLoofcCd") = rtnList[0];	//라인코드
    	//	//ds_BankAccountInformation.NameValue(ds_BankAccountInformation.getRowPosition(),"bilgLoofcCd") = rtnList[1];	//라인명					
    	//}	
    		break;					
    */
    default:
      break;
  }
};
scwin.sbm_BillingBranchEach_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_BillingInformation.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_BillingInformation.setFocusedCell(0, "bilgLoofcCd", false);
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};
scwin.sbm_BillingBranchEach_retrieve_submiterror = function (e) {};
scwin.sbm_BillingBranchEach_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_BillingBranchEach_save_submiterror = function (e) {};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_cndArea, null); //fs_201_02_08b
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_bilgLoofcCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm); // 청구지점코드, 청구지점명
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ds_BillingInformation.setCellData(ds_BillingInformation.getRowPosition(), "bilgLoofcCd", rtnList[0]);
  }
};
scwin.udc_bilgLoofcCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcCd, ed_bilgLoofcNm, 1);
};
scwin.udc_bilgLoofcCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLoofcNm, ed_bilgLoofcCd, 1, false);
};
scwin.udc_bilgLoofcCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLoofcCd.getValue(), ed_bilgLoofcNm.getValue(), 'F', 'F');
};
scwin.gr_BillingInformation_onrowindexchange = function (rowIndex, oldRow) {
  //console.log('gr_BillingInformation_onrowindexchange ==>');

  /*
      if (ds_BillingInformation.getRowStatus(rowIndex) == "R") {
  		gr_BillingInformation.setCellReadOnly(rowIndex, "bilgLoofcCd", true);
  	}
  	else {
          gr_BillingInformation.setCellReadOnly(rowIndex, "bilgLoofcCd", false);
  	}
  */
  //scwin.setCustomType();
  scwin.setCustomCellType(rowIndex, false);

  //계좌정보
  var v_val = ds_BillingInformation.getCellData(rowIndex, "bilgLoofcCd");
  if ($c.gus.cfIsNull($p, v_val)) {
    v_val = "0";
  }
  ds_BankAccountInformation.clearFilter();
  ds_BankAccountInformation.setColumnFilter({
    type: 'row',
    colIndex: 'bilgLoofcCd',
    key: v_val,
    condition: 'and'
  });
  tbx_totalRows2.setValue(ds_BankAccountInformation.getRowCount());
};
scwin.gr_BillingInformation_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_BillingInformation.getColumnID(columnIndex);
  if (colId == "bilgLoofcCd") {
    scwin.f_Popup(1);
  }
};
scwin.setCustomType = function () {
  //console.log('scwin.setCustomType==>');
  var infoC = {
    inputType: "textImage",
    options: {
      viewType: "icon"
    }
  };
  var infoR = {
    inputType: "text"
  };
  var row = ds_BillingInformation.getRowPosition();
  if (ds_BillingInformation.getRowStatus(row) == "C") {
    gr_BillingInformation.setCellInputType(row, "bilgLoofcCd", infoC);
  } else {
    gr_BillingInformation.setCellInputType(row, "bilgLoofcCd", infoR);
  }
};
scwin.setCustomCellType = function (row, flag) {
  //for(var row=0;row<ds_BillingInformation.getRowCount();row++){
  var v_type = "";
  //if(flag && ds_BillingInformation.getCellData(row, "bilgLoofcCd") == "" && ds_BillingInformation.getRowStatus(row) == "C"){
  if (flag && ds_BillingInformation.getRowStatus(row) == "C") {
    v_type = "icon";
  } else {
    v_type = "default";
  }
  var infoC = {
    inputType: "textImage",
    options: {
      viewType: v_type
    }
  };

  //if(ds_BillingInformation.getRowStatus(row) == "C"){
  //    gr_BillingInformation.setCellInputType(row, "bilgLoofcCd", infoC);
  //}
  gr_BillingInformation.setCellInputType(row, "bilgLoofcCd", infoC);
  //};
};
scwin.gr_BillingInformation_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "bilgLoofcCd") {
    scwin.setCustomCellType(rowIndex, true);
  } else {
    scwin.setCustomCellType(rowIndex, false);
  }
};
scwin.gr_BillingInformation_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  //console.log('gr_BillingInformation_oncellindexchange~~');
  var columnId = gr_BillingInformation.getColumnID(columnIndex);
  if (columnId == "bilgLoofcCd") {
    scwin.setCustomCellType(rowIndex, true);
  } else {
    scwin.setCustomCellType(rowIndex, false);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgLoofcCd',style:'',codeId:'ed_bilgLoofcCd',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_bilgLoofcNm',id:'udc_bilgLoofcCd',btnId:'btn_bilgLoofcCd',validTitle:'청구지점','ev:onblurCodeEvent':'scwin.udc_bilgLoofcCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLoofcCd_onclickEvent',refDataCollection:'ds_BillingBranchEach_con',code:'bilgLoofcCd','ev:onviewchangeNameEvent':'scwin.udc_bilgLoofcCd_onblurNameEvent',objTypeName:'key',maxlengthName:'50'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BillingInformation',id:'gr_BillingInformation',style:'',visibleRowNum:'8','ev:ontextimageclick':'scwin.gr_BillingInformation_ontextimageclick','ev:onrowindexchange':'scwin.gr_BillingInformation_onrowindexchange',rowStatusVisible:'true',visibleRowNumFix:'true',setCellInputTypeCustom:'true','ev:oncellclick':'scwin.gr_BillingInformation_oncellclick','ev:oncellindexchange':'scwin.gr_BillingInformation_oncellindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'지점코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'지점명(한글)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'지점명(영문)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'관리자명(한글)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'관리자명(영문)',width:'120',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'관리자서명경로',width:'150',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'지점주소',width:'180',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'지점전화번호',width:'120',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLoofcCd',inputType:'custom',width:'100',maxLength:'4',viewType:'icon',viewTypeIconImage:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchKorNm',inputType:'text',width:'120',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchEngNm',inputType:'text',width:'120',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchAdminKorNm',inputType:'text',width:'120',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchAdminEngNm',inputType:'text',width:'120',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchAdminDocNmPath',inputType:'text',width:'150',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchAddr',inputType:'text',width:'180',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'branchTelNo',inputType:'text',width:'120',maxLength:'15'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow',rowDelFunction:'scwin.f_Delete',gridID:'gr_BillingInformation',cancelFunction:'scwin.f_Cancel',rowDelUserAuth:'D',rowAddUserAuth:'C',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_BillingInformationAddRow'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BankAccountInformation',id:'gr_BankAccountInformation',style:'',visibleRowNum:'7',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'지점코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'외화계좌정보',width:'400',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'원화계좌정보',width:'400',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLoofcCd',inputType:'text',width:'100',readOnly:'true',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fcrcBankAcntInfo',inputType:'text',width:'400',textAlign:'left',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wcrcBankAcntInfo',inputType:'text',width:'400',textAlign:'left',maxLength:'50'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow2',gridID:'gr_BankAccountInformation',rowAddFunction:'scwin.f_BankAccountInformationAddRow',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_BankAccountInformationDelRow',btnCancelYn:'Y',btnDelYn:'N',cancelFunction:'scwin.f_BankAccountInformationCancelRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'',style:'visibility: hidden;;display: none;'}}]}]}]})