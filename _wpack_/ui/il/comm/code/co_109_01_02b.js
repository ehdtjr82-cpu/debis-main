/*amd /ui/il/comm/code/co_109_01_02b.xml 24086 2c8968913fb0cacc241ef57aeb73645eb72ad873dccff7fb0b232de9d9d31682 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_SearchParam'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cust',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_cust_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidKndClsCd',name:'증빙구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsCd',name:'과세구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxnClsNm',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.comm.code.RetrieveZeroTaxClntCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_SearchParam","key":"IN_DS1"},{"id":"ds_cust","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cust","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.comm.code.SaveZeroTaxClntCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_cust","key":"IN_DS2"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.preRowPos = 0;
scwin.txt_countRow = "";
scwin.txt_userid = "";
scwin.selectedRow = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
};

//-------------------------------------------------------------------------
// function name :  f_DefaultValue( gubun1, gubun2 )
// function desc : 화면 open시 초기 데이타 setting
// gubun1 : INIT(초기화), RETRIEVE(조회모드), UPDATE(수정모드), COPY(복사모드)
// gubun2 : INIT(초기화), CREATE(신규모드), ODRKNDCD(오더종류 변경되는 경우)
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  //ds_SearchParam.AddRow();
  $c.gus.cfDisableBtn($p, [btn_save]);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
//조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //ds_SearchParam.clearData();
  //ds_SearchParam.AddRow();
  dma_SearchParam.set("clntNo", ed_clntNo.getValue().trim()); // 대표거래처코드
  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_AddRow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------																	
scwin.f_AddRow = function () {
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  ds_cust.insertRow();
  gr_custList.setFocusedCell(ds_cust.getRowCount() - 1, 0);
  scwin.preRowPos = ds_cust.getRowPosition();
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  //ds_cust.DeleteMarked();
  //ds_cust.undoRow(ds_cust.getRowPosition());
  if (ds_cust.getRowStatus(ds_cust.getRowPosition()) == "C") {
    ds_cust.removeRow(ds_cust.getRowPosition());
  } else {
    var row = ds_cust.getRowPosition();
    ds_cust.deleteRow(ds_cust.getRowPosition());
    ds_cust.setRowPosition(row);
  }
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  //ds_cust.Undo(ds_cust.RowPosition);
  //ds_cust.undoRow(ds_cust.getRowPosition());
  if (ds_cust.getRowStatus(ds_cust.getRowPosition()) == "C") {
    ds_cust.removeRow(ds_cust.getRowPosition());
  } else {
    ds_cust.undoRow(ds_cust.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.preRowPos = ds_cust.getRowPosition();
  if (await scwin.f_ReqFieldChk()) {
    var chk = await $c.win.confirm($p, "Do you wish to save?");
    if (chk) {
      //tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = async function () {
  //필수입력항목 체크
  /*
  var chk = await $c.gus.cfValidate([gr_custList]);
  if (!chk) {
      return false;
  }
  */

  var validArry = [
  //clntNo:Customer:yes::key
  {
    id: "clntNo",
    name: "Customer",
    key: true,
    mandatory: true
  }];
  let gridName = "DeptCode List";
  if (!(await $c.gus.cfValidateGrid($p, gr_custList, null, null, validArry, gridName))) {
    return false;
  }

  /*
  for(var i=0; i < ds_cust.getRowCount(); i++) {
   }
  */
  return true;
};

