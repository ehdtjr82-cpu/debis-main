/*amd /ui/il/seedi/seed/ed_103_01_01b.xml 80495 d0a5b140be175197462496fb9ec113c52fc4f337e32b7898d22c40f3fe13a0c6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'kcomcd',name:'kcomcd',defaultValue:'DBEX'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mrnno',name:'mrnno',defaultValue:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'hblno',name:'hblno'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mdno',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Search2'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'kcomcd',name:'kcomcd',defaultValue:'DBEX'}},{T:1,N:'w2:key',A:{dataType:'text',id:'mrnno',name:'mrnno',defaultValue:''}},{T:1,N:'w2:key',A:{dataType:'text',id:'hblno',name:'hblno'}},{T:1,N:'w2:key',A:{id:'iogb',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mdno',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_SeaImportModify',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'kcomcd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdno',name:'mdno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrn',name:'mrn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mblno',name:'mblno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblno',name:'hblno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'mhno'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gbun',name:'gbun'}},{T:1,N:'w2:column',A:{dataType:'text',id:'text',name:'text'}},{T:1,N:'w2:column',A:{dataType:'text',id:'etd',name:'etd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'tsdt',name:'tsdt'}},{T:1,N:'w2:column',A:{dataType:'text',id:'custom',name:'custom'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dept',name:'dept'}},{T:1,N:'w2:column',A:{dataType:'text',id:'status',name:'status'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cscd1',name:'cscd1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cscd2',name:'cscd2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'msn',name:'msn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hsn',name:'hsn'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modCd',name:'modCd'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inpid',name:'inpid'}},{T:1,N:'w2:column',A:{dataType:'text',id:'inpnm',name:'inpnm'}},{T:1,N:'w2:column',A:{id:'part',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mnfgb',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaImportUnitModify',saveRemovedData:'true','ev:ondataload':'scwin.ds_SeaImportUnitModify_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdno',name:'MD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblno',name:'HOUSE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'CONSOL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modcd',name:'정정항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMody1',name:'정정전내역1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMody2',name:'정정전내역2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMody3',name:'정정전내역3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMody4',name:'정정전내역4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mody1',name:'정정후내역1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mody2',name:'정정후내역2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mody3',name:'정정후내역3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mody4',name:'정정후내역4'}},{T:1,N:'w2:column',A:{id:'mnfgb',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaImportContainerModify',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_SeaImportContainerModify_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdno',name:'MD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblno',name:'HOUSE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'CONSOL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntno',name:'Container'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gbun',name:'작업구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modcd',name:'정정항목'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMod',name:'정정'}},{T:1,N:'w2:column',A:{dataType:'text',id:'afMod',name:'정정'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaImportContainerModify_excel',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdno',name:'MD'}},{T:1,N:'w2:column',A:{dataType:'text',id:'hblno',name:'HOUSE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'CONSOL'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cntno',name:'Container'}},{T:1,N:'w2:column',A:{dataType:'text',id:'gbun',name:'작업구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'modcd',name:'정정항목'}},{T:1,N:'w2:column',A:{dataType:'text',id:'bfMod',name:'정정'}},{T:1,N:'w2:column',A:{dataType:'text',id:'afMod',name:'정정'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_SendEDI'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrnno',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mdno',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ediliner',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaImportContainerModifyComboList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntno',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SeaImportStatementModifyCheckNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'flag',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblno',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'custom',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customnm',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'depart',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'departnm',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_tmp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntno',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gbun',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modcd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfMod',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'afMod',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comCodeIL004',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.seedi.seed.RetrieveSeaImportModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaImportModify","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportModify","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaImportModifyList',action:'/il.seedi.seed.RetrieveSeaImportModifyListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaImportUnitModify","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportUnitModify","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SeaImportModifyList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaImportUnitModifyList',action:'/il.seedi.seed.RetrieveSeaImportUnitModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaImportUnitModify","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportUnitModify","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SeaImportUnitModifyList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaImportContainerModifyList',action:'/il.seedi.seed.RetrieveSeaImportContainerModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaImportContainerModify","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportContainerModify","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SeaImportContainerModifyList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_SeaImportModifyComboList',action:'/il.seedi.seed.RetrieveSeaImportModifyListComboListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search","key":"IN_DS1"},{"id":"ds_SeaImportContainerModifyComboList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportContainerModifyComboList","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SeaImportModifyComboList_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_CheckNo',action:'/il.seedi.seed.RetrieveSeaImportModifyCheckNoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search2","key":"IN_DS1"},{"id":"ds_SeaImportStatementModifyCheckNo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SeaImportStatementModifyCheckNo","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_CheckNo_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.seedi.seed.SaveSeaImportModifyCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_SeaImportModify","key":"IN_DS1"},{"id":"ds_SeaImportUnitModify","key":"IN_DS2"},{"id":"ds_SeaImportContainerModify","key":"IN_DS3"}]',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SendEDI',action:'/il.seedi.seed.SeaSendEDICMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_SendEDI","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_SendEDI_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.actionFlag = ""; // action 구분  변수 "Create : 신규 , Update : 수정 ,  Delete :  삭제, Save : 저장"
scwin.retrieveSubGrid = false; // action 구분  변수 "true : 조회 , false : 안조회   --수출항목
scwin.retrieveSubGrid2 = false; // action 구분  변수 "true : 조회 , false : 안조회  --컨테이너 항목
scwin.hblChk = "";
scwin.flagSatus = "";
scwin.f_CheckNoFlag = true;
scwin.flag = false;
scwin.ds;
scwin.onpageload = function () {
  const codeOptions = [
  // { grpCd: "IL008", compID: "lc_modcd" } , 
  {
    grpCd: "IL008",
    compID: "gr_SeaImportModify:text"
  }, {
    grpCd: "IL004",
    compID: "lc_modcd2"
  } //  ,opt : {"range" : "1"}
  // , { grpCd: "IL004", compID: "gr_SeaImportContainerModify:modcd" }
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
  hid_kcomcd.setValue("DBEX");
  let memJson = $c.data.getMemInfo($p);
  // console.log("### onpageload :: " + JSON.stringify(memJson));
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  setTimeout(function () {
    scwin.f_Set("INIT");
  }, 100);
  cnd_ed_mrnno.focus();
  $c.gus.cfDisableObjects($p, [txt_inpid, txt_inpnm]);
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.setInit = function () {
  var json = dlt_commonCodeIL004.getAllJSON();
  json.sort((a, b) => {
    return a.cd.localeCompare(b.cd);
  });
  dlt_commonCodeIL004.setJSON(json);
  ds_comCodeIL004.setJSON(dlt_commonCodeIL004.getAllJSON());
};
scwin.f_initSetTab = function () {
  tab1.enableTab(0);
  tab1.disableTab(1);
};
scwin.f_Set = function (gubun) {
  scwin.flagSatus = gubun;
  switch (gubun) {
    case "INIT":
      //초기화
      // cfDisableKeyData();  // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      grp_1.setDisabled(true);
      grp_2.setDisabled(true);
      lc_modcd.setSelectedIndex(-1);
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_cancel, btn_save, btn_delete]);
      $c.gus.cfEnableBtnOnly($p, [btn_create]);
      $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      //조회모드	
      // $c.gus.cfDisableKeyData();  // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      grp_1.setDisabled(true);
      grp_2.setDisabled(true);
      scwin.f_DisablePopUpObj();
      $c.gus.cfEnableBtnOnly($p, [btn_create, btn_delete]);
      $c.gus.cfDisableBtnOnly($p, [btn_cancel, btn_save]);
      if (ed_mdno.getValue() == "") {
        $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      } else {
        $c.gus.cfEnableBtnOnly($p, [btn_edi]);
      }
      if (rd_status.getValue() == 2) {
        $c.gus.cfEnableBtnOnly($p, [btn_update]);
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_update]);
      }
      if (rd_status.getValue() != 1) {
        $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      } else {
        $c.gus.cfDisableBtnOnly($p, [btn_delete]);
      }
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfDisableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);
      // 그리드 수정 못하게 한다.
      gr_SeaImportUnitModify.setReadOnly("grid", true);
      gr_SeaImportContainerModify.setReadOnly("grid", true);
      break;
    case "SAVE":
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_delete, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_create]);
      break;
    case "DELETE":
      // $c.gus.cfDisableKeyData();  // Key와 Data를 모두 disable(non-editable) 상태로 변경한다.
      grp_1.setDisabled(true);
      grp_2.setDisabled(true);
      $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      $c.gus.cfDisableBtnOnly($p, [btn_save, btn_create, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_delete]);
      break;
    case "CREATE":
      //정정구분 수정
      // $c.gus.cfEnableKeyData();
      grp_1.setDisabled(false);
      ed_tsdt.setDisabled(true);
      ed_etd.setDisabled(true);
      ed_mdno.setDisabled(true);
      txt_cscd1.setDisabled(true);
      txt_cscd2.setDisabled(true);
      txt_inpid.setDisabled(true);
      txt_inpnm.setDisabled(true);
      grp_2.setDisabled(false);
      lc_modcd.setSelectedIndex(-1);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_create, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_cancel, btn_save]);
      $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);

      // 그리드 수정 가능
      gr_SeaImportUnitModify.setReadOnly("grid", true);
      gr_SeaImportContainerModify.setReadOnly("grid", true);
      break;
    case "CREATEMORE":
      //정정구분 수정
      $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      // 그리드 수정 가능
      gr_SeaImportUnitModify.setReadOnly("grid", true);
      gr_SeaImportContainerModify.setReadOnly("grid", false);
      break;
    case "UPDATE":
      //정정구분 수정
      // cfEnableKeyData();
      grp_1.setDisabled(false);
      ed_tsdt.setDisabled(true);
      ed_etd.setDisabled(true);
      ed_mdno.setDisabled(true);
      txt_cscd1.setDisabled(true);
      txt_cscd2.setDisabled(true);
      txt_inpid.setDisabled(true);
      txt_inpnm.setDisabled(true);
      grp_2.setDisabled(false);
      scwin.f_EnablePopUpObj();
      $c.gus.cfDisableBtnOnly($p, [btn_update, btn_create, btn_cancel]);
      $c.gus.cfEnableBtnOnly($p, [btn_cancel, btn_save]);
      $c.gus.cfDisableBtnOnly($p, [btn_edi]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl, btn_undoMarkIntnl]);
      $c.gus.cfEnableBtnOnly($p, [btn_addRowIntnl3, btn_undoMarkIntnl3]);
      $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);

      // 그리드 수정 가능
      gr_SeaImportUnitModify.setReadOnly("grid", false);
      gr_SeaImportContainerModify.setReadOnly("grid", false);
      break;
  }
};
scwin.f_DisablePopUpObj = function () {
  $c.gus.cfDisableObjects($p, [img_PopUp1, img_PopUp2, txt_cscd1, txt_cscd2]);
  $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);
};
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [img_PopUp1, img_PopUp2]);
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case 1:
      udc_cust.setSelectId("retrieveCustomInfo");
      udc_cust.ilCommonPopUp(scwin.udc_cust_callbackFunc, ed_custom.getValue() // 화면에서의 ??? Code Element의	Value                                  
      , '' // 화면에서의 ??? Name Element의	Value                                  
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "관할세관 Code, 관할세관 Name" // Title순서	
      , '130,300' // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "관할세관 Search,관할세관 Code, 관할세관 Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
      );
      break;
    case 2:
      udc_dept.setSelectId("retrieveCustomSectionInfo");
      udc_dept.ilCommonPopUp(scwin.udc_dept_callbackFunc, ed_dept.getValue() // 화면에서의 ??? Code Element의	Value                                  
      , '' // 화면에서의 ??? Name Element의	Value                                  
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "세관과 Code, 세관과 Name" // Title순서	
      , '130,300' // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , '500' // POP-UP뛰을때 원도우의	사용자 정의	폭
      , '500' // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "세관과 Search,세관과 Code, 세관과 Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
      );
      break;
  }
};
scwin.udc_cust_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custom, txt_cscd1);
};
scwin.udc_dept_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_cscd2);
};
scwin.f_SetDefaultKeyValue = function (ds) {
  scwin.ds = ds;
  if (hid_mhno.getValue() == "") {
    $c.win.alert($p, '사용할 수 있는 House B/L 번호를 입력 하세요.');
    ed_hblno.focus();
    return;
  }
  if (ds == ds_SeaImportUnitModify) {
    $c.gus.cfEnableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);
  }
  scwin.flag = true;
  scwin.f_RetrieveComboList();
};
scwin.f_GridSetValue = function (ds) {
  var ds1 = ds_SeaImportModify;
  ds.setCellData(ds.getRowPosition(), "kcomcd", hid_kcomcd.getValue());
  ds.setCellData(ds.getRowPosition(), "mdno", ds1.getCellData(ds1.etRowPosition(), "mdno"));
  ds.setCellData(ds.getRowPosition(), "hblno", ds1.getCellData(ds1.getRowPosition(), "hblno"));
  ds.setCellData(ds.getRowPosition(), "mhno", hid_mhno.getValue());
};
scwin.f_Retrieve = async function () {
  if (cnd_ed_hblno.getValue() == "") {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House B/L No"]); //필수 입력 사항
    cnd_ed_hblno.focus();
    return false;
  }
  ds_SeaImportModify.setJSON([]);
  ds_SeaImportUnitModify.setJSON([]);
  ds_SeaImportContainerModify.setJSON([]);
  ed_cntrcnt.setValue(0);
  ed_totCnt.setValue(0);
  ed_totRow2.setValue(0);
  lc_modcd.setSelectedIndex(-1);
  scwin.actionFlag == "RETRIEVE";
  ds_Search.set("hblno", ds_Search.get("hblno"));
  ds_Search.set("kcomcd", hid_kcomcd.getValue());
  ds_Search.set("iogb", "I");
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_RetrieveSeaImportUnitModifyList = function () {
  var ds = ds_Search;
  var ds2 = ds_SeaImportModify;
  ds.set("hblno", ds2.getCellData(ds2.getRowPosition(), "hblno"));
  ds.set("kcomcd", ds2.getCellData(ds2.getRowPosition(), "kcomcd"));
  ds.set("mdno", ds2.getCellData(ds2.getRowPosition(), "mdno"));
  $c.sbm.execute($p, sbm_SeaImportUnitModifyList);
};
scwin.f_RetrieveSeaImportContainerModifyList = function () {
  var ds = ds_Search;
  var ds2 = ds_SeaImportModify;
  ds.set("kcomcd", ds2.getCellData(ds2.getRowPosition(), "kcomcd"));
  ds.set("hblno", ds2.getCellData(ds2.getRowPosition(), "hblno"));
  ds.set("mdno", ds2.getCellData(ds2.getRowPosition(), "mdno"));
  $c.sbm.execute($p, sbm_SeaImportContainerModifyList);
};
scwin.f_RetrieveComboList = function () {
  var ds = ds_Search;
  var ds2 = ds_SeaImportModify;
  ds.set("kcomcd", hid_kcomcd.getValue());
  ds.set("hblno", ds2.getCellData(ds2.getRowPosition(), "hblno"));
  ds.set("mrnno", ds2.getCellData(ds2.getRowPosition(), "mrn"));
  $c.sbm.execute($p, sbm_SeaImportModifyComboList);
};
scwin.f_RetrieveContainerList = function () {
  //if (retrieveSubGrid2){

  var ds = ds_Search;
  var ds2 = ds_SeaImportModify;
  ds.set("mhno", ds2.getCellData(ds2.getRowPosition(), "mhno"));
  ds.set("hblno", ds2.getCellData(ds2.getRowPosition(), "hblno"));
  ds.set("mdno", ds2.getCellData(ds2.getRowPosition(), "mdno"));
  ds.set("kcomcd", hid_kcomcd.getValue());
};
scwin.f_CheckNo = function () {
  //적하목록 존재 여부 검증	(House B/L)
  if (ed_hblno.getValue() == "") {
    $c.win.alert($p, "House B/L No를 입력하십시오");
    return false;
  }
  ds_Search2.set("kcomcd", hid_kcomcd.getValue());
  ds_Search2.set("mrnno", "");
  ds_Search2.set("hblno", ed_hblno.getValue());
  $c.sbm.execute($p, sbm_CheckNo);
};
scwin.f_Cancel = function () {
  cnd_ed_mrnno.focus();
  tab1.enableTab(1);

  // ds_SeaImportModify.removeAll();
  // ds_SeaImportModify.undoAll();
  // scwin.f_ClearData();
  ds_SeaImportModify.setJSON([]);
  ds_SeaImportUnitModify.setJSON([]);
  ds_SeaImportContainerModify.setJSON([]);
  ed_totRow2.setValue(ds_SeaImportUnitModify.getTotalRow());
  ed_totRow.setValue(ds_SeaImportModify.getTotalRow());
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
  scwin.f_Set("INIT");
};
scwin.f_Create = function () {
  var cnt = ds_SeaImportModify.getTotalRow();
  var etd;
  var mrnNo;
  var msnNo;
  var hsnNo;
  var hblNo;
  var custom;
  var customNm;
  var dept;
  var deptNm;
  var mhno;
  if (cnt > 0) {
    etd = ed_etd.getValue();
    mrnNo = ed_mrn.getValue();
    msnNo = ed_msn.getValue();
    hsnNo = ed_hsn.getValue();
    hblNo = ed_hblno.getValue();
    custom = ed_custom.getValue();
    customNm = txt_cscd1.getValue();
    dept = ed_dept.getValue();
    deptNm = txt_cscd2.getValue();
    mhno = hid_mhno.getValue();
  }
  scwin.actionFlag = "CREATE";
  tab1.disableTab(1);
  if (tab1.getSelectedTabIndex() == 1) scwin.f_selectTabMenu(0);
  ds_SeaImportModify.removeAll();
  ds_SeaImportUnitModify.removeAll();
  ds_SeaImportContainerModify.removeAll();
  idx = ds_SeaImportModify.insertRow();
  ed_totRow2.setValue(ds_SeaImportUnitModify.getTotalRow());
  ed_totRow.setValue(ds_SeaImportModify.getTotalRow());
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
  if (cnt > 0) {
    ds_SeaImportModify.setCellData(idx, "etd", etd);
    ds_SeaImportModify.setCellData(idx, "mrn", mrnNo);
    ds_SeaImportModify.setCellData(idx, "msn", msnNo);
    ds_SeaImportModify.setCellData(idx, "hsn", hsnNo);
    ds_SeaImportModify.setCellData(idx, "hblno", hblNo);
    ds_SeaImportModify.setCellData(idx, "custom", custom);
    ds_SeaImportModify.setCellData(idx, "cscd1", customNm);
    ds_SeaImportModify.setCellData(idx, "dept", dept);
    ds_SeaImportModify.setCellData(idx, "cscd2", deptNm);
    ds_SeaImportModify.setCellData(idx, "mhno", mhno);
  }
  scwin.f_Set("CREATE");
  ds_Search.setEmptyValue();
  gr_SeaImportModify.setFocusedCell(0, 0);
  rd_status.setSelectedIndex(1);
};
scwin.f_Update = function () {
  scwin.actionFlag = "UPDATE";
  scwin.f_selectTabMenu(0);
  scwin.f_Set("UPDATE");
};
scwin.f_Save = function () {
  scwin.flag = false;
  if (scwin.f_CheckNoFlag) {
    //&& f_CheckDigitl(ed_mrn.Text) && f_ReqFieldChk()){
    var bfMody = "";
    var mody = "";
    var mod1 = "";
    if (lc_modcd.getValue() != "") {
      mod1 = lc_modcd.getValue();
      if (mod1.length > 27) {
        $c.win.alert($p, '정정 사유는 25자 내로 적어주세요.');
        return;
      }
    }
    if (lc_modcd2.getValue() != "") {
      bfmody = txt_bfMody1.getValue() + txt_bfMody2.getValue() + txt_bfMody3.getValue() + txt_bfMody4.getValue();
      mody = txt_mody1.getValue() + txt_mody2.getValue() + txt_mody3.getValue() + txt_mody4.getValue();
      if (bfmody == "" && mody == "") {
        $c.win.alert($p, '정정 전 내용과 정정 후 내용 내용을 넣어 주십시오.');
        txt_bfMody1.focus();
        return;
      }
      if (bfmody == "") {
        $c.win.alert($p, '정정 전 내용을 넣어 주십시오.');
        txt_bfMody1.focus();
        return;
      }
      if (mody == "") {
        $c.win.alert($p, '정정 후 내용을 넣어 주십시오.');
        txt_mody1.focus();
        return;
      }
    }
    //FUCTION PARAMER SETTING		
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "kcomcd", hid_kcomcd.getValue());
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "mhno", hid_mhno.getValue());
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "mblno", hid_mblno.getValue());
    if (lc_gbun.getSelectedIndex() == 1) {
      ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "part", "1");
    } else {
      ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "part", "0");
    }
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "mnfgb", "I");
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "text", lc_modcd.getItemText(lc_modcd.getSelectedIndex()).replace(":", " ").replaceAll("&amp;", "").replaceAll("nbsp;", ""));
    ds_SeaImportModify.setCellData(ds_SeaImportModify.getRowPosition(), "custom", ed_custom.getValue());

    //return;
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_SendEDI = function () {
  if (scwin.flagSatus == "RETRIEVE") {
    if (scwin.f_CheckNoFlag) {
      //&& f_CheckDigitl(ed_mrn.Text) && f_ReqFieldChk()){

      ds_SendEDI.set("kcomcd", hid_kcomcd.getValue());
      ds_SendEDI.set("mdno", ds_SeaImportModify.getCellData(ds_SeaImportModify.getRowPosition(), "mdno"));
      ds_SendEDI.set("gubun", "SeaCargoManifestUnit");
      $c.sbm.execute($p, sbm_SendEDI);
    }
  } else {
    $c.win.alert($p, "데이터를 저장 후 전송 해주십시오.");
  }
};
scwin.f_ReqFieldChk = function () {
  if (ed_mrn.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["MRN No"]); //필수 입력 사항
    ed_mrn.focus();
    return false;
  }
  if (ed_hblno.getValue() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["House No"]);
    ed_hblno.ocus();
    return false;
  }
  if ($c.gus.cfValidate($p, [tb_headerMandantory]) == false) {
    return false;
  }
  // if ($c.gus.cfValidate([tb_headerMandantory2]) == false) {
  //     return false;
  // }
  if ($c.gus.cfValidate($p, [gr_SeaImportUnitModify]) == false) {
    return false;
  }
  if ($c.gus.cfValidate($p, [gr_SeaImportContainerModify]) == false) {
    return false;
  }
  return true;
};
scwin.f_Delete = function () {
  // EDI전송 된경우에는 삭제 처리 안되도록 로직

  scwin.actionFlag = "Delete";
  if (lc_gbun.getSelectedIndex() == 0) {
    //정정구분 수정일 경우 삭제 속성을 준다.
    ds_SeaImportModify.modifyRowStatus(ds_SeaImportModify.getRowPosition(), "D");

    //ds_SeaImportUnitModify.UserStatus(ds_SeaImportUnitModify.RowPosition) = 2;
    // 2건이상일 경우 1건만삭제하고 있음 2008.09.09 수정 
    if (ds_SeaImportUnitModify.getTotalRow() > 0) {
      for (var i = 0; i < ds_SeaImportUnitModify.getTotalRow(); i++) {
        ds_SeaImportUnitModify.modifyRowStatus(i, "D");
      }
    }

    //ds_SeaImportContainerModify.UserStatus(ds_SeaImportContainerModify.RowPosition) = 2;
    if (ds_SeaImportContainerModify.getTotalRow() > 0) {
      for (var i = 0; i < ds_SeaImportContainerModify.getTotalRow(); i++) {
        ds_SeaImportContainerModify.modifyRowStatus(i, "D");
      }
    }
  } else {
    ds_SeaImportModify.modifyRowStatus(ds_SeaImportModify.getRowPosition(), "D");
  }
  $c.sbm.execute($p, sbm_save);
};
scwin.f_downExcelSheet = async function () {
  var vObjGrd;
  var sheetTitle;
  var cntRow = txt_countRow.getValue();
  if (cntRow != "0") {
    cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      grdId = "gr_SeaImportContainerModify";
      filename = "컨테이너수정_" + cnd_ed_hblno.getValue();
      grdObj = $p.getComponentById(grdId);
      const infoArr = [];
      const options = {
        fileName: filename + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: filename
      };
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_addRow = function (ds) {
  ds.insertRow();
};
scwin.f_DeleteRow = function (ds) {
  ds.remvoeRow(ds.getRowPosition());
};
scwin.f_undoRow = function (ds) {
  ds.undoRow(ds.getRowPosition());
  if (ds == ds_SeaImportUnitModify) {
    $c.gus.cfDisableObjects($p, [lc_modcd2, txt_mody1, txt_mody2, txt_mody3, txt_mody4, txt_bfMody1, txt_bfMody2, txt_bfMody3, txt_bfMody4]);
  }
};
scwin.f_ClearData = function () {
  ds_SeaImportUnitModify.removeAll();
  ds_SeaImportContainerModify.removeAll();
};
scwin.f_selectTabMenu = function (idx) {
  switch (idx) {
    case 0:
      // cfViewTab(idx);
      tab1.setSelectedTabIndex(0);
      break;
    case 1:
      //정정구분에 따른 텝 처리
      if (lc_gbun.getSelectedIndex() == 0 || lc_gbun.getSelectedIndex() == 1) {} else {
        tab1.setSelectedTabIndex(0);
        $c.win.alert($p, '정정구분이 수정 이외 에는 Tab을 선택 할 수 없습니다. ');
      }
      break;
  }
};
scwin.f_ChkKeyCode = function (ds, row, colid) {
  try {
    var str = ds.getCellData(row, colid); //타이핑 한 문자열
    var chkStr = ""; // 배열화 될 문자열
    var comStr = ""; // 필터링 될 문자열
    var badStr = ""; // 필터링 할 문자열
    for (var i = 0; i < str.length; i++) {
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
scwin.f_CheckDigitl = function (mrnno) {
  var result = mrnno;
  var ChkCode;
  ChkCode = mrnno.charAt(10);
  try {
    if (mrnno.length != 11) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_005, ["MRN No", "11"]); // @은(는) @자리수만큼 입력하십시오.
      hid_mrnseq.setValue("");
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
          hid_mrnseq.setValue(result);
        } else {
          hid_mrnseq.setValue("");
        }
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, ["MRN No"]); // 유효한 @가 아닙니다.
        return false;
      }
      hid_mrnseq.setValue(mrnno.cut(0, 10));
      return true;
    }
  } catch (e) {
    //e.discription();	
  }
};
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var cdObjVal = cdObj.getValue();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
  }
};
scwin.f_addRowIntnl = function () {
  scwin.f_SetDefaultKeyValue(ds_SeaImportUnitModify);
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
};
scwin.f_undoRowIntnl = function () {
  for (var i = 0; i < ds_SeaImportUnitModify.getTotalRow(); i++) {
    if (ds_SeaImportUnitModify.getRowStatus(i) == "C") ds_SeaImportUnitModify.removeRow(i);else scwin.f_undoRow(ds_SeaImportUnitModify);
  }
};
scwin.f_addRowIntnl3 = function () {
  scwin.f_SetDefaultKeyValue(ds_SeaImportContainerModify);
};
scwin.f_undoRowIntnl3 = function () {
  i = ds_SeaImportContainerModify.getRowPosition();
  if (ds_SeaImportContainerModify.getRowStatus(i) == "C") {
    ds_SeaImportContainerModify.removeRow(i);
  } else {
    ds_SeaImportContainerModify.undoRow(i);
  }
  scwin.f_undoRow(ds_SeaImportContainerModify);
};
scwin.setUpperCase = function (d, fd, r, c) {
  return d.toUpperCase();
};
scwin.setGridData = function (d, fd, r, c) {
  return d.substr(0, 1).toUpperCase();
};
scwin.setZero = function (d) {
  if (d == 0) return "";
  return d.padStart(3, "0");
};

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  cnd_ed_mrnno.setValue("");
  cnd_ed_hblno.setValue("");
};
scwin.btn_edi_onclick = function (e) {
  scwin.f_SendEDI();
};
scwin.btn_cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.btn_create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_update_onclick = function (e) {
  scwin.f_Update();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_SeaImportModify.getTotalRow() == 0) {
    return;
  }
  ds_SeaImportModify.modifyAllStatus("R");
  ed_totRow2.setValue(ds_SeaImportUnitModify.getTotalRow());
  ed_totRow.setValue(ds_SeaImportModify.getTotalRow());
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
  if (ds_SeaImportModify.getTotalRow() > 0) {
    scwin.f_Set("DELETE");
    //결과가 있을경우 정정구분을 판단하여 수정일 경우 단일항목을 조회  한다.
    if (lc_gbun.getSelectedIndex() == 0 || lc_gbun.getSelectedIndex() == 1) {
      scwin.retrieveSubGrid = true;
      scwin.retrieveSubGrid2 = true;
      tab1.enableTab(1);
      scwin.f_Set("RETRIEVE");
    }
  } else {
    scwin.f_Set("RETRIEVE");
    scwin.f_ClearData();
  }
  scwin.f_Set("RETRIEVE");
  gr_SeaImportModify.setFocusedCell(0, 0);
  scwin.gr_SeaImportModify_oncellclick();
  scwin.f_CheckNo();
};
scwin.sbm_CheckNo_submitdone = function (e) {
  var ds = ds_SeaImportStatementModifyCheckNo;
  ds_Search2.setEmptyValue();
  if (ds.getCellData(0, "hblno") == "") {
    $c.win.alert($p, '존재하지 않는 House b/l No 입니다.');
    // ed_hblno.focus();
    scwin.f_CheckNoFlag = false;
    ed_hblno.setValue("");
  } else {
    //mhno setting
    hid_mhno.setValue(ds.getCellData(0, "mhno"));
    hid_mblno.setValue(ds.getCellData(0, "mblno"));
    ed_etd.setValue(ds.getCellData(0, "etd"));
    ed_mrn.setValue(ds.getCellData(0, "mrn"));
    ed_msn.setValue(ds.getCellData(0, "msn"));
    ed_hsn.setValue(ds.getCellData(0, "hsn"));
    //ed_custom.setValue( 	 ds.set("custom"));
    //xt_cscd1.setValue( 	 ds.set("customnm"));
    ed_dept.setValue(ds.getCellData(0, "depart"));
    txt_cscd2.setValue(ds.getCellData(0, "departnm"));
    scwin.hblChk = "T";
    scwin.f_CheckNoFlag = true;
  }
};
scwin.sbm_SendEDI_submitdone = async function (e) {
  await $c.win.alert($p, '성공적으로 전송 했습니다.');
  ds_SendEDI.setEmptyValue();
  scwin.f_Retrieve();
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) return;
  if (scwin.actionFlag == "Save") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 					
  }
  if (scwin.actionFlag == "Delete") {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다 		
  }
  ds_Search.set("kcomcd", hid_kcomcd.getValue());
  ds_Search.set("hblno", ed_hblno.getValue());
  ds_Search.set("mrnno", ed_mrn.getValue());
  scwin.f_Retrieve();
};
scwin.tab1_onbeforeselect = function (selectedIndex, index) {
  if (lc_gbun.getSelectedIndex() != 0 && lc_gbun.getSelectedIndex() != 1) {
    $c.win.alert($p, '정정구분이 수정 이외 에는 Tab을 선택 할 수 없습니다. ');
    return false;
  }
};
scwin.ds_SeaImportModify_ondataload = function () {
  gr_SeaImportModify.setFocusedCell(0, 0);
};
scwin.gr_SeaImportModify_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (ds_SeaImportModify.getRowStatus(rowIndex) == "C") return;
  scwin.f_ClearData();
  if (lc_gbun.getSelectedIndex() == 1 || lc_gbun.getSelectedIndex() == 2) {
    scwin.f_RetrieveSeaImportUnitModifyList();
  }
  if (lc_gbun.getSelectedIndex() == 0 || lc_gbun.getSelectedIndex() == 1) {
    scwin.f_RetrieveComboList();
    // scwin.f_RetrieveContainerList();
    // scwin.f_RetrieveSeaImportUnitModifyList();
    // scwin.f_RetrieveSeaImportContainerModifyList();
    // $c.gus.cfEnableObjects([tr_tab_center1]);
    scwin.f_Set("RETRIEVE");
  } else {
    tab1.disableTab(1);
  }
  if (ed_custom.getValue() != "") {
    scwin.f_PopUp(1, 'T', 'F', 'F');
    scwin.f_PopUp(2, 'T', 'F', 'F');
  }
  lc_modcd.setValue(ds_SeaImportModify.getCellData(ds_SeaImportModify.getRowPosition(), "text").substr(0, 2));
};
scwin.sbm_SeaImportModifyComboList_submitdone = function (e) {
  ds = scwin.ds;
  ed_cntrcnt.setValue(ds_SeaImportContainerModifyComboList.getTotalRow());
  if (scwin.flag) {
    if (hid_mhno.getValue().length > 0) {
      idx = ds.insertRow();
      ds.setCellData(idx, "kcomcd", hid_kcomcd.getValue());
      ds.setCellData(idx, "updid", scwin.userId);
      ds.setCellData(idx, "hblno", ed_hblno.getValue());
      ds.setCellData(idx, "mhno", hid_mhno.getValue());
      if (ed_mdno.getValue() != "") {
        ds.setCellData(idx, "mdno", ed_mdno.getValue());
      }
      gr_SeaImportContainerModify.setFocusedCell(idx, 4);
    }
    if (ds == ds_SeaImportContainerModify) {
      gr_SeaImportContainerModify.setReadOnly("grid", false);
    }
    return;
  }
  scwin.f_RetrieveContainerList();
  scwin.f_RetrieveSeaImportUnitModifyList();
};
scwin.sbm_SeaImportUnitModifyList_submitdone = function (e) {
  gr_SeaImportUnitModify.setFocusedCell(0, 0);
  scwin.f_RetrieveSeaImportContainerModifyList();
};
scwin.sbm_SeaImportContainerModifyList_submitdone = function (e) {
  if (lc_gbun.getSelectedIndex() == 0 || lc_gbun.getSelectedIndex() == 1) {
    scwin.f_Set("RETRIEVE");
    tab1.enableTab(1);
  }
};
scwin.udc_cust_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd(txt_cscd1, ed_custom, 1, "T", "F", "F");
};
scwin.udc_dept_onviewchangeNameEvent = function (info) {
  scwin.f_BeforePopUpEd(txt_cscd2, ed_dept, 2, "T", "F", "F");
};
scwin.lc_gbun_onviewchange = async function (info) {
  if (scwin.actionFlag == "CREATE") {
    // 정정구분 House 수정	
    if (ed_mrn.getValue().length < 1) {
      await $c.win.alert($p, 'MRN No를 입력해 주십시오.');
      ed_mrn.focus();
      lc_gbun.setSelectedIndex(-1);
      return;
    }
    if (ed_hblno.getValue().length < 1) {
      $c.win.alert($p, 'House b/l No를 입력해 주십시오.');
      ed_hblno.focus();
      lc_gbun.setSelectedIndex(-1);
      return;
    }
    if (lc_gbun.getSelectedIndex() == 0 || lc_gbun.getSelectedIndex() == 1) {
      var ds = ds_SeaImportModify;
      // 정정구분이 수정이 일경우 텝 Enable
      tab1.enableTab(0);
      tab1.enableTab(1);
      scwin.f_Set("CREATEMORE");
    } else {
      ds_SeaImportContainerModify.removeAll();
    }
  }
};
scwin.udc_cust_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(txt_cscd1, ed_custom, 1, "T", "F", "F");
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  scwin.f_BeforePopUpEd(txt_cscd2, ed_dept, 2, "T", "F", "F");
};
scwin.setCombo = function (d, fd, r, c) {
  return d.substr(0, 2);
};
scwin.ds_SeaImportUnitModify_ondataload = function () {
  ed_totRow2.setValue(ds_SeaImportUnitModify.getTotalRow());
};
scwin.udc_cust_onclickEvent = function (e) {
  scwin.f_PopUp(1, 'T', 'F', 'F');
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_PopUp(2, 'T', 'F', 'F');
};
scwin.gr_SeaImportContainerModify_excel_onfilereadend = function (value) {
  ds_SeaImportContainerModify.setJSON(ds_SeaImportContainerModify_excel.getAllJSON());
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
  for (var i = 0; i < ds_SeaImportContainerModify_excel.getTotalRow(); i++) {
    ds_SeaImportContainerModify.setCellData(i, "modcd", ds_SeaImportContainerModify_excel.getCellData(i, "modcd").trim());
  }
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_hblno_onblur = function (e) {
  if (ed_hblno.getValue().length > 0) {
    scwin.f_CheckNo();
    return;
  }
};
scwin.ds_SeaImportContainerModify_onrowpositionchange = function (info) {
  ed_totCnt.setValue(ds_SeaImportContainerModify.getTotalRow());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_mrnno',placeholder:'',style:'width:150px;',ref:'data:ds_Search.mrnno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_hblno',placeholder:'',style:'width:150px;',ref:'data:ds_Search.hblno',allowChar:'0-9|a-z|A-Z','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:input',A:{id:'txt_countRow',style:'width: 144px;height: 21px;display : none;'}},{T:1,N:'xf:input',A:{id:'hid_kcomcd',style:'width: 144px;height: 21px;display : none;'}},{T:1,N:'xf:input',A:{id:'hid_mhno',style:'width: 144px;height: 21px;display : none;'}},{T:1,N:'xf:input',A:{id:'hid_mblno',style:'width: 144px;height: 21px;display : none;'}},{T:1,N:'xf:input',A:{id:'hid_mrnseq',style:'width: 144px;height: 21px;display : none;'}}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'true',class:'wq_tab',id:'tab1',style:'','ev:onbeforeselect':'scwin.tab1_onbeforeselect'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center0',label:'Main',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tr_tab_center1',label:'Modify',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content3',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SeaImportModify',id:'gr_SeaImportModify',style:'','ev:oncellclick':'scwin.gr_SeaImportModify_oncellclick',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'정정구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'House No',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'정정신청번호',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'정정사유',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'text',inputType:'text',width:'150',textAlign:'left',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_commonCodeIL008'},E:[{T:1,N:'w2:label',A:{ref:'cd'}},{T:1,N:'w2:value',A:{ref:'cdNm'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Status',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_status',ref:'data:ds_SeaImportModify.status',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Saved'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Send Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group4',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_tsdt',placeholder:'',style:'width:180px;',displayFormat:'####/##/##/##:##',ref:'data:ds_SeaImportModify.tsdt'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_etd',placeholder:'',style:'width:180px;',displayFormat:'####/##/##',ref:'data:ds_SeaImportModify.etd'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:85px;',mandatory:'true',ref:'data:ds_SeaImportModify.msn',maxlength:'4',allowChar:'0-9a-zA-Z','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'HSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:85px;',mandatory:'true',ref:'data:ds_SeaImportModify.hsn',maxlength:'4',allowChar:'0-9a-zA-Z','ev:oneditkeyup':'scwin.oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',mandatory:'true',ref:'data:ds_SeaImportModify.mrn',allowChar:'0-9a-zA-Z',maxlength:'11','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hblno',placeholder:'',style:'width:150px;',mandatory:'true',ref:'data:ds_SeaImportModify.hblno',title:'House B/L No',maxlength:'20','ev:onblur':'scwin.ed_hblno_onblur','ev:oneditkeyup':'scwin.oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_gbun',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_SeaImportModify.gbun',mandatory:'true',emptyItem:'true',emptyIndex:'-1','ev:onviewchange':'scwin.lc_gbun_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 수정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House 삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정신청번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mdno',placeholder:'',style:'width:150px;',ref:'data:ds_SeaImportModify.mdno',allowChar:'0-9a-zA-Z',maxlength:'20','ev:oneditenter':'scwin.oneditkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고세관',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_custom',nameId:'txt_cscd1',popupID:'',selectID:'',style:'width:250px;',validTitle:'',id:'udc_cust',btnId:'img_PopUp1',mandatoryCode:'true','ev:onviewchangeNameEvent':'scwin.udc_cust_onviewchangeNameEvent',refDataCollection:'ds_SeaImportModify',name:'cscd1',code:'custom','ev:onblurCodeEvent':'scwin.udc_cust_onblurCodeEvent','ev:onclickEvent':'scwin.udc_cust_onclickEvent',allowCharCode:'0-9',maxlengthCode:'8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고과',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',nameId:'txt_cscd2',popupID:'',selectID:'',style:'width:250px;',validTitle:'',btnId:'img_PopUp2',id:'udc_dept',mandatoryCode:'true','ev:onviewchangeNameEvent':'scwin.udc_dept_onviewchangeNameEvent',refDataCollection:'ds_SeaImportModify',name:'cscd2',code:'dept','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent',allowCharCode:'0-9',maxlengthCode:'8'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정사유',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',emptyIndex:'-1',emptyItem:'true','ev:onviewchange':'scwin.lc_gbun_onviewchange',id:'lc_modcd',mandatory:'true',ref:'',search:'start',style:'',submenuSize:'auto',visibleRowNum:'17'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적하목록작성자의 단순 기재오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적하목록에 등재되지 않은 무적화물(오착화물,선'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Shipper측 사무착오(화물선적되지않음), 다른곳에 화'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'항행/운송중 사고로 화물이 도난,유실,파손된 경우'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Shipper측 사무착오로 B/L(AWB) 정보가 이중으로 기재'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'적하목록상 양륙항이 아닌 다른 항공/공항에 잘못 하'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역해야 할 화물이 선박(항공기)에 계속하여 남아있'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'양륙항이 당해 항구(공항)가 아닌 화물을 잘못 하역한'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'하역시 이상없는 화물이 CY/CF에 장치중 이상 생긴 경'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'혼재화물 적하목록을 기한내 제출하지 않은 물품 추후'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'혼재화물 적하목록을 기한내 제출하지 않은 물품 추후'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'B/L(AWB)번호의 상이(B/L분할 또는 단순 기재오류인 '}]},{T:1,N:'w2:value',E:[{T:4,cdata:'12'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'B/L(AWB)양수도로 인하여 수하인의 주소,성명이 변경'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'13'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'통과(T/S)화물을 수입화물로 잘못 기재한 경우'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'14'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입화물을 통과(T/S)화물로 잘못 기재한 경우'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'15'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타사유로 물품의 과부족등 적하목록에 이상이 있는 '}]},{T:1,N:'w2:value',E:[{T:4,cdata:'16'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'일괄구매물품 B/L분할정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'17'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 담당자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width:250px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_inpid',placeholder:'',style:'width: 85px;',ref:'data:ds_SeaImportModify.inpid'}},{T:1,N:'xf:input',A:{class:'',id:'txt_inpnm',placeholder:'',style:'',ref:'data:ds_SeaImportModify.inpnm'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'단일항목수정',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_modcd2',search:'start',style:'width:300px;',submenuSize:'auto',mandatory:'true',ref:'data:ds_SeaImportUnitModify.modcd',allOption:'',chooseOption:'',emptyItem:'true',emptyIndex:'-1',visibleRowNum:'25'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comCodeIL004'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 전 내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'row-gap-4',id:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_bfMody1',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.bfMody1',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_bfMody2',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.bfMody2',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_bfMody3',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.bfMody3',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_bfMody4',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.bfMody4',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 후 내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'txt_mody1',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.mody1',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mody2',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.mody2',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mody3',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.mody3',maxlength:'60'}},{T:1,N:'xf:input',A:{class:'',id:'txt_mody4',placeholder:'',style:'',ref:'data:ds_SeaImportUnitModify.mody4',maxlength:'60'}}]}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SeaImportUnitModify',id:'gr_SeaImportUnitModify',style:'',visibleRowNum:'3',visibleRowNumFix:'true',focusMode:'row',rowStatusVisible:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column1',inputType:'text',value:'법인코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column17',inputType:'text',value:'MD NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column15',inputType:'text',value:'HOUSE B/L NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column13',inputType:'text',value:'CONSOL NO',width:'100'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'정정항목코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column31',inputType:'text',value:'정정전내역1',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',value:'정정전내역2',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',value:'정정전내역3',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',value:'정정전내역4',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'정정후내역1',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'정정후내역2',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',value:'정정후내역3',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',value:'정정후내역4',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modcd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMody1',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMody2',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMody3',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMody4',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mody1',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mody2',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mody3',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mody4',inputType:'text',width:'100',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totRow2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_addRowIntnl',label:'Addition',class:'btn','ev:onclick':'scwin.f_addRowIntnl'}},{T:1,N:'w2:button',A:{style:'',id:'btn_undoMarkIntnl',label:'Cancel',class:'btn','ev:onclick':'scwin.f_undoRowIntnl'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'true',id:'content4',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'컨테이너수정',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_downExcelSheet',gridID:'gr_SeaImportContainerModify_excel',btnUser:'N',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SeaImportContainerModify',id:'gr_SeaImportContainerModify',style:'',visibleRowNum:'13',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'법인코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'MD NO',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'HOUSE B/L NO',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'CONSOL NO',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Container No',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업구분',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'정정항목',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정정 전 내용',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'정정 후 내용',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntno',inputType:'select',width:'150',emptyItem:'true',allOption:'',chooseOption:'',ref:'',customFormatter:'scwin.setUpperCase'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_SeaImportContainerModifyComboList'},E:[{T:1,N:'w2:label',A:{ref:'cntno'}},{T:1,N:'w2:value',A:{ref:'cntno'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'gbun',inputType:'select',width:'150',allOption:'',chooseOption:'',ref:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'modcd',inputType:'select',width:'200',textAlign:'left',emptyItem:'true',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comCodeIL004'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMod',inputType:'text',width:'200',textAlign:'left',maxByteLength:'20'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afMod',inputType:'text',width:'200',textAlign:'left',maxByteLength:'20'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]},{T:1,N:'xf:group',A:{class:'amt-wrap',id:'',tagname:'ul',style:''},E:[{T:1,N:'xf:group',A:{id:'',tagname:'li'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Container CNT',style:'',tagname:'span'}},{T:1,N:'xf:input',A:{class:'tar',id:'ed_cntrcnt',placeholder:'',style:''}}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:button',A:{style:'',id:'btn_addRowIntnl3',label:'Addition',class:'btn','ev:onclick':'scwin.f_addRowIntnl3'}},{T:1,N:'w2:button',A:{style:'',id:'btn_undoMarkIntnl3',label:'Cancel',class:'btn','ev:onclick':'scwin.f_undoRowIntnl3'}}]}]},{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SeaImportContainerModify_excel',id:'gr_SeaImportContainerModify_excel',style:'display:none;',visibleRowNum:'13',visibleRowNumFix:'true','ev:onfilereadend':'scwin.gr_SeaImportContainerModify_excel_onfilereadend'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column1',inputType:'text',value:'법인코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column17',inputType:'text',value:'MD NO',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column15',inputType:'text',value:'HOUSE B/L NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',hidden:'true',id:'column13',inputType:'text',value:'CONSOL NO',width:'120'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column11',inputType:'text',value:'Container No',width:'150'}},{T:1,N:'w2:column',A:{class:'txt-red',displayMode:'label',id:'column9',inputType:'text',value:'작업구분',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'정정항목',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'정정 전 내용',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'정정 후 내용',width:'200'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mdno',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',customFormatter:'scwin.setUpperCase',displayMode:'label',emptyItem:'true',id:'cntno',inputType:'text',ref:'',width:'150'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_SeaImportContainerModifyComboList'},E:[{T:1,N:'w2:label',A:{ref:'cntno'}},{T:1,N:'w2:value',A:{ref:'cntno'}}]}]}]},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',emptyItem:'true',id:'gbun',inputType:'text',ref:'',width:'150'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'U'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]},{T:1,N:'w2:column',A:{allOption:'',chooseOption:'',displayMode:'label',emptyItem:'true',id:'modcd',inputType:'text',ref:'',textAlign:'left',width:'200'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_comCodeIL004'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'bfMod',inputType:'text',maxByteLength:'20',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'afMod',inputType:'text',maxByteLength:'20',textAlign:'left',width:'200'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'info-box',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'info-ico ',escape:'false',id:'',label:'컨테이너 리스트 엑셀 업로드 방법',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'1. 엑셀DN하여 엑셀포맷 다운',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'2. 해당 엑셀에 내용 입력 후 저장',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'3. 작업구분은 A:추가, U:정정, D:삭제 (영문 알파벳 1글자만 대문자로 입력)',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'4. 정정항목은 공통코드 [IL004] 코드로 입력',style:''}},{T:1,N:'w2:textbox',A:{class:'info-con',escape:'false',id:'',label:'5. 엑셀UP 버튼을 이용하여 저장한 파일 선택 ',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_edi',type:'button',class:'btn link',disabled:'true','ev:onclick':'scwin.btn_edi_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_cancel',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_save',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_delete',label:'저장',style:'',type:'button',disabled:'true','ev:onclick':'scwin.btn_delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Delete'}]}]}]}]}]}]}]}]}]})