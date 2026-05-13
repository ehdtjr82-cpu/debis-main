/*amd /ui/tn/sd/odrmgnt/bulkodrreg/tn_202_02_10p.xml 53095 4f620415665eecec77181660f160caf87133bff2c3462786faa9b385dd19af2c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntPicNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_master_onbeforerowpositionchange','ev:onrowpositionchange':'scwin.ds_master_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarBranCd',name:'배차점소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqKndCd',name:'장비종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfClsCd',name:'요율구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'오더종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptDt',name:'적용일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictCd',name:'출발권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictNm',name:'출발지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictCd',name:'도착권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictNm',name:'도착지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'품명코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commNm',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkUnitCd',name:'단위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNo',name:'협력업체번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNm',name:'협력업체'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'MIN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'MAX'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_detail',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_detail_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictCd',name:'name2'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'name3'}},{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarBranCd',name:'name4'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'name5'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqKndCd',name:'name6'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'name7'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptDt',name:'name8'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkUnitCd',name:'name9'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'name10'}},{T:1,N:'w2:column',A:{dataType:'text',id:'pchsAmt',name:'name11'}},{T:1,N:'w2:column',A:{dataType:'text',id:'sortSeq',name:'name12'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'name13'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqNrmNm',name:'name14'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNo',name:'name15'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqNrmCd',name:'name16'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfClsCd',name:'name17'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'alloccarBranCd',name:'alloccarBranCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntNo',name:'clntNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'clntNm',name:'clntNm'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtNo',name:'ctrtNo'}},{T:1,N:'w2:key',A:{dataType:'text',id:'comnTpchsTrf',name:'comnTpchsTrf'}},{T:1,N:'w2:key',A:{dataType:'text',id:'trfClsCd',name:'trfClsCd'}},{T:1,N:'w2:key',A:{dataType:'text',id:'eqKndCd',name:'eqKndCd'}},{T:1,N:'w2:key',A:{id:'copCoClntNo',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_searchDtl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'alloccarBranCd',name:'배차점소'}},{T:1,N:'w2:column',A:{dataType:'text',id:'adptDt',name:'적용일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dptDistrictCd',name:'출발지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'arvDistrictCd',name:'도착지'}},{T:1,N:'w2:column',A:{dataType:'text',id:'commCd',name:'품명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'eqKndCd',name:'장비종류코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkUnitCd',name:'단위'}},{T:1,N:'w2:column',A:{dataType:'text',id:'trfClsCd',name:'요율구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'copCoClntNo',name:'협력업체번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'odrKndCd',name:'오더종류'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkStHh',name:'MIN'}},{T:1,N:'w2:column',A:{dataType:'text',id:'wrkEndHh',name:'MAX'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_ctrtSrchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtCheck',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtDtYn',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveBulkTpchsTrfListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_retrieve_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDtl',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.RetrieveBulkTpchsTrfDtlListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchDtl","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_ctrt',action:'/ncall.ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_ctrtSrchCond","key":"IN_DS1"},{"id":"ds_ctrt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrt","key":"OUT_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.sd.odrmgnt.bulkodrreg.SaveBulkTpchsTrfCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_detail","key":"IN_DS1"}',encoding:'UTF-8',mode:'asynchronous','ev:submitdone':'scwin.sbm_save_submitdone'}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ncall.ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/*
    화면 - $Id: tn_202_02_10p.jsp,v 1.10 2009/08/21 05:34:37 이종호 Exp $
    설명 - 벌크하불요율추가등록
		var url = "/tn/sd/odrmgnt/bulkodrreg/tn_202_02_10p.jsp?lobranCd=" + "6AA"	//필수
				+ "&clntNo=" + "117496" 		//필수
				+ "&clntNm=" + "남한제지(주)"		//선택
				+ "&ctrtNo=" + "C0705005202" 	//필수
				+ "&trfClsCd=" + "01"			//선택 - 파라메터 미전달 시 01(기본단가)로 설정
				+ "&eqKndCd=" + "CT";			//선택 - 파라메터 미전달 시 CT(카고트럭)로 설정
		window.showModalDialog(url, null, "dialogWidth:990px; dialogHeight:605px; status:no; scroll:yes");



    엔콜/배차관리/벌크 운송지시/벌크 운송지시 - 조회후 매입요율 버튼 클릭

    배차점소 6AA 부산지사
    출발예정일 2025/01/01 ~
*/

// 전역변수
scwin.saveRow = 0; // 팝업 오픈 시 indexRow = 0 focus
scwin.beforeRowChangeReturnValue = false; // rowPosition 변경 시 사용하려고 추가함
scwin.rowChangeReturnValue = false;
scwin.oldValue = []; // editbefore에서 사용할 전역변수

