/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_10b.xml 20429 4a7b58885f5963da1dfefc2ce040ad435598da76140223b7f11c14946531220d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixYmFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptWages',name:'공임적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realWrkHh',name:'실작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atm',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lc_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lc_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'PsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveWrkplList'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveWorkPlaceEachWorkHourCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fix_work_list","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lc_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lc_wrkPlCd',target:'data:json,{"id":"ds_lc_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lc_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수
scwin.vCurDate = "";
scwin.userInfo = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //날짜형식입니다.
  scwin.userInfo = $c.data.getMemInfo($p);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  lc_homeClsCd.setSelectedIndex(0);
  lc_homeClsCd.setValue(scwin.userInfo.eqHomeClsCd); //"<%=userInfo.getEqHomeClsCd()%>"; // 정비소속구분코드

  ds_lc_wrkPlCd.removeAll();

  //정비작업장combo데이터호출
  dma_lc_wrkPlCd.set("param1", lc_homeClsCd.getValue());
  $c.sbm.execute($p, sbm_lc_wrkPlCd);

  //초기값 셋팅
  em_wrkStDt.setValue(scwin.vCurDate.substring(0, 6) + "01");
  em_wrkEndDt.setValue(scwin.vCurDate);
  em_wrkStDt.focus();
};
scwin.sbm_lc_wrkPlCd_submitdone = function (e) {
  //for=ds_lux_wrkPlCd event=OnLoadCompleted(rowCnt)
  lc_wrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.userInfo.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.userInfo.fixWrkPlCd); // "<%=userInfo.getFixWrkPlCd()%>"; // 정비작업장코드
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tb_wrk]);
  if (!ret) return;
  if (!$c.gus.cfIsAfterDate($p, em_wrkStDt.getValue(), em_wrkEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    em_wrkStDt.focus();
    return;
  }

  //tobe 삭제 :불필요해보임
  //ds_fix_work_re.UseChangeInfo = false; // 조회조건

  dma_fix_work_re.set("fixWrkPlCd", lc_wrkPlCd.getValue());
  dma_fix_work_re.set("acctDeptCd", ed_acctDeptCd.getValue());
  dma_fix_work_re.set("fixYmFrom", em_wrkStDt.getValue());
  dma_fix_work_re.set("fixYmTo", em_wrkEndDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_fix_work_list.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    //gr_work_pl.ColumnProp('realWrkHh','Dec') = "1" ;
  }
  totalRows.setValue(ds_fix_work_list.getRowCount());
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var pWhere = "";
  switch (disGubun) {
    case 1:
      //귀속부서 팝업
      await udc_acctDeptCd.cfCommonPopUp(scwin.udc_acctDeptCd_callBackFunc, ed_acctDeptCd.getValue().trim(),
      // 화면에서의 Code Element의	Value
      ed_acctDeptNm.getValue(),
      // 화면에서의 Name Element의	Value
      pClose,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      null,
      // 검색 결과	컬럼의 보여주는	개수
      null,
      // Title순서	
      null,
      // 보여주는 각 컬럼들의 폭	
      null,
      // 컬럼중에서 숨기는	컬럼 지정	
      pWhere,
      // SQL절의 WHERE절에	원하는 조건을 선택함
      null,
      // POP-UP뛰을때 원도우의	사용자 정의	폭
      null,
      // POP-UP뛰을때 우도우의	사용자 정의	높이	
      null,
      // 윈도우 위치 Y좌표	
      null,
      // 윈도우 위치 X좌표
      null,
      // 중복체크여부	("F")
      "T",
      // 전체검색허용여부	("F")
      "귀속부서,부서코드,부서명" // POP-UP Window Title
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// popup 콜백
//-------------------------------------------------------------------------
scwin.udc_acctDeptCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_acctDeptCd.setValue(rtnList[0]);
    ed_acctDeptNm.setValue(rtnList[1]);
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptNm.setValue("");
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
  var pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if ($c.gus.cfIsNull($p, isCode) || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');

    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tb_wrk, null);

  //tobe추가 : asis와 동작 동일하게 하기 위해 추가.
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  if (!(ds_fix_work_list.getRowCount() > 0)) {
    await $c.win.alert($p, "자료가 없습니다.");
    return;
  }
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    const options = {
      fileName: "월별 작업장별 실적조회.xlsx",
      sheetName: "월별 작업장별 실적조회"
    };
    $c.data.downloadGridViewExcel($p, gr_work_pl, options);
  }
};

//-------------------------------------------------------------------------
// 귀속부서 돋보기 버튼 클릭시
//-------------------------------------------------------------------------
scwin.btn_acctDeptCd_onclick = function (e) {
  scwin.f_openCommonPopUp(1, ed_acctDeptCd.getValue(), ed_acctDeptNm.getValue(), 'F', 'T');
};

//-------------------------------------------------------------------------
// 귀속부서 code칸에서 killfocus
//-------------------------------------------------------------------------
scwin.btn_acctDeptCd_onblurCode = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptCd, ed_acctDeptNm, 1, false);
};

