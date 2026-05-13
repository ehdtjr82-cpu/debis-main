/*amd /ui/tn/cs/vehclmgnt/tn_102_01_03b.xml 19586 7e77d249442de8aafdb17638eff9de6989d0f092a11a7f28e6c864cddde56c05 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'opentopblcMgntCo',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_echVhclClntList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'format',name:'format',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'opentopblcMgntCo',name:'소속거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'opentopblcMgntCoNm',name:'소속거래처코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclClsNm',name:'소유구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndCd',name:'차량종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclKndNm',name:'차량종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmCd',name:'톤코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNrmNm',name:'톤급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefDistrict1',name:'선호권역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prefKcg1',name:'선호화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drvNm',name:'기사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'휴대전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'정산거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'정산거래처코드명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.tn.cs.vehclmgnt.RetrieveEchVhclClntListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_echVhclClntList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_echVhclClntList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.tn.cs.vehclmgnt.RegistSpotVehclCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_echVhclClntList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.oldValue;
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  console.log("scwin.f_fieldClear");
  $c.gus.cfInitObjects($p, tbl_search);
  ds_echVhclClntList.removeAll();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  let chkVal = await $c.gus.cfValidate($p, [tbl_search]);
  if (!chkVal) return;
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------  
scwin.f_save = function () {
  if (!$c.data.isModified($p, ds_echVhclClntList)) {
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch, rowIndex) {
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      //  거래처조회 - 그리드				
      pWhere = "01";
      pCode = ds_echVhclClntList.getCellData(rowIndex, "clntNo").replace(/\s*$/, '');
      pName = ds_echVhclClntList.getCellData(rowIndex, "clntNo");
      udc_comCode.cfCommonPopUp(scwin.callBackCarKind, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearch, "거래처조회,거래처코드,거래처명", null);
      break;
    case 2:
      //  거래처조회	- 조회조건			
      pWhere = "";
      udc_opentopblcMgntCo.cfCommonPopUp(scwin.callBackBpClnt, pCode, pName, pClose, null, null, null, "3,4,5,6,7,8,9,10", pWhere, null, null, null, null, null, pAllSearch, "거래처조회,거래처코드,거래처명", null);
      break;
  }
};

//-------------------------------------------------------------------------
// 공통코드 조회 callBack
//-------------------------------------------------------------------------
//  거래처조회 - 그리드
scwin.callBackCarKind = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_echVhclClntList.setCellData(ds_echVhclClntList.getRowPosition(), "clntNo", rtnList[0]);
      ds_echVhclClntList.setCellData(ds_echVhclClntList.getRowPosition(), "clntNm", rtnList[1]);
    }
  }
};

//  거래처조회	- 조회조건
scwin.callBackBpClnt = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_opentopblcMgntCo, ed_opentopblcMgntCoNm);
};

//-------------------------------------------------------------------------
// 거래처조회
//------------------------------------------------------------------------- 
scwin.f_registClnt = function () {
  var opts = {
    id: "tn_101_01_06b",
    popupName: "거래처등록",
    modal: true,
    type: "browserPopup",
    title: "거래처등록",
    width: 1100,
    height: 750
  };
  $c.win.openPopup($p, "/ui/tn/cs/clntmgnt/tn_101_01_06b.xml", opts);
};

/* ----------------------------------------------------------------------------
  T R A N S A C T I O N   C O M P O N E N T S   D E C L A R A T I O N
------------------------------------------------------------------------------*/
//조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  console.log("scwin.sbm_retrieve_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  var rowCnt = ds_echVhclClntList.getTotalRow();
  spn_totalRow.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.win.alert($p, "차량정보가 존재하지 않습니다.");
  } else {
    gr_echVhclClntList.setFocusedCell(0, 0);
  }
};

//저장 완료
scwin.sbm_save_submitdone = function (e) {
  console.log("scwin.sbm_save_submitdone");
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};

/* ----------------------------------------------------------------------------
  C O M P O N E N T' S   E V E N T S  
-----------------------------------------------------------------------------*/
//소속거래처 찾기 버튼
scwin.udc_opentopblcMgntCo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_opentopblcMgntCo.getValue(), ed_opentopblcMgntCoNm.getValue(), 'F', 'F');
};
scwin.udc_opentopblcMgntCo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_opentopblcMgntCo, ed_opentopblcMgntCoNm, 2);
};

