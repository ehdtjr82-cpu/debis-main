/*amd /ui/ds/fs/bilg/fs_202_06_10b.xml 71868 00770f2c495adb69aa4c0a0678dde22a0e3d34af194550bfd2952f3a3903e9f9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtFm',name:'거래명세서 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmDtTo',name:'거래명세서 종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtFm',name:'세금계산서 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyDtTo',name:'세금계산서 공급종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'printFg',name:'출력구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'certiAggregateFg',name:'거래명세서집계구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtFm',name:'전표일자 시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDtTo',name:'전표일자 종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_unityPrint',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_unityPrint_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'goods',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptNm',name:'수금귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'collMoneyAcctDeptCdNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'offsetVatNo',name:'상대세금 계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsNm',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidRglClsCd',name:'증빙정상구분코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_certiPrint',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'계산서금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'공급금액_외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'총합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDt',name:'공급일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaClsCd',name:'서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaPatternCd',name:'서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fmlaNm',name:'서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaClsCd',name:'상위서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperFmlaPatternCd',name:'상위서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaClsCd',name:'표기서식구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaPatternCd',name:'표기서식유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inscrpFmlaNm',name:'표기서식명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryClntNo',name:'0',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryConKnd',name:'조회구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtFm',name:'거래명세서 시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDtTo',name:'거래명세서 종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDtFm',name:'세금계산서 시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyDtTo',name:'세금계산서 공급종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'printFg',name:'출력구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiAggregateFg',name:'거래명세서집계구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiPatternCd',name:'거래명세서유형코드',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_certiPrintTarget',action:'/ds.fs.bilg.bilg.RetrieveCertiPrintTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_certiPrint","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_certiPrint","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_certiPrintTarget_submitdone','ev:submiterror':'scwin.sbm_certiPrintTarget_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_taxInvoicePrintTarget',action:'/ds.fs.bilg.bilg.RetrieveTaxInvoicePrintTargetCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_unityPrint","key":"OUT_DS1"},{"id":"ds_certiPrint","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_unityPrint","key":"OUT_DS1"},{"id":"ds_certiPrint","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_taxInvoicePrintTarget_submitdone','ev:submiterror':'scwin.sbm_taxInvoicePrintTarget_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/청구/세금계산서/세금계산서통합발행
//조회조건 청구부서 : 6A1 or 6C00, 청구처 : 100955, 세금계산서일자 : 20200101, 20201201

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.strFrDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.memJson = $c.data.getMemInfo($p);
scwin.sellVatNo = "";
scwin.pgmId = "fs_202_06_10b.jsp"; // 프로그램ID 
scwin.isTotPrint = false;
scwin.onpageload = function () {
  var params = $c.data.getParameter($p);
  console.log('onpageload~~');
  console.log(params);
  if (!$c.gus.cfIsNull($p, params.sellVatNo)) {
    scwin.sellVatNo = params.sellVatNo;
  }
};
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //parent.tabFrame.f_FoldMenu(true);

  acb_qryConKnd.setValue("03");
  ica_confirmDtFm.setValue(scwin.strFrDate);
  ica_confirmDtTo.setValue(scwin.strCurDate);
  ds_queryCondition.set("confirmDtFm", scwin.strFrDate);
  ds_queryCondition.set("confirmDtTo", scwin.strCurDate);
  ds_queryCondition.set("spplyDtFm", scwin.strFrDate);
  ds_queryCondition.set("spplyDtTo", scwin.strCurDate);
  ds_queryCondition.set("slipDtFm", scwin.strFrDate);
  ds_queryCondition.set("slipDtTo", scwin.strCurDate);
  acb_certiAggregateFg.setValue("03");
  ed_printPage.setValue("1");
  rd_printFg.setValue("03");
  console.log('scwin.f_OnLoad111~~');
  ed_bilgLodeptCd.focus();
  if (scwin.sellVatNo != "") {
    acb_qryConKnd.setValue("04");
    ed_certiNo.setValue(scwin.sellVatNo);
    ds_queryCondition.set("sellVatNo", scwin.sellVatNo);
    scwin.f_Retrieve();
  }
};

//UDC 정보가 처리 완료된 후 처리(TOBE scwin.onpageload밑에 정의)
scwin.onUdcCompleted = function () {
  //공통코드 적용
  const codeOptions = [
  //{ grpCd: "LO121", compID: "lc_cnd_wrkPlClsCd,lc_wrkPlClsCd",opt :{"range" : "1,01"}  },
  {
    grpCd: "FS500",
    compID: "acb_dcsnClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_OnLoad();
  gr_certiPrint.setColumnVisible('choice', false);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //청구부서코드팝업			
      //rtnList = udc_bilgLodeptCd.cfCommonPopUp('retrieveOpDeptCdInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null); 
      udc_bilgLodeptCd.setSelectId('retrieveOpDeptCdInfo');
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      //청구화주코드팝업			
      //rtnList = udc_bilgClntNo.cfCommonPopUp('retrieveClntInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
      udc_bilgClntNo.setSelectId('retrieveClntInfo');
      rtnList = udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      //청구담당자코드팝업			
      //rtnList = udc_modId.cfCommonPopUp('retrieveEmpInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
      udc_modId.setSelectId('retrieveEmpInfo');
      rtnList = udc_modId.cfCommonPopUp(scwin.udc_modIdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_bilgLodeptCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm); // 청구부서코드, 청구부서명
};
scwin.udc_bilgClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm); // 청구화주코드, 청구화주명
};
scwin.udc_modIdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_modId, ed_modNm); // 청구담당자코드, 청구담당자명
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
//  거래명세서 팝업
//-------------------------------------------------------------------------

scwin.f_CertiNoPopUp = async function () {
  /*
  	var style = "center:yes; dialogwidth:830px; dialogheight:550px; scroll:no; resizable:no; status:yes;";
  	var strPath = "fs_204_02_51p.jsp";	  		
   	var p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
  	var p_bilgLodeptNm = ed_bilgLodeptNm.getValue();	  	
  	var p_pgmId        = "";	  	
  var	arrParm	       = new Array(p_bilgLodeptCd,p_bilgLodeptNm,p_pgmId);  		
  	var	returnValue = window.showModalDialog(strPath, arrParm, style ) ;
    
  if ( returnValue != null) {
  ed_certiNo.setValue(returnValue);
  }
   */

  var p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
  let p_bilgLodeptNm = ed_bilgLodeptNm.getValue();
  let p_pgmId = "";
  let v_url = "/ui/ds/fs/bilg/fs_204_02_51p.xml";
  let opt = {
    id: "pupup",
    popupName: "거래명세서 팝업",
    modal: true,
    type: "browserPopup",
    //type: "pageFramePopup",
    width: 1200,
    height: 700,
    title: "거래명세서 팝업"
  };
  let data = new Array(p_bilgLodeptCd, p_bilgLodeptNm, p_pgmId);
  var returnValue = await $c.win.openPopup($p, v_url, opt, data);
  if (returnValue != null) {
    ed_certiNo.setValue(returnValue);
  }
};

