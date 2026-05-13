/*amd /ui/ac/co/budgetmgnt/co_303_01_01b.xml 55515 3beea48a277805d26b82bbd225e1c848b60b771d1eccd87c024f17d33ebd67ab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_searchBuget'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'budgetYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'budgetYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd1',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntlUnitClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntlUnitClsCd',name:'통제기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'actAmt',name:'실행예산누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'addBudgetAmt',name:'추가예산누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'actAddAmt',name:'추가반영예산누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetRsltsAmt',name:'가결산누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'budgetRsltsSettAmt',name:'결산누계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'remainAmt',name:'잔액',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_buget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_admin'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'grpCd',name:'name1',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_admin',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_getBuget',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_searchBuget',target:'data:json,{"id":"ds_buget","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getBuget_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.co.budgetmgnt.RetrieveBudgetResultsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_code',action:'/cm.zz.RetrieveEditAuthCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_code","key":"IN_DS1"},{"id":"ds_editAuth","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_editAuth","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_admin',action:'/cm.zz.RetrieveCodeCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_admin',target:'data:json,{"id":"ds_admin","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_admin_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ac/am/constants/ACConstants.js',type:'text/javascript',scopeVariable:'ACConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.v_auth = false;
scwin.v_bugetCd = '';
scwin.v_bugetNm = '';
scwin.empNo = scwin.memJson.empNo; // 서버 데이터
scwin.userId = scwin.memJson.empNo; // 서버 데이터
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 소속 자회사  	
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd; //회계_회사구분('CO035' : 0:동부 EXPRESS)	
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd; // 사용자소속구분코드
scwin.vCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd; // 회사코드 	
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin; // 서버 데이터, 기본값 'F'
scwin.txtCoClsCd = "";
scwin.isStart = false;
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "CO001",
    compID: "acb_srchCntlUnitClsCd,gr_master:cntlUnitClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

/**
 * UDC값
 */
