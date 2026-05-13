/*amd /ui/cm/bc/comnmgnt/usermgnt/zz_620_01_09b.xml 92354 3c53bb8c284e0bd2e91b6f2940b20d35b0c84208e934f672d118f0dd4da43895 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'retrieveName',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrieveReqDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrievePrgsSts',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'registYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upperAcctDeptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'loginDept',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_osideUserMgnt',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_masterOrder_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'prgsSts',name:'상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm2',name:'요청부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sabun',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'enterDt',name:'입사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'resignDt',name:'퇴사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisAcctDeptNm',name:'데비스;귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisUseSyscd',name:'사용시스템'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm1',name:'SHR부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jikGubNm',name:'직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jikwiNm',name:'직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'porteReqId',name:'포르테;신청ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptName',name:'포르테;부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'firstRegistDt',name:'최초;요청일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name2',name:'요청자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDt',name:'요청일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name3',name:'승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitDt',name:'승인일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name4',name:'최종;승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalAdmitDt',name:'최종;승인일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqRsn',name:'요청사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisUseYn',name:'데비스사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisAcctDeptCd',name:'데비스귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'porteUseYn',name:'포르테사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrDeptCd',name:'SHR부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm1',name:'SHR부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrJikGubCd',name:'SHR직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrJikWiCd',name:'SHR직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDeptCd',name:'요청부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqSabun',name:'요청자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitSabun',name:'승인자(부서장)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalAdmitSabun',name:'최종승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rejectRsn',name:'반려사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rejectDt',name:'반려일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'DEBIS성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'DEBIS귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empStsCdNm',name:'DEBIS퇴사여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'employeeId',name:'PORTEID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gradeName',name:'PORTE직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'retireYn',name:'PORTE퇴사여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'positionName',name:'PORTE직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitSabun',name:'승인자사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalAdmitSabun',name:'최종승인자사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sysCd',name:'사용시스템'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_osideUserMgntWindowOepnInformation',repeatNode:'map',saveRemovedData:'true',style:'','ev:ondataload':'scwin.ds_masterOrder_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'prgsSts',name:'상태'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm2',name:'요청부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name',name:'성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sabun',name:'사번'}},{T:1,N:'w2:column',A:{dataType:'text',id:'enterDt',name:'입사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'resignDt',name:'퇴사일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisAcctDeptNm',name:'데비스;귀속부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisUseSyscd',name:'사용시스템'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm1',name:'SHR부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jikGubNm',name:'직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'jikwiNm',name:'직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'porteReqId',name:'포르테;신청ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptName',name:'포르테;부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'firstRegistDt',name:'최초;요청일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name2',name:'요청자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDt',name:'요청일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name3',name:'승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitDt',name:'승인일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'name4',name:'최종;승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalAdmitDt',name:'최종;승인일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqRsn',name:'요청사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisUseYn',name:'데비스사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisAcctDeptCd',name:'데비스귀속부서코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisAcctDeptNm',name:'데비스귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntNm',name:'거래처명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'debisUseSyscd',name:'데비스사용시스템'}},{T:1,N:'w2:column',A:{dataType:'text',id:'porteUseYn',name:'포르테사용여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrDeptCd',name:'SHR부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deptNm1',name:'SHR부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrJikGubCd',name:'SHR직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'shrJikWiCd',name:'SHR직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqDeptCd',name:'요청부서'}},{T:1,N:'w2:column',A:{dataType:'text',id:'reqSabun',name:'요청자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'admitSabun',name:'승인자(부서장)'}},{T:1,N:'w2:column',A:{dataType:'text',id:'finalAdmitSabun',name:'최종승인자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rejectRsn',name:'반려사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rejectDt',name:'반려일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'delYn',name:'삭제여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'userNm',name:'DEBIS성명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'DEBIS귀속부서명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empStsCdNm',name:'DEBIS퇴사여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'employeeId',name:'PORTEID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gradeName',name:'PORTE직급'}},{T:1,N:'w2:column',A:{dataType:'text',id:'retireYn',name:'PORTE퇴사여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'positionName',name:'PORTE직위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regId',name:'등록자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regDtm',name:'등록일시'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modId',name:'수정자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modDtm',name:'수정일시'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.usermgnt.cmd.CreateOsideUserMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_osideUserMgnt","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_osideUserMgnt","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/cm.bc.comnmgnt.usermgnt.cmd.RetrieveOsideUserMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"}, {"id":"ds_osideUserMgnt","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"}, {"id":"ds_osideUserMgnt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'scwin.sbm_search_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search2',action:'/cm.bc.comnmgnt.usermgnt.cmd.RetrieveOsideUserMgntWindowOepnInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"}, {"id":"ds_osideUserMgntWindowOepnInformation","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"}, {"id":"ds_osideUserMgnt","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search2_submitdone','ev:submiterror':'scwin.sbm_search2_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/cm.bc.comnmgnt.usermgnt.cmd.DeleteOsideUserMgntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_osideUserMgnt","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_osideUserMgnt","key":"IN_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'scwin.sbm_delete_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',type:'text/javascript',scopeVariable:'DFWConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : zz_620_01_09b
// 이름     : 내부사용자 입/퇴사 관리
// 경로     : 공통/시스템관리/사용자/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-04
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.acctDeptCd = scwin.memJson.acctDeptCd;
scwin.acctDeptNm = scwin.memJson.acctDeptNm;
scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");

//hidden
scwin.upperAcctDeptCd;
scwin.itYn;
scwin.loginDept;
scwin.onpageload = function () {
  //f_Header();

  //scwin.upperAcctDeptCd = ds_osideUserMgntWindowOepnInformation.getCellData(0,"upDeptPosNo");

  scwin.loginDept = scwin.acctDeptCd;
  const codeOptions = [{
    grpCd: "ZZ056",
    compID: "lc_retrievePrgsSts, lc_prgsSts, gr_osideUserMgnt:prgsSts"
  }, {
    grpCd: "ZZ009",
    compID: "lc_debisUseSyscd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  //ds_condition.UseChangeInfo = false;
  //tr_search2.post();
  //tr_search2는 사용하지 않는듯
  dma_condition.set("retrieveName", ed_retrieveName.getValue());
  dma_condition.set("retrieveReqDeptCd", ed_retrieveReqDeptCd.getValue());
  dma_condition.set("retrievePrgsSts", lc_retrievePrgsSts.getValue());
  dma_condition.set("registYn", lc_registYn.getValue());
  dma_condition.set("upperAcctDeptCd", scwin.upperAcctDeptCd);
  dma_condition.set("itYn", scwin.itYn);
  dma_condition.set("loginDept", scwin.loginDept);
  $c.sbm.execute($p, sbm_search2);
  scwin.f_firstSetting();
};
scwin.ondataload = function () {
  if (scwin.acctDeptCd != "00008") {
    // IT전략팀이 아니라면

    // 상태구분 셋팅
    if (ds_osideUserMgntWindowOepnInformation.getCellData(0, "deptcapGbn") == 'V1202') {
      // 부서장 이라면
      lc_retrievePrgsSts.setSelectedIndex(3); // 승인요청 으로 셋팅 
    } else if (ds_osideUserMgntWindowOepnInformation.getCellData(1, "deptcapGbn") == 'V1201') {
      // 부서원 이라면
      lc_retrievePrgsSts.setSelectedIndex(0); // 전체로 셋팅 
    }

    // 요청부서 셋팅
    ed_retrieveReqDeptCd.setValue(scwin.acctDeptCd);
    ed_retrieveDeptNm.setValue(scwin.acctDeptNm);
    scwin.itYn = 0;
  } else if (scwin.acctDeptCd == "00008") {
    // IT전략팀 이라면
    lc_retrievePrgsSts.setSelectedIndex(4); // 상태구분 승인 으로 셋팅
    scwin.itYn = 1;
  }
};

//-------------------------------------------------------------------------
// Enable/Disable
//-------------------------------------------------------------------------
scwin.f_firstSetting = function () {
  $c.gus.cfDisableKeyData($p);
  //cfDisableObjects([lc_acctCd,txt_acctDeptNm])	
  //$c.gus.cfDisableObjects([ed_reqDeptNm, ed_enterDt, img_resignDt, img_debisAcctDeptNm, img_clntNm, img_deptNm1, img_jikGubNm, img_jikwiNm, img_name2, img_name3]); 
  $c.gus.cfDisableObjects($p, tbl1);
  $c.gus.cfDisableObjects($p, tbl2);
  $c.gus.cfDisableObjects($p, [btn_create, btn_update, btn_cancel, btn_delete, btn_save1, btn_save2, btn_save3, btn_save4, btn_save5]);
  $c.gus.cfEnableObjects($p, [ed_retrieveName, ed_retrieveReqDeptCd, ed_retrieveDeptNm]);
  //disabledKey에 걸림
  $c.gus.cfEnableObjects($p, [lc_retrievePrgsSts, lc_registYn]);
};

//-------------------------------------------------------------------------
// 온클릭, 취소 이벤트
//-------------------------------------------------------------------------
scwin.f_eventOnClick = function () {
  if (ds_osideUserMgnt.getRowCount() == 0) {
    // 조회 결과가 없어
    $c.win.alert($p, "조회 결과가 없습니다.");
    $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_save1, btn_save2, btn_save3, btn_save4, btn_save5]);
    $c.gus.cfEnableObj($p, btn_create, true);
  } else {
    // 조회 결과가 한 줄 이상이 나오네
    //alert("scwin.acctDeptCd =>" + scwin.acctDeptCd);
    //scwin.acctDeptCd = "00008";
    if (scwin.acctDeptCd == '00008') {
      // IT전략팀 이라면 모든 버튼 활성화
      $c.gus.cfEnableObjects($p, [btn_create, btn_delete, btn_update, btn_save1, btn_save2, btn_save3, btn_save4, btn_save5]);
    } else if (scwin.acctDeptCd != '00008' && ds_osideUserMgntWindowOepnInformation.getCellData(0, "deptcapGbn") == 'V1202') {
      // 부서장 이라면
      if (ds_osideUserMgnt.getCellData(0, "admitSabun") == scwin.userId) {
        if (lc_prgsSts.getSelectedIndex() == 3) {
          $c.gus.cfEnableObjects($p, [btn_cancel, btn_save2, btn_save4, ed_rejectRsn]);
        } else {
          $c.gus.cfEnableObjects($p, [btn_cancel]);
        }
      }
    } else if (scwin.acctDeptCd != '00008' && ds_osideUserMgntWindowOepnInformation.getCellData(0, "deptcapGbn") == 'V1201') {
      // 등록자 이라면
      if (ds_osideUserMgnt.getCellData(0, "reqSabun") == scwin.userId) {
        if (lc_prgsSts.getSelectedIndex() == 1) {
          // 신규인 경우
          $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_delete, btn_save1]);
        }
        if (lc_prgsSts.getSelectedIndex() == 2) {
          // 변경인 경우
          $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_save1]);
        }
        if (lc_prgsSts.getSelectedIndex() == 3) {
          // 승인요청
          $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel]);
        }
        if (lc_prgsSts.getSelectedIndex() == 4) {
          // 승인인 경우
          $c.gus.cfEnableObjects($p, [btn_create]);
        }
        if (lc_prgsSts.getSelectedIndex() == 5 || lc_prgsSts.getSelectedIndex() == 6 || lc_prgsSts.getSelectedIndex() == 7) {
          // 반려, 최종반려, 최종승인인 경우
          $c.gus.cfEnableObjects($p, [btn_create, btn_cancel, btn_update]);
        }
      }
    } else {
      $c.gus.cfEnableObjects($p, [btn_create]);
    }
  }
  if (lc_prgsSts.getSelectedIndex() == 4)
    // 승인 상태인 경우
    {
      $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_save1, btn_save2, btn_save5]);
    }
  if (lc_prgsSts.getSelectedIndex() == 7)
    // 승인 상태인 경우
    {
      $c.gus.cfDisableObjects($p, [btn_cancel, btn_save1, btn_save2, btn_save3]);
    }
};

//-------------------------------------------------------------------------
// 신규 버튼 클릭시
//-------------------------------------------------------------------------	
scwin.f_Create = function () {
  let row;
  row = ds_osideUserMgnt.insertRow();
  ds_osideUserMgnt.setRowPosition(row);
  gr_osideUserMgnt.setFocusedCell(row, 0, false);
  $c.gus.cfEnableObjects($p, [ed_shrDeptCd, ed_deptNm1, ed_enterDt, ed_name, ed_reqDeptCd, btn_deptNm2, ed_deptNm2, chb_debisUseYn, chb_porteUseYn, ed_reqSabun, ed_name2, btn_name2, ed_reqRsn, btn_name3]);
  $c.gus.cfEnableObjects($p, [btn_cancel, btn_save5, btn_deptNm1, ed_admitSabun, ed_name3, btn_name3]);
  lc_prgsSts.setSelectedIndex(1);
  ed_reqSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "sabun"));
  ed_name2.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "name"));
  ed_reqDeptCd.setValue(scwin.acctDeptCd);
  ed_deptNm2.setValue(scwin.acctDeptNm);
  ed_admitSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capSabun"));
  ed_name3.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capName"));
  ed_reqDt.setValue(scwin.dateStr);
  ed_firstRegistDt.setValue(scwin.dateStr);
};

//-------------------------------------------------------------------------
// 수정 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  let row = ds_osideUserMgnt.getRowPosition();
  if (ds_osideUserMgnt.getCellData(row, "prgsSts") == '6') {
    //alert("상태구분이 최종승인인 건은 수정 불가능 합니다.");
    //return;
  }
  if (ds_osideUserMgnt.getCellData(row, "prgsSts") != '1') {
    if (ds_osideUserMgnt.getCellData(row, "resignDt") != '') {
      $c.win.alert($p, "퇴사한 사원 정보는 수정 불가능 합니다.");
      return;
    }
  }
  if (lc_prgsSts.getSelectedIndex() == 1)
    // 신규 상태에서 수정 버튼을 누른 경우 상태구분은 신규로 고정
    {
      $c.gus.cfEnableObjects($p, [ed_shrDeptCd, ed_deptNm1, btn_deptNm1, ed_name, ed_reqDeptCd, btn_deptNm2, ed_deptNm2, chb_debisUseYn, chb_porteUseYn, ed_enterDt, ed_reqSabun, ed_name2, btn_name2, ed_reqRsn, btn_name3]);
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save5, ed_enterDt, ed_admitSabun, ed_name3, btn_name3]);
      $c.gus.cfDisableObjects($p, [btn_update]);
      scwin.f_checkdebisUseYn();
      scwin.f_checkPorteUseYn();
      ed_reqDt.setValue(scwin.dateStr);
      lc_prgsSts.setSelectedIndex(1);
    } else if (lc_prgsSts.getSelectedIndex() == 2 || lc_prgsSts.getSelectedIndex() == 3)
    // 변경, 승인요청 상태인 경우
    {
      $c.gus.cfEnableObjects($p, [ed_shrDeptCd, ed_deptNm1, btn_deptNm1, ed_name, ed_reqDeptCd, btn_deptNm2, ed_deptNm2, chb_debisUseYn, chb_porteUseYn, ed_enterDt, ed_reqSabun, ed_name2, btn_name2, ed_reqRsn, btn_name3]);
      $c.gus.cfEnableObjects($p, [btn_cancel, btn_save5, ed_admitSabun, ed_name3, btn_name3]);
      $c.gus.cfDisableObjects($p, [btn_update]);
      scwin.f_checkdebisUseYn();
      scwin.f_checkPorteUseYn();
      ed_reqSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "sabun"));
      ed_name2.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "name"));
      ed_admitSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capSabun"));
      ed_name3.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capName"));
      ed_reqDt.setValue(scwin.dateStr);
      lc_prgsSts.setSelectedIndex(4);
    } else if (lc_prgsSts.getSelectedIndex() == 4)
    // 승인 상태인 경우
    {
      $c.gus.cfDisableObjects($p, [btn_update, btn_delete, btn_save5]);
    } else if (lc_prgsSts.getSelectedIndex() == 5 || lc_prgsSts.getSelectedIndex() == 6) {
    // 반려, 최종반려 인 경우
    $c.gus.cfEnableObjects($p, [ed_shrDeptCd, ed_deptNm1, ed_name, ed_enterDt, ed_resignDt, ed_reqSabun, ed_name2, btn_name2, ed_reqRsn, chb_debisUseYn, chb_porteUseYn]);
    $c.gus.cfEnableObjects($p, [btn_deptNm1, btn_name2, ed_admitSabun, ed_name3, btn_save5, btn_name3]);
    scwin.f_checkdebisUseYn();
    scwin.f_checkPorteUseYn();
    ed_reqSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "sabun"));
    ed_name2.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "name"));
    ed_admitSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capSabun"));
    ed_name3.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "capName"));
    ed_reqDt.setValue(scwin.dateStr);
    ed_reqDeptCd.setValue(scwin.acctDeptCd);
    ed_deptNm2.setValue(scwin.acctDeptNm);
    lc_prgsSts.setSelectedIndex(2);
  } else if (lc_prgsSts.getSelectedIndex() == 7) {
    // 최종승인 상태인 경우
    //cfEnableObjects([ed_resignDt, img_resignDt, btn_save5, txt_reqRsn, btn_cancel]);
    //cfDisableObjects([btn_create, btn_update, btn_delete, btn_save2, btn_save3, btn_save4, btn_save1]);

    $c.gus.cfEnableObjects($p, [ed_resignDt, ed_shrDeptCd, ed_deptNm1, btn_deptNm1, ed_name, ed_reqDeptCd, btn_deptNm2, ed_deptNm2, chb_debisUseYn, chb_porteUseYn, ed_enterDt, ed_reqSabun, ed_name2, btn_name2, ed_reqRsn, btn_name3]);
    $c.gus.cfEnableObjects($p, [btn_cancel, btn_save5, ed_admitSabun, ed_name3, btn_name3]); //btn_resignDt 없음
    $c.gus.cfDisableObjects($p, [btn_update]);
    scwin.f_checkdebisUseYn();
    scwin.f_checkPorteUseYn();
    ed_reqSabun.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "sabun"));
    ed_name2.setValue(ds_osideUserMgntWindowOepnInformation.getCellData(0, "name"));
    ed_reqDt.setValue(scwin.dateStr);
    ed_finalAdmitSabun.setValue("");
    ed_name4.setValue("");
    ed_finalAdmitDt.setValue("");
    lc_prgsSts.setSelectedIndex(4);
  }
};

//-------------------------------------------------------------------------
// 취소 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  //ds_osideUserMgnt.undoRow( ds_osideUserMgnt.getRowPosition() );
  //$c.data.undoRow(ds_osideUserMgnt,"Y"); 

  var rP = ds_osideUserMgnt.getRowPosition();
  ds_osideUserMgnt.undoRow(ds_osideUserMgnt.getRowPosition());
  if (ds_osideUserMgnt.getRowStatus(rP) == 'C') {
    ds_osideUserMgnt.removeRow(rP); //delete는 남는다.
  }
  $c.gus.cfEnableObjects($p, [btn_create, btn_update]);
  scwin.f_firstSetting();
  scwin.f_eventOnClick();
  $c.gus.cfDisableObjects($p, [btn_cancel]);
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Save5 = async function () {
  if (ds_osideUserMgnt.getModifiedIndex().length < 1) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (ed_reqDeptCd.getValue() == '') {
    $c.win.alert($p, "요청 부서는 필수 입력 사항 입니다.");
    ed_reqDeptCd.focus();
    return;
  }
  if (ed_name.getValue() == '') {
    $c.win.alert($p, "성명은 필수 입력 사항 입니다.");
    ed_name.focus();
    return;
  }
  if (ed_enterDt.getValue() == '') {
    $c.win.alert($p, "입사일은 필수 입력 사항 입니다.");
    ed_enterDt.focus();
    return;
  }
  if (ed_shrDeptCd.getValue() == '') {
    $c.win.alert($p, "SHR부서는 필수 입력 사항 입니다.");
    ed_shrDeptCd.focus();
    return;
  }
  if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "debisUseYn") == '1') {
    if (ed_debisAcctDeptCd.getValue() == '' || ed_debisAcctDeptNm.getValue() == '') {
      $c.win.alert($p, "데비스 사용 선택시 귀속부서는 필수 입력 입니다.");
      return;
    }
  }
  if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "porteUseYn") == '1') {
    if (ed_shrJikGubCd.getValue() == '' || ed_jikGubNm.getValue() == '') {
      $c.win.alert($p, "포르테 사용 선택시 직급은 필수 입력 입니다.");
      return;
    } else if (ed_shrJikWiCd.getValue() == '' || ed_jikwiNm.getValue() == '') {
      $c.win.alert($p, "포르테 사용 선택시 직위는 필수 입력 입니다.");
      return;
    } else if (ed_porteReqId.getValue() == '') {
      $c.win.alert($p, "포르테 사용 선택시 포르테신청ID는 필수 입력 입니다.");
      return;
    }
  }
  if (ed_reqSabun.getValue() == '') {
    $c.win.alert($p, "요청자는 필수 입력 사항 입니다.");
    ed_reqSabun.focus();
    return;
  }
  if (ed_reqRsn.getValue() == '') {
    $c.win.alert($p, "요청사유는 필수 입력 사항 입니다.");
    ed_reqRsn.focus();
    return;
  }
  if (ed_admitSabun.getValue() == '') {
    $c.win.alert($p, "승인자는 필수 입력 사항 입니다.");
    ed_admitSabun.focus();
    return;
  }
  if (lc_prgsSts.getSelectedIndex() == 2) {
    // 변경인 경우
    if (ed_resignDt.getValue() == '') {
      //alert("수정시 퇴사일은 필수 입력 사항 입니다.");
      //return;
    }
  }
  let ret;
  ret = await $c.gus.cfValidate($p, [gr_osideUserMgnt]);
  if (ret) {
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret == true) {
      //tr_save.Post();     
      scwin.setNameByByteLength();
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != "FAIL") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_Retrieve();
  }
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

//-------------------------------------------------------------------------
// 삭제 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "prgsSts") != '0') {
    $c.gus.cfAlertMsg($p, "상태구분이 신규인 건만 삭제 가능 합니다.");
    return;
  }
  ds_osideUserMgnt.setCellData(ds_osideUserMgnt.getRowPosition(), "delYn", "1");
  ds_osideUserMgnt.deleteRow(ds_osideUserMgnt.getRowPosition());
  let ret;
  ret = await $c.win.confirm($p, "삭제 하시겠습니까?");
  if (ret == true) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 승인요청 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Save1 = async function () {
  let row = ds_osideUserMgnt.getRowPosition();
  if (ds_osideUserMgnt.getCellData(row, "prgsSts") != '0' && ds_osideUserMgnt.getCellData(row, "prgsSts") != '1') {
    $c.gus.cfAlertMsg($p, "상태구분이 신규 및 변경인 건만 승인요청 가능 합니다.");
    return;
  }
  if (ds_osideUserMgnt.getCellData(row, "reqSabun") != scwin.userId) {
    //alert("요청자와 로그인 사용자가 다른 경우 승인 요청이 불가능 합니다.");
    //return;
  }
  lc_prgsSts.setSelectedIndex(3);
  let ret;
  ret = await $c.win.confirm($p, "승인요청 하시겠습니까?");
  if (ret == true) {
    //tr_save.Post(); 
    scwin.setNameByByteLength();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 부서장승인 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Save2 = async function () {
  let ret;
  ret = await $c.win.confirm($p, "승인처리 하시겠습니까?");
  if (ret == true) {
    ed_admitDt.setValue(scwin.dateStr); // 승인일자 셋팅
    ed_admitSabun.setValue(scwin.userId);
    ed_name3.setValue(scwin.userNm);
    lc_prgsSts.setSelectedIndex(4);

    //tr_save.Post();    
    scwin.setNameByByteLength();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 최종승인 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Save3 = async function () {
  if (scwin.acctDeptCd != '00008') {
    $c.win.alert($p, "최종승인은 IT전략팀 고유 권한 입니다.");
    return;
  }
  let ret;
  ret = await $c.win.confirm($p, "최종 승인 하시겠습니까?");
  if (ret == true) {
    ed_finalAdmitSabun.setValue(scwin.userId);
    ed_name4.setValue(scwin.userNm);
    ed_finalAdmitDt.setValue(scwin.dateStr); // 최종승인일자 셋팅
    lc_prgsSts.setSelectedIndex(7);

    //tr_save.Post();     
    scwin.setNameByByteLength();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 반려 버튼 클릭시
//-------------------------------------------------------------------------
scwin.f_Save4 = async function () {
  if (ed_rejectRsn.getValue() == '') {
    $c.win.alert($p, "반려사유를 입력 하셔야 합니다.");
    return;
  }
  let ret;
  ret = await $c.win.confirm($p, "반려처리 하시겠습니까?");
  if (ret == true) {
    if (scwin.acctDeptCd != '00008') {
      // 부서장 반려시 반려 처리
      lc_prgsSts.setSelectedIndex(5);
    } else {
      // IT전략팀 반려시 최종 반려 처리
      lc_prgsSts.setSelectedIndex(6);
    }
    ed_rejectDt.setValue(scwin.dateStr); // 반려일자 셋팅
    //tr_save.Post(); 
    scwin.setNameByByteLength();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 데비스사용여부 클릭시
//-------------------------------------------------------------------------	
scwin.f_checkdebisUseYn = function () {
  if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "debisUseYn") == '0') {
    // 체크 해제
    $c.gus.cfDisableObjects($p, [ed_debisAcctDeptCd, ed_debisAcctDeptNm, btn_debisAcctDeptNm, lc_debisUseSyscd, ed_clntNo, ed_clntNm, btn_clntNm]);
    ed_debisAcctDeptCd.setValue("");
    ed_debisAcctDeptNm.setValue("");
    lc_debisUseSyscd.setSelectedIndex(0);
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  } else if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "debisUseYn") == '1') {
    // 체크
    $c.gus.cfEnableObjects($p, [ed_debisAcctDeptCd, ed_debisAcctDeptNm, btn_debisAcctDeptNm, lc_debisUseSyscd, ed_clntNo, ed_clntNm, btn_clntNm]);
  }
};

//-------------------------------------------------------------------------
// 포르테사용여부 클릭시
//-------------------------------------------------------------------------	
scwin.f_checkPorteUseYn = function () {
  if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "porteUseYn") == '0') {
    // 체크 해제
    $c.gus.cfDisableObjects($p, [ed_shrJikGubCd, ed_jikGubNm, btn_jikGubNm, ed_shrJikWiCd, ed_jikwiNm, btn_jikwiNm, ed_porteReqId]);
    ed_shrJikGubCd.setValue("");
    ed_jikGubNm.setValue("");
    ed_shrJikWiCd.setValue("");
    ed_jikwiNm.setValue("");
    ed_porteReqId.setValue("");
  } else if (ds_osideUserMgnt.getCellData(ds_osideUserMgnt.getRowPosition(), "porteUseYn") == '1') {
    // 체크
    $c.gus.cfEnableObjects($p, [ed_shrJikGubCd, ed_jikGubNm, btn_jikGubNm, ed_shrJikWiCd, ed_jikwiNm, btn_jikwiNm, ed_porteReqId]);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //ds_condition.UseChangeInfo = false;
  /*
      <C> Col=retrieveName		Ctrl=txt_retrieveName  		Param=value    		</C> 
      <C> Col=retrieveReqDeptCd	Ctrl=ed_retrieveReqDeptCd	Param=text   		</C> 
      <C> Col=retrievePrgsSts     Ctrl=lc_retrievePrgsSts     Param=BindColVal   	</C> 
      <C> Col=registYn        	Ctrl=lc_registYn       		Param=BindColVal   	</C> 
      <C> Col=upperAcctDeptCd     Ctrl=upperAcctDeptCd    	Param=value         </C>
      <C> Col=itYn     			Ctrl=itYn    				Param=value         </C>
      <C> Col=loginDept  			Ctrl=loginDept 				Param=value         </C>
  */

  dma_condition.set("retrieveName", ed_retrieveName.getValue());
  dma_condition.set("retrieveReqDeptCd", ed_retrieveReqDeptCd.getValue());
  dma_condition.set("retrievePrgsSts", lc_retrievePrgsSts.getValue());
  dma_condition.set("registYn", lc_registYn.getValue());
  dma_condition.set("upperAcctDeptCd", scwin.upperAcctDeptCd);
  dma_condition.set("itYn", scwin.itYn);
  dma_condition.set("loginDept", scwin.loginDept);

  //tr_search.post();
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:검색->관리부서 , 2:검색->거래처
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (select_code, txtCode, txtName, sPopupCls) {
  var rtnList = null;
  var sCmdName = "";
  var name = "";
  code = txtCode.getValue();
  if (txtName == null) {
    name = "";
  } else {
    name = txtName.getValue();
  }
  switch (select_code) {
    case '1':
      sCmdName = "retrieveBankInfo";
      udc_BankInfo.setSelectId(sCmdName);
      udc_BankInfo.cfCommonPopUp(scwin.udc_BankInfo_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 차입기관
      break;
    case '2':
      sCmdName = "retrieveAcctDeptCdInfo";
      udc_retrieveReqDeptCd.setSelectId(sCmdName);
      udc_retrieveReqDeptCd.cfCommonPopUp(scwin.udc_retrieveReqDeptCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 데비스귀속부서
      break;
    case '2-1':
      sCmdName = "retrieveAcctDeptCdInfo";
      udc_reqDeptCd.setSelectId(sCmdName);
      udc_reqDeptCd.cfCommonPopUp(scwin.udc_reqDeptCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 데비스귀속부서
      break;
    case '2-2':
      sCmdName = "retrieveAcctDeptCdInfo";
      udc_debisAcctDeptCd.setSelectId(sCmdName);
      udc_debisAcctDeptCd.cfCommonPopUp(scwin.udc_debisAcctDeptCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null); // 데비스귀속부서
      break;
    case '3':
      sCmdName = "retrieveSHRDeptInfo";
      udc_shrDeptCd.setSelectId(sCmdName);
      udc_shrDeptCd.cfCommonPopUp(scwin.udc_shrDeptCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 귀속부서
      break;
    case '4':
      var param = "000";
      udc_clntNo.setSelectId("retrieveClntList2");
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callbackfunc, ed_clntNo.getValue().trim(), ed_clntNm.getValue(), sPopupCls, null, null, null, null, param, null, null, null, null);
      break;
    case '5':
      sCmdName = "retrieveDebisSHRUserInfo";
      udc_reqSabun.setSelectId(sCmdName);
      udc_reqSabun.cfCommonPopUp(scwin.udc_reqSabun_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, "F",
      //pAllSearchTF
      null, null); // 요청자
      break;
    case '5-1':
      sCmdName = "retrieveDebisSHRUserInfo";
      udc_admitSabun.setSelectId(sCmdName);
      udc_admitSabun.cfCommonPopUp(scwin.udc_admitSabun_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, "F",
      //pAllSearchTF
      null, null); // 승인자
      break;
    case '6':
      sCmdName = "retrieveJikGubInfo";
      udc_shrJikGubCd.setSelectId(sCmdName);
      udc_shrJikGubCd.cfCommonPopUp(scwin.udc_shrJikGubCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 직급
      break;
    case '7':
      sCmdName = "retrieveJikWiInfo";
      udc_shrJikWiCd.setSelectId(sCmdName);
      udc_shrJikWiCd.cfCommonPopUp(scwin.udc_shrJikWiCd_callbackfunc, code, name, sPopupCls, null, null, null, null, null, null, null, null, null, null, null, null, null); // 직위
      break;
  }
};
scwin.udc_BankInfo_callbackfunc = function (rtnList) {};
scwin.udc_retrieveReqDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_retrieveReqDeptCd.setValue(rtnList[0]); // 코드
    if (ed_retrieveDeptNm != null) {
      ed_retrieveDeptNm.setValue(rtnList[1]); // 코드명
    }
    ed_retrieveReqDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_retrieveReqDeptCd.setValue(""); // 코드
    if (ed_retrieveDeptNm != null) {
      ed_retrieveDeptNm.setValue(""); // 코드명
    }
    ed_retrieveReqDeptCd.options.hidVal = "";
  }
};
scwin.udc_reqDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reqDeptCd.setValue(rtnList[0]); // 코드
    if (ed_deptNm2 != null) {
      ed_deptNm2.setValue(rtnList[1]); // 코드명
    }
    ed_reqDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_reqDeptCd.setValue(""); // 코드
    if (ed_deptNm2 != null) {
      ed_deptNm2.setValue(""); // 코드명
    }
    ed_reqDeptCd.options.hidVal = "";
  }
};
//2-2 귀속부서
scwin.udc_debisAcctDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_debisAcctDeptCd.setValue(rtnList[0]); // 코드
    if (ed_debisAcctDeptNm != null) {
      ed_debisAcctDeptNm.setValue(rtnList[1]); // 코드명
    }
    ed_debisAcctDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_debisAcctDeptCd.setValue(""); // 코드
    if (ed_debisAcctDeptNm != null) {
      ed_debisAcctDeptNm.setValue(""); // 코드명
    }
    ed_debisAcctDeptCd.options.hidVal = "";
  }
};
scwin.udc_shrDeptCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_shrDeptCd.setValue(rtnList[0]); // 코드
    if (ed_deptNm1 != null) {
      ed_deptNm1.setValue(rtnList[1]); // 코드명
    }
    ed_shrDeptCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_shrDeptCd.setValue(""); // 코드
    if (ed_deptNm1 != null) {
      ed_deptNm1.setValue(""); // 코드명
    }
    ed_shrDeptCd.options.hidVal = "";
  }
};
scwin.udc_clntNo_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]); // 코드
    if (ed_clntNm != null) {
      ed_clntNm.setValue(rtnList[1]); // 코드명
    }
    ed_clntNo.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_clntNo.setValue(""); // 코드
    if (ed_clntNm != null) {
      ed_clntNm.setValue(""); // 코드명
    }
    ed_clntNo.options.hidVal = "";
  }
};
//요청자
scwin.udc_reqSabun_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_reqSabun.setValue(rtnList[0]); // 코드
    if (ed_name2 != null) {
      ed_name2.setValue(rtnList[1]); // 코드명
    }
    ed_reqSabun.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_reqSabun.setValue(""); // 코드
    if (ed_name2 != null) {
      ed_name2.setValue(""); // 코드명
    }
    ed_reqSabun.options.hidVal = "";
  }
};
//승인자
scwin.udc_admitSabun_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_admitSabun.setValue(rtnList[0]); // 코드
    if (ed_name3 != null) {
      ed_name3.setValue(rtnList[1]); // 코드명
    }
    ed_admitSabun.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_admitSabun.setValue(""); // 코드
    if (ed_name3 != null) {
      ed_name3.setValue(""); // 코드명
    }
    ed_admitSabun.options.hidVal = "";
  }
};
//직급
scwin.udc_shrJikGubCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_shrJikGubCd.setValue(rtnList[0]); // 코드
    if (ed_jikGubNm != null) {
      ed_jikGubNm.setValue(rtnList[1]); // 코드명
    }
    ed_shrJikGubCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_shrJikGubCd.setValue(""); // 코드
    if (ed_jikGubNm != null) {
      ed_jikGubNm.setValue(""); // 코드명
    }
    ed_shrJikGubCd.options.hidVal = "";
  }
};
scwin.udc_shrJikWiCd_callbackfunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_shrJikWiCd.setValue(rtnList[0]); // 코드
    if (ed_jikwiNm != null) {
      ed_jikwiNm.setValue(rtnList[1]); // 코드명
    }
    ed_shrJikWiCd.options.hidVal = rtnList[0]; // 코드
  } else {
    ed_shrJikWiCd.setValue(""); // 코드
    if (ed_jikwiNm != null) {
      ed_jikwiNm.setValue(""); // 코드명
    }
    ed_shrJikWiCd.options.hidVal = "";
  }
};
scwin.udc_retrieveReqDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2', ed_retrieveReqDeptCd, ed_retrieveDeptNm, 'F');
};
scwin.udc_retrieveReqDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_retrieveReqDeptCd, ed_retrieveDeptNm, '2');
};

