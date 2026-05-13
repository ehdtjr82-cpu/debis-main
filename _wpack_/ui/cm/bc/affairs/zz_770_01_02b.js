/*amd /ui/cm/bc/affairs/zz_770_01_02b.xml 68239 9e451cbcf4fbf11b6da76a58199a4d3b5574c8c6959f5bb03736ea939344a9af */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_result',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regiDate',name:'신청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'신청순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deptName',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'신청자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sender',name:'성명(국문)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardGubun',name:'신청품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cardCnt',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'engName',name:'성명(영문)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'position',name:'직위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'license',name:'자격증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'회사주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'상세주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fax',name:'Fax번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mobible',name:'휴대폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'email',name:'Email',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntSendYn',name:'신청여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'affairsGubun',name:'업무신청품목',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromRegiDate',name:'기준일자(시작)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRegiDate',name:'기준일자(끝)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sender',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardGubun',name:'카드구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntSendYn',name:'신청여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminYn',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'empNo',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_result1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'deptCd',name:'부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ManagerYn'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conditions2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fromRegiDate',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'toRegiDate',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cardGubun',name:'신청품목',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntSendYn',name:'신청여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_name'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_history'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_regiDate'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'from',name:'from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'to',name:'to',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.affairs.RetrieveBusinessCardInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ManagerYn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_ManagerYn',target:'data:json,{"id":"ds_ManagerYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve1',action:'/cm.bc.comnmgnt.empmgnt.RetrieveEmployeeWithEmpNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve1","key":"IN_DS1"}, {"id":"ds_result1","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_result1","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve1_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.affairs.SaveBusinessCardInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendMail',action:'/cm.bc.affairs.SendBusinessCardRegistMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_sendMail_submitdone','ev:submiterror':'scwin.sbm_sendMail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_sendCancelMail',action:'/cm.bc.affairs.SendBusinessCardRegistCancelMailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_result","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_sendCancelMail_submitdone','ev:submiterror':'scwin.sbm_sendCancelMail_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_history',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_history',target:'data:json,{"id":"ds_history","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_history_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  // 사용자 ID, 사용자명 등등 불러오는 코드

  scwin.memJson = $c.data.getMemInfo($p);
  scwin.userId = scwin.memJson.userId;
  scwin.userNm = scwin.memJson.userNm;
  scwin.addr1 = scwin.memJson.addr1;
  scwin.addr2 = scwin.memJson.addr2;
  scwin.email = scwin.memJson.email;
  scwin.empNo = scwin.memJson.empNo;
  scwin.zip = scwin.memJson.zip;
  scwin.userMpNo = scwin.memJson.userMpNo;
  scwin.deptNm = scwin.memJson.deptNm; // deptName
  scwin.userMpNo2 = scwin.memJson.userMpNo2; // telNo
  scwin.sysAdminYn = scwin.memJson.privAdmin; // 서버 데이터, 기본값 'F'
  console.log("scwin.sysAdminYn: ", scwin.sysAdminYn);

  // 서버시간 기준 해당 월 첫날, 마지막날 
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMM") + "01"; // 20251201
  scwin.strLastDate = $c.date.getLastDateOfMonth($p, scwin.strFromDate); // 31
  scwin.strToDate = scwin.strFromDate.substring(0, 6) + scwin.strLastDate; // 20251231

  // 전역변수
  scwin.prev_pos = 0;
  scwin.flag = 0;
  scwin.IsDeleteRow = 0;
  scwin.Isfirst = 1;
  scwin.temp = "";
  scwin.f_retrieveManagerYn();
  $c.gus.cfInitObjects($p, tbl_search, null); // cfInitObjects(tbl_search, null);

  dma_regiDate.set('from', scwin.strFromDate);
  dma_regiDate.set('to', scwin.strToDate);
  if (scwin.Isfirst == 1) {
    $c.sbm.execute($p, sbm_retrieve);
    // scwin.Isfirst = 0; 
  }

  // 초기값 세팅.... fromRegiDate     toRegiDate
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  btn_cancel.setDisabled(false);

  // 아래 2 라인 초기에 명패신청정보입력이 disable 되어 있어 추가함
  $c.gus.cfDisableObjects($p, tb_result);
  btn_hist.setDisabled(false);
  ds_retrieve.set("adminYn", "1"); // ds_retrieve.getValue(1, "adminYn") = "1";

  // 행취소 disable
  udc_gridBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(true);
  btn_cancel.setDisabled(false);
};
scwin.f_retrieveManagerYn = function () {
  //관리자여부  조회
  ds_ManagerYn.set("sysCd", "CommonEBC");
  ds_ManagerYn.set("queryId", "retrieveCommCdInfo"); // 뭔지 모르겠음.
  ds_ManagerYn.set("param1", "");
  ds_ManagerYn.set("param2", scwin.userId);
  ds_ManagerYn.set("param3", "ZZ774");
  $c.sbm.execute($p, sbm_ManagerYn);
};

// 성명 udc 돋보기 클릭 팝업
scwin.popupName_onclick = function (e) {
  scwin.f_openCommonPopUp(6, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'F', 'T');
};

// 성명 KOR udc 돋보기 클릭 팝업
scwin.popupKorName_onclick = function (e) {
  scwin.f_openCommonPopUp(2, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'F', 'T');
};

// 주소 udc 돋보기 클릭 팝업
scwin.popupAddress_onclick = function (e) {
  scwin.f_openCommonPopUp(3, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'F', 'T');
};

