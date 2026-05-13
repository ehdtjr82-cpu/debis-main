/*amd /ui/ds/op/wrkplan/transwrkplan/op_202_02_08b.xml 131867 15c96c7a8020cb3641da640e36ffbc276289a38ec7380f9550ab692150c02020 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'배차점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDistrictCd',name:'출발지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvDistrictCd',name:'도착지권역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'출발예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'도착예정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtClsCd',name:'일자구분조건',dataType:'text'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'중장거리배차담당자아이디',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'현위치',dataType:'text'}},{T:1,N:'w2:key',A:{id:'picConfirmYn',name:'담당자확인',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_results_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'twinkleYn',name:'반짝임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'하선마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDd',name:'입출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opswgDd',name:'야적일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picConfirmYn',name:'확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd1',name:'오더코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd2',name:'오더코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd3',name:'배차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd4',name:'배차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd5',name:'잔량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd6',name:'잔량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_portcnt',name:'선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyShippingCd',name:'CY선적코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts_vsslCd_portcnt',name:'TS선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlVehclClntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlVehclClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'양하선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grouporderYn',name:'그룹오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPlCd',name:'출도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrSeq',name:'SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'CNTR NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'야드위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCd',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'weight',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'검색기대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LES',dataType:'text'}},{T:1,N:'w2:column',A:{id:'destPortCd',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosNm',name:'현재위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtYn',name:'반납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtCopinoYn',name:'반납COPINO전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKnd',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrm',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisKnd',name:'샤시종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsNm',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'logisWrkDistrictNm',name:'권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trsNo',name:'TRS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_save',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cmpstcrgKndCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodeptCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicId',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlAlloccarPicNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlYn',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grouporderYn',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicId',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistAlloccarPicNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'longdistYn',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insertClsCd',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyShippingCd',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ShtlVehclClntNo',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ShtlVehclClntNm',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excelTmp'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_excel'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'yardLoc',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'operCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curStat',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptNowWrkPlCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results_temp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'twinkleYn',name:'반짝임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'하선마감일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arDepPortDd',name:'입출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opswgDd',name:'야적일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'alloccarPicId',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'picConfirmYn',name:'확인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'출발예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'도착예정일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd1',name:'오더코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd2',name:'오더코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd3',name:'배차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd4',name:'배차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd5',name:'잔량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd6',name:'잔량코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd_portcnt',name:'선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cyShippingCd',name:'CY선적코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ts_vsslCd_portcnt',name:'TS선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlYn',name:'검색기포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsPortcnt',name:'name31',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsVsslNm',name:'name32',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlVehclClntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shtlVehclClntNm',name:'협력업체명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'양하선박항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'grouporderYn',name:'그룹오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPlCd',name:'출도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료시간',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveShuttleTransWorkVolumeVehiclesCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_results1","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"},{"id":"ds_results1","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ncall.ds.op.wrkplan.transwrkplan.RetrieveShuttleContainerInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_search2',target:'data:json,{"id":"ds_results2","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerAssignInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_save","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_upload_save',action:'/ncall.ds.op.wrkplan.transwrkplan.SaveContainerYardLocationInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_excelTmp","key":"IN_DS1"}]',target:'','ev:submitdone':'scwin.sbm_upload_save_submitdone','ev:submiterror':''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',scopeVariable:'DsConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화면명 : 셔틀운송작업물량차량조회
 * 화면id : op_202_02_08b
 */

scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vFirstDate = $c.date.getDateAddMonthDirection($p, scwin.vCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

scwin.strBulkOrderUrl = "/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml";
scwin.strContainerOrderUrl = "/ds/sd/odrmgnt/odrreg/sd_402_01_11t.xml";
scwin.btnFlag = ""; // 신규, 수정 구분자
scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.RetrieveFlag = false;
scwin.pos_groupCode = 0; // 저장전 DataSet의 RowPosition을 저장 변수

scwin.gv_userClsCd = "";
scwin.gv_clntNo = "";
scwin.gv_clntNm = "";
scwin.gv_loabranCd = "";
scwin.colorChangeInterval;
scwin.count = 0;
scwin.isRetrieve = false;
scwin.isColorChange = false;

//-------------------------------------------------------------------------
// function name : f_OnLoad
// function desc : 화면로딩시 
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  // 세션정보
  let memJson = $c.data.getMemInfo($p);
  scwin.gv_userClsCd = $c.data.getMemInfo($p, "userClsCd");
  scwin.gv_clntNo = $c.data.getMemInfo($p, "clntNo");
  scwin.gv_clntNm = $c.data.getMemInfo($p, "clntNm");
  scwin.gv_loabranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.loginUserId = $c.data.getMemInfo($p, "userId");
  scwin.loginUserNm = $c.data.getMemInfo($p, "userNm");
  scwin.isColorChange = false;
  const codeOptions = [{
    grpCd: "OP190",
    compID: "acb_lc_cargoClsCd"
  },
  // 작업구분
  {
    grpCd: "SD113",
    compID: "acb_lc_odrKndCd"
  } // 오더종류
  ];

  // 또는 콜백 처리
  await $c.data.setCommonCode($p, codeOptions, function () {
    // 작업구분
    acb_lc_cargoClsCd.setValue(DsConstants.CARGO_CLS_CD_CONTAINER);
  });
  const utilOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    param3: ["1"],
    compID: "acb_lc_lobranCd"
  }];
  await $c.data.setGauceUtil($p, utilOptions, function () {
    //배차점소
    acb_lc_lobranCd.setValue(scwin.gv_loabranCd);
    if (acb_lc_lobranCd.getValue() == DsConstants.UPPER_LOBRAN_CD_BUSAN) {
      //부산매입권역
      scwin.f_districtSearch("2");
    } else {
      scwin.f_districtSearch("1");
    }
  });
  scwin.f_switchObjMode(1);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  //출발예정일
  udc_wrkDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
  // udc_wrkDt.setInitDate("20250516", "20250516");
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  $c.gus.cfDisableObjects($p, [btn_print1, btn_print2, btn_goWrkIndict]);
  ed_em_wrkStDt.focus();
};
scwin.colorChange = async function () {
  if (scwin.isColorChange && ds_results.getRowCount() > 0) {
    const completeYn = acb_lc_completeYn.getValue();
    const isTargetStatus = completeYn === "0" || completeYn === "";
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      // 짝수일 때 색상 변경, 홀수일 때 원복 (깜빡이 효과)
      if (scwin.count % 2 === 0 && isTargetStatus) {
        if (ds_results.getCellData(i, "twinkleYn") !== "0") {
          gr_results.setCellBackgroundColor(i, "arrvlportDt", "#FBCED4");
        }
      } else {
        // 원복
        gr_results.setCellBackgroundColor(i, "arrvlportDt", "");
      }
    }
    scwin.count++; // 카운트 증가
    if (scwin.count > 100) scwin.count = 0;
  }
};
/**
 * @event 
 * @name onbeforepageunload 
 * @description 화면이 닫히기 직전에 발생하는 이벤트.
 */
scwin.onbeforepageunload = function () {
  $c.util.clearInterval($p, 'bgColorInterval');
};

