/*amd /ui/ds/fs/bilg/fs_204_02_07b.xml 36329 20ead3f979cc2f9f037925a776fe984fe1e276e0e686d6aaf14bf9b5d1c833ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCertiNo',name:'BILL 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'거래명세서;일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'공급금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'세금계산서;번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표;번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_viewCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm',name:'수정일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modDtm2',name:'수정일시2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'모선코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selectcertiPatternCd',name:'선택유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selectMatch',name:'선택일치여부',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderEachSellingBillingConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_viewCond","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_ctrt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = "";
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = $c.date.addDate($p, scwin.vCurDate, -7);
//scwin.vQryStDt = $c.date.addDate(scwin.vCurDate, -10);
scwin.memJson = $c.data.getMemInfo($p);

/*
scwin.loUpperLobranCd = ""; // 점소
scwin.userClsCd = "";
scwin.userId = "";
scwin.userNm = "";
scwin.loginClntNo = ""; //거래처번호
scwin.loginClntNm = ""; //거래처명
scwin.lobranCd = "";// 점소명
scwin.reqLobranCd = ""; // 점소코드 
scwin.reqCy = ""; // CY코드 
scwin.reqCyNm = ""; //Cy명 

메뉴 : 물류/청구/청구실적관리/오더별 매출/청구 CHECK LIST
조회조건 ODR_DT '20251001'~'20251212', 20250901 ~ 20251001
        청구부서 : 6A1, 6A2, 6B2, 4G1, 4H3, 1G36
        오더번호 : LCE2506160016
*/

scwin.onpageload = function () {};

