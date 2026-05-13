/*amd /ui/cm/bc/sealmgnt/zz_914_01_02b.xml 49793 79c3aab40adb49f1f79daa11ae5e27175970a7a11c353f0764dab109e3bc426e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_sealRetrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sealOwner',name:'소유회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealOwnerNm',name:'소유회사이름',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealKind',name:'인장종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_prgmRetrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sealOwner',name:'소유회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealKind',name:'인장종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sealStDt',name:'적용기간시작',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_prgmInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'prgmNm',name:'프로그램명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prgmId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealOwner',name:'인장주인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKind',name:'인장종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKindNm',name:'인장종류이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealStDt',name:'적용시작일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_sealInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_sealInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sealOwner',name:'소유회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealOwnerNm',name:'소유회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKindNm',name:'인장종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealStDt',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealEndDt',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvId',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDtm',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImg',name:'이미지이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImgPath',name:'이미지경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKind',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalYn',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImgCnt',name:'name20',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_sealInfo2',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'sealOwner',name:'소유회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealOwnerNm',name:'소유회사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKindNm',name:'인장종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealStDt',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealEndDt',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록아이디',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvId',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvDtm',name:'승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImg',name:'이미지이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImgPath',name:'이미지경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealKind',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDeptCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDeptNm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalYn',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealImgCnt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'url',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'id',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pass',name:'name23',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_sealInfo2',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_sealInfo2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/cm.bc.sealmgnt.RetrieveSealListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_sealRetrieve","key":"IN_DS1"},{"id":"ds_sealInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_sealInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve2',action:'/cm.bc.sealmgnt.RetrieveSealAdjListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_prgmRetrieve","key":"IN_DS1"},{"id":"ds_prgmInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_prgmInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/cm.bc.sealmgnt.SaveSealInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_sealInfo","key":"IN_DS1"},{"action":"modified","id":"ds_prgmInfo","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save2',action:'/cm.bc.sealmgnt.SaveSealImageCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_sealInfo2","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 인장관리 / 인장등록
 * 메뉴경로 : 공통/총무업무/인장관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/cm/bc/sealmgnt/zz_914_01_02b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-04
 * 수정이력  :
 *    - 2025-12-04      정승혜    최초작성
 *    - 2026-03-18      정승혜    기타수정
 * 메모 : 
 * 조회조건 : 
 */
scwin.params = "";
scwin.clntNo = "";
scwin.clntNm = "";
scwin.curDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;

//scwin.url = "jdbc:oracle:thin:@172.21.1.3:1535:DBTOP_P";
//scwin.id = "US_US";
//scwin.pass = "US_US";
scwin.url = "jdbc:oracle:thin:@debisdev.cnkugkac6imf.ap-northeast-2.rds.amazonaws.com:1521:debisdev";
scwin.id = "us_ap";
scwin.pass = "_ap?gus12#$";

