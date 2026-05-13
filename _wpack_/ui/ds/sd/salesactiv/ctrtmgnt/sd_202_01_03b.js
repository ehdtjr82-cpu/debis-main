/*amd /ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03b.xml 97833 04ae61200565f0838b09a2db8e57999a274a9569ce8f125f19cea3c6a152e786 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'bizDomTplYn',name:'사업영역3자물류여부',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'oGDS_view_cond_ref'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stdWrk',saveRemovedData:'true','ev:ondataload':'scwin.ds_stdWrk_ondataload','ev:onrowpositionchange':'scwin.ds_stdWrk_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bizDivCntrYn',name:'사업부문컨테이너여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDivBulkYn',name:'사업부문벌크여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomTransYn',name:'사업영역운송여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomStvYn',name:'사업영역하역여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomStrYn',name:'사업영역보관여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomInatYn',name:'사업영역국제여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'bizDomTplYn',name:'사업영역3자물류여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'String'}},{T:1,N:'w2:column',A:{id:'estTrgtYn',name:'견적대상여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'String'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'Decimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPath',saveRemovedData:'true','ev:ondataload':'scwin.ds_ctrtWrkPath_ondataload','ev:onbeforerowpositionchange':'scwin.ds_ctrtWrkPath_onbeforerowpositionchange','ev:oncelldatachange':'scwin.ds_ctrtWrkPath_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNm',name:'기준작업경로명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNmDisp',name:'기준작업경로명(표시)',dataType:'String'}},{T:1,N:'w2:column',A:{id:'prvsCtrtPathYn',name:'가계약경로여부',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'String'}},{T:1,N:'w2:column',A:{id:'refYn',name:'#N/A',dataType:'Decimal'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'orgWrkStpSeq',name:'#N/A',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'#N/A',dataType:'String'}}]},{T:1,N:'w2:data',A:{use:'false'},E:[{T:1,N:'w2:row'},{T:1,N:'w2:row'}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_refCtrtWrkPath',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathNm',name:'계약작업경로명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_refCntrWorkStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rowStatus',name:'상태',dataType:'String'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWorkStep',saveRemovedData:'true','ev:oncelldatachange':'scwin.ds_ctrtWorkStep_oncelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'Decimal'}},{T:1,N:'w2:column',A:{id:'ctrtWrkStpSeq',name:'계약작업단계순번',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hidSelpchItemNm',name:'매출입항목명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdWrkPathNo',name:'기준작업경로번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'_rowStatus',name:'상태값',dataType:'String',ignoreStatus:'true'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtWrkPathTrfList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'작업경로',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'매출항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'요율존재여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ctrtWrkPathTrfList',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'sysCd',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'queryId',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param1',name:'name3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param2',name:'name4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'param3',name:'name5'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LkStepNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_LkStepNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'최상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_commonPopup'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param5',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param6',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param7',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param8',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param9',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param10',name:'name12',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlClsCd',saveRemovedData:'true','ev:ondataload':'scwin.ds_wrkPlClsCd_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrCd1',name:'필터코드1',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{bind:'dl_LkStepNoFilter',id:'ll_LkStepNo'},E:[{T:1,N:'w2:condition',A:{type:'filter'},E:[{T:4,cdata:'cd==ref(\'data:ds_ctrtWorkStep.wrkPlClsCd\')'}]},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dl_LkStepNoFilter',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'topWrkStpCd',name:'최상위작업단계코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_completeYn',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'tr_retrieve',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveContractWorkPathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond","key":"IN_DS1"}, {"id":"ds_stdWrk","key":"OUT_DS1"}, {"id":"ds_wrkPath","key":"OUT_DS2"}, {"id":"ds_ctrtWrkPath","key":"OUT_DS3"}, {"id":"ds_ctrtWorkStep","key":"OUT_DS4"}]',target:'data:json,[{"id":"ds_stdWrk","key":"OUT_DS1"}, {"id":"ds_wrkPath","key":"OUT_DS2"}, {"id":"ds_ctrtWrkPath","key":"OUT_DS3"}, {"id":"ds_ctrtWorkStep","key":"OUT_DS4"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'tr_save',action:'/ds.sd.salesactiv.ctrtmgnt.SaveContractWorkPathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_ctrtWrkPath","key":"IN_DS1"}, {"action":"modified","id":"ds_ctrtWorkStep","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_save_submitdone','ev:submiterror':'scwin.tr_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'tr_retrieveRef',action:'/ds.sd.salesactiv.ctrtmgnt.RetrieveReferenceWorkPathListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"oGDS_view_cond_ref","key":"IN_DS1"}, {"id":"ds_refCtrtWrkPath","key":"OUT_DS1"}, {"id":"ds_refCntrWorkStep","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_refCtrtWrkPath","key":"OUT_DS1"}, {"id":"ds_refCntrWorkStep","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.tr_retrieveRef_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_commonPopup',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_commonPopup',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_commonPopup_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlClsCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=LO121',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wrkPlClsCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lkStepNo',action:'/ds.lo.comninfomgnt.RetrieveStdWorkPathCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LkStepNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sd_202_01_03b
// 이름     : 계약작업경로
// 경로     : 물류/영업/계약관리/계약관리/계약목록 더블클릭/신규 계약등록 하단[작업경로] 버튼
// 작 성 자 : 최지수
// 작 업 일 : 2026-04-09
//==================================================================================================================

/* 전역 변수 */
scwin.hidCtrtWrkPathSeq = '';
scwin.onpageload = function () {
  scwin.strBasSdId = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_01b.xml";
  scwin.param = $c.data.getParameter($p);
  scwin.ctrtNo = scwin.param.ctrtNo;
  scwin.clntNo = scwin.param.clntNo;
  scwin.clntNm = scwin.param.clntNm;
  scwin.bizDivCntrYn = scwin.param.bizDivCntrYn; // 컨테이너
  scwin.bizDivBulkYn = scwin.param.bizDivBulkYn; // 벌크
  scwin.bizDomTransYn = scwin.param.bizDomTransYn; // 운송
  scwin.bizDomStvYn = scwin.param.bizDomStvYn; // 하역
  scwin.bizDomStrYn = scwin.param.bizDomStrYn; // 보관
  scwin.bizDomInatYn = scwin.param.bizDomInatYn; // 국제
  scwin.bizDomTplYn = scwin.param.bizDomTplYn; // 3자물류
  scwin.impYn = scwin.param.impYn; // 수입
  scwin.expYn = scwin.param.expYn; // 수출
  scwin.domesticYn = scwin.param.domesticYn; // 내수
  scwin.sellClntClsNm = scwin.param.sellClntClsNm;
  scwin.ctrtDistrictCd = scwin.param.ctrtDistrictCd;
  scwin.pos_rowSts = 0;
  scwin.MSG_SD_ERR_001 = "작업경로를 먼저 입력바랍니다.";
  scwin.MSG_SD_ERR_002 = "작업단계를 선택하십시오.";
  scwin.MSG_SD_ERR_003 = "계약작업경로를 삭제를 먼저 취소하십시오.";
  scwin.MSG_SD_ERR_004 = "계약작업경로 명명규칙에 맞지 않습니다.\n ex) 기준작업경로명(거래처명)";
  scwin.MSG_SD_ERR_005 = "계약 작업경로에는 반드시 하나 이상의 작업단계가 존재하여야 합니다.";
  scwin.MSG_SD_CRM_002 = "변경된 사항이 있습니다. 저장하시겠습니까? \n확인을 누르시면 변경된 사항이 저장이되고, \n취소를 누르실 경우 모든 변경된 사항이 처음 조회된 상태가 됩니다.";
  scwin.MSG_SD_INF_001 = "완료된 계약이므로 변경된 데이타를 복구합니다.";
  scwin.PAGE_MOVE_CONFIRM = true;

  // hidCtrtWrkPathSeq 값을 셋하기 위해 추가함.
  scwin.bOnLoad = true;

  // TO-BE 공통 코드 조회
  // 공통코드 조회 + UDC 완료가 끝나면 기존 body onLoad 를 수행 하는 것이 맞다.
  scwin.oAsyncResolver = [new Promise((resolve, reject) => {
    let oOptions = [{
      grpCd: "SD113",
      compID: "lc_ordKnd,gr_stdWrk:odrKndCd"
    } // 오더종류 (그리드)
    ];
    $c.data.setCommonCode($p, oOptions, resolve);
  }), scwin.GetCtrtComplete(scwin.ctrtNo),
  // AS-IS 는 <script language=JavaScript for=ds_ctrtWorkStep event=OnLoadCompleted(rowCnt)> 이벤트에서 호출 함. TO-BE 는 화면 로드시 해야함.
  // 작업장구분 lookup 조회   - 그리드 컬럼에서 사용함. 
  $c.sbm.execute($p, sbm_wrkPlClsCd),
  // 작업단계 lookup 조회     - 그리드 컬럼에서 사용함. 
  $c.sbm.execute($p, sbm_lkStepNo)];
};

// UDC 초기화 완료 후 호출 된다.
scwin.onUdcCompleted = function () {
  Promise.all(scwin.oAsyncResolver).then(() => {
    // 공통코드, UDC, WFrame 완료
    scwin.deferredLoading();
    // TO-BE 추가 작업경로별 작업단계의 "작업단계" 컬럼의 데이터를 가공 한다.
    scwin.SetDataLkStepNoFilter();
    scwin.f_OnLoad();
  });
};

// 작업경로별 작업단계 그리드의 "작업장구분" 에 따른 "작업단계" 항목을 구성하기 위해 Data를 만든다.
// AS-IS 의 <script language=JavaScript for=ds_LkStepNo event=OnFilter(row)> 를 위함
scwin.SetDataLkStepNoFilter = function () {
  let oWrkPlClsCdJson = ds_wrkPlClsCd.getAllJSON();
  let oLkStepNoJson = ds_LkStepNo.getAllJSON();
  let oDataArr = [];
  let oTemp;
  for (let idx1 = 0, iCnt1 = oWrkPlClsCdJson.length; idx1 < iCnt1; idx1++) {
    let oJson = oWrkPlClsCdJson[idx1];
    let sCd = oJson.cd;
    let v_fltrCd1 = oJson.fltrCd1;
    for (let idx2 = 0, iCnt2 = oLkStepNoJson.length; idx2 < iCnt2; idx2++) {
      let oItem = oLkStepNoJson[idx2];
      if (v_fltrCd1 == '02') {
        // 하역 (작업단계코드 : 01)
        if (oItem.topWrkStpCd == '01') {
          oTemp = JSON.parse(JSON.stringify(oItem));
          oTemp.cd = sCd;
          oDataArr.push(oTemp);
        }
      } else if (v_fltrCd1 != "02" && v_fltrCd1 != "") {
        if (oItem.topWrkStpCd == '03') {
          oTemp = JSON.parse(JSON.stringify(oItem));
          oTemp.cd = sCd;
          oDataArr.push(oTemp);
        }
      } else {
        if (oItem.topWrkStpCd == '02') {
          oTemp = JSON.parse(JSON.stringify(oItem));
          oTemp.cd = sCd;
          oDataArr.push(oTemp);
        }
      }
    }
  }
  dl_LkStepNoFilter.setJSON(oDataArr);
};