//-------------------------------------------------------------------------
//  세금계산서 번호 팝업(개발범위 미포함)
//-------------------------------------------------------------------------
/*  
  	scwin.f_sellVatNoPopUp = async function (){
        var p_bilgLodeptCd = ed_bilgLodeptCd.getValue();
	  	let p_bilgLodeptNm = ed_bilgLodeptNm.getValue();	  	
	  	let p_pgmId        = scwin.pgmId
	  	let p_slipKndCd	   = "F01";
	  	let p_slipKndNm	   = "청구전표";

        let v_url = "fs_204_02_20p.xml";
        let opt = {
            id: "pupup",
            popupName: "청구전표",
            modal: true,
            //type: "browserPopup",
            type: "pageFramePopup",
            width: 500,
            height:550,
            title: "청구전표"
        };
        
        let data = new Array(p_bilgLodeptCd,p_bilgLodeptNm,p_pgmId,p_slipKndCd,p_slipKndNm);
        var	returnValue = await $c.win.openPopup(v_url, opt, data);
        if ( returnValue != null) {
			//ed_sellVatNo.setValue(returnValue);		
			ed_certiNo.setValue(returnValue);		
		}
	};
	*/

//-------------------------------------------------------------------------
// 조회 (먼저 서버에서 조회조건을 가져온다)
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  /*
  	if(acb_qryConKnd.getValue() == "01"){
      	if(!$c.gus.cfValidate([ed_bilgLodeptCd,ica_confirmDtFm,ica_confirmDtTo])){
      		return;
      	}
  	  	//조회시작일자가 더 클경우 체크
  	  	if (!$c.gus.cfIsAfterDate(ica_confirmDtFm.getValue(), ica_confirmDtTo.getValue())) {
   	       $c.gus.cfAlertMsg(MSG_CM_ERR_039);
   	       return;
      	}
  	} else if(acb_qryConKnd.getValue() == "02"){
      	if(!$c.gus.cfValidate([ed_bilgLodeptCd,ed_certiNo])){
      		return;
      	}
  	} else if(acb_qryConKnd.getValue() == "03"){
      	if(!$c.gus.cfValidate([ed_bilgLodeptCd,ica_spplyDtFm,ica_spplyDtTo])){
      		return;
      	}
  	  	//조회시작일자가 더 클경우 체크
  	  	if (!$c.gus.cfIsAfterDate(ica_spplyDtFm.getValue(), ica_spplyDtTo.getValue())) {
   	       $c.gus.cfAlertMsg(MSG_CM_ERR_039);
   	       return;
      	}				
  	} else if(acb_qryConKnd.getValue() == "05"){
      	if(!$c.gus.cfValidate([ed_bilgLodeptCd,ica_slipDtFm,ica_slipDtTo])){
      		return;
      	}	
  	  	//조회시작일자가 더 클경우 체크
  	  	if (!$c.gus.cfIsAfterDate(ica_slipDtFm.getValue(), ica_slipDtTo.getValue())) {
   	       $c.gus.cfAlertMsg(MSG_CM_ERR_039);
   	       return;
      	}				
  	}
  */

  //04 일때 체크안함.
  if (acb_qryConKnd.getValue() == "01" || acb_qryConKnd.getValue() == "03" || acb_qryConKnd.getValue() == "05") {
    if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ica_confirmDtFm, ica_confirmDtTo]))) {
      return;
    }
    //조회시작일자가 더 클경우 체크
    if (!$c.gus.cfIsAfterDate($p, ica_confirmDtFm.getValue(), ica_confirmDtTo.getValue())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  } else if (acb_qryConKnd.getValue() == "02") {
    if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_certiNo]))) {
      return;
    }
  }
  if (acb_qryConKnd.getValue() == "01") {
    ds_queryCondition.set("confirmDtFm", ica_confirmDtFm.getValue());
    ds_queryCondition.set("confirmDtTo", ica_confirmDtTo.getValue());
  } else if (acb_qryConKnd.getValue() == "02") {
    //ds_queryCondition.set("ed_certiNo",ed_certiNo);
  } else if (acb_qryConKnd.getValue() == "03") {
    ds_queryCondition.set("spplyDtFm", ica_confirmDtFm.getValue());
    ds_queryCondition.set("spplyDtTo", ica_confirmDtTo.getValue());
  } else if (acb_qryConKnd.getValue() == "04") {
    // ds_queryCondition.set("ed_sellVatNo",);
  } else if (acb_qryConKnd.getValue() == "05") {
    ds_queryCondition.set("slipDtFm", ica_confirmDtFm.getValue());
    ds_queryCondition.set("slipDtTo", ica_confirmDtTo.getValue());
  }
  ds_queryCondition.set("certiNo", ed_certiNo.getValue());
  ds_queryCondition.set("sellVatNo", ed_certiNo.getValue());
  ds_queryCondition.set("printFg", rd_printFg.getValue());

  /*
      ds_queryCondition.set("confirmDtFm",ica_confirmDtFm.getValue());
      ds_queryCondition.set("confirmDtTo",ica_confirmDtTo.getValue());
      ds_queryCondition.set("spplyDtFm",ica_confirmDtFm.getValue());
      ds_queryCondition.set("spplyDtTo",ica_confirmDtTo.getValue());
      ds_queryCondition.set("slipDtFm",ica_confirmDtFm.getValue());
      ds_queryCondition.set("slipDtTo",ica_confirmDtTo.getValue());
      
  */
  //상세화면 데이타 Clear
  //ds_unityPrint.ClearData();
  //ds_certiPrint.ClearData();

  ds_unityPrint.setJSON([]);
  ds_certiPrint.setJSON([]);
  if (acb_qryConKnd.getValue() == "01" || acb_qryConKnd.getValue() == "02") {
    $c.sbm.execute($p, sbm_certiPrintTarget);
  } else {
    $c.sbm.execute($p, sbm_taxInvoicePrintTarget);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (조건에 따라 출력물을 분기한다.)
//-------------------------------------------------------------------------
scwin.f_Print = function () {
  if (rd_printFg.getValue() == "01") {
    //f_vatPrint();
  } else if (rd_printFg.getValue() == "02") {
    scwin.f_certiPrint();
  } else if (rd_printFg.getValue() == "03") {
    scwin.f_totalPrint();
  }
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 인쇄 (지로)
//-------------------------------------------------------------------------
scwin.f_jiroPrint = async function () {
  var param = "";
  var printCnt = 0;
  for (i = 0; i < ds_unityPrint.getRowCount(); i++) {
    if (ds_unityPrint.getCellData(i, "choice") == "T") {
      param = param + "," + ds_unityPrint.getCellData(i, "sellVatNo");
      printCnt++;
    }
  }
  if (printCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 지로통지서"]);
    return;
  }

  /*
  	    var odiParam = new ODIParam("fs_999_99_96p");
  	    odiParam.add("sellVatNo", param.substring(1));
  	    
  		// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  		var formParam = new FormParam();
  		      
  		// OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  		var viewerParam = new ViewerParam();
  			var viewerParam = new ViewerParam();
  			viewerParam.add("viewer.zoom","100");
  			viewerParam.add("print.mode","silent");					//프린트 설정창 없게...
  			viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
  		
  		$c.gus.cfOZReport('', '', "/ds/fs/fs_999_99_96p.ozr", odiParam, viewerParam, formParam);
  */

  try {
    let printMode = "silent";
    data = {
      oodiName: "fs_999_99_96p",
      reportName: "/ds/fs/fs_999_99_96p.ozr",
      odiParam: {
        sellVatNo: param.substring(1)
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        zoom: 100,
        // 배율 설정
        mode: printMode
      },
      formParam: {}
    };
    //debugger;
    scwin.openPopup(data);
  } catch (e) {
    console.log("f_OzReport : " + e);
  }
};

//-------------------------------------------------------------------------
// 인쇄 (거래명세서)
//-------------------------------------------------------------------------
scwin.f_certiPrint = async function () {
  var printCnt = 0;
  var printMode = "silent";
  let reportDataList = [];

  //OZStartBatch();
  for (var i = 0; i < ds_certiPrint.getRowCount(); i++) {
    if (ds_certiPrint.getCellData(i, "choice") == "T") {
      var odi1 = "01";
      var odi2 = ds_certiPrint.getCellData(i, "inscrpFmlaPatternCd");

      // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
      //var odiParam  =  new ODIParam("fs_202_06_10_"+odi1+"_"+odi2;
      var odiParam = {};
      odiParam.bilgLodeptCd = ds_certiPrint.getCellData(i, "bilgLodeptCd");
      odiParam.bilgClntNo = ds_certiPrint.getCellData(i, "bilgClntNo");
      odiParam.qryClntNo = ds_certiPrint.getCellData(i, "qryClntNo");
      odiParam.qryConKnd = ds_certiPrint.getCellData(i, "qryConKnd");
      odiParam.confirmDtFm = ds_certiPrint.getCellData(i, "confirmDtFm");
      odiParam.confirmDtTo = ds_certiPrint.getCellData(i, "confirmDtTo");
      odiParam.spplyDtFm = ds_certiPrint.getCellData(i, "spplyDtFm");
      odiParam.spplyDtTo = ds_certiPrint.getCellData(i, "spplyDtTo");
      odiParam.modId = ds_certiPrint.getCellData(i, "modId");
      odiParam.printFg = ds_certiPrint.getCellData(i, "printFg");
      odiParam.certiAggregateFg = ds_certiPrint.getCellData(i, "certiAggregateFg");
      odiParam.dcsnClsCd = ds_certiPrint.getCellData(i, "dcsnClsCd");
      odiParam.certiNo = ds_certiPrint.getCellData(i, "certiNo");
      odiParam.fmlaClsCd = ds_certiPrint.getCellData(i, "fmlaClsCd");
      odiParam.fmlaPatternCd = ds_certiPrint.getCellData(i, "fmlaPatternCd");
      odiParam.upperFmlaClsCd = ds_certiPrint.getCellData(i, "upperFmlaClsCd");
      odiParam.upperFmlaPatternCd = ds_certiPrint.getCellData(i, "upperFmlaPatternCd");
      odiParam.sellVatNo = ds_certiPrint.getCellData(i, "sellVatNo");
      odiParam.inscrpFmlaClsCd = ds_certiPrint.getCellData(i, "inscrpFmlaClsCd");
      odiParam.inscrpFmlaPatternCd = ds_certiPrint.getCellData(i, "inscrpFmlaPatternCd");
      odiParam.spplyFg = acb_spplyFg.getValue();
      if (cbx_sumCheck.getSelectedIndex().length > 0) {
        odiParam.sumGbn = "Y";
      } else {
        odiParam.sumGbn = "N";
      }

      //거래명세서 실작업중량 표기 유무
      if (cbx_wt.getSelectedIndex().length > 0) {
        odiParam.wtGbn = "Y";
      } else {
        odiParam.wtGbn = "N";
      }
      reportDataList.push({
        odiName: "fs_202_06_10_" + odi1 + "_" + odi2,
        reportName: "/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr",
        odiParam: odiParam,
        viewerParam: {
          useprogressbar: false // 프로그레스바 쓸지 말지
        },
        formParam: {}
      });

      /*
      if (cbx_previewCheck.getSelectedIndex().length > 0){
          printMode ="preview";
      }
      data = {
          oodiName   : "fs_202_06_10_"+odi1+"_"+odi2,
          reportName : "/ds/fs/fs_202_06_10_"+odi1+"_"+odi2+".ozr",
          odiParam   : odiParam,
          viewerParam : {
              useprogressbar : false, // 프로그레스바 쓸지 말지
              zoom : 100, // 배율 설정
              mode : printMode,
          },
          formParam : {
           }
      };
       scwin.openPopup(data);
      */

      printCnt++;
    }
  }
  if (printCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 거래명세서"]);
    return;
  }
  if (cbx_previewCheck.getSelectedIndex().length == 0) {
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
  } else if (cbx_previewCheck.getSelectedIndex().length > 0 && reportDataList.length == 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
  } else if (cbx_previewCheck.getSelectedIndex().length > 0 && reportDataList.length > 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    reportDataList.shift();
    let opts2 = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts2);
  }
  //OZExecuteBatch();
};

//-------------------------------------------------------------------------
// 인쇄 (통합발행)
//-------------------------------------------------------------------------
scwin.f_totalPrint = async function () {
  scwin.isTotPrint = true;
  //필터링
  //gr_certiPrint.DataID = ''; 
  //ds_certiPrint.filter();
  //gr_certiPrint.DataID = 'ds_certiPrint';

  scwin.f_certiPrintfilter();
  var param = "";
  var printCnt = 0;
  var spplyFg = "02p";
  //var printMode = "silent";
  let reportDataList = [];

  //console.log(gr_unityPrint.getCellChecked(1, "choice"));

  //OZStartBatch();
  for (var j = 0; j < ds_unityPrint.getRowCount(); j++) {
    if (ds_unityPrint.getCellData(j, "choice") == "T") {
      param = param + "," + ds_unityPrint.getCellData(j, "sellVatNo");
      printCnt++;
      for (var i = 0; i < ds_certiPrint.getRowCount(); i++) {
        if (ds_certiPrint.getCellData(i, "sellVatNo") == ds_unityPrint.getCellData(j, "sellVatNo") && ds_certiPrint.getCellData(i, "certiPatternCd") == "V") {
          var odi1 = "01";
          var odi2 = ds_certiPrint.getCellData(i, "inscrpFmlaPatternCd");

          // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
          var odiParam = {};
          //var odiParam = new ODIParam("fs_202_06_10_"+odi1+"_"+odi2);
          odiParam.bilgLodeptCd = ds_certiPrint.getCellData(i, "bilgLodeptCd");
          odiParam.bilgClntNo = ds_certiPrint.getCellData(i, "bilgClntNo");
          odiParam.qryClntNo = ds_certiPrint.getCellData(i, "qryClntNo");
          odiParam.qryConKnd = ds_certiPrint.getCellData(i, "qryConKnd");
          odiParam.confirmDtFm = ds_certiPrint.getCellData(i, "confirmDtFm");
          odiParam.confirmDtTo = ds_certiPrint.getCellData(i, "confirmDtTo");
          odiParam.spplyDtFm = ds_certiPrint.getCellData(i, "spplyDtFm");
          odiParam.spplyDtTo = ds_certiPrint.getCellData(i, "spplyDtTo");
          odiParam.modId = ds_certiPrint.getCellData(i, "modId");
          odiParam.printFg = ds_certiPrint.getCellData(i, "printFg");
          odiParam.certiAggregateFg = ds_certiPrint.getCellData(i, "certiAggregateFg");
          odiParam.dcsnClsCd = ds_certiPrint.getCellData(i, "dcsnClsCd");
          odiParam.certiNo = ds_certiPrint.getCellData(i, "certiNo");
          odiParam.fmlaClsCd = ds_certiPrint.getCellData(i, "fmlaClsCd");
          odiParam.fmlaPatternCd = ds_certiPrint.getCellData(i, "fmlaPatternCd");
          odiParam.upperFmlaClsCd = ds_certiPrint.getCellData(i, "upperFmlaClsCd");
          odiParam.upperFmlaPatternCd = ds_certiPrint.getCellData(i, "upperFmlaPatternCd");
          odiParam.sellVatNo = ds_certiPrint.getCellData(i, "sellVatNo");
          odiParam.inscrpFmlaClsCd = ds_certiPrint.getCellData(i, "inscrpFmlaClsCd");
          odiParam.inscrpFmlaPatternCd = ds_certiPrint.getCellData(i, "inscrpFmlaPatternCd");
          odiParam.spplyFg = acb_spplyFg.getValue();
          if (cbx_sumCheck.getSelectedIndex().length > 0) {
            odiParam.sumGbn = "Y";
          } else {
            odiParam.sumGbn = "N";
          }
          reportDataList.push({
            odiName: "fs_202_06_10_" + odi1 + "_" + odi2,
            reportName: "/ds/fs/fs_202_06_10_" + odi1 + "_" + odi2 + ".ozr",
            odiParam: odiParam,
            viewerParam: {
              useprogressbar: false // 프로그레스바 쓸지 말지
            },
            formParam: {}
          });

          /*
              if (cbx_previewCheck.getSelectedIndex().length > 0){
                  printMode ="preview";
              }
              data = {
                  oodiName   : "fs_202_06_10_"+odi1+"_"+odi2,
                  reportName : "/ds/fs/fs_202_06_10_"+odi1+"_"+odi2+".ozr",
                  odiParam   : {
                      odiParam   : odiParam,
                  },
                  viewerParam : {
                      useprogressbar : false, // 프로그레스바 쓸지 말지
                      zoom : 90, // 배율 설정
                      mode : printMode,
                  },
                  formParam : {
                   }
              };
          
              scwin.openPopup(data);
          */
        }
      }
    }
  }
  console.log(reportDataList);
  if (reportDataList.length === 0) {
    //await $c.win.alert("선택된 내역이 없습니다.");
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["발행할 통합발행내역"]);
    return;
  }
  if (cbx_previewCheck.getSelectedIndex().length == 0) {
    let opts = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts);
  } else if (cbx_previewCheck.getSelectedIndex().length > 0 && reportDataList.length == 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
  } else if (cbx_previewCheck.getSelectedIndex().length > 0 && reportDataList.length > 1) {
    let opts = {
      type: 'viewer',
      // viewer, print, download
      printMode: 'silent' // silent, view
    };
    await $c.ext.openOzReport($p, reportDataList[0], opts);
    reportDataList.shift();
    let opts2 = {
      type: 'print',
      // viewer, print, download
      viewerMode: 'print',
      printMode: 'silent' // silent, view
    };
    await $c.ext.openBatchOzReport($p, reportDataList, opts2);
  }
  if (acb_spplyFg.getValue() == "receive") {
    spplyFg = "02p";
  } else {
    spplyFg = "03p";
  }

  /*
  if(printCnt == 0){
  await $c.gus.cfAlertMsg(MSG_CM_WRN_007,["발행할 통합발행내역"]);
  scwin.isTotPrint = false;
  //필터링
  //gr_certiPrint.DataID = ''; 
  //ds_certiPrint.filter();
  //gr_certiPrint.DataID = 'ds_certiPrint'; 
       scwin.f_certiPrintfilter();
  return;
  }
  */

  scwin.isTotPrint = false;
  //필터링
  //gr_certiPrint.DataID = ''; 
  //ds_certiPrint.filter();
  //gr_certiPrint.DataID = 'ds_certiPrint'; 

  scwin.f_certiPrintfilter();

  //OZExecuteBatch();
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet = async function () {
  console.log("scwin.f_downExcelSheet2~~");
  var count = ds_unityPrint.getRowCount();
  if (!(count > 0)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  } else {
    /*
    gr_unityPrint.SetExcelTitle(1, "value:세금계산서 내역;"  // 표시할 타이틀
    		  + "font-face:'돋움체';" // 폰트
    		  + "font-size:12pt;"    // 폰트 크기
    		  + "font-color:black;"  // 폰트 색깔
    		  + "bgcolor:#ffffff;"   // 배경 색깔
    		  + "align:center;"      // 정렬
    		  + "line-color:white;"  // 타이틀 부분 테두리선 색깔
    		  + "line-width:0pt;"    // 타이틀 테두리선 굵기
    		  + "skiprow:1;");       // 타이틀 다음 떼는 로우 수
    	   		
    $c.gus.cfGridToExcel(gr_unityPrint, "세금계산서 내역", "세금계산서 내역.xls", 4 + 8 + 16);
    */

    var sheetTitle = "세금계산서 내역";
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: sheetTitle //엑셀내 시트명 지정필요시
      ,

      startRowIndex: 2,
      startColumnIndex: 0,
      removeColumns: "15"
    };
    const infoArr = [{
      rowIndex: 0 //제목을 표시할 행 index
      ,

      colIndex: 0 //제목을 표시할 열 index
      ,

      rowSpan: 1 //병합할 행의 수
      ,

      colSpan: 16 //병합할 열의 수
      ,

      text: sheetTitle //표시할 내용(제목)
      ,

      fontName: "돋움체" //폰트이름 
      ,

      fontSize: "12px" //폰트 size
      ,

      color: "black" //폰트 color
      ,

      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,

      bgColor: "#ffffff" //배경 color
    }];
    $c.data.downloadGridViewExcel($p, gr_unityPrint, options, infoArr);
  }
};
scwin.f_downExcelSheet2 = function () {
  console.log("scwin.f_downExcelSheet2~~");
  var count = ds_certiPrint.getRowCount();
  if (count < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  } else {
    var sheetTitle = "거래명세서 내역";
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: sheetTitle //엑셀내 시트명 지정필요시
      ,

      startRowIndex: 2,
      startColumnIndex: 0,
      removeColumns: "0"
    };
    const infoArr = [{
      rowIndex: 0 //제목을 표시할 행 index
      ,

      colIndex: 0 //제목을 표시할 열 index
      ,

      rowSpan: 1 //병합할 행의 수
      ,

      colSpan: 15 //병합할 열의 수
      ,

      text: sheetTitle //표시할 내용(제목)
      ,

      fontName: "돋움체" //폰트이름 
      ,

      fontSize: "12px" //폰트 size
      ,

      color: "black" //폰트 color
      ,

      textAlign: "center" //표시할 내용의 정렬 방법(left, center, right)
      ,

      bgColor: "#ffffff" //배경 color
    }];
    $c.data.downloadGridViewExcel($p, gr_certiPrint, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함.
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData, acb_qryConKnd);
  ica_confirmDtFm.setValue(scwin.strFrDate);
  ica_confirmDtTo.setValue(scwin.strCurDate);
  ed_bilgLodeptCd.setValue("");
  ed_bilgLodeptNm.setValue("");
  ed_bilgClntNo.setValue("");
  ed_bilgClntNm.setValue("");
  ed_modId.setValue("");
  ed_modNm.setValue("");
  acb_dcsnClsCd.setSelectedIndex(0);

  //ica_spplyDtFm.setValue(scwin.strFrDate);
  //ica_spplyDtTo.setValue(scwin.strCurDate);
  //ica_slipDtFm.setValue(scwin.strFrDate);
  //ica_slipDtTo.setValue(scwin.strCurDate);

  ds_queryCondition.set("confirmDtFm", scwin.strFrDate);
  ds_queryCondition.set("confirmDtTo", scwin.strCurDate);
  ds_queryCondition.set("spplyDtFm", scwin.strFrDate);
  ds_queryCondition.set("spplyDtTo", scwin.strCurDate);
  ds_queryCondition.set("slipDtFm", scwin.strFrDate);
  ds_queryCondition.set("slipDtTo", scwin.strCurDate);
  acb_certiAggregateFg.setValue("03");
  rd_printFg.setValue("03");
  ed_printPage.setValue("1");
  ed_bilgLodeptCd.focus();

  //gr_certiPrint.ColumnProp('choice', 'Show') = "false";
  //f_OnLoad();//f_SetDefaultData();
  gr_certiPrint.setColumnVisible('choice', false);
};
scwin.sbm_taxInvoicePrintTarget_submitdone = async function (e) {
  console.log("scwin.sbm_taxInvoicePrintTarget_submit1~~");
  //console.log(e);
  //console.log('rows='+ds_unityPrint.getRowCount());
  //console.log('필터링11~~');
  try {
    //if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    var rowCnt = ds_unityPrint.getRowCount();
    tbx_totalRows.setValue(rowCnt);
    rowCnt = ds_certiPrint.getRowCount();
    tbx_totalRows2.setValue(rowCnt);
    if (ds_unityPrint.getRowCount() == 0) {
      //ds_certiPrint.setJSON([]);
      //scwin.f_certiPrintfilter();
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    } else {
      gr_unityPrint.setFocusedCell(0, "bilgClntNo", false);
      //$c.gus.cfGoPrevPosition(gr_lo410, scwin.pos_rowSts); //첫번째 row 포지션이동
    }
    if (ds_certiPrint.getRowCount() == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    scwin.rd_printFg_onchange();
  } catch (e) {
    console.log("sbm_taxInvoicePrintTarget_submit e : " + e);
  }
};
scwin.sbm_taxInvoicePrintTarget_submiterror = function (e) {};
scwin.sbm_certiPrintTarget_submitdone = function (e) {
  console.log("scwin.sbm_certiPrintTarget_submitdone~~");
  console.log(e);
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    var rowCnt = ds_certiPrint.getRowCount();
    tbx_totalRows2.setValue(rowCnt);
    if (ds_certiPrint.getRowCount() == 0) {
      //$c.gus.cfAlertMsg(MSG_CM_WRN_002);
    } else {
      gr_certiPrint.setFocusedCell(0, "fmlaNm", false);
      //$c.gus.cfGoPrevPosition(gr_lo410, scwin.pos_rowSts); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_certiPrintTarget_submitdone : " + e);
  }
};
scwin.sbm_certiPrintTarget_submiterror = function (e) {};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
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
scwin.btn_certiNo_onclick = function (e) {
  if (acb_qryConKnd.getValue() == "02") {
    scwin.f_CertiNoPopUp();
  } else if (acb_qryConKnd.getValue() == "04") {
    //scwin.f_sellVatNoPopUp();
  }
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
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_jiro_onclick = function (e) {
  scwin.f_jiroPrint();
};
scwin.btn_print_onclick = function (e) {
  scwin.f_Print();
};

/*
scwin.ds_certiPrint_onrowpositionchange = function (info) {
    //scwin.f_certiPrintfilter();
};
*/

scwin.ds_unityPrint_onrowpositionchange = function (info) {
  console.log("scwin.ds_unityPrint_onrowpositionchange~~");
  console.log(info);
  scwin.f_certiPrintfilter();
};
scwin.f_certiPrintfilter = function () {
  //var row = ds_certiPrint.getRowPosition();
  if (ds_unityPrint.getRowCount() > 0 && rd_printFg.getValue() == "03" && !scwin.isTotPrint) {
    var v_val = ds_unityPrint.getCellData(ds_unityPrint.getRowPosition(), "sellVatNo");
    ds_certiPrint.clearFilter();
    var filterOptions = {
      type: 'row',
      colIndex: 'sellVatNo',
      key: v_val,
      condition: 'and'
    };
    ds_certiPrint.setColumnFilter(filterOptions);
    ds_certiPrint.reform();
  } else {
    ds_certiPrint.clearFilter();
    var filterOptions = {
      type: 'row',
      colIndex: 'sellVatNo',
      key: "",
      condition: 'and'
    };
    //ds_certiPrint.setColumnFilter(filterOptions);
    //ds_certiPrint.reform();
  }
  tbx_totalRows2.setValue(ds_certiPrint.getRowCount());

  /*
  if(ds_unityPrint.getRowCount() > 0 && rd_printFg.getValue() == "03" && !scwin.isTotPrint){
  var v_val = ds_unityPrint.getCellData(ds_unityPrint.getRowPosition(), "sellVatNo");
   	if(ds_certiPrint.getCellData(row, "sellVatNo") == v_val ){
   	return true;
  }else{
   	return false;
  }
  }else{
  return true;
  }
  */
};
scwin.rd_printFg_onchange = function (info) {
  //console.log('scwin.rd_printFg_onchange~~');
  //console.log('info.getValue()-->'+info.newValue);

  if (rd_printFg.getValue() == "01") {
    //gr_certiPrint.setGridHeight(0);
    //gr_unityPrint.setGridHeight(421); //521
    gr_certiPrint.setVisibleRowNum(0);
    gr_unityPrint.setVisibleRowNum(13);
    grp_unity.setStyle("display", ""); //display:block (X)
    grp_certi.setStyle("display", "none");
    btn_jiro.setStyle("display", "");
    scwin.f_certiPrintfilter();
    gr_certiPrint.setColumnVisible('choice', false);
  } else if (rd_printFg.getValue() == "02") {
    //gr_certiPrint.setGridHeight(421); //521
    //gr_unityPrint.setGridHeight(0);
    gr_certiPrint.setVisibleRowNum(13);
    gr_unityPrint.setVisibleRowNum(0);
    grp_unity.setStyle("display", "none"); //display:block (X)
    grp_certi.setStyle("display", "");
    btn_jiro.setStyle("display", "none");
    scwin.f_certiPrintfilter();
    gr_certiPrint.setColumnVisible('choice', true);
  } else {
    //gr_certiPrint.setGridHeight(174);
    //gr_unityPrint.setGridHeight(174);
    gr_certiPrint.setVisibleRowNum(4);
    gr_unityPrint.setVisibleRowNum(4);
    grp_unity.setStyle("display", ""); //display:block (X)
    grp_certi.setStyle("display", "");
    btn_jiro.setStyle("display", "none");
    scwin.f_certiPrintfilter();
    gr_certiPrint.setColumnVisible('choice', false);
  }
};
scwin.acb_qryConKnd_onviewchange = function (info) {
  //04:세금계산서번호 팝업 호출 개발 범위 미포함(fs_204_02_20p)
  console.log("scwin.acb_qryConKnd_onviewchange~");
  var fmDt = ica_confirmDtFm.getValue();
  var toDt = ica_confirmDtTo.getValue();
  if (acb_qryConKnd.getValue() == "01") {
    //div_qryConKnd1.style.display = 'block';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "02") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'block';		
    //div_qryConKnd3.style.display = 'none';	
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "false";

    udc_confirmDtFm.hide();
    ed_certiNo.show();
    btn_certiNo.show();
    acb_certiAggregateFg.setValue("03");
    acb_certiAggregateFg.setReadOnly(true);
  } else if (acb_qryConKnd.getValue() == "03") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'block';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "04") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';		
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'block';
    //div_qryConKnd5.style.display = 'none';	
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.hide();
    ed_certiNo.show();
    btn_certiNo.show();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "05") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'block';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  }
};
scwin.acb_qryConKnd_onchange = function (info) {
  console.log("scwin.acb_qryConKnd_onchange~");
  var fmDt = ica_confirmDtFm.getValue();
  var toDt = ica_confirmDtTo.getValue();
  if (acb_qryConKnd.getValue() == "01") {
    //div_qryConKnd1.style.display = 'block';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "02") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'block';		
    //div_qryConKnd3.style.display = 'none';	
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "false";

    udc_confirmDtFm.hide();
    ed_certiNo.show();
    btn_certiNo.show();
    acb_certiAggregateFg.setValue("03");
    acb_certiAggregateFg.setReadOnly(true);
  } else if (acb_qryConKnd.getValue() == "03") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'block';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'none';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "04") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';		
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'block';
    //div_qryConKnd5.style.display = 'none';	
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.hide();
    ed_certiNo.show();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  } else if (acb_qryConKnd.getValue() == "05") {
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'none';
    //div_qryConKnd3.style.display = 'none';
    //div_qryConKnd4.style.display = 'none';
    //div_qryConKnd5.style.display = 'block';
    //acb_certiAggregateFg.Enable = "true";

    udc_confirmDtFm.show();
    ed_certiNo.hide();
    btn_certiNo.hide();
    acb_certiAggregateFg.setReadOnly(false);
  }
};

