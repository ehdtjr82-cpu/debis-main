/*amd /ui/cm/bc/comnmgnt/privmgnt/zz_670_05_01b.xml 23534 490f031cdfb49ef4554e621110e6828503336f3d0ee42d7a41d55cb15b1fbb54 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param2',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param3',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param4',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userPrivYn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userHistYn'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col6',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col7',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col8',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col9',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col10',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'searchStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'searchEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userId',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userBlockDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userNm',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userRetireYn',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_userPriv'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'userId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'createDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pgmNm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'insYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtnYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'xlsDwnldYn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',dataType:'text'}},{T:1,N:'w2:column',A:{id:'retireDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empStsCd',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/cm.bc.comnmgnt.privmgnt.RetrieveUserPrivHistCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_userPriv","key":"OUT_DS1"}]',target:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_userPriv","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/cm.bc.comnmgnt.privmgnt.SaveUserPrivRestoreCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userPrivYn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_query',target:'data:json,{"id":"ds_userPrivYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userPrivYn_submitdone','ev:submiterror':'scwin.sbm_userPrivYn_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_userHistYn',action:'/cm.zz.RetrieveCommonPopupCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_query',target:'data:json,{"id":"ds_userHistYn","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_userHistYn_submitdone','ev:submiterror':'scwin.sbm_userHistYn_submiterror',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : zz_670_05_01b
// 이름     : 사용자별 권한 이력
// 경로     : 공통/시스템관리/권한/
// 작 성 자 : 오영재
// 작 업 일 : 2026-1-6
// 사용계정 : 내부
// 비고     :
//
// 업로드   :
// 다운로드 : 
// 레포트   :
// 호출     : 
//==================================================================================================================
scwin.empNo = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userId")) ? '' : $c.data.getMemInfo($p, "userId");
scwin.today = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.vCurDate = scwin.today; // 서버를 기준으로 현재 날짜 반환
let lastDay = scwin.today.substring(0, 4) + scwin.today.substring(4, 6) + new Date(scwin.today.substring(0, 4), scwin.today.substring(4, 6), 0).getDate(); // 마지막날
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = lastDay; // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_searchStDt.setValue(scwin.vQryStDt);
  ed_searchEndDt.setValue(scwin.vQryEndDt);
};

//-------------------------------------------
// 조회
//-------------------------------------------	
scwin.f_retrieve = async function () {
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_searchStDt, ed_searchEndDt, ed_userId]);
  if (!ret) {
    return;
  }

  //날짜 입력 오류 검사 관련 부분
  if (ed_searchStDt.getValue() != "" && ed_searchEndDt.getValue() != "") {
    if (!$c.gus.cfIsAfterDate($p, ed_searchStDt.getValue(), ed_searchEndDt.getValue())) {
      $c.gus.cfAlertMsg($p, "조회종료일자는 시작일자보다 이후로 입력하세요");
      //PAGE_MOVE_CONFIRM = false;
      return;
    }
  }

  // 조회TR
  //tr_retrieve.post();	    
  dma_search.set("userId", ed_userId.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_userPriv.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, "조회결과가 존재하지 않습니다.");
    return;
  } else {
    //cfShowTotalRows(totalRows, rowCnt);// 총 조회건수 표시
    ed_totalRows.setValue(rowCnt);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, "권한복구가 완료되었습니다.");
  scwin.f_retrieve();
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfAlertMsg($p, e.responseJSON.resultDataSet[1].Msg);
};
scwin.sbm_userPrivYn_submitdone = function (e) {
  let rowCnt = ds_userPrivYn.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  } else {
    if (ds_userPrivYn.getCellData(0, "col1") == "0") {
      scwin.f_UserHistYn();
    } else {
      $c.win.alert($p, "현재 사용자 권한이 등록되어있습니다.");
      return;
    }
  }
};
scwin.sbm_userPrivYn_submiterror = function (e) {};

//-------------------------------------------------------------------------
// 퇴사일자 기준 권한 복구
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  if (ds_userPriv.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 내역이 없습니다.");
  }
  if (ed_userBlockDt.getValue() == "") {
    await $c.win.alert($p, "적용일자를 입력하세요");
  }
  let ret;
  ret = await $c.gus.cfValidate($p, [ed_userId]);
  if (!ret) return;
  scwin.f_getUserPrivYn();
};

// 사용자 현재 권한 여부 확인
scwin.f_getUserPrivYn = function () {
  // SELECT 절 
  let param1 = "COUNT(*)  		as COL1 " + ",''			 	as COL2 " + ",''			 	as COL3 " + ",''			 	as COL4 " + ",''  			as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  let param2 = "TB_ZZ412";
  let param3 = "AND USER_ID = '" + ed_userId.getValue() + "'";
  let param4 = "1";
  dma_query.set("sysCd", "CommonEBC");
  dma_query.set("queryId", "dinymicQueryTest");
  dma_query.set("param1", param1);
  dma_query.set("param2", param2);
  dma_query.set("param3", param3);
  dma_query.set("param4", param4);
  $c.sbm.execute($p, sbm_userPrivYn);
  /*
  ds_userPrivYn.DataId = 
      "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 
                                                                                  + "&param2=" + param2 
                                                                                  + "&param3=" + param3
                                                                                  + "&param4=" + param4;
  ds_userPrivYn.Reset(); 
  */
};
scwin.f_UserHistYn = function () {
  // SELECT 절 
  let param1 = "COUNT(*)  		as COL1 " + ",''			 	as COL2 " + ",''			 	as COL3 " + ",''			 	as COL4 " + ",''  			as COL5 " + ",'' 				as COL6 " + ",'' 				as COL7 " + ",'' 				as COL8 " + ",'' 				as COL9 " + ",'' 				as COL10 ";

  // 대상테이블 	
  let param2 = "TB_ZZ412_LOG";
  let param3 = "AND USER_ID = '" + ed_userId.getValue() + "'" + "AND TO_CHAR(CREATE_DTM,'YYYYMMDD') =  '" + ed_userBlockDt.getValue() + "'";
  let param4 = "1";
  dma_query.set("sysCd", "CommonEBC");
  dma_query.set("queryId", "dinymicQueryTest");
  dma_query.set("param1", param1);
  dma_query.set("param2", param2);
  dma_query.set("param3", param3);
  dma_query.set("param4", param4);
  $c.sbm.execute($p, sbm_userHistYn);

  /*
  ds_userHistYn.DataId = 
      "/cm.zz.RetrieveCommonPopupCMD.do?sysCd=CommonEBC&queryId=dinymicQueryTest" + "&param1=" + param1 
                                                                                  + "&param2=" + param2 
                                                                                  + "&param3=" + param3
                                                                                  + "&param4=" + param4;
  ds_userHistYn.Reset(); 
  */
};

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (flag, check) {
  switch (flag) {
    case '1':
      // 사원
      let param = '';
      udc_userId.setSelectId("retrieveAcEmpInfo");
      udc_userId.cfCommonPopUp(scwin.udc_userId_cb, ed_userId.getValue().trim(), ed_userNm.getValue(), check, null, null, null, null, param, null, null, null, null, null, 'F');
      break;
    default:
      break;
  }
};
scwin.udc_userId_cb = function (rtnList) {
  scwin.f_resultPopEd(ed_userId, ed_userNm, rtnList);
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.f_resultPopEd = function (strCd, strNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    strCd.setValue(rtnList[0]); // 코드
    strNm.setValue(rtnList[1]); // 명
    strCd.options.hidVal = rtnList[0]; // 히든값
  } else {
    strCd.setValue("");
    strNm.setValue("");
    strCd.options.hidVal = "";
  }
};
scwin.btn_save_onclick = function (e) {
  scwin.f_save();
};
scwin.udc_userId_onclickEvent = function (e) {
  scwin.f_openPopUp('1', 'F');
};
scwin.udc_userId_onblurCodeEvent = function (e) {
  if (ed_userId.getValue().trim().length != 0) {
    scwin.f_openPopUp('1', 'F');
  } else {
    ed_userId.setValue("");
    ed_userNm.setValue("");
  }
};
scwin.btn_search_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.sbm_userHistYn_submitdone = async function (e) {
  if (ds_userHistYn.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
    return;
  } else {
    await $c.win.alert($p, ds_userHistYn.getCellData(0, "col1"));
    if (ds_userHistYn.getCellData(0, "col1") != "0") {
      if (await $c.win.confirm($p, "저장하시겠습니까?")) {
        dma_search.set("userId", ed_userId.getValue());
        $c.sbm.execute($p, sbm_save);
        //tr_save.post();
      }
    } else {
      $c.win.alert($p, "적용일자 기준 권한이력이 없습니다.");
      return;
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'searchStDt',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar1',refEdDt:'searchEndDt',edFromId:'ed_searchStDt',edToId:'ed_searchEndDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업일자시작일자',titleTo:'작업일자종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_userId',validTitle:'사용자',nameId:'ed_userNm',style:'',id:'udc_userId',objTypeCode:'data',objTypeName:'data','ev:onclickEvent':'scwin.udc_userId_onclickEvent','ev:onblurCodeEvent':'scwin.udc_userId_onblurCodeEvent',maxlengthCode:'6',mandatoryCode:'true',allowCharCode:'0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'퇴사여부 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_userRetireYn',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.userRetireYn',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'예'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아니요'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_userPriv',focusMode:'cell',id:'gr_userPriv',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'사용자ID',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업일시',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'프로그램ID',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'프로그램명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'입력여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'조회여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'수정여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'삭제여부',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'출력여부',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'엑셀다운</br>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'I/U/D 구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'퇴사일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'사원상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'createDtm',inputType:'text',style:'',value:'',width:'100',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmId',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pgmNm',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'insYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qryYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'delYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtnYn',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'xlsDwnldYn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'gubun',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'retireDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'empStsCd',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:' 복구대상 작업일자 ',class:''}},{T:1,N:'w2:inputCalendar',A:{style:'',id:'ed_userBlockDt',class:'',calendarValueType:'yearMonthDate',title:'퇴사일자',objType:'data',ref:'data:dma_search.userBlockDt',displayFormat:'yyyy/MM/dd'}}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',type:'button',class:'btn','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'권한복구'}]}]}]}]}]}]}]}]}]})