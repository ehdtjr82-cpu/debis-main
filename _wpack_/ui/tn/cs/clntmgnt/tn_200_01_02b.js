/*amd /ui/tn/cs/clntmgnt/tn_200_01_02b.xml 33031 7a35af4e6bbabe03ba3096e105a829f6482d054d6163b7cdbe3aad39a8bb6ecd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCtrtStDt',name:'협력업체계약시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCtrtEndDt',name:'협력업체계약종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'approve',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:ondataload':'scwin.ds_out_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNo',name:'협력업체거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldCoClntNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClntNm',name:'협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCtrtStDt',name:'협력업체계약시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCtrtEndDt',name:'협력업체계약종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'contractExpireYn',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oprBranCd',name:'운영지사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsntId',name:'승인자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsntYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSavePath',name:'파일저장경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtStDt',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgReqNm',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.clntmgnt.RetrieveClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_reNew',action:'/ncall.tn.cs.clntmgnt.UpdateClntiInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.cs.clntmgnt.UpdateClntInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 협력업체계약등록현황
 * 메뉴경로 : 물류(N)/국내운영
 * ASIS경로 : /dongwon-ntis-engine/src/main/webapp/tn/cs/clntmgnt/tn_200_01_02b.jsp
 * 작 성 자 : 박원
 * 작 업 일 : 2026-03-17
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-17      박원    최초작성
 *    - 2026-04-16      이진우  T-6969 조치완료(정상조회)
 */

scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.userId = "";
scwin.cheCnt = "";
scwin.onpageload = function () {
  const codeOptions = [
  //{ grpCd : "SD205", compID : "lc_pchsAdmitClsCd"},
  {
    grpCd: "SD205",
    compID: "gr_out:oprBranCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  const codeOptions2 = [{
    method: "getLuxeComboData",
    param1: "NcallWorkImplementEBC",
    param2: "retriveLobran3CodeList",
    param3: ["1"],
    compID: "lc_oprBranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions2);
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  var chk = memJson.userId;
  if (chk == "020900" || chk == "051390" || chk == "101384" || chk == "herekjs" || chk == "ryr8128" || chk == "121097" || chk == "080953" || chk == "100327" || chk == "050277" || chk == "281807" || chk == "111857" || chk == "050277" || chk == "131217" || chk == "170085" || chk == "223137") {
    $c.gus.cfEnableObjects($p, [btn_save, btn_rtn]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_save, btn_rtn]);
  }
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  var chk = $c.gus.cfValidate($p, [tbl_search]);
  if (!chk) {
    return;
  }

  /* if(!cfIsAfterDate(ed_coCtrtStDt.text, ed_coCtrtEndDt.text)){
      cfAlertMsg(MSG_CM_ERR_039);
      ed_coCtrtStDt.Focus();
      return;
  }
  */
  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
  scwin.cheCnt = "0";
};

//-------------------------------------------------------------------------
// 목록 조회
//-------------------------------------------------------------------------
scwin.f_Save = async function (param) {
  if (!(await scwin.f_CheckChk())) {
    $c.win.alert($p, "선택한  정보가 없습니다");
    return;
  }
  if (ds_out.getModifiedIndex().length == 0) {
    $c.win.alert($p, MSG_CM_ERR_005); //변경된 사항이 없습니다.
    return;
  }
  if (param == "1") {
    //승인버튼
    for (var i = 0; i < ds_out.getRowCount(); i++) {
      if (ds_out.getCellData(i, "chk") == "T") {
        if (ds_out.getCellData(i, "fileNm") == 0) {
          $c.win.alert($p, i + 1 + "번째 행은 파일이 없습니다.");
          return;
        }
        if (ds_out.getCellData(i, "cnsntYn") == 1) {
          $c.win.alert($p, i + 1 + "번째 행은 승인할 수 없습니다.");
          return;
        }
        ds_out.setCellData(i, "gubun", "1");
      }
    }
  } else if (param == "0") {
    //반려버튼
    for (var i = 0; i < ds_out.getRowCount(); i++) {
      if (ds_out.getCellData(i, "chk") == "T") {
        if (ds_out.getCellData(i, "cnsntYn") == 0) {
          $c.win.alert($p, i + 1 + "번째 행은 미승인 상태입니다.");
          return;
        }
        ds_out.setCellData(i, "gubun", "0");
      }
    }
  } else if (param == "2") {
    //갱신버튼
    for (var i = 0; i < ds_out.getRowCount(); i++) {
      if (ds_out.getCellData(i, "chk") == "T") {
        if (ds_out.getCellData(i, "fileNm") == 0) {
          $c.win.alert($p, i + 1 + "번째 행은 파일이 없습니다.");
          return;
        }
        if (ds_out.getCellData(i, "cnsntYn") == 2 || ds_out.getCellData(i, "cnsntYn") == 1) {
          $c.win.alert($p, i + 1 + "번째 행은 갱신할 수 없습니다.");
          return;
        }
        ds_out.setCellData(i, "gubun", "2");
      }
    }
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_CheckChk = function () {
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "chk") == "T") {
      return true;
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    /*
        case 1:
        // 등록점소
        pWhere = ",,,T";    // 물류점소구분코드 : LO120 - 팀(T), 지점(A), 사업소(B), CY(C), CFS(F)
         rtnList = cfCommonPopUp('retrieveLogisDeptInfo_tpro'    // XML상의 SELECT ID
                                ,pCode                  // 화면에서의 ??? Code Element의  Value
                                ,pName                  // 화면에서의 ??? Name Element의  Value
                                ,pClose                 // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
                                ,null                   // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
                                ,null                   // Title순서
                                ,null                   // 보여주는 각 컬럼들의 폭
                                ,null                   // 컬럼중에서 숨기는    컬럼 지정
                                ,pWhere                 // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
                                ,null                   // POP-UP뛰을때 원도우의   사용자 정의  폭
                                ,null                   // POP-UP뛰을때 우도우의   사용자 정의  높이
                                ,null                   // 윈도우 위치 Y좌표
                                ,null                   // 윈도우 위치 X좌표
                                ,null                   // 중복체크여부   ("F")
                                ,pAllSearch                 // 전체검색허용여부 ("F")
                                ,"등록점소,점소코드/명"              // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
                                );
         cfSetReturnValue(rtnList, ed_regBranCd, txt_regBranNm);
        break;                              
    */
    case 2:
      // 거래처 팝업           
      rtnList = udc_clntNo.cfCommonPopUp(scwin.callbackClntList_tpro1 // XML상의 SELECT ID
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

      //cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm);
      break;
    case 3:
      // 거래처 팝업           
      rtnList = udc_coClntNo.cfCommonPopUp(scwin.callbackClntList_tpro2 // XML상의 SELECT ID
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

      //cfSetReturnValue(rtnList, ed_coClntNo, txt_coClntNm);
      break;
    default:
      break;
  }
};
scwin.callbackClntList_tpro1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
scwin.callbackClntList_tpro2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_coClntNo, ed_coClntNm);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
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
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_Detail = function (arg1, arg2, arg3, arg4) {
  //var condition ="?"
  var strOrderDetailUrl = "";
  var strOrderDetailTitle = "";
  strOrderDetailUrl = "/ui/tn/cs/clntmgnt/tn_200_01_01b.xml";
  strOrderDetailTitle = "협력업체계약등록";
  var param = {};
  if (arg4 == "") {
    //condition += "regBranCd="+arg1+"&coClntNo="+arg2+"&coClntNm="+arg3+"&contractTermYn="+"0"+"&type=retrieve";
    var param = {
      regBranCd: arg1,
      coClntNo: arg2,
      coClntNm: arg3,
      contractTermYn: "0",
      type: "retrieve"
    };
  } else {
    //condition += "regBranCd="+arg1+"&coClntNo="+arg2+"&coClntNm="+arg3+"&contractTermYn="+"1"+"&type=retrieve";
    var param = {
      regBranCd: arg1,
      coClntNo: arg2,
      coClntNm: arg3,
      contractTermYn: "1",
      type: "retrieve"
    };
  }
  console.log("f_Detail param::", param);

  //cfTabMenuUpdate( strOrderDetailUrl+condition , strOrderDetailTitle) ;   
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "tn_200_01_01b.xml", param, {
    openAction: "exist"
  });
};

//-------------------------------------------------------------------------
// 협력업체명을 더블클릭하면 운송현황 → 배차실적현황 → 가용자원실적(상세)화면으로 이동: 협력업체 매입금액 규모를 확인하기 위함임
//-------------------------------------------------------------------------
scwin.f_Result = function (arg1, arg2) {
  //var condition ="?"
  var strOrderDetailUrl = "";
  var strOrderDetailTitle = "";
  strOrderDetailUrl = "/ui/tn/os/carrslts/carrslts/tn_403_01_03b.xml";
  strOrderDetailTitle = "가용자원실적(상세)";

  //condition += "wrkLobranCd="+arg1+"&coClntNo="+arg2+"&type=retrieve";
  var param = {
    wrkLobranCd: arg1,
    coClntNo: arg2,
    type: "retrieve"
  };
  console.log("f_Result param::", param);

  //cfTabMenuUpdate( strOrderDetailUrl+condition , strOrderDetailTitle) ;   
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, "tn_403_01_03b.xml", param);
};
scwin.f_Download = function (e) {
  var row = 0;
  row = ds_out.getRowPosition();
  if (row < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["첨부파일 행"]);
    return;
  }
  var fileName = "";
  var filePath = "";
  fileName = ds_out.getCellData(row, "fileNm");
  filePath = ds_out.getCellData(row, "fileSavePath");
  if (filePath.trim().length == 0) {
    $c.win.alert($p, "선택하신 " + row + "행 해당 항목에 파일이 등록되어 있지 않습니다.");
  } else {
    if (filePath.indexOf(".") > 0) {
      // 파일 다운로드 
      fileName += filePath.substring(filePath.indexOf("."), filePath.indexOf(".") + 4);
      $c.gus.cfDownloadFile($p, fileName, filePath);
    }
  }
};
scwin.btn_Odr_onclick = function (e) {
  scwin.f_Download();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save(1);
};
scwin.btn_reNew_onclick = function (e) {
  scwin.f_Save(2);
};
scwin.btn_rtn_onclick = function (e) {
  scwin.f_Save(0);
};
scwin.ds_out_ondataload = function () {
  var options = {};
  options.sortIndex = "reqSeq";
  options.sortOrder = "-1"; //오른차순:"1", 내림차순"-1"
  ds_out.multisort(options);
  ds_out.reform();
  spa_cnt.setValue(ds_out.getRowCount());
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_out.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
  gr_out.setFocusedCell(0, "oprBranCd", false);
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    $c.sbm.execute($p, sbm_retrieve);
  } else {
    $c.win.alert($p, e.responseJSON.resultDataSet[1].Msg);
  }
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), '', 'F', 'T');
};
scwin.udc_clntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2, true);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 2, false);
};
scwin.udc_coClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_coClntNo.getValue(), '', 'F', 'T');
};
scwin.udc_coClntNo_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_coClntNo, ed_coClntNm, 3, true);
};
scwin.udc_coClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_coClntNm, ed_coClntNo, 3, false);
};
scwin.decodeYn = function (cnsntYn) {
  //scwin.decodeYn(datalist('contractExpireYn'))
  console.log(cnsntYn);
  return $c.gus.decode($p, cnsntYn, 1, "승인", 2, "승인대기", "미승인");
};
scwin.gr_out_onheaderclick = function (headerId) {
  if (scwin.cheCnt == "1") {
    ds_out.undoAll();
    scwin.cheCnt = "0";
  } else {
    for (var i = 0; i < ds_out.getRowCount(); i++) {
      ds_out.setCellData(i, "chk", "T");
    }
    scwin.cheCnt = "1";
  }
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    if (ds_out.getCellData(rowIndex, "chk") == "F") {
      ds_out.undoRow(rowIndex);
    }
  }
};
scwin.gr_out_oncelldblclick = function (row, columnIndex, colid) {
  if (colid == "coClntNm" && ds_out.getCellData(row, "coClntNm") != "") {
    scwin.f_Detail(ds_out.getCellData(row, "regBranCd"), ds_out.getCellData(row, "coClntNm"), ds_out.getCellData(row, "coClntNo"), ds_out.getCellData(row, "coCtrtEndDt"));
  } else if (colid == "coClntNo" && ds_out.getCellData(row, "coClntNo") != "") {
    scwin.f_Result(ds_out.getCellData(row, "regBranCd"), ds_out.getCellData(row, "coClntNo"));
  } else if (colid == "fileNm" && ds_out.getCellData(row, "fileNm") != "") {
    scwin.f_Download();
  }
};

