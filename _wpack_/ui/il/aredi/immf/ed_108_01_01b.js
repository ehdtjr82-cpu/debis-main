/*amd /ui/il/aredi/immf/ed_108_01_01b.xml 73812 853a25ac347a224861b59bf768786bb742f5c6959b456ea776ccc0da53dbcf76 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'send',name:'전송상태구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exdtFrom',name:'From출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'exdtTo',name:'To출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MasterBLNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rSdate',name:'최초접수일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN Number',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rfno',name:'정정신청번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirImportCargoManifestModify',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndt',name:'전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfGb',name:'정정사유코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfReason',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd1',name:'세관코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csnm1',name:'세관명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cscd2',name:'세관과코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'csnm2',name:'세관과명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN Number',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'HOUSE BL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'MASTER BL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dscd',name:'최종목적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsnm',name:'최종목적지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nacd',name:'국가코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ergb',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkg',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pkgUnit',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'품명1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm2',name:'품명2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm3',name:'품명3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm4',name:'품명4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm2',name:'Shipper주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm3',name:'Shipper주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm4',name:'Shipper주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shTel',name:'Shipper전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'Consignee명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm2',name:'Consignee주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm3',name:'Consignee주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm4',name:'Consignee주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnTel',name:'Consignee전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rggb',name:'사업자개인구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rgno',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'Notify명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm2',name:'Notify주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm3',name:'Notify주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm4',name:'Notify주소3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntTel',name:'Notify전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrcvcd',name:'장치장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsdate',name:'최초접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'redate',name:'전송결과수신일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rstat',name:'정정신청결과',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiver',name:'수신대상',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag',name:'flag',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirImportCargoManifestModifyUnit',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lmfGb',name:'단일항목수정코드',dataType:'text',nullYN:''}},{T:1,N:'w2:column',A:{id:'lmfReason',name:'정정사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbf',name:'정정전내용1',dataType:'text',nullYN:'true'}},{T:1,N:'w2:column',A:{id:'laf',name:'정정후내용1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbf2',name:'정정전내용2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbf3',name:'정정전내용3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lbf4',name:'정정전내용4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'laf2',name:'정정후내용2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'laf3',name:'정정후내용3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'laf4',name:'정정후내용4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upddt',name:'수정일',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Rfno',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'명칭',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CollectRFNO',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rfno',name:'정정신청번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirImportCargoEDIReceiver',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'receiver',name:'수신대상',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dm_AirImportCargoManifestModify'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rfno',name:'정정신청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndt',name:'전송일시',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mfGb',name:'정정사유코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mfReason',name:'정정사유',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cscd1',name:'세관코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'csnm1',name:'세관명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cscd2',name:'세관과코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'csnm2',name:'세관과명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN Number',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN Number',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN Number',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'HOUSE BL NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mhno',name:'CONSOL NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'MASTER BL NO',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dscd',name:'최종목적지',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dsnm',name:'최종목적지명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'nacd',name:'국가코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ergb',name:'화물구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pkg',name:'수량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pkgUnit',name:'포장단위',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wt',name:'중량',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ngnm1',name:'품명1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ngnm2',name:'품명2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ngnm3',name:'품명3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ngnm4',name:'품명4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm1',name:'Shipper명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm2',name:'Shipper주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm3',name:'Shipper주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shnm4',name:'Shipper주소3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shTel',name:'Shipper전화번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm1',name:'Consignee명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm2',name:'Consignee주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm3',name:'Consignee주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnnm4',name:'Consignee주소3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cnTel',name:'Consignee전화번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rggb',name:'사업자개인구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rgno',name:'사업자등록번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntnm1',name:'Notify명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntnm2',name:'Notify주소1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntnm3',name:'Notify주소2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntnm4',name:'Notify주소3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ntTel',name:'Notify전화번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrcvcd',name:'장치장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rsdate',name:'최초접수일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'redate',name:'전송결과수신일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rstat',name:'정정신청결과',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:key',A:{id:'updid',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'upddt',name:'수정일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'receiver',name:'수신대상',dataType:'text'}},{T:1,N:'w2:key',A:{id:'flag',name:'flag',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:onrowpositionchange':'scwin.ds_airExportModify_onrowpositionchange',id:'ds_airExportModify',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'kcomcd',name:'법인코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdno',name:'정정신청번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdondt',name:'ONBOARD DATE'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdfltno',name:'FLIGHT NO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdmrn',name:'MRN NUMBER'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mrnlast',name:'최종 MRN NUMBER'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdmbl',name:'MASTER NO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mhno',name:'CONSOL NO'}},{T:1,N:'w2:column',A:{dataType:'text',id:'blno',name:'B/L번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdhblgb',name:'정정구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdhblmody',name:'정정사유'}},{T:1,N:'w2:column',A:{dataType:'text',id:'seq',name:'일련번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mdmodycd',name:'단일수정항목 정정항목'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sendDt',name:'발송일'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'비고'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsdate',name:'최초접수일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'redate',name:'최종수신일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rstat',name:'정정신청결과'}},{T:1,N:'w2:column',A:{dataType:'text',id:'updid',name:'수정자ID'}},{T:1,N:'w2:column',A:{dataType:'text',id:'flag',name:'플래그'}},{T:1,N:'w2:column',A:{dataType:'text',id:'csCd',name:'세관코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'csNm',ignoreStatus:'true',name:'세관명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'csDept',name:'세관과코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'csDeptNm',ignoreStatus:'true',name:'세관과명'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cmIL004',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_cmIL008',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.immf.RetrieveAirImportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_AirImportCargoManifestModify","key":"OUT_DS1"},{"id":"ds_AirImportCargoManifestModifyUnit","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_AirImportCargoManifestModify","key":"OUT_DS1"},{"id":"ds_AirImportCargoManifestModifyUnit","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_CollectRFNO',action:'/il.aredi.immf.RetrieveAirImportCargoManifestModifyCollectRFNOCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_CollectRFNO","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_CollectRFNO","key":"OUT_DS1"}]','ev:submiterror':'scwin.sbm_CollectRFNO_submiterror','ev:submitdone':'scwin.sbm_CollectRFNO_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_SaveReceiver',action:'/il.aredi.immf.SaveAirImportCargoManifestModifyEDIReceiverCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AirImportCargoEDIReceiver","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_SaveReceiver_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.aredi.immf.SaveAirImportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AirImportCargoManifestModify","key":"IN_DS1"},{"id":"ds_AirImportCargoManifestModifyUnit","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'scwin.sbm_Save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Delete',action:'/il.aredi.immf.SaveAirImportCargoManifestModifyCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AirImportCargoManifestModify","key":"IN_DS1"},{"id":"ds_AirImportCargoManifestModifyUnit","key":"IN_DS2"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_Delete_submitdone','ev:submiterror':'scwin.sbm_Delete_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_SendEDI',action:'/il.aredi.immf.SaveAirImportCargoManifestModifySendEDICMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_AirImportCargoManifestModify","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_SendEDI_submitdone','ev:submiterror':'scwin.sbm_SendEDI_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RfnoLoading',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Search","key":"IN_DS1"},{"id":"ds_Rfno","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Rfno","key":"GAUCE"}','ev:submitdone':'scwin.sbm_RfnoLoading_submitdone'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.flagStatus = "";
scwin.hid_kcomcd = "DBEX";
scwin.hid_rfno = "";
scwin.txt_countRow = "0";
scwin.tab2_cnt = "";
scwin.onpageload = function () {
  dma_Search.set("kcomcd", scwin.hid_kcomcd);
  ds_AirImportCargoEDIReceiver.insertRow(0);
  const codeOptions = [{
    grpCd: "IL008",
    compID: "lc_mfReason"
  },
  //lc_mfReason
  {
    grpCd: "IL004",
    compID: "gr_AirImportCargoManifestModifyUnit:lmfGb"
  } //정정항목, lc_lmfGb
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.callBackCommonCode);
};
scwin.callBackCommonCode = function () {
  dlt_commonCodeIL004.sort("cd", 0);
  var jsonData1 = dlt_commonCodeIL004.getAllJSON();
  dlt_cmIL004.setJSON(jsonData1);
};
scwin.onUdcCompleted = function () {
  ed_blno.focus();
  setTimeout(function () {
    scwin.f_Set("INIT");
  }, 100);
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfDisableObjects($p, [udc_cscd1, lc_mfGb, ed_sndt, lc_mfReason, ed_mrn, ed_msn, ed_hsn, ed_mblno, rd_ergb, ed_pkg, ed_pkgUnit, ed_wt, txt_ngnm1, txt_ngnm2, txt_ngnm3, txt_ngnm4]);
      $c.gus.cfDisableObjects($p, [udc_cscd2]);
      $c.gus.cfDisableObjects($p, [grp_tb2, grp_tb3]);
      $c.gus.cfDisableObjects($p, [grp_tb4]);
      grp_btnSet2.setDisabled(true);
      //$c.gus.cfDisableObjects([lc_lmfGb,txt_lBf,txt_lBf2,txt_lBf3,txt_lBf4,txt_lAf,txt_lAf2,txt_lAf3,txt_lAf4]);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [b_Create, b_Update]);
      $c.gus.cfEnableBtnOnly($p, [btn_sendEDI]);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Save, b_Delete]);
      $c.gus.cfDisableObjects($p, [udc_cscd1, lc_mfGb, ed_sndt, lc_mfReason, ed_mrn, ed_msn, ed_hsn, ed_mblno, rd_ergb, ed_pkg, ed_pkgUnit, ed_wt, txt_ngnm1, txt_ngnm2, txt_ngnm3, txt_ngnm4]);
      $c.gus.cfDisableObjects($p, [udc_cscd2]);
      $c.gus.cfDisableObjects($p, [grp_tb2, grp_tb3]);
      $c.gus.cfDisableObjects($p, [grp_tb4]);
      grp_btnSet2.setDisabled(true);
      scwin.f_DisablePopUpObj();
      break;
    case "RETRIEVE2":
      $c.gus.cfDisableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [b_Create]);
      $c.gus.cfDisableBtnOnly($p, [btn_sendEDI]);
      $c.gus.cfDisableBtnOnly($p, [b_Cancel, b_Update, b_Save, b_Delete]);
      scwin.f_DisablePopUpObj();
      //$c.gus.cfDisableBtnOnly([grd_btnGrp]);
      break;
    case "CREATE":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [b_Save, b_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [btn_sendEDI]);
      $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update, b_Delete]);
      $c.gus.cfEnableObjects($p, [udc_cscd1, lc_mfGb, ed_sndt, lc_mfReason, ed_mrn, ed_msn, ed_hsn, ed_mblno, rd_ergb, ed_pkg, ed_pkgUnit, ed_wt, txt_ngnm1, txt_ngnm2, txt_ngnm3, txt_ngnm4]);
      $c.gus.cfEnableObjects($p, [udc_cscd2]);
      $c.gus.cfEnableObjects($p, [grp_tb2, grp_tb3]);
      ed_nacd.setDisabled(true);
      grp_btnSet2.setDisabled(false);
      scwin.f_EnablePopUpObj();
      break;
    case "UPDATE2":
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [b_Save, b_Delete, b_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update]);
      $c.gus.cfDisableBtnOnly($p, [btn_sendEDI]);
      $c.gus.cfEnableObjects($p, [grp_tb4]);
      grp_btnSet2.setDisabled(false);
      scwin.f_EnablePopUpObj();
      break;
    case "UPDATE":
      scwin.flagStatus = "UPDATE";
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [b_Save, b_Delete, b_Cancel]);
      $c.gus.cfDisableBtnOnly($p, [b_Create, b_Update]);
      $c.gus.cfDisableBtnOnly($p, [btn_sendEDI]);
      $c.gus.cfEnableObjects($p, [udc_cscd1, lc_mfGb, ed_sndt, lc_mfReason, ed_mrn, ed_msn, ed_hsn, ed_mblno, rd_ergb, ed_pkg, ed_pkgUnit, ed_wt, txt_ngnm1, txt_ngnm2, txt_ngnm3, txt_ngnm4]);
      $c.gus.cfEnableObjects($p, [udc_cscd2]);
      $c.gus.cfEnableObjects($p, [grp_tb2, grp_tb3]);
      ed_nacd.setDisabled(true);
      grp_btnSet2.setDisabled(false);
      scwin.f_EnablePopUpObj();
      break;
  }
};
scwin.f_DisablePopUpObj = function () {
  //$c.gus.cfDisableObjects([udc_cscd1, udc_cscd2, udc_wrcvcd]);
};
scwin.f_EnablePopUpObj = function () {
  $c.gus.cfEnableObjects($p, [udc_cscd1, udc_cscd2, udc_wrcvcd]);
};
scwin.f_Retrieve = async function () {
  if (ed_blno.getValue().trim() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["House B/L No"]);
    ed_blno.focus();
    return;
  }
  dma_Search.set("kcomcd", scwin.hid_kcomcd);
  dma_Search.set("blno", dma_Search.get("blno").trim());
  dma_Search.set("rfno", dma_Search.get("rfno").trim());
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Create = function () {
  scwin.flagStatus = "CREATE";
  scwin.f_Set("CREATE");
};
scwin.f_Update = function () {
  scwin.f_Set("UPDATE");
  if (ds_AirImportCargoManifestModifyUnit.getRowCount() < 1) {
    $c.gus.cfDisableObjects($p, [grp_tb4]);
  }
};
scwin.f_Cancel = function () {
  scwin.f_undoRow(ds_AirImportCargoManifestModify);
  scwin.f_undoRow(ds_AirImportCargoManifestModifyUnit);
  let row = 0;
  if (ds_AirImportCargoManifestModify.getCellData(row, "flag") == "2") {
    scwin.f_Set("RETRIEVE2");
  } else {
    scwin.f_Set("RETRIEVE");
  }
};
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    //신고세관, 신고과, 장치장 세팅
    dm_AirImportCargoManifestModify.set("cscd1", ed_cscd1.getValue());
    dm_AirImportCargoManifestModify.set("csnm1", txt_csnm1.getValue());
    dm_AirImportCargoManifestModify.set("cscd2", ed_cscd2.getValue());
    dm_AirImportCargoManifestModify.set("csnm2", txt_csnm2.getValue());
    dm_AirImportCargoManifestModify.set("wrcvcd", ed_wrcvcd.getValue());
    if (scwin.flagStatus == "CREATE") {
      dma_Search.set("kcomcd", scwin.hid_kcomcd);
      dma_Search.set("mrn", ed_mrn.getValue());
      $c.sbm.execute($p, sbm_CollectRFNO); //채번 후 등록 로직 시작 
    } else {
      let row = 0;
      ds_AirImportCargoManifestModify.setCellData(row, "rfno", ds_CollectRFNO.getCellData(0, "rfno"));
      ds_AirImportCargoManifestModify.setCellData(row, "kcomcd", scwin.hid_kcomcd);
      if (ds_AirImportCargoManifestModify.getCellData(row, "flag") == "2" || scwin.flagStatus == "CREATE") {
        ds_AirImportCargoManifestModify.modifyRowStatus(row, "C");
      } else if (scwin.flagStatus == "UPDATE") {
        ds_AirImportCargoManifestModify.setRowJSON(row, dm_AirImportCargoManifestModify.getJSON(), true);
        if (ds_AirImportCargoManifestModifyUnit.getRowCount() > 0) {
          for (let i = 0; i < ds_AirImportCargoManifestModifyUnit.getRowCount(); i++) {
            ds_AirImportCargoManifestModifyUnit.setCellData(i, "lmfReason", ds_AirImportCargoManifestModify.getCellData(row, "mfReason"));
          }
        }
        ds_AirImportCargoManifestModify.modifyRowStatus(row, "U");
      }
      if (txt_shnm1.getValue().length > 100) {
        await $c.win.alert($p, "Shipper의 첫번째 주소가 100자리를 초과 했습니다. 조정하여 주십시오.");
        txt_shnm1.setFocus();
        return false;
      }
      await $c.sbm.execute($p, sbm_Save);
    }
  }
};
scwin.f_SendEDI = async function () {
  let flag = 0;
  let flag2 = "999";
  let rtnList = [];
  //let chkValidate = await $c.gus.cfValidate([tb_headerMandantory]);
  let chk11 = await $c.gus.cfValidate($p, [tb_div1]);
  let chk12 = await $c.gus.cfValidate($p, [grp_tb2]);
  let chk13 = await $c.gus.cfValidate($p, [grp_tb3]);
  if (chk11 && chk12 && chk13) {
    for (let i = 0; i < ds_AirImportCargoManifestModifyUnit.getRowCount(); i++) {
      if (ds_AirImportCargoManifestModifyUnit.getCellData(i, "lmfGb") == "BF") {
        flag = 1;
      }
    }
    let row = 0;
    let mfGbVal = ds_AirImportCargoManifestModify.getCellData(row, "mfGb");
    if (mfGbVal == "F" || mfGbVal == "G" || mfGbVal == "E" && flag > 0) {
      flag2 = "02";
    } else {
      flag2 = "01";
    }
    let win_url = "/ui/il/common/xml/ilCommonEDIRcvSelection.xml";
    let data = {
      flag2: flag2
    };
    let opts = {
      id: "ediPop",
      popupName: "KT NET 적하 목록 정정 신청 수신 대상",
      modal: false,
      type: "browserPopup",
      width: 460,
      height: 280,
      title: "popup"
    };
    rtnList = await $c.win.openPopup($p, win_url, opts, data);
    if (rtnList != "999") {
      if (rtnList != null) {
        let ediRow = 0;
        ds_AirImportCargoEDIReceiver.setCellData(ediRow, "kcomcd", ds_AirImportCargoManifestModify.getCellData(row, "kcomcd"));
        ds_AirImportCargoEDIReceiver.setCellData(ediRow, "rfno", ds_AirImportCargoManifestModify.getCellData(row, "rfno"));
        ds_AirImportCargoEDIReceiver.setCellData(ediRow, "receiver", rtnList);
        await $c.sbm.execute($p, sbm_SaveReceiver);
      }
    }
  }
};
scwin.f_Delete = async function () {
  let chk = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (chk) {
    let row = 0;
    if (ds_AirImportCargoManifestModify.getCellData(row, "flag") == "1") {
      ds_AirImportCargoManifestModify.modifyRowStatus(row, "D");
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_004, ["대상"]);
    }
    await $c.sbm.execute($p, sbm_Save);
  }
};
scwin.f_ReqFieldChk = async function () {
  let tempVal = lc_mfGb.getValue();
  if ($c.gus.cfIsNull($p, tempVal)) {
    await $c.win.alert($p, "정정구분은 필수 입력 항목입니다.");
    lc_mfGb.focus();
    return false;
  }
  tempVal = lc_mfReason.getValue();
  if ($c.gus.cfIsNull($p, tempVal)) {
    await $c.win.alert($p, "정정사유는 필수 입력 항목입니다.");
    lc_mfReason.focus();
    return false;
  }
  let chk11 = await $c.gus.cfValidate($p, [lc_mfReason, ed_cscd1, ed_cscd2, ed_mrn, tb_div1]);
  if (!chk11) {
    return false;
  }
  // let mrnValue = ed_mrn.getValue(); 
  // let len = mrnValue.length;       
  // if(len<11){
  //     await $c.win.alert("최종 MRN No는 11자리 수 만큼 입력하십시오.");
  //     ed_mrn.focus();
  //     return false;
  // }
  // let chk112 = await $c.gus.cfValidate([tb_div1]);
  // if (!chk112) {return false;}

  let chk12 = await $c.gus.cfValidate($p, [grp_tb2]);
  if (!chk12) {
    return false;
  }
  let chk13 = await $c.gus.cfValidate($p, [grp_tb3]);
  if (!chk13) {
    return false;
  }
  scwin.gr_AirImportCargoManifestModifyUnit_validConfig = [scwin.getValItem("lmfGb", "정정항목"), scwin.getValItem("lbf", "정정전내용1"), scwin.getValItem("laf", "정정후내용1")];
  let chk2 = await $c.gus.cfValidateGrid($p, gr_AirImportCargoManifestModifyUnit, null, null, scwin.gr_AirImportCargoManifestModifyUnit_validConfig, "정정내역");
  if (!chk2) {
    return false;
  }
  return true;
};
scwin.getValItem = function (id, name, options = {}) {
  return {
    id: id,
    name: name,
    mandatory: options.mandatory !== undefined ? options.mandatory : true,
    ...options // 나머지 옵션(minNumber, date 등)을 병합
  };
};
scwin.f_RfnoLoading = function () {
  let param1 = "";
  let param2 = "";
  param1 = ed_blno.getValue().trim();
  param2 = scwin.hid_kcomcd;
  if (param1.length > 0) {
    dma_Search.set("blno", param1);
    dma_Search.set("kcomcd", param2);
    sbm_RfnoLoading.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirImportCargoManifestModifyRfnoCombo&param1=" + param1 + "&param2=" + param2;
    $c.sbm.execute($p, sbm_RfnoLoading);
  } else {
    ds_Rfno.removeAll();
  }
};
scwin.f_SetDefaultKeyValue = function (ds) {
  let row = ds.getRowPosition();
  let mainRow = 0;
  ds.setCellData(row, "kcomcd", scwin.hid_kcomcd);
  ds.setCellData(row, "rfno", ds_AirImportCargoManifestModify.getCellData(mainRow, "rfno"));
  ds.setCellData(row, "lmfReason", ds_AirImportCargoManifestModify.getCellData(mainRow, "mfReason"));
};
scwin.f_addRow = function () {
  scwin.f_Set("UPDATE2");
  $c.data.insertRow($p, gr_AirImportCargoManifestModifyUnit);
  scwin.f_SetDefaultKeyValue(ds_AirImportCargoManifestModifyUnit);
};
scwin.f_deleteRow = function (ds) {
  ds.removeRow(ds.getRowPosition());
};
scwin.f_undoRow = function (ds) {
  let row = ds.getRowPosition();
  if (row >= 0) {
    ds.undoRow(row);
  }
  if (ds == ds_AirImportCargoManifestModifyUnit) {
    $c.gus.cfDisableObjects($p, [lc_lmfGb, txt_lBf, txt_lBf2, txt_lBf3, txt_lBf4, txt_lAf, txt_lAf2, txt_lAf3, txt_lAf4]);
  }
};
scwin.f_PopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let rtnList = [];
  switch (disGubun) {
    case 1:
      udc_cscd1.setSelectId("retrieveCustomInfo"); // XML상의 SELECT ID
      udc_cscd1.ilCommonPopUp(scwin.callbackPopUp1, ed_cscd1.getValue().trim(), "", pWinCloseTF, "2", "관할세관 Code, 관할세관 Name", "130,300", "3,4,5,6,7,8,9,10", null, "500", "500", null, null, null, pAllSearchTF, "관할세관 Search,관할세관 Code, 관할세관 Name", pNoDataCloseTF);
      break;
    case 2:
      udc_cscd2.ilCommonPopUp(scwin.callbackPopUp2, ed_cscd2.getValue().trim(), "", pWinCloseTF, "2", "세관과 Code, 세관과 Name", "130,300", "3,4,5,6,7,8,9,10", null, "500", "500", null, null, null, pAllSearchTF, "세관과 Search,세관과 Code, 세관과 Name", pNoDataCloseTF);
      break;
    case 3:
      udc_wrcvcd.ilCommonPopUp(scwin.callbackPopUp3, ed_wrcvcd.getValue().trim(), "", pWinCloseTF, "4", "장치장코드, 장치장명 Name,,ENG", "130,200,,100", "3,5,6,7,8,9,10", null, "500", "500", null, null, null, pAllSearchTF, "장치장 Search,장치장코드 Code, 장치장명 Name", pNoDataCloseTF);
      break;
  }
};
scwin.callbackPopUp1 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cscd1, txt_csnm1);
};
scwin.callbackPopUp2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_cscd2, txt_csnm2);
};
scwin.callbackPopUp3 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_wrcvcd, txt_wrcvnm);
};
scwin.f_BeforePopUpEd = function (nmObj, cdObj, gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  let cdObjVal = cdObj.getValue().trim();
  if (cdObjVal == "") {
    nmObj.setValue("");
  } else {
    nmObj.setValue("");
    scwin.f_PopUp(gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF);
  }
};
scwin.f_ChkPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_PopUp(disGubun, "T", "F", "F");
  } else {
    scwin.f_PopUp(disGubun, "T", "F", "F");
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_searchParam);
};
scwin.ed_blno_onblur = function (e) {
  scwin.f_RfnoLoading();
};
scwin.ed_cscd1_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_csnm1, ed_cscd1, 1, "T", "F", "F");
};
scwin.ed_cscd2_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_csnm2, ed_cscd2, 2, "T", "F", "F");
};
scwin.ed_wrcvcd_onblur = function (e) {
  scwin.f_BeforePopUpEd(txt_wrcvnm, ed_wrcvcd, 3, "T", "F", "F");
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_AirImportCargoManifestModify.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_WRN_002);
  } else {
    dm_AirImportCargoManifestModify.setJSON(ds_AirImportCargoManifestModify.getRowJSON(0));
    ed_cscd1.setValue(dm_AirImportCargoManifestModify.get("cscd1"));
    txt_csnm1.setValue(dm_AirImportCargoManifestModify.get("csnm1"));
    ed_cscd2.setValue(dm_AirImportCargoManifestModify.get("cscd2"));
    txt_csnm2.setValue(dm_AirImportCargoManifestModify.get("csnm2"));
    ed_wrcvcd.setValue(dm_AirImportCargoManifestModify.get("wrcvcd"));
    lc_mfReason.setValue(dm_AirImportCargoManifestModify.get("mfReason"));
    scwin.f_Set("RETRIEVE");
    let row = 0;
    if (ds_AirImportCargoManifestModify.getCellData(row, "flag") == "2") {
      if (ed_cscd1.getValue().length > 1) {
        scwin.f_PopUp(1, "T", "F", "F");
      }
      if (ed_cscd2.getValue().length > 1) {
        scwin.f_PopUp(2, "T", "F", "F");
      }
      if (ed_wrcvcd.getValue().length > 1) {
        scwin.f_PopUp(3, "T", "F", "F");
      }
      scwin.f_Set("RETRIEVE2");
    }
    scwin.tab2_cnt = "0";
    if (grp_wq.getSelectedTabIndex() == 1) {
      scwin.grp_wq_onchange("", 1, "");
    }
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_Save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_RfnoLoading();
  setTimeout(function () {
    scwin.f_Retrieve();
    scwin.flagStatus = "";
  }, 500);
};
scwin.sbm_Save_submiterror = function (e) {
  //$c.gus.cfShowError(e);
  $c.gus.cfAlertMsg($p, MSG_CM_ERR_047);
};
scwin.sbm_Delete_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
};
scwin.sbm_Delete_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_SendEDI_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, E_MSG_CM_INF_018);
  ds_AirImportCargoManifestModify.modifyRowStatus(0, "R");
};
scwin.sbm_SendEDI_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_CollectRFNO_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RfnoLoading_submitdone = function (e) {
  //ds_Rfno.sort("code", 0);
  let lastIdx = ds_Rfno.getRowCount() - 1;
  if (lastIdx >= 0) {
    cnd_lc_rfno.setSelectedIndex(lastIdx);
  } else {
    dma_Search.set("rfno", "");
  }
};
scwin.btn_retrieve_onclick = function (e) {
  //dm, ds 초기화
  dm_AirImportCargoManifestModify.setEmptyValue();
  ds_AirImportCargoManifestModify.removeAll();
  ds_AirImportCargoManifestModifyUnit.removeAll();
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_sendEDI_onclick = function (e) {
  scwin.f_SendEDI();
};
scwin.b_Cancel_onclick = function (e) {
  scwin.f_Cancel();
};
scwin.b_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.b_Update_onclick = function (e) {
  scwin.f_Update();
};
scwin.b_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.b_Delete_onclick = function (e) {
  scwin.f_Delete();
};
scwin.btn_addRowIntnl_onclick = function (e) {
  scwin.f_addRow(ds_AirImportCargoManifestModifyUnit);
};
scwin.btn_deleteRowIntnl_onclick = function (e) {
  scwin.f_deleteRow(ds_AirImportCargoManifestModifyUnit);
};
scwin.btn_undoMarkIntnl_onclick = function (e) {
  scwin.f_undoRow(ds_AirImportCargoManifestModifyUnit);
};
scwin.udc_cscd1_onclickEvent = function (e) {
  scwin.f_PopUp(1, "T", "F", "F");
};
scwin.udc_cscd1_onviewchangeCodeEvent = function (info) {
  txt_cnnm1.setValue("");
  if (!$c.gus.cfIsNull($p, ed_cscd1.getValue())) {
    scwin.f_PopUp(1, "T", "F", "F");
  }
};
scwin.udc_csDept_onclickEvent = function (e) {
  scwin.f_PopUp(2, "T", "F", "F");
};
scwin.udc_csDept_onblurCodeEvent = function (e) {
  txt_csnm2.setValue("");
  if (!$c.gus.cfIsNull($p, ed_cscd2.getValue())) {
    scwin.f_PopUp(2, "T", "F", "F");
  }
};
scwin.udc_csDept_onviewchangeCodeEvent = function (info) {
  txt_csnm2.setValue("");
  if (!$c.gus.cfIsNull($p, ed_cscd2.getValue())) {
    scwin.f_PopUp(2, "T", "F", "F");
  }
};
scwin.udc_wrcvcd_onblurCodeEvent = function (e) {
  txt_wrcvnm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_wrcvcd.getValue())) {
    scwin.f_PopUp(3, "T", "F", "F");
  }
};
scwin.udc_wrcvcd_onviewchangeCodeEvent = function (info) {
  txt_wrcvnm.setValue("");
  if (!$c.gus.cfIsNull($p, ed_wrcvcd.getValue())) {
    scwin.f_PopUp(3, "T", "F", "F");
  }
};
scwin.udc_wrcvcd_onclickEvent = function (e) {
  scwin.f_PopUp(3, "T", "F", "F");
};
scwin.gr_AirImportCargoManifestModifyUnit_oncellclick = function (rowIndex, columnIndex, columnId) {
  //$c.gus.cfEnableObjects([grp_tb4]);
};
scwin.f_undoRow2 = function () {
  let row = ds_AirImportCargoManifestModifyUnit.getRowPosition();
  if (ds_AirImportCargoManifestModifyUnit.getRowStatus(row) == "C") {
    ds_AirImportCargoManifestModifyUnit.removeRow(row);
  } else {
    ds_AirImportCargoManifestModifyUnit.undoRow(row);
    ds_AirImportCargoManifestModifyUnit.setRowPosition(row, event);
  }
  $c.gus.cfDisableObjects($p, [grp_tb4]);
};
scwin.f_deleteRow2 = function () {
  let row = ds_AirImportCargoManifestModifyUnit.getRowPosition();
  if (ds_AirImportCargoManifestModifyUnit.getRowStatus(row) == "C") {
    ds_AirImportCargoManifestModifyUnit.removeRow(row);
  } else {
    ds_AirImportCargoManifestModifyUnit.deleteRow(row);
    gr_AirImportCargoManifestModifyUnit.setFocusedCell(row, 0);
  }
};
scwin.sbm_CollectRFNO_submitdone = async function (e) {
  let row = 0;
  let rfnoRow = 0;
  ds_AirImportCargoManifestModify.setRowJSON(row, dm_AirImportCargoManifestModify.getJSON(), true);
  ds_AirImportCargoManifestModify.setCellData(row, "rfno", ds_CollectRFNO.getCellData(rfnoRow, "rfno"));
  if (ds_AirImportCargoManifestModifyUnit.getRowCount() > 0) {
    for (let i = 0; i < ds_AirImportCargoManifestModifyUnit.getRowCount(); i++) {
      ds_AirImportCargoManifestModifyUnit.setCellData(i, "lmfReason", ds_AirImportCargoManifestModify.getCellData(row, "mfReason"));
      ds_AirImportCargoManifestModifyUnit.setCellData(i, "rfno", ds_CollectRFNO.getCellData(rfnoRow, "rfno"));
    }
  }
  ds_AirImportCargoManifestModify.modifyRowStatus(row, "C");
  ds_AirImportCargoManifestModify.setCellData(row, "kcomcd", scwin.hid_kcomcd);
  if (txt_shnm1.getValue().length > 100) {
    await $c.win.alert($p, "Shipper의 첫번째 주소가 100자리를 초과 했습니다. 조정하여 주십시오.");
    txt_shnm1.setFocus();
    return false;
  }
  await $c.sbm.execute($p, sbm_Save);
};
scwin.sbm_SaveReceiver_submitdone = function (e) {
  ds_AirImportCargoManifestModify.modifyRowStatus(0, "C");
  $c.sbm.execute($p, sbm_SendEDI);
};
scwin.ed_ntTel_onkeyup = function (e) {
  var val = this.getValue();
  this.setValue(val.toUpperCase());
};
scwin.ed_cnTel_onkeyup = function (e) {
  var val = this.getValue();
  this.setValue(val.toUpperCase());
};
scwin.ed_shTel_onkeyup = function (e) {
  var val = this.getValue();
  this.setValue(val.toUpperCase());
};
scwin.ed_comm_onkeyup = function (e) {
  var val = this.getValue();
  this.setValue(val.toUpperCase());
};
scwin.formatMrn = function (value) {
  if (!value) return "";
  if (value.length > 3) {
    return value.substring(0, 3) + "-" + value.substring(3);
  }
  return value;
};
scwin.grp_wq_onchange = function (tabId, index, userTabId) {
  if (ds_AirImportCargoManifestModifyUnit.getRowCount() > 0 && index == 1 && scwin.tab2_cnt == "0") {
    ds_AirImportCargoManifestModifyUnit.setRowPosition(0, true);
    ds_AirImportCargoManifestModifyUnit.initRowStatus();
    scwin.tab2_cnt = "1";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchParam',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{id:'ed_blno',style:'',ref:'data:dma_Search.blno',mandatory:'true','ev:onblur':'scwin.f_RfnoLoading',maxlength:'20',allowChar:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정신청번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_rfno',search:'start',style:'width:170px;',submenuSize:'auto',ref:'data:dma_Search.rfno',mandatory:'true',allOption:'',chooseOption:'',displayMode:'label',sortOption:'label',readOnly:'false',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_Rfno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tabbox ',id:'',style:''},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',class:'wq_tab',id:'grp_wq',style:'','ev:onchange':'scwin.grp_wq_onchange'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs1',label:'정정내용',style:''}},{T:1,N:'w2:tabs',A:{disabled:'false',id:'tabs2',label:'단일 항목 수정',style:''}},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content1',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_div1',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mfGb',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dm_AirImportCargoManifestModify.mfGb',allOption:'',chooseOption:'',chooseOptionLabel:' ',emptyIndex:'-1',mandatory:'true',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'H-B/L 정정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'H-B/L 추가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'H-B/L 삭제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group3',style:''},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDateTime',class:'',id:'ed_sndt',style:'',ref:'data:dm_AirImportCargoManifestModify.sndt',displayFormat:'yyyy/MM/dd/HH:mm',validateOnInput:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정사유',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_mfReason',search:'start',style:'',submenuSize:'auto',ref:'data:dm_AirImportCargoManifestModify.mfReason',emptyIndex:'-1',allOption:'',chooseOption:'true',chooseOptionLabel:'',emptyItem:'true',mandatory:'true'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고세관',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_csCd',class:'',code:'csCd',codeId:'ed_cscd1','ev:onblurCodeEvent':'scwin.ed_cscd1_onblur','ev:onclickEvent':'scwin.udc_cscd1_onclickEvent',id:'udc_cscd1',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'3',maxlengthName:'50',name:'csNm',nameId:'txt_csnm1',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'popupCsCd',readOnlyName:'true',refDataCollection:'ds_airExportModify',selectID:'retrieveCustomInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'신고세관','ev:onviewchangeCodeEvent':'scwin.udc_cscd1_onviewchangeCodeEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'신고과',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_csDept',class:'',code:'csDept',codeId:'ed_cscd2','ev:onblurCodeEvent':'scwin.udc_csDept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_csDept_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_csDept_onviewchangeCodeEvent',id:'udc_cscd2',mandatoryCode:'true',mandatoryName:'true',maxlengthCode:'3',maxlengthName:'50',name:'csDeptNm',nameId:'txt_csnm2',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'popupCsDept',readOnlyName:'true',refDataCollection:'ds_airExportModify',selectID:'retrieveCustomSectionInfo',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'신고과'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최종 MRN No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.mrn',mandatory:'true',maxlength:'11',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_comm_onkeyup',invalidMessage:'최종 MRN No',displaymessage:'true',minlength:'11'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MSN No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.msn',mandatory:'true',maxlength:'4',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_comm_onkeyup',invalidMessage:'MSN No',displaymessage:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'HSN No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.hsn',mandatory:'true',maxlength:'4',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_comm_onkeyup',displaymessage:'true',invalidMessage:'HSN No'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Master B/L No',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_mblno',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.mblno',mandatory:'true',maxlength:'20',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_comm_onkeyup',displaymessage:'true',invalidMessage:'Master B/L No',displayFormatter:'scwin.formatMrn'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화물구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_ergb',ref:'data:dm_AirImportCargoManifestModify.ergb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'통과화물'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'T'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'포장갯수',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_pkg',placeholder:'',style:'width:150px;text-align:right;',ref:'data:dm_AirImportCargoManifestModify.pkg',mandatory:'true',maxlength:'10',displayFormat:'#,##0',allowChar:'0-9',dataType:'number',displaymessage:'true',invalidMessage:'포장갯수'}},{T:1,N:'xf:input',A:{allowChar:'0-9a-zA-Z',class:'',displayFormat:'###',id:'ed_pkgUnit',mandatory:'true',maxlength:'3',placeholder:'',ref:'data:dm_AirImportCargoManifestModify.pkgUnit',style:'width:47px;text-align:right;','ev:onkeyup':'scwin.ed_comm_onkeyup',invalidMessage:'포장갯수 단위',displaymessage:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_wt',placeholder:'',style:'width:150px;text-align:right;',ref:'data:dm_AirImportCargoManifestModify.wt',mandatory:'true',maxlength:'10',displayFormat:'#,##0.#',allowChar:'0-9',dataType:'number',displaymessage:'true',invalidMessage:'중량'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'품명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'grp_group4',style:''},E:[{T:1,N:'xf:input',A:{id:'txt_ngnm1',style:'',ref:'data:dm_AirImportCargoManifestModify.ngnm1',maxlength:'60',mandatory:'true',invalidMessage:'품명-1',displaymessage:'true'}},{T:1,N:'xf:input',A:{id:'txt_ngnm2',style:'',ref:'data:dm_AirImportCargoManifestModify.ngnm2',maxlength:'60'}},{T:1,N:'xf:input',A:{id:'txt_ngnm3',style:'',ref:'data:dm_AirImportCargoManifestModify.ngnm3',maxlength:'60'}},{T:1,N:'xf:input',A:{id:'txt_ngnm4',style:'',ref:'data:dm_AirImportCargoManifestModify.ngnm4',maxlength:'60'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap  mt12',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'장치예정장소 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_tb3',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'장치장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_csDept',class:'',code:'csDept',codeId:'ed_wrcvcd',id:'udc_wrcvcd',mandatoryCode:'true',maxlengthCode:'10',maxlengthName:'50',name:'csDeptNm',nameId:'txt_wrcvnm',objType:'data',objTypeCode:'data',objTypeName:'data',popupID:'popupCsDept',readOnlyName:'true',refDataCollection:'ds_airExportModify',selectID:'retrieveAirBoneZoneCode',skipOnBlurCodeValueEmpty:'N',style:'',validTitle:'장치장','ev:onblurCodeEvent':'scwin.udc_wrcvcd_onblurCodeEvent','ev:onviewchangeCodeEvent':'scwin.udc_wrcvcd_onviewchangeCodeEvent','ev:onclickEvent':'scwin.udc_wrcvcd_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'최종목적지',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:'width: 30%'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_dscd',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.dscd',mandatory:'true',maxlength:'3',displaymessage:'true',invalidMessage:'최종목적지'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_nacd',placeholder:'',style:'width: 20%;',ref:'data:dm_AirImportCargoManifestModify.nacd',mandatory:'true',maxlength:'2',disabled:'true'}},{T:1,N:'xf:input',A:{class:'',id:'txt_dsnm',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.dsnm',maxlength:'40'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'grp_tb2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:130px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:5px;;'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Shipper',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tel No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_shTel',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.shTel',maxByteLength:'20',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_shTel_onkeyup'}}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req w-full',style:''},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_shnm1',placeholder:'',class:'',ref:'data:dm_AirImportCargoManifestModify.shnm1',maxlength:'110',mandatory:'true',displaymessage:'true',invalidMessage:'Shipper Name-1'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0',style:''},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req w-full'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_shnm2',placeholder:'',class:'',ref:'data:dm_AirImportCargoManifestModify.shnm2',maxlength:'60',mandatory:'true',invalidMessage:'Shipper Name-2',displaymessage:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_shnm3',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.shnm3',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_shnm4',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.shnm4',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Consignee',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tel No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_cnTel',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.cnTel',maxlength:'20',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_cnTel_onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req w-full'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm1',placeholder:'',class:'',ref:'data:dm_AirImportCargoManifestModify.cnnm1',maxlength:'110',mandatory:'true',displaymessage:'true',invalidMessage:'Consignee Name-1'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td br0'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{id:'',class:'req w-full'},E:[{T:1,N:'xf:input',A:{style:'',id:'txt_cnnm2',placeholder:'',class:'',ref:'data:dm_AirImportCargoManifestModify.cnnm2',maxlength:'60',mandatory:'true',displaymessage:'true',invalidMessage:'Consignee Name-2'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_cnnm3',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.cnnm3',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_cnnm4',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.cnnm4',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_rggb',ref:'data:dm_AirImportCargoManifestModify.rggb',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'개인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_rgno',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.rgno',maxByteLength:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Notify',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Tel No',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_ntTel',placeholder:'',style:'width:150px;',ref:'data:dm_AirImportCargoManifestModify.ntTel',maxByteLength:'20',allowChar:'0-9|A-Z|a-z','ev:onkeyup':'scwin.ed_ntTel_onkeyup'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_ntnm1',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.ntnm1',maxlength:'110'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_ntnm2',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.ntnm2',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_ntnm3',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.ntnm3',maxlength:'60'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'txt_ntnm4',placeholder:'',style:'',ref:'data:dm_AirImportCargoManifestModify.ntnm4',maxlength:'60'}}]}]}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',id:'content2',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'grp_tb4',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정정항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lmfGb',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_AirImportCargoManifestModifyUnit.lmfGb',mandatory:'true',emptyIndex:'-1',allOption:'',chooseOption:'',chooseOptionLabel:'',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_cmIL004'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 전 내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'grp_group5',style:''},E:[{T:1,N:'xf:input',A:{id:'txt_lBf',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.lbf',maxlength:'60',refSync:'true',mandatory:'true'}},{T:1,N:'xf:input',A:{id:'txt_lBf2',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.lbf2',maxlength:'60',refSync:'true'}},{T:1,N:'xf:input',A:{id:'txt_lBf3',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.lbf3',maxlength:'60',refSync:'true'}},{T:1,N:'xf:input',A:{id:'txt_lBf4',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.lbf4',maxlength:'60',refSync:'true'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정정 후 내용',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'row-gap-4',id:'grp_group6',style:''},E:[{T:1,N:'xf:input',A:{id:'txt_lAf',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.laf',maxlength:'60',refSync:'true',mandatory:'true'}},{T:1,N:'xf:input',A:{id:'txt_lAf2',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.laf2',maxlength:'60',refSync:'true'}},{T:1,N:'xf:input',A:{id:'txt_lAf3',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.laf3',maxlength:'60',refSync:'true'}},{T:1,N:'xf:input',A:{id:'txt_lAf4',style:'',ref:'data:ds_AirImportCargoManifestModifyUnit.laf4',maxlength:'60',refSync:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'수정리스트',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',btnUser:'N',gridDownYn:'N',gridUpYn:'N',templateYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group7',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'ds_AirImportCargoManifestModifyUnit',style:'',autoFit:'allColumn',id:'gr_AirImportCargoManifestModifyUnit',visibleRowNum:'5',class:'wq_gvw',readOnly:'true','ev:oncellclick':'scwin.gr_AirImportCargoManifestModifyUnit_oncellclick',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'kcomcd',value:'법인코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfno',value:'정정신청번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lmfReason',value:'작업구분',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lmfGb',value:'정정항목',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf',value:'정정전내용1',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf2',value:'정정전내용2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf3',value:'정정전내용3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf4',value:'정정전내용4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf',value:'정정후내용1',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf2',value:'정정후내용2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf3',value:'정정후내용3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf4',value:'정정후내용4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'kcomcd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfno',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lmfReason',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lmfGb',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lbf4',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'laf4',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'grp_btnSet2',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{EngYn:'Y',btnCancelObj:'btn_undoMarkIntnl2',btnCancelYn:'Y',btnDelYn:'N',btnRowAddObj:'btn_addRowIntnl2',btnRowAddYn:'Y',btnRowDelObj:'btn_deleteRowIntnl2',btnRowDelYn:'Y',gridID:'gr_AirImportCargoManifestModifyUnit',style:'',cancelFunction:'scwin.f_undoRow2',rowDelFunction:'scwin.f_deleteRow2',rowAddFunction:'scwin.f_addRow',id:'btn_grdAdd',class:''}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_sendEDI',style:'',title:'EDISend',type:'button',disabled:'true','ev:onclick':'scwin.btn_sendEDI_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:''}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Cancel',style:'',title:'엑셀 UP',type:'button',disabled:'true','ev:onclick':'scwin.b_Cancel_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cancel'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Create',style:'',title:'엑셀 UP',type:'button',disabled:'true','ev:onclick':'scwin.b_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Create'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Update',style:'',title:'엑셀 UP',type:'button',disabled:'true','ev:onclick':'scwin.b_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Update'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Save',style:'',title:'엑셀 UP',type:'button',disabled:'true','ev:onclick':'scwin.b_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Save'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'b_Delete',style:'',title:'엑셀 UP',type:'button',disabled:'true','ev:onclick':'scwin.b_Delete_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Delete'}]}]}]}]}]}]}]}]}]})