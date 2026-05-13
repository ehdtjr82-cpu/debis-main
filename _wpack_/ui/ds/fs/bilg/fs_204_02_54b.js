/*amd /ui/ds/fs/bilg/fs_204_02_54b.xml 62068 1f26529099d604d7861bced42fcd3c30e9ad0a0461ae27940451f0576a04a751 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'조회시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'조회종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'SELF_구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendYn',name:'출고예정 발생여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'detailAllYn',name:'오더별 출고현황 전체',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrievePrebillingOrder',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsNm',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendCnt',name:'건수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'WrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구;거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslportcnt',name:'모선/항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'중량(TON)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVatAmt',name:'수납액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'계산서일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveOutIntend',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendNo',name:'출고예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outIntendDt',name:'출고예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'계산서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pldgMgntNo',name:'담보번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellVatAmt',name:'계산서금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pldgAmt',name:'담보금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'jdgAmt',name:'감정금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cstmdtAmt',name:'관세금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명/컨테이너;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명/컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(TON)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_outIntendQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrDt',name:'오더일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsNm',name:'자가구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outIntendCnt',name:'건수',dataType:'text'}},{T:1,N:'w2:key',A:{id:'WrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'매출부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNm',name:'청구;거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslportcnt',name:'모선/항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'grossWt',name:'중량(TON)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:key',A:{id:'spplyAmt',name:'매출액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellVatAmt',name:'수납액',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipDt',name:'계산서일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrievePrebillingOrder',action:'/ds.sd.odrmgnt.odroutintend.RetrievePrebillingOrderPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_queryCondition","key":"IN_DS1"},{"id":"ds_retrievePrebillingOrder","key":"OUT_DS1"},{"id":"ds_retrieveOutIntend","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_retrievePrebillingOrder","key":"OUT_DS1"},{"id":"ds_retrieveOutIntend","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrievePrebillingOrder_submitdone','ev:submiterror':'scwin.sbm_retrievePrebillingOrder_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOutIntend',action:'/ds.sd.odrmgnt.odroutintend.RetrieveOrderEachOutIntendListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_outIntendQueryCondition","key":"IN_DS1"},{"id":"ds_retrieveOutIntend","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_retrieveOutIntend","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveOutIntend_submitdone','ev:submiterror':'scwin.sbm_retrieveOutIntend_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/청구/청구공통코드관리/선수납 오더 현황 조회  사용여부 N
//물류/오더/오더출고예정/선수납 오더 현황 조회 사용여부 Y

//조회조건 오더점소 : 6AA
//          BL_NO : 11 or 오더일자 : 20250301 ~ 20250313

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.f_OnLoad = function () {
  //console.log("onload~~"+DsConstants.ODR_CNTR);

  acb_qryConKnd.setValue("오더일자");
  ica_qryConDtFm.setValue(scwin.strPreDate);
  ica_qryConDtTo.setValue(scwin.strCurDate);
  rd_transCargoClsCd.setValue("C");
  rd_outIntendYn.setValue("A");
  cbx_detailAllYn.checkAll(false);
  ed_regBranCd.focus();
  grp_qryConCd.hide();

  //scwin.f_Retrieve();
};
scwin.onUdcCompleted = function () {
  //scwin.f_setOrdKindCombo();
  //scwin.f_OnLoad();

  const codeOptions = [
  //{ grpCd: 'SD113', compID: 'acb_odrKndCd', opt :{"range" : "1,C"}}
  {
    grpCd: 'SD113',
    compID: 'acb_odrKndCd',
    opt: {
      "range": "3,1"
    }
  }];

  //* @param grpCd 그룹코드
  //* @param filterIndex 필터인덱스배열(1, 2, 3)
  //* @param filterCd 필터코드배열
  //{ grpCd : "SD113", compID : "acb_odrKndCd", opt :{"range" :"1,C"}} //<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>">

  $c.data.setCommonCode($p, codeOptions, scwin.f_OnLoad);
};

/*
    scwin.f_setOrdKindCombo = function (){
        const codeOptions = [
            //{ grpCd: 'SD113', compID: 'acb_odrKndCd', opt :{"range" : "1,C"}}
            { grpCd: 'SD113', compID: 'acb_odrKndCd', opt :{"range" : "3,1"}}
        ];

        // @param grpCd 그룹코드
        // @param filterIndex 필터인덱스배열(1, 2, 3)
        // @param filterCd 필터코드배열
        //{ grpCd : "SD113", compID : "acb_odrKndCd", opt :{"range" :"1,C"}} //<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>">

        $c.data.setCommonCode(codeOptions,scwin.f_OnLoad());
    };
*/

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //validation check   
  if (acb_qryConKnd.getValue() == "오더일자") {
    if (!(await $c.gus.cfValidate($p, [ed_regBranCd, ica_qryConDtFm, ica_qryConDtTo]))) {
      return;
    }
    //조회시작일자가 더 클경우 체크
    if (!(await $c.gus.cfIsAfterDate($p, ica_qryConDtFm.getValue(), ica_qryConDtTo.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return;
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [ed_regBranCd, ed_qryConCd]))) {
      return;
    }
  }

  /*
       	var dsHeader = "regBranCd:STRING,qryConKnd:STRING,qryConDtFm:STRING,qryConDtTo:STRING,qryConCd:STRING,"+
       	               "bilgClntNo:STRING,transCargoClsCd:STRING,odrKndCd:STRING,lineCd:STRING,"+
       	               "wrkPlCd:STRING,vsslCd:STRING,portcnt:STRING,regId:STRING,"+
       	               "selfClsCd:STRING,outIntendYn:STRING,detailAllYn:STRING";
  	 	ds_queryCondition.SetDataHeader(dsHeader);
   		ds_queryCondition.AddRow();
   		
       	ds_queryCondition.setValue("regBranCd"   	, ed_regBranCd.getValue());
       	ds_queryCondition.setValue("qryConKnd" 		, acb_qryConKnd.getValue());
       	ds_queryCondition.setValue("qryConDtFm"     , ica_qryConDtFm.getValue());
       	ds_queryCondition.setValue("qryConDtTo"     , ica_qryConDtTo.getValue());
       	ds_queryCondition.setValue("qryConCd"    	, ed_qryConCd.getValue());
       	ds_queryCondition.setValue("bilgClntNo"     , ed_bilgClntNo.getValue());
       	ds_queryCondition.setValue("transCargoClsCd", rd_transCargoClsCd.getValue()); 
       	ds_queryCondition.setValue("odrKndCd"	  	, acb_odrKndCd.getValue());   	
       	ds_queryCondition.setValue("lineCd"         , ed_lineCd.getValue());
       	//ds_queryCondition.setValue("outAdjmStsCd" , acb_outAdjmStsCd.getValue());
       	ds_queryCondition.setValue("wrkPlCd"        , ed_wrkPlCd.getValue());
       	ds_queryCondition.setValue("vsslCd"     	, ed_vsslCd.getValue());
       	ds_queryCondition.setValue("portcnt"     	, ed_portcnt.getValue());
       	ds_queryCondition.setValue("regId"     		, ed_regId.getValue());
       	ds_queryCondition.setValue("selfClsCd"	 	, acb_selfClsCd.getValue());
       	ds_queryCondition.setValue("outIntendYn"   	, rd_outIntendYn.getValue());
  		ds_queryCondition.setValue("detailAllYn"   	, cbx_detailAllYn.checked == true ? "Y" : "N");
  		//상세화면 데이타 Clear
  		ds_retrievePrebillingOrder.ClearData();
  		ds_retrieveOutIntend.ClearData();
  		$c.gus.cfShowTotalRows(totalRows1, 0);
  		 $c.gus.cfShowTotalRows(totalRows2, 0);
  		//gr_retrievePrebillingOrder.ReDraw = "false"
  		//gr_retrievePrebillingOrder.DataID = ""
  				
     		//tr_retrievePrebillingOrder.Action = "/ds.sd.odrmgnt.odroutintend.RetrievePrebillingOrderPresentConditionCMD.do";
     		//tr_retrievePrebillingOrder.Post();
  */
  ds_retrievePrebillingOrder.removeAll();
  ds_retrieveOutIntend.removeAll();
  $c.sbm.execute($p, sbm_retrievePrebillingOrder);
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 				
  switch (disGubun) {
    case 1:
      //오더점소코드팝업			
      //rtnList = cfCommonPopUp('retrieveLobranInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_regBranCd.setSelectId('retrieveLobranInfo');
      rtnList = udc_regBranCd.cfCommonPopUp(scwin.udc_regBranCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_regBranCd, ed_regBranNm);  // 오더점소코드, 오더점소				
      break;
    case 2:
      //청구처코드팝업			
      //rtnList = cfCommonPopUp('retrieveClntInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_bilgClntNo.setSelectId('retrieveClntInfo');
      rtnList = udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_bilgClntNo, ed_bilgClntNm);  // 청구처코드, 청구처명				
      break;
    /*	
    case 3:
    	//LINE코드팝업			
    	//rtnList = cfCommonPopUp('retrieveLineInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
    		$c.gus.cfSetReturnValue(rtnList, ed_lineCd, ed_lineNm);  // LINE코드, LINE명				
    	break;		
    */
    case 4:
      //작업장코드팝업			
      //rtnList = cfCommonPopUp('retrieveWrkPlInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_wrkPlCd.setSelectId('retrieveWrkPlInfo');
      rtnList = udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_wrkPlCd, ed_wrkPlNm);  // 작업장코드, 작업장명				
      break;
    case 5:
      //B/L코드팝업			
      //rtnList = cfCommonPopUp('retrieveBlNoList',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_comCodeGrid.setSelectId('retrieveBlNoList');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridBlNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd2, ed_qryConNm2);  // B/L코드, B/L명
      /*
      if(rtnList != undefined){
      $c.gus.cfSetValue(ed_qryConCd, rtnList[1]);
      $c.gus.cfSetHiddenValue(ed_qryConCd, rtnList[1]);				
      }
      */
      break;
    case 6:
      //CNTR-NO코드팝업			
      //rtnList = cfCommonPopUp('retrieveConteinerNo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_comCodeGrid.setSelectId('retrieveConteinerNo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // CNTR-NO코드, CNTR-NO명				
      break;
    case 7:
      //오더코드팝업			
      //rtnList = $c.gus.cfCommonPopUp('retrieveOdrNo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_comCodeGrid.setSelectId('retrieveOdrNo');
      rtnList = udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGridCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // 오더코드, 오더명				
      break;
    case 8:
      /*
      //담보번호팝업			
      var style = "center:yes; dialogwidth:830px; dialogheight:550px; scroll:no; resizable:no; status:yes;";
      var strPath = "fs_204_02_20p.jsp";	  		
      var p_bilgLodeptCd = ed_regBranCd.getValue();
      var p_bilgLodeptNm = ed_regBranNm.getValue();	  	
      var p_pgmId        = "";//pgmId
      var p_slipKndCd	   = "F04";
      var p_slipKndNm	   = "담보전표";
      var	arrParm	       = new Array(p_bilgLodeptCd,p_bilgLodeptNm,p_pgmId,p_slipKndCd,p_slipKndNm);  		
      var	returnValue = window.showModalDialog(strPath, arrParm, style ) ;
      if ( returnValue != null) {
      ed_qryConCd.setValue(returnValue);
      }
      */

      var p_bilgLodeptCd = ed_regBranCd.getValue();
      var p_bilgLodeptNm = ed_regBranNm.getValue();
      var p_pgmId = ""; //pgmId
      var p_slipKndCd = "F04";
      var p_slipKndNm = "담보전표";
      let data = new Array(p_bilgLodeptCd, p_bilgLodeptNm, p_pgmId, p_slipKndCd, p_slipKndNm);
      let opt = {};
      //let data = {};

      opt.width = "830";
      opt.height = "550";
      opt.id = "popUpAutoCreation";
      opt.title = "담보전표";
      opt.popupName = "담보전표";

      //data.coCd = ed_coCd.getValue();
      //data.coNm = ed_coNm.getValue();

      //실제호출
      //$c.win.openPopup("./fs_204_02_20p.xml", opt, data); //페이지없음.
      break;
    case 9:
      /*  페이지없음
      //계산서번호팝업			
      var style = "center:yes; dialogwidth:830px; dialogheight:550px; scroll:no; resizable:no; status:yes;";
      var strPath = "fs_204_02_20p.jsp";	  		
      var p_bilgLodeptCd = ed_regBranCd.getValue();
      var p_bilgLodeptNm = ed_regBranNm.getValue();	  	
      var p_pgmId        = "";//pgmId
      var p_slipKndCd	   = "F03";
      var p_slipKndNm	   = "영수전표";
      var	arrParm	       = new Array(p_bilgLodeptCd,p_bilgLodeptNm,p_pgmId,p_slipKndCd,p_slipKndNm);  		
      var	returnValue = window.showModalDialog(strPath, arrParm, style ) ;
      if ( returnValue != null) {
      ed_qryConCd.setValue(returnValue);	
      }			
          */
      break;
    case 10:
      //사용자팝업			
      //rtnList = cfCommonPopUp('retrieveUserInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      udc_regId.setSelectId('retrieveUserInfo');
      rtnList = udc_regId.cfCommonPopUp(scwin.udc_regIdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_regId, ed_regNm);  // 사용자코드, 사용자명				
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조건에 따른 팝업창 띄우기
//-------------------------------------------------------------------------	
scwin.f_QryConPopUp = function (flag) {
  if (acb_qryConKnd.getValue() == "BL-NO") {
    scwin.f_openCommonPopUp(5, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd.getValue() == "CNTR-NO") {
    scwin.f_openCommonPopUp(6, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd.getValue() == "오더번호") {
    scwin.f_openCommonPopUp(7, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd.getValue() == "담보번호") {
    scwin.f_openCommonPopUp(8, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd.getValue() == "계산서번호") {
    scwin.f_openCommonPopUp(9, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

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
  $c.gus.cfInitObjects($p, tbl_search, []);
  acb_qryConKnd.setValue("오더일자");
  ica_qryConDtFm.setValue(scwin.strPreDate);
  ica_qryConDtTo.setValue(scwin.strCurDate);
  rd_transCargoClsCd.setValue("C");
  rd_outIntendYn.setValue("A");
  //cbx_detailAllYn.checked = false;
  cbx_detailAllYn.checkAll(false);
  ed_regBranCd.focus();
};

/*
  	//-------------------------------------------------------------------------
	//그리드 높이 늘리기
  	//-------------------------------------------------------------------------	
	scwin.f_grdHeight = function (size, objGrd) {
	
	    var objGrd = eval(objGrd);
	  	var strHeight = objGrd.style.height ;
	  	var intHeight = parseInt(strHeight.replace("px",""));
	  	intHeight = intHeight + size;
	 	if (intHeight > 0 ) {
	  		objGrd.style.height = intHeight + "px";
	 	}

	};
*/
//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet1 = async function (arg) {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "선청구 오더 현황.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: "선청구 오더 현황" //엑셀내 시트명 지정필요시
      ,

      useStyle: "true"
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_retrievePrebillingOrder, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//엑셀 다운로드
//-------------------------------------------------------------------------		
scwin.f_downExcelSheet2 = async function (arg) {
  if (await $c.win.confirm($p, "Excel로 다운로드 하시겠습니까?")) {
    const options = {
      fileName: "선청구 오더별 출고 예정 현황.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: "선청구 오더별 출고 예정 현황" //엑셀내 시트명 지정필요시
      ,

      useStyle: "true",
      colMerge: "true"
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_retrieveOutIntend, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = function (arg) {
  //var condition ="?";
  var strOrderDetailUrl = "";
  var strOrderDetailTitle = "";

  // 선택된 오더 정보 : 오더번호 , flag
  var v_odrNo = ds_retrievePrebillingOrder.getCellData(ds_retrievePrebillingOrder.getRowPosition(), "odrNo");
  if (ds_retrievePrebillingOrder.getCellData(ds_retrievePrebillingOrder.getRowPosition(), "odrKndCd") == "CK") {
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_03b.xml";
    strOrderDetailTitle = "벌크출고예정(선수납)";
  } else if (ds_queryCondition.get("transCargoClsCd") == "C") {
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_02b.xml";
    strOrderDetailTitle = "컨테이너출고예정(선수납)";
  } else {
    strOrderDetailUrl = "/ui/ds/sd/odrmgnt/odroutintend/sd_404_01_03b.xml";
    strOrderDetailTitle = "벌크출고예정(선수납)";
  }
  var v_outIntendNo = "";
  if (arg == "odrNo") {
    v_outIntendNo = "";
  } else {
    v_outIntendNo = ds_retrieveOutIntend.getCellData(ds_retrieveOutIntend.getRowPosition(), "outIntendNo");
  }

  //condition += "odrNo="+v_odrNo+"&outIntendNo="+v_outIntendNo;
  var pgmId = strOrderDetailUrl.substring(strOrderDetailUrl.lastIndexOf("/") + 1);
  var paramData = {
    odrNo: v_odrNo,
    outIntendNo: v_outIntendNo
  };
  $c.win.openMenu($p, strOrderDetailTitle, strOrderDetailUrl, pgmId, paramData, {
    openAction: "exist"
  });
};
scwin.sbm_retrievePrebillingOrder_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_retrievePrebillingOrder.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_retrievePrebillingOrder.setFocusedCell(0, "odrNo", false);
    ed_regBranCd.focus();
  } catch (e) {
    console.log("sbm_retrievePrebillingOrder_submitdone : " + e);
  }
};
scwin.sbm_retrievePrebillingOrder_submiterror = function (e) {};
scwin.sbm_retrieveOutIntend_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_retrieveOutIntend.getRowCount();
    tbx_totalRows2.setValue(rowcnt);
    for (var i = 0; i < ds_retrieveOutIntend.getRowCount(); i++) {
      scwin.customBgColor(i);
    }
  } catch (e) {
    console.log("sbm_retrieveOutIntend_submitdone : " + e);
  }
};
scwin.sbm_retrieveOutIntend_submiterror = function (e) {};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_regBranCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regBranCd, ed_regBranNm, 1);
};
scwin.udc_regBranCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regBranNm, ed_regBranCd, 1, false);
};
scwin.udc_regBranCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_regBranCd.getValue(), ed_regBranNm.getValue(), 'F', 'F');
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
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlCd, ed_wrkPlNm, 4);
};
scwin.udc_wrkPlCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_wrkPlNm, ed_wrkPlCd, 4, false);
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), 'F', 'F');
};
scwin.udc_regId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regId, ed_regNm, 10);
};
scwin.udc_regId_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regNm, ed_regId, 10, false);
};
scwin.udc_regId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_regId.getValue(), ed_regNm.getValue(), 'F', 'F');
};
scwin.btn_line_onclick = function (e) {
  scwin.f_openCommonPopUp(8, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.btn_qryConCd_onclick = function (e) {
  scwin.f_QryConPopUp();
};
scwin.udc_regBranCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regBranCd, ed_regBranNm); // 오더점소코드, 오더점소
};
scwin.udc_bilgClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm); // 청구처코드, 청구처명
};
scwin.udc_wrkPlCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrkPlCd, ed_wrkPlNm); // 작업장코드, 작업장명
};
scwin.udc_regIdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_regId, ed_regNm); // 사용자코드, 사용자명
};
scwin.udc_comCodeGridBlNoCallback = function (rtnList) {
  if (rtnList != undefined) {
    $c.gus.cfSetValue($p, ed_qryConCd, rtnList[1]);
    $c.gus.cfSetHiddenValue($p, ed_qryConCd, rtnList[1]);
  }
};
scwin.udc_comCodeGridCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_qryConCd, ed_qryConNm);
};
scwin.gr_retrievePrebillingOrder_oncellclick = function (rowIndex, columnIndex, columnId) {
  //var colid = columnId;
  //scwin.customBgColor(rowIndex);

  if (columnId == "odrNo") {
    scwin.f_orderDetail(columnId);
  }

  //if(!cbx_detailAllYn.checked){
  if (cbx_detailAllYn.getSelectedIndex() == "") {
    ///cfCopyDataSetHeader(ds_retrievePrebillingOrder, ds_outIntendQueryCondition);
    //transRow = ds_retrievePrebillingOrder.ExportData(row,1,false);
    //ds_outIntendQueryCondition.ImportData(transRow);
    //tr_retrieveOutIntend.Action = "/ds.sd.odrmgnt.odroutintend.RetrieveOrderEachOutIntendListCMD.do";
    //tr_retrieveOutIntend.Post();
    //var returnData = dlt_dataList1.getRowJSON(0);

    var transRow = ds_retrievePrebillingOrder.getRowJSON(rowIndex);
    //console.log(transRow);
    ds_outIntendQueryCondition.setEmptyValue();
    ds_outIntendQueryCondition.setJSON(transRow);
    $c.sbm.execute($p, sbm_retrieveOutIntend);
  }
};
scwin.gr_retrieveOutIntend_oncellclick = function (rowIndex, columnIndex, columnId) {
  //if(row > 0){
  if (columnId == "outIntendNo" && ds_retrieveOutIntend.getCellData(rowIndex, "flag") == "1") {
    scwin.f_orderDetail(columnId);
  }
  //}
};
scwin.acb_qryConKnd_onchange = function (info) {
  console.log('scwin.acb_qryConKnd_onchange~~');
  console.log(info);
  if (info.newValue == "오더일자") {
    //udc_qryConDtFm, ed_qryConCd, btn_qryConCd, grp_qryConCd
    //div_qryConKnd1.style.display = 'block';
    //div_qryConKnd2.style.display = 'none';

    udc_qryConDtFm.show();
    grp_qryConCd.hide();
    $c.gus.cfEnableObj($p, rd_transCargoClsCd, true);
    $c.gus.cfEnableObj($p, cbx_detailAllYn, true);
  } else if (info.newValue == "CNTR-NO") {
    cbx_detailAllYn.checkAll(false);
    $c.gus.cfEnableObj($p, cbx_detailAllYn, false);
    rd_transCargoClsCd.setValue("C");
    $c.gus.cfEnableObj($p, rd_transCargoClsCd, false);
    udc_qryConDtFm.hide();
    grp_qryConCd.show();

    //acb_odrKndCd.CBData = "^전체,<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>";
    //acb_odrKndCd.Index = 0;
    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'block';
  } else {
    //cbx_detailAllYn.checked = false;
    cbx_detailAllYn.checkAll(false);
    $c.gus.cfEnableObj($p, cbx_detailAllYn, false);
    $c.gus.cfEnableObj($p, rd_transCargoClsCd, true);
    udc_qryConDtFm.hide();
    grp_qryConCd.show();

    //div_qryConKnd1.style.display = 'none';
    //div_qryConKnd2.style.display = 'block';
  }
};
scwin.rd_transCargoClsCd_onchange = function (info) {
  console.log('scwin.rd_transCargoClsCd_onchange ~~');
  /*
  if(rd_transCargoClsCd.CodeValue == "C"){
  acb_odrKndCd.CBData = "^전체,<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_CNTR, "1" }) %>";
  acb_odrKndCd.Index = 0;
  }else{
  acb_odrKndCd.CBData = "^전체,<%= GauceUtil.getCodeList("SD113", new int[] {1,3}, new String[] {DsConstants.ODR_BULK, "1" }) %>";
  acb_odrKndCd.Index = 0;
  }
  */
  //ds_retrieveOutIntend.setColumnFilter(filterOptions)
  //if(rd_transCargoClsCd.getValue() == "C"){
  if (info.newValue == "C") {
    dlt_commonCodeSD113.clearFilter();
    dlt_commonCodeSD113.setColumnFilter({
      type: 'row',
      colIndex: 'fltrCd1',
      key: DsConstants.ODR_CNTR,
      condition: 'and'
    });
    dlt_commonCodeSD113.reform();
  } else {
    dlt_commonCodeSD113.clearFilter();
    dlt_commonCodeSD113.setColumnFilter({
      type: 'row',
      colIndex: 'fltrCd1',
      key: DsConstants.ODR_BULK,
      condition: 'and'
    });
    dlt_commonCodeSD113.reform();
  }
};
scwin.f_setWrkPlCd = function () {
  console.log('111');
};
scwin.customWrkPlCd = function (data, formatData, rowIdx, colIdx) {
  //decode(dptWrkPlCd&arvWrkPlCd,"","",dptWrkPlCd&"-"&arvWrkPlCd&" / "&dptWrkPlNm&"-"&arvWrkPlNm)

  var v_dptWrkPlCd = ds_retrievePrebillingOrder.getCellData(rowIdx, 'dptWrkPlCd');
  var v_arvWrkPlCd = ds_retrievePrebillingOrder.getCellData(rowIdx, 'arvWrkPlCd');
  var v_customCd = '' + v_dptWrkPlCd + v_dptWrkPlCd;
  return $c.gus.decode($p, v_customCd, "", "", v_dptWrkPlCd + '-' + v_arvWrkPlCd + '/' + ds_retrievePrebillingOrder.getCellData(rowIdx, 'dptWrkPlNm') + '-' + ds_retrievePrebillingOrder.getCellData(rowIdx, 'arvWrkPlNm'));
};
scwin.customVsslportcnt = function (data, formatData, rowIdx, colIdx) {
  //decode(vsslCd&portcnt,"","",vsslCd&"/"&portcnt)

  var v_vsslCd = ds_retrievePrebillingOrder.getCellData(rowIdx, 'vsslCd');
  var v_portcnt = ds_retrievePrebillingOrder.getCellData(rowIdx, 'portcnt');
  var v_customCd = '' + v_vsslCd + v_portcnt;
  return $c.gus.decode($p, v_customCd, "", "", v_vsslCd + '/' + v_portcnt);
};
scwin.customCommSeq = function (data, formatData, rowIdx, colIdx) {
  var flag = ds_retrievePrebillingOrder.getCellData(rowIdx, 'flag');
  var colId = gr_retrieveOutIntend.getColumnID(colIdx);
  if (colId == "commSeq" && data == "0") {
    return "";
  }
  return $c.gus.decode($p, flag, "1", "", data);
};
scwin.customBgColor = function (rowIdx) {
  var flag = gr_retrieveOutIntend.getCellData(rowIdx, 'flag');
  var color = "";
  if (flag == '1') {
    color = "#DDDDDD";
  }
  console.log('scwin.customBgColor ~~' + color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "odrNo", "#DDDDDD");
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "outIntendNo", "#DDDDDD");
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "outIntendDt", "#DDDDDD");
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "bilgClntNo", "#DDDDDD");
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "bilgClntNm", "#DDDDDD");
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "commSeq", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "commCd", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "commNm", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "qty", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "wt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "cbm", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "spplyAmt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "pldgAmt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "sellVatAmt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "jdgAmt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "cstmdtAmt", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "pldgMgntNo", color);
  gr_retrieveOutIntend.setCellBackgroundColor(rowIdx, "slipNo", color);
};