// ds_master f_GetGridColumns
scwin.colNmArr = ["trfClsCd", "ctrtNo", "alloccarBranCd", "eqKndCd", "odrKndCd", "dptDistrictCd", "dptDistrictCd", "dptDistrictNm", "arvDistrictCd", "arvDistrictNm", "commCd", "commNm", "wrkUnitCd", "copCoClntNo", "copCoClntNm", "wrkStHh", "wrkEndHh"];
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "벌크하불요율추가등록");
};
scwin.onpageload = async function () {
  // 요율구분
  const codeOptions = [{
    grpCd: "OP253",
    compID: "lc_trfClsCd, gr_master:trfClsCd"
  }, {
    grpCd: "SD113",
    compID: "gr_master:odrKndCd",
    opt: {
      "range": "1,B"
    }
  }, {
    grpCd: "LO102",
    compID: "gr_master:wrkUnitCd"
  }];
  $c.data.setCommonCode($p, codeOptions, function () {
    dlt_commonCodeSD113.setRowJSON(0, {
      "cd": "99",
      "cdNm": "전체"
    }, false);
    scwin.isCommonCodeLoaded = true;
  });

  // 차종
  const param = [{
    method: "getLuxeComboData",
    param1: "EquipmentEBC",
    param2: "retrieveBulkLogisticsEquipmentClss",
    param3: ["ZZ213"],
    compID: "lc_eqKndCd"
  }];
  $c.data.setGauceUtil($p, param);
  scwin.params = $c.data.getParameter($p);
  scwin.alloccarBranCd = $c.gus.cfIsNull($p, scwin.params["lobranCd"]) ? "" : scwin.params["lobranCd"];
  scwin.clntNo = $c.gus.cfIsNull($p, scwin.params["clntNo"]) ? "" : scwin.params["clntNo"];
  scwin.clntNm = $c.gus.cfIsNull($p, scwin.params["clntNm"]) ? "" : scwin.params["clntNm"];
  scwin.ctrtNo = $c.gus.cfIsNull($p, scwin.params["ctrtNo"]) ? "" : scwin.params["ctrtNo"];
  scwin.eqKndCd = $c.gus.cfIsNull($p, scwin.params["eqKndCd"]) ? "" : scwin.params["eqKndCd"];
  scwin.trfClsCd = $c.gus.cfIsNull($p, scwin.params["trfClsCd"]) ? "" : scwin.params["trfClsCd"];
};
scwin.onUdcCompleted = async function () {
  while (!scwin.isCommonCodeLoaded) {
    await new Promise(resolve => setTimeout(resolve, 50));
  }
  $c.gus.cfTurnCreateFlag($p, true);
  scwin.params = $c.data.getParameter($p);
  if ("n10102" == scwin.params.menuInfo.parentMenuId) {
    txt_clntNm.setReadOnly(true);
  }
  await scwin.f_InitSrchCond();
  await scwin.f_retrieve();
};
scwin.f_InitSrchCond = async function () {
  // 배차점소
  let e = await $c.sbm.execute($p, sbm_lobran);
  if (e.responseJSON.GAUCE.length > 0) {
    if (!$c.gus.cfIsNull($p, scwin.alloccarBranCd)) {
      lc_alloccarBranCd.setValue(scwin.alloccarBranCd);
    }
  }

  // 화주명
  if (!$c.gus.cfIsNull($p, scwin.clntNm)) {
    // $c.gus.cfSetValue(txt_clntNm, scwin.clntNm);
  }

  // 차종
  if (!$c.gus.cfIsNull($p, scwin.eqKndCd)) {
    lc_eqKndCd.setValue(scwin.eqKndCd);
  } else {
    lc_eqKndCd.setValue("CT");
  }

  // 요율구분
  if (!$c.gus.cfIsNull($p, scwin.trfClsCd)) {
    lc_trfClsCd.setValue(scwin.trfClsCd);
  } else {
    lc_trfClsCd.setSelectedIndex(0);
  }
  $c.gus.cfInitHidVal($p, [ed_clntNo, txt_clntNm]);

  // 화주명(code)
  if (!$c.gus.cfIsNull($p, scwin.clntNo)) {
    $c.gus.cfSetValue($p, ed_clntNo, scwin.clntNo);
    udc_clntNo.cfCommonPopUp(function (rtnList) {
      if (rtnList != null && rtnList[0] != "N/A") {
        $c.gus.cfSetValue($p, ed_clntNo, scwin.clntNo);
        $c.gus.cfSetValue($p, txt_clntNm, rtnList[1]);
      }
    }, scwin.clntNo // 화면에서의 ??? Code Element의  Value
    , null // 화면에서의 ??? Name Element의  Value
    , "T" // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
    , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서  
    , null // 보여주는 각 컬럼들의 폭    
    , null // 컬럼중에서 숨기는    컬럼 지정   
    , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의   사용자 정의  폭
    , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
    , null // 윈도우 위치 Y좌표   
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부   ("F")
    , 'F' // 전체검색허용여부 ("F")
    , "화주,화주코드/화주명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
    );
    await new Promise(resolve => setTimeout(resolve, 150));

    // 계약서
    await scwin.f_retrieveCtrt(scwin.clntNo);
    if (!$c.gus.cfIsNull($p, scwin.ctrtNo)) {
      lc_ctrtNo.setValue(scwin.ctrtNo);
    }
  }

  //260421 운영에서 포커스가 화주명으로 가는 것 방지
  lc_alloccarBranCd.focus();
};
scwin.f_retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [tbl_search]))) {
    return false;
  }
  if (lc_ctrtNo.getValue() == "선택") {
    await $c.gus.cfAlertMsg($p, "계약번호를 선택하십시오.");
    lc_ctrtNo.focus();
    return false;
  }
  ds_detail.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_retrieveDtl = async function () {
  ds_searchDtl.removeAll();
  ds_searchDtl.insertRow(0);
  $c.gus.f_CopyDataRow($p, ds_master, ds_searchDtl, ds_master.getRowPosition(), 0);
  let e = await $c.sbm.execute($p, sbm_retrieveDtl);
  if (e.responseJSON.OUT_DS1.length > 0) {
    // for=ds_detail event=OnLoadCompleted(rowCnt)
    var rowCnt = ds_detail.getTotalRow();
    if (rowCnt == 0) {
      return;
    }
    totalRowsDtl.setValue(rowCnt);
    if (scwin.afterDelete) {
      const rstatus = ds_master.getRowStatusValue(ds_master.getRowPosition());
      if (rstatus == 2 || rstatus == 0) return;
      for (var i = 0; i < ds_detail.getTotalRow(); i++) {
        ds_detail.deleteRow(i);
      }
      scwin.afterDelete = false;
    }
  }
};
scwin.f_retrieveCtrt = async function (clntNo) {
  ds_ctrtSrchCond.set("ctrtClntNo", clntNo); //화주코드  clntNo
  ds_ctrtSrchCond.set("ctrtCheck", "0"); //계약완료가 아닌 모든 계약번호 가져오기 위한 임시 값
  ds_ctrtSrchCond.set("ctrtDtYn", "1"); //계약완료가 아닌 모든 계약번호 가져오기 위한 임시 값

  var e = await $c.sbm.execute($p, sbm_ctrt);
  if (e.responseJSON.OUT_DS1.length > 0) {
    ds_ctrt.sort("ctrtNo", 1);
  }
};
scwin.f_save = async function () {
  if (ds_master.getRowStatusValue(ds_master.getRowPosition()) != 2 && ds_detail.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return false;
  }
  var isAllZero = true;
  for (var i = 0; i < ds_detail.getTotalRow(); i++) {
    if (ds_detail.getCellData(i, "pchsAmt") != 0) {
      isAllZero = false;
      break;
    }
  }
  if (isAllZero) {
    await $c.gus.cfAlertMsg($p, "모든 요율이 0 입니다. 요율을 확인하십시오.");
    return false;
  }
  if (ds_master.getCellData(ds_master.getRowPosition(), "wrkStHh") == "" || ds_master.getCellData(ds_master.getRowPosition(), "wrkEndHh") == "") {
    await $c.gus.cfAlertMsg($p, "적용구간을 확인해 주세요");
    return false;
  }
  if ((ds_master.getCellData(ds_master.getRowPosition(), "wrkUnitCd") == "VOT" || ds_master.getCellData(ds_master.getRowPosition(), "wrkUnitCd") == "VOC") && parseInt(ds_master.getCellData(ds_master.getRowPosition(), "wrkStHh")) >= parseInt(ds_master.getCellData(ds_master.getRowPosition(), "wrkEndHh"))) {
    await $c.gus.cfAlertMsg($p, "적용구간MIN을 확인해 주세요");
    gr_master.setFocusedCell(ds_master.getRowPosition(), 'wrkStHh');
    return false;
  }
  for (var i = 0; i < ds_detail.getTotalRow(); i++) {
    if (ds_master.getRowStatusValue(ds_master.getRowPosition()) == 2) {
      $c.gus.f_CopyDataRow($p, ds_master, ds_detail, ds_master.getRowPosition(), i);
      // f_CopyDataRow2(ds_master, ds_detail, ds_master.getRowPosition(), i
      //             , ["trfClsCd", "ctrtNo", "adptDt", "alloccarBranCd", "eqKndCd", "odrKndCd"
      //                 , "dptDistrictCd", "arvDistrictCd", "commCd", "wrkUnitCd", "copCoClntNo", "wrkStHh", "wrkEndHh"]);
    }
  }
  if (await $c.win.confirm($p, "저장하시겠습니까?")) {
    scwin.saveRow = ds_master.getRowPosition();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_CopyRow = async function () {
  if (!ds_master.getModifiedIndex().length == 0 || !ds_detail.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 있습니다. 저장 후 계속하십시오.");
    return false;
  }
  if (ds_master.getTotalRow() > 0) {
    var cnt = ds_master.getTotalRow();
    ds_master.insertRow(cnt);
    $c.gus.f_CopyDataRow($p, ds_master, ds_master, ds_master.getRowPosition(), cnt);
    scwin.beforeRowChangeReturnValue = true;
    gr_master.setFocusedCell(cnt, 0);
    ds_master.setCellData(ds_master.getRowPosition(), "adptDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
    $c.gus.cfPrepareHidVal($p, ds_master, ds_master.getRowPosition(), scwin.colNmArr);
    await scwin.f_retrieveDtl();
  } else {
    scwin.f_AddRow();
  }
};
scwin.f_AddRow = async function () {
  if (!ds_master.getModifiedIndex().length == 0 || !ds_detail.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 있습니다. 저장 후 계속하십시오.");
    return false;
  }
  var cnt = ds_master.getTotalRow();
  ds_master.insertRow(cnt);
  ds_master.setCellData(cnt, "alloccarBranCd", lc_alloccarBranCd.getValue());
  ds_master.setCellData(cnt, "eqKndCd", lc_eqKndCd.getValue());
  ds_master.setCellData(cnt, "ctrtNo", lc_ctrtNo.getValue());
  ds_master.setCellData(cnt, "trfClsCd", '01');
  ds_master.setCellData(cnt, "wrkStHh", '0000');
  ds_master.setCellData(cnt, "odrKndCd", '99');
  ds_master.setCellData(cnt, "adptDt", $c.date.getServerDateTime($p, "yyyyMMdd"));
  ds_master.setCellData(cnt, "copCoClntNo", '999999');
  ds_master.setCellData(cnt, "copCoClntNm", '전체');
  ds_master.setCellData(cnt, "wrkStHh", '0');
  ds_master.setCellData(cnt, "wrkEndHh", '0');
  scwin.beforeRowChangeReturnValue = true;
  gr_master.setFocusedCell(cnt, 0);
  $c.gus.cfPrepareHidVal($p, ds_master, ds_master.getRowPosition(), scwin.colNmArr);
  await scwin.f_retrieveDtl();
};
scwin.f_DeleteRow = async function () {
  var rowIdx = ds_master.getRowPosition();
  if (ds_master.getRowStatus(rowIdx) == "C") {
    scwin.afterDelete = true;
    ds_master.removeRow(rowIdx);
    ds_detail.removeAll();
  } else {
    scwin.beforeRowChangeReturnValue = true;
    scwin.rowChangeReturnValue = true;
    scwin.afterDelete = true;
    ds_master.deleteRow(rowIdx);
    scwin.beforeRowChangeReturnValue = true;
    gr_master.setFocusedCell(rowIdx, 0);
  }

  // scwin.sbm_retrieveDtl_submitdone
};
scwin.f_CancelRow = function () {
  $c.data.undoAll($p, ds_detail);
  $c.data.undoRow($p, ds_master, "Y");
};
scwin.f_DeleteDtlRow = async function () {
  if (ds_master.getRowStatusValue(ds_master.getRowPosition()) == 2) {
    await $c.gus.cfAlertMsg($p, "신규 추가된 요율은 삭제할 수 없습니다.");
    return;
  }
  if (ds_detail.getCellData(ds_detail.getRowPosition(), "pchsAmt") == 0 && ds_detail.getRowStatusValue(ds_detail.getRowPosition()) == 0) {
    await $c.gus.cfAlertMsg($p, "지정된 요율이 없습니다.");
    return;
  }
  ds_detail.deleteRow(ds_detail.getRowPosition());
};
scwin.f_CancelDtlRow = function () {
  $c.data.undoRow($p, ds_detail.getRowPosition());
};

// 화주 조회 팝업
scwin.f_openBilgMchtPopUp = function (pClose) {
  var codeObj = ed_clntNo;
  var nameObj = txt_clntNm;
  if (pClose == 'T' && $c.gus.cfCanOpenPopup($p, codeObj, nameObj) == false) {
    if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, codeObj))) {
      ds_ctrt.removeAll();
    }
    return;
  }
  udc_clntNo.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
    if (rtnList != null && rtnList[0] != "N/A") {
      scwin.f_retrieveCtrt(rtnList[0]);
    }
  }, $c.gus.cfGetValue($p, codeObj) // 화면에서의 ??? Code Element의  Value
  , $c.gus.cfGetValue($p, nameObj) // 화면에서의 ??? Name Element의  Value
  , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭    
  , null // 컬럼중에서 숨기는    컬럼 지정   
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
  , null // 윈도우 위치 Y좌표   
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , 'F' // 전체검색허용여부 ("F")
  , "화주,화주코드/화주명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
  chb_comnTpchsTrf.setValue("0");
  // lc_ctrtNo.Enable = true; TODO
};
scwin.f_ToggleComnTpchsTrf = function () {
  if (chb_comnTpchsTrf.getValue() == "1") {
    var cnt = ds_ctrt.getTotalRow();
    ds_ctrt.insertRow(cnt);
    ds_ctrt.setRowPosition(cnt);
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtNo", '99999999999');
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "clntPicNm", '');
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtStDt", '');
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "ctrtEndDt", '');
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "empNm", '');
    ds_ctrt.setCellData(ds_ctrt.getRowPosition(), "rmk", '');
    lc_ctrtNo.setSelectedIndex(ds_ctrt.getRowPosition());
    $c.gus.cfDisableObjects($p, [lc_ctrtNo, ed_clntNo, txt_clntNm, img_bilgMcht]);
    // img_bilgMcht.style.cursor = "arrow";
  } else {
    $c.data.undoAll($p, ds_ctrt);
    lc_ctrtNo.setSelectedIndex(0);
    $c.gus.cfEnableObjects($p, [lc_ctrtNo, ed_clntNo, txt_clntNm, img_bilgMcht]);
    // img_bilgMcht.style.cursor = "hand";
  }
};