// 신청자 (사용자) 돋보기 클릭 팝업
scwin.popupRegister_onclick = function (e) {
  scwin.f_openCommonPopUp(7, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // udc_comCode.cfCommonPopUp // 이렇게 수정하면됨..
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 
  switch (disGubun) {
    case 2:
      // 사원 
      rtnList = udc_korname.cfCommonPopUp(scwin.udc_korname_callBackFunc // XML상의 SELECT ID  
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "사원,사번,사원명");
      break;
    case 3:
      // 주소
      let rtnList = new Array();
      let v_url = "/ui/cm/zz/newzipcodePopup.xml";
      let opts = {
        id: "pupup",
        popupName: "우편번호 검색",
        modal: true,
        type: "pageFramePopup",
        // browserPopup
        width: 530,
        height: 400,
        title: "우편번호 검색"
      };

      // $c.win.openPopup(v_url, opts, arrParent);
      let popupResult = await $c.win.openPopup($p, v_url, opts, rtnList);

      // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
      if (popupResult != null) {
        if (rtnList[0] == "N/A") return;
        ed_zip.setValue(popupResult.zip);
        txt_addr1.setValue(popupResult.addr1);
        txt_addr2.focus();
      } else {
        ed_zip.setValue("");
        txt_addr1.setValue("");
        txt_addr2.setValue("");
      }
      break;
    case 4:
      // 사용자 
      rtnList = udc_comCode.cfCommonPopUp('retrieveAffairsUserInfo' // XML상의 SELECT ID  
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "사용자,사용자ID,사용자명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      $c.gus.cfSetReturnValue($p, rtnList, ed_userId, txt_userNm);
      break;
    case 6:
      // 사원 
      rtnList = udc_name.cfCommonPopUp(scwin.udc_name_callBackFunc // XML상의 SELECT ID  
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "사원,사번,사원명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      // $c.gus.cfSetReturnValue(rtnList, ed_retrieve_empNo, txt_retrieve_sender);
      break;
    case 7:
      // 사용자 
      rtnList = ed_userId.cfCommonPopUp(scwin.ed_userId_callBackFunc // XML상의 SELECT ID  
      , pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "사용자,사용자ID,사용자명");
      break;
  }
};

// 성명
scwin.udc_name_callBackFunc = function (ret) {
  // $c.gus.cfSetReturnValue(rtnList, ed_retrieve_empNo, txt_retrieve_sender)
  if (ret != null && ret[0] != "N/A") {
    ed_retrieve_empNo.setValue(ret[0]);
    ed_name.setValue(ret[1]);
  } else {
    ed_retrieve_empNo.setValue("");
    ed_name.setValue("");
  }
};

// 성명 kor
scwin.udc_korname_callBackFunc = function (ret) {
  // $c.gus.cfSetReturnValue(rtnList, ed_retrieve_empNo, txt_retrieve_sender)
  if (ret != null && ret[0] != "N/A") {
    hid_empNo.setValue(ret[0]);
    txt_sender.setValue(ret[1]);
  } else {
    hid_empNo.setValue("");
    txt_sender.setValue("");
  }
};

// 사용자 (신청자)
scwin.ed_userId_callBackFunc = function (ret) {
  if (ret != null && ret[0] != "N/A") {
    txt_userCd.setValue(ret[0]);
    txt_userNm.setValue(ret[1]);
  } else {
    txt_userCd.setValue("");
    txt_userCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 	팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 행취소 able
  udc_gridBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(false);
  // ds_retrieve.UseChangeInfo = false; // to-do

  if (!$c.gus.cfValidate($p, [gr_result])) {
    // tr_retrieve -> sbm_retrieve
    return;
  }
  scwin.IsDeleteRow = 0;
  // let condition = "?" + "sys=" + lux_sys.getValue()
  //     + "&qryCond=" + lux_qryCond.getValue()
  //     + "&qryCntn=" + qryCntn.getValue();

  // ds_retrieve.set("userId", scwin.userId);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, null); // to-do
  dma_regiDate.set('from', scwin.strFromDate);
  dma_regiDate.set('to', scwin.strToDate);
};

//-------------------------------------------------------------------------
// 행추가시 기본 입력값 설정
//-------------------------------------------------------------------------
scwin.f_setAddDefault = function () {
  // to-do
  ed_regiDate.setValue(WebSquare.date.getCurrentServerDate());
  txt_sender.setValue(scwin.userNm);
  txt_email.setValue(scwin.email); // email
  hid_empNo.setValue(scwin.empNo); // regId
  ed_zip.setValue(scwin.zip);
  txt_addr1.setValue(scwin.addr1);
  txt_addr2.setValue(scwin.addr2);
  txt_userCd.setValue(scwin.userId); // ed_userId
  txt_userNm.setValue(scwin.userNm);
  txt_mobible.setValue(scwin.userMpNo);
  btn_save.setDisabled(false);
  btn_cancel.setDisabled(false);
};

// 수정필요..
//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addRow = function () {
  // to-do
  // 행취소 able
  udc_gridBtn.getChildren()[0].getChildren()[0].getChildren()[3].setDisabled(false);
  ds_result.insertRow(); // to-do
  $c.gus.cfEnableObjects($p, tb_result);
  $c.gus.cfEnableAllBtn($p);
  $c.gus.cfDisableBtn($p, [btn_regist]);
  // btn_regist.setDisabled(true);  // 신청

  // 신청여부, 신청자 disable
  lc_clntSendYn.setDisabled(true);
  txt_userCd.setDisabled(true);
  txt_userNm.setDisabled(true);
  let rowCnt = ds_result.getTotalRow() - 1;

  // 그리드에 값넣어주는 코드
  ds_result.setCellData(rowCnt, "regiDate", WebSquare.date.getCurrentServerDate());
  ds_result.setCellData(rowCnt, "sender", scwin.userNm);
  ds_result.setCellData(rowCnt, "email", scwin.email); // email
  ds_result.setCellData(rowCnt, "empNo", scwin.empNo); // empNo
  ds_result.setCellData(rowCnt, "zip", scwin.zip); // zip
  ds_result.setCellData(rowCnt, "deptName", scwin.deptNm); // deptName 귀속부서 ?
  ds_result.setCellData(rowCnt, "telNo", scwin.userMpNo2); // telNo 전화번호 ?
  ds_result.setCellData(rowCnt, "addr1", scwin.addr1);
  ds_result.setCellData(rowCnt, "addr2", scwin.addr2);
  ds_result.setCellData(rowCnt, "userId", scwin.userId); // ed_userId
  ds_result.setCellData(rowCnt, "userNm", scwin.userNm);
  ds_result.setCellData(rowCnt, "mobible", scwin.userMpNo); // userMpNo
  ds_result.setCellData(rowCnt, "cardGubun", "02");
  ds_result.setCellData(rowCnt, "cardCnt", "0");
  ds_result.setCellData(rowCnt, "clntSendYn", "0");
  gr_result.setFocusedCell(rowCnt, "regiDate", false); // 추가된 마지막행에 focus
  scwin.f_setAddDefault();

  // btn_save.setDisabled(false);
  // btn_cancel.setDisabled(false);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------'
scwin.f_deleteRow = function () {
  // to-do 이거 안쓰는거 같음.. 이거 대신 scwin.f_undo 이거 쓰는거 같은데
  //cfEnableAllBtn();
  // let currentRow = ds_result.rowPosition;
  let currentRow = ds_result.getRowData(rowIndex); // 확인 필요.
  // ds_result.DeleteRow(currentRow);
  ds_result.deleteRow(currentRow);
  if (currentRow == ds_result.getTotalRow()) {
    $c.gus.cfGoPrevPosition($p, ds_result, ds_result.getRowCount());
  }
  scwin.IsDeleteRow = 1;
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------	
scwin.f_undo = function () {
  if (ds_result.getRowStatus(ds_result.getRowPosition()) == "C") {
    ds_result.removeRow(ds_result.getRowPosition());
  } else {
    ds_result.undoRow(ds_result.getRowPosition());
  }
  $c.gus.cfDisableObjects($p, tb_result);
};

//-------------------------------------------------------------------------
// 엑셀저장
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_result.getTotalRow();
  let sheetTitle = "명함명패신청내역_" + WebSquare.date.getCurrentServerDate();
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const grdObj = gr_result;
      const infoArr = [];
      const options = {
        fileName: sheetTitle,
        //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (ds_result.getModifiedIndex().length == false) {
    $c.win.alert($p, "변경된 정보가 없습니다."); //변경된 정보가 없습니다.
    return;
  }
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "clntSendYn") == 0) {
      if (ds_result.getRowStatusValue(i) == 1 || ds_result.getRowStatusValue(i) == 3 || ds_result.getRowStatusValue(i) == 0 || ds_result.getRowStatusValue(i) == 2) {
        // ds_result.getRowStatusValue(i) == 0, 2 추가함...
        if (ds_result.getCellData(i, "regiDate") == "") {
          await $c.win.alert($p, "신청일자는 필수 입력 항목입니다.");
          ed_regidate.focus();
          return;
        }
        if (ds_result.getCellData(i, "sender") == "") {
          await $c.win.alert($p, "한글 성명을 입력해주세요.");
          txt_sender.focus();
          return;
        }

        // txt_deptName.getValue() == "" 추가하였음..
        if (ds_result.getCellData(i, "deptName") == "" && txt_deptName.getValue() == "") {
          await $c.win.alert($p, "부서를 입력해주세요.");
          txt_deptName.focus();
          return;
        }
        if (ds_result.getCellData(i, "engName") == "" && txt_engName.getValue() == "") {
          await $c.win.alert($p, "영문 성명을 입력해주세요.");
          txt_engName.focus();
          return;
        }
        if (ds_result.getCellData(i, "position") == "" && txt_position.getValue() == "") {
          await $c.win.alert($p, "직급을 입력해주세요.");
          txt_position.focus();
          return;
        }
        if (ds_result.getCellData(i, "telNo") == "" && txt_telNo.getValue() == "") {
          await $c.win.alert($p, "전화번호를 입력해주세요.");
          txt_telNo.focus();
          return;
        }
        if (ds_result.getCellData(i, "zip") == "" && ed_zip.getValue() == "" || ds_result.getCellData(i, "addr1") == "" && txt_addr1.getValue() == "") {
          await $c.win.alert($p, "주소를 입력해주세요.");
          txt_addr1.focus();
          return;
        }
        if (ds_result.getCellData(i, "mobible") == "" && txt_mobible.getValue() == "") {
          await $c.win.alert($p, "핸드폰 번호를 입력해주세요.");
          txt_mobible.focus();
          return;
        }
        if (ds_result.getCellData(i, "addr2") == "" && txt_addr2.getValue() == "") {
          await $c.win.alert($p, "상세주소를 입력해주세요.");
          txt_addr2.focus();
          return;
        }
        if (ds_result.getCellData(i, "email") == "" && txt_email.getValue() == "") {
          await $c.win.alert($p, "Email을 입력해주세요.");
          txt_email.focus();
          return;
        }
        if (ds_result.getCellData(i, "cardGubun") == "") {
          await $c.win.alert($p, "신청품목을 선택해주세요.");
          lc_cardGubun.focus();
          return;
        }
        if (ds_result.getCellData(i, "cardCnt") == "" || ds_result.getCellData(i, "cardCnt") == "0") {
          await $c.win.alert($p, "신청수량을 입력해주세요.");
          txt_cardCnt.focus();
          return;
        }
      }
    }
  }
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "clntSendYn") == 0) {
      let arrStatus = [1, 3, 2];
      if (arrStatus.includes(ds_result.getRowStatusValue(i))) {
        ds_result.setCellData(i, "chk", "T");
      } else {
        ds_result.setCellData(i, "chk", "F");
      }
    }
  }
  if (scwin.IsDeleteRow == 1) {
    // tr_save.Post();
    $c.sbm.execute($p, sbm_save);
    scwin.prev_pos = ds_result.rowPosition;
  } else if (scwin.IsDeleteRow == 0) {
    debugger;
    if (lc_cardGubun.getValue() == "02" || lc_cardGubun.getValue() == "04") {
      let messageStr = "저장하시겠습니까?";
      await $c.win.confirm($p, messageStr, "scwin.saveCallback");

      // let vConfirm = confirm("저장하시겠습니까?");

      // if (vConfirm) {
      //     // tr_save.Post();
      //     $c.sbm.execute(sbm_save);
      //     scwin.prev_pos = ds_result.rowPosition;
      // }
    } else {
      let width = 550;
      let height = 300;
      let left = (screen.availWidth - width) / 2;
      let top = (screen.availHeight - height) / 2;
      let tel = txt_telNo.getValue();
      let mobile = txt_mobible.getValue();
      let fax = txt_fax.getValue();
      if (mobile.length == 11) {
        mobile = mobile.substring(0, 3) + "-" + mobile.substring(3, 7) + "-" + mobile.substring(7, 11);
      } else if (mobile.length == 10) {
        mobile = mobile.substring(0, 3) + "-" + mobile.substring(3, 6) + "-" + mobile.substring(6, 10);
      }
      if (tel.length == 9) {
        tel = tel.substring(0, 2) + "-" + tel.substring(2, 5) + "-" + tel.substring(5, 9);
      } else if (tel.length == 10) {
        if (tel.substring(0, 2) == "02") {
          tel = tel.substring(0, 2) + "-" + tel.substring(2, 6) + "-" + tel.substring(6, 10);
        } else {
          tel = tel.substring(0, 3) + "-" + tel.substring(3, 6) + "-" + tel.substring(6, 10);
        }
      } else if (tel.length == 11) {
        if (tel.substring(0, 2) == "02") {} else {
          tel = tel.substring(0, 3) + "-" + tel.substring(3, 7) + "-" + tel.substring(7, 11);
        }
      }
      if (fax.length == 9) {
        fax = fax.substring(0, 2) + "-" + fax.substring(2, 5) + "-" + fax.substring(5, 9);
      } else if (fax.length == 10) {
        if (fax.substring(0, 2) == "02") {
          fax = tel.substring(0, 2) + "-" + fax.substring(2, 6) + "-" + fax.substring(6, 10);
        } else {
          fax = fax.substring(0, 3) + "-" + fax.substring(3, 6) + "-" + fax.substring(6, 10);
        }
      } else if (fax.length == 11) {
        if (fax.substring(0, 2) == "02") {} else {
          fax = tel.substring(0, 3) + "-" + fax.substring(3, 7) + "-" + fax.substring(7, 11);
        }
      }
      txt_telNo.setValue(tel);
      txt_mobible.setValue(mobile);
      txt_fax.setValue(fax);
      let address = txt_addr1.getValue() + " " + txt_addr2.getValue();
      let forwardPage = "/cm/bc/affairs/zz_770_01_02p.jsp?FROM_LOGIN=TRUE";
      forwardPage += "&name=" + txt_sender.getValue();
      forwardPage += "&dept=" + txt_deptName.getValue() + " / " + txt_position.getValue();
      forwardPage += "&zip=" + ed_zip.text;
      forwardPage += "&address1=" + address.substring(0, 21);
      forwardPage += "&address2=" + address.substring(21, 24);
      forwardPage += "&address3=" + address.substring(45);
      forwardPage += "&tel=" + tel;
      forwardPage += "&fax=" + fax;
      forwardPage += "&mobile=" + mobile;
      forwardPage += "&email=" + txt_email.getValue();
      let arrParam = new Array(10);
      arrParam[0] = txt_sender.getValue();
      arrParam[1] = txt_deptName.getValue() + " / " + txt_position.getValue();
      arrParam[2] = ed_zip.getValue();
      arrParam[3] = address.substring(0, 21);
      arrParam[4] = address.substring(21, 24);
      arrParam[5] = address.substring(45);
      arrParam[6] = tel;
      arrParam[7] = fax;
      arrParam[8] = mobile;
      arrParam[9] = txt_email.getValue();

      // let passPopUpWin = window.showModalDialog(forwardPage,"명함신청",  "dialogWidth:630px; dialogHeight:360px; status:no; scroll:yes" ) ;            
      // showModalDialog 에서 에러 발생중..
      // let passPopUpWin = window.showModalDialog(forwardPage,arrParam,  "dialogWidth:630px; dialogHeight:360px; status:no; scroll:yes" ) ; 

      // let v_url = "/ui/cm/zz/newzipcodePopup.xml";
      let v_url = forwardPage;
      let opts = {
        id: "pupup",
        popupName: "",
        modal: true,
        type: "pageFramePopup",
        // browserPopup
        width: 630,
        scrollbars: true,
        title: ""
      };
      let passPopUpWin = $c.win.openPopup($p, v_url, opts, arrParam);
      if (passPopUpWin == 1) {
        $c.sbm.execute($p, sbm_save);
        scwin.prev_pos = ds_result.rowPosition;
      }
    }
  }
  scwin.IsDeleteRow = 0;
};
scwin.saveCallback = async function (e) {
  if (e.clickValue) {
    $c.sbm.execute($p, sbm_save);
    scwin.prev_pos = ds_result.rowPosition;
  }
};

