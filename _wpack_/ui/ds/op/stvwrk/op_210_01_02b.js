/*amd /ui/ds/op/stvwrk/op_210_01_02b.xml 99842 9eb95fcd4488afc0f7d5d32a27d6af2f4c9bad15b56a3eabdf14106e444a0bab */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStDt',name:'입항예정일자 from',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvEndDt',name:'입항예정일자 to',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cfMan',name:'치프포맨',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stvWrkIndictNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_cvsslInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslNm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commTxt',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioClsNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'berthNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etaDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etdDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdInfo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSeq',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfmanEmpNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslFmanCnt',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'groundFmanCnt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name16',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'bfWrkStpCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfEqKndCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfEqNrmCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqKndCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_hold',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'holdNo',name:'HOLD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(Ton)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'number',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_man',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdCd',name:'직종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnt',name:'수',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'plClsCd',name:'지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifest',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrBulkClsCd',name:'컨테이너벌크구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'MasterB/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량(Ton)',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'cbm',name:'CBM',dataType:'text',defaultValue:'0'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_plan',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStHh',name:'시작',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndHh',name:'종료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planQty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planWt',name:'중량(Ton)',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'planCbm',name:'CBM',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkKndCd',name:'작업방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'gang',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'운송',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'transKndCd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsGubun',name:'실적',dataType:'number',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslPlanYn',name:'name36',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_state',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stvWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'시프트',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndCd',name:'작업방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkGangCnt',name:'GANG',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'transInfo',name:'운송',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffInfo',name:'인원',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqInfo',name:'장비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkKndNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCnt',name:'name21',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkStpCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqNrmCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cvsslInfo',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'vsslNm',name:'name1'}},{T:1,N:'w2:key',A:{dataType:'text',id:'lineNm',name:'name2'}},{T:1,N:'w2:key',A:{dataType:'text',id:'shpCoClntNm',name:'name3'}},{T:1,N:'w2:key',A:{dataType:'text',id:'callNo',name:'name4'}},{T:1,N:'w2:key',A:{dataType:'text',id:'commTxt',name:'name5'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ioClsNm',name:'name6'}},{T:1,N:'w2:key',A:{dataType:'text',id:'berthNm',name:'name7'}},{T:1,N:'w2:key',A:{dataType:'text',id:'etaDt',name:'name8'}},{T:1,N:'w2:key',A:{dataType:'text',id:'etdDt',name:'name9'}},{T:1,N:'w2:key',A:{dataType:'text',id:'holdInfo',name:'name10'}},{T:1,N:'w2:key',A:{dataType:'text',id:'wrkSeq',name:'name11'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cfmanEmpNo',name:'name12'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cfmanEmpNm',name:'name13'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cvsslFmanCnt',name:'name14'}},{T:1,N:'w2:key',A:{dataType:'text',id:'groundFmanCnt',name:'name15'}},{T:1,N:'w2:key',A:{dataType:'text',id:'cvsslMgntNo',name:'name16'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveCvsslStvWrkPlanListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_manifest","key":"OUT_DS2"},{"id":"ds_hold","key":"OUT_DS3"},{"id":"ds_plan","key":"OUT_DS4"},{"id":"ds_state","key":"OUT_DS5"}]',target:'data:json,[{"id":"ds_cvsslInfo","key":"OUT_DS1"},{"id":"ds_manifest","key":"OUT_DS2"},{"id":"ds_hold","key":"OUT_DS3"},{"id":"ds_plan","key":"OUT_DS4"},{"id":"ds_state","key":"OUT_DS5"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveMan',action:'/ds.op.stvwrk.RetrieveStvWrkIndictManInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_man","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_man","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEq',action:'/ds.op.stvwrk.RetrieveStvWrkIndictEqInfoListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition2","key":"IN_DS1"},{"id":"ds_eq","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.stvwrk.SaveStvWrkPlanTargetInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cvsslInfo","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ds.op.stvwrk.SaveStvHoldVolumeWrkPlanCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_hold","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_save3',action:'/ds.op.stvwrk.SaveStvWrkIndictCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_plan","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_saveMan',action:'/ds.op.stvwrk.SaveStvWrkIndictManInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_man","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_saveEq',action:'/ds.op.stvwrk.SaveStvWrkIndictEqInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_eq","key":"IN_DS1"}]',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveEqInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveLogisticsHeavyEquipByCommCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_eqKndCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eqKndCd","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submit':'scwin.submitPre'}},{T:1,N:'xf:submission',A:{id:'sbm_eqNrmCd',action:'/cm.zz.RetrieveCodeCMD.do?grpCd=OP325',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_eqNrmCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkStpCd',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do?upperWrkStpCd=01&lvl=3&wrkPlanTrgtYn=1',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_wrkStpCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  scwin.globalVars();

  // 그리드 콤보
  const codeOptions = [{
    method: 'getGridCombo',
    param1: 'SD060',
    param2: false,
    compID: 'gr_hold:impExpClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP117',
    param2: 1,
    param3: 'T',
    param4: false,
    compID: 'gr_plan:shiftClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP305',
    param2: false,
    compID: 'gr_plan:wrkKndCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP304',
    param2: false,
    compID: 'gr_plan:transKndCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP268',
    param2: false,
    compID: 'gr_man:occpgrdCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP323',
    param2: false,
    compID: 'gr_man:plClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP303',
    param2: false,
    compID: 'gr_eq:eqKndCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP117',
    param2: false,
    compID: 'gr_state:shiftClsCd'
  }, {
    method: 'getGridCombo',
    param1: 'OP305',
    param2: false,
    compID: 'gr_state:wrkKndCd'
  }];
  $c.data.setGauceUtil($p, codeOptions);
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const loginDTO = $c.data.getMemInfo($p); // 공통 세션 변수
  scwin.lobranCd = loginDTO.lobranCd; // 물류 점소 코드
  scwin.lobranNm = loginDTO.lobranNm; // 물류 점소 코드

  scwin.cvsslMgntNo = $c.data.getParameter($p, 'cvsslMgntNo') ?? '';
  scwin.curRow = '';
  scwin.oldData = '';
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = async function () {
  $c.gus.cfDisableObjects($p, [ed_vsslNm, ed_lineNm, ed_shpCoClntNm, ed_callNo, ed_commTxt, ed_ioClsNm, ed_berthNm, ica_etaDt, ica_etdDt, ed_holdInfo]);
  if (scwin.cvsslMgntNo != '' && scwin.cvsslMgntNo != null) {
    ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
  } else {
    ed_cvsslMgntNo.setValue('');
  }
  ;
  if (ed_cvsslMgntNo.getValue() != '') {
    scwin.f_Retrieve();
  }
  ;

  //중기 규격 콤보 
  await scwin.sbm_execute(sbm_eqNrmCd);

  //작업단계콤보 세팅
  await scwin.sbm_execute(sbm_wrkStpCd);

  // test data
  // ed_cvsslMgntNo.setValue('D0808584')
};

/**
 * @method 
 * @name f_SetDefaultData
 * @description Default Data Setting
 */
scwin.f_SetDefaultData = function () {
  $c.gus.cfDisableAllBtn($p);
};

/**
 * @method 
 * @name f_openPopUp
 * @description 본선관리번호검색 팝업창 띄우기
 */
scwin.f_openPopUp = async function () {
  let data = [ed_cvsslMgntNo.getValue(),
  //본선관리번호
  '' //수출입구분코드
  ];
  let options = {
    popupName: '본선관리번호검색팝업',
    width: '1100px',
    height: '620px'
  };
  let url = '/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml';
  const rtnValues = await $c.win.openPopup($p, url, options, data);

  // 1 - 선박코드 | 2 - 선박명 | 3 - 마감일자 | 4 - 마감시간
  // 5 - 도착(입항)일자 | 6 - 도착(입항)시간 
  // 7 - 출발(출항)일자 | 8 - 출발(출항)시간
  // 9 - 선사항차 | 10 - 항로 | 11 - 항구코드
  // 12 - 부두코드 | 12 - 부두코드명
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]); //본선관리번호
  }
  ;
};