//-------------------------------------------------------------------------
// 화면구성요소 제어(버튼 입력박스등등 disable, enable)
//-------------------------------------------------------------------------
scwin.f_switchObjMode = function (gubun) {
  switch (gubun) {
    case 1:
      // 화면로딩
      $c.gus.cfDisableBtnOnly($p, [btn_save]);
      $c.gus.cfDisableObjects($p, [btn_print1, btn_print2, btn_goWrkIndict]);
      break;
    case 2:
      // 조회
      break;
    case 3:
      // 신규
      break;
    case 4:
      // 수정
      break;
    case 5:
      // 조회완료
      $c.gus.cfEnableBtnOnly($p, [btn_save]);
      $c.gus.cfEnableObjects($p, [btn_print1, btn_print2, btn_goWrkIndict]);
      break;
    case 6:
      // 수정불가
      break;
    case 7:
      // 행삭제, 행취소
      break;
    case 8:
      // 행추가
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 협력업체차량작업지시등록 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.excel0 = async function () {
  // 운송물량 Grid 엑셀다운로드
  await scwin.f_emclntExcel(0);
};
scwin.excel1 = async function () {
  // 컨테이너 Grid 엑셀다운로드
  await scwin.f_emclntExcel(1);
};
scwin.excel2 = async function () {
  // 운송차량 Grid 엑셀다운로드
  await scwin.f_emclntExcel(2);
};
scwin.f_emclntExcel = async function (gubun) {
  var fileName = "셔틀운송작업물량차량조회";
  if (gubun == null || gubun == "" || gubun == 0) {
    await $c.data.downloadGridViewExcel($p, gr_results, {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      removeColumns: "0"
    });
  } else if (gubun == 1) {
    await $c.data.downloadGridViewExcel($p, gr_results2, {
      fileName: fileName + ".xlsx",
      sheetName: fileName,
      hiddenVisible: true,
      removeColumns: "18,19,22,23"
    });
  } else if (gubun == 2) {
    await $c.data.downloadGridViewExcel($p, gr_results1, {
      fileName: fileName + ".xlsx",
      sheetName: fileName
    });
  }
};

//-------------------------------------------------------------------------
// function name : f_retrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.f_retrieve = async function (gubun) {
  if (gubun == null || gubun == "" || gubun == 0) {
    let chkValid = await $c.gus.cfValidate($p, [ed_em_wrkStDt, ed_em_wrkEndDt]);
    if (!chkValid) {
      return;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ed_em_wrkStDt.getValue(), ed_em_wrkEndDt.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
      ed_em_wrkStDt.focus();
      return;
    }
    ds_results.removeAll(); // 운송물량 List
    ds_results1.removeAll(); // 운송차량 List
    ds_results2.removeAll(); // 컨테이너 List

    dma_search.set("cargoClsCd", acb_lc_cargoClsCd.getValue());
    dma_search.set("lobranCd", acb_lc_lobranCd.getValue());
    dma_search.set("odrKndCd", acb_lc_odrKndCd.getValue());
    dma_search.set("odrNo", ed_em_odrNo.getValue().trim());
    dma_search.set("vsslCd", ed_em_vsslCd.getValue().trim());
    dma_search.set("portcnt", ed_em_portcnt.getValue().trim());
    dma_search.set("dptDistrictCd", acb_lc_dptDistrictCd.getValue());
    dma_search.set("arvDistrictCd", acb_lc_arvDistrictCd.getValue());
    dma_search.set("dptWrkPlCd", ed_em_dptWrkPlCd.getValue().trim());
    dma_search.set("arvWrkPlCd", ed_em_arvWrkPlCd.getValue().trim());
    dma_search.set("wrkStDt", ed_em_wrkStDt.getValue().trim());
    dma_search.set("wrkEndDt", ed_em_wrkEndDt.getValue().trim());
    dma_search.set("wrkDtClsCd", acb_lc_wrkDtClsCd.getValue());
    dma_search.set("alloccarPicId", ed_em_alloccarPicId.getValue().trim());
    dma_search.set("lineCd", ed_lineCd.getValue().trim());
    dma_search.set("dptNowWrkPlCd", ed_em_dptNowWrkPlCd.getValue().trim());
    scwin.btnFlag = ""; // 신규, 수정 구분자
    scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
    scwin.RetrieveFlag = true;
    scwin.isRetrieve = true;
    $c.sbm.execute($p, sbm_retrieve);
  } else if (gubun == 2) {
    if (ds_results.getRowPosition() < 0) {
      return;
    }
    //합계행 선택시 오더넘버가 없이 조회해서 sql오류발생 오더넘버가 없는 합계행은 조회안하도록 수정		
    if (ds_results.getCellData(ds_results.getRowPosition(), "odrNo") == null || ds_results.getCellData(ds_results.getRowPosition(), "odrNo") == "") {
      return;
    }
    dma_search2.set("odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));
    dma_search2.set("dptNowWrkPlCd", dma_search.get("dptNowWrkPlCd"));
    $c.sbm.execute($p, sbm_retrieve2);
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // odrNo 정렬
    // var json = ds_results.getAllJSON();
    // json.sort(function(a, b){
    //     return a.odrNo.localeCompare(b.odrNo);
    // });
    // ds_results.setJSON(json);

    if (ds_results.getRowCount() == 0) {
      totalRows.setValue("0");
      totalRows2.setValue("0");
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      // return;
    } else {
      // Grid 정렬 옵션
      var options = {};
      options.sortIndex = "odrNo odrKndNm dtpDistrictNm";
      //options.sortOrder = "1 1 1";
      ds_results.sort("odrNo", 0);
    }
    totalRows.setValue(ds_results.getRowCount());
    totalRows1.setValue(ds_results1.getRowCount());
    if (ds_results1.getRowCount() == 0) {
      totalRows1.setValue("0");
      return;
    }
    if (ds_results.getRowCount() == 0) return;
    gr_results.setColumnStyle("odrNo", "color", "blue");
    gr_results.setColumnStyle("odrNo", "text-decoration", "underline");
    $c.gus.cfGoPrevPosition($p, gr_results, scwin.pos_groupCode);
    scwin.f_switchObjMode(5); //조회완료
    scwin.isRetrieve = false;
    scwin.isColorChange = true;
    let retData1 = "";
    let retData2 = "";
    ds_results.setIgnoreStatus("vsslCd_portcnt", true); // 선박항차 아래 setCellData 하면서 rowStatus 값이 U로 변경안되도록 세팅
    ds_results.setIgnoreStatus("ts_vsslCd_portcnt", true); // TS선박항차 아래 setCellData 하면서 rowStatus 값이 U로 변경안되도록 세팅
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "portcnt") == "") {
        retData1 = ds_results.getCellData(i, "vsslNm");
      } else {
        retData1 = ds_results.getCellData(i, "vsslNm") + "/" + ds_results.getCellData(i, "portcnt");
      }
      ds_results.setCellData(i, "vsslCd_portcnt", retData1);
      if (ds_results.getCellData(i, "tsPortcnt") == "") {
        retData2 = ds_results.getCellData(i, "tsVsslNm");
      } else {
        retData2 = ds_results.getCellData(i, "tsVsslNm") + "/" + ds_results.getCellData(i, "tsPortcnt");
      }
      ds_results.setCellData(i, "ts_vsslCd_portcnt", retData2);
      if (ds_results.getCellData(i, "picConfirmYn") == "1") {
        gr_results.setCellBackgroundColor(i, "odrNo", "yellow");
      } else if (ds_results.getCellData(i, "picConfirmYn") == "0") {
        gr_results.setCellBackgroundColor(i, "odrNo", "#ffffff");
      }
      // 도착권역
      // BgColor={decode(odrKndCd,"C1", decode(cntrSizCd7+cntrSizCd8,0,"#ffffff","red"),"C7", decode(cntrSizCd7+cntrSizCd8,0,"#ffffff","red"),"CS", decode(cntrSizCd7+cntrSizCd8,0,"#ffffff","red"),"#ffffff")}
    }
    ds_results_temp.setJSON(ds_results.getAllJSON());

    //scwin.fn_applyFilter();
    scwin.f_onFilter();
    $p.setTimeout(function () {
      totalRows.setValue(ds_results.getRowCount());
    }, 300);
    $p.setTimeout(function () {
      gr_results1.setFocusedCell(0, 0, false);
      gr_results.setFocusedCell(0, 0);
      scwin.ds_results_onrowpositionchange();
    }, 500);

    // 현재의 조회조건을 저장을 위해 복사해둔다
    //$c.gus.cfCopyDataSet(ds_search, ds_hiddenSearch);

    // scwin.colorChangeInterval = setInterval(async function() { await scwin.colorChange(); }, 1000, "bgColorInterval");
    scwin.startColorInterval = function () {
      // 이미 실행 중인 인터벌이 있다면 중복 방지를 위해 클리어
      if (scwin.colorChangeInterval) {
        clearInterval(scwin.colorChangeInterval);
      }
      scwin.colorChangeInterval = setInterval(async function () {
        await scwin.colorChange();
      }, 1000);
    };
    ds_results.sort("odrNo", 0);
  }
};
scwin.sbm_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows2.setValue(ds_results2.getRowCount());
    if (ds_results2.getRowCount() == 0) {
      totalRows2.setValue("0");
      return;
    } else {
      gr_results2.setFocusedCell(0, 0, false);
      acb_lc_cargoClsCd.focus();
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  if (ds_results.getRowCount() == 0 || ds_results2.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  for (var i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getRowStatus(i) == "U") {
      if (ds_results.getRowCount() > 1 && ds_results.getRowPosition() != i) {
        $c.gus.cfAlertMsg($p, "수정된 행과 현재행이 다릅니다");
        return;
      }
    }
  }
  ds_save.removeAll();
  for (var i = 0; i < ds_results2.getRowCount(); i++) {
    ds_save.insertRow();
    ds_save.setCellData(i, "odrNo", ds_results.getCellData(ds_results.getRowPosition(), "odrNo"));
    ds_save.setCellData(i, "cntrSeq", ds_results2.getCellData(i, "cntrSeq"));
    ds_save.setCellData(i, "odrWrkPlCd", ds_results.getCellData(ds_results.getRowPosition(), "odrWrkPlCd"));
    ds_save.setCellData(i, "shtlAlloccarPicId", ds_results.getCellData(ds_results.getRowPosition(), "alloccarPicId"));
    ds_save.setCellData(i, "shtlAlloccarPicNm", ds_results.getCellData(ds_results.getRowPosition(), "alloccarPicNm"));
    ds_save.setCellData(i, "shtlYn", ds_results.getCellData(ds_results.getRowPosition(), "picConfirmYn"));
    ds_save.setCellData(i, "picConfirmYn", ds_results.getCellData(ds_results.getRowPosition(), "picConfirmYn"));
    ds_save.setCellData(i, "grouporderYn", ds_results.getCellData(ds_results.getRowPosition(), "grouporderYn"));
    ds_save.setCellData(i, "jobType", "U");
    ds_save.setCellData(i, "dptDistrictCd", ds_results.getCellData(ds_results.getRowPosition(), "dptDistrictCd"));
    ds_save.setCellData(i, "arvDistrictCd", ds_results.getCellData(ds_results.getRowPosition(), "arvDistrictCd"));
    ds_save.setCellData(i, "insertClsCd", "shuttleVolume");
    ds_save.setCellData(i, "cyShippingCd", ds_results.getCellData(ds_results.getRowPosition(), "cyShippingCd"));
    ds_save.setCellData(i, "ShtlVehclClntNo", ds_results.getCellData(ds_results.getRowPosition(), "shtlVehclClntNo"));
    ds_save.setCellData(i, "ShtlVehclClntNm", ds_results.getCellData(ds_results.getRowPosition(), "shtlVehclClntNm"));

    // ds_save.setCellData(i, "odrNo", ds_results.getCellData(i, "odrNo"));
    // ds_save.setCellData(i, "cntrSeq", ds_results2.getCellData(i, "cntrSeq"));
    // ds_save.setCellData(i, "odrWrkPlCd", ds_results.getCellData(i, "odrWrkPlCd"));
    // ds_save.setCellData(i, "shtlAlloccarPicId", ds_results.getCellData(i, "alloccarPicId"));
    // ds_save.setCellData(i, "shtlAlloccarPicNm", ds_results.getCellData(i, "alloccarPicNm"));
    // ds_save.setCellData(i, "shtlYn", ds_results.getCellData(i, "picConfirmYn"));
    // ds_save.setCellData(i, "picConfirmYn", ds_results.getCellData(i, "picConfirmYn"));
    // ds_save.setCellData(i, "grouporderYn", ds_results.getCellData(i, "grouporderYn"));
    // ds_save.setCellData(i, "jobType", "U");
    // ds_save.setCellData(i, "dptDistrictCd", ds_results.getCellData(i, "dptDistrictCd"));
    // ds_save.setCellData(i, "arvDistrictCd", ds_results.getCellData(i, "arvDistrictCd"));
    // ds_save.setCellData(i, "insertClsCd", "shuttleVolume");
    // ds_save.setCellData(i, "cyShippingCd", ds_results.getCellData(i, "cyShippingCd"));
    // ds_save.setCellData(i, "ShtlVehclClntNo", ds_results.getCellData(i, "shtlVehclClntNo"));
    // ds_save.setCellData(i, "ShtlVehclClntNm", ds_results.getCellData(i, "shtlVehclClntNm"));
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    scwin.rowFlag = ""; // 초기화	
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.f_retrieve();
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //선박명
      udc_vsslCd.setSelectId('retrieveVsslCdInfo');
      udc_vsslCd.cfCommonPopUp(scwin.udc_vsslCd_callBackFunc // XML상의 SELECT ID
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //출발지
      udc_dptWrkPlCd.setSelectId('retrieveWrkPlInfo');
      udc_dptWrkPlCd.cfCommonPopUp(scwin.udc_dptWrkPlCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ",,,,,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      //도착지
      udc_arvWrkPlCd.setSelectId('retrieveWrkPlInfo');
      udc_arvWrkPlCd.cfCommonPopUp(scwin.udc_arvWrkPlCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ",,,,,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      //LINE
      udc_lineCd.setSelectId('retrieveLineInfo');
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc // XML상의 SELECT ID
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      //배차담당자
      udc_alloccarPicId.setSelectId('retrieveUserInfo');
      udc_alloccarPicId.cfCommonPopUp(scwin.udc_alloccarPicId_callBackFunc // XML상의 SELECT ID
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
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      //현위치
      udc_dptNowWrkPlCd.setSelectId('retrieveWrkPlInfo');
      udc_dptNowWrkPlCd.cfCommonPopUp(scwin.udc_dptNowWrkPlCd_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , ",,,,,2" // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_vsslCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_em_vsslCd.setValue(rtnList[0]);
    txt_vsslNm.setValue(rtnList[1]);
  } else {
    ed_em_vsslCd.setValue("");
    txt_vsslNm.setValue("");
  }
};
scwin.udc_dptWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_em_dptWrkPlCd.setValue(rtnList[0]);
    txt_dptWrkPlNm.setValue(rtnList[1]);
  } else {
    ed_em_dptWrkPlCd.setValue("");
    txt_dptWrkPlNm.setValue("");
  }
};
scwin.udc_arvWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_em_arvWrkPlCd.setValue(rtnList[0]);
    txt_arvWrkPlNm.setValue(rtnList[1]);
  } else {
    ed_em_arvWrkPlCd.setValue("");
    txt_arvWrkPlNm.setValue("");
  }
};
scwin.udc_lineCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_lineCd.setValue(rtnList[0]);
    txt_lineNm.setValue(rtnList[1]);
  } else {
    ed_lineCd.setValue("");
    txt_lineNm.setValue("");
  }
};
scwin.udc_alloccarPicId_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_em_alloccarPicId.setValue(rtnList[0]);
    txt_alloccarPicNm.setValue(rtnList[1]);
  } else {
    ed_em_alloccarPicId.setValue("");
    txt_alloccarPicNm.setValue("");
  }
};
scwin.udc_dptNowWrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_em_dptNowWrkPlCd.setValue(rtnList[0]);
    txt_dptNowWrkPlNm.setValue(rtnList[1]);
  } else {
    ed_em_dptNowWrkPlCd.setValue("");
    txt_dptNowWrkPlNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObjVal, disGubun, isCode) {
  let pVal = "";
  if (isCode == null || isCode == true) {
    if (typeof inObj === "string") {
      pVal = inObj;
    } else if (inObj && typeof inObj.getValue === "function") {
      pVal = inObj.getValue();
    } else {
      pVal = inObj || "";
    }
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    pVal = pairObjVal || "";
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  //tb_srchCond
  ed_em_dptWrkPlCd.setValue("");
  txt_dptWrkPlNm.setValue("");
  ed_em_arvWrkPlCd.setValue("");
  txt_arvWrkPlNm.setValue("");
  ed_em_odrNo.setValue("");
  ed_em_alloccarPicId.setValue("");
  txt_alloccarPicNm.setValue("");
  ed_em_vsslCd.setValue("");
  txt_vsslNm.setValue("");
  ed_em_portcnt.setValue("");
  ed_lineCd.setValue("");
  txt_lineNm.setValue("");
  ed_em_dptNowWrkPlCd.setValue("");
  txt_dptNowWrkPlNm.setValue("");
  acb_lc_cargoClsCd.setSelectedIndex(1);
  acb_lc_lobranCd.setValue(scwin.gv_loabranCd);
  acb_lc_odrKndCd.setSelectedIndex(0);
  acb_lc_wrkDtClsCd.setSelectedIndex(0);
  acb_lc_dptDistrictCd.setSelectedIndex(0);
  acb_lc_arvDistrictCd.setSelectedIndex(0);
  acb_lc_cvsslOdrCls.setSelectedIndex(0);
  acb_lc_picConfirmYn.setSelectedIndex(0);
  acb_lc_completeYn.setSelectedIndex(0);
  scwin.onUdcCompleted();
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_orderDetail = async function () {
  let condition = "?";
  let row = ds_results.getRowPosition();
  let strOrderDetailUrl = "";
  if (ds_results.getRowCount() > 0) {
    // 선택된 오더 정보 : 오더번호 / 오더유형
    let v_odrNo = ds_results.getCellData(row, "odrNo");
    let v_odrKndCd = ds_results.getCellData(row, "odrKndCd");
    let v_transCargoClsCd = dma_search.get("cargoClsCd");
    if (v_transCargoClsCd == DsConstants.ODR_BULK) {
      condition += "odrNo=" + v_odrNo + "&type=retrieve";
      // 오더 종류가 벌크오더인 경우 - 화물구분(B : 벌크)
      strOrderDetailUrl = DsConstants.URL_BULK_ORDER;
      // alert("오더세부사항조회 ["+row+"] : "+v_odrNo+"/"+v_odrKndCd+"/"+v_transCargoClsCd+"/"+strOrderDetailUrl+"/"+condition);
      // cfTabMenuUpdate( strOrderDetailUrl+condition , "벌크오더") ;

      let menuId = "11111";
      $c.win.openMenu($p, "벌크오더", strOrderDetailUrl + condition, menuId);
    } else {
      let params = {
        odrNo: v_odrNo
      };
      // 오더 종류가 컨테이너 오더인 경우 - 화물구분 (C : 컨테이너)
      condition += "odrNo=" + v_odrNo + "&linkPage=odrList";
      if (v_odrKndCd == "C1" || v_odrKndCd == "CS" || v_odrKndCd == "CT") {
        // 수입본선오더
        strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_05b.xml";
        let chk = await $c.win.confirm($p, "수입본선오더 Page로 이동하시겠습니까?");
        if (chk) {
          $c.win.openMenu($p, "수입본선오더", strOrderDetailUrl + condition, "tn_201_02_05b.xml", params);
        }
      } else if (v_odrKndCd == "C2" || v_odrKndCd == "CX") {
        // 수입일반오더
        strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_03b.xml";
        let chk = await $c.win.confirm($p, "수입일반오더 Page로 이동하시겠습니까?");
        if (chk) {
          $c.win.openMenu($p, "수입일반오더", strOrderDetailUrl + condition, "tn_201_02_03b.xml", params);
        }
      } else if (v_odrKndCd == "C3" || v_odrKndCd == "CW" || v_odrKndCd == "CR" || v_odrKndCd == "CP") {
        // 수출본선오더
        strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_06b.xml";
        let chk = await $c.win.confirm($p, "수출본선오더 Page로 이동하시겠습니까?");
        if (chk) {
          $c.win.openMenu($p, "수출본선오더", strOrderDetailUrl + condition, "tn_201_02_06b.xml", params);
        }
      } else if (v_odrKndCd == "C4") {
        // 수출일반오더
        strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_04b.xml";
        let chk = await $c.win.confirm($p, "수출일반오더 Page로 이동하시겠습니까?");
        if (chk) {
          $c.win.openMenu($p, "수출일반오더", strOrderDetailUrl + condition, "tn_201_02_04b.xml", params);
        }
      } else if (v_odrKndCd == "C5" || v_odrKndCd == "C6" || v_odrKndCd == "C7") {
        // 기타오더
        strOrderDetailUrl = "/tn/sd/odrmgnt/cntrodrreg/tn_201_02_07b.xml";
        let chk = await $c.win.confirm($p, "기타오더 Page로 이동하시겠습니까?");
        if (chk) {
          $c.win.openMenu($p, "기타오더", strOrderDetailUrl + condition, "tn_201_02_07b.xml", params);
        }
      }
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더현황"));
    return;
  }
};

//-------------------------------------------------------------------------
// 권역콤보
//-------------------------------------------------------------------------
scwin.f_districtSearch = function (gubun) {
  //복화권역
  //var vCBData1 = "^전체,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkDistrictCdCombo", new String[] {"CMP"}) %>";
  //부산매입권역
  //var vCBData2 = "^전체,<%= GauceUtil.getLuxeComboData("DsCommonEBC", "retriveWrkRgnCdCombo", new String[] {"PUS"}) %>";
  const vCBData1 = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkDistrictCdCombo",
    param3: ["CMP"],
    compID: "acb_lc_dptDistrictCd, acb_lc_arvDistrictCd"
  }];
  const vCBData2 = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retriveWrkRgnCdCombo",
    param3: ["PUS"],
    compID: "acb_lc_dptDistrictCd, acb_lc_arvDistrictCd"
  }];
  if (gubun == "1") {
    // acb_lc_dptDistrictCd.CBData = vCBData1;
    // acb_lc_dptDistrictCd.setSelectedIndex(0);
    // acb_lc_arvDistrictCd.CBData = vCBData1;
    // acb_lc_arvDistrictCd.setSelectedIndex(0);
    $c.data.setGauceUtil($p, vCBData1, function () {
      // dlt_gauceUtil_lc_dptDistrictCd_lc_arvDistrictCd.setRowJSON(0, {"code":"","name":"전체"}, false);
      acb_lc_dptDistrictCd.setSelectedIndex(0);
      acb_lc_arvDistrictCd.setSelectedIndex(0);
    });
  } else if (gubun == "2") {
    // acb_lc_dptDistrictCd.CBData = vCBData2;
    // acb_lc_dptDistrictCd.setSelectedIndex(0);
    // acb_lc_arvDistrictCd.CBData = vCBData2;
    // acb_lc_arvDistrictCd.setSelectedIndex(0);
    $c.data.setGauceUtil($p, vCBData2, function () {
      acb_lc_dptDistrictCd.setSelectedIndex(0);
      acb_lc_arvDistrictCd.setSelectedIndex(0);
    });
  } else {
    // acb_lc_dptDistrictCd.CBData = vCBData1;
    // acb_lc_dptDistrictCd.setSelectedIndex(0);
    // acb_lc_arvDistrictCd.CBData = vCBData1;
    // acb_lc_arvDistrictCd.setSelectedIndex(0);
    $c.data.setGauceUtil($p, vCBData1, function () {
      acb_lc_dptDistrictCd.setSelectedIndex(0);
      acb_lc_arvDistrictCd.setSelectedIndex(0);
    });
  }

  //acb_lc_dptDistrictCd.ResetData();
  //acb_lc_arvDistrictCd.ResetData();
};