//-------------------------------------------------------------------------
// 신청
//-------------------------------------------------------------------------
scwin.f_Regist = async function () {
  let chkCount = 0;
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "chk") == "T") {
      chkCount++;
      if (ds_result.getCellData(i, "regiDate") == "" || ds_result.getCellData(i, "seq") == "") {
        $c.win.alert($p, "저장되지 않은 데이터입니다. 저장 후 신청하십시오.");
        return;
      }
    }
  }
  if (chkCount == 0) {
    $c.win.alert($p, "신청할 내역을 선택해주세요!");
    return;
  } else {
    let registConfirm = await $c.win.confirm($p, "선택하신 내역을 신청하시겠습니까?");
    if (registConfirm) {
      scwin.prev_pos = ds_result.rowPosition;

      // 아래 서브미션을 태웠는데 신청여부가 신청으로 변경이 되지 않음..
      $c.sbm.execute($p, sbm_sendMail);
      $c.sbm.execute($p, sbm_retrieve);
    }
  }
};

//-------------------------------------------------------------------------
// 신청 취소
//-------------------------------------------------------------------------    
scwin.f_Cancel = async function () {
  let chkCount = 0;
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "chk") == "T") {
      if (ds_result.getCellData(i, "regiDate") == "" || ds_result.getCellData(i, "seq") == "") {
        $c.win.alert($p, "저장하지 않은 내역이 포함되어 있습니다.");
        return;
      } else if (ds_result.getCellData(i, "clntSendYn") == 0) {
        $c.win.alert($p, "미신청 내역이 포함되어 있습니다.");
        return;
      } else if (ds_result.getCellData(i, "clntSendYn") == 1 && ds_result.getCellData(i, "regiDate") != WebSquare.date.getCurrentServerDate()) {
        $c.win.alert($p, "신청 취소가 불가능 내역이 포함되어 있습니다.");
        return;
      }
    }
  }
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    if (ds_result.getCellData(i, "chk") == "T") {
      chkCount++;
      if (ds_result.getCellData(i, "regiDate") == "" || ds_result.getCellData(i, "seq") == "") {
        $c.win.alert($p, "저장되지 않은 데이터입니다. 저장 후 신청하십시오.");
        return;
      } else {
        if (ds_result.getCellData(i, "clntSendYn") == 0) {
          $c.win.alert($p, "미신청건입니다. 기신청 내역만 취소가 가능합니다.");
          return;
        }
      }
    }
  }
  if (chkCount == 0) {
    $c.win.alert($p, "취소할 신청내역을 선택해주세요!");
    return;
  } else {
    let cancelConfirm = await $c.win.confirm($p, "선택하신 신청 내역을 취소하시겠습니까?");
    if (cancelConfirm) {
      scwin.prev_pos = ds_result.rowPosition;
      $c.sbm.execute($p, sbm_sendCancelMail);
    }
  }
  // tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
  for (let i = 0; i < ds_result.getTotalRow(); i++) {
    ds_result.getRowStatusValue(i) == 0;
  }
};

