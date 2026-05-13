/*amd /ui/cm/bc/salesmgnt/zz_670_04_02b.xml 22660 6dde97fc77887cb5a243d3e09c0958234a7713adfce1c9f17f39ff00e13f168b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userCho',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userNm',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userClsCd',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_program'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'userId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'empNo',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_programUser'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authorNm',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mResultList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_tplPrivilege',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'number'}},{T:1,N:'w2:column',A:{id:'userId',name:'사용자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userCho',name:'사용자명(초성)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userClsCd',name:'사용자구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'progId',name:'프로그램ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authorCode',name:'권한코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authorNm',name:'권한명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'authorDc',name:'권한설명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userMpNo',name:'사용자휴대폰번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.salesmgnt.SaveMobileUserListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_tplPrivilege","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveProgramUser',action:'/cm.bc.salesmgnt.RetrieveMobileProgramUserCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_programUser","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_programUser","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveProgramUser_submitdone','ev:submiterror':'scwin.sbm_RetrieveProgramUser_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/cm.bc.salesmgnt.RetrieveMobileUserListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_mResultList","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_mResultList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userEachScreenPriv',action:'/cm.bc.salesmgnt.RetrieveMobileProgramListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_program","key":"IN_DS1"},{"id":"ds_tplPrivilege","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_program","key":"IN_DS1"},{"id":"ds_tplPrivilege","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userEachScreenPriv_submitdone','ev:submiterror':'scwin.sbm_userEachScreenPriv_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : zz_670_04_02b
// 이름     : 모바일사용자관리
// 경로     : 공통/시스템관리/사용자/
// 작 성 자 : 오영재
// 작 업 일 : 2025-12-29
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.vUserClsCd;
scwin.vPrivGrpId;
scwin.retrieveYn = "N";
//scwin.G_DS_CONDITION_CHK = "";
// 페이지 로드 시 초기 데이터를 보관할 변수
scwin.initialData = "";
scwin.secondRet = "";
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "ZZ010",
    compID: "lc_userClsCd_param"
  }];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  $c.data.setCommonCode($p, codeOptions);
  scwin.vUserClsCd = $c.data.getParameter($p, "pUserClsCd") == null ? "" : $c.data.getParameter($p, "pUserClsCd");
  scwin.vPrivGrpId = $c.data.getParameter($p, "pPrivGrpId") == null ? "" : $c.data.getParameter($p, "pPrivGrpId");
  scwin.setProgramHeader();
  dma_condition.set("userCho", 0);

  // 1. 초기 상태의 데이터를 저장해둡니다.
  scwin.initialData = JSON.stringify(dma_condition.getJSON());
  console.log("dma_condition=>" + scwin.initialData);
};

//-------------------------------------------------------------------------
// 권한 DataSet 헤더설정
//-------------------------------------------------------------------------
scwin.setProgramHeader = function () {
  //헤더정보 생성

  scwin.f_RetrieveProgramUser();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveProgramUser = function () {
  //tr_RetrieveProgramUser.post();
  $c.sbm.execute($p, sbm_RetrieveProgramUser);
};
scwin.btn_reset_onclick = function (e) {
  //$c.gus.cfInitObjects(ed_searchUser);
  ed_searchUser.setValue("");
};
scwin.btn_search_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  //변경한 데이터가 있는지 체크한다. 
  if (ds_tplPrivilege.getModifiedIndex().length == 0 && ds_mResultList.getModifiedIndex().length == 0) {
    //$c.gus.cfAlertMsg(MSG_CM_ERR_002);    // 필수값 메세지
    $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  let ret;
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  //tr_Retrieve.post();
  //if (ed_searchUser.getValue() != "") {
  // alert (dma_condition.get("userCho"));
  // alert (dma_condition.get("userNm")); 
  // alert (dma_condition.get("userClsCd"));

  debugger;
  let currentData = JSON.stringify(dma_condition.getJSON());
  console.log("currentData=>" + currentData);

  // 2. 초기 데이터와 현재 데이터가 같다면 (변경사항이 없다면) 실행 안 함
  if (scwin.initialData === currentData && scwin.secondRet != "Y") {
    console.log("최초 로딩 상태이거나 변경사항이 없어 전송을 스킵합니다.");
    return; // 가우스 TR.post()가 무시되는 것과 같은 효과
  } else {
    scwin.secondRet = "Y";
  }

  //if (scwin.retrieveYn == "Y")
  $c.sbm.execute($p, sbm_Retrieve);
  //}
};

/*
<script language="JavaScript" for="tr_save" event="OnSuccess()">
*/
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
  //var userId = ds_condition.nameValue(ds_condition.RowPosition, "userId");//권한그룹조회후 권한그룹별권한조회
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/*
<script language=JavaScript for=ds_mResultList event=OnLoadCompleted(rowCnt)>
*/
scwin.sbm_Retrieve_submitdone = function (e) {
  //조회결과가 0인경우
  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  let rowCnt = ds_mResultList.getRowCount();
  //cfShowTotalRows(totalRows,rowCnt);
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    dma_program.setEmptyValue();
  } else {
    scwin.retrieveYn = "Y";

    /**********
     * 2006.4.16 이진욱
     * 내용: 중복 조회되는 것을 막기위해서 코멘트 처리
     *       그리드 OnRowPosChanged 이벤트 발생시 조회딤
     **********/
    //var vFirstUser = ds_condition.NameString(ds_condition.RowPosition, "userId");
    //f_MainRetrieve(vFirstUser);	
  }

  //f_GridColHeaderCheckChange('gr_tplPrivilege');
  //scwin.G_DS_CONDITION_CHK = "1";
};
scwin.sbm_Retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
  scwin.retrieveYn = "N";
};

