/*amd /ui/ac/fm/paymgnt/paymgnt/fm_301_08_02b.xml 41279 cc0f2ac4fbf4a24ffb2eb46a316e7bd517ba0df9c482d55814bc4294c68961d7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'setoffCls',name:'상계구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'세금계산서일자시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryEdDt',name:'세금계산서일자종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'상계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'채권번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_process',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntCd',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItem',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffSlipNo',name:'상계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'setoffClsNo',name:'상계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctRecvNo',name:'name16',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ac.fm.paymgnt.paymgnt.RetrieveTargetSetoffListJaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fm.paymgnt.paymgnt.DeleteSetoffSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.paymgnt.ProcessTargetSetoffJaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
//-------------------------------------------------------------------------
// hidden
//-------------------------------------------------------------------------
scwin.txt_eqCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {

  //ASIS 히든,showfalse 그리드 필드정보
  /*
  gr_master.setColumnVisible("clntNo", false);
  gr_master.setColumnVisible("selpchItemCd", false);
  gr_master.setColumnVisible("selpchItemNm", false);
  gr_master.setColumnVisible("setoffClsNo", false);
  */
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
  ed_slipDt.setValue(scwin.g_sCurrDate);
  lc_qrySetoffCls.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
  ed_reqStartDt.setValue(scwin.g_sCurrDate.substring(0, 6) + "01");
  ed_reqEndDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 소속거래처
//-------------------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_txt_clntNm, '2');
};

//-------------------------------------------------------------------------
// 소속거래처찾기
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_txt_clntNm, 'F', 'F');
};

//-------------------------------------------------------------------------
// 매출입항목
//-------------------------------------------------------------------------
scwin.udc_selpchItem_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_selpchItemCd, ed_txt_selpchItemNm, '3');
};

//-------------------------------------------------------------------------
// 매출입항목명
//-------------------------------------------------------------------------
scwin.udc_selpchItem_onblurNameEvent = function (e) {
  scwin.f_openPopUp('3', ed_selpchItemCd, ed_txt_selpchItemNm, 'F', 'F');
};

//-------------------------------------------------------------------------
// 매출입항목찾기
//-------------------------------------------------------------------------
scwin.udc_selpchItem_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_selpchItemCd, ed_txt_selpchItemNm, 'F', 'F');
};

//-------------------------------------------------------------------------
// 차량번호
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  if (ed_vehclNoCd.getValue() == "") {
    scwin.txt_eqCd = ""; // 장비코드
  }
  scwin.f_CheckPopUp(ed_vehclNoCd, ed_txt_cond_vehclNo, '4');
};

//-------------------------------------------------------------------------
// 차량번호명
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onblurNameEvent = function (e) {
  scwin.f_openPopUp('4', ed_vehclNoCd, ed_txt_cond_vehclNo, 'F', 'F');
};