// 현재 화면에서는 ds_completeYn.NameValue(1,"code") 만 사용한다.
scwin.getCtrtCompleteYnCode = function () {
  return ds_completeYn.getCellData(0, 'code');
};

// HTML 의 Bottom 에 위치한 지연방지 스크립트 처리
scwin.deferredLoading = function () {
  oGDS_view_cond.set("bizDivCntrYn", scwin.bizDivCntrYn);
  oGDS_view_cond.set("bizDivBulkYn", scwin.bizDivBulkYn);
  oGDS_view_cond.set("bizDomTransYn", scwin.bizDomTransYn);
  oGDS_view_cond.set("bizDomStvYn", scwin.bizDomStvYn);
  oGDS_view_cond.set("bizDomStrYn", scwin.bizDomStrYn);
  oGDS_view_cond.set("bizDomInatYn", scwin.bizDomInatYn);
  oGDS_view_cond.set("bizDomTplYn", scwin.bizDomTplYn);
};

// AS-IS IFrame 에서 조회 하는 값
scwin.GetCtrtComplete = async function (sCtrtNo) {
  let sReqUrl = '/cm.zz.RetrieveCommonPopupCMD.do?sysCd=ContractEBC&queryId=retrieveContractYn&param1=' + sCtrtNo;
  try {
    let response = await fetch(sReqUrl);
    let contentType = response.headers.get('content-type');
    if (contentType.includes('application/json')) {
      let oBody = await response.json();
      if (oBody?.resultDataSet[0]?.Code == '0') {
        ds_completeYn.setJSON(oBody.GAUCE);
        return oBody.GAUCE;
      }
    }
  } catch (e) {}
  return [];
};

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------  
scwin.f_OnLoad = function () {
  scwin.f_defaultValue();
  scwin.f_Retrieve();

  // TO-BE 는 조회 완료 후 해야함.
  // 첫번째 그리드의 작업경로 순번 setting
  // hidCtrtWrkPathSeq.value = ds_ctrtWrkPath.NameValue(1,"ctrtWrkPathSeq");

  $c.gus.cfDisableKey($p);
};

/* 화면 초기 데이터 setting */
scwin.f_defaultValue = function () {
  var ctrtNo = scwin.ctrtNo;
  var clntNo = scwin.clntNo;
  txt_CtrtNo.setValue(ctrtNo.substr(0, 9) + '-' + ctrtNo.substr(9, 2));
  txt_ClntNo.setValue(clntNo);
  txt_ClntNm.setValue(scwin.clntNm);
  if (scwin.bizDivCntrYn == "1") {
    chb_bizDivCntrYn.setValue("1");
  }
  if (scwin.bizDivBulkYn == "1") {
    chb_bizDivBulkYn.setValue("1");
  }
  if (scwin.bizDomStvYn == "1") {
    chb_bizDomStvYn.setValue("1");
  }
  if (scwin.bizDomTransYn == "1") {
    chb_bizDomTransYn.setValue("1");
  }
  if (scwin.bizDomStrYn == "1") {
    chb_bizDomStrYn.setValue("1");
  }
  if (scwin.bizDomInatYn == "1") {
    chb_bizDomInatYn.setValue("1");
  }
  if (scwin.bizDomTplYn == "1") {
    chb_bizDomTplYn.setValue("1");
  }
  if (scwin.impYn == "1") {
    chb_impYn.setValue("1");
  }
  if (scwin.expYn == "1") {
    chb_expYn.setValue("1");
  }
  if (scwin.domesticYn == "1") {
    chb_domesticYn.setValue("1");
  }
  txt_sellClntClsNm.setValue(scwin.sellClntClsNm);
  $c.gus.cfDisableObjects($p, [btn_stdDetail, btn_stdCreatePath, btn_refDetail, btn_refCreatePath, pu_path]);
  if (scwin.getCtrtCompleteYnCode() == '02') {
    $c.gus.cfDisableObjects($p, [btn_save, btn_stdCreatePath, btn_refCreatePath, btn_del1, btn_undo1, btn_inst2, btn_add2, btn_del2, btn_undo2]);
  }
};

/* 조회 */
scwin.f_Retrieve = function () {
  var strCtrtNo = txt_CtrtNo.getValue().replace("-", "");

  /*
  gr_stdWrk.DataID = "";
  gr_ctrtWorkStep.DataID = "";
  gr_ctrtWrkPath.DataID = "";
  gr_refCtrtWrkPath.DataID = "";
  */
  ds_stdWrk.removeAll();
  ds_ctrtWrkPath.removeAll();
  ds_refCtrtWrkPath.removeAll();
  ds_ctrtWorkStep.removeAll();
  oGDS_view_cond.set("ctrtNo", strCtrtNo);
  $c.sbm.execute($p, tr_retrieve);
};
scwin.OnFilter = function (sDataCompId) {
  // 기준작업 경로 Filter
  // <script language=JavaScript for=ds_stdWrk event=OnFilter(row)>
  function Filter1(sCellData, oParam, nRowInx) {
    if (lc_ordKnd.getValue() == "") {
      return true;
    }
    if (sCellData == lc_ordKnd.getValue()) {
      return true;
    } else {
      return false;
    }
  }
  // <script language=JavaScript for=ds_ctrtWorkStep event=OnFilter(row)>
  function Filter2(sCellData, oParam, nRowInx) {
    return sCellData == scwin.hidCtrtWrkPathSeq;
  }
  switch (sDataCompId) {
    case 'ds_stdWrk':
      ds_stdWrk.setColumnFilter({
        'type': 'func',
        'colIndex': 'odrKndCd',
        'key': Filter1,
        'condition': 'and',
        'clearFilter': 'keepSort'
      });
      break;
    case 'ds_ctrtWorkStep':
      ds_ctrtWorkStep.setColumnFilter({
        'type': 'func',
        'colIndex': 'ctrtWrkPathSeq',
        'key': Filter2,
        'condition': 'and',
        'clearFilter': 'keepSort'
      });

      // Delay 를 빼면 안된다....
      /*       $p.setTimeout(() => {
                 ds_ctrtWorkStep.setRowPosition(0);
                 gr_ctrtWorkStep.setFocusedCell(0, 1);
                 totalRows4.setValue(ds_ctrtWorkStep.getRowCount());
                   gr_ctrtWrkPath.setFocusedCell(0, 1);
                  // 키보드로 이동시 필터 후에 작업경로 목록에 포커스를 다시 줘야 함.
             //    let oFocused = gr_ctrtWrkPath.getLastFocusedCell();
               //  if (oFocused) {
                //     ds_ctrtWrkPath.setRowPosition(0);
             //   //     gr_ctrtWrkPath.setFocusedCell(oFocused.focusedRowIndex, oFocused.focusedColIndex);
         //        }
             }, {
                 'delay': 100,
                 'key': 'gr_ctrtWorkStep_filter'
             });
      */
      break;
  }
};

// CRUD 처리시 AS-IS 는 소트된 순서대로 날라간다.
scwin.SetDataReSort = function () {
  let oDataArr = ds_ctrtWorkStep.getAllJSON();
  oDataArr.sort((a, b) => a.ctrtWrkStpSeq - b.ctrtWrkStpSeq);
  ds_ctrtWorkStep.setJSON(oDataArr);
};

/* 조회 완료시 */
scwin.tr_retrieve_submitdone = function (e) {
  if (scwin.bOnLoad) {
    scwin.hidCtrtWrkPathSeq = ds_ctrtWrkPath.getCellData(0, "ctrtWrkPathSeq");
    scwin.bOnLoad = false;
  }
  ;
  let rowCnt = ds_ctrtWorkStep.getRowCount();

  // 데이터 정합성을 위해 Seq 를 맞춰야 한다.
  scwin.SetDataReSort();
  scwin.OnFilter('ds_stdWrk');
  scwin.OnFilter('ds_ctrtWorkStep');
  totalRows4.setValue(ds_ctrtWorkStep.getRowCount());
  // 기준작업경로 목록 오더종류 오름차순 정렬
  ds_stdWrk.multisort({
    sortIndex: "odrKndCd",
    sortOrder: "1"
  });
  // ds_ctrtWorkStep.sort('ctrtWrkStpSeq', 0);
  ds_stdWrk.setRowPosition(0);
  gr_stdWrk.setFocusedCell(0, 0);
  gr_ctrtWrkPath.setFocusedCell(0, 1);
  gr_ctrtWorkStep.setFocusedCell(0, 1);
  return;
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 먼저 이전 위치 복원
    if (ds_ctrtWrkPath.getRowCount() > 0) {
      $c.gus.cfGoPrevPosition($p, gr_ctrtWrkPath, scwin.pos_rowSts);
      let curRow = ds_ctrtWrkPath.getRowPosition();
      if (curRow < 0) {
        ds_ctrtWrkPath.setRowPosition(0);
        curRow = 0;
      }
      scwin.hidCtrtWrkPathSeq = ds_ctrtWrkPath.getCellData(curRow, "ctrtWrkPathSeq");
      scwin.ds_ctrtWorkStep_onfilter(curRow);

      // NO(ctrtWrkStpSeq) 숫자 기반 오름차순 정렬
      ds_ctrtWorkStep.multisort({
        sortIndex: "ctrtWrkStpSeq",
        sortOrder: "1"
      });
    } else {
      scwin.hidCtrtWrkPathSeq = "";
      ds_ctrtWorkStep.removeColumnFilterAll();
    }

    // 그리드 조회건수 + total 영역 표시
    totalRows4.setValue(ds_ctrtWorkStep.getRowCount());

    // 기준작업경로 목록 오더종류 오름차순 정렬
    ds_stdWrk.multisort({
      sortIndex: "odrKndCd",
      sortOrder: "1"
    });
    totalRows1.setValue(ds_stdWrk.getRowCount());
    totalRows2.setValue(ds_ctrtWrkPath.getRowCount());
    if (ds_stdWrk.getRowCount() > 0) {
      $c.gus.cfEnableObjects($p, [btn_stdDetail]);
      if (wfm_ctrtComplete && wfm_ctrtComplete.getWindow() && wfm_ctrtComplete.getWindow().ds_completeYn) {
        if (wfm_ctrtComplete.getWindow().ds_completeYn.getCellData(0, "code") != "02") {
          $c.gus.cfEnableObjects($p, [btn_stdCreatePath]);
        }
      } else {
        $c.gus.cfEnableObjects($p, [btn_stdCreatePath]);
      }
    }
    if (ds_ctrtWrkPath.getRowCount() == 0) {
      $c.gus.cfDisableObjects($p, [btn_extraCnd]);
    } else {
      $c.gus.cfEnableObjects($p, [btn_extraCnd]);
    }
    $c.gus.cfGoPrevPosition($p, gr_ctrtWrkPath, scwin.pos_rowSts);

    // 각 그리드 첫 행 선택 + 포커스 + 하이라이트
    if (ds_stdWrk.getRowCount() > 0) {
      gr_stdWrk.setFocusedCell(0, 0, true);
      scwin.f_highlightRow(gr_stdWrk, 0);
    }
    if (ds_ctrtWrkPath.getRowCount() > 0) {
      gr_ctrtWrkPath.setFocusedCell(0, 0, true);
      scwin.f_highlightRow(gr_ctrtWrkPath, 0);
    }
    if (ds_ctrtWorkStep.getRowCount() > 0) {
      gr_ctrtWorkStep.setFocusedCell(0, 0, true);
      scwin.f_highlightRow(gr_ctrtWorkStep, 0);
    }
    // ds_ctrtWorkStep OnLoadCompleted(rowCnt)
    scwin.f_dsWrkStpSet();
  }
};