/**
 * @method 
 * @name f_Retrieve
 * @description 조회 - 본선관리번호를 조건으로 조회
 */
scwin.f_Retrieve = async function () {
  // 검색조건 필수 입력 체크
  if (ed_cvsslMgntNo.getValue().trim() == '') {
    // 본선관리번호
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ['본선관리번호']); // '@은(는) 필수 입력 항목입니다.'
    ed_cvsslMgntNo.focus();
    return;
  }
  ;
  await scwin.sbm_execute(sbm_retrieve);
};

/**
 * @method 
 * @name sbm_execute
 * @description submission 처리
 */
scwin.sbm_execute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    await scwin.submitdone(e);
  }
  ;
};

/**
 * @method 
 * @name f_Retrieve2
 * @description 본선작업계획 투입가능인원 조회
 */
scwin.f_Retrieve2 = async function () {
  let stvWrkIndictNo = ds_plan.getCellData(ds_plan.getRowPosition(), 'stvWrkIndictNo');
  dma_condition2.set('stvWrkIndictNo', stvWrkIndictNo);
  await scwin.sbm_execute(sbm_retrieveMan);
  await scwin.sbm_execute(sbm_retrieveEq);
};

/**
 * @method 
 * @name f_Save
 * @description 저장 버튼 클릭
 */
scwin.f_Save = async function () {
  if (dma_cvsslInfo.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['본선정보']); // @은(는) 변경된 사항이 없습니다
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.sbm_execute(sbm_save);
};

/**
 * @method 
 * @name f_Save2
 * @description 저장 버튼 클릭
 */
scwin.f_Save2 = async function () {
  if (ds_hold.getModifiedIndex().length == 0) {
    // @은(는) 변경된 사항이 없습니다
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['Hold별 물량정보']);
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [gr_hold]))) return;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.sbm_execute(sbm_save2);
};

/**
 * @method 
 * @name f_Save3
 * @description 본선작업계획수립 저장 버튼 클릭 - 작업지시 생성
 */
scwin.f_Save3 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  let modifiedIndexs = ds_plan.getModifiedIndex();
  if (modifiedIndexs.length == 0) {
    // @은(는) 변경된 사항이 없습니다
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['본선작업계획 수립']);
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [gr_plan]))) return;
  for (let i = 0; i < modifiedIndexs.length; i++) {
    let rowIdx = modifiedIndexs[i];
    let rowData = ds_plan.getRowJSON(rowIdx);
    if (rowData['rsltsGubun'] == 1 && ds_plan.getRowStatus(rowIdx) != 0) {
      $c.win.alert($p, i + 1 + '번째 작업지시에 실적이 생성되었습니다. \n' + '실적이 생성된 작업지시는 수정/삭제할 수 없습니다.');
      return;
    }
    ;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.sbm_execute(sbm_save3);
};

/**
 * @method 
 * @name f_Save4
 * @description 인원 계획 저장
 */
scwin.f_Save4 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  if (ds_man.getModifiedIndex().length == 0) {
    // @은(는) 변경된 사항이 없습니다
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['인원계획']);
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [gr_man]))) return;
  if (ds_plan.getCellData(scwin.curRow, 'rsltsGubun') == 1) {
    $c.win.alert($p, scwin.curRow + 1 + '번째 작업지시에 실적이 생성되었습니다. \n' + '실적이 생성된 작업지시에 인원 정보를 수정할 수 없습니다.');
    return;
  }
  ;
  const retConfirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (!retConfirm) return;
  scwin.sbm_execute(sbm_saveMan);
};

/**
 * @method 
 * @name f_Save5
 * @description 장비계획 저장
 */
scwin.f_Save5 = async function () {
  scwin.curRow = ds_plan.getRowPosition();
  let chk = 0;
  if (ds_eq.getModifiedIndex().length == 0) {
    // @은(는) 변경된 사항이 없습니다
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ['장비계획']);
    return;
  }
  ;
  if (!(await $c.gus.cfValidate($p, [gr_eq]))) return;
  if (ds_plan.getCellData(scwin.curRow, 'rsltsGubun') == 1) {
    $c.win.alert($p, scwin.curRow + 1 + '번째 작업지시에 실적이 생성되었습니다. \n' + '실적이 생성된 작업지시에 장비 정보를 수정할 수 없습니다.');
    return;
  }
  ;
  let rowCnt = ds_eq.getRowCount();
  for (let i = 0; i < rowCnt; i++) {
    if (ds_eq.getCellData(i, 'cnt') == 0) {
      chk++;
    }
    ;
  }
  ;
  if (chk > 0) {
    const retConfirm = await $c.win.confirm($p, '대수가 0인 내역은 저장되지 않습니다.\n진행하시겠습니까?');
    if (!retConfirm) return;
  }
  ;
  scwin.sbm_execute(sbm_saveEq);
};

/**
 * @method 
 * @name f_AddRow
 * @description 행추가
 * @param {string} row
 */
