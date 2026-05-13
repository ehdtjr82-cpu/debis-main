/*amd /ui/ac/fm/stdinfomgnt/fm_100_08_01b.xml 41314 47a345aacf904075463260acaa235b2c0a687105e0fed950dcf6458922105d35 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptDca',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcptDcaSetupYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lowerDeptIncluYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bankCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_rcptDca','ev:oncelldatachange':'scwin.ds_rcptDca_oncelldatachange','ev:onrowpositionchange':'scwin.ds_rcptDca_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'checkYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDca',name:'가상계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'busiNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankCd',name:'은행',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptDcaUseYn',name:'rcptDcaUseYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mallCd',name:'mallCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'acctDeptCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'delYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_create'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'coCd',name:'coCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'crn',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'clntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mallCd',name:'mallCd',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_saveRcptDca',action:'/ac.fm.stdinfomgnt.SaveRcptDcaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_rcptDca","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_rcptDca","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveRcptDca_submitdone','ev:submiterror':'scwin.sbm_saveRcptDca_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_create',action:'/ac.fm.stdinfomgnt.CreateRcptDcaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_create","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_create","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_create_submitdone','ev:submiterror':'scwin.sbm_create_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fm.stdinfomgnt.DeleteClntNoRcptDcaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_rcptDca","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_rcptDca","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveRcptDca',action:'/ac.fm.stdinfomgnt.RetrieveRcptDcaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_rcptDca","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_rcptDca","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveRcptDca_submitdone','ev:submiterror':'scwin.sbm_RetrieveRcptDca_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fm_603_01_06b
// 이름     : 가상계좌관리(극상)
// 경로     : 회계/자금관리/기준정보관리
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-22
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin");
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 

scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vAcctDeptCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "acctDeptCd")) ? '' : $c.data.getMemInfo($p, "acctDeptCd");
scwin.isSubCompany = false;
scwin.rowStatus = [];

//hidden
scwin.txtCoClsCd = "";
scwin.onpageload = async function () {
  chb_printCheck.checkAll(true); //인쇄옵션 체크 

  const codeOptions = [{
    grpCd: "FM098",
    compID: "lc_bankCd, gr_rcptDca:bankCd",
    opt: {
      "range": "2,1"
    }
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions, scwin.callBackSetCommonCode);
};
scwin.callBackSetCommonCode = function () {
  lc_bankCd.setSelectedIndex(1);
};
scwin.onUdcCompleted = function () {
  lc_stsCd.setSelectedIndex(0);
  scwin.f_setCompanyInfo();
  chk_lowerDeptIncluYn.checkAll(false);
  if (scwin.vAcctDeptCd == "00009" || scwin.vAcctDeptCd == "00718") {
    authCheck.show("");
    authCheck4.show("");
    $c.gus.cfEnableObjects($p, [authCheck1]);
  } else {
    authCheck.hide("");
    authCheck4.hide("");
    $c.gus.cfDisableObjects($p, [authCheck1]);
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};
scwin.udc_coCd_cb = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.options.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.options.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.udc_clntNo_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    ed_clntNm.setValue(rtnList[1]); // 코드명
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    ed_clntNm.setValue(""); // 코드명
    ed_clntNo.options.hidVal = ""; // 코드
  }
};
scwin.udc_create_clntNo_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_create_clntNo.setValue(rtnList[0]); // 코드
    ed_create_clntNm.setValue(rtnList[1]); // 코드명
    ed_create_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_create_clntNo.setValue(""); // 코드
    ed_create_clntNm.setValue(""); // 코드명
    ed_create_clntNo.options.hidVal = ""; // 코드
  }
};
scwin.udc_reqAcctDeptCd_cb = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reqAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_reqAcctDeptNm.setValue(rtnList[1]); // 코드명
    ed_reqAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_reqAcctDeptCd.setValue(""); // 코드
    ed_reqAcctDeptNm.setValue(""); // 코드명
    ed_reqAcctDeptCd.options.hidVal = ""; // 코드
  }
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sFlag) {
  let sCmdName = "";
  let param = '';
  switch (select_code) {
    // 사업자번호 PopUp 호출  --> 거래처
    case '1':
      /*
      param    = ",,,"+ed_coCd.getValue();  		
      sCmdName = "retrieveClntList";
      udc_clntNo.setSelectId(sCmdName);
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_cb,code,name,sFlag,null,null,null,null,param,null,null,null,null,null,null,null,null); // 거래처		 	
      */
      break;

    // 거래처    
    case '2':
      param = ",,," + ed_coCd.getValue();
      sCmdName = "retrieveClntList";
      udc_clntNo.setSelectId(sCmdName);
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_cb // 콜백 함수
      , txtCode.getValue() // 화면에서의 ??? Code Element의 Value
      , txtName.getValue() // 화면에서의 ??? Name Element의 Value
      , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;

    // 가상계좌 신규 설정용 팝업(거래처번호) 	
    case '3':
      param = ",,," + ed_coCd.getValue();
      sCmdName = "retrieveRcptDcaCrnInfo";
      udc_create_clntNo.setSelectId(sCmdName);
      udc_create_clntNo.cfCommonPopUp(scwin.udc_create_clntNo_cb // 콜백 함수
      , txtCode.getValue() // 화면에서의 ??? Code Element의 Value
      , txtName.getValue() // 화면에서의 ??? Name Element의 Value
      , sFlag // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , param // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , null // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;

    //귀속부서 조회
    case '4':
      sCmdName = "retrieveAcctDeptCdInfo6";
      param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd;
      udc_reqAcctDeptCd.setSelectId(sCmdName);
      udc_reqAcctDeptCd.cfCommonPopUp(scwin.udc_reqAcctDeptCd_cb, txtCode.getValue(), txtName.getValue(), sFlag, null, null, null, null, param, null, null, null, null); // 거래처

      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  try {
    if (flag == "CD") {
      if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
        return;
      } else {
        orgObjNm.setValue("");
      }
    } else {
      if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
        return;
      } else {
        orgObjCd.setValue("");
      }
    }
    if (orgObjCd.getValue().trim() != "" || flag == "NM") {
      if (orgObjNm.getValue().trim() != "" || flag == "CD") {
        orgObjCd.setValue(orgObjCd.getValue().trim());
        orgObjNm.setValue(orgObjNm.getValue().trim());
        scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, "T");
      }
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_rcptDca.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경사항이 없습니다.");
  } else {
    // 저장시 필수 입력 사항 Check
    let ret;
    ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return;
    }
    ret = await $c.gus.cfValidate($p, [gr_rcptDca]);
    if (ret) {
      for (var i = 0; i < ds_rcptDca.getRowCount(); i++) {
        if (ds_rcptDca.getRowStatus(i) == 1) {
          ds_rcptDca.setCellData(i, "coCd", ed_coCd.getValue()); //행추가인 경우에만 coCd 컬럼 이용함.
        }
        //ds_rcptDca.setCellAllData(i, "delYn", ds_rcptDca.getCellData(i, "rcptDcaUseYn"));
      }
      ret = await $c.win.confirm($p, MSG_CM_CRM_015);
      if (ret) {
        await $c.sbm.execute($p, sbm_saveRcptDca);
      }
    }
  }
};
scwin.sbm_saveRcptDca_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_saveRcptDca_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.setSelectId("retrieveDongbuGroupCompanyInfo");
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_cb, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_reqAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_reqAcctDeptCd, ed_reqAcctDeptNm, 'F');
};
scwin.udc_reqAcctDeptCd_onblurNameEvent = function (e) {
  //scwin.f_openPopUpNm('1',ed_reqAcctDeptCd,ed_reqAcctDeptNm, 'T');
};
scwin.btn_reset_onclick = function (e) {
  scwin.f_InitObjects();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//거래처
scwin.udc_create_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_create_clntNo, ed_create_clntNm, 'T');
};
scwin.udc_create_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_create_clntNo, ed_create_clntNm, '3', 'CD');
};