//-------------------------------------------------------------------------
// 차량번호찾기
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_vehclNoCd, ed_txt_cond_vehclNo, 'F', 'T');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  try {
    if (orgObjCd.getValue().trim() != orgObjCd.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T', 'F');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
        orgObjCd.setValue("");
        orgObjCd.hidVal = "";
      }
    }
  } catch (e) {
    console.log("f_CheckPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag, pAllSearch) {
  try {
    let code = txtCode.getValue();
    let name = txtName.getValue();
    switch (select_code) {
      // 거래처 PopUp 호출
      case '2':
        //rtnList = cfCommonPopUp(sCmdName,code,name,sFlag,null,null,null,null,null,null,null,null,null,null,"F",null,null); // 거래처
        udc_clntNo.setSelectId('retrieveClntList');
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , 'F' // 중복체크여부	("F")
        , null // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '3':
        udc_selpchItem.setSelectId('retrieveSelpchItemInfo');
        udc_selpchItem.cfCommonPopUp(scwin.udc_selpchItem_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , '5' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , '항목코드,항목명' // Title순서
        , '150,210' // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ',,,,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '440' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , '500' // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , 'F' // 전체검색허용여부	("F")
        , '매출입항목코드조회,항목코드,항목명' // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      case '4':
        udc_vehclNo.setSelectId('retrieveSubsidaryVehclList');
        udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc // 콜백 함수
        , code // 화면에서의 ??? Code Element의 Value
        , name // 화면에서의 ??? Name Element의 Value
        , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , '400' // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearch // 전체검색허용여부	("F")
        , '차량번호,차량단축코드,차량번호' // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
    }
  } catch (e) {
    console.log("f_openPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 소속거래처찾기 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_clntNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_clntNo.setValue(rtnList[0]); // 코드
      ed_txt_clntNm.setValue(rtnList[1]); // 코드명
      ed_clntNo.hidVal = rtnList[0]; // HIDDEN 코드
    } else {
      ed_clntNo.setValue("");
      ed_txt_clntNm.setValue("");
      ed_clntNo.hidVal = "";
    }
  } catch (e) {
    console.log("udc_clntNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 매출입항목 팝업 콜백(2)
//-------------------------------------------------------------------------
scwin.udc_selpchItem_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_selpchItemCd.setValue(rtnList[0]); // 코드
      ed_txt_selpchItemNm.setValue(rtnList[1]); // 코드명
      ed_selpchItemCd.hidVal = rtnList[0]; // HIDDEN 코드
    } else {
      ed_selpchItemCd.setValue("");
      ed_txt_selpchItemNm.setValue("");
      ed_selpchItemCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_selpchItem_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 차량코드 팝업 콜백(3)
//-------------------------------------------------------------------------
scwin.udc_vehclNo_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        scwin.txt_eqCd = ""; // 장비코드
        ed_vehclNoCd.setValue("");
        ed_txt_cond_vehclNo.setValue("");
        ed_vehclNoCd.hidVal = "";
        return;
      }
      $c.gus.cfSetReturnValue($p, rtnList, ed_vehclNoCd, ed_txt_cond_vehclNo, '');
      scwin.txt_eqCd = rtnList[7]; // 장비코드

      ed_vehclNoCd.setValue(rtnList[0]); // 코드
      ed_txt_cond_vehclNo.setValue(rtnList[1]); // 코드명
      ed_vehclNoCd.hidVal = rtnList[0]; // HIDDEN 코드
    } else {
      scwin.txt_eqCd = ""; // 장비코드

      ed_vehclNoCd.setValue("");
      ed_txt_cond_vehclNo.setValue("");
      ed_vehclNoCd.hidVal = "";
    }
  } catch (e) {
    console.log("udc_vehclNo_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    let ret = await $c.gus.cfValidate($p, [ed_reqStartDt]);
    if (!ret) {
      return false;
    }
    let ret2 = await $c.gus.cfValidate($p, [ed_reqEndDt]);
    if (!ret2) {
      return false;
    }
    ds_master.removeAll(); //정보초기화
    ds_condition.set("eqCd", scwin.txt_eqCd);
    $c.sbm.execute($p, sbm_retrieve);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_master.getRowCount()));
    if (ds_master.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      ds_master.sort("payNo", 0); //[0,1,2] 정렬 옵션 (0: 오름차순, 1: 내림차순, 2: 정렬 취소)
      $c.gus.cfGoPrevPosition($p, gr_master, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 일괄상계처리 전표 삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  try {
    if (ds_master.getModifiedIndex().length == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    if (await $c.win.confirm($p, "상계처리내역을 삭제 하시겠습니까?")) {
      ds_process.removeAll();
      let i = 0;
      let j = 0;
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(i, "choice") == "T") {
          //상계전표번호가 없는건은 삭제 할 수 없다.
          if (ds_master.getCellData(i, "setoffSlipNo") == "") {
            $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 삭제 할 수 없습니다.<br/><br/>미발생 상계전표 삭제 불가!");
            return false;
          }
          scwin.f_SetDataSet(i, j);
          j++;
        }
      }
      $c.sbm.execute($p, sbm_delete);
    }
  } catch (e) {
    console.log("f_Delete : " + e);
  }
};

//-------------------------------------------------------------------------
// 일괄상계처리 전표 삭제 콜백
//-------------------------------------------------------------------------
scwin.sbm_delete_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_delete_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 상계처리 저장
//-------------------------------------------------------------------------
scwin.f_Setoff = async function (e) {
  try {
    if (ds_master.getModifiedIndex().length == 0) {
      await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "자료"));
      return false;
    }
    if (await $c.win.confirm($p, "상계처리 하시겠습니까?")) {
      ds_process.removeAll();
      let i = 0;
      let j = 0;
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(i, "choice") == "T") {
          //이미 상계처리된 건은 상계처리 못한다.
          if (ds_master.getCellData(i, "setoffSlipNo") != "") {
            $c.win.alert($p, "전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 이미 상계처리 되었습니다.</br></br>중복상계처리 불가!");
            return false;
          }

          //전표날짜 세팅이 안된건은 처리 못한다.
          if (ds_master.getCellData(i, "slipDt") == "" || $c.gus.cfIsNull($p, ds_master.getCellData(i, "slipDt"))) {
            al$c.win.alert("전표번호[" + ds_master.getCellData(i, "slipNo") + "]건은 작성일자가 없습니다.");
            return false;
          }
          scwin.f_SetDataSet(i, j);
          j++;
        }
      }
      $c.sbm.execute($p, sbm_save);
    }
  } catch (e) {
    console.log("f_Setoff : " + e);
  }
};

