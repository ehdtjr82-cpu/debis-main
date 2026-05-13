/*amd /ui/il/seedi/seed/ed_101_01_02b.xml 90235 e3dd5ca94b7c97172b464a630ce023b281e095c4732858cef9b05d9aae9baaae */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'iogb',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fromdt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'todt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrnno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'etd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eta',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsl',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'voy',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'liner',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ediliner',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhstdt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'control',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blType',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'status',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mhmrnno',name:'MRN NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhvsl',name:'Vessel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhvyg',name:'Vyg',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlinercd',name:'Line',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhediliner',name:'EDI Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhetd',name:'ETD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mheta',name:'ETA',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhstdt',name:'mhstdt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'MHNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhlinernm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhio',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhmsnno',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'신고 결과',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_SeaCargoManifest',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnno',name:'적하목록 신고 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnseq',name:'Cehckdigit',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediliner',name:'선사 세관 등록 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liner',name:'선사 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'linernm',name:'선사 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdcd',name:'포워딩 세관 등록 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fwdnm',name:'포워딩 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vessel',name:'선박 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'voyage',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodcd',name:'양하항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lodnm',name:'양하항 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dt',name:'출항일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custom',name:'세관 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customnm',name:'세관 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depart',name:'세관 과 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'departnm',name:'세관 과 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'status',name:'신고 결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tdt',name:'전송일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usernm',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userdt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblCnt',name:'House B/L 총 개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblCnt',name:'Master B/L 총 개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tWgt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tMsr',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tPkg',name:'name29',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iogb',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrnno',name:'적하항목관리 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msnno',name:'Master B/L 순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msr',name:'Measure',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ediLiner',name:'EDI 선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'Register ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_House',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wgt',name:'Measure',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msr',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'수량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mrnno',name:'MRN No',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Weight',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsnno',name:'HSN No',dataType:'text',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'hhmitem2',name:'ITEM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediLiner',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'edigubun',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cntCnt',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntCnt',name:'Container 총 개수',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BLcheck',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mblno',name:'Master B/L 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'House B/L 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'descnm',name:'DESC Name',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'User ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'flag',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SendEDI',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnno',name:'적하목록 신고 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'전송 화면 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediliner',name:'EDI 선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ReportPrint',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'대표거래처 코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrnno',name:'적하목록 신고 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'전송 화면 명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediliner',name:'EDI 선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seedi.seed.RetrieveVesselMblListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_vesselList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vesselList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSeaCargoManifest',action:'/il.seedi.seed.RetrieveSeaCargoManifestPiCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_SeaCargoManifest","key":"OUT_DS1"},{"id":"ds_Master","key":"OUT_DS2"},{"id":"ds_House","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_SeaCargoManifest","key":"OUT_DS1"},{"id":"ds_Master","key":"OUT_DS2"},{"id":"ds_House","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSeaCargoManifest_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seedi.seed.SaveSeaCargoManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Master","key":"IN_DS2"},{"id":"ds_House","key":"IN_DS3"},{"action":"modified","id":"ds_SeaCargoManifest","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/il.seedi.seed.SaveSeaCargoManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SeaCargoManifest","key":"IN_DS1"},{"id":"ds_Master","key":"IN_DS2"},{"id":"ds_House","key":"IN_DS3"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_BLcheck',action:'/il.seedi.seed.SeaCargoManifestCheckCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_House","key":"IN_DS1"},{"id":"ds_BLcheck","key":"IN_DS2"},{"id":"ds_BLcheck","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BLcheck","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_BLcheck_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSeaCargoManifestCnt',action:'/il.seedi.seed.RetrieveSeaCargoManifestCntCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_cntCnt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cntCnt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSeaCargoManifestCnt_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SendEDI',action:'/il.seedi.seed.SeaSendEDICMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_SendEDI","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SendEDI_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ReportPrint',action:'/il.seedi.seed.RetrieveSeaCargoManifestReportMhnoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_ReportPrint","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ReportPrint","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ReportPrint_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ds_customerInfo',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_customerInfo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.userInfo = $c.data.getMemInfo($p);
scwin.userId = scwin.userInfo.userId;
scwin.strCurDate = WebSquare.date.getCurrentServerDate();
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -7);
scwin.flagSatus = "";

//hidden
scwin.hid_kcomcd = "DBEX";
scwin.hid_iogb = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  $c.util.setTimeout($p, function () {
    dma_search.set("kcomcd", scwin.hid_kcomcd);
    dma_search.set("blType", "0");
    dma_search.set("status", "0");
    scwin.f_ContentsDisable();
    scwin.f_DefaultValue();
    scwin.f_Set("INIT");
    cnd_rd_iogb.focus();
  }, {
    "delay": 200
  });
};

//-------------------------------------------------------------------------
// function name : f_DefaultValue
// function desc : 화면 open시 초기  데이타 setting
//-------------------------------------------------------------------------
scwin.f_DefaultValue = function () {
  cnd_rd_iogb.setValue("O");
  cnd_rd_status.setValue("0");
  cnd_ed_fromdt.setValue(scwin.strPreDate);
  cnd_ed_todt.setValue(scwin.strCurDate);
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
scwin.f_Set = function (gubun) {
  flagSatus = gubun;
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableKeyData($p); // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save, b_Delete, b_Create, b_Update, b_Print, btn_ediSend]);
      $c.gus.cfDisableObjects($p, [txt_tMwgt, txt_tMmsr, txt_tMpkg, txt_tHwgt, txt_tHmsr, txt_tHpkg, txt_tWgt, txt_tMsr, txt_tPkg]);
      scwin.f_DisablePopUpObj();
      gr_MasterblList.setReadOnly("grid", true);
      gr_HouseblList.setReadOnly("grid", true);
      // gr_MasterblList.Editable  = "false";
      // gr_HouseblList.Editable  = "false";          

      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableBtnOnly($p, [btn_ediSend]);
      $c.gus.cfDisableBtnOnly($p, [b_Save, b_Update, b_Cancel]);
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Delete, b_Print]);
      // 그리드 수정 못하게 한다.
      gr_MasterblList.setReadOnly("grid", true);
      gr_HouseblList.setReadOnly("grid", true);
      // gr_MasterblList.Editable  = "false";
      // gr_HouseblList.Editable  = "false";            	       	

      break;
    case "CREATE":
      //신규
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update, b_Delete, b_Print, btn_ediSend]);
      $c.gus.cfEnableBtnOnly($p, [b_Save, b_Cancel]);

      // 그리드 수정 가능
      gr_MasterblList.setReadOnly("grid", true);
      if (cnd_rd_iogb.getValue() == "I") {
        gr_MasterblList.setReadOnly("column", "msnno", false);
      } else {
        gr_MasterblList.setReadOnly("column", "msnno", true);
      }
      gr_HouseblList.setReadOnly("grid", true);
      break;
    case "UPDATE":
      $c.gus.cfDisableBtnOnly($p, [b_Update, b_Create, b_Print]);
      $c.gus.cfEnableBtnOnly($p, [b_Save, b_Delete, b_Cancel, btn_ediSend]);
      $c.gus.cfDisableKey($p);
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      scwin.f_EnablePopUpObj();

      // 그리드 수정 가능
      gr_MasterblList.setReadOnly("grid", true);
      if (cnd_rd_iogb.getValue() == "I") {
        gr_MasterblList.setReadOnly("column", "msnno", false);
      } else {
        gr_MasterblList.setReadOnly("column", "msnno", true);
      }
      gr_HouseblList.setReadOnly("grid", true);
      break;
    case "seq1":
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Update, b_Delete, b_Save, b_Print, btn_ediSend]);
      $c.gus.cfEnableBtnOnly($p, [b_Create]);
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      scwin.f_DisablePopUpObj();
      break;
    case "seq2":
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Create, b_Save]);
      $c.gus.cfEnableBtnOnly($p, [b_Update, b_Delete, b_Print, btn_ediSend]);
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfEnableObjects($p, [cnd_ed_fromdt, cnd_ed_todt, cnd_ed_hhmblno, cnd_lc_autono, cnd_ed_mrnno, cnd_rd_status]);
      scwin.f_DisablePopUpObj();
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp UDC를 활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [ed_dt]);
  $c.gus.cfEnableObjects($p, [udc_engClntInfo, udc_portInfo, udc_customInfo, udc_customSectionInfo]);
  // $c.gus.cfDisableObjects([ed_customnm, ed_departnm, ed_lodnm, ed_ediliner]); 
};