scwin.f_AddRow = async function (row) {
  switch (row) {
    case '1':
      {
        let cvsslInfo = ds_cvsslInfo.getRowJSON(0);
        let insertIdx = ds_hold.insertRow();
        let insertData = {
          'cvsslMgntNo': cvsslInfo['cvsslMgntNo'],
          'holdNo': insertIdx + 1,
          'impExpClsCd': cvsslInfo['ioClsNm'] == '수입' ? 'I' : 'O'
        };
        ds_hold.setRowJSON(insertIdx, insertData, true);
        let columnID = gr_hold.getFocusedColumnID() ?? 'holdNo';
        gr_hold.setFocusedCell(insertIdx, columnID);
        break;
      }
      ;
    case '2':
      {
        let preRow = '';
        preRow = ds_plan.getRowCount() - 1;
        let originData = ds_cvsslInfo.getRowJSON(0);
        let insertIdx = ds_plan.insertRow();
        let columnIndex = gr_plan.getFocusedColumnIndex() ?? 0;
        gr_plan.setFocusedCell(insertIdx, columnIndex);
        let insertData = {
          cvsslMgntNo: originData['cvsslMgntNo'],
          cvsslPlanYn: 'Y'
        };
        if (insertData == 0) {
          insertData['wrkDt'] = ds_cvsslInfo.getCellData(0, 'etaDt').slice(0, 8);
          insertData['shiftClsCd'] = 'D';
          insertData['wrkStHh'] = '0800';
          insertData['wrkEndHh'] = '1700';
        } else {
          switch (ds_plan.getCellData(preRow, 'shiftClsCd')) {
            case 'D':
              insertData['wrkDt'] = ds_plan.getCellData(preRow, 'wrkDt');
              insertData['shiftClsCd'] = 'N';
              insertData['wrkStHh'] = '1900';
              insertData['wrkEndHh'] = '0100';
              break;
            case 'N':
              let strDate = ds_plan.getCellData(preRow, 'wrkDt');
              let strPayDate = $c.date.addDate($p, strDate, 1); //after 1days

              insertData['wrkDt'] = strPayDate;
              insertData['shiftClsCd'] = 'D';
              insertData['wrkStHh'] = '0800';
              insertData['wrkEndHh'] = '1700';
              break;
            default:
              break;
          }
          ;
        }
        ;
        ds_plan.setRowJSON(insertIdx, insertData, true);
        let columnID = gr_plan.getFocusedColumnID() ?? 'planQty';
        gr_plan.setFocusedCell(insertIdx, columnID);
        ds_man.removeAll();
        ds_eq.removeAll();
        break;
      }
      ;
    case '3':
      {
        let originData = ds_plan.getRowJSON(ds_plan.getRowPosition());
        if (ds_plan.getRowCount() == 0 || originData['stvWrkIndictNo'] == '') {
          $c.win.alert($p, '인원 계획 입력은 작업지시 등록 후 가능합니다.');
          return;
        }
        ;
        let insertIdx = ds_man.insertRow();
        let columnIndex = gr_man.getFocusedColumnIndex() ?? 0;
        gr_man.setFocusedCell(insertIdx, columnIndex);
        ds_man.setCellData(insertIdx, 'stvWrkIndictNo', originData['stvWrkIndictNo']);
        break;
      }
      ;
    case '4':
      {
        let originData = ds_plan.getRowJSON(ds_plan.getRowPosition());
        let insertIdx;
        if (ds_plan.getRowCount() == 0 || originData['stvWrkIndictNo'] == '') {
          $c.win.alert($p, '인원 계획 입력은 작업지시 등록 후 가능합니다.');
          return false;
        }
        ;
        insertIdx = ds_man.insertRow();
        ds_man.setCellData(insertIdx, 'stvWrkIndictNo', originData['stvWrkIndictNo']);
        ds_man.setCellData(insertIdx, 'occpgrdCd', '91');
        insertIdx = ds_man.insertRow();
        ds_man.setCellData(insertIdx, 'stvWrkIndictNo', originData['stvWrkIndictNo']);
        ds_man.setCellData(insertIdx, 'occpgrdCd', '92');
        let columnIndex = gr_man.getFocusedColumnIndex() ?? 0;
        gr_man.setFocusedCell(insertIdx, columnIndex);
        break;
      }
      ;
    case '5':
      {
        let originData = ds_plan.getRowJSON(ds_plan.getRowPosition());
        if (ds_plan.getRowCount() == 0 || originData['stvWrkIndictNo'] == '') {
          $c.win.alert($p, '장비 계획 입력은 작업지시 등록 후 가능합니다.');
          return false;
        }
        ;
        let insertIdx = ds_eq.insertRow();
        ds_eq.setCellData(insertIdx, 'stvWrkIndictNo', originData['stvWrkIndictNo']);
        ds_eq.setCellData(insertIdx, 'wrkStpCd', '005');
        let columnIndex = gr_eq.getFocusedColumnIndex() ?? 0;
        gr_eq.setFocusedCell(insertIdx, columnIndex);
        break;
      }
      ;
    case '6':
      {
        let originData = ds_plan.getRowJSON(ds_plan.getRowPosition());
        if (ds_plan.getRowCount() == 0 || originData['stvWrkIndictNo'] == '') {
          $c.win.alert($p, '장비 계획 입력은 작업지시 등록 후 가능합니다.');
          return false;
        }
        ;
        dma_condition.set('cvsslMgntNo', ed_cvsslMgntNo.getValue());
        await scwin.sbm_execute(sbm_retrieveEqInfo);
        let rowCnt = ds_eqKndCd.getRowCount();
        for (let i = 0; i < rowCnt; i++) {
          let insertIdx = ds_eq.insertRow();
          let originRowData = ds_eqKndCd.getRowJSON(i);
          let insertData = {
            'stvWrkIndictNo': originData['stvWrkIndictNo'],
            'wrkStpCd': '005',
            'eqKndCd': originRowData['eqKndCd'],
            'eqNrmCd': originRowData['eqNrmCd']
          };
          ds_eq.setRowJSON(insertIdx, insertData, true);
        }
        ;
        let columnIndex = gr_eq.getFocusedColumnIndex() ?? 0;
        gr_eq.setFocusedCell(rowCnt - 1, columnIndex);
        break;
      }
      ;
  }
  ;
};

/**
 * @method 
 * @name f_gridToExcel
 * @description 엑셀 다운로드
 * @param {object} argGrid
 * @param {string} argTitle
 */
scwin.f_gridToExcel = function (argGrid, argTitle) {
  let options = {
    sheetName: argTitle,
    fileName: argTitle + ".xlsx",
    startRowIndex: 2,
    useHeaderCheckBoxLabel: true
  };
  let visibleColCnt = 0;
  let totalColCnt = argGrid.getTotalCol();
  for (let i = 0; i < totalColCnt; i++) {
    if (argGrid.getColumnVisible(i)) visibleColCnt++;
  }
  ;
  let infoArr = [{
    text: argTitle,
    rowIndex: 0,
    colSpan: visibleColCnt,
    textAlign: 'center',
    fontSize: '16px',
    fontName: '돋움체',
    color: 'black',
    bgColor: '#ffffff',
    wordWrap: true
  }];
  $c.data.downloadGridViewExcel($p, argGrid, options, infoArr);

  /*
  // 검색조건
  var vDay = "점소 : " + lc_lobranCd.ValueOfIndex("lobranNm",lc_lobranCd.Index) + " : "
           + "입항예정일자 : " + ed_arvStDt.text + " ~ " + ed_arvEndDt.text;
  var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  
  argGrid.SetExcelTitle(1, "getValue():" + vDay.replace(/:/g,'|').replace(/;/g,'') + vSearchOption );
  */
};

/**
 * @method 
 * @name f_openPopUP1
 * @description 팝업
 */
scwin.f_openPopUP1 = function () {
  if (ed_cfmanEmpNm.getValue() == '') {
    ed_cfmanEmpNo.setValue('');
    return;
  }
  ;
  scwin.f_openCommonPopUpForMan(1, 'T');
};

/**
 * @method 
 * @name f_openCommonPopUpForMan
 * @description 팝업
 * @param {number} disGubun
 * @param {string} pWinCloseTF
 */
scwin.f_openCommonPopUpForMan = async function (disGubun, pWinCloseTF) {
  // 선언부
  let sWinCloseTF = pWinCloseTF ?? 'T';
  let pCode = '';
  let pName = '';
  let arrParam = new Array();
  let url, options;
  switch (disGubun) {
    case 1:
      //정규직(grid)
      pCode = ed_cfmanEmpNo.getValue();
      pName = ed_cfmanEmpNm.getValue();
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = scwin.lobranCd; //점소코드
      arrParam[3] = scwin.lobranNm;
      ; //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = '01,D'; //직종  (정규직)
      arrParam[6] = '02,D'; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = 'Y'; //배치가능여부
      arrParam[10] = sWinCloseTF; //WINDOW CLOSE 여부
      arrParam[11] = '1'; //상세직종Flag

      options = {
        width: '750px',
        height: '530px',
        resizable: false,
        popupName: '인력검색'
      };
      url = '/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml';
      rtnList = await $c.win.openPopup($p, url, options, arrParam);

      // (0)직종코드 (1)직종명 (2)인원번호 (3)인원명
      // (4)직급 (5)직급명 (6)물류점소코드 (7)물류점소명 
      // (8)상세직종코드 (9)상세직종명 (10)배치가능여부 
      // (11)본사계약직여부 (12)연근여부		

      if (rtnList != null && rtnList[3] != undefined) {
        if (rtnList[3] == undefined) return;
        ed_cfmanEmpNo.setValue(rtnList[2]); //사원코드
        ed_cfmanEmpNm.setValue(rtnList[3]); //사원명
        return;
      } else {
        ed_cfmanEmpNo.setValue(''); //사원코드
        ed_cfmanEmpNm.setValue(''); //사원명
      }
      ;
      break;
  }
  ;
};

