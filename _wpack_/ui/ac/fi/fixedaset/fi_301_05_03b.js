/*amd /ui/ac/fi/fixedaset/fi_301_05_03b.xml 37887 e4e2196debca7ad1fcd64b3ff796a5115581b0b26d51d0cfb8eccef86853b6d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'acqDtStDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acqDtEndDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deprCompleteYn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptNm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixedAsetNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'coClsCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_asetPattern',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'asetPatternCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'asetPatternNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'asetPatternCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'asetKndNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acctDeptNm',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acqDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'acqAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'qty',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'name1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_detail',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'histDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'fixedAsetHistClsCd',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'histQty',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'asetIncrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'asetDecrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'provIncrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'provDecrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deprIncrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'deprDecrAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'dispAmt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'slipNo',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'postDt',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'histRate',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'histArea',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'histSvcLife',name:'name1'}},{T:1,N:'w2:column',A:{dataType:'text',id:'histSvcLifeMonth',name:'name1'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_asetPattern',action:'/ac.fi.fixedaset.RetreiveFixedAsetPatternListCMD.do?useYn=1',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_asetPattern","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_asetPattern_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.fixedaset.RetrieveAssetsInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_search_detail',action:'/ac.fi.fixedaset.RetrieveAssetsInformationHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_301_05_03b
// 이름     : 고정자산변경이력(원자산기준)
// 경로     : 회계/재무회계/고정자산/
// 작 성 자 : 오영재
// 작 업 일 : 2025-11-12
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
//var hid_fixedAsetHistClsCd = ACConstants.ASET_HISTCD_TRANSFER;

// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.loginAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.loginAcctDeptNm = scwin.memJson.acctDeptNm;
scwin.checkUser = false;
scwin.planYr = "";
scwin.acctDeptCd = "";
scwin.ver = "";
scwin.clsCd = "";
scwin.vLoginCoCd = $c.gus.cfIsNull($p, scwin.memJson.coCd) ? '' : scwin.memJson.coCd;
scwin.vLoginCoClsCd = $c.gus.cfIsNull($p, scwin.memJson.coClsCd) ? '' : scwin.memJson.coClsCd;
scwin.vUserHomeClsCd = scwin.memJson.userHomeClsCd;
scwin.isSubCompany = false;
scwin.privAdmin = scwin.memJson.privAdmin;
scwin.txtCoClsCd = "";
scwin.onpageload = function () {
  scwin.dateStr = $c.date.getServerDateTime($p, "yyyyMMdd");
  //자산유형
  $c.sbm.execute($p, sbm_asetPattern);
  const codeOptions = [{
    grpCd: "FI014",
    compID: "gr_detailN:fixedAsetHistClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  udc_acqDate.setInitDate(scwin.dateStr.substring(0, 6) + "01", scwin.dateStr);
  scwin.f_FieldClear();
  scwin.f_SetSrchDefault();
  scwin.f_setCompanyInfo();
};
scwin.sbm_asetPattern_submitdone = function () {};

//-------------------------------------------------------------------------
// 자회사 회계 시스템 추가에 따른 설정 
//-------------------------------------------------------------------------
scwin.f_setCompanyInfo = function (e) {
  // 사용자 구분이 자회사('SA')가 아닌 경우, 소속회사를  '동부 EXPRESS'로  Default set
  if (scwin.vUserHomeClsCd != ACConstants.SUBSIDIARY_USER_HOME_CLS_CD) {
    scwin.vLoginCoCd = ACConstants.CO_CD_DONGBU;
    scwin.vLoginCoClsCd = ACConstants.CO_CLS_CD_DONGBU;
  }
  ed_coCd.setValue(scwin.vLoginCoCd);
  scwin.f_PopUpCompanyInfo('T');
  if ('T' == scwin.privAdmin || !scwin.isSubCompany) {
    // ADMIN 권한이 있는 경우, 동부 EXPRESS 인 경우 
    $c.gus.cfEnableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  } else {
    $c.gus.cfDisableObjects($p, [ed_coCd, ed_coNm, btn_company]);
  }
};

//-------------------------------------------------------------------------
// 회사 입력 팝업 
//-------------------------------------------------------------------------
scwin.f_PopUpCompanyInfo = async function (pWinCloseTF) {
  /*
   var rtnList = cfCommonPopUp("retrieveDongbuGroupCompanyInfo"
  				,ed_coCd.text, txt_coNm.value
  				,pWinCloseTF,null,null,null,null
  				,null,null,null,null,null);
  */
  udc_coCd.cfCommonPopUp(scwin.udc_coCd_callBackFunc // 콜백 함수
  , ed_coCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_coNm.getValue() // 화면에서의 ??? Name Element의 Value
  , pWinCloseTF // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};
scwin.udc_coCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_coCd.setValue(rtnList[0]); // 코드
    ed_coNm.setValue(rtnList[5]); // 회사명
    scwin.txtCoClsCd = rtnList[1]; // 회사구분
  } else {
    ed_coCd.setValue("");
    ed_coNm.setValue("");
    scwin.txtCoClsCd = "";
  }
  if (scwin.txtCoClsCd > ACConstants.CO_CLS_CD_DONGBU) {
    // 자회사 회계 시스템 
    scwin.isSubCompany = true;
  } else {
    scwin.isSubCompany = false;
  }
};
scwin.udc_srchAcctDeptCd_callBackFunc = function (rtnList) {
  // SET
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_srchAcctDeptCd.setValue(rtnList[0]); // 코드
    ed_srchAcctDeptNm.setValue(rtnList[1]); // 회사명
  } else {
    ed_srchAcctDeptCd.setValue("");
    ed_srchAcctDeptNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, [ed_acqDtStDt, ed_acqDtEndDt]);
};

