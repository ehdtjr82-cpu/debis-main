/*amd /ui/ps/rc/fms/imgnt/rc_606_01_04b.xml 43794 a31d50a0dc3173ae7f3c29ef0a3b56424fd12a150fcd49e0071c5dcc9f8ffe1f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehclInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNm',name:'차량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carVolume',name:'배기량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flEffcncy',name:'공인연비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fuelKndCd',name:'연료종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvYn',name:'승인여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'filePath',name:'파일경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileSiz',name:'파일크기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fileNm',name:'파일명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name33',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvYn',name:'승인여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.rc.fms.imgnt.RetreivePersonVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Retrieve","key":"IN_DS1"},{"id":"ds_vehclInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vehclInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.rc.fms.imgnt.SavePersonVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_vehclInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_apprvYn',action:'/ps.rc.fms.imgnt.SaveApprvYnCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_vehclInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_apprvYn_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  $c.gus.cfDisableBtn($p, [b_Update, b_Cancel, b_Save, b_Apprv, b_CancelApprv, btn_fileNm, btn_userId]); // 
  $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn,
  // txt_fileNm,
  txt_flEffcncy]);
  s_lc_useYn.setSelectedIndex(1);

  // gr_vehclInfo.setColumnVisible("acctDeptNm", true);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var totCnt = ds_vehclInfo.getTotalRow();
  if (totCnt != 0) {
    let messageStr = "EXCEL로 다운로드 받으시겠습니까?";
    let downloadVal = await $c.win.confirm($p, messageStr);
    let sheetTitle = "차량정보";
    if (downloadVal) {
      const grdObj = gr_vehclInfo;
      const infoArr = [];
      const options = {
        fileName: sheetTitle + ".xlsx",
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle,
        hiddenVisible: false
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

// scwin.excelDownCallback = async function (e) {
//     let sheetTitle = "차량정보";
//     if (e.clickValue) {
//         const grdObj = gr_vehclInfo;
//         const infoArr = [];
//         const options = {
//             fileName: sheetTitle + ".xlsx", //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
//             sheetName: sheetTitle
//         };
//         $c.data.downloadGridViewExcel(grdObj, options, infoArr);
//     }
// }

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  // tr_retrieve.Post();
  await $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let lengthVal = ds_vehclInfo.getModifiedIndex().length;
  if (!lengthVal) {
    await $c.win.alert($p, "변경된 내용이 없습니다.");
    return;
  }
  for (var j = 0; j < ds_vehclInfo.getTotalRow(); j++) {
    // 1 -> 2
    if (ds_vehclInfo.getRowStatusValue(j) == 2 || ds_vehclInfo.getRowStatusValue(j) == 3) {
      if (ds_vehclInfo.getCellData(j, "vehclNo") == "") {
        await $c.win.alert($p, j + 1 + "번째 차량번호를 입력하십시오.");
        txt_vehclNo.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "vehclNm") == "") {
        await $c.win.alert($p, j + 1 + "번째 차량명을 입력하십시오.");
        txt_vehclNo.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "userId") == "") {
        await $c.win.alert($p, j + 1 + "번째 사용자 정보를 입력하십시오.");
        ed_userId.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "carVolume") == "") {
        await $c.win.alert($p, j + 1 + "번째 배기량 정보를 입력하십시오.");
        txt_carVolume.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "fuelKndCd") == "") {
        await $c.win.alert($p, j + 1 + "번째 연료종류를 선택하십시오.");
        lc_fuelKndCd.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "flEffcncy") == "") {
        await $c.win.alert($p, j + 1 + "번째 공인연비를  입력하십시오.");
        // ed_flEffcncy.focus(); // asis에서도 스크립트 오류 발생중이라 주석처리함
        return;
      }
      if (ds_vehclInfo.getCellData(j, "fileNm") == "" || ds_vehclInfo.getCellData(j, "filePath") == "" || ds_vehclInfo.getCellData(j, "filePath") == "undefined") {
        await $c.win.alert($p, j + 1 + "번째 자동차등록증을 저장 하십시오.");
        // ed_flEffcncy.focus(); // asis에서도 스크립트 오류 발생중이라 주석처리함
        return;
      }
    }
  }
  let messageStr = "저장하시겠습니까?";
  let confirmVal = await $c.win.confirm($p, messageStr);
  if (confirmVal) {
    $c.sbm.execute($p, sbm_save); // tr_save.Post();
  }
};

//-------------------------------------------------------------------------
// 승인
//-------------------------------------------------------------------------
scwin.f_Apprv = async function () {
  let messageStr = "승인하시겠습니까?";
  let confirmVal = await $c.win.confirm($p, messageStr);
  if (confirmVal) {
    ds_vehclInfo.setCellData(ds_vehclInfo.getRowPosition(), "apprvYn", 1);
    // tr_apprvYn.Post();
    $c.sbm.execute($p, sbm_apprvYn);
  }
};

//-------------------------------------------------------------------------
// 승인취소
//-------------------------------------------------------------------------
scwin.f_CancelApprv = async function () {
  let messageStr = "승인취소 하시겠습니까?";
  let confirmVal = await $c.win.confirm($p, messageStr);
  if (confirmVal) {
    ds_vehclInfo.setCellData(ds_vehclInfo.getRowPosition(), "apprvYn", 0);
    $c.sbm.execute($p, sbm_apprvYn); // tr_apprvYn.Post();
  }
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  s_ed_acctDeptCd.setValue("");
  s_txt_acctDeptNm.setValue("");
  s_ed_userId.setValue("");
  s_txt_userNm.setValue("");
  s_lc_useYn.setValue("1");
  s_lc_apprvYn.setValue("");
};

// 부서 udc 돋보기 클릭 이벤트
scwin.udc_deptPopup_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, s_ed_acctDeptCd.getValue(), s_txt_acctDeptNm.getValue(), 'F', 'F'); // 2.부서
};

// 사용자 udc 돋보기 클릭 이벤트
scwin.udc_userPopup_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, s_ed_userId.getValue(), s_txt_userNm.getValue(), 'F', 'F'); // 1. 사용자
};
scwin.udc_userPopup2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_userId.getValue(), txt_userNm.getValue(), 'F', 'F'); // 3. 사용자 popup 그리드 오른쪽
};
scwin.udc_deptPopup_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(s_ed_acctDeptCd, s_txt_acctDeptNm, 2, true);
};
scwin.udc_userPopup_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(s_ed_userId, s_txt_userNm, 1, true);
};
scwin.udc_userPopup2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_userId, txt_userNm, 3, true);
};

// to-do
//-------------------------------------------------------------------------
//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'F');
  }
};

// to-do
//공통 PopUp 호출
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  // 선언부
  // var rtnList = new Array();// 공통POP-UP -> 요청화면 
  var rtnList;
  var rtnList2 = new Array(9);
  switch (disGubun) {
    case 1:
      //alert("사용자팝업");
      // 사용자 팝업 (조회 팝업)
      await udc_userPopup.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null && rtnList[0] != "N/A") {
          s_ed_userId.setValue(rtnList[0]); // userId
          s_txt_userNm.setValue(rtnList[1]); // userNm
        } else {
          s_ed_userId.setValue("");
          s_txt_userNm.setValue("");
        }
      }, pCode // 화면에서의 ??? Code Element의Value
      , pName // 화면에서의 ??? Name Element의Value
      , pClose // 결과가 1건 일때원도우를AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과컬럼의 보여주는개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는컬럼 지정 
      , null // SQL절의 WHERE절에원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의폭
      , null // POP-UP뛰을때 우도우의 사용자 정의높이
      , null // 윈도우 위치 Y좌표 
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //부서조회  //retrieveLogisDeptInfo
      await udc_deptPopup.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null && rtnList[0] != "N/A") {
          s_ed_acctDeptCd.setValue(rtnList[0]);
          s_txt_acctDeptNm.setValue(rtnList[1]);
        } else {
          s_ed_acctDeptCd.setValue("");
          s_txt_acctDeptNm.setValue("");
        }
      }, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 사용자 팝업 (조회 팝업)
      await udc_userPopup2.cfCommonPopUpAsync(async rtnList => {
        if (rtnList != null && rtnList[0] != "N/A") {
          ed_userId.setValue(rtnList[0]); // userId
          txt_userNm.setValue(rtnList[1]); // userNm
        } else {
          ed_userId.setValue("");
          txt_userNm.setValue("");
        }
      }, pCode // 화면에서의 ??? Code Element의Value
      , pName // 화면에서의 ??? Name Element의Value
      , pClose // 결과가 1건 일때원도우를AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과컬럼의 보여주는개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는컬럼 지정 
      , null // SQL절의 WHERE절에원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의폭
      , null // POP-UP뛰을때 우도우의 사용자 정의높이
      , null // 윈도우 위치 Y좌표 
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      //부서조회  //retrieveLogisDeptInfo
      rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo' // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서  
      , null // 보여주는 각 컬럼들의 폭    
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
      , null // 윈도우 위치 Y좌표   
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , null // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //cfSetReturnValue(rtnList, txt_deptCd, txt_deptNm);
      if (rtnList != null && rtnList[0] != "N/A") {
        ed_acctDeptCd.setValue(rtnList[0]);
        txt_acctDeptNm.setValue(rtnList[1]);
      } else {
        ed_acctDeptCd.setValue("");
        txt_acctDeptNm.setValue("");
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------  
scwin.f_Create = function () {
  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Apprv, b_CancelApprv]);
  $c.gus.cfEnableBtnOnly($p, [b_Cancel, b_Save, btn_userId, btn_fileNm]);
  $c.gus.cfEnableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, txt_flEffcncy]);
  ds_vehclInfo.insertRow(); // 행추가
  ds_vehclInfo.setCellData(ds_vehclInfo.getTotalRow() - 1, "useYn", "1");
  ds_vehclInfo.setCellData(ds_vehclInfo.getTotalRow() - 1, "apprvYn", "0");
  gr_vehclInfo.setFocusedCell(ds_vehclInfo.getTotalRow() - 1, "userNm", false);
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------  
scwin.f_Update = function () {
  $c.gus.cfEnableObjects($p, [ed_userId, txt_userNm, txt_vehclNm, lc_fuelKndCd, txt_carVolume, txt_flEffcncy, lc_useYn]);
  $c.gus.cfEnableBtnOnly($p, [b_Cancel, b_Save, btn_userId, btn_fileNm]);
  $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Apprv, b_CancelApprv]);
};

// to-do
//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  $c.data.undoRow($p, ds_vehclInfo);
  if (ds_vehclInfo.getTotalRow() > 0) {
    if (ds_vehclInfo.getCellData(ds_vehclInfo.getRowPosition(), "apprvYn") == "1") {
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_CancelApprv]);
      $c.gus.cfDisableBtn($p, [b_Apprv, b_Save, b_Cancel]);
    } else {
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_Apprv]);
      $c.gus.cfDisableBtn($p, [b_Save, b_Cancel, b_CancelApprv]);
    }
  } else {
    $c.gus.cfDisableAllBtn($p);
    // b_Cancel.setDisabled(true);
    // b_Save.setDisabled(true);
  }
  $c.gus.cfEnableBtnOnly($p, [btn_retrieve]);
  $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn, txt_flEffcncy]);
};

//-------------------------------------------------------------------------
// function desc : 파일 첨부하기
//-------------------------------------------------------------------------    
scwin.f_fileSet = async function () {
  var argObject = new Object();
  var row = ds_vehclInfo.getRowPosition();
  argObject.attachFileNm = txt_fileNm.getValue();
  argObject.attachFilePath = txt_filePath.getValue();
  argObject.attachFilePath = txt_fileSiz.getValue();
  let argPath = "";
  // var dialSize = "";
  // /ui/ps/rc/fms/imgnt/rc_606_01_04b

  argPath = "/ui/ps/rc/fms/imgnt/rc_606_01_04p.xml"; // 화면 없음.
  // dialSize = "dialogWidth:650px; dialogHeight:250px; status:no; scroll:yes";

  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 650,
    height: 250,
    title: ""
  };
  let resultList = await $c.win.openPopup($p, argPath, opts); // arrParent

  if (resultList != null) {
    if (resultList[0] != "" && resultList[0] != "undefined") {
      txt_filePath.setValue(resultList[0]);
      txt_fileNm.setValue(resultList[1]);
      txt_fileSiz.setValue(resultList[2]);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Download
//-------------------------------------------------------------------------
scwin.f_Download = function () {
  var row = ds_vehclInfo.getRowPosition();
  if (row < 0) {
    return;
  } else {
    var fileName = ds_vehclInfo.getCellData(row, "fileNm");
    var filePath = ds_vehclInfo.getCellData(row, "filePath");
    if (filePath.trim().length == 0) {
      $c.win.alert($p, "선택하신 " + (row + 1) + "행에 파일이 등록되어 있지 않습니다.");
    } else {
      $c.gus.cfDownloadFile($p, fileName, filePath);
    }
  }
};
scwin.sbm_retrieve_submit = function (e) {
  ds_Retrieve.set("acctDeptCd", s_ed_acctDeptCd.getValue());
  ds_Retrieve.set("userId", s_ed_userId.getValue());
};

// for=tr_retrieve event=OnSuccess()
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_vehclInfo.getTotalRow();
  if (rowCnt == 0) {
    totalRows.setValue(rowCnt);
    $c.win.alert($p, MSG_CM_ERR_003);
  } else {
    totalRows.setValue(rowCnt);
  }

  // 조회후 첫번째 행에 focus
  gr_vehclInfo.setFocusedCell(0, "userNm", false);
  if (ds_vehclInfo.getTotalRow() > 0) {
    if (ds_vehclInfo.getCellData(ds_vehclInfo.getRowPosition(), "apprvYn") == "0") {
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_Apprv]);
      $c.gus.cfDisableBtn($p, [b_Save, b_Cancel, btn_fileNm, b_CancelApprv, btn_userId]);
    } else {
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_CancelApprv]);
      $c.gus.cfDisableBtn($p, [b_Save, b_Update, b_Cancel, btn_fileNm, b_Apprv, btn_userId]);
    }
  } else {
    $c.gus.cfDisableBtn($p, [b_Save, b_Cancel, b_Update, b_Apprv, b_CancelApprv, btn_fileNm, btn_userId]);
  }
  $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn, txt_flEffcncy]);
};

// for= tr_save event = OnSuccess()
scwin.sbm_save_submitdone = async function (e) {
  await scwin.f_Retrieve();
};

// for=tr_apprvYn event=OnSuccess()
scwin.sbm_apprvYn_submitdone = async function (e) {
  await scwin.f_Retrieve();
};

// for=gr_vehclInfo event=OnClick(row,colid)
scwin.gr_vehclInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  var row_Statuse = ds_vehclInfo.getRowStatusValue(rowIndex);

  // 0:Normal,3:Update,1:Insert,4:Logical,2:Delete 
  // (초기상태:0, 갱신:1, 삽입:2, 삭제:3, 삽입 후 삭제:4) to-be
  if (row_Statuse == "0") {
    // 0 -> 1
    if (ds_vehclInfo.getCellData(rowIndex, "apprvYn") == 1) {
      $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn, txt_flEffcncy]);
      $c.gus.cfDisableBtn($p, [b_Save, b_Cancel, b_Update, b_Apprv, btn_fileNm, btn_userId]);
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_CancelApprv]);
    } else {
      $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn, txt_flEffcncy]);
      $c.gus.cfDisableBtn($p, [b_Save, b_Cancel, b_Update, b_CancelApprv, btn_fileNm, btn_userId]);
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update, b_Apprv]);
    }
  } else if (row_Statuse == "2") {
    //신규일때 1 -> 2
    $c.gus.cfEnableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, txt_flEffcncy]);
    $c.gus.cfDisableBtn($p, [b_Update, b_Apprv, b_CancelApprv]);

    // b_Create 추가함 
    $c.gus.cfEnableBtnOnly($p, [b_Create, b_Save, b_Cancel, btn_userId, btn_fileNm]);
  } else if (row_Statuse == "3") {
    //삭제일때 2 -> 3
    $c.gus.cfEnableBtnOnly($p, [b_Save, b_Cancel]);
    $c.gus.cfDisableBtn($p, [b_Create, b_Update, b_Apprv, b_CancelApprv]);
    $c.gus.cfDisableObjects($p, [ed_userId, txt_userNm, txt_vehclNo, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, lc_useYn, txt_flEffcncy]);
  } else if (row_Statuse == "3") {
    //수정일때 3 ->4
    $c.gus.cfEnableObjects($p, [ed_userId, txt_userNm, txt_vehclNm, lc_fuelKndCd, txt_carVolume, lc_apprvYn, txt_flEffcncy]);
    $c.gus.cfDisableBtn($p, [b_Update, b_Apprv, b_CancelApprv]);
    $c.gus.cfEnableBtnOnly($p, [b_Save, b_Cancel, btn_userId, btn_fileNm]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'s_ed_acctDeptCd',validTitle:'',nameId:'s_txt_acctDeptNm',style:'',id:'udc_deptPopup','ev:onclickEvent':'scwin.udc_deptPopup_onclickEvent','ev:onblurCodeEvent':'scwin.udc_deptPopup_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'s_ed_userId',nameId:'s_txt_userNm',popupID:'',selectID:'retrieveUserEmpInfo',style:'',validTitle:'',btnId:'btn_userId',id:'udc_userPopup','ev:onclickEvent':'scwin.udc_userPopup_onclickEvent','ev:onblurCodeEvent':'scwin.udc_userPopup_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'s_lc_apprvYn',style:'width: 100px;',submenuSize:'fixed',ref:'data:ds_Retrieve.apprvYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'s_lc_useYn',ref:'data:ds_Retrieve.useYn',style:'width: 100px;',submenuSize:'fixed'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_vehclInfo',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vehclInfo',id:'gr_vehclInfo',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',sortable:'true','ev:oncellclick':'scwin.gr_vehclInfo_oncellclick',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'부서코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'부서',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'사용자ID',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'사용자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'차량</br>번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'차량명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'연료종류코드',width:'150'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'배기량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'공인연비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'승인여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'파일명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'파일경로',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'파일크기',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptCd',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',style:'text-align: left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'userId',inputType:'text',removeBorderStyle:'false',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'userNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:';text-align:left;',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNm',inputType:'text',style:';text-align:left;',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fuelKndCd',inputType:'text',style:'',value:'',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'carVolume',value:'',displayMode:'label',hidden:'true',dataType:'number',displayFormat:'#,###.##0',excelFormat:'#,###.000',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'flEffcncy',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###.##0',excelCellType:'number',excelFormat:'#,###.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'useYn',value:'',displayMode:'label',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'apprvYn',value:'',displayMode:'label',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fileNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'filePath',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'fileSiz',value:'',displayMode:'label',readOnly:'true',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'ed_userId',nameId:'txt_userNm',popupID:'',selectID:'retrieveUserEmpInfo',style:'',validTitle:'',mandatoryCode:'true',refDataCollection:'ds_vehclInfo',id:'udc_userPopup2','ev:onclickEvent':'scwin.udc_userPopup2_onclickEvent',code:'userId',name:'userNm','ev:onblurCodeEvent':'scwin.udc_userPopup2_onblurCodeEvent',btnId:'btn_userId'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'width:100px;',submenuSize:'fixed',ref:'data:ds_vehclInfo.useYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclNo',style:'width: 150px;',mandatory:'true',ref:'data:ds_vehclInfo.vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vehclNm',style:'',mandatory:'true',ref:'data:ds_vehclInfo.vehclNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연료종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fuelKndCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_vehclInfo.fuelKndCd',displayMode:'label',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LPG겸용'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'디젤'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'가솔린'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'HYB'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'LPG'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'L'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배기량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_carVolume',style:'width: 150px;',mandatory:'true',ref:'data:ds_vehclInfo.carVolume'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'공인연비',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 150px;',id:'txt_flEffcncy',class:'',mandatory:'true',ref:'data:ds_vehclInfo.flEffcncy'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'km/ℓ ',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_apprvYn',style:'width:100px;',submenuSize:'fixed',ref:'data:ds_vehclInfo.apprvYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'첨부파일',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_fileNm',placeholder:'',style:'text-decoration:underline;width: 200px;',ref:'data:ds_vehclInfo.fileNm','ev:onclick':'scwin.f_Download',disabled:'false'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_fileNm',style:'',type:'button','ev:onclick':'scwin.f_fileSet'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot ',id:'',label:'공인연비는 자동차등록증 상의 연비를 입력하시기 바랍니다. ',style:''}}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_CancelApprv',style:'',type:'button','ev:onclick':'scwin.f_CancelApprv',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_Apprv',style:'',type:'button','ev:onclick':'scwin.f_Apprv',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',disabled:'false',id:'b_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{style:'display:none',id:''},E:[{T:1,N:'xf:input',A:{id:'txt_filePath',style:'width:144px; height:21px; ',ref:'data:ds_vehclInfo.filePath'}},{T:1,N:'xf:input',A:{id:'txt_fileSiz',style:'width:144px; height:21px; ',ref:'data:ds_vehclInfo.fileSiz'}}]}]}]}]}]}]})