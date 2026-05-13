/*amd /ui/ps/rc/fms/imgnt/rc_605_01_04b.xml 53580 4d35cd976f0b13e7cddb61d8f009307bd525ac60b4b9581bc3345c79b8827d22 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'고객사번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shortCd',name:'차량단축번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehcelNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehcelNm',name:'차량명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdmaNo',name:'고객사번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfYn',name:'차량구분[자가/임차/리스]',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:key',A:{id:'costMgntYn',name:'비용관리',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edDt',name:'종료일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_vehclInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtVehclSeq',name:'차량번호순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shortCd',name:'차량단축코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'관리부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptNm',name:'관리부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDept',name:'계약부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDeptNm',name:'계약부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'차량명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdmaNo',name:'CDMA번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zipSeq',name:'우편번호SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvCycHourMintsec',name:'GPS수신주기',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseAmt',name:'대여료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fuelKndCd',name:'연료종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fuelKndNm',name:'연료종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col25',name:'장비 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrYn',name:'보험가입여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip1',name:'우편번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip2',name:'우편번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carVolume',name:'배기량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfYn',name:'임차/자가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costMgntYn',name:'비용관리',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.fms.imgnt.RetrieveCdmaManagement2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_vehclInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vehclInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_tr_save',action:'/ps.rc.fms.imgnt.RegistCdmaManagement2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_vehclInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 업무용차량 등록
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_605_01_04b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-12-08
 * 수정이력  :
 *    - 2025-12-08      정승혜    최초작성
 *    - 2026-03-04      정승혜    기타수정
 * 메모 :
 * txt_ctrtVehclSeq 쓰이는곳 없음
 * 조회조건 : 
 * 
 */
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strFromDate, -1);
scwin.strNextDate = $c.date.addDate($p, scwin.strFromDate, 1);
scwin.memJson = $c.data.getMemInfo($p);
scwin.clntNo = scwin.memJson.clntNo;
scwin.clntNm = scwin.memJson.clntNm;
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.inUpFlag = false; // 신규, 수정버튼 구분
scwin.pos_rowSts = 0; // 수정 후 컬럼이동

