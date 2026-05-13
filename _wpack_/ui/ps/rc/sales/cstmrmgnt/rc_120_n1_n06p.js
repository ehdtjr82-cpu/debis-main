/*amd /ui/ps/rc/sales/cstmrmgnt/rc_120_n1_n06p.xml 40113 56b846560222075a1e39bd35bc37416a21e9a7c0b6780d60fd2d1d31283f578c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SMSGroup',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'smsGrpCd',name:'그룹코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsGrpNm',name:'그룹명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SMSDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'휴대폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seqNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCntctPl',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDeg',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_SMSSend',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seqNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procCls',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsRepoCls',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndMpNo',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_SMSMessage'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'smsSndSeq',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'smsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'smsOutbrClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rltNoSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgNm',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'name14',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_org_tick',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_tick',saveRemovedData:'true','ev:ondataload':'scwin.ds_tmp_tick_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_SMSDetailReal',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msgNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seqNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCntctPl',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDeg',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_SMSSendCopy',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndMpNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntn',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_master'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'telNo',name:'발신번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SMSGroupCont',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'smsGrpTelNo',name:'받는 사람 연락처',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_org_tick',action:'',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_telNo',action:'/ps.rc.sales.cstmrmgnt.RetrieveUserBranchInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_master","key":"OUT_DS1"}',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Send',action:'/ps.rc.sales.SaveRentACarSMSCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SMSSend","key":"IN_DS1"},{"id":"ds_SMSMessage","key":"IN_DS2"},{"id":"ds_SMSDetailReal","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Send_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_smsGrpCont',action:'/ps.rc.sales.RetrieveSmsCodeAllCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SMSGroup","key":"IN_DS1"},{"id":"ds_SMSGroupCont","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SMSGroupCont","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_smsGrpCont_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = $c.data.getParameter($p);
// 부모에서 값이 어떻게 들어오는지 확인해야됨
// scwin.valueObject = window.dialogArguments;
// scwin.ds_parent = (scwin.valueObject == undefined) ? "" : scwin.valueObject.prov; // 부모창에서 넘어온 Data Set
// scwin.parent_clsCd = (scwin.valueObject == undefined) ? "" : scwin.valueObject.clsCd;
// scwin.parent_sendCntctPl = (scwin.valueObject == undefined) ? "" : scwin.valueObject.sendCntctPl;

scwin.ds_parent = scwin.params.prov; // 부모창에서 넘어온 Data Set
scwin.parent_clsCd = scwin.params.clsCd;
scwin.parent_sendCntctPl = scwin.params.sendCntctPl;
scwin.onpageload = function () {
  //Gauce Header생성 ;
  // scwin.f_SeachConditionCreate();
  // tr_telNo.post();

  smsfont.hide();
  $c.sbm.execute($p, sbm_telNo);
  txa_msgNm.focus();
  if (scwin.parent_clsCd == "C") {
    ed_sendCntctPl.setValue(scwin.parent_sendCntctPl);
    for (var i = 0; i < ds_parent.getTotalRow(); i++) {
      ds_SMSDetail.insertRow();
      ds_SMSDetail.setCelldata(i, "rcvMpNo", ds_parent.getCellData(i, "rcvMpNo"));
      ds_SMSDetail.setCelldata(i, "clntNo", ds_parent.getCellData(i, "clntNo"));
      ds_SMSDetail.setCelldata(i, "clntNm", ds_parent.getCellData(i, "clntNm"));
    }
  }
};
scwin.ds_SMSDetail_ondataload = function () {};

//-------------------------------------------------------------------------
// 엑셀 업로드
//-------------------------------------------------------------------------	
scwin.f_ExcelUpload = async function () {
  ds_SMSDetail.removeAll();
  ds_org_tick.removeAll();
  ds_tmp_tick.removeAll();
  if (excelUdc.getUpExt() == "1") {
    let options = {
      "startRowIndex": 1
    };
    await $c.data.uploadGridViewCSV($p, grd_SMSDetail, options); // CSV를 선택하였을 경우
  } else {
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "startRowIndex": 1
    };
    await $c.data.uploadGridViewExcel($p, grd_SMSDetail, options); // xlsx 를 선택하였을 경우
  }

  // // 엑셀 업로드 함수를 어떻게 태우는지 문의 결과 정의한 사항이 현재 존재하지 않음. 
  // // 업로드 관련 사항은 추후에 수정해야됨.
  // var i;
  // var intRowPosition;
  // var topWrkStpCd;
  // inputF.setValue("");

  // $c.win.alert("파일이 CSV인 것만 Upload가 가능합니다.");
  // // inputF.Open(); // to-do
  // var path = inputF.getValue();
  // let chkFileVal = scwin.f_CheckFileExt("CSV", path);
  // if (chkFileVal == false) {
  //     $c.win.alert("파일이 CSV인 것만 Upload가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
  //     return;
  // }

  // // ds_org_tick.DataId = ""; // to-do
  // // ds_org_tick.DataId = "file://" + inputF.getValue(); // to-do

  // if (inputF.getValue() == "") {
  //     return;
  // }

  // ds_org_tick.removeAll(); // ds_org_tick.ClearData();
  // ds_SMSDetail.removeAll() // ds_SMSDetail.ClearData();

  // $c.sbm.execute(sbm_org_tick); // ds_org_tick.Reset();

  // // ds_tmp_tick.ImportData(ds_org_tick.ExportData(1, ds_org_tick.getTotalRow(), true));  // to-do 전환방법 문의필요
  // // grd_SMSDetail.ReDraw = "false";

  // for (var i = 0; i < ds_tmp_tick.getTotalRow(); i++) {

  //     ds_SMSDetail.insertRow(); // ds_SMSDetail.Addrow();
  //     ds_SMSDetail.setCellData(i, "clntNo", ds_tmp_tick.getCellData(i, ds_tmp_tick.getColumnID(1)));
  //     ds_SMSDetail.setCellData(i, "clntNm", ds_tmp_tick.getCellData(i, ds_tmp_tick.getColumnID(2)));
  //     ds_SMSDetail.setCellData(i, "rcvMpNo", ds_tmp_tick.getCellData(i, ds_tmp_tick.getColumnID(3)).simpleReplace("-", ""));
  // }
  // // grd_SMSDetail.ReDraw = "true";
  // ds_tmp_tick.removeAll(); // ds_tmp_tick.ClearData();
};

//-------------------------------------------------------------------------
// 파일 명 체크하는 로직(CSV)
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  elen = ext.length;
  flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

//-------------------------------------------------------------------------
// 유효성검사
//------------------------------------------------------------------------- 
scwin.f_check = async function () {
  if (txa_msgNm.getValue().trim() == "") {
    $c.win.alert($p, "전송할 메시지를 입력하십시오.");
    txa_msgNm.focus();
    return false;
  }
  if (ed_sendCntctPl.getValue().trim() == "") {
    $c.win.alert($p, "보내는 사람 연락처를 입력하십시오.");
    ed_sendCntctPl.focus();
    return false;
  }
  if (ds_SMSDetail.getTotalRow() == 0 && ds_SMSGroup.getTotalRow() == 0) {
    $c.win.alert($p, "전송대상(그룹 혹은 개인)을 입력하십시오.");
    grd_SMSDetail.focus();
    return false;
  }
  var flag = 0;
  for (var i = 0; i < ds_SMSDetail.getTotalRow(); i++) {
    // 1 -> 2로 변경하였음 
    if ([2, 3].includes(ds_SMSDetail.getRowStatusValue(i))) {
      // 신규,수정 건
      flag++;
    }
  }
  for (var i = 0; i < ds_SMSGroup.getTotalRow(); i++) {
    // 1 -> 2로 변경하였음 
    if ([2, 3].includes(ds_SMSGroup.getRowStatusValue(i))) {
      // 신규,수정 건
      flag++;
    }
  }
  if (flag == 0) {
    let messageStr = "이미 SMS 전송하였습니다. 계속해서 SMS 전송하시겠습니까?";
    let ret = await $c.win.confirm($p, messageStr);
    if (ret) {
      // ds_SMSGroup.UseChangeInfo = "false";		// 신규 모드로 변경
      // ds_SMSDetail.UseChangeInfo = "false";		// 신규 모드로 변경
    } else {
      return false;
    }
  }
  for (var i = 0; i < ds_SMSDetail.getTotalRow(); i++) {
    // 1 -> 2로 변경하였음 
    if ([2, 3].includes(ds_SMSDetail.getRowStatusValue(i))) {
      // 신규,수정 건    
      if (ds_SMSDetail.getCellData(i, "rcvMpNo") == "") {
        $c.win.alert($p, "전송대상(개별) 연락처를 입력하십시오.");
        grd_SMSDetail.setFocusedCell(ds_SMSDetail.getRowPosition(), "rcvMpNo");
        return false;
      }
    }
  }
  for (var i = 0; i < ds_SMSGroup.getTotalRow(); i++) {
    // 1 -> 2로 변경하였음 갱신-> 삽입
    if ([2, 3].includes(ds_SMSGroup.getRowStatusValue(i))) {
      // 신규,수정 건    
      if (ds_SMSGroup.getCellData(i, "smsGrpNm") == "") {
        $c.win.alert($p, "전송대상(그룹)을 입력하십시오.");
        grd_SMSGroup.setFocusedCell(ds_SMSGroup.getRowPosion(), "smsGrpCd");
        return false;
      }
    }
  }
  return true;
};

//-------------------------------------------------------------------------
// SMS전송 ;
//-------------------------------------------------------------------------  
scwin.f_Send = async function () {
  let checkFunc = await scwin.f_check();
  if (checkFunc == false) return;
  await scwin.f_SetData();
  // 발신번호 체크 
  var sendNo = ed_sendCntctPl.getValue();
  let smsValidChk = await $c.gus.cfSmsTelValidChk($p, sendNo);
  if (smsValidChk == false) {
    return;
  }
  let messageStr = "SMS 전송하시겠습니까?";
  let confirmRet = await $c.win.confirm($p, messageStr);
  if (confirmRet) {
    $c.sbm.execute($p, sbm_Send); // tr_Send.post();
  }
};

// to-do datalist / datamap 만든후 다시 작업
//-------------------------------------------------------------------------
// 저장 data 설정
//------------------------------------------------------------------------- 
scwin.f_SetData = async function () {
  // 전송그룹 정보 가져오기
  ds_SMSSendCopy.removeAll();
  ds_SMSSend.removeAll();
  ds_SMSMessage.setEmptyValue();
  ds_SMSGroupCont.removeAll();
  ds_SMSDetailReal.removeAll();
  $c.sbm.execute($p, sbm_smsGrpCont);
};
scwin.sbm_smsGrpCont_submitdone = function (e) {
  if (ds_SMSGroupCont.getTotalRow() > 0) {
    for (var i = 0; i < ds_SMSGroupCont.getTotalRow(); i++) {
      ds_SMSSendCopy.insertRow();
      let rowPos = ds_SMSSendCopy.getTotalRow() - 1;
      ds_SMSSendCopy.setCellData(rowPos, "rcvMpNo", ds_SMSGroupCont.getCellData(i, "smsGrpTelNo")); //받는 사람 연락처 ;
      ds_SMSSendCopy.setCellData(rowPos, "sndMpNo", ed_sendCntctPl.getValue().trim()); //보내는 사람 ;
      ds_SMSSendCopy.setCellData(rowPos, "cntn", txa_msgNm.getValue().trim()); //메시지 ;
    }
  }

  /* op901 */
  for (var i = 0; i < ds_SMSDetail.getTotalRow(); i++) {
    ds_SMSSendCopy.insertRow();
    let rowPos = ds_SMSSendCopy.getTotalRow() - 1;
    ds_SMSSendCopy.setCellData(rowPos, "rcvMpNo", ds_SMSDetail.getCellData(i, "rcvMpNo")); //받는 사람 연락처 ;
    ds_SMSSendCopy.setCellData(rowPos, "sndMpNo", ed_sendCntctPl.getValue().trim()); //보내는 사람 ;
    ds_SMSSendCopy.setCellData(rowPos, "cntn", txa_msgNm.getValue().trim()); //메시지 ;
  }

  /* op901 */
  for (var i = 0; i < ds_SMSSendCopy.getTotalRow(); i++) {
    ds_SMSSend.insertRow();
    let rowPos = ds_SMSSend.getTotalRow() - 1;
    ds_SMSSend.setCellData(rowPos, "rcvMpNo", ds_SMSSendCopy.getCellData(i, "rcvMpNo")); //받는 사람 연락처 ;
    ds_SMSSend.setCellData(rowPos, "sndMpNo", ed_sendCntctPl.getValue().trim()); //보내는 사람 ;
    ds_SMSSend.setCellData(rowPos, "cntn", txa_msgNm.getValue().trim()); //메시지 ;
  }

  /* rc192 */
  // ds_SMSMessage.insertRow();
  ds_SMSMessage.set("smsCd", smsCd.getValue());
  //1:예약, 2:계약, 3:반납, 4:기타 ;

  let val;
  if ("" == rentcarSmsClssCd.getValue()) {
    val = "6";
  } else {
    val = rentcarSmsClssCd.getValue();
  }
  ds_SMSMessage.set("smsOutbrClsCd", val); //smsOutbrClsCd; 발생구분
  ds_SMSMessage.set("rltNo", ""); //관련번호
  ds_SMSMessage.set("rltNoSeq", 0); //관련번호순번
  ds_SMSMessage.set("msgNm", txa_msgNm.getValue().trim());

  /* rc193 */
  var CNT = ds_SMSSend.getTotalRow();
  for (var i = 0; i < CNT; i++) {
    ds_SMSDetailReal.insertRow();
    ds_SMSDetailReal.setCellData(i, "msgNm", txa_msgNm.getValue().trim()); //메지지
    ds_SMSDetailReal.setCellData(i, "smsSndSeq", 0);
    ds_SMSDetailReal.setCellData(i, "seqNo", 0);
    ds_SMSDetailReal.setCellData(i, "sendCntctPl", ed_sendCntctPl.getValue().trim()); //발신자
    ds_SMSDetailReal.setCellData(i, "rcvMpNo", ds_SMSSend.getCellData(i, "rcvMpNo"));
    ds_SMSDetailReal.setCellData(i, "sndDeg", 1); //전송차수
    ds_SMSDetailReal.setCellData(i, "clntNo", ""); //
    ds_SMSDetailReal.setCellData(i, "clntNm", ""); //	    	    
  }
};

