/*amd /ui/ds/fs/bilg/fs_201_02_07b.xml 33016 2c8f72163c2d702011d6c595ce52659bb8b408dd92586355194d9f4e28ebe7ba */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_customerlist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerlist',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_customerlist_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_sellitemnamelist_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sellitemnamelist',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgLoofcCd',name:'청구물류지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNoDesc',name:'집계(중기)코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNo',name:'매출품명번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommNm',name:'매출품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellGoodsPatternCd',name:'매출품목유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpCommNm',name:'거래명세서표기품명명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiInscrpCommEngNm',name:'거래명세서표기품명영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commInscrpSeq',name:'품명표기순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commInscrpUnitCd',name:'품명표기단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommCd',name:'매출품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCommCdNm',name:'매출품명코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_customerlist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveCustomerListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerlist_con","key":"IN_DS1"},{"id":"ds_customerlist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_customerlist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_customerlist_retrieve_submitdone','ev:submiterror':'scwin.sbm_customerlist_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sellitemnamelist_retrieve',action:'/ds.fs.bilg.bilgcomncdmgnt.RetrieveCustomerEachCommodityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellitemnamelist_con","key":"IN_DS1"},{"id":"ds_sellitemnamelist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_sellitemnamelist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_sellitemnamelist_retrieve_submitdone','ev:submiterror':'scwin.sbm_sellitemnamelist_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sellitemnamelist_save',action:'/ds.fs.bilg.bilgcomncdmgnt.SaveCustomerEachCommodityListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_sellitemnamelist","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_sellitemnamelist_save_submitdone','ev:submiterror':'scwin.sbm_sellitemnamelist_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//251201
//물류/청구/청구공통코드관리/거래처별 표기 품명명관리

//메세지용 전역변수 SETTING
scwin.MSG_FS_WRN_011 = "거래처코드를 먼저 입력하십시오.";
scwin.g_disGubun = 0; // 그리드 팝업 구분 값

scwin.btn_status = "";
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {};
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  console.log("onUdcCompleted~~");
  ed_bilgLoofcCd.focus();
  $c.gus.cfDisableObjects($p, [btn_addRow2, btn_deleteRow2]);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