//hidden
scwin.hid_seq = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.f_setDtheader_results();

  // getCodeList
  const codeOptions = [{
    grpCd: "ZZ604",
    compID: "lc_fuelKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'b_Update')]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'b_Cancel')]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'b_Delete')]);

  // 키값을 제외한 나머지 일반 데이터를 편집을 불가능 하게 한다. 
  $c.gus.cfDisableKeyData($p);

  // 우편번호 팝업 비활성화 
  $c.gus.cfDisableObjects($p, btn_busiZip);
  scwin.setInsertHeader();
  scwin.f_Retrieve();
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
// 엑셀다운 2+8+16
scwin.f_runExcel = async function () {
  let totCnt = ds_vehclInfo.getRowCount();
  if (totCnt != 0) {
    const options = {
      fileName: "차량별 운행실적.xlsx",
      sheetName: "차량별 운행실적"
    };
    let confirm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (confirm) {
      $c.data.downloadGridViewExcel($p, gr_vehclInfo, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회조건 header Setting
//-------------------------------------------------------------------------
scwin.f_setDtheader_results = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};
scwin.setInsertHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  scwin.inUpFlag = false;
  $c.gus.cfDisableKeyData($p);
  let ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return;
  }
  dma_Retrieve.set("deptCd", p_ed_srcDeptNo.getValue()); // 부서코드 // ed_qryCntn
  dma_Retrieve.set("vehcelNo", p_ed_vehcelNo.getValue()); // 차량번호
  dma_Retrieve.set("vehcelNm", p_ed_vehcelNm.getValue()); // 차량명
  dma_Retrieve.set("selfYn", p_lc_selfYn.getValue()); // 차량구분[자가/임차/리스]
  dma_Retrieve.set("useYn", p_lc_useYn.getValue());
  dma_Retrieve.set("costMgntYn", p_lc_costMgntYn.getValue());
  dma_Retrieve.set("stDt", ed_stDt.getValue());
  dma_Retrieve.set("edDt", ed_edDt.getValue());
  if (ed_stDt.getValue() != "" || ed_edDt.getValue() != "") {
    if (ed_stDt.getValue() < "19000101") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "사용기간From")); //을(를) 입력하십시오.
      ed_stDt.setValue("");
      ed_stDt.focus();
      return;
    }
    if (ed_edDt.getValue() < "19000101") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_001, "사용기간To")); //을(를) 입력하십시오.
      ed_edDt.setValue("");
      ed_edDt.focus();
      return;
    }
    if (ed_stDt.getValue() > ed_edDt.getValue()) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여주십시요.
      return;
    }
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  scwin.pos_rowSts = ds_vehclInfo.getRowPosition();
  if (!ds_vehclInfo.getModifiedIndex().length > 0) {
    await $c.win.alert($p, "변경된 내용이 없습니다.");
    return;
  }
  for (j = 0; j < ds_vehclInfo.getRowCount(); j++) {
    if (ds_vehclInfo.getRowStatus(j) == "C" || ds_vehclInfo.getRowStatus(j) == "U") {
      if (ds_vehclInfo.getCellData(j, "ctrtNo") == "" || ds_vehclInfo.getCellData(j, "ctrtNo") == "99999999999") {
        if (ds_vehclInfo.getCellData(j, "vehclNo") == "") {
          await $c.win.alert($p, j + 1 + "번째 차량번호를 정확히 입력하십시오.");
          ed_vehclNo.focus();
          return;
        }
      } else {
        if (ds_vehclInfo.getCellData(j, "vehclNo") == "" || ds_vehclInfo.getCellData(j, "shortCd") == "") {
          await $c.win.alert($p, j + 1 + "번째 차량번호를 정확히 입력하십시오.");
          ed_vehclNo.focus();
          return;
        }
      }
      if (ds_vehclInfo.getCellData(j, "userId") == "") {
        await $c.win.alert($p, j + 1 + "번째 사용자 정보를 정확히 입력하십시오.");
        ed_userId.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "carVolume") == "") {
        await $c.win.alert($p, j + 1 + "번째 배기량 정보를 정확히 입력하십시오.");
        ed_carVolume.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "leaseAmt") == "") {
        await $c.win.alert($p, j + 1 + "번째 대여료 정보를 정확히 입력하십시오.");
        ed_leaseAmt.focus();
        return;
      }
      if (ds_vehclInfo.getCellData(j, "fuelKndCd") == "") {
        await $c.win.alert($p, j + 1 + "번째 연료 정보를 정확히 입력하십시오.");
        lc_fuelKndCd.focus();
        return;
      }
      if (!$c.gus.cfIsAfterDate($p, ds_vehclInfo.getCellData(j, "ctrtStDt").trim(), ds_vehclInfo.getCellData(j, "ctrtEndDt").trim())) {
        await $c.win.alert($p, j + 1 + "번째 " + MSG_CM_ERR_039);
        ed_dtFrom.focus();
        return;
      }

      // 비용신고차량인 경우 : 계약기간 필수입력
      if (ds_vehclInfo.getCellData(j, "costMgntYn") == "Y") {
        if (ds_vehclInfo.getCellData(j, "ctrtStDt") == "" || ds_vehclInfo.getCellData(j, "ctrtEndDt") == "") {
          await $c.win.alert($p, j + 1 + "번째 비용신고대상 차량이므로 사용기간을 입력하십시오.");
          ed_dtFrom.focus();
          return;
        }
      }
    }
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_tr_save);
  }
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
  ed_srcDeptNm.setValue("");
  ed_vehcelNo.setValue("");
  ed_vehclNoSrh.setValue("");
};

//-------------------------------------------------------------------------
// 팝업 컨트롤
//-------------------------------------------------------------------------
//조회단 팝업
// 차량번호
scwin.f_vehclNoPopupSrch = function (pbool, isCdYn) {
  udc_workVehclInfo.cfCommonPopUp(scwin.udc_workVehclInfo_callBackFunc, p_ed_vehcelNo.Text, "", pbool, null, null, null, null, null, null, null, null, null, null, "F", null, null);
};

// 차량번호
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    p_ed_vehcelNo.setValue(rtnList[0]);
    p_ed_vehcelNm.setValue(rtnList[1]);
  } else {
    p_ed_vehcelNo.setValue("");
    p_ed_vehcelNm.setValue("");
  }
};