//-------------------------------------------------------------------------
// 최근신청내용
//-------------------------------------------------------------------------    
scwin.f_RetrieveHistory = function () {
  // SELECT 절 
  let param1 = "USER_NM AS COL1 " + ",ENG_NAME AS COL2 " + ",DEPT_NAME AS COL3 " + ",POSITION AS COL4 " + ",LICENSE AS COL5 " + ",TEL_NO AS COL6 " + ",ZIP AS COL7 " + ",ADDR1 AS COL8 " + ",ADDR2 AS COL9 " + ",MOBIBLE AS COL10 " + ",FAX AS COL11 " + ",EMAIL AS COL12 " + ",CARD_GUBUN AS COL13 ";

  // 대상테이블 	
  let param2 = " TB_ZZ770 ";

  // 조건절	  
  let param3 = " AND 	AFFAIRS_GUBUN = '02' AND   EMP_NO = '" + hid_empNo.getValue() + "'";

  // 정렬    
  let param4 = " REGI_DATE DESC";

  // ds_history.DataId = 
  //     "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQuery5" + "&param1=" + param1 
  //                                                                                 + "&param2=" + param2
  //                                                                                 + "&param3=" + param3 
  //                                                                                 + "&param4=" + param4
  //                                                                                 ;		
  // ds_history.Reset();

  ds_history.set("sysCd", "CommonEBC");
  ds_history.set("queryId", "dinymicQuery5"); // 뭔지 모르겠음.
  ds_history.set("param1", param1);
  ds_history.set("param2", param2);
  ds_history.set("param3", param3);
  ds_history.set("param4", param4);
  $c.sbm.execute($p, sbm_history);
};

