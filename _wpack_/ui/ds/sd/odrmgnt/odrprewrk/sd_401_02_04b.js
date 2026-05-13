/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_04b.xml 146414 79dd7408cf517e0177e4fe32af4944f56ae05745fe34cdd800e5bb77813bf1d4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifestList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_manifestList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text',length:''}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number',length:''}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'하선신고수리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomLineNm',name:'당사LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'BOD코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtNm',name:'하선물품',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneNm',name:'하선보세구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'하선장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'당사하선장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'배정보세구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물부호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물부호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물부호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'DO확인일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'DO확인시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'DO확인담당자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impCvsslOrder',name:'수입본선오더 생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impGnrlOrder',name:'수입일반오더 생성여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'신호부자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'양륙항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortNm',name:'양륙항구명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'오더생성여부구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colorVal',name:'colorVal',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'기준BL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btProcYn',name:'BT처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fioProcYn',name:'FIO처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'changeCheck',name:'changeCheck',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcChangeCheck',name:'mcomDsmbrkPlcChangeCheck',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'autoSetting',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'isoCd',name:'ISO_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo2',name:'봉인번호2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo3',name:'봉인번호3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'autoSetting',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslNm',name:'모선명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portNm',name:'목적지',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblNo',name:'M B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'H B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'number',defaultValue:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tempContainerList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifestListSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_containerListEmpty',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mrnList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_up_cntr',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayLupTrgtYn',name:'XRAY검색대상여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCond","key":"IN_DS1"}, {"id":"ds_manifestList","key":"OUT_DS1"}, {"id":"ds_containerList","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_manifestList","key":"OUT_DS1"}, {"id":"ds_containerList","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.UpdateManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_manifestList","key":"IN_DS1"},{"action":"modified","id":"ds_containerList","key":"IN_DS2"},{"id":"ds_mrnList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_mrnList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_regist',action:'/ds.sd.odrmgnt.odrprewrk.RegistMasterBillOfLadingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCond","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_regist_submitdone','ev:submiterror':'scwin.sbm_regist_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/js/ds/dscommon.js',type:'text/javascript',scopeVariable:'dscommon'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 선박, 항차, 항구 정보 Parameter

scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p) || {};
  scwin.vsslCd = scwin.params.vsslCd ?? "";
  scwin.vsslNm = scwin.params.vsslNm ?? "";
  scwin.portCnt = scwin.params.portcnt ?? "";
  scwin.portCd = scwin.params.portCd ?? "";
  scwin.portNm = scwin.params.portNm ?? "";
  scwin.mrn = scwin.params.mrn ?? "";
  scwin.msn = scwin.params.msn ?? "";
  scwin.hsn = scwin.params.hsn ?? "";
  scwin.mblNo = scwin.params.mblNo ?? "";
  scwin.cntrNo = scwin.params.cntrNo ?? "";
  scwin.type = scwin.params.type ?? "";

  // 세션정보 가져오기
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd");
  scwin.sClntNo = $c.data.getMemInfo($p, "clntNo");
  scwin.sClntNm = $c.data.getMemInfo($p, "clntNm");
  scwin.sLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") == null ? "" : $c.data.getMemInfo($p, "loUpperLobranCd");
  scwin.sel_row;
  scwin.sel_rowSave;
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.
  scwin.strDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.

  scwin.containerAdd = "0";
  scwin.containerSubAdd = "0";
  scwin.hid_vsslCd = scwin.vsslCd;
  scwin.hid_vsslNm = scwin.vsslNm;
  scwin.hid_portCnt = scwin.portCnt;
  scwin.hid_portCd = scwin.portCd;
  scwin.hid_portNm = scwin.portNm;
  scwin.hid_mrn = scwin.mrn;
  scwin.hid_mblNo = scwin.mblNo;
  scwin.hid_cntrNo = scwin.cntrNo;
  scwin.hid_type = scwin.type;
  scwin.strManifestMdifyUrl = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_04b.xml";

  // <!------- Popup Check 용 Hidden 값 ---------->
  scwin.hid_chkVsslCd;
  scwin.hid_chkPortCd;
  scwin.pos_groupCode = 0;
  scwin.ed_shpCoMark = ""; // 선사부호

  // ed_portcntGrd.UpperFlag = 1
  // ed_portcntGrd.Language = 0
  // ed_portcntGrd.Format = "##########"
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD100",
    compID: "lc_blTypCd"
  } // B/L Type
  , {
    grpCd: "SD115",
    compID: "lc_cargoClsCd"
  } // 화물구분
  , {
    grpCd: "OP266",
    compID: "lc_dsmbrkFrgtCd"
  } // 하선물품
  , {
    grpCd: "SD104",
    compID: "lc_assgnClsCd"
  } // 배정구분
  , {
    grpCd: "SD144",
    compID: "lc_mcomAssgnClsCd"
  } // 당사배정구분
  , {
    grpCd: "SD116",
    compID: "lc_packUnitCd,gr_containerList:packUnitCd"
  } // 포장단위
  , {
    grpCd: "OP101",
    compID: "gr_containerList:cntrSizCd"
  } // 컨테이너Size
  , {
    grpCd: "OP102",
    compID: "gr_containerList:cntrTypCd"
  } // 컨테이너Type
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallback);
  var lobranCd = scwin.sLobranCd;
  var portCd = "";
  var portNm = "";
  if (lobranCd == "6AA") {
    portCd = "KRPUS";
    portNm = "BUSAN";
  } else if (lobranCd == "4AA") {
    portCd = "KRICN";
    portNm = "INCHEON INTL APT/SEOUL";
  } else if (lobranCd == "5AA") {
    portCd = "KRKAN";
    portNm = "GWANGYANG";
  } else if (lobranCd == "6BB") {
    portCd = "KRUSN";
    portNm = "ULSAN";
  }
  ed_dischgPortCd.setValue(portCd);
  ed_dischgPortNm.setValue(portNm);
  ed_arrvlportDt.setValue(scwin.strDate);
  //ed_portcntGrd.setValue("0001")
  ed_totWt.setValue("10000");
  ch_stdBlYn.setValue("1");

  //test data
  //ed_mrn.setValue("06DSCO03013")
  scwin.f_defaultValue();
};
scwin.commonCodeCallback = function () {
  lc_blTypCd.setValue("S");
  lc_cargoClsCd.setValue("I");
  lc_dsmbrkFrgtCd.setValue("SD");
  if (scwin.type) {
    scwin.f_OpenRetrieve();
  }
};

//-------------------------------------------------------------------------
// function name : f_defaultValue      
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);

  // 데이터셋 헤더 초기화
  // scwin.f_createDsSearchCondHeader()
  // f_createDsContainerListHeader();
  //f_createDsManifestListHeader();
  //f_createDsContainerListHeader();

  // 버튼 초기화
  $c.gus.cfDisableAllBtn($p); //2006.03.02
  $c.gus.cfEnableObj($p, btn_manifestListCopyRowMBl, true);

  // 입력항목 disable
  //$c.gus.cfDisableObjects([ed_vsslCd, ed_vsslNm, ed_portcnt, ed_portCd, ed_portNm]);
  // gr_containerList.TitleHeight = "30"
  ed_vsslCd.setStyle("background-color", "#ffffff");
  ed_portcnt.setStyle("background-color", "#ffffff");
  ed_portCd.setStyle("background-color", "#ffffff");
};

//-------------------------------------------------------------------------
// 넘어온 값으로 조회
//-------------------------------------------------------------------------
scwin.f_OpenRetrieve = function () {
  ed_vsslCd.setValue(scwin.vsslCd);
  ed_vsslNm.setValue(scwin.vsslNm);
  ed_portcnt.setValue(scwin.portCnt);
  ed_portCd.setValue(scwin.portCd);
  ed_portNm.setValue(scwin.portNm);
  ed_mrn.setValue(scwin.mrn);
  ed_msn.setValue(scwin.msn);
  ed_hsn.setValue(scwin.hsn);
  ed_mBl.setValue(scwin.mblNo);
  ds_searchCond.set("msn", scwin.msn == "" ? -1 : scwin.msn);
  ds_searchCond.set("hsn", scwin.hsn == "" ? -1 : scwin.hsn);
  ds_searchCond.set("cntrNo", scwin.cntrNo);
  ds_searchCond.set("gubun", 1);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function (e) {
  $c.gus.cfInitObjects($p, tbl_searchCondition);
};

// 조회
scwin.f_Retrieve = function (e) {
  // 필수 조회조건 확인 (모선항차 / MRN)
  if (ed_vsslCd.getValue().trim() == "" && ed_portcnt.getValue().trim() == "" && ed_portCd.getValue().trim() == "" && ed_mrn.getValue().trim() == "") {
    // 모선항차 / MRN 정보가 입력되어야 합니다.
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("모선항차 또는 MRN"));
    return;
  }

  // 필수 조회조건 확인 (모선항차)
  if (ed_vsslCd.getValue().trim() != "" || ed_portcnt.getValue().trim() != "" || ed_portCd.getValue().trim() != "") {
    if (ed_vsslCd.getValue() == "") {
      // 선박은 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("선박"));
      ed_vsslCd.focus();
      return;
    } else if (ed_portcnt.getValue().trim() == "") {
      // 항차는 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("항차"));
      ed_portcnt.focus();
      return;
    } else if (ed_portCd.getValue().trim() == "") {
      // 항구는 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("항구"));
      ed_portcnt.focus();
      return;
    }
  } else if (ed_mrn.getValue().trim() == "") {
    // 필수 조회조건 확인 (MRN)
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    ed_mrn.focus();
    return;
  }

  // 그리드 조회건수 초기화
  tbx_totalRows.setValue(0);
  tbx_totalRows2.setValue(0);
  ds_manifestList.removeAll();
  ds_containerList.removeAll();

  // cfShowDSWaitMsg(gr_manifestList)
  // cfShowDSWaitMsg(gr_containerList)

  //ds_searchCond.setJSON({});
  //ds_searchCond.set("vsslCd", ed_vsslCd.getValue());
  //ds_searchCond.set("vsslNm", ed_vsslNm.getValue());
  //ds_searchCond.set("portcnt", ed_portcnt.getValue());
  //ds_searchCond.set("portCd", ed_portCd.getValue());
  //ds_searchCond.set("portNm", ed_portNm.getValue());
  //ds_searchCond.set("mrn", ed_mrn.getValue());
  ds_searchCond.set("msn", ed_msn.getValue() == "" ? -1 : ed_msn.getValue());
  ds_searchCond.set("hsn", ed_hsn.getValue() == "" ? -1 : ed_hsn.getValue());
  //ds_searchCond.set("mblNo", ed_mBl.getValue());
  //ds_searchCond.set("cntrNo", ed_cntrNo.getValue());
  ds_searchCond.set("gubun", 1);
  $c.sbm.execute($p, sbm_retrieve);

  // gr_manifestList.setColumnProperty('mrn', 'edit', false)
  // gr_manifestList.setColumnProperty('msn', 'edit', false)
  // gr_manifestList.setColumnProperty('hsn', 'edit', false)
  // gr_manifestList.setColumnProperty('mblNo', 'edit', false)
  // gr_manifestList.setColumnProperty('hblNo', 'edit', false)

  scwin.containerAdd = "0";
  scwin.containerSubAdd = "0";
};

