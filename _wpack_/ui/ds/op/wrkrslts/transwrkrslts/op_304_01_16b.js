/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_16b.xml 17460 eb78ab9d1cc419607787308c48a11e03884ec1b562eb6124c49e4c0b7b914114 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_chassisCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'chassisNo',name:'샤시번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'chk',name:'',dataType:'number'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_chassisPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtm',name:'선석순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtm',name:'선석번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'len',name:'길이',dataType:'number'}},{T:1,N:'w2:column',A:{id:'nrm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'knd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkSts',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStsNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curPos',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retreive',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveChassisMovePresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_chassisCond","key":"IN_DS1"},{"id":"ds_chassisPresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_chassisPresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retreive_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  scwin.f_control();
};
scwin.onUdcCompleted = function () {
  txt_chassisNo.focus();
};

//-------------------------------------------------------------------------
// 검색조건제어
//-------------------------------------------------------------------------
scwin.f_control = function () {
  if (chb_chkYn.getValue() == "1") {
    tb_searchDate.show("");
  } else {
    tb_searchDate.hide();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let chk1 = await $c.gus.cfValidate($p, [txt_chassisNo], null, true);
  if (!chk1) {
    return;
  }
  if (chb_chkYn.getValue() == "1") {
    let chk2 = await $c.gus.cfValidate($p, [ed_stDt, ed_endDt]);
    if (!chk2) {
      return;
    }
    if ((await $c.date.diffDate($p, ed_stDt.getValue(), ed_endDt.getValue())) > 370) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_041, ["조회기간", "1년이상"]);
      ed_stDt.focus();
      return;
    }
  }
  dma_chassisCond.set("chassisNo", txt_chassisNm.getValue());
  dma_chassisCond.set("chk", chb_chkYn.getValue());
  dma_chassisCond.set("stDt", ed_stDt.getValue());
  dma_chassisCond.set("endDt", ed_endDt.getValue());
  $c.sbm.execute($p, sbm_retreive);
};
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  udc_comCodeChassis.cfCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, txt_chassisNo, txt_chassisNm);
  } // XML상의 SELECT ID  
  , pCode // 화면에서의 ??? Code Element의  Value
  , pName // 화면에서의 ??? Name Element의  Value
  , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
  , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서  
  , null // 보여주는 각 컬럼들의 폭    
  , null // 컬럼중에서 숨기는    컬럼 지정   
  , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의   사용자 정의  폭
  , null // POP-UP뛰을때 우도우의   사용자 정의  높이  
  , null // 윈도우 위치 Y좌표   
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부   ("F")
  , pAllSearch // 전체검색허용여부 ("F")
  , "샤시번호,샤시코드,샤시명" // POP-UP Window Title 검색어1,2    ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    scwin.f_openPopUp(disGubun, pVal, "", "T", "T");
  } else {
    scwin.f_openPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);

  // 작업일자검색여부에 따른 컨트롤
  scwin.f_control();
};

//-------------------------------------------------------------------------
// List 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_excel = function () {
  let options = {
    fileName: "샤시이동현황" + ".xlsx",
    sheetName: "샤시이동현황"
  };
  $c.data.downloadGridViewExcel($p, gr_cntrWrkRslts, options);
};
scwin.sbm_retreive_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_chassisPresent.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002, [""]);
  } else {
    ds_chassisPresent.setRowPosition(0);
  }
  totalRows.setValue(ds_chassisPresent.getRowCount());
};
scwin.udc_comCodeChassis_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_chassisNo, txt_chassisNm, "1");
};
scwin.udc_comCodeChassis_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_chassisNm, txt_chassisNo, "", false);
};
scwin.udc_comCodeChassis_onclickEvent = function (e) {
  scwin.f_openPopUp("", txt_chassisNo.getValue(), txt_chassisNm.getValue(), "F", "F");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기간조회',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_chkYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data','ev:onviewchange':'scwin.f_control',refInitSync:'true',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'tb_searchDate',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'작업시작일',titleTo:'작업종료일'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'샤시번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'txt_chassisNo',nameId:'txt_chassisNm',id:'udc_comCodeChassis',selectID:'retrieveChassis',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',objTypeCode:'data',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_comCodeChassis_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_comCodeChassis_onblurNameEvent','ev:onclickEvent':'scwin.udc_comCodeChassis_onclickEvent',skipOnBlurNameValueEmpty:'N',validExpCode:'샤시번호:yes'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비길이',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비규격',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'현위치',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'tac',id:'ed_len',placeholder:'',style:'width:150px;',disabled:'true',ref:'data:ds_chassisPresent.len'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'tac',id:'ed_nrm',placeholder:'',style:'width:150px;',disabled:'true',ref:'data:ds_chassisPresent.nrm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',id:'ed_knd',placeholder:'',style:'width:150px;',disabled:'true',ref:'data:ds_chassisPresent.knd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',id:'ed_curPos',placeholder:'',style:'width:150px;',disabled:'true',ref:'data:ds_chassisPresent.curPos'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tac',id:'ed_vehclNo',placeholder:'',style:'width:150px;',disabled:'true',ref:'data:ds_chassisPresent.vehclNo'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',templateYn:'N',gridID:'gr_cntrWrkRslts',gridDownFn:'scwin.f_excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_chassisPresent',style:'',autoFit:'allColumn',id:'gr_cntrWrkRslts',visibleRowNum:'15',class:'wq_gvw',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'작업단계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'컨테이너번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'도착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'출발일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column7',value:'도착일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'작업상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cntrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptDtm',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvDtm',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStsNm',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]}]}]}]}]}]})