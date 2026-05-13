/*amd /ui/ds/op/wrkrslts/railroadwrkrslts/op_205_01_06b.xml 23636 d8ddd04e073755f0a7a417fc2d1b012d01f28ce580d5967c43f117ee8282a82f */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptDtFrom',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDtTo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvStn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_PrivatetrainCutResults',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'No',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c20e',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c20f',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c40e',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c40f',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c45e',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c45f',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsTeu',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'공사화차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare2',name:'사유화차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privateFare',name:'저감금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'privateFareRate',name:'저감율(%)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planTeu',name:'name15',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrievePrivatetrainCutResults2CMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_QueryCondition","key":"IN_DS1"},{"id":"ds_PrivatetrainCutResults","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_PrivatetrainCutResults","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strCurym = scwin.strCurDate.substring(0, 6);
scwin.oldrowData = 0;
scwin.onpageload = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurym + "01", scwin.strCurDate); //udc달력
};
scwin.udc_comCode_begin_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), ed_begintrainWorkPlaceNm.getValue(), 'F', 'T');
};
scwin.f_Excel = async function () {
  var totCnt = ds_PrivatetrainCutResults.getRowCount();
  if (totCnt != 0) {
    var cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      // cfGridToExcel(varGrNm, sheetTitle, sheetTitle, 2+4+8+16);	

      var fileName = "사유화차저감실적";
      await $c.data.downloadGridViewExcel($p, gr_PrivatetrainCutResults, {
        fileName: fileName + ".xlsx",
        sheetName: fileName
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  // var rtnList= new Array();  // 공통POP-UP -> 요청화면 
  var rtnList = null;
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 출발역 역명 팝업	
      udc_comCode_begin.setSelectId("retrieveTrainWorkPlace");
      rtnList = udc_comCode_begin.cfCommonPopUp(scwin.udc_comCode_begin_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //도착지코드          도착지명
      break;
    case 2:
      // 도착역 역명 팝업	
      udc_comCode_arv.setSelectId("retrieveTrainWorkPlace");
      rtnList = udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "역명조회,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );

      //도착지코드          도착지명

      break;
  }
};

//callback
scwin.udc_comCode_begin_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_begintrainWorkPlaceCd, ed_begintrainWorkPlaceNm);
};
scwin.udc_comCode_begin_onblurCodeEvent = function (e) {
  if (ed_begintrainWorkPlaceCd.getValue() === "") {
    ed_begintrainWorkPlaceNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(1, ed_begintrainWorkPlaceCd.getValue(), ed_begintrainWorkPlaceNm.getValue(), 'T', 'T');
  }
};
scwin.udc_comCode_begin_onviewchangeNameEvent = function (info) {
  if (ed_begintrainWorkPlaceNm.getValue() === "") {
    ed_begintrainWorkPlaceCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_begintrainWorkPlaceNm, ed_begintrainWorkPlaceCd, 1, false);
  }
};
scwin.udc_comCode_arv_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_arvTrainWorkPlaceCd.getValue(), ed_arvTrainWorkPlaceNm.getValue(), 'F', 'T');
};