//-------------------------------------------------------------------------
// 셔틀운송작업지시등록 링크 f_goWrkIndict
//-------------------------------------------------------------------------
scwin.btn_goWrkIndict_onclick = async function (e) {
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_056, new Array("오더"));
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  } else {
    let rowPos = ds_results.getRowPosition();
    let v_lobranCd = acb_lc_lobranCd.getValue();
    let v_wrkStDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkStDt");
    let v_wrkEndDt = ds_results.getCellData(ds_results.getRowPosition(), "wrkEndDt");
    let v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    if ($c.gus.cfIsNull($p, v_odrNo)) {
      await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
      return;
    }
    let param = {};
    param = {
      odrNo: v_odrNo,
      lobranCd: v_lobranCd,
      wrkStDt: v_wrkStDt,
      wrkEndDt: v_wrkEndDt
    };
    var address = DsConstants.URL_CONTAINER_SHUTTLE_TRANS_VOLUME + "?odrNo=" + v_odrNo + "&lobranCd=" + v_lobranCd + "&wrkStDt=" + v_wrkStDt + "&wrkEndDt=" + v_wrkEndDt;
    $c.win.openMenu($p, "셔틀운송작업지시등록(컨테이너)", address, "11111", param);
  }
};
scwin.f_printNew = async function (gubun) {
  var v_msg = "";
  var checkCnt = 0; //체크박스 체크개수
  var batchYn = 0; //일괄여부
  var v_odrNo = "";
  var tmpStr = "";
  var pURL = ""; //page경로

  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_056, new Array("오더"));
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  } else {
    var tmpOdr = "";
    //일괄발행시 적용할 오더번호 추출...
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (scwin.f_IsSelected(i)) {
        if (checkCnt == 0) {
          tmpStr = tmpStr + ds_results.getCellData(i, "odrNo");
        } else {
          if (tmpOdr != ds_results.getCellData(i, "odrNo")) {
            tmpStr = tmpStr + "," + ds_results.getCellData(i, "odrNo");
          }
        }
        tmpOdr = ds_results.getCellData(i, "odrNo");
        checkCnt++;
      }
    }
    if (checkCnt > 1) {
      batchYn = 1;
      v_odrNo = tmpStr; // 일괄적용 오더번호
    } else {
      v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo"); // 개별적용 오더번호
    }
    switch (gubun) {
      case 1:
        //CONTAINER LOADING LIST
        // pURL = "/ds/op/wrkplan/transwrkplan/op_202_02_05r.jsp?odrNo=" + v_odrNo + "&batchYn=" + batchYn;
        // window.showModalDialog(pURL,null,"dialogWidth:530px; dialogHeight:300px");
        var data = {
          paramTitle: "",
          odrNo: v_odrNo,
          batchYn: batchYn,
          callbackFn: scwin.f_printNew_1_callBackFunc
        };
        var opts = {
          id: "smpPop",
          popupName: "CONTAINER LOADING LIST",
          modal: true,
          type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
          ,

          title: "Win pop" //Layer pop
          ,

          width: 530,
          height: 300
        };
        $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_05r.xml", opts, data);
        break;
      case 2:
        //DISCHARGING LIST
        // pURL = "/ds/op/wrkplan/transwrkplan/op_202_02_04r.jsp?odrNo=" + v_odrNo + "&batchYn=" + batchYn;
        // window.showModalDialog(pURL,null,"dialogWidth:530px; dialogHeight:300px");
        var data = {
          paramTitle: "",
          odrNo: v_odrNo,
          batchYn: batchYn,
          callbackFn: scwin.f_printNew_2_callBackFunc
        };
        var opts = {
          id: "smpPop",
          popupName: "DISCHARGING LIST",
          modal: true,
          type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
          ,

          title: "Win pop" //Layer pop
          ,

          width: 530,
          height: 300
        };
        $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_04r.xml", opts, data);
        break;
      case 3:
        //오더SHEET
        if (batchYn) {
          //일괄print (viewer띄우지 않고 print)
          scwin.f_print(4);
        } else {
          //개별print (viewer띄어서 print)
          scwin.f_print(3);
        }
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
// 파일 확장자 체크
//-------------------------------------------------------------------------
scwin.f_CheckFileExt = function (ext, path) {
  ext = ext.toUpperCase();
  path = path.toUpperCase();
  let elen = ext.length;
  let flen = path.length;
  return ext == path.substring(flen - elen, flen);
};

//-------------------------------------------------------------------------
// 파일 업로드
//-------------------------------------------------------------------------
scwin.f_excelUpload = async function () {
  //TODO 업로드 기능 있는지 확인필요함

  ds_excel.removeAll();
  ds_excelTmp.removeAll();
  if (udc_topGrdResults2.getUpExt() == "1") {
    // csv 선택값
    let options = {
      "fileName": "gridDataUpload.csv",
      "status": "C",
      "headerExist": 1,
      "header": 1,
      "type": "1",
      "startRowIndex": 0
      // "delim":"||",     //[default: ',']CSV 파일에서 데이터를 구분할 구분자
    };
    await $c.data.uploadGridViewCSV($p, gr_results2, options); // CSV를 선택하였을 경우
  } else {
    // xlsx 선택값
    let options = {
      "fileName": "gridDataUpload.xlsx",
      "status": "C",
      "headerExist": 1,
      "useMaxByteLength": ",",
      "type": "1",
      "startRowIndex": 0
    };
    await $c.data.uploadGridViewExcel($p, gr_results2, options);
    // await $c.gus.cfAlertMsg("파일이 CSV인 것만 Import가 가능합니다.\n엑셀 파일을 CSV로 변환 하시어 Import하시기 바랍니다.");
    // return;
  }
};
scwin.sbm_upload_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return; // OnFail
  }
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.

  scwin.f_retrieve();
};
scwin.gr_results2_excel_onfilereadend = function (value) {
  scwin.f_upload();
};
scwin.f_upload = async function () {
  $c.gus.cfProgressWinOpen($p);
  if (ds_excel.getRowCount() > 0) {
    for (var i = 0; i < ds_excel.getRowCount(); i++) {
      let row = ds_excelTmp.insertRow();
      ds_excelTmp.setCellData(row, "cntrNo", ds_excel.getCellData(i, "cntrNo"));
      ds_excelTmp.setCellData(row, "yardLoc", ds_excel.getCellData(i, "yardLoc"));
      ds_excelTmp.setCellData(row, "operCd", ds_excel.getCellData(i, "operCd"));
      ds_excelTmp.setCellData(row, "curStat", ds_excel.getCellData(i, "curStat"));
    }
  } else {
    $c.gus.cfProgressWinClose($p);
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }
  for (var j = 0; j < ds_results2.getRowCount(); j++) {
    for (var k = 0; k < ds_excelTmp.getRowCount(); k++) {
      if (ds_results2.getCellData(j, "cntrNo") == ds_excelTmp.getCellData(k, "cntrNo")) {
        ds_results2.setCellData(j, "yardLoc", ds_excelTmp.getCellData(k, "yardLoc"));
        ds_results2.setCellData(j, "operCd", ds_excelTmp.getCellData(k, "operCd"));
        ds_results2.setCellData(j, "curStat", ds_excelTmp.getCellData(k, "curStat"));
      }
    }
  }
  $c.gus.cfProgressWinClose($p);
  let chk = await $c.win.confirm($p, "업로드작업이 완료되었습니다. 저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_upload_save);
  }
};