//-------------------------------------------------------------------------
// sellitemnamelist 조회조건 데이타셋 헤더 설정
//-------------------------------------------------------------------------
scwin.f_SellItemNameListSetDataHeader = function () {
  ds_sellitemnamelist_con.set("bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_sellitemnamelist_con.set("clntNo", ds_customerlist.getCellData(ds_customerlist.getRowPosition(), "clntNo"));
  ds_sellitemnamelist_con.set("selpchItemCd", "0");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //validation check        
  if (!(await $c.gus.cfValidate($p, [ed_bilgLoofcCd]))) {
    return;
  }
  scwin.btn_status = "R";
  $p.executeSubmission(sbm_customerlist_retrieve);
};

//-------------------------------------------------------------------------
// 품명 그리드 추가
//-------------------------------------------------------------------------
scwin.f_SellItemNameListAddRow = function () {
  if (ds_customerlist.getRowCount() < 1 || ds_customerlist.getCellData(ds_customerlist.getRowPosition(), "clntNo") == "") {
    $c.gus.cfAlertMsg($p, scwin.MSG_FS_WRN_011);
    return;
  }
  var rowCnt = ds_sellitemnamelist.getRowCount();
  ds_sellitemnamelist.insertRow(rowCnt);
  ds_sellitemnamelist.setCellData(rowCnt, "bilgLoofcCd", ed_bilgLoofcCd.getValue());
  ds_sellitemnamelist.setCellData(rowCnt, "selpchItemCd", "0");
  ds_sellitemnamelist.setCellData(rowCnt, "clntNo", ds_customerlist.getCellData(ds_customerlist.getRowPosition(), "clntNo"));
  ds_sellitemnamelist.setRowPosition(rowCnt);
  //gr_sellitemnamelist.setFocusedCell(rowCnt, "sellGoodsPatternCd", false);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!(ds_sellitemnamelist.getModifiedIndex().length != 0)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["거래처별 표기 품명명관리"]);
    return;
  }

  // Grid의 필수 입력 항목에 대해서 Check 한다.
  if (!(await $c.gus.cfValidate($p, [gr_sellitemnamelist], null, true))) {
    return;
  }
  if (!(await $c.win.confirm($p, MSG_CM_CRM_001))) return;
  scwin.btn_status = "U";
  $p.executeSubmission(sbm_sellitemnamelist_save);
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
      udc_bilgLoofcCd.cfCommonPopUp(scwin.udc_bilgLoofcCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
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
scwin.f_Popup = async function (disGubun) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  scwin.g_disGubun = disGubun; //콜백에서 분기 처리용.

  switch (disGubun) {
    case 1:
      //거래처코드 팝업			
      pCode = ds_customerlist.getCellData(ds_customerlist.getRowPosition(), "clntNo").replace(/\s*$/, ''); // 거래처코드

      udc_comCodeGrid.setSelectId('retrieveClntList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeCallback // XML상의 SELECT ID	
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
      break;
    case 2:
      //품명코드 팝업			
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc").replace(/\s*$/, ''); // 품명코드

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCommInfo'	// XML상의 SELECT ID	
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeCallback // XML상의 SELECT ID  			
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
      break;
    case 3:
      //장비코드 팝업			
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc").replace(/\s*$/, ''); // 장비코드

      var data = [];
      var opt = {
        "width": "1200",
        "height": "500",
        "id": "op_101_01_12p",
        "title": "중기 조회"
        //,'popupName' : "중기 조회"  contentsHeader 오류
      };

      //opt.width   = "600";                                                   
      //opt.height  = "430";                                                   
      //opt.id      = "op_101_01_12p";                                                  
      //opt.title   = "계정이력조회";

      data[0] = ""; //assgnLobranCd점소코드
      data[1] = ""; //eqKndCd중기종류
      data[2] = ""; //clntCd거래처코드
      data[3] = ""; //usblDt작업계획일지
      data[4] = pCode; //eqNo
      data[5] = ""; //eqNm
      data[6] = 'T'; //T,F구분
      data[7] = 'T'; //T,F구분

      rtnList = await $c.win.openPopup($p, "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml", opt, data);

      //rtnList = window.showModalDialog("/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.jsp", arrParam, "dialogHeight:430px; dialogWidth:600px; resizable=no; help:no; status:no; center=true; ");

      if (rtnList != null && rtnList[0] != "N/A") {
        //return value Assign
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", rtnList[1]); //차량번호					
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", rtnList[12]); //장비코드
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", rtnList[2] + '(' + rtnList[3] + ')'); //종류+규격	
      }
      break;
    case 4:
      //품명코드 팝업			
      pCode = ds_sellitemnamelist.getCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCd").replace(/\s*$/, ''); // 품명코드

      //rtnList = udc_comCodeGrid.cfCommonPopUp('retrieveCommInfo'	// XML상의 SELECT ID
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeCallback // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , 'F' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , ',,,T3' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부
      , null // 전체검색허용여부
      , null // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)	  							
      );
      break;
    default:
      break;
  }
};
scwin.sbm_customerlist_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  var rowcnt = ds_customerlist.getRowCount();
  if (rowcnt == 0) {
    ed_bilgLoofcCd.focus();
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    $c.gus.cfEnableObjects($p, [btn_addRow2, btn_deleteRow2, btn_save]);
    $c.gus.cfEnableAllBtn($p);
    gr_customerlist.setFocusedCell(0, "clntNo", false);
  }
  tbx_totalRows.setValue(rowcnt);
  scwin.btn_status = "";
};
scwin.sbm_customerlist_retrieve_submiterror = function (e) {};
scwin.sbm_sellitemnamelist_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  var rowcnt = ds_sellitemnamelist.getRowCount();
  tbx_totalRows2.setValue(rowcnt);
};
scwin.sbm_sellitemnamelist_retrieve_submiterror = function (e) {};
scwin.sbm_sellitemnamelist_save_submitdone = function (e) {
  scwin.btn_status = "";
  scwin.f_Retrieve();
};
scwin.sbm_sellitemnamelist_save_submiterror = function (e) {};
scwin.udc_bilgLoofcCdCallback = function (rtnList) {
  scwin.f_setUdcPopCallback(rtnList, ed_bilgLoofcCd, ed_bilgLoofcNm);
};