//-------------------------------------------------------------------------
// PopUp UDC를 비활성화 시킨다. 
//-------------------------------------------------------------------------
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [ed_dt]);
  $c.gus.cfDisableObjects($p, [udc_engClntInfo, udc_portInfo, udc_customInfo, udc_customSectionInfo]);
};

//-------------------------------------------------------------------------
// 항목 Disable
//-------------------------------------------------------------------------
scwin.f_ContentsDisable = function () {
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfEnableObj($p, ed_dt, false); // Discharge
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_search.set("mrnno", cnd_ed_mrnno.getValue());
  ds_SeaCargoManifest.removeAll();
  ds_Master.removeAll();
  ds_House.removeAll();
  if (!(await $c.gus.cfValidate($p, [cnd_ed_fromdt, cnd_ed_todt]))) {
    //validExp 가 yes일때 check
    return;
  }
  if (cnd_ed_fromdt.getValue().trim() == '') {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD From"]); //@는 필수입력항목입니다.
    cnd_ed_fromdt.focus();
    return;
  }
  if (cnd_ed_todt.getValue().trim() == '') {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETD To"]); //@는 필수입력항목입니다.
    cnd_ed_todt.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, cnd_ed_fromdt.getValue().trim(), cnd_ed_todt.getValue().trim(), false)) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    return;
  }
  gr_MasterblList.setReadOnly("column", "msnno", true);
  $c.sbm.execute($p, sbm_retrieve);
  scwin.f_Set("INIT");
};