//-------------------------------------------------------------------------
// 프린트
//-------------------------------------------------------------------------
scwin.f_print = async function (gubun) {
  var v_msg = "";
  if (ds_results.getRowCount() == 0 || ds_results.getRowPosition() < 0) {
    // await $c.gus.cfAlertMsg(MSG_CM_ERR_056, new Array("오더"));
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["오더"]);
    return;
  } else {
    let v_odrNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    switch (gubun) {
      case 1:
        //CONTAINER LOADING LIST
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        let pURL1 = "/ds/op/wrkplan/transwrkplan/op_202_02_05r.xml";
        await $c.win.openPopup($p, pURL1, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo
          }
        });

        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        // var odiParam = new ODIParam("op_202_02_05r");
        // odiParam.add("odrNo", v_odrNo);

        // formParam.add("form1","폼1");
        // var formParam = new FormParam();

        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        // var viewerParam = new ViewerParam();
        // var viewerParam = new ViewerParam();
        // viewerParam.add("viewer.zoom","100");
        // viewerParam.add("print.mode","silent");		//프린트 설정창 없게...
        // viewerParam.add("viewer.mode","preview");	//미리보기
        // viewerParam.add("viewer.mode","print");		//미리보기 없이 바로 출력
        // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
        // cfOZPreview( "/ds/op/wrkplan/transwrkplan/op_202_02_05r.ozr", odiParam, viewerParam, formParam ) ;
        break;
      case 2:
        //DISCHARGING LIST
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        let pURL2 = "/ds/op/wrkplan/transwrkplan/op_202_02_04r.xml";
        await $c.win.openPopup($p, pURL2, {
          width: 530,
          height: 300,
          modal: true,
          data: {
            odrNo: v_odrNo
          }
        });

        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        // var odiParam = new ODIParam("op_202_02_04r");
        // odiParam.add("odrNo", v_odrNo);

        // formParam.add("form1","폼1");
        var formParam = new FormParam();

        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        // var viewerParam = new ViewerParam();
        // var viewerParam = new ViewerParam();
        // viewerParam.add("viewer.zoom","100");
        // viewerParam.add("print.mode","silent");		//프린트 설정창 없게...
        // viewerParam.add("viewer.mode","preview");	//미리보기
        // viewerParam.add("viewer.mode","print");		//미리보기 없이 바로 출력
        // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....
        // cfOZPreview( "/ds/op/wrkplan/transwrkplan/op_202_02_04r.ozr", odiParam, viewerParam, formParam ) ;
        break;
      case 3:
        if ($c.gus.cfIsNull($p, v_odrNo)) {
          await $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
          return;
        }
        // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        // var odiParam = new ODIParam("op_202_02_03r");
        // odiParam.add("odrNo", v_odrNo);

        // formParam.add("form1","폼1");
        // var formParam = new FormParam();

        // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
        // var viewerParam = new ViewerParam();
        // var viewerParam = new ViewerParam();
        // viewerParam.add("viewer.zoom", "100");
        // viewerParam.add("print.mode","silent"); // 프린트 설정창 없게...
        // viewerParam.add("viewer.mode","preview"); // 미리보기
        // viewerParam.add("viewer.mode","print"); // 미리보기 없이 바로 출력
        // viewerParam.add("viewer.useprogressbar","false"); // PROGRESSBAR 안보이게....
        // cfOZPreview("/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr", odiParam, viewerParam, formParam);

        let data = {
          odiName: "op_202_02_03r",
          reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
          odiParam: {
            odrNo: v_odrNo
          },
          viewerParam: {
            useprogressbar: true,
            // 프로그레스바 쓸지 말지
            zoom: 100 // 배율 설정
          },
          formParam: {}
        };
        scwin.openPopup(data);
        break;
      case 4:
        var checkCnt = 0;
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (scwin.f_IsSelected(i)) {
            checkCnt++;
          }
        }
        if (checkCnt == 0) {
          await $c.gus.cfAlertMsg($p, "일괄 발행할 오더를 선택하십시요.");
          return;
        }
        $c.gus.OZStartBatch($p);
        var printCnt = 0;
        var firstOdrNo = "";
        var chkOdrNo = "";
        for (var i = 0; i < ds_results.getRowCount(); i++) {
          if (ds_results.getCellData(i, "chk") == "T") {
            v_odrNo = ds_results.getCellData(i, "odrNo");
            if (printCnt == 0) firstOdrNo = v_odrNo;
            if (chkOdrNo == v_odrNo) continue;
            if (chkOdrNo !== v_odrNo) chkOdrNo = v_odrNo;
            // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
            // var odiName = "op_202_02_03r";
            // var odiParam = new ODIParam(odiName);
            // odiParam.add("odrNo", v_odrNo);

            // var formParam = new FormParam();

            // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
            // var viewerParam = new ViewerParam();
            // viewerParam.add("viewer.zoom", "100");
            // viewerParam.add("print.mode", "silent");				//프린트 설정창 없게...
            // viewerParam.add("viewer.mode", "print");				//미리보기 없이 바로 출력
            // viewerParam.add("viewer.useprogressbar", "false");	//PROGRESSBAR 안보이게....

            // cfOZPreview("/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr", odiParam, viewerParam, formParam);

            let data = {
              odiName: "op_202_02_03r",
              reportName: "/ds/op/wrkplan/transwrkplan/op_202_02_03r.ozr",
              odiParam: {
                odrNo: v_odrNo
              },
              viewerParam: {
                zoom: 100,
                // 배율 설정
                mode: "print",
                useprogressbar: false,
                // 프로그레스바 쓸지 말지
                printmode: "silent"
              },
              formParam: {}
            };
            await scwin.openPopup(data);
            printCnt++;
          }
        }
        //OZExecuteBatch();

        if (printCnt == 1) await $c.win.alert($p, firstOdrNo + "의 오더Sheet를 프린터로 전송했습니다.");
        if (printCnt > 1) await $c.win.alert($p, firstOdrNo + "외에 " + (printCnt - 1) + "건의 오더Sheet를 프린터로 전송했습니다.");
        break;
      default:
        break;
    }
  }
};