//var pgmId          = "fs_202_05_03b.jsp"; // 프로그램ID           

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //console.log('scwin.f_OnLoad ~');
  ica_ordStDtm.setValue(scwin.vQryStDt);
  ica_ordEndDtm.setValue(scwin.vCurDate);
  acb_PatternCd.setValue("DT");

  //공통코드 적용()
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_qryDtConKnd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  //console.log('scwin.onUdcCompleted ~');
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크
  if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd]))) return;
  if (acb_PatternCd.getValue() == "DT") {
    //if (! await $c.gus.cfValidate([oordDt])) return;
    if (!(await $c.gus.cfValidate($p, [ica_ordStDtm]))) return;
    if (!(await $c.gus.cfValidate($p, [ica_ordEndDtm]))) return;
  } else {
    //if (! await $c.gus.cfValidate([oodrNo])) return;
    if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) return;
  }

  /*
  	     var dsHeader = "odrNo:STRING"
  					   + ",modDtm:STRING"
  					   + ",modDtm2:STRING"
  					   + ",vsslCd:STRING"
  					   + ",portcnt:STRING"
  					   + ",bilgLodeptCd:STRING"
  					   + ",bilgClntNo:STRING"
  					   + ",odrKndCd:STRING"
  					   + ",lineCd:STRING"
  					   + ",regId:STRING"
  					   + ",selectcertiPatternCd:STRING"
  					   + ",selectMatch:STRING";
  		ds_viewCond.SetDataHeader(dsHeader);
  		ds_viewCond.AddRow();
  		
  
       	ds_viewCond.set("odrNo")   = ed_odrNo.value;	
     	 	ds_viewCond.set("modDtm") = ica_ordStDtm.getCellData();
     	 	ds_viewCond.set("modDtm2") = ica_ordEndDtm.getCellData();
     	 	ds_viewCond.set("vsslCd") = ed_vsslCd.value;
     	 	ds_viewCond.set("portcnt") = ed_portcnt.value;
     	 	ds_viewCond.set("bilgLodeptCd") = ed_bilgLodeptCd.getCellData();
     	 	ds_viewCond.set("bilgClntNo") = ed_bilgClntNo.getCellData();
     	 	ds_viewCond.set("odrKndCd") = acb_qryDtConKnd.getValue();
     	 	ds_viewCond.set("lineCd") = ed_lineCd.getCellData();
     	 	ds_viewCond.set("regId") = ed_modId.getCellData();
     	 	
     	 	ds_viewCond.set("selectcertiPatternCd") = acb_PatternCd.getValue();
     	 	ds_viewCond.set("selectMatch") = acb_selectMatch.getValue();
  		tr_retrieve.Action = "/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderEachSellingBillingConfirmationCMD.do";
     		tr_retrieve.Post();
  */

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  //var rtnList  = new Array();  // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      //청구부서코드팝업			
      pCode = ed_bilgLodeptCd.getValue().replace(/\s*$/, ''); // 청구부서코드
      pName = ed_bilgLodeptNm.getValue(); // 청구부서명

      udc_bilgLodeptCd.setSelectId('retrieveOpDeptCdInfo');
      //rtnList = cfCommonPopUp('retrieveOpDeptCdInfo'	// XML상의 SELECT ID	
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "청구부서코드,부서코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //청구부서코드          청구부서명
      //cfSetReturnValue(rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);

      break;
    case 2:
      //청구화주코드팝업			
      pCode = ed_bilgClntNo.getValue().replace(/\s*$/, ''); // 청구화주코드
      pName = ed_bilgClntNm.getValue(); // 청구화주명

      udc_bilgClntNo.setSelectId('retrieveClntInfo');
      //rtnList = cfCommonPopUp('retrieveClntInfo'	// XML상의 SELECT ID	
      rtnList = udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNoCallback, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "청구화주코드,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //청구화주코드          청구화주명
      //cfSetReturnValue(rtnList, ed_bilgClntNo, ed_bilgClntNm);
      break;
    case 3:
      //청구담당자코드팝업			
      pCode = ed_modId.getValue().replace(/\s*$/, ''); // 청구담당자코드
      pName = ed_modNm.getValue(); // 청구담당자명

      udc_modId.setSelectId('retrieveEmpInfo');
      //rtnList = cfCommonPopUp('retrieveEmpInfo'	// XML상의 SELECT ID	
      rtnList = udc_modId.cfCommonPopUp(scwin.udc_modIdCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "청구담당자,사변,사원명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //청구담당자코드          청구담당자명
      //cfSetReturnValue(rtnList, ed_modId, ed_modNm);
      break;
    case 4:
      // 라인코드팝업			
      pCode = ed_lineCd.getValue().replace(/\s*$/, ''); // 라인코드
      pName = ed_lineNm.getValue(); // 청구담당자명

      udc_lineCd.setSelectId('retrieveLineInfo');
      //	  			rtnList = fCommonPopUp('retrieveLineInfo'	// XML상의 SELECT ID	
      rtnList = udc_lineCd.cfCommonPopUp(scwin.udc_lineCdCallback // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "라인코드,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      //라인코드          라인명
      //cfSetReturnValue(rtnList, ed_lineCd, ed_lineNm);
      break;
    default:
      break;
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
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// BILL 생성정보 Clear
//-------------------------------------------------------------------------
scwin.f_ClearDetail = function () {
  //ds_ctrt.ClearData();
  //ds_viewCond.ClearData();

  ds_ctrt.setJSON([]);
  ds_viewCond.setEmptyValue();
  $c.gus.cfInitObjects($p, tb_Conditon, []);
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet = async function (pgmId) {
  //var vObjGrd;
  var sheetTitle;
  var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    //vObjGrd = "gr_ctrt";
    //sheetTitle = "오더별 매출/청구 CHECK LIST";			
    //var objGrd = eval(vObjGrd);
    //objGrd.RunExcelSheet(sheetTitle);

    var sheetTitle = "오더별 매출/청구 CHECK LIST";
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_ctrt, options, infoArr);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_ClearDetail();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_ctrt.getRowCount();
  tbx_totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  //ds_ctrt.sort('odrNo',0);
  /*
  							<g> name="오더 통합매출"
  								<c> id=odrNo     	 name=오더번호		    width=100  align=center	sumtext="합계" subsumtext="소계" suppress=5  </c>
  								<c> id=modDtm  		 name=오더일자     		    width=70   align=center	 suppress=4 mask="XXXX/XX/XX"</c>
  								<c> id=bilgClntNo  	 name="거래처코드"	    width=65   align=center	 suppress=3 </c>
  								<c> id=clntNm        name="거래처명"			width=100  align=left	 suppress=1 </c>
  								<c> id=bizDomNm      name="사업영역"			width=60   align=left	 suppress=2 </c>
  								<c> id=selpchItemNm  name="매출항목명"		width=100  align=left	 suppress=1 </c>
  								<c> id=sellAmt  	 name=매출액  	        	width=80   align=right   sumtext=@sum Decao=0 </c>
  							</g>
  
      var options = {};
      options.sortIndex = "odrNo modDtm bilgClntNo bizDomNm clntNm selpchItemNm";
      options.sortOrder = "1 1 1 1 1 1";
      ds_ctrt.multisort(options);
      */
  gr_ctrt.setFocusedCell(0, "clntNm", false);
};
scwin.sbm_retrieve_submiterror = function (e) {};

//event
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.value, 'F', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_modId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_modId, ed_modNm, 3);
};
scwin.udc_modId_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_modNm, ed_modId, 3, false);
};
scwin.udc_modId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_modId.getValue(), ed_modNm.getValue(), 'F', 'F');
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 4);
};
scwin.udc_lineCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 4, false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};