//hidden
scwin.txt_regId = "";
scwin.txt_sealImgCnt = "";

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.clntNo = scwin.params["clntNo"];
  scwin.clntNm = scwin.params["clntNm"];

  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ945",
    compID: "con_lc_sealKind, lc_sealKind"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_createHeader();
  lc_useYn.setSelectedIndex(-1);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  con_lc_useYn.setSelectedIndex(0);
  con_ed_sealOwner.setValue("240046");
  con_ed_sealOwnerNm.setValue("동원로엑스(주)");

  //사용자 접근불가
  $c.gus.cfDisableObjects($p, [ed_regNm, ed_regDtm]);

  // 신규추가시  접근 가능
  $c.gus.cfDisableObjects($p, [ed_sealOwner, ed_sealOwnerNm, lc_sealKind, ed_sealStDt, lc_useYn, ed_rmk, ed_DeptCd, ed_DeptNm]);

  //조회시 접근가능
  btn_addSeal.setDisabled(true);
  btn_addPrgm.setDisabled(true);
  btn_clsPrgm.setDisabled(true);
  btn_clsSeal.setDisabled(true);
  btn_delPrgm.setDisabled(true);
  btn_delSeal.setDisabled(true);
  btn_save.setDisabled(true);
  btn_view.setDisabled(true);
  ed_sealImg.setDisabled(true);
};
scwin.f_createHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// function name : f_Retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.f_Retrieve2 = function () {
  $c.sbm.execute($p, sbm_tr_retrieve2);
};
scwin.f_chkField = function () {
  // 호출되는곳 없음
};
scwin.f_chkOpenPopUp = function () {
  // 호출되는곳 없음
};
scwin.f_chkEnable = function (gubun, obj) {
  // Text Box가 readonly 인 경우 팝업을 실행하지 않음.
  if (obj.getReadOnly() || obj.getDisabled()) {
    return;
  } else {
    switch (gubun) {
      case 1:
        //소유회사 Con
        scwin.f_openPopUp(1, con_ed_sealOwner.getValue(), con_ed_sealOwnerNm.getValue(), 'T', 'T');
        break;
      case 2:
        //소유회사
        scwin.f_openPopUp(2, ed_sealOwner.getValue(), ed_sealOwnerNm.getValue(), 'T', 'T');
        break;
    }
  }
};

// 소유회사
scwin.udc_clntList_onviewchangeNameEvent = function (info) {
  scwin.f_chkEnable(1, con_ed_sealOwner);
};

// 소유회사
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_chkEnable(1, con_ed_sealOwner);
};

// 소유회사
scwin.udc_clntList_onblurNameEvent = function (e) {
  scwin.f_chkEnable(1, con_ed_sealOwnerNm);
};

// 소유회사2
scwin.udc_clntList2_onclickEvent = function (e) {
  scwin.f_chkEnable(2, ed_sealOwner);
};

// 소유회사2
scwin.udc_clntList2_onblurCodeEvent = function (e) {
  scwin.f_chkEnable(2, ed_sealOwner);
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "소유회사,소유회사코드,소유회사명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      udc_clntList2.cfCommonPopUp(scwin.udc_clntList2_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "소유회사,소유회사코드,소유회사명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    con_ed_sealOwner.setValue(rtnList[0]);
    con_ed_sealOwnerNm.setValue(rtnList[1]);
  } else {
    con_ed_sealOwner.setValue("");
    con_ed_sealOwnerNm.setValue("");
  }
};
scwin.udc_clntList2_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_sealOwner.setValue(rtnList[0]);
    ed_sealOwnerNm.setValue(rtnList[1]);
  } else {
    ed_sealOwner.setValue("");
    ed_sealOwnerNm.setValue("");
  }
};