//신규설정 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_print_onclick = function (e) {
  scwin.f_OzReport();
};
scwin.f_AddRow = function (e) {
  let row = ds_rcptDca.insertRow();
  ds_rcptDca.setRowPosition(row);
};
scwin.f_Delete = function (e) {
  let row = ds_rcptDca.getRowPosition();
  if (ds_rcptDca.getRowStatus(row) == "C") {
    //삽입
    ds_rcptDca.removeRow(row); //행추가시 바로 row 삭제
  } else {
    ds_rcptDca.deleteRow(row); //데이터 있을 시 삭제상태(D)로 변경
  }
  ds_rcptDca.setRowPosition(row - 1);
};
scwin.f_Cancel = function (e) {
  $c.data.undoRow($p, ds_rcptDca, "Y");
};
scwin.btn_division_onclick = function (e) {
  scwin.f_DelClntNo();
};
scwin.btn_save_1_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// 거래처삭제
//-------------------------------------------------------------------------
scwin.f_DelClntNo = async function () {
  if (ds_rcptDca.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경사항이 없습니다.");
  } else {
    // 저장시 필수 입력 사항 Check
    let ret;
    ret = await $c.gus.cfValidate($p, [ed_coCd]);
    if (!ret) {
      return;
    }
    ret = await $c.gus.cfValidate($p, [gr_rcptDca]);
    if (ret) {
      for (var i = 0; i <= ds_rcptDca.getRowCount(); i++) {
        if (ds_rcptDca.getRowStatus(i) == 1) {
          ds_rcptDca.setCellData(i, "coCd", ed_coCd.getValue()); //행추가인 경우에만 coCd 컬럼 이용함.
        }
      }
      ret = await $c.win.confirm($p, "거래처를 삭제 하시겠습니까?");
      if (ret) {
        //tr_delete.post();
        await $c.sbm.execute($p, sbm_delete);
      }
    }
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  await $c.win.alert($p, "거래처가 삭제 되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_delete_submiterror = function (e) {};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [table1]);
  //console.log("RET1 = "+ret);
  if (!ret) {
    return;
  }
  ret = await $c.gus.cfValidate($p, [ed_coCd]);
  //console.log("RET2 = "+ret);
  if (!ret) {
    return false;
  }
  dma_condition.set("coCd", ed_coCd.getValue());
  dma_condition.set("rcptDca", ed_rcptDca.getValue());
  dma_condition.set("clntNo", ed_clntNo.getValue());
  dma_condition.set("rcptDcaSetupYn", lc_stsCd.getValue());
  dma_condition.set("bankCd", lc_bankCd.getValue());
  dma_condition.set("acctDeptCd", ed_reqAcctDeptCd.getValue());
  if (chk_lowerDeptIncluYn.getValue() == "") {
    dma_condition.set("lowerDeptIncluYn", "0");
  } else {
    dma_condition.set("lowerDeptIncluYn", chk_lowerDeptIncluYn.getValue());
  }
  $c.sbm.execute($p, sbm_RetrieveRcptDca);
};
scwin.sbm_RetrieveRcptDca_submitdone = function (e) {
  if ($c.gus.cfCheckCreateFlag($p) == true) {
    $c.gus.cfTurnCreateFlag($p, false);
  } else {
    //cfHideDSWaitMsg(gr_rcptDca)      
    if (ds_rcptDca.getRowCount() == 0) {
      $c.win.alert($p, "조회된 데이터가 없습니다");
    } else {
      ed_totalRows.setValue(ds_rcptDca.getRowCount());
      for (var i = 0; i < ds_rcptDca.getRowCount(); i++) {
        if (i == 0) {
          console.log(i + "/" + ds_rcptDca.getRowStatus(i));
        }
        scwin.rowStatus.push(ds_rcptDca.getRowStatus(i));
      }
    }
  }
};
scwin.sbm_RetrieveRcptDca_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//--------------------------------------------
// 가상계좌 신규 생성하기
//--------------------------------------------
scwin.f_Create = async function () {
  // 저장시 필수 입력 사항 Check
  let ret;
  // 회사코드
  ret = await $c.gus.cfValidate($p, [ed_coCd]);
  if (!ret) {
    return;
  }
  ret = await $c.gus.cfValidate($p, [ed_create_clntNo]);
  if (!ret) {
    return;
  }
  ds_create.set("coCd", ed_coCd.getValue());
  ds_create.set("clntNo", ed_create_clntNo.getValue());
  await $c.sbm.execute($p, sbm_create);
};
scwin.sbm_create_submitdone = async function (e) {
  var msg = e.responseJSON.resultDataSet[0].Msg;
  if (msg != "FAIL") {
    ed_clntNo.setValue(ed_create_clntNo.getValue());
    ed_clntNm.setValue("");
    lc_bankCd.setSelectedIndex(0);
    await $c.gus.cfInitObjects($p, [ed_create_clntNo, ed_create_clntNm]);
    await $c.win.alert($p, "가상계좌가 성공적으로 설정되었습니다.");
    scwin.f_Retrieve();
  }
};
scwin.sbm_create_submiterror = async function (e) {
  await $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 오즈 출력
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_coCd]))) return false;
  let cnt = 1;
  let sClntNo = "";
  let vClntNo = "";
  for (i = 0; i < ds_rcptDca.getRowCount(); i++) {
    if (ds_rcptDca.getCellData(i, "checkYn") == true) {
      sClntNo = ds_rcptDca.getCellData(i, "clntNo");
      if (cnt == 1) {
        vClntNo = sClntNo;
      } else {
        vClntNo += ',' + sClntNo;
      }
      cnt++;
    }
  }

  //chk_printCheck,chk_previewCheck 둘다 1일경우에 "preview" 로 됨.
  var modeValue = "print";
  if (chb_printCheck.getValue()) {
    modeValue = "view";
  }
  if (chb_previewCheck.getValue()) {
    modeValue = "preview";
  }

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "/ac/fm/stdinfomgnt/fm_100_08_01.ozr",
    odiParam: {
      sysPath: "dbl.ac.fm.stdinfomgnt",
      P_CLNT_NO: vClntNo
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: modeValue
    },
    formParam: {}
  };
  if (modeValue == "preview") {
    let opts = {
      id: "ozReportPopup",
      popupName: "오즈 리포트",
      modal: true,
      type: "browserPopup",
      width: 1000,
      height: 600,
      title: "오즈 리포트"
    };
    $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
  } else if (modeValue == "print") {
    $c.ext.printOzReport($p, data);
  } else {
    let opts = {
      printMode: 'view'
    };
    $c.ext.printOzReport($p, data, opts);
  }
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '2', 'CD');
};
scwin.udc_reqAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqAcctDeptCd, ed_reqAcctDeptNm, '4', 'CD');
};
scwin.gr_rcptDca_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "checkYn") {
    //console.log(rowIndex+"/"+scwin.rowStatus[rowIndex]);
    if (ds_rcptDca.getCellData(rowIndex, "checkYn") != "1" && scwin.rowStatus[rowIndex] != "U") {
      //console.log(".........");
      ds_rcptDca.modifyRowStatus(rowIndex, "R");
      scwin.rowStatus[rowIndex] = "R";
      //console.log(scwin.rowStatus[rowIndex] );
    }
  }
  /* if ( columnId =="crn"){
  var colidArray   = new Array();
  colidArray[0] = columnId;
  colidArray[1] = "busiNm";
  scwin.f_openPopUpGrid(rowIndex,colidArray,'F')
  } else if (columnId == "clntNm"){
   scwin.f_openClntPopUp(rowIndex, columnId, 'F');
  } */
};