//-------------------------------------------------------------------------
// function	name : f_DetailInfoRetrieve
// function	desc : 상세 정보 조회  적하항목 , Master B/L , House B/L 검색
//-------------------------------------------------------------------------
scwin.f_DetailInfoRetrieve = function (row) {
  // dma_search.set("mrnno", ds_vesselList.getCellData(row, "mhmrnno"));		
  dma_search.set("etd", ds_vesselList.getCellData(row, "mhetd"));
  dma_search.set("eta", ds_vesselList.getCellData(row, "mheta"));
  dma_search.set("vsl", ds_vesselList.getCellData(row, "mhvsl"));
  dma_search.set("voy", ds_vesselList.getCellData(row, "mhvyg"));
  dma_search.set("kcomcd", scwin.hid_kcomcd);
  dma_search.set("liner", ds_vesselList.getCellData(row, "mhlinercd"));
  dma_search.set("ediliner", ds_vesselList.getCellData(row, "mhediliner"));
  dma_search.set("mhstdt", ds_vesselList.getCellData(row, "mhstdt"));
  dma_search.set("mhno", ds_vesselList.getCellData(row, "mhno"));
  dma_search.set("status", ds_vesselList.getCellData(row, "status"));
  dma_search.set("mrnno", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhmrnno"));
  txt_tMsr.setValue("");
  txt_tPkg.setValue("");
  $c.sbm.execute($p, sbm_retrieveSeaCargoManifest);
};

//-------------------------------------------------------------------------
// function	name : f_BlInfoSum
// function	desc : Master, House B/L 데이터셋 조회 후  SUM 
//-------------------------------------------------------------------------
scwin.f_BlInfoSum = function () {
  let mWgt = 0,
    mMsr = 0,
    mPkg = 0;
  let hWgt = 0,
    hMsr = 0,
    hPkg = 0;

  // Master B/L 정보 Sum
  for (let i = 0; i < ds_Master.getRowCount(); i++) {
    mWgt += Number(ds_Master.getCellData(i, "wgt")) || 0;
    mMsr += Number(ds_Master.getCellData(i, "msr")) || 0;
    mPkg += Number(ds_Master.getCellData(i, "pkg")) || 0;
  }
  txt_tMwgt.setValue(mWgt);
  txt_tMmsr.setValue(mMsr);
  txt_tMpkg.setValue(mPkg);

  // House B/L 정보 Sum
  for (let i = 0; i < ds_House.getRowCount(); i++) {
    hWgt += Number(ds_House.getCellData(i, "wgt")) || 0;
    hMsr += Number(ds_House.getCellData(i, "msr")) || 0;
    hPkg += Number(ds_House.getCellData(i, "pkg")) || 0;
  }
  txt_tHwgt.setValue(hWgt);
  txt_tHmsr.setValue(hMsr);
  txt_tHpkg.setValue(hPkg);

  // Master B/L 정보 Sum
  // txt_tMwgt.setValue(ds_Master.Sum(4,0,0));
  // txt_tMmsr.setValue(ds_Master.Sum(5,0,0));
  // txt_tMpkg.setValue(ds_Master.Sum(6,0,0));
  // House B/L 정보 Sum
  // txt_tHwgt.setValue(ds_House.Sum(5,0,0));
  // txt_tHmsr.setValue(ds_House.Sum(6,0,0));
  // txt_tHpkg.setValue(ds_House.Sum(7,0,0));

  totalRows2.setValue(ds_Master.getRowCount());
  totalRows3.setValue(ds_House.getRowCount());
};

//-------------------------------------------------------------------------
// function	name : f_MasterInfoDetaile
// function	desc : Master B/L 적하물 정보  
//-------------------------------------------------------------------------
scwin.f_MasterInfoDetaile = function (row) {
  // Master B/L 정보 Sum
  txt_tWgt.setValue(ds_Master.getCellData(row, "wgt"));
  txt_tMsr.setValue(ds_Master.getCellData(row, "msr"));
  txt_tPkg.setValue(ds_Master.getCellData(row, "pkg"));
};

//-------------------------------------------------------------------------
// function	name : f_HouseInfoDetaile
// function	desc : House B/L 적하물 정보 
//-------------------------------------------------------------------------
scwin.f_HouseInfoDetaile = function (row) {
  // House B/L 정보 Sum
  txt_tWgt.setValue(ds_House.getCellData(row, "wgt"));
  txt_tMsr.setValue(ds_House.getCellData(row, "msr"));
  txt_tPkg.setValue(ds_House.getCellData(row, "pkg"));
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = function () {
  //신규, 수정자 구분  true : 신규  false : 수정
  ed_fwdcd.setValue("DBEX");
  scwin.f_Set("CREATE");
  ed_custom.setValue('030');
  ed_customnm.setValue('부산본부세관');
  ed_depart.setValue('10');
  ed_departnm.setValue('통관과');
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.f_Update = function () {
  scwin.f_Set("UPDATE");
};

//---------------------------------------------------------
// 저장
//---------------------------------------------------------  
scwin.f_Save = async function () {
  let sumMhno = "";

  // validate check && MRN NO check
  if (await scwin.f_ReqFieldChk()) {
    //&& f_CheckDigitl(ds_SeaCargoManifest.NameValue(ds_SeaCargoManifest.getRowPosition(), "mrnno"))){
    // BL checking
    if (dma_search.get("iogb") == "I") {
      for (let i = 0; i < ds_Master.getRowCount(); i++) {
        if (ds_Master.getCellData(i, "msnno") == "") {
          await $c.win.alert($p, "MSN No는 필수 입니다.");
          ds_Master.setRowPosition(i);
          gr_MasterblList.setColumn("msnno");
          return;
        }
      }
    }
    ds_SeaCargoManifest.setCellData(ds_SeaCargoManifest.getRowPosition(), "userid", scwin.userId);
    ds_SeaCargoManifest.setCellData(ds_SeaCargoManifest.getRowPosition(), "hblCnt", ed_cntCnt.getValue());
    ds_SeaCargoManifest.setCellData(ds_SeaCargoManifest.getRowPosition(), "mhno", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhno"));
    // 신규
    if (ds_SeaCargoManifest.getCellData(0, "seq") == "2") {
      //master bl 정보가 신규 일경우 mrnno와 ediliner 를 넣어준다.
      if (ds_Master.getRowCount() > 0) {
        for (let i = 0; i < ds_Master.getRowCount(); i++) {
          ds_Master.setCellData(i, "mrnno", ed_mrnno.getValue());
          ds_Master.setCellData(i, "ediLiner", ed_ediliner.getValue());
        }
      }

      //hosue bl 정보가 신규 일경우 mrnno 를 넣어준다.
      if (ds_House.getRowCount() > 0) {
        for (let i = 0; i < ds_House.getRowCount(); i++) {
          ds_House.setCellData(i, "mrnno", ed_mrnno.getValue());
        }
      }
      ds_SeaCargoManifest.modifyRowStatus(0, "C");
      ds_Master.modifyAllStatus("C");
      ds_House.modifyAllStatus("C");
      $c.sbm.execute($p, sbm_save);
      ds_vesselList.setCellData(ds_vesselList.getRowPosition(), "mhmrnno", ed_mrnno.getValue());
    } else {
      // 수정

      //master bl 정보가 신규 일경우 mrnno와 ediliner 를 넣어준다.
      for (let i = 0; i < ds_Master.getRowCount(); i++) {
        if (ds_Master.getRowStatus(i) == "C") {
          ds_Master.setCellData(i, "mrnno", ed_mrnno.getValue());
          ds_Master.setCellData(i, "ediLiner", ed_ediliner.getValue());
        }
      }

      //hosue bl 정보가 신규 일경우 mrnno 를 넣어준다.
      for (let i = 0; i < ds_House.getRowCount(); i++) {
        if (ds_House.getRowStatus(i) == "C") {
          ds_House.setCellData(i, "mrnno", ed_mrnno.getValue());
        }
      }
      $c.sbm.execute($p, sbm_save);
      ds_vesselList.setCellData(ds_vesselList.getRowPosition(), "mhmrnno", ed_mrnno.getValue());
    }
  }
};

//---------------------------------------------------------
//유효성검사
//---------------------------------------------------------    
scwin.f_ReqFieldChk = async function () {
  if ((await $c.gus.cfValidate($p, [tb_headerMandantor])) == false) {
    return false;
  }
  if ((await $c.gus.cfValidate($p, [gr_MasterblList])) == false) {
    return false;
  }
  if ((await $c.gus.cfValidate($p, [gr_HouseblList])) == false) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_Cancel = function () {
  if (ds_SeaCargoManifest.getCellData(0, "seq") == '1') {
    scwin.f_Set("seq2");
  } else {
    scwin.f_Set("seq1");
  }
  scwin.f_undoRow(ds_SeaCargoManifest);
  scwin.f_undoRow(ds_Master);
  cnd_rd_iogb.focus();
  // processFlag = "T"; 		
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_undoRow = function (ds) {
  if (ds == ds_Master) {
    $c.data.undoAll($p, ds_House);
  }
  ds.undoRow(ds.getRowPosition());
};

//---------------------------------------------------------
// 삭제
//---------------------------------------------------------  
scwin.f_Delete = async function () {
  if (await $c.win.confirm($p, MSG_CM_CRM_004)) {
    //삭제하시겠습니까?
    //삭제
    ds_Master.modifyAllStatus("D");
    ds_House.modifyAllStatus("D");
    ds_SeaCargoManifest.modifyAllStatus("D");
    $c.sbm.execute($p, sbm_delete);
  }
  // scwin.f_Set("DELETE");
};

//---------------------------------------------------------
// 조회조건 공통팝업 열기
//---------------------------------------------------------   
// scwin.f_OpenCommonPopUp = function(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
//     switch (gubun1) {	 	
//         case "DEPT" : 
//             rtnList = udc_opDeptCdInfo.ilCommonPopUp(scwin.udc_opDeptCdInfo_callBackFunc, cnd_ed_deptCd.getValue().trim()
//                                     ,""
//                                     ,pWinCloseTF
//                                     ,'2'
//                                     ,"Code, Name"
//                                     ,'80,230'
//                                     ,"3,4,5,6,7,8,9,10"
//                                     ,null ,null ,null ,null ,null ,null
//                                     ,pAllSearchTF
//                                     ,"DEPT,Code,Name"
//                                     ,pNoDataCloseTF); 
//                 //if(typeof(rtnList) != "undefined"){			      	
//                     // cfSetReturnValue(rtnList, cnd_ed_deptCd, cnd_txt_deptNm);
//                 //}
//             break;  			
//     }			  		

// }  		

// ======================
// 콜백 함수들
// ======================
// scwin.udc_opDeptCdInfo_callBackFunc = function(rtnList) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         cnd_ed_deptCd.setValue(rtnList[0]);
//         cnd_txt_deptNm.setValue(rtnList[1]);
//         cnd_ed_deptCd.options.hidVal = rtnList[0];
//         cnd_txt_deptNm.options.hidVal = rtnList[1];
//     } else {
//         cnd_ed_deptCd.setValue("");
//         cnd_txt_deptNm.setValue("");
//         cnd_ed_deptCd.options.hidVal = "";
//         cnd_txt_deptNm.options.hidVal = "";
//     }
// };

//---------------------------------------------------------
// 공통팝업 열기
//--------------------------------------------------------- 
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = new Array();
  switch (disGubun) {
    case "Liner":
      // Loading
      rtnList = udc_engClntInfo.ilCommonPopUp(scwin.udc_engClntInfo_callBackFunc, ed_liner.getValue().trim(), '', pWinCloseTF, '9', "Liner Code,,,,,,,,EDI Liner Code,", '130,,,,,,,,200,', "2,3,4,5,6,7,8,10", null, '500', '500', null, null, null, pAllSearchTF, "EDI Liner Search,Liner Code, EDI Liner Name", pNoDataCloseTF);

      // cfSetReturnValue(rtnList, ed_liner, "",["","","","","","",ed_ediliner,""]);
      break;
    case "Discharge":
      //항구코드 

      rtnList = udc_portInfo.ilCommonPopUp(scwin.udc_portInfo_callBackFunc, ed_lodcd.getValue().trim(), ed_lodnm.getValue(), pWinCloseTF, '2', "Discharge Code, Discharge Name", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "Discharge Search,Discharge Code, Discharge Name", pNoDataCloseTF);

      // cfSetReturnValue(rtnList, ed_lodcd, ed_lodnm);
      break;
    case "CustomHouse":
      rtnList = udc_customInfo.ilCommonPopUp(scwin.udc_customInfo_callBackFunc, ed_custom.getValue().trim(), ed_customnm.getValue(), pWinCloseTF, '2', "관할세관 Code, 관할세관 Name", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "관할세관 Search,관할세관 Code, 관할세관 Name", pNoDataCloseTF);

      // cfSetReturnValue(rtnList, ed_custom, ed_customnm);

      break;
    case "CustomHouseDept":
      rtnList = udc_customSectionInfo.ilCommonPopUp(scwin.udc_customSectionInfo_callBackFunc, ed_depart.getValue().trim(), ed_departnm.getValue(), pWinCloseTF, '2', "세관과 Code, 세관과 Name", '130,300', "3,4,5,6,7,8,9,10", null, '500', '500', null, null, null, pAllSearchTF, "세관과 Search,세관과 Code, 세관과 Name", pNoDataCloseTF);

      // cfSetReturnValue(rtnList, ed_depart, ed_departnm);

      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_engClntInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_liner.setValue(rtnList[0]);
    ed_ediliner.setValue(rtnList[8]);
    ed_liner.options.hidVal = rtnList[0];
    ed_ediliner.options.hidVal = rtnList[8];
  } else {
    ed_liner.setValue("");
    ed_ediliner.setValue("");
    ed_liner.options.hidVal = "";
    ed_ediliner.options.hidVal = "";
  }
};
scwin.udc_portInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_lodcd.setValue(rtnList[0]);
    ed_lodnm.setValue(rtnList[1]);
    ed_lodcd.options.hidVal = rtnList[0];
    ed_lodnm.options.hidVal = rtnList[1];
  } else {
    ed_lodcd.setValue("");
    ed_lodnm.setValue("");
    ed_lodcd.options.hidVal = "";
    ed_lodnm.options.hidVal = "";
  }
};
scwin.udc_customInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_custom.setValue(rtnList[0]);
    ed_customnm.setValue(rtnList[1]);
    ed_custom.options.hidVal = rtnList[0];
    ed_customnm.options.hidVal = rtnList[1];
  } else {
    ed_custom.setValue("");
    ed_customnm.setValue("");
    ed_custom.options.hidVal = "";
    ed_customnm.options.hidVal = "";
  }
};
scwin.udc_customSectionInfo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_depart.setValue(rtnList[0]);
    ed_departnm.setValue(rtnList[1]);
    ed_depart.options.hidVal = rtnList[0];
    ed_departnm.options.hidVal = rtnList[1];
  } else {
    ed_depart.setValue("");
    ed_departnm.setValue("");
    ed_depart.options.hidVal = "";
    ed_departnm.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// function	name : f_CheckDigitl
// function	desc : MRN Number 체크 
//-------------------------------------------------------------------------
scwin.f_CheckDigitl = async function (mrnno) {
  let result = mrnno;
  let ChkCode;
  ChkCode = mrnno.charAt(10);
  try {
    if (mrnno.length != 11) {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_005, ["MRN No", "11"]); // @은(는) @자리수만큼 입력하십시오.
      ed_mrnseq.setValue("");
      return;
    } else {
      result = mrnno.charCodeAt(0) * 3 % 10;
      result += mrnno.charCodeAt(1) * 7 % 10;
      result += mrnno.charCodeAt(2) * 9 % 10;
      result += mrnno.charCodeAt(3) * 3 % 10;
      result += mrnno.charCodeAt(4) * 7 % 10;
      result += mrnno.charCodeAt(5) * 9 % 10;
      result += mrnno.charCodeAt(6) * 3 % 10;
      result += mrnno.charCodeAt(7) * 7 % 10;
      result += mrnno.charCodeAt(8) * 9 % 10;
      result += mrnno.charCodeAt(9) * 3 % 10;
      result = result % 10;
      if (ChkCode != result) {
        if (mrnno.length == 11) {
          ed_mrnseq.setValue(result);
        } else {
          ed_mrnseq.setValue("");
        }
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_038, ["MRN No"]); // 유효한 @가 아닙니다.
        return false;
      }
      ed_mrnseq.setValue(mrnno.cut(0, 10));
      return true;
    }
  } catch (e) {
    e.discription();
  }
};