// 그리드에서 셀을 클릭했을때 하단에 버튼 enable/disable 설정하는 함수
// for=gr_result event=OnClick(Row,Colid)
scwin.gr_result_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId != "chk") {
    if (ds_result.getCellData(rowIndex, "clntSendYn") == "1") {
      $c.gus.cfDisableObjects($p, tb_result);
      btn_save.setDisabled(true);
      btn_regist.setDisabled(true);
      btn_cancel.setDisabled(false); // 추가함.
    } else if (ds_result.getCellData(rowIndex, "clntSendYn") == "0") {
      // ds_ManagerYn.CountRow == "1" ||  <<<
      if (scwin.userId == ds_result.getCellData(rowIndex, "userId")) {
        $c.gus.cfEnableObjects($p, tb_result);
        $c.gus.cfEnableObj($p, ed_regiDate, false);
        $c.gus.cfEnableObj($p, lc_clntSendYn, false);
        $c.gus.cfEnableObj($p, ed_userId, false);
        $c.gus.cfEnableObj($p, txt_userNm, false);
        $c.gus.cfEnableAllBtn($p);
        btn_save.setDisabled(false);
        btn_regist.setDisabled(false);
        btn_cancel.setDisabled(true);
      } else {
        $c.gus.cfDisableObjects($p, tb_result);
        btn_cancel.setDisabled(true);
        btn_save.setDisabled(false);
        btn_regist.setDisabled(false);
      }
    } else if (ds_result.getCellData(rowIndex, "clntSendYn") == "2") {
      $c.gus.cfDisableObjects($p, tb_result);
      btn_save.setDisabled(true);
      btn_regist.setDisabled(true);
      btn_cancel.setDisabled(true);
    }
  }
  ;
  if (columnId == "chk") {
    // ds_ManagerYn.CountRow == "1" => ds_ManagerYn.get("sysCd") !=""
    if (scwin.userId == ds_result.getCellData(rowIndex, "userId") || ds_ManagerYn.get("param1") != "" || scwin.sysAdminYn == "T") {
      // 1 -> T
      if (ds_result.getCellData(rowIndex, "chk") == "T") {
        if (ds_result.getCellData(rowIndex, "clntSendYn") == 1) {
          if (ds_result.getCellData(rowIndex, "regiDate") == WebSquare.date.getCurrentServerDate()) {
            $c.gus.cfEnableAllBtn($p);
            btn_save.setDisabled(true);
            btn_cancel.setDisabled(false);
            btn_regist.setDisabled(true);
          } else {
            $c.win.alert($p, "신청된 건 입니다.");
            $c.data.undoRow($p, ds_result, "Y");
            return false;
          }
        } else if (ds_result.getCellData(rowIndex, "clntSendYn") == 2) {
          $c.win.alert($p, "신청 취소된 건입니다.");
          $c.data.undoRow($p, ds_result, "Y");
          $c.gus.cfDisableObjects($p, tb_result);
          btn_save.setDisabled(true);
          btn_regist.setDisabled(true);
          btn_cancel.setDisabled(true);
          return false;
        } else if (ds_result.getCellData(rowIndex, "clntSendYn") == 0) {
          $c.gus.cfDisableObjects($p, tb_result);
          $c.gus.cfEnableAllBtn($p);
          btn_save.setDisabled(true);
          btn_cancel.setDisabled(true);
          btn_regist.setDisabled(false);
        }
      }
    } else {
      $c.win.alert($p, "본인정보만 선택 가능합니다.");
      $c.data.undoRow($p, ds_result, "Y"); // ds_result.Undo(Row);
    }
  }
};

