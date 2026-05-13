/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_23b.xml 82872 0fc82706986cf23730d4f46f0f7d429430df222505786879b9a62e7077228fa3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_portcntList',saveRemovedData:'true','ev:ondataload':'scwin.ds_portcntList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselPortCountList',saveRemovedData:'true','ev:ondataload':'scwin.ds_vesselPortCountList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expimpClsNm',name:'수출입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입/출항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'반',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgNm',name:'노조조직명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chiefNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chiefNm',name:'반장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'노임항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageSellGoodsCd',name:'노임매출품목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageSellGoodsNm',name:'품목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ton',name:'수량/톤',dataType:'number'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'지급거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wageWrkStpCd',name:'작업단계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsCd',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'지급거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtSum',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'adptStDt',name:'적용일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryConditionDTO'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'branCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStYmDd',name:'작업월일시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndYmDd',name:'작업월일종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageAdptPatternCd',name:'노임적용유형코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adjmPatternCd',name:'정산유형',dataType:'text'}},{T:1,N:'w2:key',A:{id:'expimpClsCd',name:'수출입구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageRetroactYn',name:'미확정',dataType:'text'}},{T:1,N:'w2:key',A:{id:'districtCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wageItemCd',name:'권역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pierPosnClsCd',name:'TOC',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrBulkClsCd',name:'컨/벌크',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_portcntList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'param1',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:ondataload':'scwin.ds_vesselPortCountList_ondataload',id:'ds_vesselPortCountListTempL1',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'Vessel코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'모선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsCd',name:'수출입구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsNm',name:'수출입구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgCd',name:'노조조직코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgNm',name:'노조조직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNo',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemCd',name:'매입항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'매출입항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsCd',name:'노임매출품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'number',id:'ton',name:'톤'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsStdDt',name:'실적일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNo',name:'매입거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageWrkStpCd',name:'노임작업단계코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'확정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNm',name:'매입거래처명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pchsAmtSum',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:ondataload':'scwin.ds_vesselPortCountList_ondataload',id:'ds_vesselPortCountListTempL2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'Vessel코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'모선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsCd',name:'수출입구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsNm',name:'수출입구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgCd',name:'노조조직코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgNm',name:'노조조직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNo',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemCd',name:'매입항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'매출입항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsCd',name:'노임매출품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'number',id:'ton',name:'톤'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsStdDt',name:'실적일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNo',name:'매입거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageWrkStpCd',name:'노임작업단계코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'확정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNm',name:'매입거래처명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pchsAmtSum',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:ondataload':'scwin.ds_vesselPortCountList_ondataload',id:'ds_vesselPortCountListTempL3',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'Vessel코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'모선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsCd',name:'수출입구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsNm',name:'수출입구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgCd',name:'노조조직코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgNm',name:'노조조직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNo',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemCd',name:'매입항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'매출입항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsCd',name:'노임매출품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'number',id:'ton',name:'톤'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsStdDt',name:'실적일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNo',name:'매입거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageWrkStpCd',name:'노임작업단계코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'확정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNm',name:'매입거래처명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pchsAmtSum',name:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list','ev:ondataload':'scwin.ds_vesselPortCountList_ondataload',id:'ds_vesselPortCountListTempL4',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlCd',name:'작업장코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkPlNm',name:'작업장명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'cvsslMgntNo',name:'본선관리번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslCd',name:'Vessel코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'vsslNm',name:'모선명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'portcnt',name:'항차'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrNo',name:'오더번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsCd',name:'수출입구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'expimpClsNm',name:'수출입구분명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arrvlportDt',name:'입항일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgCd',name:'노조조직코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'lunionOrgNm',name:'노조조직명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNo',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'chiefNm',name:''}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemCd',name:'매입항목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'selpchItemNm',name:'매출입항목명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsCd',name:'노임매출품목코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageSellGoodsNm',name:''}},{T:1,N:'w2:column',A:{dataType:'number',id:'ton',name:'톤'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rsltsStdDt',name:'실적일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNo',name:'매입거래처'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wageWrkStpCd',name:'노임작업단계코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dcsnClsCd',name:'확정구분코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsClntNm',name:'매입거래처명'}},{T:1,N:'w2:column',A:{dataType:'number',id:'pchsAmtSum',name:''}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_queryConditionDTO',action:'/ds.op.wrkrslts.wagewrkrslts.RetrieveAdjustmentPatternEachWageAggregationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryConditionDTO","key":"IN_DS1"},{"id":"ds_vesselPortCountList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vesselPortCountList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_portcntList',action:'/cm.zz.RetrieveComboCMD.do?sysCd=WorkPlaceEachGoodsEBC&queryId=retrivecPortcntList',method:'post',mediatype:'application/json',ref:'data:json,dma_portcntList',target:'data:json,{"id":"ds_portcntList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vQryStDt); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.frontMonth = $c.date.addMonth($p, scwin.vQryStDt, -1);
scwin.frontDay = $c.date.getLastDateOfMonth($p, scwin.frontMonth);

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP255",
    compID: "acb_wageAdptPatternCd"
  },
  // 셀렉트
  {
    grpCd: "SD060",
    compID: "acb_expimpClsCd"
  },
  // 셀렉트
  {
    grpCd: "FS500",
    compID: "gr_vesselPortCountList:dcsnClsCd"
  } // 셀렉트
  ];
  $c.data.setCommonCode($p, codeOptions);
  const param = [{
    method: "getLuxeComboData",
    param1: "DsCommonEBC",
    param2: "retrieveWageItemCd",
    compID: "acb_wageItemCd"
  }, {
    method: "getLuxeComboData",
    param1: "GoodsSurchargeWorkStepEBC",
    param2: "retriveDistrictCodeList",
    compID: "acb_districtCd"
  }];
  $c.data.setGauceUtil($p, param);

  // scwin.f_SetDefaultData();
};
scwin.ondataload = function () {
  acb_districtCd.setSelectedIndex(-1);
};

