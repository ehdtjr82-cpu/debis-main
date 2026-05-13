/*amd /ui/ds/op/stvwrk/op_210_03_06b.xml 24552 35cec82193cd8fc13bfa41237b0edb915613fbd8d37056788449956860ab0471 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lodeptCd',name:'물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaStDt',name:'휴무시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vacaEndDt',name:'휴무종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'confirmYn',name:'확정여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Present',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'status',name:'상태',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'vacaRsnCd',name:'휴무사유코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'vacaRsnNm',name:'휴가사유',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'vacaStDt',name:'휴무시작일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'vacaEndDt',name:'휴무종료일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'totalVacaCnt',name:'총휴가계',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'vacaCnt',name:'휴가계',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'remainVacaCnt',name:'잔여휴가계',dataType:'number',defaultValue:'0',length:'38'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.stvwrk.RetrieveVacationIntendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_Present","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_Present","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.SaveFuncPostVacation2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_Present","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save2',action:'/ds.op.DeleteVacationIntendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_Present","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save2_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getLobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getLobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류 점소 코드
scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자
scwin.vwrkStDt = scwin.vCurDate.substring(0, 6) + "01"; // 입항예정일자 from(현재 날짜가 포함된 달의 시작 일자)
scwin.vwrkEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate.substring(0, 6)); // 입항예정일자 to(현재 날짜가 포함된 달의 마지막 일자)

scwin.totalCnt = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  //점소 콤보박스 조회
  $c.sbm.execute($p, sbm_getLobran);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_vacaStDt.setValue(scwin.vwrkStDt);
    ed_vacaEndDt.setValue(scwin.vwrkEndDt);
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 점소 콤보박스 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_getLobran_submitdone = function (e) {
  acb_lobran.setValue(scwin.lobranCd);
  acb_lobran.focus();

  //테스트 데이터
  //ds_Query.set("lobranCd", "4AA");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  if (ed_vacaStDt.getValue() == "" || ed_vacaEndDt.getValue() == "") {
    $c.win.alert($p, "휴무일자를 입력하세요");
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var StDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaStDt");
  var EndDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaEndDt");

  // 아무 액션 취하지 않은 상태서 저장버튼 클릭시    
  if (ds_Present.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터 "]);
    return;
  }

  //필수입력항목 null 체크
  let ret = await $c.gus.cfValidate($p, [gr_emp]);
  if (!ret) {
    return;
  }

  // 시작일자가 종료일자보다 이후일 경우
  if (!$c.gus.cfIsAfterDate($p, StDt, EndDt, false)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return false;
  }
  for (var i = 0; i < ds_Present.getRowCount(); i++) {
    if (ds_Present.getCellData(i, "chk") == "T") {
      if (ds_Present.getCellData(i, "status") == "승인") {
        $c.win.alert($p, "미승인 건만 승인 가능합니다.");
        return;
      }
    }
  }

  //저장하시겠습니까?
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
//  취소
//-------------------------------------------------------------------------
scwin.f_Delete = async function () {
  // 아무 액션 취하지 않은 상태서 저장버튼 클릭시
  if (ds_Present.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터 "]);
    return;
  }

  //필수입력항목 null 체크
  let ret = await $c.gus.cfValidate($p, gr_emp);
  if (!ret) {
    return;
  }
  for (var i = 0; i < ds_Present.getRowCount(); i++) {
    if (ds_Present.getCellData(i, "chk") == "T") {
      if (ds_Present.getCellData(i, "status") == "승인") {
        ds_Present.deleteRow(i);
      } else {
        $c.win.alert($p, "승인 건만 취소 가능합니다.");
        return;
      }
    }
  }

  //저장하시겠습니까?
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 저장(행삭제용)
//-------------------------------------------------------------------------
scwin.f_Save2 = async function () {
  var StDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaStDt");
  var EndDt = ds_Present.getCellData(ds_Present.getRowPosition(), "vacaEndDt");

  // 아무 액션 취하지 않은 상태서 저장버튼 클릭시
  if (ds_Present.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["데이터 "]);
    return;
  }

  //필수입력항목 null 체크
  let ret = await $c.gus.cfValidate($p, gr_emp);
  if (!ret) {
    return;
  }

  // 시작일자가 종료일자보다 이후일 경우
  if (!$c.gus.cfIsAfterDate($p, StDt, EndDt, false)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return false;
  }

  //저장하시겠습니까?
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_save2);
  }
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_deleteRow = function () {
  var status = ds_Present.getCellData(ds_Present.getRowPosition(), "status");

  // 상태가 승인이면 삭제 안됨
  if (status != "미승인") {
    $c.win.alert($p, "승인한 건은 삭제할 수 없습니다.");
    return false;
  } else {
    ds_Present.deleteMarked();
  }
};

//-------------------------------------------------------------------------
// 조회조건 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_mainData, null);
  ed_vacaStDt.setValue(scwin.vwrkStDt);
  ed_vacaEndDt.setValue(scwin.vwrkEndDt);
  acb_lobran.setValue(scwin.lobranCd);
  acb_lobran.focus();
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 인원 검색
      var pWhere = acb_lobran.getValue();
      udc_staffNo.setSelectId("retrieveStvArrangementRegularManList"); // XML상의 SELECT ID
      udc_staffNo.cfCommonPopUp(scwin.udc_staffNo_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , '8' // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , '사원코드,사원명,직급,직급명,직종,직종명,상세직종,상세직종' // Title순서
      , '70,70,70,70,50,70,50,80' // 보여주는 각 컬럼들의 폭
      , '5,7,9,10' // 컬럼중에서 숨기는 컬럼 지정
      , pWhere // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , 500 // POP-UP뛰을때 원도우의 사용자 정의 폭
      , 400 // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , "T" // 전체검색허용여부 ("F")
      , "사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
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

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_Present.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다.       
  } else {
    ds_Present.setRowPosition(0);
  }

  // 총 조회건수 표시
  tbx_totalRows.setValue(ds_Present.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 저장2 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save2_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_002);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 인원 UDC START
//-------------------------------------------------------------------------
scwin.udc_staffNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_staffNo.getValue(), ed_staffNm.getValue(), 'F', 'F');
};
scwin.udc_staffNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_staffNo, ed_staffNm, 1);
};
scwin.udc_staffNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_staffNm, ed_staffNo, 1, false);
};
scwin.udc_staffNo_callBackFunc = function (ret) {
  if (ret != null) {
    ed_staffNo.setValue(ret[0]); //사원코드
    ed_staffNm.setValue(ret[1]); //사원명
  } else {
    ed_staffNo.setValue(""); //사원코드
    ed_staffNm.setValue(""); //사원명
  }
};
//-------------------------------------------------------------------------
// 인원 UDC END
//-------------------------------------------------------------------------
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:30px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:30px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:300px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:45px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_lobran',mandatory:'true',ref:'data:ds_Query.lobranCd',search:'start',style:'width:230px;',submenuSize:'auto',title:'점소',sortOption:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'',codeId:'ed_staffNo',nameId:'ed_staffNm',btnId:'btn_staffNo',id:'udc_staffNo',UpperFlagCode:'1',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_staffNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_staffNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_staffNo_onviewchangeNameEvent',refDataCollection:'ds_Query',code:'staffNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'휴무일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_Query',refEdDt:'vacaEndDt',refStDt:'vacaStDt',style:'',edFromId:'ed_vacaStDt',edToId:'ed_vacaEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_confirmYn',style:'width:150px;',submenuSize:'auto',chooseOptionLabel:'전체',ref:'data:ds_Query.confirmYn'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'승인'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'휴무예정정보 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"정규(현장)직 근태 승인.xlsx","sheetName":"정규(현장)직 근태 승인","type":"4+8+16"}',templateYn:'N',gridUpYn:'N',gridDownYn:'Y',gridID:'gr_emp'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_Present',id:'gr_emp',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'checkbox',removeBorderStyle:'false',width:'50',fixColumnWidth:'true',value:' '}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'80',value:'상태'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'90',value:'인원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'70',value:'성명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'휴무사유',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'휴무사유',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'시작일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'종료일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'총연차',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'사용연차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'잔여연차',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'chk',inputType:'checkbox',removeBorderStyle:'false',width:'50',fixColumnWidth:'true',valueType:'other',trueValue:'T',falseValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'status',inputType:'text',removeBorderStyle:'false',width:'80',readOnly:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',width:'90',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vacaRsnCd',inputType:'text',width:'100',mandatory:'true',hiddenCol:'true',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vacaRsnNm',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vacaStDt',inputType:'text',width:'100',displayFormat:'####/##/##',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vacaEndDt',inputType:'text',width:'100',displayFormat:'####/##/##',mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totalVacaCnt',inputType:'text',width:'100',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vacaCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'remainVacaCnt',displayMode:'label',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',EngYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',style:'',btnRowAddYn:'N',delFunction:'scwin.f_deleteRow',gridID:'gr_emp'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인취소'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'승인'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save2'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})