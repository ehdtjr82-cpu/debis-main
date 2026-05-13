/*amd /ui/ps/rc/fms/imgnt/rc_606_01_03b.xml 26209 a89cf6591294412ee896908e57408e05cf3fd7c06dc047e979e94a4849c505f6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizcarSummary',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'차량 모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eee',name:'소유 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ddd',name:'보험 가입 여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'aaa',name:'총주행 거리 (Km)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bbb',name:'업무용 사용거리 (Km)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ccc',name:'업무용 사용비율 (%)',dataType:'text',defaultValue:'100'}},{T:1,N:'w2:column',A:{id:'amtDepr',name:'감가 상각비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtLs',name:'임차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtDepr2',name:'(감가상각비 상당액)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtOil',name:'유류비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtInsr',name:'보험료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFix',name:'수선비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtTax',name:'자동차세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtEtc',name:'기타',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'소유 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrCoClsCd',name:'보험 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfYn',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrYn',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'maxDtc',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'minDtc',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_serach'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edDt',name:'일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.RetrieveBusinessCarCostSummaryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_serach","key":"IN_DS1"},{"id":"ds_bizcarSummary","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizcarSummary","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 업무용차량비용집계
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_606_01_03b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-06
 * 수정이력  :
 *    - 2025-11-06      정승혜    최초작성
 *    - 2026-03-17      정승혜    기타수정
 * 메모 : 
 */

scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//hidden
scwin.txt_eqCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ203",
    compID: "gr_bizcarSummary:posnClsCd"
  }, {
    grpCd: "RC309",
    compID: "gr_bizcarSummary:insrCoClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_createSearchHeader();
};
scwin.onUdcCompleted = function () {
  let dt = scwin.strFromDate;
  ed_stDt.setValue(dt.substring(0, 4) + "0101");
  ed_edDt.setValue(dt.substring(0, 4) + "1231");
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_edDt]);
  if (!ret) {
    return;
  }
  if (ed_stDt.getValue() > ed_edDt.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  $c.sbm.execute($p, sbm_tr_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_createSearchHeader
// function desc : 조회조건 Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createSearchHeader = function () {
  // DataSet의 Header 정보 생성(TODO:TOBE 데이터맵으로 셋팅하므로 필요없음)
};

//-------------------------------------------------------------------------
// 차량 팝업
//-------------------------------------------------------------------------
scwin.f_carNumPopup = function (pbool) {
  udc_workVehclInfo.cfCommonPopUp(scwin.udc_workVehclInfo_callBackFunc, ed_vehclNo.getValue(), ed_eqModelNm.getValue(), pbool, null, null, null, null, "Y", null, null, null, null, null, "F", null, null);
};
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_carNumPopup('F');
};
scwin.udc_workVehclInfo_onblurNameEvent = function (info) {
  scwin.f_carNumPopup('T');
};
scwin.udc_workVehclInfo_onblurCodeEvent = function (e) {
  if (ed_vehclNo.getValue() == "") {
    dma_serach.set("eqCd", "");
    return;
  }
  scwin.f_carNumPopup('T');
};
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehclNo.setValue(rtnList[0]);
    ed_eqModelNm.setValue(rtnList[1]);
    dma_serach.set("eqCd", rtnList[6]);
  } else {
    ed_vehclNo.setValue("");
    ed_eqModelNm.setValue("");
    dma_serach.set("eqCd", "");
  }
};

//-------------------------------------------------------------------------
//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function () {
  //사용안함
};

// 공통 PopUp 호출
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  switch (disGubun) {
    case 2:
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCdInfo_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'T', 'F');
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
  }
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue() != "") {
    ed_acctDeptNm.setValue("");
  }
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
// 엑셀다운 1+4+8+16
scwin.f_Excel = async function () {
  if (ds_bizcarSummary.getRowCount() > 0) {
    let stDt = ed_stDt.getValue();
    let edDt = ed_edDt.getValue();
    let msgSearch = "기간 - " + stDt.substring(0, 4) + "/" + stDt.substring(4, 6) + "/" + stDt.substring(6, 8) + " ~ " + edDt.substring(0, 4) + "/" + edDt.substring(4, 6) + "/" + edDt.substring(6, 8);
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16,
      text: "업무용차량 비용 집계",
      textAlign: "center",
      fontSize: 24
    }, {
      rowIndex: 1,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16,
      text: "",
      textAlign: "left",
      fontSize: 12
    }, {
      rowIndex: 2,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16,
      text: msgSearch,
      textAlign: "left",
      fontSize: 12
    }, {
      rowIndex: 3,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 16,
      text: "",
      textAlign: "left",
      fontSize: 12
    }];
    const options = {
      fileName: "업무용차량 비용 집계.xlsx",
      sheetName: "업무용차량 비용 집계",
      startRowIndex: 4,
      startColumnIndex: 0,
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_bizcarSummary, options, infoArr);
  }
};