// columnID = dptDistrictNm, arvDistrictNm
scwin.f_districtGridPopUp = async function (dataSet, pWinCloseTF, pAllSearchTF, colid, colArray) {
  var row = dataSet.getRowPosition();
  if (row < 0) {
    return;
  }
  var newData = dataSet.getCellData(row, colid);
  var oldData = scwin.oldValue[1]; //$c.gus.f_GetGridHidden(dataSet, row, colid);

  if (pWinCloseTF == "T") {
    var ret = $c.gus.f_CanGridPopup($p, dataSet, colid, newData, oldData, colArray);
    if (!ret) {
      return false;
    }
  }
  var pWhere = "";
  if (chb_comnTpchsTrf.getValue() == "1") {
    pWhere = ",,WDE";
  } else {
    if ($c.gus.cfIsNull($p, lc_ctrtNo.getValue())) {
      await $c.gus.cfAlertMsg($p, "계약서번호를 선택하세요");
      lc_ctrtNo.focus();
      return;
    } else {
      pWhere = ",," + lc_ctrtNo.getValue();
    }
  }
  udc_gridpopup1.cfCommonPopUp(function (rtnList) {
    if (rtnList == null) {
      return;
    }
    if (rtnList[0] == "N/A") {
      $c.gus.f_SetGridReturnValue($p, scwin.oldValue, dataSet, row, colArray);
    } else {
      $c.gus.f_SetGridReturnValue($p, rtnList, dataSet, row, colArray);
    }
  }, newData // 화면에서의 ??? Code Element의  Value
  , "" // 화면에서의 ??? Name Element의  Value
  , pWinCloseTF // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭    
  , null // 컬럼중에서 숨기는    컬럼 지정   
  , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
  , null // 윈도우 위치 Y좌표   
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , pAllSearchTF // 전체검색허용여부 ("F")
  , "권역조회,권역코드/권역명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.f_ExistSameRowYn = function (dataSet, colArray) {
  if (dataSet == null || colArray == null) {
    return false;
  }
  if (dataSet.getTotalRow() <= 1) {
    return false;
  }
  for (var i = 0; i < dataSet.getTotalRow(); i++) {
    for (var j = i + 1; j < dataSet.getTotalRow(); j++) {
      if (i == j) {
        continue;
      }
      if (scwin.f_getRowDataStr(dataSet, i, colArray) == scwin.f_getRowDataStr(dataSet, j, colArray)) {
        return true;
      }
    }
  }
  return false;
};
scwin.f_getRowDataStr = function (dataSet, row, colArray) {
  if (dataSet == null || colArray == null || row == null) {
    return "";
  }
  if (!scwin.f_IsArray(colArray)) {
    return "";
  }
  if (row < 0) {
    return "";
  }
  var retArray = [];
  for (var i = 0; i < colArray.length; i++) {
    retArray[retArray.length] = dataSet.getCellData(row, colArray[i]);
  }
  return retArray.toString();
};

// columnID = commNm
scwin.f_commGridPopUp = function (dataSet, pWinCloseTF, pAllSearchTF, colid, colArray) {
  var row = dataSet.getRowPosition();
  if (row < 0) {
    return;
  }
  var newData = dataSet.getCellData(row, colid);
  var oldData = scwin.oldValue[1]; //$c.gus.f_GetGridHidden(dataSet, row, colid);

  if (pWinCloseTF == "T") {
    var ret = $c.gus.f_CanGridPopup($p, dataSet, colid, newData, oldData, colArray);
    if (!ret) {
      return false;
    }
  }
  udc_gridpopup2.cfCommonPopUp(function (rtnList) {
    if (rtnList == null) {
      return;
    }
    if (rtnList[0] == "N/A") {
      $c.gus.f_SetGridReturnValue($p, scwin.oldValue, dataSet, row, colArray);
    } else {
      $c.gus.f_SetGridReturnValue($p, rtnList, dataSet, row, colArray);
    }
  }, newData // 화면에서의 ??? Code Element의  Value
  , "" // 화면에서의 ??? Name Element의  Value
  , pWinCloseTF // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭    
  , null // 컬럼중에서 숨기는    컬럼 지정   
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
  , null // 윈도우 위치 Y좌표   
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , pAllSearchTF // 전체검색허용여부 ("F")
  , "품명조회,품명코드/품명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

// columnId = copCoClntNm
scwin.f_copCoClntGridPopUp = function (dataSet, pWinCloseTF, pAllSearchTF, colid, colArray) {
  var row = dataSet.getRowPosition();
  if (row < 0) {
    return;
  }
  var newData = dataSet.getCellData(row, colid);
  var oldData = scwin.oldValue[1]; //$c.gus.f_GetGridHidden(dataSet, row, colid);

  if (pWinCloseTF == "T") {
    var ret = $c.gus.f_CanGridPopup($p, dataSet, colid, newData, oldData, colArray);
    if (!ret) {
      return false;
    }
  }
  udc_gridpopup3.cfCommonPopUp(function (rtnList) {
    if (rtnList == null) {
      return;
    }
    if (rtnList[0] == "N/A") {
      $c.gus.f_SetGridReturnValue($p, scwin.oldValue, dataSet, row, colArray);
    } else {
      $c.gus.f_SetGridReturnValue($p, rtnList, dataSet, row, colArray);
    }
  }, newData // 화면에서의 ??? Code Element의  Value
  , "" // 화면에서의 ??? Name Element의  Value
  , pWinCloseTF // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭    
  , null // 컬럼중에서 숨기는    컬럼 지정   
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
  , null // 윈도우 위치 Y좌표   
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , pAllSearchTF // 전체검색허용여부 ("F")
  , "협력업체조회,협력업체 거래처번호/협력업체명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};

// 그리드 팝업 버튼 이미지 변경
scwin.f_ChangeGridPopupBtn = function (grid, colid) {
  // if(grid == null || cfIsNull(colid)) return;
  // if(grid.ColumnProp(colid, "EditStyle") != "Popup") return;

  // if(colid.search(/Dt$/) != -1) {
  //     grid.UrlImages = CALENDAR_BTN;
  // } else {
  //     grid.UrlImages = SEARCH_BTN;
  // }
};

// TODO
scwin.f_ToggleGridColumn = function (mode, grid, column, prop) {
  // if(grid == null || column == null) return;

  // if(f_IsArray(column)) {
  //     for(var i=0; i < column.length; i++) {
  //         f_ToggleGridColumn(mode, grid, column[i], prop);
  //     }
  // } else {
  //     grid.ColumnProp(column,"Edit") = (!mode ? "None" : (cfIsNull(prop) ? "Any" : prop));
  // }
};
scwin.f_IsArray = function (inObj) {
  return inObj instanceof Array;
};

// 팝업 종료
scwin.f_close = function () {
  // window.close();
  $c.win.closePopup($p);
};

// <!-----------------------------------------------------------------------------
//     G A U C E   C O M P O N E N T' S   E V E N T S  
// ------------------------------------------------------------------------------>

scwin.sbm_retrieveDtl_submitdone = function (e) {
  // if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // // for=ds_detail event=OnLoadCompleted(rowCnt)
  // var rowCnt = ds_detail.getTotalRow();
  // if (rowCnt == 0) {
  //     return;
  // }

  // totalRowsDtl.setValue(rowCnt);

  // if (scwin.afterDelete) {
  //     if (ds_master.getRowStatusValue(ds_master.getRowPosition()) == 1) {
  //         return;
  //     }

  //     for (var i = 0; i < ds_detail.getTotalRow(); i++) {
  //         ds_detail.deleteRow(i);
  //     }

  //     scwin.afterDelete = false;
  // }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; // OnFail

  // for=ds_master event=OnLoadCompleted(rowCnt)
  var rowCnt = ds_master.getTotalRow();
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p)) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  } else {
    gr_master.refresh();
    if (scwin.saveRow > -1) {
      if (scwin.saveRow >= rowCnt) {
        gr_master.setFocusedCell(0, 0);
      } else {
        gr_master.setFocusedCell(scwin.saveRow, 0);
      }
      scwin.saveRow = -1;
    } else {
      gr_master.setFocusedCell(0, 0);
    }
  }
  totalRows.setValue(rowCnt);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
  scwin.f_retrieve();
};

// for=ds_master event=CanRowPosChange(row)
// info - oldRowIndex, newRowIndex
scwin.ds_master_onbeforerowpositionchange = async function (info) {
  if (scwin.beforeRowChangeReturnValue) {
    scwin.beforeRowChangeReturnValue = false;
    return;
  }
  var row = info.newRowIndex;
  if (row < 0 || row == null) {
    return;
  }
  if (ds_master.getModifiedIndex().length != 0 || ds_detail.getModifiedIndex().length != 0) {
    ds_master.setEventPause("", true);
    await $c.gus.cfAlertMsg($p, "변경된 사항이 있습니다. 저장 후 계속하십시오.");
    gr_master.setFocusedCell(info.oldRowIndex, 0);
    ds_master.setEventPause("", false);
    return false;
  }
};

// for=ds_master event=OnRowPosChanged(row)
// info - oldRowIndex, newRowIndex
scwin.ds_master_onrowpositionchange = async function (info) {
  if (scwin.rowChangeReturnValue) {
    scwin.rowChangeReturnValue = false;
    return;
  }
  var row = info.newRowIndex;
  if (row < 0 || row == null) {
    return;
  }
  $c.gus.cfPrepareHidVal($p, ds_master, row, scwin.colNmArr);
  await scwin.f_retrieveDtl();
};

// for=ds_detail event=OnRowPosChanged(row)
scwin.ds_detail_onrowpositionchange = function (info) {
  // info - oldRowIndex, newRowIndex
  if (info.newRowIndex < 0) {
    return;
  }
};

// for=gr_master event=OnColumnPosChanged(row,colid)
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  // f_ChangeGridPopupBtn(this, colid);

  if (columnId == "wrkStHh" || columnId == "wrkEndHh") {
    return;
  }

  // f_ToggleGridColumn((ds_master.RowStatus(row) == 1), this, colid);
  if (ds_master.getRowStatusValue(rowIndex) == 2) {
    gr_master.setCellReadOnly(rowIndex, columnIndex, false);
  }
};

// GRID EVENT : gr_emp에서 OnPopUp이벤트 발생시
// for=gr_master event=OnPopup(row,colid,data)
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  var winAutoCloseTF = 'F';
  var colid = gr_master.getFocusedColumnID();
  switch (colid) {
    case "dptDistrictNm":
      scwin.f_districtGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["dptDistrictCd", "dptDistrictNm"]);
      break;
    case "arvDistrictNm":
      scwin.f_districtGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["arvDistrictCd", "arvDistrictNm"]);
      break;
    case "commNm":
      scwin.f_commGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["commCd", "commNm"]);
      break;
    // case "adptDt":
    // cfOpenCalendar(this, row, colid);
    // break;
    case "copCoClntNm":
      scwin.f_copCoClntGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["copCoClntNo", "copCoClntNm"]);
      break;
  }

  // scwin.gr_master_OnExit(rowIndex, colid);
};