// 차량번호
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_vehclNoPopupSrch('F', 'IMG');
};
scwin.f_vehclNoPopup = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 우편번호팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (check) {
  let data = {
    callbackFn: scwin.f_openZipPopUp_callBackFunc
  };
  let v_url = "/ui/cm/zz/newzipcodePopup.xml";
  let opt = {
    id: "pupup",
    popupName: "우편번호 검색",
    modal: true,
    type: "browserPopup",
    width: 500,
    height: 550,
    title: "우편번호 검색"
  };
  $c.win.openPopup($p, v_url, opt, data);
};
scwin.f_openZipPopUp_callBackFunc = function (popupResult) {
  if (popupResult != null) {
    ed_zip.setValue(popupResult.zip);
    ed_addr1.setValue(popupResult.addr1);
    ed_addr2.focus();

    // 입력값이 없는경우 삭제                
  } else {
    ed_zip.setValue("");
    ed_addr1.setValue("");
  }
};

//-------------------------------------------------------------------------
//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'F');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'F');
  }
};
scwin.udc_userInfo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_userId, ed_userNm, 1, true);
};
scwin.udc_acctDeptCdInfo2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_deptNo, ed_deptNm, 2, true);
};
scwin.udc_acctDeptCdInfo3_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_ctrtDeptNo, ed_ctrtDeptNm, 4, true);
};

//공통 PopUp 호출
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  switch (disGubun) {
    case 1:
      // 사용자
      udc_userInfo.cfCommonPopUp(scwin.udc_userInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의Value
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
      // 관리부서
      udc_acctDeptCdInfo2.cfCommonPopUp(scwin.udc_acctDeptCdInfo2_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
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
      // 부서
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
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
    case 4:
      // 계약부서
      udc_acctDeptCdInfo3.cfCommonPopUp(scwin.udc_acctDeptCdInfo3_callBackFunc, pCode // 화면에서의 ??? Code Element의  Value
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
    default:
      break;
  }
};

// 사용자
scwin.udc_userInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_userId.setValue(rtnList[0]);
    ed_userNm.setValue(rtnList[1]);
  } else {
    ed_userId.setValue("");
    ed_userNm.setValue("");
  }
};

// 관리부서
scwin.udc_acctDeptCdInfo2_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_deptNo.setValue(rtnList[0]);
    ed_deptNm.setValue(rtnList[1]);
  } else {
    ed_deptNo.setValue("");
    ed_deptNm.setValue("");
  }
};

// 부서
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    p_ed_srcDeptNo.setValue(rtnList[0]);
    ed_srcDeptNm.setValue(rtnList[1]);
  } else {
    p_ed_srcDeptNo.setValue("");
    ed_srcDeptNm.setValue("");
  }
};

// 계약부서
scwin.udc_acctDeptCdInfo3_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_ctrtDeptNo.setValue(rtnList[0]);
    ed_ctrtDeptNm.setValue(rtnList[1]);
  } else {
    ed_ctrtDeptNo.setValue("");
    ed_ctrtDeptNm.setValue("");
  }
};

// 부서
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, p_ed_srcDeptNo.getValue(), ed_srcDeptNm.getValue(), 'F', 'F');
};

// 부서
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(3, p_ed_srcDeptNo.getValue(), ed_srcDeptNm.getValue(), 'T', 'F');
};

// 사용자
scwin.udc_userInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_userId.getValue(), ed_userNm.getValue(), 'F', 'F');
};

// 사용자
scwin.udc_userInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_userId.getValue(), ed_userNm.getValue(), 'F', 'F');
};

// 관리부서
scwin.udc_acctDeptCdInfo2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_deptNo.getValue(), ed_deptNm.getValue(), 'F', 'F');
};

// 관리부서
scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_deptNo.getValue(), ed_deptNm.getValue(), 'F', 'F');
};

// 계약부서
scwin.udc_acctDeptCdInfo3_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_ctrtDeptNo.getValue(), ed_ctrtDeptNm.getValue(), 'F', 'F');
};