/**
 * @method 
 * @name f_openCommPopUpGrid
 * @description 그리드 팝업
 * @param {number} gubun
 * @param {number} row
 * @param {string} pClose
 */
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  // 선언부
  let rtnList, rowData;
  let pCode = '';
  let pName = '';
  let arrParam = new Array();
  let sWinCloseTF = pClose ?? 'T';
  let url, options;
  switch (gubun) {
    //chief포맨
    case 1:
      rowData = ds_cvsslInfo.getRowJSON(row);
      pCode = rowData['cfmanEmpNo'];
      pName = '';
      arrParam[0] = pCode; //사번
      arrParam[1] = pName; //사원명
      arrParam[2] = scwin.lobranCd; //점소코드
      arrParam[3] = scwin.lobranNm; //점소명
      arrParam[4] = ''; //작업장코드
      arrParam[5] = '01,D'; //직종  (정규직)
      arrParam[6] = '02,D'; //상세직종코드 (하역직)
      arrParam[7] = ''; //직급
      arrParam[8] = ''; //작업일
      arrParam[9] = 'Y'; //배치가능여부
      arrParam[10] = sWinCloseTF; //WINDOW CLOSE 여부
      arrParam[11] = '1'; //상세직종Flag

      options = {
        heigth: '450px',
        width: '530px',
        resizable: false
      };
      url = '/ui/ds/op/rscconfirm/manpwrrscconfirm/op_103_01_10p.xml';
      rtnList = await $c.win.openPopup($p, url, options, arrParam);

      // (0)직종코드 (1)직종명 (2)인원번호 (3)인원명 
      // (4)직급 (5)직급명 (6)물류점소코드 (7)물류점소명 
      // (8)상세직종코드 (9)상세직종명 (10)배치가능여부 
      // (11)본사계약직여부 (12)연근여부		
      if (rtnList != null && rtnList[3] != undefined) {
        if (rtnList[3] == undefined) return;
        ds_cvsslInfo.setCellData(row, 'cfmanEmpNo', rtnList[2]); //사원코드
        ds_cvsslInfo.setCellData(row, 'cfmanEmpNm', rtnList[3]); //사원명
        return;
      } else {
        ds_cvsslInfo.setCellData(row, 'cfmanEmpNo', ''); //사원코드
        ds_cvsslInfo.setCellData(row, 'cfmanEmpNm', ''); //사원명
      }
      ;
      break;

    // 품명 팝업
    case 2:
      rowData = ds_hold.getRowJSON(row);
      pCode = rowData['commCd'];
      pName = '';
      udc_gridComCode.setSelectId('retrieveCommInfo'); // XML상의 SELECT ID
      udc_gridComCode.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ds_hold.setCellData(row, 'commCd', rtnList[0]);
          ds_hold.setCellData(row, 'commNm', rtnList[1]);
        } else {
          ds_hold.setCellData(row, 'commNm', '');
          ds_hold.setCellData(row, 'commCd', '');
        }
        ;
      }, pCode // 화면에서의 ??? Code Element의	getValue()
      , pName // 화면에서의 ??? Name Element의	getValue()
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목/품명코드,품목/품명,구분' // Title순서	
      , '105,190,70' // 보여주는 각 컬럼들의 폭	
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , ',,,A4' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , 'F' // 전체검색허용여부	('F')
      , '품목/품명,품명코드,품명' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;

    // 품명 팝업
    case 3:
      rowData = ds_hold.getRowJSON(row);
      pCode = '';
      pName = rowData['commNm'];
      udc_gridComCode.setSelectId('retrieveCommInfo'); // XML상의 SELECT ID
      udc_gridComCode.cfCommonPopUp(rtnList => {
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != 'N/A') {
          ds_hold.setCellData(row, 'commCd', rtnList[0]);
          ds_hold.setCellData(row, 'commNm', rtnList[1]);
        } else {
          ds_hold.setCellData(row, 'commNm', '');
          ds_hold.setCellData(row, 'commCd', '');
        }
        ;
      }, pCode // 화면에서의 ??? Code Element의	getValue()
      , pName // 화면에서의 ??? Name Element의	getValue()
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '품목/품명코드,품목/품명,구분' // Title순서	
      , '105,190,70' // 보여주는 각 컬럼들의 폭	
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , ',,,A4' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	('F')
      , 'F' // 전체검색허용여부	('F')
      , '품목/품명,품명코드,품명' // POP-UP Window Title 검색어1,2	 ('Win타이틀,첫번검색Nm,두번?검색Nm')
      );
      break;
  }
  ;
};

/**
 * @method 
 * @name f_InitObjects
 * @description 검색영역 Field Clear함.
 */
scwin.f_InitObjects = function () {
  $c.gus.cfInitObjects($p, tb_mainData);
  scwin.f_SetDefaultData();
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitPre 
 * @description submit 요청전
 */
scwin.submitPre = function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieve:
      dma_condition.set('cvsslMgntNo', ed_cvsslMgntNo.getValue());
      break;
    case sbm_save:
      let dmaJSON = dma_cvsslInfo.getJSON();
      ds_cvsslInfo.setRowJSON(0, dmaJSON, true);
      break;
    default:
      break;
  }
  ;
};

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);

  // event='OnFail()'
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  switch (submitObj) {
    case sbm_retrieve:
      // 본선작업계획현황조회
      let rowData = ds_cvsslInfo.getRowJSON(0);
      dma_cvsslInfo.setJSON(rowData);
      scwin.ds_cvsslInfo_OnLoadCompleted();
      scwin.ds_manifest_OnLoadCompleted();
      scwin.ds_hold_OnLoadCompleted();
      scwin.ds_plan_OnLoadCompleted();
      scwin.ds_state_OnLoadCompleted();
      break;
    case sbm_retrieveMan:
      // 본선작업계획 작업지시별 인원정보
      scwin.ds_man_OnLoadCompleted();
      break;
    case sbm_retrieveEq:
      // 본선작업계획 작업지시별 장비정보
      scwin.ds_eq_OnLoadCompleted();
      break;
    case sbm_save:
      // 저장
      // for=tr_save event=OnSuccess()
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
      scwin.f_Retrieve();
      break;
    case sbm_save2:
      // 저장
      // for=tr_save2 event=OnSuccess()
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
      scwin.f_Retrieve();
      break;
    case sbm_save3:
      // 저장
      // for=tr_save3 event=OnSuccess()
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
      scwin.f_Retrieve();
      ds_plan.setRowPosition(scwin.curRow);
      scwin.f_Retrieve2();
      break;
    case sbm_saveMan:
      //저장
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
      scwin.f_Retrieve();
      ds_plan.setRowPosition(scwin.curRow);
      scwin.f_Retrieve2();
    case sbm_saveEq:
      // 저장
      // for=tr_saveEq event=OnSuccess()
      $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // '성공적으로 저장하였습니다.'
      scwin.f_Retrieve();
      ds_plan.setRowPosition(scwin.curRow);
      scwin.f_Retrieve2();
      break;
    default:
      break;
  }
};

// 본선작업계획현황 DataSet ----------->

/**
 * @method 
 * @name ds_cvsslInfo_OnLoadCompleted 
 * @description
 * @asis for=ds_cvsslInfo event=OnLoadCompleted(CntRow)
 */