// 만료예정 o/x 색깔 칠하기
scwin.fn_setBgColor = function (data, formattedData, rowIndex, colIndex) {
  // 1. 모든 컬럼 개수 가져오기
  let colCount = ds_out.getColumnCount();
  let contractExpireYnValue = ds_out.getCellData(rowIndex, "contractExpireYn");
  console.log("contractExpireYnValue::", contractExpireYnValue);
  if (contractExpireYnValue == "O") {
    // 2. 루프를 돌며 모든 셀에 배경색 적용
    for (let i = 0; i < colCount; i++) {
      let colId = ds_out.getColumnID(i); // 인덱스로 컬럼 ID 추출
      // 특정 체크박스 컬럼들을 포함하여 모든 컬럼에 동일한 bgColor 적용
      gr_out.setCellBackgroundColor(rowIndex, colId, "#FFDAB9");
    }
  } else {
    // 2. 루프를 돌며 모든 셀에 배경색 적용
    for (let i = 0; i < colCount; i++) {
      let colId = ds_out.getColumnID(i); // 인덱스로 컬럼 ID 추출
      // 특정 체크박스 컬럼들을 포함하여 모든 컬럼에 동일한 bgColor 적용
      gr_out.setCellBackgroundColor(rowIndex, colId, "white");
    }
  }
  return data;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운영지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_oprBranCd',search:'start',style:'width: 200px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_search.oprBranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm',objTypeCode:'data',objTypeName:'data',validExpCode:'화주명:no','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_clntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',selectID:'retrieveClntList_tpro',refDataCollection:'dma_search',code:'clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_coClntNo',id:'udc_coClntNo',btnId:'btn_coClntNo',nameId:'ed_coClntNm',objTypeCode:'data',objTypeName:'data',validExpCode:'협력업체:no','ev:onclickEvent':'scwin.udc_coClntNo_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_coClntNo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_coClntNo_onviewchangeNameEvent',selectID:'retrieveClntList_tpro',refDataCollection:'dma_search',code:'coClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_approve',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',ref:'data:dma_search.approve',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'승인대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'협력업체 계약리스트',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_out',gridUpYn:'N',grdDownOpts:'{"fileName":"협력업체계약리스트.xlsx","sheetName" : "협력업체계약리스트", "type":"4+8+16", "useSize": "true", "fixedColumnWith": "true"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_out_onheaderclick','ev:oncellclick':'scwin.gr_out_oncellclick','ev:oncelldblclick':'scwin.gr_out_oncelldblclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',value:'',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'지사코드',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'지사명',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'운영지사',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'협력업체명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'협력업체<br/>코드',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'화주명',width:'130',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'화주코드',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'협력계약기간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'계약기간<br/>만료예정',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column23',value:'승인여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column25',value:'파일이름',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column27',value:'최초계약<br/>시작일',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column34',value:'시작',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column33',value:'종료',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',valueType:'other',checkAlways:'true',falseValue:'F',trueValue:'T'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranCd',inputType:'text',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regBranNm',inputType:'text',width:'70',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oprBranCd',inputType:'select',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNm',inputType:'link',width:'130',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coClntNo',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130',textAlign:'left',colMerge:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'80',maxLength:'6'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCtrtStDt',inputType:'calendar',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coCtrtEndDt',inputType:'calendar',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'contractExpireYn',displayMode:'label',readOnly:'true',customFormatter:'scwin.fn_setBgColor'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'cnsntYn',displayMode:'label',readOnly:'true',expression:'scwin.decodeYn(datalist(\'cnsntYn\'))'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'fileNm',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',style:'',id:'orgCtrtStDt',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_cnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_reNew',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_reNew_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'갱신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_rtn',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_rtn_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반려'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_Odr',label:'저장',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.btn_Odr_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'파일다운'}]}]}]}]}]}]}]}]}]})