//-------------------------------------------------------------------------
// 행추가 전송대상 (개별);
//------------------------------------------------------------------------- 
scwin.f_addRow = function () {
  ds_SMSDetail.insertRow();
  let rowCnt = ds_SMSDetail.getTotalRow();
  grd_SMSDetail.setFocusedCell(rowCnt - 1, "clntNo");
};

// 전송대상 (개별) 행삭제
scwin.f_delRowDetail = function () {
  ds_SMSDetail.deleteRow(ds_SMSDetail.rowPosition);
  ds_SMSDetail.removeRow(ds_SMSDetail.rowPosition);
};

//-------------------------------------------------------------------------
// 전송그룹 행추가 ;
//------------------------------------------------------------------------- 
scwin.f_addRowGrp = function () {
  ds_SMSGroup.insertRow();
  let rowCnt = ds_SMSGroup.getTotalRow();
  grd_SMSGroup.setFocusedCell(rowCnt - 1, "smsGrpNm");
};

// 전송대상 (그룹) 행삭제
scwin.f_delRowGrp = function () {
  ds_SMSGroup.deleteRow(ds_SMSGroup.rowPosition);
  ds_SMSGroup.removeRow(ds_SMSGroup.rowPosition);
};

//-------------------------------------------------------------------------
// 거래처조회 팝업 ;
//------------------------------------------------------------------------- 
scwin.f_openWin = function (row, gbn) {
  // var url = "/ps/rc/sales/cstmrmgnt/rc_120_01_n03p.jsp";
  // var Struc = new Object();
  // Struc.qryConKnd = 1; //거래처번호
  // Struc.qryConNo = ds_SMSDetail.getCellData(row, "clntNo"); //거래처번호
  // Struc.clntNm = ds_SMSDetail.getCellData(row, "clntNm"); //거래처명

  // var rtnList = new Object();
  // rtnList = window.showModalDialog(url, Struc, "dialogHeight:520px; dialogWidth:550px; resizable=no; help:no; status:no; center=true; ");

  // fi_201_01_05b.xml 거래처팝업 확인
  //  이거로 대체하는듯.. 2026.03.17 확인하였음. <<<< 거래처 팝업이랑 다름 다시 문의해야됨..

  let v_url = "/ui/ps/rc/sales/cstmrmgnt/rc_120_01_n03p.xml";
  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 550,
    height: 520,
    title: ""
  };
  let rtnList = $c.win.openPopup($p, v_url, opts); // arrParent

  if (rtnList == null) {
    ds_SMSDetail.setCellData(row, "clntNm", "");
    ds_SMSDetail.setCellData(row, "clntNo", "");
  } else {
    if (rtnList.clntNo != null && rtnList.clntNo != "") {
      if (rtnList.clntMpNo != null && rtnList.clntMpNo != "") {
        ds_SMSDetail.setCellData(row, "rcvMpNo", scwin.ReplaceAll(rtnList.clntMpNo, "-", ""));
        ds_SMSDetail.setCellData(row, "clntNm", rtnList.clntNm);
        ds_SMSDetail.setCellData(row, "clntNo", rtnList.clntNo);
      } else {
        $c.win.alert($p, rtnList.clntNm + "은(는) 휴대폰정보가 없습니다.");
        ds_SMSDetail.setCellData(row, "clntNm", "");
        ds_SMSDetail.setCellData(row, "clntNo", "");
      }
    } else {
      ds_SMSDetail.setCellData(row, "clntNm", "");
      ds_SMSDetail.setCellData(row, "clntNo", "");
    }
  }
};

