/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_04_03p.xml 28015 5d3198fa0d404369a01d3ab3dda681081bd76d59cd8448dac9c94456116e1bd0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipSeq',name:'전푠순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipcontents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drcrClsCd',name:'차대구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNo',name:'관리사원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntEmpNm',name:'관리사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNo',name:'관리거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntClntNm',name:'관리거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntDt',name:'관리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermStDt',name:'관리기간시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntTermEndDt',name:'관리기간종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNo',name:'관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNm',name:'관리비항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opntAcctCd',name:'상대계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizdivCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'termMgntYn',name:'기간관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntMgntYn',name:'거래처관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empMgntYn',name:'사원관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtMgntYn',name:'일자관리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mgntNoCd',name:'관리번호코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'구매요청일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqPayMthdCd',name:'요청지급방법코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftDdCntCd',name:'어음일수코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payProcYn',name:'지급처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAcctCd',name:'지급계좌코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidClsCd',name:'증빙구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatDeclarAcctDeptCd',name:'부가세관리귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'taxinvcDt',name:'세금계산서 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'회사구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductClsCd',name:'공제구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'비용구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recvProcYn',name:'채권처리여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refNo',name:'PALLETIZING 번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_slipcontents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_slipcontents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.gnrlaccount.slipmgnt.UpdateSlipDetailContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_slipcontents","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_04_03p
// 이름     : 전표상세내역조회
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 비고     : 
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            회계/재무회계/일반회계/전표관리/전표조회수정삭제전표내역조회(fi_201_04_02p)에서 호출
//            회계/재무회계/일반회계/전표관리/경비전표입력전표내역조회(fi_201_04_06p)에서 호출
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호
scwin.isSubCompany = "1"; // 자회사여부

scwin.vCoClsCd = ""; // 회사종류코드

scwin.slipNo = ""; // 전표번호
scwin.slipSeq = ""; // 전표순번
//scwin.valueObject         ;   // 아규먼트

scwin.old_summary = ""; // 최초적요 (적요변경여부)

scwin.onpageload = function () {
  console.log("====== onpageload ==================");
  //  var valueObject = window.dialogArguments;
  //  var vCoCd =cfIsNull(<%=login.getCoCd()%>)?'':'<%=login.getCoCd()%>'; // 소속 자회사  
  //  var vCoClsCd =cfIsNull(<%=login.getCoClsCd()%>)?'': '<%=login.getCoClsCd()%>'  ;//회계_회사구분('CO035' : 0:동부 EXPRESS)

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  scwin.vCoClsCd = coClsCd;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   userId : " + scwin.userId + "   privAdmin : " + scwin.privAdmin);
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  scwin.slipNo = $c.data.getParameter($p, "slipNo") == null ? "" : $c.data.getParameter($p, "slipNo");
  scwin.slipSeq = $c.data.getParameter($p, "slipSeq") == null ? "" : $c.data.getParameter($p, "slipSeq");
  console.log("  slipNo : " + scwin.slipNo + "   slipSeq : " + scwin.slipSeq);
  const codeOptions = [{
    grpCd: "FI002",
    compID: "lc_drcrClsCd"
  } // 차대구분
  , {
    grpCd: "ZZ006",
    compID: "lc_crcCd"
  } // 통화코드
  //         { grpCd : "OP533", compID : "acb_autoComplete2" }, // 오토컴플리트
  //        { grpCd : "A1041", compID : "gr_gridView2:cdNm" } // 그리드
  ];
  console.log("  codeOptions : " + JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_onLoad();
  }, {
    "delay": 50
  });
};
scwin.f_onLoad = async function () {
  // 수정체크 (수정체크 - 버튼 히든, 적요 빨강)
  scwin.f_ModCheck();

  //        scwin.f_Header();
  scwin.f_Retrieve();
  $c.gus.cfDisableKeyData($p); // objType="data" 인 건이 비활성화

  //cfDisableBtn([bSave]);   // objType="bSave" 
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
};