//-------------------------------------------------------------------------
// Default Data Setting
//-------------------------------------------------------------------------
// scwin.f_SetDefaultData
scwin.onUdcCompleted = function () {
  acb_branCd.setMaxLength(1); // 점소코드;
  acb_branCd.setSelectedIndex(0);
  udc_wrkYmDd.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  acb_expimpClsCd.setMaxLength(1);
  acb_expimpClsCd.setSelectedIndex(0);
  acb_wageRetroactYn.setValue(3);
  acb_PierPosnClsCd.setSelectedIndex(0);
  acb_cntrBulkClsCd.setSelectedIndex(0);
  acb_districtCd.setSelectedIndex(1);
  acb_wageItemCd.setSelectedIndex(1);
  // $c.gus.cfSetIMEModeActiveObjects([ed_wrkPlNm, ed_vsslNm]);

  acb_branCd.setValue(scwin.loUpperLobranCd);
  acb_branCd.focus();

  //권역별 날짜 자동 셋팅
  // scwin.f_changeSearchDate()
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 정산유형별 노임집계표 조회 f_RetrieveVesselPortCount
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if ((await acb_branCd.getValue()) == "") {
    $c.win.alert($p, "점소은(는) 필수 입력 항목입니다.");
    return;
  }
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_wrkStYmDd.getValue(), ica_wrkEndYmDd.getValue()))) {
    await $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkStYmDd.focus();
    return;
  }
  if (acb_wageAdptPatternCd.getValue() != "" && acb_adjmPatternCd.getValue() != "") {
    $c.win.alert($p, "정산유형이나 노임정산유형 둘 중 하나만 선택하셔야 합니다.");
    acb_adjmPatternCd.focus();
    return;
  }
  dma_queryConditionDTO.set("branCd", acb_branCd.getValue());
  dma_queryConditionDTO.set("wrkPlCd", ed_wrkPlCd.getValue());
  dma_queryConditionDTO.set("wrkStYmDd", ica_wrkStYmDd.getValue());
  dma_queryConditionDTO.set("wrkEndYmDd", ica_wrkEndYmDd.getValue());
  dma_queryConditionDTO.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_queryConditionDTO.set("vsslCd", ed_vsslCd.getValue());
  dma_queryConditionDTO.set("portcnt", acb_portcnt.getValue());
  dma_queryConditionDTO.set("wageAdptPatternCd", acb_wageAdptPatternCd.getValue());
  dma_queryConditionDTO.set("adjmPatternCd", acb_adjmPatternCd.getValue());
  dma_queryConditionDTO.set("expimpClsCd", acb_expimpClsCd.getValue());
  dma_queryConditionDTO.set("wageRetroactYn", acb_wageRetroactYn.getValue());
  dma_queryConditionDTO.set("districtCd", acb_districtCd.getValue());
  dma_queryConditionDTO.set("wageItemCd", acb_wageItemCd.getValue());
  dma_queryConditionDTO.set("pierPosnClsCd", acb_PierPosnClsCd.getValue());
  dma_queryConditionDTO.set("cntrBulkClsCd", acb_cntrBulkClsCd.getValue());
  $c.sbm.execute($p, sbm_queryConditionDTO);
};

//-------------------------------------------------------------------------
// 항차 조회(선박 선택시)
//-------------------------------------------------------------------------
scwin.f_RetrievePortCount = function () {
  dma_portcntList.set("param1", ed_vsslCd.getValue());
  $c.sbm.execute($p, sbm_portcntList);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_RunExcel = async function () {
  if (ds_vesselPortCountList.getTotalRow() <= 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return;
  }
  const options = {
    fileName: "정산유형별 노임집계표.xlsx",
    sheetName: "정산유형별 노임집계표",
    startRowIndex: 3,
    startColumnIndex: 0
    // useStyle : false,
    // useClass : false
  };

  // 타이틀
  const infoArr = [{
    rowIndex: 0,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 18,
    text: "정산유형별 노임집계표",
    textAlign: "center",
    drawBorder: false,
    fontSize: "18px"
  }, {
    rowIndex: 2,
    colIndex: 0,
    rowSpan: 1,
    colSpan: 0,
    text: "",
    textAlign: "left",
    drawBorder: false
  }];

  // let confirm = ;

  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    $c.data.downloadGridViewExcel($p, gr_vesselPortCountList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_onClick = async function (e) {
  udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), ed_wrkPlNm.getValue(), "F", null, null, null, null, "," + acb_branCd.getValue() + "", null, null, null, null, null, "T", null);
};
scwin.udc_wrkPl_onblurCode = async function (e) {
  if (ed_wrkPlCd.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, ed_wrkPlCd.getValue(), "", "T", null, null, null, null, "," + acb_branCd.getValue() + "", null, null, null, null, null, "T", null);
  } else {
    return;
  }
};
scwin.udc_wrkPl_onChangeName = async function (info) {
  if (ed_wrkPlNm.getValue() != "") {
    udc_wrkPl.cfCommonPopUp(scwin.udc_wrkPl_callBackFunc, "", ed_wrkPlNm.getValue(), "T", null, null, null, null, "," + acb_branCd.getValue() + "", null, null, null, null, null, "T", null);
  } else {
    ed_wrkPlCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(작업장)
//-------------------------------------------------------------------------
scwin.udc_wrkPl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_wrkPlCd, ed_wrkPlNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (선박)
//-------------------------------------------------------------------------
scwin.udc_vssl_onClick = async function (e) {
  udc_vssl.cfCommonPopUp(scwin.udc_vssl_callBackFunc, ed_vsslCd.getValue(), ed_vsslNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, "T", null);
};
scwin.udc_vssl_onblurCode = async function (e) {
  if (ed_vsslCd.getValue() != "") {
    udc_vssl.cfCommonPopUp(scwin.udc_vssl_callBackFunc, ed_vsslCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, "T", null);
  } else {
    return;
  }
};
scwin.udc_vssl_onChangeName = async function (info) {
  if (ed_vsslNm.getValue() != "") {
    udc_vssl.cfCommonPopUp(scwin.udc_vssl_callBackFunc, "", ed_vsslNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, "T", null);
  } else {
    ed_vsslCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(선박)
//-------------------------------------------------------------------------
scwin.udc_vssl_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vsslCd, ed_vsslNm);
  scwin.f_RetrievePortCount();
};

//-------------------------------------------------------------------------
// 검색영역 Field Clear함. f_InitObjects
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onClick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
  ds_portcntList.removeAll();
  // udc_wrkYmDd.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  scwin.onUdcCompleted();
  // scwin.f_SetDefaultData();
};

//-------------------------------------------------------------------------
// 데이터 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_vesselPortCountList_ondataload = function () {
  let rowCnt = ds_vesselPortCountList.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, MSG_CM_ERR_003);
  }
  let vol = 0; // 수량 / 통(물량) 합계

  for (i = 0; i < ds_vesselPortCountList.getTotalRow(); i++) {
    if (ds_vesselPortCountList.getCellData(i, "selpchItemCd") == "0119" ||
    // 하역기본노임
    ds_vesselPortCountList.getCellData(i, "selpchItemCd") == "0129" ||
    // 상용기본노임
    ds_vesselPortCountList.getCellData(i, "selpchItemCd") == "0214") {
      // 일용기본노임
      let ton = Number(ds_vesselPortCountList.getCellData(i, "ton"));
      vol += ton;
    }
  }

  // column64 footer ton 컬럼명
  // gr_vesselPortCountList.setFooterValue("ton", vol);
  gr_vesselPortCountList.setFooterValue("tonFooter", vol);
  gr_vesselPortCountList.setFocusedCell(0, 0);
  spa_totalRows.setValue(rowCnt);
};