// 계약부서
scwin.udc_acctDeptCdInfo3_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(4, ed_ctrtDeptNo.getValue(), ed_ctrtDeptNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 버튼 컨트롤
//-------------------------------------------------------------------------  
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, udc_userInfo, false);
};
scwin.f_ContentsEnable = function () {
  // 호출되는곳 없음
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------  
scwin.f_Create = function () {
  scwin.inUpFlag = true;
  let row = ds_vehclInfo.insertRow(); // 행추가
  gr_vehclInfo.setFocusedCell(row, "deptNm", false);
  $c.gus.cfDisableKey($p);

  // 우편번호 팝업 활성화 
  $c.gus.cfEnableObjects($p, btn_busiZip);
  ds_vehclInfo.setCellData(ds_vehclInfo.getRowCount() - 1, "useYn", 1);
  ds_vehclInfo.setCellData(ds_vehclInfo.getRowCount() - 1, "costMgntYn", "N");
  ed_eqNm.focus();
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------  
scwin.f_Update = function () {
  scwin.inUpFlag = true;
  $c.gus.cfDisableKey($p);
  if (ed_ctrtNo.getValue() == "" || ed_ctrtNo.getValue() == "99999999999") {
    $c.gus.cfEnableObj($p, ed_eqNm, true);
    $c.gus.cfEnableObjects($p, btn_busiZip);
  } else {
    $c.gus.cfEnableObj($p, ed_eqNm, false);
  }

  // 차량번호는 수정이 불가능 하다.(PrimaryKey 사용됨)
  $c.gus.cfDisableObjects($p, ed_vehclNo);
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  scwin.inUpFlag = false;
  if (ds_vehclInfo.getRowPosition() > -1) {
    $c.data.undoAll($p, ds_vehclInfo);
    gr_vehclInfo.setFocusedCell(ds_vehclInfo.getRowPosition(), "deptNm", false);
    scwin.f_ContentsDisable();
  } else {}
};

//-------------------------------------------------------------------------
// 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = function () {
  scwin.inUpFlag = false;
  let nowRow = ds_vehclInfo.getRowPosition();
  let sts = ds_vehclInfo.getRowStatus(nowRow);
  if (nowRow != null) {
    if (sts == "C") {
      ds_vehclInfo.removeRow(nowRow);
      gr_vehclInfo.setFocusedCell(nowRow - 1, "deptNm", false);
    } else if (sts == "D") {
      //아무동작 하지 않음
    } else {
      ds_vehclInfo.deleteRow(nowRow);
    }
  }
};

// 서브미션
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_vehclInfo.getRowCount());
  if (ds_vehclInfo.getRowCount() > 0) {
    gr_vehclInfo.setFocusedCell(0, "deptNm", false);
    $c.gus.cfEnableAllBtn($p);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  //$c.gus.cfGoPrevPosition(gr_vehclInfo, scwin.pos_rowSts);
  gr_vehclInfo.setFocusedCell(scwin.pos_rowSts, "deptNm", false);
};

