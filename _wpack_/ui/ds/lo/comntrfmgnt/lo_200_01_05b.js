/*amd /ui/ds/lo/comntrfmgnt/lo_200_01_05b.xml 42431 0be30a9cfac54988fba801f3690871974d5f9d8b12016c1fdc8cb97202bb048e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_adptDt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lo410_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lo410',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_lo410_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrfSeq',name:'공통요율순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptStdSelpchItemCd',name:'적용기준매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hidCommNm',name:'히든품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'Unit 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'famtFratClsCd',name:'정액정률구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'comnTrf',name:'공통요율',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'comnTrfRt',name:'공통요율_비율',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_lo410_con","key":"IN_DS1"},{"id":"ds_lo410","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_lo410","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comntrfmgnt.SaveCommonTariffListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_lo410","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.editYn = "N"; //변경정보 처리후 재조회시 체크하기 위한 처리.
//-------------------------------------------------------------------------
// function name : 
// function desc : 전역변수 선언
//-------------------------------------------------------------------------  
scwin.pos_rowSts = 0;
scwin.MSG_LO_ERR_001 = "날짜 타입이 유효하지 않습니다.";
scwin.MSG_LO_ERR_002 = "적용율과 적용금액 중 적어도 하나는 0보다 큰 숫자를 입력하셔야 합니다.";
scwin.MSG_LO_ERR_003 = "변경된 사항이 없습니다.";
scwin.MSG_LO_CRM_001 = "변경 사항이 존재합니다. 진행하시겠습니까?";
scwin.PGM_LOAD = 1;
scwin.PGM_RETRIEVE = 2;
scwin.PGM_NEW = 3;
scwin.PGM_EDIT = 4;
scwin.checkPop = false;
//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통 getLuxeComboData
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["02"],
    compID: "selpchItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);

  //공통 getLuxeComboData
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "SellpurchaseItemEBC",
    param2: "retrieveSellpurchaseItemCombo",
    param3: ["01"],
    compID: "adptStdSelpchItemCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
  wfm_smp.getWindow().scwin.cfn_getComboReload("05b");
  scwin.f_defaultValue();
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  acb_adptDt.setSelectedIndex(0);
  ed_adptDt.setValue(acb_adptDt.getValue());
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);
  scwin.f_objectProp(scwin.PGM_LOAD);
};

//-------------------------------------------------------------------------
// 
//-------------------------------------------------------------------------
scwin.f_objectProp = async function (cType) {
  switch (cType) {
    case scwin.PGM_LOAD:
      await $c.gus.cfDisableObjects($p, [btn_save, udc_gridAddDel, ed_adptDt]);
      break;
    case scwin.PGM_RETRIEVE:
      await $c.gus.cfDisableObjects($p, [ed_adptDt, btn_save, udc_gridAddDel]); //ed_adptDt,imgAdptDt,btn_save,btn_add,btn_del, btn_cls
      await $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
      break;
    case scwin.PGM_NEW:
      await $c.gus.cfEnableObjects($p, [btn_save, udc_gridAddDel, ed_adptDt]);
      await $c.gus.cfDisableObjects($p, [btn_new, btn_edit]);
      break;
    case scwin.PGM_EDIT:
      await $c.gus.cfEnableObjects($p, [btn_save, udc_gridAddDel]);
      await $c.gus.cfDisableObjects($p, [btn_new, btn_edit]);
      break;
  }
};
scwin.acb_adptDt_onviewchange = function (info) {
  ed_adptDt.setValue(acb_adptDt.getValue());
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (scwin.editYn == "N") {
    //저장처리후에는 체크하지 않기 위한 방어코드
    /*if (!scwin.f_validChk()){
        return false;
    }*/
    if (ds_lo410.getModifiedIndex().length > 0) {
      if (!(await $c.win.confirm($p, scwin.MSG_LO_CRM_001))) {
        return false;
      }
    }
  }
  if (acb_adptDt.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적용일자"));
    return false;
  }
  ds_lo410.setJSON([]);
  ds_lo410_con.set("adptDt", acb_adptDt.getValue());
  sbm_retrieve.action = "/ds.lo.comntrfmgnt.RetrieveFixedAmountAnnouncementTariffListCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  scwin.editYn = "N";
  tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_lo410.getRowCount()));
  if (ds_lo410.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    scwin.setSerchGridReadOnly("init"); //그리드 항목 readonly
    $c.gus.cfGoPrevPosition($p, gr_lo410, scwin.pos_rowSts); //첫번째 row 포지션이동
  }
  scwin.f_objectProp(scwin.PGM_RETRIEVE);
  ed_adptDt.setValue(acb_adptDt.getValue());
  gr_lo410.setFocusedCell(0, 'selpchItemCd');
  scwin.isEditChk = false;
};