// 헤더 체크박스 클릭후 발생하는 이벤트.
scwin.gr_result_onheaderclick = function (headerId) {
  let i = 0;
  if (headerId == "CHK_HEADER") {
    for (i = 0; i < ds_result.getTotalRow(); i++) {
      // ds_ManagerYn.CountRow == "1" => ds_ManagerYn.get("sysCd") !=""

      if (ds_result.getCellData(i, "clntSendYn") == "0" && (ds_ManagerYn.get("param1") != "" || scwin.userId == ds_result.getCellData(i, "userId") || scwin.sysAdminYn == "T")) {
        ds_result.setCellData(i, "chk", "T");
        btn_regist.setDisabled(true);
      } else {
        ds_result.setCellData(i, "chk", "F");
        btn_save.setDisabled(true);
        btn_regist.setDisabled(true);
      }
    }
  }
};
scwin.sbm_retrieve_submit = function (e) {
  let jsonData = ds_retrieve.getJSON();
  jsonData['fromRegiDate'] = ed_fromRegiDate.getValue();
  jsonData['toRegiDate'] = ed_toRegiDate.getValue();
  jsonData['empNo'] = ed_retrieve_empNo.getValue();
  jsonData['cardGubun'] = lc_retrieve_cardGubun.getValue();
  jsonData['clntSendYn'] = lc_rclntSendYn.getValue();
  ds_retrieve.setJSON(jsonData);
};

// 조회 완료시
// 조회후 명함명패신청내역 총 건수 계산
scwin.sbm_retrieve_submitdone = function (e) {
  let jsonData = ds_result.getRowJSON(0);
  ed_regiDate.setValue(jsonData['regiDate']);
  txt_deptName.setValue(jsonData['deptName']);
  txt_userNm.setValue(jsonData['userNm']);
  txt_cardCnt.setValue(jsonData['cardCnt']);
  txt_engName.setValue(jsonData['engName']);
  txt_position.setValue(jsonData['position']);
  txt_license.setValue(jsonData['license']);
  txt_telNo.setValue(jsonData['telNo']);
  ed_zip.setValue(jsonData['zip']);
  txt_addr1.setValue(jsonData['addr1']);
  txt_addr2.setValue(jsonData['addr2']);
  txt_fax.setValue(jsonData['fax']);
  txt_mobible.setValue(jsonData['mobible']);
  txt_email.setValue(jsonData['email']);
  lc_clntSendYn.setValue(jsonData['clntSendYn']);
  lc_cardGubun.setValue(jsonData['cardGubun']);
  txt_userCd.setValue(jsonData['userId']);
  hid_empNo.setValue(jsonData['empNo']);
  txt_sender.setValue(jsonData['sender']);
  let count = ds_result.getTotalRow();
  register_totalRow.setValue(count); //  명함명패신청내역 총 건수

  // G A U C E   C O M P O N E N T' S   E V E N T S 
  // AS-IS for="ds_result" event="OnLoadCompleted(rowCnt)"
  $c.gus.cfDisableObjects($p, tb_result);
  // cfHideDSWaitMsg(gr_result); // to-do 어떻게 쓰는지 모르겠음.
  if (scwin.Isfirst == 0) {
    if (count == 0) {
      $c.win.alert($p, MSG_CM_ERR_003); // to-do 일단 주석처리함
      // $c.gus.cfDisableBtn([ bDel, bCancel, btn_save, btn_regist, btn_cancel ]);
      btn_save.setDisabled(true);
      btn_regist.setDisabled(true);
      btn_cancel.setDisabled(false);
    } else {
      // cfShowTotalRows(totalRows,rowCnt);
      // $c.gus.cfDisableBtn([ bDel, bCancel, btn_save, btn_regist, btn_cancel ]);
      btn_save.setDisabled(true);
      btn_regist.setDisabled(true);
      btn_cancel.setDisabled(true);
    }
    // $c.gus.cfGoPrevPosition(ds_result, scwin.prev_pos); // 여기 일단 주석처리함 to-do
  }
  scwin.Isfirst = 0; // 화면 open후 여기서 넣어줌.
};