// 데이터영역 > 요청부서
scwin.udc_reqDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2-1', ed_reqDeptCd, ed_deptNm2, 'F');
};
scwin.udc_reqDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqDeptCd, ed_deptNm2, '2-1');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp('4', ed_clntNo, ed_clntNm, 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '4');
};

// 데이터영역 > 요청자
scwin.udc_reqSabun_onclickEvent = function (e) {
  scwin.f_openPopUp('5', ed_reqSabun, ed_name2, 'F');
};
scwin.udc_reqSabun_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_reqSabun, ed_name2, '5');
};

//직급
scwin.udc_shrJikGubCd_onclickEvent = function (e) {
  scwin.f_openPopUp('6', ed_shrJikGubCd, ed_jikGubNm, 'F');
};
scwin.udc_shrJikGubCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_shrJikGubCd, ed_jikGubNm, '6');
};

//직위
scwin.udc_shrJikWiCd_onclickEvent = function (e) {
  scwin.f_openPopUp('7', ed_shrJikWiCd, ed_jikwiNm, 'F');
};
scwin.udc_shrJikWiCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_shrJikWiCd, ed_jikwiNm, '7');
};
scwin.udc_admitSabun_onclickEvent = function (e) {
  scwin.f_openPopUp('5-1', ed_admitSabun, ed_name3, 'F');
};
scwin.udc_admitSabun_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_admitSabun, ed_name3, '5-1');
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd.tagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue() != orgObjCd.options.hidVal) {
      orgObjNm.setValue("");
    }
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code, orgObjCd, orgObjNm, 'T');
    } else {
      if (!orgObjNm == null) {
        orgObjNm.setValue("");
      }
      orgObjCd.setValue("");
    }
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, table1, null);
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_save5_onclick = function (e) {
  scwin.f_Save5();
};
scwin.btn_save1_onclick = function (e) {
  scwin.f_Save1();
};
scwin.btn_save2_onclick = function (e) {
  scwin.f_Save2();
};
scwin.btn_save3_onclick = function (e) {
  scwin.f_Save3();
};
scwin.btn_save4_onclick = function (e) {
  scwin.f_Save4();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_search_submitdone = function (e) {
  //cfShowTotalRows(totalRows, rowCnt);
  ed_totalRows.setValue(ds_osideUserMgnt.getRowCount());
  ds_osideUserMgnt.setRowPosition(0); // 하단 value로 버튼을 셋팅하느라 이게 필요
  gr_osideUserMgnt.setFocusedCell(0, 0, false); //강제포커스
  scwin.f_eventOnClick();
};
scwin.sbm_search_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_delete_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로삭제하였습니다
  scwin.f_Retrieve();
};
scwin.sbm_delete_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.udc_shrDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('3', ed_shrDeptCd, ed_deptNm1, 'F');
};
scwin.udc_shrDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_shrDeptCd, ed_deptNm1, '3');
};