//---------------------------------------------------------
//행추가
//--------------------------------------------------------- 

scwin.f_AddRow = function (disGubun) {
  switch (disGubun) {
    case "master":
      ds_Master.insertRow();
      ds_Master.modifyRowStatus(ds_Master.getRowPosition(), "C");
      ds_Master.setCellData(ds_Master.getRowPosition(), "kcomcd", scwin.hid_kcomcd);
      ds_Master.setCellData(ds_Master.getRowPosition(), "userid", scwin.userId);
      gr_MasterblList.setColumn("mblno"); // forcus

      break;
  }
};

//---------------------------------------------------------
// 행삭제
//--------------------------------------------------------- 
scwin.f_deleteRow = function (disGubun) {
  switch (disGubun) {
    case 1:
      for (let i = 1; i < ds_Master.getRowCount() + 1; i++) {
        if (ds_Master.getCellData(ds_Master.getRowPosition(), "mblno") == ds_House.getCellData(i, "mblno")) {
          ds_House.removeRow(i);
        }
      }
      ds_Master.removeRow(ds_Master.getRowPosition());
      break;
    default:
      break;
  }
};

//------------------------------------------------------------------------
// 조회 조건 필드 초기화
//------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  scwin.f_DefaultValue();
};

//---------------------------------------------------------
// Tab 초기화
//---------------------------------------------------------
// scwin.f_initSetTab = function () {  
//     $c.gus.cfEnableObjects([sbm_tab_center0, sbm_tab_center1]);