//callback
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvTrainWorkPlaceCd, ed_arvTrainWorkPlaceNm);
};
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvTrainWorkPlaceCd.getValue() === "") {
    ed_arvTrainWorkPlaceNm.setValue("");
  } else {
    scwin.f_openCommonPopUp(2, ed_arvTrainWorkPlaceCd.getValue(), ed_arvTrainWorkPlaceNm.getValue(), 'T', 'T');
  }
};
scwin.udc_comCode_arv_onviewchangeNameEvent = function (info) {
  if (ed_arvTrainWorkPlaceNm.getValue() === "") {
    ed_arvTrainWorkPlaceCd.setValue("");
  } else {
    scwin.f_chkOpenCommonPopUp(ed_arvTrainWorkPlaceNm, ed_arvTrainWorkPlaceCd, 2, false);
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  await $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = await $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};
//초기화
scwin.btn_fieldClear_onclick = function (e) {
  ed_FromDt.setValue(scwin.strCurym + "01");
  ed_ToDt.setValue(scwin.strCurDate);
  ed_begintrainWorkPlaceCd.setValue("");
  ed_begintrainWorkPlaceNm.setValue("");
  ed_arvTrainWorkPlaceCd.setValue("");
  ed_arvTrainWorkPlaceNm.setValue("");
};

//조회
scwin.btn_retrieve_onclick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_FromDt, ed_ToDt]))) {
    // 출발검색시작일자,출발검색완료일자
    return;
  }
  ds_PrivatetrainCutResults.removeAll();
  dma_QueryCondition.set("dptDtFrom", ed_FromDt.getValue()); // 출발검색시작일자
  dma_QueryCondition.set("dptDtTo", ed_ToDt.getValue()); // 출발검색완료일자
  dma_QueryCondition.set("dptStn", ed_begintrainWorkPlaceCd.getValue()); // 출발역
  dma_QueryCondition.set("arvStn", ed_arvTrainWorkPlaceCd.getValue()); // 출발역

  $c.sbm.execute($p, sbm_retrieve);
  scwin.oldrowData = 0;
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_PrivatetrainCutResults.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, "[사유화차저감실적] " + MSG_CM_ERR_003);
  } else {
    gr_PrivatetrainCutResults.setFocusedCell(0, 0);
  }
  var total = ds_PrivatetrainCutResults.getCellData(0, "planTeu") == "" ? "0" : ds_PrivatetrainCutResults.getCellData(0, "planTeu");

  /*하단 span 표시*/
  planCnt.setValue("계획(TEU) : " + WebSquare.text.formatFloat(total, "#,###"));
  let cnt = 0;
  for (let i = 0; i < ds_PrivatetrainCutResults.getRowCount(); i++) {
    cnt = parseInt(cnt) + parseInt(ds_PrivatetrainCutResults.getCellData(i, "rsltsTeu"));
  }
  var total2 = cnt;
  var planTeu = ds_PrivatetrainCutResults.getCellData(0, "planTeu") == "" ? 0 : ds_PrivatetrainCutResults.getCellData(0, "planTeu");
  resultsCnt.setValue("실적(TEU) : " + WebSquare.text.formatFloat(total2, "#,###"));
  var total3 = planTeu ? Math.round(cnt / planTeu * 100) : 0;
  rate.setValue("재차율(%) : " + WebSquare.text.formatFloat(total3, "#,###"));
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_begintrainWorkPlaceCd',nameId:'ed_begintrainWorkPlaceNm',id:'udc_comCode_begin',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'Key',objTypeName:'data',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_begin_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_begin_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_begin_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvTrainWorkPlaceCd',nameId:'ed_arvTrainWorkPlaceNm',id:'udc_comCode_arv',maxlengthCode:'6',selectID:'retrieveTrainWorkPlace','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_FromDt',edToId:'ed_ToDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'사유화차저감실적',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_PrivatetrainCutResults',id:'udc_topGrdBtn',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_PrivatetrainCutResults',id:'gr_PrivatetrainCutResults',style:'',visibleRowNum:'15',visibleRowNumFix:'true',focusMode:'cell',rowStatusVisible:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'컬럼헤더명',width:'70',colSpan:'',rowSpan:'2',class:'txt-blue',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'출발역',width:'110',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'도착역',width:'110',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'사유화차실적수량',width:'490',colSpan:'7',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'350',inputType:'text',style:'',id:'column40',value:'철송료',displayMode:'label',colSpan:'5',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'20E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column52',value:'20F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column51',value:'40E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'40F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column49',value:'45E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'45F',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column47',value:'TEU',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column46',value:'공사화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column45',value:'사유화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column44',value:'저감금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'저감율(%)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'컬럼헤더명',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'No',inputType:'text',style:'',value:'',width:'70',hiddenCol:'true',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',style:'',value:'',width:'110',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',style:'',value:'',width:'110',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20e',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c20f',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c40e',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c40f',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c45e',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'c45f',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsTeu',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'railroadFare',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'railroadFare2',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'privateFare',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'privateFareRate',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.00',dataType:'float',excelCellType:'number',excelFormat:'#,###.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'planTeu',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column30',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column28',value:'계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column27',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c20e")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column26',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c20f")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column25',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c40e")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column24',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c40f")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column23',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c45e")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column22',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("c45f")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column21',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("rsltsTeu")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("railroadFare")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("railroadFare2")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("privateFare")',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column39',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###.00[float]',expression:'AVG("privateFareRate")',dataType:'number',excelCellType:'number',excelFormat:'#,###.00'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,###,###,###,###',expression:'SUM("planTeu")'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''}},{T:1,N:'w2:span',A:{label:'',style:' height:23px; ',id:'planCnt'}},{T:1,N:'w2:span',A:{label:'',style:' height:23px; ',id:'resultsCnt'}},{T:1,N:'w2:span',A:{label:'',style:' height:23px; ',id:'rate'}}]}]}]}]}]}]}]}]})