//-------------------------------------------------------------------------
//셔틀윤송잔여물량조회
//-------------------------------------------------------------------------
scwin.f_retrievePopup = async function () {
  if (ds_results.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "셔틀운송작업물량차량조회를 먼저 하십시요");
  } else {
    let args = {};
    args.cargoClsCd = acb_lc_cargoClsCd.getValue();
    args.lobranCd = acb_lc_lobranCd.getValue();
    args.odrKndCd = acb_lc_odrKndCd.getValue();
    args.odrNo = ed_em_odrNo.getValue().trim();
    args.vsslCd = ed_em_vsslCd.getValue().trim();
    args.portcnt = ed_em_portcnt.getValue().trim();
    args.dptDistrictCd = acb_lc_dptDistrictCd.getValue();
    args.arvDistrictCd = acb_lc_arvDistrictCd.getValue();
    args.dptWrkPlCd = ed_em_dptWrkPlCd.getValue().trim();
    args.arvWrkPlCd = ed_em_arvWrkPlCd.getValue().trim();
    args.wrkStDt = ed_em_wrkStDt.getValue().trim();
    args.wrkEndDt = ed_em_wrkEndDt.getValue().trim();
    args.wrkDtClsCd = acb_lc_wrkDtClsCd.getValue();
    args.alloccarPicId = ed_em_alloccarPicId.getValue().trim();
    args.lineCd = ed_lineCd.getValue().trim();
    args.dptNowWrkPlCd = ed_em_dptNowWrkPlCd.getValue().trim();
    args.picConfirmYn = "";
    await $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_07p.xml", {
      width: 700,
      height: 420,
      modal: true,
      data: args
    });
  }
};
scwin.f_openPopUpGrid = function (disGubun, row, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  scwin.currow = row;
  switch (disGubun) {
    case "shtlVehclClntNo":
      udc_comCode.cfCommonPopUp(scwin.callback_shtlVehclClntNo, ds_results.getCellData(row, "shtlVehclClntNo") // 코드
      , ds_results.getCellData(row, "shtlVehclClntNm") // 코드명
      , pWinCloseTF // 결과가 1건 일때	원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색	결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 -	default	(2)
      , null // Title순서
      , null // 보여주는	각 컬럼들의	폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , DsConstants.PCHS_CLNT_CLS_CD_HIRECAR // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때	원도우의	사용자 정의	폭
      , null // POP-UP뛰을때	우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "협력업체,협력업체코드/명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data	건수가 0 일때 Window를 뛰우지 않음 리턴	: ""
      );
      break;
    default:
      break;
  }
};
scwin.callback_shtlVehclClntNo = function (rtnList) {
  if (typeof rtnList != "undefined") {
    if (rtnList != null && rtnList[0] != "N/A") {
      ds_results.setCellData(scwin.currow, "shtlVehclClntNo", rtnList[0]);
      ds_results.setCellData(scwin.currow, "shtlVehclClntNm", rtnList[1]);
    } else {
      ds_results.setCellData(scwin.currow, "shtlVehclClntNo", "");
      ds_results.setCellData(scwin.currow, "shtlVehclClntNm", "");
    }
  }
};

