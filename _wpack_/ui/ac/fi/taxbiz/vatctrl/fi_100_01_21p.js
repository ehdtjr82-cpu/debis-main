/*amd /ui/ac/fi/taxbiz/vatctrl/fi_100_01_21p.xml 31327 b09e0316ef7091e9dd541c0ccd29116308f424f632e97d08307f175a955542a2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'startDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsSellClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vatQuartYyClsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'evidClsCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transferDate',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapuTypeCd',name:'매출매입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxId',name:'e세로ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsBusiNo',name:'신고사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCrn',name:'거래처사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntCrnNm',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supBusiNo',name:'공급자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supCompName',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyBusiNo',name:'공급받는자사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'buyCompName',name:'사업자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'supAmt',name:'공급가액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaxType',name:'전자계산서구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ch',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:'FI627'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_ch',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'cd',name:'name1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.taxbiz.vatdeclar.RetrieveEseroListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_evid","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_evid","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'로딩중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fi.taxbiz.vatdeclar.CreateEseroListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/cm.zz.RetrieveCodeCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_ch_submitdone','ev:submiterror':'',id:'sbm_ch',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,dma_ch',replace:'',target:'data:json,{"id":"ds_ch","key":"GAUCE"}',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.login = ""; // 로그인 정보를 가져온다.' 
scwin.privAdmin = ""; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

scwin.g_sCurrDate = "";
scwin.g_sLoginDept = "";
scwin.vLoginCoCd = ""; // 소속 자회사  
scwin.vLoginCoClsCd = ""; //회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.isSubCompany = "";
scwin.coCd = "";
scwin.coClsCd = "";
scwin.vEmpNo = ""; // 사번

//tobe추가
scwin.chk = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.login = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.' 
  scwin.privAdmin = scwin.login.privAdmin;
  ; // ADMIN 권한 CHK : 'T' : ADMIN , 'F': ADMIN 아님

  scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.g_sLoginDept = scwin.login.acctDeptCd; //"<%=login.getAcctDeptCd()%>";

  scwin.vLoginCoCd = scwin.login.coCd || ""; //<%=login.getCoCd()%>'; // 소속 자회사  
  scwin.vLoginCoClsCd = scwin.login.coClsCd || ""; //'<%=login.getCoClsCd()%>';//회계_회사구분('CO035' : 0:동부 EXPRESS)
  scwin.vUserHomeClsCd = scwin.login.userHomeClsCd; //"<%=login.getUserHomeClsCd()%>";        // 사용자소속구분코드 
  scwin.isSubCompany = false;
  scwin.coCd = "000";
  scwin.coClsCd = "0";
  scwin.vEmpNo = scwin.login.empNo; //"<%=login.getEmpNo()%>";

  scwin.chk = true;

  //초기값 셋팅
  const codeOptions = [{
    grpCd: "FI019",
    compID: "lc_pchsSellClsCd"
  } //매입/출 구분
  ];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  //scwin.f_Header(); //tobe사용안함
  await scwin.f_setCalender();
  scwin.f_setCompanyInfo(); //자회사여부

  if (scwin.g_sLoginDept != '00009') {
    if (!(scwin.vEmpNo == "198015" || scwin.vEmpNo == "198078")) {
      //BIDC 이재설 과장, 최현주 대리 추가 (박경진대리 퇴사로 최현주 대리 변경)
      scwin.f_changeCheck(); //작성부서 변경권한 체크	
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 달력 셋팅
//-------------------------------------------------------------------------  
scwin.f_setCalender = function () {
  if (scwin.g_sCurrDate.substring(5, 8) >= '101' && scwin.g_sCurrDate.substring(5, 8) <= '331') {
    ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0101");
    ed_endDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0331");
    lc_vatQuartYyClsCd.setSelectedIndex(0);
  } else if (scwin.g_sCurrDate.substring(5, 8) >= '401' && scwin.g_sCurrDate.substring(5, 8) <= '630') {
    ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0401");
    ed_endDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0630");
    lc_vatQuartYyClsCd.setSelectedIndex(1);
  } else if (scwin.g_sCurrDate.substring(5, 8) >= '701' && scwin.g_sCurrDate.substring(5, 8) <= '930') {
    ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0701");
    ed_endDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "0930");
    lc_vatQuartYyClsCd.setSelectedIndex(2);
  } else if (scwin.g_sCurrDate.substring(5, 8) >= '1001' && scwin.g_sCurrDate.substring(5, 8) <= '1231') {
    ed_startDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "1001");
    ed_endDt.setValue(scwin.g_sCurrDate.substring(0, 4) + "1231");
    lc_vatQuartYyClsCd.setSelectedIndex(3);
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
  scwin.coCd = scwin.vLoginCoCd;
  scwin.coClsCd = scwin.vLoginCoClsCd;
  scwin.chk = true; // 위치변경된 함수가 존재하는지 안하는지 체크
  scwin.f_PopUpCompanyInfo('T');

  //tobe위치변경 : scwin.f_PopUpCompanyInfo 함수의 콜백함수 맨아래 작성.
  // if ('T' == '<%=privAdmin%>' || !isSubCompany) {  // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
  //     cfEnableObjects([ed_coCd, txt_coNm, img_company]);
  // } else {
  //     cfDisableObjects([ed_coCd, txt_coNm, img_company]);
  // }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUponclick = function () {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.f_PopUpCompanyInfo = function (pWinCloseTF) {
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc, ed_coCd.getValue(), ed_coNm.getValue(), pWinCloseTF, null, null, null, null, null, null, null, null, null);
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_coCd_callBackFunc = function (rtnList) {
  if (rtnList) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    edCoClsCd.setValue(rtnList[1]); // 회사구분
    scwin.coCd = ed_coCd.text;
    scwin.coClsCd = rtnList[1]; // 회사구분    
  } else {
    ed_coCd.setValue(""); // 코드
    ed_coNm.setValue(""); // 회사명
    edCoClsCd.setValue(""); // 회사구분
    scwin.coCd = "";
    scwin.coClsCd = "";
  }

  // 자회사 회계 시스템
  if (edCoClsCd.getValue() > ACConstants.CO_CLS_CD_DONGBU) {
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.chk) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      //tobe 변경 : 실제로 해당 컴포넌트 disable이 안되고있음,, 문제있을시, 주석처리 풀어줘야함
      $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    }
    scwin.chk = false;
  }
};

//-------------------------------------------------------------------------
// 작성부서 변경 권한 체크 
//-------------------------------------------------------------------------
scwin.f_changeCheck = function () {
  $c.sbm.execute($p, sbm_ch);
  setTimeout(function () {
    var empNo = scwin.vEmpNo;
    var count1 = 0;
    for (var i = 0; i < ds_ch.getRowCount(); i++) {
      var partAdmin = ds_ch.getRowJSON(i).cd;
      if (empNo == partAdmin) {
        count1++;
      }
    }
    if (count1 == 0) {
      $c.gus.cfDisableObjects($p, [udc_coCd]);
    } else {
      $c.gus.cfDisableObjects($p, [udc_coCd]); // cfEnableObjects
    }
  }, 150);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, [ed_startDt, ed_endDt]);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  //시작, 종료일자 체크
  if ($c.gus.cfIsNull($p, ed_startDt.getValue()) || $c.gus.cfIsNull($p, ed_endDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["e세로전송일자 "]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!(await $c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }

  //ds_search.UseChangeInfo = false;
  dma_search.set("startDt", ed_startDt.getValue());
  dma_search.set("endDt", ed_endDt.getValue());
  dma_search.set("pchsSellClsCd", lc_pchsSellClsCd.getValue());
  dma_search.set("vatQuartYyClsCd", lc_vatQuartYyClsCd.getValue());
  dma_search.set("coCd", ed_coCd.getValue());
  dma_search.set("evidClsCd", lc_evidClsCd.getValue());
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_evid.getRowCount();
    //var subTotalCnt = gr_evid.getSubtotalRowList().length + 1;

    if (rowCnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      totalRows.setValue(0);
    } else {
      //totalRows.setValue(rowCnt + subTotalCnt);
      totalRows.setValue(rowCnt);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  //시작, 종료일자 체크
  if ($c.gus.cfIsNull($p, ed_startDt.getValue()) || $c.gus.cfIsNull($p, ed_endDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["e세로전송일자 "]);
    ed_startDt.focus();
    return;
  }

  //시작일자가 종료일자 이전인지 check
  if (!$c.gus.cfIsAfterDate($p, ed_startDt.getValue(), ed_endDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  if (lc_pchsSellClsCd.getSelectedIndex() == 0) {
    await $c.win.alert($p, "매입/출 구분에서 매출 또는 매입을 선택 해야 합니다.");
    return;
  }
  if (await $c.win.confirm($p, "저장 하시겠습니까?")) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_GridToExcel = async function () {
  if (ds_evid.getRowCount() <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_009, Array("데이타")); // 출력할 @이(가) 없습니다.
  }
  const options = {
    fileName: "전자세금계산서신고자료관리(e세로대사).xlsx",
    sheetName: "전자세금계산서신고자료관리(e세로대사)",
    useSubTotal: "true",
    useSubTotalData: "true",
    startRowIndex: 0,
    startColumnIndex: 0,
    type: 1,
    columnMove: true //그리드 컬럼이동시 이동된 상태로 다운로드 유무 ( "true"인경우 컬럼이동 순서대로 출력 )
  };
  $c.data.downloadGridViewExcel($p, gr_evid, options);
};

//-------------------------------------------------------------------------
// 회사코드 입력시
//-------------------------------------------------------------------------
//for=ed_coCd event=OnKillFocus()
scwin.udc_coCd_onblurCode = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_coCd',nameId:'ed_coNm',popupID:'retrieveDongbuGroupCompanyInfoPopup',selectID:'retrieveDongbuGroupCompanyInfo',style:'',validTitle:'회사코드',id:'udc_coCd','ev:onclickEvent':'scwin.f_PopUponclick',validExpCode:'회사코드:yes',objTypeName:'data',btnId:'btn_company',mandatoryCode:'true',UpperFlagCode:'1',refDataCollection:'dma_search',code:'coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCode',allowCharCode:'0-9',maxlengthCode:'3'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'e세로전송일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'',refEdDt:'',refStDt:'',style:'',edToId:'ed_endDt',edFromId:'ed_startDt',mandatoryFrom:'true',mandatoryTo:'true'}},{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입/출 구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_pchsSellClsCd',style:'width:100px;',submenuSize:'fixed',chooseOptionLabel:'전체',displayMode:'value delim label',ref:'data:dma_search.pchsSellClsCd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차수 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_vatQuartYyClsCd',style:'width: 85px;',submenuSize:'fixed',ref:'data:dma_search.vatQuartYyClsCd',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'1차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'2차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'4차'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'증빙구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_evidClsCd',style:'width: 208px;',submenuSize:'fixed',chooseOptionLabel:'전체',ref:'data:dma_search.evidClsCd',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세금계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계산서'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'30'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_evid',gridUpUserAuth:'X',id:'udc_topGrd',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_evid',id:'gr_evid',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',columnMove:'true',dataDragSelect:'false',readOnly:'true',visibleRowNum:'13'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'전송일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'매출매입<br/>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'e세로ID',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'신고<br/>사업자번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사업자명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'거래처<br/>사업자번호',width:'100'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column49',value:'사업자명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'공급자<br/>사업자번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'사업자명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'급받는자<br/>사업자번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column37',value:'사업자명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'합계금액',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'공급가액',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'부가세액',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column55',value:'전자계산서<br/>구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'transferDate',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sapuTypeCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'SA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PU'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'etaxId',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tsBusiNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'busiNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCrn',inputType:'text',style:'',value:'',width:'100',dataType:'number'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'clntCrnNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'supBusiNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'supCompName',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'buyBusiNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'buyCompName',value:'',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'supAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'etaxType',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'clntCrn',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column64',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',expression:'SUM(\'totAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',expression:'SUM(\'supAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column59',value:'',displayMode:'label',expression:'SUM(\'vatAmt\')',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'SUM(\'totAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',expression:'SUM(\'supAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right',expression:'SUM(\'vatAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.f_Save',style:'',id:'btn_save',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'edCoClsCd'}}]}]}]}]}]})