//-------------------------------------------------------------------------
// 조회 기본값 설정
//-------------------------------------------------------------------------
scwin.f_SetSrchDefault = function (e) {
  udc_acqDate.setInitDate(scwin.dateStr.substring(0, 6) + "01", scwin.dateStr);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  let rtn = scwin.f_RetrieveValidate();
  if (!rtn) return;
  dma_search.set("acqDtStDt", ed_acqDtStDt.getValue()); //취득일
  dma_search.set("acqDtEndDt", ed_acqDtEndDt.getValue());
  dma_search.set("asetPatternCd", lc_asetPatternCd.getValue()); // 자산유형
  dma_search.set("deprCompleteY", lc_deprCompleteYn.getValue()); //상각
  dma_search.set("acctDeptCd", ed_srchAcctDeptCd.getValue()); //부서
  dma_search.set("acctDeptNm", ed_srchAcctDeptNm.getValue());
  dma_search.set("fixedAsetNo", ed_srchFixedAsetNo.getValue()); //자산번호
  dma_search.set("coCd", ed_coCd.getValue()); //회사코드
  dma_search.set("coClsCd", scwin.txtCoClsCd);
  $c.sbm.execute($p, sbm_search);
};
scwin.sbm_search_submitdone = function (e) {
  ed_totalrows.setValue(ds_master.getRowCount());
  if (ds_master.getRowCount() > 0) {
    //master 조회 후는 0 세팅 
    scwin.f_RetrieveAssetHistList(0);
  }
};
scwin.sbm_search_detail_submitdone = function (e) {
  ed_totalrows2.setValue(ds_detail.getRowCount());
};
scwin.f_RetrieveAssetHistList = function (rowIndex) {
  if (rowIndex < 0) return;
  dma_search.set("fixedAsetNo", ds_master.getCellData(rowIndex, "fixedAsetNo"));
  dma_search.set("coCd", ds_master.getCellData(rowIndex, "coCd"));
  dma_search.set("coClsCd", ds_master.getCellData(rowIndex, "coClsCd"));
  $c.sbm.execute($p, sbm_search_detail);
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회 검증
//-------------------------------------------------------------------------
scwin.f_RetrieveValidate = async function (e) {
  let ret;
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue()) && $c.gus.cfIsNull($p, lc_asetPatternCd.getValue()) && $c.gus.cfIsNull($p, ed_srchAcctDeptCd.getValue()) && $c.gus.cfIsNull($p, ed_srchAcctDeptNm.value) && $c.gus.cfIsNull($p, ed_srchFixedAsetNo.getValue())) {
    $c.win.alert($p, "조회조건을 하나 이상 입력해 주세요.");
    ed_acqDtStDt.focus();
    return false;
  }
  ret = await $c.gus.cfValidate($p, [tbl_search]);
  if (!ret) {
    return false;
  }

  //취득 일자 체크
  if ($c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && !$c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtStDt.focus();
    return false;
  }
  if (!$c.gus.cfIsNull($p, ed_acqDtStDt.getValue()) && $c.gus.cfIsNull($p, ed_acqDtEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_003, ["취득일자"]);
    ed_acqDtEndDt.focus();
    return false;
  }

  // 시작일자, 종료 일자 순서 CHECK
  if (!$c.gus.cfIsAfterDate($p, ed_acqDtStDt.getValue().trim(), ed_acqDtEndDt.getValue().trim())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_acqDtStDt.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 회사코드 찾기버튼 클릭시
//-------------------------------------------------------------------------
scwin.udc_coCd_onclickEvent = function (e) {
  scwin.f_PopUpCompanyInfo('F');
};

//-------------------------------------------------------------------------
// 회사코드입력시
//-------------------------------------------------------------------------
scwin.udc_coCd_onblurCodeEvent = function (e) {
  ed_coNm.setValue("");
  scwin.f_PopUpCompanyInfo('T');
};
scwin.udc_srchAcctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '1', 'CD');
};
scwin.udc_srchAcctDeptCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_srchAcctDeptCd, ed_srchAcctDeptNm, '1', 'NM');
};
scwin.udc_srchAcctDeptCd_onclickEvent = function (e) {
  scwin.f_srchDeptPopUp();
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.options.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_srchDeptPopUp();
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.options.hidVal = "";
  }
};
scwin.f_srchDeptPopUp = async function (e) {
  udc_srchAcctDeptCd.cfCommonPopUp(scwin.udc_srchAcctDeptCd_callBackFunc // 콜백 함수
  , ed_srchAcctDeptCd.getValue() // 화면에서의 ??? Code Element의 Value
  , ed_srchAcctDeptNm.getValue() // 화면에서의 ??? Name Element의 Value
  , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , null // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의 사용자 정의 폭
  , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
  );
};