// 거래처
scwin.f_openClntPopUp = function (row, colid, sFlag) {
  param = ",,," + ed_coCd.getValue();
  udc_clntNo.setSelectId("retrieveClntList");
  //		rtnList = cfCommonPopUp('retrieveClntList',ds_rcptDca.NameValue(row,"clntNo"),ds_rcptDca.NameValue(row,colid),sFlag,null,null,null,"3,4,5,6,7,8,9,10",null,null,null,null,null); 
  udc_clntNo.cfCommonPopUp(scwin.retrieveClntList1, ds_rcptDca.getCellData(row, "clntNo"), ds_rcptDca.getCellData(row, colid), sFlag, null, null, null, "3,4,5,6,7,8,9,10", param, null, null, null, null);
};

//사업자
scwin.f_openPopUpGrid = function (row, colid, sFlag) {
  udc_clntNo.setSelectId("retrieveClntList");
  udc_clntNo.cfCommonPopUp(scwin.retrieveClntList2, ds_rcptDca.getCellData(row, colid[0]), ds_rcptDca.getCellData(row, colid[1]), sFlag, null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.retrieveClntList1 = function (rtnList) {
  var row = ds_rcptDca.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      ds_rcptDca.setCellData(row, "clntNo", ""); // 코드
      ds_rcptDca.setCellData(row, "clntNm", ""); // 명
      return;
    }
    ds_rcptDca.setCellData(row, "clntNo", rtnList[0]); // 코드
    ds_rcptDca.setCellData(row, "clntNm", rtnList[1]); // 명
  } else {
    ds_rcptDca.setCellData(row, "clntNo", ""); // 코드
    ds_rcptDca.setCellData(row, "clntNm", ""); // 명
  }
};
scwin.retrieveClntList2 = function (rtnList) {
  var row = ds_rcptDca.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ds_rcptDca.setCellData(row, colid[0], rtnList[0]); // 코드
    ds_rcptDca.setCellData(row, colid[1], rtnList[1]); // 코드명
  } else {
    ds_rcptDca.setCellData(row, colid[0], ""); // 코드
    ds_rcptDca.setCellData(row, colid[1], ""); // 코드명
  }
};
scwin.f_excel = async function () {
  if (ds_rcptDca.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  let rtn = await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?");
  if (rtn) {
    let sheetTitle = "가상계좌설정현황_" + scwin.vCurDate;
    const infoArr = [];
    const options = {
      fileName: sheetTitle + ".xls",
      // + ".xls",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_rcptDca, options, infoArr);
  }
};
scwin.ds_rcptDca_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  //scwin.rowStatus[row] = ds_rcptDca.getRowStatus(row);
  //console.log(scwin.rowStatus[row]);
};
scwin.gr_rcptDca_onheaderclick = function (headerId) {
  if (headerId == "column12") {
    if (gr_rcptDca.getHeaderValue(headerId) != "1") {
      for (i = 0; i < scwin.rowStatus.length; i++) {
        if (scwin.rowStatus[i] != "U") {
          ds_rcptDca.modifyRowStatus(i, "R");
          scwin.rowStatus[i] = "R";
        }
      }
    }
  }
};
scwin.ds_rcptDca_oncelldatachange = function (info) {
  let row = info.rowIndex;
  let colId = info.colID;
  if (colId != "checkYn") {
    scwin.rowStatus[row] = ds_rcptDca.getRowStatus(row);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onbeforepageunload':'scwin.onbeforepageunload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:65px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',id:'authCheck1'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_company',id:'udc_coCd',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',validTitle:'회사코드','ev:onclickEvent':'scwin.udc_coCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent',maxlengthCode:'3',UpperFlagCode:'1',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th',id:''},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_mgntClntNo',objTypeCode:'data',objTypeName:'data',id:'udc_clntNo',validTitle:'거래처No','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent',maxlengthCode:'6',allowCharCode:'0-9',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_reqAcctDeptCd',nameId:'ed_reqAcctDeptNm',objTypeCode:'data',objTypeName:'data',mandatoryName:'false',mandatoryCode:'false',id:'udc_reqAcctDeptCd',validTitle:'귀속부서코드','ev:onclickEvent':'scwin.udc_reqAcctDeptCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_reqAcctDeptCd_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_reqAcctDeptCd_onblurCodeEvent',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'0-9'}},{T:1,N:'xf:select',A:{ref:'',appearance:'full',disabled:'',style:'',id:'chk_lowerDeptIncluYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하위포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'은행코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',class:'form-control w110',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_bankCd',style:'',submenuSize:'auto',chooseOption:'true',mandatory:'false',objType:'data',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계좌번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col8',id:'ed_rcptDca',placeholder:'',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'설정여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'form-control w85',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_stsCd',style:'',submenuSize:'auto',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'설정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미설정'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',userAuth:'R',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'가상계좌설정현황',class:'tit'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grid_section1',style:'',gridID:'gr_rcptDca',id:'udc_topGrd',gridDownUserAuth:'X',gridDownFn:'scwin.f_excel',gridDownYn:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grid_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',editModeEvent:'onclick',dataList:'data:ds_rcptDca',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_rcptDca',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',gridName:'가상계좌',validExp:'rcptDca:가상계좌번호:yes,clntNm:거래처명:no,bankCd:은행코드:yes','ev:oncellclick':'scwin.gr_rcptDca_oncellclick','ev:onheaderclick':'scwin.gr_rcptDca_onheaderclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'column12',value:'',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',value:'가상계좌번호',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'거래처명',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'은행',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'몰코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column15',value:'귀속부서코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'checkbox',id:'checkYn',blockSelect:'false',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'rcptDca',blockSelect:'false',displayMode:'label',mandatory:'true',value:'',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'clntNm',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',readOnly:'true',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'bankCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mallCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'rcptDcaUseYn',value:'',blockSelect:'false',displayMode:'label',allOption:'',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'ed_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{id:'authCheck4',EngYn:'N',style:'',btnDelYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',btnRowAddYn:'Y',rowAddFunction:'scwin.f_AddRow',rowAddUserAuth:'C',rowDelFunction:'scwin.f_Delete',rowDelUserAuth:'D',cancelFunction:'scwin.f_Cancel',cancelUserAuth:'R'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'authCheck',class:'inner'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'거래처',class:''}},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_create_clntNo',nameId:'ed_create_clntNm',id:'udc_create_clntNo',btnId:'btn_mgntClntNo',validTitle:'거래처No','ev:onclickEvent':'scwin.udc_create_clntNo_onclickEvent',objTypeCode:'data',objTypeName:'data','ev:onblurCodeEvent':'scwin.udc_create_clntNo_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'6',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',title:'엑셀 UP',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규설정'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',disabled:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'true'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',title:'엑셀 UP',type:'button',class:'btn',userAuth:'P',objType:'bSave','ev:onclick':'scwin.btn_print_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출력'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_division',label:'거래처삭제',class:'btn white',userAuth:'U','ev:onclick':'scwin.btn_division_onclick'}},{T:1,N:'w2:button',A:{style:'',id:'btn_save_1',label:'저장',class:'btn',userAuth:'U','ev:onclick':'scwin.btn_save_1_onclick'}}]}]}]}]}]}]}]})