scwin.onUdcCompleted = function () {
  scwin.f_FieldClear();
  //조회권한체크
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableBtn($p, [btn_detail]);
  scwin.f_RetrieveAuth();
  scwin.f_setCompanyInfo();

  //***************************************************************
  //2013.03.29 hurrah015
  //예산통제부서 조회
  scwin.f_retrieveBugetAcctDeptCd();
};
scwin.ondataload = function () {
  let cnt = dlt_commonCodeCO001.getRowCount();
  for (let i = 0; i < cnt; i++) {
    let cdNm = dlt_commonCodeCO001.getCellData(i, "cdNm");
    if (cdNm == "") {
      dlt_commonCodeCO001.removeRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function () {
  //사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  scwin.isStart = true;
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
};

// -------------------------------------------------------------------------
// 회사 입력 팝업 
// -------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  await udc_dongbuGroupCompanyInfo.cfCommonPopUp(scwin.udc_dongbuGroupCompanyInfo_callBackFunc, ed_coCd.getValue(), "", pWinCloseTF, null, null, null, null, null, null, null, null, null);
};
scwin.udc_dongbuGroupCompanyInfo_callBackFunc = function (rtnList) {
  // SET	 
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명 
    scwin.txtCoClsCd = rtnList[1]; // 회사구분   
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (ed_coCd.getValue() > ACConstants.CO_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
  if (scwin.isStart == true) {
    if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
      // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우
      $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
    } else {
      $c.gus.cfDisableBtn($p, [ed_coCd, ed_coNm, btn_company]);
    }
  }
  scwin.isStart = false;
};

//-------------------------------------------------------------------------
// 예산통제부서 조회 
// commonPopUp.xml에 조회ID(retrieveAcEmpInfo1) 추가
//-------------------------------------------------------------------------
scwin.f_retrieveBugetAcctDeptCd = function () {
  const params = {
    sysCd: "CommonEBC",
    queryId: "retrieveAcEmpInfo1",
    param1: scwin.empNo,
    param2: ed_coCd.getValue(),
    param3: scwin.vLoginCoClsCd
  };

  //데이터셋에 정보설정
  dma_searchBuget.setJSON(params);
  $c.sbm.execute($p, sbm_getBuget);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [ica_srchBudgetYm, ica_srchBudgetYmTo]);
  scwin.f_SetSrchDefault();
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function () {
  $c.gus.cfInitHidVal($p, tbl_search);
  ica_srchBudgetYm.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_srchBudgetYmTo.setValue($c.date.getServerDateTime($p, "yyyyMM"));
  ica_srchBudgetYm.focus();
};

//-------------------------------------------------------------------------
// 백세인 추가 
//-------------------------------------------------------------------------
// scwin.f_setCodeHeader = function() {	    
//     let dsCodeHeader = "grpCd:STRING"
//     				 + ",cd:STRING"
//     				 + ",cdNm:STRING";	
//     ds_code.SetDataHeader(dsCodeHeader);
//     ds_code.AddRow(); 
// }

//-------------------------------------------------------------------------
// 백세인 추가(CO105)
//-------------------------------------------------------------------------
// scwin.f_getEditAuth = function () {
//     //공통코드 조회
// 	ds_code.NameValue(1,"grpCd")  = "CO105";
// 	ds_code.NameValue(1,"cd") 	  = "<%=login.getAcctDeptCd()%>";
// 	ds_code.NameValue(1,"cdNm")   = "<%=login.getAcctDeptNm()%>";
// 	var adminYn = "<%=login.getSysAdminYn()%>";

// 	tr_code.Post();
//     if(cfIsNull(ds_editAuth.NameValue(1,"cd")) && adminYn == '0') {
//     	cfDisableObjects([ed_srchAcctDeptCd,txt_srchAcctDeptNm,img_srchAcctDeptCd]);
//     } else {
//     	cfEnableObjects([ed_srchAcctDeptCd,txt_srchAcctDeptNm,img_srchAcctDeptCd]); 
//     }   
// }

//-------------------------------------------------------------------------
// 조회 : 데이터를 조회한다.
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //조회조건에 따른 필수체크 분기
  //hurrah015, 2013.03.29
  //alert(txt_srchAcctDeptNm.mandatory);

  let ret = await $c.gus.cfValidate($p, [ed_coCd, ica_srchBudgetYm, ica_srchBudgetYmTo, ed_srchAcctDeptCd]);
  if (!ret) {
    return false;
  }
  if (ed_srchAcctDeptCd.getValue() == "" && ed_srchAcctDeptCd1.getValue() == "") {
    await $c.win.alert($p, "[예산통제부서] 또는 [귀속부서] 둘중에 한가지 조건으로 \n\n조회하셔야 합니다.");
    if (ed_srchAcctDeptNm.getMandatory()) {
      ed_srchAcctDeptCd.focus();
    } else {
      ed_srchAcctDeptCd1.focus();
    }
    return;
  }
  if (ed_srchAcctDeptNm.getMandatory()) {
    let ret = await $c.gus.cfValidate($p, [ica_srchBudgetYm, ica_srchBudgetYmTo, ed_srchAcctDeptCd]);
    if (!ret) {
      return false;
    }

    //타 예산통제부서 조회 금지!
    //hurrah015, 2013.03.29
    //예산통제부서로 전사조회 방지 hurrah015, 2013.05.15 
    if (ed_srchAcctDeptCd.getValue() == '00000') {
      if ('T' != scwin.privAdmin) {
        await $c.win.alert($p, "예산통제부서는 전사로 조회 할 수 없습니다.");
        ds_master.removeAll();
        totalRows.setValue(0);
        return;
      }
    } else if (scwin.v_auth == false && ed_srchAcctDeptCd.getValue() != scwin.v_bugetCd) {
      if (scwin.empNo == '950087' && (ed_srchAcctDeptCd.getValue() == '00774' || ed_srchAcctDeptCd.getValue() == '00839')) {
        // 연용철대리 요청사항 - 강호준 부장님 요청건 (2013.04.24)
      } else {
        // 연용철대리 요청사항 - 윤현성 부장님 요청건 (2015.05.06)
        // 심대석대리 요청사항 - 설동훈 과장 요청건 (2018.05.03)
        /*if(userId != '040557' &&userId != '050186' && userId != '930262'){
        	await $c.win.alert("로그인 하신 귀속부서의 예산통제부서는 ["+v_bugetCd+" - "+v_bugetNm+"] 입니다.\n\n"
        	 +"타 예산통제부서["+ed_srchAcctDeptCd.text+" - "+txt_srchAcctDeptNm.value+"]는 권한이 없습니다.");
        
        	ds_master.ClearData();
        	cfShowTotalRows(totalRows, 0);
        	return;
        }
        */
        // 심대석대리 요청사항 - 설동훈 과장 요청건 (2018.05.03)
        if (scwin.userId == '040557') {
          if (ed_srchAcctDeptCd.getValue() != '00745' && ed_srchAcctDeptCd.getValue() != '00839') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '050186') {
          if (ed_srchAcctDeptCd.getValue() != '00088' && ed_srchAcctDeptCd.getValue() != '00173' && ed_srchAcctDeptCd.getValue() != '00076') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        }
        // 심대석대리 요청사항 - 이형규 상무 요청건 (2018.09.11)
        else if (scwin.userId == '930262') {
          if (ed_srchAcctDeptCd.getValue() != '00011' && ed_srchAcctDeptCd.getValue() != '00208') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
          // 심대석대리 요청사항 - 전승훈 차장 요청건 (2020.11.17)
        } else if (scwin.userId == '204093') {
          if (ed_srchAcctDeptCd.getValue() != '01075' && ed_srchAcctDeptCd.getValue() != '01252') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '000848' || scwin.userId == '080079' || scwin.userId == '081607') {
          //박기환주임 요청사항  pl지사 타부서 권한 추가
          if (ed_srchAcctDeptCd.getValue() != '00204' && ed_srchAcctDeptCd.getValue() != '00967' && ed_srchAcctDeptCd.getValue() != '01257' && ed_srchAcctDeptCd.getValue() != '01215' && ed_srchAcctDeptCd.getValue() != '01020' && ed_srchAcctDeptCd.getValue() != '00975' && ed_srchAcctDeptCd.getValue() != '00973') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '020900' || scwin.userId == '210201') {
          if (ed_srchAcctDeptCd.getValue() != '00899' && ed_srchAcctDeptCd.getValue() != '00084') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '220028') {
          //송동훈 매곡/호법센터 관리로 인해 권한 추가
          if (ed_srchAcctDeptCd.getValue() != '01252' && ed_srchAcctDeptCd.getValue() != '01288') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '121108' || scwin.userId == '180210' || scwin.userId == '130836' || scwin.userId == '190955') {
          //김민아주임 요청사항 -서남지사 예산실적 관리
          if (ed_srchAcctDeptCd.getValue() != '00076' && ed_srchAcctDeptCd.getValue() != '00173' && ed_srchAcctDeptCd.getValue() != '00088') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '081096' || scwin.userId == '160305' || scwin.userId == '210288') {
          //김민아주임 요청사항 -서남지사 예산실적 관리
          if (ed_srchAcctDeptCd.getValue() != '00084' && ed_srchAcctDeptCd.getValue() != '00173' && ed_srchAcctDeptCd.getValue() != '00088') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '340029') {
          //박선민과장 요청사항 -박동재과장 권한 추가 (부산지사 운송팀에 의왕지점 소속)
          if (ed_srchAcctDeptCd.getValue() != '00047' && ed_srchAcctDeptCd.getValue() != '00896') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '320134' || scwin.userId == '200046') {
          //문혜린사원 요청사항 -문혜린사원/박성진센터장 권한 추가 (백사센터/동이천센터)
          if (ed_srchAcctDeptCd.getValue() != '01243' && ed_srchAcctDeptCd.getValue() != '01506') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '243116') {
          //조태희차장 요청사항 -당진지부(경기) 조회 가능하도록 수정
          if (ed_srchAcctDeptCd.getValue() != '00899' && ed_srchAcctDeptCd.getValue() != '00084') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '200468') {
          //김동균 과장 요청사항 -김용식 센터장 이천MGC센터 조회 가능하도록 수정
          if (ed_srchAcctDeptCd.getValue() != '01075' && ed_srchAcctDeptCd.getValue() != '01536') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '200133') {
          //김동균 과장 요청사항  2025.1201
          if (ed_srchAcctDeptCd.getValue() != '01506' && ed_srchAcctDeptCd.getValue() != '01536') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '233113') {
          //김동균 과장 요청사항
          if (ed_srchAcctDeptCd.getValue() != '01506' && ed_srchAcctDeptCd.getValue() != '01536') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }

          // O-0171 추가 
        } else if (scwin.userId == '243014') {
          //이동규  요청사항
          if (ed_srchAcctDeptCd.getValue() != '00896' && ed_srchAcctDeptCd.getValue() != '00047' && ed_srchAcctDeptCd.getValue() != '00140') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else if (scwin.userId == '223039') {
          //김유준  요청사항
          if (ed_srchAcctDeptCd.getValue() != '00896' && ed_srchAcctDeptCd.getValue() != '00047' && ed_srchAcctDeptCd.getValue() != '00140') {
            await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
            ds_master.removeAll();
            totalRows.setValue(0);
            return;
          }
        } else {
          await $c.win.alert($p, "로그인 하신 귀속부서의 예산통제부서는 [" + scwin.v_bugetCd + " - " + scwin.v_bugetNm + "] 입니다.\n\n" + "타 예산통제부서[" + ed_srchAcctDeptCd.getValue() + " - " + ed_srchAcctDeptNm.getValue() + "]는 권한이 없습니다.");
          ds_master.removeAll();
          totalRows.setValue(0);
          return;
        }
      }
    }
  } else {
    if (!(await $c.gus.cfValidate($p, [ica_srchBudgetYm, ica_srchBudgetYmTo, ed_srchAcctDeptCd1])) == true) {
      return;
    }
  }

  //반영할 기간의 시작과 끝을 비교
  if (ica_srchBudgetYm.getValue() > ica_srchBudgetYmTo.getValue()) {
    await $c.win.alert($p, "조회기간의 범위가 잘못되었습니다.");
    ica_srchBudgetYm.focus();
    return;
  }
  //반영할 기간의 시작과 끝을 비교
  if (ica_srchBudgetYm.getValue().substr(0, 4) != ica_srchBudgetYmTo.getValue().substr(0, 4)) {
    await $c.win.alert($p, "조회기간의 년도가 틀립니다.");
    ica_srchBudgetYm.focus();
    return;
  }
  /*
  if (ed_srchAcctDeptCd.getValue() != ed_srchAcctDeptCd.hidVal)
  {
  	await $c.win.alert("조회기간의 년도가 틀립니다." + ed_srchAcctDeptCd.Text+ed_srchAcctDeptCd.hidVal);	
  	$c.win.alert(MSG_CM_ERR_038, ["부서코드"]);
  	ed_srchAcctDeptCd.Focus();
  	return false;
  }*/
  //dataSetDebug(ds_search, true);
  //ds_search.UseChangeInfo = false;
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_PopUp = async function (paramArray, flag, pWinCloseTF) {
  let codeObj = paramArray.pCode;
  let nameObj = paramArray.pName;
  if (!codeObj.options) codeObj.options = {};
  if (flag == 0) {
    await udc_budgetCtrlDeptInfo.cfCommonPopUp(scwin.udc_budgetCtrlDeptInfo_callBackFunc, $c.gus.cfGetValue($p, codeObj) //2)  pCode     		: 화면에서의 ??? Code Element의 Value           				null    "1234"                                       
    , $c.gus.cfGetValue($p, nameObj) //3)  pName     		: 화면에서의 ??? Name Element의 Value           				null    "동부"                                       
    , pWinCloseTF //4)  pWinCloseTF   	: 결과가 1건 일때  원도우를 AutoClose 여부  (T:Close,F:Opened)  null(F) "T","F"                
    , paramArray.pDispCnt //5)  pDispCnt    	: 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10     	null(2) "5"                        
    , paramArray.pTitle //6)  pTitle      	: Title명's                         							null    "100,200"                                              
    , paramArray.pWidth //7)  pWidth      	: 보여주는 각 컬럼들의 폭                     					null    "100,200"                                    
    , paramArray.pHidden //8)  pHidden     	: 컬럼중에서 숨기는 컬럼 지정                   					null    "7,8,9,10"                                 
    , paramArray.pWhere //9)  pWhere      	: SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     	null    "SHIP"                      
    , paramArray.pW //10) pW        		: POP-UP뛰을때 원도우의 사용자 정의 폭              				null    "500"                                    
    , paramArray.pH //11) pH        		: POP-UP뛰을때 우도우의 사용자 정의 높이              			null    "600"                                  
    , paramArray.pTop //12) pTop      		: 윈도우 위치 Y좌표                       						null    "10"                                               
    , paramArray.pLeft //13) pLeft     		: 윈도우 위치 X좌표                       						null    "10"                                               
    , paramArray.pExistTF //14) pExistTF    	: 중복체크여부                          							null    "F"                                                
    , paramArray.pAllSearchTF //15) pAllSearchTF  	: 전체검색허용여부                        						null    "F"                                            
    , paramArray.pWtitleSearch //16) pWtitleSearch 	: POP-UP Window Title 검색어1,2(각화면에서 변경할경우)        	null    "Win타이틀,검색어1,검색어2"
    );
  } else {
    await udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, $c.gus.cfGetValue($p, codeObj) //2)  pCode     		: 화면에서의 ??? Code Element의 Value           				null    "1234"                                       
    , $c.gus.cfGetValue($p, nameObj) //3)  pName     		: 화면에서의 ??? Name Element의 Value           				null    "동부"                                       
    , pWinCloseTF //4)  pWinCloseTF   	: 결과가 1건 일때  원도우를 AutoClose 여부  (T:Close,F:Opened)  null(F) "T","F"                
    , paramArray.pDispCnt //5)  pDispCnt    	: 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10     	null(2) "5"                        
    , paramArray.pTitle //6)  pTitle      	: Title명's                         							null    "100,200"                                              
    , paramArray.pWidth //7)  pWidth      	: 보여주는 각 컬럼들의 폭                     					null    "100,200"                                    
    , paramArray.pHidden //8)  pHidden     	: 컬럼중에서 숨기는 컬럼 지정                   					null    "7,8,9,10"                                 
    , paramArray.pWhere //9)  pWhere      	: SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     	null    "SHIP"                      
    , paramArray.pW //10) pW        		: POP-UP뛰을때 원도우의 사용자 정의 폭              				null    "500"                                    
    , paramArray.pH //11) pH        		: POP-UP뛰을때 우도우의 사용자 정의 높이              			null    "600"                                  
    , paramArray.pTop //12) pTop      		: 윈도우 위치 Y좌표                       						null    "10"                                               
    , paramArray.pLeft //13) pLeft     		: 윈도우 위치 X좌표                       						null    "10"                                               
    , paramArray.pExistTF //14) pExistTF    	: 중복체크여부                          							null    "F"                                                
    , paramArray.pAllSearchTF //15) pAllSearchTF  	: 전체검색허용여부                        						null    "F"                                            
    , paramArray.pWtitleSearch //16) pWtitleSearch 	: POP-UP Window Title 검색어1,2(각화면에서 변경할경우)        	null    "Win타이틀,검색어1,검색어2"
    );
  }
};
scwin.udc_budgetCtrlDeptInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_srchAcctDeptCd.setValue(rtnList[0]);
      ed_srchAcctDeptCd.options.hidVal = rtnList[0];
      ed_srchAcctDeptNm.setValue(rtnList[1]);
    }
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptCd.options.hidVal = "";
    ed_srchAcctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] != "N/A") {
      ed_srchAcctDeptCd1.setValue(rtnList[0]);
      ed_srchAcctDeptCd1.options.hidVal = rtnList[0];
      ed_srchAcctDeptNm1.setValue(rtnList[1]);
    }
  } else {
    ed_srchAcctDeptCd1.setValue("");
    ed_srchAcctDeptCd1.options.hidVal = "";
    ed_srchAcctDeptNm1.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, ...pairObjs) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      $c.gus.cfSetValue($p, pairObjs[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 팝업 이벤트에 따라 팝업창의 자동닫기 여부를 반환
//-------------------------------------------------------------------------
scwin.f_EventCheck = function () {
  if (window.event != null && window.event.srcElement.tagName.toUpperCase() == "IMG") {
    return 'F';
  } else {
    return 'T';
  }
};

//-------------------------------------------------------------------------
// 부서코드팝업
//-------------------------------------------------------------------------
scwin.f_deptPopUp = async function (flag, pWinCloseTF) {
  let paramArray = {};
  if (flag == 0) {
    paramArray.pSelectID = "retrieveBudgetCtrlDeptInfo";
    paramArray.pCode = ed_srchAcctDeptCd;
    paramArray.pName = ed_srchAcctDeptNm;
    paramArray.pWhere = "," + ica_srchBudgetYm.getValue().trim() + "," + ed_coCd.getValue() + ",0,,1";
  } else {
    paramArray.pSelectID = "retrieveAcctDeptCdInfo";
    paramArray.pCode = ed_srchAcctDeptCd1;
    paramArray.pName = ed_srchAcctDeptNm1;
    paramArray.pWhere = ica_srchBudgetYmTo.getValue() + ",,,,,,,,," + ed_coCd.getValue();
  }
  paramArray.pW = "410";
  scwin.f_mandatory_change(flag);
  acb_srchCntlUnitClsCd.removeClass("req");
  await scwin.f_PopUp(paramArray, flag, pWinCloseTF);
};
scwin.f_mandatory_change = function (flag) {
  if (flag == 0) {
    srchAcctDept.addClass("req");
    acctDept.removeClass("req");
    ed_srchAcctDeptNm.setMandatory(true);
    ed_srchAcctDeptCd.options.validExp = "예산통제부서:yes:length=5";
    ed_srchAcctDeptNm1.setMandatory(false);
    ed_srchAcctDeptCd1.options.validExp = "귀속부서:no:length=5";
    ed_srchAcctDeptCd1.setValue("");
    ed_srchAcctDeptNm1.setValue("");
  } else {
    srchAcctDept.removeClass("req");
    acctDept.addClass("req");
    ed_srchAcctDeptNm.setMandatory(false);
    ed_srchAcctDeptCd.options.validExp = "예산통제부서:no:length=5";
    ed_srchAcctDeptNm1.setMandatory(true);
    ed_srchAcctDeptCd1.options.validExp = "귀속부서:yes:length=5";
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 예산실적 상세내역 조회 팝업
//-------------------------------------------------------------------------
scwin.f_detailPopUp = function () {
  let row = ds_master.getRowPosition();
  if (row < 0) return;
  let params = {
    budgetYm: ica_srchBudgetYm.getValue(),
    budgetYmTo: ica_srchBudgetYmTo.getValue(),
    acctDeptCd: ds_master.getCellData(row, "acctDeptCd"),
    acctDeptNm: ds_master.getCellData(row, "acctDeptNm"),
    cntlUnitClsCd: acb_srchCntlUnitClsCd.getValue()
  };
  if (row >= 0) {
    params.acctCd = ds_master.getCellData(row, "acctCd");
    params.acctNm = ds_master.getCellData(row, "acctNm");
  } else {
    params.acctCd = "";
    params.acctNm = "";
  }
  let options = {
    id: "detailPopup",
    width: 1200,
    height: 700,
    modal: true,
    popupName: "예산실적상세조회"
  };
  $c.win.openPopup($p, "/ui/ac/co/budgetmgnt/co_303_01_02p.xml", options, params);
};

//-------------------------------------------------------------------------
// 예산실적조회예외권한 체크(2013.03.29) hurrah015
//-------------------------------------------------------------------------
scwin.f_RetrieveAuth = function () {
  const params = {
    grpCd: "CO106",
    cd: "",
    cdNm: ""
  };

  //데이터셋에 정보설정
  dma_admin.setJSON(params);
  $c.sbm.execute($p, sbm_admin);
};
scwin.f_Export = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let sheetTitle;
  let colCount = gr_master.getTotalCol();
  sheetTitle = "예산실적내역 (" + ica_srchBudgetYm.getValue() + " ~ " + ica_srchBudgetYmTo.getValue() + ")";
  let exportFileName = "예산실적내역_" + ica_srchBudgetYm.getValue() + "_" + ica_srchBudgetYmTo.getValue();
  let infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: colCount,
    text: sheetTitle,
    textAlign: "center",
    fontSize: 18,
    drawBorder: false,
    color: "black",
    backgroundColor: "white"
  }];
  const options = {
    fileName: exportFileName + ".xlsx",
    sheetName: exportFileName,
    startRowIndex: 2,
    startColumnIndex: 0,
    columnMove: true,
    columnMoveWithFooter: true,
    type: 1
  };
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.udc_dongbuGroupCompanyInfo_onclickEvent = async function (e) {
  scwin.f_PopUpCompanyInfo('F');
};
scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent = async function (e) {
  if (ed_coCd.getValue() != "") {
    scwin.f_PopUpCompanyInfo('T');
  } else {
    ed_coNm.setValue("");
  }
};
scwin.udc_budgetCtrlDeptInfo_onclickEvent = async function (e) {
  scwin.f_deptPopUp(0, "F");
};
scwin.udc_acctDeptCdInfo_onclickEvent = async function (e) {
  scwin.f_deptPopUp(1, "F");
};
scwin.sbm_getBuget_submitdone = function (e) {
  ed_srchAcctDeptCd.setValue(ds_buget.dataArr[0]);
  ed_srchAcctDeptNm.setValue(ds_buget.dataArr[1]);
  //dataSetDebug(ds_buget, true);
  //기존방식 - 예산통제부서 = "귀속부서"
  //변경방식 - 예산통제부서 ? "N/A" : "귀속부서세팅" : "예산통제부서세팅"
  if (ds_buget.getCellData(0, "col1") != "N/A") {
    scwin.v_bugetCd = ds_buget.getCellData(0, "col1");
    scwin.v_bugetNm = ds_buget.getCellData(0, "col2");
    ed_srchAcctDeptCd.setValue(ds_buget.getCellData(0, "col1"));
    ed_srchAcctDeptNm.setValue(ds_buget.getCellData(0, "col2"));
  } else {
    scwin.v_bugetCd = scwin.memJson.acctDeptCd;
    scwin.v_bugetNm = scwin.memJson.acctDeptNm;
    ed_srchAcctDeptCd.setValue(scwin.memJson.acctDeptCd);
    ed_srchAcctDeptNm.setValue(scwin.memJson.acctDeptNm);
  }
};
scwin.sbm_search_submitdone = async function (e) {
  ds_master.sort("acctCd", 0);
  for (i = 0; i < ds_master.getRowCount(); i++) {
    if (ds_master.getCellData(i, "budgetRsltsAmt") > 0 || ds_master.getCellData(i, "budgetRsltsSettAmt") > 0) {
      gr_master.setCellStyle(i, "acctNm", "text-decoration", "underline");
      gr_master.setCellStyle(i, "acctNm", "cursor", "pointer");
    }
  }
  totalRows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.win.alert($p, MSG_CM_WRN_002);
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_detail]);
    gr_master.focus();
  }
};
scwin.ds_master_onrowpositionchange = function (info) {
  if (ds_master.getCellData(info.newRowIndex, "budgetRsltsAmt") == 0 && ds_master.getCellData(info.newRowIndex, "budgetRsltsSettAmt") == 0) {
    $c.gus.cfDisableBtn($p, [btn_detail]);
  } else {
    $c.gus.cfEnableObjects($p, [btn_detail]);
  }
};
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "acctNm") {
    if (ds_master.getCellData(rowIndex, "budgetRsltsAmt") != 0 || ds_master.getCellData(rowIndex, "budgetRsltsSettAmt") != 0) {
      scwin.f_detailPopUp();
    }
  }
};
scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent = function (e) {
  ed_srchAcctDeptNm.setValue("");
  if (ed_srchAcctDeptCd.getValue() != "") {
    scwin.f_deptPopUp(0, "T");

    //귀속부서 초기화
    scwin.f_mandatory_change(0);
  }
};
scwin.sbm_admin_submitdone = function (e) {
  let userId = scwin.empNo;
  let admin = "";
  let count = 0;
  for (let i = 0; i < ds_admin.getRowCount(); i++) {
    admin = ds_admin.getCellData(i, "cd");
    if (userId == admin) {
      count++;
    }
  }
  if (count > 0) {
    //예산실적조회예외권한으로 등록된 사용자(CO106)
    scwin.v_auth = true;
  } else if ('T' == scwin.privAdmin)
    //관리자
    {
      scwin.v_auth = true;
    } else {
    //기타사용자
    scwin.v_auth = false;
  }
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  ed_srchAcctDeptNm1.setValue("");
  if (ed_srchAcctDeptCd1.getValue() != "") {
    scwin.f_deptPopUp(1, "T");

    //예산통제부서 초기화
    scwin.f_mandatory_change(1);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'',src:'/cm/udc/fromToYearMon.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_coCd',id:'udc_dongbuGroupCompanyInfo',objTypeCode:'data',mandatoryCode:'true',validExpCode:'회사코드:yes',allowCharCode:'0-9',maxlengthCode:'3',UpperFlagCode:'1',nameId:'ed_coNm',objTypeName:'data',btnId:'btn_company',selectID:'retrieveDongbuGroupCompanyInfo',refDataCollection:'dma_search',code:'coCd',popupTitle:'회사조회,회사코드,법인명',popupGridHeadTitle:'회사코드,,,,,회사명','ev:onclickEvent':'scwin.udc_dongbuGroupCompanyInfo_onclickEvent',popupGridHiddenColumn:'2,3,4,5,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_dongbuGroupCompanyInfo_onblurCodeEvent',validTitle:'회사코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'예산기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToYearMon',A:{refStDt:'budgetYm',refDataMap:'dma_search',style:'width:%; height:px; ',id:'udc_fromToYearMon',refEdDt:'budgetYmTo',edFromId:'ica_srchBudgetYm',edToId:'ica_srchBudgetYmTo',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data',titleFrom:'예산년월',titleTo:'예산년월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예산통제기준 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w150',editType:'select',id:'acb_srchCntlUnitClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',disabled:'false',displayMode:'value delim label',title:'예산통제기준',sortOption:'value',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'srchAcctDept',label:'예산통제부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_srchAcctDeptCd',objTypeCode:'data',mandatoryCode:'false',validExpCode:'예산통제부서:yes:length=5',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'focus',nameId:'ed_srchAcctDeptNm',maxlengthName:'30',objTypeName:'data',mandatoryName:'true',btnId:'btn_srchAcctDeptCd',id:'udc_budgetCtrlDeptInfo',selectID:'retrieveBudgetCtrlDeptInfo',refDataCollection:'dma_search',code:'acctDeptCd','ev:onclickEvent':'scwin.udc_budgetCtrlDeptInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_budgetCtrlDeptInfo_onblurCodeEvent',popupGridHeadTitle:'부서코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',validTitle:'예산통제부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'acctDept',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col8',codeId:'ed_srchAcctDeptCd1',objTypeCode:'data',mandatoryCode:'false',validExpCode:'귀속부서:no:length=5',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'focus',nameId:'ed_srchAcctDeptNm1',id:'udc_acctDeptCdInfo',maxlengthName:'30',objTypeName:'data',btnId:'btn_srchAcctDeptCd1',selectID:'retrieveAcctDeptCdInfo',code:'acctDeptCd1',refDataCollection:'dma_search','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent',popupGridHiddenColumn:'3,4,5,6,7,8,9,10',popupGridHeadTitle:'귀속코드,부서명',popupTitle:'귀속부서조회,귀속부서코드,귀속부서명',validTitle:'귀속부서','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'예산실적내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',id:'udc_topGrd',gridID:'gr_master',gridDownFn:'scwin.f_Export',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true',columnMove:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_master_oncellclick',columnMoveWithFooter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'부서코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'140',value:'부서명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'계정코드'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'계정명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'통제기준',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'실행예산누계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'추가예산누계',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'추가반영예산누계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'가결산누계',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'결산누계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'잔액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctDeptNm',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'acctNm',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntlUnitClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'actAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'addBudgetAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'actAddAmt',inputType:'expression',width:'150',textAlign:'right',expression:'Number(display("actAmt")) + Number(display("addBudgetAmt"))',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'budgetRsltsAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'budgetRsltsSettAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'sumAmt',displayMode:'label',textAlign:'right',expression:'Number(display("budgetRsltsAmt")) + Number(display("budgetRsltsSettAmt"))',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'remainAmt',displayMode:'label',textAlign:'right',expression:'(Number(display("actAmt")) + Number(display("addBudgetAmt")))-(Number(display("budgetRsltsAmt")) + Number(display("budgetRsltsSettAmt")))',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column35',displayMode:'label',textAlign:'right',expression:'SUM("actAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column34',displayMode:'label',textAlign:'right',expression:'SUM("addBudgetAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',expression:'SUM("actAddAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column32',displayMode:'label',textAlign:'right',expression:'SUM("budgetRsltsAmt")',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column31',displayMode:'label',textAlign:'right',expression:'SUM("budgetRsltsSettAmt")',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column30',displayMode:'label',textAlign:'right',expression:'SUM("sumAmt")',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column29',displayMode:'label',textAlign:'right',expression:'SUM("remainAmt")',displayFormat:'#,##0',excelCellType:'number',dataType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'(단위 : 원)',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_detail',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_detailPopUp'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세'}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico',id:'bSearch1',label:'조회조건 예산통제부서, 귀속부서 ',style:''}},{T:1,N:'xf:group',A:{class:'info-con',id:''},E:[{T:1,N:'xf:group',A:{class:'info-list blk',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'bSearch2',label:'1. 예산통제부서 : 자신이 속한 부서의 예산통제부서만 조회 가능',style:'',tagname:'p'}},{T:1,N:'w2:textbox',A:{class:'',id:'bSearch3',label:'2. 귀속부서 : 자산이 속한 부서의 상위 부서의 모든 하위 부서 예산실적 조회 가능',style:'',tagname:'p'}}]}]}]}]}]}]}]}]})