// 저장 TR EVENT(성공)
scwin.sbm_save_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
  $c.gus.cfEnableAllBtn($p);
};

// 신청 TR EVENT(성공)
scwin.sbm_sendMail_submitdone = function (e) {
  $c.win.alert($p, "성공적으로 신청되었습니다.");
  scwin.f_Retrieve();
};

// 신청취소 TR EVENT(성공)
scwin.sbm_sendCancelMail_submitdone = function (e) {
  $c.win.alert($p, "신청 취소가 완료되었습니다.");
  scwin.f_Retrieve();
};
scwin.sbm_history_submitdone = function (e) {
  txt_userNm.setValue(ds_history.get("COL1"));
  lc_cardGubun.setValue(ds_history.get("COL13"));
  txt_engName.setValue(ds_history.get("COL2"));
  txt_position.setValue(ds_history.get("COL4"));
  txt_license.setValue(ds_history.get("COL5"));
  txt_telNo.setValue(ds_history.get("COL6"));
  ed_zip.setValue(ds_history.get("COL7"));
  txt_addr1.setValue(ds_history.get("COL8"));
  txt_addr2.setValue(ds_history.get("COL9"));
  txt_fax.setValue(ds_history.get("COL11"));
  txt_mobible.setValue(ds_history.get("COL10"));
  txt_email.setValue(ds_history.get("COL12"));
  txt_deptName.setValue(ds_history.get("COL3"));
};

// 조회 실패시
scwin.sbm_retrieve_submiterror = function (e) {
  // $c.gus.cfDisableBtn([ bDel, bCancel, btn_save, btn_regist, btn_cancel ]);
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  // btn_cancel.setDisabled(true);
  $c.gus.cfDisableObjects($p, tb_result);
};

// 	저장 TR EVENT(실패)
scwin.sbm_save_submiterror = function (e) {
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  // btn_cancel.setDisabled(true);
};

// 	신청 TR EVENT(실패)
scwin.sbm_sendMail_submiterror = function (e) {
  // $c.gus.cfDisableBtn([ bDel, bCancel, btn_save, btn_regist, btn_cancel]);
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  // btn_cancel.setDisabled(true);
  $c.gus.cfGoPrevPosition($p, ds_result, scwin.prev_pos);
};

// 	신청취소  TR EVENT(실패)
scwin.sbm_sendCancelMail_submiterror = function (e) {
  $c.gus.cfDisableBtn($p, [bDel, bCancel, btn_save, btn_regist, btn_cancel]);
  btn_save.setDisabled(true);
  btn_regist.setDisabled(true);
  // btn_cancel.setDisabled(true);
  $c.gus.cfGoPrevPosition($p, ds_result, scwin.prev_pos);
};

//-------------------------------------------------------------------------
// 주소에 변화가 있으면 상세주소에 쓰여진 내용 삭제
//-------------------------------------------------------------------------
scwin.f_setAddr2 = function () {
  txt_addr2.setValue("");
};

// 달력 아이콘을 클릭했을때
scwin.ed_regiDate_oniconclick = function () {
  // cfOpenCalendar(ed_regiDate)
};

// -----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// -----------------------------------------------------------------------------

// 우편번호 EMEdit Focus 이동시
// for=ed_zip event=OnKillFocus()
scwin.udc_ed_zip_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_zip, txt_addr1, 3);
};
scwin.udc_name_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_retrieve_empNo.getValue(), ed_name.getValue(), 'T', 'T');
};

// // 	<!--사용자ID EMEdit Focus 이동시 -->
// for=ed_userId event=OnKillFocus()>
//  	f_chkOpenCommonPopUp(this, txt_userNm, 4);

// // 	<!--조회조건 사원번호 EMEdit Focus 이동시 -->
// for=ed_retrieve_empNo event=OnKillFocus()>
//   	f_chkOpenCommonPopUp(this, txt_retrieve_sender, 6);

// // 	<!--조회조건 사용자ID EMEdit Focus 이동시 -->
// for=ed_retrieve_userId event=OnKillFocus()>
// 	f_chkOpenCommonPopUp(this, txt_retrieve_userNm, 7);