//-------------------------------------------------------------------------
// 항차 데이터셋 로드 완료시
//-------------------------------------------------------------------------
scwin.ds_portcntList_ondataload = function () {
  ds_portcntList.insertRow(0);
  ds_portcntList.setCellData(0, "name", "전체");
  ds_portcntList.setCellData(0, "code", "");
  acb_portcnt.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 권역 셀렉트박스 값 변경시
//-------------------------------------------------------------------------
scwin.acb_districCd_onViewChange = function (info) {
  scwin.f_changeSearchDate();
};

//-------------------------------------------------------------------------
// 인천항일 경우와 인천항이 아닐경우 검색 날짜 셋팅
//-------------------------------------------------------------------------
scwin.f_changeSearchDate = function () {
  let portDistrict = acb_districtCd.getValue();
  if (portDistrict.length > 0) {
    portDistrict = portDistrict.substring(0, 2);
  } else {
    return;
  }
  if (portDistrict == "WI") {
    let check = scwin.vCurDate;
    let intCheck = 0;
    intCheck = check.substring(6, 8);
    intCheck = Number(intCheck);
    // 현재 일이 1~10일까지면 전월의 1일부터 15일까지로 세팅
    if (intCheck >= 1 && intCheck <= 10) {
      let stDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + "01";
      let endDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + "15";
      udc_wrkYmDd.setInitDate(stDd, endDd);
    } else if (intCheck >= 11 && intCheck <= scwin.frontDay) {
      // 현재 일이 11일 부터 어제까지에 걸친다면 전월의 16일부터 어제와 동일한 일자의 날짜로 

      let stDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + "16";
      let endDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + scwin.frontDay;
      udc_wrkYmDd.setInitDate(stDd, endDd);
    } else {}
  } else {
    // 권역이 인천이나 로엑스 창고 노임이 아니면 전월 전체로  
    let stDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + "01";
    let endDd = scwin.vQryStDt.substring(0, 4) + scwin.frontMonth.substring(4, 6) + scwin.frontDay;
    udc_wrkYmDd.setInitDate(stDd, endDd);
  }
};

//-------------------------------------------------------------------------
// 본선관리번호 조회 팝업
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  // let args = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

  // 팝업 옵션 설정
  let options = {
    id: "taxPop",
    type: "browserPopup",
    popupName: "본선관리번호검색팝업",
    width: 1100,
    height: 650
  };

  //상세화면 호출
  let rtn = await $c.win.openPopup($p, "/ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_20p.xml", options, args);
  $c.gus.cfSetReturnValue($p, rtn, ed_cvsslMgntNo);
};

//-------------------------------------------------------------------------
// 작업장 정보 수정 팝업창 띄우기 / 삭제된 화면
//-------------------------------------------------------------------------
// scwin.btn_f_openPopUp_onClick = function (e) {

//     if(ds_vesselPortCountList.getRowPosition() == "") {
//         $c.win.alert("변경할 데이터를 선택 하세요.");
//         return;
//     }

//     //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
//     let args = new Array();
//     args[0] = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "odrNo"); //오더번호
//     args[1] = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "wrkPlNm"); //작업장 이름
//     args[1] = acb_branCd.getValue() //지점코드

//     // 팝업 옵션 설정
//     let options = {
//         id: "taxPop", 
//         type: "broswerPopup",
//         popupName: "작업장정보수정",
//         width:  630,                   
//         height: 150
//     };

//     //상세화면 호출
//     $c.win.openPopup("/ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_19p.xml", options, args);       

// };