//-------------------------------------------------------------------------
// 수정체크 (수정체크 - 버튼 히든, 적요 빨강)
//-------------------------------------------------------------------------
scwin.f_ModCheck = function () {
  console.log("=== f_ModCheck (수정체크)");

  // 회계처리가 '처리'되었거나 전표종류가 수정불가일경우나 삭제된 전표일경우 체크
  // if(scwin.valueObject.postYn    == "1" ||               // 회계처리여부 (1: 회계처리됨, 0: 회계처리안됨)
  //    scwin.valueObject.modPsblYn == "0" ||	             // 수정가능여부 (1: 수정가능, 0: 수정불가능)
  //    // 20141008 세무조사관련 전표상세 팝업 수정
  //    scwin.valueObject.delYn     == "1" ) {              // 삭제여부 (1: 삭제, 0: 미삭제)

  console.log(" postYn [" + $c.data.getParameter($p, "postYn") + "]  modPsblYn [" + $c.data.getParameter($p, "modPsblYn") + "]  delYn [" + $c.data.getParameter($p, "delYn") + "]");
  if ($c.data.getParameter($p, "postYn") == "1" ||
  // 회계처리여부 (1: 회계처리됨, 0: 회계처리안됨)
  $c.data.getParameter($p, "modPsblYn") == "0" ||
  // 수정가능여부 (1: 수정가능, 0: 수정불가능)
  $c.data.getParameter($p, "delYn") == "1") {
    // 삭제여부 (1: 삭제, 0: 미삭제)

    console.log("=== 회계처리 || 수정가능 || 삭제  이면 (버튼 히든)");

    //    btUpdate.style.visibility = "hidden";
    //    btSave.style.visibility = "hidden"; 

    btn_btUpdate.hide();
    btn_btSave.hide();
    ed_summary.setMandatory(true);
    lb_summary.addClass(""); // 적요 필수 아님
  } else {
    console.log("=== (버튼 오픈)");

    // btUpdate.style.visibility = "visible";
    // btSave.style.visibility = "visible";

    btn_btUpdate.show("");
    btn_btSave.show("");
    ed_summary.setMandatory(true);
    lb_summary.addClass("req"); // 적요 필수 *

    //txt_summary.insertAdjacentHTML("afterEnd", "<font color=red><b>*</b></font>");
    //    ed_summary.setStyle("color", "#FF0000");  // red
    //    ed_summary.setStyle("font-weight", "bold");
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  console.log("====== f_Retrieve ==================");
  if (scwin.slipNo == "" || scwin.slipNo == null) {
    await $c.win.alert($p, "전표번호는 필수입니다.");
    return;
  }
  ds_search.set("slipNo", scwin.slipNo);
  ds_search.set("slipSeq", scwin.slipSeq);
  var dcJSON = ds_search.getJSON();
  // console.log(" ==== ds_search : "+ JSON.stringify(dcJSON));

  //    tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipCMD.do";
  //    tr_search.post();

  //     alert(condition);
  // ds_slipcopy.DataID = "/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipCMD.do?slipNo="+ed_slipNo.text.trim();
  // ds_slipcopy.Reset();

  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone ==================");

  // 트랜잭션 오류 처리
  //language=JavaScript for=ds_slipcontents event=OnLoadError()>
  //	cfShowError(ds_slipcontents);

  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // ds 로 변환
  // 포지션을 지정해줘야 확인번호에 값이 적용됨
  var rowCnt = ds_slipcontents.getTotalRow();
  var rowPos = 0;
  ds_slipcontents.setRowPosition(rowPos);

  // var dcJSON = ds_slipcontents.getAllArray();
  // console.log(" ==== ds_slipcontents : "+ JSON.stringify(dcJSON));

  //language=JavaScript for=ds_slipcontents event=OnLoadCompleted(rowCnt)>
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    //scwin.old_summary = dma_slipcontents.get("summary");
    scwin.old_summary = ds_slipcontents.getCellData(rowPos, "summary");
  }
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  //cfEnableObj(txt_summary, true); 
  $c.gus.cfEnableObj($p, ed_summary, true);

  // 2010.04.21 안병연대리 요청사항으로 거래처 편집 못하게수정
  //cfEnableObj(ed_mgntClntNo, true); 
  //cfEnableObj(txt_mgntClntNm, true); 

  //    $c.gus.cfDisableBtn([btn_btUpdate]);
  $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bUpdate')]);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장버튼 클릭
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //    console.log(" getModifiedJSON ["+ JSON.stringify(dma_slipcontents.getModifiedJSON()) +"]");
  console.log("=== f_Save");
  console.log(" ds_slipcontents.getModifiedIndex()  : " + ds_slipcontents.getModifiedIndex());
  //if(ds_slipcontents.isUpdated == false) {

  if (ds_slipcontents.getModifiedIndex().length == 0) {
    //if ( scwin.old_summary == dma_slipcontents.get("summary") ) {  // dma 사용시
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  // 체크
  // if ( !scwin.f_Validation() )
  let rtn1 = await scwin.f_Validation();
  if (!rtn1) {
    return;
  }
  let rtn2 = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (rtn2) {
    //		tr_save.Action = "/ac.fi.gnrlaccount.slipmgnt.UpdateSlipDetailContentsCMD.do";
    //		tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  console.log("▷ sbm_save_submitdone ==================");

  // <!-- 저장 TR -->         
  // language=JavaScript for=tr_save event=OnFail()>
  //     cfShowError(tr_save);
  //     cfDisableKeyData();
  // 	cfDisableBtn([bSave]);
  // language=JavaScript for=tr_save event=OnSuccess()>
  //     cfAlertMsg(MSG_CM_INF_001);
  //     f_Header();
  //     f_Retrieve() ;
  //     cfDisableKeyData();
  // 	cfDisableBtn([bSave]);

  if (e.responseJSON.resultDataSet[0].Code != 0) {
    //cfShowError(tr_save);   // 공통에서 뿌림
    $c.gus.cfDisableKeyData($p);
    //$c.gus.cfDisableBtnOnly([bnt_btSave]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  } else {
    console.log("   --- tr_save - OnSuccess ");
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    //f_Header();
    scwin.f_Retrieve();
    $c.gus.cfDisableKeyData($p);
    //$c.gus.cfDisableBtnOnly([btn_btSave]);
    $c.gus.cfDisableBtn($p, [$c.gus.getctrlBtn($p, 'bSave')]);
  }
};

//-------------------------------------------------------------------------
// 체크
//-------------------------------------------------------------------------
scwin.f_Validation = async function () {
  console.log("=== f_Validation");

  // if ( !$c.gus.cfValidate([ed_summary]) ) {
  let rtn = await $c.gus.cfValidate($p, [ed_summary]);
  if (!rtn) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차대구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'form-control w100',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_drcrClsCd',style:'',submenuSize:'auto',objType:'data',validExp:'차대구분:yes',disabled:'false',ref:'data:ds_slipcontents.drcrClsCd',title:'차대구분'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계정',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_acctCd',placeholder:'',style:'',objType:'data',validExp:'계정코드:yes:format=0000000',allowChar:'0-9',maxlength:'7',disabled:'false',ref:'data:ds_slipcontents.acctCd',title:'계정'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_acctNm',placeholder:'',style:'',disabled:'false',ref:'data:ds_slipcontents.acctNm',objType:'data',title:'계정명'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'통화코드/환율',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',style:'',allOption:'',id:'lc_crcCd',class:'form-control w400',direction:'auto',objType:'data',validExp:'통화코드:yes',disabled:'false',ref:'data:ds_slipcontents.crcCd',title:'통화코드'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:input',A:{style:'',id:'ed_exchRt',placeholder:'',class:'form-control tar',objType:'data',disabled:'false',ref:'data:ds_slipcontents.exchRt',displayFormat:' #,###.#0',dataType:'number',title:'환율'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'외화금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control col5 tar',id:'ed_amtFcrc',placeholder:'',style:'',objType:'data',disabled:'false',ref:'data:ds_slipcontents.amtFcrc',displayFormat:'#,###.#0',dataType:'number',title:'외화금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',placeholder:'',style:'',objType:'data',validExp:'금액:yes:notAllowed=0&maxLength=13',maxlength:'13',disabled:'false',ref:'data:ds_slipcontents.amt',displayFormat:'#,##0',title:'금액',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리참조번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_mgntNm',placeholder:'',style:'',objType:'data',disabled:'false',ref:'data:ds_slipcontents.mgntNm',title:'관리번호명'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_mgntNo',placeholder:'',style:'',objType:'data',validExp:'관리번호:no:maxLength=20',maxlength:'20',disabled:'false',ref:'data:ds_slipcontents.mgntNo',title:'관리번호'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_refNo',placeholder:'',style:'',objType:'data',validExp:'참조번호:no:maxLength=20',maxlength:'20',disabled:'false',ref:'data:ds_slipcontents.refNo',title:'참조번호'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_acctDeptCd',placeholder:'',class:'form-control w100',objType:'data',validExp:'귀속부서:yes:format=00000',allowChar:'0-9',maxlength:'5',disabled:'false',ref:'data:ds_slipcontents.acctDeptCd',title:'귀속부서'}},{T:1,N:'xf:input',A:{style:'',id:'ed_acctDeptNm',placeholder:'',class:'form-control ',objType:'data',disabled:'false',ref:'data:ds_slipcontents.acctDeptNm',title:'귀속부서명'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_mgntClntNo',placeholder:'',style:'',objType:'data',validExp:'거래처:no:format=000000',allowChar:'0-9',maxlength:'6',disabled:'false',ref:'data:ds_slipcontents.mgntClntNo',title:'거래처'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'ed_mgntClntNm',placeholder:'',style:'',objType:'data',disabled:'false',ref:'data:ds_slipcontents.mgntClntNm',title:'거래처명'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_mgntDt',placeholder:'',style:'',objType:'data',validExp:'관리일자:no:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',disabled:'false',ref:'data:ds_slipcontents.mgntDt',dataType:'date',title:'관리일자'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'관리기간',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'ed_mgntTermStDt',placeholder:'',class:'form-control w100',objType:'data',validExp:'관리기간:no:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',disabled:'false',ref:'data:ds_slipcontents.mgntTermStDt',dataType:'date',title:'관리기간From'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'~',class:''}},{T:1,N:'xf:input',A:{style:'',id:'ed_mgntTermEndDt',placeholder:'',class:'form-control w100',objType:'data',validExp:'관리기간:no:date=YYYYMMDD',displayFormat:'yyyy/MM/dd',disabled:'false',ref:'data:ds_slipcontents.mgntTermEndDt',dataType:'date',title:'관리기간To\''}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사원번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control w100',id:'ed_mgntEmpNo',placeholder:'',style:'',objType:'data',validExp:'관리사번:no:format=000000',allowChar:'0-9',maxlength:'6',disabled:'false',ref:'data:ds_slipcontents.mgntEmpNo',title:'사원번호'}},{T:1,N:'xf:input',A:{class:'form-control ',id:'txt_mgntEmpNm',placeholder:'',style:'',objType:'data',disabled:'false',ref:'data:ds_slipcontents.mgntEmpNm',title:'사원번호명'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'lb_summary',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_summary',placeholder:'',style:'',objType:'data',validExp:'적요:yes:maxByteLength=100',maxlength:'100',disabled:'false',ref:'data:ds_slipcontents.summary',title:'적요'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_btUpdate',style:'',type:'button',objType:'bUpdate','ev:onclick':'scwin.f_Update',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_btSave',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})