//------------------------------------------------------------------------------------------//
// BL자동셋팅
//------------------------------------------------------------------------------------------//
scwin.f_manifestListCopyRowMBl = function (e) {
  scwin.containerAdd = "9";
  scwin.containerSubAdd = "90";
  scwin.sel_row = ds_manifestList.getRowPosition();
  scwin.sel_rowSave = ds_manifestListSave.getRowPosition();
  var autoVal = 0;
  var autoCnt = "";
  var lobranCd = scwin.sLobranCd;
  var portCd = "";
  var portNm = "";
  if (lobranCd == "6AA") {
    portCd = "KRPUS";
    portNm = "BUSAN";
  } else if (lobranCd == "4AA") {
    portCd = "KRICN";
    portNm = "INCHEON INTL APT/SEOUL";
  } else if (lobranCd == "5AA") {
    portCd = "KRKAN";
    portNm = "GWANGYANG";
  } else if (lobranCd == "6BB") {
    portCd = "KRUSN";
    portNm = "ULSAN";
  }
  for (h = 0; h <= ds_manifestList.getRowCount(); h++) {
    if (ds_manifestList.getCellData(h, "mrn").substring(0, 5) == "00000") {
      autoVal = autoVal + 1;
    }
  }
  autoCnt = autoVal + "";
  for (r = autoCnt.length; r < 11; r++) {
    autoCnt = "0" + autoCnt;
  }
  ds_manifestList.insertRow();
  var rowPos = ds_manifestList.getRowCount() - 1;
  ds_manifestList.setRowPosition(rowPos);
  // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가
  for (var i = 0; i < ds_manifestList.getTotalCol(); i++) {
    switch (ds_manifestList.getColumnID(i)) {
      case "hsn":
        ds_manifestList.setCellData(rowPos, "hsn", 0);
        break;
      case "mrn":
        ds_manifestList.setCellData(rowPos, "mrn", autoCnt);
        break;
      case "mblNo":
        ds_manifestList.setCellData(rowPos, "mblNo", autoCnt);
        break;
      case "hblNo":
        ds_manifestList.setCellData(rowPos, "hblNo", autoCnt);
        break;
      case "stdBlYn":
        ds_manifestList.setCellData(rowPos, "stdBlYn", 1);
        break;
      case "arrvlportDt":
        ds_manifestList.setCellData(rowPos, "arrvlportDt", scwin.strDate);
        break;
      case "dischgPortCd":
        ds_manifestList.setCellData(rowPos, "dischgPortCd", portCd);
        ds_manifestList.setCellData(rowPos, "dischgPortNm", portNm);
        break;
      case "portcnt":
        ds_manifestList.setCellData(rowPos, "portcnt", "0001");
        break;
      case "totWt":
        ds_manifestList.setCellData(rowPos, "totWt", "10000");
        break;
      case "blTypCd":
        ds_manifestList.setCellData(rowPos, "blTypCd", "S");
        break;
      case "cargoClsCd":
        ds_manifestList.setCellData(rowPos, "cargoClsCd", "I");
        break;
      case "dsmbrkFrgtCd":
        ds_manifestList.setCellData(rowPos, "dsmbrkFrgtCd", "SD");
        break;
      case "autoSetting":
        ds_manifestList.setCellData(rowPos, "autoSetting", 1);
        break;
      case "packCnt":
        ds_manifestList.setCellData(rowPos, "packCnt", 0);
        break;
      case "totCbm":
        ds_manifestList.setCellData(rowPos, "totCbm", 0);
        break;
      default:
        ds_manifestList.setCellData(rowPos, ds_manifestList.getColumnID(i), ds_manifestList.getCellData(scwin.sel_row, ds_manifestList.getColumnID(i)));
        break;
    }
  }
  gr_manifestList.setColumnReadOnly('mrn', true);
  gr_manifestList.setColumnReadOnly('msn', true);
  gr_manifestList.setColumnReadOnly('hsn', true);
  gr_manifestList.setColumnReadOnly('mblNo', true);
  gr_manifestList.setColumnReadOnly('hblNo', true);
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
  gr_manifestList.setFocusedCell(rowPos, 0);

  // 배경색 설정
  scwin.f_setManifestGridColor(rowPos);
};

//엑셀 파일 업로드
scwin.f_upload = function () {
  let options = {
    headerExist: 1,
    header: 1,
    type: "1",
    startRowIndex: 0,
    footerExist: "0"
  };
  udc_topGrd1.uploadGridViewExcel(gr_temp_containerList, options);
};

// 업로드 후 처리
scwin.gr_temp_containerList_onfilereadend = function (value) {
  scwin.f_import();
};
scwin.f_import = function () {
  var insCnt = 0;
  var updCnt = 0;
  for (var i = 0; i < ds_tmp_cntr.getRowCount(); i++) {
    var value = ds_tmp_cntr.getCellData(i, "cntrNo");
    var arr = ds_containerList.getMatchedIndex("cntrNo", value);
    var row = arr.length > 0 ? arr[0] : -1;
    if (row < 0) {
      row = ds_containerList.insertRow();
      insCnt++;
    } else {
      updCnt++;
    }
    var xrayVal = ds_tmp_cntr.getCellData(i, "xrayLupTrgtYn");
    if (xrayVal == "Yes") {
      ds_tmp_cntr.setCellData(i, "xrayLupTrgtYn", 1);
    } else if (xrayVal == "No") {
      ds_tmp_cntr.setCellData(i, "xrayLupTrgtYn", 0);
    }
    ds_containerList.setCellData(row, "cntrNo", value);
    ds_containerList.setCellData(row, "cntrSizCd", ds_tmp_cntr.getCellData(i, "cntrSizCd"));
    ds_containerList.setCellData(row, "cntrTypCd", ds_tmp_cntr.getCellData(i, "cntrTypCd"));
    ds_containerList.setCellData(row, "sealNo1", ds_tmp_cntr.getCellData(i, "sealNo1"));
    ds_containerList.setCellData(row, "packCnt", ds_tmp_cntr.getCellData(i, "packCnt"));
    ds_containerList.setCellData(row, "packUnitCd", "GT");
    ds_containerList.setCellData(row, "xrayLupTrgtYn", ds_tmp_cntr.getCellData(i, "xrayLupTrgtYn"));
    ds_containerList.setCellData(row, "wt", ds_tmp_cntr.getCellData(i, "wt"));
  }
  tbx_totalRows2.setValue(ds_containerList.getRowCount());
  $c.gus.cfAlertMsg($p, "수정된 개수 : " + updCnt + "개, 추가된 개수 : " + insCnt + "개");
};

//-------------------------------------------------------------------------
// function name : f_manifestListAddRowMBl
// function desc : 적하목록 행추가
//-------------------------------------------------------------------------
scwin.f_manifestListAddRowMBl = function (e) {
  scwin.sel_row = ds_manifestList.getRowPosition();
  scwin.sel_rowSave = ds_manifestListSave.getRowPosition();
  ds_manifestList.insertRow();
  var rowPos = ds_manifestList.getRowCount() - 1;
  ds_manifestList.setRowPosition(rowPos);
  // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가

  lc_blTypCd.setValue("C");
  lc_cargoClsCd.setValue("I");
  lc_dsmbrkFrgtCd.setValue("GT");
  for (var i = 0; i < ds_manifestList.getTotalCol(); i++) {
    switch (ds_manifestList.getColumnID(i)) {
      case "msn":
        ds_manifestList.setCellData(rowPos, "msn", 0);
        break;
      case "hsn":
        ds_manifestList.setCellData(rowPos, "hsn", 0);
        break;
      case "mblNo":
      case "hblNo":
      case "stdBlYn":
        break;
      case "arrvlportDt":
        ds_manifestList.setCellData(rowPos, "arrvlportDt", scwin.strDate);
        break;
      default:
        ds_manifestList.setCellData(rowPos, ds_manifestList.getColumnID(i), ds_manifestList.getCellData(scwin.sel_row, ds_manifestList.getColumnID(i)));
        break;
    }
  }
  ds_manifestList.setCellData(rowPos, "odrCreateYn", ds_manifestList.getCellData(rowPos, "odrCreateYn") + 1);

  //저장 데이타셋 셋팅
  ds_manifestListSave.insertRow();
  ds_manifestListSave.setRowPosition(ds_manifestListSave.getRowCount() - 1);

  // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가
  for (var i = 0; i < ds_manifestListSave.getTotalCol(); i++) {
    switch (ds_manifestListSave.getColumnID(i)) {
      case "msn":
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), "msn", 0);
        break;
      case "hsn":
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), "hsn", 0);
        break;
      case "mblNo":
      case "hblNo":
        break;
      case "arrvlportDt":
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), "arrvlportDt", scwin.strDate);
        break;
      default:
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), ds_manifestListSave.getColumnID(i), ds_manifestListSave.getCellData(scwin.sel_rowSave, ds_manifestListSave.getColumnID(i)));
        break;
    }
  }
  ed_packCnt.setValue(0);
  ed_totWt.setValue(0);
  ed_totCbm.setValue(0);
  ed_mfCommNm.setReadOnly(false);
  gr_manifestList.setColumnReadOnly('mrn', true);
  scwin.containerAdd = "0";
  ds_manifestListSave.setCellData(rowPos, "odrCreateYn", ds_manifestListSave.getCellData(rowPos, "odrCreateYn") + 1);
  ds_manifestList.setCellData(rowPos, "odrCreateYn", ds_manifestList.getCellData(rowPos, "odrCreateYn") + 1);

  // 배경색 설정
  scwin.f_setManifestGridColor(rowPos);
};

//-------------------------------------------------------------------------
// function name : f_manifestListAddRowHBl
// function desc : 적하목록 행추가
//-------------------------------------------------------------------------
scwin.f_manifestListAddRowHBl = function (e) {
  scwin.sel_row = ds_manifestList.getRowPosition();
  scwin.sel_rowSave = ds_manifestListSave.getRowPosition();
  ds_manifestList.insertRow();
  var rowPos = ds_manifestList.getRowCount() - 1;
  ds_manifestList.setRowPosition(rowPos);

  // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가
  for (var i = 0; i < ds_manifestList.getTotalCol(); i++) {
    switch (ds_manifestList.getColumnID(i)) {
      case "hsn":
        // ds_manifestList.setCellData(rowPos, ds_manifestList.getColumnID(i), new Object(scwin.f_getHsnMax(ds_manifestList.getCellData(rowPos, "msn"))) + 1)
        ds_manifestList.setCellData(rowPos, ds_manifestList.getColumnID(i), scwin.f_getHsnMax(ds_manifestList.getCellData(rowPos, "msn")) + 1);
        break;
      case "hblNo":
      case "stdBlYn":
        break;
      case "arrvlportDt":
        ds_manifestList.setCellData(rowPos, "arrvlportDt", scwin.strDate);
        break;
      default:
        ds_manifestList.setCellData(rowPos, ds_manifestList.getColumnID(i), ds_manifestList.getCellData(scwin.sel_row, ds_manifestList.getColumnID(i)));
        break;
    }
  }
  ds_manifestList.setCellData(rowPos, "odrCreateYn", ds_manifestList.getCellData(rowPos, "odrCreateYn") + 1);

  //저장 데이타셋 셋팅
  ds_manifestListSave.insertRow();
  ds_manifestListSave.setRowPosition(ds_manifestListSave.getRowCount() - 1);
  // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가

  for (var i = 0; i < ds_manifestListSave.getTotalCol(); i++) {
    switch (ds_manifestListSave.getColumnID(i)) {
      case "hsn":
        // ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), ds_manifestListSave.getColumnID(i), new Object(scwin.f_getHsnMax(ds_manifestListSave.getCellData(ds_manifestListSave.getRowPosition(), "msn"))) + 1)
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), ds_manifestListSave.getColumnID(i), scwin.f_getHsnMax(ds_manifestListSave.getCellData(ds_manifestListSave.getRowPosition(), "msn")) + 1);
        break;
      case "hblNo":
        break;
      case "arrvlportDt":
        ds_manifestListSave.setCellData(rowPos, "arrvlportDt", scwin.strDate);
        break;
      default:
        ds_manifestListSave.setCellData(ds_manifestListSave.getRowPosition(), ds_manifestListSave.getColumnID(i), ds_manifestListSave.getCellData(scwin.sel_rowSave, ds_manifestListSave.getColumnID(i)));
        break;
    }
  }
  ds_manifestListSave.setCellData(rowPos, "odrCreateYn", ds_manifestListSave.getCellData(rowPos, "odrCreateYn") + 1);
  ds_manifestList.setCellData(rowPos, "odrCreateYn", ds_manifestList.getCellData(rowPos, "odrCreateYn") + 1);
  ed_packCnt.setValue(0);
  ed_totWt.setValue(0);
  ed_totCbm.setValue(0);
  ed_mfCommNm.setReadOnly(true);
  gr_manifestList.setColumnReadOnly('mrn', true);
  scwin.containerAdd = "0";

  // 배경색 설정
  scwin.f_setManifestGridColor(rowPos);
};

//-------------------------------------------------------------------------
// function name : f_manifestListModifyRow
// function desc : 목록 행수정
//-------------------------------------------------------------------------
scwin.f_manifestListModifyRow = function (e) {
  var row = ds_manifestList.getRowPosition();
  if (ds_manifestList.getCellData(row, "impCvsslOrder") == "" && ds_manifestList.getCellData(row, "impGnrlOrder") == "") {
    //gr_manifestList.Editable = "true"
    gr_manifestList.setColumnReadOnly('mrn', true);
    gr_manifestList.setColumnReadOnly('msn', true);
    gr_manifestList.setColumnReadOnly('hsn', true);
    gr_manifestList.setColumnReadOnly('mblNo', false);
    gr_manifestList.setColumnReadOnly('hblNo', false);
    scwin.containerAdd = "1";
  } else {
    $c.gus.cfAlertMsg($p, row + "번째 MRN은 이미 오더완료된 상태이므로 수정 불가합니다.");
    scwin.containerAdd = "0";
    return;
  }
  ed_mfCommNm.setReadOnly(false);
};

//-------------------------------------------------------------------------
// function name : f_getHsnMax
// function desc : HSN - MAX값 계산
//-------------------------------------------------------------------------
scwin.f_getHsnMax = function (msn) {
  var maxHsn = 0;
  for (var i = 0; i < ds_manifestList.getRowCount(); i++) {
    if (msn == ds_manifestList.getCellData(i, "msn")) {
      var currHsn = Number(ds_manifestList.getCellData(i, "hsn") || 0);
      maxHsn = Math.max(maxHsn, currHsn);
    }
  }
  return maxHsn;
};

//-------------------------------------------------------------------------
// function name : f_manifestListRegistMBL
// function desc : 적하목록 Master BL 생성
//-------------------------------------------------------------------------
scwin.f_manifestListRegistMBL = async function (e) {
  if (ed_mrn.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    return;
  }
  if (await $c.win.confirm($p, MSG_CM_CRM_016)) {
    $c.sbm.execute($p, sbm_regist);
  }
};

