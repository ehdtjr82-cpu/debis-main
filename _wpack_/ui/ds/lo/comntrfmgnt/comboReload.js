/*amd /ui/ds/lo/comntrfmgnt/comboReload.xml 4233 28e20b04d1ecb029b852284c78198f0ee66724f43b8ec3f71dea472db5c10da8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_comboReload',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_comboReload_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrive',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_comboReload_con',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'synchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrive_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.popId = "";
scwin.onpageload = function () {};
scwin.cfn_getComboReload = function (id) {
  //console.log("scwin.cfn_getComboReload.id="+id);
  /*
  사용할 *.xml 파일의 body 아래 추가
  <w2:wframe id="wfm_smp" src="/ui/ds/io/comboReload.xml" style=""></w2:wframe>
  
  부모페이지에서 스크립트 호출
  
      wfm_smp.getWindow().scwin.cfn_getComboReload("01b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("02b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("04b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("05b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("11b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("13b");
      wfm_smp.getWindow().scwin.cfn_getComboReload("15b");
   */
  var sSysCd = "";
  var sQueryId = "";
  scwin.popId = id;
  switch (id) {
    case "04b":
      sSysCd = "CommonTariffEBC";
      sQueryId = "retrieveAnnouncementSurchargeTariffAdptDtGroupList";
      break;
    case "05b":
      sSysCd = "CommonTariffEBC";
      sQueryId = "retrieveFixedAmountAnnouncementTariffAdptDtGroupList";
      break;

    //보세화물 보관요율	 lo_200_03_01b
    case "01b":
      sSysCd = "CommonTariffEBC";
      sQueryId = "retrieveBondedCargoStorageChargeAdptDtGroupList";
      break;

    //DPCT위험물장치료 lo_200_03_04b
    case "02b":
      sSysCd = "CommonTariffEBC";
      sQueryId = "retrieveDpctDangerousCargoShedRateAdptDtGroupList";
      break;

    //장치경비료_부산 lo_200_01_10b
    case "10b":
      sSysCd = "GuardRateEBC";
      sQueryId = "retrievePusanShedGuardRateAdptDtGroupList";
      break;

    //장치경비료_인천 lo_200_01_11b
    case "11b":
      sSysCd = "GuardRateEBC";
      sQueryId = "retrieveIncheonShedGuardRateAdptDtGroupList";
      break;

    //일반경비료_부산 lo_200_01_13b
    case "13b":
      sSysCd = "GuardRateEBC";
      sQueryId = "retrieveGeneralGuardRateAdptDtGroupList";
      break;

    //보세화물화재보험료관리 lo_200_01_15b
    case "15b":
      sSysCd = "GuardRateEBC";
      sQueryId = "retrieveBondedCargoFirePremiumAdptDtGroupList";
      break;
    default:
      break;
  }
  const params = {
    sysCd: sSysCd // 시스템코드
    ,
    queryId: sQueryId // 쿼리ID
  };
  ds_comboReload_con.setJSON(params);
  $c.sbm.execute($p, sbm_retrive);
};
scwin.sbm_retrive_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_comboReload.setJSON(e.responseJSON.GAUCE);
    if (scwin.popId == "01b" || scwin.popId == "04b" || scwin.popId == "05b") {
      $p.parent().ds_adptDt.setJSON(ds_comboReload.getAllJSON()); //lo_200_01_04b.xml , lo_200_01_05b.xml
    }
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'}}]}]})