//udc팝업공통 콜백처리
scwin.f_setUdcPopCallback = function (ret, objCode, objName) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        objCode.setValue("");
        objName.setValue("");
        objCode.hidVal = "";
        return;
      }
      objCode.setValue(rtnList[0]); // 코드값
      objName.setValue(rtnList[1]); // 코드명
      objCode.hidVal = rtnList[0]; // 코드값
    } else {
      objCode.setValue("");
      objName.setValue("");
      objCode.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};
scwin.udc_comCodeCallback = function (rtnList) {
  switch (scwin.g_disGubun) {
    case 1:
      //거래처코드 팝업			
      if (rtnList != null && rtnList[0] != "N/A") {
        //return value Assign
        if (rtnList[0] == "000000") {
          //공통
          ds_customerlist.setCellData(ds_customerlist.getRowPosition(), "clntNo", "0"); //거래처코드
          ds_customerlist.setCellData(ds_customerlist.getRowPosition(), "clntNm", "공통"); //거래처명					
        } else {
          ds_customerlist.setCellData(ds_customerlist.getRowPosition(), "clntNo", rtnList[0]); //거래처코드
          ds_customerlist.setCellData(ds_customerlist.getRowPosition(), "clntNm", rtnList[1]); //거래처명					
        }
      }
      break;
    case 2:
      //품명코드 팝업			
      if (rtnList != null && rtnList[0] != "N/A") {
        //return value Assign
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNoDesc", rtnList[0]); //품명코드					
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNo", rtnList[0]); //품명코드
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommNm", rtnList[1]); //품명명					
      }
      break;
    case 3:
      //장비코드 팝업			
      break;
    case 4:
      //품명코드 팝업			
      if (rtnList != null && rtnList[0] != "N/A") {
        //return value Assign
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCd", rtnList[0]); //품명코드					
        ds_sellitemnamelist.setCellData(ds_sellitemnamelist.getRowPosition(), "sellCommCdNm", rtnList[1]); //품명명					
      }
      break;
    default:
      break;
  }
};
scwin.ds_customerlist_onbeforerowpositionchange = async function (info) {
  console.log('scwin.ds_customerlist_onbeforerowpositionchange~~');
  console.log(info);
  //{info.oldRowIndex,info.newRowIndex}

  if (info.oldRowIndex != null) {
    if (ds_sellitemnamelist.getRowStatus(ds_sellitemnamelist.getRowPosition()) == 'C') {
      if (!(await $c.win.confirm($p, "저장하지 않은 품명 데이타를 취소하시겠습니까?")) == true) {
        return false;
      }
    }
    ;
  }
};
scwin.ds_customerlist_onrowpositionchange = async function (info) {
  let row = info.newRowIndex;
  if (row < 0) return;
  if (ds_sellitemnamelist.getInsertedJSON().length > 0 && scwin.btn_status == "") {
    let ret = await $c.win.confirm($p, "저장하지 않은 품명 데이타를 취소하시겠습니까?");
    if (!ret) {
      ds_customerlist.setEventPause("", true);
      gr_customerlist.setFocusedCell(info.oldRowIndex, 0);
      ds_customerlist.setEventPause("", false);
      return;
    }
  }
  if (ds_customerlist.getRowStatus(row) == 'C') {
    gr_customerlist.setCellReadOnly(row, "clntNo", false);
  } else {
    gr_customerlist.setCellReadOnly(row, "clntNo", true);
  }
  console.log('scwin.ds_customerlist_onrowpositionchange~~');
  scwin.f_SellItemNameListSetDataHeader();
  $p.executeSubmission(sbm_sellitemnamelist_retrieve);
};
scwin.gr_customerlist_ontextimageclick = function (rowIndex, columnIndex) {
  var row = rowIndex;
  if (ds_customerlist.getRowStatus(row) == 'C') {
    scwin.f_Popup(1);
  }
};
scwin.gr_customerlist_onviewchange = function (info) {
  console.log('scwin.gr_customerlist_onviewchange~~');
  console.log(info);
  var row = info.rowIndex;
  if (ds_customerlist.getRowStatus(row) == 'C') {
    scwin.f_Popup(1);
  }
};
scwin.gr_sellitemnamelist_onrowindexchange = function (rowIndex, oldRow) {
  var row = rowIndex;
  if (ds_sellitemnamelist.getRowStatus(row) == 'C') {
    gr_sellitemnamelist.setCellReadOnly(row, "sellGoodsPatternCd", false);
    gr_sellitemnamelist.setCellReadOnly(row, "sellCommNoDesc", false);
  } else {
    gr_sellitemnamelist.setCellReadOnly(row, "sellGoodsPatternCd", true);
    gr_sellitemnamelist.setCellReadOnly(row, "sellCommNoDesc", true);
  }
};
scwin.gr_sellitemnamelist_ontextimageclick = function (rowIndex, columnIndex) {
  console.log('scwin.gr_sellitemnamelist_ontextimageclick ==>');
  //console.log('colid ==>'+colid);

  var colid = gr_sellitemnamelist.getColumnID(columnIndex);
  if (colid == "sellCommNoDesc") {
    //if(ds_sellitemnamelist.getRowStatus(rowIndex) == "C"){
    if (ds_sellitemnamelist.getCellData(rowIndex, "sellGoodsPatternCd") == "02") {
      scwin.f_Popup(2);
    } else {
      scwin.f_Popup(3);
    }
    //}
  }
  if (colid == "sellCommCd") {
    scwin.f_Popup(4);
  }
};
scwin.gr_sellitemnamelist_onviewchange = function (info) {
  console.error('gr_sellitemnamelist_onviewchange~~~');
  console.log(info);
  //debugger;

  var colid = info.colId;
  var rowIndex = info.rowIndex;
  var oldval = info.oldValue;
  var newval = info.newValue;
  var colIndex = info.colIndex;

  //console.log('colid ==>'+colid);

  //팝업창 띄우기
  if (colid == "sellCommNoDesc") {
    //if(ds_sellitemnamelist.getRowStatus(rowIndex) == "C"){
    if (ds_sellitemnamelist.getCellData(rowIndex, "sellGoodsPatternCd") == "02") {
      scwin.f_Popup(2);
    } else {
      scwin.f_Popup(3);
    }
    //}
  }
  if (colid == "sellCommCd") {
    scwin.f_Popup(4);
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
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_addRow1_onclick = function (e) {
  if (ds_customerlist.getRowCount() > 0) {
    $c.data.insertRow($p, gr_customerlist);
  }
};
scwin.btn_addRow2_onclick = function (e) {
  scwin.f_SellItemNameListAddRow();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.gr_customerlist_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "clntNo":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구지점',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',id:'udc_bilgLoofcCd',codeId:'ed_bilgLoofcCd',nameId:'ed_bilgLoofcNm',code:'bilgLoofcCd',name:'bilgLoofcNm',refDataCollection:'ds_customerlist_con',btnId:'btn_bilgLoofcCd',selectID:'retrieveLobranInfo',validTitle:'청구지점',maxlengthName:'20',allowCharCode:'A-Za-z0-9','ev:onblurCodeEvent':'scwin.udc_bilgLoofcCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLoofcCd_onclickEvent',UpperFlagCode:'1',mandatoryCode:'true',maxlengthCode:'4',objTypeName:'key','ev:onviewchangeNameEvent':'scwin.udc_bilgLoofcCd_onblurNameEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 25%;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_customerlist',style:'',autoFit:'allColumn',id:'gr_customerlist',visibleRowNum:'17',class:'wq_gvw','ev:ontextimageclick':'scwin.gr_customerlist_ontextimageclick','ev:onviewchange':'scwin.gr_customerlist_onviewchange',rowStatusVisible:'true',readOnly:'true','ev:oneditkeyup':'scwin.gr_customerlist_oneditkeyup'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column1',value:'거래처코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'거래처명',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',style:'',id:'clntNo',value:'',displayMode:'label',allowChar:'A-Za-z0-9',maxLength:'6',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left',maxByteLength:'20'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'btn_addRow',btnCancelYn:'Y',btnRowDelYn:'N',gridID:'gr_customerlist',btnDelYn:'N',rowAddUserAuth:'C',rowAddFunction:'scwin.btn_addRow1_onclick'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_sellitemnamelist',id:'gr_sellitemnamelist',style:'',visibleRowNum:'17',visibleRowNumFix:'true','ev:onviewchange':'scwin.gr_sellitemnamelist_onviewchange','ev:ontextimageclick':'scwin.gr_sellitemnamelist_ontextimageclick',rowStatusVisible:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_sellitemnamelist_onrowindexchange',dataName:'품명',validFeatures:'ignoreStatus=no,',validExp:'sellGoodsPatternCd:구분:yes:string&lmaxlength=2 ,selpchItemCd:매출입항목코드:yes:string&lmaxlength=4:key,sellCommNoDesc:품명(중기)코드:yes:string&lmaxlength=20:key,sellCommNm:품명(중기)명:yes:string&lmaxlength=50,sellCommCd:집계품명코드:yes:string&lmaxlength=8,sellCommCdNm:집계품명명:yes:string&lmaxlength=50,certiInscrpCommNm:표기한글명:yes:string&lmaxlength=50'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'구분',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'품명(중기)코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'품명(중기)명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'집계품명코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'집계품명명',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'표기한글명',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'표기영문명',width:'100',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출력순서',width:'100',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sellGoodsPatternCd',inputType:'select',width:'70',allOption:'',chooseOption:'',ref:'',maxLength:'2',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화물'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNoDesc',inputType:'textImage',width:'120',allowChar:'A-Za-z0-9',readOnly:'true',maxLength:'20',mandatoryCode:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommNm',inputType:'text',width:'120',textAlign:'left',maxLength:'20',mandatoryCode:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommCd',inputType:'textImage',width:'120',allowChar:'A-Za-z0-9',readOnly:'false',maxLength:'8',mandatoryCode:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellCommCdNm',inputType:'text',width:'120',textAlign:'left',maxLength:'50',mandatoryCode:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpCommNm',inputType:'text',width:'100',textAlign:'left',readOnly:'false',maxLength:'50',mandatoryCode:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiInscrpCommEngNm',inputType:'text',width:'100',textAlign:'left',readOnly:'false',maxLength:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commInscrpSeq',inputType:'text',width:'100',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_addRow2',gridID:'gr_sellitemnamelist',rowAddFunction:'scwin.btn_addRow2_onclick',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRow2',btnDelObj:'btn_delete2',btnCancelObj:'btn_cancelRow2',btnRowDelObj:'btn_deleteRow2',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_gridTariff',codeId:'','ev:onblurCodeEvent':'scwin.udc_ctrtClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_ctrtClntNo_onclickEvent(\'F\')','ev:onviewchangeNameEvent':'scwin.udc_ctrtClntNo_onviewchangeNameEvent',id:'udc_comCodeGrid',nameId:'',objTypeCode:'data',popupID:'gridTariffPopup',selectID:'retrieveClntInfo',style:'display:none;'}}]}]}]})