//-------------------------------------------------------------------------
// function	name : f_PopUp
// function	desc : popup
//-------------------------------------------------------------------------
scwin.f_PopUp = function (pPopGubun, pWinCloseTF, pAllSearchTF) {
  var rtnList = new Array();
  switch (pPopGubun) {
    case "Customer":
      udc_clntNo.ilCommonPopUp(scwin.callbackEngClntInfo,
      // XML상의 SELECT ID	                                                   		
      ed_clntNo.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      ed_clntNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '2',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Code,Name',
      // Title순서	                                                           
      '140,300',
      // 보여주는 각 컬럼들의 폭	                                                ``
      "3,4,5,6,7,8,9,10",
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      pAllSearchTF,
      // 전체검색허용여부	("F")                                                  
      "Customer,Code,Name"); // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")  
      /*
      udc_clntNo.ilCommonPopUp(scwin.callbackEngClntInfo2
                              ,ed_clntNo.getValue().trim()	 //코드
                              ,'' 	 							//코드명
                              ,pWinCloseTF						// 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
                              ,'2'								// 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
                              ,"Customer Code,Customer Name,"		// Title순서
                              ,'130,300'              			// 보여주는 각 컬럼들의 폭
                              ,"3,4,5,6,7,8,9,10"     			// 컬럼중에서 숨기는	컬럼 지정
                              ,null                   			// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                              ,'500'                  			// POP-UP뛰을때 원도우의	사용자 정의	폭
                              ,'500'								// POP-UP뛰을때	우도우의	사용자 정의	높이
                              ,null								// 윈도우 위치 Y좌표
                              ,null								// 윈도우 위치 X좌표
                              ,null								// 중복체크여부	("F")
                              ,pAllSearchTF						// 전체검색허용여부	("F")
                              ,"Customer Search,Customer Code,Customer Name"	// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
                              ,'F'								// Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
                              );
      */
      //cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm);
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function	name : f_PopUpGrid
// function	desc : Grid popup
//-------------------------------------------------------------------------
scwin.f_PopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, colid, colnmid) {
  var rtnList;
  scwin.selectedRow = row;
  switch (disGubun) {
    case "Customer":
      var cd = ds_cust.getCellData(row, "clntNo");
      console.log(cd);
      ds_cust.setCellData(scwin.selectedRow, "clntNo", null);
      ds_cust.setCellData(scwin.selectedRow, "clntNm", null);
      console.log(ds_cust.getCellData(row, "clntNo"));
      udc_ilcomCode.setSelectId("retrieveEngClntInfo");
      udc_ilcomCode.ilCommonPopUp(scwin.callbackEngClntInfo2, cd //코드
      , '' //코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , "Customer Code,Customer Name," // Title순서
      , '130,300' // 보여주는 각 컬럼들의 폭
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Customer Search,Customer Code,Customer Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , 'F' // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: "N/A"
      );
      //cfSetGridReturnValue(rtnList, ds_cust, row, "clntNo", "clntNm",[""]);
      break;
  }
};
scwin.callbackEngClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.callbackEngClntInfo2 = function (rtnList) {
  console.log(rtnList);
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_cust, scwin.selectedRow, "clntNo", "clntNm", [""]);
  } else {
    ds_cust.setCellData(scwin.selectedRow, "clntNo", "");
    ds_cust.setCellData(scwin.selectedRow, "clntNm", "");
  }
};

//-------------------------------------------------------------------------
// function	name : f_ChkPopUp
// function	desc : 팝업	처리시 검색된 데이터인 경우	팝업 처리 안함.
//------------------------------------------------------------------------
scwin.f_ChkPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_PopUp(disGubun, 'T', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_PopUp(disGubun, 'T', 'T', 'F');
};