//-------------------------------------------------------------------------
// function name : f_validChk
// function desc : 필수 조회 조건 check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  if (ds_lo410.getModifiedIndex().length > 0) {
    if (await $c.win.confirm($p, scwin.MSG_LO_CRM_001)) {
      return false;
    }
  }
  return true;
};
scwin.gr_lo410_ontextimageclick = function (rowIndex, columnIndex) {
  //console.log('gr_lo410_ontextimageclick~~~');
  let colid = gr_lo410.getColumnID(columnIndex);
  switch (colid) {
    case 'commNm':
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc // 콜백 함수
      , ds_lo410.getCellData(rowIndex, "commCd") // 화면에서의  Code Element의 Value
      , ds_lo410.getCellData(rowIndex, "commNm") // 화면에서의  Name Element의 Value
      , 'F' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목코드,품목' // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2,3' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '품목,품목코드,품목' // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      ds_lo410.setCellData(rowIndex, "commCd", "");
      ds_lo410.setCellData(rowIndex, "commNm", "");
      break;
    case 'unitCd':
      udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc // 콜백 함수
      , ds_lo410.getCellData(rowIndex, "unitCd") // 화면에서의  Code Element의 Value
      , '' // 화면에서의  Name Element의 Value
      , 'F' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , '7' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , 'LO102,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      ds_lo410.setCellData(rowIndex, "unitCd", "");
      break;
  }
};

//-------------------------------------------------------------------------
// 품목 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_commNm_callBackFunc = function (ret) {
  // 선언부
  let rtnList = new Array();
  rtnList = ret;
  let repClntRowPosi = ds_lo410.getRowPosition();
  if (rtnList != null || rtnList[0] == "N/A") {
    gr_lo410.setFocusedCell(repClntRowPosi, "commNm", true); //포커스
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      return false;
    }
    ds_lo410.setCellData(repClntRowPosi, "commCd", rtnList[0]);
    ds_lo410.setCellData(repClntRowPosi, "commNm", rtnList[1]);
    scwin.commCdHidVal = rtnList[0];
  } else {
    ds_lo410.setCellData(repClntRowPosi, "commCd", "");
    ds_lo410.setCellData(repClntRowPosi, "commNm", "");
    scwin.commCdHidVal = "";
  }
};