// 기준작업 경로 loding 완료
// <script language=JavaScript for=ds_stdWrk event=OnLoadCompleted(rowCnt)>
scwin.ds_stdWrk_ondataload = function () {
  let rowCnt = ds_stdWrk.getRowCount();
  totalRows1.setValue(rowCnt);
  if (rowCnt > 0) {
    $c.gus.cfEnableObjects($p, [btn_stdDetail]);
    if (scwin.getCtrtCompleteYnCode() != "02") {
      $c.gus.cfEnableObjects($p, [btn_stdCreatePath]);
    }
  }

  // TO-BE 신규추가
  // 조회된 기준작업경로의 오더종류만 필터 콤보에 세팅
  let oDataComp = $p.getComponentById(lc_ordKnd.getDataListInfo().id);
  if (oDataComp) {
    let oColDataArr = ds_stdWrk.getColData('odrKndCd');
    oDataComp.setColumnFilter({
      'type': 'func',
      'colIndex': 'cd',
      'key': (sCellData, oParamArr, nRowInx) => {
        return oParamArr.includes(sCellData);
      },
      'condition': 'and',
      'param': oColDataArr,
      'clearFilter': 'all'
    });
  }
};

// <!-- 작업경로 그리드 OnRowPosChanged이벤트 -->
// <script language=JavaScript for=ds_stdWrk event=OnRowPosChanged(row)>
scwin.ds_stdWrk_onrowpositionchange = function (info) {
  var strCtrtNo = txt_CtrtNo.getValue().replace("-", "");
  if (info.newRowIndex >= 0) {
    oGDS_view_cond_ref.set("ctrtNo", strCtrtNo);
    oGDS_view_cond_ref.set("stdWrkPathNo", ds_stdWrk.getCellData(info.newRowIndex, "stdWrkPathNo"));
    $c.sbm.execute($p, tr_retrieveRef);
  }
};

// <!-- 작업 경로 loding 완료-->
// <script language=JavaScript for=ds_ctrtWrkPath event=OnLoadCompleted(rowCnt)>
scwin.ds_ctrtWrkPath_ondataload = function () {
  let rowCnt = ds_ctrtWrkPath.getRowCount();
  totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfDisableBtnOnly($p, [pu_rate, pu_disc, pu_img, pu_img1]);
    $c.gus.cfDisableObjects($p, [pu_extraCnd]);
  } else {
    $c.gus.cfEnableBtnOnly($p, [pu_rate, pu_disc, pu_img, pu_img]);
    $c.gus.cfEnableObjects($p, [pu_extraCnd]);
  }

  // 데이타셋을 저장한 후에도, 저장하기 전에 커서가 있던 위치로 이동시켜 준다
  scwin.cfGoPrevPosition(ds_ctrtWrkPath, scwin.pos_rowSts);
};

// <script language=JavaScript for=ds_ctrtWrkPath event=CanRowPosChange(row)>
scwin.ds_ctrtWrkPath_onbeforerowpositionchange = function (info) {
  /*
  if (scwin._delRowInProgress) return true;
  return scwin.f_canRowPosChange();
  */
  // AS-IS 의 CanRowPosChange 함수는 없다.
  // 1. return false 를 하여 이동을 막는다.
  // 2. 이동이 가능 할 때만 API 를 사용하여 이동한다.
  // 3. EDIT 를 위한 정보가 필요하다. GridView 의 이벤트에서 처리를 하기 위해서는 인자가 올바르지 않다.
  let oEv = window.event;
  let sColId;
  if (oEv && oEv.target && oEv.target.closest) {
    let oTdEl = oEv?.target?.closest('td.gridBodyDefault');
    sColId = oTdEl?.getAttribute('data-col_id');
  }
  new Promise((resolve, reject) => {
    scwin.procPositionChange(this, resolve, info, sColId);
  });
  return false;
};
scwin.procPositionChange = async function (oDataComp, resolver, oPosInfo, sColId) {
  /*
  oPosInfo = {
      "oldRowIndex": null,
      "newRowIndex": 1
  }
  */
  if (oPosInfo.oldRowIndex == null) {
    // 이전 선택된 적이 없다. 이동
    scwin.setRowPos(oDataComp, oPosInfo.newRowIndex, oPosInfo.oldRowIndex, sColId);
    resolver(true);
    return;
  }
  if ((await scwin.f_canRowPosChange()) == false) {
    resolver(false); // 딱히 의미는 없다.
    return; // 필수다. resolver 과 상관없이 흐른다.
  }
  scwin.setRowPos(oDataComp, oPosInfo.newRowIndex, oPosInfo.oldRowIndex, sColId);
  resolver(true);
  return;
};
scwin.setRowPos = function (oDataComp, nRowInx, nPreRowInx, sColId) {
  oDataComp.setEventPause('onbeforerowpositionchange', true); // 이벤트를 막고
  oDataComp.setRowPosition(nRowInx);
  oDataComp.setEventPause('onbeforerowpositionchange', false); // 이벤트를 살리고.

  gr_ctrtWrkPath.setFocusedCell(nRowInx, sColId, true);

  // ReadOnly 처리
  if (nPreRowInx != null) {
    gr_ctrtWrkPath.setCellReadOnly(nPreRowInx, 'ctrtWrkPathNm', true);
    gr_ctrtWrkPath.setCellReadOnly(nPreRowInx, 'rmk', true);
  }

  // ReadOnly = false 및 Edit 모드
  if (sColId == 'ctrtWrkPathNm' || sColId == 'rmk') {
    gr_ctrtWrkPath.setCellReadOnly(nRowInx, sColId, false);
  }

  // <script language=JavaScript for=ds_ctrtWrkPath event=OnRowPosChanged(row)>
  scwin.hidCtrtWrkPathSeq = ds_ctrtWrkPath.getCellData(nRowInx, 'ctrtWrkPathSeq');
  scwin.OnFilter('ds_ctrtWorkStep');
  gr_ctrtWorkStep.setFocusedCell(0, 1);
  totalRows4.setValue(ds_ctrtWorkStep.getRowCount());

  // 일단 주석. 그리드가 움직인다.
  // gr_ctrtWrkPath.setGridReadOnly(false);
  // gr_ctrtWorkStep.setGridReadOnly(false);

  $c.gus.cfEnableObjects($p, [btn_del1, btn_undo1, btn_inst2, btn_add2, btn_del2, btn_undo2]);
  if (ds_ctrtWrkPath.getCellData(nRowInx, "prvsCtrtPathYn") == "1") {
    $c.gus.cfDisableObjects($p, [btn_del1, btn_undo1, btn_inst2, btn_add2, btn_del2, btn_undo2]);
    // 일단 주석. 그리드가 움직인다.
    // gr_ctrtWrkPath.setGridReadOnly(true);
    // gr_ctrtWorkStep.setGridReadOnly(true);
  }
};
scwin.gr_ctrtWrkPath_oncolumnindexchange = function (sColInx, sPreColInx) {
  if (sPreColInx != null) {
    let nRowInx = ds_ctrtWrkPath.getRowPosition();
    let sColId = gr_ctrtWrkPath.getColumnID(sColInx);
    var sPreColId = gr_ctrtWrkPath.getColumnID(sPreColInx);
    if (sColId == 'ctrtWrkPathNm' || sColId == 'rmk') {
      gr_ctrtWrkPath.setCellReadOnly(nRowInx, sColId, false);
      gr_ctrtWrkPath.setFocusedCell(nRowInx, sColId, true);
      gr_ctrtWrkPath.setCellReadOnly(nRowInx, sPreColInx, true);
    }
  }
};