//데이터영역 > 귀속부서
scwin.udc_debisAcctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2-2', ed_debisAcctDeptCd, ed_debisAcctDeptNm, 'F');
};
scwin.udc_debisAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_debisAcctDeptCd, ed_debisAcctDeptNm, '2-2');
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = function () {
  if (ds_osideUserMgnt.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    let sheetTitle = "내부사용자 입퇴사 관리";
    const gridId = gr_osideUserMgnt;
    const infoArr = [];
    const options = {
      fileName: sheetTitle + ".xlsx",
      // + ".xlsx",
      sheetName: sheetTitle,
      type: 2 + 4 + 8 + 16
    };
    $c.data.downloadGridViewExcel($p, gridId, options, infoArr);
  }
};
scwin.ds_masterOrder_ondataload = function () {};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
scwin.gr_osideUserMgnt_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_firstSetting();
  scwin.f_Cancel();
  var Row = rowIndex;
  if (scwin.acctDeptCd == '00008') {
    // IT전략팀 온클릭 이벤트
    if (lc_prgsSts.getSelectedIndex() == 1) {
      // 신규인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_delete, btn_save1]);
    }
    if (lc_prgsSts.getSelectedIndex() == 2) {
      // 변경인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_save1, btn_save2, btn_save3]);
    }
    if (lc_prgsSts.getSelectedIndex() == 3 || lc_prgsSts.getSelectedIndex() == 4) {
      // 승인요청, 승인인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_save3, btn_save4, ed_rejectRsn]);
    }
    if (lc_prgsSts.getSelectedIndex() == 5 || lc_prgsSts.getSelectedIndex() == 6) {
      // 반려, 최종반려, 최종승인인 경우
      $c.gus.cfEnableObjects($p, [ed_rejectRsn, btn_create, btn_save5, btn_cancel, btn_update, btn_save1, btn_save2, btn_save3, btn_save4, btn_save5]);
    }
    if (lc_prgsSts.getSelectedIndex() == 7)
      // 최종승인 상태인 경우
      {
        $c.gus.cfEnableObjects($p, [ed_rejectRsn, btn_create, btn_save5, btn_update, btn_save3, btn_save4, btn_save5]);
        $c.gus.cfDisableObjects($p, [btn_cancel, btn_save1, btn_save2, btn_save3]);
      }
  } else if (scwin.acctDeptCd != '00008' && ds_osideUserMgntWindowOepnInformation.getCellData(0, "deptcapGbn") == 'V1202') {
    // 부서장 온클릭 이벤트
    if (ds_osideUserMgnt.getCellData(Row, "admitSabun") == scwin.userId) {
      if (lc_prgsSts.getSelectedIndex() == 3) {
        $c.gus.cfEnableObjects($p, [btn_cancel, btn_save2, btn_save4, txt_rejectRsn]);
      } else {
        $c.gus.cfEnableObjects($p, [btn_cancel]);
      }
    }
  } else if (scwin.acctDeptCd != '00008' && ds_osideUserMgntWindowOepnInformation.getCellData(0, "deptcapGbn") == 'V1201') {
    // 등록자 온클릭 이벤트
    if (lc_prgsSts.getSelectedIndex() == 1) {
      // 신규인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_delete, btn_save1]);
    }
    if (lc_prgsSts.getSelectedIndex() == 2) {
      // 변경인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel, btn_save1]);
    }
    if (lc_prgsSts.getSelectedIndex() == 3) {
      // 승인요청
      $c.gus.cfEnableObjects($p, [btn_create, btn_update, btn_cancel]);
    }
    if (lc_prgsSts.getSelectedIndex() == 4) {
      // 승인인 경우
      $c.gus.cfEnableObjects($p, [btn_create]);
    }
    if (lc_prgsSts.getSelectedIndex() == 5 || lc_prgsSts.getSelectedIndex() == 6 || lc_prgsSts.getSelectedIndex() == 7) {
      // 반려, 최종반려, 최종승인인 경우
      $c.gus.cfEnableObjects($p, [btn_create, btn_cancel, btn_update]);
    }
  } else {
    $c.gus.cfEnableObjects($p, [btn_create]);
  }
  if (ds_osideUserMgnt.getRowStatus(rowIndex) == 'C' || ds_osideUserMgnt.getRowStatus(rowIndex) == 'V') {
    ds_osideUserMgnt.removeRow(rowIndex);
    if (ds_osideUserMgnt.getRowCount() - 1 >= rowIndex) {
      ds_osideUserMgnt.setRowPosition(rowIndex);
      gr_osideUserMgnt.setFocusedCell(rowIndex, columnIndex, false);
    } else {
      ds_osideUserMgnt.setRowPosition(rowIndex - 1);
      gr_osideUserMgnt.setFocusedCell(rowIndex - 1, columnIndex, false);
    }
  } else {
    ds_osideUserMgnt.setRowPosition(rowIndex);
    gr_osideUserMgnt.setFocusedCell(rowIndex, columnIndex, false);
  }
};