//-------------------------------------------------------------------------
// 단위 콜백
//-------------------------------------------------------------------------
scwin.udc_comCodeGrid_unitCd_callBackFunc = function (ret) {
  // 선언부
  let rtnList = new Array();
  rtnList = ret;
  let repClntRowPosi = ds_lo410.getRowPosition();
  if (rtnList != null || rtnList[0] == "N/A") {
    gr_lo410.setFocusedCell(repClntRowPosi, "unitCd", true); //포커스
  }
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return false;
    ds_lo410.setCellData(repClntRowPosi, "unitCd", rtnList[0]);
    ds_lo410.setCellData(repClntRowPosi, "unitNm", rtnList[1]);
    scwin.unitCdHidVal = rtnList[0];
  } else {
    ds_lo410.setCellData(repClntRowPosi, "unitCd", "");
    ds_lo410.setCellData(repClntRowPosi, "unitNm", "");
    scwin.unitCdHidVal = "";
  }
};
scwin.gr_lo410_onafteredit = function (rowIndex, columnIndex, value, info) {
  let colid = gr_lo410.getColumnID(columnIndex);
  let olddata = "";
  switch (colid) {
    case "adptStdSelpchItemCd":
      //TOBE 적용대상 선택에 따른 적용율, 적용금액 입력부 처리
      scwin.fn_setGridComnTrfRt(rowIndex, colid);
      break;
    case "commNm":
      olddata = scwin.commCdHidVal;
      if (olddata == ds_lo410.getCellData(rowIndex, "commNm") || $c.gus.cfIsNull($p, ds_lo410.getCellData(rowIndex, "commNm"))) {
        ds_lo410.setCellData(rowIndex, "commCd", ""); //품목코드
        return false;
      }
      ;
      if (ds_lo410.getCellData(rowIndex, "commNm") == ds_lo410.getOriginalCellData(rowIndex, "commNm")) {
        return false;
      }

      // if (info.type === 'mousedown') { //테스트해보면 입력에는 keydown, 이미지클릭시 mousedown
      //     return false; // onafteredit 로직 중단
      // }

      ds_lo410.setCellData(rowIndex, "commCd", ""); //품목코드
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc // 콜백 함수
      , ds_lo410.getCellData(rowIndex, "commCd") // 화면에서의  Code Element의 Value
      , ds_lo410.getCellData(rowIndex, "commNm") // 화면에서의  Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목코드' // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2,3' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '품목,품목코드,품목' // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      ds_lo410.setCellData(rowIndex, "commCd", "");
      ds_lo410.setCellData(rowIndex, "commNm", "");
      break;
    case "unitCd":
      // if (info.type === 'mousedown') { //테스트해보면 입력에는 keydown, 이미지클릭시 mousedown
      //     return false; // onafteredit 로직 중단
      // }

      olddata = scwin.unitCdHidVal;
      if (ds_lo410.getOriginalCellData(rowIndex, "unitCd") != "") {
        if (olddata == ds_lo410.getCellData(rowIndex, "unitCd") || $c.gus.cfIsNull($p, ds_lo410.getOriginalCellData(rowIndex, "unitCd"))) {
          return false;
        }
      } else {
        if (olddata == ds_lo410.getCellData(rowIndex, "unitCd") || $c.gus.cfIsNull($p, ds_lo410.getCellData(rowIndex, "unitCd"))) {
          return false;
        }
      }
      ;
      if (ds_lo410.getOriginalCellData(rowIndex, "unitCd") == ds_lo410.getCellData(rowIndex, "unitCd")) {
        return false;
      }
      if (ds_lo410.getOriginalCellData(rowIndex, "unitCd") == "" && value == "") {
        return false;
      } else {
        udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc // 콜백 함수
        , ds_lo410.getCellData(rowIndex, "unitCd") // 화면에서의  Code Element의 Value
        , '' // 화면에서의  Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , '7' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , '150,170' // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , 'LO102,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        ds_lo410.setCellData(rowIndex, "unitCd", "");
      }
      break;
    case "comnTrf":
      if (ds_lo410.getCellData(rowIndex, "comnTrf") == "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") != "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_lo410.getCellData(rowIndex, "comnTrf") != "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") == "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FM");
      }
      break;
    case "comnTrfRt":
      if (ds_lo410.getCellData(rowIndex, "comnTrf") == "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") != "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_lo410.getCellData(rowIndex, "comnTrf") != "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") == "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FM");
      }
      break;
    default:
      break;
  }
};
scwin.fn_setGridComnTrfRt = function (row, colid, value) {
  gr_lo410.setReadOnly("cell", row, "comnTrfRt", true); //적용율
  gr_lo410.setReadOnly("cell", row, "comnTrf", true); //적용금액

  switch (colid) {
    case "comnTrfRt":
      if (value == "") {
        gr_lo410.setReadOnly("cell", row, "comnTrf", false);
      } else {
        gr_lo410.setReadOnly("cell", row, "comnTrfRt", false);
      }
      break;
    case "comnTrf":
      if (value == "") {
        gr_lo410.setReadOnly("cell", row, "comnTrf", false);
      } else {
        gr_lo410.setReadOnly("cell", row, "comnTrfRt", false);
      }
      break;
    case "adptStdSelpchItemCd":
      if (value == "") {
        gr_lo410.setReadOnly("cell", row, "comnTrfRt", true);
        gr_lo410.setReadOnly("cell", row, "comnTrf", false);
      } else {
        gr_lo410.setReadOnly("cell", row, "comnTrfRt", false);
        gr_lo410.setReadOnly("cell", row, "comnTrf", true);
      }
      break;
    default:
      break;
  }
};
scwin.gr_lo410_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {
  //console.log("scwin.gr_lo410_oncellindexchange~~");
  //console.log(info);

  let colid = gr_lo410.getColumnID(columnIndex);
  //if(ds_lo410.getRowStatus(rowIndex) == "C" || ds_lo410.getRowStatus(rowIndex) == "U"){
  if (scwin.isEditChk) {
    scwin.fn_setGridComnTrfRt(rowIndex, colid);
  }
  //}
};
scwin.gr_lo410_onrowindexchange = function (rowIndex, oldRow) {
  $c.gus.cfPrepareHidVal($p, ds_lo410, rowIndex, ["commCd", "commNm", "unitCd"]);
  if (ds_lo410.getRowStatus(rowIndex) != "C") {
    gr_lo410.setReadOnly("cell", rowIndex, "selpchItemCd", true);
  } else {
    gr_lo410.setReadOnly("cell", rowIndex, "selpchItemCd", false);
  }
};
scwin.ed_adptDt_onblur = function (e) {
  for (i = 0; i < ds_lo410.getRowCount(); i++) {
    if (ds_lo410.getRowStatus(i) == "C") {
      ds_lo410.setCellData(i, "adptDt", ed_adptDt.getValue());
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_New
// function desc : 신규버튼 클릭
//-------------------------------------------------------------------------
scwin.f_New = async function () {
  ds_lo410.setJSON([]);
  ed_adptDt.setValue(scwin.strCurDate);
  scwin.f_objectProp(scwin.PGM_NEW);
};

//-------------------------------------------------------------------------
// function name : f_Edit
// function desc : 수정버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Edit = async function () {
  scwin.isEditChk = true;
  scwin.f_objectProp(scwin.PGM_EDIT);
  scwin.setSerchGridReadOnly("edit");
};

//-------------------------------------------------------------------------
// function name : f_addrow
// function desc : 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = async function () {
  if (ed_adptDt.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "적용일"));
    return false;
  }

  /*
  if(!cfValidateValue(ed_adptDt.Text, "date=YYYYMMDD")){
      cfAlertMsg(scwin.MSG_LO_ERR_001);
      return false;
  };
  */
  if (ed_adptDt.getValue().length < 8) {
    $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_001);
    return false;
  }
  if (ds_lo410.getRowCount() == 0) {
    let row = $c.data.insertRow($p, $p.getComponentById("gr_lo410"));
    ds_lo410.setCellData(row, "adptDt", ed_adptDt.getValue());
    ds_lo410.setRowPosition(row);
    $c.gus.cfGoPrevPosition($p, gr_lo410, row); //추가 셀 포지션이동
  } else {
    $c.gus.cfCopyRecord($p, gr_lo410);
    ds_lo410.setRowPosition(ds_lo410.getRowCount() - 1);
    $c.gus.cfGoPrevPosition($p, gr_lo410, ds_lo410.getRowPosition()); //추가 셀 포지션이동
    ds_lo410.setCellData(ds_lo410.getRowPosition(), "comnTrfSeq", 0);
  }
  scwin.setSerchGridReadOnly("add");
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 취소
//-------------------------------------------------------------------------
scwin.f_undo = function () {
  //추가등록정보는 삭제, 나머지는 undoRow
  if (ds_lo410.getRowStatus(ds_lo410.getRowPosition()) == "C") {
    ds_lo410.removeRow(ds_lo410.getRowPosition());
  } else {
    ds_lo410.undoRow(ds_lo410.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// function name : ds_lo410.DeleteMarkedo
// function desc : 행삭제
//-------------------------------------------------------------------------
scwin.f_delRow = function () {
  //추가등록정보는 삭제, 나머지는 undoRow
  if (ds_lo410.getRowStatus(ds_lo410.getRowPosition()) == "C") {
    ds_lo410.removeRow(ds_lo410.getRowPosition());
  } else {
    var rowPo = ds_lo410.getRowPosition();
    ds_lo410.deleteRow(rowPo);
    gr_lo410.setFocusedCell(rowPo, "selpchItemCd");
  }
};

//-------------------------------------------------------------------------
// 그리드 ASIS gr_lo410.Editable 처리
//-------------------------------------------------------------------------
scwin.setSerchGridReadOnly = function (type) {
  row = ds_lo410.getRowPosition();
  switch (type) {
    case "init":
      gr_lo410.setReadOnly("column", "selpchItemCd", true);
      gr_lo410.setReadOnly("column", "adptStdSelpchItemCd", true);
      gr_lo410.setReadOnly("column", "commNm", true);
      gr_lo410.setReadOnly("column", "unitCd", true);
      gr_lo410.setReadOnly("column", "comnTrfRt", true);
      gr_lo410.setReadOnly("column", "comnTrf", true);
      break;
    case "add":
      gr_lo410.setReadOnly("column", "selpchItemCd", false);
      gr_lo410.setReadOnly("column", "adptStdSelpchItemCd", false);
      gr_lo410.setReadOnly("column", "commNm", false);
      gr_lo410.setReadOnly("column", "unitCd", false);
      gr_lo410.setReadOnly("column", "comnTrfRt", true);
      gr_lo410.setReadOnly("column", "comnTrf", false);
      break;
    case "edit":
      gr_lo410.setReadOnly("column", "selpchItemCd", true);
      gr_lo410.setReadOnly("column", "adptStdSelpchItemCd", false);
      gr_lo410.setReadOnly("column", "commNm", false);
      gr_lo410.setReadOnly("column", "unitCd", false);
      gr_lo410.setReadOnly("column", "comnTrfRt", true);
      gr_lo410.setReadOnly("column", "comnTrf", false);
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_lo410.getRowPosition();
  //ASIS f_ReqFieldChk
  if (ds_lo410.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_003);
    return false;
  }
  for (i = 0; i < ds_lo410.getRowCount(); i++) {
    if (ds_lo410.getCellData(i, "comnTrfRt") == 0 && ds_lo410.getCellData(i, "comnTrf") == 0) {
      await $c.gus.cfAlertMsg($p, scwin.MSG_LO_ERR_002);
      return false;
    }
  }

  //ASIS cfValidate([gr_lo410]    
  count = 1;
  for (i = 0; i < ds_lo410.getRowCount(); i++) {
    count = 1 + i;
    if (ds_lo410.getCellData(i, "comnTrfRt") <= "0" && ds_lo410.getCellData(i, "comnTrf") <= "0") {
      await $c.win.alert($p, "적용율과 적용금액 중 적어도 하나는 0보다 큰 숫자를 입력하셔야 합니다.");
      gr_lo410.setFocusedCell(i, "comnTrfRt");
      return false;
    }
    if (ds_lo410.getCellData(i, "selpchItemCd") == "") {
      await $c.win.alert($p, "정액 고시요율의 " + count + "번째 데이터에서 할증항목은(는) 필수 입력 항목입니다.");
      gr_lo410.setFocusedCell(i, "selpchItemCd");
      return false;
    }
    if (ds_lo410.getCellData(i, "unitCd") == "") {
      await $c.win.alert($p, "정액 고시요율의 " + count + "번째 데이터에서 단위은(는) 필수 입력 항목입니다.");
      gr_lo410.setFocusedCell(i, "unitCd");
      return false;
    }
  }
  var errCnt = 0;
  for (var i = 0; i < ds_lo410.getRowCount(); i++) {
    for (var j = 0; j < ds_lo410.getRowCount(); j++) {
      if (i != j && ds_lo410.getCellData(i, 'selpchItemCd') == ds_lo410.getCellData(j, 'selpchItemCd') && ds_lo410.getCellData(i, 'adptStdSelpchItemCd') == ds_lo410.getCellData(j, 'adptStdSelpchItemCd') && ds_lo410.getCellData(i, 'commNm') == ds_lo410.getCellData(j, 'commNm') && ds_lo410.getCellData(i, 'unitCd') == ds_lo410.getCellData(j, 'unitCd')) {
        errCnt = i + 1;
        break;
      }
    }
    if (errCnt > 0) {
      var checkRow = ds_lo410.getRowPosition() + 1;
      await $c.win.alert($p, "정액고시요율의 " + checkRow + "번째 데이터에서 할증항목, 적용대상, 품목, 단위은(는) 중복될 수 없습니다.");
      gr_lo410.setFocusedCell(ds_lo410.getRowPosition(), "unitCd", true);
      return false;
    }
  }

  //ASIS f_ReqFieldChk end
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    scwin.editYn = "Y";
    $c.sbm.execute($p, sbm_save);
  } else {
    scwin.editYn = "N";
  }
};

//-------------------------------------------------------------------------
// 저장후 콜백
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfDisableObjects($p, [btn_save, udc_gridAddDel]);
  $c.gus.cfEnableObjects($p, [btn_new, btn_edit]);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  wfm_smp.getWindow().scwin.cfn_getComboReload("05b");
  ds_lo410.setJSON([]);
  ds_lo410_con.set("adptDt", acb_adptDt.getValue());
  sbm_retrieve.action = "/ds.lo.comntrfmgnt.RetrieveFixedAmountAnnouncementTariffListCMD.do";
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.ds_lo410_oncelldatachange = function (info) {
  if (info.colID === "comnTrfRt") {
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_lo410.setCellData(info.rowIndex, info.colID, "0");
    }
  }
  ;
  if (info.colID === "comnTrf") {
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_lo410.setCellData(info.rowIndex, info.colID, "0");
    }
  }
};
scwin.gr_lo410_oneditend = function (rowIndex, columnIndex, value) {
  let colid = gr_lo410.getColumnID(columnIndex);
  let olddata = "";
  switch (colid) {
    case "adptStdSelpchItemCd":
      //TOBE 적용대상 선택에 따른 적용율, 적용금액 입력부 처리
      scwin.fn_setGridComnTrfRt(rowIndex, colid, value);
      break;
    case "commNm":
      olddata = ds_lo410.getCellData(rowIndex, "commNm");
      if (olddata == value) {
        ds_lo410.setCellData(rowIndex, "commCd", ""); //품목코드
        return;
      }
      ;
      if (olddata != "" && value == "") {
        ds_lo410.setCellData(rowIndex, "commCd", "");
        ds_lo410.setCellData(rowIndex, "hidCommNm", "");
        return;
      }

      // if (info.type === 'mousedown') { //테스트해보면 입력에는 keydown, 이미지클릭시 mousedown
      //     return false; // onafteredit 로직 중단
      // }

      ds_lo410.setCellData(rowIndex, "commCd", ""); //품목코드
      udc_comCodeGrid.setSelectId('retrieveCommInfo');
      udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc // 콜백 함수
      , "" // 화면에서의  Code Element의 Value
      , value // 화면에서의  Name Element의 Value
      , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목코드' // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , '2,3' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
      , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , '품목,품목코드,품목' // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
    case "unitCd":
      // if (info.type === 'mousedown') { //테스트해보면 입력에는 keydown, 이미지클릭시 mousedown
      //     return false; // onafteredit 로직 중단
      // }

      olddata = ds_lo410.getCellData(rowIndex, "unitCd");
      if (olddata == value) {
        ds_lo410.setCellData(rowIndex, "unitCd", "");
        return;
      } else {
        udc_comCodeGrid.setSelectId('retrieveCommCdInfo');
        udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_unitCd_callBackFunc // 콜백 함수
        , value // 화면에서의  Code Element의 Value
        , '' // 화면에서의  Name Element의 Value
        , 'T' // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , '7' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , '150,170' // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , 'LO102,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
      }
      break;
    case "comnTrf":
      if (ds_lo410.getCellData(rowIndex, "comnTrf") == "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") != "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_lo410.getCellData(rowIndex, "comnTrf") != "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") == "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FM");
      }
      break;
    case "comnTrfRt":
      if (ds_lo410.getCellData(rowIndex, "comnTrf") == "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") != "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FR");
      } else if (ds_lo410.getCellData(rowIndex, "comnTrf") != "0" && ds_lo410.getCellData(rowIndex, "comnTrfRt") == "0") {
        ds_lo410.setCellData(rowIndex, "famtFratClsCd", "FM");
      }
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_adptDt',search:'start',style:'',submenuSize:'auto',allOption:'',disabled:'false',displayMode:'label',searchTarget:'both','ev:onviewchange':'scwin.acb_adptDt_onviewchange',chooseOption:'',chooseOptionLabel:'-선택-',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_adptDt'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정액고시요율 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자',style:'',tagname:'span'}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_adptDt',title:'적용일자',style:'',objType:'data',mandatory:'true',displayFormat:'yyyy/MM/dd','ev:onblur':'scwin.ed_adptDt_onblur'}}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',grdDownOpts:'{"fileName" : "정액고시요율목록.xlsx", "sheetName" : "정액고시요율목록" ,"type" : "2+4+8+16"}',gridID:'gr_lo410',gridUpYn:'N',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_lo410',focusMode:'both',id:'gr_lo410',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_lo410_onrowindexchange',columnMove:'false','ev:ontextimageclick':'scwin.gr_lo410_ontextimageclick','ev:oneditend':'scwin.gr_lo410_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'적용일자',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'항목',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'공통요율순번',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'적용대상',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'품목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type2',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'품목',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',class:'col-type1',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'단위',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'정액정률구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column21',inputType:'text',style:'',value:'적용율(%)',width:'150'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'column19',inputType:'text',style:'',value:'적용금액',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'adptDt',value:'',displayMode:'label',hidden:'true',displayFormat:'####/##/##',excelFormat:'####.##.##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value delim label',id:'selpchItemCd',inputType:'select',removeBorderStyle:'false',textAlign:'left',width:'150',mandatory:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_gauceUtil_selpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'comnTrfSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value delim label',id:'adptStdSelpchItemCd',inputType:'select',removeBorderStyle:'false',width:'150',textAlign:'left',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_gauceUtil_adptStdSelpchItemCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'commCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'commNm',inputType:'textImage',removeBorderStyle:'false',width:'150',textAlign:'left',maxLength:'100',skipKeyMoveEditMode:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'unitCd',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',mandatory:'true',maxLength:'3',skipKeyMoveEditMode:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'famtFratClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrfRt',inputType:'text',style:'',textAlign:'right',value:'',width:'150',maxLength:'3.2',displayFormat:'##0.00',dataType:'float',allowChar:'0-9.',excelCellType:'number',excelFormat:'##0.00'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'comnTrf',inputType:'text',style:'',textAlign:'right',value:'',width:'150',displayFormat:'#,##0.##',dataType:'float',allowChar:'0-9.',maxLength:'13.2',excelFormat:'#,##0.00',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_addrow',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',id:'udc_gridAddDel',gridID:'gr_lo410',cancelObjType:'data',rowDelObjType:'data',rowAddObjType:'data',rowAddUserAuth:'C',rowDelUserAuth:'D',cancelFunction:'scwin.f_undo',rowDelFunction:'scwin.f_delRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_new',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_New',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_edit',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Edit',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]},{T:1,N:'w2:wframe',A:{id:'wfm_smp',src:'/ui/ds/lo/comntrfmgnt/comboReload.xml',style:''}},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})