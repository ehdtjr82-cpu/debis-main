/*amd /ui/ps/eq/adjmmgnt/fixrslts/eq_530_01_01b.xml 21509 eec09b148dd22d93cb465da6c8d388ba7d57b94d3a9a1b0c75a04cef9c903b29 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'fixYmFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixYmTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixEmpNo',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixEmpNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixPartyCd',name:'작업반',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptWages',name:'공임적용기준',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realWrkHh',name:'실작업시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'atm',name:'금액',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_lux_wrkPlCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text',defaultValue:'PsCommonEBC'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text',defaultValue:'retriveWrkplList'}},{T:1,N:'w2:key',A:{id:'param1',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.adjmmgnt.fixrslts.RetrieveMonthEachWorkHourCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_fix_work_list","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lux_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_lux_wrkPlCd',target:'data:json,{"id":"ds_lux_wrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lux_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = "";
scwin.strDate = "";

// 로그인사용자 정보
scwin.userInfo = "";
scwin.eqHomeClsCd = ""; // 사용자소속구분코드 
scwin.fixWrkPlCd = ""; //정비작업장코드

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //날짜형식입니다.
  scwin.strDate = scwin.vCurDate.substring(0, 6) + "01";
  scwin.userInfo = $c.data.getMemInfo($p);
  scwin.eqHomeClsCd = scwin.userInfo.eqHomeClsCd; // 사용자소속구분코드
  scwin.fixWrkPlCd = scwin.userInfo.fixWrkPlCd;

  //공통코드값
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }, {
    grpCd: "EQ001",
    compID: "gr_work_pl:fixPartyCd"
  }];
  await $c.data.setCommonCode($p, codeOptions);
};
scwin.ondataload = async function () {
  lc_homeClsCd.setSelectedIndex(0);
  lc_homeClsCd.setValue(scwin.eqHomeClsCd); //정비소속구분코드

  //tobe추가 : asis와 동일하게동작하기 위해 추가.
  await scwin.lc_homeClsCd_onviewchange();

  //날짜 셋팅
  ed_wrkStDt.setValue(scwin.strDate);
  ed_wrkEndDt.setValue(scwin.vCurDate);

  //정비작업장 combo데이터 호출
  ds_lux_wrkPlCd.removeAll();
  dma_lux_wrkPlCd.set("param1", lc_homeClsCd.getValue());
  $c.sbm.execute($p, sbm_lux_wrkPlCd);
  setTimeout(function () {
    ed_wrkStDt.focus(); //초기포커스
  }, 100);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};
scwin.sbm_lux_wrkPlCd_submitdone = function (e) {
  // 전체조건 추가
  ds_lux_wrkPlCd.insertRow(0);
  ds_lux_wrkPlCd.setCellData(0, "code", "");
  ds_lux_wrkPlCd.setCellData(0, "name", "전체");
  lc_wrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.eqHomeClsCd) {
    lc_wrkPlCd.setValue(scwin.fixWrkPlCd); // 정비작업장코드
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tb_wrk]))) return;
  if (!(await $c.gus.cfIsAfterDate($p, ed_wrkStDt.getValue(), ed_wrkEndDt.getValue()))) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); //시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_wrkStDt.focus();
    return;
  }

  //ds_fix_work_re.UseChangeInfo = false; // 조회조건

  dma_fix_work_re.set("fixYmFrom", ed_wrkStDt.getValue());
  dma_fix_work_re.set("fixYmTo", ed_wrkEndDt.getValue());
  dma_fix_work_re.set("homeClsCd", lc_homeClsCd.getValue());
  dma_fix_work_re.set("fixWrkPlCd", lc_wrkPlCd.getValue());
  dma_fix_work_re.set("fixEmpNo", ed_fixEmpNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    if (ds_fix_work_list.getRowCount() == 0) {
      await $c.win.alert($p, "조회된 데이터가 없습니다.");
      totalRows.setValue(0);
    } else {
      var options = {};
      options.sortIndex = "adptWages realWrkHh atm";
      options.sortOrder = "0 0 0";
      ds_fix_work_list.multisort(options);
      var rowCnt = ds_fix_work_list.getRowCount();
      totalRows.setValue(rowCnt);
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  var pWhere = lc_wrkPlCd.getValue();
  switch (disGubun) {
    case 1:
      // 정비사 팝업			
      await udc_fixEmp.cfCommonPopUp(scwin.udc_fixEmp_callBackFunc, ed_fixEmpNo.getValue().trim() // 화면에서의 Code Element의	Value
      , ed_fixEmpNm.getValue() // 화면에서의 Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "정비사원,사원코드,사원명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
      );
      break;
  }
};
scwin.udc_fixEmp_callBackFunc = function (rtnList) {
  //사원코드  		사원명
  $c.gus.cfSetReturnValue($p, rtnList, ed_fixEmpNo, ed_fixEmpNm);
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
  if ($c.gus.cfIsNull($p, isCode) || isCode) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = async function (e) {
  await $c.gus.cfInitObjects($p, tb_wrk, null);
  scwin.lc_homeClsCd_onviewchange();
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = function () {
  var options = {
    fileName: "월별 정비사별 실적조회.xlsx",
    sheetName: "월별 정비사별 실적조회",
    "useSubTotal": "true",
    "useSubTotalData": "true"
  };
  $c.data.downloadGridViewExcel($p, gr_work_pl, options);
};
scwin.lc_homeClsCd_onviewchange = function (info) {
  dma_lux_wrkPlCd.set("param1", lc_homeClsCd.getValue());
  $c.sbm.execute($p, sbm_lux_wrkPlCd);
};

//-------------------------------------------------------------------------
// 정비사 EMEdit Focus 이동시
//-------------------------------------------------------------------------
scwin.udc_fixEmp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_fixEmpNo, ed_fixEmpNm, 1, false);
};
scwin.udc_fixEmp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_fixEmpNm, ed_fixEmpNo, 1, false);
};
scwin.udc_fixEmp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_fixEmpNo.getValue(), ed_fixEmpNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'',refEdDt:'',refStDt:'fixYmFrom',style:'',edFromId:'ed_wrkStDt',edToId:'ed_wrkEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'key',objTypeTo:'key'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'minimal',class:'',direction:'auto',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',mandatory:'true',emptyItem:'true',displayMode:'value delim label',title:'사업부문',sortOption:'value','ev:onviewchange':'scwin.lc_homeClsCd_onviewchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'',emptyItem:'true',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_fixEmpNo',nameId:'ed_fixEmpNm',popupID:'retrieveFixEmpInfoPopup',selectID:'retrieveFixEmpInfo',style:'',validTitle:'정비사원',id:'udc_fixEmp',objTypeCode:'Data',objTypeName:'key',btnId:'btn_fixEmp','ev:onviewchangeNameEvent':'scwin.udc_fixEmp_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_fixEmp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_fixEmp_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridDownFn:'scwin.f_toExcel1',gridID:'gr_work_pl',templateYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',readOnly:'true',visibleRowNum:'16'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'년월',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'작업장코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'작업장명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'사번',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'성명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'작업반',width:'100',sortLabel:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column40',value:'공임적용기준',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column42',value:'실작업시간',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column44',value:'금액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fixYm',inputType:'text',style:'',value:'',width:'70',displayFormat:'####/##',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNo',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixEmpNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'fixPartyCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'adptWages',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'realWrkHh',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0.0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'atm',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'fixYm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column53',value:'',displayMode:'label',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column46',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0.0',textAlign:'right',expression:'SUM("realWrkHh")'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column45',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',expression:'SUM("atm")'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column61',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column60',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column59',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column55',value:'',displayMode:'label',expression:'SUM("realWrkHh")',dataType:'number',textAlign:'right',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column54',value:'',displayMode:'label',expression:'SUM("atm")',dataType:'number',textAlign:'right',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})