// <!-- 기준작업 경로 선택시  -->
// <script language=JavaScript for=ds_ctrtWrkPath event=OnColumnChanged(row,colid)>
/* 작업경로 - 기준작업경로(stdWrkPathNo) 변경 시 작업단계 자동생성 */
scwin.ds_ctrtWrkPath_oncelldatachange = function (info) {
  /*
  {
      "realRowIndex": 0,
      "rowIndex": 0,
      "colID": "stdWrkPathNo",
      "oldValue": "121",
      "newValue": '200'
  }
  */
  let colid = info.colID;
  let row = info.rowIndex;
  if (colid == "stdWrkPathNo") {
    let cntRow = ds_ctrtWorkStep.getRowCount();
    for (let i = 0; i < cntRow; i++) {
      // oncelldatachange 이벤트는 경로를 신규로 생성시 호출이 된다.
      // 따라서 AS-IS undo(1) 을 해서 행을 다 삭제 한다.
      // ds_ctrtWorkStep.undo(1);
      ds_ctrtWorkStep.removeRow(0);
    }
    if (ds_ctrtWrkPath.getCellData(row, "refYn") == 0) {
      for (let i = 0; i < ds_wrkPath.getRowCount(); i++) {
        if (ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "stdWrkPathNo") == ds_wrkPath.getCellData(i, "stdWrkPathNo")) {
          let nInx = ds_ctrtWorkStep.insertRow();
          ds_ctrtWorkStep.setCellData(nInx, "ctrtNo", txt_CtrtNo.getValue().replace("-", ""));
          ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkPathSeq", ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "ctrtWrkPathSeq"));

          // if (ds_ctrtWorkStep.getRowCount() == 0) {
          if (ds_ctrtWorkStep.getRowCount() == 1) {
            ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkStpSeq", 10);
          } else {
            ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkStpSeq", ds_ctrtWorkStep.getCellData(nInx - 1, 'ctrtWrkStpSeq') + 10);
          }
          ds_ctrtWorkStep.setCellData(nInx, "wrkPlClsCd", ds_wrkPath.getCellData(i, "wrkPlClsCd"));
          ds_ctrtWorkStep.setCellData(nInx, "wrkStpCd", ds_wrkPath.getCellData(i, "wrkStpCd"));
          ds_ctrtWorkStep.setCellData(nInx, "selpchItemCd", ds_wrkPath.getCellData(i, "selpchItemCd"));
          ds_ctrtWorkStep.setCellData(nInx, "selpchItemNm", ds_wrkPath.getCellData(i, "selpchItemNm"));
          ds_ctrtWorkStep.setCellData(nInx, "hidSelpchItemNm", ds_wrkPath.getCellData(i, "hidSelpchItemNm"));
        }
      }
    } else {
      for (let i = 0; i < ds_refCntrWorkStep.getRowCount(); i++) {
        if (ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "stdWrkPathNo") == ds_refCntrWorkStep.getCellData(i, "stdWrkPathNo") && ds_refCtrtWrkPath.getCellData(ds_refCtrtWrkPath.getRowPosition(), "ctrtNo") == ds_refCntrWorkStep.getCellData(i, "ctrtNo") && ds_refCtrtWrkPath.getCellData(ds_refCtrtWrkPath.getRowPosition(), "ctrtWrkPathSeq") == ds_refCntrWorkStep.getCellData(i, "ctrtWrkPathSeq")) {
          let nInx = ds_ctrtWorkStep.insertRow();
          ds_ctrtWorkStep.setCellData(nInx, "ctrtNo", txt_CtrtNo.getValue().replace("-", ""));
          ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkPathSeq", ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "ctrtWrkPathSeq"));
          if (ds_ctrtWorkStep.getRowCount() == 0) {
            ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkStpSeq", 10);
          } else {
            ds_ctrtWorkStep.setCellData(nInx, "ctrtWrkStpSeq", ds_ctrtWorkStep.getCellData(nInx - 1, 'ctrtWrkStpSeq') + 10);
          }
          ds_ctrtWorkStep.setCellData(nInx, "wrkPlClsCd", ds_refCntrWorkStep.getCellData(i, "wrkPlClsCd"));
          ds_ctrtWorkStep.setCellData(nInx, "wrkStpCd", ds_refCntrWorkStep.getCellData(i, "wrkStpCd"));
          ds_ctrtWorkStep.setCellData(nInx, "selpchItemCd", ds_refCntrWorkStep.getCellData(i, "selpchItemCd"));
          ds_ctrtWorkStep.setCellData(nInx, "selpchItemNm", ds_refCntrWorkStep.getCellData(i, "selpchItemNm"));
          ds_ctrtWorkStep.setCellData(nInx, "hidSelpchItemNm", ds_refCntrWorkStep.getCellData(i, "hidSelpchItemNm"));
        }
      }
    }
  }
};

// <!-- 작업단계 데이타 변경 -->
// <script language=JavaScript for=ds_ctrtWorkStep event=OnColumnChanged(row,colid)>
scwin.ds_ctrtWorkStep_oncelldatachange = function (info) {
  /*
  {
      "realRowIndex": 0,
      "rowIndex": 0,
      "colID": "stdWrkPathNo",
      "oldValue": "121",
      "newValue": '200'
  }
  */
  let row = info.rowIndex;
  if (ds_ctrtWorkStep.getModifiedIndex().length > 0) {
    for (let i = 0; i < ds_ctrtWorkStep.getRowCount(); i++) {
      if (ds_ctrtWorkStep.getCellData(i, "ctrtWrkPathSeq") == ds_ctrtWorkStep.getCellData(row, "ctrtWrkPathSeq")) {
        ds_ctrtWorkStep.setCellData(i, "_rowStatus", 'I');
      }
    }
    if (ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "ctrtWrkPathSeq") == ds_ctrtWorkStep.getCellData(row, "ctrtWrkPathSeq")) {
      ds_ctrtWrkPath.setCellData(ds_ctrtWrkPath.getRowPosition(), "chk", '1');
    }
  }
};

// <!-- 작업장구분 lookup OnLoadCompleted -->
// <script language=JavaScript for=ds_wrkPlClsCd event=OnLoadCompleted(rowCnt)>
scwin.ds_wrkPlClsCd_ondataload = function () {
  scwin.cfChangeCdNmFormat(ds_wrkPlClsCd, "cd", "cdNm");
  ds_wrkPlClsCd.insertRow(0);
  ds_wrkPlClsCd.setCellData(0, "cd", " ");
  ds_wrkPlClsCd.setCellData(0, "cdNm", "→");
};

// <!-- 작업단계 lookup complete -->
// <script language=JavaScript for=ds_LkStepNo event=OnLoadCompleted(rowCnt)>
scwin.ds_LkStepNo_ondataload = function () {
  scwin.cfChangeCdNmFormat(ds_LkStepNo, "wrkStpCd", "wrkStpNm");
};

// <script language=javascript for=lc_ordKnd event=OnCloseUp()>
scwin.lc_ordKnd_onselected = function () {
  scwin.OnFilter('ds_stdWrk');
  let oJsonArr = ds_stdWrk.getAllFilteredJSON();
  totalRows1.setValue(oJsonArr.length);
};
scwin.btn_stdDetail_onclick = function (e) {
  scwin.f_detailOpen(1);
};
scwin.btn_stdCreatePath_onclick = function (e) {
  scwin.f_createPath(1);
};
scwin.btn_refDetail_onclick = function (e) {
  scwin.f_detailOpen(2);
};
scwin.btn_refCreatePath_onclick = function (e) {
  scwin.f_createPath(2);
};
scwin.pu_extraCnd_onclick = function (e) {
  scwin.f_winOpen(7);
};
scwin.pu_base_onclick = function (e) {
  scwin.f_winOpen(1);
};
scwin.pu_path_onclick = function (e) {
  scwin.f_winOpen(2);
};
scwin.pu_rate_onclick = function (e) {
  scwin.f_winOpen(3);
};
scwin.pu_disc_onclick = function (e) {
  scwin.f_winOpen(4);
};
scwin.pu_img_onclick = function (e) {
  scwin.f_winOpen(6);
};
scwin.pu_img1_onclick = function (e) {
  scwin.f_retrieveCtrtWrkPathTrfList();
};
scwin._swapScreen = function (option) {
  $p.top().scwin.closeFlag = true;
  let curMdiIdx = $p.top().tac_layout.getSelectedTabIndex();
  option.addTabIndex = curMdiIdx;
  $p.top().tac_layout.deleteTab(curMdiIdx);
  $p.setTimeout(function () {
    $p.top().scwin.closeFlag = false;
  }, {
    delay: 200
  });
};

/* 화면이동 */
scwin.f_winOpen = async function (strIndex) {
  var strPath = "";
  var strCondition = {};
  var style = "";
  var vRtnValue = 0;

  // 변경여부
  if (ds_ctrtWorkStep.getModifiedIndex().length > 0 || ds_ctrtWrkPath.getModifiedIndex().length > 0) {
    //완료여부
    if (scwin.getCtrtCompleteYnCode() == "02") {
      //cfAlertMsg(MSG_SD_INF_001);
      ds_ctrtWorkStep.undoAll();
      ds_ctrtWrkPath.undoAll();
    } else {
      let ret = await $c.win.confirm($p, scwin.MSG_SD_CRM_002);
      if (ret == true) {
        scwin.f_save('cfm');
        if (scwin.PAGE_MOVE_CONFIRM == false) {
          return;
        }
      } else {
        let rowCnt = ds_ctrtWorkStep.getRowCount();
        for (var i = rowCnt - 1; i >= 0; i--) {
          ds_ctrtWorkStep.undoRow(i);
        }
        rowCnt = ds_ctrtWrkPath.getRowCount();
        for (var i = rowCnt - 1; i >= 0; i--) {
          ds_ctrtWrkPath.undoRow(i);
        }
      }
    }
  }
  strCondition.ctrtNo = txt_CtrtNo.getValue().replace("-", "");
  strCondition.bizDivCntrYn = chb_bizDivCntrYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDivBulkYn = chb_bizDivBulkYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDomTransYn = chb_bizDomTransYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDomStvYn = chb_bizDomStvYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDomStrYn = chb_bizDomStrYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDomInatYn = chb_bizDomInatYn.getValue() == "1" ? "1" : "0";
  strCondition.bizDomTplYn = chb_bizDomTplYn.getValue() == "1" ? "1" : "0";
  strCondition.impYn = chb_impYn.getValue() == "1" ? "1" : "0";
  strCondition.expYn = chb_expYn.getValue() == "1" ? "1" : "0";
  strCondition.domesticYn = chb_domesticYn.getValue() == "1" ? "1" : "0";
  strCondition.sellClntClsNm = txt_sellClntClsNm.getValue();
  strCondition.clntNo = txt_ClntNo.getValue();
  strCondition.clntNm = txt_ClntNm.getValue();
  strCondition.ctrtDistrictCd = scwin.ctrtDistrictCd;
  switch (strIndex) {
    case 1:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_02b.xml";
      strCondition.ctrtNo = txt_CtrtNo.getValue().replace("-", "");
      $c.win.openMenu($p, "계약기본정보", strPath, "sd_202_01_02b.jsp", strCondition);
      break;
    case 2:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_03b.xml";
      $c.win.openMenu($p, "계약작업경로", strPath, "sd_202_01_03b.jsp", strCondition);
      break;
    case 3:
      const option = {
        openAction: "new",
        menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
      };
      scwin._swapScreen(optionn);
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_04b.xml";
      $c.win.openMenu($p, "기본계약요율", strPath, "sd_202_01_04b.jsp", strCondition, option);
      break;
    case 4:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_11b.xml";
      $c.win.openMenu($p, "할인/할증요율", strPath, "sd_202_01_11b.jsp", strCondition);
      break;
    case 6:
      strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_13b.xml";
      $c.win.openMenu($p, "계약서이미지", strPath, "sd_202_01_13b.jsp", strCondition);
      break;
    case 7:
      let parObject = {};
      parObject.ctrtNo = txt_CtrtNo.getValue().replace("-", "");
      parObject.completeYn = scwin.getCtrtCompleteYnCode();
      let opts = {
        width: "445px",
        height: "670px",
        dialogleft: "100px",
        dialogtop: "50px",
        scrollbars: "yes",
        resizable: "no",
        status: "yes",
        popupTitle: "계약요율 부대조건 관리",
        popupName: "부대조건"
      };
      let url = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_14p.xml";
      $c.win.openPopup($p, url, opts, parObject);
      break;
    default:
      break;
  }
};