//-------------------------------------------------------------------------
// function name : f_manifestListUndo
// function desc : 적하목록 취소
//-------------------------------------------------------------------------
scwin.f_manifestListUndo = function () {
  //ds_manifestList.undoAll()
  //ds_manifestListSave.undoAll()
  $c.data.undoAll($p, ds_manifestList);
  $c.data.undoAll($p, ds_manifestListSave);

  // Temp 데이터셋 데이터 초기화
  ds_tempContainerList.removeAll();

  // 복사된 컨테이너 목록 취소
  scwin.f_containerListUndo();
  ds_manifestList.setRowPosition(scwin.sel_row);
  ds_manifestListSave.setRowPosition(scwin.sel_rowSave);
  gr_manifestList.setColumnReadOnly('mrn', true);
  gr_manifestList.setColumnReadOnly('msn', true);
  gr_manifestList.setColumnReadOnly('hsn', true);
  gr_manifestList.setColumnReadOnly('mblNo', true);
  gr_manifestList.setColumnReadOnly('hblNo', true);
  scwin.containerAdd = "0";
};

//-------------------------------------------------------------------------
// function name : f_manifestListDeleteRow
// function desc : 컨테이너 목록 행삭제
//-------------------------------------------------------------------------
scwin.f_manifestListDeleteRow = function () {
  var row = ds_manifestList.getRowPosition();
  if (row < 0) return;
  if (ds_manifestList.getRowStatusValue(row) == 2) {
    // 신규 row
    ds_manifestList.removeRow(row);
    ds_manifestListSave.removeRow(row);
    ds_manifestList.setRowPosition(row - 1);
  } else {
    // 기존 row
    ds_manifestList.deleteRow(row);
    ds_manifestListSave.deleteRow(row);
  }
  scwin.containerAdd = "0";
};

//-------------------------------------------------------------------------
// function name : f_containerListCutRow
// function desc : 컨테이너 목록 잘라내기
//-------------------------------------------------------------------------
scwin.f_containerListCutRow = function () {
  // Temp 데이터셋 데이터 초기화
  ds_tempContainerList.removeAll();
  $c.gus.cfCopyDataSetHeader($p, ds_containerList, ds_tempContainerList);
  for (var i = 0; i < ds_containerList.getRowCount(); i++) {
    // 선택된 Row의 데이터 임시 데이터 셋에 추가
    // if (ds_containerList.RowMark(i) == 1) {
    if (ds_containerList.getRowPosition() == i) {
      ds_tempContainerList.insertRow();
      ds_tempContainerList.setRowPosition(ds_tempContainerList.getRowCount() - 1);
      for (var j = 0; j < ds_containerList.getTotalCol(); j++) {
        ds_tempContainerList.setCellData(ds_tempContainerList.getRowPosition(), ds_containerList.getColumnID(j), ds_containerList.getCellData(i, ds_containerList.getColumnID(j)));
      }

      // 해당 Row 삭제
      ds_containerList.deleteRow(i);
    }
  }
};

//-------------------------------------------------------------------------
// function name : f_containerListPasteRow
// function desc : 컨테이너 목록 붙여넣기
//-------------------------------------------------------------------------
scwin.f_containerListPasteRow = function () {
  // 복사된 데이터셋 존재 확인
  if (ds_tempContainerList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  }

  // MRN, MSN, HSN 값 확인
  var v_row = ds_manifestList.getRowPosition();
  var v_rowSave = ds_manifestListSave.getRowPosition();
  if (ds_manifestList.getCellData(v_row, "mrn").trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("MRN"));
    return;
  }
  if (ds_manifestList.getCellData(v_row, "msn").trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("MSN"));
    return;
  }
  if (ds_manifestList.getCellData(v_row, "hsn").trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_049, new Array("HSN"));
    return;
  }
  for (var i = 0; i < ds_tempContainerList.getRowCount(); i++) {
    // 선택된 Row의 데이터를 컨테이너 목록 데이터 셋에 추가
    ds_containerList.insertRow();
    ds_containerList.setRowPosition(ds_containerList.getRowCount() - 1);
    for (var j = 0; j < ds_containerList.getTotalCol(); j++) {
      switch (ds_tempContainerList.getColumnID(j)) {
        case "msn":
          ds_containerList.setCellData(ds_containerList.getRowPosition(), "msn", ds_manifestList.getCellData(v_row, "msn"));
          break;
        case "hsn":
          ds_containerList.setCellData(ds_containerList.getRowPosition(), "hsn", ds_manifestList.getCellData(v_row, "hsn"));
          break;
        default:
          ds_containerList.setCellData(ds_containerList.getRowPosition(), ds_tempContainerList.getColumnID(j), ds_tempContainerList.getCellData(i, ds_tempContainerList.getColumnID(j)));
          break;
      }
    }
  }

  // todo datalist.sum
  ed_packCnt.setValue(ds_containerList.Sum(ds_containerList.getColumnIndex("packCnt"), 0, ds_containerList.getRowCount()));

  // Temp 데이터셋 데이터 초기화
  ds_tempContainerList.removeAll();
  ds_manifestListSave.setCellData(ds_manifestList.getRowPosition(), "odrCreateYn", ds_manifestListSave.getCellData(ds_manifestList.getRowPosition(), "odrCreateYn") + 1);
  ds_manifestList.setCellData(ds_manifestList.getRowPosition(), "odrCreateYn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "odrCreateYn") + 1);
};

//-------------------------------------------------------------------------
// function name : f_containerListAddRow
// function desc : 컨테이너 목록 행추가
//-------------------------------------------------------------------------
scwin.f_containerListAddRow = function () {
  if (ds_manifestList.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, "선택된 적하목록이 없습니다.");
    return;
  }

  // if (!ch_bulkYn.checked) {
  if (ch_bulkYn.getValue() != "1") {
    //gr_containerList.DataId = "ds_containerList";

    ds_containerList.insertRow();
    ds_containerList.setRowPosition(ds_containerList.getRowCount() - 1);
    ds_containerList.setCellData(ds_containerList.getRowPosition(), "mrn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn"));
    ds_containerList.setCellData(ds_containerList.getRowPosition(), "msn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "msn"));
    ds_containerList.setCellData(ds_containerList.getRowPosition(), "hsn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "hsn"));
    ds_containerList.setCellData(ds_containerList.getRowPosition(), "xrayLupTrgtYn", 0);
    ds_manifestListSave.setCellData(ds_manifestList.getRowPosition(), "odrCreateYn", ds_manifestListSave.getCellData(ds_manifestList.getRowPosition(), "odrCreateYn") + 1);
    ds_manifestList.setCellData(ds_manifestList.getRowPosition(), "odrCreateYn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "odrCreateYn") + 1);
  }

  /*
      else(ch_bulkYn.checked){
          gr_containerList.DataId = "ds_containerList";
          if( ds_containerList.CountRow == 0 ){
              ds_containerList.AddRow();
              ds_containerList.NameValue(ds_containerList.RowPosition, "cntrNo") = 'IN BULK';
          }
      }
  */

  if (ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn").substring(0, 5) == "00000") {
    ds_containerList.setCellData(ds_containerList.getRowPosition(), "autoSetting", 1);
  }
  scwin.containerSubAdd = "0";
};

//-------------------------------------------------------------------------
// function name : f_containerListModifyRow
// function desc : 컨테이너 목록 행수정
//-------------------------------------------------------------------------
scwin.f_containerListModifyRow = function () {
  var row = ds_manifestList.getRowPosition();
  if (ds_manifestList.getCellData(row, "bulkYn") != 1) {
    // gr_containerList.ColumnProp('cntrNo', 'Edit') = "UPPER";
    // gr_containerList.ColumnProp('cntrSizCd', 'Edit') = "Any";
    // gr_containerList.ColumnProp('cntrTypCd', 'Edit') = "UPPER";
    // gr_containerList.ColumnProp('sealNo1', 'Edit') = "Any";
    // gr_containerList.ColumnProp('packCnt', 'Edit') = "Any";
    // gr_containerList.ColumnProp('packUnitCd', 'Edit') = "Any";
    // gr_containerList.ColumnProp('xrayLupTrgtYn', 'Edit') = "Any";  
    // gr_containerList.ColumnProp('wt', 'Edit') = "Any";
    gr_containerList.setColumnReadOnly('cntrNo', false);
    gr_containerList.setCellAllowChar(row, 'cntrNo', "A-Z");
    gr_containerList.setColumnReadOnly('cntrSizCd', false);
    gr_containerList.setColumnReadOnly('cntrTypCd', false);
    gr_containerList.setCellAllowChar(row, 'cntrTypCd', "A-Z");
    gr_containerList.setColumnReadOnly('sealNo1', false);
    gr_containerList.setColumnReadOnly('packCnt', false);
    gr_containerList.setColumnReadOnly('packUnitCd', false);
    gr_containerList.setColumnReadOnly('xrayLupTrgtYn', false);
    gr_containerList.setColumnReadOnly('wt', false);
  } else {
    gr_containerList.setColumnReadOnly('cntrNo', true);
    gr_containerList.setColumnReadOnly('cntrSizCd', true);
    gr_containerList.setColumnReadOnly('cntrTypCd', true);
    gr_containerList.setColumnReadOnly('sealNo1', true);
    gr_containerList.setColumnReadOnly('packCnt', true);
    gr_containerList.setColumnReadOnly('packUnitCd', true);
    gr_containerList.setColumnReadOnly('xrayLupTrgtYn', true);
    gr_containerList.setColumnReadOnly('wt', true);
  }
  ds_manifestListSave.setCellData(row, "odrCreateYn", ds_manifestListSave.getCellData(row, "odrCreateYn") + 1);
  ds_manifestList.setCellData(row, "odrCreateYn", ds_manifestList.getCellData(row, "odrCreateYn") + 1);
  scwin.containerSubAdd = "1";
};

//-------------------------------------------------------------------------
// function name : f_containerListDeleteRow
// function desc : 컨테이너 목록 행삭제
//-------------------------------------------------------------------------
scwin.f_containerListDeleteRow = function () {
  var containerRow = ds_containerList.getRowPosition();
  if (containerRow < 0) return;
  if (ds_containerList.getRowStatusValue(containerRow) == 2) {
    // 신규 row
    ds_containerList.removeRow(containerRow);
    ds_containerList.setRowPosition(containerRow - 1);
  } else {
    ds_containerList.deleteRow(containerRow);
  }
  scwin.containerSubAdd = "0";
  var row = ds_manifestList.getRowPosition();
  ds_manifestList.setCellData(row, "odrCreateYn", ds_manifestList.getCellData(row, "odrCreateYn") + 1);
  ds_manifestListSave.setCellData(row, "odrCreateYn", ds_manifestListSave.getCellData(row, "odrCreateYn") + 1);
};

//-------------------------------------------------------------------------
// function name : f_containerListUndo
// function desc : 컨테이너 목록 취소
//-------------------------------------------------------------------------
scwin.f_containerListUndo = function () {
  $c.data.undoAll($p, ds_containerList);
  // ds_containerList.clearMarked()
  //ds_containerList.clearRowStatus()

  scwin.containerSubAdd = "0";
  gr_containerList.setColumnReadOnly('cntrNo', true);
  gr_containerList.setColumnReadOnly('cntrSizCd', true);
  gr_containerList.setColumnReadOnly('cntrTypCd', true);
  gr_containerList.setColumnReadOnly('sealNo1', true);
  gr_containerList.setColumnReadOnly('packCnt', true);
  gr_containerList.setColumnReadOnly('packUnitCd', true);
  gr_containerList.setColumnReadOnly('xrayLupTrgtYn', true);
  gr_containerList.setColumnReadOnly('wt', true);
};

// 그리드 초기화
scwin.gridEmpty = function () {
  ds_containerListEmpty.removeAll();
  // gr_containerList.setDataSet("ds_containerListEmpty")
  return;
};

// 조회 완료 (데이타셋 로드완료)
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_searchCond.get("msn") == -1) {
    ds_searchCond.set("msn", "");
  }
  if (ds_searchCond.get("hsn") == -1) {
    ds_searchCond.set("hsn", "");
  }
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
    // ds_manifestList event=OnLoadCompleted(rowCnt)
    let rowCnt = ds_manifestList.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
      var lobranCd = scwin.sLobranCd;
      var portCd = "";
      var portNm = "";
      if (lobranCd == "6AA") {
        portCd = "KRPUS";
        portNm = "BUSAN";
      } else if (lobranCd == "4AA") {
        portCd = "KRICN";
        portNm = "INCHEON INTL APT/SEOUL";
      } else if (lobranCd == "5AA") {
        portCd = "KRKAN";
        portNm = "GWANGYANG";
      } else if (lobranCd == "6BB") {
        portCd = "KRUSN";
        portNm = "ULSAN";
      }
      ed_dischgPortCd.setValue(portCd);
      ed_dischgPortNm.setValue(portNm);
      ed_arrvlportDt.setValue(scwin.strFromDate);
      ed_portcntGrd.setValue("0001");
      ed_totWt.setValue("10000");
      // ch_stdBlYn.checked = true
      ch_stdBlYn.setValue("1");
      lc_blTypCd.setValue("S");
      lc_cargoClsCd.setValue("I");
      lc_dsmbrkFrgtCd.setValue("SD");
    } else {
      // 그리드 조회건수 초기화
      tbx_totalRows.setValue(ds_manifestList.getRowCount());
      if (ds_manifestList.getCellData(0, "bulkYn") == "1") {
        ed_commCd.options.mandatory = true;
        ed_totWt.options.mandatory = true;
        // cfRefreshMandSign()
      }

      // 배경색 설정
      scwin.f_setManifestGridColor();
      let containerRowCnt = ds_containerList.getRowCount();
      if (containerRowCnt == 0) {
        if (ds_manifestList.getRowCount() > 0) $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
      }

      // 데이타셋 복사
      var features = "copyHeader=no,rowFrom=0,rowCnt=" + ds_manifestList.getRowCount();
      $c.gus.cfCopyDataSet($p, ds_manifestList, ds_manifestListSave, features);
      // ds_manifestListSave.ResetStatus()
      ds_manifestListSave.modifyAllStatus("R");

      //$c.gus.cfGoPrevPosition(gr_manifestList, scwin.pos_groupCode)
      ds_manifestList.setRowPosition(0);
      gr_manifestList.setFocusedCell(0, 0);
      $c.gus.cfEnableBtnOnly($p, [btn_manifestListAddRowMBl, btn_manifestListAddRowHBl, btn_manifestListUndo, btn_manifestListModifyRowHBl, btn_manifestListDeleteRow, btn_registMasterBL]);
    }
  }
};