/*
scwin.udc_confirmDtFm_onBlur = function () {
    if(acb_qryConKnd.getValue() == "01"){
        ds_queryCondition.set("confirmDtFm",ica_confirmDtFm.getValue());
        ds_queryCondition.set("confirmDtTo",ica_confirmDtTo.getValue());
    }else if(acb_qryConKnd.getValue() == "02"){
        //ds_queryCondition.set("ed_certiNo",ed_certiNo);
    }else if(acb_qryConKnd.getValue() == "03"){
        ds_queryCondition.set("spplyDtFm",ica_confirmDtFm.getValue());
        ds_queryCondition.set("spplyDtTo",ica_confirmDtTo.getValue());
    }else if(acb_qryConKnd.getValue() == "04"){
       // ds_queryCondition.set("ed_sellVatNo",);
    }else if(acb_qryConKnd.getValue() == "05"){
        ds_queryCondition.set("slipDtFm",ica_confirmDtFm.getValue());
        ds_queryCondition.set("slipDtTo",ica_confirmDtTo.getValue());
    }
};
*/

/**
 * @event  onkeyup
 * @name upperFlag 
 * @description  소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'청구부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_bilgLodeptCd',style:'',id:'udc_bilgLodeptCd',codeId:'ed_bilgLodeptCd',btnId:'btn_bilgLodeptCd',nameId:'ed_bilgLodeptNm',validTitle:'청구부서',mandatoryCode:'true',UpperFlagCode:'1',allowCharCode:'A-Za-z0-9','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',refDataCollection:'ds_queryCondition',code:'bilgLodeptCd',objTypeCode:'Data',objTypeName:'key',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_bilgLodeptCd_onblurNameEvent',maxlengthCode:'4'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_bilgClntNo',style:'',validTitle:'청구처',btnId:'btn_bilgClntNo',codeId:'ed_bilgClntNo',id:'udc_bilgClntNo',nameId:'ed_bilgClntNm',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'Data',maxlengthName:'20','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'ds_queryCondition',code:'bilgClntNo',allowCharCode:'A-Za-z0-9','ev:onviewchangeNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width:140px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_queryCondition.qryConKnd','ev:onchange':'scwin.acb_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금계산서번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전표일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_confirmDtFm',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_confirmDtFm',edToId:'ica_confirmDtTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'key',objTypeFrom:'data',titleFrom:'거래명세서일자(시작)',titleTo:'거래명세서일자(종료)',objTypeTo:'data'}},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_certiNo',placeholder:'',style:'width: 150px;',mandatory:'true',maxlength:'11',objType:'Data',allowChar:'A-Za-z0-9','ev:onkeyup':'scwin.upperFlag'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_certiNo',style:'',type:'button','ev:onclick':'scwin.btn_certiNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구담당자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_modId',style:'',refDataCollection:'ds_queryCondition',btnId:'btn_modId',codeId:'ed_modId',id:'udc_modId',nameId:'ed_modNm','ev:onblurCodeEvent':'scwin.udc_modId_onblurCodeEvent','ev:onclickEvent':'scwin.udc_modId_onclickEvent',maxlengthName:'20',validTitle:'청구당담자',code:'modId',objTypeCode:'Data',UpperFlagCode:'1',maxlengthCode:'8',allowCharCode:'A-Za-z0-9','ev:onviewchangeNameEvent':'scwin.udc_modId_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_dcsnClsCd',search:'start',style:'width:180px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_queryCondition.dcsnClsCd',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래명세서집계구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_certiAggregateFg',search:'start',style:'width:208px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_queryCondition.certiAggregateFg'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구서유형별집계(1단계)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구서유형별집계(2단계)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래명세서번호별'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'grp_unity',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'세금계산서내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_unityPrint',gridUpUserAuth:'X',gridUpYn:'N',gridDownFn:'scwin.f_downExcelSheet'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_unityPrint',style:'',autoFit:'allColumn',id:'gr_unityPrint',visibleRowNum:'3',class:'wq_gvw',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',colSpan:'',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'청구처',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'청구처명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'전표확정<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'계산서<br/>상태',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column3',value:'공급금액',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'부가세',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'공급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'전표일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'수금부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'적요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'세금계산서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'상대세금<br/>계산서번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'choice',displayMode:'label',falseValue:'F',emptyValue:'F',trueValue:'T',defaultValue:'F',readOnly:'false',valueType:'other'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'bilgClntNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dcsnClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'evidRglClsNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crn',displayMode:'label',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'collMoneyAcctDeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'offsetVatNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'grp_certi',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'거래명세서내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_certiPrint',gridDownFn:'scwin.f_downExcelSheet2',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_certiPrint',id:'gr_certiPrint',style:'',visibleRowNum:'3',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'50',colSpan:'',rowSpan:'2',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'서식명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'표기서식명',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'청구처',width:'80',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구처명',width:'120',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'거래명세서',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'사업자번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'공급금액',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'부가세',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'공급일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'전표일자',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'적요',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'세금계산서<br/>번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'외화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'choice',inputType:'checkbox',width:'50',readOnly:'false',defaultValue:'F',emptyValue:'F',falseValue:'F',trueValue:'T',valueType:'other',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fmlaNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inscrpFmlaNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crn',inputType:'text',width:'100',displayFormat:'###-##-#####'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmtFcrc',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0.00',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sumAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'summary',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'출력구분',class:''}},{T:1,N:'xf:select1',A:{ref:'',appearance:'full',style:'margin-top:2px;',id:'rd_printFg',renderType:'radiogroup',rows:'',class:'',cols:'',selectedIndex:'-1','ev:onchange':'scwin.rd_printFg_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래명세서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통합발행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래명세서 발행부수',class:''}},{T:1,N:'xf:input',A:{style:'width: 50px;',id:'ed_printPage',placeholder:'',class:'tar',objType:'data'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'부',class:''}}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:180px;',id:'acb_spplyFg',class:'',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공급받는자 보관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'receive'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공급자 보관용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'spply'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_sumCheck',renderType:'checkboxgroup',rows:'',selectedindex:'0',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'할인할증집계여부'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_wt',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중량'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_jiro',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_jiro_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'지로발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})