// 서브미션
scwin.sbm_tr_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  scwin.f_Retrieve();
};
scwin.gr_vehclInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (!scwin.inUpFlag) {
    return;
  }
  if (ed_ctrtNo.getValue() == "" || ed_ctrtNo.getValue() == "99999999999") {
    $c.gus.cfEnableObj($p, ed_eqNm, true);
  } else {
    //아닌경우 차량명 수정불가
    $c.gus.cfEnableObj($p, ed_eqNm, false);
  }
};
scwin.gr_vehclInfo_onrowindexchange = function (rowIndex, oldRow) {
  // 신규입력 행의 경우 차량번호를 편집가능하고, 그외는 불가능하게 만든다. 
  let row_Statuse = ds_vehclInfo.getRowStatus(rowIndex);
  if (row_Statuse == "C") {
    $c.gus.cfEnableObjects($p, ed_vehclNo);
  } else {
    $c.gus.cfDisableObjects($p, ed_vehclNo);
  }
};
scwin.btn_busiZip_onclick = function (e) {
  scwin.f_openPopUp('F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveAcctDeptCdInfo',codeId:'p_ed_srcDeptNo',popupTitle:'',nameId:'ed_srcDeptNm',style:'',maxlengthName:'20',refDataCollection:'dma_Retrieve',code:'deptCd',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'p_ed_vehcelNo',nameId:'p_ed_vehcelNm',popupID:'',popupTitle:'',selectID:'retrieveWorkVehclInfo',style:'',refDataCollection:'dma_Retrieve',code:'vehcelNo',name:'vehcelNm',id:'udc_workVehclInfo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'p_lc_selfYn',style:'width: 120px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:dma_Retrieve.selfYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차(현장용)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'리스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용기간 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_stDt',edToId:'ed_edDt',id:'udc_fromToCalendar1',refDataMap:'dma_Retrieve',refEdDt:'edDt',refStDt:'stDt',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비용신고 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',chooseOptionLabel:'전체',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'p_lc_costMgntYn',ref:'data:dma_Retrieve.costMgntYn',style:'width: 90px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'p_lc_useYn',ref:'data:dma_Retrieve.useYn',style:'width: 100px;',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용종료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용중'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',objType:'ctrlBtn',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_runExcel',gridDownUserAuth:'X',gridID:'gr_vehclInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vehclInfo',id:'gr_vehclInfo',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true',rowStatusWidth:'20','ev:oncellclick':'scwin.gr_vehclInfo_oncellclick','ev:onrowindexchange':'scwin.gr_vehclInfo_onrowindexchange'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량번호순번',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'차량단축코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'관리부서코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'관리부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'계약부서코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'계약부서',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'차량</br>번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'차량명',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'CDMA번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column27',value:'사용자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'사용자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'우편번호1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column23',value:'우편번호SEQ',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'주소2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column39',value:'GPS수신주기',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'대여료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column31',value:'연료종류코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'연료종류명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'장비</br>코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'보험가입여부',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtVehclSeq',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd2',inputType:'expression',style:'',value:'',width:'100',hidden:'true',expression:'display(\'eqCd\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shortCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtDept',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtDeptNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNm',inputType:'text',style:'',value:'',width:'100',hidden:'false',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cdmaNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'userId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'zip',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'zipSeq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'addr1',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'addr2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'rcvCycHourMintsec',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'clntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'leaseAmt',value:'',displayMode:'label',hidden:'true',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'fuelKndCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'fuelKndNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtStDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ctrtEndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'insrYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox mt32',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w150',id:'ed_eqNm',style:'',ref:'data:ds_vehclInfo.eqNm',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_vehclNo',style:'',ref:'data:ds_vehclInfo.vehclNo',mandatory:'true',title:'차량번호',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배기량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w150',id:'ed_carVolume',style:'',ref:'data:ds_vehclInfo.carVolume',mandatory:'true',title:'배기량',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_userId',nameId:'ed_userNm',popupID:'',popupTitle:'',selectID:'retrieveUserInfo',style:'',refDataCollection:'ds_vehclInfo',code:'userId',name:'userNm',id:'udc_userInfo','ev:onclickEvent':'scwin.udc_userInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_userInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_userInfo_onblurCodeEvent',mandatoryCode:'true',validTitle:'사용자',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관리부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_deptNo',nameId:'ed_deptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',refDataCollection:'ds_vehclInfo',code:'deptCd',name:'deptNm',id:'udc_acctDeptCdInfo2','ev:onclickEvent':'scwin.udc_acctDeptCdInfo2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo2_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo2_onblurCodeEvent',mandatoryCode:'true',validTitle:'관리부서',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'임차/자가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfYn',style:'',submenuSize:'auto',ref:'data:ds_vehclInfo.selfYn',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'임차(현장용)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'리스'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_ctrtDeptNo',nameId:'ed_ctrtDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',refDataCollection:'ds_vehclInfo',code:'ctrtDept',name:'ctrtDeptNm',id:'udc_acctDeptCdInfo3','ev:onclickEvent':'scwin.udc_acctDeptCdInfo3_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo3_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo3_onblurCodeEvent',mandatoryCode:'true',validTitle:'계약부서',objTypeCode:'data',objTypeName:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대여료',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150 tar',id:'ed_leaseAmt',style:'',maxlength:'13',ref:'data:ds_vehclInfo.leaseAmt',dataType:'number',displayFormat:'#,##0',mandatory:'true',title:'대여료',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_ctrtNo',style:'',ref:'data:ds_vehclInfo.ctrtNo',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar2',refDataMap:'ds_vehclInfo',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',edFromId:'ed_dtFrom',edToId:'ed_dtTo',objTypeFrom:'data',objTypeTo:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'연료종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fuelKndCd',style:'',submenuSize:'auto',ref:'data:ds_vehclInfo.fuelKndCd',mandatory:'true',title:'연료종류',objType:'data',emptyItem:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',style:'',submenuSize:'auto',ref:'data:ds_vehclInfo.useYn',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용종료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용중'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'비용신고여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_costMgntYn',style:'',submenuSize:'auto',ref:'data:ds_vehclInfo.costMgntYn',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신고'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'보험가입여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_insrYn',style:'',submenuSize:'auto',ref:'data:ds_vehclInfo.insrYn',chooseOptionLabel:'$blank',mandatory:'true',title:'보험가입여부',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'우편번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_zip',placeholder:'',style:'',ref:'data:ds_vehclInfo.zip',objType:'data',maxlength:'6',allowChar:'0-9 '}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_busiZip',style:'',type:'button','ev:onclick':'scwin.btn_busiZip_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소1',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_addr1',style:'',ref:'data:ds_vehclInfo.addr1',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소2',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_addr2',style:'',ref:'data:ds_vehclInfo.addr2',objType:'data'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Update',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:''},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})