// 삭제row 배경색 설정(red)
scwin.f_setManifestGridColor = function (row) {
  // 특정 row만 처리
  if (row != null) {
    if (gr_manifestList.getCellData(row, "colorVal") == "0") {
      gr_manifestList.setRowStyle(row, "background-color", "red");
    }
  } else {
    // 전체 row 처리
    let rowCount = ds_manifestList.getTotalRow();
    for (var i = 0; i < rowCount; i++) {
      if (gr_manifestList.getCellData(i, "colorVal") == "0") {
        gr_manifestList.setRowStyle(i, "background-color", "red");
      }
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.pos_groupCode = 0;
scwin.f_save = async function () {
  // 공통 mandatory
  gr_manifestList.getCellInfo("mrn").options.mandatory = true;
  gr_manifestList.getCellInfo("mrn").options.maxLenght = "11";
  gr_manifestList.getCellInfo("msn").options.mandatory = true;
  gr_manifestList.getCellInfo("mblNo").options.mandatory = true;
  gr_manifestList.getCellInfo("hsn").options.mandatory = true;
  gr_manifestList.getCellInfo("hblNo").options.mandatory = true;
  gr_manifestList.getCellInfo("blTypCd").options.mandatory = true;
  gr_manifestList.getCellInfo("cargoClsCd").options.mandatory = true;
  gr_manifestList.getCellInfo("portcnt").options.mandatory = true;
  gr_manifestList.getCellInfo("dischgPortCd").options.mandatory = true;
  gr_manifestList.getCellInfo("arrvlportDt").options.mandatory = true;
  gr_containerList.getCellInfo("cntrNo").options.mandatory = true;
  gr_containerList.getCellInfo("cntrSizCd").options.mandatory = true;
  gr_containerList.getCellInfo("cntrTypCd").options.mandatory = true;

  // bulk일 때만 추가 조건
  if (ch_bulkYn.getValue() == "1") {
    if (lc_blTypCd.getValue() != "E") {
      // B/L Type이 Empty Container가 아닐 때
      gr_manifestList.getCellInfo("totWt").options.mandatory = true;
      gr_manifestList.getCellInfo("totWt").options.notAllowed = "0";
    }
  }

  //컨테이너 배정목록의  변경한 데이터가 있는지 체크한다. 
  // if (ds_manifestList.IsUpdated == false && ds_containerList.IsUpdated == false) {
  if (ds_manifestList.getModifiedIndex().length == 0 && ds_containerList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("목록")); //변경된 정보가 없습니다.
    return;
  }

  //mrn,msn,hsn을 복사해 넣는다
  scwin.containerListCopy();

  // 필수 입력사항을 체크    
  if (await scwin.f_validChk()) {
    if (await scwin.validCheck()) {
      if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
        for (i = 0; i < ds_manifestList.getRowCount(); i++) {
          if (ds_manifestList.getRowStatusValue(i) == 2 || ds_manifestList.getRowStatusValue(i) == 1) {
            // 등록 || 수정
            if (ds_manifestList.getCellData(i, "bulkYn") == "1") {
              ds_manifestList.setCellData(i, "fioProcYn", 1);
              scwin.f_addInBulk(i);
            } else {
              ds_manifestList.setCellData(i, "fioProcYn", 0);
            }
            ds_manifestList.setCellData(i, "blProcYn", 1);
          }
        } // end for

        scwin.pos_groupCode = ds_manifestList.getRowPosition();
        $c.sbm.execute($p, sbm_save);
        //}					
      } else {
        // cfHideDSWaitMsg(gr_manifestList);
        // cfHideDSWaitMsg(gr_containerList);
      }
      //}
    }
  } else {
    // cfHideDSWaitMsg(gr_manifestList);
    // cfHideDSWaitMsg(gr_containerList);
  }
};

// 저장 완료
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    ed_mrn.setValue(ds_mrnList.getCellData(ds_mrnList.getRowCount(), "mrn"));
    scwin.f_Retrieve();
  } else {
    // 실패시
    $c.data.undoAll($p, ds_manifestList);
    $c.data.undoAll($p, ds_manifestListSave);
    $c.data.undoAll($p, ds_containerList);
  }
};

//-------------------------------------------------------------------------
// mrn,msn,hsn값을 컨테이너 리스트에 복사해 넣는다
//-------------------------------------------------------------------------
scwin.containerListCopy = function () {
  // for (j = 0; j < ds_manifestList.getRowCount(); j++) {
  //     for (i = 0; i < ds_containerList.getRowCount(); i++) {
  //         ds_containerList.setCellData(i, "mrn", ds_manifestList.getCellData(j, "mrn"))
  //         ds_containerList.setCellData(i, "msn", ds_manifestList.getCellData(j, "msn"))
  //         ds_containerList.setCellData(i, "hsn", ds_manifestList.getCellData(j, "hsn"))
  //     }
  // }

  for (var i = 0; i < ds_containerList.getRowCount(); i++) {
    var rowType = ds_containerList.getRowStatus(i);
    if (rowType == "U" || rowType == "I") {
      var rowMain = ds_manifestList.getRowPosition();
      ds_containerList.setCellData(i, "mrn", ds_manifestList.getCellData(rowMain, "mrn"));
      ds_containerList.setCellData(i, "msn", ds_manifestList.getCellData(rowMain, "msn"));
      ds_containerList.setCellData(i, "hsn", ds_manifestList.getCellData(rowMain, "hsn"));
    }
  }
};

//-------------------------------------------------------------------------
// 저장전 오더완료여부 check
//-------------------------------------------------------------------------
scwin.f_validOdrYn = function () {
  for (i = 0; i < ds_manifestList.getRowCount(); i++) {
    if (ds_manifestList.getCellData(i, "impCvsslOrder") != "" || ds_manifestList.getCellData(i, "impGnrlOrder") != "") {
      $c.gus.cfAlertMsg($p, i + "번째 MRN은 오더완료된 상태로 저장 불가합니다.");
    }
  }
};

//-------------------------------------------------------------------------
// 저장전 validation check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  //필수 입력사항을 체크
  // if (ch_bulkYn.checked) {
  let ret = false;
  if (ch_bulkYn.getValue() == "1") {
    ret = await $c.gus.cfValidate($p, [gr_manifestList]);
    if (ret) {
      //tb_manifestList
      return true;
    } else {
      return false;
    }
  } else {
    let ret1 = await $c.gus.cfValidate($p, [gr_manifestList]);
    let ret2 = await $c.gus.cfValidate($p, [gr_containerList]);
    if (ret1 && ret2) {
      return true;
    } else {
      return false;
    }
  }
};

// 정합성 체크
scwin.validCheck = async function () {
  var row = ds_manifestList.getRowPosition();
  var updateRow = new Array();
  var cnt = 0;
  for (i = 0; i < ds_manifestList.getRowCount(); i++) {
    // if (ds_manifestList.RwStatus(i) == 1 || ds_manifestList.RowStatus(i) == 3) {
    if (ds_manifestList.getRowStatusValue(i) == 2 || ds_manifestList.getRowStatusValue(i) == 1) {
      // 등록 || 수정
      updateRow[cnt] = i;
      cnt++;
    }
  }
  for (k = 0; k < updateRow.length; k++) {
    for (j = 0; j < ds_manifestList.getRowCount(); j++) {
      if (updateRow[k] != j) {
        if (ds_manifestList.getCellData(updateRow[k], "hsn") == "0" || ds_manifestList.getCellData(updateRow[k], "hsn") == "1") {
          hsn = ds_manifestList.getCellData(updateRow[k], "hsn");
        } else {
          hsn = "";
        }
        param = ds_manifestList.getCellData(j, "mrn") + ds_manifestList.getCellData(j, "msn") + ds_manifestList.getCellData(j, "hblNo"); //+ds_manifestList.NameValue(j, "hsn");
        param2 = ds_manifestList.getCellData(updateRow[k], "mrn") + ds_manifestList.getCellData(updateRow[k], "msn") + ds_manifestList.getCellData(updateRow[k], "hblNo") + hsn;

        //House B/L 
        if (param == param2) {
          if (param2.substring(0, 5) != "00000") {
            //alert(updateRow[k]+"번째 House B/L과 "+j+"번째 House B/L의 값이 일치합니다. <br> 동일한 House B/L은 사용할 수 없습니다.");
            if (!(await $c.win.confirm($p, updateRow[k] + "번째 House B/L과 " + j + "번째 House B/L의 값이 일치합니다. <br> 동일한 House B/L은 사용할 수 없습니다. <br> 계속 하사겠습니까"))) {
              ds_manifestList.setRowPosition(updateRow[k]);
              // gr_manifestList.SetColumn("hblNo")
              // gr_manifestList.SetColumn("hblNo")
              gr_manifestList.setFocusedCell(ds_manifestList.getRowPosition(), "hblNo");
              gr_manifestList.focus();
              return false;
            }
          }
        }
        if (ds_manifestList.getCellData(j, "mblNo") + ds_manifestList.getCellData(j, "hsn") == ds_manifestList.getCellData(updateRow[k], "mblNo") + ds_manifestList.getCellData(updateRow[k], "hsn")) {
          if (ds_manifestList.getCellData(updateRow[k], "mblNo").substring(0, 5) != "00000") {
            //alert(updateRow[k]+"번째 Mster B/L, HSN 과 "+j+"번째 Master B/L, HSN의 값이 일치합니다. <br> 동일한 Master B/L HSN은 사용할 수 없습니다.");
            if (!(await $c.win.confirm($p, updateRow[k] + "번째 Mster B/L, HSN 과 " + j + "번째 Master B/L, HSN의 값이 일치합니다. <br> 동일한 Master B/L HSN은 사용할 수 없습니다. <br> 계속 하사겠습니까"))) {
              ds_manifestList.setRowPosition(updateRow[k]);
              gr_manifestList.setFocusedCell(ds_manifestList.getRowPosition(), "hsn");
              gr_manifestList.focus();
              return false;
            }
          }
        }
      }
    }
    if (ds_manifestList.getCellData(updateRow[k], "bulkYn") == "1") {
      ds_manifestList.setCellData(updateRow[k], "btProcYn", 1);
      ds_manifestList.setCellData(updateRow[k], "fioProcYn", 1);
    } else {
      ds_manifestList.setCellData(updateRow[k], "blProcYn ", 0);
    }

    //타창고요구사항 반영 (당사배정구분의 값이 'B'로 시작하고 'ZZ'이면 배정창고는 필수입력)
    if (ds_manifestList.getCellData(updateRow[k], "mcomAssgnClsCd").substring(0, 1) == "B" || ds_manifestList.getCellData(updateRow[k], "mcomAssgnClsCd") == 'ZZ') {
      if (ds_manifestList.getCellData(updateRow[k], "assgnWhouseCd") == "") {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array(updateRow[k] + "번째 배정창고는")); // 성공적으로 저장하였습니다
        ds_manifestList.setRowPosition(updateRow[k]);
        gr_manifestList.setFocusedCell(ds_manifestList.getRowPosition(), "mrn");
        gr_manifestList.focus();
        return false;
      }
    }
  }
  //}
  return true;

  /*
      for(i=1; i<=ds_manifestList.CountRow; i++){
          for(j=1; j<=ds_manifestList.CountRow; j++){
              if(i != j){
                  if(ds_manifestList.NameValue(i, "hsn") == "0" || ds_manifestList.NameValue(i, "hsn") == "1"){
                      hsn = ds_manifestList.NameValue(i, "hsn");
                  }
                  else{
                      hsn = "";
                  }
  
                  param = ds_manifestList.NameValue(j, "mrn")+ds_manifestList.NameValue(j, "msn")+ds_manifestList.NameValue(j, "hblNo");//+ds_manifestList.NameValue(j, "hsn");
                  param2 = ds_manifestList.NameValue(i, "mrn")+ds_manifestList.NameValue(i, "msn")+ds_manifestList.NameValue(i, "hblNo")+hsn;
  
                  //House B/L 
                  if(param == param2){
                      alert(i+"번째 House B/L과 "+j+"번째 House B/L의 값이 일치합니다. <br> 동일한 House B/L은 사용할 수 없습니다.");
                      ds_manifestList.RowPosition = i;
                      gr_manifestList.SetColumn("hblNo");
                      gr_manifestList.Focus();
                      return false;
                  }
                 
  
                  if(ds_manifestList.NameValue(j, "mblNo")+ds_manifestList.NameValue(j, "hsn") == ds_manifestList.NameValue(i, "mblNo")+ds_manifestList.NameValue(i, "hsn")){
                      alert(i+"번째 Mster B/L, HSN 과 "+j+"번째 Master B/L, HSN의 값이 일치합니다. <br> 동일한 Master B/L HSN은 사용할 수 없습니다.");
                      ds_manifestList.RowPosition = j;
                      gr_manifestList.SetColumn("hsn");
                      gr_manifestList.Focus();
                      return false;
                  }
              }
          }
      }
      return true;
  */
};