scwin.ds_cvsslInfo_OnLoadCompleted = function () {
  const cntRow = ds_cvsslInfo.getRowCount();
  if (cntRow <= 0) {
    $c.gus.cfAlertMsg($p, '미등록된 본선관리번호 입니다. 확인후 다시 입력해주세요');
    ed_cvsslMgntNo.setValue('');
    ed_cvsslMgntNo.focus();
  }
  ;
};

/**
 * @method 
 * @name ds_manifest_OnLoadCompleted 
 * @description
 * @asis for=ds_manifest event=OnLoadCompleted(rowCnt)
 */
scwin.ds_manifest_OnLoadCompleted = function () {
  const rowCnt = ds_manifest.getRowCount();

  // 총 조회건수 표시
  totalRows.setValue(rowCnt);

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_manifest.setFocusedCell(0, 'commNm');
};

/**
 * @method 
 * @name ds_hold_OnLoadCompleted 
 * @description
 * @asis for=ds_hold event=OnLoadCompleted(rowCnt)
 */
scwin.ds_hold_OnLoadCompleted = function () {
  const rowCnt = ds_hold.getRowCount();

  // 총 조회건수 표시
  totalRows2.setValue(rowCnt);

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_hold.setFocusedCell(0, 'holdNo');
};

/**
 * @method 
 * @name ds_plan_OnLoadCompleted 
 * @description
 * @asis for=ds_plan event=OnLoadCompleted(rowCnt)
 */
scwin.ds_plan_OnLoadCompleted = async function () {
  const rowCnt = ds_plan.getRowCount();

  // 총 조회건수 표시
  totalRows3.setValue(rowCnt);
  await scwin.f_Retrieve2();

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_plan.setFocusedCell(0, 'planQty');
};

/**
 * @method 
 * @name ds_state_OnLoadCompleted 
 * @description
 * @asis for=ds_state event=OnLoadCompleted(rowCnt)
 */
scwin.ds_state_OnLoadCompleted = function () {
  const rowCnt = ds_state.getRowCount();

  // 총 조회건수 표시
  totalRows6.setValue(rowCnt);

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_state.setFocusedCell(0, 'wrkDt');
};

/**
 * @method 
 * @name ds_man_OnLoadCompleted 
 * @description
 * @asis for=ds_man event=OnLoadCompleted(rowCnt)
 */
scwin.ds_man_OnLoadCompleted = function () {
  const rowCnt = ds_man.getRowCount();

  // 총 조회건수 표시
  totalRows4.setValue(rowCnt);

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_man.setFocusedCell(0, 'occpgrdCd');
};

/**
 * @method 
 * @name ds_eq_OnLoadCompleted 
 * @description
 * @asis ds_eq event=OnLoadCompleted(rowCnt)
 */
scwin.ds_eq_OnLoadCompleted = function () {
  const rowCnt = ds_eq.getRowCount();

  // 총 조회건수 표시
  totalRows5.setValue(rowCnt);

  // 초기 포커스
  if (rowCnt == 0) return;
  gr_eq.setFocusedCell(0, 'wrkStpCd');
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name gr_plan_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for=gr_plan event=OnExit(row,colid,olddata)
 *       for=gr_plan event=OnCloseUp(row,colid)
 */
scwin.gr_plan_oneditend = function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);
  const rowData = this._dataList.getRowJSON(rowIndex); // 배열

  switch (colID) {
    case 'cfmanEmpNo':
      if (value != '' && value != rowData[colID]) {
        ds_cvsslInfo.setCellData(rowIndex, 'cfmanEmpNm', '');
        scwin.f_openCommPopUpGrid(1, rowIndex, 'T');
      } else if (value == '') {
        ds_cvsslInfo.setCellData(rowIndex, 'cfmanEmpNo', '');
        ds_cvsslInfo.setCellData(rowIndex, 'cfmanEmpNm', '');
      }
      ;
      break;
    case 'shiftClsCd':
      //차량종류변경시 규격 필터링
      let times = []; // start, end
      switch (value) {
        case 'D':
          times = ['0800', '1700'];
          break;
        case 'N':
          times = ['1900', '0100'];
          break;
        case 'M':
          times = ['0100', '0400'];
          break;
        default:
          break;
      }
      ;
      ds_plan.setCellData(rowIndex, 'wrkStHh', times[0]);
      ds_plan.setCellData(rowIndex, 'wrkEndHh', times[1]);
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_plan_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @asis for=gr_plan event=OnExit(row,colid,olddata)
 *       for=gr_plan event=OnCloseUp(row,colid)
 */
scwin.gr_plan_onafteredit = function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);
  switch (colID) {
    // tobe - 빈값 0 표기위해 추가
    case 'planQty':
    case 'planWt':
    case 'planCbm':
    case 'wrkGangCnt':
    case 'transCnt':
      if (value == "") this._dataList.setCellData(rowIndex, colID, 0);
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_hold_ontextimageclick 
 * @description inputType이 textImage인 경우 이미지가 클릭됐을 때 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @asis for=gr_hold event=OnPopup(row,colid,data)
 */
scwin.gr_hold_ontextimageclick = function (rowIndex, columnIndex) {
  const colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'commCd':
      scwin.f_openCommPopUpGrid(2, rowIndex, 'F');
      break;
    case 'commNm':
      scwin.f_openCommPopUpGrid(3, rowIndex, 'F');
      break;
  }
  ;
};

/**
 * @event 
 * @name gr_hold_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} value
 * @asis for=gr_hold event=OnExit(row,colid,olddata)
 */
scwin.gr_hold_oneditend = function (rowIndex, columnIndex, value) {
  let colID = this.getColumnID(columnIndex);
  scwin.oldData = this._dataList.getCellData(rowIndex, colID);
  // let rowData = this._dataList.getRowJSON(rowIndex);

  // switch (colID) {
  //     case 'commCd':
  //         if (value != '' && value != rowData[colID]) {
  //             ds_hold.setCellData(rowIndex, 'commNm', '');
  //             scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
  //         } else if (value == '') {
  //             ds_hold.setCellData(rowIndex, 'commCd', '');
  //             ds_hold.setCellData(rowIndex, 'commNm', '');
  //         }
  //         break;
  //     case 'commNm':
  //         if (value != '' && value != rowData[colID]) {
  //             ds_hold.setCellData(rowIndex, 'commCd', '');
  //             scwin.f_openCommPopUpGrid(3, rowIndex, 'T');
  //         } else if (value == '') {
  //             ds_hold.setCellData(rowIndex, 'commCd', '');
  //             ds_hold.setCellData(rowIndex, 'commNm', '');
  //         };
  //         break;
  // };
};

/**
 * @event 
 * @name gr_hold_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_hold_onafteredit = function (rowIndex, columnIndex, value) {
  const colId = this.getColumnID(columnIndex);
  switch (colId) {
    case 'commCd':
      if (value != '' && value != scwin.oldData) {
        ds_hold.setCellData(rowIndex, 'commNm', '');
        scwin.f_openCommPopUpGrid(2, rowIndex, 'T');
      } else if (value == '') {
        ds_hold.setCellData(rowIndex, 'commCd', '');
        ds_hold.setCellData(rowIndex, 'commNm', '');
      }
      break;
    case 'commNm':
      if (value != '' && value != scwin.oldData) {
        ds_hold.setCellData(rowIndex, 'commCd', '');
        scwin.f_openCommPopUpGrid(3, rowIndex, 'T');
      } else if (value == '') {
        ds_hold.setCellData(rowIndex, 'commCd', '');
        ds_hold.setCellData(rowIndex, 'commNm', '');
      }
      ;
      break;

    // tobe - 숫자 0 표기 위해 추가
    case 'qty':
    case 'wt':
    case 'cbm':
      if (value == "") ds_hold.setCellData(rowIndex, colId, 0);
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name gr_eq_oneditend 
 * @description 셀의 편집이 끝난 경우 발생하며, onafteredit보다 먼저 발생
 * @param {number} rowIndex
 * @param {number} columnIndex
 * @param {string} value
 * @asis for=gr_eq event=OnCloseUp(row,colid)
 */
