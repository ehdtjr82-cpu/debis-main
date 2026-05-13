/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_04_01b.xml 33087 fc8f9c36be5efd41ea7d6d9c80d7057780986114a4644d23fdfccf6509e4871f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_view_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vehclNm',name:'차량명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'branCd',name:'지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cartype',name:'차종',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrTermFrom',name:'발생기간From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outbrTermTo',name:'발생기간To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltRateKnd',name:'과태료종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retrvYn',name:'회수여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pmntDtYn',name:'납부일자여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveCargo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cartype',name:'차종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBran',name:'등록점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntceNo',name:'고지번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recptDt',name:'접수일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recptDate',name:'접수일',dataType:'number'}},{T:1,N:'w2:column',A:{id:'assgnBranNm',name:'배정점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrDt',name:'입금일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrCo',name:'발생업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrNo',name:'발생번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'knd',name:'종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltrate',name:'과태료',dataType:'number'}},{T:1,N:'w2:column',A:{id:'retrvDt',name:'회수예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvSlipNo',name:'회수전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvAmt',name:'회수금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pmntDt',name:'납부일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntSlipNo',name:'납부전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'szDt',name:'압류일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'szRecptNo',name:'압류접수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'szTmnDt',name:'압류해지일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'szTmnRecptNo',name:'압류해지접수번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regNm',name:'등록자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspStDt',name:'검사시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspEndDt',name:'검사종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hataiStDt',name:'해태시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hataiEndDt',name:'해태종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntPrd',name:'납부기한',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retrvYn',name:'회수여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntYn',name:'기사납부여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pmntAmt',name:'납부금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vltPlc',name:'위반장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcptAcnt',name:'계좌번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_loBran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveCargoVehiclesFaultRatePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_view_cond","key":"IN_DS1"},{"id":"ds_retrieveCargo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveCargo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_loBran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_loBran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.toDay = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.toMonth = $c.date.getServerDateTime($p, "yyyyMM") + "01";
scwin.onpageload = function () {
  $c.sbm.execute($p, sbm_loBran);
  acb_gubun.setValue("RECPT_DT");
  dma_view_cond.set("outbrTermFrom", scwin.toMonth);
  dma_view_cond.set("outbrTermTo", scwin.toDay);
  const codeOptions = [{
    grpCd: "OP183",
    compID: "acb_con_fltRateKnd,gr_retrieveCargo:knd"
  } // 과태료종류
  ];
  $c.data.setCommonCode($p, codeOptions);

  //테스트 데이터
  // dma_view_cond.set("outbrTermFrom", "20151101");
  // dma_view_cond.set("outbrTermTo", "20151130");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await scwin.f_check())) return;
  ds_retrieveCargo.setJSON([]); //OUT_DS 클리어
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 검색일 체크
//-------------------------------------------------------------------------
scwin.f_check = async function () {
  var value1 = ed_con_dtStart.getValue();
  var value2 = ed_con_dtEnd.getValue();
  if (!(await $c.gus.cfIsAfterDate($p, value1, value2))) {
    $c.gus.cfAlertMsg($p, "발생기간 종료일를 발생기간시작일보다 이전으로 선택[입력]하여 주십시오");
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  acb_con_branCd.setSelectedIndex(0);
  ed_con_dtStart.setValue(scwin.toMonth);
  ed_con_dtEnd.setValue(scwin.toDay);
  acb_con_fltRateKnd.setSelectedIndex(0);
  acb_con_retrvYn.setSelectedIndex(0);
  ed_VehclNo.setValue("");
  ed_VehclNm.setValue("");
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_sellItemDetail = function (arg) {
  let strOrderDetailUrl = "/ds/op/wrkrslts/transwrkrslts/op_304_04_02b.xml";
  let strOrderDetailTitle = "과태료등록";
  let strProgramId = "op_304_04_02b.jsp";
  let vehclNm = arg;
  let vehclNo = vehclNm.substring(5, 9);
  let paramObj = {
    vehclNo: vehclNo,
    vehclNm: vehclNm,
    type: "retrieve"
  };
  $c.win.openMenu($p, strOrderDetailTitle, "/ui" + strOrderDetailUrl, strProgramId, paramObj);
};

//-------------------------------------------------------------------------
// GRID에서 선택된 오더 세부정보 확인 : 해당 오더유형별 페이지로 이동
//-------------------------------------------------------------------------
scwin.f_Detail = function (arg1, arg2, arg3, arg4, arg5) {
  let strOrderDetailUrl = "/ds/fs/consignmgnt/fs_402_01_01b.jsp";
  let strOrderDetailTitle = "수탁자비용등록";
  let strProgramId = "fs_402_01_01b.jsp";
  let vehclNm = arg3;
  let vehclNo = vehclNm.substring(5, 9);
  let paramObj = {
    outbrCo: arg1,
    outbrNo: arg2,
    vehclNo: vehclNo,
    vehclNm: vehclNm,
    regBran: arg4,
    regBranCd: arg5,
    type: "retrieve"
  };

  //condition += "outbrCo="+arg1+"&outbrNo="+arg2+"&vehclNo="+vehclNo+"&vehclNm="+vehclNm+"&regBran="+arg4+"&regBranCd="+arg5+"&type=retrieve";
  //cfTabMenuUpdate( strOrderDetailUrl+condition , strOrderDetailTitle);  
  $c.win.openMenu($p, strOrderDetailTitle, "/ui" + strOrderDetailUrl, strProgramId, paramObj);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  // 선언부
  switch (disGubun) {
    case 1:
      // 팝업         
      udc_VehclNo.cfCommonPopUp(scwin.udc_VehclNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호조회,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);
  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
scwin.udc_VehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_VehclNo.getValue(), ed_VehclNm.getValue(), 'T', 'T');
};
scwin.udc_VehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_VehclNo, ed_VehclNm, 1, true);
};
scwin.udc_VehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_VehclNm, ed_VehclNo, 1, false);
};
scwin.udc_VehclNo_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_VehclNo, ed_VehclNm);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_retrieveCargo.getRowCount());
  if (ds_retrieveCargo.getRowCount() < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    for (let i = 0; i < ds_retrieveCargo.getRowCount(); i++) {
      if (ds_retrieveCargo.getCellData(i, "pmntDt") != "") {
        ds_retrieveCargo.setCellData(i, "recptDate", 0);
      }
    }
  }
};
scwin.gr_retrieveCargo_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "vehclNo" && ds_retrieveCargo.getCellData(rowIndex, "vehclNo") != "") {
    scwin.f_sellItemDetail(ds_retrieveCargo.getCellData(rowIndex, "vehclNo"));
  }
  if (columnId == "outbrCo" && ds_retrieveCargo.getCellData(rowIndex, "outbrCo") != "") {
    scwin.f_Detail(ds_retrieveCargo.getCellData(rowIndex, "outbrCo"), ds_retrieveCargo.getCellData(rowIndex, "outbrNo"), ds_retrieveCargo.getCellData(rowIndex, "vehclNo"), ds_retrieveCargo.getCellData(rowIndex, "regBran"), ds_retrieveCargo.getCellData(rowIndex, "regBranCd"));
  }
};
scwin.customExp = function (data, formatData, rowIdx, colIdx) {
  //pmntSlipNoExp
  let styleInfo = {
    "styleName": "background-color",
    "styleValue": "#FFDAB9",
    "type": "row",
    "target": "all",
    "rowIndex": rowIdx
  };
  let styleInfo2 = {
    "styleName": "background-color",
    "styleValue": "black",
    "type": "row",
    "target": "all",
    "rowIndex": rowIdx
  };
  let pmntYn = ds_retrieveCargo.getCellData(rowIdx, "pmntYn");
  if (ds_retrieveCargo.getCellData(rowIdx, "pmntDt") == "") {
    if (ds_retrieveCargo.getCellData(rowIdx, "pmntPrd") == "") {
      gr_retrieveCargo.setStyleAll(styleInfo);
    } else {
      if (ds_retrieveCargo.getCellData(rowIdx, "recptDate") == 0) {
        gr_retrieveCargo.setStyleAll(styleInfo2);
      } else if (ds_retrieveCargo.getCellData(rowIdx, "recptDate") < 15) {
        gr_retrieveCargo.setStyleAll(styleInfo);
      }
    }
  }
  return $c.gus.decode($p, pmntYn, "0", data, "1", "기사납부");
};
scwin.retrvYnExp = function (data) {
  return $c.gus.decode($p, data, "0", "불가", "1", "가능");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveKndVehclListInfoPopup',style:'',codeId:'ed_VehclNo',nameId:'ed_VehclNm',btnId:'btn_VehclNo',id:'udc_VehclNo',UpperFlagCode:'1',maxlengthCode:'4',allowCharCode:'a-zA-Z0-9',objTypeCode:'Data',refDataCollection:'dma_view_cond',code:'vehclNo',name:'vehclNm',selectID:'retrieveKndVehclListInfo',popupGridHeadTitle:'차량단축코드,차량번호',popupTitle:'차량번호조회,차량단축코드,차량번호','ev:onclickEvent':'scwin.udc_VehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_VehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_VehclNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_branCd',search:'contain',style:'width:150px;',submenuSize:'auto',ref:'data:dma_view_cond.branCd',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_loBran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차종',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_cartype',search:'contain',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_view_cond.cartype',displayMode:'value delim label',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'트렉터'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TR'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'트레일러'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'트럭'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'TK'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'납부여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_pmntDtYn',search:'contain',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_view_cond.pmntDtYn',displayMode:'value delim label',chooseOptionLabel:'전체',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'납부'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미납'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_gubun',search:'start',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_view_cond.gubun',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'RECPT_DT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'발생일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'OUTBR_DT'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'납부기한'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'PMNT_PRD'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_outbrTerm',refDataMap:'dma_view_cond',refEdDt:'outbrTermTo',refStDt:'outbrTermFrom',style:'',edFromId:'ed_con_dtStart',edToId:'ed_con_dtEnd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'과태료종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_fltRateKnd',search:'contain',style:'width:150px;',submenuSize:'auto',displayMode:'value delim label',ref:'data:dma_view_cond.fltRateKnd',searchTarget:'both',allOption:'',chooseOption:'true',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'회수가능여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_con_retrvYn',search:'contain',style:'width:150px;',submenuSize:'auto',displayMode:'value delim label',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_view_cond.retrvYn',searchTarget:'both'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수가능'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회수불가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'화물차량 과태료 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_retrieveCargo',id:'udc_topGrdBtn',gridUpYn:'N',grdDownOpts:'{"fileName":"화물차량 과태료 현황.xlsx","sheetName":"화물차량 과태료 현황","type":"4+8+16"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveCargo',id:'gr_retrieveCargo',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_retrieveCargo_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차종',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'과태료종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'발생일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'접수일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'약식 고지번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'일수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'납부기한',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'과태료',width:'100'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column59',value:'발생업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'은행명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column55',value:'계좌번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'납부일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',value:'납부<br/>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column49',value:'회수<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'회수일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'회수<br/>전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'회수금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'압류일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'압류<br/>접수번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'해지일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'접수번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'등록점소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',value:'비고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'검사<br/>시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'검사<br/>종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'해태<br/>시작일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'해태<br/>종료일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column61',value:'소속거래처',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'column63',value:'위반장소',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnBranNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'link',width:'100',class:'linktype col-type2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cartype',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'knd',inputType:'select',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outbrDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recptDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ntceNo',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'recptDate',inputType:'text',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pmntPrd',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltrate',inputType:'text',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bankNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'rcptAcnt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pmntDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pmntSlipNo',displayMode:'label',customFormatter:'scwin.customExp'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'retrvYn',displayMode:'label',displayFormatter:'scwin.retrvYnExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'retrvDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'retrvSlipNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'retrvAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'szDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'szRecptNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'szTmnDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'szTmnRecptNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regBran',displayMode:'label',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inspStDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inspEndDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hataiStDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hataiEndDt',displayMode:'label',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'outbrCo',displayMode:'label',textAlign:'left',class:'underline col-type2'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'vltPlc',displayMode:'label',textAlign:'left'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column96',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column95',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column94',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column92',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column90',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column89',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column88',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column87',displayMode:'label',textAlign:'right',expression:'sum(\'fltrate\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column86',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column85',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column82',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column80',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column78',displayMode:'label',textAlign:'right',expression:'sum(\'retrvAmt\')',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column74',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column71',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column68',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'230',inputType:'text',id:'column65',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})