//-------------------------------------------------------------------------
// function name : f_addInBulk
// function desc : 컨테이너 목록 행추가 (벌크)
//-------------------------------------------------------------------------
scwin.f_addInBulk = function (row) {
  if (ds_manifestList.getRowStatusValue(row) == 2) {
    if (ds_manifestList.getCellData(row, "bulkYn") == 1) {
      ds_containerList.insertRow();
      ds_containerList.setRowPosition(ds_containerList.getRowCount() - 1);
      ds_containerList.setCellData(ds_containerList.getRowPosition(), "mrn", ds_manifestList.getCellData(row, "mrn"));
      ds_containerList.setCellData(ds_containerList.getRowPosition(), "msn", ds_manifestList.getCellData(row, "msn"));
      ds_containerList.setCellData(ds_containerList.getRowPosition(), "hsn", ds_manifestList.getCellData(row, "hsn"));
      ds_containerList.setCellData(ds_containerList.getRowPosition(), "cntrNo", 'IN BULK');
    }
  }
};

// function validCheckCntrNo(){
// 	var row = ds_containerList.getRowPosition()

//     for(i=1; i<=ds_containerList.CountRow; i++){
// 	// 필터 적용
// 		if(row != i){
// 			if(ds_containerList.NameValue(row,"cntrNo") == ds_containerList.NameValue(i,"cntrNo")){
// 				alert("컨테이너값이 중복입니다.");
// 				ds_containerList.RowPosition = row;
// 				gr_containerList.SetColumn("cntrNo");
// 				gr_containerList.Focus();
// 				return false;
// 			}
// 		}
// 	}
// 	return true;
// }

// 적하목록 Master BL 생성
scwin.sbm_regist_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_Retrieve();
  //$c.sbm.execute(sbm_retrieve)
};

// 적하목록 그리드 클릭
scwin.f_setManifestColumnReadOnly = function (row) {
  var mrn = ds_manifestList.getCellData(row, "mrn");
  var rowStatus = ds_manifestList.getRowStatusValue(row);
  var containerEmpty = ds_containerList.getRowCount() == 0;

  // 대상 컬럼
  var cols = ["mrn", "msn", "hsn", "mblNo", "hblNo"];

  // 기본값 전부 readonly
  scwin.f_setGridColumnsReadOnly(cols, true);

  // ===== 조건 처리 =====

  if (rowStatus == 2 && containerEmpty) {
    if (mrn && mrn.substring(0, 5) == "00000") {
      return;
    }
    if (!mrn) {
      scwin.f_setGridColumnsReadOnly(cols, false);
    } else {
      scwin.f_setGridColumnsReadOnly(["msn", "hsn", "mblNo", "hblNo"], false);
    }
  } else {
    if (scwin.containerAdd != "0") {
      scwin.f_setGridColumnsReadOnly(["mblNo", "hblNo"], false);
    }
  }
};
scwin.f_setGridColumnsReadOnly = function (columns, flag) {
  for (var i = 0; i < columns.length; i++) {
    gr_manifestList.setColumnReadOnly(columns[i], flag);
  }
};
scwin.ds_manifestList_onrowpositionchange = function (info) {
  try {
    var row = info.newRowIndex;

    // null / undefined / -1 방어
    if (row == null || row < 0) {
      return;
    }

    // 필터 적용
    scwin.ds_containerList_onFilter(row);

    // bulk 처리
    if (ds_manifestList.getCellData(row, "bulkYn") == "1") {
      ed_commCd.options.mandatory = true;
      ed_totWt.options.mandatory = true;
      // cfRefreshMandSign();

      scwin.gridEmpty();
    } else {
      ed_commCd.options.mandatory = false;
      ed_totWt.options.mandatory = false;
      // cfRefreshMandSign();

      // gr_manifestList.setDataSet("ds_manifestList")
      // gr_containerList.setDataSet("ds_containerList")
    }
    scwin.f_setManifestColumnReadOnly(row);
    gr_containerList.setColumnReadOnly('cntrNo', true);
    gr_containerList.setColumnReadOnly('cntrSizCd', true);
    gr_containerList.setColumnReadOnly('cntrTypCd', true);
    gr_containerList.setColumnReadOnly('sealNo1', true);
    gr_containerList.setColumnReadOnly('packCnt', true);
    gr_containerList.setColumnReadOnly('packUnitCd', true);
    gr_containerList.setColumnReadOnly('xrayLupTrgtYn', true);
    gr_containerList.setColumnReadOnly('wt', true);

    // 그리드 조회건수 초기화
    tbx_totalRows2.setValue(ds_containerList.getRowCount());
    $c.gus.cfEnableBtnOnly($p, [btn_containerListCutRow, btn_containerListPasteRow, btn_containerListAddRow, btn_containerListDeleteRow, btn_containerListUndo, btn_containerListModifyRow]);
  } catch (e) {}
};
scwin.ds_containerList_onFilter = function (row) {
  var v_mrn = ds_manifestList.getCellData(row, "mrn");
  var v_msn = ds_manifestList.getCellData(row, "msn");
  var v_hsn = ds_manifestList.getCellData(row, "hsn");
  var condition = "mrn == '" + v_mrn + "' && " + "msn == '" + v_msn + "' && " + "hsn == '" + v_hsn + "'";
  ds_containerList.removeColumnFilterAll();
  $c.data.dataListFilter($p, ds_containerList, condition);
  if (ds_containerList.getRowCount() > 0) {
    ds_containerList.setRowPosition(0);
  }
};
scwin.gr_manifestList_onafteredit = function (rowIndex, columnIndex, value) {
  var v_data = ds_manifestList.getCellData(rowIndex, "msn");
  var v_hsn = ds_manifestList.getCellData(rowIndex, "hsn");
  var cnt = 0;
  var exitYn = 0;
  var rowZero = 0;
  var rowTop = 0;
  switch (gr_manifestList.getColumnID(columnIndex)) {
    case "mrn":
      ds_manifestListSave.setCellData(rowIndex, "mrn", ds_manifestList.getCellData(rowIndex, "mrn"));
      break;
    case "msn":
      ds_manifestListSave.setCellData(rowIndex, "msn", ds_manifestList.getCellData(rowIndex, "msn"));
      break;
    case "mblNo":
      if (ds_manifestList.getOriginalCellData(rowIndex, "mblNo") == ds_manifestList.getCellData(rowIndex, "mblNo")) {
        ds_manifestList.setCellData(rowIndex, "changeCheck", 0);
      } else {
        ds_manifestList.setCellData(rowIndex, "changeCheck", 1);
      }
      ds_manifestListSave.setCellData(rowIndex, "mblNo", ds_manifestList.getCellData(rowIndex, "mblNo"));
      break;
    case "hsn":
      ds_manifestListSave.setCellData(rowIndex, "hsn", ds_manifestList.getCellData(rowIndex, "hsn"));
      break;
    case "hblNo":
      ds_manifestListSave.setCellData(rowIndex, "hblNo", ds_manifestList.getCellData(rowIndex, "hblNo"));

      // AS-IS코드에서 hblNo가 아닌 mblNo로 비교하고있음
      // hblNo로 비교하도록 개선해야 할 듯.
      if (ds_manifestList.getOriginalCellData(rowIndex, "hblNo") == ds_manifestList.getCellData(rowIndex, "mblNo")) {
        ds_manifestList.setCellData(rowIndex, "changeCheck", 0);
      } else {
        ds_manifestList.setCellData(rowIndex, "changeCheck", 1);
      }
      for (i = 1; i <= ds_manifestList.getRowCount(); i++) {
        //if(row != i){
        if (ds_manifestList.getCellData(i, "mrn") == ds_manifestList.getCellData(rowIndex, "mrn") && ds_manifestList.getCellData(i, "msn") == ds_manifestList.getCellData(rowIndex, "msn")) {
          cnt++;
          rowZero = i - cnt + 1;
          rowTop = i;
          if (rowIndex != i) {
            exitYn++;
          }
        }
      }
      if (exitYn > 0) {
        //같은 값이 존재할 때

        for (j = rowZero; j <= rowTop; j++) {
          if (ds_manifestList.getCellData(j, "hsn") == 0) {
            ds_manifestList.setCellData(j, "stdBlYn", 0);
          } else {
            ds_manifestList.setCellData(j, "stdBlYn", 1);
          }
        }
      } else {
        // 같은 값이 없을 때
        if (ds_manifestList.getCellData(rowIndex, "hsn") == 0) {
          ds_manifestList.setCellData(rowIndex, "stdBlYn", 1);
        } else {
          ds_manifestList.setCellData(rowIndex, "stdBlYn", 0);
        }
      }
      break;
    default:
      break;
  }
};
scwin.f_getPackCntSum = function () {
  var sum = 0;
  for (var i = 0; i < ds_containerList.getRowCount(); i++) {
    var val = ds_containerList.getCellData(i, "packCnt");
    if (val != null && val !== "") {
      sum += Number(val);
    }
  }
  return sum;
};

// 컨테이너 excel cell 빠져나올때
scwin.gr_containerList_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_containerList.getColumnID(columnIndex);
  switch (colid) {
    case "packCnt":
      ed_packCnt.setValue(scwin.f_getPackCntSum());
      break;
    case "cntrNo":
      if (ch_bulkYn.getValue() != "1") {
        if (!dscommon.cf_CheckCntrNo(ds_containerList.getCellData(rowIndex, "cntrNo"))) {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["컨테이너"]); //유효한 @가 아닙니다
        }
      }
    default:
      break;
  }
};

// 공통코드(항구) 팝업 조회
scwin.udc_portCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_portCd.getValue(), ed_portNm.getValue(), 'F', 'F');
};

// 공통코드(컨테이너) 팝업 조회
scwin.udc_cntrNo_onclickEvent = function (e) {
  // 컨테이너(TB_SD304) 팝업
  // pName = ed_mrn.Text;
  // rtnList = cfCommonPopUp('retrieveContainerInfo'	// XML상의 SELECT ID	
  //     , pCode					// 화면에서의 ??? Code Element의	Value
  //     , pName					// 화면에서의 ??? Name Element의	Value
  //     , pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  //     , null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  //     , null					// Title순서	
  //     , null					// 보여주는 각 컬럼들의 폭	
  //     , null					// 컬럼중에서 숨기는	컬럼 지정	
  //     , null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  //     , null					// POP-UP뛰을때 원도우의	사용자 정의	폭
  //     , null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
  //     , null					// 윈도우 위치 Y좌표	
  //     , null					// 윈도우 위치 X좌표
  //     , null					// 중복체크여부	("F")
  //     , pAllSearch					// 전체검색허용여부	("F")
  //     , "컨테이너,컨테이너번호,MRN"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  // );

  udc_cntrNo.setSelectId('retrieveContainerInfo');
  udc_cntrNo.cfCommonPopUp(scwin.udc_cntrNo_callBackFunc, ed_cntrNo.getValue(), ed_mrn.getValue(), "F", null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  );

  // cfSetReturnValue(rtnList, ed_cntrNo, ed_mrn, [ed_msn, ed_hsn, '', ed_mBl]);
};

// 컨테이너 콜백
scwin.udc_cntrNo_callBackFunc = function (ret) {
  // if ( ret.lenght < 0 ) return
  $c.gus.cfSetReturnValue($p, ret, ed_cntrNo, ed_mrn, [ed_msn, ed_hsn, '', ed_mBl]);
};

// 공통코드(Master B/L) 팝업 조회
scwin.udc_mBl_onclickEvent = function (e) {
  udc_mBl.setSelectId('retrieveMasterBLInfo');
  udc_mBl.cfCommonPopUp(scwin.udc_mBl_callBackFunc, ed_mBl.getValue(), ed_mrn.getValue(), "F", null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , 'F' // 전체검색허용여부	("F")
  );
};

// Master B/L 콜백
scwin.udc_mBl_callBackFunc = function (ret) {
  // if ( ret.lenght < 0 ) return
  $c.gus.cfSetReturnValue($p, ret, ed_mBl, ed_mrn, [ed_msn, ed_hsn]);
};

// 모선 콜백
scwin.vsslCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

// 품명 콜백
scwin.udc_commCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_commCd, ed_commNm);
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_manifestList, row, "commCd", "commNm");
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_manifestListSave, row, "commCd", "commNm");
};