/* 작업경로별 요율 List 조회 */
scwin.f_retrieveCtrtWrkPathTrfList = async function (e) {
  var ctrtNo = txt_CtrtNo.getValue().replace("-", "");
  const strParam = {
    sysCd: "ContractEBC",
    queryId: "retrieveCtrtWrkPathTrfList",
    param1: ctrtNo,
    param2: "",
    param3: "",
    param4: "",
    param5: "",
    param6: "",
    param7: "",
    param8: "",
    param9: "",
    param10: ""
  };
  dma_commonPopup.setJSON(strParam);
  await $c.sbm.execute($p, sbm_commonPopup);
};

// 작업경로별 요율 List 조회 완료시 
scwin.sbm_commonPopup_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    ds_ctrtWrkPathTrfList.setJSON(e.responseJSON.GAUCE);
  }
  $c.data.downloadGridViewExcel($p, gr_ctrtWrkPathTrfList, {
    "fileName": "작업단계별 요율목록.xlsx",
    "sheetName": "작업단계별 요율목록",
    "type": "1"
  });
};

/* 상세보기 클릭 */
scwin.f_detailOpen = function (intGubun) {
  var parObject = new Object();
  parObject.stdWrkPathNo = ds_stdWrk.getCellData(ds_stdWrk.getRowPosition(), "stdWrkPathNo");
  const opts = {
    style: "center",
    width: "640px",
    height: "540px",
    left: "100px",
    top: "50px",
    scrollbars: false,
    resizable: false,
    status: true,
    type: "browserPopup",
    popupName: intGubun == 1 ? "기준작업경로상세조회" : "참조작업경로상세조회"
  };
  if (intGubun == 1) {
    strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_17p.xml";
  } else {
    parObject.stdWrkPathNo = ds_refCtrtWrkPath.getCellData(ds_refCtrtWrkPath.getRowPosition(), "stdWrkPathNo");
    parObject.ctrtNo = ds_refCtrtWrkPath.getCellData(ds_refCtrtWrkPath.getRowPosition(), "ctrtNo");
    parObject.ctrtWrkPathSeq = ds_refCtrtWrkPath.getCellData(ds_refCtrtWrkPath.getRowPosition(), "ctrtWrkPathSeq");
    strPath = "/ui/ds/sd/salesactiv/ctrtmgnt/sd_202_01_18p.xml";
  }
  $c.win.openPopup($p, strPath, opts, parObject);
};

/* 경로생성 클릭 */
scwin.f_createPath = async function (intGubun) {
  //경로생성전 작업경로별 작업단계의 validation check
  if ((await scwin.f_canRowPosChange()) == false) {
    return;
  }
  var nTarRow = 0;
  let oFocusedRowArr = [];
  switch (intGubun) {
    case 1:
      // AS-IS 는 전체 행에서 RowMark 를 찾는다.
      //     oFocusedRowArr = gr_stdWrk.getAllFocusedRowIndex();
      const rowposition = ds_stdWrk.getRowPosition();
      nTarRow = rowposition;
      let nRowInx = ds_ctrtWrkPath.insertRow();
      // Position 을 바꿔준다. 작업경로별 작업 단계 필터가 되야 함.
      // 유효성 검증을 위해 onbeforerowpositionchange 는 false 를 무조건 반환한다.
      ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', true); // 이벤트를 막고
      ds_ctrtWrkPath.setRowPosition(nRowInx);
      ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', false); // 이벤트를 살리고.
      scwin.OnFilter('ds_ctrtWorkStep');
      ds_ctrtWrkPath.setCellData(nRowInx, "refYn", 0);
      ds_ctrtWrkPath.setCellData(nRowInx, "ctrtNo", txt_CtrtNo.getValue().replace("-", ""));
      if (nRowInx == 0) {
        ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", ds_ctrtWrkPath.getRowCount());
      } else {
        var k = 1;
        for (i = 0; i < ds_ctrtWrkPath.getRowCount(); i++) {
          let nMax = Number(ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathSeq"));
          if (nMax >= k) {
            k = nMax;
          }
        }
        ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", Number(k) + 1);
      }
      ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNo", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNo"));
      ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNm", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNm") + "()");
      ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathNm", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNm") + "()");
      ds_ctrtWrkPath.setCellData(nRowInx, "rmk", ds_stdWrk.getCellData(nTarRow, "rmk"));
      ds_ctrtWrkPath.setCellData(nRowInx, "odrKndCd", ds_stdWrk.getCellData(nTarRow, "odrKndCd"));
      return;
      for (let i = 0; i < ds_stdWrk.getRowCount(); i++) {
        //if (!oFocusedRowArr.includes(i)) continue;

        if (i === rowposition) {
          nTarRow = i;
          let nRowInx = ds_ctrtWrkPath.insertRow();
          // Position 을 바꿔준다. 작업경로별 작업 단계 필터가 되야 함.
          // 유효성 검증을 위해 onbeforerowpositionchange 는 false 를 무조건 반환한다.
          ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', true); // 이벤트를 막고
          ds_ctrtWrkPath.setRowPosition(nRowInx);
          ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', false); // 이벤트를 살리고.
          scwin.OnFilter('ds_ctrtWorkStep');
          ds_ctrtWrkPath.setCellData(nRowInx, "refYn", 0);
          ds_ctrtWrkPath.setCellData(nRowInx, "ctrtNo", txt_CtrtNo.getValue().replace("-", ""));
          if (nRowInx == 0) {
            ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", ds_ctrtWrkPath.getRowCount());
          } else {
            var k = 1;
            for (i = 0; i < ds_ctrtWrkPath.getRowCount(); i++) {
              let nMax = Number(ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathSeq"));
              if (nMax >= k) {
                k = nMax;
              }
            }
            ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", Number(k) + 1);
          }
          ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNo", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNo"));
          ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNm", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNm") + "()");
          ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathNm", ds_stdWrk.getCellData(nTarRow, "stdWrkPathNm") + "()");
          ds_ctrtWrkPath.setCellData(nRowInx, "rmk", ds_stdWrk.getCellData(nTarRow, "rmk"));
          ds_ctrtWrkPath.setCellData(nRowInx, "odrKndCd", ds_stdWrk.getCellData(nTarRow, "odrKndCd"));
        }
      }
      break;
    case 2:
      // AS-IS 는 전체 행에서 RowMark 를 찾는다.
      oFocusedRowArr = gr_refCtrtWrkPath.getAllFocusedRowIndex();
      for (let i = 0; i < ds_refCtrtWrkPath.getRowCount(); i++) {
        if (!oFocusedRowArr.includes(i)) continue;
        let nRowInx = ds_ctrtWrkPath.insertRow();
        // Position 을 바꿔준다. 작업경로별 작업 단계 필터가 되야 함.
        // 유효성 검증을 위해 onbeforerowpositionchange 는 false 를 무조건 반환한다.
        ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', true); // 이벤트를 막고
        ds_ctrtWrkPath.setRowPosition(nRowInx);
        ds_ctrtWrkPath.setEventPause('onbeforerowpositionchange', false); // 이벤트를 살리고.
        scwin.OnFilter('ds_ctrtWorkStep');
        ds_ctrtWrkPath.setCellData(nRowInx, "refYn", 1);
        ds_ctrtWrkPath.setCellData(nRowInx, "ctrtNo", txt_CtrtNo.getValue().replace("-", ""));
        if (nRowInx == 1) {
          ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", ds_ctrtWrkPath.getRowCount());
        } else {
          ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathSeq", Number(ds_ctrtWrkPath.getCellData(nRowInx - 1, "ctrtWrkPathSeq")) + 1);
        }
        ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNo", ds_refCtrtWrkPath.getCellData(i, "stdWrkPathNo"));
        ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathNm", ds_refCtrtWrkPath.getCellData(i, "ctrtWrkPathNm"));
        var ctrtWrkPathNm = "";
        ctrtWrkPathNm = ds_refCtrtWrkPath.getCellData(i, "ctrtWrkPathNm").substring(0, ds_refCtrtWrkPath.getCellData(i, "ctrtWrkPathNm").indexOf("(", 0));
        ds_ctrtWrkPath.setCellData(nRowInx, "stdWrkPathNm", ctrtWrkPathNm + "()");
        ds_ctrtWrkPath.setCellData(nRowInx, "ctrtWrkPathNm", ctrtWrkPathNm + "()");
        ds_ctrtWrkPath.setCellData(nRowInx, "rmk", ds_refCtrtWrkPath.getCellData(i, "rmk"));
        ds_ctrtWrkPath.setCellData(nRowInx, "odrKndCd", ds_stdWrk.getCellData(i, "odrKndCd"));
      }
      break;
  }

  // 건수 갱신
  let rowCnt = ds_ctrtWorkStep.getRowCount();
  totalRows4.setValue(rowCnt);
};