// for=gr_master event=OnExit(row,colid,oldData)
scwin.gr_master_OnExit = function (row, colid) {
  var winAutoCloseTF = 'T';
  switch (colid) {
    case "dptDistrictNm":
      scwin.f_districtGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["dptDistrictCd", "dptDistrictNm"]);
      break;
    case "arvDistrictNm":
      scwin.f_districtGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["arvDistrictCd", "arvDistrictNm"]);
      break;
    case "commNm":
      scwin.f_commGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["commCd", "commNm"]);
      break;
    case "copCoClntNm":
      scwin.f_copCoClntGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["copCoClntNo", "copCoClntNm"]);
      break;
  }
};
scwin.gr_master_onbeforeedit = function (rowIndex, columnIndex, value) {
  //oldValue 설정
  var colArr = [];
  var colid = gr_master.getFocusedColumnID();
  switch (colid) {
    case "dptDistrictNm":
      colArr = ["dptDistrictCd", "dptDistrictNm"];
      break;
    case "arvDistrictNm":
      colArr = ["arvDistrictCd", "arvDistrictNm"];
      break;
    case "commNm":
      colArr = ["commCd", "commNm"];
      scwin.f_commGridPopUp(ds_master, winAutoCloseTF, 'F', colid, ["commCd", "commNm"]);
      break;
    case "copCoClntNm":
      colArr = ["copCoClntNo", "copCoClntNm"];
      break;
  }
  scwin.oldValue[0] = ds_master.getCellData(rowIndex, colArr[0]); //cd
  scwin.oldValue[1] = ds_master.getCellData(rowIndex, colArr[1]); //nm
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  if (value != scwin.oldValue[1] && value != "") {
    var colid = gr_master.getFocusedColumnID();
    scwin.gr_master_OnExit(rowIndex, colid);
  }
};