//-------------------------------------------------------------------------
//그리드 높이 늘리기
//-------------------------------------------------------------------------	
scwin.f_grdHeight = function () {};
scwin.eeeDisplayFm = function (data) {
  //$c.gus.decode(data, selfYn, "0", "임차", "1", "리스", "2", "자가", "3", "임차(현장용)");
  return data;
};
scwin.dddDisplayFm = function (data) {
  return $c.gus.decode($p, data, "", "N", "Y");
};
scwin.sbm_tr_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_bizcarSummary.getRowCount());
  gr_bizcarSummary.setFocusedCell(0, "vehclNo", false);
  for (i = 0; i < ds_bizcarSummary.getRowCount(); i++) {
    if (ds_bizcarSummary.getCellData(i, "ccc") == "") {
      ds_bizcarSummary.setCellData(i, "ccc", 100);
    }
  }
  if (ds_bizcarSummary.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_serach',style:'',id:'udc_fromToCalendar1',refEdDt:'edDt',edFromId:'ed_stDt',edToId:'ed_edDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data',titleFrom:'일자From',titleTo:'일자To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveWorkVehclInfo',codeId:'ed_vehclNo',popupTitle:'',nameId:'ed_eqModelNm',style:'',refDataCollection:'dma_serach',code:'vehclNo',id:'udc_workVehclInfo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent','ev:onblurNameEvent':'scwin.udc_workVehclInfo_onblurNameEvent','ev:onblurCodeEvent':'scwin.udc_workVehclInfo_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',refDataCollection:'dma_serach',code:'acctDeptCd',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onblurNameEvent':'scwin.udc_acctDeptCdInfo_onblurNameEvent',objTypeName:'data',objTypeCode:'data','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'업무용차량 비용 집계 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_bizcarSummary',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'R'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bizcarSummary',id:'gr_bizcarSummary',style:'',visibleRowNum:'14',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'차량</br>번호 ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'차량</br>모델',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column28',value:'소유</br>구분 ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'보험</br>가입</br>여부',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'총주행</br>거리</br>(Km)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'업무용</br>사용거리</br>(Km) ',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'업무용</br>사용비율</br>(%)',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'1000',inputType:'text',style:'',id:'column23',value:'업무용 승용차 관련 비용',displayMode:'label',colSpan:'11',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column78',value:'',displayMode:'label'}}]},{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',style:'',id:'column53',value:'감가</br>상각비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'임차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column35',value:'(감가상각비</br>상당액)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column32',value:'유류비',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'보험료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'수선비',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'자동차세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'기타',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column55',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column67',value:'소유</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'보험</br>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column75',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column79',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfYn',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'임차'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'리스'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'임차(현장용)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrYn',inputType:'text',style:'',value:'',width:'70',displayFormatter:'scwin.dddDisplayFm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'aaa',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'Number(display(\'maxDtc\')) - Number(display(\'minDtc\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bbb',inputType:'expression',style:'',value:'',width:'100',textAlign:'right',expression:'Number(display(\'maxDtc\')) - Number(display(\'minDtc\'))',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ccc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtDepr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtLs',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'amtDepr2',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtOil',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtInsr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFix',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'amtTax',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'amtEtc',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',textAlign:'right',dataType:'number',excelCellType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'posnClsCd',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'insrCoClsCd',value:'',displayMode:'label',textAlign:'left',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'maxDtc',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'minDtc',value:'',displayMode:'label',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',expression:'SUM(\'aaa\')',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column47',value:'',displayMode:'label',expression:'SUM(\'bbb\')',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'100',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'SUM("amtDepr")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',expression:'SUM("amtLs")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',expression:'SUM("amtDepr2")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',expression:'SUM("amtOil")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',expression:'SUM("amtInsr")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',expression:'SUM("amtFix")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column65',value:'',displayMode:'label',expression:'SUM("amtTax")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',expression:'SUM("amtEtc")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column57',value:'',displayMode:'label',expression:'SUM("amt")',dataType:'number',excelCellType:'number',textAlign:'right',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})