// 소유회사
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp(1, con_ed_sealOwner.getValue(), con_ed_sealOwnerNm.getValue(), 'T', 'T');
};
scwin.f_Addrow1 = function () {
  scwin.f_Addrow(1);
};
scwin.f_delrow1 = function () {
  scwin.f_delrow(1);
};
scwin.f_undo1 = function () {
  scwin.f_undo(1);
};
scwin.f_Addrow2 = function () {
  scwin.f_Addrow(2);
};
scwin.f_delrow2 = function () {
  scwin.f_delrow(2);
};
scwin.f_undo2 = function () {
  scwin.f_undo(2);
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow = function (dsGubun) {
  let row = "";
  switch (dsGubun) {
    case 1:
      row = ds_sealInfo.insertRow();
      gr_sealInfo.setFocusedCell(row, "sealOwnerNm", false);
      lc_sealKind.setSelectedIndex(0);
      ed_sealOwner.setValue("240046");
      ed_sealEndDt.setValue("99991231");
      ed_sealOwnerNm.setValue("동원로엑스(주)");
      ed_sealStDt.setValue(scwin.curDate);
      ed_regDtm.setValue(scwin.curDate);
      ed_regNm.setValue(scwin.userNm);
      $c.gus.cfEnable($p, [tbl_sealInfo]);
      $c.gus.cfEnableObjects($p, [ed_sealOwner, ed_sealOwnerNm, ed_sealStDt]);
      $c.gus.cfEnableObjects($p, ed_sealOwnerNm);
      $c.gus.cfDisableObjects($p, [btn_view]);
      $c.gus.cfDisableObjects($p, [ed_regNm, ed_regDtm, btn_view]);
      lc_useYn.setValue("0");
      ds_sealInfo.setRowPosition(row);
      dma_prgmRetrieve.set("sealOwner", ds_sealInfo.getCellData(row, "sealOwner"));
      dma_prgmRetrieve.set("sealKind", ds_sealInfo.getCellData(row, "sealKind"));
      dma_prgmRetrieve.set("sealStDt", ds_sealInfo.getCellData(row, "sealStDt"));
      scwin.f_Retrieve2();
      break;
    case 2:
      row = ds_prgmInfo.insertRow();
      gr_prgmInfo.setFocusedCell(row, "prgmNm", false);
      ds_prgmInfo.setCellData(ds_prgmInfo.getRowPosition(), "sealOwner", ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealOwner"));
      ds_prgmInfo.setCellData(ds_prgmInfo.getRowPosition(), "sealKind", ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealKind"));
      ds_prgmInfo.setCellData(ds_prgmInfo.getRowPosition(), "sealKindNm", ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealKindNm"));
      ds_prgmInfo.setCellData(ds_prgmInfo.getRowPosition(), "sealStDT", ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealStDT"));
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_delrow
// function desc : 그리드 칼럼 삭제
//-------------------------------------------------------------------------
scwin.f_delrow = function (dsGubun) {
  let intRowPosition;
  let intRowCnt;
  let i = 1;
  switch (dsGubun) {
    case 1:
      intRowCnt = ds_prgmInfo.getRowCount();
      for (i = intRowCnt; i >= 0; i--) {
        if (ds_prgmInfo.getRowStatus(i) == "C") {
          ds_prgmInfo.removeRow(i);
          gr_prgmInfo.setFocusedCell(i, "prgmNm", false);
        } else {
          ds_prgmInfo.undoRow(i);
          ds_prgmInfo.deleteRow(i);
          ds_prgmInfo.setRowPosition(i);
          gr_prgmInfo.setFocusedCell(i, "prgmNm", false);
        }
      }
      intRowPosition = ds_sealInfo.getRowPosition();
      if (ds_sealInfo.getRowStatus(intRowPosition) == "C") {
        ds_sealInfo.removeRow(intRowPosition);
        gr_sealInfo.setFocusedCell(intRowPosition - 1, "sealOwnerNm", false);
      } else {
        ds_sealInfo.undoRow(intRowPosition);
        ds_sealInfo.deleteRow(intRowPosition);
        ds_sealInfo.setRowPosition(intRowPosition - 1);
        gr_sealInfo.setFocusedCell(intRowPosition - 1, "sealOwnerNm", false);
      }
      $c.win.alert($p, "인장 삭제시, 인장을 사용할 수 없습니다.");
      break;
    case 2:
      intRowPosition = ds_prgmInfo.getRowPosition();
      if (ds_prgmInfo.getRowStatus(intRowPosition) == "C") {
        ds_prgmInfo.removeRow(intRowPosition);
      } else {
        ds_prgmInfo.undoRow(intRowPosition);
        ds_prgmInfo.deleteRow(intRowPosition);
        ds_prgmInfo.setRowPosition(intRowPosition - 1);
      }
      $c.win.alert($p, "프로그램 삭제시, 인장을 해당 프로그램에서  사용할 수 없습니다.");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_undo
// function desc : 그리드 로우 취소
//-------------------------------------------------------------------------
scwin.f_undo = function (dsGubun) {
  let intRowPosition;
  let intRowCnt;
  let i = 1;
  switch (dsGubun) {
    case 1:
      if (ds_sealInfo.getRowStatus(ds_sealInfo.getRowPosition()) == "C") {
        ds_sealInfo.removeRow(ds_sealInfo.getRowPosition());
      } else {
        ds_sealInfo.undoRow(ds_sealInfo.getRowPosition());
      }
      intRowCnt = ds_sealInfo.getRowCount();
      for (i = intRowCnt; i >= 0; i--) {
        if (ds_prgmInfo.getRowStatus(i) == "C") {
          ds_prgmInfo.removeRow(i);
        }
      }
    case 2:
      if (ds_prgmInfo.getRowStatus(ds_prgmInfo.getRowPosition()) == "C") {
        ds_prgmInfo.removeRow(ds_prgmInfo.getRowPosition());
      } else {
        ds_prgmInfo.undoRow(ds_prgmInfo.getRowPosition());
      }
      break;
  }
};
scwin.f_preViewImg = function () {
  if (ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealEndDt") < scwin.curDate) {
    $c.win.alert($p, "적용 종료된 인장은 미리보기 할 수 없습니다. IT팀에 요청하세요.");
    return;
  }
  let sealOwner = ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealOwner");
  let sealOwnerNm = ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealOwnerNm");
  let sealKind = ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealKind");
  let sealKindNm = ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealKindNm");
  let sealStDt = ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealStDt");
  let data = {
    sealOwner: sealOwner,
    sealKind: sealKind,
    sealStDt: sealStDt,
    sealOwnerNm: sealOwnerNm,
    sealKindNm: sealKindNm
  };
  let opt = {};
  opt.width = "350";
  opt.height = "400";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "인장이미지보기";
  $c.win.openPopup($p, "/ui/cm/bc/sealmgnt/zz_914_01_00p.xml", opt, data);
};

// value={Decode(useYn,"1","Y","N")}
// ds_sealInfo_사용여부
scwin.useYnDisplayFm = function (data) {
  if (data == "1") {
    data = "Y";
  } else {
    data = "N";
  }
  return data;
};

// 엑셀다운 2+4+8+16
scwin.cfGridToExcel = function () {
  const options = {
    fileName: "등록인장목록.xlsx",
    sheetName: "등록인장목록",
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_sealInfo, options);
};

//인장이미지변경시
scwin.f_saveImg = async function () {
  ds_sealInfo2.setJSON(ds_sealInfo.getAllJSON());
  let opt = {};
  opt.width = "1110";
  opt.height = "480";
  opt.modal = true;
  opt.title = "title";
  opt.id = "popup";
  opt.popupName = "인장이미지 등록";
  let rtnList = await $c.win.openPopup($p, "/ui/cm/bc/sealmgnt/zz_914_01_02p.xml", opt);
  if (rtnList[0] == "Y") {
    ed_sealImg.setValue("undefined");
    return;
  }
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "undefined") {
      let filePath = rtnList[0];
      let fileName = rtnList[1];
      ds_sealInfo2.setCellData(ds_sealInfo.getRowPosition(), "sealOwner", ds_sealInfo2.getCellData(ds_sealInfo.getRowPosition(), "sealOwner"));
      ds_sealInfo2.setCellData(ds_sealInfo.getRowPosition(), "sealKind", ds_sealInfo2.getCellData(ds_sealInfo.getRowPosition(), "sealKind"));
      ds_sealInfo2.setCellData(ds_sealInfo.getRowPosition(), "sealStDt", ds_sealInfo2.getCellData(ds_sealInfo.getRowPosition(), "sealStDt"));
      ds_sealInfo2.setCellData(ds_sealInfo.getRowPosition(), "sealImgPath", rtnList[0]);
      ds_sealInfo2.setCellData(ds_sealInfo.getRowPosition(), "sealImg", rtnList[1]);
      ed_sealImg.setValue(rtnList[0]);
    }
  }
};
//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let chkConfirm = await scwin.f_ReqFieldChk();
  if (chkConfirm) {
    let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (confirm) {
      $c.sbm.execute($p, sbm_tr_save);
    }
  }
};

//저장전체크함수
scwin.f_ReqFieldChk = async function () {
  //소유회사
  if (ed_sealOwner.getValue() == "" || ed_sealOwnerNm.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_007, "소유회사"));
    return false;
  }
  //인장종류
  if (lc_sealKind.getValue() == "") {
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_007, "인장종류"));
    return false;
  }
  //적용기간
  /* if ((!ed_sealStDt.getValue() < ed_sealEndDt.getValue()) ) {
      await $c.gus.cfAlertMsg($c.data.getMessage(MSG_CM_WRN_007,"적용기간"));
  return false;
  } */

  if (ed_sealStDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "적용기간 시작일자는 필수 입력 항목 입니다.");
    return false;
  }
  if (ed_sealEndDt.getValue() == "") {
    await $c.gus.cfAlertMsg($p, "적용기간 종료일자는 필수 입력 항목 입니다.");
    return false;
  }
  for (let i = 0; i < ds_prgmInfo.getRowCount(); i++) {
    ds_prgmInfo.setCellData(i, "sealStDt", ds_sealInfo.getCellData(ds_sealInfo.getRowPosition(), "sealStDt"));
  }
  return true;
};
scwin.dataSetDebug = function () {};

//-------------------------------------------------------------------------
// 부서팝업
//-------------------------------------------------------------------------
scwin.f_openDeptPopUp = function (gb) {
  let vTitle = "부서, 부서코드, 부서명";
  let pCode = ed_DeptCd.getValue();
  let pName = ed_DeptNm.getValue();
  if (gb == 1) {
    $c.gus.cfClearPairObj($p, ed_DeptNm);
  } else if (gb == 2) {
    $c.gus.cfClearPairObj($p, ed_DeptCd);
  }
  udc_acctDeptCdInfo4.cfCommonPopUp(scwin.udc_acctDeptCdInfo4_callBackFunc, pCode, pName, "T", null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, null, vTitle, null);
};
scwin.udc_acctDeptCdInfo4_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_DeptCd.setValue(rtnList[0]);
    ed_DeptNm.setValue(rtnList[1]);
  } else {
    ed_DeptCd.setValue("");
    ed_DeptNm.setValue("");
  }
};