// AsIs input은 엔터 검색 활성화
scwin.ed_retrieveName_onkeypress = function (e) {
  if (e.keyCode == 13) {
    //엔터
    scwin.f_Retrieve();
  }
};
scwin.chb_porteUseYn_onlabelclick = function (index, checked, value) {
  console.log('scwin.chb_porteUseYn_onlabelclick');
  scwin.f_checkPorteUseYn();
};
scwin.chb_debisUseYn_onlabelclick = function (index, checked, value) {
  scwin.f_checkdebisUseYn();
};
scwin.setNameByByteLength = function () {
  var rp = ds_osideUserMgnt.getRowPosition();
  var tmpName = ds_osideUserMgnt.getCellData(rp, "name");
  if ($c.str.getByteLength($p, tmpName) > 30) {
    var idx = 0;
    for (idx = 0; idx < tmpName.length; idx++) {
      if ($c.str.getByteLength($p, tmpName.substring(0, idx)) > 30) {
        break;
      }
    }
    var subName = tmpName.substring(0, idx - 1);
    ds_osideUserMgnt.setCellData(rp, "name", subName);
  }
};
scwin.ed_porteReqId_onkeyup = function (e) {
  $c.win.chLower($p, e);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'table1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'성명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_retrieveName',placeholder:'',style:'width:150px;',objType:'data','ev:onkeypress':'scwin.ed_retrieveName_onkeypress'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요청부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_retrieveDeptNm',code:'acctDeptCd',codeId:'ed_retrieveReqDeptCd',id:'udc_retrieveReqDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_retrieveDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_retrieveReqDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_retrieveReqDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_retrievePrgsSts',chooseOption:'true',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOptionLabel:'전체',ref:'',objType:'data'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'근무상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_registYn',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'재직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'퇴직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'Y',gridDownUserAuth:'X',gridDownFn:'scwin.f_Export',btnUser:'Y',id:'udc_topGrd',gridID:'gr_osideUserMgnt'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_osideUserMgnt',style:'',autoFit:'none',id:'gr_osideUserMgnt',visibleRowNum:'4',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_osideUserMgnt_oncellclick',focusMode:'row',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'요청부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column15',value:'성명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'사번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'입사일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'퇴사일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'데비스<br/>귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'column5',value:'사용<br/>시스템',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'SHR부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'직급',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column43',value:'직위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column41',value:'포르테<br/>신청ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'포르테<br/>부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column37',value:'최초<br/>요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'요청자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'요청일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'승인자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'승인일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'최종<br/>승인자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'최종<br/>승인일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'column23',value:'요청사유',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column25',value:'데비스사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column69',value:'데비스귀속부서코드',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column65',value:'거래처번호',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column63',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column61',value:'데비스사용시스템',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column59',value:'포르테사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column57',value:'SHR부서',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column53',value:'SHR직급',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column51',value:'SHR직위',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column45',value:'요청부서',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column47',value:'요청자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column49',value:'승인자(부서장)',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column99',value:'최종승인자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column97',value:'반려사유',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column95',value:'반려일',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column93',value:'삭제여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column91',value:'DEBIS성명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column89',value:'DEBIS귀속부서명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column87',value:'DEBIS퇴사여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column85',value:'PORTEID',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column83',value:'PORTE직급',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column81',value:'PORTE퇴사여부',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column79',value:'PORTE직위',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column77',value:'등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column71',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'70',inputType:'text',id:'column73',value:'수정자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',value:'수정일시',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'prgsSts',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'deptNm2',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'name',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sabun',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'enterDt',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',dataType:'date'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'resignDt',displayMode:'label',displayFormat:'yyyy/MM/dd',calendarValueType:'yearMonthDate',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debisAcctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'85',inputType:'text',id:'t',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deptNm1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'jikGubNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'jikwiNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'porteReqId',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'deptName',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'firstRegistDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'name2',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'reqDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'name3',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'admitDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'name4',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'finalAdmitDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'400',inputType:'text',id:'reqRsn',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debisUseYn',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debisAcctDeptCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'debisUseSyscd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'porteUseYn',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shrDeptCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shrJikGubCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shrJikWiCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqDeptCd',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'reqSabun',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'admitSabun',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'finalAdmitSabun',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rejectRsn',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rejectDt',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'delYn',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'userNm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'acctDeptNm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'empStsCdNm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'employeeId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'gradeName',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'retireYn',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'positionName',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regDtm',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'modId',displayMode:'label',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'modDtm',displayMode:'label',hiddenCol:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'ed_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'신규등록(입사/퇴사정보)',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl1',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'상태구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',class:'form-control',disabled:'false',editType:'select',id:'lc_prgsSts',mandatory:'true',ref:'data:ds_osideUserMgnt.prgsSts',search:'start',style:'width:150px;',submenuSize:'auto',title:'버전',validExp:'버전:yes:number',chooseOptionLabel:'전체',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_version'},E:[{T:1,N:'w2:label',A:{ref:'col4'}},{T:1,N:'w2:value',A:{ref:'col1'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_deptNm2',code:'reqDeptCd',codeId:'ed_reqDeptCd',id:'udc_reqDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'deptNm2',nameId:'ed_deptNm2',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_reqDeptCd_onclickEvent',refDataCollection:'ds_osideUserMgnt','ev:onblurCodeEvent':'scwin.udc_reqDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사번',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_input2',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.sabun',refSync:'ds_osideUserMgnt.sabun',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'성명',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_name',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.name',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'입사일',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_enterDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.enterDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'SHR부서',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_deptNm1',code:'shrDeptCd',codeId:'ed_shrDeptCd',id:'udc_shrDeptCd',maxlengthCode:'4',maxlengthName:'100',name:'deptNm1',nameId:'ed_deptNm1',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'',refDataCollection:'ds_osideUserMgnt','ev:onclickEvent':'scwin.udc_shrDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_shrDeptCd_onblurCodeEvent',allowCharCodeLength:'1',afterAllowCharCode:'0-9',beforeAllowCharCode:'a-zA-Z',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'최초요청일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_firstRegistDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.firstRegistDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'퇴사일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_resignDt',pickerType:'selectbox',style:'',ref:'data:ds_osideUserMgnt.resignDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'데비스사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_debisUseYn',ref:'data:ds_osideUserMgnt.debisUseYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',tooltipLocaleRef:'data:dma_condition.itYn',objType:'data',falseValue:'0','ev:onlabelclick':'scwin.chb_debisUseYn_onlabelclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_debisAcctDeptNm',code:'debisAcctDeptCd',codeId:'ed_debisAcctDeptCd',id:'udc_debisAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'debisAcctDeptNm',nameId:'ed_debisAcctDeptNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'',refDataCollection:'ds_osideUserMgnt','ev:onclickEvent':'scwin.udc_debisAcctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_debisAcctDeptCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용시스템',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_debisUseSyscd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',objType:'data'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_clntNm',codeId:'ed_clntNo',code:'clntNo',name:'clntNm',id:'udc_clntNo',maxlengthCode:'6',maxlengthName:'100',nameId:'ed_clntNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',refDataCollection:'ds_osideUserMgnt','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'포르테사용여부',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_porteUseYn',ref:'data:ds_osideUserMgnt.porteUseYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',tooltipLocaleRef:'data:ds_osideUserMgnt.porteUseYn',objType:'data',falseValue:'0','ev:onlabelclick':'scwin.chb_porteUseYn_onlabelclick'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'포르테신청ID',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_porteReqId',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.porteReqId',objType:'data','ev:onkeyup':'scwin.ed_porteReqId_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'직급',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{btnId:'btn_jikGubNm',codeId:'ed_shrJikGubCd',id:'udc_shrJikGubCd',maxlengthCode:'6',maxlengthName:'100',nameId:'ed_jikGubNm',code:'shrJikGubCd',name:'jikGubNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_shrJikGubCd_onclickEvent',refDataCollection:'ds_osideUserMgnt',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_shrJikGubCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'직위',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9a-zA-Z',btnId:'btn_jikwiNm',codeId:'ed_shrJikWiCd',id:'udc_shrJikWiCd',maxlengthCode:'6',maxlengthName:'100',nameId:'ed_jikwiNm',code:'shrJikWiCd',name:'jikwiNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_shrJikWiCd_onclickEvent',refDataCollection:'ds_osideUserMgnt','ev:onblurCodeEvent':'scwin.udc_shrJikWiCd_onblurCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_name2',codeId:'ed_reqSabun',id:'udc_reqSabun',maxlengthCode:'6',maxlengthName:'100',nameId:'ed_name2',code:'reqSabun',name:'name2',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'',refDataCollection:'ds_osideUserMgnt','ev:onclickEvent':'scwin.udc_reqSabun_onclickEvent','ev:onblurCodeEvent':'scwin.udc_reqSabun_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_reqDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.reqDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'요청사유',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_reqRsn',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.reqRsn',refSync:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'승인자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_name3',codeId:'ed_admitSabun',id:'udc_admitSabun',maxlengthCode:'6',maxlengthName:'100',nameId:'ed_name3',code:'admitSabun',name:'name3',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'',style:'','ev:onclickEvent':'scwin.udc_admitSabun_onclickEvent',refDataCollection:'ds_osideUserMgnt','ev:onblurCodeEvent':'scwin.udc_admitSabun_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'승인일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_admitDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.admitDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'반려사유',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rejectRsn',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.rejectRsn',refSync:'true',tooltipLocaleRef:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'최종승인자',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_finalAdmitSabun',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.finalAdmitSabun',refSync:'true',tooltipLocaleRef:'true',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_name4',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.name4',refSync:'true',readOnlyFocusEvent:'true',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'최종승인일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_finalAdmitDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.finalAdmitDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'반려일',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_rejectDt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_osideUserMgnt.rejectDt',objType:'data',displayFormat:'yyyy/MM/dd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h4',style:'',id:'',label:'DEBIS/PORTE 등록정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'}}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'tbl2',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'성명',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_userNm',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.userNm',refSync:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'귀속부서',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_acctDeptNm',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.acctDeptNm',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'사용시스템',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sysCd',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.sysCd',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'데비스 퇴사여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_empStsCdNm',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.empStsCdNm',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'포르테ID',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_employeeId',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.employeeId',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포르테부서',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_deptName',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.deptName',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직급/직위',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_gradeName',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.gradeName',objType:'data'}},{T:1,N:'xf:input',A:{class:'',id:'ed_positionName',placeholder:'',style:'',ref:'data:ds_osideUserMgnt.positionName',objType:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포르테 퇴사여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_retireYn',placeholder:'',style:'width:150px;',ref:'data:ds_osideUserMgnt.retireYn',objType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_create',label:'신규',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick',userAuth:'C',objType:'bCreate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_update',label:'수정',style:'',type:'button','ev:onclick':'scwin.btn_update_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',label:'취소',style:'',type:'button','ev:onclick':'scwin.btn_cancel_onclick',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_delete_onclick',userAuth:'D',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save5',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save5_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save1',label:'승인요청',style:'',type:'button','ev:onclick':'scwin.btn_save1_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인요청'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save2',label:'부서장승인',style:'',type:'button','ev:onclick':'scwin.btn_save2_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'부서장승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save3',label:'최종승인',style:'',type:'button','ev:onclick':'scwin.btn_save3_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'최종승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save4',label:'반려',style:'',type:'button','ev:onclick':'scwin.btn_save4_onclick',userAuth:'U',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반려'}]}]}]}]},{T:1,N:'xf:group',A:{class:'list-box row-gap-8',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-blue',escape:'false',id:'',label:'본 매뉴는 SHR 미등록 인원에 대해 ID등록 신청 및 퇴사처리하는 용도로 사용합니다',style:''}},{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-blue',escape:'false',id:'',label:'해당지사, 팀 인원 중 퇴사한 인원이 있을 경우 반드시 퇴사일자를 입력하여 퇴사처리하시기 바랍니다',style:''}}]}]}]}]}]}]})