// }  

//---------------------------------------------------------
// Tab Menu 선택시 처리
//---------------------------------------------------------
scwin.f_selectTabMenu = function (idx) {
  switch (idx) {
    case 0:
      cfViewTab(idx);
      break;
    case 1:
      cfViewTab(idx);
      break;
  }
};

//---------------------------------------------------------
// function name : f_ChkKeyCode
// Param : ds(dataset),row,colid
// 설명 : !,@,#,$,%,^,&,+,[,],",\ 등 특수기호 문자를 입력 받지않는 함수
//---------------------------------------------------------    
scwin.f_ChkKeyCode = function (ds, row, colid) {
  try {
    let str = ds.getCellData(row, colid); //타이핑 한 문자열
    let chkStr = ""; // 배열화 될 문자열
    let comStr = ""; // 필터링 될 문자열
    let badStr = ""; // 필터링 할 문자열
    for (i = 0; i < str.length; i++) {
      chkStr = str.charCodeAt(i);
      if (chkStr >= 33 && chkStr <= 39) {
        badStr += str.charAt(i);
      } else if (chkStr >= 91 && chkStr <= 96) {
        badStr += str.charAt(i);
      } else if (chkStr >= 123 && chkStr <= 126) {
        badStr += str.charAt(i);
      } else if (chkStr == 63) {
        badStr += str.charAt(i);
      } else if (chkStr == 64) {
        badStr += str.charAt(i);
      } else if (chkStr == 43) {
        badStr += str.charAt(i);
      } else if (chkStr == 59) {
        badStr += str.charAt(i);
      } else if (chkStr == 0) {
        badStr += str.charAt(i);
      } else {
        comStr += str.charAt(i);
      }
    }
    // 필터링 된 문자 대입
    ds.setCellData(row, colid, comStr);
  } catch (e) {
    //alert("Code Check Error");
  }
};

//적하목록 프린트
scwin.f_Print = function () {
  dma_search.set("mrnno", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhmrnno"));
  dma_search.set("etd", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhetd"));
  dma_search.set("eta", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mheta"));
  dma_search.set("vsl", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhvsl"));
  dma_search.set("voy", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhvyg"));
  dma_search.set("kcomcd", scwin.hid_kcomcd);
  dma_search.set("liner", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhlinercd"));
  dma_search.set("ediliner", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhediliner"));
  dma_search.set("mhstdt", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhstdt"));
  dma_search.set("mhno", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhno"));
  $c.sbm.execute($p, sbm_ReportPrint);

  //Reprot function 실행 
};
scwin.f_print2 = function () {
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "",
    odiName: "sc_ed_101_01_01",
    odiParam: {
      KCOMCD: scwin.hid_kcomcd,
      MRNNO: ed_mrnno.getValue(),
      EDILINER: ed_ediliner.getValue(),
      USERID: scwin.userId
    },
    viewerParam: {
      useprogressbar: false
    },
    formParam: {
      //
    }
  };
  if (cnd_rd_iogb.getValue() == "E") {
    data.reportName = "/il/ediam/sc_ed_101_01_01.ozr";
  } else {
    data.reportName = "/il/ediam/sc_ed_101_01_02.ozr";
  }
  scwin.openPopup(data);
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

//SEnd EDI	 
scwin.f_SendEDI = async function () {
  if (await scwin.f_ReqFieldChk()) {
    //&& scwin.f_CheckDigitl(ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "mrnno"))){
    if (ds_House.getRowCount() > 0) {
      for (let i = 0; i < ds_House.getRowCount(); i++) {
        ds_House.modifyRowStatus(ds_House.getRowPosition(), "C");
        ds_House.setCellData(ds_House.getRowPosition(), "edigubun", dma_search.get("iogb"));
      }
      // sbm_BLcheck response의 결과로 내부체크 로직이 존재하므로 해당 서브미션을 동기처리.
      $c.sbm.execute($p, sbm_BLcheck);
      for (let i = 0; i < ds_House.getRowCount(); i++) {
        ds_House.modifyRowStatus(ds_House.getRowPosition(), "R");
      }
    } else {
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_049, ["House B/L"]); //@가 존재 하지 않습니다.
      return;
    }
    if (ds_BLcheck.getCellData(0, "flag") == -1) {
      // $c.win.alert(E_MSG_CM_ERR_055, Array("B/L Error"));//@ 확인 바람
      // scwin.f_selectTabMenu(1);
      let errMsg = "MRN(" + ds_BLcheck.getCellData(0, "mblno") + ") / MSN(" + ds_BLcheck.getCellData(0, "hblno") + ") / " + ds_BLcheck.getCellData(0, "descnm");
      await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_055, [errMsg]); //@ 확인 바람
      return;
    } else {
      //checking end
      if (ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhmrnno") == "") {
        await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_046, Array("MRN No"));
        return;
      }
      let mrnno = ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "mrnno");
      let ediliner = ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "ediliner");
      let mhno = ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "mhno");
      if (cnd_rd_iogb.getValue() == "I") {
        sbm_ds_customerInfo.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveMfcsCrn&param1=" + mrnno + "&param2=" + mhno;
        $c.sbm.execute($p, sbm_ds_customerInfo);
        if (ds_customerInfo.getCellData(0, "COL1") > 0) {
          if ((await $c.win.confirm($p, "Consignee 사업자번호가 공란상태입니다.\n이대로 전송하려면 “확인”, \n보완 후 전송하려면 “취소”를 선택하세요.")) == false) {
            return false;
          }
        }
      }
      ds_SendEDI.insertRow();
      ds_SendEDI.setCellData(0, "kcomcd", scwin.hid_kcomcd);
      ds_SendEDI.setCellData(0, "mrnno", ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "mrnno"));
      ds_SendEDI.setCellData(0, "ediliner", ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "ediliner"));
      ds_SendEDI.setCellData(0, "mhno", ds_SeaCargoManifest.getCellData(ds_SeaCargoManifest.getRowPosition(), "mhno"));
      ds_SendEDI.setCellData(0, "gubun", "SeaCargoManifest");
      $c.sbm.execute($p, sbm_SendEDI);
      ds_SendEDI.removeAll();
    }
  }
};
//KT net 접속
scwin.f_ktNetOpen = function () {
  sURL = "http://www.ctradeworld.com/ctwpass/userLoginChk.jsp?userid=FSDBEX0001&userpass=DBEX0001";
  window.open(sURL);
};

//uLogisHub 접속
scwin.f_uLogisHubOpen = function () {
  sURL = "https://www.ulogishub.com/gate_url.jsp?sid=FSDBEX0001&password=dbex1234!";
  window.open(sURL);
};

//plism 3.0 접속
scwin.f_plismOpen = function () {
  let today = scwin.strCurDate;
  let fulldate = $c.date.addMonth($p, today);
  let checkNum = 0;
  let sURL = "";
  for (let i = 0; i < fulldate.length; i++) {
    checkNum += parseInt(fulldate.substring(i, i + 1));
  }
  checkNum = checkNum % 5;
  let certiKeyI = "UjBOeFdrUjZkbmt4VVhSTFJscE5NVlp3YmpGMksyVmhSMFp4TW1aUllqVk1ORFZFY0VoeVJEaDNORDA9";
  let certiKeyO = "V0ZvcmQwRnlLMlYzZDFkQ0sxY3dTbWRvVVZwcVZpdHlLMUZvSzFka2RUWlZUVzhyVW5GemRFdGxVVDA9";
  console.log(ed_mrnno.getValue());
  console.log(cnd_rd_iogb.getValue());
  if (ed_mrnno.getValue() != "") {
    if (cnd_rd_iogb.getValue() == "I") {
      sURL = "https://www.plism.com/webLinkCertService.do?serviceId=KMCS_0011&certifyKey=" + certiKeyI + "&userId=DBE123&mrn=" + ed_mrnno.getValue();
    } else if (cnd_rd_iogb.getValue() == "O") {
      sURL = "https://www.plism.com/webLinkCertService.do?serviceId=KMCS_0012&certifyKey=" + certiKeyO + "&userId=DBE123&mrn=" + ed_mrnno.getValue();
    }
  } else {
    sURL = "https://www.plism.com/webLinkLogin.do?userId=DBE123&serviceId=PL_MAIN&authNum=" + checkNum;
  }
  console.log(sURL);
  window.open(sURL);
};
scwin.f_RunExcel_gr_vesselList = async function () {
  if (ds_vesselList.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 8,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "적하항목",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "적하항목.xls",
    sheetName: "적하항목",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_vesselList, options, infoArr);
  }
};
scwin.f_RunExcel_gr_MasterblList = async function () {
  if (ds_Master.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "Master BL List",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "Master BL List.xls",
    sheetName: "Master BL List",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_MasterblList, options, infoArr);
  }
};
scwin.f_RunExcel_gr_HouseblList = async function () {
  if (ds_House.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 9,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "House BL List",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "House BL List.xls",
    sheetName: "House BL List",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_HouseblList, options, infoArr);
  }
};
scwin.f_RunExcel_gr_BLcheck = async function () {
  if (ds_BLcheck.getRowCount() <= 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 4,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "BL Error",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: false,
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  const options = {
    fileName: "BL Error.xls",
    sheetName: "BL Error",
    startRowIndex: 3,
    startColumnIndex: 0,
    type: 1
  };
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    await $c.data.downloadGridViewExcel($p, gr_BLcheck, options, infoArr);
  }
};