// 관리책임부서
scwin.udc_acctDeptCdInfo4_onclickEvent = function (e) {
  scwin.f_openDeptPopUp();
};

// 관리책임부서
scwin.udc_acctDeptCdInfo4_onviewchangeCodeEvent = function (info) {
  scwin.f_openDeptPopUp(1);
};

// 관리책임부서
scwin.udc_acctDeptCdInfo4_onviewchangeNameEvent = function (info) {
  scwin.f_openDeptPopUp(2);
};
scwin.f_ImgPost = function () {
  // 호출되는곳 없음
};

// 서브미션
scwin.sbm_ds_sealInfo2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_sealInfo.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  totalRows1.setValue(ds_sealInfo.getRowCount());
  gr_sealInfo.setFocusedCell(0, "sealOwnerNm", false);
  dma_prgmRetrieve.set("sealOwner", ds_sealInfo.getCellData(0, "sealOwner"));
  dma_prgmRetrieve.set("sealKind", ds_sealInfo.getCellData(0, "sealKind"));
  dma_prgmRetrieve.set("sealKindNm", ds_sealInfo.getCellData(0, "sealKindNm"));
  dma_prgmRetrieve.set("sealStDt", ds_sealInfo.getCellData(0, "sealStDt"));
  scwin.f_Retrieve2();
};

