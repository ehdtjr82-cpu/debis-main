/*amd /ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_01b.xml 26426 50b23ffb7c996dd45afc353463c8243177e9fc6ab28045148b4a342799776015 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'sysCd',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'queryId',name:'queryId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'param1',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkStsCd',name:'정비상태',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDt',name:'정비작업시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkEndDt',name:'정비작업종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfOutordClsCd',name:'자가외주구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkNo',name:'정비작업번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'작업예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'장비등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfOutordClsNm',name:'정비구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkStsCd',name:'정비작업상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_master',action:'/ps.eq.fixwrkmgnt.fixwrkmgnt.RetrieveFixWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_wrkPlCd","key":"IN_DS1"},{"id":"ds_wrkPlCd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// PGM명 : 작업지시목록조회 (eq_330_01_01b)
// 작성자 : 송정희
// 최초작성일자 : 2026-01-07
//-------------------------------------------------------------------------
scwin.fromDate_YMD = ""; // 작업날짜
scwin.fromDate_YMD = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.vUserFixWrkPlCd = "";
scwin.vEqHomeClsCd = ""; // 정비소속구분코드

scwin.data = {};
scwin.opts = {};
scwin.tHomeClsCd = "";
scwin.onpageload = async function () {
  console.log(" 작업지시목록조회 (eq_330_01_01b) ");
  // 로그인 정보 추출
  scwin.vUserFixWrkPlCd = $c.data.getMemInfo($p, "userFixWrkPlCd");
  scwin.vEqHomeClsCd = $c.data.getMemInfo($p, "eqHomeClsCd"); // 정비소속구분코드

  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  },
  // 정비소속구분(사업부문)
  {
    grpCd: "EQ210",
    compID: "gr_master:eqKndCd"
  },
  // 장비종류
  {
    grpCd: "EQ905",
    compID: "lc_fixWrkStsCd, gr_master:fixWrkStsCd",
    opt: {
      "range": "1,IND"
    }
  },
  // 상태 ,opt :{range : 1,IND}               
  {
    grpCd: "EQ012",
    compID: "lc_selfOutordClsCd"
  },
  // 자가/외주
  {
    grpCd: "EQ010",
    compID: "lc_fixKndCd, gr_master:fixKndCd"
  } // 정비종류
  ];
  $c.data.setCommonCode($p, codeOptions);

  //    $c.gus.cfDisableBtn([btn_Update]);
  lc_homeClsCd.setValue(scwin.tHomeClsCd); // 정비소속구분코드
  scwin.tHomeClsCd = lc_homeClsCd.getValue();
  await scwin.f_WrkPlCd();
  lc_wrkPlCd.focus();
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  ed_wrkStDt.setValue(scwin.fromDate_YMD);
  ed_wrkEndDt.setValue(scwin.fromDate_YMD);
};
//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function (e) {
  await $c.gus.cfInitObjects($p, tb_wrk, null);
  lc_homeClsCd.setValue(scwin.vEqHomeClsCd); // 정비소속구분코드
  scwin.tHomeClsCd = lc_homeClsCd.getValue();
  await scwin.f_WrkPlCd();
};

//-------------------------------------------------------------------------
// 정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_WrkPlCd = function () {
  dma_wrkPlCd.set("sysCd", "PsCommonEBC");
  dma_wrkPlCd.set("queryId", "retriveWrkplList");
  dma_wrkPlCd.set("param1", scwin.tHomeClsCd);
  $c.sbm.execute($p, sbm_wrkPlCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  dma_search.set("homeClsCd", lc_homeClsCd.getValue()); // 사업부문코드
  dma_search.set("fixWrkPlCd", lc_wrkPlCd.getValue()); // 정비작업장
  dma_search.set("eqCd", ed_eqCd.getValue()); // 장비코드
  dma_search.set("vehclNo", ed_vehclNo.getValue()); // 차량번호
  dma_search.set("fixKndCd", lc_fixKndCd.getValue()); // 정비종류
  dma_search.set("fixWrkStsCd", lc_fixWrkStsCd.getValue()); // 정비상태
  dma_search.set("wrkStDt", ed_wrkStDt.getValue()); // 정비작업시작일자
  dma_search.set("wrkEndDt", ed_wrkEndDt.getValue()); // 정비작업종료일자
  dma_search.set("selfOutordClsCd", lc_selfOutordClsCd.getValue()); // 자가외주구분
  scwin.tHomeClsCd = lc_homeClsCd.getValue();
  $c.sbm.execute($p, sbm_master);
};

//-------------------------------------------------------------------------
// 팝업 여부 검사
//-------------------------------------------------------------------------
scwin.f_IsPopUp = function (inObj, pairObjs) {
  let inValue = $c.gus.cfGetValue($p, inObj);
  if (!inObj.options) inObj.options = {};
  let hidValue = inObj.options.hidVal;
  if ($c.gus.cfIsNull($p, inValue)) {
    inObj.options.hidVal = "";
    for (let i = 0; i < pairObjs.length; i++) {
      $c.gus.cfSetValue($p, pairObjs[i], "");
    }
    return false;
  }
  if (inValue == hidValue) return false;
  return true;
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.f_Create = async function (row) {
  var pFixWrkPlCd = ds_master.getCellData(row, "fixWrkPlCd"); // 정비작업장코드
  var pFixWrkNo = ds_master.getCellData(row, "fixWrkNo"); // 정비작업번호

  scwin.data = {
    fixWrkPlCd: pFixWrkPlCd,
    fixWrkNo: pFixWrkNo
  };
  scwin.opts = {
    id: "popeq3300102p",
    title: "작업지시신규상세",
    popupName: "작업지시신규상세",
    modal: true,
    center: "yes",
    type: "browserPopup",
    width: "1050px",
    height: "674x",
    scroll: "yes",
    resizable: "yes",
    status: "yes"
  };
  scwin.url = "/ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_02b.xml";
  let returnValue = await $c.win.openPopup($p, scwin.url, scwin.opts, scwin.data);
  if (returnValue != null) {
    // 다시 조회함
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 수정 및 상세
//-------------------------------------------------------------------------
scwin.f_Detail = async function (row) {
  var pHomeClsCd = scwin.tHomeClsCd;
  var pFixWrkPlCd = ds_master.getCellData(row, "fixWrkPlCd"); // 정비작업장코드
  var pFixWrkNo = ds_master.getCellData(row, "fixWrkNo"); // 정비작업번호

  scwin.data = {
    homeClsCd: pHomeClsCd,
    fixWrkPlCd: pFixWrkPlCd,
    fixWrkNo: pFixWrkNo
  };
  scwin.opts = {
    id: "popeq3300102p",
    title: "작업지시신규상세",
    popupName: "작업지시신규상세",
    modal: true,
    center: "yes",
    type: "browserPopup",
    width: "1050px",
    height: "674x",
    scroll: "yes",
    resizable: "yes",
    status: "yes"
  };
  scwin.url = "/ui/ps/eq/fixwrkmgnt/fixwrkmgnt/eq_330_01_02b.xml";
  let returnValue = await $c.win.openPopup($p, scwin.url, scwin.opts, scwin.data);
  if (returnValue == "REFRESH") {
    // 다시 조회함
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var pWhere = "";
  switch (disGubun) {
    case 1:
      pWhere = pName;
      pName = "";
      // 장비 팝업  retrieveEqBasicListInfo
      udc_eqCd.cfCommonPopUp(scwin.udc_eqCd_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      pWhere = " ," + lc_fixWrkPlCd.getValue() + "";
      break;
    case 2:
      // 귀속부서 팝업	retrieveAcctDeptCdInfo	
      udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, pCode, pName, pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};
//-----------------------------------------------------------------------------
//    W E B S Q U A R E   C O M P O N E N T' S   E V E N T S
//------------------------------------------------------------------------------
//-------------------------------------------------------------------------
// 장비 입력 팝업  callBackFunc
//-------------------------------------------------------------------------
scwin.udc_eqCd_callBackFunc = function (ret) {
  console.log("udc_eqCd_callBackFunc ret " + ret);
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_eqCd.setValue(ret[0]);
    ed_vehclNo.setValue(ret[1]);
  } else {
    ed_eqCd.setValue("");
    ed_vehclNo.setValue("");
  }
};
scwin.udc_eqCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_eqCd, ed_vehclNo)) {
    scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), "F", "T");
  }
};
scwin.udc_eqCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), "F", "T");
};
scwin.udc_eqCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_eqCd.getValue(), ed_vehclNo.getValue(), "F", "T");
};

//-------------------------------------------------------------------------
// 부서 입력 팝업  callBackFunc
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (ret) {
  if (ret[0] != "N/A" && !$c.gus.cfIsNull($p, ret)) {
    ed_acctDeptCd.setValue(ret[0]);
    ed_acctDeptNm.setValue(ret[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCd_onblurCodeEvent = function (e) {
  if (scwin.f_IsPopUp(ed_acctDeptCd, ed_acctDeptNm)) {
    scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "F", "T");
  }
};
scwin.udc_acctDeptCd_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "F", "T");
};
scwin.udc_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), "F", "T");
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  scwin.tHomeClsCd = lc_homeClsCd.getValue();
  scwin.f_WrkPlCd();
};
scwin.ds_master_ondataload = function () {
  let rowCnt = ds_master.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    if ($c.gus.cfCheckCreateFlag($p) == true) {
      $c.gus.cfTurnCreateFlag($p, false);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
    return;
  }
  console.log("rowCnt : " + rowCnt);
  if (rowCnt > 0) {
    $c.gus.cfEnableAllBtn($p);
    //column style 지정
    for (var i = 0; i < rowCnt; i++) {
      gr_master.setCellStyle(i, "fixWrkNo", "text-decoration", "underline");
      gr_master.setCellStyle(i, "fixWrkNo", "cursor", "pointer");
      gr_master.setCellColor(i, "fixWrkNo", "blue");
    }
  }
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex > 0) {
    if (columnId == "fixWrkNo") scwin.f_Detail(rowIndex);
  }
};
scwin.btn_Search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_Create_onclick = function (e) {
  scwin.f_Create();
};
scwin.btn_Update_onclick = function (e) {
  scwin.f_Detail(ds_master.getRowPosition());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange',ref:'data:dma_search.homeClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.fixWrkPlCd',chooseOption:'',visibleRowNum:'10',sortMethod:'ascending',sortOption:'value'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'wrkStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'wrkEndDt',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkStsCd',style:'width: 110px;',submenuSize:'fixed',ref:'data:dma_search.fixWrkStsCd',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가/외주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_selfOutordClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'data:dma_search.selfOutordClsCd',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixKndCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.fixKndCd',chooseOptionLabel:'전체'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'eqCdPopUP',selectID:'retrieveEqBasicListInfo',codeId:'ed_eqCd',validTitle:'',nameId:'ed_vehclNo',style:'',id:'udc_eqCd',btnId:'btn_eqCd',code:'eqCd',name:'vehclNo',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_eqCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_eqCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_eqCd_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'acctDeptCdPopUp',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd',code:'acctDeptCd',name:'acctDeptNm',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_acctDeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_acctDeptCd_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Search',style:'',type:'button','ev:onclick':'scwin.btn_Search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업지시목록 현황 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_master',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'정비작업번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업예정일자',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'장비코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'장비등록번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'귀속부서',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'정비구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'정비종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'정비작업상태',width:'130'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIntendDt',inputType:'calendar',style:'',value:'',width:'130',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqCd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfOutordClsNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'fixKndCd',inputType:'select',style:'',value:'',width:'100',selectedData:'true'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'fixWrkStsCd',inputType:'select',style:'',value:'',width:'130',selectedData:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Create',style:'',type:'button','ev:onclick':'scwin.btn_Create_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',style:'',type:'button','ev:onclick':'scwin.btn_Update_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상세'}]}]}]}]}]}]}]}]}]})