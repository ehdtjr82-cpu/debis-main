/*amd /ui/ja/ds/fs/bilg/ja_fs_202_03_01b.xml 42669 ad5405f34808ab5c97e50aabe4dd910c3dfca1e88e0fa4ceaeb793e0c7b2badf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_generalbillingorder_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'매출확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'조회시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'조회종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgOdrKndCd',name:'일반청구오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellDcsnClsCd',name:'매출확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDtConKnd',name:'조회 flag',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coNm',name:'회사명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptNm',name:'청구부서명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_generalbillingorder',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndCd',name:'청구오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgOdrKndNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellClntNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptExchRt',name:'실적적용환율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVat',name:'계약금액부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTotAmt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVat',name:'매입부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTotAmt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcsnClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellDcsnClsNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcsnClsCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsDcsnClsNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellCertiNo',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsCertiNo',name:'매입거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsVatNo',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'empNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_generalbillingorder_retrieve',action:'/ja.ds.fs.bilg.bilg.JaRetrieveGeneralBillingOrderListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_generalbillingorder_con","key":"IN_DS1"},{"id":"ds_generalbillingorder","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_generalbillingorder","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_generalbillingorder_retrieve_submitdone','ev:submiterror':'scwin.sbm_generalbillingorder_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};
//자회사물류/오더/통합매출입/일반청구오더 현황  -  /ui/ja/ds/fs/bilg/ja_fs_202_03_01b.xml
//조회조건 회사코드 : 000, 부서코드 : 00010, 실적일자 : 20220201~20220201 
//로그인:330042/1111 028, 부서코드 : 01383, 실적일자 : 20230201~20260213 
//로그인:247033/1111  029, 부서코드 : 01404, 실적일자 : 20240401~20241231 

//scwin.vLoginCoCd =cfIsNull(<%=login.getCoCd()%>)?'':'<%=login.getCoCd()%>'; // 소속 자회사  
//scwin.vLoginCoClsCd =cfIsNull(<%=login.getCoClsCd()%>)?'': '<%=login.getCoClsCd()%>'  ;//회계_회사구분('CO035' : 0:동부 EXPRESS)
//scwin.vUserHomeClsCd= "<%=login.getUserHomeClsCd()%>";        // 사용자소속구분코드 
//console.log($c.data.getMemInfo());
scwin.vLoginCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사  
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드 

scwin.isSubCompany = false;
scwin.quantityOfRows;
scwin.pageNumber = "1";
scwin.vCoCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd"); // 소속 자회사
scwin.vCoClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd"); //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.privAdmin = $c.data.getMemInfo($p, "privAdmin"); //ADMIN 권한

scwin.strPreDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한
scwin.txtCoClsCd = "";

//String 값 trim 
/*
String.prototype.trim = function() {
   	return this.replace(/(^\s*)|(\s*$)/g,"");
}
   */

scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //f_empNo();
  scwin.f_setCompanyInfo();
  //parent.tabFrame.f_FoldMenu(true);
  ed_qryConDtFm.setValue(scwin.strPreDate);
  ed_qryConDtTo.setValue(scwin.strCurDate);
  ed_bilgLodeptCd.focus();

  //f_Retrieve();
};
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "JA003",
    compID: "acb_bilgOdrKndCd"
  } //acb_bilgOdrKndCd   일반청구오더종류
  , {
    grpCd: "FS500",
    compID: "acb_sellDcsnClsCd"
  } //acb_sellDcsnClsCd 매출확정구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_setCompanyInfo = async function () {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  //if( vUserHomeClsCd != '<%=ACConstants.SUBSIDIARY_USER_HOME_CLS_CD%>')  {    //TO-BE const변수 확인
  //	vLoginCoCd = '<%=ACConstants.CO_CD_DONGBU%>';
  //	vLoginCoClsCd =  '<%=ACConstants.CO_CLS_CD_DONGBU%>' ;
  //}

  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    //SA
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU; //000
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU; //0
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  await scwin.f_PopUpCompanyInfo('T');

  //if('T' == '<%=privAdmin%>'  ||  !isSubCompany   ) { // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    //$c.gus.cfEnableObjects([ed_coCd,ed_coNm,img_company ]);    
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  } else {
    //$c.gus.cfDisableObjects([ed_coCd,ed_coNm,img_company  ]);   
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_coCd]);
  }
};
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  //var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  var rtnList = await udc_coCd.cfCommonPopUpAsync(scwin.udc_coCdCallBack, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
  // SET
  /*	 
  if(rtnList != null ) { 
  if (rtnList[0] == "N/A") return; 
  
  if(ed_coCd.hidVal != rtnList[0] )
  f_initObj();
  ed_coCd.setValue(rtnList[0]);	// 코드
  ed_coNm.setValue(rtnList[5]); // 회사명 
  ed_coCd.hidVal = rtnList[0];  // 히든값
  scwin.txtCoClsCd= rtnList[1];	// 회사구분    
   }else{
  ed_coCd.setValue("");
  ed_coNm.setValue("");
  ed_coCd.hidVal = ""; 
  scwin.txtCoClsCd = "";
  }
  */
  //if(scwin.txtCoClsCd.getValue() > '<%=ACConstants.CO_CLS_CD_DONGBU%>')  {  	// 자회사 회계 시스템 
  //if(scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU)  {  	// 자회사 회계 시스템 
  //	scwin.isSubCompany = true;
  //}else{
  //	scwin.isSubCompany = false;
  //}
};
scwin.f_initObj = function () {
  $c.gus.cfInitObjects($p, [ed_bilgLodeptCd, ed_bilgLodeptNm]); // 부서코드 
  $c.gus.cfInitObjects($p, [ed_bilgClntNo, ed_bilgClntNm]); //  거래처 코드 
};
scwin.f_deptPopUp = function (sObj) {
  console.log('scwin.f_deptPopUp~~~');
  var param = scwin.strCurDate;
  if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템
    param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
  }
  var paramArray = new Object();
  paramArray.pSelectID = "retrieveAcctDeptCdInfo6";
  paramArray.pCode = ed_bilgLodeptCd;
  paramArray.pName = ed_bilgLodeptNm;
  paramArray.pWhere = param;
  if (sObj == 'BTN') {
    scwin.f_PopUp2(paramArray, "F");
  } else {
    scwin.f_PopUp2(paramArray, "T");
  }
};
scwin.f_PopUp2 = function (paramArray, sEvent) {
  var codeObj = paramArray.pCode;
  var nameObj = paramArray.pName;
  rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, $c.gus.cfGetValue($p, codeObj), ""
  //,scwin.f_EventCheck(), paramArray.pDispCnt
  , sEvent, paramArray.pDispCnt, paramArray.pTitle, paramArray.pWidth, paramArray.pHidden, paramArray.pWhere, paramArray.pW, paramArray.pH, paramArray.pTop, paramArray.pLeft, paramArray.pExistTF, paramArray.pAllSearchTF, paramArray.pWtitleSearch);
  /*
  			if (rtnList != null ) {
  		    	if (rtnList[0] != "N/A") {
  		    		cfSetValue(codeObj,rtnList[0]);
  					codeObj.hidVal = rtnList[0];
  					cfSetValue(nameObj,rtnList[1]);
  				}
  		    } else {
  				cfSetValue(codeObj,"");
  				codeObj.hidVal = "";
  				cfSetValue(nameObj,"");
  		    }
  */
  return rtnList;
};
scwin.f_Retrieve = async function () {
  //validation check     
  if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConDtFm, ed_qryConDtTo]))) {
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!(await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  /*
       	var dsHeader  = "bilgLodeptCd:STRING"  	//청구부서
  				  + ",qryConKnd:STRING"  	//매출확정구분
       			  + ",qryConDtFm:STRING"   	    //조회시작일자
  				  + ",qryConDtTo:STRING"  		//조회종료일자
  				  + ",bilgClntNo:STRING"        //청구거래처
  				  + ",bilgOdrKndCd:STRING"      //일반청구오더종류
  				  + ",sellDcsnClsCd:STRING"  	//매출확정구분
  				  + ",qryDtConKnd:STRING"      //조회 flag 
  				  + ",coCd:STRING";   	
  				                     	                    	                          
  	 	ds_generalbillingorder_con.SetDataHeader(dsHeader);
   		ds_generalbillingorder_con.AddRow();
  */
  //ds_generalbillingorder_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  //       	if(acb_qryConKnd.getValue() == "오더"){
  //      		qryConKnd = "오더";
  // 			gr_generalbillingorder.ColumnProp('rsltsStdDt', 'Name')     = "오더일자";     		
  //      	} 

  /*      
      	ds_generalbillingorder_con.set("qryConKnd"     , acb_qryConKnd.getValue());
     	ds_generalbillingorder_con.set("qryConDtFm"    , ed_qryConDtFm.getValue());
     	ds_generalbillingorder_con.set("qryConDtTo"    , ed_qryConDtTo.getValue());
     	ds_generalbillingorder_con.set("bilgClntNo"    , ed_bilgClntNo.getValue()); 	
     	ds_generalbillingorder_con.set("bilgOdrKndCd"  , acb_bilgOdrKndCd.getValue());
      	ds_generalbillingorder_con.set("sellDcsnClsCd" , acb_sellDcsnClsCd.getValue());
      	ds_generalbillingorder_con.set("coCd"          , ed_coCd.getValue());
  */
  $c.sbm.execute($p, sbm_generalbillingorder_retrieve);

  //tr_generalbillingorder_retrieve.Action = "/ja.ds.fs.bilg.bilg.JaRetrieveGeneralBillingOrderListCMD.do";
  //tr_generalbillingorder_retrieve.Post();
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  var param = "";
  var qryYear = ed_qryConDtFm.getValue().trim().substring(0, 4);
  var check = 'T';
  switch (disGubun) {
    case 1:
      //f_deptPopUp
      param = scwin.strCurDate;
      if (scwin.vCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
        // 자회사 회계 시스템
        param = param + "," + scwin.vCoCd + "," + scwin.vCoClsCd;
      }

      //param = ","+ed_coCd.text+","+txtCoClsCd.value+",0";
      //console.log("	scwin.f_openCommonPopUp ==>"+param);
      //청구부서코드팝업			
      pCode = ed_bilgLodeptCd.getValue().replace(/\s*$/, ''); // 청구부서코드
      pName = ed_bilgLodeptNm.getValue(); // 청구부서명

      udc_bilgLodeptCd.setSelectId('retrieveAcctDeptCdInfo6');
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, ed_bilgLodeptCd.getValue().trim(), "", pClose, null, null, null, null, param, null, null, null, null, null, null, null);
      break;
    case 2:
      //청구거래처코드팝업			
      pCode = ed_bilgClntNo.getValue().replace(/\s*$/, ''); // 청구거래처코드
      pName = ed_bilgClntNm.getValue(); // 청구거래처명
      param = ",,," + ed_coCd.getValue();
      //rtnList = cfCommonPopUp('retrieveClntList2',ed_bilgClntNo.getValue().trim(),ed_bilgClntNm.getValue(),pClose,null,null,null,null,param,null,null,null,null); 
      udc_bilgClntNo.setSelectId('retrieveClntList2');
      rtnList = udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNoCallback, ed_bilgClntNo.getValue().trim(), ed_bilgClntNm.getValue(), pClose, null, null, null, null, param, null, null, null, null);

      //청구거래처코드          청구거래처명
      //cfSetReturnValue(rtnList, ed_bilgClntNo, ed_bilgClntNm); 	

      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  var qryYear = ed_qryConDtFm.getValue().trim().substring(0, 4);
  var rtnList = new Array();
  switch (flag) {
    /*
    case '1':  
    // 계정조회
    var temp = ",,"; 
    rtnList = cfCommonPopUp('retrieveAcctCdInfo',ed_acctCdSt.getValue().trim(),ed_acctCdStNm.getValue(),check,null,null,null,null,temp,null,null,null,null); 
    f_resultPopEd(ed_acctCdSt,ed_acctCdStNm,rtnList);	
    break; 
    */
    case '3':
      // 부서  
      var param = "," + ed_coCd.getValue() + "," + scwin.txtCoClsCd + ",0";

      //rtnList = udc_bilgLodeptCd.cfCommonPopUp('retrieveAcctDeptCdInfo10',ed_bilgLodeptCd.getValue().trim(),ed_bilgLodeptNm.getValue(),check,null,null,null,null,param,null,null,null,null,null,null,null,null,null,qryYear); 

      udc_bilgLodeptCd.setSelectId('retrieveAcctDeptCdInfo10');
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, ed_bilgLodeptCd.getValue().trim(), ed_bilgLodeptNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, null, null, null, null, qryYear);

      //f_resultPopEd(ed_bilgLodeptCd,ed_bilgLodeptNm,rtnList);
      break;
    /*
     case '4':
       // 거래처
       	var param=",,,"+ed_coCd.getValue();
      
       	rtnList = cfCommonPopUp('retrieveClntList2',ed_clntNo.getValue().trim(),ed_clntNm.getValue(),check,null,null,null,null,param,null,null,null,null); 
    	f_resultPopEd(ed_clntNo,ed_clntNm,rtnList);	
    break;
    
    case  8:
     	// 사업자번호
      	var param ='';
      	var selectID= 'retrieveCrnInfo';
        
     	rtnList = cfCommonPopUp(selectID,ed_crn.getValue().trim(),ed_crnNm.getValue(),check,null,null,null,null,param,null,null,null,null); 	 	
     	  scwin.f_resultPopEd(ed_crn,ed_crnNm,rtnList);	
    			break;
    */
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
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, ed_bilgLodeptNm, ed_qryConDtFm, ed_qryConDtTo]);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = async function (arg) {
  if (arg != "NEW" && ds_generalbillingorder.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_008, ["오더내역"]);
    return;
  }
  var row = ds_generalbillingorder.getRowPosition();
  if ($c.gus.cfIsNull($p, row)) {
    return;
  }
  var strOrderDetailUrl = "/ui/ja/ds/fs/bilg/ja_fs_202_03_02b.xml";

  // 선택된 오더 정보 : 오더번호 , flag
  var v_odrNo = ds_generalbillingorder.getCellData(row, "odrNo");
  var v_flag = arg;

  //condition += "odrNo="+v_odrNo+"&flag="+v_flag;

  var title = "일반청구오더관리";
  var pgmId = "ja_fs_202_03_02b.jsp";
  var paramObj = {
    odrNo: v_odrNo,
    flag: v_flag
  };
  $c.win.openMenu($p, title, strOrderDetailUrl, pgmId, paramObj);
  //cfTabMenuUpdate( strOrderDetailUrl+condition , "일반청구오더관리") ;
};

