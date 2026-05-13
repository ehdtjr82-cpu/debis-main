/*amd /ui/ds/op/wrkrslts/stockrslts/op_303_03_34p.xml 37855 399fcdc578f768b4d305240e1be71591df5de24f4e6d8cb02194491e421113d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_LineList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_co_ds_LoBran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlClsCd',name:'작업장구분코드',dataType:''}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'CY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPosCd',name:'작업장코드',dataType:''}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:''}},{T:1,N:'w2:column',A:{id:'socYn',name:'SOC;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'leaseYn',name:'LEASE;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portNm',name:'PORT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlTerm',name:'경과일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가;구분',dataType:''}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'운송내역',dataType:''}},{T:1,N:'w2:column',A:{id:'doorNm',name:'DOOR',dataType:''}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구화주코드',dataType:''}},{T:1,N:'w2:column',A:{id:'clntNm',name:'청구화주명',dataType:''}},{T:1,N:'w2:column',A:{id:'crryoutDt',name:'반출일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outTerm',name:'반출경과일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crryinDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inTerm',name:'반입경과일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'blNo',name:'BOOKING/;BL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:''}},{T:1,N:'w2:column',A:{id:'term',name:'TERM',dataType:''}},{T:1,N:'w2:column',A:{id:'gradeCls',name:'등급;구분',dataType:''}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bran',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cy',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'line',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fullEmptyClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'typ',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrSizCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gradeCls',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCo',name:'name10',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_co_ds_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_co_ds_LoBran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_co_ds_lobran_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.stockrslts.RetrieveContainerYardLineTypeEachStockDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_LineList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_LineList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_LineList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd") || ""; //상위물류점소코드
scwin.loUpperLobranNm = $c.data.getMemInfo($p, "loUpperLobranNm") || ""; //상위물류점소
scwin.lobranCd = $c.data.getMemInfo($p, "lobranCd") || ""; //물류점소
scwin.userId = scwin.memJson.userId || ""; //사용자
scwin.userClsCd = scwin.memJson.userClsCd || ""; // 사용자 구분코드(01:그룹사구분코드(01:그룹사, 02:협력업체(운송), 03:선사, 04:화주, 05:자가운송업체, 06:렌터카(고객), 07:정비(고객))
scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "-" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm"); //거래처명
scwin.wrkPlCd = $c.data.getMemInfo($p, "wrkPlCd") == null ? "" : $c.data.getMemInfo($p, "wrkPlCd");
scwin.cntrNo = $c.data.getMemInfo($p, "cntrNo") == null ? "" : $c.data.getMemInfo($p, "cntrNo");
scwin.odrNo = $c.data.getMemInfo($p, "odrNo") == null ? "" : $c.data.getMemInfo($p, "odrNo");
scwin.lineCd = $c.data.getMemInfo($p, "lineCd") == null ? "" : $c.data.getMemInfo($p, "lineCd");
scwin.inSite = true;
scwin.reqCy = $c.data.getMemInfo($p, "cy") || "";
scwin.reqCyNm = $c.data.getMemInfo($p, "cyNm") || "";
scwin.onpageload = function () {};
scwin.onUdcCompleted = async function () {
  //부모로부터 전달받은 데이타셋
  scwin.params = $c.data.getParameter($p);
  let params = scwin.params.paramData;
  //파라미터가 있을경우
  if (params.length > 0) {
    dma_condition.set("bran", params[0]);
    dma_condition.set("cy", params[1]);
    dma_condition.set("shpCo", params[3]);
    dma_condition.set("typ", params[4]);
    dma_condition.set("impExpClsCd", params[5]);
    dma_condition.set("fullEmptyClsCd", params[6]);
    dma_condition.set("cntrSizCd", params[7]);
    dma_condition.set("gradeCls", params[8]);
    dma_condition.set("line", params[2]);
    lc_lineCd.setValue(params[2]);
  } else {
    $c.win.alert($p, "조회조건 에러 메인화면으로 돌아갑니다.");
    // $c.win.closePopup();
  }
  ;
  ed_shpCo.setValue(params[3]);
  await scwin.udc_comCode_shp_onclickEvent();
  $c.sbm.execute($p, sbm_co_ds_lobran);
  scwin.f_setLine();
  $c.sbm.execute($p, sbm_retrieve);
  scwin.popTitleCh();
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "CY/LINE/TYPE별 재고현황 상세");
};

//ds_co_ds_LoBran callback
scwin.sbm_co_ds_lobran_submitdone = function () {
  ds_co_ds_LoBran.insertRow(0);
  ds_co_ds_LoBran.setCellData(0, "lobranNm", "전체");
  ds_co_ds_LoBran.setCellData(0, "lobranCd", "");
  lc_con_bran.setSelectedIndex(0);
  lc_con_bran.setValue(dma_condition.get("bran"));
  if (dma_condition.get("cy") != "") {
    ed_con_cy.setValue(dma_condition.get("cy"));
    scwin.udc_comCode_con_onclickEvent();
  }
};

//수출입 decode처리
scwin.impExpcls = function (data) {
  return $c.gus.decode($p, data, "I", "수입", "O", "수출", "D", "수출", "");
};

//초기화 (없음)
scwin.btn_fieldClear_onclick = function (e) {};

//조회
scwin.btn_retrieve_onclick = function (e) {
  var shpCo = ed_shpCo.getValue();
  dma_condition.set("bran", lc_con_bran.getValue());
  dma_condition.set("cy", ed_con_cy.getValue());
  dma_condition.set("line", lc_lineCd.getValue());
  dma_condition.set("shpCo", shpCo);
  dma_condition.set("fullEmptyClsCd", lc_fullEmptyClsCd.getValue());
  dma_condition.set("typ", lc_typ.getValue());
  dma_condition.set("cntrSizCd", lc_siz.getValue());
  dma_condition.set("impExpClsCd", lc_impExpClsCd.getValue());
  dma_condition.set("gradeCls", lc_gradeCls.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_retrieve.getRowCount();
  if (nCnt == 0) {
    $c.win.alert($p, "해당되는 자료가 존재하지 않습니다");
  }
  gr_workImplement.setFocusedCell(0, 0);
  total.setValue(nCnt);
};

// 라인콤보 조회
scwin.f_setLine = function (opt) {
  var shpCo = "";
  if (scwin.inSite == true) {
    shpCo = dma_condition.get("shpCo");
    scwin.inSite = false;
  } else {
    shpCo = ed_shpCo.getValue();
  }
  sbm_LineList.action = "/cm.zz.RetrieveComboCMD.do?sysCd=LineEBC&queryId=retrieveLineEachShpCoCdCombo&param1=" + scwin.loginClntNo + "&param2=" + scwin.userClsCd + "&param3=" + shpCo;
  $c.sbm.execute($p, sbm_LineList);
};
//라인 callback
scwin.sbm_LineList_submitdone = function () {
  lc_lineCd.setSelectedIndex(0);
};

//선사pop
scwin.udc_comCode_shp_onclickEvent = async function (e) {
  //
  await scwin.f_openCommonPopUp(3, ed_shpCo.getValue(), ed_shpCoNm.getValue(), 'T', 'T');
  //udc_comCode_shp.cfCommonPopUp(scwin.udc_comCode_shp_callBackFunc,ed_shpCo.getValue(), ed_shpCoNm.getValue(),"T",null,null,null,null,"SHP",null,null,null,null,null,null,"선사,선사코드,선사명",null);
};
scwin.udc_comCode_shp_callBackFunc = async function (ret) {
  await $c.gus.cfSetReturnValue($p, ret, ed_shpCo, ed_shpCoNm);
  scwin.f_setLine();
};
scwin.udc_comCode_shp_onblurCodeEvent = function (e) {
  if (ed_shpCo.getValue() === "") {
    ed_shpCoNm.setValue("");
    scwin.f_setLine();
  } else {
    scwin.f_chkOpenCommonPopUpEmEdit(ed_shpCo, ed_shpCo, ed_shpCoNm, 3);
    // udc_comCode_shp.cfCommonPopUp(scwin.udc_comCode_shp_callBackFunc,ed_shpCo.getValue(), ed_shpCoNm.getValue(),"T",null,null,null,null,"SHP",null,null,null,null,null,null,"선사,선사코드,선사명",null);
  }
};
scwin.udc_comCode_shp_onviewchangeNameEvent = function (info) {
  if (ed_shpCoNm.getValue() === "") {
    ed_shpCoNm.setValue("");
    scwin.f_setLine();
  } else {
    scwin.f_chkOpenCommonPopUpText(ed_shpCoNm, ed_shpCo, 3);
  }
};

//CY pop
scwin.udc_comCode_con_onclickEvent = async function (e) {
  if (ed_con_cy.getValue() == "") {
    await scwin.f_openCommonPopUp(1, ed_con_cy.getValue(), ed_con_cyNm.getValue(), 'F', 'T');
  } else {
    await scwin.f_openCommonPopUp(1, ed_con_cy.getValue(), ed_con_cyNm.getValue(), 'T', 'T');
  }
  //udc_comCode_con.cfCommonPopUp(scwin.udc_comCode_con_callBackFunc,ed_con_cy.getValue(), ed_con_cyNm.getValue(),"T",null,null,null,null,"','" + lc_con_bran.getValue(),null,null,null,null,null,null,"CY,CY코드,CY명",null);
};
scwin.udc_comCode_con_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_cy, ed_con_cyNm);
};
scwin.udc_comCode_con_onblurCodeEvent = function (e) {
  if (ed_con_cy.getValue() === "") {
    ed_con_cyNm.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUpEmEdit(ed_con_cy, ed_con_cy, ed_con_cyNm, 1);
  }
};
scwin.udc_comCode_con_onviewchangeNameEvent = function (info) {
  if (ed_con_cyNm.getValue() === "") {
    ed_con_cy.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUpText(ed_con_cyNm, ed_con_cy, 1);
  }
};
//-------------------------------------------------------------------------
// TEXT BOX 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun) {
  var pCode = "";
  var pName = "";
  if (inObj.getValue().trim() == "") {
    codeObj.setValue("");
    if (disGubun == 3) {
      scwin.f_setLine();
    }
    return;
  }

  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (inObj.getReadOnly() || inObj.getValue() == inObj.hidVal) return;
  if (codeObj != null) {
    if (codeObj.tagName == "OBJECT") {
      codeObj.setValue("");
      //codeObj.value = "";
    } else {
      codeObj.setValue("");
      //codeObj.value = "";
      codeObj.hidVal = "";
    }
  }
  pName = inObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};
scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
  var pCode = "";
  var pName = "";

  // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //if(inObj.getReadOnly || (inObj.getValue() == chkObj.getValue()))

  if (inObj.getReadOnly() || inObj.getValue() == chkObj.hidVal) {
    return;
  }
  if (txtObj != null) {
    txtObj.setValue("");
    txtObj.hidVal = "";
  }
  pCode = inObj.getValue().replace(/^\s*/, '');

  // 값이 입력이 안된 경우  팝업을 실행하지 않음.
  if (pCode == "" || pCode == null) {
    inObj.setValue("");
    chkObj.setValue("");
    if (disGubun == 3) {
      scwin.f_setLine();
    }
    return;
  }
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // CY 팝업
      udc_comCode_con.setSelectId("retrieveWrkPlInfo");
      rtnList = await udc_comCode_con.cfCommonPopUp(scwin.udc_comCode_con_callBackFunc // XML상의 SELECT ID    
      , pCode // 화면에서의  Code Element의   Value
      , pName // 화면에서의  Name Element의   Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , ',' + lc_con_bran.getValue() // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "CY,CY코드,CY명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      break;
    case 3:
      // 선사 팝업
      udc_comCode_shp.setSelectId("retrieveClntInfo");
      rtnList = await udc_comCode_shp.cfCommonPopUp(scwin.udc_comCode_shp_callBackFunc // XML상의 SELECT ID    
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , 'SHP' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      // cfSetReturnValue(rtnList, ed_shpCo, txt_shpCoNm);
      // f_setLine();
      break;
    default:
      break;
  }
};