//-------------------------------------------------------------------------
// function	name : f_BeforePopUpEd
// function	desc : 공통팝업 열기 전에 체크- EMEDIT onKillFocus 이벤트	발생시
//					nmObj-코드명(text),	cdObj-코드(emedit),	gubun1
//-------------------------------------------------------------------------
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF) {
  var cdObjVal = cdObj.getValue().trim();
  //if(cdObj.Modified){
  if (cdObjVal == "") {
    nmObj.value = "";
  } else {
    nmObj.value = "";
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF);
  }
  //}
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowCnt = ds_cust.getRowCount();
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
  } else {
    // 		cfAlertMsg(E_MSG_CM_WRN_002);
  }
  spa_cnt.setValue(ds_cust.getRowCount());
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, E_MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
  //$c.win.alert("Data was saved successfully.");
};
scwin.gr_custList_ontextimageclick = function (rowIndex, columnIndex) {
  var rtnList = new Array();
  var pCode = "";
  var pName = "";
  var columnId = gr_custList.getColumnID(columnIndex);
  switch (columnId) {
    case "clntNo":
      scwin.f_PopUpGrid("Customer", rowIndex, "F", "F");
      break;
  }
};
scwin.ds_cust_oncelldatachange = function (info) {
  // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}

  var columnId = info.colID;
  var rowIndex = info.rowIndex;
  var olddata = info.oldValue;
  switch (columnId) {
    /*
    case "clntNo":
        if(ds_cust.getCellData(rowIndex,columnId).trim() == "") {
            ds_cust.setCellData(rowIndex,"clntNm","");
        }
        //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
        if (ds_cust.getCellData(rowIndex,columnId).trim() != "" && ds_cust.getCellData(rowIndex,columnId) != olddata){
            //scwin.f_PopUpGrid("Customer", rowIndex, "T", "F");
        }
        break;
    */
    case "taxnClsCd":
      if (ds_cust.getCellData(rowIndex, columnId) == "02") {
        ds_cust.setCellData(rowIndex, "taxnClsNm", "영세");
      } else if (ds_cust.getCellData(rowIndex, columnId) == "03") {
        ds_cust.setCellData(rowIndex, "taxnClsNm", "영세기타");
      } else {
        ds_cust.setCellData(rowIndex, "taxnClsNm", "");
      }
    default:
      break;
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_addRowIntnl_onclick = function (e) {
  scwin.f_AddRow();
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  scwin.f_DelRow();
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  scwin.f_Undo();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F', 'T');
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_BeforePopUpEd(ed_clntNm, ed_clntNo, "Customer", "T", "T");
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_ChkPopUp(ed_clntNm, ed_clntNo, 'Customer', false);
};
scwin.gr_custList_oncellclick = function (row, columnIndex, columnId) {
  if (ds_cust.getRowStatus(row) == "C") {
    gr_custList.setCellReadOnly(row, "clntNo", false);
  } else {
    gr_custList.setCellReadOnly(row, "clntNo", true);
  }
};
scwin.gr_custList_onviewchange = function (info) {
  console.log(info);
  //colId : "taxnClsCd", colIndex : 3, newSelectedIndex : 0 , newValue : "02", oldSelectedIndex : 1, oldValue : "03", rowIndex : 2
  var columnId = info.colId;
  var rowIndex = info.rowIndex;
  var olddata = info.oldValue;
  switch (columnId) {
    case "clntNo":
      if (ds_cust.getCellData(rowIndex, columnId).trim() == "") {
        ds_cust.setCellData(rowIndex, "clntNm", "");
      }
      //코드값이 공백이 아닌경우 && 값이 변하였을경우 팝업을 호출한다.
      if (ds_cust.getCellData(rowIndex, columnId).trim() != "" && ds_cust.getCellData(rowIndex, columnId) != olddata) {
        scwin.f_PopUpGrid("Customer", rowIndex, "T", "F");
      }
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'width: 100px;',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',selectID:'retrieveEngClntInfo',code:'clntNo',refDataCollection:'dma_SearchParam','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_cust',id:'gr_custList',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_custList_ontextimageclick',rowStatusVisible:'true',gridName:'DeptCode List','ev:oncellclick':'scwin.gr_custList_oncellclick',columnMove:'false','ev:onviewchange':'scwin.gr_custList_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',colSpan:'2',displayMode:'label',id:'column1',inputType:'text',value:'Customer',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column31',value:'증빙구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column32',value:'과세구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',value:'과세구분',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column30',inputType:'text',value:'Code',width:'80'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column29',inputType:'text',value:'Name',width:'230'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'textImage',width:'80',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'230',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'evidKndClsCd',inputType:'select',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세율세금계산서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'taxnClsCd',inputType:'select',width:'120',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영세기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'taxnClsNm',displayMode:'label',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_addRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_addRowIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Addition'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_deleteRowIntnl',style:'',type:'button','ev:onclick':'scwin.btn_deleteRowIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_undoMarkIntnl',style:'',type:'button','ev:onclick':'scwin.btn_undoMarkIntnl_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{btnId:'btn_ilcomCd',codeId:'ed_ilcomCd',hideName:'Y',id:'udc_ilcomCode2',nameId:'ed_ilcomNm',popupID:'',selectID:'',style:'display:none'}}]}]}]}]}]}]}]}]})