scwin.gr_eq_oneditend = function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);

  // 차량종류변경시 규격 필터링
  if (colID == 'eqKndCd') {
    ds_eq.setCellData(rowIndex, 'eqNrmCd', '');
    scwin.ds_eqNrmCd_onFilter(value);
  }
  ;
};

/**
 * @event 
 * @name gr_eq_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_eq_onafteredit = function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'cnt':
      if (value == '') this._dataList.setCellData(rowIndex, colID, 0);
      break;
    default:
      break;
  }
};

/**
 * @event 
 * @name ds_eqNrmCd_onFilter 
 * @description 규격 필터링
 * @asis for=ds_eqNrmCd event=onFilter(row)
 */
scwin.ds_eqNrmCd_onFilter = function (value) {
  let keyVal = value ?? ds_eq.getCellData(ds_eq.getRowPosition(), 'eqKndCd');

  // 필터 초기화
  ds_eqNrmCd.clearFilter();
  const filterOptions = {
    type: 'row',
    colIndex: 'upperCd',
    key: keyVal,
    condition: 'and',
    exactMatch: true
  };
  ds_eqNrmCd.setColumnFilter(filterOptions);
};

/**
 * @event 
 * @name gr_plan_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for="gr_plan" event="OnClick(Row,Colid)"
 */
scwin.gr_plan_oncellclick = async function (rowIndex, columnIndex, columnId) {
  await scwin.f_Retrieve2();
  const colID = this.getColumnID(columnIndex);
  const readOnly = ds_plan.getRowStatus(rowIndex) != 'C';
  let editable = true;
  switch (colID) {
    case 'wrkDt':
    case 'shiftClsCd':
    case 'wrkStHh':
    case 'wrkEndHh':
      gr_plan.setColumnReadOnly(colID, readOnly);
      editable = false;
      break;
    default:
      break;
  }
  ;
  gr_plan.setFocusedCell(rowIndex, colID, editable);
};

/**
 * @event 
 * @name gr_man_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for='gr_man' event='OnClick(Row,Colid)'
 */
scwin.gr_man_oncellclick = function (rowIndex, columnIndex, columnId) {
  const readOnly = ds_man.getRowStatusValue(rowIndex) != 1;
  gr_man.setColumnReadOnly('occpgrdCd', !readOnly);
};

/**
 * @event 
 * @name gr_man_onafteredit 
 * @description 셀의 편집모드가 종료되어 포커스가 빠져나온 경우에 발생 (oneditend 이벤트 이후 발생)
 */
scwin.gr_man_onafteredit = function (rowIndex, columnIndex, value) {
  const colID = this.getColumnID(columnIndex);
  switch (colID) {
    case 'cnt':
      if (value == "") this._dataList.setCellData(rowIndex, colID, 0);
      break;
  }
};

/**
 * @event 
 * @name gr_eq_oncellclick 
 * @description 셀이 클릭된 경우 발생
 * @asis for='gr_eq' event='OnClick(Row,Colid)'
 */
scwin.gr_eq_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.ds_eqNrmCd_onFilter();
};

/**
 * @event 
 * @name gr_plan_onrowindexchange 
 * @description 방향키 또는 마우스를 이용하여 선택한 셀의 행이 변경되거나, 
 * API를 이용하여 셀에 포커스를 적용한 셀의 행이 변경되었을 때 발생
 * @asis for=gr_plan event=onKeyPress(keycode)
 */
scwin.gr_plan_onrowindexchange = function (rowIndex, oldRow) {
  if (rowIndex == oldRow) return;
  scwin.f_Retrieve2();
};

/**
 * @event 
 * @name gr_man_onaftercolumnmove 
 * @description 컬럼의 이동이 발생한 직후 발생
 * @asis for=gr_man  event=OnColumnPosChanged(Row,Colid)
 */
scwin.gr_man_onaftercolumnmove = function (info) {

  // todo - 확인필요
  // const readOnly = ds_man.getRowStatusValue(Row) != 1
  // gr_man.setColumnReadOnly('occpgrdCd', readOnly)
};

/**
 * @method 
 * @name rsltsGubun_format 
 * @description 실적 구분 format
 */
scwin.rsltsGubun_format = function (data) {
  switch (data) {
    case '1':
      return 'YES';
    case '0':
      return 'NO';
    default:
      return '';
  }
  ;
};

/**
 * @event 
 * @name btn_retrieve_onclick 
 * @description 조회 버튼 클릭 시 이벤트
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name btn_save_onclick 
 * @description 저장 버튼 클릭 시 이벤트
 */
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회 버튼 클릭 시 이벤트
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};

/**
 * @event 
 * @name udc_cfmanEmpNo_onviewchangeNameEvent 
 * @description 포맨 code 포커스를 잃었을 때 발생한다.
 * @asis for=ed_cfmanEmpNo event=OnKillFocus()
 */
scwin.udc_cfmanEmpNo_onblurCodeEvent = function (e) {
  if (ed_cfmanEmpNo.getValue() == '') {
    ed_cfmanEmpNo.setValue('');
    ed_cfmanEmpNm.setValue('');
  } else {
    scwin.f_openCommonPopUpForMan(1, 'T');
  }
  ;
};

/**
 * @event 
 * @name udc_cfmanEmpNo_onviewchangeNameEvent 
 * @description 포맨 name 컴포넌트의 value가 변경되었을 시 이벤트
 */
scwin.udc_cfmanEmpNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUP1();
};

/**
 * @event 
 * @name udc_cfmanEmpNo_onclickEvent 
 * @description 포맨 검색 버튼 클릭 시 이벤트
 */
scwin.udc_cfmanEmpNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUpForMan(1, 'T');
};

/**
 * @event 
 * @name manifest_excel_download 
 * @description 적하목록현황 그리드 엑셀 다운로드
 */
scwin.manifest_excel_download = function () {
  scwin.f_gridToExcel(gr_manifest, '적하목록현황');
};

/**
 * @event 
 * @name hold_excel_download 
 * @description HOLD별 물량 정보 그리드 엑셀 다운로드
 */
scwin.hold_excel_download = function () {
  scwin.f_gridToExcel(gr_hold, 'HOLD별 물량 정보');
};

/**
 * @event 
 * @name hold_add_row 
 * @description HOLD별 물량 정보 그리드 행 추가
 */
scwin.hold_add_row = function () {
  scwin.f_AddRow('1');
};

/**
 * @event 
 * @name hold_del_row 
 * @description HOLD별 물량 정보 그리드 행 삭제
 */
scwin.hold_del_row = function () {
  $c.data.deleteRow($p, ds_hold);
};

/**
 * @event 
 * @name hold_cancel 
 * @description HOLD별 물량 정보 그리드 취소
 */
scwin.hold_cancel = function () {
  $c.data.undoRow($p, ds_hold);
};

/**
 * @event 
 * @name btn_save41_onclick 
 * @description 저장 버튼 클릭 시 이벤트
 */
scwin.btn_save41_onclick = function (e) {
  scwin.f_Save2();
};

/**
 * @event 
 * @name plan_excel_download 
 * @description 본선작업계획 수립 그리드 엑셀 다운로드
 */
scwin.plan_excel_download = function () {
  scwin.f_gridToExcel(gr_plan, '본선작업계획 수립');
};