//-------------------------------------------------------------------------
// 노무자 근무사항 발생 출력 f_OzReport()
//-------------------------------------------------------------------------
scwin.btn_f_OzReport_onClick = function (e) {
  let rowPstn = ds_vesselPortCountList.getRowPosition();
  if ($c.gus.cfIsNull($p, rowPstn) || rowPstn < 0) {
    $c.win.alert($p, "출력 하고자 하는 항목을 선택 하세요.");
    return;
  }
  let ordNo = ds_vesselPortCountList.getCellData(rowPstn, "odrNo");
  let check = ordNo.substring(1, 3);
  if (check != "L3") {
    $c.win.alert($p, " 해당 오더번호는 출력 대상이 아닙니다.");
    return;
  }
  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19r.ozr",
    odiParam: {
      ordCd: ordNo
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 타창고노임집계표발행 f_OzReport02()
//-------------------------------------------------------------------------
scwin.btn_f_OzReport02_onClick = function (e) {
  let odrNo = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "odrNo");
  odrNo = odrNo.substring(1, 3);
  if (odrNo != "L5") {
    $c.win.alert($p, " 타창고 노임 지급 명세서는 오더구분이 타창고[L5]일 경우에만 출력 가능 합니다.");
    return;
  }
  let check = ica_wrkStYmDd.getValue();
  if (check == "") {
    $c.win.alert($p, "시작년월을 입력 하세요.");
    return;
  }
  check = "";
  check = ica_wrkEndYmDd.getValue();
  if (check == "") {
    $c.win.alert($p, "종료년월을 입력 하세요.");
    return;
  }
  let lunionOrgCd = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "lunionOrgCd");
  let tempWageRetroact = acb_wageRetroactYn.getValue();
  let wageRetroactYn = "";
  if (tempWageRetroact == "1") wageRetroactYn = 0;else if (tempWageRetroact == "2") wageRetroactYn = 1;
  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_2.ozr",
    odiParam: {
      lunionOrgCd: lunionOrgCd,
      stDt: ica_wrkStYmDd.getValue(),
      edDt: ica_wrkEndYmDd.getValue(),
      wageRetroactYn: wageRetroactYn
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 작업일보 및 노임지불 명세서 출력 f_OzReport03()
//-------------------------------------------------------------------------
scwin.btn_ozReport03_onClick = function (e) {
  let check = ds_vesselPortCountList.getRowPosition();
  if ($c.gus.cfIsNull($p, check) || check < 0) {
    $c.win.alert($p, "노임 집계표에서 항목을 선택 하세요.");
    return;
  }

  /* 조회된 노임 출력 */
  let odrNo = ds_vesselPortCountList.getCellData(check, "odrNo");
  let lunionOrgCd = ds_vesselPortCountList.getCellData(check, "lunionOrgCd");
  odrNo = odrNo.substring(1, 3);
  let wrkPlCd = "";
  let wrkPlNm = "";
  if (odrNo == "L2") {
    wrkPlCd = ds_vesselPortCountList.getCellData(check, "wrkPlCd");
    wrkPlNm = ds_vesselPortCountList.getCellData(check, "wrkPlNm");
  } else {
    wrkPlCd = "";
    wrkPlNm = "";
  }

  // L1 이나  L2 만 출력..
  if (!(odrNo == "L1" || odrNo == "L2")) {
    $c.win.alert($p, " 작업일보 및 노임지불 명세서는 오더구분이 부두노임[L1]이거나 장치장노임[L2]일 경우에만 출력 가능 합니다.");
    return;
  }
  let orgCd = ds_vesselPortCountList.getCellData(check, "lunionOrgCd");
  let portCnt = ds_vesselPortCountList.getCellData(check, "portcnt");
  let vsslCd = ds_vesselPortCountList.getCellData(check, "vsslCd");
  let chiefNo = ds_vesselPortCountList.getCellData(check, "chiefNo");
  let cvsslMgntNo = ds_vesselPortCountList.getCellData(check, "cvsslMgntNo");
  let impExpClsCd = ds_vesselPortCountList.getCellData(check, "expimpClsCd");
  let odrKndCd = odrNo;
  odrNo = ds_vesselPortCountList.getCellData(check, "odrNo");

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_3.ozr",
    odiParam: {
      orgCd: orgCd,
      portCnt: portCnt,
      vsslCd: vsslCd,
      cvsslMgntNo: cvsslMgntNo,
      odrNo: odrNo,
      odrKndCd: odrKndCd,
      wrkPlCd: wrkPlCd,
      wrkPlNm: wrkPlNm,
      impExpClsCd: impExpClsCd,
      chiefNo: chiefNo,
      wrkStYmDd: ica_wrkStYmDd.getValue(),
      wrkEndYmDd: ica_wrkEndYmDd.getValue(),
      rsltsStDt: ica_wrkStYmDd.getValue(),
      rsltsEndDt: ica_wrkEndYmDd.getValue(),
      wageRetroactYn: acb_wageRetroactYn.getValue()
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 작업일보 및 노임 지불 명세서(일괄)  f_OzReport03_1() OZExecuteBatch는 다건 예제 샘플 확인하면 됨 / 추후 진행
//-------------------------------------------------------------------------
scwin.btn_OzReport03_1_onClick = async function (e) {
  if (!(await $c.win.confirm($p, "작업일보 및 노임지불 명세서를 일괄 출력하시겠습니까?"))) {
    return;
  }

  // 오리지날 데이터셋을 카피해서 오더별, 반장별로  sorting 한다.
  ds_vesselPortCountListTempL1.removeAll();
  ds_vesselPortCountListTempL2.removeAll();
  ds_vesselPortCountListTempL3.removeAll();
  ds_vesselPortCountListTempL4.removeAll();
  for (i = 0; i < ds_vesselPortCountList.getTotalRow(); i++) {
    let odrKnd = ds_vesselPortCountList.getCellData(i, "odrNo").trim();
    odrKnd = odrKnd.substring(1, 3);
    wrkPlCd = ds_vesselPortCountList.getCellData(i, "wrkPlCd").trim();
    if (odrKnd == "L1" && wrkPlCd != "") {
      ds_vesselPortCountListTempL1.setRowData(i, ds_vesselPortCountList.getRowData(i), false);
    } else if (odrKnd == "L2" && wrkPlCd != "") {
      // ds_vesselPortCountListTempL2.insertRow();
      ds_vesselPortCountListTempL2.setRowData(i, ds_vesselPortCountList.getRowData(i), false);
    } else continue;
  }
  let options = {
    sortIndex: "wrkPlCd chiefNo",
    sortOrder: "1 1"
  };
  ds_vesselPortCountListTempL1.multisort(options);
  ds_vesselPortCountListTempL2.multisort(options);
  for (i = 0; i < ds_vesselPortCountListTempL1.getTotalRow(); i++) {
    let wrkPlCd = ds_vesselPortCountListTempL1.getCellData(i, "wrkPlCd").trim();
    if (i == 0) {
      ds_vesselPortCountListTempL3.setRowData(i, ds_vesselPortCountListTempL1.getRowData(i), false);
    } else if (ds_vesselPortCountListTempL1.getCellData(i - 1, "wrkPlCd") != wrkPlCd) {
      ds_vesselPortCountListTempL3.setRowData(i, ds_vesselPortCountListTempL1.getRowData(i), false);
    }
  }
  for (i = 0; i < ds_vesselPortCountListTempL2.getTotalRow(); i++) {
    let wrkPlCd = ds_vesselPortCountListTempL2.getCellData(i, "wrkPlCd").trim();
    if (i == 0) {
      ds_vesselPortCountListTempL4.setRowData(i, ds_vesselPortCountListTempL2.getRowData(i), false);
    } else if (ds_vesselPortCountListTempL2.getCellData(i - 1, "wrkPlCd") != wrkPlCd) {
      ds_vesselPortCountListTempL4.setRowData(i, ds_vesselPortCountListTempL2.getRowData(i), false);
    }
  }
  ds_vesselPortCountListTempL3.multisort(options);
  ds_vesselPortCountListTempL4.multisort(options);

  /* 조회된 노임 전체 출력 */
  // OZStartBatch
  // for문 돌면서 
  for (check = 0; check < ds_vesselPortCountListTempL3.getTotalRow(); check++) {
    let odrNo = ds_vesselPortCountListTempL3.getCellData(check, "odrNo").trim();
    let lunionOrgCd = ds_vesselPortCountListTempL3.getCellData(check, "lunionOrgCd").trim();
    if (lunionOrgCd == "" || ds_vesselPortCountListTempL3.getCellData(check, "selpchItemNm").trim() == "소계" || ds_vesselPortCountListTempL3.getCellData(check, "selpchItemNm").trim() == "합계") {
      continue;
    }
    odrNo = odrNo.substring(1, 3);
    let wrkPlNm = "";
    let orgCd = ds_vesselPortCountListTempL3.getCellData(check, "lunionOrgCd");
    let portCnt = ds_vesselPortCountListTempL3.getCellData(check, "portcnt");
    let vsslCd = ds_vesselPortCountListTempL3.getCellData(check, "vsslCd");
    let chiefNo = ds_vesselPortCountListTempL3.getCellData(check, "chiefNo");
    let cvsslMgntNo = ds_vesselPortCountListTempL3.getCellData(check, "cvsslMgntNo");
    let impExpClsCd = ds_vesselPortCountListTempL3.getCellData(check, "expimpClsCd");
    let wrkPlCd = ds_vesselPortCountListTempL3.getCellData(check, "wrkPlCd");
    let odrKndCd = odrNo;
    odrNo = ds_vesselPortCountListTempL3.getCellData(check, "odrNo");
    let data = {
      reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_3_1.ozr",
      odiParam: {
        orgCd: orgCd,
        portCnt: portCnt,
        vsslCd: vsslCd,
        cvsslMgntNo: cvsslMgntNo,
        odrNo: odrNo,
        odrKndCd: odrKndCd,
        wrkStYmDd: ica_wrkStYmDd.getValue(),
        wrkEndYmDd: ica_wrkEndYmDd.getValue(),
        wrkPlCd: wrkPlCd,
        wrkPlNm: wrkPlNm,
        impExpClsCd: impExpClsCd,
        rsltsStDt: ica_wrkStYmDd.getValue(),
        rsltsEndDt: ica_wrkEndYmDd.getValue(),
        wageRetroactYn: acb_wageRetroactYn.getValue(),
        chiefNo: chiefNo
      },
      viewerParam: {
        useprogressbar: false // 프로그레스바 쓸지 말지
        // printcommand : true,
        // zoom : 90, // 배율 설정
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
  // 한번 끝내고

  for (check = 0; check < ds_vesselPortCountListTempL4.getTotalRow(); check++) {
    let odrNo = ds_vesselPortCountListTempL4.getCellData(check, "odrNo").trim();
    let lunionOrgCd = ds_vesselPortCountListTempL4.getCellData(check, "lunionOrgCd").trim();
    let cvsslMgntNo = ds_vesselPortCountListTempL4.getCellData(check, "cvsslMgntNo").trim();
    if (lunionOrgCd == "" || ds_vesselPortCountListTempL4.getCellData(check, "selpchItemNm").trim() == "소계" || ds_vesselPortCountListTempL4.getCellData(check, "selpchItemNm").trim() == "합계") {
      continue;
    }
    odrNo = odrNo.substring(1, 3);
    let wrkPlNm = "";
    let orgCd = ds_vesselPortCountListTempL4.getCellData(check, "lunionOrgCd");
    let portCnt = ds_vesselPortCountListTempL4.getCellData(check, "portcnt");
    let vsslCd = ds_vesselPortCountListTempL4.getCellData(check, "vsslCd");
    let chiefNo = ds_vesselPortCountListTempL4.getCellData(check, "chiefNo");
    let wrkPlCd = ds_vesselPortCountListTempL4.getCellData(check, "wrkPlCd");
    let impExpClsCd = ds_vesselPortCountListTempL4.getCellData(check, "expimpClsCd");
    let odrKndCd = odrNo;
    odrNo = "";

    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    let data = {
      reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_3_1.ozr",
      odiParam: {
        orgCd: orgCd,
        portCnt: portCnt,
        vsslCd: vsslCd,
        cvsslMgntNo: cvsslMgntNo,
        odrNo: odrNo,
        odrKndCd: odrKndCd,
        wrkStYmDd: ica_wrkStYmDd.getValue(),
        wrkEndYmDd: ica_wrkEndYmDd.getValue(),
        wrkPlCd: wrkPlCd,
        wrkPlNm: wrkPlNm,
        impExpClsCd: impExpClsCd,
        rsltsStDt: ica_wrkStYmDd.getValue(),
        rsltsEndDt: ica_wrkEndYmDd.getValue(),
        wageRetroactYn: acb_wageRetroactYn.getValue(),
        chiefNo: chiefNo
      },
      viewerParam: {
        useprogressbar: false // 프로그레스바 쓸지 말지
        // printcommand : true,
        // zoom : 90, // 배율 설정
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};

//-------------------------------------------------------------------------
// 작업일보 및 노임 지불 명세서(울산 일괄)  f_OzReport03_2() OZExecuteBatch는 다건 예제 샘플 확인하면 됨
//-------------------------------------------------------------------------
scwin.btn_f_OzReport03_2_onClick = async function (e) {
  if (!(await $c.win.confirm($p, "작업일보 및 노임지불 염세서를 일괄 출력하시겠습니까?"))) {
    return;
  }
  ds_vesselPortCountListTempL1.removeAll();
  ds_vesselPortCountListTempL2.removeAll();
  for (i = 0; i < ds_vesselPortCountList.getTotalRow(); i++) {
    let odrKnd = ds_vesselPortCountList.getCellData(i, "odrNo").trim();
    odrKnd = odrKnd.substring(1, 3);
    if (odrKnd == "L1") ds_vesselPortCountListTempL1.setRowData(i, ds_vesselPortCountList.getRowData(i), false);else if (odrKnd == "L2") ds_vesselPortCountListTempL2.setRowData(i, ds_vesselPortCountList.getRowData(i), false);else continue;
  }
  let options = {
    sortIndex: "wrkPlCd odrNo",
    sortOrder: "1 1"
  };
  ds_vesselPortCountListTempL1.multisort(options);
  options = {
    sortIndex: "wrkPlCd chiefNo",
    sortOrder: "1 1"
  };
  ds_vesselPortCountListTempL2.multisort(options);

  /* 조회된 노임 전체 출력 */

  for (check = 0; check < ds_vesselPortCountListTempL1.getTotalRow(); check++) {
    let odrNo = ds_vesselPortCountListTempL1.getCellData(check, "odrNo").trim();
    let lunionOrgCd = ds_vesselPortCountListTempL1.getCellData(check, "lunionOrgCd").trim();
    if (lunionOrgCd == "" || ds_vesselPortCountListTempL1.getCellData(check, "selpchItemNm").trim() == "소계" || ds_vesselPortCountListTempL1.getCellData(check, "selpchItemNm").trim() == "합계") continue;
    if (check > 1 && odrNo == ds_vesselPortCountListTempL1.getCellData(check - 1, "odrNo") && lunionOrgCd == ds_vesselPortCountListTempL1.getCellData(check - 1, "lunionOrgCd")) continue;
    odrNo = odrNo.substring(1, 3);
    let wrkPlCd = "";
    let wrkPlNm = "";
    if (odrNo == "L2") {
      wrkPlCd = ds_vesselPortCountListTempL1.getCellData(check, "wrkPlCd");
      wrkPlNm = ds_vesselPortCountListTempL1.getCellData(check, "wrkPlNm");
    } else {
      wrkPlCd = "";
      wrkPlNm = "";
    }

    // L1 이나  L2 만 출력..
    if (!(odrNo == "L1" || odrNo == "L2")) {
      continue;
    }
    let orgCd = ds_vesselPortCountListTempL1.getCellData(check, "lunionOrgCd");
    let portCnt = ds_vesselPortCountListTempL1.getCellData(check, "portcnt");
    let vsslCd = ds_vesselPortCountListTempL1.getCellData(check, "vsslCd");
    let chiefNo = ds_vesselPortCountListTempL1.getCellData(check, "chiefNo");
    let cvsslMgntNo = ds_vesselPortCountListTempL1.getCellData(check, "cvsslMgntNo");
    let impExpClsCd = ds_vesselPortCountListTempL1.getCellData(check, "expimpClsCd");
    let odrKndCd = odrNo;
    odrNo = ds_vesselPortCountListTempL1.getCellData(check, "odrNo");

    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

    let data = {
      reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_3.ozr",
      odiParam: {
        orgCd: orgCd,
        portCnt: portCnt,
        vsslCd: vsslCd,
        cvsslMgntNo: cvsslMgntNo,
        odrNo: odrNo,
        odrKndCd: odrKndCd,
        wrkStYmDd: ica_wrkStYmDd.getValue(),
        wrkEndYmDd: ica_wrkEndYmDd.getValue(),
        wrkPlCd: wrkPlCd,
        wrkPlNm: wrkPlNm,
        impExpClsCd: impExpClsCd,
        rsltsStDt: ica_wrkStYmDd.getValue(),
        rsltsEndDt: ica_wrkEndYmDd.getValue(),
        wageRetroactYn: acb_wageRetroactYn.getValue(),
        chiefNo: chiefNo
      },
      viewerParam: {
        ozMode: "print",
        useprogressbar: false // 프로그레스바 쓸지 말지
        // printcommand : true,
        // zoom : 90, // 배율 설정
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
  for (check = 0; check < ds_vesselPortCountListTempL2.getTotalRow(); check++) {
    let odrNo = ds_vesselPortCountListTempL2.getCellData(check, "odrNo").trim();
    let lunionOrgCd = ds_vesselPortCountListTempL2.getCellData(check, "lunionOrgCd").trim();
    let cvsslMgntNo = ds_vesselPortCountListTempL2.getCellData(check, "cvsslMgntNo").trim();
    if (lunionOrgCd == "" || ds_vesselPortCountListTempL2.getCellData(check, "selpchItemNm").trim() == "소계" || ds_vesselPortCountListTempL2.getCellData(check, "selpchItemNm").trim() == "합계") {
      continue;
    }
    if (check > 1 && ds_vesselPortCountListTempL2.getCellData(check, "wrkPlCd") == ds_vesselPortCountListTempL2.getCellData(check - 1, "wrkPlCd") && lunionOrgCd == ds_vesselPortCountListTempL2.getCellData(check - 1, "lunionOrgCd") && cvsslMgntNo == ds_vesselPortCountListTempL2.getCellData(check - 1, "cvsslMgntNo")) {
      continue;
    }
    odrNo = odrNo.substring(1, 3);
    let wrkPlCd = "";
    let wrkPlNm = "";
    if (odrNo == "L2") {
      wrkPlCd = ds_vesselPortCountListTempL2.getCellData(check, "wrkPlCd");
      wrkPlNm = ds_vesselPortCountListTempL2.getCellData(check, "wrkPlNm");
    } else {
      wrkPlCd = "";
      wrkPlNm = "";
    }

    // L1 이나  L2 만 출력..
    if (!(odrNo == "L1" || odrNo == "L2")) {
      continue;
    }
    let orgCd = ds_vesselPortCountListTempL2.getCellData(check, "lunionOrgCd");
    let portCnt = ds_vesselPortCountListTempL2.getCellData(check, "portcnt");
    let vsslCd = ds_vesselPortCountListTempL2.getCellData(check, "vsslCd");
    let chiefNo = ds_vesselPortCountListTempL2.getCellData(check, "chiefNo");
    let impExpClsCd = ds_vesselPortCountListTempL2.getCellData(check, "expimpClsCd");
    let odrKndCd = odrNo;
    odrNo = "";

    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    let data = {
      reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_3.ozr",
      odiParam: {
        orgCd: orgCd,
        portCnt: portCnt,
        vsslCd: vsslCd,
        cvsslMgntNo: cvsslMgntNo,
        odrNo: odrNo,
        odrKndCd: odrKndCd,
        wrkStYmDd: ica_wrkStYmDd.getValue(),
        wrkEndYmDd: ica_wrkEndYmDd.getValue(),
        wrkPlCd: wrkPlCd,
        wrkPlNm: wrkPlNm,
        impExpClsCd: impExpClsCd,
        rsltsStDt: ica_wrkStYmDd.getValue(),
        rsltsEndDt: ica_wrkEndYmDd.getValue(),
        wageRetroactYn: acb_wageRetroactYn.getValue(),
        chiefNo: chiefNo
      },
      viewerParam: {
        useprogressbar: false,
        // 프로그레스바 쓸지 말지
        mode: "preview"
        // printcommand : true,
        // zoom : 90, // 배율 설정
      },
      formParam: {}
    };
    await scwin.openPopup(data);
  }
};

//-------------------------------------------------------------------------
// 모선별 노입 집계표 
//-------------------------------------------------------------------------
scwin.btn_f_OzReport04_onClick = function (e) {
  debugger;
  let check = ds_vesselPortCountList.getRowPosition();
  if ($c.gus.cfIsNull($p, check) || check < 0) {
    $c.win.alert($p, "노임 집계표에서 항목을 선택 하세요.");
    return;
  }
  let odrNo = ds_vesselPortCountList.getCellData(check, "odrNo");
  odrNo = odrNo.substring(1, 3);
  let cvsslMgntNo = ds_vesselPortCountList.getCellData(check, "cvsslMgntNo");
  if (odrNo == "L1" || odrNo == "L2" && cvsslMgntNo != "") {} else {
    $c.win.alert($p, " 모선별 노임 집계표는 오더구분이 부두노임[L1]이거나 장치장[L2]이면서 본선번호가 있는 경우에만 출력 가능 합니다.");
    return;
  }
  let vsslNm = ds_vesselPortCountList.getCellData(check, "vsslNm");
  let arrvlportDt = ds_vesselPortCountList.getCellData(check, "arrvlportDt");
  let rsltsStdDt = ds_vesselPortCountList.getCellData(check, "rsltsStdDt");
  let wrkStYmDd = ds_vesselPortCountList.getCellData(check, "rsltsStdDt");
  let wrkEndYmDd = ds_vesselPortCountList.getCellData(check, "rsltsStdDt");

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_4.ozr",
    odiParam: {
      vsslNm: vsslNm,
      cvsslMgntNo: cvsslMgntNo,
      arrvlportDt: arrvlportDt,
      odrNo: ds_vesselPortCountList.getCellData(check, "odrNo"),
      rsltsStdDt: rsltsStdDt,
      wrkStYmDd: ica_wrkStYmDd.getValue(),
      wrkEndYmDd: ica_wrkEndYmDd.getValue(),
      pchsClntNo: ds_vesselPortCountList.getCellData(check, "pchsClntNo")
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 작업노임일보
//-------------------------------------------------------------------------
scwin.btn_f_OzReport05_onClick = function (e) {
  let check = ds_vesselPortCountList.getRowPosition();
  if ($c.gus.cfIsNull($p, check) || check < 0) {
    $c.win.alert($p, "노임 집계표에서 항목을 선택 하세요.");
    return;
  }
  let odrNo = ds_vesselPortCountList.getCellData(check, "odrNo");
  odrNo = odrNo.substring(1, 3);
  let cvsslMgntNo = ds_vesselPortCountList.getCellData(check, "cvsslMgntNo");
  if (odrNo == "L1") {} else {
    $c.win.alert($p, " 작업노임일보는 오더구분이 부두노임[L1] 경우에만 출력 가능 합니다.");
    return;
  }
  let rsltsStdDt = ds_vesselPortCountList.getCellData(check, "rsltsStdDt");
  let expimpClsCd = ds_vesselPortCountList.getCellData(check, "expimpClsCd");
  let wageSellGoodsCd = ds_vesselPortCountList.getCellData(check, "wageSellGoodsCd");

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_5.ozr",
    odiParam: {
      rsltsStdDt: rsltsStdDt,
      cvsslMgntNo: cvsslMgntNo,
      expimpClsCd: expimpClsCd,
      wageSellGoodsCd: wageSellGoodsCd,
      pchsClntNo: ds_vesselPortCountList.getCellData(check, "pchsClntNo")
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 작업장별 노임 집계표
//-------------------------------------------------------------------------
scwin.btn_f_OzReport06_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [acb_branCd, ica_wrkStYmDd, ica_wrkEndYmDd]))) {
    return;
  }
  if (!(await $c.gus.cfIsAfterDate($p, ica_wrkStYmDd.getValue(), ica_wrkEndYmDd.getValue()))) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkStYmDd.focus();
    return;
  }

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_6.ozr",
    odiParam: {
      lobranCd: acb_branCd.getValue(),
      wrkStYmDd: ica_wrkStYmDd.getValue(),
      wrkEndYmDd: ica_wrkEndYmDd.getValue(),
      wrkPlCd: ed_wrkPlCd.getValue()
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 작업장 작업노임일보
//-------------------------------------------------------------------------
scwin.btn_f_OzReport08_onClick = function (e) {
  let check = ds_vesselPortCountList.getRowPosition();
  if ($c.gus.cfIsNull($p, check) || check < 0) {
    $c.win.alert($p, "노임 집계표에서 항목을 선택 하세요.");
    return;
  }
  let odrNo = ds_vesselPortCountList.getCellData(check, "odrNo");
  odrNo = odrNo.substring(1, 3);
  let cvsslMgntNo = ds_vesselPortCountList.getCellData(check, "cvsslMgntNo");
  if (odrNo == "L2") {} else {
    $c.win.alert($p, " 작업장별  노임 집계표는 오더구분이  장치장[L2]인  경우에만 출력 가능 합니다.");
    return;
  }
  let rsltsStdDt = ds_vesselPortCountList.getCellData(check, "rsltsStdDt");
  let expimpClsCd = ds_vesselPortCountList.getCellData(check, "expimpClsCd");
  let wageSellGoodsCd = ds_vesselPortCountList.getCellData(check, "wageSellGoodsCd");

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_8.ozr",
    odiParam: {
      rsltsStdDt: rsltsStdDt,
      expimpClsCd: expimpClsCd,
      wageSellGoodsCd: wageSellGoodsCd,
      odrNo: ds_vesselPortCountList.getCellData(check, "odrNo"),
      pchsClntNo: ds_vesselPortCountList.getCellData(check, "pchsClntNo")
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
      // printcommand : true,
      // zoom : 90, // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 타창고 노임 지급명세서 발행
//-------------------------------------------------------------------------
scwin.f_OzReport01_onClick = function (e) {
  let odrNo = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "odrNo");
  odrNo = odrNo.substring(1, 3);
  if (odrNo != "L5") {
    $c.win.alert($p, "타창고 노임 지급 명세서는 오더구분이 타창고[L5]일 경우에만 출력 가능 합니다.");
    return;
  }
  ;
  let check = ica_wrkStYmDd.getValue();
  if (check == "") {
    $c.win.alert($p, "시작년월을 입력 하세요.");
    return;
  }
  check = "";
  check = ica_wrkEndYmDd.getValue();
  if (check == "") {
    $c.win.alert($p, "종료년월을 입력 하세요.");
    return;
  }
  let lunionOrgCd = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "lunionOrgCd");
  let wrkPlCd = ds_vesselPortCountList.getCellData(ds_vesselPortCountList.getRowPosition(), "wrkPlCd");

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)

  let tempWageRetroact = acb_wageRetroactYn.getValue();
  let wageRetroactYn = "";
  if (tempWageRetroact == "1") wageRetroactYn = 0;else if (tempWageRetroact == "2") wageRetroactYn = 1;

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  let data = {
    reportName: "ds/op/wrkrslts/wagewrkrslts/op_307_01_19_1.ozr",
    odiParam: {
      "lunionOrgCd": lunionOrgCd,
      "stDt": ica_wrkStYmDd.getValue(),
      "edDt": ica_wrkEndYmDd.getValue(),
      "wrkPlCd": wrkPlCd,
      "wageRetroactYn": wageRetroactYn
    },
    viewerParam: {
      useprogressbar: false // 프로그레스바 쓸지 말지
    },
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
    formParam: {}
  };

  // OZ 뷰어에 대한 설정(상세 설정은 "oz report viewer guide.pdf"를 참조)
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// OzReport 실행
//-------------------------------------------------------------------------
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
scwin.btn_f_openPopUp_onClick = function (e) {};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지점 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_branCd',search:'start',style:'width: 230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'$blank',title:'점소'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'울산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'충남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지점'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'권역 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_districtCd',search:'start',style:'width: 230px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_districCd_onViewChange',emptyItem:'true',emptyIndex:'-1',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank',visibleRowNum:'20'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업월일 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkYmDd',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkStYmDd',edToId:'ica_wrkEndYmDd',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'data',objTypeBtn:'data',titleFrom:'작업월일시작',titleTo:'작업월일종료'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{id:'ed_cvsslMgntNo',style:'',maxlength:'8','ev:onkeyup':'scwin.onkeyup',allowChar:'a-zA-Z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'돋보기'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_vssl',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',maxlengthCode:'4',objTypeCode:'Data',btnId:'btn_vssl',selectID:'retrieveVsslCdInfo','ev:onclickEvent':'scwin.udc_vssl_onClick','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_vssl_onChangeName'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_portcnt',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_portcntList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임항목 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wageItemCd',search:'start',style:'width: 160px;',submenuSize:'auto',sortOption:'label',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'20'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정산유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_adjmPatternCd',search:'start',style:'width: 230px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임+할증'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임+할증+세금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임+세금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세금'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'제세공과'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노조비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'7'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'노임+할증+제세공과'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'8'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'노임적용유형 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wageAdptPatternCd',search:'start',style:'width: 230px;',submenuSize:'auto',objType:'data',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_expimpClsCd',search:'start',style:'width: 120px;',submenuSize:'auto',chooseOption:'true',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미확정 소급분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_wageRetroactYn',search:'start',style:'width: 160px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'value delim label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소급분 제외'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소급분만'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'소급 포함'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_wrkPlCd',nameId:'ed_wrkPlNm',id:'udc_wrkPl',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',UpperFlagCode:'1',validExpCode:'작업장:yes','ev:onclickEvent':'scwin.udc_wrkPl_onClick','ev:onblurCodeEvent':'scwin.udc_wrkPl_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_wrkPl_onChangeName',selectID:'retrieveWrkPlInfo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cntrBulkClsCd',search:'start',style:'width: 230px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'컨테이너'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'TOC 구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_PierPosnClsCd',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TOC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'group2',style:'',gridUpYn:'N',gridID:'gr_vesselPortCountList',gridDownFn:'scwin.f_RunExcel',btnPlusYn:'Y',gridDownYn:'Y',id:'udc_grid_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'group2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vesselPortCountList',id:'gr_vesselPortCountList',style:'',visibleRowNumFix:'true',visibleRowNum:'8'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column105',value:'',displayMode:'label',colSpan:'',rowSpan:'2',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',value:'작업장',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',value:'오더번호',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',rowSpan:'2',value:'본선관리<br/>번호',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',rowSpan:'2',value:'선박',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',rowSpan:'2',value:'항차',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',rowSpan:'2',value:'수출입',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',rowSpan:'2',value:'작업일자',width:'100',sortable:'false',colMerge:'true'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column5',inputType:'text',value:'반',width:'210',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',rowSpan:'2',value:'노임항목',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column65',inputType:'text',value:'노임품목',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'작업단계',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'금액',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'상태',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',rowSpan:'2',value:'입/출항일자',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column49',inputType:'text',rowSpan:'2',value:'지급거래처번호',width:'150',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column41',inputType:'text',rowSpan:'2',value:'지급거래처명',width:'180',sortable:'false'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',value:'반',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'반장',width:'80',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'적용일자',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column66',inputType:'text',value:'품목',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column62',inputType:'text',value:'수량/톤',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'mergeTarget',value:'',displayMode:'label',hidden:'true',expression:'display(\'wrkPlNm\') + display(\'odrNo\')',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',textAlign:'left',width:'120',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'140',readOnly:'true',colMerge:'true',upperColumn:'wrkPlNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'expimpClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgCd',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chiefNm',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptStDt',value:'',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'150',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wageSellGoodsNm',inputType:'text',width:'120',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ton',inputType:'text',textAlign:'right',width:'100',readOnly:'true',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'wageWrkStpCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'pchsAmtSum',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',style:'',id:'dcsnClsCd',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportDt',inputType:'text',width:'100',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',textAlign:'left',width:'180',readOnly:'true'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'mergeTarget',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column108',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column104',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column103',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column102',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column96',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column95',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column94',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'',style:'',id:'column92',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("pchsAmtSum")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column88',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column86',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column109',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'합계',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column68',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tonFooter',inputType:'text',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column76',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column84',value:'0',displayMode:'label',textAlign:'right',expression:'sum("pchsAmtSum")',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column80',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column56',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column52',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',width:'180'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozReport03',style:'',type:'button','ev:onclick':'scwin.btn_ozReport03_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업일보및노임지불명세서'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_OzReport03_1',style:'',type:'button','ev:onclick':'scwin.btn_OzReport03_1_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업일보및노임지불명세서(일괄)'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_OzReport04',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport04_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'모선별노임집계표'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_OzReport05',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport05_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업노임일보'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_OzReport08',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport08_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업장 작업노임일보'}]}]}]},{T:1,N:'xf:group',A:{class:'inner',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_OzReport06',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport06_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업장별 노임집계표'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_OzReport03_2',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport03_2_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업일보및노임지불명세서(울산일괄)'}]}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_f_openPopUp',style:';visibility:hidden;',type:'button','ev:onclick':'scwin.btn_f_openPopUp_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'작업장변경'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_f_OzReport',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'노무자근무사항발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_f_OzReport01',style:'',type:'button','ev:onclick':'scwin.f_OzReport01_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타창고노임지급명세서발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_f_OzReport02',style:'',type:'button','ev:onclick':'scwin.btn_f_OzReport02_onClick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'타창고노임집계표발행'}]}]}]}]}]}]}]}]}]})