//gr_master 클릭시
scwin.gr_master_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_RetrieveAssetHistList(rowIndex); // 고정자산이력조회
};
scwin.gr_detailN_oncellclick = async function (rowIndex, columnIndex, columnId) {
  // 전표번호 선택 시
  if (columnId == "slipNo") {
    var slipNo = ds_detail.getCellData(rowIndex, "slipNo");
    if (slipNo != "") {
      await $c.gus.cfShowSlipInfo($p, slipNo);
    }
  }
};
scwin.f_GridMasterToExcel = async function () {
  if (ds_master.getRowCount() <= 0) {
    $c.win.alert($p, "고정자산내역이 존재하지않습니다.");
    return false;
  }
  let fileName = '고정자산내역';
  let sheetTitle = '고정자산내역';
  await $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
scwin.f_GridDetailToExcel = async function () {
  if (ds_detail.getRowCount() <= 0) {
    $c.win.alert($p, "고정자산이력이 존재하지않습니다.");
    return false;
  }
  let fileName = '고정자산이력';
  let sheetTitle = '고정자산이력';
  await $c.data.downloadGridViewExcel($p, gr_detailN, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
scwin.btn_replace_onclick = function (e) {
  scwin.f_FieldClear();
  scwin.f_SetSrchDefault();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회사코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'0-9',btnId:'btn_company',class:'',code:'coCd',codeId:'ed_coCd','ev:onblurCodeEvent':'scwin.udc_coCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_coCd_onclickEvent',id:'udc_coCd',mandatoryCode:'true',maxlengthCode:'3',nameId:'ed_coNm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveDongbuGroupCompanyInfo',validTitle:'회사코드',style:'',name:'coNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'취득일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_acqDate',refDataMap:'',refEdDt:'acqDtEndDt',refStDt:'acqDtStDt',style:'',edFromId:'ed_acqDtStDt',edToId:'ed_acqDtEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산유형 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'w150',delimiter:':',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',id:'lc_asetPatternCd',mandatory:'true',ref:'',style:'',submenuSize:'auto',tabIndex:'-1',validExp:'버전:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'xf:label',A:{ref:'asetPatternNm'}},{T:1,N:'xf:value',A:{ref:'asetPatternCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_srchAcctDeptCd',code:'acctDeptCd',codeId:'ed_srchAcctDeptCd',id:'udc_srchAcctDeptCd',maxlengthCode:'5',maxlengthName:'100',name:'acctDeptNm',nameId:'ed_srchAcctDeptNm',objTypeCode:'key',objTypeName:'key',popupID:'retrieveAcctDeptCdInfo6popup',selectID:'retrieveAcctDeptCdInfo6',style:'','ev:onblurCodeEvent':'scwin.udc_srchAcctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_srchAcctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_srchAcctDeptCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자산번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w150',id:'ed_srchFixedAsetNo',style:'',allowChar:'0-9',maxlength:'10'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상각진행여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:' w150',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_deprCompleteYn',ref:'',style:'',submenuSize:'auto'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'-1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'진행'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_replace',style:'',type:'button','ev:onclick':'scwin.btn_replace_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'고정자산내역 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridMasterToExcel',gridID:'gr_master'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_master_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'자산유형',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'자산종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'자산번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'자산명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'취득일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'취득금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'수량',width:'65'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'비고',width:'210'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'asetKndNm',inputType:'text',style:'',value:'',width:'80',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'w2:label',A:{ref:'asetPatternCd'}},{T:1,N:'w2:value',A:{ref:'asetPatternNm'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetPatternCd',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'data:ds_master.asetPatternCd',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_asetPattern'},E:[{T:1,N:'w2:label',A:{ref:'asetPatternNm'}},{T:1,N:'w2:value',A:{ref:'asetPatternCd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',style:'',value:'',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqDt',inputType:'text',style:'',value:'',width:'80',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acqAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'65',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',style:'',value:'',width:'210',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',expression:'sum(\'acqAmt\')',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'qty\')',dataType:'number',displayFormat:'#,##0',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalrows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'고정자산이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group21',style:'',gridUpYn:'N',gridID:'gr_detailN',gridDownFn:'scwin.f_GridDetailToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group21',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_detail',id:'gr_detailN',style:'',visibleRowNum:'5',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_detailN_oncellclick',readOnly:'true',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'자산번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'자산증가',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'자산감소',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'충당금</br>증가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'충당금</br>감소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'상각액</br>증가',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'상각액</br>감소',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'매각금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'회계처리</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column31',value:'이력비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'변경율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'변경면적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'변경</br>내용년수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'변경</br>내용월수',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'histDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixedAsetHistClsCd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'histQty',inputType:'text',width:'70',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetIncrAmt',inputType:'text',width:'150',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'asetDecrAmt',inputType:'text',width:'150',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'provIncrAmt',inputType:'text',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'provDecrAmt',inputType:'text',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprIncrAmt',inputType:'text',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprDecrAmt',inputType:'text',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dispAmt',inputType:'text',width:'100',displayFormat:'#,##0',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',class:'underline',style:'color:blue;'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rmk',inputType:'text',width:'250',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'histRate',inputType:'text',width:'100',displayFormat:'#,##0.00',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'histArea',inputType:'text',width:'100',displayFormat:'#,##0.00',textAlign:'right',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'histSvcLife',inputType:'text',width:'100',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'histSvcLifeMonth',inputType:'text',width:'100',textAlign:'right',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column27',displayMode:'label',textAlign:'right',expression:'sum(\'histQty\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'asetIncrAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'150',inputType:'expression',id:'column25',displayMode:'label',textAlign:'right',expression:'sum(\'asetDecrAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',textAlign:'right',expression:'sum(\'provIncrAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'provDecrAmt\')',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column22',displayMode:'label',textAlign:'right',expression:'sum(\'deprIncrAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column21',displayMode:'label',textAlign:'right',expression:'sum(\'deprDecrAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column45',displayMode:'label',textAlign:'right',expression:'sum(\'dispAmt\')',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalrows2',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]})