/*
scwin.customExp1 = function (data, formatData, rowIdx, colIdx) { //pmntSlipNoExp
    let flag = ds_retrieveCargo.getCellData(rowIdx, "flag");
    let commSeq = ds_retrieveCargo.getCellData(rowIdx, "commSeq");
    return $c.gus.decode(flag, 1, "", commSeq);
};

scwin.customExp2 = function (data, formatData, rowIdx, colIdx) { //pmntSlipNoExp
    let flag = ds_retrieveCargo.getCellData(rowIdx, "flag");
    let commCd = ds_retrieveCargo.getCellData(rowIdx, "commCd");
    return $c.gus.decode(flag, 1, "", commCd);
};

scwin.customExp3 = function (data, formatData, rowIdx, colIdx) { //pmntSlipNoExp
    let flag = ds_retrieveCargo.getCellData(rowIdx, "flag");
    let commNm = ds_retrieveCargo.getCellData(rowIdx, "commNm");
    return $c.gus.decode(flag, 1, "", commNm);
};
*/
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_regBranCd',maxlengthCode:'4',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_regBranNm',id:'udc_regBranCd',btnId:'btn_regBranCd',validTitle:'청구부서',refDataCollection:'ds_queryCondition',code:'regBranCd',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_regBranCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_regBranCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_regBranCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{displayMode:'label',class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_queryCondition.qryConKnd','ev:onchange':'scwin.acb_qryConKnd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BL-NO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CNTR-NO'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더일자'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더번호'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'담보번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'담보번호'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계산서번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'계산서번호'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryConDtFm',refDataMap:'ds_queryCondition',refEdDt:'qryConDtTo',refStDt:'qryConDtFm',style:'',edFromId:'ica_qryConDtFm',edToId:'ica_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'시작일자',titleTo:'종료일자'}},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_qryConCd',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_qryConCd',placeholder:'',style:'width: 150px;',maxlength:'15',allowChar:'A-Z0-9',ref:'data:ds_queryCondition.qryConCd',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_qryConNm',placeholder:'',style:'display:none'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_qryConCd',style:'',type:'button','ev:onclick':'scwin.btn_qryConCd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_bilgClntNo',maxlengthCode:'6',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_bilgClntNm',id:'udc_bilgClntNo',btnId:'btn_bilgClntNo',validTitle:'청구지점',code:'bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent',refDataCollection:'ds_queryCondition'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'data:ds_queryCondition.transCargoClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.rd_transCargoClsCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_queryCondition.odrKndCd'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',placeholder:'',style:'width:85px;',maxlength:'5',ref:'data:ds_queryCondition.lineCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_lineNm',placeholder:'',style:'display:none',ref:''}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_line',style:'',type:'button','ev:onclick':'scwin.btn_line_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_wrkPlCd',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_wrkPlNm',id:'udc_wrkPlCd',btnId:'btn_wrkPlCd',validTitle:'청구지점',refDataCollection:'ds_queryCondition','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_wrkPlCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vsslCd',placeholder:'',style:'width:85px;',maxlength:'4',ref:'data:ds_queryCondition.vsslCd'}},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:85px;',maxlength:'10',ref:'data:ds_queryCondition.portcnt'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_regId',maxlengthCode:'8',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',nameId:'ed_regNm',id:'udc_regId',btnId:'btn_regId',validTitle:'청구지점',refDataCollection:'ds_queryCondition',code:'regId','ev:onblurCodeEvent':'scwin.udc_regId_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_regId_onblurNameEvent','ev:onclickEvent':'scwin.udc_regId_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',ref:'data:ds_queryCondition.selfClsCd',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가반출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JE'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가영업'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LS'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사운송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LI'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출고예정 발생여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_outIntendYn',ref:'data:ds_queryCondition.outIntendYn',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미발생'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_detailAllYn',ref:'data:ds_queryCondition.detailAllYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'N',value:'Y'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'오더별 출고현황 전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'선수납(청구) 오더 현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn align',id:'btn_trigger1',style:'display:none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_retrievePrebillingOrder',gridDownFn:'scwin.f_downExcelSheet1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_retrievePrebillingOrder',style:'',id:'gr_retrievePrebillingOrder',visibleRowNum:'5',class:'wq_gvw','ev:oncellclick':'scwin.gr_retrievePrebillingOrder_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column1',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'오더<br/>종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'오더일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'자가구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'건수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'청구<br/>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column7',value:'매출<br/>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'청구<br/>거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'모선/항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'중량(TON)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'수납액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'계산서일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',class:'underline',style:'color:#007FFF'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrKndCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'selfClsNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outIntendCnt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',id:'WrkPlCd',displayMode:'label',textAlign:'left',customFormatter:'scwin.customWrkPlCd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellLodeptCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bilgClntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',id:'vsslCd',displayMode:'label',textAlign:'left',customFormatter:'scwin.customVsslportcnt'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qty',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWt',displayMode:'label',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipDt',displayMode:'label',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'선수납(청구) 오더별 출고 예정 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_retrieveOutIntend',gridDownFn:'scwin.f_downExcelSheet2',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveOutIntend',id:'gr_retrieveOutIntend',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700','ev:oncellclick':'scwin.gr_retrieveOutIntend_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column201',inputType:'text',value:'오더번호',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column217',inputType:'text',value:'출고예정번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column215',inputType:'text',value:'출고예정일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column213',inputType:'text',value:'청구처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column211',inputType:'text',value:'청구처명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column209',inputType:'text',value:'품명순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column203',inputType:'text',value:'품명/컨테이너<br/>코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column205',inputType:'text',value:'품명/컨테이너',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column207',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column219',inputType:'text',value:'중량(TON)',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column235',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column233',value:'매출액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column231',value:'담보금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column229',value:'계산서금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column227',value:'감정금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column221',value:'관세금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column223',value:'담보번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column225',value:'계산서번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outIntendNo',inputType:'text',width:'120',class:'underline',style:'color:#007FFF',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outIntendDt',inputType:'text',width:'120',displayFormat:'####/##/##',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'custom',width:'100',customFormatter:'scwin.customCommSeq'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'custom',width:'120',textAlign:'left',customFormatter:'scwin.customCommSeq'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'custom',width:'120',textAlign:'left',customFormatter:'scwin.customCommSeq'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0.000',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cbm',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spplyAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pldgAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'jdgAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cstmdtAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pldgMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'slipNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})