//닫기
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'선사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_shpCo',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'0-9a-zA-Z',nameId:'ed_shpCoNm',id:'udc_comCode_shp',selectID:'','ev:onviewchangeNameEvent':'scwin.udc_comCode_shp_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_comCode_shp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_shp_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_lineCd',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'',chooseOption:'true',chooseOptionLabel:'전체',visibleRowNum:'15'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_LineList'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CY ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_cy',nameId:'ed_con_cyNm',id:'udc_comCode_con',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'0-9a-zA-Z',selectID:'','ev:onclickEvent':'scwin.udc_comCode_con_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_con_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_con_onviewchangeNameEvent',refDataCollection:'dma_condition',code:'cy',skipOnBlurCodeValueEmpty:'N',progressBarSwitch:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_con_bran',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',visibleRowNum:'15'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_co_ds_LoBran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FULL/EMPTY ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w110',editType:'select',id:'lc_fullEmptyClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.fullEmptyClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'EMPTY'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FULL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'SIZE/TYPE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_siz',class:' w85',allOption:'',chooseOption:'',ref:'data:dma_condition.cntrSizCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'20'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'20'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'40'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'40'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'45'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'45'}]}]}]}]},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'',id:'lc_typ',class:' w85',allOption:'',chooseOption:'',ref:'data:dma_condition.typ'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FR'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'FR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'HC'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'HC'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'OT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'OT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'RH'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RH'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'TK'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TK'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'PF'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PF'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'JB'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'JB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ET'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ET'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w85',editType:'select',id:'lc_impExpClsCd',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.impExpClsCd'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너등급',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:' w150',editType:'select',id:'lc_gradeCls',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.gradeCls'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'SOUND'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'DAMAGE'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'CY/LINE/TYPE별 재고현황 상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_workImplement',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',grdDownOpts:'{"fileName":"컨테이너 재고현황 상세.xlsx", "sheetName": "컨테이너 재고현황 상세"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieve',id:'gr_workImplement',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMove:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'작업장구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'CY',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'컨테이너번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'SOC<br/>여부',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'SIZE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'E/F',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'TYPE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'LEASE<br/>여부',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'본선',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'항차',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'PORT',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'입항일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'경과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'자가<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'운송내역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'DOOR',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'청구화주코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column40',value:'청구화주명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column85',value:'반출일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column82',value:'반출경과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'반입일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'반입경과일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'149',inputType:'text',style:'',id:'column34',value:'BOOKING/<br/>BL번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column70',value:'수출입',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column88',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column67',value:'TERM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'등급<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'비고',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'wrkPlClsCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'currPosCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'socYn',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'leaseYn',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portNm',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'arrvlportDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'right',id:'arrvlTerm',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'selfClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'odrKndNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'doorNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'bilgClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'clntNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'calendar',style:'',id:'crryoutDt',value:'',displayMode:'label',hidden:'true',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'outTerm',value:'',displayMode:'label',hidden:'true',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'crryinDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'inTerm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'149',inputType:'text',style:'',id:'blNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'impExpClsCd',value:'',displayMode:'label',displayFormatter:'scwin.impExpcls'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'term',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'gradeCls',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column21',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column84',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'149',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column90',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'total',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})