//-------------------------------------------------------------------------
// 상계처리 콜백
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  } catch (e) {
    console.log("sbm_save_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// Save or Del DataSet Setting
//-------------------------------------------------------------------------
scwin.f_SetDataSet = function (row, col) {
  try {
    ds_process.insertRow(row);
    ds_process.setCellData(col, "slipNo", ds_master.getCellData(row, "slipNo"));
    ds_process.setCellData(col, "clntNo", ds_master.getCellData(row, "clntNo"));
    ds_process.setCellData(col, "clntNm", ds_master.getCellData(row, "clntNm"));
    ds_process.setCellData(col, "vehclNo", ds_master.getCellData(row, "vehclNo"));
    ds_process.setCellData(col, "sellClntCd", ds_master.getCellData(row, "sellClntCd"));
    ds_process.setCellData(col, "sellClntNm", ds_master.getCellData(row, "sellClntNm"));
    ds_process.setCellData(col, "amt", ds_master.getCellData(row, "amt"));
    ds_process.setCellData(col, "crn", ds_master.getCellData(row, "crn"));
    ds_process.setCellData(col, "slipDt", ds_master.getCellData(row, "slipDt"));
    ds_process.setCellData(col, "selpchItem", ds_master.getCellData(row, "selpchItem"));
    ds_process.setCellData(col, "summary", ds_master.getCellData(row, "summary"));
    ds_process.setCellData(col, "setoffSlipNo", ds_master.getCellData(row, "setoffSlipNo"));
    ds_process.setCellData(col, "selpchItemCd", ds_master.getCellData(row, "selpchItemCd"));
    ds_process.setCellData(col, "selpchItemNm", ds_master.getCellData(row, "selpchItemNm"));
    ds_process.setCellData(col, "setoffClsNo", ds_master.getCellData(row, "setoffClsNo"));
    ds_process.setCellData(col, "acctRecvNo", ds_master.getCellData(row, "acctRecvNo"));
  } catch (e) {
    console.log("f_SetDataSet : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  if (ds_master.getRowCount() <= 0) {
    $c.win.alert($p, "상계내역이 존재하지않습니다.");
    return false;
  }
  const options = {
    fileName: "상계처리.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "상계처리" //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};

//-------------------------------------------------------------------------
// 전표일자 일괄적용
//-------------------------------------------------------------------------
scwin.f_adaptSlipDt = function (row, col) {
  try {
    let chkCnt = 0;
    let stPos = ds_master.getRowPosition();
    let slipDt = ed_slipDt.getValue();
    let i = 0;
    for (i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "choice") == "T") {
        ds_master.setCellData(i, "slipDt", slipDt);
        chkCnt++;
      }
    }
    if (chkCnt == 0) {
      $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
      return false;
    }
  } catch (e) {
    console.log("f_adaptSlipDt : " + e);
  }
};

//-------------------------------------------------------------------------
// 전표번호클릭시
//-------------------------------------------------------------------------
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  try {
    let Colid = columnId;
    let Row = rowIndex;

    //변경처리가능여부 체크 edit={if(setoffSlipNo="","true","false")
    if (Colid == "slipDt") {
      if (ds_master.getCellData(Row, "setoffSlipNo") == "") {
        gr_master.setReadOnly("cell", rowIndex, "slipDt", false);
      } else {
        gr_master.setReadOnly("cell", rowIndex, "slipDt", true); //readOnly    
      }
    }
    if (Colid == "slipNo") {
      if (!(ds_master.getCellData(Row, "slipNo") == null || ds_master.getCellData(Row, "slipNo") == "")) {
        $c.gus.cfShowSlipInfo($p, ds_master.getCellData(Row, "slipNo"));
      }
    }
    if (Colid == "setoffSlipNo") {
      if (!(ds_master.getCellData(Row, "setoffSlipNo") == null || ds_master.getCellData(Row, "setoffSlipNo") == "")) {
        $c.gus.cfShowSlipInfo($p, ds_master.getCellData(Row, "setoffSlipNo"));
      }
    }
    if (Colid == "choice") {
      let i = 0;
      for (i = 0; i < ds_master.getRowCount(); i++) {
        if (ds_master.getCellData(Row, "clntNo") == ds_master.getCellData(i, "clntNo") && ds_master.getCellData(i, "collMoneyAmt") > 0) {
          ds_master.setCellData(i, "choice", ds_master.getCellData(Row, "choice"));
        }
      }
    }
  } catch (e) {
    console.log("gr_master_oncellclick : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'table1',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상계구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_qrySetoffCls',style:'width: 150px;',submenuSize:'fixed',objType:'data',ref:'data:ds_condition.setoffCls',title:'상계구분'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대급금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'외상매출금'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세금계산서일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'qryEdDt',refStDt:'qryStDt',style:'',edFromId:'ed_reqStartDt',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_reqEndDt',objTypeTo:'data',objTypeFrom:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_clntNo',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',editTypeCode:'select',nameId:'ed_txt_clntNm',id:'udc_clntNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_condition',code:'clntNo',selectID:'retrieveClntEmpNoList',validTitle:'소속거래처처',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_selpchItemCd',validExpCode:'',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',editTypeCode:'select',nameId:'ed_txt_selpchItemNm',id:'udc_selpchItem',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_condition',code:'sellpchItem',selectID:'retrieveClntEmpNoList',validTitle:'매출입항목',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_selpchItem_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_selpchItem_onblurNameEvent','ev:onclickEvent':'scwin.udc_selpchItem_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_vehclNoCd',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'4',editTypeCode:'select',nameId:'ed_txt_cond_vehclNo',id:'udc_vehclNo',editTypeName:'select',maxlengthName:'50',refDataCollection:'ds_condition',code:'vehclNoCd',selectID:'retrieveClntEmpNoList',validTitle:'차량번호',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_vehclNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.f_InitObjects'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15','ev:oncellclick':'scwin.gr_master_oncellclick',rowStatusVisible:'true',fixedColumn:'2',visibleRowNumFix:'true',fixedColumnNoMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',value:'선택',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffSlipNo',inputType:'text',value:'상계전표번호',width:'130',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',value:'소속거래처코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',value:'소속거래처명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntCd',inputType:'text',value:'거래처코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',value:'매니저명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',value:'사업자번호',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',value:'작성일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItem',value:'매출입항목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'summary',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'selpchItemCd',value:'매출입항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'selpchItemNm',value:'매출입항목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClsNo',value:'상계구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',value:'채권번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',checkAlways:'true',readOnly:'false',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'setoffSlipNo',inputType:'link',width:'130',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',width:'130',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntCd',inputType:'text',width:'100',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'120',textAlign:'left',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'slipDt',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selpchItem',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'link',id:'slipNo',displayMode:'label',textAlign:'center',class:'linktype'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'selpchItemCd',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'selpchItemNm',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'setoffClsNo',displayMode:'label',textAlign:'center',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctRecvNo',displayMode:'label',textAlign:'center'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column46',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column45',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',expression:'sum(\'amt\')',displayFormat:'#,##0',id:'column41',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column54',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'작성일자 ',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_slipDt',class:'',calendarValueType:'yearMonthDate',mandatory:'true',objType:'data',title:'작성일자',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_adaptSlipDt',style:'',type:'button','ev:onclick':'scwin.f_adaptSlipDt',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일자일괄적용'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Delete',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상계삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Setoff',style:'',type:'button','ev:onclick':'scwin.f_Setoff'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄생성'}]}]}]}]}]}]}]}]}]})