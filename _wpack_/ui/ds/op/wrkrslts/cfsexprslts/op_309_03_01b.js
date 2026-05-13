/*amd /ui/ds/op/wrkrslts/cfsexprslts/op_309_03_01b.xml 27241 a19581f2aa604c4f3073568eab7ab799c9fcaa1f4d5ed75e28ed138ba3221a6b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_cfs',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rownum',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsLineCd',name:'라인',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ioNo',name:'입고번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsInMgntNo',name:'입고/관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cfsMchtNm',name:'실화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsWt',name:'중량(kg)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsCbm',name:'용적(cbm)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsRton',name:'R/TON',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inOutStatus',name:'입출고상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고 수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고 중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고 CBM',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'conClntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inOutClsCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cfsexprslts.RetrieveCfsExportInCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_cfs","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_cfs","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_309_03_01b 
// 이름     : CFS수출입고조회
// 경로     : 물류/작업실적/CFS/
// 작 성 자 : 조성빈
// 작 업 일 : 2025-12-10
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            op_309_03_01p (CFS수출입고상세조회) - 그리드 결과 더블 클릭
//==================================================================================================================
scwin.userId;
scwin.userGubun;
scwin.clntNo;
scwin.ssoAuthYn;
scwin.strCurDate;
scwin.strPreDate;
scwin.userAuthInner;
scwin.param;
scwin.bdNo;
scwin.upperCd;
scwin.actcust;
scwin.num;
scwin.gap;
scwin.row_gap;
scwin.arrRtnVal;
scwin.dateStrMonth;
scwin.dateStrDay;
scwin.save_del_gubun;
scwin.onpageload = function () {
  scwin.userId = $c.data.getMemInfo($p, "userId"); //사용자 ID
  scwin.userGubun = $c.data.getMemInfo($p, "userClsCd") + ""; //사용자 구분코드 01내부
  scwin.clntNo = $c.data.getMemInfo($p, "clntNo") + ""; //사용자 거래처 번호
  scwin.ssoAuthYn = $c.data.getMemInfo($p, "ssoAuthYn"); //사용자 SSO인증 여부
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
  scwin.userAuthInner = "01";
  scwin.bdNo = $c.data.getParameter($p, "bdNo");
  scwin.upperCd = $c.data.getParameter($p, "upperCd");
  scwin.actcust = $c.data.getParameter($p, "actcust");
  scwin.num = $c.data.getParameter($p, "num");
  scwin.gap = false;
  scwin.row_gap = false;
  scwin.arrRtnVal = new Array(); // Return Value
  scwin.dateStrMonth = $c.date.getServerDateTime($p, "yyyyMM");
  scwin.dateStrDay = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.save_del_gubun = "";
  ds_search.set("stDt", scwin.dateStrMonth + "01");
  ds_search.set("endDt", scwin.dateStrDay);
  ds_search.set("conClntNo", "");
  ds_search.set("lineCd", "");
  ds_search.set("chbAll", "");
  ds_search.set("inOutClsCd", "");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_FieldClear();
    ed_conClntNo.setValue(scwin.clntNo);
    if (ed_conClntNo.getValue() != "" && ed_conClntNo.getValue() != null && ed_conClntNo.getValue() != "NULL") {
      // scwin.f_openCommonPopUp(7, scwin.clntNo, '', 'T', 'T');
      udc_conClntNo.cfCommonPopUp(function (ref) {
        $c.gus.cfSetReturnValue($p, ref, ed_conClntNo, ed_conClntNm);
        $c.gus.cfDisableObjects($p, [ed_conClntNo]);
        acb_inOutClsCd.setValue("I");
        chb_chbAll.setSelectedIndex(0);
      } // XML상의 SELECT ID	
      , scwin.clntNo // 화면에서의 ??? Code Element의	Value
      , '' // 화면에서의 ??? Name Element의	Value
      , 'T' // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , 'T' // 전체검색허용여부	("F")
      , "콘솔업체,업체코드,업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
    } else {
      ed_conClntNo.setValue("");
      $c.gus.cfDisableObjects($p, [ed_conClntNo]);
      acb_inOutClsCd.setValue("I");
      chb_chbAll.setSelectedIndex(0);
    }
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  //lc_wrkPlCd.Index = 0;
  ed_conClntNo.setValue("");
  ds_search.set("stDt", scwin.dateStrMonth + "01");
  ds_search.set("endDt", scwin.dateStrDay);
  ica_stDt.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  var sIca_stDt = ica_stDt.getValue();
  var sIca_endDt = ica_endDt.getValue();
  if (sIca_stDt > sIca_endDt) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일자 이전으로 선택[입력]하여주십시요.				
    ica_stDt.focus();
    return;
  }
  if (chb_chbAll.getSelectedIndex() == 0) {
    // true
    ds_search.set("chbAll", 1);
  } else if (chb_chbAll.getSelectedIndex() != 0) {
    ds_search.set("chbAll", 2);
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // LINE retrieveLineInfoList
      udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      // 콘솔업체 retrieveClntInfo
      udc_conClntNo.cfCommonPopUp(scwin.udc_conClntNo_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
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
      , "콘솔업체,업체코드,업체명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.ed_conClntNm_onchange = function (info) {
  $c.gus.cfLimitByteLength($p, ed_conClntNm, 50);
  scwin.f_chkOpenCommonPopUp(ed_conClntNm, ed_conClntNo, 7, false);
};
scwin.ed_conClntNo_onblur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_conClntNo, ed_conClntNm, 7, true);
};
udc_conClntNo_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_conClntNo, ed_conClntNm);
};
scwin.udc_lineCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 1, false);
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 1, true);
};
scwin.udc_lineCd_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_lineCd, ed_lineNm);
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retrieve_submit = function (e) {
  ds_search.set("lineCd", ed_lineCd.getValue());
  ds_search.set("conClntNo", ed_conClntNo.getValue());
  ds_search.set("inOutClsCd", acb_inOutClsCd.getValue());
  // cfShowDSWaitMsg(gr_cfs);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_cfs.getRowCount();
  // cfHideDSWaitMsg(gr_cfs);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
  // cfShowTotalRows(totalRows1, ds_cfs)
  totalRows1.setValue(ds_cfs.getRowCount());
};
scwin.sbm_retrieve_submiterror = function (e) {
  // cfHideDSWaitMsg(gr_cfs);
  // cfShowError(ds_cfs);
  // cfShowError(tr_retrieve);
};
scwin.gr_cfs_oncelldblclick = function (rowIndex, columnIndex, colid) {
  if (colid == "ioNo") {
    // 20260326 화면개발대상아님 확인 
    // let win_url = "/ui/ds/op/wrkrslts/cfsexprslts/op_309_03_01p.xml";
    // let data = {
    //     "ioNo" : ds_cfs.getCellData(ds_cfs.getRowPosition(), "ioNo")
    // };
    // let opts = {
    //     id : "cfsDetailPop"
    //     , popupName : "CFS수출입고상세조회"
    //     , modal : true
    //     , type : "browserPopup"
    //     , width : 840
    //     , height : 400
    //     , title : "CFS수출입고상세조회"
    // };
    // $c.win.openPopup(win_url, opts, data);
  }
};
scwin.excelDown = function () {
  // {"fileName":"CFS수출입고조회.xlsx","type":"4+8+16"}
  const infoArr = [];
  const options = {
    fileName: "CFS수출입고조회.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "CFS수출입고조회",
    // startRowIndex: 2,
    type: "1",
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    oddRowBackgroundColor: "",
    // excel파일에서 그리드 body의 홀수줄의 배경색
    evenRowBackgroundColor: "#F5FFF5" // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_cfs, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:300px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_inOutClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'입고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'출고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dt',refDataMap:'ds_search',refEdDt:'endDt',refStDt:'stDt',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ica_stDt',edToId:'ica_endDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'콘솔업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 230px;'},E:[{T:1,N:'w2:udc_comCode',A:{style:'display: none',popupID:'',class:'',id:'udc_conClntNo',codeId:'',nameId:'','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',selectID:'retrieveClntInfo','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_conClntNo',placeholder:'',style:'width: 85px;',disabled:'true','ev:onblur':'scwin.ed_conClntNo_onblur'}},{T:1,N:'xf:input',A:{class:'',id:'ed_conClntNm',placeholder:'',style:'',disabled:'true','ev:onchange':'scwin.ed_conClntNm_onchange'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'grp_group2',class:'form-group'},E:[{T:1,N:'w2:udc_comCode',A:{style:'',popupID:'',class:'',id:'udc_lineCd',codeId:'ed_lineCd',UpperFlagCode:'1',nameId:'ed_lineNm','ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',selectID:'retrieveLineInfoList','ev:onviewchangeNameEvent':'scwin.udc_lineCd_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent',mandatoryName:'true',allowCharCode:'a-zA-Z0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data'}}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'chk-grp',cols:'1',id:'chb_chbAll',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title row-gap-8'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'CFS 수출입고조회',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',btnPlusYn:'Y',btnUser:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_cfs',grdDownOpts:'{"fileName":"CFS수출입고조회.xlsx","type":"4+8+16"}',id:'udc_topGrdBtn',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_cfs',scrollByColumn:'false',style:'',id:'gr_cfs',visibleRowNum:'16',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'2',rowNumHeaderValue:'순번',autoFit:'allColumn','ev:oncelldblclick':'scwin.gr_cfs_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'입고일자',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'라인',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column10',value:'입고번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'column9',value:'입고관리번호',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column21',value:'실화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'중량(kg)',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column38',value:'용적(cbm)',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'80',inputType:'text',id:'column39',value:'R/TON',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'입출고상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'재고 수량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'재고 중량',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'재고 CBM',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'rownum',displayMode:'label',dataType:'float',textAlign:'center',excelCellType:'number'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'ioDt',blockSelect:'false',displayMode:'label',dataType:'date',textAlign:'center'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'cfsLineCd',blockSelect:'false',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'ioNo',blockSelect:'false',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'120',inputType:'text',id:'cfsInMgntNo',blockSelect:'false',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'cfsMchtNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsQty',displayMode:'label',textAlign:'right',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsWt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rsltsCbm',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'rsltsRton',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inOutStatus',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockQty',displayMode:'label',textAlign:'right',dataType:'float',hidden:'true',excelCellType:'number',displayFormat:'#,###.###',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',dataType:'float',hidden:'true',excelCellType:'number',displayFormat:'#,###.###',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',dataType:'float',hidden:'true',excelCellType:'number',displayFormat:'#,###.###',excelFormat:'#,##0.000'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column71',displayMode:'label',textAlign:'right',expression:'sum("rsltsQty")',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column70',displayMode:'label',textAlign:'right',expression:'SUM("rsltsWt")',displayFormat:'#,###.###',dataType:'number',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column69',displayMode:'label',textAlign:'right',expression:'SUM("rsltsCbm")',displayFormat:'#,###.###',dataType:'number',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column68',displayMode:'label',textAlign:'right',expression:'SUM("rsltsRton")',displayFormat:'#,###.###',dataType:'number',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})