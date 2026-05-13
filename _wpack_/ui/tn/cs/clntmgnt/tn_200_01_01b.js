/*amd /ui/tn/cs/clntmgnt/tn_200_01_01b.xml 39217 2697c445d373353044981fd6f5c97e1f2e1585f96bb7c87efb2e1c024ae475a9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'contractTermYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:ondataload':'scwin.ds_out_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNm',name:'협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNm',name:'협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldCoClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldClntNo',name:'OLD거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCtrtStDt',name:'협력업체계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCtrtEndDt',name:'협력업체계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSavePath',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSiz',name:'FILE크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsntYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'changeSts',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.clntmgnt.RetrieveClntContractInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDetail',action:'/ncall.tn.cs.clntmgnt.RetrieveClntContractInfoDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search2","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveDetail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.cs.clntmgnt.SaveClntContractInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_detail","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 협력업체계약등록
 * 메뉴경로 : 물류(N)/국내운영
 * ASIS경로 : /dongwon-ntis-engine/src/main/webapp/tn/cs/clntmgnt/tn_200_01_01b.jsp
 * 작 성 자 : 박원
 * 작 업 일 : 2026-03-16
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-16      박원    최초작성
 *    - 2026-04-14      이진우  T-6668 조치완료
 *    - 2026-04-16      이진우  T-6969 조치완료(정상조회)
 */
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.regBranCd = "";
scwin.coClntNo = "";
scwin.coClntNm = "";
scwin.contractTermYn = "";
scwin.type = "";
scwin.currow = "";
scwin.onpageload = function () {
  const codeOptions = [
  //{ grpCd : "SD205", compID : "lc_pchsAdmitClsCd"},
  {
    grpCd: "SD205",
    compID: "gr_detail:oprBranCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran3CodeList",
    param3: ["1"],
    compID: "lc_regBranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
  var params = $c.data.getParameter($p);
  scwin.cvsslMgntNo = params.cvsslMgntNo == null ? "" : params.cvsslMgntNo;
  scwin.regBranCd = params.regBranCd == null ? "" : params.regBranCd;
  scwin.coClntNo = params.coClntNo == null ? "" : params.coClntNo;
  scwin.coClntNm = params.coClntNm == null ? "" : params.coClntNm;
  scwin.contractTermYn = params.contractTermYn == null ? "" : params.contractTermYn;
  scwin.type = params.type == null ? "" : params.type;
  console.log("호출된 params::", params);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    udc_coClntNm2.hide();
    if (scwin.type == "retrieve") {
      lc_regBranCd.setValue(scwin.regBranCd);
      ed_coClntNm.setValue(scwin.coClntNm);
      ed_coClntNo.setValue(scwin.coClntNo);
      lc_contractTermYn.setValue(scwin.contractTermYn);

      //tr_retrieve.post();    
      $c.sbm.execute($p, sbm_retrieve);
    }
    lc_lobranGubun.setSelectedIndex(1);

    ///임시        
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  var chk = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chk) {
    return;
  }

  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveDetail = function (row) {
  /*    
      var dsHeader = "coClntNo:STRING()"              // 거래처번호
                      + ",regBranCd:STRING()"            //신청지사                       
                      + ",oprBranCd:STRING()"            //운영지사
                      ;           
      ds_search2.SetDataHeader(dsHeader);
  */
  //ds_search2.AddRow();    
  dma_search2.set("regBranCd", ds_out.getCellData(ds_out.getRowPosition(), "regBranCd"));
  dma_search2.set("oprBranCd", ds_out.getCellData(ds_out.getRowPosition(), "oprBranCd"));
  dma_search2.set("coClntNo", ds_out.getCellData(ds_out.getRowPosition(), "coClntNo"));

  //tr_retrieveDetail.Action = "/tn.cs.clntmgnt.RetrieveClntContractInfoDetailCMD.do";
  //tr_retrieveDetail.Post();
  $c.sbm.execute($p, sbm_retrieveDetail);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere = "";
  scwin.currow = row;
  switch (disGubun) {
    case 1:
      // 거래처 팝업           
      rtnList = udc_coClntNm.cfCommonPopUp(scwin.callbackClntList_tpro1 // XML상의 SELECT ID
      , pCode // 화면에서의 거래처 Code Element의  Value
      , pName // 화면에서의거래처 Name Element의  Value
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
      , "거래처,거래처코드/명" // POP-UP Window Title 검색어1,2("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //cfSetReturnValue(rtnList, ed_coClntNm, ed_coClntNo);
      break;
    case 2:
      // 거래처 팝업 (화주)        
      rtnList = udc_coClntNm2.cfCommonPopUp(scwin.callbackClntList_tpro2 // XML상의 SELECT ID
      , pCode // 화면에서의 거래처 Code Element의  Value
      , pName // 화면에서의거래처 Name Element의  Value
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
      , "거래처,거래처코드/명" // POP-UP Window Title 검색어1,2("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      /*
      if(rtnList != null){
          cfSetGridReturnValue(rtnList, ds_detail, row, "clntNo", "clntNm");
      }
      */
      break;
    case 3:
      // 거래처 팝업 (협력)          
      rtnList = udc_coClntNm2.cfCommonPopUp(scwin.callbackClntList_tpro3 // XML상의 SELECT ID
      , pCode // 화면에서의 거래처 Code Element의  Value
      , pName // 화면에서의거래처 Name Element의  Value
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
      , "거래처,거래처코드/명" // POP-UP Window Title 검색어1,2("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      /*
      if(rtnList != null){
          cfSetGridReturnValue(rtnList, ds_detail, row, "coClntNo", "coClntNm");
      }
      */
      break;
    default:
      break;
  }
};
scwin.callbackClntList_tpro1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_coClntNm, ed_coClntNo);
};
scwin.callbackClntList_tpro2 = function (rtnList) {
  console.log(rtnList);
  if (rtnList != null && rtnList != "N/A") {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_detail, scwin.currow, "clntNo", "clntNm");
  } else {
    ds_detail.setCellData(scwin.currow, "clntNo", "");
    ds_detail.setCellData(scwin.currow, "clntNm", "");
  }
};
scwin.callbackClntList_tpro3 = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetGridReturnValue($p, rtnList, ds_detail, scwin.currow, "coClntNo", "coClntNm");
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  ds_detail.setEventPause("", true);
  ds_detail.insertRow();
  gr_detail.setFocusedCell(ds_detail.getRowCount() - 1, 0);
  ds_detail.setCellData(ds_detail.getRowPosition(), "regBranCd", ds_out.getCellData(ds_out.getRowPosition(), "regBranCd"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "regBranNm", ds_out.getCellData(ds_out.getRowPosition(), "regBranNm"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "clntNo", ds_out.getCellData(ds_out.getRowPosition(), "clntNo"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "clntNm", ds_out.getCellData(ds_out.getRowPosition(), "clntNm"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "coClntNm", ds_out.getCellData(ds_out.getRowPosition(), "coClntNm"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "coClntNo", ds_out.getCellData(ds_out.getRowPosition(), "coClntNo"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "coCtrtStDt", ds_out.getCellData(ds_out.getRowPosition(), "coCtrtStDt"));
  ds_detail.setCellData(ds_detail.getRowPosition(), "coCtrtEndDt", ds_out.getCellData(ds_out.getRowPosition(), "coCtrtEndDt"));
  ds_detail.setEventPause("", false);
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_deleteRow = function () {
  if (ds_detail.getRowStatus(ds_detail.getRowPosition()) == "C") {
    ds_detail.removeRow(ds_detail.getRowPosition());
  } else {
    ds_detail.deleteRow(ds_detail.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 행취소
//------------------------------------------------------------------------- 
scwin.f_undoRow = function () {
  if (ds_detail.getRowStatus(ds_detail.getRowPosition()) == "C") {
    ds_detail.removeRow(ds_detail.getRowPosition());
  } else {
    ds_detail.undoRow(ds_detail.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------     
scwin.f_Save = async function () {
  for (var i = 0; i < ds_detail.getRowCount(); i++) {
    if (ds_detail.getCellData(i, "clntNm") == "" || ds_detail.getCellData(i, "clntNo") == "") {
      $c.win.alert($p, "화주명/화주코드는  필수 입력 항목입니다.");
      return;
    }
    if (ds_detail.getCellData(i, "coCtrtStDt") == "" || ds_detail.getCellData(i, "coCtrtEndDt") == "") {
      $c.win.alert($p, "협력업체 계약기간은 필수 입력 항목입니다.");
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ds_detail.getCellData(i, "coCtrtStDt"), ds_detail.getCellData(i, "coCtrtEndDt")))) {
      $c.win.alert($p, MSG_CM_ERR_039);
      return;
    }
  }
  if (await $c.gus.cfValidate($p, [gr_detail])) {
    if (await $c.win.confirm($p, "저장하시겠습니까?")) {
      //tr_save.Action = "//tn.cs.clntmgnt.SaveClntContractInfoCMD.do" ;
      //tr_save.Post(); 
      let e = await $c.sbm.execute($p, sbm_save);

      //scwin.sbm_save_submitdone
      console.log(e.responseJSON.resultDataSet);
      if (e.responseJSON.resultDataSet[0].Code == 0) {
        $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
        //삭제 후 조회
        scwin.f_RetrieveDetail();
      }
    }
  }
};

//-------------------------------------------------------------------------
// 파일 첨부 팝업
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function (row) {
  /*
      var argObject = new Object();
      argObject.fileName    = ds_detail.getCellData(row,"fileNm");
      argObject.filePath    = ds_detail.getCellData(row,"fileSavePath");
  
      var argPath = "";
      var dialSize = "";
      argPath = "/tn/cs/clntmgnt/tn_200_01_01p.jsp";
      dialSize = "dialogWidth:650px; dialogHeight:400px; status:no; scroll:yes";
      
      var resultList = window.showModalDialog(argPath, argObject, dialSize);
  */
  var win_url = "/ui/tn/cs/clntmgnt/tn_200_01_01p.xml";
  var opts = scwin.opts || {};
  opts.modal = true;
  opts.type = "browserPopup";
  opts.id = scwin.popupID || "pupup";
  opts.width = 950;
  opts.height = 400;
  opts.popupName = '첨부파일등록';
  var argObject = {
    fileName: ds_detail.getCellData(row, "fileNm"),
    filePath: ds_detail.getCellData(row, "fileSavePath")
  };
  rtnList = await $c.win.openPopup($p, win_url, opts, argObject);
  console.log("rtnList : ", rtnList);
  if (rtnList != null) {
    if (rtnList[0] != "" && rtnList[0] != "undefined") {
      ds_detail.setCellData(row, "fileNm", rtnList[1]);
      ds_detail.setCellData(row, "fileSavePath", rtnList[0]);
      ds_detail.setCellData(row, "fileSiz", rtnList[2]);
    }
  }
};
scwin.f_Download = function () {
  var row = 0;
  row = ds_detail.getRowPosition();
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  }
  var fileName = "";
  var filePath = "";
  fileName = ds_detail.getCellData(row, "fileNm");
  filePath = ds_detail.getCellData(row, "fileSavePath");
  if (filePath.trim().length == 0) {
    $c.win.alert($p, "선택하신 " + row + "행 해당 항목에 파일이 등록되어 있지 않습니다.");
  } else {
    const extIndex = filePath.lastIndexOf(".");
    if (extIndex > 0) {
      // 파일 다운로드 
      fileName += filePath.substring(extIndex);
      $c.gus.cfDownloadFile($p, fileName, filePath);
    }
  }
};
scwin.isValidDate = function (param) {
  try {
    param = param.replace(/-/g, '');

    // 자리수가 맞지않을때
    if (isNaN(param) || param.length != 8) {
      return false;
    }
    var year = Number(param.substring(0, 4));
    var month = Number(param.substring(4, 6));
    var day = Number(param.substring(6, 8));
    var dd = day / 0;
    if (month < 1 || month > 12) {
      return false;
    }
    var maxDaysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var maxDay = maxDaysInMonth[month - 1];

    // 윤년 체크
    if (month == 2 && (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)) {
      maxDay = 29;
    }
    if (day <= 0 || day > maxDay) {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
};
scwin.udc_coClntNm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_coClntNm.getValue(), ed_coClntNo.getValue(), 'F', 'F');
};
scwin.udc_coClntNm_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_coClntNm, ed_coClntNo, 1);
};

// scwin.udc_coClntNm_onviewchangeNameEvent = function (info) {
//     scwin.f_chkOpenCommonPopUp(ed_coClntNo, ed_coClntNm, 1, false);
// };

scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.ds_out_ondataload = function () {
  var options = {};
  options.sortIndex = "reqSeq";
  options.sortOrder = "-1"; //오른차순:"1", 내림차순"-1"
  ds_out.multisort(options);
  ds_out.reform();
};
scwin.sbm_retrieve_submitdone = function (e) {
  var rowcnt = ds_out.getRowCount();
  if (rowcnt == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    gr_out.setFocusedCell(0, 0);
    scwin.f_RetrieveDetail(rowcnt);
  }
  spa_cnt1.setValue(rowcnt);
};
scwin.sbm_retrieveDetail_submitdone = function (e) {
  let detailcnt = ds_detail.getRowCount();
  if (detailcnt == 0) {} else {
    //T-6668
    setTimeout(function () {
      gr_detail.setFocusedCell(0, "regBranNm");
    }, 100);
  }
  spa_cnt2.setValue(ds_detail.getRowCount());
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_RetrieveDetail(rowIndex);
};
scwin.lc_lobranGubun_onviewchange = function (info) {
  if (lc_lobranGubun.getValue() == '0') {
    //신청지사 regBranCd
    dma_search.set("regBranCd", lc_regBranCd.getValue());
    dma_search.set("oprBranCd", "");
  } else if (lc_lobranGubun.getValue() == '1') {
    //운영지사 oprBranCd
    dma_search.set("oprBranCd", lc_regBranCd.getValue());
    dma_search.set("regBranCd", "");
  }
};
scwin.lc_regBranCd_onviewchange = function (info) {
  if (lc_lobranGubun.getValue() == '0') {
    //신청지사 regBranCd
    dma_search.set("regBranCd", lc_regBranCd.getValue());
    dma_search.set("oprBranCd", "");
  } else if (lc_lobranGubun.getValue() == '1') {
    //운영지사 oprBranCd
    dma_search.set("oprBranCd", lc_regBranCd.getValue());
    dma_search.set("regBranCd", "");
  }
};
scwin.gr_detail_ontextimageclick = function (row, columnIndex) {
  var colid = gr_detail.getColumnID(columnIndex);

  // if(colid == "clntNm") {    
  //     var clntNo = ds_detail.getCellData(row, "clntNo");
  //     var clntNm = ds_detail.getCellData(row, "clntNm");
  //     scwin.f_openCommonPopUp(2, clntNm, clntNo, 'F', 'T',row);
  // } else if(colid == "coClntNm") {
  //     var coClntNo = ds_detail.getCellData(row, "coClntNo");
  //     var coClntNm = ds_detail.getCellData(row, "coClntNm");
  //     scwin.f_openCommonPopUp(3, coClntNm, coClntNo, 'F', 'T',row);
  // } else if( colid == "fileNm") {
  //     scwin.f_fileSet(row);
  // }

  if (colid == "fileNm") {
    scwin.f_fileSet(row);
  }
};

// scwin.ds_detail_oncelldatachange = function (info) {
// // {realRowIndex: 2, rowIndex: 2, colID: 'leng', oldValue: '4', newValue: '5'}
//     var colid = info.colID;
//     var row = info.rowIndex;
//     //var olddata = info.oldValue;

//     if(colid == "clntNm"){
//         var clntNm = ds_detail.getCellData(row, "clntNm");
//         if(clntNm != ""){
//             scwin.f_openCommonPopUp(2, clntNm, '', 'T', 'T',row);
//         }
//     }else if(colid == "coClntNm"){
//         var coClntNm = ds_detail.getCellData(row, "coClntNm");
//         if(coClntNm != ""){
//             scwin.f_openCommonPopUp(3, coClntNm, '', 'T', 'T',row);
//         }
//     }
// };

scwin.gr_detail_oncelldblclick = function (row, columnIndex, colid) {
  //var colid = gr_detail.getColumnID(columnIndex);
  if (colid == "fileNm" && ds_detail.getCellData(row, "fileNm") != "") {
    scwin.f_Download();
  }
};

//협력업체 계약기간 등록 셀 편집 진입시
scwin.gr_detail_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};

//협력업체 계약기간 등록 셀 편집시(화주명 거래처 팝업이 두번오픈)
//조치내용:ds_detail_oncelldatachange,gr_detail_ontextimageclick 제거하고 gr_detail_onafteredit에서 한번만 event처리, 
//파일오픈 팝업은 gr_detail_ontextimageclick 에서만 event처리
scwin.gr_detail_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_detail.getColumnID(columnIndex);
  let rowno = ds_detail.getRowPosition();
  if (value == "") {
    ds_detail.setCellData(rowno, "clntNo", "");
  }
  if (colid == "clntNm") {
    let clntNo = ds_detail.getCellData(rowno, "clntNo");
    let clntNm = ds_detail.getCellData(rowno, "clntNm");
    scwin.f_openCommonPopUp(2, clntNm, clntNo, 'T', 'T', rowno);
  } else if (colid == "coClntNm") {
    let coClntNo = ds_detail.getCellData(rowno, "coClntNo");
    let coClntNm = ds_detail.getCellData(rowno, "coClntNm");
    scwin.f_openCommonPopUp(3, coClntNm, coClntNo, 'F', 'T', rowno);
  } //else if( colid == "fileNm") {
  //     scwin.f_fileSet(rowno);
  // }
};
scwin.gr_detail_onviewchange = function (info) {
  // 변경된 컬럼의 ID를 가져옵니다.
  // var colId = info.columnID; //속지말것 안됨
  var colId = gr_detail.getFocusedColumnID();

  // 체크할 컬럼 ID 리스트
  if (colId === "coCtrtStDt" || colId === "coCtrtEndDt") {
    // 1. 빈 값이 아니고, 날짜 유효성 검사에 실패한 경우
    // 웹스퀘어 공통함수($p.date.isValidDate) 또는 기존 isValidDate 함수 활용
    if (info.newValue !== "" && !scwin.isValidDate(info.newValue)) {
      alert('날짜 형식에 맞지 않습니다');

      // 2. 값을 빈 문자열로 초기화 (가우스의 ds_detail.NameValue = "" 대응)
      dataList1.setCellData(row, colId, "");

      // 3. (옵션) 포커스를 해당 셀로 다시 돌리고 싶을 때
      // gr_detail.setFocusedCell(row, colId, true);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobranGubun',style:'width:100px;',submenuSize:'auto',ref:'','ev:onviewchange':'scwin.lc_lobranGubun_onviewchange',preventKeyList:'ㄷ'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청자사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운영자사'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_regBranCd',style:'width: 150px;',submenuSize:'auto',chooseOptionLabel:'전체','ev:onviewchange':'scwin.lc_regBranCd_onviewchange',ref:'data:dma_search.regBranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coClntNm',btnId:'btn_coClntNm',id:'udc_coClntNm',objTypeCode:'data',objTypeName:'data',validExpCode:'협력업체:no',nameId:'ed_coClntNo',selectID:'retrieveClntList_tpro','ev:onclickEvent':'scwin.udc_coClntNm_onclickEvent',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_coClntNm_onblurCodeEvent',readOnlyName:'true',refDataCollection:'dma_search',code:'coClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약기간 등록여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_contractTermYn',style:'width:100px;',submenuSize:'auto',ref:'data:dma_search.contractTermYn',chooseOption:'true',chooseOptionLabel:'전체',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'등록'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td',style:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_commNm',codeId:'ed_commNm',id:'udc_coClntNm2',nameId:'ed_commNo',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveClntList_tpro',style:'',validExpCode:'협력업체:no'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체 계약리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_out',grdDownOpts:'{"fileName":"협력업체 계약리스트.xlsx","sheetName" : "협력업체 계약리스트", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'6',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_out_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'신청지사',width:'171'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'운영지사',width:'176'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'384',value:'협력업체명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'120',value:'협력업체코드'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranNm',inputType:'text',width:'171'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oprBranNm',inputType:'text',width:'176'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNm',inputType:'text',width:'384',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNo',inputType:'text',width:'120'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체 계약기간 등록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_detail',grdDownOpts:'{"fileName":"협력업체계약리스트상세.xlsx","sheetName" : "협력업체계약리스트상세", "type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNum:'6',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_detail_oncelldblclick',rowStatusVisible:'true',autoFit:'none','ev:onbeforeedit':'scwin.gr_detail_onbeforeedit','ev:onafteredit':'scwin.gr_detail_onafteredit','ev:ontextimageclick':'scwin.gr_detail_ontextimageclick',columnMove:'true','ev:onviewchange':'scwin.gr_detail_onviewchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'신청지사코드',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'신청지사',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'협력업체명',width:'231',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'협력업체코드',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'운영지사',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'화주명',width:'218',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'화주코드',width:'100',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'협력계약기간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'품의서',width:'487',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'column21',value:'파일경로',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'파일크기',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column29',value:'시작',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column28',value:'종료',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranCd',inputType:'text',width:'120',readOnly:'true',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNm',inputType:'text',width:'231',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oprBranCd',inputType:'select',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',width:'218',textAlign:'left',viewType:'default'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCtrtStDt',inputType:'calendar',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCtrtEndDt',inputType:'calendar',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fileNm',inputType:'textImage',width:'487',textAlign:'left',viewType:'icon',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',id:'fileSavePath',displayMode:'label',textAlign:'left',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fileSiz',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_deleteRow',cancelFunction:'scwin.f_undoRow',gridID:'gr_detail',btnDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})