// 셔틀잔여물량조회 버튼 (팝업)
scwin.btn_retrievePopup_onclick = function (e) {
  if (scwin.RetrieveFlag == false) {
    $c.gus.cfAlertMsg($p, "셔틀운송작업물량차량조회를 먼저 하십시요");
  } else {
    var args = new Array();
    args[0] = acb_lc_cargoClsCd.getValue();
    args[1] = acb_lc_lobranCd.getValue();
    args[2] = acb_lc_odrKndCd.getValue();
    args[3] = ed_em_odrNo.getValue().trim();
    args[4] = ed_em_vsslCd.getValue().trim();
    args[5] = ed_em_portcnt.getValue().trim();
    args[6] = acb_lc_dptDistrictCd.getValue();
    args[7] = acb_lc_arvDistrictCd.getValue();
    args[8] = ed_em_dptWrkPlCd.getValue().trim();
    args[9] = ed_em_arvWrkPlCd.getValue().trim();
    args[10] = ed_em_wrkStDt.getValue().trim();
    args[11] = ed_em_wrkEndDt.getValue().trim();
    args[12] = acb_lc_wrkDtClsCd.getValue();
    args[13] = ed_em_alloccarPicId.getValue().trim();
    args[14] = ed_lineCd.getValue().trim();
    args[15] = ed_em_dptNowWrkPlCd.getValue().trim();
    args[16] = acb_lc_picConfirmYn.getValue();

    //window.showModalDialog('/ds/op/wrkplan/transwrkplan/op_202_02_07p.jsp',args,"dialogWidth:700px; dialogHeight:420px; status:No");

    var data = {
      paramTitle: "",
      args: args,
      callbackFn: scwin.btn_retrievePopup_callBackFunc
    };
    var opts = {
      id: "smpPop",
      popupName: "셔틀운송 재고물량 컨테이너정보조회",
      modal: true,
      type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
      ,

      title: "Win pop" //Layer pop
      ,

      width: 700,
      height: 420
    };
    $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_07p.xml", opts, data);
  }
};

//-------------------------------------------------------------------------
// 신규 프린트
// 오더SHEET는 현재 화면에서 진행하므로 이전 함수 호출
// CNTR LOADING LIST, CNTR DISCHARGING LIST는 팝업화면으로 파라메터 전달
//-------------------------------------------------------------------------
// CNTR LOADING LIST
scwin.btn_print1_onclick = function (e) {
  scwin.f_printNew(1);
};
// CNTR DISCHARGING LIST
scwin.btn_print2_onclick = function (e) {
  scwin.f_printNew(2);
};
// 오더SHEET
scwin.btn_print3_onclick = function (e) {
  scwin.f_printNew(3);
};
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

// UDC 공통팝업 (선박)
scwin.udc_vsslCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_em_vsslCd.getValue(), '', 'T', 'T');
};
scwin.udc_vsslCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, '', txt_vsslNm.getValue(), 'T', 'T');
};
scwin.udc_vsslCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_em_vsslCd.getValue(), txt_vsslNm.getValue(), 'F', 'T');
};

// UDC 공통팝업 (출발지)
scwin.udc_dptWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_em_dptWrkPlCd.getValue(), '', 'T', 'T');
};
scwin.udc_dptWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, '', txt_dptWrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_dptWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_em_dptWrkPlCd.getValue(), txt_dptWrkPlNm.getValue(), 'F', 'T');
};

// UDC 공통팝업 (도착지)
scwin.udc_arvWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_em_arvWrkPlCd.getValue(), '', 'T', 'T');
};
scwin.udc_arvWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(3, '', txt_arvWrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_arvWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_em_arvWrkPlCd.getValue(), txt_arvWrkPlNm.getValue(), 'F', 'T');
};

// UDC 공통팝업 (Line)
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_lineCd.getValue(), '', 'T', 'T');
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(4, '', txt_lineNm.getValue(), 'T', 'T');
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'T');
};

// UDC 공통팝업 (배차담당자)
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_em_alloccarPicId.getValue(), '', 'T', 'T');
};
scwin.udc_alloccarPicId_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(5, '', txt_alloccarPicNm.getValue(), 'T', 'T');
};
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_em_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), 'F', 'T');
};

// UDC 공통팝업 (현위치)
scwin.udc_dptNowWrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_em_dptNowWrkPlCd.getValue(), '', 'T', 'T');
};
scwin.udc_dptNowWrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(6, '', txt_dptNowWrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_dptNowWrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_em_dptNowWrkPlCd.getValue(), txt_dptNowWrkPlNm.getValue(), 'F', 'T');
};
scwin.acb_lc_cvsslOdrCls_onviewchange = function (info) {
  // ds_results.filter();
  // cfShowTotalRows(totalRows, ds_results.CountRow);

  scwin.f_onFilter();
  totalRows.setValue(ds_results.getRowCount());
};

//필터1
scwin.acb_lc_picConfirmYn_onviewchange = function (info) {
  scwin.f_onFilter();
  totalRows.setValue(ds_results.getRowCount());
};

//필터2
scwin.acb_lc_completeYn_onviewchange = function (info) {
  scwin.f_onFilter();
  totalRows.setValue(ds_results.getRowCount());
};

//-------------------------------------------------------------------------
// 선택된 행인지 여부를 반환
//-------------------------------------------------------------------------
scwin.f_IsSelected = function (row) {
  if (row < 0) return false;
  if (ds_results.getCellData(row, "chk") == "T") {
    return true;
  } else {
    return false;
  }
};
scwin.acb_lc_lobranCd_onviewchange = function () {
  if (acb_lc_lobranCd.getValue() == DsConstants.UPPER_LOBRAN_CD_BUSAN) {
    //부산매입권역
    scwin.f_districtSearch("2");
  } else {
    scwin.f_districtSearch("1");
  }
};