//callback
scwin.udc_bilgLodeptCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);
};
scwin.udc_bilgClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm);
};
scwin.udc_modIdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_modId, ed_modNm);
};
scwin.udc_lineCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm);
};
scwin.acb_PatternCd_onchange = function (info) {
  //console.log('scwin.acb_PatternCd_onchange1 ~');
  //console.log(info);

  if (info.newValue == "DT") {
    ed_odrNo.setMandatory(false);
    udc_ordStDtm.mandatoryFrom = true;
    udc_ordStDtm.mandatoryTo = true;
    udc_ordStDtm.show();
    ed_odrNo.hide();
  } else {
    ed_odrNo.setMandatory(true);
    udc_ordStDtm.mandatoryFrom = false;
    udc_ordStDtm.mandatoryTo = false;
    udc_ordStDtm.hide();
    ed_odrNo.show();
  }
  //$c.gus.cfRefreshMandSign();
  /*
       if(lc_PatternCd.BindColVal == "DT"){
  		txt_odrNo.mandatory    = 'false';
  		em_ordStDtm.mandatory  = 'true';
  		em_ordEndDtm.mandatory = 'true';
  		oordDt.style.display   = 'block';
  		oodrNo.style.display   = 'none';
  	} else {
  		txt_odrNo.mandatory    = 'true';
  		em_ordStDtm.mandatory  = 'false';
  		em_ordEndDtm.mandatory = 'false';
  
  		oordDt.style.display   = 'none';
  		oodrNo.style.display   = 'block';
  	}
  	
  	cfRefreshMandSign();
      */
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_Conditon',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'청구부서',style:'',id:'udc_bilgLodeptCd',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',btnId:'btn_bilgLodeptCd',mandatoryCode:'true',maxlengthCode:'6',UpperFlagCode:'1',selectID:'retrieveOpDeptCdInfo',refDataCollection:'ds_viewCond',code:'bilgLodeptCd',name:'bilgLodeptNm',validExpName:'청구부서',validExpCode:'청구부서',validTitle:'청구부서',objTypeCode:'Data',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',maxlengthName:'20',allowCharCode:'A-Za-z0-9',codeWidth:'50','ev:onviewchangeNameEvent':'scwin.udc_bilgLodeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'req w120',editType:'select',id:'acb_PatternCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_viewCond.selectcertiPatternCd','ev:onchange':'scwin.acb_PatternCd_onchange',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',ref:'data:ds_viewCond.odrNo',maxlength:'13',mandatory:'true',title:'오더번호'}},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ordStDtm',refDataMap:'ds_viewCond',refEdDt:'modDtm2',refStDt:'modDtm',style:'',edFromId:'ica_ordStDtm',edToId:'ica_ordEndDtm',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'오더일자',titleTo:'오더일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_qryDtConKnd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:ds_viewCond.odrKndCd',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_bilgClntNo',style:'',codeId:'ed_bilgClntNo',id:'udc_bilgClntNo',nameId:'ed_bilgClntNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',validExpCode:'청구서:yes',selectID:'retrieveClntInfo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'ds_viewCond',code:'bilgClntNo',name:'bilgClntNm',objTypeCode:'Data',validTitle:'청구처',codeWidth:'50','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'btn_modId',style:'',btnId:'btn_modId',codeId:'ed_modId',id:'udc_modId',nameId:'ed_modNm','ev:onblurCodeEvent':'scwin.udc_modId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_modId_onclickEvent',refDataCollection:'ds_viewCond',code:'regId',maxlengthCode:'6',objTypeCode:'Data',allowCharCode:'A-Za-z0-9',UpperFlagCode:'1',validTitle:'오더담당자',codeWidth:'50','ev:onviewchangeNameEvent':'scwin.udc_modId_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일치여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selectMatch',search:'start',style:'width:85px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_viewCond.selectMatch',chooseOptionLabel:'-전체-'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'MATCH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'불일치'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'NOT'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'Line',style:'',id:'udc_lineCd',codeId:'ed_lineCd',btnId:'btn_lineCd',nameId:'ed_lineNm','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',validTitle:'Line',refDataCollection:'ds_viewCond',code:'lineCd',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9',maxlengthCode:'6',objTypeCode:'Data','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vsslCd',placeholder:'',style:'width:85px;',ref:'data:ds_viewCond.vsslCd',objType:'key',maxlength:'4'}},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:85px;',ref:'data:ds_viewCond.portcnt',maxlength:'10',objType:'key'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_ctrt',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_ctrt',id:'gr_ctrt',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'오더 통합매출',width:'490',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'청구 내역',width:'420',colSpan:'6',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column58',value:'오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'거래처코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'사업영역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'매출항목명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'BILL 번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column51',value:'거래명세서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'거래명세서일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'공급금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'세금계산서번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'전표번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##',colMerge:'true',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',style:'',value:'',width:'100',colMerge:'true',upperColumn:'odrNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',upperColumn:'bilgClntNo'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left',colMerge:'true',upperColumn:'clntNm'},E:[{T:3,text:'>\n    							'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upperCertiNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'confirmDt',value:'',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'spplyAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'sellVatNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'odrNo',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'sellAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'sellAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',dataType:'number',expression:'sum(\'spplyAmt\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})