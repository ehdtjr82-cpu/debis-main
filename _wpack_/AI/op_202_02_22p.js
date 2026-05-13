/*amd /AI/op_202_02_22p.xml 101434 4f31f38e191483f4cc6e1746e6d9257989a40839a97f76183d599b447e78f624 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryClsCd',name:'조회구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutDt',name:'반출일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutHh',name:'반출시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinHh',name:'반입시간',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryoutEdiType',name:'반출EDI구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinEdiType',name:'반입EDI구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'drvNm',name:'운전자명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclShortCd',name:'차량약칭코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopino',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfCls',name:'자가구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hanjinSelfCls',name:'한진자가',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlVsslPortcnt',name:'모선항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'startPointCont',name:'출발상세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'B/K NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslArrvlportYr',name:'모선입항년도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'admitNo',name:'승인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xrayRettlPassYn',name:'X-RAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'doNo',name:'D/O NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZE/TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'TS구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFrtcarNo',name:'차량ID번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNoFull',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclCls',name:'차량구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCoCd',name:'운송업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransVehclYn',name:'보세차량여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chassisPosInfo',name:'샤시위치정보',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCls',name:'철송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadIntendCls',name:'철송예정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'icdmoveCls',name:'ICD이동구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCls',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFromNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstToNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstFrom',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDstTo',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndHh',name:'전송시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'preInfoGrpClsCd',name:'사전정보그룹구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpDomesticClsCd',name:'수입수출구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'냉동온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'temperCls',name:'온도구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'WEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dchrPort',name:'양하항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overHeight',name:'OVER HEIGHT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overWidth',name:'OVER WIDTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'overLength',name:'OVER LENGTH',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtCstmclrncExyn',name:'직통관유무',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPic',name:'연락담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'iccntctPl',name:'연락처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarCls',name:'화차구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopino1'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopino2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopino3'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopino4'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopiCodeco',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'crryinCrryoutCls',name:'반출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cls',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sizTyp',name:'SIZE/TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transCls',name:'운송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'SEAL NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bookingNo',name:'B/K NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoCd',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expLicenseNo',name:'수출면장번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cstmclrncCls',name:'통관구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'licenseFdd',name:'면장기일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDepot',name:'FROM DEPOT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptRgn',name:'FROM 지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDepot',name:'TO DEPOT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRgn',name:'TO 지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frzTemper',name:'온도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dangerCd',name:'위험물코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hndlCd',name:'조작코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tsCls',name:'T/S구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtCd',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unqItm',name:'REMARK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadCore',name:'철송주체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadReqDt',name:'철송요청일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadReqHh',name:'철송요청시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drtOnYn',name:'직상차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvRailroadPlc',name:'착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'consignee',name:'진수화인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'특이사항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'전송구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docStsCls',name:'문서상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopiCodeco1'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopiCodeco2'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopiCodeco3'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsCopiCodeco4'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'dummy',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_hiddenSearch'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dummy',name:'',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.edimgnt.RetrieveCarryInAndCarryOutIntendEdiInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_resultsCopino","key":"OUT_DS1"},{"id":"ds_resultsCopiCodeco","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_resultsCopino","key":"OUT_DS1"},{"id":"ds_resultsCopiCodeco","key":"OUT_DS2"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.edimgnt.SaveCarryInAndCarryOutIntendEdiInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_resultsCopino3","key":"IN_DS1"},{"id":"ds_resultsCopino4","key":"IN_DS2"},{"id":"ds_resultsCopiCodeco3","key":"IN_DS3"},{"id":"ds_resultsCopiCodeco4","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_send',action:'/ds.lo.edimgnt.SendCarryInAndCarryOutIntendEdiInformationCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_resultsCopino3","key":"IN_DS1"},{"id":"ds_resultsCopino4","key":"IN_DS2"},{"id":"ds_resultsCopiCodeco3","key":"IN_DS3"},{"id":"ds_resultsCopiCodeco4","key":"IN_DS4"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_send_submitdone','ev:submiterror':'scwin.sbm_send_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.arrRtnVal = [];
scwin.gv_strExistTF = "";
scwin.arrParent = [];
scwin.gv_crryinEdiType = "";
scwin.gv_crryoutEdiType = "";
scwin.gv_crryinEdiFlag1 = "";
scwin.btnFlag = "";
scwin.rowFlag = "";
scwin.userClsCd = "";
scwin.EDI_GRPCD_TM = "TM";
scwin.EDI_GRPCD_LG = "LG";
scwin.EDI_GRPCD_KYUNGIN_ICD = "KI";
scwin.EDI_FULL_EMPTY_CLS_FULL = "5";
scwin.EDI_DOC_STS_CLS_ORIG = "9";
scwin.EDI_DOC_STS_CLS_CHG = "4";
scwin.EDI_SND_CLS_CD_SND_COMPLETE = "0";
scwin.EDI_SND_CLS_CD_LATER_SND = "3";
scwin.EDI_SND_CLS_CD_IMPITEM_WARN = "5";
scwin.EDI_SND_CLS_CD_SND_WAIT = "1";
scwin.EDI_TEMPER_CLS_DRY = "DRY";
scwin.EDI_TEMPER_CLS_CEL = "CEL";
scwin.WRK_STP_CD_RAILROAD = "RS";
scwin.CRRYINOUT_EDI_COPI_CODECO = "COPI_CODECO";
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (scwin.params != null) {
    scwin.arrParent = scwin.params.arrParent || [];
    scwin.userClsCd = scwin.params.userClsCd || "";
  }
  scwin.f_OnLoad();
};
scwin.onUdcCompleted = function () {};
scwin.f_OnLoad = async function () {
  if (scwin.arrParent.length > 0) {
    em_odrNo.setValue(scwin.arrParent[0][2]);
    em_wrkStDt.setValue(scwin.arrParent[0][9]);
    em_wrkEndDt.setValue(scwin.arrParent[0][10]);
    em_cntrNo.setValue(scwin.arrParent[0][11]);
    em_dptWrkPlCd.setValue(scwin.arrParent[0][12]);
    em_arvWrkPlCd.setValue(scwin.arrParent[0][13]);
    txt_dptWrkPlNm.setValue(scwin.arrParent[0][14]);
    txt_arvWrkPlNm.setValue(scwin.arrParent[0][15]);
    scwin.gv_crryoutEdiType = scwin.arrParent[0][16];
    scwin.gv_crryinEdiType = scwin.arrParent[0][17];
    scwin.f_Retrieve();
  } else {
    await $c.win.alert($p, "EDI정보를 가져오지 못했습니다");
    return false;
  }
  $c.gus.cfDisableObjects($p, [tb_srchCond]);
  lc_selfCls2.setValue("Y");
  lc_selfCls2.setDisabled(true);
  if (scwin.userClsCd == "05") {
    $c.gus.cfDisableObjects($p, [lc_bondTransVehclYn1, lc_bondTransVehclYn2]);
  }
};
scwin.f_Retrieve = async function (gubun) {
  dma_search.set("qryClsCd", "");
  dma_search.set("transWrkIndictNo", "");
  dma_search.set("odrNo", "");
  dma_search.set("cntrSeq", "");
  dma_search.set("wrkPathSeq", "");
  dma_search.set("wrkStpSeq", "");
  dma_search.set("vehclNo", "");
  dma_search.set("crryoutDt", "");
  dma_search.set("crryoutHh", "");
  dma_search.set("crryinDt", "");
  dma_search.set("crryinHh", "");
  dma_search.set("cntrNo", "");
  dma_search.set("dptWrkPlCd", "");
  dma_search.set("arvWrkPlCd", "");
  dma_search.set("crryoutEdiType", "");
  dma_search.set("crryinEdiType", "");
  dma_search.set("vehclIdCardNo", "");
  dma_search.set("drvNm", "");
  dma_search.set("cntctPl", "");
  dma_search.set("vehclShortCd", "");
  dma_search.set("eqCd", "");
  if (gubun == null || gubun == "" || gubun == 0) {
    ds_resultsCopino1.removeAll();
    ds_resultsCopino2.removeAll();
    scwin.btnFlag = "";
    scwin.rowFlag = "";
    dma_search.set("qryClsCd", scwin.arrParent[0][0]);
    dma_search.set("transWrkIndictNo", scwin.arrParent[0][1]);
    dma_search.set("odrNo", scwin.arrParent[0][2]);
    dma_search.set("cntrSeq", scwin.arrParent[0][3]);
    dma_search.set("wrkPathSeq", scwin.arrParent[0][4]);
    dma_search.set("wrkStpSeq", scwin.arrParent[0][5]);
    dma_search.set("crryoutDt", em_wrkStDt.getValue().trim());
    dma_search.set("crryinDt", em_wrkEndDt.getValue().trim());
    dma_search.set("cntrNo", em_cntrNo.getValue().trim());
    dma_search.set("dptWrkPlCd", em_dptWrkPlCd.getValue().trim());
    dma_search.set("arvWrkPlCd", em_arvWrkPlCd.getValue().trim());
    dma_search.set("crryoutEdiType", scwin.gv_crryoutEdiType);
    dma_search.set("crryinEdiType", scwin.gv_crryinEdiType);
    dma_search.set("vehclNo", scwin.arrParent[0][7]);
    dma_search.set("vehclIdCardNo", scwin.arrParent[0][8]);
    if (scwin.arrParent[0][0] == "1") {
      if (scwin.arrParent[1] != null && scwin.arrParent[1].length > 0) {
        dma_search.set("transWrkIndictNo", scwin.arrParent[1][0]);
        dma_search.set("vehclNo", scwin.arrParent[1][1]);
        dma_search.set("vehclIdCardNo", scwin.arrParent[1][2]);
        dma_search.set("drvNm", scwin.arrParent[1][3]);
        dma_search.set("cntctPl", scwin.arrParent[1][4]);
        dma_search.set("crryoutDt", scwin.arrParent[1][5]);
        dma_search.set("crryoutHh", scwin.arrParent[1][6]);
        dma_search.set("crryinDt", scwin.arrParent[1][7]);
        dma_search.set("crryinHh", scwin.arrParent[1][8]);
        dma_search.set("vehclShortCd", scwin.arrParent[1][9]);
        dma_search.set("eqCd", scwin.arrParent[1][10]);
      }
    }
    await $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.f_bindDataset = function () {
  if (ds_resultsCopino1.getRowCount() > 0) {
    ds_resultsCopino1.setCellData(0, "selfCls", lc_selfCls1.getValue());
    ds_resultsCopino1.setCellData(0, "hanjinSelfCls", lc_hanjinSelfCls1.getValue());
    ds_resultsCopino1.setCellData(0, "tmlVsslPortcnt", em_tmlVsslPortcnt1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "cntrNo", em_cntrNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "startPointCont", em_startPointCont1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "bookingNo", em_bookingNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "blNo", em_blNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "vsslArrvlportYr", em_vsslArrvlportYr1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "admitNo", em_admitNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "xrayRettlPassYn", chb_xrayRettlPassYn1.getValue() != "" ? 1 : 0);
    ds_resultsCopino1.setCellData(0, "doNo", em_doNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "mchtCd", em_mchtCd1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "mchtNm", txt_mchtNm1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "sizTyp", em_sizTyp1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "fullEmptyClsCd", lc_fullEmptyClsCd1.getValue());
    ds_resultsCopino1.setCellData(0, "tsCls", lc_tsCls1.getValue());
    ds_resultsCopino1.setCellData(0, "sealNo", em_sealNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "shpCoCd", em_shpCoCd1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "transWrkIndictNo", em_transWrkIndictNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "vehclNoFrtcarNo", em_vehclNoFrtcarNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "vehclNoFull", em_vehclNoFull1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "vehclCls", lc_vehclCls1.getValue());
    ds_resultsCopino1.setCellData(0, "transCoCd", em_transCoCd1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "bondTransVehclYn", lc_bondTransVehclYn1.getValue());
    ds_resultsCopino1.setCellData(0, "chassisNo", em_chassisNo1.getValue().trim());
    ds_resultsCopino1.setCellData(0, "chassisPosInfo", lc_chassisPosInfo1.getValue());
    ds_resultsCopino1.setCellData(0, "railroadCls", lc_railroadClsOut.getValue());
    ds_resultsCopino1.setCellData(0, "railroadIntendCls", lc_railroadIntendClsOut.getValue());
    ds_resultsCopino1.setCellData(0, "frtcarCls", lc_frtcarClsOut.getValue());
    ds_resultsCopino1.setCellData(0, "icdmoveCls", lc_icdmoveClsOut.getValue());
    ds_resultsCopino1.setCellData(0, "cargoCls", lc_cargoClsOut.getValue());
    ds_resultsCopino1.setCellData(0, "vsslNm", em_vsslNmOut.getValue());
    ds_resultsCopino1.setCellData(0, "portcnt", em_portcntOut.getValue());
    ds_resultsCopino1.setCellData(0, "adminfrtcarYn", lc_frtcarClsOut.getValue());
  }
  if (ds_resultsCopino2.getRowCount() > 0) {
    ds_resultsCopino2.setCellData(0, "selfCls", lc_selfCls2.getValue());
    ds_resultsCopino2.setCellData(0, "tmlVsslPortcnt", em_tmlVsslPortcnt2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "cntrNo", em_cntrNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "bookingNo", em_bookingNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "blNo", em_blNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "mchtCd", em_mchtCd2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "mchtNm", txt_mchtNm2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "iccntctPic", em_ctaNm.getValue().trim());
    ds_resultsCopino2.setCellData(0, "iccntctPl", em_ctaTel.getValue().trim());
    ds_resultsCopino2.setCellData(0, "vsslArrvlportYr", em_vsslArrvlportYr2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "admitNo", em_admitNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "tsCls", lc_tsCls2.getValue());
    ds_resultsCopino2.setCellData(0, "sizTyp", em_sizTyp2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "fullEmptyClsCd", lc_fullEmptyClsCd2.getValue());
    ds_resultsCopino2.setCellData(0, "frzTemper", em_frzTemper2.getValue().trim());
    if (ds_resultsCopino2.getCellData(0, "temperCls") != "") {
      if (em_frzTemper2.getValue().trim() == null || em_frzTemper2.getValue().trim() == "") {
        ds_resultsCopino2.setCellData(0, "temperCls", scwin.EDI_TEMPER_CLS_DRY);
      } else {
        ds_resultsCopino2.setCellData(0, "temperCls", scwin.EDI_TEMPER_CLS_CEL);
      }
    } else {
      ds_resultsCopino2.setCellData(0, "temperCls", "");
    }
    ds_resultsCopino2.setCellData(0, "totWt", em_totWt2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "dchrPort", em_dchrPort2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "overHeight", em_overHeight2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "overWidth", em_overWidth2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "overLength", em_overLength2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "dangerCd", em_dangerCd2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "sealNo", em_sealNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "drtCstmclrncExyn", lc_drtCstmclrncExyn2.getValue());
    ds_resultsCopino2.setCellData(0, "shpCoCd", em_shpCoCd2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "transWrkIndictNo", em_transWrkIndictNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "vehclNoFrtcarNo", em_vehclNoFrtcarNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "vehclNoFull", em_vehclNoFull2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "vehclCls", lc_vehclCls2.getValue());
    ds_resultsCopino2.setCellData(0, "transCoCd", em_transCoCd2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "bondTransVehclYn", lc_bondTransVehclYn2.getValue());
    ds_resultsCopino2.setCellData(0, "chassisNo", em_chassisNo2.getValue().trim());
    ds_resultsCopino2.setCellData(0, "chassisPosInfo", lc_chassisPosInfo2.getValue());
    ds_resultsCopino2.setCellData(0, "railroadCls", lc_railroadClsIn.getValue());
    ds_resultsCopino2.setCellData(0, "railroadIntendCls", lc_railroadIntendClsIn.getValue());
    ds_resultsCopino2.setCellData(0, "frtcarCls", lc_frtcarClsIn.getValue());
    ds_resultsCopino2.setCellData(0, "icdmoveCls", lc_icdmoveClsIn.getValue());
    ds_resultsCopino2.setCellData(0, "cargoCls", lc_cargoClsIn.getValue());
    ds_resultsCopino2.setCellData(0, "vsslNm", em_vsslNmIn.getValue());
    ds_resultsCopino2.setCellData(0, "portcnt", em_portcntIn.getValue());
    ds_resultsCopino2.setCellData(0, "adminfrtcarYn", lc_frtcarClsIn.getValue());
    if (txt_mchtNm2.getValue().trim() == null || txt_mchtNm2.getValue().trim() == "") {
      ds_resultsCopino2.setCellData(0, "mchtNm", em_mchtNmIn.getValue());
    }
    ds_resultsCopino2.setCellData(0, "doNo", em_doNo2.getValue().trim());
  }
  if (ds_resultsCopiCodeco1.getRowCount() > 0) {
    ds_resultsCopiCodeco1.setCellData(0, "cntrNo", em_cntrNo3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "sizTyp", em_sizTyp3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "fullEmptyClsCd", lc_fullEmptyClsCd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "transCls", lc_transCls3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "sealNo", em_sealNo3.getValue());
    if (ds_resultsCopiCodeco1.getCellData(0, "cls") == "DT") {
      ds_resultsCopiCodeco1.setCellData(0, "blNo", em_blNo31.getValue());
    } else {
      ds_resultsCopiCodeco1.setCellData(0, "blNo", em_blNo3.getValue());
    }
    ds_resultsCopiCodeco1.setCellData(0, "bookingNo", em_bookingNo3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "shpCoCd", em_shpCoCd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "expLicenseNo", em_expLicenseNo3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "cstmclrncCls", em_cstmclrncCls3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "portcnt", em_portcnt3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "licenseFdd", em_licenseFdd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "dptDepot", em_dptDepot3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "dptRgn", em_dptRgn3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "arvDepot", em_arvDepot3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "arvRgn", em_arvRgn3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "frzTemper", em_frzTemper3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "transCls", lc_transCls3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "dangerCd", em_dangerCd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "hndlCd", em_hndlCd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "tsCls", lc_tsCls3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "mchtCd", em_mchtCd3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "unqItm", em_unqItm3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "railroadCore", lc_railroadCore3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "railroadReqDt", em_railroadReqDt3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "railroadReqHh", lc_railroadReqHh3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "drtOnYn", lc_drtOnYn3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "arvRailroadPlc", lc_arvRailroadPlc3.getValue());
    ds_resultsCopiCodeco1.setCellData(0, "consignee", em_consignee3.getValue());
  }
  if (ds_resultsCopiCodeco2.getRowCount() > 0) {
    ds_resultsCopiCodeco2.setCellData(0, "cntrNo", em_cntrNo4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "sizTyp", em_sizTyp4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "fullEmptyClsCd", lc_fullEmptyClsCd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "transCls", lc_transCls4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "sealNo", em_sealNo4.getValue());
    if (ds_resultsCopiCodeco2.getCellData(0, "cls") == "DT") {
      ds_resultsCopiCodeco2.setCellData(0, "blNo", em_blNo41.getValue());
    } else {
      ds_resultsCopiCodeco2.setCellData(0, "blNo", em_blNo4.getValue());
    }
    ds_resultsCopiCodeco2.setCellData(0, "bookingNo", em_bookingNo4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "shpCoCd", em_shpCoCd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "expLicenseNo", em_expLicenseNo4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "cstmclrncCls", em_cstmclrncCls4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "portcnt", em_portcnt4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "licenseFdd", em_licenseFdd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "dptDepot", em_dptDepot4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "dptRgn", em_dptRgn4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "arvDepot", em_arvDepot4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "arvRgn", em_arvRgn4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "frzTemper", em_frzTemper4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "transCls", lc_transCls4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "dangerCd", em_dangerCd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "hndlCd", em_hndlCd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "tsCls", lc_tsCls4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "mchtCd", em_mchtCd4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "unqItm", em_unqItm4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "railroadCore", lc_railroadCore4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "railroadReqDt", em_railroadReqDt4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "railroadReqHh", lc_railroadReqHh4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "drtOnYn", lc_drtOnYn4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "arvRailroadPlc", lc_arvRailroadPlc4.getValue());
    ds_resultsCopiCodeco2.setCellData(0, "consignee", em_consignee4.getValue());
  }
};
scwin.f_validate = async function () {
  if (ds_resultsCopino1.getRowCount() > 0 && chk_crryOutCopino.getValue() != "") {
    let chk = await $c.gus.cfValidate($p, [tb_crryOutCopino]);
    if (!chk) {
      return false;
    }
    if (ds_resultsCopino1.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopino1.getCellData(0, "vehclIdCardNo") == "") {
      await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [차량ID카드번호]는 필수입니다");
      return false;
    }
    if (ds_resultsCopino1.getCellData(0, "fullEmptyClsCd") == scwin.EDI_FULL_EMPTY_CLS_FULL && ds_resultsCopino1.getCellData(0, "sealNo") == "") {
      await $c.gus.cfAlertMsg($p, "[E/F 구분]이 FULL 일때 [SEAL NO]는 필수입니다");
      return false;
    }
    let v_features = "copyHeader=yes,rowFrom=1,rowCnt=1";
    $c.gus.cfCopyDataSet($p, ds_resultsCopino1, ds_resultsCopino3, v_features);
  }
  if (ds_resultsCopino2.getRowCount() > 0 && chk_crryInCopino.getValue() != "") {
    let chk = await $c.gus.cfValidate($p, [tb_crryInCopino]);
    if (!chk) {
      return false;
    }
    if (ds_resultsCopino2.getCellData(0, "fullEmptyClsCd") == scwin.EDI_FULL_EMPTY_CLS_FULL && (ds_resultsCopino2.getCellData(0, "totWt") == 0 || ds_resultsCopino2.getCellData(0, "totWt") == "")) {
      await $c.gus.cfAlertMsg($p, "[E/F 구분]이 FULL 일때 [WEIGHT]는 필수입니다");
      return false;
    }
    if (ds_resultsCopino2.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopino2.getCellData(0, "vehclIdCardNo") == "") {
      await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [차량ID카드번호]는 필수입니다");
      return false;
    }
    if (ds_resultsCopino2.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_TM && ds_resultsCopino2.getCellData(0, "tmlVsslPortcnt") == "") {
      await $c.gus.cfAlertMsg($p, "[사전정보그룹구분]이 터미널 일때 [모선/항차]는 필수입니다");
      return false;
    }
    if (ds_resultsCopino2.getCellData(0, "fullEmptyClsCd") == scwin.EDI_FULL_EMPTY_CLS_FULL && ds_resultsCopino2.getCellData(0, "sealNo") == "") {
      await $c.gus.cfAlertMsg($p, "[E/F 구분]이 FULL 일때 [SEAL NO]는 필수입니다");
      return false;
    }
    if (em_doNo2.getValue() == "") {
      await $c.gus.cfAlertMsg($p, "[D/O NO]는 필수입니다");
      return false;
    }
    let v_features = "copyHeader=yes,rowFrom=1,rowCnt=1";
    $c.gus.cfCopyDataSet($p, ds_resultsCopino2, ds_resultsCopino4, v_features);
  }
  if (ds_resultsCopiCodeco1.getRowCount() > 0 && chk_crryOutCopiCodeco.getValue() != "") {
    let chk = await $c.gus.cfValidate($p, [tb_crryOutCopiCodeco]);
    if (!chk) {
      return false;
    }
    if (ds_resultsCopiCodeco1.getCellData(0, "cls") == "DT") {
      if ($c.gus.cfIsNull($p, ds_resultsCopiCodeco1.getCellData(0, "cntrNo"))) {
        await $c.gus.cfAlertMsg($p, "작업지역이 [대한통운] 일경우 [컨테이너번호]는 필수 입니다.");
        return false;
      }
    }
    let v_features = "copyHeader=yes,rowFrom=1,rowCnt=1";
    $c.gus.cfCopyDataSet($p, ds_resultsCopiCodeco1, ds_resultsCopiCodeco3, v_features);
  }
  if (ds_resultsCopiCodeco2.getRowCount() > 0 && chk_crryInCopiCodeco.getValue() != "") {
    let chk = await $c.gus.cfValidate($p, [tb_crryInCopiCodeco]);
    if (!chk) {
      return false;
    }
    if (ds_resultsCopiCodeco2.getCellData(0, "cls") == "DT") {
      if ($c.gus.cfIsNull($p, ds_resultsCopiCodeco2.getCellData(0, "cntrNo"))) {
        await $c.gus.cfAlertMsg($p, "작업지역이 [대한통운] 일경우 [컨테이너번호]는 필수 입니다.");
        return false;
      }
    }
    let v_features = "copyHeader=yes,rowFrom=1,rowCnt=1";
    $c.gus.cfCopyDataSet($p, ds_resultsCopiCodeco2, ds_resultsCopiCodeco4, v_features);
  }
  return true;
};
scwin.f_save = async function () {
  if (ds_resultsCopino1.getRowCount() == 0 && ds_resultsCopino2.getRowCount() == 0 && ds_resultsCopiCodeco1.getRowCount() == 0 && ds_resultsCopiCodeco2.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  scwin.f_bindDataset();
  if (!(await scwin.f_validate())) {
    return;
  }
  if (ds_resultsCopino3.getRowCount() == 0 && ds_resultsCopino4.getRowCount() == 0 && ds_resultsCopiCodeco3.getRowCount() == 0 && ds_resultsCopiCodeco4.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  if (ds_resultsCopino3.getRowCount() > 0) {
    if (ds_resultsCopino3.getCellData(0, "docStsCls") == "") {
      ds_resultsCopino3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopino3.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopino3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopino3.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_LATER_SND);
  }
  if (ds_resultsCopino4.getRowCount() > 0) {
    if (ds_resultsCopino4.getCellData(0, "docStsCls") == "") {
      ds_resultsCopino4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopino4.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopino4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopino4.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_LATER_SND);
  }
  if (ds_resultsCopiCodeco3.getRowCount() > 0) {
    if (ds_resultsCopiCodeco3.getCellData(0, "docStsCls") == "") {
      ds_resultsCopiCodeco3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopiCodeco3.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopiCodeco3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopiCodeco3.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_LATER_SND);
  }
  if (ds_resultsCopiCodeco4.getRowCount() > 0) {
    if (ds_resultsCopiCodeco4.getCellData(0, "docStsCls") == "") {
      ds_resultsCopiCodeco4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopiCodeco4.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopiCodeco4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopiCodeco4.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_LATER_SND);
  }
  let chk = await $c.win.confirm($p, "저장하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  } else {
    ds_resultsCopino3.removeAll();
    ds_resultsCopino4.removeAll();
    ds_resultsCopiCodeco3.removeAll();
    ds_resultsCopiCodeco4.removeAll();
  }
};
scwin.f_transfer = async function () {
  if (ds_resultsCopino1.getRowCount() == 0 && ds_resultsCopino2.getRowCount() == 0 && ds_resultsCopiCodeco1.getRowCount() == 0 && ds_resultsCopiCodeco2.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "전송할 데이터가 없습니다");
    return;
  }
  scwin.f_bindDataset();
  if (!(await scwin.f_validate())) {
    return;
  }
  if (ds_resultsCopino3.getRowCount() == 0 && ds_resultsCopino4.getRowCount() == 0 && ds_resultsCopiCodeco3.getRowCount() == 0 && ds_resultsCopiCodeco4.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, "저장할 데이터가 없습니다");
    return;
  }
  if (ds_resultsCopino3.getRowCount() > 0) {
    if (ds_resultsCopino3.getCellData(0, "docStsCls") == "") {
      ds_resultsCopino3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopino3.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopino3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopino3.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
  }
  if (ds_resultsCopino4.getRowCount() > 0) {
    if (ds_resultsCopino4.getCellData(0, "docStsCls") == "") {
      ds_resultsCopino4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopino4.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopino4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopino4.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
  }
  if (ds_resultsCopiCodeco3.getRowCount() > 0) {
    if (ds_resultsCopiCodeco3.getCellData(0, "docStsCls") == "") {
      ds_resultsCopiCodeco3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopiCodeco3.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopiCodeco3.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopiCodeco3.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
  }
  if (ds_resultsCopiCodeco4.getRowCount() > 0) {
    if (ds_resultsCopiCodeco4.getCellData(0, "docStsCls") == "") {
      ds_resultsCopiCodeco4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_ORIG);
    }
    if (ds_resultsCopiCodeco4.getCellData(0, "sndClsCd") == scwin.EDI_SND_CLS_CD_SND_COMPLETE) {
      ds_resultsCopiCodeco4.setCellData(0, "docStsCls", scwin.EDI_DOC_STS_CLS_CHG);
    }
    ds_resultsCopiCodeco4.setCellData(0, "sndClsCd", scwin.EDI_SND_CLS_CD_SND_WAIT);
  }
  let chk = await $c.win.confirm($p, "전송하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_send);
  } else {
    ds_resultsCopino3.removeAll();
    ds_resultsCopino4.removeAll();
    ds_resultsCopiCodeco3.removeAll();
    ds_resultsCopiCodeco4.removeAll();
  }
};
scwin.f_rtnValue = function () {
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_WinClose = function () {
  scwin.arrRtnVal[0] = "N/A";
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList;
  switch (disGubun) {
    case 2:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, em_dptWrkPlCd, txt_dptWrkPlNm);
      break;
    case 3:
      rtnList = $c.gus.cfCommonPopUp($p, 'retrieveWrkPlInfo', pCode, pName, pClose, null, null, null, null, ",,,,,2", null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, em_arvWrkPlCd, txt_arvWrkPlNm);
      break;
    case 4:
      if (ds_resultsCopino1.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_LG) {
        let pWhere = "OSIDE_CD2," + ds_resultsCopino1.getCellData(0, "transDstFrom") + ",RCVR,COPINO";
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, null);
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          em_mchtCd1.setValue(rtnList[2]);
          txt_mchtNm1.setValue(rtnList[3]);
        } else {
          em_mchtCd1.setValue("");
          txt_mchtNm1.setValue("");
        }
      } else {
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveBilgMchtList', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
        $c.gus.cfSetReturnValue($p, rtnList, em_mchtCd1, txt_mchtNm1);
      }
      break;
    case 5:
      if (ds_resultsCopino2.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_LG) {
        let pWhere = "OSIDE_CD2," + ds_resultsCopino2.getCellData(0, "transDstFrom") + ",RCVR,COPINO";
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveEdiMappingList', pCode, pName, pClose, null, null, null, null, pWhere, null, null, null, null, null, pAllSearch, null);
        if (!$c.gus.cfIsNull($p, rtnList) && rtnList[0] != "N/A") {
          em_mchtCd2.setValue(rtnList[2]);
          txt_mchtNm2.setValue(rtnList[3]);
        } else {
          em_mchtCd2.setValue("");
          txt_mchtNm2.setValue("");
        }
      } else {
        rtnList = $c.gus.cfCommonPopUp($p, 'retrieveBilgMchtList', pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
        $c.gus.cfSetReturnValue($p, rtnList, em_mchtCd2, txt_mchtNm2);
      }
      break;
  }
};
scwin.f_openBilgMchtListPopUp = function (pCode, pName, gubun) {
  if (gubun == 1) {
    pName.setValue("");
  } else if (gubun == 2) {
    pCode.setValue("");
  }
  let rtnList = $c.gus.cfCommonPopUp($p, 'retrieveBilgMchtList', pCode.getValue().trim(), pName.getValue().trim(), 'T', null, null, null, null, null, null, null, null, null, null, 'T', null);
  $c.gus.cfSetReturnValue($p, rtnList, pCode, pName);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_chkOpenCommonPopUp2 = function (inObj, pairObj, disGubun, isCode, refObj) {
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    $c.gus.cfClearPairObj($p, refObj);
    return;
  }
  $c.gus.cfClearPairObj($p, pairObj);
  $c.gus.cfClearPairObj($p, refObj);
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_disableCompCopiCodeco = function (gubun, inout) {
  if (gubun == "HY") {
    if (inout == 1) {
      $c.gus.cfDisableObjects($p, [lc_drtOnYn3, lc_railroadCore3, em_railroadReqDt3, lc_railroadReqHh3, em_consignee3, lc_arvRailroadPlc3, em_blNo31]);
    } else {
      $c.gus.cfDisableObjects($p, [lc_drtOnYn4, lc_railroadCore4, em_railroadReqDt4, lc_railroadReqHh4, em_consignee4, lc_arvRailroadPlc4, em_blNo41]);
    }
  } else if (gubun == "DT") {
    if (inout == 1) {
      $c.gus.cfDisableObjects($p, [img_mchtCd3, em_mchtCd3, txt_mchtNm3, em_dptDepot3, em_dptRgn3, em_arvDepot3, em_arvRgn3, em_unqItm3, lc_drtOnYn3, lc_transCls3, lc_railroadCore3, img_railroadReqDt3, em_railroadReqDt3, lc_railroadReqHh3, em_consignee3, lc_arvRailroadPlc3, lc_tsCls3, em_expLicenseNo3, img_licenseFdd3, em_licenseFdd3, em_blNo3]);
    } else {
      $c.gus.cfDisableObjects($p, [img_mchtCd4, em_mchtCd4, txt_mchtNm4, em_dptDepot4, em_dptRgn4, em_arvDepot4, em_arvRgn4, em_unqItm4, lc_drtOnYn4, lc_transCls4, lc_railroadCore4, img_railroadReqDt4, em_railroadReqDt4, lc_railroadReqHh4, em_consignee4, lc_arvRailroadPlc4, lc_tsCls4, em_expLicenseNo4, img_licenseFdd4, em_licenseFdd4, em_blNo4]);
    }
  } else {
    if (inout == 1) {
      $c.gus.cfDisableObjects($p, [lc_drtOnYn3, lc_tsCls3, em_expLicenseNo3, em_blNo31]);
    } else {
      $c.gus.cfDisableObjects($p, [lc_drtOnYn4, lc_tsCls4, em_expLicenseNo4, em_blNo41]);
    }
  }
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_srchCond);
};
scwin.f_switchTransYn = function (gubun) {
  if (gubun == 1) {
    if (chk_crryOutCopino.getValue() != "") {
      $c.gus.cfEnableObjects($p, [tb_crryOutCopino]);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryOutCopino]);
    }
  } else if (gubun == 2) {
    if (chk_crryInCopino.getValue() != "") {
      $c.gus.cfEnableObjects($p, [tb_crryInCopino]);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryInCopino]);
    }
  } else if (gubun == 3) {
    if (chk_crryOutCopiCodeco.getValue() != "") {
      $c.gus.cfEnableObjects($p, [tb_crryOutCopiCodeco]);
      scwin.f_disableCompCopiCodeco(ds_resultsCopiCodeco1.getCellData(0, "cls"), 1);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryOutCopiCodeco]);
    }
  } else if (gubun == 4) {
    if (chk_crryInCopiCodeco.getValue() != "") {
      $c.gus.cfEnableObjects($p, [tb_crryInCopiCodeco]);
      scwin.f_disableCompCopiCodeco(ds_resultsCopiCodeco2.getCellData(0, "cls"), 2);
    } else {
      $c.gus.cfDisableObjects($p, [tb_crryInCopiCodeco]);
    }
  }
  if (scwin.userClsCd == "05") {
    $c.gus.cfDisableObjects($p, [lc_bondTransVehclYn1, lc_bondTransVehclYn2]);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_WinClose();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_send_submitdone = async function (e) {
  scwin.rowFlag = "";
  await $c.gus.cfAlertMsg($p, "성공적으로 전송하였습니다");
  scwin.f_WinClose();
};
scwin.sbm_send_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_retrieve_submitdone = function (e) {};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_resultsCopino_onloadcompleted = function (rowCnt) {
  if (rowCnt == 0) {
    return;
  }
  ds_resultsCopino1.removeAll();
  ds_resultsCopino2.removeAll();
  let v_bIsCrryOut = false;
  let v_bIsCrryIn = false;
  let v_features = "";
  for (let i = 0; i < ds_resultsCopino.getRowCount(); i++) {
    if (ds_resultsCopino.getCellData(i, "crryinCrryoutCls") == "1") {
      v_bIsCrryOut = true;
    }
    if (ds_resultsCopino.getCellData(i, "crryinCrryoutCls") == "2") {
      v_bIsCrryIn = true;
    }
    if (ds_resultsCopino.getCellData(i, "crryinCrryoutCls") == "1") {
      v_features = "copyHeader=yes,rowFrom=" + (i + 1) + ",rowCnt=1";
      $c.gus.cfCopyDataSet($p, ds_resultsCopino, ds_resultsCopino1, v_features);

      // TODO: td_transDstFromNm1 innerText 설정 — WebSquare textbox로 대체 필요
      // TODO: td_transDstToNm1 innerText 설정
      lc_selfCls1.setValue(ds_resultsCopino1.getCellData(0, "selfCls"));
      lc_hanjinSelfCls1.setValue(ds_resultsCopino1.getCellData(0, "hanjinSelfCls"));
      em_tmlVsslPortcnt1.setValue(ds_resultsCopino1.getCellData(0, "tmlVsslPortcnt"));
      em_cntrNo1.setValue(ds_resultsCopino1.getCellData(0, "cntrNo"));
      em_startPointCont1.setValue(ds_resultsCopino1.getCellData(0, "startPointCont"));
      em_bookingNo1.setValue(ds_resultsCopino1.getCellData(0, "bookingNo"));
      em_blNo1.setValue(ds_resultsCopino1.getCellData(0, "blNo"));
      em_vsslArrvlportYr1.setValue(ds_resultsCopino1.getCellData(0, "vsslArrvlportYr"));
      em_admitNo1.setValue(ds_resultsCopino1.getCellData(0, "admitNo"));
      if (ds_resultsCopino1.getCellData(0, "xrayRettlPassYn") == "1" || ds_resultsCopino1.getCellData(0, "xrayRettlPassYn") == 1) {
        chb_xrayRettlPassYn1.setValue("1");
      } else {
        chb_xrayRettlPassYn1.setValue("");
      }
      em_doNo1.setValue(ds_resultsCopino1.getCellData(0, "doNo"));
      em_mchtCd1.setValue(ds_resultsCopino1.getCellData(0, "mchtCd"));
      txt_mchtNm1.setValue(ds_resultsCopino1.getCellData(0, "mchtNm"));
      em_sizTyp1.setValue(ds_resultsCopino1.getCellData(0, "sizTyp"));
      lc_fullEmptyClsCd1.setValue(ds_resultsCopino1.getCellData(0, "fullEmptyClsCd"));
      lc_tsCls1.setValue(ds_resultsCopino1.getCellData(0, "tsCls"));
      em_sealNo1.setValue(ds_resultsCopino1.getCellData(0, "sealNo"));
      // TODO: td_sndDtHh1 전송일시 표시
      em_shpCoCd1.setValue(ds_resultsCopino1.getCellData(0, "shpCoCd"));
      em_transWrkIndictNo1.setValue(ds_resultsCopino1.getCellData(0, "transWrkIndictNo"));
      em_vehclNoFrtcarNo1.setValue(ds_resultsCopino1.getCellData(0, "vehclNoFrtcarNo"));
      em_vehclNoFull1.setValue(ds_resultsCopino1.getCellData(0, "vehclNoFull"));
      lc_vehclCls1.setValue(ds_resultsCopino1.getCellData(0, "vehclCls"));
      em_transCoCd1.setValue(ds_resultsCopino1.getCellData(0, "transCoCd"));
      if ((ds_resultsCopino1.getCellData(0, "transDstFrom") == "6C01" || ds_resultsCopino1.getCellData(0, "transDstFrom") == "6P13") && (ds_resultsCopino1.getCellData(0, "transDstTo") == "6C01" || ds_resultsCopino1.getCellData(0, "transDstTo") == "6P13")) {
        lc_bondTransVehclYn1.setValue(ds_resultsCopino1.getCellData(0, "bondTransVehclYn"));
      } else {
        if (ds_resultsCopino1.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_SND_COMPLETE && ds_resultsCopino1.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_LATER_SND && ds_resultsCopino1.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_IMPITEM_WARN && ds_resultsCopino1.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_SND_WAIT) {
          lc_bondTransVehclYn1.setValue("N");
        } else {
          lc_bondTransVehclYn1.setValue(ds_resultsCopino1.getCellData(0, "bondTransVehclYn"));
        }
      }
      em_chassisNo1.setValue(ds_resultsCopino1.getCellData(0, "chassisNo"));
      lc_chassisPosInfo1.setValue(ds_resultsCopino1.getCellData(0, "chassisPosInfo"));
      txa_reason1.setValue(ds_resultsCopino1.getCellData(0, "rmk"));
      lc_railroadClsOut.setValue(ds_resultsCopino1.getCellData(0, "railroadCls"));
      lc_railroadIntendClsOut.setValue(ds_resultsCopino1.getCellData(0, "railroadIntendCls"));
      lc_frtcarClsOut.setValue(ds_resultsCopino1.getCellData(0, "adminfrtcarYn"));
      lc_icdmoveClsOut.setValue(ds_resultsCopino1.getCellData(0, "icdmoveCls"));
      lc_cargoClsOut.setValue(ds_resultsCopino1.getCellData(0, "cargoCls"));
      em_vsslNmOut.setValue(ds_resultsCopino1.getCellData(0, "vsslNm"));
      em_portcntOut.setValue(ds_resultsCopino1.getCellData(0, "portcnt"));

      // TODO: div_sndClsCd1 전송상태 표시

      if (ds_resultsCopino1.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopino1.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD) {
        $c.gus.cfDisableObjects($p, [em_vehclNoFrtcarNo1]);
      }
    }
    if (ds_resultsCopino.getCellData(i, "crryinCrryoutCls") == "2") {
      v_features = "copyHeader=yes,rowFrom=" + (i + 1) + ",rowCnt=1";
      $c.gus.cfCopyDataSet($p, ds_resultsCopino, ds_resultsCopino2, v_features);

      // TODO: td_transDstToNm2, td_transDstFromNm2 innerText 설정
      lc_selfCls2.setValue(ds_resultsCopino2.getCellData(0, "selfCls"));
      em_tmlVsslPortcnt2.setValue(ds_resultsCopino2.getCellData(0, "tmlVsslPortcnt"));
      em_cntrNo2.setValue(ds_resultsCopino2.getCellData(0, "cntrNo"));
      em_bookingNo2.setValue(ds_resultsCopino2.getCellData(0, "bookingNo"));
      em_blNo2.setValue(ds_resultsCopino2.getCellData(0, "blNo"));
      em_mchtCd2.setValue(ds_resultsCopino2.getCellData(0, "mchtCd"));
      txt_mchtNm2.setValue(ds_resultsCopino2.getCellData(0, "mchtNm"));
      em_ctaNm.setValue(ds_resultsCopino2.getCellData(0, "iccntctPic"));
      em_ctaTel.setValue(ds_resultsCopino2.getCellData(0, "iccntctPl"));
      em_vsslArrvlportYr2.setValue(ds_resultsCopino2.getCellData(0, "vsslArrvlportYr"));
      em_admitNo2.setValue(ds_resultsCopino2.getCellData(0, "admitNo"));
      lc_tsCls2.setValue(ds_resultsCopino2.getCellData(0, "tsCls"));
      em_sizTyp2.setValue(ds_resultsCopino2.getCellData(0, "sizTyp"));
      lc_fullEmptyClsCd2.setValue(ds_resultsCopino2.getCellData(0, "fullEmptyClsCd"));
      em_frzTemper2.setValue(ds_resultsCopino2.getCellData(0, "frzTemper"));
      // TODO: td_frzTemper2 temperCls 표시
      em_totWt2.setValue(ds_resultsCopino2.getCellData(0, "totWt"));
      em_dchrPort2.setValue(ds_resultsCopino2.getCellData(0, "dchrPort"));
      em_overHeight2.setValue(ds_resultsCopino2.getCellData(0, "overHeight"));
      em_overWidth2.setValue(ds_resultsCopino2.getCellData(0, "overWidth"));
      em_overLength2.setValue(ds_resultsCopino2.getCellData(0, "overLength"));
      em_dangerCd2.setValue(ds_resultsCopino2.getCellData(0, "dangerCd"));
      em_sealNo2.setValue(ds_resultsCopino2.getCellData(0, "sealNo"));
      lc_drtCstmclrncExyn2.setValue(ds_resultsCopino2.getCellData(0, "drtCstmclrncExyn"));
      // TODO: td_sndDtHh2 전송일시 표시
      em_shpCoCd2.setValue(ds_resultsCopino2.getCellData(0, "shpCoCd"));
      em_transWrkIndictNo2.setValue(ds_resultsCopino2.getCellData(0, "transWrkIndictNo"));
      em_vehclNoFrtcarNo2.setValue(ds_resultsCopino2.getCellData(0, "vehclNoFrtcarNo"));
      em_vehclNoFull2.setValue(ds_resultsCopino2.getCellData(0, "vehclNoFull"));
      lc_vehclCls2.setValue(ds_resultsCopino2.getCellData(0, "vehclCls"));
      em_transCoCd2.setValue(ds_resultsCopino2.getCellData(0, "transCoCd"));
      if ((ds_resultsCopino2.getCellData(0, "transDstFrom") == "6C01" || ds_resultsCopino2.getCellData(0, "transDstFrom") == "6P13") && (ds_resultsCopino2.getCellData(0, "transDstTo") == "6C01" || ds_resultsCopino2.getCellData(0, "transDstTo") == "6P13")) {
        lc_bondTransVehclYn2.setValue(ds_resultsCopino2.getCellData(0, "bondTransVehclYn"));
      } else {
        if (ds_resultsCopino2.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_SND_COMPLETE && ds_resultsCopino2.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_LATER_SND && ds_resultsCopino2.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_IMPITEM_WARN && ds_resultsCopino2.getCellData(0, "sndClsCd") != scwin.EDI_SND_CLS_CD_SND_WAIT) {
          lc_bondTransVehclYn2.setValue("N");
        } else {
          lc_bondTransVehclYn2.setValue(ds_resultsCopino2.getCellData(0, "bondTransVehclYn"));
        }
      }
      em_chassisNo2.setValue(ds_resultsCopino2.getCellData(0, "chassisNo"));
      lc_chassisPosInfo2.setValue(ds_resultsCopino2.getCellData(0, "chassisPosInfo"));
      txa_reason2.setValue(ds_resultsCopino2.getCellData(0, "rmk"));
      lc_railroadClsIn.setValue(ds_resultsCopino2.getCellData(0, "railroadCls"));
      lc_railroadIntendClsIn.setValue(ds_resultsCopino2.getCellData(0, "railroadIntendCls"));
      lc_frtcarClsIn.setValue(ds_resultsCopino2.getCellData(0, "adminfrtcarYn"));
      lc_icdmoveClsIn.setValue(ds_resultsCopino2.getCellData(0, "icdmoveCls"));
      lc_cargoClsIn.setValue(ds_resultsCopino2.getCellData(0, "cargoCls"));
      em_vsslNmIn.setValue(ds_resultsCopino2.getCellData(0, "vsslNm"));
      em_portcntIn.setValue(ds_resultsCopino2.getCellData(0, "portcnt"));
      em_mchtNmIn.setValue(ds_resultsCopino2.getCellData(0, "mchtNm"));
      em_doNo2.setValue(ds_resultsCopino2.getCellData(0, "doNo"));

      // TODO: div_sndClsCd2 전송상태 표시

      if (ds_resultsCopino2.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopino2.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD) {
        $c.gus.cfDisableObjects($p, [em_vehclNoFrtcarNo2]);
      }
    }
  }
  if (v_bIsCrryOut) {
    $c.gus.cfEnableObjects($p, [tb_crryOutCopino, chk_crryOutCopino]);
    chk_crryOutCopino.setValue("1");
    txa_reason1.setReadOnly(true);
  } else {
    $c.gus.cfDisableObjects($p, [tb_crryOutCopino, chk_crryOutCopino]);
    chk_crryOutCopino.setValue("");
  }
  if (v_bIsCrryIn) {
    $c.gus.cfEnableObjects($p, [tb_crryInCopino, chk_crryInCopino]);
    chk_crryInCopino.setValue("1");
    txa_reason2.setReadOnly(true);
  } else {
    $c.gus.cfDisableObjects($p, [tb_crryInCopino, chk_crryInCopino]);
    chk_crryInCopino.setValue("");
  }
  if (!(ds_resultsCopino.getCellData(0, "transDstFrom") == "4R01" || ds_resultsCopino.getCellData(0, "transDstFrom") == "4C02" || ds_resultsCopino.getCellData(0, "transDstFrom") == "4C03")) {
    $c.gus.cfDisableObjects($p, [tb_kiIcdOut]);
  }
  if (!(ds_resultsCopino.getCellData(0, "transDstTo") == "4R01" || ds_resultsCopino.getCellData(0, "transDstTo") == "4C02" || ds_resultsCopino.getCellData(0, "transDstTo") == "4C03")) {
    $c.gus.cfDisableObjects($p, [tb_kiIcdIn]);
  }
  if (!(ds_resultsCopino.getCellData(0, "transDstFrom") == "6P10" || ds_resultsCopino.getCellData(0, "transDstFrom") == "6C09")) {
    $c.gus.cfDisableObjects($p, [tb_dpctOut]);
  }
  if (!(ds_resultsCopino.getCellData(0, "transDstTo") == "6P10" || ds_resultsCopino.getCellData(0, "transDstTo") == "6C09")) {
    $c.gus.cfDisableObjects($p, [tb_dpctIn]);
  }
  if (scwin.userClsCd == "05") {
    $c.gus.cfDisableObjects($p, [lc_bondTransVehclYn1, lc_bondTransVehclYn2]);
  }
};
scwin.ds_resultsCopiCodeco_onloadcompleted = function (rowCnt) {
  if (rowCnt == 0) {
    return;
  }
  ds_resultsCopiCodeco1.removeAll();
  ds_resultsCopiCodeco2.removeAll();
  let v_bIsCrryOut = false;
  let v_bIsCrryIn = false;
  let v_features = "";
  for (let i = 0; i < ds_resultsCopiCodeco.getRowCount(); i++) {
    if (ds_resultsCopiCodeco.getCellData(i, "crryinCrryoutCls") == "1") {
      v_bIsCrryOut = true;
    }
    if (ds_resultsCopiCodeco.getCellData(i, "crryinCrryoutCls") == "2") {
      v_bIsCrryIn = true;
    }
    if (ds_resultsCopiCodeco.getCellData(i, "crryinCrryoutCls") == "1") {
      v_features = "copyHeader=yes,rowFrom=" + (i + 1) + ",rowCnt=1";
      $c.gus.cfCopyDataSet($p, ds_resultsCopiCodeco, ds_resultsCopiCodeco1, v_features);

      // TODO: td_cls3, td_expimpClsCd3, td_wrkPlCd3 innerText 설정
      em_cntrNo3.setValue(ds_resultsCopiCodeco1.getCellData(0, "cntrNo"));
      em_sizTyp3.setValue(ds_resultsCopiCodeco1.getCellData(0, "sizTyp"));
      lc_fullEmptyClsCd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "fullEmptyClsCd"));
      lc_transCls3.setValue(ds_resultsCopiCodeco1.getCellData(0, "transCls"));
      em_sealNo3.setValue(ds_resultsCopiCodeco1.getCellData(0, "sealNo"));
      if (ds_resultsCopiCodeco1.getCellData(0, "cls") == "DT") {
        em_blNo31.setValue(ds_resultsCopiCodeco1.getCellData(0, "blNo"));
      } else {
        em_blNo3.setValue(ds_resultsCopiCodeco1.getCellData(0, "blNo"));
      }
      em_bookingNo3.setValue(ds_resultsCopiCodeco1.getCellData(0, "bookingNo"));
      em_shpCoCd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "shpCoCd"));
      em_expLicenseNo3.setValue(ds_resultsCopiCodeco1.getCellData(0, "expLicenseNo"));
      em_cstmclrncCls3.setValue(ds_resultsCopiCodeco1.getCellData(0, "cstmclrncCls"));
      em_portcnt3.setValue(ds_resultsCopiCodeco1.getCellData(0, "portcnt"));
      em_licenseFdd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "licenseFdd"));
      em_dptDepot3.setValue(ds_resultsCopiCodeco1.getCellData(0, "dptDepot"));
      em_dptRgn3.setValue(ds_resultsCopiCodeco1.getCellData(0, "dptRgn"));
      em_arvDepot3.setValue(ds_resultsCopiCodeco1.getCellData(0, "arvDepot"));
      em_arvRgn3.setValue(ds_resultsCopiCodeco1.getCellData(0, "arvRgn"));
      em_frzTemper3.setValue(ds_resultsCopiCodeco1.getCellData(0, "frzTemper"));
      lc_transCls3.setValue(ds_resultsCopiCodeco1.getCellData(0, "transCls"));
      em_dangerCd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "dangerCd"));
      em_hndlCd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "hndlCd"));
      lc_tsCls3.setValue(ds_resultsCopiCodeco1.getCellData(0, "tsCls"));
      em_mchtCd3.setValue(ds_resultsCopiCodeco1.getCellData(0, "mchtCd"));
      em_unqItm3.setValue(ds_resultsCopiCodeco1.getCellData(0, "unqItm"));
      lc_railroadCore3.setValue(ds_resultsCopiCodeco1.getCellData(0, "railroadCore"));
      em_railroadReqDt3.setValue(ds_resultsCopiCodeco1.getCellData(0, "railroadReqDt"));
      lc_railroadReqHh3.setValue(ds_resultsCopiCodeco1.getCellData(0, "railroadReqHh"));
      lc_drtOnYn3.setValue(ds_resultsCopiCodeco1.getCellData(0, "drtOnYn"));
      lc_arvRailroadPlc3.setValue(ds_resultsCopiCodeco1.getCellData(0, "arvRailroadPlc"));
      em_consignee3.setValue(ds_resultsCopiCodeco1.getCellData(0, "consignee"));
      txa_reason3.setValue(ds_resultsCopiCodeco1.getCellData(0, "rmk"));

      // TODO: div_sndClsCd3 전송상태 표시
    }
    if (ds_resultsCopiCodeco.getCellData(i, "crryinCrryoutCls") == "2") {
      v_features = "copyHeader=yes,rowFrom=" + (i + 1) + ",rowCnt=1";
      $c.gus.cfCopyDataSet($p, ds_resultsCopiCodeco, ds_resultsCopiCodeco2, v_features);

      // TODO: td_cls4, td_expimpClsCd4, td_wrkPlCd4 innerText 설정
      em_cntrNo4.setValue(ds_resultsCopiCodeco2.getCellData(0, "cntrNo"));
      em_sizTyp4.setValue(ds_resultsCopiCodeco2.getCellData(0, "sizTyp"));
      lc_fullEmptyClsCd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "fullEmptyClsCd"));
      lc_transCls4.setValue(ds_resultsCopiCodeco2.getCellData(0, "transCls"));
      em_sealNo4.setValue(ds_resultsCopiCodeco2.getCellData(0, "sealNo"));
      if (ds_resultsCopiCodeco2.getCellData(0, "cls") == "DT") {
        em_blNo41.setValue(ds_resultsCopiCodeco2.getCellData(0, "blNo"));
      } else {
        em_blNo4.setValue(ds_resultsCopiCodeco2.getCellData(0, "blNo"));
      }
      em_bookingNo4.setValue(ds_resultsCopiCodeco2.getCellData(0, "bookingNo"));
      em_shpCoCd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "shpCoCd"));
      em_expLicenseNo4.setValue(ds_resultsCopiCodeco2.getCellData(0, "expLicenseNo"));
      em_cstmclrncCls4.setValue(ds_resultsCopiCodeco2.getCellData(0, "cstmclrncCls"));
      em_portcnt4.setValue(ds_resultsCopiCodeco2.getCellData(0, "portcnt"));
      em_licenseFdd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "licenseFdd"));
      em_dptDepot4.setValue(ds_resultsCopiCodeco2.getCellData(0, "dptDepot"));
      em_dptRgn4.setValue(ds_resultsCopiCodeco2.getCellData(0, "dptRgn"));
      em_arvDepot4.setValue(ds_resultsCopiCodeco2.getCellData(0, "arvDepot"));
      em_arvRgn4.setValue(ds_resultsCopiCodeco2.getCellData(0, "arvRgn"));
      em_frzTemper4.setValue(ds_resultsCopiCodeco2.getCellData(0, "frzTemper"));
      lc_transCls4.setValue(ds_resultsCopiCodeco2.getCellData(0, "transCls"));
      em_dangerCd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "dangerCd"));
      em_hndlCd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "hndlCd"));
      lc_tsCls4.setValue(ds_resultsCopiCodeco2.getCellData(0, "tsCls"));
      em_mchtCd4.setValue(ds_resultsCopiCodeco2.getCellData(0, "mchtCd"));
      em_unqItm4.setValue(ds_resultsCopiCodeco2.getCellData(0, "unqItm"));
      lc_railroadCore4.setValue(ds_resultsCopiCodeco2.getCellData(0, "railroadCore"));
      em_railroadReqDt4.setValue(ds_resultsCopiCodeco2.getCellData(0, "railroadReqDt"));
      lc_railroadReqHh4.setValue(ds_resultsCopiCodeco2.getCellData(0, "railroadReqHh"));
      lc_drtOnYn4.setValue(ds_resultsCopiCodeco2.getCellData(0, "drtOnYn"));
      lc_arvRailroadPlc4.setValue(ds_resultsCopiCodeco2.getCellData(0, "arvRailroadPlc"));
      em_consignee4.setValue(ds_resultsCopiCodeco2.getCellData(0, "consignee"));
      txa_reason4.setValue(ds_resultsCopiCodeco2.getCellData(0, "rmk"));

      // TODO: div_sndClsCd4 전송상태 표시
    }
  }
  if (v_bIsCrryOut) {
    $c.gus.cfEnableObjects($p, [tb_crryOutCopiCodeco, chk_crryOutCopiCodeco]);
    scwin.f_disableCompCopiCodeco(ds_resultsCopiCodeco1.getCellData(0, "cls"), 1);
    chk_crryOutCopiCodeco.setValue("1");
    txa_reason3.setReadOnly(true);
  } else {
    $c.gus.cfDisableObjects($p, [tb_crryOutCopiCodeco, chk_crryOutCopiCodeco]);
    chk_crryOutCopiCodeco.setValue("");
  }
  if (v_bIsCrryIn) {
    $c.gus.cfEnableObjects($p, [tb_crryInCopiCodeco, chk_crryInCopiCodeco]);
    scwin.f_disableCompCopiCodeco(ds_resultsCopiCodeco2.getCellData(0, "cls"), 2);
    chk_crryInCopiCodeco.setValue("1");
    txa_reason4.setReadOnly(true);
  } else {
    $c.gus.cfDisableObjects($p, [tb_crryInCopiCodeco, chk_crryInCopiCodeco]);
    chk_crryInCopiCodeco.setValue("");
  }
};
scwin.em_mchtCd1_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(em_mchtCd1, txt_mchtNm1, 4);
};
scwin.em_mchtCd2_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(em_mchtCd2, txt_mchtNm2, 5);
};
scwin.em_mchtCd3_onblur = function (e) {
  if ($c.gus.cfIsNull($p, em_mchtCd3.getValue())) {
    txt_mchtNm3.setValue("");
    return;
  }
  scwin.f_openBilgMchtListPopUp(em_mchtCd3, txt_mchtNm3, 1);
};
scwin.em_mchtCd4_onblur = function (e) {
  if ($c.gus.cfIsNull($p, em_mchtCd4.getValue())) {
    txt_mchtNm4.setValue("");
    return;
  }
  scwin.f_openBilgMchtListPopUp(em_mchtCd4, txt_mchtNm4, 1);
};
scwin.em_vehclNoFull1_onblur = async function (e) {
  let chk = await $c.gus.cfValidate($p, [em_vehclNoFull1]);
  if (!chk) {
    em_vehclNoFull1.setValue("");
  }
  if (ds_resultsCopino1.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopino1.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD && ds_resultsCopino1.getCellData(0, "wrkStpCd") != em_vehclNoFull1.getValue()) {
    $c.gus.cfEnableObjects($p, [em_vehclNoFrtcarNo1]);
  }
};
scwin.em_vehclNoFull2_onblur = async function (e) {
  let chk = await $c.gus.cfValidate($p, [em_vehclNoFull2]);
  if (!chk) {
    em_vehclNoFull2.setValue("");
  }
  if (ds_resultsCopino2.getCellData(0, "preInfoGrpClsCd") == scwin.EDI_GRPCD_KYUNGIN_ICD && ds_resultsCopino2.getCellData(0, "wrkStpCd") != scwin.WRK_STP_CD_RAILROAD && ds_resultsCopino2.getCellData(0, "wrkStpCd") != em_vehclNoFull2.getValue()) {
    $c.gus.cfEnableObjects($p, [em_vehclNoFrtcarNo2]);
  }
};
scwin.em_frzTemper2_onblur = async function (e) {
  let chk = await $c.gus.cfValidate($p, [em_frzTemper2]);
  if (!chk) {
    em_frzTemper2.setValue("");
  } else {
    if (ds_resultsCopino2.getCellData(0, "temperCls") != "") {
      if (em_frzTemper2.getValue().trim() == null || em_frzTemper2.getValue().trim() == "") {
        // TODO: td_frzTemper2 표시 = EDI_TEMPER_CLS_DRY
      } else {
        // TODO: td_frzTemper2 표시 = EDI_TEMPER_CLS_CEL
      }
    } else {
      // TODO: td_frzTemper2 표시 = ""
    }
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
scwin.btn_transfer_onclick = function (e) {
  scwin.f_transfer();
};
scwin.chk_crryOutCopino_onviewchange = function (e) {
  scwin.f_switchTransYn(1);
};
scwin.chk_crryInCopino_onviewchange = function (e) {
  scwin.f_switchTransYn(2);
};
scwin.chk_crryOutCopiCodeco_onviewchange = function (e) {
  scwin.f_switchTransYn(3);
};
scwin.chk_crryInCopiCodeco_onviewchange = function (e) {
  scwin.f_switchTransYn(4);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'flex_gvw',id:''},E:[{T:1,N:'xf:group',A:{class:'content',id:''},E:[{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w50',id:'em_dptWrkPlCd',placeholder:'',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'',id:'txt_dptWrkPlNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' w50',id:'em_arvWrkPlCd',placeholder:'',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'',id:'txt_arvWrkPlNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_cntrNo',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_odrNo',style:'',mandatory:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'반출입',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' ',id:'em_wrkStDt',placeholder:'',style:'',mandatory:'true'}},{T:1,N:'xf:input',A:{class:'',id:'em_wrkEndDt',placeholder:'',style:'',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'half',id:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출(COPINO)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_selfCls1',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'한진자가',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_hanjinSelfCls1',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_tmlVsslPortcnt1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_cntrNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/K NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_bookingNo1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_blNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선입항년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'em_vsslArrvlportYr1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_admitNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'X-RAY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_xrayRettlPassYn1',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'D/O NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_doNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_mchtCd1',codeId:'em_mchtCd1',nameId:'txt_mchtNm1',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td bl0'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE/TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'em_sizTyp1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E/F 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_fullEmptyClsCd1',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'TS유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_tsCls1',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'SEAL NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_sealNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'OPERATOR',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_shpCoCd1',style:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발상세',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_startPointCont1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송작업번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'em_transWrkIndictNo1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량ID번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vehclNoFrtcarNo1',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vehclNoFull1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_vehclCls1',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'em_transCoCd1',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세차량여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_bondTransVehclYn1',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_chassisNo1',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시위치정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_chassisPosInfo1',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_reason1',style:'min-height: auto;height:22px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DPCT 전용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vsslNmOut',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_portcntOut',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_crryOutCopino',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 반입(COPINO)',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CY',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_railroadClsOut',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직통관유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_railroadIntendClsOut',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_tmlVsslPortcnt2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_cntrNo2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/K NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_bookingNo2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_blNo2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선입항년도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'em_vsslArrvlportYr2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'승인번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_admitNo2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TS유무',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_frtcarClsOut',search:'start',style:'',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'OPERATOR',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_shpCoCd2',style:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE/TYPE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_sizTyp2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'E/F 구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_icdmoveClsOut',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'냉동온도',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w85',id:'em_frzTemper2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'WEIGHT',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_totWt2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'양하항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_dchrPort2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',escape:'false',id:'',label:'OVER L/W/H',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'',id:'em_overLength2',class:' '}},{T:1,N:'xf:input',A:{style:'',id:'em_overWidth2',class:' '}},{T:1,N:'xf:input',A:{style:'',id:'em_overHeight2',class:' '}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'IMDG CODE',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_dangerCd2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SEAL NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_sealNo2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전송일시',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'text',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'D/O NO',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_doNo2',style:'',mandatory:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송작업번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'em_transWrkIndictNo2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량ID번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vehclNoFrtcarNo2',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vsslNmOut',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_cargoClsOut',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'em_transCoCd2',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'보세차량여부',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td ',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_fullEmptyClsCd3',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_chassisNo2',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'샤시위치정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' ',editType:'select',id:'lc_transCls3',search:'start',style:'',submenuSize:'auto'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td br0',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{id:'udc_mchtCd2',codeId:'em_mchtCd2',nameId:'txt_mchtNm2',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td bl0',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락담당자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'em_ctaNm',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'연락처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_ctaTel',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'특이사항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:textarea',A:{class:'',id:'txa_reason2',style:'min-height: auto;height:22px;'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'4'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DPCT 전용',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_vsslNmIn',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'em_portcntIn',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chk_crryInCopino',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송여부'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_transfer',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]}]}]}]}]}]}]}]})