/* 작업경로별 작업단계의 validation check */
// 사용 주의. 비동기 함수임
scwin.f_canRowPosChange = async function () {
  if ((await $c.gus.cfValidate($p, [gr_ctrtWorkStep], null, true)) == false) {
    return false; // 필수다. resolver 과 상관없이 흐른다.
  }

  // 행의 상태 숫자값
  // 0 : Normal 'R'
  // 1 : Insert 'C'
  // 2 : Delete 'D'
  // 3 : Update 'U'
  // 4 : Logical X
  if (ds_ctrtWrkPath.getModifiedIndex().length > 0 && ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'U') {
    for (let i = 0, iCnt = ds_ctrtWorkStep.getRowCount(); i < iCnt; i++) {
      ds_ctrtWorkStep.setCellData(i, "_rowStatus", "I");
    }
    ds_ctrtWrkPath.setCellData(ds_ctrtWrkPath.getRowPosition(), "chk", "1");
  }
  return true;
};

/* 작업경로 조회 완료시 */
scwin.tr_retrieveRef_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 그리드 조회건수 + total 영역 표시
    totalRows3.setValue(ds_refCtrtWrkPath.getRowCount());
    if (ds_refCtrtWrkPath.getRowCount() > 0) {
      $c.gus.cfEnableObjects($p, [btn_refDetail]);
      if (scwin.getCtrtCompleteYnCode() != '02') {
        $c.gus.cfEnableObjects($p, [btn_refCreatePath]);
      }
    } else {
      $c.gus.cfDisableObjects($p, [btn_refDetail, btn_refCreatePath]);
    }

    // 참조작업경로 첫 행 선택 + 포커스
    if (ds_refCtrtWrkPath.getRowCount() > 0) gr_refCtrtWrkPath.setFocusedCell(0, 0);
  }
};

/* 목록 */
scwin.btn_list_onclick = function (e) {
  $c.win.openMenu($p, "계약관리", scwin.strBasSdId, "sd_202_01_01b.jsp", {
    openAction: "exist",
    menuCode: $c.data.getParameter($p, "menuInfo").refreshPid || ""
  });
};

// 작업경로별 작업단계 그리드 팝업 (돋보기 클릭)
scwin.gr_ctrtWorkStep_ontextimageclick = function (rowIndex, columnIndex) {
  var colid = gr_ctrtWorkStep.getColumnID(columnIndex);
  if (colid == "selpchItemNm") {
    scwin._selpchPopupRow = rowIndex;
    udc_comCode.setSelectId('retrieveCtrtSelpchItemInfo');
    udc_comCode.cfCommonPopUp(scwin.callBackSelpchItemInfo, ds_ctrtWorkStep.getCellData(rowIndex, "selpchItemCd").trim(), ds_ctrtWorkStep.getCellData(rowIndex, "selpchItemNm").trim(), "F", '7', "매출항목코드,매출항목명", '150,170', null, '1,0,1,1', '440', '500', null, null, null, "F", "매출항목,매출항목코드,매출항목명");
  }
};

// 매출요율항목 팝업 콜백
scwin.callBackSelpchItemInfo = function (rtnList) {
  var row = scwin._selpchPopupRow;
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_ctrtWorkStep, row, "selpchItemCd", "selpchItemNm");
};
scwin.gr_ctrtWorkStep_onviewchange = function (info) {
  let columnId = gr_ctrtWorkStep.getColumnID(info.colIndex);

  /*
  // 작업장구분 변경 시 작업단계 lookup 필터
  if (columnId == "wrkPlClsCd") {
      scwin.ds_LkStepNo_onfilter();
      return;
  }
  */

  if (columnId == "selpchItemNm") {
    if ($c.util.isEmpty($p, info.newValue)) {
      ds_ctrtWorkStep.setCellData(info.rowIndex, "selpchItemCd", "");
      return;
    }
    if (info.oldValue != info.newValue) {
      ds_ctrtWorkStep.setCellData(info.rowIndex, "selpchItemCd", "");
      scwin._selpchPopupRow = info.rowIndex;
      udc_comCode.setSelectId('retrieveCtrtSelpchItemInfo');
      udc_comCode.cfCommonPopUp(scwin.callBackSelpchItemInfo, ds_ctrtWorkStep.getCellData(info.rowIndex, "selpchItemCd").trim(), info.newValue.trim(), "T", '7', "매출항목코드,매출항목명", '150,170', null, '1,0,1,1', '440', '500', null, null, null, "F", "매출항목,매출항목코드,매출항목명");
    }
  } else if (columnId == 'wrkPlClsCd') {
    ds_ctrtWorkStep.setCellData(info.rowIndex, 'wrkStpCd', '');
  }
};

/* 행삽입 버튼 클릭시 */
scwin.f_insertRow = function () {
  if (ds_ctrtWrkPath.getRowPosition() < 0) {
    $c.win.alert($p, scwin.MSG_SD_ERR_001);
    return;
  }
  // 행의 상태 숫자값
  // 0 : Normal 'R'
  // 1 : Insert 'C'
  // 2 : Delete 'D'
  // 3 : Update 'U'
  // 4 : Logical X
  if (ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'D') {
    $c.win.alert($p, scwin.MSG_SD_ERR_003);
    return;
  }
  var seq = 1;
  let nInx;
  if (ds_ctrtWorkStep.getRowCount() == 0) {
    nInx = ds_ctrtWorkStep.insertRow();
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtNo', ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), 'ctrtNo'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkPathSeq', ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), 'ctrtWrkPathSeq'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkStpSeq', "10");
  } else {
    let nFocusedInx = ds_ctrtWorkStep.getRowPosition();
    nInx = ds_ctrtWorkStep.insertRow(nFocusedInx + 1);
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtNo', ds_ctrtWorkStep.getCellData(0, 'ctrtNo'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkPathSeq', ds_ctrtWorkStep.getCellData(0, 'ctrtWrkPathSeq'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkStpSeq', Number(ds_ctrtWorkStep.getCellData(nFocusedInx, 'ctrtWrkStpSeq')) + 10);
    ;
  }
  ds_ctrtWorkStep.setRowPosition(nInx);
  gr_ctrtWorkStep.setFocusedCell(nInx, gr_ctrtWorkStep.getFocusedColumnIndex() || 1);
  for (let i = 0; i < ds_ctrtWorkStep.getRowCount(); i++) {
    if (ds_ctrtWorkStep.getRowStatus(i) != 'D') {
      ds_ctrtWorkStep.setCellData(i, "ctrtWrkStpSeq", seq * 10);
      seq++;
    }
  }
};

/* 행추가 버튼 클릭시 */
scwin.f_addRow = function () {
  if (ds_ctrtWrkPath.getRowPosition() < 0) {
    $c.win.alert($p, scwin.MSG_SD_ERR_001);
    return;
  }
  // 행의 상태 숫자값
  // 0 : Normal 'R'
  // 1 : Insert 'C'
  // 2 : Delete 'D'
  // 3 : Update 'U'
  // 4 : Logical X
  if (ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'D') {
    $c.win.alert($p, scwin.MSG_SD_ERR_003); //기준작업경로를 먼저 취소하십시오.
    return;
  }
  let nInx;
  if (ds_ctrtWorkStep.getRowCount() == 0) {
    nInx = ds_ctrtWorkStep.insertRow();
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtNo', ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), 'ctrtNo'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkPathSeq', ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), 'ctrtWrkPathSeq'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkStpSeq', 10);
  } else {
    nInx = ds_ctrtWorkStep.insertRow();
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtNo', ds_ctrtWorkStep.getCellData(0, 'ctrtNo'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkPathSeq', ds_ctrtWorkStep.getCellData(0, 'ctrtWrkPathSeq'));
    ds_ctrtWorkStep.setCellData(nInx, 'ctrtWrkStpSeq', Number(ds_ctrtWorkStep.getCellData(ds_ctrtWorkStep.getRowCount() - 2, 'ctrtWrkStpSeq')) + 10);
    ;
  }
  gr_ctrtWorkStep.setFocusedCell(nInx, gr_ctrtWorkStep.getFocusedColumnIndex() || 1);
};

/* 작업경로 행삭제 래퍼 */
scwin.f_delRowPath = function () {
  scwin.f_delRow(1);
};
// 작업단계 행삭제 래퍼
scwin.f_delRowStep = function () {
  scwin.f_delRow(2);
};

//-------------------------------------------------------------------------
// function name : f_delRow
// function desc : 계약작업경로 행삭제 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_delRow = function (intGubun) {
  var seq = 1;
  var intRowcnt;
  var intCurRowPosition = ds_ctrtWrkPath.getRowPosition();
  var j;
  // 행의 상태 숫자값
  // 0 : Normal 'R'
  // 1 : Insert 'C'
  // 2 : Delete 'D'
  // 3 : Update 'U'
  // 4 : Logical X
  var btn_del = $p.getComponentById('btn_del' + intGubun);
  var btn_undo = $p.getComponentById('btn_undo' + intGubun);
  $c.gus.cfDisableObjects($p, [btn_del, btn_undo]);
  if (intGubun == 1) {
    // 작업경로 목록 ds_ctrtWrkPath

    if (ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'C') {
      // 삽입
      scwin.f_Undo(intGubun);
      return;
    }
    ds_ctrtWrkPath.deleteRow(ds_ctrtWrkPath.getRowPosition());
    var ctrtWrkPathSeq = ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "ctrtWrkPathSeq");
    intRowcnt = ds_ctrtWorkStep.getRowCount() - 1;
    for (var i = intRowcnt; i >= 0; i--) {
      if (ctrtWrkPathSeq == ds_ctrtWorkStep.getCellData(i, "ctrtWrkPathSeq")) {
        if (ds_ctrtWorkStep.getRowStatus(i) == 'R' || ds_ctrtWorkStep.getRowStatusValue(i) == 'U') {
          ds_ctrtWorkStep.deleteRow(i);
        } else {
          // ds_ctrtWorkStep.Undo(ds_ctrtWorkStep.CountRow);

          if (ds_ctrtWorkStep.getRowStatus(i) == 'D') {
            // 삭제 행은 그냥 삭제다.
          } else if (ds_ctrtWorkStep.getRowStatus(i) == 'C') {
            ds_ctrtWorkStep.removeRow(i);
          }
        }
      }
    }
    ds_ctrtWrkPath.setRowPosition(intCurRowPosition - 1);
    gr_ctrtWrkPath.setFocusedCell(intCurRowPosition - 1, "ctrtWrkPathNm");
    // ds_ctrtWrkPath.setRowPosition(intCurRowPosition);
  } else {
    var nInx = ds_ctrtWorkStep.getRowPosition();
    if (ds_ctrtWorkStep.getRowStatus(nInx) == 'C') {
      ds_ctrtWorkStep.removeRow(nInx);
      nInx = nInx - 1;
    } else {
      ds_ctrtWorkStep.deleteRow(nInx);
    }
    ds_ctrtWorkStep.setRowPosition(nInx);
    gr_ctrtWorkStep.setFocusedCell(nInx, gr_ctrtWorkStep.getFocusedColumnIndex() || 1);
    for (let i = 0; i < ds_ctrtWorkStep.getRowCount(); i++) {
      if (ds_ctrtWorkStep.getRowStatus(i) != 'D') {
        ds_ctrtWorkStep.setCellData(i, "ctrtWrkStpSeq", seq * 10);
        seq++;
      }
    }
  }
  $c.gus.cfEnableObjects($p, [btn_del, btn_undo]);
};