// 서브미션
scwin.sbm_tr_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows2.setValue(ds_prgmInfo.getRowCount());
  gr_prgmInfo.setFocusedCell(0, "prgmNm", false);
  $c.gus.cfEnableBtnOnly($p, [btn_save]);
  $c.gus.cfEnableObjects($p, [ed_sealEndDt, lc_useYn, ed_rmk, ed_DeptCd, ed_DeptNm]);
  btn_addSeal.setDisabled(false);
  btn_addPrgm.setDisabled(false);
  btn_clsPrgm.setDisabled(false);
  btn_clsSeal.setDisabled(false);
  btn_delPrgm.setDisabled(false);
  btn_delSeal.setDisabled(false);
  btn_view.setDisabled(false);
  btn_save.setDisabled(false);
  ed_sealImg.setDisabled(false);
  if (ds_prgmInfo.getRowPosition() == null) {
    $c.gus.cfDisableObjects($p, [btn_view]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_view]);
  }
};

// 서브미션
scwin.sbm_tr_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  //"Parameters" value="url=<%=url%>,id=<%=id%>,pass=<%=pass%>">
  //sbm_tr_save2.action += "&url="+scwin.url+"&id="+scwin.id+"&pass="+ scwin.pass;
  /* 
      for(let i=0; i< ds_sealInfo2.getRowCount(); i++){
          ds_sealInfo2.setCellData(i, "url", scwin.url);
          ds_sealInfo2.setCellData(i, "id", scwin.id);
          ds_sealInfo2.setCellData(i, "pass", scwin.pass);
      }
   */
  console.log("action : " + sbm_tr_save2.action);
  //await $c.sbm.execute(sbm_tr_save2)
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
  await scwin.f_Retrieve();
};