//-------------------------------------------------------------------------
// SMS 전송 그룹관리 화면 가기
//-------------------------------------------------------------------------
scwin.f_SMSGroup = function () {
  var url = "/ui/ps/rc/sales/cstmrmgnt/rc_120_n1_n10b.xml";
  // cfTabMenuUpdate(url, "SMS전송그룹관리");

  let programId = "rc_120_n1_n10b";
  $c.win.openMenu($p, "SMS전송그룹관리", url, programId);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openWinSmsGroup = async function (row) {
  var pCode = ds_SMSGroup.getCellData(row, "smsGrpCd");
  // var rtnList = new Array();  // 공통POP-UP -> 요청화면
  var rtnList;
  // retrieveClntList2
  //retrieveRentCarCustomerList
  udc_groupCode.setSelectId("retrieveSmsGrpCdList");
  await udc_groupCode.cfCommonPopUp(rtnList => {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        ds_SMSGroup.setCellData(row, "smsGrpCd", "");
        ds_SMSGroup.setCellData(row, "smsGrpNm", "");
        ds_SMSGroup.setCellData(row, "rmk", "");
      } else {
        ds_SMSGroup.setCellData(row, "smsGrpCd", rtnList[0]);
        ds_SMSGroup.setCellData(row, "smsGrpNm", rtnList[1]);
        ds_SMSGroup.setCellData(row, "rmk", rtnList[2]);
      }
    } else {
      ds_SMSGroup.setCellData(row, "smsGrpCd", "");
      ds_SMSGroup.setCellData(row, "smsGrpNm", "");
      ds_SMSGroup.setCellData(row, "rmk", "");
    }
  }, pCode // 화면에서의 ??? Code Element의	Value
  , "" // 화면에서의 ??? Name Element의	Value
  , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는	컬럼 지정
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , "F" // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

//-------------------------------------------------------------------------
// 치환 ;
//------------------------------------------------------------------------- 
scwin.ReplaceAll = function (varb, replaceThis, replaceBy) {
  var newvarbarray = varb.split(replaceThis);
  var newvarb = newvarbarray.join(replaceBy);
  return newvarb;
};

//-------------------------------------------------------------------------
// SMS메시지 조회 ;
//------------------------------------------------------------------------- 
scwin.f_SearchMsg = async function () {
  let url = "/ui/ps/rc/sales/cstmrmgnt/rc_120_n1_n09p.xml"; // 화면 없음.
  url += "?smsCd=" + smsCd.getValue();
  url += "&rentcarSmsClssCd=" + rentcarSmsClssCd.getValue();
  // var rtnList = window.showModalDialog(url, null, "dialogHeight:490px; dialogWidth:580px; resizable=no; help:no; status:no; center=true; ");

  let opts = {
    id: "pupup",
    popupName: "",
    modal: true,
    type: "browserPopup",
    width: 580,
    height: 490,
    title: ""
  };
  let rtnList = await $c.win.openPopup($p, url, opts);
  if (rtnList != null) {
    smsCd.setValue(rtnList[0]);
    txa_msgNm.setValue(rtnList[1]);
    rentcarSmsClssCd.setValue(rtnList[2]);
    scwin.f_onKeyUp();
  } else {
    smsCd.setValue("");
    txa_msgNm.setValue("");
    rentcarSmsClssCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// SMS byte 체크 ;
//-------------------------------------------------------------------------  
scwin.f_onKeyUp = function () {
  var lenStr = 90;
  var Length = scwin.calc_msgLen(txa_msgNm.getValue());
  if (Length > lenStr) {
    smsfont.show();
    smsfont.setStyle("color", "red");
  } else {
    smsfont.hide();
  }
};

//-------------------------------------------------------------------------
// SMS byte 계산 ;
//-------------------------------------------------------------------------  
scwin.calc_msgLen = function (message) {
  var nbytes = 0;
  for (i = 0; i < message.length; i++) {
    var ch = message.charAt(i);
    if (escape(ch).length > 4) {
      nbytes += 2;
    } else if (ch != "\r") {
      nbytes++;
    }
  }
  return nbytes;
};

// for=tr_Send event=OnSuccess()
scwin.sbm_Send_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  $c.win.alert($p, "성공적으로 발송하였습니다.");
  ds_SMSSend.removeAll();
  ds_SMSMessage.setEmptyValue();
  ds_SMSDetail.modifyAllStatus("R");
  ds_SMSGroup.modifyAllStatus("R");
};

// scwin.grd_SMSDetail_oncellclick = function (rowIndex, columnIndex, columnId) {
//     if (columnId == "clntNm") {
//         scwin.f_openWin(rowIndex, "NM");
//     }
//     if (columnId == "clntNo") {
//         scwin.f_openWin(rowIndex, "CD");
//     }
// };

scwin.clntNoPopUp = function () {
  // 팝업 화면 없음
  // let rowIndex = ds_SMSDetail.getRowPosition();
  // scwin.f_openWin(rowIndex, "NM");
  scwin.f_openPopUp();
};
scwin.f_openPopUp = function (flag, check) {
  udc_clnt.setSelectId('retrieveClntList2');
  // udc_clnt.setSelectId('retrieveRentCarClntInfo');

  let rowPos = ds_SMSDetail.getRowPosition();
  udc_clnt.cfCommonPopUp(rtnList => {
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ds_SMSDetail.setCellData(rowPos, "clntNo", rtnList[0]); // 코드
      ds_SMSDetail.setCellData(rowPos, "clntNm", rtnList[1]); // 명
    } else {
      ds_SMSDetail.setCellData(rowPos, "clntNo", ""); // 코드
      ds_SMSDetail.setCellData(rowPos, "clntNm", ""); // 명
    }
    ;
  }, ds_SMSDetail.getCellData(rowPos, "clntNo"), ds_SMSDetail.getCellData(rowPos, "clntNm"), "F", null, null, null, null, null, null, null, null, null, null, null, "렌터카거래처조회팝업, 거래처번호, 거래처명");
};
scwin.clntNmPopUp = function () {
  // 팝업 화면 없음
  // let rowIndex = ds_SMSDetail.getRowPosition();
  // scwin.f_openWin(rowIndex, "CD");
  scwin.f_openPopUp();
};
scwin.smsGrpCdPopUp = function () {
  let row = ds_SMSGroup.getRowPosition();
  let col = ds_SMSGroup.getColumnInfo("smsGrpCd");
  if (col.id == "smsGrpCd") {
    scwin.f_openWinSmsGroup(row);
  }
};

// 전송대상(그룹) 그룹코드에서 포커스 아웃시 
scwin.grd_SMSGroup_onafteredit = function (rowIndex, columnIndex, value) {
  if (ds_SMSGroup.getCellData(rowIndex, "smsGrpCd") == "") {
    ds_SMSGroup.setCellData(rowIndex, "smsGrpCd", "");
    ds_SMSGroup.setCellData(rowIndex, "smsGrpNm", "");
    ds_SMSGroup.setCellData(rowIndex, "rmk", "");
  } else {
    scwin.smsGrpCdPopUp();
  }
};

// for="ds_master" event="OnLoadCompleted(rowCnt)
scwin.sbm_telNo_submitdone = function (e) {
  // to-do
  // if (rowCnt > 0 ) {
  ed_sendCntctPl.setValue(ds_master.get("telNo"));
  // }
};
scwin.gridDown = function () {
  // const grdObj = grd_SMSDetail;
  // const infoArr = [];
  // const options = {
  //     fileName: "sms" + ".xlsx", //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
  //     sheetName: "sms"
  // };
  // $c.data.downloadGridViewExcel(grdObj, options, infoArr);
  // asis 와 동일한 alert 
  $c.gus.cfDownloadFile($p, 'SMS전화번호목록_샘플.xls', '/ui/ps/rc/csvtemplate/rc_120_n1_n06b.xls');
};

// grd_SMSDetail_onafteredit 보다 먼저 발생.
scwin.grd_SMSDetail_oneditend = function (rowIndex, columnIndex, value) {
  if (columnIndex == "0" && ds_SMSDetail.getCellData(rowIndex, "clntNo") != "") {
    ds_SMSDetail.setCellData(rowIndex, "clntNo", "");
    ds_SMSDetail.setCellData(rowIndex, "clntNm", "");
    ds_SMSDetail.setCellData(rowIndex, "rcvMpNo", "");
  } else if (columnIndex == "1" && ds_SMSDetail.getCellData(rowIndex, "clntNm") != "") {
    ds_SMSDetail.setCellData(rowIndex, "clntNo", "");
    ds_SMSDetail.setCellData(rowIndex, "clntNm", "");
    ds_SMSDetail.setCellData(rowIndex, "rcvMpNo", "");
  }
};

// 전송대상(개별) 그리드에 값이 들어갔을때 팝업 조회
scwin.grd_SMSDetail_onafteredit = function (rowIndex, columnIndex, value) {
  // debugger
  let noFocus = ds_SMSDetail.getCellData(rowIndex, "clntNo");
  let nmFocus = ds_SMSDetail.getCellData(rowIndex, "clntNm");
  if (columnIndex == "0" && noFocus != "") {
    scwin.clntNoPopUp();
  } else if (columnIndex == "1" && nmFocus != "") {
    scwin.clntNmPopUp();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보내는 메시지',class:'tit'}}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'발송 내역은 이력관리가 되오니 업무 이외의 용도 사용은 자제하여 주시기 바랍니다.',style:''}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:textarea',A:{style:'',id:'txa_msgNm',class:'','ev:onkeyup':'scwin.f_onKeyUp'}},{T:1,N:'xf:trigger',A:{style:'display: none;',id:'btn_trigger1',type:'button',class:'btn ico sch','ev:onclick':'scwin.f_SearchMsg'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{id:'smsfont',label:'80 Byte를 초과하여 LMS로 전송됩니다. ',style:'width:418px;height:23px;',class:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8 flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'보내는사람 연락처 =>',class:'tit'}}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_sendCntctPl',class:'',dataType:'number',maxlength:'11'}}]}]},{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전송대상(그룹) ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_SMSGroup',focusMode:'row',id:'grd_SMSGroup',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true',readOnly:'true','ev:onafteredit':'scwin.grd_SMSGroup_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'그룹코드',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'그룹명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'비고',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'smsGrpCd',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'center',imageClickFunction:'scwin.smsGrpCdPopUp',readOnly:'false',maxLength:'5'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'smsGrpNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rmk',inputType:'text',removeBorderStyle:'false',width:'70',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:'display: none'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRowsGroup',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',gridID:'grd_SMSGroup',rowAddFunction:'scwin.f_addRowGrp',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_delRowGrp'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_sendGroupManage',style:'display: none;',type:'button','ev:onclick':'scwin.f_SMSGroup'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'SMS전송그룹관리'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'전송대상(개별) ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'width:100px; height:23px;display: none;',id:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Excel Upload'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',grp:'grd_section1',templateYn:'N',style:'visibility: none;',gridID:'grd_SMSDetail',btnUser:'N',btnPlusYn:'Y',gridDownFn:'scwin.gridDown',gridUpObjType:'bCreate',gridUpYn:'Y',gridUpFn:'scwin.f_ExcelUpload',id:'excelUdc'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_SMSDetail',focusMode:'row',id:'grd_SMSDetail',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',columnMove:'true','ev:onafteredit':'scwin.grd_SMSDetail_onafteredit','ev:onbeforeedit':'scwin.grd_SMSDetail_onbeforeedit','ev:oneditend':'scwin.grd_SMSDetail_oneditend'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'거래처번호',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'거래처명',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'휴대폰',width:'100',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNo',inputType:'textImage',removeBorderStyle:'false',width:'120',textAlign:'center',imageClickFunction:'scwin.clntNoPopUp'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'textImage',removeBorderStyle:'false',width:'100',textAlign:'left',imageClickFunction:'scwin.clntNmPopUp'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'rcvMpNo',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'center',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:'display: none;'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{style:'width:100px;',id:'',type:'button','ev:onclick':'scwin.gridDown'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'샘플 다운로드'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'N',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',gridID:'grd_SMSDetail',rowAddFunction:'scwin.f_addRow',rowAddUserAuth:'C',rowDelFunction:'D',cancelFunction:'scwin.f_delRowDetail'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'b_Send',style:'',type:'button','ev:onclick':'scwin.f_Send'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보내기'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_clntNo',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'ed_clntNm',style:'display: none;',id:'udc_clnt'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:'hiddenComp'},E:[{T:1,N:'xf:input',A:{id:'smsCd',style:'width:144px; height:21px; '}},{T:1,N:'xf:input',A:{id:'rentcarSmsClssCd',style:'width:144px; height:21px; '}},{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_tmp_tick',style:'width:500px; height:150px; ',id:'grd_SMSDetail_tmp',defaultCellHeight:'20'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'휴대폰',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rcvMpNo',displayMode:'label'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'width:%; height:px; ',id:'udc_groupCode'}}]}]},{T:1,N:'w2:textbox',A:{id:'',label:'',style:'width:150px; height:23px; '}}]}]}]})