/*amd /ui/il/acc/exchbudgetplan/ac_120_01_06b.xml 33123 a261edb785adb388d3ae07827fba1f3fda9a365ecddb928fadc8cafb2770d20d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctRslt',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctRslt_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'additionalKndCd',name:'수입지출구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'additionalKndNm',name:'수입지출구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdRamt',name:'기준잔액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'planAmt',name:'계획금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsAmt',name:'실적금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'exSubAmt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'diffAmt',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctRsltRemarks',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctRsltRemarks_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'samtRemarks',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pamtRemarks',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_acctReportApprv',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctReportApprv_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'appNo',name:'신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvReqNo',name:'결재요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitId',name:'최종승인ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDept',name:'최종승인부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'finalAdmitDt',name:'최종승인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectId',name:'반려ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDept',name:'반려부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectDt',name:'반려일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rejectRsn',name:'반려사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsCd',name:'결재상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvRegId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvRegDtm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvRegNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'apprvStsNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_acctPlan',saveRemovedData:'true','ev:ondataload':'scwin.ds_acctPlan_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'계획년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ramt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'samt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pamt',name:'',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eamt',name:'',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_frmReqApprove'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'apprvDocKndCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqUserId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'epUserId',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvTitle',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvDtlInfo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'appNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ElectronicApprovalRequestFrame',name:'name7',dataType:'text',defaultValue:'YES'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.acc.exchbudgetplan.RetrieveMonthlyPlannedExpenseListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_acctRslt","key":"OUT_DS1"},{"id":"ds_acctPlan","key":"OUT_DS2"},{"id":"ds_acctRsltRemarks","key":"OUT_DS3"},{"id":"ds_acctReportApprv","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_acctRslt","key":"OUT_DS1"},{"id":"ds_acctPlan","key":"OUT_DS2"},{"id":"ds_acctRsltRemarks","key":"OUT_DS3"},{"id":"ds_acctReportApprv","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveAcctPlan',action:'/il.acc.exchbudgetplan.RetrieveAcctPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_acctPlan","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_acctPlan","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.acc.exchbudgetplan.SaveAcctReportCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_acctRslt","key":"IN_DS1"},{"id":"ds_acctPlan","key":"IN_DS2"},{"id":"ds_acctRsltRemarks","key":"IN_DS3"},{"id":"ds_acctReportApprv","key":"IN_DS4"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_frmReqApprove',action:'/il.acc.exchbudgetplan.AcctPlanApproveCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.strStdDt = scwin.vCurDate.substring(0, 6);
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
//scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.strPreDate = $c.date.addMonth($p, scwin.vCurDate, -1);
scwin.ElectronicApprovalRequestFrame = "YES"; // 전자결재요청화면 여부 

scwin.vAuthYn = "N";
scwin.privAdmin = "";
scwin.g_sUserId = "";
scwin.g_sEmpNo = "";
scwin.stdYm = "";
scwin.txt_apprvStsCd = "";
scwin.onpageload = function () {
  var params = $c.data.getParameter($p);
  console.log("params : ");
  console.log(params);
  var stdYm = $c.gus.cfIsNull($p, params.stdYm) ? "" : params.stdYm;
  console.log(" stdYm : " + stdYm);
  let memJson = $c.data.getMemInfo($p);
  //console.log(memJson);

  scwin.privAdmin = memJson.privAdmin;
  scwin.g_sUserId = memJson.empNo;
  scwin.g_sEmpNo = memJson.epId;
  ica_stdYm.setValue(scwin.strStdDt);
  if (stdYm != "") {
    ica_stdYm.setValue(stdYm);
    scwin.f_retrieve();
    $c.gus.cfDisableObjects($p, [btn_save, btn_delete, btn_aprv]);
  }
};

//조회
scwin.f_retrieve = async function () {
  ds_acctRslt.removeAll();
  ds_acctPlan.removeAll();
  ds_acctRsltRemarks.removeAll();
  ds_acctReportApprv.removeAll();
  subject.setValue("외화 수입/지출 실적");
  subject2.setValue("국제물류 외화 수입/지출 계획");
  var chk = await $c.gus.cfValidate($p, [ica_stdYm]);
  if (!chk) {
    return false;
  }

  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
  // 		tr_retrieveAcctPlan.post();

  // 		tr_retrieve.post();
  // 		tr_retrieveAdditionalValue.post();
  // 		f_getMagam();
};
scwin.f_save = async function () {
  var vApprvStsCd = ds_acctReportApprv.getCellData(ds_acctReportApprv.getRowPosition(), "apprvStsCd");
  var chk = await $c.gus.cfValidate($p, [gr_acctRslt]);
  if (!chk) {
    return false;
  }
  if (ds_acctRslt.getRowCount() == 0) {
    $c.win.alert($p, "데이타가 없습니다.");
    return;
  }
  if (vApprvStsCd == null || vApprvStsCd == "") {
    ds_acctReportApprv.setCellData(0, "apprvStsCd", "01");
    vApprvStsCd = "01";
  }
  if (!(vApprvStsCd == "01" || vApprvStsCd == "03")) {
    $c.win.alert($p, "상태가 대기 또는 반려인 경우만 수정 가능합니다.");
    return false;
  }
  for (var i = 0; i < ds_acctRslt.getRowCount(); i++) {
    ds_acctRslt.modifyRowStatus(i, "C");
  }
  for (var i = 0; i < ds_acctPlan.getRowCount(); i++) {
    ds_acctPlan.modifyRowStatus(i, "C");
  }
  // 		if(ds_acctRslt.isUpdated==false&&ds_acctPlan.isUpdated==false&&ds_acctRsltRemarks.isUpdated==false){
  //       		alert("변경된 사항이 없습니다.");
  //       		return;
  //     	}

  // 		if ( ds_acctRsltRemarks.getRowCount() <= 0) {	ds_acctRsltRemarks.AddRow();	}
  // 		ds_acctRsltRemarks.NameValue(1,"stdYm") = ds_acctRslt.NameValue(1,"stdYm");

  // 		if ( ds_acctReportApprv.getRowCount() <= 0) 
  // 		{
  // 			ds_acctReportApprv.AddRow();
  // 			ds_acctReportApprv.NameValue(1,"apprvStsCd") = "01";
  // 		}
  // 		ds_acctReportApprv.NameValue(1,"stdYm") = ds_acctPlan.NameValue(1,"stdYm");
  // 		ds_acctReportApprv.NameValue(1,"appNo") = "acctReport" + ds_acctPlan.NameValue(1,"stdYm");

  // 		for(var i=0; i<=ds_acctPlan.getRowCount(); i++){
  // 			var vStdDt = ds_acctPlan.NameValue(i,"stdDt").substring(0,6);

  // 			if(vStdDt != ica_stdYm.text){
  // 				alert( i + "행의 날짜는 기준년월의 월과 같아야 합니다.");
  // 				return;
  // 			}

  // 		}

  //tr_save.post(); 
  $c.sbm.execute($p, sbm_save);
};
scwin.f_delete = function () {
  var vApprvStsCd = ds_acctReportApprv.getCellData(ds_acctReportApprv.getRowPosition(), "apprvStsCd");
  if (!(vApprvStsCd == "01" || vApprvStsCd == "03")) {
    $c.win.alert($p, "상태가 대기 또는 반려인 경우만 수정 가능합니다.");
    return false;
  }
  for (var i = 0; i < ds_acctRslt.getRowCount(); i++) {
    ds_acctRslt.deleteRow(i);
  }
  for (var i = 0; i < ds_acctPlan.getRowCount(); i++) {
    ds_acctPlan.deleteRow(i);
  }
  ds_acctRsltRemarks.deleteRow(0);
  ds_acctReportApprv.deleteRow(0);
  //tr_save.post();
  $c.sbm.execute($p, sbm_save);
};
scwin.addComma = function (number) {
  // null, undefined, 빈 문자열 등은 0으로 처리
  if (number == null || number === '' || isNaN(number)) {
    number = 0;
  }
  // 숫자로 변환
  number = Number(number);
  // locale을 지정해 콤마 표시
  return number.toLocaleString('ko-KR');
};

//-------------------------------------------------------------------------
// 전자결재요청
//-------------------------------------------------------------------------
scwin.f_aprv = async function () {
  // 		var vApprvStsCd = ds_logisticsCustomer.NameValue(ds_logisticsCustomer.Rowposition,"apprvStsCd");
  var vApprvStsCd = ds_acctReportApprv.getCellData(ds_acctReportApprv.getRowPosition(), "apprvStsCd");
  if (!(vApprvStsCd == "01" || vApprvStsCd == "03")) {
    $c.win.alert($p, "상태가 대기 또는 반려인 경우만 수정 가능합니다.");
    return false;
  }

  //    		var vClntNm = ds_logisticsCustomer.NameValue(ds_logisticsCustomer.Rowposition,"clntNm");
  //    		var vDrawUserNm = ds_logisticsCustomer.NameValue(ds_logisticsCustomer.Rowposition,"drawUserNm");
  //    		if(g_sUserId != ds_logisticsCustomer.NameValue(ds_logisticsCustomer.Rowposition,"drawUserId")) {
  //    			alert("거래처[" + vClntNm + "] 의 결재는 등록자[" + vDrawUserNm + "] 만 가능 합니다.");
  //    			return;
  //    		}

  var chk = await $c.win.confirm($p, "전자결재 요청하시겠습니까?");
  if (!chk) {
    return;
  }
  var ym = ica_stdYm.getValue();
  var year = parseInt(ym.substring(0, 4), 10);
  var month = parseInt(ym.substring(4, 6), 10) < 10 ? '0' + parseInt(ym.substring(4, 6), 10) : '' + parseInt(ym.substring(4, 6), 10);
  var preMonth = parseInt(ym.substring(4, 6), 10) - 1;
  var prevMonth = preMonth < 10 ? '0' + preMonth : '' + preMonth;
  var yearMonth = year + month;
  var yearPreMonth = year + prevMonth;

  //결재요청내역 START>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  var vReqApprvDocKndCd = "042"; // 결재문서종류 -- 신규거래처개설 신청(공통코드 ZZ022)
  var vReqUserId = scwin.g_sUserId; // 결재요청자 ID
  var vEpUsrId = scwin.g_sEmpNo; // EP사용자 ID
  var vReqApprvTitle = year + "년 " + month + "월 외화 수입지출 계획"; //결재제목
  var toDay = new Date().format("YYYYMMDD");

  //         var vAddr = "(" + ds_logisticsCustomer.NameValue(ds_logisticsCustomer.RowPosition, "zip") + ")"  + ds_logisticsCustomer.NameValue(ds_logisticsCustomer.RowPosition, "addr1") + " " + ds_logisticsCustomer.NameValue(ds_logisticsCustomer.RowPosition, "addr2");

  var vApprvDtlInfo = "<table cellpadding='0' cellspacing='0' border='0' width='900'>";
  vApprvDtlInfo += "  <tr><td height='5px'></td></tr>";
  vApprvDtlInfo += "  <tr valign='top' align='left'>";
  vApprvDtlInfo += "    <td style='font-size:15px;'>";
  vApprvDtlInfo += "      <b>1. " + year + "년 " + prevMonth + "월 국제물류 외화 수입/지출 실적</b><br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- 수입 : US$ " + scwin.addComma(ds_acctRslt.getCellData(1, "exSubAmt")) + "<br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- 지출 : US$ " + scwin.addComma(ds_acctRslt.getCellData(2, "exSubAmt")) + "<br><br>";
  vApprvDtlInfo += "      <span style='color:#555;'>※ 계획比 주요 증감내역</span><br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- " + summary1.innerText + ds_acctRsltRemarks.getCellData(0, "samtRemarks") + "<br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;-  " + summary2.innerText + ds_acctRsltRemarks.getCellData(0, "pamtRemarks") + "<br><br>";
  vApprvDtlInfo += "      <b>2. " + subject2.innerText + "</b>";
  vApprvDtlInfo += "      <div style='text-align:right; font-size:12px;'>(단위 : US$)</div>";
  vApprvDtlInfo += "      <table border='1' cellpadding='3' cellspacing='0' width='900' style='border-collapse:collapse; margin-top:5px;'>";
  vApprvDtlInfo += "        <tr align='center' bgcolor='#f5f5f5' style='font-weight:bold;'>";
  vApprvDtlInfo += "          <td width='225' >기초잔액</td>";
  vApprvDtlInfo += "          <td width='225' >수입</td>";
  vApprvDtlInfo += "          <td width='225' >지출</td>";
  vApprvDtlInfo += "          <td width='225' >잔액추정</td>";
  vApprvDtlInfo += "        </tr>";
  vApprvDtlInfo += "        <tr align='center'>";
  vApprvDtlInfo += "          <td>" + scwin.addComma(ds_acctPlan.getCellData(0, "ramt")) + "</td>";
  vApprvDtlInfo += "          <td>" + scwin.addComma(ds_acctPlan.getCellData(0, "samt")) + "</td>";
  vApprvDtlInfo += "          <td>" + scwin.addComma(ds_acctPlan.getCellData(0, "pamt")) + "</td>";
  vApprvDtlInfo += "          <td>" + scwin.addComma(ds_acctPlan.getCellData(0, "eamt")) + "</td>";
  vApprvDtlInfo += "        </tr>";
  vApprvDtlInfo += "      </table><br>";
  vApprvDtlInfo += "      <b>3. 상세내역(링크연결)</b><br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- <a href='https://debis.dongwon.com/il/acc/exchbudgetplan/ac_120_01_06b.jsp?sabun=" + vReqUserId + "&stdYm=" + yearMonth + "'>" + year + "." + prevMonth + "월 외화 수입지출 실적(요약)</a><br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- <a href='https://debis.dongwon.com/il/acc/exchbudgetplan/ac_120_01_04b.jsp?sabun=" + vReqUserId + "&closeYm=" + yearMonth + "&stdYm=" + yearPreMonth + "'>" + year + "." + prevMonth + "월 외화 수입지출 실적(상세)</a><br>";
  vApprvDtlInfo += "      &nbsp;&nbsp;- <a href='https://debis.dongwon.com/il/acc/exchbudgetplan/ac_120_01_03b.jsp?sabun=" + vReqUserId + "&stdYm=" + yearMonth + "'>" + year + "." + month + "월 외화 수입지출 계획(상세)</a><br>";
  vApprvDtlInfo += "    </td>";
  vApprvDtlInfo += "  </tr>";
  vApprvDtlInfo += "</table>";
  const params = {
    apprvDocKndCd: vReqApprvDocKndCd,
    //결재문서종류
    reqUserId: vReqUserId,
    //결재요청자
    epUserId: vEpUsrId,
    //EP사용자
    apprvTitle: vReqApprvTitle,
    //결재제목
    apprvDtlInfo: vApprvDtlInfo,
    //결재문서양식
    appNo: "acctReport" + ym
  };

  //데이터셋에 정보설정
  dma_frmReqApprove.setJSON(params);
  let url = "/il.acc.exchbudgetplan.AcctPlanApproveCMD.do";
  let targetName = "aprvPopup"; // 고정 이름(재사용)

  let data = dma_frmReqApprove.getJSON() || {};
  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = targetName;

  // 팝업 차단 회피: 사용자 클릭 이벤트 안에서 실행되어야 함
  const win = window.open("", targetName); // about:blank 대신 빈 문자열로 재사용
  // 팝업이 막히면 win이 null일 수 있음
  if (!win) {
    // 여기서 그냥 location 이동하거나 alert 처리 등
    console.warn("Popup blocked");
  }
  Object.keys(data).forEach(key => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = (data[key] ?? "").toString();
    form.appendChild(input);
  });
  document.body.appendChild(form);
  console.log("POST keys:", Object.keys(data));
  console.log("epUserId:", data.epUserId);
  console.log("apprvDtlInfo length:", (data.apprvDtlInfo || "").length);
  console.log("apprvTitle:", data.apprvTitle);
  form.submit();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_delete();
};
scwin.btn_aprv_onclick = function (e) {
  scwin.f_aprv();
};
scwin.sbm_retrieve_submitdone = function (e) {
  var ym = ica_stdYm.getValue();
  var year = parseInt(ym.substring(0, 4), 10);
  var month = parseInt(ym.substring(4, 6), 10);

  // 전달 계산
  if (month === 1) {
    year -= 1;
    month = 12;
  } else {
    month -= 1;
  }
  // 두 자리 월로 포맷팅
  var prevMonth = month < 10 ? '0' + month : '' + month;
  if (ds_acctRsltRemarks.getRowCount() < 1) {
    ds_acctRsltRemarks.insertRow();
    ds_acctRsltRemarks.setCellData(0, "stdYm", ym.substring(0, 4) + prevMonth);
  }

  //if ( ds_acctReportApprv.CountRow <= 0) {
  //ds_acctReportApprv.AddRow();
  // 	ds_acctReportApprv.NameValue(1,"apprvStsCd") = "01";
  ds_acctReportApprv.setCellData(0, "stdYm", ym);
  ds_acctReportApprv.setCellData(0, "appNo", "acctReport" + ym);

  //}
};
scwin.sbm_save_submitdone = function (e) {
  console.log(e.responseJSON.resultDataSet);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_retrieve();
  }
};
scwin.ds_acctRslt_ondataload = function () {
  var ym = ica_stdYm.getValue();
  var year = parseInt(ym.substring(0, 4), 10);
  var month = parseInt(ym.substring(4, 6), 10);

  // 전달 계산
  if (month === 1) {
    year -= 1;
    month = 12;
  } else {
    month -= 1;
  }
  // 두 자리 월로 포맷팅
  var prevMonth = month < 10 ? '0' + month : '' + month;
  subject.setValue(year + "년 " + prevMonth + "월 외화 수입/지출 실적");
  var rowcnt = ds_acctRslt.getRowCount();
  if (rowcnt == 0) {} else {
    //cf_ShowTotalRows(totalRows, rowcnt);
    spa_cnt1.setValue(rowcnt);
    var diffAmt = ds_acctRslt.getCellData(1, "diffAmt");
    var manUnit = Math.floor(Math.abs(diffAmt) / 10000);
    if (diffAmt > 0) {
      summary1.setValue("수입(증가) " + manUnit + "만 : ");
    } else if (diffAmt < 0) {
      summary1.setValue("수입(감소) " + manUnit + "만 : ");
    } else {
      summary1.setValue("수입 " + manUnit + "만 : ");
    }
    diffAmt = ds_acctRslt.getCellData(2, "diffAmt");
    manUnit = Math.floor(Math.abs(diffAmt) / 10000);
    if (diffAmt > 0) {
      summary2.setValue("지출(증가) " + manUnit + "만 : ");
    } else if (diffAmt < 0) {
      summary2.setValue("지출(감소) " + manUnit + "만 : ");
    } else {
      summary2.setValue("지출 " + manUnit + "만 : ");
    }
  }
};
scwin.ds_acctPlan_ondataload = function () {
  var rowcnt = ds_acctPlan.getRowCount();
  if (rowcnt == 0) {} else {
    //cf_ShowTotalRows(totalRows2, rowcnt);
    spa_cnt2.setValue(rowcnt);
    subject2.setValue(ica_stdYm.getValue().substring(0, 4) + "년 " + ica_stdYm.getValue().substring(4, 6) + "월 국제물류 외화 수입/지출 계획");
  }
};
scwin.ds_acctRsltRemarks_ondataload = function () {
  ds_acctRsltRemarks.setRowPosition(0);
};
scwin.ds_acctReportApprv_ondataload = function () {
  ds_acctReportApprv.setRowPosition(0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_stdYm',pickerType:'dynamic',placeholderLocaleRef:'yearMonth',style:'',mandatory:'true',ref:'data:dma_search.stdYm',title:'기준년월'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'subject',label:'외화 수입/지출 실적',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctRslt',style:'',autoFit:'allColumn',id:'gr_acctRslt',visibleRowNum:'4',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'기준년월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'기초잔액',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column13',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column11',value:'계획(A)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column9',value:'실적(B)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column3',value:'국제실적(지사 제외)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column5',value:'차이(B-A)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stdYm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'additionalKndCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stdRamt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'additionalKndNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'planAmt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'rsltsAmt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'exSubAmt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'diffAmt',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_cnt1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : US$)',style:''}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'w2:textbox',A:{class:'info-ico',escape:'false',id:'',label:'계획比 주요 증감내역',style:''}},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'summary1',label:'수입',class:''}},{T:1,N:'xf:input',A:{style:'width:650px;',id:'ed_samtRemarks',placeholder:'',class:'',objType:'data',ref:'data:ds_acctRsltRemarks.samtRemarks'}}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'summary2',label:'지출',class:''}},{T:1,N:'xf:input',A:{style:'width:650px;',id:'ed_pamtRemarks',placeholder:'',class:'',objType:'data',ref:'data:ds_acctRsltRemarks.pamtRemarks'}}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'subject2',label:'국제물류 외화 수입/지출 계획',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_acctPlan',style:'',autoFit:'allColumn',id:'gr_acctPlan',visibleRowNum:'3',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column1',value:'기준년월',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'기초잔액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column15',value:'수입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column13',value:'지출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column11',value:'잔액추정',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'stdYm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'ramt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'samt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'pamt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'eamt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'.2',displayFormat:'#,##0.00'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column29',displayMode:'label',expression:'sum(\'ramt\')',dataType:'float',maxLength:'.2',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column28',displayMode:'label',expression:'sum(\'samt\')',dataType:'float',maxLength:'.2',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column27',displayMode:'label',expression:'sum(\'pamt\')',dataType:'float',maxLength:'.2',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column26',displayMode:'label',expression:'sum(\'eamt\')',dataType:'float',maxLength:'.2',displayFormat:'#,###',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_cnt2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : US$)',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'상신일자',class:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_apprvRegDtm',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',ref:'data:ds_acctReportApprv.apprvRegDtm',readOnly:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인상태',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_apprvStsNm',placeholder:'',style:'width:100px;',objType:'data',maxlength:'100',ref:'data:ds_acctReportApprv.apprvStsNm',readOnly:'true'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상신',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_apprvRegNm',placeholder:'',style:'width:100px;',objType:'data',maxlength:'100',ref:'data:ds_acctReportApprv.apprvRegNm',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_aprv',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_aprv_onclick',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상신'}]}]}]}]}]}]}]}]}]})