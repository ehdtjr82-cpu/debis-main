/*amd /ui/cm/bc/affairs/zz_770_01_03b.xml 82678 25bc5aaea35c793bbd251fe006f1b86fee398508d65bea32b4e583f7a592659b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_result1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromRegiDate',name:'기준일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRegiDate',name:'기준일자(끝)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sender',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wreathKnd',name:'신청품목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'senderPosition',name:'발송명의',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empType',name:'직원구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wreathReason',name:'신청사유',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntSendYn',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminYn',name:'관리자유무',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_result',repeatNode:'map',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_result_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regiDate',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sender',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addressee',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addresseeEmpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empType',name:'사원구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobible',name:'휴대전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptName',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvTelNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvAddr1',name:'주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvAddr2',name:'상세주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wreathReason',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wreathKnd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita',name:'기타신청사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gita2',name:'기타발송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'senderPosition',name:'발송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntSendYn',name:'신청여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHm',name:'도착시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemName',name:'상품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisticCenter',name:'물류센터명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ManagerYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_logisticCenter'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ManagerYn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_ManagerYn',target:'data:json,{"id":"ds_ManagerYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve1',action:'/cm.bc.comnmgnt.empmgnt.RetrieveEmployeeWithEmpNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve1","key":"IN_DS1"},{"id":"ds_result1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.affairs.RetrieveWreathInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.affairs.SaveWreathInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendMail',action:'/cm.bc.affairs.SendWreathRegistMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'/cm.bc.affairs.SendWreathRegistMailCMD.do',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_logisticCenter',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_logisticCenter',target:'data:json,{"id":"ds_logisticCenter","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201
scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate); // 31
scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate; // 20251231

//-------------------------------------------------------------------------
// 전역변수선언 : 수정 뒤 수정된 row 보여주기
//-------------------------------------------------------------------------

scwin.prev_pos = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // scwin.f_retrieveManagerYn(); // as-is 에 주석되어있음.
  // $c.gus.cfDisableBtn([ bDel, bCancel, btn_save, btn_regist, txt_itemName, retrieveCenterButton]);
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  retrieveCenterButton.setDisabled(true);
  $c.gus.cfDisableObjects($p, [tb_result, lc_logisticCenter]);
  ds_retrieve.set("adminYn", "1");
  center.hide(); // document.getElementById("center").style.display = "none";
  // lc_logisticCenter.hide();
  // retrieveCenterButton.hide();
  udc_gridBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(true);
};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  //임시데이터
  ed_retrieve_fromRegiDate.setValue(scwin.strFromDate);
  ed_retrieve_toRegiDate.setValue(scwin.strToDate);
};
scwin.f_retrieveManagerYn = async function () {
  //관리자여부  조회
  ds_ManagerYn.set("sysCd", "CommonEBC");
  ds_ManagerYn.set("queryId", "retrieveCommCdInfo"); // 뭔지 모르겠음.
  ds_ManagerYn.set("param1", scwin.userId);
  ds_ManagerYn.set("param2", "");
  ds_ManagerYn.set("param3", "ZZ778");
  await scwin.submitExcute(sbm_ManagerYn);
};

// 상단 신청자 udc 돋보기 클릭 팝업
scwin.popupApplier1_onclick = function (e) {
  scwin.f_openCommonPopUp(2, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'F', 'T');
};

// 주소 udc 돋보기 클릭 팝업
scwin.popupAddress_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_zip.getValue(), txt_rcvAddr1.getValue(), 'F', 'T');
};

// to-do
// 하단 신청자ID udc 돋보기 클릭 팝업
scwin.popupApplier4_onclick = function (e) {
  scwin.f_openCommonPopUp(6, txt_userCd.getValue(), txt_userNm.getValue(), 'F', 'T');
};

// 신청정보입력 
// 신청자명 돋보기 버튼 클릭 팝업
scwin.btn_registerPopup_onclick = function (e) {
  // scwin.f_openCommonPopUp(1, txt_hide_userCd.getValue(), txt_hide_userNm.getValue(), 'F', 'T');
  scwin.f_openCommonPopUp(1, txt_hide_userCd.getValue(), txt_sender.getValue(), 'F', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------

scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    // 신청정보입력 상단에 신청자명에 udc가 아니여서 hidden udc를 만들어서 값을 넣어서 작업하였음.
    case 1:
      udc_hiddenRegister.cfCommonPopUp(ret => {
        // $c.gus.cfSetReturnValue(rtnList, ed_retrieve_empNo, txt_retrieve_sender)
        if (ret != null && ret[0] != "N/A") {
          txt_sender.setValue(ret[1]); // 이름 넣기
          txt_hide_userCd.setValue(ret[0]);
          txt_hide_userNm.setValue(ret[1]);
        } else {
          txt_hide_userCd.setValue("");
          txt_hide_userNm.setValue("");
        }
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");
      break;
    case 2:
      // 사원(신청자)
      rtnList = udc_name.cfCommonPopUp(ret => {
        // $c.gus.cfSetReturnValue(rtnList, ed_retrieve_empNo, txt_retrieve_sender)
        if (ret != null && ret[0] != "N/A") {
          ed_retrieve_empNo.setValue(ret[0]); // to-do
          ed_name.setValue(ret[1]); // to-do
        } else {
          ed_retrieve_empNo.setValue(""); // to-do
          ed_name.setValue(""); // to-do
        }
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");
      break;
    case 3:
      // 주소
      var rtnList = new Array();
      // var popupResult = window.showModalDialog("/cm/zz/newzipcodePopup.xml", "",
      //     "dialogHeight:400px;dialogWidth:530px;center:yes;scroll:no;status:no;help:no");

      let v_url = "/ui/cm/zz/newzipcodePopup.xml";
      let opts = {
        popupName: "우편번호 검색",
        modal: true,
        type: "browserPopup",
        // browserPopup
        width: 500,
        height: 500,
        title: "우편번호 검색"
      };

      // $c.win.openPopup(v_url, opts, arrParent);
      let popupResult = await $c.win.openPopup($p, v_url, opts, rtnList);

      // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
      if (popupResult != null) {
        if (rtnList[0] == "N/A") return;
        ed_zip.setValue(popupResult.zip);
        txt_rcvAddr1.setValue(popupResult.addr1);
        txt_rcvAddr2.focus();
        txt_sidoNm.setValue(popupResult.stasNm); //시도명
        txt_sigunguNm.setValue(popupResult.cuntyNm); //시군구명

        if (ds_result.getCellData(ds_result.rowPosition, "wreathKnd") == "04") {
          scwin.getLogisticCenter();
        }
      } else {
        ed_zip.setValue("");
        txt_rcvAddr1.setValue("");
        txt_rcvAddr2.setValue("");
        txt_sidoNm.setValue("");
        txt_sigunguNm.setValue("");
      }
      break;
    case 4:
      // 사원(수취인)
      rtnList = cfCommonPopUp('retrieveEmpNoDeptInfo' // 
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");
      if (rtnList != null && rtnList[0] != "N/A") {
        hid_addresseeEmpNo.setValue(rtnList[0]);
        txt_addressee.setValue(rtnList[1]);
      } else {
        hid_addresseeEmpNo.setValue("");
        txt_addressee.setValue("");
      }
      break;
    case 6:
      // 사원(신청자)
      rtnList = udc_ed_userId.cfCommonPopUp(ret => {
        // $c.gus.cfSetReturnValue(ret, txt_userCd, txt_userNm)
        if (ret != null && ret[0] != "N/A") {
          txt_userCd.setValue(ret[0]); // to-do
          txt_userNm.setValue(ret[1]); // to-do
        } else {
          txt_userCd.setValue(""); // to-do
          txt_userNm.setValue(""); // to-do
        }
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");

      // txt_retrieve_sender -> ed_name
      $c.gus.cfSetReturnValue($p, rtnList, ed_retrieve_empNo, ed_name);
      break;
    case 7:
      // 사원(수취인)
      rtnList = cfCommonPopUp('retrieveEmpNoDeptInfo' // XML상의 SELECT ID  
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");
      cfSetReturnValue(rtnList, ed_retrieve_addresseeEmpno, txt_retrieve_addressee);
      break;
    case 8:
      // 사용자 
      rtnList = cfCommonPopUp('retrieveAffairsUserInfo', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "신청자,사번,사원명");
      $c.gus.cfSetReturnValue($p, rtnList, ed_userId, txt_userNm);
      break;
  }
};

//-------------------------------------------------------------------------
// 	팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업

  if (isCode == null || isCode == true) await scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else await scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

scwin.f_Retrieve = async function () {
  // ds_retrieve.UseChangeInfo = false;
  let validGrid = await $c.gus.cfValidate($p, [gr_result]);
  if (!validGrid) {
    return;
  }
  // 조회 필수값 체크 
  let validDate = await $c.gus.cfValidate($p, [ed_retrieve_fromRegiDate, ed_retrieve_toRegiDate]);
  if (!validDate) {
    return;
  }
  ds_retrieve.set("userId", scwin.userId);
  await scwin.submitExcute(sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_retrieve_fromRegiDate.setValue(scwin.strFromDate);
  ed_retrieve_toRegiDate.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 주소에 변화가 있으면 상세주소에 쓰여진 내용 삭제
//-------------------------------------------------------------------------
scwin.f_setAddr2 = function () {
  txt_rcvAddr2.setValue("");
};

//-------------------------------------------------------------------------
// 행추가시 기본 입력값 설정
//-------------------------------------------------------------------------
scwin.f_setAddDefault = function () {
  let today = WebSquare.date.getCurrentServerDate(); // 현재 날짜.
  txt_itemName.setDisabled(true);
  txt_gita.setDisabled(true);
  lc_clntSendYn.setDisabled(true);
  txt_gita2.setDisabled(true);
  txt_userCd.setDisabled(true);
  txt_userNm.setDisabled(true);
  btn_save.setDisabled(false);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  udc_gridBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(false);
  ds_result.insertRow();
  $c.gus.cfEnableObjects($p, tb_result);
  $c.gus.cfEnableAllBtn($p);
  let rowCnt = ds_result.getTotalRow() - 1;

  // 그리드에 값넣어주는 코드
  ds_result.setCellData(rowCnt, "regiDate", WebSquare.date.getCurrentServerDate());
  ds_result.setCellData(rowCnt, "sender", scwin.userNm); // 신청자명 txt_sender.getValue()
  ds_result.setCellData(rowCnt, "arvDt", WebSquare.date.getCurrentServerDate()); // ed_arvDt.getValue()
  scwin.f_setAddDefault();
  gr_result.setFocusedCell(rowCnt, "regiDate");
  txt_sender.focus();
  ds_result.setCellData(rowCnt, "userId", scwin.userId);
  ds_result.setCellData(rowCnt, "userNm", scwin.userNm);

  // 신청자ID 버튼 enable
  btn_img_ed_userId.setDisabled(false);
};

//-------------------------------------------------------------------------
// 행삭제 
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  $c.gus.cfEnableAllBtn($p);
  let currentRow = gr_result.getAllFocusedRowIndex();
  ds_result.deleteRows(currentRow);
  ds_result.removeRows(currentRow);
  $c.gus.cfDisableObjects($p, [tb_result]);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_result.getTotalRow();
  let sheetTitle = "화환및경조용품신청내역_" + WebSquare.date.getCurrentServerDate();
  if (totCnt != 0) {
    let excelVal = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (excelVal) {
      // cfGridToExcel(varGrNm, sheetTitle, sheetTitle + ".xls", 4 + 8 + 16);
      // const gridId = gr_result;
      const grdObj = gr_result; // 그리드 id
      const infoArr = [];
      const options = {
        fileName: sheetTitle,
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_result.getModifiedIndex().length == false) {
    await $c.win.alert($p, "변경된 정보가 없습니다."); //변경된 정보가 없습니다.
    return;
  }
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getRowStatusValue(i) != 0) {
      if (ds_result.getCellData(i, "regiDate") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청일자는 필수 입력 항목입니다.");
        ed_regidate.focus();
        return;
      }
      if (ds_result.getCellData(i, "arvDt") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 도착요청일자는 필수 입력 항목입니다.");
        ed_arvDt.focus();
        return;
      }
      if (ds_result.getCellData(i, "regiDate") > ds_result.getCellData(i, "arvDt")) {
        await $c.win.alert($p, i + 1 + "번째 행의 도착요청일은 신청일 이후이어야 합니다.");
        ed_arvDt.focus();
        return;
      }
      if (ds_result.getCellData(i, "arvHm") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 도착요청시간은 필수 입력 항목입니다.");
        ed_arvHm.focus();
        return;
      }
      if (ds_result.getCellData(i, "sender") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청자명은 필수 입력 항목입니다.");
        txt_sender.focus();
        return;
      }
      if (ds_result.getCellData(i, "deptName") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청자 부서는 필수 입력 항목입니다.");
        txt_deptName.focus();
        return;
      }
      if (ds_result.getCellData(i, "telNo") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청자 전화번호는 필수 입력 항목입니다.");
        txt_telNo.focus();
        return;
      }
      if (ds_result.getCellData(i, "mobible") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청자 핸드폰번호는 필수 입력 항목입니다.");
        txt_mobible.focus();
        return;
      }
      if (ds_result.getCellData(i, "wreathKnd") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청품목을 선택해 주세요.");
        lc_wreathKnd.focus();
        return;
      }
      if (ds_result.getCellData(i, "wreathKnd") != "04") {
        if (ds_result.getCellData(i, "itemName") == "") {
          await $c.win.alert($p, i + 1 + "번째 행 신청품목의 상품명을 입력해 주시기 바랍니다.\n\n상품명은 하단 링크 홈페이지 접속후 확인하여 기입하시기 바랍니다.");
          ds_result.setCellData(i, "logisticCenter", "");
          return;
        }
      }
      if (ds_result.getCellData(i, "wreathKnd") == "04") {
        if (ds_result.getCellData(i, "logisticCenter") == "") {
          await $c.win.alert($p, i + 1 + "번째 행의 물류센터를 선택해 주세요.");
          lc_logisticCenter.focus();
          return;
        }
      }
      if (ds_result.getCellData(i, "empType") == "" || lc_empType.getValue() == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 직원구분을 선택해 주세요.");
        lc_empType.focus();
        return;
      }
      if (ds_result.getCellData(i, "wreathReason") == "" || lc_wreathReason.getValue() == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 신청사유를 선택해 주세요.");
        lc_wreathReason.focus();
        return;
      } else if (ds_result.getCellData(i, "wreathReason") == "07") {
        if (ds_result.getCellData(i, "gita") == "") {
          await $c.win.alert($p, i + 1 + "번째 행의 기타란에 신청사유를 직접 기재해주세요.");
          txt_gita.focus();
          return;
        }
      }
      if (ds_result.getCellData(i, "addressee") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 수취인명은 필수 입력 항목입니다.");
        txt_addressee.focus();
        return;
      }
      if (ds_result.getCellData(i, "rcvTelNo") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 수취인 전화번호는 필수 입력 항목입니다.");
        txt_rcvTelNo.focus();
        return;
      }
      if (ds_result.getCellData(i, "zip") == "" || ds_result.getCellData(i, "rcvAddr1") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 수취인 주소는 필수 입력 항목입니다.");
        txt_rcvAddr1.focus();
        return;
      }
      if (ds_result.getCellData(i, "rcvAddr2") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 상세주소는 필수 입력 항목입니다.");
        txt_rcvAddr2.focus();
        return;
      }
      if (ds_result.getCellData(i, "senderPosition") == "") {
        await $c.win.alert($p, i + 1 + "번째 행의 발송명의를 선택해주세요.");
        lc_senderPosition.focus();
        return;
      } else if (ds_result.getCellData(i, "senderPosition") == "04") {
        if (ds_result.getCellData(i, "gita2") == "") {
          await $c.win.alert($p, i + 1 + "번째 행의 기타란에 발송명의를 직접 기재해주세요.");
          txt_gita2.focus();
          return;
        }
      }
    }
  }
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "clntSendYn") == 0) {
      if ([1, 2, 3].includes(ds_result.getRowStatusValue(i))) {
        ds_result.setCellData(i, "chk", "T");
      }
    }
  }
  let messageStr = MSG_CM_CRM_001; //저장하시겠습니까
  let retVal = await $c.win.confirm($p, messageStr);
  if (retVal) {
    scwin.prev_pos = ds_result.rowPosition;
    ds_result.setCellData(ds_result.rowPosition, "chk", "T");
    await scwin.submitExcute(sbm_save);
  } else {
    //취소하면 자동체크 해제
    for (var i = 0; i < ds_result.getTotalRow(); i++) {
      ds_result.setCellData(i, "chk", "F");
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  await scwin.f_Retrieve();
  $c.gus.cfEnableAllBtn($p);
};

//-------------------------------------------------------------------------
// 신청
//-------------------------------------------------------------------------
scwin.f_Regist = async function () {
  var chkCount = 0;
  for (var i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "chk") == "T") {
      chkCount++;
      if (ds_result.getCellData(i, "regiDate") == "" || ds_result.getCellData(i, "seq") == "") {
        await $c.win.alert($p, "저장되지 않은 데이터입니다. 저장 후 신청하십시오.");
        return;
      }
    }
  }
  if (chkCount == 0) {
    await $c.win.alert($p, "신청할 내역을 선택해주세요!");
    return;
  } else {
    let messageStr = "선택하신 내역을 신청하시겠습니까?";
    let retVal = await $c.win.confirm($p, messageStr);
    if (retVal) {
      scwin.prev_pos = ds_result.rowPosition;
      await scwin.submitExcute(sbm_sendMail);
    } else {
      $c.data.undoRow($p, ds_result, "Y");
    }
  }
};

//센터확인 버튼    
scwin.f_openPopup = async function () {
  var forwardPage = "/ui/cm/bc/affairs/zz_770_01_03p.xml";
  // var passPopUpWin = window.showModalDialog(forwardPage, "경조용품물류센터", "dialogWidth:1070px; dialogHeight:1500px; status:no; scroll:yes");
  let v_url = forwardPage;
  let opts = {
    id: "openPopup",
    popupName: "경조용품물류센터",
    modal: true,
    type: "browserPopup",
    width: 1070,
    height: 1500,
    title: "경조용품물류센터"
  };
  $c.win.openPopup($p, v_url, opts);
};

// 수취인 주소지에 따른 센터확인
scwin.getLogisticCenter = async function () {
  // SELECT 절 
  var param1 = "FLTR_CD_1 		as COL1 " //센터코드
  + ",CD_ENG_NM_ABBR 	as COL2 " //시도명
  + ",CD_ENG_NM   	as COL3 " //시군구명
  + ",CD_NM   		as COL4 " + ",''  			as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  var param2 = "TB_ZZ002";
  var param3 = "AND GRP_CD = 'ZZ787' AND CD_ENG_NM_ABBR = '" + txt_sidoNm.getValue() + "' AND CD_ENG_NM = '" + txt_sigunguNm.getValue() + "'";
  var param4 = "COL1";
  // ds_logisticCenter.DataId =
  //     "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1
  //     + "&param2=" + param2
  //     + "&param3=" + param3
  //     + "&param4=" + param4;
  // ds_logisticCenter.Reset();

  ds_logisticCenter.set("sysCd", "CommonEBC");
  ds_logisticCenter.set("queryId", "dinymicQueryTest"); // 뭔지 모르겠음.
  ds_logisticCenter.set("param1", param1);
  ds_logisticCenter.set("param2", param2);
  ds_logisticCenter.set("param3", param3);
  ds_logisticCenter.set("param4", param4);
  await scwin.submitExcute(sbm_logisticCenter);
  lc_logisticCenter.setValue(ds_logisticCenter.get("col1"));
};

//센터담당자 수정 버튼    
scwin.f_CenterManager = function () {
  var forwardPage = "/ui/cm/bc/affairs/zz_770_01_03_01b.xml";
  // var passPopUpWin = window.showModalDialog(forwardPage, "경조용품물류센터 담당자",
  //     "dialogWidth:1000px; dialogHeight:650px; status:no; scroll:yes");
  let v_url = forwardPage;
  let opts = {
    id: "centerManagerPopup",
    popupName: "경조용품물류센터 담당자",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 780,
    title: "경조용품물류센터 담당자"
  };
  $c.win.openPopup($p, v_url, opts);
};
scwin.sbm_retrieve_submit = function (e) {
  ds_retrieve.set("fromRegiDate", ed_retrieve_fromRegiDate.getValue());
  ds_retrieve.set("toRegiDate", ed_retrieve_toRegiDate.getValue());
  ds_retrieve.set("empNo", ed_retrieve_empNo.getValue());
  ds_retrieve.set("wreathKnd", lc_retrieve_wreathKnd.getValue());
  ds_retrieve.set("senderPosition", lc_retrieve_senderPosition.getValue());
  ds_retrieve.set("empType", lc_retrieve_empType.getValue());
  ds_retrieve.set("wreathReason", lc_retrieve_wreathReason.getValue());
  ds_retrieve.set("clntSendYn", lc_rclntSendYn.getValue());
  // ds_retrieve.set("adminYn", "")
};

// for="ds_result" event="OnLoadCompleted(rowCnt)"
scwin.sbm_retrieve_submitdone = async function (e) {
  $c.gus.cfDisableObjects($p, [txt_itemName]);
  $c.gus.cfDisableObjects($p, tb_result);
  let totalRow = gr_result.getTotalRow();
  if (totalRow == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist]);
  } else {
    totalRows.setValue(totalRow);
    $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist]);
  }
  gr_result.setFocusedCell(0, "regiDate", false);
};

// for=gr_result event=OnClick(Row,Colid)
scwin.gr_result_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // btn_save
  // btn_regist

  if (ds_result.getCellData(rowIndex, "clntSendYn") == "1") {
    $c.gus.cfDisableObjects($p, tb_result);
    $c.gus.cfDisableObjects($p, txt_itemName);
    $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist]);
  } else {
    if (ds_ManagerYn.get("sysCd") != "" || scwin.userId == ds_result.getCellData(rowIndex, "userId")) {
      $c.gus.cfEnableObjects($p, tb_result);
      $c.gus.cfEnableObj($p, ed_regiDate, false);
      // $c.gus.cfEnableObj(txt_seq, false);
      $c.gus.cfEnableObj($p, lc_clntSendYn, false);
      $c.gus.cfEnableObj($p, udc_ed_userId, false); // ed_userId
      $c.gus.cfEnableObj($p, txt_userNm, false);
      if (ds_result.getCellData(rowIndex, "wreathReason") != "13") {
        $c.gus.cfEnableObj($p, txt_gita, false);
      } else if (ds_result.getCellData(rowIndex, "senderPosition") != "03") {
        $c.gus.cfEnableObj($p, txt_gita2, false);
      }
      if (ds_result.getCellData(ds_result.rowPosition, "wreathKnd") == "04") {
        $c.gus.cfDisableObjects($p, [txt_itemName]);
      } else if (ds_result.getCellData(ds_result.rowPosition, "wreathKnd") != "04") {
        $c.gus.cfEnableObjects($p, [txt_itemName]);
      }
      $c.gus.cfEnableAllBtn($p);
    }
  }
  if (columnId == "chk") {
    if (ds_result.getCellData(rowIndex, "chk") == "T") {
      if (ds_result.getCellData(rowIndex, "clntSendYn") == 1) {
        await $c.win.alert($p, "신청된 건 입니다.");
        ds_result.setCellData(rowIndex, "chk", "F"); // ds_result.Undo(rowIndex); // 체크박스 해제해야됨..
        ds_result.undoRow(rowIndex);
        let statusVal = ds_result.getRowStatusValue(rowIndex);
        return false;
      } else {
        // ds_ManagerYn.CountRow == "1"
        if (scwin.userId == ds_result.getCellData(rowIndex, "userId")) {
          $c.gus.cfDisableObjects($p, tb_result);
          $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save]);
          // btn_save.setDisabled(false);
          // btn_regist.setDisabled(false);
        } else {
          await $c.win.alert($p, "본인 신청 정보만 선택 가능합니다");
          ds_result.setCellData(rowIndex, "chk", "F"); // ds_result.Undo(rowIndex);
          $c.gus.cfDisableObjects($p, tb_result);
          $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist]);
          // btn_save.setDisabled(true);
          // btn_regist.setDisabled(true);
          return false;
        }
      }
    }
  }
};

// for=lc_wreathReason event=OnSelChange()
// onchange -> onviewchange
scwin.lc_wreathReason_onviewchange = function (info) {
  if (ds_result.getCellData(ds_result.rowPosition, "wreathReason") == "13") {
    $c.gus.cfEnableObj($p, txt_gita, true);
  } else {
    txt_gita.setValue("");
    $c.gus.cfEnableObj($p, txt_gita, false);
  }
};

// for=lc_senderPosition event=OnSelChange()
// onchange -> onviewchange
scwin.lc_senderPosition_onviewchange = function (info) {
  if (ds_result.getCellData(ds_result.rowPosition, "senderPosition") == "04") {
    $c.gus.cfEnableObj($p, txt_gita2, true);
  } else {
    txt_gita2.setValue("");
    $c.gus.cfEnableObj($p, txt_gita2, false);
  }
};

// for=ds_result event=OnColumnChanged(Row,Colid)
scwin.ds_result_oncelldatachange = function (info) {
  $c.gus.cfDisableBtn($p, [btn_regist]);
  if (info.colID == "chk") {
    if (ds_result.getCellData(info.rowIndex, "chk") == "T") {
      if (ds_result.getCellData(info.rowIndex, "clntSendYn") == "0") {
        $c.gus.cfDisableObjects($p, tb_result);
        $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save]);
        btn_save.setDisabled(true);
      }
    }
  }
};
scwin.sbm_sendMail_submitdone = async function (e) {
  await $c.win.alert($p, "성공적으로 신청되었습니다.");
  await scwin.f_Retrieve();
};

// for=gr_result event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_result_onheaderclick = function (headerId) {
  var i = 0;
  let bCheck = gr_result.getHeaderValue("chk_header");
  if (headerId == "chk_header") {
    if (bCheck == "1") {
      for (i = 0; i < ds_result.getTotalRow(); i++) {
        if (ds_result.getCellData(i, "clntSendYn") == "0" && ds_result.getRowStatusValue(i) != 2) {
          ds_result.setCellData(i, "chk", "T");
        } else {
          // 헤더에 체크를 할때 ASIS와 TOBE 그리드의 작동이 상이하여 아래 코드를 추가하였음.
          // asis 에서 체크 f로 바꿔주는것 찾지못해서 else로 강제로 f로 바꾸게 수정함.
          ds_result.setCellData(i, "chk", "F");
        }
      }
    } else {
      for (i = 0; i < ds_result.getTotalRow(); i++) {
        ds_result.setCellData(i, "chk", "F");
        $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist]);
      }
    }
  }
};

// for=lc_empType event=OnSelChange()
// onchange 를 onviewchange로 수정하였음.
scwin.lc_empType_onviewchange = function (info) {
  if (lc_empType.getValue() == "01") {
    lc_wreathReason.setSelectedIndex(0, true);
    $c.gus.cfEnableObjects($p, [lc_wreathReason]);
  } else if (lc_empType.getValue() == "02") {
    lc_wreathReason.setValue("13");
    $c.gus.cfDisableObjects($p, [lc_wreathReason]);
  } else if (lc_empType.getValue() == "") {
    lc_wreathReason.setValue('0');
    $c.gus.cfEnableObjects($p, [lc_wreathReason]);
  }
};

// for=lc_wreathKnd event=OnSelChange()
// onchange 를 onviewchange로 수정하였음.
scwin.lc_wreathKnd_onviewchange = function (info) {
  if (ds_result.getCellData(ds_result.rowPosition, "wreathKnd") == "04") {
    $c.gus.cfDisableObjects($p, [txt_itemName]);
    $c.gus.cfEnableObjects($p, [lc_logisticCenter]);
    $c.gus.cfEnableBtnOnly($p, [retrieveCenterButton]);
    lc_logisticCenter.show("");
    retrieveCenterButton.show("");
    center.show("");
    scwin.getLogisticCenter();
    // document.getElementById("s_txt").innerText = "새로운 글씨";
  } else {
    center.hide();
    lc_logisticCenter.hide();
    retrieveCenterButton.hide();
    $c.gus.cfEnableObjects($p, [txt_itemName]);
    $c.gus.cfDisableObjects($p, [lc_logisticCenter]);
    $c.gus.cfDisableBtn($p, [retrieveCenterButton]);
    ds_result.setCellData(ds_result.rowPosition, "logisticCenter", "");
  }
  // 신청품목이 축하화환일경우 문구 변경
  if (ds_result.getCellData(ds_result.rowPosition, "wreathKnd") == "02") {
    s_txt.setValue("행사 시작일시");
  } else {
    s_txt.setValue("도착요청일시");
  }
};
scwin.btn_anchor1_onclick = function () {
  // 경로 에러.
  // 해당 경로에 파일이 추가되어있지않아 파일 추가 요청하였음.
  // $c.gus.cfDownloadFile("해피엔딩 상품목록.pdf", "/cm/bc/affairs/product.pdf");

  var fileName = "해피엔딩 상품목록.pdf";

  // /cm/bc/affairs/product.pdf > cm/bc/affairs/product.pdf
  var filePath = "cm/bc/affairs/product.pdf";
  $c.gus.cfDownloadFile($p, fileName, filePath);
};

// 상단 신청자 udc_name code 값 변경 이벤튼
scwin.udc_name_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_retrieve_empNo, ed_name, 2); // 6 -> 2 
};

// 상단 신청자 udc_name name 값 변경 이벤튼
// scwin.udc_name_onviewchangeNameEvent = function (info) {
//         // ed_name ed_retrieve_empNo
//     scwin.f_chkOpenCommonPopUp(ed_name, ed_retrieve_empNo, 2); // 6 -> 2 
// };

// 하단 신청자ID udc_ed_userId code 값 변경 이벤튼
scwin.udc_ed_userId_onviewchangeCodeEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(txt_userCd, txt_userNm, 6);
};

// 하단 신청자ID udc_ed_userId name 값 변경 이벤튼
// scwin.udc_ed_userId_onviewchangeNameEvent = function (info) {
//   
//     scwin.f_chkOpenCommonPopUp(txt_userCd, txt_userNm, 6);
// };

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_ManagerYn:
      break;
    case sbm_retrieve1:
      break;
    case sbm_retrieve:
      await scwin.sbm_retrieve_submitdone(e);
      break;
    case sbm_save:
      await scwin.sbm_save_submitdone(e);
      break;
    case sbm_sendMail:
      await scwin.sbm_sendMail_submitdone(e);
      break;
    case sbm_logisticCenter:
      break;
    default:
      break;
  }
};

// 우편번호 EMEdit Focus 이동시
// for=ed_zip event=OnKillFocus()
scwin.udc_address_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_zip, txt_rcvAddr1, 3);
};

// 사원(신청자) EMEdit Focus 이동시
// for=ed_retrieve_empNo event=OnKillFocus()
scwin.txt_sender_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(this, txt_retrieve_sender, 6);
};

// 신청자ID EMEdit Focus 이동시
// for=ed_userId event=OnKillFocus()
scwin.udc_ed_userId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_userCd, txt_userNm, 8);
};
scwin.lc_wreathReason_onchange = function (info) {
  scwin.lc_wreathReason_onviewchange();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'fromRegiDate',refDataMap:'ds_retrieve',style:'',id:'udc_fromToCalendar1',refEdDt:'toRegiDate',edFromId:'ed_retrieve_fromRegiDate',edToId:'ed_retrieve_toRegiDate',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'기준시작일자',titleTo:'기준종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청품목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'lc_retrieve_wreathKnd',chooseOption:'',style:'width:150px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'서양란'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'축하화환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'꽃바구니'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장의용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동양란'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'근조화환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관엽화분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'꽃다발'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송명의 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_retrieve_senderPosition',chooseOption:'',style:'width:150px',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표이사(박성순)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveEmpNoDeptInfo',codeId:'ed_retrieve_empNo',validTitle:'',nameId:'ed_name',style:'',id:'udc_name','ev:onclickEvent':'scwin.popupApplier1_onclick',refDataCollection:'ds_retrieve','ev:onviewchangeCodeEvent':'scwin.udc_name_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_name_onviewchangeNameEvent',class:'',code:'empNo',maxlengthCode:'6',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직원구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_retrieve_empType',chooseOption:'',style:'width:150px',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사직원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청사유 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_retrieve_wreathReason',chooseOption:'',style:'width:150px',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결혼-본인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결혼-자녀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-본인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-배우자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)외조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-자녀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)형제자매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)형제자매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'13'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_rclntSendYn',chooseOption:'',style:'width:150px',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'retrieveButton',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신청내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',btnPlusYn:'Y',templateYn:'N',gridDownYn:'Y',gridUpYn:'N',gridDownFn:'scwin.f_runExcel',gridID:'gr_result'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'true',class:'wq_gvw',dataList:'data:ds_result',focusMode:'row',id:'gr_result',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'7',visibleRowNumFix:'true',sortable:'true',columnMove:'true',readOnly:'true','ev:oncellclick':'scwin.gr_result_oncellclick',fixedColumn:'1',fixedColumnNoMove:'true','ev:onheaderclick':'scwin.gr_result_onheaderclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk_header',value:'',displayMode:'label',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'신청일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'신청자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'직원구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'수취인명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'수취인</br>사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'사번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'전화번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'핸드폰번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'수취인</br>연락처',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'우편번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'수취인주소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'수취인상세주소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column64',value:'신청사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'기타신청사유',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'기타발송명의',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'발송명의',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'신청여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'신청품목',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column75',value:'상품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column76',value:'도착요청일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column78',value:'도착시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true',trueValue:'T',falseValue:'F',valueType:'other',noDisabledOnReadOnly:'false',readOnly:'false',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regiDate',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',style:'',id:'deptCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'deptName',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sender',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'empType',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사직원'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'addressee',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'addresseeEmpNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'telNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mobible',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rcvTelNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'zip',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'rcvAddr1',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'rcvAddr2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'140',inputType:'select',style:'',id:'wreathReason',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'결혼-본인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'결혼-자녀'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-본인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-배우자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(본인)부모'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(배우자)부모'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(본인)조부모'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(배우자)조부모'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(본인)외조부모'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-자녀'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(본인)형제자매'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사망-(배우자)형제자매'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13'}]}]}]}]},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'gita',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'gita2',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',style:'',id:'senderPosition',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'대표이사(박성순)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'clntSendYn',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'wreathKnd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'서양란'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'축하화환'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'꽃바구니'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'장의용품'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동양란'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'근조화환'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'관엽화분'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'분재'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'꽃다발'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';text-align:left;',id:'itemName',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'arvDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arvHm',value:'',displayMode:'label',displayFormat:'##:##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',btnRowDelYn:'N',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowAddObj:'bAdd',btnCancelObj:'bCancel',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',gridID:'gr_result',rowAddFunction:'scwin.f_addRow',id:'udc_gridBtn',cancelFunction:'scwin.f_deleteRow',btnDelObj:'bDel',rowAddUserAuth:'C'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'신청정보입력 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_result',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120.00px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_regiDate',style:'',mandatory:'true',ref:'data:ds_result.regiDate'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'s_txt',label:'도착요청일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group3',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arvDt',style:'',mandatory:'true',ref:'data:ds_result.arvDt'}},{T:1,N:'xf:input',A:{class:'w50 tac',dataType:'time',id:'ed_arvHm',style:'',mandatory:'true',ref:'data:ds_result.arvHm',maxlength:'4',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청자명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_result.userNm',style:'display: none;',id:'hid_empNo',class:'',mandatory:'true'}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'txt_sender',class:'',mandatory:'true',ref:'data:ds_result.sender','ev:onblur':'scwin.txt_sender_onblur'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_registerPopup',type:'button',class:'btn ico sch','ev:onclick':'scwin.btn_registerPopup_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취인명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{ref:'data:ds_result.addressee',style:'display: none;',id:'hid_addresseeEmpNo',class:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'',id:'txt_addressee',style:'width: 300px;',mandatory:'true',ref:'data:ds_result.addressee'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청자 부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_deptName',style:'width:300px;',mandatory:'true',ref:'data:ds_result.deptName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취인전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_rcvTelNo',style:'width:300px;',mandatory:'true',ref:'data:ds_result.rcvTelNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청자전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_telNo',style:'width:300px;',mandatory:'true',ref:'data:ds_result.telNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'수취인주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_zip',validTitle:'',nameId:'txt_rcvAddr1',style:'',code:'zip',name:'rcvAddr1',refDataCollection:'ds_result','ev:onclickEvent':'scwin.popupAddress_onclick',id:'udc_address','ev:onviewchangeCodeEvent':'scwin.f_setAddr2','ev:onviewchangeNameEvent':'scwin.f_setAddr2','ev:onblurCodeEvent':'scwin.udc_address_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청자핸드폰',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_mobible',style:'width:300px;',mandatory:'true',ref:'data:ds_result.mobible'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상세주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_rcvAddr2',style:'',mandatory:'true',ref:'data:ds_result.rcvAddr2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청품목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width: 300px;'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed','ev:onchange':'scwin.lc_wreathKnd_onchange',chooseOption:'',allOption:'',mandatory:'true',displayMode:'label',ref:'data:ds_result.wreathKnd',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'',id:'lc_wreathKnd',class:'',direction:'auto','ev:onviewchange':'scwin.lc_wreathKnd_onviewchange',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'서양란'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'축하화환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'꽃바구니'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장의용품'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동양란'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'근조화환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'관엽화분'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'분재'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'꽃다발'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]}]}]},{T:1,N:'xf:input',A:{ref:'data:ds_result.itemName',style:';text-align:left;',id:'txt_itemName',class:' tac'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직원구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_empType',style:'width: 300px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_result.empType',displayMode:'label','ev:onviewchange':'scwin.lc_empType_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당사직원'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'center'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'물류센터',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{submenuSize:'fixed',chooseOption:'',allOption:'',mandatory:'false',displayMode:'label',ref:'data:ds_result.logisticCenter',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width:300px;',id:'lc_logisticCenter',class:'',direction:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이천/백암센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'의정부센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'시화센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'강릉센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대전센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경산센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'양산센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'호남센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제주센터'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지역별 센터목록',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:trigger',A:{type:'button',id:'retrieveCenterButton',style:'width:80px;height:23px;',class:'btn','ev:onclick':'scwin.f_openPopup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'센터 확인'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wreathReason',style:'width:300px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_result.wreathReason',displayMode:'label','ev:onchange':'scwin.lc_wreathReason_onchange','ev:onviewchange':'scwin.lc_wreathReason_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결혼-본인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'결혼-자녀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-본인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-배우자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)외조부모'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-자녀'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(본인)형제자매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사망-(배우자)형제자매'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'13'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'발송명의',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_senderPosition',style:'width: 300px;',submenuSize:'fixed',mandatory:'true',ref:'data:ds_result.senderPosition',displayMode:'label','ev:onchange':'scwin.lc_senderPosition_onchange','ev:onviewchange':'scwin.lc_senderPosition_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대표이사(박성순)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'기타'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타신청사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_gita',style:'width:300px;',ref:'data:ds_result.gita'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기타발송명의',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_gita2',style:'width:300px;',ref:'data:ds_result.gita2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntSendYn',style:'width:300px;',submenuSize:'fixed',ref:'data:ds_result.clntSendYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자ID',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'txt_userCd',nameId:'txt_userNm',popupID:'img_ed_userId',selectID:'retrieveEmpNoDeptInfo',style:'',validTitle:'',id:'udc_ed_userId',code:'userId',name:'userNm',refDataCollection:'ds_result','ev:onclickEvent':'scwin.popupApplier4_onclick','ev:onviewchangeCodeEvent':'scwin.udc_ed_userId_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_ed_userId_onviewchangeNameEvent',btnId:'btn_img_ed_userId','ev:onblurCodeEvent':'scwin.udc_ed_userId_onblurCodeEvent'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list row-gap-8'},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-8'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'해피엔딩 상품목록 :',class:'txt-red txt-dot mt0'}},{T:1,N:'w2:anchor',A:{outerDiv:'false',style:'',id:'btn_anchor1','ev:onclick':'scwin.btn_anchor1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상품목록'}]}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'상품명은 상품목록 확인후 기입하시기 바랍니다 (예) 근조화환_기본',class:'txt-red txt-dot'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계절 품목인 경우 발주가 제한적일 수 있음(거래처에서 연락이 옴)',class:'txt-red txt-dot'}},{T:1,N:'w2:textbox',A:{ref:'',tagname:'p',style:'',userData2:'',id:'',label:'예식 축하화환의 경우 실제 예식 시각을 입력해주세요.(화환은 예식시간 30분 전 도착으로 자동 세팅됩니다.)',class:'txt-blue'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'장의용품 신청시 센터확인 버튼을 눌러 해당지역의 센터를 확인 후 선택해주세요.',class:'txt-blue',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',tagname:'p',style:'',userData2:'',id:'',label:'장의용품을 제외한 신청품목은 물류센터를 선택하지 않습니다.',class:'txt-blue'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처로 화환 신청 시 예산(접대비) 확인 후 신청 바라며, 예산이 없을 시 신청 금합니다.',class:'txt-red txt-dot'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'신청정보입력 저장 후 반드시 신청하시기 바랍니다.',class:'txt-red txt-dot'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'화환 (해피엔딩 : 010-2349-4401)',class:'txt-red txt-dot'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_centerManager',type:'button',class:'btn white','ev:onclick':'scwin.f_CenterManager'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'센터 담당자 관리'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Save',style:'',id:'btn_save',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_regist',style:'',type:'button','ev:onclick':'scwin.f_Regist',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'',id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{id:'txt_empNo',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_userId',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_deptCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_adminYn',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_sidoNm',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'txt_sigunguNm',style:'width:144px; height:21px; '}}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveEmpNoDeptInfo',codeId:'txt_hide_userCd',validTitle:'',nameId:'txt_hide_userNm',style:'width:%; height:px; ',id:'udc_hiddenRegister'}}]}]}]}]})