// onColumnChanged(row,colid) -> oncelldatachange(info) 이렇게 변경하라는데 oncelldatachange 이거 이벤트 없음..
// scwin.gr_result_onviewchange = function (info) {
//     for(let i = 0 ; i< ds_result.getTotalRow() ; i++)	{	
//         if(i != 0)	{
//             if(ds_result.getRowStatusValue(i) == 3)	{
//                 $c.win.alert("변경 중인 정보가 있습니다. 먼저 저장하시기 바랍니다.");
//                 return;
//             }
//         }
//     }	
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'from',refDataMap:'dma_regiDate',style:'',id:'udc_fromToCalendar1',refEdDt:'to',edFromId:'ed_fromRegiDate',edToId:'ed_toRegiDate',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveEmpNoDeptInfo',codeId:'ed_retrieve_empNo',validTitle:'',nameId:'ed_name',style:'width:%; height:px; ',id:'udc_name','ev:onclickEvent':'scwin.popupName_onclick',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_name_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청품목 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_retrieve_cardGubun',ref:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'명함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'명패(부착형)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'명패(탁상형)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'lc_rclntSendYn',ref:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'initBtn',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 명함명패신청내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'N',gridDownYn:'Y',templateYn:'N',gridID:'gr_result',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'',visibleRowNum:'3',visibleRowNumFix:'true',sortable:'true',columnMove:'true',filterFocusMode:'row',focusMode:'cell',readOnly:'true',checkReadOnlyOnPasteEnable:'true','ev:oncellclick':'scwin.gr_result_oncellclick','ev:onviewchange':'scwin.gr_result_onviewchange','ev:onheaderclick':'scwin.gr_result_onheaderclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'CHK_HEADER',inputType:'checkbox',width:'50',fixColumnWidth:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'신청일자',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'신청순번',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'부서코드',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'신청자',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'성명(국문)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'신청품목',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'성명(영문)',width:'0'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column31',value:'직위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column29',value:'자격증',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column27',value:'전화번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column25',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column21',value:'회사주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column23',value:'상세주소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column43',value:'Fax번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column41',value:'휴대폰번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column39',value:'Email',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'신청여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column33',value:'사용자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column35',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'column45',value:'업무신청품목',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',readOnly:'false',noDisabledOnReadOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'regiDate',inputType:'text',width:'100',blockSelect:'false',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptCd',inputType:'text',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deptName',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',width:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sender',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardGubun',inputType:'select',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'명함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'명패(부착형)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'명패(탁상형)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cardCnt',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'engName',inputType:'text',width:'0'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'position',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'license',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'telNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'zip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'addr1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'addr2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'fax',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'mobible',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'email',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'clntSendYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'userId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'empNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'0',inputType:'text',id:'affairsGubun',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'register_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',btnDelYn:'N',style:'',btnRowAddObj:'bAdd',btnCancelObj:'bCancel',btnRowAddYn:'Y',rowAddFunction:'scwin.f_addRow',cancelFunction:'scwin.f_undo',gridID:'gr_result',cancelObjType:'ctrlBtn',rowAddObjType:'ctrlBtn',btnRowDelYn:'N',id:'udc_gridBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'명패신청정보입력 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'tb_result',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:' cal',id:'ed_regiDate',style:'','ev:oniconclick':'scwin.ed_regiDate_oniconclick',ref:'data:ds_result.regiDate'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'성명(국문)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveEmpNoDeptInfo',codeId:'hid_empNo',popupID:'',popupTitle:'',nameId:'txt_sender',style:'','ev:onclickEvent':'scwin.popupKorName_onclick',id:'udc_korname',codeWidth:'100',name:'sender',code:'empNo',refDataCollection:'ds_result'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_hist',type:'button',class:'btn','ev:onclick':'scwin.f_RetrieveHistory'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청 내역 복사'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'성명(영문)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_engName',style:'',ref:'data:ds_result.engName'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_deptName',style:'',ref:'data:ds_result.deptName',refSync:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'직급',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_position',style:'',ref:'data:ds_result.position'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자격증',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'txt_license',style:'',ref:'data:ds_result.license'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전화번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_telNo',style:'',ref:'data:ds_result.telNo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_zip',nameId:'txt_addr1',popupID:'',popupTitle:'',selectID:'',style:'','ev:onviewchangeCodeEvent':'scwin.f_setAddr2','ev:onviewchangeNameEvent':'scwin.f_setAddr2','ev:onclickEvent':'scwin.popupAddress_onclick',code:'zip',name:'addr1',refDataCollection:'ds_result',id:'udc_ed_zip','ev:onblurCodeEvent':'scwin.udc_ed_zip_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'핸드폰번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_mobible',style:'',ref:'data:ds_result.mobible'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상세주소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_addr2',style:'',ref:'data:ds_result.addr2'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FAX번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_fax',style:'',ref:'data:ds_result.fax'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Email',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'txt_email',style:'',ref:'data:ds_result.email'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청품목',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cardGubun',style:'',submenuSize:'auto',ref:'data:ds_result.cardGubun',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(선택)'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'명패(부착형)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'명패(탁상형)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'04'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신청수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_cardCnt',style:'width: 112px;',ref:'data:ds_result.cardCnt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_clntSendYn',style:'',submenuSize:'auto',ref:'data:ds_result.clntSendYn',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신청자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'txt_userCd',nameId:'txt_userNm',popupID:'img_ed_userId',popupTitle:'',selectID:'retrieveAffairsUserInfo',style:'',id:'ed_userId','ev:onclickEvent':'scwin.popupRegister_onclick',code:'userId',refDataCollection:'ds_result',name:'userNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'info-list txt-red'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'명패 가격은 부착형 : 1,300원, 탁상형 : 7,800원 입니다.',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'업체명 : 엠비아(02-2698-2022 / mvia@mvia.co.kr)',class:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'사업부명과 팀명을 정확히 기재하여 주시기 바랍니다. (기재된 내용대로 제작이 되오니 유의하시기 바랍니다.)',class:'',escape:'false',tagname:'p'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'취소는 당일 신청한 건에 대해서만 가능합니다.',class:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_regist',style:'',type:'button','ev:onclick':'scwin.f_Regist'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})