// -----------------------------------------------------------------
// 화주 udc
// -----------------------------------------------------------------
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  // for=ed_clntNo event=OnKillFocus()
  scwin.f_openBilgMchtPopUp('T');
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openBilgMchtPopUp('F');
};

// 체크박스
scwin.chb_comnTpchsTrf_onchange = function (info) {
  scwin.f_ToggleComnTpchsTrf();
};

// 차량규격벌 요율 그리드 - 요율 컬럼 format 설정 
scwin.grd_float = function (data) {
  return $c.num.formatNumber($p, $c.num.floor($p, Number(data), 3));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_common_textbox',type:'page',variableClone:'true',src:'/cm/udc/common_textbox.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_alloccarBranCd',search:'start',style:'width:150px;',submenuSize:'auto',validExp:'배차점소:yes',title:'배차점소',allOption:'',chooseOption:'',ref:'data:ds_search.alloccarBranCd',chooseOptionLabel:'전체',disableEdit:'true',sortOption:'label',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'화주명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntNo',id:'udc_clntNo',nameId:'txt_clntNm',btnId:'img_bilgMcht',validExpCode:'화주명',mandatoryCode:'true',maxlengthCode:'6',objTypeName:'data',objTypeCode:'data',selectID:'retrieveBilgMchtList_tpro','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent',refDataCollection:'ds_search',code:'clntNo',name:'clntNm',validTitle:'화주명'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtNo',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_search.ctrtNo',displayMode:'value',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'',rowMouseOver:'',nodeset:'data:ds_ctrt',width:'600',selectedRowColor:'',label:'ctrtNo',visibleRowNum:'',autoFit:'',value:'ctrtNo',rowMouseOverColor:'',height:'200'},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'width:90px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'width:70px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'width:70px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'width:70px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'width:70px;',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'width:180px;',headerStyle:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'',id:'chb_comnTpchsTrf',ref:'data:ds_search.comnTpchsTrf',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0','ev:onchange':'scwin.chb_comnTpchsTrf_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'공통하불요율'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'요율구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_trfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',ref:'data:ds_search.trfClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_eqKndCd',search:'start',style:'width:150px;',submenuSize:'auto',mandatory:'true',validExp:'차종:yes',disableEdit:'true',ref:'data:ds_search.eqKndCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_InitSrchCond'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'벌크하불요율 등록정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_master',style:'',id:'gr_master',class:'wq_gvw',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_master_oncellclick',dataDragSelect:'false','ev:onafteredit':'scwin.gr_master_onafteredit','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:onbeforeedit':'scwin.gr_master_onbeforeedit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'계약번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'배차점소',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column15',value:'장비종류코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'요율구분',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'오더종류',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'적용일자',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'출발권역코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column5',value:'출발지',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'도착권역코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column34',value:'도착지',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'품명코드',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'품명',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'단위',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'협력업체번호',displayMode:'label',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'협력업체',displayMode:'label',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column37',value:'적용구간',displayMode:'label',colSpan:'2',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'MIN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'MAX',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'alloccarBranCd',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqKndCd',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'trfClsCd',inputType:'select',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'select',sortable:'true',allOption:'',chooseOption:'',chooseOptionLabel:'전체',ref:'',defaultValue:'',readOnly:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'calendar',sortable:'true',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'textImage',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'textImage',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'textImage',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'wrkUnitCd',inputType:'select',textAlign:'left',sortable:'true',readOnly:'true',emptyItem:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNo',inputType:'text',hidden:'true',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'copCoClntNm',inputType:'textImage',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStHh',inputType:'text',textAlign:'right',maxLength:'4'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkEndHh',inputType:'text',textAlign:'right',maxLength:'4'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'totalRows',label:'0',class:'num',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyRow',label:'삭제',type:'button',class:'btn sm',objType:'ctrlBtn','ev:onclick':'scwin.f_CopyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnRowAddObj:'btn_addRow',btnCancelObj:'btn_cancelRow',rowAddFunction:'scwin.f_AddRow',cancelFunction:'scwin.f_CancelRow',rowDelFunction:'scwin.f_DeleteRow',gridID:'gr_master',rowAddObjType:'ctrlBtn',rowDelObjType:'ctrlBtn',cancelObjType:'ctrlBtn',btnRowDelObj:'btn_deleteRow',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 300px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량규격벌 요율',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detail',style:'',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'장비규격코드',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량규격',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'요율',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmCd',inputType:'text'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqNrmNm',inputType:'text',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',textAlign:'right',dataType:'float',maxLength:'25.13',displayFormatter:'scwin.grd_float'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRowsDtl',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]},{T:1,N:'xf:group',A:{style:'width:200px; height:200px;display: none;',id:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveDistrictList2_tpro',codeId:'',validTitle:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',nameId:'',style:'',id:'udc_gridpopup1'}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_gridpopup2',nameId:'',popupID:'',selectID:'retrieveCommInfo_tpro',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',style:'',validTitle:''}},{T:1,N:'w2:udc_comCode',A:{codeId:'',id:'udc_gridpopup3',nameId:'',popupID:'',selectID:'retrieveCoopList_tpro',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',style:'',validTitle:''}}]}]}]}]}]})