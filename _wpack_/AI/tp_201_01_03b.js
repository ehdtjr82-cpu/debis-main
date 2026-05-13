/*amd /AI/tp_201_01_03b.xml 85397 210236a84075bc3a061e4c7704066d0cfadbd4fcca4620615e5086e40c0079a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_orderSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_order',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNo',name:'계약거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtClntNm',name:'계약거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'수요가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dmndNm',name:'수요가명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranCd',name:'출발작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkLobranNm',name:'출발작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranCd',name:'도착작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkLobranNm',name:'도착작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDcsnYn',name:'오더확정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCompleteYn',name:'오더완료여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDelYn',name:'오더삭제여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrCommWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'오더품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'grossWt',name:'GROSS중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkRsltsNo',name:'작업실적번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchWrkStep'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commSeq',name:'품명순번',dataType:'number'}},{T:1,N:'w2:key',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsNm',name:'작업장구분명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlCd',name:'대표작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repWrkPlNm',name:'대표작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_odrWrkPathStepDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commSeq',name:'품명순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathNm',name:'작업경로명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매출입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranCd',name:'작업물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNm',name:'작업물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLobranNmOrg',name:'작업물류점소명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNmOrg',name:'출발작업장명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'작업시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'작업종료시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdPortcnt',name:'선명항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptCd',name:'매출귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNm',name:'매출귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalSellLodeptNmOrg',name:'매출귀속부서명원본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlClsCd'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lobranQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptmentCd',name:'부서조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranNm',name:'상위물류점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.tp.dongbusteel.odrmgnt.SaveWorkPathDetailInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_order","key":"IN_DS1"},{"id":"ds_odrCommWrkPath","key":"IN_DS2"},{"id":"ds_odrWrkPathStepDetail","key":"IN_DS3"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveBulkContractOrderContractPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_orderSearch","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"},{"id":"ds_odrCommWrkPath","key":"OUT_DS2"},{"id":"ds_ctrtWrkPath","key":"OUT_DS3"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_searchWorkStep',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveBulkContractOrderWorkStepCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_searchWrkStep","key":"IN_DS1"},{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_odrWrkPathStep","key":"OUT_DS1"},{"id":"ds_ctrtWrkPathStep","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_searchWorkStep_submitdone','ev:submiterror':'scwin.sbm_searchWorkStep_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveLobran',action:'/ds.tp.dongbusteel.odrmgnt.RetrieveLogisticsBranchDepartmentCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_lobranQueryCondition","key":"IN_DS1"},{"id":"ds_lobran","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_lobran","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieveLobran_submitdone','ev:submiterror':'scwin.sbm_retrieveLobran_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=LO121&cd=&cdNm=',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_wrkPlClsCd","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_wrkPlClsCd","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_wrkPlClsCd_submitdone','ev:submiterror':'scwin.sbm_wrkPlClsCd_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_LkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_LkStepNo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_LkStepNo","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_LkStepNo_submitdone','ev:submiterror':'scwin.sbm_LkStepNo_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.bizDivCntrYn = 0;
scwin.bizDivBulkYn = 1;
scwin.hid_odrKndCd = "";
scwin.hid_ctrtClntNo = "";
scwin.hid_ctrtNo = "";
scwin.hid_realMchtclntNo = "";
scwin.hid_chkUseFilter = "";
scwin.hid_chkReterieve = "";
scwin.YN_YES = 1;
scwin.YN_NO = 0;
scwin.TRANS_DEPARTMENT = "T";
scwin.v_row = 0;
scwin.v_colid = "";
scwin.loginLobranCd = "";
scwin.onpageload = function () {
  scwin.loginLobranCd = $c.ses.getLobranCd();
  scwin.f_defaultValue();
};
scwin.f_clearTabOrderInfo = function () {
  // TODO: parent.hid_odrNo 접근 - 부모 프레임 연동 필요
};
scwin.f_setTabOrderInfo = function (odrNo) {
  // TODO: parent.hid_odrNo 접근 - 부모 프레임 연동 필요
};
scwin.f_setDisplayOdrKndCd = function (odrKndCd) {
  switch (odrKndCd) {
    case "B1":
    case "B2":
    case "B3":
    case "B4":
      gr_odrWrkPathStpDetail.setColumnVisible("vsslCdPortcnt", false);
      break;
    default:
      gr_odrWrkPathStpDetail.setColumnVisible("vsslCdPortcnt", false);
      break;
  }
};
scwin.f_defaultValue = async function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableAllBtn($p);
  ds_orderSearch.set("odrNo", "");

  // TODO: lay_ctrtClntNm, lay_ctrtNo, lay_realMchtclntNm, lay_odrKndNm innerHTML 설정 - WebSquare textbox로 대체 필요

  scwin.hid_ctrtClntNo = "";
  scwin.hid_ctrtNo = "";
  scwin.hid_realMchtclntNo = "";
  ds_lobranQueryCondition.set("lobranCd", scwin.loginLobranCd);
  ds_lobranQueryCondition.set("lobranClsCd", "T");
  ds_lobranQueryCondition.set("deptmentCd", scwin.TRANS_DEPARTMENT);
  ds_lobranQueryCondition.set("useYn", scwin.YN_YES);
  await $c.sbm.execute($p, sbm_retrieveLobran);
  gr_odrCommWrkPath.setReadOnly("grid", false);
  scwin.hid_chkUseFilter = "true";
  scwin.f_clearTabOrderInfo();
  scwin.f_clearTabOrderInfo();
  ed_odrNo.setFocus();
};
scwin.f_Retrieve = async function () {
  let chk = await $c.gus.cfValidate($p, [ed_odrNo]);
  if (chk) {
    let odrNo = ed_odrNo.getValue().replace(/\s*$/, '');
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableAllBtn($p);
    $c.gus.cfEnableBtnOnly($p, [btnSave]);
    ds_order.removeAll();
    ds_odrCommWrkPath.removeAll();
    ds_ctrtWrkPath.removeAll();
    ds_odrWrkPathStep.removeAll();
    ds_ctrtWrkPathStep.removeAll();
    ds_odrWrkPathStepDetail.removeAll();
    ds_orderSearch.set("odrNo", odrNo);
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, ed_odrNo);
  ed_odrNo.setFocus();
};
scwin.f_RetrieveWorkStep = async function () {
  if (ds_searchWrkStep.get("ctrtWrkPathSeq") == 0) {
    return;
  }
  await $c.sbm.execute($p, sbm_searchWorkStep);
};
scwin.f_InsertRow = async function () {
  let curRow = ds_odrWrkPathStepDetail.getRowPosition();
  if (ds_odrWrkPathStepDetail.getCellData(curRow, "odrWrkStpSeq") % 10 < 9) {
    ds_odrWrkPathStepDetail.insertRow(curRow + 1);
    scwin.f_CopyDataRow(ds_odrWrkPathStepDetail, curRow, curRow + 1);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_055, ["작업단계"]);
    return;
  }
};
scwin.f_AddRow = function () {
  let lastRow = ds_odrWrkPathStepDetail.getRowCount() - 1;
  ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
  scwin.f_CopyDataRow(ds_odrWrkPathStepDetail, lastRow, ds_odrWrkPathStepDetail.getRowCount() - 1);
};
scwin.f_CopyDataRow = function (dataObject, sourceRow, targetRow) {
  let v_odrWrkStpSeq = dataObject.getCellData(sourceRow, "odrWrkStpSeq");
  let v_tempSeq = parseInt(parseInt(v_odrWrkStpSeq) / 10) * 10;
  let colCount = dataObject.getColumnCount();
  for (let i = 0; i < colCount; i++) {
    let colId = dataObject.getColumnID(i);
    if (colId == "odrWrkStpSeq") {
      dataObject.setCellData(targetRow, colId, parseInt(dataObject.getCellData(sourceRow, colId)) + 1);
    } else {
      dataObject.setCellData(targetRow, colId, dataObject.getCellData(sourceRow, colId));
    }
  }
  for (let j = 0; j < dataObject.getRowCount(); j++) {
    let v_compSeq = parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) - v_tempSeq;
    if (parseInt(dataObject.getCellData(j, "odrWrkStpSeq")) > v_tempSeq && v_compSeq > 0 && v_compSeq < 10) {
      if (j > 0) {
        dataObject.setCellData(j, "odrWrkStpSeq", parseInt(dataObject.getCellData(j - 1, "odrWrkStpSeq")) + 1);
      }
    }
  }
};
scwin.f_Update = function () {
  $c.gus.cfDisableBtnOnly($p, [btnUpdate]);
  $c.gus.cfEnableBtnOnly($p, [btnSave]);
  gr_odrCommWrkPath.setReadOnly("grid", false);
  gr_odrWrkPathStpDetail.setReadOnly("grid", false);
  if (ds_odrWrkPathStep.getRowCount() > 0) {
    gr_odrWrkPathStpDetail.setColumnReadOnly("wrkPlClsCd", true);
    gr_odrWrkPathStpDetail.setColumnReadOnly("wrkStpCd", true);
    gr_odrWrkPathStpDetail.setColumnReadOnly("selpchItemNm", true);
    gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", true);
  }
  gr_odrWrkPathStpDetail.setFocusedCell(ds_odrWrkPathStepDetail.getRowPosition(), "wrkLobranNm");
  scwin.v_row = ds_odrWrkPathStepDetail.getRowPosition();
  scwin.v_colid = "wrkLobranNm";
  let odrCommWrkPathRow = ds_odrCommWrkPath.getRowPosition();
  if (odrCommWrkPathRow >= 0 && btnUpdate.getDisabled()) {
    if (scwin.f_chkResultsConfirmationCommodity(odrCommWrkPathRow)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
    }
  }
};
scwin.f_Save = async function () {
  if (parseInt(ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq")) <= 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
    gr_odrCommWrkPath.setFocusedCell(0, "ctrtWrkPathSeq");
    return;
  }
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if (ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim() == "" && i > 0) {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkLobranCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkLobranNm")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(i - 1, "wrkLobranNm"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "dptWrkPlCd"))) ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "dptWrkPlCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "arvWrkPlCd")) && i + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(i, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(i + 1, "dptWrkPlNm"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptCd")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "internalSellLodeptNm")) && ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") != "0000" && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(i - 1, "internalSellLodeptNm"));
    }
  }
  let chkGrid = await $c.gus.cfValidate($p, [gr_odrWrkPathStpDetail]);
  if (!chkGrid) {
    return;
  }
  for (let idx = 0; idx < ds_odrWrkPathStepDetail.getRowCount(); idx++) {
    if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkPlClsCd").trim()) && $c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "dptWrkPlCd").trim())) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업장"]);
      gr_odrWrkPathStpDetail.setFocusedCell(idx, "dptWrkPlNm");
      return false;
    }
    if (ds_odrWrkPathStepDetail.getCellData(idx, "selpchItemCd") != "0000") {
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "wrkLobranCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업점소"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "wrkLobranNm");
        return false;
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(idx, "internalSellLodeptCd").trim())) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["매출귀속부서"]);
        gr_odrWrkPathStpDetail.setFocusedCell(idx, "internalSellLodeptNm");
        return false;
      }
    }
  }
  ds_odrCommWrkPath.setRowPosition(0);
  let chkGrid2 = await $c.gus.cfValidate($p, [gr_odrWrkPathStpDetail]);
  if (!chkGrid2) {
    return;
  }
  $c.gus.cfShowDSWaitMsg($p, gr_odrWrkPathStpDetail);
  scwin.hid_chkUseFilter = "false";
  let v_wrkPathRows = ds_odrCommWrkPath.getRowCount();
  let v_wrkPathStepRows = ds_odrWrkPathStepDetail.getRowCount();
  let v_odrNo = ds_odrCommWrkPath.getCellData(0, "odrNo");
  let v_commSeq = ds_odrCommWrkPath.getCellData(0, "commSeq");
  for (let i = 0; i < v_wrkPathRows; i++) {
    if (i == 0) {
      for (let j = ds_odrWrkPathStepDetail.getRowCount() - 1; j >= 0; j--) {
        if (ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo") && ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq") && ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") != ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") && ds_odrWrkPathStepDetail.getRowStatus(j) != "U") {
          ds_odrWrkPathStepDetail.removeRow(j);
        }
      }
    }
    if (parseInt(ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq")) <= 0 && i > 0) {
      ds_odrCommWrkPath.setCellData(i, "ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(0, "ctrtWrkPathSeq"));
      for (let j = ds_odrWrkPathStepDetail.getRowCount() - 1; j >= 0; j--) {
        if (ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo") && ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq") && ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") == ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") && ds_odrWrkPathStepDetail.getRowStatus(j) != "U") {
          ds_odrWrkPathStepDetail.removeRow(j);
        } else if (ds_odrWrkPathStepDetail.getCellData(j, "odrNo") == ds_odrCommWrkPath.getCellData(i, "odrNo") && ds_odrWrkPathStepDetail.getCellData(j, "commSeq") == ds_odrCommWrkPath.getCellData(i, "commSeq") && ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq") != ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq") && ds_odrWrkPathStepDetail.getRowStatus(j) != "U") {
          ds_odrWrkPathStepDetail.removeRow(j);
        }
      }
      for (let j = 0; j < v_wrkPathStepRows; j++) {
        if (ds_odrWrkPathStepDetail.getRowStatus(j) != "D" && v_odrNo == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && v_commSeq == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")) {
          let newRow = ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
          let colCount = ds_odrWrkPathStepDetail.getColumnCount();
          for (let k = 0; k < colCount; k++) {
            let colId = ds_odrWrkPathStepDetail.getColumnID(k);
            switch (colId) {
              case "commSeq":
                ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrCommWrkPath.getCellData(i, "commSeq"));
                break;
              case "odrWrkPathSeq":
                ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq"));
                break;
              case "ctrtWrkPathSeq":
                ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq"));
                break;
              default:
                ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrWrkPathStepDetail.getCellData(j, colId));
                break;
            }
          }
          scwin.f_setCtrtWrkPathStepToWrkPathStepDetail_1(i);
        }
      }
    }
  }
  for (let j = 0; j < ds_odrWrkPathStepDetail.getRowCount(); j++) {
    if (ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim() == "") {
      if (j > 0 && j < ds_odrWrkPathStepDetail.getRowCount() - 1) {
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranNm"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "arvWrkPlCd").trim()) && j + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
          if (j + 1 < ds_odrWrkPathStepDetail.getRowCount() && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd"));
        }
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
          if (j + 1 < ds_odrWrkPathStepDetail.getRowCount() && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm").trim())) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"));
        }
      } else if (j == 0) {
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000" && j + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000" && j + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkLobranNm"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "arvWrkPlCd").trim()) && j + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000" && j + 1 < ds_odrWrkPathStepDetail.getRowCount()) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000" && j + 1 < ds_odrWrkPathStepDetail.getRowCount() && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "internalSellLodeptNm"));
      } else {
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(j, "wrkLobranNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkLobranNm"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd").trim())) ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptCd").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptCd"));
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "internalSellLodeptNm").trim()) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000" && !$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptNm"))) ds_odrWrkPathStepDetail.setCellData(j, "internalSellLodeptNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "internalSellLodeptNm"));
      }
    }
  }
  scwin.hid_chkUseFilter = "true";
  if (scwin.f_validChk()) {
    scwin.f_chkOdrWrkPathStep();
    let confirmResult = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001, ["작업단계정보"]));
    if (confirmResult) {
      await $c.sbm.execute($p, sbm_save);
    } else {
      $c.gus.cfHideDSWaitMsg($p, gr_odrWrkPathStpDetail);
    }
  } else {
    $c.gus.cfHideDSWaitMsg($p, gr_odrWrkPathStpDetail);
  }
};
scwin.f_validChk = async function () {
  let chk = await $c.gus.cfValidate($p, [gr_odrCommWrkPath, gr_odrWrkPathStpDetail]);
  if (chk) {
    for (let idx = 0; idx < ds_odrCommWrkPath.getRowCount(); idx++) {
      if (parseInt(ds_odrCommWrkPath.getCellData(idx, "ctrtWrkPathSeq")) <= 0) {
        await $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["작업경로"]);
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  let rtnList = null;
  let chkValue = false;
  switch (disGubun) {
    case 1:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, "A,B", null, null, null, null, null, pAllSearch, "작업점소,점소코드,점소명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", "");
      }
      break;
    case 2:
      let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
      let pWrkLobranCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd");
      let pBizDomCd = ds_odrWrkPathStepDetail.getCellData(row, "bizDomCd");
      let pWhere = pWrkPlClsCd;
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", rtnList[1]);
          if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != "0000") {
            if (!$c.gus.cfIsNull($p, rtnList[4])) {
              ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[4]);
              ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[7]);
              ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", rtnList[7]);
            }
            if (!$c.gus.cfIsNull($p, rtnList[8])) {
              ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[8]);
              ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[9]);
              ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", rtnList[9]);
            }
          }
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNmOrg", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", "");
      }
      break;
    case 3:
      let pWrkLobranCd3 = ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd");
      let pWhere3 = "T";
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveLogisDeptInfo', pCode, pName, pClose, null, null, null, null, pWhere3, null, null, null, null, null, pAllSearch, "매출귀속부서,부서코드,부서명");
      if (rtnList != null) {
        if (rtnList[0].trim() != "N/A") {
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[0]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[1]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", rtnList[1]);
        }
        chkValue = true;
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", "");
        ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNmOrg", "");
      }
      break;
    default:
      break;
  }
  return chkValue;
};
scwin.f_setWorkLobranInternalSellLodept = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  let pBizDomCd = ds_odrWrkPathStepDetail.getCellData(row, "bizDomCd").trim();
  let pSelpchItemCd = ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName) || pSelpchItemCd == "0000") {
    return false;
  }
  if (pOrgValueCheck == "T") {
    if (pDptWrkPlsYn == "T") {
      if (pCode == ds_odrWrkPathStepDetail.getOriginalCellData(row, "dptWrkPlCd")) return false;
    } else {
      if (pCode == ds_odrWrkPathStepDetail.getOriginalCellData(row, "arvWrkPlCd")) return false;
    }
  }
  let pWhere = pWrkPlClsCd + "," + pBizDomCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWorkStepEachWorkPlaceInfo', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkPlsYn == "T") {
        if (pDptWrkChangeTF == "F") {
          ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
          if (!$c.gus.cfIsNull($p, rtnList[2])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[2]);
          if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
        }
      } else {
        ds_odrWrkPathStepDetail.setCellData(row, "arvWrkPlCd", rtnList[0]);
      }
      if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() != "0000") {
        if (!$c.gus.cfIsNull($p, rtnList[5])) {
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranCd", rtnList[5]);
          ds_odrWrkPathStepDetail.setCellData(row, "wrkLobranNm", rtnList[6]);
        }
        if (!$c.gus.cfIsNull($p, rtnList[7])) {
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptCd", rtnList[7]);
          ds_odrWrkPathStepDetail.setCellData(row, "internalSellLodeptNm", rtnList[8]);
        }
      }
    }
  } else {
    scwin.f_setWorkLobranNoDataAutoClose(row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF);
  }
};
scwin.f_setWorkLobranNoDataAutoClose = function (row, pCode, pName, pClose, pAllSearch, pDptWrkPlsYn, pOrgValueCheck, pNoDataCloseTF, pDptWrkChangeTF) {
  let pWrkPlClsCd = ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim();
  if ($c.gus.cfIsNull($p, pDptWrkChangeTF)) pDptWrkChangeTF = "F";
  if ($c.gus.cfIsNull($p, pCode) && $c.gus.cfIsNull($p, pName)) {
    return false;
  }
  let pWhere = pWrkPlClsCd;
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfoNoDataAutoClose', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, "작업장,작업장코드,작업장명", pNoDataCloseTF);
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      if (pDptWrkChangeTF == "F") {
        ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", rtnList[0]);
        if (!$c.gus.cfIsNull($p, rtnList[3])) ds_odrWrkPathStepDetail.setCellData(row, "bizDomCd", rtnList[3]);
      }
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim())) ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", rtnList[1]);
    }
  } else {
    ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlCd", "");
    ds_odrWrkPathStepDetail.setCellData(row, "dptWrkPlNm", "");
  }
};
scwin.f_setWorkPathStepDetail = async function () {
  let curRow = ds_odrCommWrkPath.getRowPosition();
  if (ds_odrWrkPathStep.getRowCount() > 0 && ds_odrCommWrkPath.getCellData(curRow, "ctrtWrkPathSeq") == ds_odrCommWrkPath.getOriginalCellData(curRow, "ctrtWrkPathSeq")) {
    scwin.f_setOdrWrkPathStepToWrkPathStepDetail();
  } else if (ds_ctrtWrkPathStep.getRowCount() > 0) {
    scwin.f_setCtrtWrkPathStepToWrkPathStepDetail();
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  ds_odrWrkPathStepDetail.setRowPosition(0);
};
scwin.f_setOdrWrkPathStepToWrkPathStepDetail = function () {
  for (let i = 0; i < ds_odrWrkPathStep.getRowCount(); i++) {
    let newRow = ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
    let colCount = ds_odrWrkPathStep.getColumnCount();
    for (let c = 0; c < colCount; c++) {
      let colId = ds_odrWrkPathStep.getColumnID(c);
      ds_odrWrkPathStepDetail.setCellData(newRow, colId, ds_odrWrkPathStep.getCellData(i, colId));
    }
  }
  for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(i, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "dptWrkPlNmOrg", "");
    }
    if (ds_odrWrkPathStepDetail.getCellData(i, "selpchItemCd") == "0000") {
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "wrkLobranNmOrg", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptCd", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNm", "");
      ds_odrWrkPathStepDetail.setCellData(i, "internalSellLodeptNmOrg", "");
    }
  }
};
scwin.f_setCtrtWrkPathStepToWrkPathStepDetail = function () {
  let curRow = ds_odrCommWrkPath.getRowPosition();
  let v_wrkStDtm = ds_odrCommWrkPath.getCellData(curRow, "wrkStDt") + " " + ds_odrCommWrkPath.getCellData(curRow, "wrkStHh");
  let v_wrkEndDtm = ds_odrCommWrkPath.getCellData(curRow, "wrkEndDt") + " " + ds_odrCommWrkPath.getCellData(curRow, "wrkEndHh");
  // TODO: Date parsing - toDate/format/after 메서드는 프로젝트 공통 유틸 필요

  for (let i = 0; i < ds_ctrtWrkPathStep.getRowCount(); i++) {
    let newRow = ds_odrWrkPathStepDetail.insertRow(ds_odrWrkPathStepDetail.getRowCount());
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrNo", ds_odrCommWrkPath.getCellData(curRow, "odrNo"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "commSeq", ds_odrCommWrkPath.getCellData(curRow, "commSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathSeq", ds_odrCommWrkPath.getCellData(curRow, "odrWrkPathSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(curRow, "ctrtWrkPathSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkPathNm", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkPathNm"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "odrWrkStpSeq", ds_ctrtWrkPathStep.getCellData(i, "ctrtWrkStpSeq"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "wrkPlClsCd", ds_ctrtWrkPathStep.getCellData(i, "wrkPlClsCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "bizDomCd", ds_ctrtWrkPathStep.getCellData(i, "bizDomCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "wrkStpCd", ds_ctrtWrkPathStep.getCellData(i, "wrkStpCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemCd", ds_ctrtWrkPathStep.getCellData(i, "selpchItemCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "selpchItemNm", ds_ctrtWrkPathStep.getCellData(i, "selpchItemNm"));
    if (ds_order.getCellData(ds_order.getRowPosition(), "dptWrkPlCd") != "" && i == 0) {
      ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlCd", ds_odrCommWrkPath.getCellData(curRow, "dptWrkPlCd"));
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkPlClsCd").trim())) {
        scwin.f_setWorkLobranNoDataAutoClose(newRow, ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd"), '', 'T', 'F', 'T', 'F', 'T');
      }
      let pCodeVal = ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd");
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(newRow, "selpchItemCd") != "0000") {
        scwin.f_setWorkLobranInternalSellLodept(newRow, pCodeVal, '', 'T', 'F', 'T', 'F', 'T');
      } else {
        scwin.f_setWorkLobranNoDataAutoClose(newRow, pCodeVal, '', 'T', 'F', 'T', 'F', 'T');
      }
    }
    if (ds_order.getCellData(ds_order.getRowPosition(), "arvWrkPlCd") != "" && i == ds_ctrtWrkPathStep.getRowCount() - 1) {
      ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlCd", ds_odrCommWrkPath.getCellData(curRow, "arvWrkPlCd"));
      if (!$c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkPlClsCd").trim())) {
        scwin.f_setWorkLobranNoDataAutoClose(newRow, ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd"), '', 'T', 'F', 'T', 'F', 'T');
      }
      let pCodeVal2 = ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd");
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(newRow, "selpchItemCd") != "0000") {
        scwin.f_setWorkLobranInternalSellLodept(newRow, pCodeVal2, '', 'T', 'F', 'T', 'F', 'T', 'T');
      } else {
        scwin.f_setWorkLobranNoDataAutoClose(newRow, pCodeVal2, '', 'T', 'F', 'T', 'F', 'T');
      }
    }
    if (i > 0) {
      let prevRow = newRow - 1;
      if (ds_odrWrkPathStepDetail.getCellData(newRow, "wrkPlClsCd").trim() == ds_odrWrkPathStepDetail.getCellData(prevRow, "wrkPlClsCd").trim()) {
        if (ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd") == "") {
          ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(prevRow, "dptWrkPlCd"));
          ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(prevRow, "dptWrkPlNm"));
          ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlNmOrg", ds_odrWrkPathStepDetail.getCellData(prevRow, "dptWrkPlNm"));
        }
        let pCodeVal3 = ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd");
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(newRow, "selpchItemCd") != "0000") {
          scwin.f_setWorkLobranInternalSellLodept(newRow, pCodeVal3, '', 'T', 'F', 'T', 'F', 'T');
        } else {
          scwin.f_setWorkLobranNoDataAutoClose(newRow, pCodeVal3, '', 'T', 'F', 'T', 'F', 'T');
        }
      } else if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkPlClsCd").trim())) {
        ds_odrWrkPathStepDetail.setCellData(newRow, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(prevRow, "dptWrkPlCd"));
        let pCodeVal4 = ds_odrWrkPathStepDetail.getCellData(newRow, "dptWrkPlCd");
        if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(newRow, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(newRow, "selpchItemCd") != "0000") {
          scwin.f_setWorkLobranInternalSellLodept(newRow, pCodeVal4, '', 'T', 'F', 'T', 'F', 'T');
        } else {
          scwin.f_setWorkLobranNoDataAutoClose(newRow, pCodeVal4, '', 'T', 'F', 'T', 'F', 'T');
        }
      }
    }
    ds_odrWrkPathStepDetail.setCellData(newRow, "vsslCd", ds_ctrtWrkPathStep.getCellData(i, "vsslCd"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "vsslNm", ds_ctrtWrkPathStep.getCellData(i, "vsslNm"));
    ds_odrWrkPathStepDetail.setCellData(newRow, "portcnt", ds_ctrtWrkPathStep.getCellData(i, "portcnt"));
  }
  for (let j = 1; j < ds_odrWrkPathStepDetail.getRowCount() - 1; j++) {
    if (ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim() == ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkPlClsCd").trim()) {
      if (ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd") == "") {
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlNm"));
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNmOrg", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlNm"));
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
        let pCodeJ = ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd");
        scwin.f_setWorkLobranInternalSellLodept(j, pCodeJ, '', 'T', 'F', 'T', 'T', 'T');
      }
    } else if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j - 1, "dptWrkPlCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
        let pCodeJ2 = ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd");
        scwin.f_setWorkLobranInternalSellLodept(j, pCodeJ2, '', 'T', 'F', 'T', 'T', 'T');
      }
    }
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim())) {
      ds_odrWrkPathStepDetail.setCellData(j, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
        let pCodeJ3 = ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd");
        scwin.f_setWorkLobranInternalSellLodept(j, pCodeJ3, '', 'T', 'F', 'T', 'T', 'T');
      }
    } else if (ds_odrWrkPathStepDetail.getCellData(j, "wrkPlClsCd").trim() == ds_odrWrkPathStepDetail.getCellData(j + 1, "wrkPlClsCd").trim()) {
      if (ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd") == "") {
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlCd"));
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNm", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlNm"));
        ds_odrWrkPathStepDetail.setCellData(j, "dptWrkPlNmOrg", ds_odrWrkPathStepDetail.getCellData(j + 1, "dptWrkPlNm"));
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j - 1, "wrkPlClsCd").trim())) {
        if (ds_odrWrkPathStepDetail.getCellData(j - 1, "arvWrkPlCd") == "") {
          ds_odrWrkPathStepDetail.setCellData(j - 1, "arvWrkPlCd", ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd"));
        }
      }
      if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(j, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(j, "selpchItemCd") != "0000") {
        let pCodeJ4 = ds_odrWrkPathStepDetail.getCellData(j, "dptWrkPlCd");
        scwin.f_setWorkLobranInternalSellLodept(j, pCodeJ4, '', 'T', 'F', 'T', 'T', 'T');
      }
    }
  }
};
scwin.f_setCtrtWrkPathStepToWrkPathStepDetail_1 = function (seq) {
  let curRowPos = ds_odrWrkPathStepDetail.getRowPosition();
  if (ds_order.getCellData(seq, "dptWrkPlCd") != "" && curRowPos % ds_ctrtWrkPathStep.getRowCount() == 0) {
    ds_odrWrkPathStepDetail.setCellData(curRowPos, "dptWrkPlCd", ds_odrCommWrkPath.getCellData(seq, "dptWrkPlCd"));
    let pCodeVal = ds_odrWrkPathStepDetail.getCellData(curRowPos, "dptWrkPlCd");
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(curRowPos, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(curRowPos, "selpchItemCd") != "0000") {
      scwin.f_setWorkLobranInternalSellLodept(curRowPos, pCodeVal, '', 'T', 'F', 'T', 'F', 'T');
    } else {
      scwin.f_setWorkLobranNoDataAutoClose(curRowPos, pCodeVal, '', 'T', 'F', 'T', 'F', 'T');
    }
  }
  if (ds_order.getCellData(seq, "arvWrkPlCd") != "" && ds_ctrtWrkPathStep.getRowCount() > 0 && (curRowPos + 1) % ds_ctrtWrkPathStep.getRowCount() == 0) {
    ds_odrWrkPathStepDetail.setCellData(curRowPos, "dptWrkPlCd", ds_odrCommWrkPath.getCellData(seq, "arvWrkPlCd"));
    let pCodeVal2 = ds_odrWrkPathStepDetail.getCellData(curRowPos, "dptWrkPlCd");
    if ($c.gus.cfIsNull($p, ds_odrWrkPathStepDetail.getCellData(curRowPos, "wrkLobranCd")) && ds_odrWrkPathStepDetail.getCellData(curRowPos, "selpchItemCd") != "0000") {
      scwin.f_setWorkLobranInternalSellLodept(curRowPos, pCodeVal2, '', 'T', 'F', 'T', 'F', 'T', 'T');
    } else {
      scwin.f_setWorkLobranNoDataAutoClose(curRowPos, pCodeVal2, '', 'T', 'F', 'T', 'F', 'T');
    }
  }
};
scwin.f_chkOdrWrkPathStep = function () {
  scwin.hid_chkUseFilter = "false";
  for (let i = 0; i < ds_odrCommWrkPath.getRowCount(); i++) {
    let v_odrNo = ds_odrCommWrkPath.getCellData(i, "odrNo");
    let v_commSeq = ds_odrCommWrkPath.getCellData(i, "commSeq");
    let v_odrWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq");
    let v_ctrtWrkPathSeq = ds_odrCommWrkPath.getCellData(i, "ctrtWrkPathSeq");
    if (parseInt(ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq")) <= 0) {
      ds_odrCommWrkPath.setRowStatus(i, "C");
    }
    for (let j = ds_odrWrkPathStepDetail.getRowCount() - 1; j >= 0; j--) {
      if (v_odrNo == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && v_commSeq == ds_odrWrkPathStepDetail.getCellData(j, "commSeq")) {
        if (v_odrWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq") || v_ctrtWrkPathSeq != ds_odrWrkPathStepDetail.getCellData(j, "ctrtWrkPathSeq")) {
          ds_odrWrkPathStepDetail.removeRow(j);
        }
        if (!$c.gus.cfIsNull($p, ds_odrCommWrkPath.getCellData(i, "wrkRsltsNo"))) {
          if (ds_odrCommWrkPath.getCellData(i, "odrNo") == ds_odrWrkPathStepDetail.getCellData(j, "odrNo") && ds_odrCommWrkPath.getCellData(i, "commSeq") == ds_odrWrkPathStepDetail.getCellData(j, "commSeq") && ds_odrCommWrkPath.getCellData(i, "odrWrkPathSeq") == ds_odrWrkPathStepDetail.getCellData(j, "odrWrkPathSeq")) {
            ds_odrWrkPathStepDetail.removeRow(j);
          }
        }
        if (parseInt(v_odrWrkPathSeq) == 0 && j < ds_odrWrkPathStepDetail.getRowCount()) {
          ds_odrWrkPathStepDetail.setCellData(j, "odrWrkPathSeq", i + 1);
        }
      }
    }
  }
  scwin.hid_chkUseFilter = "true";
};
scwin.f_orderWrkStepDetail = async function () {
  let row = ds_odrWrkPathStepDetail.getRowPosition();
  if (row >= 0) {
    let v_odrNo = ds_order.getCellData(0, "odrNo");
    let param = {
      odrNo: v_odrNo,
      type: "retrieve"
    };
    // TODO: parent.f_TabMenuUpdate 호출 - 부모 프레임 연동 필요
    $c.win.openMenu($p, "작업일시배분조회및수정", "/ui/ds/sd/odrmgnt/tplreg/sd_402_01_14b.xml", "sd_402_01_14b.xml", param);
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["작업단계"]);
    return;
  }
};
scwin.f_chkResultsConfirmationCommodity = function (row) {
  if (row >= 0) {
    if (!$c.gus.cfIsNull($p, ds_odrCommWrkPath.getCellData(row, "wrkRsltsNo").trim())) {
      return true;
    }
  }
  return false;
};
scwin.sbm_save_submitdone = async function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_odrWrkPathStpDetail);
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfHideDSWaitMsg($p, gr_odrWrkPathStpDetail);
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  scwin.hid_chkUseFilter = "true";
  gr_odrCommWrkPath.setReadOnly("grid", true);
  gr_odrWrkPathStpDetail.setReadOnly("grid", true);
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrDcsnYn") != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  }
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrCompleteYn") != scwin.YN_YES) {
    $c.gus.cfEnableBtnOnly($p, [btnUpdate]);
    $c.gus.cfDisableBtnOnly($p, [btnSave]);
  } else {
    $c.gus.cfDisableBtnOnly($p, [btnUpdate, btnSave]);
  }
  if (ds_odrCommWrkPath.getRowCount() > 0 && ds_order.getCellData(ds_order.getRowPosition(), "odrDcsnYn") != scwin.YN_YES && ds_order.getCellData(ds_order.getRowPosition(), "odrCompleteYn") != scwin.YN_YES) {
    if (parseInt(ds_odrCommWrkPath.getCellData(ds_odrCommWrkPath.getRowPosition(), "odrWrkPathSeq")) == 0) {
      scwin.f_Update();
    }
  }
  scwin.f_setTabOrderInfo(ds_orderSearch.get("odrNo"));
  if (ds_order.getCellData(ds_order.getRowPosition(), "odrDcsnYn") != scwin.YN_YES && ds_odrWrkPathStep.getRowCount() > 0) {
    // TODO: parent.iFrame0.hid_chkReterieve 접근 - 부모 프레임 연동 필요
  }
  scwin.hid_chkReterieve = "retrieveIn";
  if (ds_order.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    scwin.f_FieldClear();
  } else {
    if (ds_order.getCellData(0, "odrKndCd").substr(0, 1) == "D") {
      // TODO: td_realMchtClntNm, lay_realMchtclntNm innerHTML 설정
      scwin.hid_realMchtclntNo = ds_order.getCellData(ds_order.getRowPosition(), "dmndNo");
    } else {
      scwin.hid_realMchtclntNo = ds_order.getCellData(ds_order.getRowPosition(), "realMchtClntNo");
    }
    scwin.f_setDisplayOdrKndCd(ds_order.getCellData(0, "odrKndCd"));

    // TODO: lay_ctrtClntNm, lay_ctrtNo, lay_odrKndNm innerHTML 설정
    scwin.hid_ctrtClntNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtClntNo");
    scwin.hid_ctrtNo = ds_order.getCellData(ds_order.getRowPosition(), "ctrtNo");
    scwin.hid_odrKndCd = ds_order.getCellData(ds_order.getRowPosition(), "odrKndCd");
    if (ds_order.getCellData(ds_order.getRowPosition(), "odrDelYn") == String(scwin.YN_YES)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
    }
  }
  if (ds_odrCommWrkPath.getRowCount() > 0 && ds_order.getRowCount() > 0 && ds_odrCommWrkPath.getRowCount() == 0) {
    // TODO: MSG_CM_WRN_002 alert
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_searchWorkStep_submitdone = function (e) {
  scwin.f_setWorkPathStepDetail();
};
scwin.sbm_searchWorkStep_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieveLobran_submitdone = function (e) {};
scwin.sbm_retrieveLobran_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_wrkPlClsCd_submitdone = function (e) {
  $c.gus.cfChangeCdNmFormat($p, ds_wrkPlClsCd, "cd", "cdNm");
  ds_wrkPlClsCd.insertRow(0);
  ds_wrkPlClsCd.setCellData(0, "cd", " ");
  ds_wrkPlClsCd.setCellData(0, "cdNm", "→");
};
scwin.sbm_wrkPlClsCd_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_LkStepNo_submitdone = function (e) {
  $c.gus.cfChangeCdNmFormat($p, ds_LkStepNo, "wrkStpCd", "wrkStpNm");
};
scwin.sbm_LkStepNo_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_odrCommWrkPath_oncelldatachange = function (info) {
  let row = info.row;
  let colId = info.colId;
  if (colId == "ctrtWrkPathSeq") {
    if (parseInt(ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq")) > 0) {
      let hasSteps = false;
      for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
        if (ds_odrWrkPathStepDetail.getCellData(i, "odrNo") == ds_odrCommWrkPath.getCellData(row, "odrNo") && ds_odrWrkPathStepDetail.getCellData(i, "commSeq") == ds_odrCommWrkPath.getCellData(row, "commSeq")) {
          hasSteps = true;
          break;
        }
      }
      if (!hasSteps) {
        ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
        ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
        ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
        ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
        ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
        scwin.f_RetrieveWorkStep();
      }
    }
  }
};
scwin.ds_odrCommWrkPath_onrowpositionchange = async function (info) {
  let row = info.row;
  if (parseInt(ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq")) > 0) {
    let hasSteps = false;
    for (let i = 0; i < ds_odrWrkPathStepDetail.getRowCount(); i++) {
      if (ds_odrWrkPathStepDetail.getCellData(i, "odrNo") == ds_odrCommWrkPath.getCellData(row, "odrNo") && ds_odrWrkPathStepDetail.getCellData(i, "commSeq") == ds_odrCommWrkPath.getCellData(row, "commSeq")) {
        hasSteps = true;
        break;
      }
    }
    if (!hasSteps) {
      ds_searchWrkStep.set("odrNo", ds_odrCommWrkPath.getCellData(row, "odrNo"));
      ds_searchWrkStep.set("commSeq", ds_odrCommWrkPath.getCellData(row, "commSeq"));
      ds_searchWrkStep.set("odrWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "odrWrkPathSeq"));
      ds_searchWrkStep.set("ctrtNo", ds_odrCommWrkPath.getCellData(row, "ctrtNo"));
      ds_searchWrkStep.set("ctrtWrkPathSeq", ds_odrCommWrkPath.getCellData(row, "ctrtWrkPathSeq"));
      await scwin.f_RetrieveWorkStep();
    }
  }
  if (row >= 0 && btnUpdate.getDisabled()) {
    if (scwin.f_chkResultsConfirmationCommodity(row)) {
      gr_odrCommWrkPath.setReadOnly("grid", true);
      gr_odrWrkPathStpDetail.setReadOnly("grid", true);
    } else {
      gr_odrCommWrkPath.setReadOnly("grid", false);
      gr_odrWrkPathStpDetail.setReadOnly("grid", false);
    }
  }
};
scwin.ds_odrWrkPathStepDetail_onrowpositionchange = function (info) {
  let row = info.row;
  if (row >= 0) {
    if (ds_odrWrkPathStep.getRowCount() == 0) {
      if (ds_odrWrkPathStepDetail.getCellData(row, "wrkPlClsCd").trim() == "") {
        gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", true);
      } else {
        gr_odrWrkPathStpDetail.setColumnReadOnly("dptWrkPlNm", false);
      }
    }
    if (ds_odrWrkPathStepDetail.getCellData(row, "selpchItemCd").trim() == "0000") {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", true);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", true);
    } else {
      gr_odrWrkPathStpDetail.setColumnReadOnly("wrkLobranNm", false);
      gr_odrWrkPathStpDetail.setColumnReadOnly("internalSellLodeptNm", false);
    }
  }
};
scwin.gr_odrWrkPathStpDetail_oneditend = function (rowIndex, columnIndex, columnId, oldValue, newValue) {
  let pName = newValue;
  let pOrgName = oldValue;
  let chkPopup = true;
  switch (columnId) {
    case "wrkLobranNm":
      if (pName != "" && pName != pOrgName) chkPopup = scwin.f_openCommPopUpGrid(1, rowIndex, '', pName, 'T', 'T');else if (pName == "") ds_odrWrkPathStepDetail.setCellData(rowIndex, "wrkLobranCd", "");
      break;
    case "dptWrkPlNm":
      if (pName != "" && pName != pOrgName) chkPopup = scwin.f_openCommPopUpGrid(2, rowIndex, '', pName, 'T', 'T');else if (pName == "") ds_odrWrkPathStepDetail.setCellData(rowIndex, "dptWrkPlCd", "");
      break;
    case "internalSellLodeptNm":
      if (pName != "" && pName != pOrgName) chkPopup = scwin.f_openCommPopUpGrid(3, rowIndex, '', pName, 'T', 'T');else if (pName == "") ds_odrWrkPathStepDetail.setCellData(rowIndex, "internalSellLodeptCd", "");
      break;
    case "vsslCdPortcnt":
      if (pName != "" && pName != pOrgName) chkPopup = scwin.f_openCommPopUpGrid(4, rowIndex, '', pName, 'T', 'T');else if (pName == "") {
        ds_odrWrkPathStepDetail.setCellData(rowIndex, "vsslCd", "");
        ds_odrWrkPathStepDetail.setCellData(rowIndex, "vsslNm", "");
        ds_odrWrkPathStepDetail.setCellData(rowIndex, "portcnt", "");
      }
      break;
    default:
      break;
  }
  return chkPopup;
};
scwin.gr_odrWrkPathStpDetail_ontextimageclick = function (rowIndex, columnIndex, columnId) {
  let row = rowIndex;
  switch (columnId) {
    case "wrkLobranNm":
      scwin.f_openCommPopUpGrid(1, row, ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranCd"), ds_odrWrkPathStepDetail.getCellData(row, "wrkLobranNm"), 'F', 'F');
      break;
    case "dptWrkPlNm":
      scwin.f_openCommPopUpGrid(2, row, ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlCd"), ds_odrWrkPathStepDetail.getCellData(row, "dptWrkPlNm"), 'F', 'F');
      break;
    case "internalSellLodeptNm":
      scwin.f_openCommPopUpGrid(3, row, ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptCd"), ds_odrWrkPathStepDetail.getCellData(row, "internalSellLodeptNm"), 'F', 'F');
      break;
    case "vsslCdPortcnt":
      scwin.f_openCommPopUpGrid(4, row, ds_odrWrkPathStepDetail.getCellData(row, "vsslCd"), ds_odrWrkPathStepDetail.getCellData(row, "vsslNm"), 'F', 'F');
      break;
    default:
      break;
  }
};
scwin.ed_odrNo_onkeydown = function (e) {
  if (e.keyCode == 13) {
    scwin.f_Retrieve();
  }
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btnUpdate_onclick = function (e) {
  scwin.f_Update();
};
scwin.btnSave_onclick = function (e) {
  scwin.f_Save();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'',ref:'data:ds_orderSearch.odrNo',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:200px;'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'데이타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'데이타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'데이타',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'데이타',ref:'',style:'',userData2:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업경로 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_odrCommWrkPath',id:'gr_odrCommWrkPath',style:'',visibleRowNum:'7',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',value:'오더품명순번',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',value:'품명코드',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',value:'중량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',value:'CBM',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',value:'오더작업경로순번',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',value:'계약번호',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'작업경로',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStDt',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'200',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',readOnly:'true',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'grossWt',inputType:'text',width:'70',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cbm',inputType:'text',width:'70',readOnly:'true',dataType:'float',maxLength:'0.3',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'150'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ctrtWrkPathSeq:ctrtWrkPathNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_ctrtWrkPath'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_odrWrkPathStepDetail',id:'gr_odrWrkPathStpDetail',style:'',visibleRowNum:'7',visibleRowNumFix:'true',autoFitMinWidth:'1500',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'odrNo',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'commSeq',inputType:'text',value:'품명순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'odrWrkPathSeq',inputType:'text',value:'작업경로순번',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'계약작업경로순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',value:'작업경로',width:'100',hidden:'true',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',value:'작업장구분',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',value:'작업단계순번',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'bizDomCd',inputType:'text',value:'사업영역코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',value:'매출입항목코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',value:'매출입항목',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'dptWrkPlCd',inputType:'text',value:'출발작업장코드',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNm',value:'작업장',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNmOrg',value:'출발작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranCd',value:'작업물류점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNm',value:'작업점소',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNmOrg',value:'작업물류점소',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',value:'도착작업장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',value:'도착작업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',value:'작업시작일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',value:'작업시작시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',value:'작업종료일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',value:'작업종료시간',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalSellLodeptCd',value:'매출귀속부서코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalSellLodeptNm',value:'매출귀속부서',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalSellLodeptNmOrg',value:'매출귀속부서',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',value:'선박코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',value:'선박명',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',value:'항차',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCdPortcnt',value:'선명항차',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkPathNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlClsCd',inputType:'text',width:'80',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'cd:cdNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_wrkPlClsCd'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrWrkStpSeq',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'text',width:'100',colMerge:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'wrkStpCd:wrkStpNm'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ds_LkStepNo'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomCd',inputType:'text',width:'100',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'dptWrkPlNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlNmOrg',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'wrkLobranNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkLobranNmOrg',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStHh',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndHh',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalSellLodeptCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'internalSellLodeptNm',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'internalSellLodeptNmOrg',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vsslNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'portcnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'vsslCdPortcnt',displayMode:'label',editModeEvent:'onclick',editModeEventIcon:'onclick',viewType:'default'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btnUpdate',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btnSave',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]})