/**
 * @event 
 * @name plan_add_row 
 * @description 본선작업계획 수립 그리드 행 추가
 */
scwin.plan_add_row = function () {
  scwin.f_AddRow('2');
};

/**
 * @event 
 * @name plan_del_row 
 * @description 본선작업계획 수립 그리드 행 삭제
 */
scwin.plan_del_row = function () {
  $c.data.deleteRow($p, ds_plan);
};

/**
 * @event 
 * @name plan_cancel 
 * @description 본선작업계획 수립 그리드 취소
 */
scwin.plan_cancel = function () {
  $c.data.undoRow($p, ds_plan);
};

/**
 * @event 
 * @name btn_save3_onclick 
 * @description 본선작업계획 수립 그리드 저장버튼 클릭 시 이벤트
 */
scwin.btn_save3_onclick = function (e) {
  scwin.f_Save3();
};

/**
 * @event 
 * @name man_add_row 
 * @description 상용인원정보 수립 그리드 행 추가
 */
scwin.man_add_row = function () {
  scwin.f_AddRow('3');
};

/**
 * @event 
 * @name man_del_row 
 * @description 상용인원정보 수립 그리드 행 삭제
 */
scwin.man_del_row = function () {
  $c.data.deleteRow($p, ds_man);
};

/**
 * @event 
 * @name man_cancel 
 * @description 상용인원정보 수립 그리드 취소
 */
scwin.man_cancel = function () {
  $c.data.undoRow($p, ds_man);
};

/**
 * @event 
 * @name btn_trigger39_onclick 
 * @description 상용인원정보 수립 그리드 인원리스트 버튼 클릭 시 이벤트
 */
scwin.btn_trigger39_onclick = function (e) {
  scwin.f_AddRow('4');
};

/**
 * @event 
 * @name btn_save2_onclick 
 * @description 상용인원정보 수립 그리드 인원리스트 버튼 클릭 시 이벤트
 */
scwin.btn_save2_onclick = function (e) {
  scwin.f_Save4();
};

/**
 * @event 
 * @name eq_add_row 
 * @description 장비정보 수립 그리드 행 추가
 */
scwin.eq_add_row = function () {
  scwin.f_AddRow('5');
};

/**
 * @event 
 * @name eq_del_row 
 * @description 장비정보 수립 그리드 행 삭제
 */
scwin.eq_del_row = function () {
  $c.data.deleteRow($p, ds_eq);
};

/**
 * @event 
 * @name eq_cancel 
 * @description 장비정보 수립 그리드 취소
 */
scwin.eq_cancel = function () {
  $c.data.undoRow($p, ds_eq);
};

/**
 * @event 
 * @name btn_trigger40_onclick 
 * @description 장비리스트 버튼 클릭 시 이벤트 발생
 */
scwin.btn_trigger40_onclick = function (e) {
  scwin.f_AddRow('6');
};

/**
 * @event 
 * @name btn_save5_onclick 
 * @description 장비정보 저장버튼 클릭 시 이벤트
 */
scwin.btn_save5_onclick = function (e) {
  scwin.f_Save5();
};

/**
 * @event 
 * @name state_excel_download 
 * @description 본선작업계획 현황 엑셀 다운로드
 */
scwin.state_excel_download = function () {
  scwin.f_gridToExcel(gr_state, '본선작업계획 현황');
};