//-------------------------------------------------------------------------
// DataSet & Grid 이벤트
//-------------------------------------------------------------------------
scwin.ds_results_onrowpositionchange = function (rowIndex, oldRow) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  if (scwin.isRetrieve) {
    return;
  }
  scwin.f_retrieve(2);
};
scwin.gr_results_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {};
scwin.gr_results_onrowindexchange = function (rowIndex, oldRow) {};
scwin.gr_results_oncellclick = async function (rowIndex, columnIndex, columnId) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  let colid = gr_results.getColumnID(columnIndex);
  if (colid == "picConfirmYn") {
    ds_results.setCellData(ds_results.getRowPosition(), "alloccarPicId", scwin.loginUserId);
    ds_results.setCellData(ds_results.getRowPosition(), "alloccarPicNm", scwin.loginUserNm);
    for (var i = 0; i < ds_results.getRowCount(); i++) {
      if (ds_results.getCellData(i, "picConfirmYn") == "1") {
        gr_results.setCellBackgroundColor(i, "odrNo", "yellow");
      } else if (ds_results.getCellData(i, "picConfirmYn") == "0") {
        gr_results.setCellBackgroundColor(i, "odrNo", "#ffffff");
      }
    }
  }
  var orderNo = "";
  if (colid == "grouporderYn") {
    orderNo = ds_results.getCellData(ds_results.getRowPosition(), "odrNo");
    orderNo = orderNo.substring(1, 2);
    if (orderNo != "CT") {
      await $c.win.alert($p, "CT오더만 그룹오더 체크하실 수 있습니다.");
      ds_results.setCellData(ds_results.getRowPosition(), "grouporderYn", 0);
    }
  }
  spn_rmk.setValue(ds_results.getCellData(ds_results.getRowPosition(), "rmk"));
  //spn_rmk.style.textDecoration = "none";
};
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  let colid = gr_results.getColumnID(columnIndex);
  if (colid == "odrNo") {
    // 오더세부사항 조회 
    scwin.f_orderDetail();
  }
};
scwin.gr_results_ontextimageclick = function (rowIndex, columnIndex) {
  var colId = gr_results.getColumnID(columnIndex);
  switch (colId) {
    case "shtlVehclClntNo":
      scwin.f_openPopUpGrid("shtlVehclClntNo", rowIndex, "F", "F", "F");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// function name : f_customFormatter
// function desc : Grid(gr_results) 내 Column 의 Value 를 Decode 해서 Return 한다.
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let columnId = gr_results.getColumnID(colIndex);
  let rtnVal = "";
  if (columnId == "rettlYn") {
    //Color={Decode(cntrNoYn,0,Decode(crryinoutClsCd,"<%=DsConstants.CRRYINOUT_CLS_CD_IN%>","blue"),1,Decode(selfClsCd,"JE","",Decode(indvdlAlloccarYn,"<%=DsConstants.INDVDL_ALLOCCAR_TEMPORARY%>",Decode(wrkStpCd,"<%=DsConstants.WRK_STP_CD_SHUTTLE%>","",Decode(crryinoutClsCd,"<%=DsConstants.GATE_INOUT_CLS_CD_OUT%>",Decode(odrKndCd,"<%=DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR%>",Decode(chkFlag,"I","blue")))))))} Cursor={Decode(cntrNoYn,0,Decode(crryinoutClsCd,"<%=DsConstants.CRRYINOUT_CLS_CD_IN%>","Ibeam"),1,Decode(selfClsCd,"JE","",Decode(indvdlAlloccarYn,"<%=DsConstants.INDVDL_ALLOCCAR_TEMPORARY%>",Decode(wrkStpCd,"<%=DsConstants.WRK_STP_CD_SHUTTLE%>","",Decode(crryinoutClsCd,"<%=DsConstants.GATE_INOUT_CLS_CD_OUT%>",Decode(odrKndCd,"<%=DsConstants.ODR_KND_CD_IMP_GNRL_CNTR_ODR%>",Decode(chkFlag,"I","Ibeam")))))))}
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  }
  return rtnVal;
};

//-------------------------------------------------------------------------
// function name : f_customFormatter2
// function desc : Grid(gr_results2) 내 Column 의 Value 를 Decode 해서 Return 한다.
//-------------------------------------------------------------------------
scwin.f_customFormatter2 = function (data, formattedData, rowIndex, colIndex) {
  let columnId = gr_results2.getColumnID(colIndex);
  let rtnVal = "";
  if (columnId == "xrayLupTrgtYn") {
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  } else if (columnId == "rettlYn") {
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  } else if (columnId == "socYn") {
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  } else if (columnId == "leaseYn") {
    rtnVal = $c.gus.decode($p, data, "1", "Y", "N");
  }
  return rtnVal;
};

/* 선택에 따른 그리드 데이터 필터링 */
scwin.f_onFilter = function () {
  let condition = "";
  ds_results.removeColumnFilterAll();
  if (acb_lc_cvsslOdrCls.getValue() == "0") {
    // [ !(오더종류 in (C1,C3,CT,CS,CW)) ] 본선오더가 아닌오더를 필터링
    condition = "odrKndCd != '" + DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR + "'" + " && odrKndCd != '" + DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR + "'" + " && odrKndCd != '" + DsConstants.ODR_KND_CD_TS_ODR + "'" + " && odrKndCd != '" + DsConstants.ODR_KND_CD_CY_IMP_TS_ODR + "'" + " && odrKndCd != '" + DsConstants.ODR_KND_CD_CY_EXP_TS_ODR + "'";
    // ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
  } else if (acb_lc_cvsslOdrCls.getValue() == "1") {
    // [ 오더종류 in (C1,C3,CT,CS,CW) ] 본선오더를 필터링
    condition = "odrKndCd == '" + DsConstants.ODR_KND_CD_IMP_CVSSL_CNTR_ODR + "'" + " || odrKndCd == '" + DsConstants.ODR_KND_CD_EXP_CVSSL_CNTR_ODR + "'" + " || odrKndCd == '" + DsConstants.ODR_KND_CD_TS_ODR + "'" + " || odrKndCd == '" + DsConstants.ODR_KND_CD_CY_IMP_TS_ODR + "'" + " || odrKndCd == '" + DsConstants.ODR_KND_CD_CY_EXP_TS_ODR + "'";
    // ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
  }

  // 배차담당자확인여부
  if (acb_lc_picConfirmYn.getValue() == "0") {
    condition = "picConfirmYn != '1'";
    // ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
  } else if (acb_lc_picConfirmYn.getValue() == "1") {
    condition = "picConfirmYn != '0'";
    // ds_results.removeColumnFilterAll();
    $c.data.dataListFilter($p, ds_results, condition);
  }

  // 완료여부
  if (acb_lc_completeYn.getValue() == "0") {
    //미완료
    condition = "cntrSizCd5 != '0' || cntrSizCd6 != '0'";
    $c.data.dataListFilter($p, ds_results, condition);
  } else if (acb_lc_completeYn.getValue() == "1") {
    //완료
    condition = "cntrSizCd5 == '0' && cntrSizCd6 == '0'";
    $c.data.dataListFilter($p, ds_results, condition);
  }
};
scwin.input_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.btn_inbound_onclick = function (e) {
  const v_lobranCd = acb_lc_lobranCd.getValue();
  const v_completeYn = acb_lc_completeYn.getValue();
  const v_arvWrkPlCd = ed_em_arvWrkPlCd.getValue();
  let v_wrkStDt = ed_em_wrkStDt.getValue();
  let v_wrkEndDt = ed_em_wrkEndDt.getValue();
  var data = {
    lobranCd: v_lobranCd,
    completeYn: v_completeYn,
    arvWrkPlCd: v_arvWrkPlCd,
    wrkStDt: v_wrkStDt,
    wrkEndDt: v_wrkEndDt
  };
  var opts = {
    id: "op_202_02_40p",
    popupName: "입고 조회 팝업",
    modal: true,
    type: "browserPopup" //화면 오픈 타입 ("pageFramePopup", "browserPopup")
    ,

    title: "입고 조회 팝업" //Layer pop
    ,

    width: 1000,
    height: 700
  };
  $c.win.openPopup($p, "/ui/ds/op/wrkplan/transwrkplan/op_202_02_40p.xml", opts, data);
};
scwin.formatDateTime = function (value, formatval, rowIdx, colIdx) {
  if (!value || value.length < 8) return value;
  const colId = gr_results.getColumnID(colIdx);
  let hhmm = "";
  if (colId === "wrkStDt") {
    hhmm = ds_results.getCellData(rowIdx, "wrkStHh");
  } else if (colId === "wrkEndDt") {
    hhmm = ds_results.getCellData(rowIdx, "wrkEndHh");
  }
  const yy = value.substring(2, 4);
  const mm = value.substring(4, 6);
  const dd = value.substring(6, 8);
  const datePart = yy + "/" + mm + "/" + dd;
  let timePart = "";
  if (hhmm && hhmm.length >= 4) {
    timePart = hhmm.substring(0, 2) + ":" + hhmm.substring(2, 4);
  }
  return datePart + " " + timePart;
};
scwin.fn_applyFilter = function () {
  const allData = ds_results_temp.getAllJSON();
  const v_cvssl = acb_lc_cvsslOdrCls.getValue();
  const v_pic = acb_lc_picConfirmYn.getValue();
  const v_comp = acb_lc_completeYn.getValue();
  const targetOdrKnds = ["C1", "C3", "CT", "CS", "CW"];
  const filteredData = allData.filter(item => {
    let isMatch = true;
    if (v_cvssl === "1") {
      isMatch = isMatch && targetOdrKnds.includes(item.odrKndCd);
    } else if (v_cvssl === "0") {
      isMatch = isMatch && !targetOdrKnds.includes(item.odrKndCd);
    }
    if (v_pic !== "") {
      isMatch = isMatch && item.picConfirmYn == v_pic;
    }
    if (v_comp === "1") {
      isMatch = isMatch && item.cntrSizCd5 == 0 && item.cntrSizCd6 == 0;
    } else if (v_comp === "0") {
      isMatch = isMatch && (item.cntrSizCd5 != 0 || item.cntrSizCd6 != 0);
    }
    return isMatch;
  });
  ds_results.setJSON(filteredData);
};
scwin.gr_results_onafteredit = function (rowIndex, columnIndex, value) {
  var colId = gr_results.getColumnID(columnIndex);
  switch (colId) {
    case "shtlVehclClntNo":
      scwin.f_openPopUpGrid("shtlVehclClntNo", rowIndex, "T", "F", "F");
      break;
    default:
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cargoClsCd',search:'start',style:'width:110px;',submenuSize:'auto',ref:'data:dma_search.cargoClsCd',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',mandatory:'true',title:'배차점소','ev:onviewchange':'scwin.acb_lc_lobranCd_onviewchange',visibleRowNum:'15'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_odrKndCd',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:dma_search.odrKndCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_lc_wrkDtClsCd',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.wrkDtClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더확정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'작업예정일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkDt',refDataMap:'dma_search',refEdDt:'wrkEndDt',refStDt:'wrkStDt',style:'',edFromId:'ed_em_wrkStDt',edToId:'ed_em_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_dptWrkPlCd',nameId:'txt_dptWrkPlNm',btnId:'btn_dptWrkPlCd',id:'udc_dptWrkPlCd',refDataCollection:'dma_search',code:'dptWrkPlCd',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_dptWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptWrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptWrkPlCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_arvWrkPlCd',nameId:'txt_arvWrkPlNm',btnId:'btn_arvWrkPlCd',id:'udc_arvWrkPlCd',refDataCollection:'dma_search',code:'arvWrkPlCd',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_arvWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_arvWrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_arvWrkPlCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_em_odrNo',placeholder:'',style:'width:230px;',ref:'data:dma_search.odrNo',allowChar:'a-zA-Z0-9',maxlength:'13','ev:onkeyup':'scwin.input_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업권역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group',style:'width:230px;'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lc_dptDistrictCd',class:'',ref:'data:dma_search.dptDistrictCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'acb_lc_arvDistrictCd',class:'',ref:'data:dma_search.arvDistrictCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_alloccarPicId',nameId:'txt_alloccarPicNm',btnId:'btn_alloccarPicId',id:'udc_alloccarPicId',refDataCollection:'dma_search',code:'alloccarPicId',allowCharCode:'a-zA-Z0-9',maxlengthCode:'8','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_alloccarPicId_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박명 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_vsslCd',nameId:'txt_vsslNm',btnId:'btn_vsslCd',id:'udc_vsslCd',refDataCollection:'dma_search',code:'vsslCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onblurCodeEvent':'scwin.udc_vsslCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vsslCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_vsslCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차/항로',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_em_portcnt',placeholder:'',style:'width:230px;',ref:'data:dma_search.portcnt',allowChar:'a-zA-Z0-9',maxlength:'10','ev:onkeyup':'scwin.input_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선오더',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_cvsslOdrCls',search:'start',style:'width:230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.acb_lc_cvsslOdrCls_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본선오더'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'본선오더제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자확인',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_picConfirmYn',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_search.picConfirmYn','ev:onviewchange':'scwin.acb_lc_picConfirmYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확인'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'완료여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_completeYn',search:'start',style:'width:110px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.acb_lc_completeYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',btnId:'btn_lineCd',id:'udc_lineCd',code:'lineCd',refDataCollection:'dma_search',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현위치',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_em_dptNowWrkPlCd',nameId:'txt_dptNowWrkPlNm',btnId:'btn_dptNowWrkPlCd',id:'udc_dptNowWrkPlCd',code:'dptNowWrkPlCd',refDataCollection:'dma_search',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_dptNowWrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_dptNowWrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_dptNowWrkPlCd_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송물량',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'spn_rmk',label:'',class:'txt-blue'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdResults',gridID:'gr_results',gridUpYn:'N',gridDownFn:'scwin.excel0'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',id:'gr_results',visibleRowNum:'4',class:'wq_gvw',fixedColumn:'1','ev:oncellindexchange':'scwin.gr_results_oncellindexchange','ev:onrowindexchange':'scwin.gr_results_onrowindexchange','ev:oncellclick':'scwin.gr_results_oncellclick','ev:oncelldblclick':'scwin.gr_results_oncelldblclick','ev:ontextimageclick':'scwin.gr_results_ontextimageclick',rowStatusVisible:'true',dataDragSelect:'false',rowStatusWidth:'20','ev:onafteredit':'scwin.gr_results_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'오더종류',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'column13',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'97',inputType:'text',id:'column9',value:'출발지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column3',value:'도착지',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'반짝임',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'하선마감일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'입출항일',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'야적일',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column67',value:'담당자',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'협력업체',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',value:'협력업체명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'확인',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'LINE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column55',value:'오더',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column49',value:'배차',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column43',value:'잔량',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'출발예정<br/>일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'도착예정<br/>일시',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'선박항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column91',value:'CY선적코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'양하선박항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column79',value:'TS선박항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'검색기<br/>포함여부',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column76',value:'MRN',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'출발권역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'도착권역',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column95',value:'그룹오더',displayMode:'label',rowSpan:'2',class:'txt-blue'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column93',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column92',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column911',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column90',value:'40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',value:'20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column88',value:'40',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',valueType:'other',trueValue:'T',falseValue:'F'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrKndNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'odrNo',displayMode:'label',class:'',style:'cursor: pointer;',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'97',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'twinkleYn',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'arrvlportDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arDepPortDd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'opswgDd',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'alloccarPicId',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'shtlVehclClntNo',displayMode:'label',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shtlVehclClntNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',id:'picConfirmYn',displayMode:'label',checkAlways:'true',valueType:'other',falseValue:'0',trueValue:'1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lineCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd1',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd2',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd3',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd4',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd5',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd6',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',readOnly:'true',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStDt',displayMode:'label',readOnly:'true',dataType:'text',customFormatter:'scwin.formatDateTime'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkEndDt',displayMode:'label',readOnly:'true',dataType:'text',customFormatter:'scwin.formatDateTime'}},{T:1,N:'w2:column',A:{width:'120',inputType:'',id:'vsslCd_portcnt',displayMode:'label',textAlign:'left',readOnly:'true',dataType:'text'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'tmlPortcnt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cyShippingCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ts_vsslCd_portcnt',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rettlYn',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mrn',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDistrictNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'checkbox',id:'grouporderYn',displayMode:'label',checkAlways:'true',valueType:'other',falseValue:'0',trueValue:'1'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'odrKndNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column148',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column147',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',style:'',id:'column146',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'97',inputType:'text',style:'',id:'column145',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column144',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column143',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column142',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column137',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column134',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd1\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column133',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd2\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd3\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column131',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd4\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column130',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd5\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column129',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd6\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'115',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'97',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column57',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd1\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column54',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd2\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column51',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd3\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column48',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd4\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd5\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column42',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0',expression:'sum(\'cntrSizCd6\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column97',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridID:'gr_results2',btnUser:'N',id:'udc_topGrdResults2',gridUpFn:'scwin.f_excelUpload',gridDownFn:'scwin.excel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results2',id:'gr_results2',style:'',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700',readOnly:'true','ev:onfilereadend':'scwin.gr_results2_excel_onfilereadend',rowStatusVisible:'true',rowStatusWidth:'20',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'CNTR NO',width:'125'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',value:'야드위치',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column101',inputType:'text',value:'모선항차',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column103',inputType:'text',value:'선사코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column105',inputType:'text',value:'상태',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column47',inputType:'text',value:'B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'WEIGHT',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'검색기<br/>오더',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'SOC',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'LES',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'PORT',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',value:'현재위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'반납<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'반납COPINO<br/>전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',value:'온도',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'위험물',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'출발권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'도착권역',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'도착지',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'125',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'yardLoc',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shipCd',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'operCd',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'curStat',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'weight',inputType:'text',width:'80',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',width:'80',customFormatter:'scwin.f_customFormatter2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rettlYn',inputType:'text',width:'80',customFormatter:'scwin.f_customFormatter2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',width:'70',customFormatter:'scwin.f_customFormatter2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'leaseYn',displayMode:'label',customFormatter:'scwin.f_customFormatter2'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'destPortCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'currPosNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rtYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'rtCopinoYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'temper',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dangerCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptDistrictNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvDistrictNm',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'',id:'gr_excelResults',style:'display: none;',visibleRowNum:'5',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'CNTR NO',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'야드위치',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'모선항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'선사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'상태',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'SEAL NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'F/E',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'WEIGHT',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'검색기<br/>대상',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'검색기<br/>오더',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'SOC',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',value:'LES',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',value:'PORT',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',value:'현재위치',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',value:'온도',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'위험물',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column29',inputType:'text',value:'출발권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column27',inputType:'text',value:'도착권역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'도착지',width:'80'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column18',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column16',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column14',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column12',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column10',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column8',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column20',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column40',inputType:'text',textAlign:'left',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',textAlign:'left',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',textAlign:'left',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',textAlign:'left',width:'80'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_retrievePopup',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_retrievePopup_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'셔틀잔여물량조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print3',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'오더SHEET'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print1',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print1_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'CNTR LOADING LIST'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_print2',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_print2_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'CNTR DISCHARGING LIST'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_goWrkIndict',label:'저장',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_goWrkIndict_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'셔틀운송작업지시등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'운송차량',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',gridID:'gr_results1',id:'udc_topGrdResults1',gridUpYn:'N',gridDownFn:'scwin.excel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results1',id:'gr_results1',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'협력업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'샤시종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'소속구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'권역',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'기사명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'TRS',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'휴대폰',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'샤시번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKnd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chassisKnd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'posnClsNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'logisWrkDistrictNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'drvNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'trsNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mpNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'chassisNo',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows1',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCarKindClntInfo_tpro',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none',btnId:'btn_comCode',id:'udc_comCode'}}]}]}]}]}]})