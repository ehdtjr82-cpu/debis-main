/*amd /ui/ps/eq/budgetestbl/budgetestbl/eq_110_01_02b.xml 18712 b73704224fe3d902a6b7fe2767db59b3f9a17fce3adb081dd6a462859649f5e2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_homeClsList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_homeClsList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_WrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_fix_work_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'장비번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspExpireDt',name:'정기검사만료일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prdyr',name:'연식',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'장비귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixKndCd',name:'검사종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'inspCost',name:'예상검사비',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fix_work_re'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'expectYm',name:'계획년도',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixKndCd',name:'정비종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fixWrkPlCd',name:'정비작업장',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key3',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_fixWrkList'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retriveHomeClsList',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_homeClsList',target:'data:json,{"id":"ds_homeClsList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retriveHomeClsList_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.budgetestbl.budgetestbl.RetrieveYearlyLegalInspectionExpectationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_fix_work_re","key":"IN_DS1"},{"id":"ds_fix_work_list","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_fix_work_list","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retriveFixWrkList',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_fixWrkList',target:'data:json,{"id":"ds_WrkPlCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retriveFixWrkList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역 변수
scwin.memJson = $c.data.getMemInfo($p);
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------

scwin.onpageload = function () {
  ica_wrkStDt.setValue(scwin.strCurDate.substring(0, 6));
  ica_wrkStDt.focus();
  const codeOptions = [{
    grpCd: "EQ010",
    compID: "lc_fixKndCd,gr_work_pl:fixKndCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
  scwin.retrieveHomeCls();
};
scwin.retrieveHomeCls = async function () {
  const params = {
    cmd: "retriveHomeClsList",
    strVal: "",
    intVal: ""
  };

  //데이터셋에 정보설정
  dma_homeClsList.setJSON(params);
  await $c.sbm.execute($p, sbm_retriveHomeClsList);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tb_wrk]);
  if (!ret) {
    return false;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};

// 아래 공통코드 AS-IS 코드에는 있지만 사용하지 않아서 주석으로 처리함
//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
// function f_openCommonPopUp(disGubun, pCode, pName, pClose, pAllSearch) {
//     // 선언부
//     var rtnList;  // 공통POP-UP -> 요청화면 

//     var pWhere = " ,"+lux_WrkPlCd.BindColVal+"";
//     switch (disGubun)
//     {
//         case 1:
//         // 정비사 팝업			
//         rtnList = cfCommonPopUp('retrieveFixEmpInfo'	// XML상의 SELECT ID	
//                                 ,em_fixEmpNo.Text.trim()// 화면에서의 Code Element의	Value
//                                 ,txt_fixEmpNm.value		// 화면에서의 Name Element의	Value
//                                 ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
//                                 ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
//                                 ,null					// Title순서	
//                                 ,null					// 보여주는 각 컬럼들의 폭	
//                                 ,null					// 컬럼중에서 숨기는	컬럼 지정	
//                                 ,pWhere					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
//                                 ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
//                                 ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
//                                 ,null					// 윈도우 위치 Y좌표	
//                                 ,null					// 윈도우 위치 X좌표
//                                 ,null					// 중복체크여부	("F")
//                                 ,pAllSearch				// 전체검색허용여부	("F")
//                                 ,"정비사원,사원코드,사원명"	// POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
//                                 );

//         //사원코드  		사원명
//         cfSetReturnValue(rtnList, em_fixEmpNo,   txt_fixEmpNm);
//         break;				
//     }	
// }

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
// function f_chkOpenCommonPopUp(inObj, pairObj, disGubun, isCode) {
//     // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
//     if (!cfCanOpenPopup(inObj, pairObj))
//         return;

//     // 짝이 되는 오브젝트의 값 제거
//     cfClearPairObj(pairObj);

//     // 검색어 세팅
//     var pVal = cfGetValue(inObj);

//     // inObj가 코드 필드일 경우 팝업
//     if (isCode == null || isCode == true)
//         f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
//     // inObj가 코드명 필드일 경우 팝업
//     else
//         f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
// }

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_wrk, null);
  scwin.f_RetrieveSecond("LO");
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드

  if (lc_homeClsCd.getValue() == scwin.memJson.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.memJson.fixWrkPlCd); // 정비작업장코드
  }
  if (lc_homeClsCd.getSelectedIndex() == -1) {
    lc_WrkPlCd.setValue("101");
  }
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_toExcel1 = async function () {
  let totCnt = ds_fix_work_list.getRowCount();
  if (totCnt != 0) {
    const options = {
      fileName: "장비별 법적검사 예측 조회.xlsx",
      sheetName: "장비별 법적검사 예측 조회"
    };
    $c.data.downloadGridViewExcel($p, gr_work_pl, options);
  } else {
    await $c.win.alert($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 대표정비작업장콤보 조회
//-------------------------------------------------------------------------
scwin.f_RetrieveSecond = function (param1) {
  const params = {
    cmd: "retriveFixWrkList",
    strVal: param1,
    intVal: ""
  };

  //데이터셋에 정보설정
  dma_fixWrkList.setJSON(params);
  $c.sbm.execute($p, sbm_retriveFixWrkList);
};
scwin.f_prdyrFormatter = function (data) {
  if (data == null || data === "") {
    return "";
  }
  let strData = data.toString().trim();
  if (strData.length >= 4) {
    let year = strData.substring(0, 4);
    let month = strData.substring(4);
    return year + "/" + month;
  } else {
    return strData;
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_fix_work_list.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalRows.setValue(ds_fix_work_list.getRowCount());
};
scwin.lc_homeClsCd_onchange = function (info) {
  let luxIndex = lc_homeClsCd.getValue();
  scwin.f_RetrieveSecond(luxIndex);
};
scwin.sbm_retriveFixWrkList_submitdone = function (e) {
  lc_WrkPlCd.setSelectedIndex(0);
  if (lc_homeClsCd.getValue() == scwin.memJson.eqHomeClsCd) {
    lc_WrkPlCd.setValue(scwin.memJson.fixWrkPlCd);
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.sbm_retriveHomeClsList_submitdone = function (e) {
  lc_homeClsCd.setSelectedIndex(0);
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드
  if (lc_homeClsCd.getSelectedIndex() == -1) {
    lc_homeClsCd.setSelectedIndex(0);
  }
  scwin.f_RetrieveSecond(lc_homeClsCd.getValue());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_wrk',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계획년도',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_wrkStDt',style:'width: 120px;',pickerType:'dynamic',mandatory:'true',displayFormat:'yyyy/MM',editType:'select',ref:'data:dma_fix_work_re.expectYm',title:'계획년도'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width:150px',submenuSize:'fixed',ref:'',mandatory:'true',title:'사업부문',chooseOptionLabel:'$blank','ev:onviewchange':'scwin.lc_homeClsCd_onchange',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_homeClsList'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'대표정비작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_WrkPlCd',mandatory:'true',ref:'data:dma_fix_work_re.fixWrkPlCd',style:'width:150px;',submenuSize:'fixed',sortOption:'value',title:'대표정비작업장',visibleRowNum:'25'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_WrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'정비종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixKndCd',ref:'data:dma_fix_work_re.fixKndCd',style:'width:150px;',submenuSize:'fixed',chooseOptionLabel:'전체',title:'정비종류',visibleRowNum:'25',sortOption:'value'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_work_pl',gridDownFn:'scwin.f_toExcel1'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_fix_work_list',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'18',visibleRowNumFix:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'정기검사만료일',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'연식',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'장비귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'검사종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'예상검사비',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inspExpireDt',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'prdyr',displayMode:'label',dataType:'text',customFormatter:'scwin.f_prdyrFormatter'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'acctDeptNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'fixKndCd',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'inspCost',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})