//-------------------------------------------------------------------------
// 귀속부서 값 변경시
//-------------------------------------------------------------------------
scwin.btn_acctDeptCd_onviewchangeCode = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_acctDeptNm, ed_acctDeptCd, 1, false);
};

//-------------------------------------------------------------------------
// 사업부문 선택시
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onviewchange = async function (info) {
  ds_lc_wrkPlCd.removeAll();

  //정비작업장combo데이터호출
  dma_lc_wrkPlCd.set("param1", lc_homeClsCd.getValue());
  await $c.sbm.execute($p, sbm_lc_wrkPlCd);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',refDataMap:'',style:'',id:'udc_fromToCalendar1',refEdDt:'',edFromId:'em_wrkStDt',edToId:'em_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'일자',titleTo:'일자',validExp:'일자:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',ref:'',emptyItem:'true',mandatory:'true',displayMode:'value delim label',title:'사업부문',validExp:'사업부문:yes','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'고속'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'TR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_fix_work_re.fixWrkPlCd',displayMode:'value delim label',validExp:'정비작업장:yes',title:'정비작업장'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lc_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'귀속부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveAcctDeptCdInfoPopup',selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',validTitle:'귀속부서',nameId:'ed_acctDeptNm',style:'',id:'udc_acctDeptCd',btnId:'btn_acctDeptCd',UpperFlagCode:'1',allowCharCode:'0-9',mandatoryCode:'false',maxlengthCode:'5','ev:onclickEvent':'scwin.btn_acctDeptCd_onclick','ev:onblurCodeEvent':'scwin.btn_acctDeptCd_onblurCode','ev:onviewchangeCodeEvent':'scwin.btn_acctDeptCd_onviewchangeCode',validExp:'귀속부서:no:format=00000'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',gridID:'gr_work_pl',gridDownFn:'scwin.f_Excel',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'16',visibleRowNumFix:'true',dataDragSelect:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'년월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'작업장명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'공임적용기준',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'실작업시간',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'금액',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixYm',inputType:'text',style:'',value:'',width:'70',dataType:'text',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptWages',inputType:'number',style:'',value:'',width:'150',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realWrkHh',inputType:'text',style:'',value:'',width:'120',displayFormat:'#,###.0',dataType:'float',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'atm',inputType:'text',style:'',value:'',width:'70',dataType:'number',displayFormat:'#,###',textAlign:'right'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'fixYm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column43',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column40',value:'',displayMode:'label',dataType:'float',displayFormat:'#,###.0',expression:'SUM(\'realWrkHh\')',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',dataType:'number',expression:'SUM(\'atm\')',textAlign:'right',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column47',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',expression:'SUM(\'realWrkHh\')',textAlign:'right',displayFormat:'#,###.0',dataType:'float'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',expression:'SUM(\'atm\')',textAlign:'right',dataType:'number',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})