//---------------------------------------------------------
// script
//---------------------------------------------------------

scwin.gr_vesselList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_DetailInfoRetrieve(rowIndex);
};
scwin.gr_HouseblList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_HouseInfoDetaile(rowIndex);
};
scwin.sbm_retrieveSeaCargoManifest_submitdone = function (e) {
  ds_SeaCargoManifest.setRowPosition(0);
  gr_MasterblList.setFocusedCell(0, 0, false);
  gr_HouseblList.setFocusedCell(0, 0, false);
  let mblno = dma_search.get("mblno");
  let mrnno = dma_search.get("mrnno");
  if (ds_House.getRowCount() > 0) {
    for (let i = 0; i < ds_House.getRowCount(); i++) {
      if (i == 0) {
        ds_House.setCellData(i, "hsnno", "1");
      }
      if (i > 0 && ds_House.getCellData(i, "mblno") == ds_House.getCellData(i - 1, "mblno")) {
        ds_House.setCellData(i, "hsnno", parseInt(ds_House.getCellData(i - 1, "hsnno")) + 1);
      } else {
        ds_House.setCellData(i, "hsnno", "1");
      }
    }
  }
  if (ds_SeaCargoManifest.getCellData(0, "seq") == '1') {
    let sumMhno = "";
    let sumMblno = "";
    if (ds_Master.getRowCount() > 0) {
      for (let i = 0; i < ds_Master.getRowCount(); i++) {
        sumMhno += ds_Master.getCellData(i, "mhno") + "|";
        sumMblno += ds_Master.getCellData(i, "mblno") + "|";
      }
    }
    dma_search.set("mblno", sumMblno);
    dma_search.set("kcomcd", scwin.hid_kcomcd);
    dma_search.set("mhno", sumMhno);
    dma_search.set("mrnno", ds_vesselList.getCellData(ds_vesselList.getRowPosition(), "mhmrnno"));
    if (ed_mrnno.getValue() != "") {
      $c.sbm.execute($p, sbm_retrieveSeaCargoManifestCnt);
    }
    if (ds_Master.getRowCount() > 0 && ds_House.getRowCount() > 0) {
      ed_mblCnt.setValue(ds_Master.getRowCount());
      ed_hblCnt.setValue(ds_House.getRowCount());
    }
    scwin.f_Set("seq2");
  } else {
    ed_cntCnt.setValue("");
    scwin.f_Set("seq1");
  }
  scwin.f_BlInfoSum();
  dma_search.set("mblno", mblno);
  dma_search.set("mrnno", mrnno);
  dma_search.set("status", ds_SeaCargoManifest.getCellData(0, "status"));
  $c.gus.cfGoPrevPosition($p, gr_vesselList, ds_vesselList.getRowPosition());
};
scwin.sbm_retrieve_submitdone = async function (e) {
  gr_vesselList.setFocusedCell(0, 0, 'cell');
  let rowcnt = ds_vesselList.getRowCount();
  if (rowcnt == 0) {
    await $c.win.alert($p, E_MSG_CM_WRN_002);
  }
  $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save, b_Delete, b_Create, b_Update, b_Print, btn_ediSend]);
  totalRows1.setValue(rowcnt);
};
scwin.cnd_rd_iogb_onchange = function (info) {
  dma_search.set("mhno", info.newValue);
};
scwin.sbm_ReportPrint_submitdone = function (e) {
  scwin.f_print2();
};
scwin.sbm_SendEDI_submitdone = async function (e) {
  await $c.win.alert($p, E_MSG_CM_INF_018);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    ds_SeaCargoManifest.removeAll();
    ds_vesselList.setCellData(ds_vesselList.getRowPosition(), "mhmrnno", "");
    scwin.f_DetailInfoRetrieve(ds_vesselList.getRowPosition());
    return;
  } else {
    await $c.win.alert($p, E_MSG_CM_INF_001);
    scwin.f_DetailInfoRetrieve(ds_vesselList.getRowPosition());
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    return;
  } else {
    await $c.win.alert($p, E_MSG_CM_INF_004);
  }
  scwin.f_Retrieve();
};
scwin.sbm_retrieveSeaCargoManifestCnt_submitdone = function (e) {
  ds_cntCnt.setRowPosition(0);
};
scwin.gr_vesselList_onkeyup = function (e) {
  let keycode = e.keyCode;
  if (keycode == 38 || keycode == 40) {
    scwin.f_DetailInfoRetrieve(ds_vesselList.getRowPosition());
  }
};
scwin.udc_opDeptCdInfo_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'F', 'F', 'F');
};
scwin.udc_opDeptCdInfo_onblurCodeEvent = function (e) {
  scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
};
scwin.udc_opDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('DEPT', 'T', 'F', 'F');
};
scwin.udc_engClntInfo_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F', 'F', 'F');
};
scwin.udc_engClntInfo_onblurCodeEvent = function (e) {
  scwin.f_PopUp('Liner', 'T', 'F', 'F');
};
scwin.udc_portInfo_onclickEvent = function (e) {
  scwin.f_PopUp('Discharge', 'T', 'F', 'F');
};
scwin.udc_portInfo_onblurCodeEvent = function (e) {
  scwin.f_PopUp('Discharge', 'T', 'F', 'F');
};
scwin.udc_customInfo_onclickEvent = function (e) {
  scwin.f_PopUp('CustomHouse', 'F', 'F', 'F');
};
scwin.udc_customInfo_onblurCodeEvent = function (e) {
  scwin.f_PopUp('CustomHouse', 'T', 'F', 'F');
};
scwin.udc_customSectionInfo_onclickEvent = function (e) {
  scwin.f_PopUp('CustomHouseDept', 'T', 'F', 'F');
};
scwin.udc_customSectionInfo_onblurCodeEvent = function (e) {
  scwin.f_PopUp('CustomHouseDept', 'F', 'F', 'F');
};
scwin.sbm_BLcheck_submitdone = function (e) {
  let rowCnt = ds_BLcheck.getRowCount();
  totalRows4.setValue(rowCnt);
};
scwin.cnd_ed_hhmblno_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_iogb',ref:'data:dma_search.iogb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETD/ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_search',refEdDt:'todt',refStDt:'fromdt',style:'',edFromId:'cnd_ed_fromdt',edToId:'cnd_ed_todt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hhmblno',placeholder:'',style:'width:200px;',ref:'data:dma_search.mblno','ev:onkeyup':'scwin.cnd_ed_hhmblno_onkeyup',allowChar:'A-Z0-9a-z',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mrnno',placeholder:'',style:'width:150px;',maxlength:'11',ref:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'cnd_lc_autono',style:'width:150px;',submenuSize:'auto',ref:'data:dma_search.blType'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DIRECT포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'DIRECT제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Status',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_status',ref:'data:dma_search.status',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'',style:''},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'적하항목',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'visibility: hidden;',id:'tabs4',label:'B/L Error'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{id:'tb_headerMandantor',class:'lybox flex_no wfix'},E:[{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 35%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하항목',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section',style:'',gridDownFn:'scwin.f_RunExcel_gr_vesselList',gridDownUserAuth:'X',gridID:'gr_vesselList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{rowNumWidth:'50',visibleRowNumFix:'true',dataList:'data:ds_vesselList',readOnly:'true',rowNumHeaderValue:'No',style:'',id:'gr_vesselList',visibleRowNum:'7',class:'wq_gvw','ev:oncellclick':'scwin.gr_vesselList_oncellclick',focusMode:'cell','ev:onkeyup':'scwin.gr_vesselList_onkeyup',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption3',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',displayMode:'label',value:'MRN No'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'Master B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column17',displayMode:'label',value:'Vessel'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',displayMode:'label',value:'Vyg'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',displayMode:'label',value:'Line'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',displayMode:'label',value:'EDI Code'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column9',displayMode:'label',value:'ETD'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',displayMode:'label',value:'ETA'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',displayMode:'label',value:'mhstdt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',displayMode:'label',value:'MHNO'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mhmrnno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mblno',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'mhvsl',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mhvyg',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mhlinercd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'mhediliner',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'calendar',id:'mhetd',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'mheta',displayMode:'label',textAlign:'left',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mhstdt',displayMode:'label',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mhno',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'}},{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'MRN',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrnno',placeholder:'',style:'',maxlength:'11',allowChar:'A-Z0-9',objType:'data',mandatory:'true',ref:'data:ds_SeaCargoManifest.mrnno',title:'MRN'}},{T:1,N:'xf:input',A:{class:'',id:'ed_mrnseq',placeholder:'',style:'width: 80px;',objType:'data',maxlength:'1',ref:'data:ds_SeaCargoManifest.mrnseq'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Status',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_status',ref:'data:ds_SeaCargoManifest.status',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',disabled:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'2'}]}]},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'B/L Liner',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_liner',nameId:'ed_ediliner',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'B/L Liner',refDataCollection:'ds_SeaCargoManifest',allowCharCode:'0-9A-Za-z',mandatoryCode:'true',objTypeCode:'data',maxlengthCode:'6',UpperFlagCode:'1',objTypeName:'data',btnId:'img_PopUp1',id:'udc_engClntInfo','ev:onclickEvent':'scwin.udc_engClntInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_engClntInfo_onblurCodeEvent',name:'ediliner',code:'liner',UpperFlagName:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hblCnt',placeholder:'',style:'',objType:'data',maxlength:'50',ref:'data:ds_SeaCargoManifest.hblCnt',disabled:'true',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_linernm',placeholder:'',style:'',ref:'data:ds_SeaCargoManifest.linernm',disabled:'true',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mblCnt',placeholder:'',style:'',ref:'data:ds_SeaCargoManifest.mblCnt',objType:'data',maxlength:'50',disabled:'true',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송주선업자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_fwdcd',placeholder:'',style:'width:150px;',maxlength:'50',ref:'data:ds_SeaCargoManifest.fwdcd',disabled:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntCnt',placeholder:'',style:'',maxlength:'50',objType:'data',disabled:'true',ref:'data:ds_cntCnt.cntCnt',readOnly:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Vessle',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_vessel',placeholder:'',style:'width:150px;',maxlength:'25',objType:'data',mandatory:'true',ref:'data:ds_SeaCargoManifest.vessel',title:'Vessle'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_tWgt',placeholder:'',style:'width:150px;',disabled:'true',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Voyage',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_voyage',placeholder:'',style:'width:150px;',maxlength:'11',objType:'data',mandatory:'true',ref:'data:ds_SeaCargoManifest.voyage',title:'Voyage'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_tMsr',placeholder:'',style:'width:150px;',disabled:'true',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_lodcd',nameId:'ed_lodnm',popupID:'',selectID:'retrievePortInfo',style:'',validTitle:'Discharge',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'5',allowCharCode:'0-9A-Z',UpperFlagCode:'1',code:'lodcd',name:'lodnm',refDataCollection:'ds_SeaCargoManifest',btnId:'img_PopUp2',id:'udc_portInfo','ev:onclickEvent':'scwin.udc_portInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_portInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_portInfo_onviewchangeNameEvent',objTypeName:'data',maxlengthName:'50',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Package',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'txt_tPkg',placeholder:'',style:'width:150px;',disabled:'true',maxlength:'50'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_dt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_SeaCargoManifest.dt',mandatory:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Send Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'',id:'ed_tDt',style:'',disabled:'true',displayFormat:'yyyy/MM/dd/HH:mm',ref:'data:ds_SeaCargoManifest.tdt'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'관할세관',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_custom',nameId:'ed_customnm',popupID:'',selectID:'retrieveCustomInfo',style:'',validTitle:'관할세관',objTypeCode:'data',mandatoryCode:'true',objTypeName:'data',maxlengthName:'50',maxlengthCode:'50',refDataCollection:'ds_SeaCargoManifest',code:'custom',name:'customnm',btnId:'img_PopUp3',id:'udc_customInfo','ev:onclickEvent':'scwin.udc_customInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_customInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_customInfo_onviewchangeNameEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Register ID',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_userid',placeholder:'',style:'',disabled:'true',objType:'data',maxlength:'50',ref:'data:ds_SeaCargoManifest.userid',readOnly:'true'}},{T:1,N:'xf:input',A:{class:'',id:'ed_usernm',placeholder:'',style:'',disabled:'true',maxlength:'50',objType:'data',ref:'data:ds_SeaCargoManifest.usernm',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'세관과',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_depart',nameId:'ed_departnm',popupID:'',selectID:'retrieveCustomSectionInfo',style:'',validTitle:'세관과',refDataCollection:'ds_SeaCargoManifest',objTypeCode:'data',mandatoryCode:'true',maxlengthCode:'50',objTypeName:'data',maxlengthName:'50',code:'depart',name:'departnm',btnId:'img_PopUp4',id:'udc_customSectionInfo','ev:onclickEvent':'scwin.udc_customSectionInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_customSectionInfo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_customSectionInfo_onviewchangeNameEvent',readOnlyName:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Update Date',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ed_userdt',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',disabled:'true',objType:'data',displayFormat:'yyyy/MM/dd',ref:'data:ds_SeaCargoManifest.userdt',inputReadOnly:'true',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Master B/L',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel_gr_MasterblList',gridID:'gr_MasterblList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_Master',style:'',id:'gr_MasterblList',visibleRowNum:'4',class:'wq_gvw',columnMove:'true',dataDragSelectAutoScroll:'true',focusMode:'cell',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'MRN No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'MSN No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'Master B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column13',value:'Console No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'Weight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'Measure',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'PKG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'EDI Liner',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'Register ID',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mrnno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'msnno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mblno',displayMode:'label',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'mhno',displayMode:'label',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wgt',displayMode:'label',dataType:'number',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'msr',displayMode:'label',dataType:'number',displayFormat:'#,##0.000',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pkg',displayMode:'label',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ediLiner',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'updid',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'Weight',class:''}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'txt_tMwgt',placeholder:'',class:'',ref:'data:ds_SeaCargoManifest.tWgt',disabled:'true'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_tMmsr',placeholder:'',style:'width:80px;',ref:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{id:'',style:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PKG',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_tMpkg',placeholder:'',style:'width:80px;',ref:'',disabled:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'House B/L',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridDownFn:'scwin.f_RunExcel_gr_HouseblList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_House',style:'',id:'gr_HouseblList',visibleRowNum:'4',class:'wq_gvw',columnMove:'true',dataDragSelectAutoScroll:'true','ev:oncellclick':'scwin.gr_HouseblList_oncellclick',focusMode:'cell',readOnly:'true',autoFit:'allColumn'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column1',value:'Master B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column17',value:'House B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'Weight',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column13',value:'Measure',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column11',value:'PKG',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'MRN No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'column3',value:'Console No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'HSN No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'ITEM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'mblno',displayMode:'label',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hblno',displayMode:'label',mandatory:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wgt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'msr',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pkg',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mrnno',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',id:'mhno',displayMode:'label',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hsnno',displayMode:'label',mandatory:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'hhmitem2',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows3',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Weight',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_tHwgt',placeholder:'',style:'width:80px;',ref:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Measure',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_tHmsr',placeholder:'',style:'width:80px;',ref:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PKG',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_tHpkg',placeholder:'',style:'width:80px;',ref:'',disabled:'true'}}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Item',style:''}},{T:1,N:'xf:input',A:{class:'',id:'txt_hhmitem2',placeholder:'',style:'width:200px;',ref:'data:ds_House.hhmitem2',readOnly:'true'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_ediSend',type:'button',class:'btn link','ev:onclick':'scwin.f_SendEDI'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ktNet',style:'',type:'button','ev:onclick':'scwin.f_ktNetOpen'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KT Net 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_uLogisHup',style:'',type:'button','ev:onclick':'scwin.f_uLogisHubOpen'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'uLogisHup 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_PLISM',style:'',type:'button','ev:onclick':'scwin.f_plismOpen'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'PLISM 3.0 접속'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Cancel',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Cancel',objType:'ctrlBtn',userAuth:''},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Create',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Update',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Update',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'ctrlBtn',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Print',objType:'ctrlBtn',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'b_Delete',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete',objType:'ctrlBtn',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content4'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'B/L Error',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{btnUser:'N',gridDownFn:'scwin.f_RunExcel_gr_BLcheck',gridID:'gr_BLcheck',gridUpYn:'N',grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',columnMove:'true',dataDragSelectAutoScroll:'true',dataList:'data:ds_BLcheck',id:'gr_BLcheck',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption6',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'Master B/L',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'House B/L',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'DESC Name',width:'450'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'User ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'flag',width:'50'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'descnm',inputType:'text',width:'450'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userid',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'flag',inputType:'text',width:'50'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})