/* 저장 버튼 클릭 */
scwin.btn_save_onclick = function (e) {
  scwin.f_save("");
};

/* 저장 */
scwin.f_save = async function (moveGb) {
  scwin.pos_rowSts = ds_ctrtWrkPath.getRowPosition();
  var chkCnt = 0;

  // 변경 여부 체크 전체 dataList 대상)
  // ds_ctrtWorkStep 는 filter 가 되어있다.
  let bCtrtWorkStepUpdated = false;
  let oCtrtWorkStepJson = ds_ctrtWorkStep.getAllJSON();
  for (let idx = 0, iCnt = oCtrtWorkStepJson.length; idx < iCnt; idx++) {
    let oItem = oCtrtWorkStepJson[idx];
    if (oItem._rowStatus != 'R') {
      bCtrtWorkStepUpdated = true;
      break;
    }
  }
  if (ds_ctrtWrkPath.getModifiedIndex().length > 0 && !bCtrtWorkStepUpdated) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("계약작업경로"));
    scwin.PAGE_MOVE_CONFIRM = false;
    return;
  }

  // 계약작업경로 명명규칙 체크
  for (var i = 0; i < ds_ctrtWrkPath.getRowCount(); i++) {
    var arrCtrtWrkPathNm = ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathNm").split("(");
    if (ds_ctrtWrkPath.getCellData(i, "stdWrkPathNm") != arrCtrtWrkPathNm[0] + "()") {
      await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_004);
      ds_ctrtWrkPath.setRowPosition(i);
      gr_ctrtWrkPath.setFocusedCell(i, "ctrtWrkPathNm");
      return;
    } else {
      var re1 = /\(/i;
      var rtnValue1 = ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathNm").search(re1);
      var re2 = /\)/i;
      var rtnValue2 = ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathNm").search(re2);
      if (rtnValue1 == -1 || rtnValue2 == -1 || rtnValue2 + 1 != ds_ctrtWrkPath.getCellData(i, "ctrtWrkPathNm").length) {
        await $c.gus.cfAlertMsg($p, scwin.MSG_SD_ERR_004);
        ds_ctrtWrkPath.setRowPosition(i);
        gr_ctrtWrkPath.setFocusedCell(i, "ctrtWrkPathNm");
        return;
      }
    }
  }

  // 필터 유지 상태에서 현재 작업경로의 작업단계만 검증
  if (await $c.gus.cfValidate($p, [gr_ctrtWrkPath, gr_ctrtWorkStep], null, true)) {
    if (moveGb == "") {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        // Filter 를 풀고 실행 해야 한다.
        ds_ctrtWorkStep.removeColumnFilterAll();
        $c.sbm.execute($p, tr_save);
        // 다시 Filter
        scwin.OnFilter('ds_ctrtWorkStep');
        // submitdone 에서 실행
        // f_OnLoad();
      } else {
        scwin.PAGE_MOVE_CONFIRM = false;
      }
    } else {
      // Filter 를 풀고 실행 해야 한다.
      ds_ctrtWorkStep.removeColumnFilterAll();
      $c.sbm.execute($p, tr_save);
      // 다시 Filter
      scwin.OnFilter('ds_ctrtWorkStep');

      // submitdone 에서 실행
      // f_OnLoad();
    }
    ;
  } else {
    scwin.PAGE_MOVE_CONFIRM = false;
  }
};

/* 저장 완료시 */
scwin.tr_save_submitdone = function (e) {
  /*
  if (e.responseJSON.resultDataSet[0].Code < 0) {
      // 저장 실패 시 필터 복원
      scwin.ds_ctrtWorkStep_onfilter(ds_ctrtWrkPath.getRowPosition());
      return;
  }
  */

  $c.gus.cfAlertMsg($p, MSG_CM_INF_001).then(() => {
    scwin.f_OnLoad();
  });
};
scwin.tr_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
  // 저장 실패 시 필터 복원
  // scwin.ds_ctrtWorkStep_onfilter(ds_ctrtWrkPath.getRowPosition());
};

//-------------------------------------------------------------------------
// function name : f_Undo
// function desc : 메인 그리드를 취소했을 경우 sub그리드까지 취소
//-------------------------------------------------------------------------
/* 메인 그리드를 취소했을 경우 sub그리드까지 취소 */
scwin.f_Undo = function (intGubun) {
  debugger;
  var ctrtWrkPathSeq = ds_ctrtWrkPath.getCellData(ds_ctrtWrkPath.getRowPosition(), "ctrtWrkPathSeq");
  var seq = 1;
  var intRowcnt = ds_ctrtWorkStep.getRowCount();
  var intCurRowPosition = ds_ctrtWrkPath.getRowPosition();
  var nextRowPosition = ds_ctrtWrkPath.getRowPosition();
  var btn_del = $p.getComponentById('btn_del' + intGubun);
  var btn_undo = $p.getComponentById('btn_undo' + intGubun);
  let ctrtWorRowPosition = ds_ctrtWorkStep.getRowPosition();
  $c.gus.cfDisableObjects($p, [btn_del, btn_undo]);
  // 행의 상태 숫자값
  // 0 : Normal 'R'
  // 1 : Insert 'C'
  // 2 : Delete 'D'
  // 3 : Update 'U'
  // 4 : Logical X
  if (intGubun == 1) {
    if (ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'C' || ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'D') {
      // 수정, 삭제

      for (var i = intRowcnt - 1; i >= 0; i--) {
        //취소하고자하는 작업경로와 동일한 작업경로 순번을 갖고 있는 작업경로별 작업단계를 취소한다.
        if (ctrtWrkPathSeq == ds_ctrtWorkStep.getCellData(i, "ctrtWrkPathSeq")) {
          if (ds_ctrtWorkStep.getRowStatus(i) === "C") {
            ds_ctrtWorkStep.removeRow(i);
          } else {
            ds_ctrtWorkStep.undoRow(i);
          }
        }
      }
    }
    if (ds_ctrtWrkPath.getRowStatus(ds_ctrtWrkPath.getRowPosition()) == 'C') {
      ds_ctrtWrkPath.removeRow(nextRowPosition);
      nextRowPosition = nextRowPosition - 1;
    } else {
      ds_ctrtWrkPath.undoRow(nextRowPosition);
    }
    setTimeout(() => {
      gr_ctrtWrkPath.setFocusedCell(nextRowPosition, gr_ctrtWrkPath.getFocusedColumnIndex() || 1);
    }, 100);
  } else {
    if (ds_ctrtWrkPath.getRowStatus(nextRowPosition) == 'D') {
      // 삭제
      $c.win.alert($p, scwin.MSG_SD_ERR_003); //기준작업경로를 먼저 취소하십시오.
      return;
    }
    if (ds_ctrtWorkStep.getRowStatus(ctrtWorRowPosition) == 'C') {
      ds_ctrtWorkStep.removeRow(ctrtWorRowPosition);
      ctrtWorRowPosition = ctrtWorRowPosition - 1;
    } else {
      ds_ctrtWorkStep.undoRow(ctrtWorRowPosition);
    }
    setTimeout(() => {
      gr_ctrtWorkStep.setFocusedCell(ctrtWorRowPosition, gr_ctrtWorkStep.getFocusedColumnIndex() || 1);
    }, 100);

    // 재채번 (삭제행 제외)
    for (var i = 0; i < ds_ctrtWorkStep.getRowCount(); i++) {
      if (ds_ctrtWorkStep.getRowStatus(i) != 'D') {
        ds_ctrtWorkStep.setCellData(i, "ctrtWrkStpSeq", seq * 10);
        seq++;
      }
    }
  }
  //   ds_ctrtWrkPath.setRowPosition(nextRowPosition);
  $c.gus.cfEnableObjects($p, [btn_del, btn_undo]);
};
scwin.btn_undo1_onclick = function (e) {
  scwin.f_Undo(1);
};
scwin.btn_undo2_onclick = function (e) {
  scwin.f_Undo(2);
};