//-------------------------------------------------------------------------
// function name : f_MainRetrieve
// function desc : 조회
//-------------------------------------------------------------------------
scwin.f_MainRetrieve = function () {
  //tr_userEachScreenPriv.Post();
  $c.sbm.execute($p, sbm_userEachScreenPriv);
};

/*
<script language=JavaScript for=ds_tplPrivilege event=OnLoadCompleted(rowCnt)>
*/
scwin.sbm_userEachScreenPriv_submitdone = function (e) {
  let rowCnt = ds_tplPrivilege.getRowCount();
  //cfShowTotalRows(totalRows2,rowCnt);
  ed_totalRows2.setValue(rowCnt);
  if (rowCnt == 0) {
    // disable 처리
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
    // disable 처리
    $c.gus.cfDisableKeyData($p);
  }

  //f_GridColHeaderCheckChange('gr_tplPrivilege');    
};
scwin.sbm_userEachScreenPriv_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/*
<script language=JavaScript for=ds_programUser event=OnLoadCompleted(rowCnt)>
*/
scwin.sbm_RetrieveProgramUser_submitdone = function (e) {
  let rowCnt = ds_programUser.getRowCount();
  //cfShowTotalRows(totalRows4,rowCnt);
  ed_totalRows4.setValue(rowCnt);
  if (rowCnt == 0) {
    // disable 처리
    $c.gus.cfEnableKeyData($p);
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  } else if (rowCnt > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_save]);
    // disable 처리
    $c.gus.cfDisableKeyData($p);
  }
};
scwin.sbm_RetrieveProgramUser_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};

/*
<!-- 사용자 선택시 -->
<script language="javascript"  for=gr_mResultList event=OnClick(Row,Colid)>
*/
scwin.gr_mResultList_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_program.set("userId", ds_mResultList.getCellData(rowIndex, "userId")); //권한그룹조회후 권한그룹별권한조회
  dma_program.set("empNo", ds_mResultList.getCellData(rowIndex, "empNo")); //권한그룹조회후 권한그룹별권한조회
  scwin.f_MainRetrieve();
};

/*
<script language="javascript"  for=gr_programUser event=OnClick(Row,Colid)>
*/
scwin.gr_programUser_oncellclick = function (rowIndex, columnIndex, columnId) {
  dma_condition.set("userNm", ds_programUser.getCellData(rowIndex, "userNm")); //권한그룹조회후 권한그룹별권한조회
  dma_program.set("userId", ds_programUser.getCellData(rowIndex, "userId")); //권한그룹조회후 권한그룹별권한조회
  dma_program.set("empNo", ds_programUser.getCellData(rowIndex, "empNo")); //권한그룹조회후 권한그룹별권한조회
  scwin.f_Retrieve();
  scwin.f_MainRetrieve();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'true',disabled:'false',style:'width: 150px;',allOption:'',id:'lc_userClsCd_param',class:'',direction:'auto',ref:'data:dma_condition.userClsCd',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices'}]},{T:1,N:'xf:select1',A:{submenuSize:'fixed',appearance:'minimal',disabledClass:'w2selectbox_disabled',chooseOption:'',disabled:'false',style:'width: 100px;',allOption:'',id:'lux_userSearch',class:'',direction:'auto',ref:'data:dma_condition.userCho'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자명'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용자ID'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:input',A:{style:'width: 150px;',id:'ed_searchUser',class:'',ref:'data:dma_condition.userNm'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.btn_reset_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox flex_no col3',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사용자 목록 ',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_mResultList',focusMode:'cell',id:'gr_mResultList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_mResultList_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'사용자ID ',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'사용자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column15',value:'사번',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userId',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNo',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'모바일 권한 목록 ',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_tplPrivilege',focusMode:'cell',id:'gr_tplPrivilege',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column17',value:'사용',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'권한명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'권한설명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'authorNm',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'authorDc',value:'',displayMode:'label',readOnly:'true',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'모바일 권한 사용자 목록 ',style:'',tagname:'h4'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_programUser',focusMode:'cell',id:'gr_programUser',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_programUser_oncellclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption3',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'사번',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'사용자ID',displayMode:'label',class:'txt-red',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'사용자명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'권한명',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNo',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'userId',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'authorNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows4',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn',userAuth:'C','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]}]}]})