//조회조건 clear 버튼
scwin.btn_clear_onclick = function (e) {
  console.log("scwin.btn_clear_onclick");
  scwin.f_fieldClear();
};

//조회 버튼
scwin.btn_search_onclick = function (e) {
  console.log("scwin.btn_search_onclick");
  scwin.f_retrieve();
};

//거래처등록 버튼
scwin.btn_regist_onclick = function (e) {
  scwin.f_registClnt();
};

//저장 버튼
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};

//그리드 정산거래처 코드 클릭 > 공통 팝업 호출
scwin.gr_echVhclClntList_onviewchange = function (info) {
  debugger;
  let rowIndex = ds_echVhclClntList.getRowPosition();
  if (!$c.util.isEmpty($p, ds_echVhclClntList.getOriginalCellData(rowIndex, gr_echVhclClntList.getFocusedColumnID()))) {
    $c.win.alert($p, "이미 등록된 거래처가 있습니다.");
    ds_echVhclClntList.undoRow(rowIndex);
  } else {
    if (scwin.pWinCloseTF != "F" && info.newValue == "") return;
    let pWinCloseTF = $c.util.isEmpty($p, scwin.pWinCloseTF) ? "T" : "F";
    scwin.f_openCommonPopUp(1, null, null, pWinCloseTF, 'F', rowIndex);
  }
  scwin.pWinCloseTF = "";
};
scwin.gr_echVhclClntList_ontextimageclick = function (rowIndex, columnIndex) {
  if ($c.util.isEmpty($p, gr_echVhclClntList.getCellDisplayData(rowIndex, columnIndex))) {
    scwin.pWinCloseTF = "F";
    scwin.gr_echVhclClntList_onviewchange();
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',btnId:'btn_opentopblcMgntCo',codeId:'ed_opentopblcMgntCo',id:'udc_opentopblcMgntCo',nameId:'ed_opentopblcMgntCoNm',selectID:'retrieveBpClntList_tpro',refDataCollection:'dma_search',code:'opentopblcMgntCo','ev:onclickEvent':'scwin.udc_opentopblcMgntCo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_opentopblcMgntCo_onblurCodeEvent',readOnlyName:'true',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'차량번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vehclNo',placeholder:'',style:'width:150px;',objType:'data',validExp:'차량번호:yes',mandatory:'true',ref:'data:dma_search.vehclNo',title:'차량번호'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.btn_clear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'차량별 거래처 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_echVhclClntList',grdDownOpts:'{"fileName":"차량별 거래처 현황.xlsx", "sheetName" : "차량별 거래처 현황", "type":"4+8+16"}',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_echVhclClntList',id:'gr_echVhclClntList',style:'',visibleRowNum:'16',visibleRowNumFix:'true',editModeEvent:'onclick',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_echVhclClntList_oncellclick','ev:ontextimageclick':'scwin.gr_echVhclClntList_ontextimageclick','ev:onviewchange':'scwin.gr_echVhclClntList_onviewchange',focusMode:'row',sortable:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'70',colSpan:'',rowSpan:'2',hidden:'true',value:'포맷'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'소속거래처',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'소유구분',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'차량번호',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'70',colSpan:'',rowSpan:'2',hidden:'true',sortable:'false',value:'차량종류코드 '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'차량종류',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'70',colSpan:'',rowSpan:'2',hidden:'true',sortable:'false',value:'차량톤급코드'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'톤급',width:'70',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'선호권역',width:'100',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'선호화종',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'기사명',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'전화번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'휴대전화',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column23',value:'정산거래처',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'명',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'코드',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'명',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'format',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opentopblcMgntCo',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'opentopblcMgntCoNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclClsNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKndCd',inputType:'text',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclKndNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrmCd',inputType:'text',width:'70',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNrmNm',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prefDistrict1',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'prefKcg1',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'drvNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'telNo',displayMode:'label',readOnly:'true',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mpNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'clntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spn_totalRow',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_regist',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_regist_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'거래처등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveCarKindClntInfo_tpro',codeId:'ed_comCode',validTitle:'',nameId:'ed_comCodeNm',style:'width:%; height:px;display: none',btnId:'btn_comCode',id:'udc_comCode'}}]}]}]}]}]})