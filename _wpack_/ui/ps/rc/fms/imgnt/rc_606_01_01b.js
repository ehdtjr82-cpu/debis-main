/*amd /ui/ps/rc/fms/imgnt/rc_606_01_01b.xml 20777 17756791f104f012eb8328e1fb44376b92ec35566c7f31c04f2e84133fad06ee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bizcarContents',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqModelNm',name:'차량모델',dataType:'text'}},{T:1,N:'w2:column',A:{id:'carVolume',name:'배기량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'담당자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDtm',name:'시작일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDtm',name:'종료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insrYn',name:'보험가입여부',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'담당자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'edDt',name:'일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:key',A:{id:'useYn',name:'사용여부',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ps.rc.RetrieveBusinessCarCostContentsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_bizcarContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_bizcarContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 업무용차량목록조회
 * 메뉴경로 : 공통/총무업무/업무용 차량관리/
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ps/rc/fms/imgnt/rc_606_01_01b.jsp
 * 작 성 자 : 정승혜
 * 작 업 일 : 2025-11-06
 * 수정이력  :
 *    - 2025-11-06      정승혜    최초작성
 *    - 2026-03-05      정승혜    기타수정
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
    grpCd: "ZZ207",
    compID: "gr_bizcarContents:carVolume"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.f_createSearchHeader();
};
scwin.onUdcCompleted = function () {
  let dt = scwin.strFromDate;
  ed_stDt.setValue(dt.substring(0, 4) + "0101");
  ed_edDt.setValue(dt);
  lc_useYn.setValue(9);
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_stDt, ed_edDt]);
  if (!ret) {
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
scwin.udc_workVehclInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_vehclNo.setValue(rtnList[0]);
    ed_eqModelNm.setValue(rtnList[1]);
    dma_search.set("eqCd", rtnList[6]);
  } else {
    ed_vehclNo.setValue("");
    ed_eqModelNm.setValue("");
    dma_search.set("eqCd", "");
  }
};
scwin.udc_workVehclInfo_onclickEvent = function (e) {
  scwin.f_carNumPopup('F');
};
scwin.udc_workVehclInfo_onblurCodeEvent = function (e) {
  if (ed_vehclNo.getValue() == "") {
    dma_search.set("eqCd", "");
    return;
  } else {
    scwin.f_carNumPopup("T");
  }
};
scwin.udc_workVehclInfo_onblurNameEvent = function (e) {
  if (ed_eqModelNm.getValue() == "") {
    dma_search.set("eqCd", "");
    return;
  } else {
    scwin.f_carNumPopup("T");
  }
};

//-------------------------------------------------------------------------
//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function () {};

// 공통 PopUp 호출
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  if (row == null) {
    row = 0;
  }
  switch (disGubun) {
    case 1:
      udc_userInfo.cfCommonPopUp(scwin.udc_userInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      udc_acctDeptCdInfo.cfCommonPopUp(scwin.udc_acctDeptCdInfo_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.udc_acctDeptCdInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  }
};
scwin.udc_userInfo_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_userId.setValue(rtnList[0]); // userId
    ed_userNm.setValue(rtnList[1]); // userNm
  }
};
scwin.udc_acctDeptCdInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCdInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'F');
};
scwin.udc_acctDeptCdInfo_onblurCodeEvent = function (e) {
  if (ed_acctDeptCd.getValue() == "") {
    ed_acctDeptNm.setValue("");
  }
  scwin.f_openCommonPopUp(2, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'T', 'F');
};
scwin.udc_userInfo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_userId.getValue(), ed_userNm.getValue(), 'F', 'F');
};
scwin.udc_userInfo_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(1, ed_userId.getValue(), ed_userNm.getValue(), 'F', 'F');
};
scwin.udc_userInfo_onblurCodeEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_userId.getValue(), ed_userNm.getValue(), 'T', 'F');
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
// 엑셀다운 1+4+8+16
scwin.f_Excel = async function () {
  if (ds_bizcarContents.getRowCount() > 0) {
    let stDt = ed_stDt.getValue();
    let edDt = ed_edDt.getValue();
    let msgSearch = "기간 - " + stDt.substring(0, 4) + "/" + stDt.substring(4, 6) + "/" + stDt.substring(6, 8) + " ~ " + edDt.substring(0, 4) + "/" + edDt.substring(4, 6) + "/" + edDt.substring(6, 8);
    const infoArr = [{
      rowIndex: 0,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 9,
      text: "업무용차량현황조회",
      textAlign: "center",
      fontSize: 24
    }, {
      rowIndex: 1,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 9,
      text: "",
      textAlign: "left",
      fontSize: 12
    }, {
      rowIndex: 2,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 9,
      text: msgSearch,
      textAlign: "left",
      fontSize: 12
    }, {
      rowIndex: 3,
      colIndex: 0,
      rowSpan: 1,
      colSpan: 9,
      text: "",
      textAlign: "left",
      fontSize: 12
    }];
    const options = {
      fileName: "업무용차량현황조회" + ".xlsx",
      sheetName: "업무용차량현황조회",
      startRowIndex: 4,
      startColumnIndex: 0,
      type: 1
    };
    await $c.data.downloadGridViewExcel($p, gr_bizcarContents, options, infoArr);
  }
};
scwin.f_grdHeight = function () {};
scwin.insrYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "", "N", "Y");
};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  totalRows.setValue(ds_bizcarContents.getRowCount());
  if (ds_bizcarContents.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
  }
};
scwin.udc_workVehclInfo_onviewchangeCodeEvent = function (info) {
  if (ed_vehclNo.getValue() != "") {
    ed_eqModelNm.setValue("");
  }
};
scwin.udc_workVehclInfo_onviewchangeNameEvent = function (info) {
  if (ed_eqModelNm.getValue() != "") {
    ed_vehclNo.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'stDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'edDt',edFromId:'ed_stDt',edToId:'ed_edDt',objTypeFrom:'data',objTypeTo:'data',mandatoryTo:'true',mandatoryFrom:'true',titleFrom:'기간From',titleTo:'기간To'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_vehclNo',nameId:'ed_eqModelNm',popupID:'',popupTitle:'',selectID:'retrieveWorkVehclInfo',style:'',refDataCollection:'dma_search',code:'vehclNo',name:'eqModelNm',id:'udc_workVehclInfo','ev:onclickEvent':'scwin.udc_workVehclInfo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_workVehclInfo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_workVehclInfo_onblurNameEvent','ev:onviewchangeCodeEvent':'scwin.udc_workVehclInfo_onviewchangeCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_workVehclInfo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',popupTitle:'',selectID:'retrieveAcctDeptCdInfo',style:'',objTypeCode:'data',objTypeName:'data',refDataCollection:'dma_search',code:'acctDeptCd',id:'udc_acctDeptCdInfo','ev:onclickEvent':'scwin.udc_acctDeptCdInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_acctDeptCdInfo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_acctDeptCdInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{code:'userId',codeId:'ed_userId','ev:onclickEvent':'scwin.udc_userInfo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_userInfo_onviewchangeNameEvent',id:'udc_userInfo',nameId:'ed_userNm',objTypeCode:'data',objTypeName:'data',popupID:'',popupTitle:'',refDataCollection:'dma_search',selectID:'retrieveUserInfo',style:'','ev:onblurCodeEvent':'scwin.udc_userInfo_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용여부 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_useYn',ref:'data:dma_search.useYn',style:'width: 100px;',submenuSize:'auto',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용완료'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용중'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'9'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'업무용차량 목록 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_bizcarContents',gridDownFn:'scwin.f_Excel',gridDownUserAuth:'R'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_bizcarContents',id:'gr_bizcarContents',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'차량번호',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'차량모델',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'배기량',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'업무용차량 내역',width:'470',colSpan:'5',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'보험가입여부',width:'130',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'담당자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column36',value:'사용여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'시작일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column34',value:'종료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'부서',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqModelNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'carVolume',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userNm',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'useYn',inputType:'select',style:'',value:'',width:'100',allOption:'',chooseOption:'',ref:'',textAlign:'left'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용중'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'사용종료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtStDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtEndDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insrYn',inputType:'text',style:'',value:'',width:'130',displayFormatter:'scwin.insrYnDisplayFm'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column22',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''}}]}]}]}]}]}]}]})