/*
    scwin.f_EventCheck = function() {
        if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
            return 'F';
        } else {
            return 'T';
        }
    };
*/

scwin.f_IsPopUp = function (inObj) {
  var inValue = $c.gus.cfGetValue($p, inObj);
  var hidValue = inObj.hidVal;
  console.log('scwin.f_IsPopUp ========');
  console.log(scwin.f_IsPopUp.arguments);
  console.log('length ==>' + scwin.f_IsPopUp.arguments.length);
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.hidVal = "";
    for (var i = 0; i < scwin.f_IsPopUp.arguments.length; i++) {
      $c.gus.cfSetValue($p, scwin.f_IsPopUp.arguments[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

/*
  scwin.f_resultPopEd = function(strCd,strNm,rtnList){
	   if (rtnList != null ) {
	   if (rtnList[0] == "N/A") {
				return;
			}
			strCd.setValue(rtnList[0]);	// 코드
			strNm.setValue(rtnList[1]);	// 명
			strCd.hidVal = rtnList[0];  // 히든값
	    }else{
	    	strCd.setValue("");
			strNm.setValue("");
			strCd.hidVal = "";
		}
};
*/

scwin.sbm_generalbillingorder_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_generalbillingorder.getRowCount();
  tbx_totalRows.setValue(rowcnt);
};
scwin.sbm_generalbillingorder_retrieve_submiterror = function (e) {};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_initObj();
  acb_qryConKnd.setSelectedIndex(0);
  ed_qryConDtFm.setValue(scwin.strPreDate);
  ed_qryConDtTo.setValue(scwin.strCurDate);
  acb_bilgOdrKndCd.setValue("");
  acb_sellDcsnClsCd.setValue("");

  //scwin.f_OnLoad();
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

//참조신규
scwin.btn_ctrtChg_onclick = function (e) {
  scwin.f_orderDetail('REFERENCE');
};

//신규
scwin.btn_ctrtEdit_onclick = function (e) {
  scwin.f_orderDetail('NEW');
};

//상세
scwin.btn_ctrtPrint_onclick = function (e) {
  scwin.f_orderDetail('DETAIL');
};
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.value = '';
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onblurNameEvent = function (e) {
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  //if (scwin.f_IsPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm)) { scwin.f_deptPopUp('EDI'); }
  //scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);

  scwin.f_deptPopUp('EDI');
};
scwin.udc_bilgLodeptCd_onblurNameEvent = function (e) {
  //scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1);
  ed_bilgLodeptCd.setValue('');
  scwin.f_openPopUp('3', 'T');
};
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  //scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
  scwin.f_deptPopUp('BTN');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNm.getValue(), ed_bilgClntNo.getValue(), 'F', 'F');
};
scwin.udc_coCdCallBack = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    if (ed_coCd.hidVal != rtnList[0]) scwin.f_initObj();
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    ed_coCd.hidVal = rtnList[0]; // 히든값
    scwin.txtCoClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    ed_coCd.hidVal = "";
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.udc_bilgLodeptCdCallback = function (ret) {
  scwin.f_setUdcPopCallback(ret, ed_bilgLodeptCd, ed_bilgLodeptNm);
};
scwin.udc_bilgClntNoCallback = function (ret) {
  scwin.f_setUdcPopCallback(ret, ed_bilgClntNo, ed_bilgClntNm);
};

//udc팝업공통 콜백처리
scwin.f_setUdcPopCallback = function (ret, objCode, objName) {
  try {
    // 선언부
    let rtnList = new Array(); // 공통POP-UP -> 요청화면
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") {
        objCode.setValue("");
        objName.setValue("");
        objCode.hidVal = "";
        return;
      }
      objCode.setValue(rtnList[0]); // 코드값
      objName.setValue(rtnList[1]); // 코드명
      objCode.hidVal = rtnList[0]; // 코드값
    } else {
      objCode.setValue("");
      objName.setValue("");
      objCode.hidVal = "";
    }
  } catch (e) {
    console.log(e);
  }
};
scwin.gr_generalbillingorder_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_orderDetail("DETAIL");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_coCd',style:'',id:'udc_coCd',codeId:'ed_coCd',nameId:'ed_coNm',btnId:'btn_coCd',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'ds_generalbillingorder_con',code:'coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_coCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',maxlengthCode:'3',maxlengthName:'50',allowCharCode:'0-9',mandatoryCode:'true',name:'coNm',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgLodeptCd',style:'',btnId:'btn_bilgLodeptCd',codeId:'ed_bilgLodeptCd',id:'udc_bilgLodeptCd',nameId:'ed_bilgLodeptNm','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgLodeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',selectID:'retrieveAcctDeptCdInfo6',mandatoryCode:'true',allowCharCode:'0-9',maxlengthCode:'5',maxlengthName:'50',code:'bilgLodeptCd',refDataCollection:'ds_generalbillingorder_con',name:'bilgLodeptNm',validTitle:'부서코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150 req',editType:'select',id:'acb_qryConKnd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_generalbillingorder_con.qryConKnd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출세금계산서일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'매출세금계산서'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출회계일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'매출회계'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작성일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'작성'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDtFm',refDataMap:'ds_generalbillingorder_con',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'조회 시작일자',titleTo:'조회 종료일자'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgClntNo',style:'',id:'udc_bilgClntNo',codeId:'ed_bilgClntNo',btnId:'btn_bilgClntNo',nameId:'ed_bilgClntNm','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',selectID:'retrieveClntList2',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'A-Z0-9',refDataCollection:'ds_generalbillingorder_con',code:'bilgClntNo',name:'bilgClntNm',validTitle:'청구처'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'일반청구오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_bilgOdrKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_generalbillingorder_con.bilgOdrKndCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출확정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_sellDcsnClsCd',search:'start',style:'width:150px;',submenuSize:'auto',hideListOnFocus:'true',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_generalbillingorder_con.sellDcsnClsCd'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'display:none',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger1',style:'display:none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_generalbillingorder',grdDownOpts:'{"fileName":"일빈청구오더현황.xls","sheetName": "일빈청구오더현황","type":"2+4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_generalbillingorder',id:'gr_generalbillingorder',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_generalbillingorder_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'실적일자',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'청구오더<br/>종류',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'청구<br/>거래처',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매입<br/>거래처',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'환종',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'환율',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'공급금액',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column58',value:'부가세',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column52',value:'합계',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column46',value:'확정상태',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column40',value:'거래명세서번호',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column34',value:'세금계산서',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column73',value:'매출원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'매출외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'매입원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column70',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column69',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column68',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column67',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column66',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column65',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column64',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column63',value:'매입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column62',value:'매출',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column61',value:'매입',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgOdrKndNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptExchRt',inputType:'text',width:'70',textAlign:'left',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmtFcrc',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsVat',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellTotAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTotAmt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellDcsnClsNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsDcsnClsNm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellCertiNo',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsCertiNo',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellVatNo',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsVatNo',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmt\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'sellAmtFcrc\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'pchsAmt\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'sum(\'sellVat\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',expression:'sum(\'pchsVat\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',expression:'sum(\'sellTotAmt\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',expression:'sum(\'pchsTotAmt\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column48',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column45',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column36',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',displayMode:'label',textAlign:'right',dataType:'text',excelCellType:'text'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_ctrtChg',label:'저장',type:'button',class:'btn ','ev:onclick':'scwin.btn_ctrtChg_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'참조신규'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_ctrtEdit',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ctrtEdit_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ctrtPrint',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ctrtPrint_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세'}]}]}]}]}]}]}]}]}]})