// 양육항구코드 콜백
scwin.udc_dischgPortCd_callBackFunc = function (ret) {
  // if ( ret.lenght < 0 ) return
  var row = ds_manifestList.getRowPosition();
  $c.gus.cfSetReturnValue($p, ret, ed_dischgPortCd, ed_dischgPortNm);
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestList, row, "dischgPortCd", "dischgPortNm");
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestListSave, row, "dischgPortCd", "");
};

// 당사LINE 콜백
scwin.udc_mcomLineCd_callBackFunc = function (ret) {
  var row = ds_manifestList.getRowPosition();
  $c.gus.cfSetReturnValue($p, ret, ed_mcomLineCd, ed_mcomLineNm, [scwin.ed_shpCoMark]);
  var ctrl = ["shpCoMark"];
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestList, row, "mcomLineCd", "mcomLineNm", ctrl);
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestListSave, row, "mcomLineCd", "mcomLineNm", ctrl);
  if (ds_manifestList.getOriginalCellData(row, "blTypCd") == "") {
    blTypCd = "S";
  } else {
    blTypCd = ds_manifestList.getOriginalCellData(row, "blTypCd");
  }
  if (ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd") == "") {
    dsmbrkFrgtCd = "SD";
  } else {
    dsmbrkFrgtCd = ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd");
  }
  if (lc_blTypCd.getValue() == blTypCd && ed_mcomLineCd.getValue() == ds_manifestList.getOriginalCellData(row, "mcomLineCd") && lc_dsmbrkFrgtCd.getValue() == dsmbrkFrgtCd && ed_mcomDsmbrkPlcCd.getValue() == ds_manifestList.getOriginalCellData(row, "mcomDsmbrkPlcCd")) {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};

// 당사하선장소소 콜백
scwin.udc_mcomDsmbrkPlcCd_callBackFunc = function (ret) {
  var row = ds_manifestList.getRowPosition();
  $c.gus.cfSetReturnValue($p, ret, ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm, [dsmbrkBondZoneCd, dsmbrkBondZoneNm]);
  var ctrl = ["dsmbrkBondZoneCd", "dsmbrkBondZoneNm"];
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestList, row, "mcomDsmbrkPlcCd", "mcomDsmbrkPlcNm", ctrl);
  $c.gus.cfSetGridReturnValue($p, ret, ds_manifestListSave, row, "mcomDsmbrkPlcCd", "mcomDsmbrkPlcNm", ctrl);
  if (ds_manifestList.getOriginalCellData(row, "blTypCd") == "") {
    blTypCd = "S";
  } else {
    blTypCd = ds_manifestList.getOriginalCellData(row, "blTypCd");
  }
  if (ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd") == "") {
    dsmbrkFrgtCd = "SD";
  } else {
    dsmbrkFrgtCd = ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd");
  }
  if (lc_blTypCd.getValue() == blTypCd && ed_mcomLineCd.getValue() == ds_manifestList.getOriginalCellData(row, "mcomLineCd") && lc_dsmbrkFrgtCd.getValue() == dsmbrkFrgtCd && ed_mcomDsmbrkPlcCd.getValue() == ds_manifestList.getOriginalCellData(row, "mcomDsmbrkPlcCd")) {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};

// 배정창고 콜백
scwin.udc_assgnWhouseCd_callBackFunc = function (rtnList) {
  var row = ds_manifestList.getRowPosition();
  $c.gus.cfSetReturnValue($p, rtnList, ed_assgnWhouseCd, ed_assgnWhouseNm);
  var ctrl = ["assgnBondZoneCd"];
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_manifestList, row, "assgnWhouseCd", "assgnWhouseNm", ctrl);
  $c.gus.cfSetGridReturnValue($p, rtnList, ds_manifestListSave, row, "assgnWhouseCd", "assgnWhouseNm", ctrl);
  if (lc_assgnClsCd.getValue() == ds_manifestList.getOriginalCellData(row, "assgnClsCd") && lc_mcomAssgnClsCd.getValue() == ds_manifestList.getOriginalCellData(row, "mcomAssgnClsCd") && ed_assgnWhouseCd.getValue() == ds_manifestList.getOriginalCellData(row, "assgnWhouseCd")) {
    ds_manifestList.setCellData(row, "changeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "changeCheck", 1);
  }
};
scwin.sbm_regist_submiterror = function (e) {
  ds_manifestList.undoAll();
  ds_manifestListSave.undoAll();
  ds_containerList.undoAll();
};

// 모선
scwin.ed_vsslCd_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(this, ed_vsslNm, 1, true);
};

// 항차
scwin.ed_portcnt_onblur = function (e) {
  var strportCnt = "";
  strportCnt = ed_portCnt.getValue().replace(/^\s*/, '');
  if (strportCnt == null || strportCnt == "") {
    ed_strportCnt.setValue("");
  }
};

// 항구
scwin.udc_portCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(this, ed_portNm, 2, true);
};

// Master B/L
scwin.udc_mBl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(this, '', 8, true);
};

// 컨테이너 코드
scwin.udc_cntrNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(this, '', 9, true);
};

// 포장단위 변경
scwin.lc_packUnitCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "packUnitCd", ds_manifestList.getCellData(row, "packUnitCd"));
};

// B/L Type
scwin.lc_blTypCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "blTypCd", ds_manifestList.getCellData(row, "blTypCd"));
  if (ds_manifestList.getOriginalCellData(row, "blTypCd") == "") {
    blTypCd = "S";
  } else {
    blTypCd = ds_manifestList.getOriginalCellData(row, "blTypCd");
  }
  if (ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd") == "") {
    dsmbrkFrgtCd = "SD";
  } else {
    dsmbrkFrgtCd = ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd");
  }
  if (ds_manifestList.getCellData(row, "blTypCd") == blTypCd && ds_manifestList.getCellData(row, "mcomLineCd") == ds_manifestList.getOriginalCellData(row, "mcomLineCd") && ds_manifestList.getCellData(row, "dsmbrkFrgtCd") == dsmbrkFrgtCd && ds_manifestList.getCellData(row, "mcomDsmbrkPlcCd") == ds_manifestList.getOriginalCellData(row, "mcomDsmbrkPlcCd")) {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};

// 화물구분
scwin.lc_cargoClsCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "cargoClsCd", ds_manifestList.getCellData(row, "cargoClsCd"));
};

// 포장개수
scwin.ed_packCnt_onblur = function (e) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "packCnt", ds_manifestList.getCellData(row, "packCnt"));
};

// 총중량
scwin.ed_totWt_onblur = function (e) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "totWt", ds_manifestList.getCellData(row, "totWt"));
};

// 총 CBM
scwin.ed_totCbm_onblur = function (e) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "totCbm", ds_manifestList.getCellData(row, "totCbm"));
};

// 하선물품
scwin.lc_dsmbrkFrgtCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "dsmbrkFrgtCd", ds_manifestList.getCellData(row, "dsmbrkFrgtCd"));
  if (ds_manifestList.getOriginalCellData(row, "blTypCd") == "") {
    blTypCd = "S";
  } else {
    blTypCd = ds_manifestList.getOriginalCellData(row, "blTypCd");
  }
  if (ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd") == "") {
    dsmbrkFrgtCd = "SD";
  } else {
    dsmbrkFrgtCd = ds_manifestList.getOriginalCellData(row, "dsmbrkFrgtCd");
  }
  if (ds_manifestList.getCellData(row, "blTypCd") == blTypCd && ds_manifestList.getCellData(row, "mcomLineCd") == ds_manifestList.getOriginalCellData(row, "mcomLineCd") && ds_manifestList.getCellData(row, "dsmbrkFrgtCd") == dsmbrkFrgtCd && ds_manifestList.getCellData(row, "mcomDsmbrkPlcCd") == ds_manifestList.getOriginalCellData(row, "mcomDsmbrkPlcCd")) {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
  }
};

// 배정구분
scwin.lc_assgnClsCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "assgnClsCd", ds_manifestList.getCellData(row, "assgnClsCd"));
  if (ds_manifestList.getCellData(row, "assgnClsCd") == ds_manifestList.getOriginalCellData(row, "assgnClsCd") && ds_manifestList.getCellData(row, "mcomAssgnClsCd") == ds_manifestList.getOriginalCellData(row, "mcomAssgnClsCd") && ds_manifestList.getCellData(row, "assgnWhouseCd") == ds_manifestList.getOriginalCellData(row, "assgnWhouseCd")) {
    ds_manifestList.setCellData(row, "changeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "changeCheck", 1);
  }
};

// 당사배정구분
scwin.lc_mcomAssgnClsCd_onchange = function (info) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "mcomAssgnClsCd", ds_manifestList.getCellData(row, "mcomAssgnClsCd"));
  if (ds_manifestList.getCellData(row, "assgnClsCd") == ds_manifestList.getOriginalCellData(row, "assgnClsCd") && ds_manifestList.getCellData(row, "mcomAssgnClsCd") == ds_manifestList.getOriginalCellData(row, "mcomAssgnClsCd") && ds_manifestList.getCellData(row, "assgnWhouseCd") == ds_manifestList.getOriginalCellData(row, "assgnWhouseCd")) {
    ds_manifestList.setCellData(row, "changeCheck", 0);
  } else {
    ds_manifestList.setCellData(row, "changeCheck", 1);
  }
};

// 양육항구코드
scwin.udc_dischgPortCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dischgPortCd, ed_dischgPortNm, 7, true);
};

// 양육항구코드
scwin.udc_dischgPortCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_dischgPortCd.getValue(), ed_dischgPortNm.getValue(), 'F', 'F');
};

// 양육항구코드
scwin.udc_dischgPortCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_dischgPortNm, ed_dischgPortCd, 7, false);
};

// 당사 Line 코드
scwin.udc_mcomLineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomLineCd, ed_mcomLineNm, 3, true);
};

// 당사 Line 코드
scwin.udc_mcomLineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_mcomLineCd.getValue(), ed_mcomLineNm.getValue(), 'F', 'F');
};

// 당사 Line 코드
scwin.udc_mcomLineCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomLineNm, ed_mcomLineCd, 3, false);
};

// 당사하선장소
scwin.udc_mcomDsmbrkPlcCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_mcomDsmbrkPlcCd.getValue(), ed_mcomDsmbrkPlcNm.getValue(), 'F', 'F');
};

// 당사하선장소
scwin.udc_mcomDsmbrkPlcCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm, 4, true);
};

// 당사하선장소
scwin.udc_mcomDsmbrkPlcCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcNm, ed_mcomDsmbrkPlcCd, 4, false);
};

// 배정창고
scwin.udc_assgnWhouseCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_assgnWhouseCd.getValue(), ed_assgnWhouseNm.getValue(), 'F', 'F');
};

// 배정창고
scwin.udc_assgnWhouseCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_assgnWhouseCd, ed_assgnWhouseNm, 5, true);
};

// 배정창고
scwin.udc_assgnWhouseCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_assgnWhouseNm, ed_assgnWhouseCd, 5, false);
};

// 품명
scwin.udc_commCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(6, ed_commCd.getValue(), ed_commNm.getValue(), 'F', 'F');
};

// 품명
scwin.udc_commCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commCd, ed_commNm, 6, true);
};

// 품명
scwin.udc_commCd_onviewchangeNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_commNm, ed_commCd, 6, false);
};

// 항차
scwin.ed_portcntGrd_onblur = function (e) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "portcnt", ds_manifestList.getCellData(row, "portcnt"));
};

// 항차
scwin.ed_portcntGrd_onkeydown = function (e) {
  if (e.keyCode >= 37 && e.keyCode <= 40 || e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode >= 96 && e.keyCode <= 105) {} else {
    if (e.keyCode == "189" || e.keyCode == "109" || e.keyCode == "46" || e.keyCode == "8") {} else {
      $c.gus.cfAlertMsg($p, "문자, 수자, - 외의 특수문자들은 사용 못 합니다.");
      // ed_portcntGrd.Text = ed_portcntGrd.GetSelText(0, ed_portcntGrd.Text.length - 1);
      // todo
      // ed_portcntGrd.setValue(ed_portcntGrd.GetSelText(0, ed_portcntGrd.getValue().length - 1))
      //ed_portcntGrd.Focus();
      return false;
    }
  }
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};

// 신호부자코드
scwin.ed_callsignCd_onblur = function (e) {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "callsignCd", ds_manifestList.getCellData(row, "callsignCd"));
};