/**
 * @event 
 * @name btn_cvsslMgntNo_onclick 
 * @description 본선관리번호 검색 버튼 클릭
 */
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openPopUp();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w100',id:'ed_cvsslMgntNo',placeholder:'',style:'',mandatory:'true',objType:'Data',title:'본선관리번호',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',maxlength:'8'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn pt-blue',disabled:'',escape:'false',id:'btn_save',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:30%',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:' w200',id:'ed_vsslNm',style:'',objType:'data',ref:'data:dma_cvsslInfo.vsslNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_lineNm',style:'',objType:'data',ref:'data:dma_cvsslInfo.lineNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_shpCoClntNm',style:'',objType:'data',ref:'data:dma_cvsslInfo.shpCoClntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' w200',id:'ed_callNo',style:'',objType:'data',ref:'data:dma_cvsslInfo.callNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표화종',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_commTxt',style:'',objType:'data',ref:'data:dma_cvsslInfo.commTxt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_ioClsNm',style:'',objType:'data',ref:'data:dma_cvsslInfo.ioClsNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_berthNm',style:'',objType:'data',ref:'data:dma_cvsslInfo.berthNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:' cal',id:'ica_etaDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd HH:mm',dateValidCheck:'false',ref:'data:dma_cvsslInfo.etaDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출항(예정)일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:' cal',id:'ica_etdDt',style:'',objType:'data',displayFormat:'yyyy/MM/dd HH:mm',dateValidCheck:'false',ref:'data:dma_cvsslInfo.etdDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HOLD 정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w200',id:'ed_holdInfo',style:'',objType:'data',ref:'data:dma_cvsslInfo.holdInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선작업순서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'rd_wrkSeq',ref:'data:dma_cvsslInfo.wrkSeq',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'우선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'중간'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마지막'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'03'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포맨',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width: 250px;',class:'',codeId:'ed_cfmanEmpNo',objTypeCode:'key',allowCharCode:'0-9',maxlengthCode:'6',nameId:'ed_cfmanEmpNm',btnId:'btn_PopUp2',id:'udc_cfmanEmpNo','ev:onviewchangeNameEvent':'scwin.udc_cfmanEmpNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_cfmanEmpNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cfmanEmpNo_onblurCodeEvent',code:'cfmanEmpNo',name:'cfmanEmpNm',refDataCollection:'dma_cvsslInfo'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'본선',class:'ml8'}},{T:1,N:'xf:input',A:{style:'width: 30px;',id:'ed_cvsslFmanCnt',class:'',ref:'data:dma_cvsslInfo.cvsslFmanCnt'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'육상',class:'ml4'}},{T:1,N:'xf:input',A:{style:'width: 30px;',id:'ed_groundFmanCnt',class:'',ref:'data:dma_cvsslInfo.groundFmanCnt'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',btnPlusYn:'Y',btnUser:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_manifest',gridDownUserAuth:'X',gridDownFn:'manifest_excel_download'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_manifest',style:'',autoFit:'allColumn',id:'gr_manifest',visibleRowNum:'3',class:'wq_gvw'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column1',value:'컨테이너<br/>벌크구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'true',width:'100',inputType:'text',id:'column17',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column13',value:'Master B/L',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'B/L No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'중량<br/>(Ton)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrBulkClsCd',displayMode:'label',readOnly:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'120',inputType:'text',id:'commNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'140',inputType:'text',id:'mblNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'wt',displayMode:'label',readOnly:'true',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'cbm',displayMode:'label',readOnly:'true',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column25',displayMode:'label',expression:'SUM(\'qty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column24',displayMode:'label',expression:'SUM(\'wt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column23',displayMode:'label',expression:'SUM(\'cbm\')',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'HOLD별 물량 정보',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',gridID:'gr_hold',gridDownFn:'hold_excel_download'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_hold',style:'',autoFit:'allColumn',id:'gr_hold',visibleRowNum:'3',class:'wq_gvw','ev:ontextimageclick':'scwin.gr_hold_ontextimageclick','ev:oneditend':'scwin.gr_hold_oneditend',rowStatusVisible:'true',rowStatusWidth:'20',ignoreNonEditableCell:'true','ev:onafteredit':'scwin.gr_hold_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{hidden:'true',width:'120',inputType:'text',id:'column1',value:'본선관리번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'HOLD',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'수출입<br/>구분',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'품명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'품명',class:'txt-red',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'수량',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column3',value:'중량<br/>(Ton)',class:'txt-blue',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'CBM',class:'txt-blue',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',readOnly:'true',textAlign:'center',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'holdNo',displayMode:'label',textAlign:'center',dataType:'number',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'impExpClsCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{textAlign:'center',width:'80',inputType:'textImage',id:'commCd',displayMode:'label',maxLength:'8'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'80',inputType:'textImage',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'qty',displayMode:'label',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'wt',displayMode:'label',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'25'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'text',id:'cbm',displayMode:'label',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column25',displayMode:'label',expression:'SUM(\'qty\')',dataType:'bigDecimal',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column24',displayMode:'label',expression:'SUM(\'wt\')',dataType:'bigDecimal',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'70',inputType:'expression',id:'column23',displayMode:'label',expression:'SUM(\'cbm\')',dataType:'bigDecimal',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows2',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',gridID:'gr_hold',rowAddFunction:'hold_add_row',rowDelFunction:'hold_del_row',cancelFunction:'hold_cancel',rowAddUserAuth:'C',rowDelUserAuth:'C',btnRowAddObj:'button_no1',btnRowDelObj:'button_no2',btnCancelObj:'button_no3'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save41',label:'저장',type:'button',class:'btn',objType:'bUpdate',userAuth:'R','ev:onclick':'scwin.btn_save41_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'본선작업계획 수립',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_plan',gridDownUserAuth:'X',gridDownFn:'plan_excel_download'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_plan',style:'',id:'gr_plan',visibleRowNum:'3',class:'wq_gvw',autoFit:'allColumn','ev:oneditend':'scwin.gr_plan_oneditend','ev:onaftercolumnmove':'scwin.gr_plan_onaftercolumnmove','ev:onrowindexchange':'scwin.gr_plan_onrowindexchange','ev:oncellclick':'scwin.gr_plan_oncellclick',rowStatusVisible:'true',rowStatusWidth:'20',ignoreNonEditableCell:'true','ev:onafteredit':'scwin.gr_plan_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption4',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'본선관리번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column17',value:'작업지시번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column15',value:'작업일시',displayMode:'label',colSpan:'4',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column3',value:'물량정보',displayMode:'label',colSpan:'3',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column19',value:'작업<br/>방법',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'gang',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column53',value:'운송',displayMode:'label',rowSpan:'2',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'종류',displayMode:'label',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'비고',displayMode:'label',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'실적',displayMode:'label',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'일자',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'시프트',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column36',value:'시작',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column35',value:'종료',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column34',value:'수량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',value:'중량<br/>(Ton)',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',value:'CBM',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cvsslMgntNo',displayMode:'label',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'stvWrkIndictNo',displayMode:'label',textAlign:'center',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkDt',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'shiftClsCd',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'wrkStHh',displayMode:'label',textAlign:'center',dataType:'time',displayFormat:'HH:mm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'wrkEndHh',displayMode:'label',textAlign:'center',dataType:'time',displayFormat:'HH:mm',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'planQty',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planWt',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'25'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planCbm',displayMode:'label',textAlign:'right',dataType:'bigDecimal',displayFormat:'#,##0',allowChar:'0-9',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'60',inputType:'select',id:'wrkKndCd',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkGangCnt',displayMode:'label',textAlign:'center',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'transCnt',displayMode:'label',textAlign:'center',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'transKndCd',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rsltsGubun',displayMode:'label',textAlign:'center',readOnly:'true',displayFormatter:'scwin.rsltsGubun_format',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'bigDecimal',expression:'SUM(\'planQty\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'bigDecimal',expression:'SUM(\'planWt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'bigDecimal',expression:'SUM(\'planCbm\')'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column60',displayMode:'label',dataType:'number',expression:'SUM(\'wrkGangCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column56',displayMode:'label',dataType:'number',expression:'SUM(\'transCnt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column44',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows3',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'Y',cancelFunction:'plan_cancel',rowAddFunction:'plan_add_row',rowDelFunction:'plan_del_row',rowAddUserAuth:'C',rowDelUserAuth:'C',gridID:'gr_plan'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save3',label:'저장',type:'button',class:'btn',objType:'bUpdate',userAuth:'R','ev:onclick':'scwin.btn_save3_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 350px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상용인원정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_man',id:'gr_man',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_man_oncellclick','ev:onaftercolumnmove':'scwin.gr_man_onaftercolumnmove',rowStatusVisible:'true',rowStatusWidth:'20',ignoreNonEditableCell:'true','ev:onafteredit':'scwin.gr_man_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption7',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업지시번호',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'직종',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'수',width:'50',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'지역',width:'70',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'occpgrdCd',inputType:'select',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',maxLength:'2',allowChar:'0-9'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'plClsCd',inputType:'select',width:'70',emptyItem:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'expression',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cnt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows4',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_trigger39',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_trigger39_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인원리스트'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',rowAddUserAuth:'C',rowDelUserAuth:'C',cancelFunction:'man_cancel',gridID:'gr_man',rowAddFunction:'man_add_row',rowDelFunction:'man_del_row'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save2',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save2_onclick',userAuth:'R',objType:'bUpdate'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장비정보',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section6',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_eq',id:'gr_eq',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_eq_oncellclick','ev:oneditend':'scwin.gr_eq_oneditend',rowStatusVisible:'true',rowStatusWidth:'20',ignoreNonEditableCell:'true','ev:onafteredit':'scwin.gr_eq_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption8',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업지시번호',width:'120',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업단계',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'장비종류',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'장비규격',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수',width:'50',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',dataType:'number',editFormat:'##',maxLength:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStpCd',inputType:'select',width:'100',textAlign:'center',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_wrkStpCd'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'select',width:'100',textAlign:'left',selectedData:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'select',width:'120',allOption:'',chooseOption:'',ref:'',selectedData:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqNrmCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnt',inputType:'text',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',allowChar:'0-9',maxLength:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfWrkStpCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqKndCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfEqNrmCd',inputType:'text',width:'70',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120',value:'합계'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',width:'50',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'SUM(\'cnt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'70'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows5',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_trigger40',label:'삭제',style:'',type:'button','ev:onclick':'scwin.btn_trigger40_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'장비리스트'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'N',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',style:'',gridID:'gr_eq',cancelFunction:'eq_cancel',rowAddFunction:'eq_add_row',rowDelFunction:'eq_del_row',rowAddUserAuth:'C',rowDelUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save5',label:'저장',style:'',type:'button',userAuth:'R',objType:'bUpdate','ev:onclick':'scwin.btn_save5_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'본선작업계획 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section4',style:'',gridID:'gr_state',gridDownFn:'state_excel_download',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{class:'grid-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section4',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_state',id:'gr_state',style:'',visibleRowNum:'3',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'작업지시번호',width:'120',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'본선관리번호',width:'120',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'작업일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'시프트',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'작업<br/>방법',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'GANG',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'자원',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'비고',width:'100',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'운송',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'인원',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',id:'column22',value:'장비',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'stvWrkIndictNo',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkDt',inputType:'text',width:'100',readOnly:'true',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkKndCd',inputType:'select',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkGangCnt',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transInfo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffInfo',inputType:'text',width:'120',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqInfo',inputType:'text',width:'500',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'500',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows6',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'hideGroup',style:'display: none;'},E:[{T:1,N:'w2:udc_comCode',A:{selectID:'',codeId:'',popupID:'',validTitle:'',nameId:'',style:'',skipOnBlurCodeValueEmpty:'Y',id:'udc_gridComCode'}}]}]}]}]}]})