// 공통함수를 사용 못함.
scwin.cfGoPrevPosition = function (oDataComp, lastPos) {
  // ds.ClearAllMark();

  // 데이타셋의 CountRow가 1 이상일 경우만 처리
  if (oDataComp.getRowCount() >= 1) {
    // 저장 전 위치가 1보다 작은 경우, 첫번째  Row로 이동
    if (lastPos < 0) {
      oDataComp.setRowPosition(0);
    } else {
      if (lastPos < oDataComp.getRowCount()) oDataComp.setRowPosition(lastPos);else oDataComp.setRowPosition(oDataComp.getRowCount() - 1);
    }

    // ds.RowMark(ds.RowPosition) = 1;
  }
};
scwin.cfChangeCdNmFormat = function (dataSet, cdCol, nmCol) {
  var DataObj = $c.gus.object($p, dataSet);
  if (!$c.gus.cfIsNull($p, DataObj)) {
    var rowCount = DataObj.getRowCount();
    for (var i = 0; i < rowCount; i++) {
      var cdVal = DataObj.getCellData(i, cdCol);
      var nmVal = DataObj.getCellData(i, nmCol);

      // if (!$c.gus.cfIsNull(cdVal) && !$c.gus.cfIsNull(nmVal)) {
      if (!$c.gus.cfIsNull($p, cdVal)) {
        DataObj.setCellData(i, nmCol, "[" + cdVal + "]" + nmVal);
      }
    }
  } else {
    return false;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload',class:''},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약번호',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_CtrtNo',placeholder:'',class:'',objType:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 85px;',id:'txt_ClntNo',placeholder:'',class:'',objType:'key'}},{T:1,N:'xf:input',A:{style:'width: 200px;',id:'txt_ClntNm',placeholder:'',class:'',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'거래처구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width:150px;',id:'txt_sellClntClsNm',placeholder:'',class:'',objType:'key'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약영역',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{ref:'data:oGDS_view_cond.bizDomStvYn',appearance:'full',disabled:'',style:'',id:'chb_bizDomStvYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'하역'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_bizDomTransYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'운송'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:oGDS_view_cond.bizDomStrYn',appearance:'full',disabled:'',style:'',id:'chb_bizDomStrYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'보관'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:oGDS_view_cond.bizDomInatYn',appearance:'full',disabled:'',style:'',id:'chb_bizDomInatYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'국제'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'data:oGDS_view_cond.bizDomTplYn',appearance:'full',disabled:'',style:'',id:'chb_bizDomTplYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3자물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'계약부문',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_bizDivCntrYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_bizDivBulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'수출입구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_impYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_expYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',disabled:'',style:'',id:'chb_domesticYn',renderType:'checkboxgroup',rows:'',selectedindex:'1',class:'chk-grp',cols:'',objType:'key',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'grd_section1',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'기준작업경로 목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width: 150px;',id:'lc_ordKnd',class:'',objType:'data',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'','ev:onselected':'scwin.lc_ordKnd_onselected',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grp_stdWrk',style:'',btnUser:'Y',btnPlusYn:'Y',gridID:'gr_stdWrk'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_stdWrk',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_stdWrk',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_stdWrk',visibleRowNum:'4',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true',syncRowPositionOption:'style',focusMode:'cell',useShiftKey:'true',useCtrlKey:'true',selectedCellColor:'d'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',id:'column11',value:'오더종류',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'기준작업경로번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'150',inputType:'text',id:'column9',value:'기준작업경로명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'130',inputType:'select',readOnly:'true',id:'odrKndCd',sortable:'true',blockSelect:'false',displayMode:'label',emptyItem:'true',selectedData:'false'}},{T:1,N:'w2:column',A:{hidden:'true',removeBorderStyle:'false',width:'120',inputType:'text',readOnly:'true',id:'stdWrkPathNo',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',readOnly:'true',id:'stdWrkPathNm',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',readOnly:'true',id:'rmk',sortable:'true',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.btn_stdDetail_onclick',style:'',id:'btn_stdDetail',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세조회'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.btn_stdCreatePath_onclick',style:'',id:'btn_stdCreatePath',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'경로생성'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업경로 목록',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_ctrtWrkPath',gridUpYn:'N',grp:'grp_ctrtWrkPath',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_ctrtWrkPath',class:'gvwbox mb48'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',visibleRowNumFix:'true',dataList:'data:ds_ctrtWrkPath',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_ctrtWrkPath',visibleRowNum:'4',syncRowPositionOption:'style',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',rowStatusWidth:'20',dataName:'작업경로',validFeatures:'ignoreStatus=no',validExp:'ctrtNo:계약번호:yes,ctrtWrkPathSeq:NO:yes,ctrtWrkPathNm:작업경로명:yes,stdWrkPathNo:기준작업경로:yes','ev:oncolumnindexchange':'scwin.gr_ctrtWrkPath_oncolumnindexchange',focusMode:'cell'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'계약번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'text',id:'column11',value:'No',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'30',inputType:'text',id:'column10',value:'오더',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'기준작업경로명',class:'col-type1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'계약작업경로명',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',id:'column19',value:'비고',class:'col-type2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{hidden:'true',textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',readOnly:'true',id:'ctrtNo',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'30',inputType:'text',readOnly:'true',id:'ctrtWrkPathSeq',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'30',inputType:'text',readOnly:'true',id:'odrKndCd',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'select',readOnly:'true',id:'stdWrkPathNo',sortable:'true',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'',ref:'',validExp:'stdWrkPathNo:기준작업경로:yes'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_stdWrk'},E:[{T:1,N:'w2:label',A:{ref:'stdWrkPathNm'}},{T:1,N:'w2:value',A:{ref:'stdWrkPathNo'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',width:'130',inputType:'text',id:'ctrtWrkPathNm',sortable:'true',displayMode:'label',validExp:'ctrtWrkPathNm:계약작업경로명:yes',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'160',inputType:'text',id:'rmk',sortable:'true',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddYn:'N',btnDelYn:'N',rowDelFunction:'scwin.f_delRowPath',rowDelUserAuth:'D',gridID:'gr_ctrtWrkPath',id:'udc_btmGrdBtn1',btnRowDelObj:'btn_del1',btnRowAddObj:'btn_add'}},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'btn_undo1',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_undo1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'grd_section2',class:'lybox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'참조 작업경로 목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grp_refCtrtWrkPath',style:'',btnPlusYn:'Y',btnUser:'Y',gridID:'gr_refCtrtWrkPath'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_refCtrtWrkPath',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_refCtrtWrkPath',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_refCtrtWrkPath',visibleRowNum:'5',syncRowPositionOption:'style',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'거래처번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',removeBorderStyle:'false',width:'150',inputType:'text',id:'column11',value:'기준작업경로번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'190',inputType:'text',id:'column10',value:'계약작업경로명',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'비고',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'clntNm',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'left',removeBorderStyle:'false',width:'150',inputType:'text',id:'stdWrkPathNo',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'190',inputType:'text',id:'ctrtWrkPathNm',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'100',inputType:'text',id:'rmk',sortable:'true',blockSelect:'false',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'R','ev:onclick':'scwin.btn_refDetail_onclick',style:'',id:'btn_refDetail',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'상세조회'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'C','ev:onclick':'scwin.btn_refCreatePath_onclick',style:'',id:'btn_refCreatePath',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'경로생성'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업경로별 작업단계',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnPlusYn:'Y',btnUser:'Y',gridDownYn:'N',gridID:'gr_ctrtWorkStep',gridUpYn:'N',grp:'grp_ctrtWorkStep',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_ctrtWorkStep',class:'gvwbox mb48'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',visibleRowNumFix:'true',dataList:'data:ds_ctrtWorkStep',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_ctrtWorkStep',visibleRowNum:'5',syncRowPositionOption:'style',class:'wq_gvw',checkReadOnlyOnPasteEnable:'','ev:ontextimageclick':'scwin.gr_ctrtWorkStep_ontextimageclick','ev:onviewchange':'scwin.gr_ctrtWorkStep_onviewchange',rowStatusVisible:'true',rowStatusWidth:'20',dataName:'작업단계',validFeatures:'ignoreStatus=no',validExp:'ctrtWrkStpSeq:순번:yes:,wrkStpCd:작업단계:yes,selpchItemCd:매출항목:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'50',inputType:'text',id:'column12',value:'No',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'20',inputType:'text',id:'column11',value:'No',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'80',inputType:'text',id:'column10',value:'작업장구분',class:'col-type1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'작업단계',class:'col-type1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'매출입항목코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column19',value:'매출요율항목',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'히든매출입항목명',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',removeBorderStyle:'false',width:'50',inputType:'text',readOnly:'true',id:'ctrtWrkPathSeq',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'center',removeBorderStyle:'false',width:'20',inputType:'text',readOnly:'true',id:'ctrtWrkStpSeq',sortable:'true',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'80',inputType:'select',id:'wrkPlClsCd',sortable:'true',blockSelect:'false',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkPlClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{textAlign:'left',removeBorderStyle:'false',width:'120',inputType:'select',id:'wrkStpCd',sortable:'false',blockSelect:'false',displayMode:'label',validExp:'wrkStpCd:작업단계:yes',emptyItem:'true',chooseOption:'',chooseOptionLabel:'',allOption:'',ref:'',editModeEvent:'ondblclick'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ll_LkStepNo'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'120',inputType:'text',readOnly:'true',id:'selpchItemCd',sortable:'true',displayMode:'label',validExp:'selpchItemCd:매출항목:yes'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'textImage',id:'selpchItemNm',sortable:'true',displayMode:'label',editModeEvent:'onclick'}},{T:1,N:'w2:column',A:{hidden:'true',textAlign:'center',width:'150',inputType:'text',readOnly:'true',id:'hidSelpchItemNm',sortable:'true',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows4',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'C',disabled:'',style:'',id:'btn_inst2',type:'button',class:'btn sm',escape:'false','ev:onclick':'scwin.f_insertRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행삽입'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRowStep',rowAddUserAuth:'C',rowDelUserAuth:'D',id:'udc_btmGrdBtn2',gridID:'gr_ctrtWorkStep',btnRowDelObj:'btn_del2',btnRowAddObj:'btn_add2'}},{T:1,N:'xf:trigger',A:{class:'btn sm',disabled:'',escape:'false',id:'btn_undo2',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_undo2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'취소'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'pu_extraCnd',type:'button',class:'btn link','ev:onclick':'scwin.pu_extraCnd_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'부대조건'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_base',type:'button',class:'btn link','ev:onclick':'scwin.pu_base_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약기본정보'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_path',type:'button',class:'btn link','ev:onclick':'scwin.pu_path_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업경로'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_rate',type:'button',class:'btn link','ev:onclick':'scwin.pu_rate_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약요율'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_disc',type:'button',class:'btn link','ev:onclick':'scwin.pu_disc_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'할인/할증'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'pu_img',type:'button',class:'btn link','ev:onclick':'scwin.pu_img_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약서이미지'}]}]},{T:1,N:'xf:trigger',A:{userAuth:'X',style:'',id:'pu_img1',type:'button',class:'btn link','ev:onclick':'scwin.pu_img1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'작업단계별 요율목록'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{userAuth:'U','ev:onclick':'scwin.btn_save_onclick',style:'',id:'btn_save',type:'button',class:'btn',objType:'ctrlBtn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_list_onclick',style:'',id:'btn_list',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'목록'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',nameId:'',style:'display:none;',id:'udc_comCode'}},{T:1,N:'w2:gridView',A:{checkAllType:'false',defaultCellHeight:'20',id:'gr_ctrtWrkPathTrfList',style:'width:374px;height:61px;display: none;',syncRowPositionOption:'style',dataList:'data:ds_ctrtWrkPathTrfList',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',displayMode:'label',value:'계약번호'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column4',displayMode:'label',value:'작업경로'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',displayMode:'label',value:'작업단계'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column2',displayMode:'label',value:'매출항목'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',displayMode:'label',value:'요율존재여부'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col1',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'col2',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'col3',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'col4',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'col5',displayMode:'label',textAlign:'left'}}]}]}]}]}]}]})