// 서브미션
scwin.sbm_tr_save2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ed_sealImg.setValue("");
};
scwin.gr_sealInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_prgmRetrieve.set("sealOwner", ds_sealInfo.getCellData(rowIndex, "sealOwner"));
  dma_prgmRetrieve.set("sealKind", ds_sealInfo.getCellData(rowIndex, "sealKind"));
  dma_prgmRetrieve.set("sealStDt", ds_sealInfo.getCellData(rowIndex, "sealStDt"));
  scwin.f_Retrieve2();
};
scwin.lc_useYn_onviewchange = function (info) {
  if (lc_useYn.getValue() == "0") {
    //미사용으로 변경 시
    $c.win.alert($p, "미사용으로 변경시 인장을 사용할 수 없습니다.");
  }
};
scwin.ds_sealInfo_onrowpositionchange = function (info) {
  if (ds_sealInfo.getRowCount() > 0) {
    // 이미지 존재할 때만  미리보기 활성화
    if (ds_sealInfo2.getCellData(ds_sealInfo2.getRowPosition(), "sealImg") == "") {
      $c.gus.cfDisableObjects($p, [btn_view]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_view]);
    }
  }
  if (ds_sealInfo.getRowStatus(ds_sealInfo.getRowPosition()) == "C") {
    //새로운 행이 추가 된 경우 
    $c.gus.cfEnable($p, [tbl_sealInfo]);
    $c.gus.cfEnableObjects($p, ed_sealOwnerNm);
  } else {
    // 신규추가시  접근 가능
    $c.gus.cfDisableObjects($p, [ed_sealOwner, ed_sealOwnerNm, lc_sealKind, ed_sealStDt]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소유회사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'con_ed_sealOwner',popupTitle:'',nameId:'con_ed_sealOwnerNm',style:'',maxlengthCode:'6',allowCharCode:'0-9',refDataCollection:'dma_sealRetrieve',code:'sealOwner',name:'sealOwnerNm',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntList_onviewchangeNameEvent',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntList_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인장종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'con_lc_sealKind',search:'start',style:'',submenuSize:'fixed',ref:'data:dma_sealRetrieve.sealKind',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'con_lc_useYn',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:dma_sealRetrieve.useYn',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Srch',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'등록인장 리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_sealInfo',gridDownUserAuth:'X',id:'udc_excel',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'lastColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_sealInfo',id:'gr_sealInfo',style:';text-align:;',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_sealInfo_oncellclick',rowStatusWidth:'20',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'소유회사코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'소유회사명',width:'250',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'인장종류',width:'150',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'적용기간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'사용여부',width:'120',colSpan:'',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'등록아이디',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'등록자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'등록일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'승인여부',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'승인자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'승인일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column34',value:'이미지이름',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'이미지경로',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'종료',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'sealOwner',inputType:'text',style:'',value:'',width:'120',hidden:'true',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealOwnerNm',inputType:'text',style:';text-align:left;',value:'',width:'250',colMerge:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealKindNm',inputType:'text',style:';text-align:left;',value:'',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealStDt',inputType:'text',style:';text-align:center;',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealEndDt',inputType:'text',style:';text-align:center;',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'text',style:';text-align:center;',value:'',width:'120',displayFormatter:'scwin.useYnDisplayFm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regId',inputType:'text',style:'',value:'',width:'130',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regDtm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'apprvYn',inputType:'text',style:'',value:'',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvId',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvDtm',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'sealImg',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sealImgPath',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_Addrow1',rowDelFunction:'scwin.f_delrow1',cancelFunction:'scwin.f_undo1',btnCancelObj:'btn_clsSeal',btnRowAddObj:'btn_addSeal',btnRowDelObj:'btn_delSeal',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_sealInfo',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소유회사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_sealOwner',nameId:'ed_sealOwnerNm',popupID:'',popupTitle:'',selectID:'retrieveClntList',style:'',maxlengthName:'15',UpperFlagCode:'1',maxlengthCode:'6',refDataCollection:'ds_sealInfo',code:'sealOwner',name:'sealOwnerNm',id:'udc_clntList2','ev:onclickEvent':'scwin.udc_clntList2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList2_onblurCodeEvent',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'인장종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_sealKind',search:'start',style:'',submenuSize:'fixed',ref:'data:ds_sealInfo.sealKind',allOption:'',chooseOption:'true',chooseOptionLabel:'선택',mandatory:'true',objType:'data'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리책임부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_DeptCd',nameId:'ed_DeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo4',style:'',maxlengthCode:'10',maxlengthName:'10',refDataCollection:'ds_sealInfo',code:'mgntDeptCd',name:'mgntDeptNm',id:'udc_acctDeptCdInfo4','ev:onclickEvent':'scwin.udc_acctDeptCdInfo4_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_acctDeptCdInfo4_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo4_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적용기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'sealStDt',refDataMap:'ds_sealInfo',style:'',id:'udc_fromToCalendar1',refEdDt:'sealEndDt',edFromId:'ed_sealStDt',edToId:'ed_sealEndDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_regNm',style:'',maxlength:'10',ref:'data:ds_sealInfo.regNm',objType:'data'}},{T:1,N:'xf:input',A:{class:' w150',id:'ed_regId',style:';visibility:hidden;',maxlength:'20',ref:'data:ds_sealInfo.regId'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_regDtm',style:'',ref:'data:ds_sealInfo.regDtm',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'IMAGE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_view',style:'',type:'button','ev:onclick':'scwin.f_preViewImg'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이미지보기'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w400',id:'ed_sealImg',placeholder:'',style:'',initValue:'파일을 선택해주세요...',objType:'data'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger14',style:'',type:'button','ev:onclick':'scwin.f_saveImg'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_rmk',style:'',ref:'data:ds_sealInfo.rmk',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_useYn',search:'start',style:'',submenuSize:'fixed',allOption:'',chooseOption:'',ref:'data:ds_sealInfo.useYn',chooseOptionLabel:'$blank','ev:onviewchange':'scwin.lc_useYn_onviewchange',objType:'data',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'프로그램 리스트',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_prgmInfo',style:'',id:'gr_prgmInfo',visibleRowNum:'5',autoFit:'lastColumn',class:'wq_gvw',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column1',value:'프로그램명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column17',value:'프로그램ID',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'인장주인',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'인장종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column11',value:'인장종류이름',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column19',value:'적용시작일',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'prgmNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'prgmId',value:'',displayMode:'label',hidden:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sealOwner',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sealKind',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sealKindNm',value:'',displayMode:'label',hidden:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sealStDt',value:'',displayMode:'label',hidden:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowDelYn:'Y',btnRowAddYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_Addrow2',rowDelFunction:'scwin.f_delrow2',cancelFunction:'scwin.f_undo2',rowDelObjType:'data',btnCancelObj:'btn_clsPrgm',btnRowAddObj:'btn_addPrgm',btnRowDelObj:'btn_delPrgm',rowAddObjType:'data',cancelObjType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})