// 컨테이너 그리드 클릭
scwin.gr_containerList_oncellclick = function (rowIndex, columnIndex, columnId) {
  //alert("row,colid,olddata = " + rowIndex + " : " + columnId)
  var rowMain = ds_manifestList.getRowPosition();
  if (ds_manifestList.getCellData(rowMain, "bulkYn") == "1" || ch_bulkYn.getValue() == "1") {
    //gr_containerList.Editable = "false";
    gr_containerList.setColumnReadOnly('cntrNo', true);
    gr_containerList.setColumnReadOnly('cntrSizCd', true);
    gr_containerList.setColumnReadOnly('cntrTypCd', true);
    gr_containerList.setColumnReadOnly('sealNo1', true);
    gr_containerList.setColumnReadOnly('packCnt', true);
    gr_containerList.setColumnReadOnly('packUnitCd', true);
  } else {
    if (ds_containerList.getRowStatusValue(rowIndex) == 2) {
      //gr_containerList.Editable = "true";
      gr_containerList.setColumnReadOnly('cntrNo', false);
      gr_containerList.setColumnReadOnly('cntrSizCd', false);
      gr_containerList.setColumnReadOnly('cntrTypCd', false);
      gr_containerList.setColumnReadOnly('sealNo1', false);
      gr_containerList.setColumnReadOnly('packCnt', false);
      gr_containerList.setColumnReadOnly('packUnitCd', false);
    } else {
      if (scwin.containerSubAdd == "0") {
        //gr_containerList.Editable = "false";
        gr_containerList.setColumnReadOnly('mrn', true);
        gr_containerList.setColumnReadOnly('msn', true);
        gr_containerList.setColumnReadOnly('hsn', true);
        gr_containerList.setColumnReadOnly('mblNo', true);
        gr_containerList.setColumnReadOnly('hblNo', true);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //alert(cfCanOpenPopup(inObj, pairObj) + "/" + inObj.hidVal + "/" + pairObj.hidVal);
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var ctrl = new Array();
  var row = ds_manifestList.getRowPosition();

  /*
      ctrl[1] = "ed_vsslNm";
      ctrl[2] = "ed_portcnt";
      ctrl[3] = "ed_portCd";
      ctrl[4] = "ed_portNm";
  */

  switch (disGubun) {
    case 1:
      // 선박코드팝업			
      //pCode = ed_vsslCd.Text.replace(/\s*$/, '');		// 선박코드
      //pName = ed_vsslNm.value;		// 선박명
      // udc_comCodeGrid.setSelectId('retrieveCommInfo')
      // udc_comCodeGrid.cfCommonPopUp(scwin.udc_comCodeGrid_commNm_callBackFunc,

      // rtnList = cfCommonPopUp('retrieveVsslCdInfo'	// XML상의 SELECT ID	
      udc_comCode.setSelectId('retrieveVsslCdInfo');
      udc_comCode.cfCommonPopUp(scwin.vsslCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "선박,선박코드,선박명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      // cfSetReturnValue(rtnList, ed_vsslCd, ed_vsslNm);

      break;
    case 2:
      /*
      // 항구정보팝업 			
          //pCode = ed_portCd.Text.replace(/\s*$/, '');		// 항구코드
          //pName = ed_portNm.value;		// 항구명
      	
          rtnList = cfCommonPopUp('retrievePortInfo'		// XML상의 SELECT ID	
                                  ,pCode					// 화면에서의 ??? Code Element의	Value
                                  ,pName					// 화면에서의 ??? Name Element의	Value
                                  ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                                  ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                                  ,null					// Title순서	
                                  ,null					// 보여주는 각 컬럼들의 폭	
                                  ,null					// 컬럼중에서 숨기는	컬럼 지정	
                                  ,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                                  ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
                                  ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
                                  ,null					// 윈도우 위치 Y좌표	
                                  ,null					// 윈도우 위치 X좌표
                                  ,null					// 중복체크여부	("F")
                                  ,pAllSearch					// 전체검색허용여부	("F")
                                  ,"항구,항구코드,항구명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
                                  ); 
       cfSetReturnValue(rtnList, ed_portCd, ed_portNm);   	
      */

      // var win_style = "center:yes;dialogwidth:800px;dialogheight:470px;scroll:no;resizable:no;status:yes;";
      // var win_url = "/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.jsp?vsslCls=1";
      // rtnList = window.showModalDialog(win_url, "", win_style);
      var win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml";
      let opts = {
        id: "portPop",
        popupName: "선명항차조회",
        style: "center",
        width: "950px",
        height: "500px",
        scrollbars: false,
        resizable: false,
        status: true,
        title: "선명항차조회"
      };
      let data = {
        vsslCls: 1
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, data);
      if (rtnList != null) {
        if (rtnList[1] == "0") {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[13]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_portCd.setValue(rtnList[4]); //도착항구코드
          ed_portNm.setValue(rtnList[14]); //도착항구명
          ed_mrn.setValue(rtnList[15]); //mrn
        } else {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[14]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_portCd.setValue(rtnList[5]); //도착항구코드
          ed_portNm.setValue(rtnList[15]); //도착항구명
          ed_mrn.setValue(rtnList[16]); //mrn
        }
      }
      break;
    case 3:
      // 선사코드팝업			
      //pCode = ed_clntNo.Text.replace(/\s*$/, '');		// 선사코드
      pWhere = "SHP";
      ctrl[0] = "shpCoMark";

      // rtnList = cfCommonPopUp('retrieveLineInfo'	// XML상의 SELECT ID	
      udc_mcomLineCd.setSelectId('retrieveLineInfo');
      udc_mcomLineCd.cfCommonPopUp(scwin.udc_mcomLineCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 하선장소코드팝업   retrieveBondZoneRound
      ctrl[0] = "dsmbrkBondZoneCd";
      ctrl[1] = "dsmbrkBondZoneNm";

      // rtnList = cfCommonPopUp('retrieveMcomDsmbrk'	// XML상의 SELECT ID	
      udc_mcomDsmbrkPlcCd.setSelectId('retrieveMcomDsmbrk');
      udc_mcomDsmbrkPlcCd.cfCommonPopUp(scwin.udc_mcomDsmbrkPlcCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 5:
      // 배정창고코드팝업   retrieveBondZoneRound
      ctrl[0] = "assgnBondZoneCd";

      // rtnList = cfCommonPopUp('retrieveMcomDsmbrk'	// XML상의 SELECT ID	
      udc_assgnWhouseCd.setSelectId('retrieveMcomDsmbrk');
      udc_assgnWhouseCd.cfCommonPopUp(scwin.udc_assgnWhouseCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , '작업장코드,작업장명,보세구역코드' // Title순서	
      , '90,150,100' // 보여주는 각 컬럼들의 폭	
      , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "배정창고,배정창고코드,배정창고명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      // 품명팝업
      pWhere = ",,,T3";

      // rtnList = cfCommonPopUp('retrieveCommInfo'	// XML상의 SELECT ID	
      udc_commCd.setSelectId('retrieveCommInfo');
      udc_commCd.cfCommonPopUp(scwin.udc_commCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      // 품명팝업

      // rtnList = cfCommonPopUp('retrievePortInfo'	// XML상의 SELECT ID	
      pSelectId = 'retrievePortInfo'; // XML상의 SELECT ID
      udc_dischgPortCd.setSelectId(pSelectId);
      udc_dischgPortCd.cfCommonPopUp(scwin.udc_dischgPortCd_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "항구,항구코드,항구명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 8:
      // Master B/L 팝업
      pName = ed_mrn.getValue();

      // rtnList = cfCommonPopUp('retrieveMasterBLInfo'	// XML상의 SELECT ID	
      pSelectId = 'retrieveMasterBLInfo'; // XML상의 SELECT ID
      udc_mBl.setSelectId(pSelectId);
      udc_mBl.cfCommonPopUp(scwin.udc_mBl_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "Master B/L,M B/L,MRN" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      // 컨테이너(TB_SD304) 팝업
      pName = ed_mrn.getValue();

      // rtnList = cfCommonPopUp('retrieveContainerInfo'	// XML상의 SELECT ID	
      pSelectId = 'retrieveContainerInfo'; // XML상의 SELECT ID
      udc_cntrNo.setSelectId(pSelectId);
      udc_cntrNo.cfCommonPopUp(scwin.udc_cntrNo_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "컨테이너,컨테이너번호,MRN" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// bulk check여부 저장
//-------------------------------------------------------------------------
scwin.bulkYnCheck = function () {
  var row = ds_manifestList.getRowPosition();
  var cntrRow = ds_containerList.getRowPosition();
  var che = 0;
  var mrn = ds_manifestList.getOriginalCellData(row, "mrn");
  var rowYn = ds_containerList.getRowCount();
  che = ds_manifestList.getOriginalCellData(row, "bulkYn");
  if (ds_containerList.getCellData(cntrRow, "mrn") == ds_manifestList.getCellData(row, "mrn") && ds_containerList.getCellData(cntrRow, "msn") == ds_manifestList.getCellData(row, "msn") && ds_containerList.getCellData(cntrRow, "hsn") == ds_manifestList.getCellData(row, "hsn")) {
    if (che == 1 || che == 0) {
      //alert("이미 컨테이너 데이타가 있습니다 그래도 선택하시겠습니까");
      if (!cfConfirmMsg("이미 컨테이너 데이타가 있습니다 그래도 선택하시겠습니까")) {
        if (che == 1) {
          ds_manifestList.setCellData(row, "bulkYn", 1);
          ds_manifestListSave.setCellData(row, "bulkYn", 1);
          //ch_bulkYn.checked = true;
          ed_commCd.mandatory = "true";
          ed_totWt.mandatory = "true";
          $c.gus.cfRefreshMandSign($p);
          ch_bulkYn.checked = true;
        } else {
          ds_manifestList.setCellData(row, "bulkYn", 0);
          ds_manifestListSave.setCellData(row, "bulkYn", 0);
          //ch_bulkYn.checked = false;
          ed_commCd.mandatory = "false";
          ed_totWt.mandatory = "false";
          $c.gus.cfRefreshMandSign($p);
          ch_bulkYn.checked = false;
        }
      } else {
        if (ch_bulkYn.checked) {
          ds_manifestList.setCellData(row, "bulkYn", 1);
          ds_manifestListSave.setCellData(row, "bulkYn", 1);
          ed_commCd.mandatory = "true";
          ed_totWt.mandatory = "true";
          $c.gus.cfRefreshMandSign($p);
        } else {
          ds_manifestList.setCellData(row, "bulkYn", 0);
          ds_manifestListSave.setCellData(row, "bulkYn", 0);
          ed_commCd.mandatory = "false";
          ed_totWt.mandatory = "false";
          $c.gus.cfRefreshMandSign($p);
        }
        return;
      }
    } else {
      if (ch_bulkYn.checked) {
        ds_manifestList.setCellData(row, "bulkYn", 1);
        ds_manifestListSave.setCellData(row, "bulkYn", 1);
        ed_commCd.mandatory = "true";
        ed_totWt.mandatory = "true";
        $c.gus.cfRefreshMandSign($p);
        ch_bulkYn.checked = true;
      } else {
        ds_manifestList.setCellData(row, "bulkYn", 0);
        ds_manifestListSave.setCellData(row, "bulkYn", 0);
        ed_commCd.mandatory = "false";
        ed_totWt.mandatory = "false";
        $c.gus.cfRefreshMandSign($p);
        ch_bulkYn.checked = false;
      }
    }
  } else {
    if (ch_bulkYn.checked) {
      ds_manifestList.setCellData(row, "bulkYn", 1);
      ds_manifestListSave.setCellData(row, "bulkYn", 1);
      ed_commCd.mandatory = "true";
      ed_totWt.mandatory = "true";
      $c.gus.cfRefreshMandSign($p);
      ch_bulkYn.checked = true;
    } else {
      ds_manifestList.setCellData(row, "bulkYn", 0);
      ds_manifestListSave.setCellData(row, "bulkYn", 0);
      ed_commCd.mandatory = "false";
      ed_totWt.mandatory = "false";
      $c.gus.cfRefreshMandSign($p);
      ch_bulkYn.checked = false;
    }
  }
};
scwin.stdBlCheck = function () {
  var row = ds_manifestList.getRowPosition();
  var rowZero = 0;
  var rowManicnt = ds_manifestList.getRowCount();
  var cnt = 0;
  if (ch_stdBlYn.checked) {
    for (i = 1; i <= rowManicnt; i++) {
      if (ds_manifestList.getCellData(i, "mrn") == ds_manifestList.getCellData(row, "mrn") && ds_manifestList.getCellData(i, "msn") == ds_manifestList.getCellData(row, "msn")) {
        cnt++;
        rowZero = i - cnt + 1; // hsn이 '0'인 처음 값
      }
    }
    if (cnt > 1) {
      if (ds_manifestList.getCellData(row, "hsn") == 0) {
        for (j = row + 1; j < row + cnt; j++) {
          ds_manifestList.setCellData(j, "stdBlYn", 0);
        }
      } else {
        ds_manifestList.setCellData(rowZero, "stdBlYn", 0);
      }
    }
  }
};
scwin.displayXrayYn = function (data) {
  if (data == 1) {
    return "Yes";
  } else {
    return "No";
  }
};
scwin.displayPackCnt = function (value) {
  // 빈값이면 0
  if (value === "" || value == null) {
    return "0";
  }

  // 숫자로 변환
  var num = Number(value);

  // 숫자 아닐 경우 방어
  if (isNaN(num)) {
    return "0";
  }

  // #,##0 포맷 적용
  return num.toLocaleString();
};
scwin.attachComm = function () {
  var row = ds_manifestList.getRowPosition();
  ds_manifestListSave.setCellData(row, "mfCommNm", ed_mfCommNm.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모선',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{ref:'data:ds_searchCond.vsslCd',style:'width: 85px; background-color:#F4F5F0;',id:'ed_vsslCd',placeholder:'',class:'','ev:onblur':'scwin.ed_vsslCd_onblur',readOnly:'true'}},{T:1,N:'xf:input',A:{'ev:onviewchange':'scwin.emit_onviewchangeNameEvent',style:'width: 142px;',id:'ed_vsslNm',placeholder:'',class:'',ref:'data:ds_searchCond.vsslNm',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width: 150px; background-color:#F4F5F0;',objType:'Data',mandatory:'true',maxlength:'11',allowChar:'A-Z0-9',ref:'data:ds_searchCond.portcnt','ev:onblur':'scwin.ed_portcnt_onblur',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_portCd',objTypeCode:'Data',mandatoryCode:'true',maxlengthCode:'5',UpperFlagCode:'1',nameId:'ed_portNm',id:'udc_portCd',objTypeName:'key',code:'portCd',name:'portNm',refDataCollection:'ds_searchCond','ev:onclickEvent':'scwin.udc_portCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_portCd_onblurCodeEvent',readOnlyCode:'true',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적하목록 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 100px;',objType:'data',mandatory:'true',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:ds_searchCond.mrn','ev:onkeyup':'scwin.toUpperCase'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'Data',ref:'data:ds_searchCond.msn','ev:onkeyup':'scwin.toUpperCase'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:50px;',ref:'data:ds_searchCond.hsn',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.toUpperCase'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',code:'mblNo',codeId:'ed_mBl',hideName:'true',id:'udc_mBl',mandatoryCode:'true',maxlengthCode:'20',nameId:'',objTypeCode:'Data',allowCharCode:'a-zA-Z0-9',objTypeName:'key',popupID:'',refDataCollection:'ds_searchCond',style:'','ev:onclickEvent':'scwin.udc_mBl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mBl_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',code:'cntrNo',codeId:'ed_cntrNo',id:'udc_cntrNo',mandatoryCode:'true',maxlengthCode:'11',nameId:'',objTypeCode:'Data',objTypeName:'key',popupID:'',refDataCollection:'ds_searchCond',style:'',hideName:'true',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_cntrNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_cntrNo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_refresh',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'grp_group3'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',grdDownOpts:'{"fileName" : "적하목록.xlsx", "sheetName" : "적하목록", "type" : "4+8+16"}',gridID:'gr_manifestList',id:'udc_topGrd2',btnUser:'Y',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',fixedColumn:'2',visibleRowNumFix:'true',dataList:'data:ds_manifestList',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_manifestList',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'false','ev:oneditend':'scwin.gr_manifestList_oneditend','ev:onafteredit':'scwin.gr_manifestList_onafteredit',rowStatusVisible:'true',rowStatusWidth:'15'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column60',value:'MRN',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'MSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'M B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'HSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column21',value:'H B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'양육항구코드',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'입항일자',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'항차',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'B/L Type',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'화물구분',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'하선물품',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mrn',displayMode:'label',readOnly:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'msn',blockSelect:'false',displayMode:'label',readOnly:'true',maxLength:'5',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'mblNo',blockSelect:'false',displayMode:'label',readOnly:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'hsn',blockSelect:'false',displayMode:'label',readOnly:'true',maxLength:'4',dataType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'hblNo',blockSelect:'false',displayMode:'label',readOnly:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dischgPortCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arrvlportDt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blTypCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoClsCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dsmbrkFrgtCd',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_manifestListCopyRowMBl',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_manifestListCopyRowMBl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'BL자동셋팅'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_manifestListAddRowMBl',label:'삭제',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_manifestListAddRowMBl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L 추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_manifestListAddRowHBl',label:'삭제',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_manifestListAddRowHBl'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'H B/L 추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_manifestListModifyRowHBl',label:'삭제',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_manifestListModifyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'B/L수정'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',cancelFunction:'scwin.f_manifestListUndo',gridID:'gr_manifestList',btnRowAddYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',btnCancelObj:'btn_manifestListUndo',btnRowDelObj:'btn_manifestListDeleteRow',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',rowDelFunction:'scwin.f_manifestListDeleteRow'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_registMasterBL',label:'삭제',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_manifestListRegistMBL'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'M B/L 생성'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''}}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{class:'tbbox mt30',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'양육항구코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',UpperFlagCode:'1',codeId:'ed_dischgPortCd',maxlengthCode:'5',code:'dischgPortCd',name:'dischgPortNm',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',objTypeCode:'Data',nameId:'ed_dischgPortNm',id:'udc_dischgPortCd',class:'',refDataCollection:'ds_manifestList','ev:onblurCodeEvent':'scwin.udc_dischgPortCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dischgPortCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_dischgPortCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_arrvlportDt',style:'',objType:'Data',mandatory:'true',displayFormat:'yyyy/MM/dd',ref:'data:ds_manifestList.arrvlportDt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_portcntGrd',placeholder:'',style:'',maxlength:'11',mandatory:'true',objType:'data',validExp:'항차:yes',allowChar:'a-zA-Z0-9',ref:'data:ds_manifestList.portcnt','ev:onblur':'scwin.ed_portcntGrd_onblur','ev:onkeydown':'scwin.ed_portcntGrd_onkeydown','ev:onkeyup':'scwin.toUpperCase'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신호부자코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_callsignCd',placeholder:'',style:'',objType:'data',maxlength:'7',allowChar:'a-zA-Z0-9',ref:'data:ds_manifestList.callsignCd','ev:onblur':'scwin.ed_callsignCd_onblur','ev:onkeyup':'scwin.toUpperCase'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'B/L Type',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_blTypCd',ref:'data:ds_manifestList.blTypCd',renderType:'',style:'',submenuSize:'auto',objType:'data',validExp:'B/L Type:yes',mandatory:'true',displayMode:'value delim label','ev:onchange':'scwin.lc_blTypCd_onchange'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_cargoClsCd',ref:'data:ds_manifestList.cargoClsCd',renderType:'',style:'',submenuSize:'auto',objType:'data',validExp:'화물구분:yes',mandatory:'true',displayMode:'value delim label','ev:onchange':'scwin.lc_cargoClsCd_onchange'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사 Line 코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_mcomLineCd',nameId:'ed_mcomLineNm',UpperFlagCode:'1',objType:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',id:'udc_mcomLineCd',class:'',refDataCollection:'ds_manifestList',code:'mcomLineCd',name:'mcomLineNm','ev:onblurCodeEvent':'scwin.udc_mcomLineCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_mcomLineCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_mcomLineCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'하선물품',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dsmbrkFrgtCd',ref:'data:ds_manifestList.dsmbrkFrgtCd',renderType:'',style:'',submenuSize:'auto',mandatory:'true',objType:'data',displayMode:'value delim label','ev:onchange':'scwin.lc_dsmbrkFrgtCd_onchange'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사하선장소',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_mcomDsmbrkPlcCd',mandatoryCode:'true',UpperFlagCode:'1',maxlengthCode:'5',nameId:'ed_mcomDsmbrkPlcNm',id:'udc_mcomDsmbrkPlcCd',class:'',refDataCollection:'ds_manifestList',code:'mcomDsmbrkPlcCd',allowCharCode:'a-zA-Z0-9',name:'mcomDsmbrkPlcNm','ev:onclickEvent':'scwin.udc_mcomDsmbrkPlcCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_mcomDsmbrkPlcCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_mcomDsmbrkPlcCd_onviewchangeNameEvent'}},{T:1,N:'xf:input',A:{id:'dsmbrkBondZoneCd',placeholder:'',style:'width:10px;',type:'hidden'}},{T:1,N:'xf:input',A:{id:'dsmbrkBondZoneNm',placeholder:'',style:'width:10px;',type:'hidden'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정창고',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_assgnWhouseCd',mandatoryCode:'Data',UpperFlagCode:'1',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',nameId:'ed_assgnWhouseNm',id:'udc_assgnWhouseCd',class:'',refDataCollection:'ds_manifestList',code:'assgnWhouseCd',name:'assgnWhouseNm','ev:onclickEvent':'scwin.udc_assgnWhouseCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_assgnWhouseCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_assgnWhouseCd_onviewchangeNameEvent'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_assgnClsCd',ref:'data:ds_manifestList.assgnClsCd',renderType:'',style:'',submenuSize:'auto',objType:'data',mandatory:'true',displayMode:'value delim label','ev:onchange':'scwin.lc_assgnClsCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사배정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mcomAssgnClsCd',ref:'data:ds_manifestList.mcomAssgnClsCd',renderType:'',style:'',submenuSize:'auto',displayMode:'value delim label','ev:onchange':'scwin.lc_mcomAssgnClsCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적하목록품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mfCommNm',placeholder:'',style:'',readOnly:'true',ref:'data:ds_manifestList.mfCommNm'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_commCd',maxlengthCode:'8',objType:'Data',allowCharCode:'a-zA-Z0-9',nameId:'ed_commNm',id:'udc_commCd',UpperFlagCode:'1',class:'',refDataCollection:'ds_manifestList',code:'commCd',name:'commNm','ev:onclickEvent':'scwin.udc_commCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_commCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_commCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Bulk여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'1',id:'ch_bulkYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기준BL여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'1',id:'ch_stdBlYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장개수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_packCnt',placeholder:'',style:'width:150px;',maxlength:'8',allowChar:'0-9',displayFormat:'#,##0',ref:'data:ds_manifestList.packCnt','ev:onblur':'scwin.ed_packCnt_onblur',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'포장단위',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_packUnitCd',ref:'data:ds_manifestList.packUnitCd',renderType:'',style:'width:150px;',submenuSize:'auto',objType:'data',displayMode:'value delim label','ev:onchange':'scwin.lc_packUnitCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총중량(KG)',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totWt',placeholder:'',style:'width:150px;',objType:'data',inputMode:'numeric',maxlength:'11.3',dataType:'float',displayFormat:'#,##0.#',ref:'data:ds_manifestList.totWt','ev:onblur':'scwin.ed_totWt_onblur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총용적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tar',id:'ed_totCbm',placeholder:'',style:'width:150px;',inputMode:'numeric',maxlength:'10.3',dataType:'float',ref:'data:ds_manifestList.totCbm','ev:onblur':'scwin.ed_totCbm_onblur'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:'margin-top:3px'},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'Y',gridUpFn:'scwin.f_upload',id:'udc_topGrd1',gridID:'gr_containerList',grdDownOpts:'{"fileName" : "컨테이너목록.xlsx", "sheetName" : "컨테이너목록", "type" : "4+8+16" }',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_containerList',fixedColumn:'2',focusMode:'row',id:'gr_containerList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'4',visibleRowNumFix:'true',rowStatusVisible:'true',rowStatusWidth:'15','ev:oncellclick':'scwin.gr_containerList_oncellclick','ev:onafteredit':'scwin.gr_containerList_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'컨테이너',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'Size',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'Type',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'SealNo',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'포장개수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'포장단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'XRAY여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column38',inputType:'text',style:'',value:'중량',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'70',mandatory:'true',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrSizCd',inputType:'select',removeBorderStyle:'false',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrTypCd',inputType:'select',removeBorderStyle:'false',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sealNo1',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',dataType:'number',width:'70',displayFormatter:'scwin.displayPackCnt',defaultValue:'0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packUnitCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'select',width:'70',displayFormatter:'scwin.displayXrayYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:3,text:'Yes'}]},{T:1,N:'w2:value',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:3,text:'No'}]},{T:1,N:'w2:value',E:[{T:3,text:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'70',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_containerListCutRow',label:'잘라내기',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_containerListCutRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'잘라내기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_containerListPasteRow',label:'붙여넣기',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_containerListPasteRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'붙여넣기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_containerListAddRow',label:'행추가',objType:'ctrlBtn',style:'',type:'button','ev:onclick':'scwin.f_containerListAddRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sm',id:'btn_containerListModifyRow',label:'행수정',objType:'ctrlBtn',style:'',type:'button','ev:onclick':'scwin.f_containerListModifyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행수정'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_containerList',rowDelFunction:'scwin.f_containerListDeleteRow',cancelFunction:'scwin.f_containerListUndo',btnRowAddYn:'N',btnDelYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',btnCancelObj:'btn_containerListUndo',btnRowDelObj:'btn_containerListDeleteRow',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{class:'btn',id:'btn_Save',label:'저장',style:'',objType:'bSave','ev:onclick':'scwin.f_save'}}]}]},{T:1,N:'w2:gridView',A:{dataList:'data:ds_tmp_cntr',id:'gr_temp_containerList',visible:'false','ev:onfilereadend':'scwin.gr_temp_containerList_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'컨테이너',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'Size',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'Type',width:'100',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'SealNo',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'포장개수',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'포장단위',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'XRAY여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'false',id:'column38',inputType:'text',style:'',value:'중량',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrSizCd',inputType:'text',removeBorderStyle:'false',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'value',id:'cntrTypCd',inputType:'text',removeBorderStyle:'false',width:'70',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sealNo1',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packCnt',inputType:'text',dataType:'number',width:'70',displayFormat:'#,##0',defaultValue:'0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'packUnitCd',inputType:'select',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'xrayLupTrgtYn',inputType:'text',width:'70',displayFormatter:'scwin.displayXrayYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wt',inputType:'text',width:'70',dataType:'number',displayFormat:'#,##0',defaultValue:'0'}}]}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none;',id:'udc_comCode'}}]}]}]})