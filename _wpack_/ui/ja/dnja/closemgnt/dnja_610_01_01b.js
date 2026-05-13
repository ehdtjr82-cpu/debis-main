/*amd /ui/ja/dnja/closemgnt/dnja_610_01_01b.xml 15990 57e347f746fd3c88290c3c2dc13650948e428ab095e62a03e8fe32633f3681ca */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYn',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deductYn',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClntNo',name:'거래처코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeYn',name:'마감여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductYn',name:'공제지급여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoPchsAmt',name:'지급합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductPchsAmt',name:'공제합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'실지급액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'년월',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.closemgnt.RetrieveCloseWorkListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ja.dnja.closemgnt.SaveCloseWorkInformationListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_out","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩시
//------------------------------------------------------------------------- 
scwin.onpageload = function () {
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  acb_lc_closeYn.setValue('2');
  acb_lc_deductYn.setValue('2');
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  ica_ed_adptYm.setValue(scwin.strQryStDt);
  ed_homeClntNo.setValue(""); //거래처번호
  txt_homeClntNm.setValue(""); //거래처명
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  // let ret = $c.gus.cfValidate([tbl_searchTable]);
  // if(!ret) {
  //     return ;
  // }
  if (ica_ed_adptYm.getValue() == "") {
    $c.win.alert($p, "년월은(는) 필수 입력 항목입니다.");
    ica_ed_adptYm.focus();
    return false;
  }

  //tr_retrieve.Post();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_out.getRowCount() == 0) {
      totalRows.setValue('0');
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    } else {
      totalRows.setValue(ds_out.getRowCount());
      gr_out.setFocusedCell(0, 0);
    }
  }
};

//-------------------------------------------------------------------------
// 저장
//------------------------------------------------------------------------- 
scwin.btn_save_onclick = async function (e) {
  let confirm = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (confirm) {
    // 20110414 조회조건에 공제/지급여부조건의 추가로 인해 발생한 저장시 개별 저장을 가능 하게 하기 위해
    // ds_out DS에 deduct_Yn 항목 추가하고, 조회조건에 사용된 값을 입력한다.
    ds_out.setCellData(0, "deductYn", acb_lc_deductYn.getValue());
    ds_out.setCellData(ds_out.getRowPosition(), "adptYm", ica_ed_adptYm.getValue());

    //tr_save.Post();
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
    scwin.btn_retrieve_onclick();
  }
};
scwin.udc_homeClntNo_onblurCodeEvent = function (e) {
  scwin.udc_homeClntNo_openPopup('T');
};
scwin.udc_homeClntNo_onviewchangeNameEvent = function (info) {
  scwin.udc_homeClntNo_openPopup('T');
};
scwin.udc_homeClntNo_onclickEvent = function (e) {
  scwin.udc_homeClntNo_openPopup('F');
};
scwin.udc_homeClntNo_openPopup = function (pClose) {
  let pCode = ed_homeClntNo.getValue();
  let pName = txt_homeClntNm.getValue();
  udc_homeClntNo.setSelectId('retrieveSubsidaryClntListJa');
  udc_homeClntNo.cfCommonPopUp(scwin.udc_homeClntNo_callBackFunc // XML상의 SELECT ID
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , '150,170' // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_homeClntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    //cfSetReturnValue(rtnList, ed_homeClntNo, txt_homeClntNm);
    ed_homeClntNo.setValue(rtnList[0]);
    txt_homeClntNm.setValue(rtnList[1]);
  } else {
    ed_homeClntNo.setValue("");
    txt_homeClntNm.setValue("");
  }
};

/* 지급공제여부 - 지급공제여부 컴보박스의 인덱스 변경시 출력그리드를 초기화 한다. */
scwin.acb_lc_deductYn_onviewchange = function (info) {
  ds_out.removeAll();
};

/* 마감여부 - 마감여부 컴보박스의 인덱스 변경시 출력그리드를 초기화 한다. */
scwin.acb_lc_closeYn_onviewchange = function (info) {
  ds_out.removeAll();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchTable',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_adptYm',pickerType:'dynamic',style:'',mandatory:'true',displayFormat:'yyyy/MM',title:'년월',ref:'data:dma_condition.adptYm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_homeClntNo',nameId:'txt_homeClntNm',btnId:'btn_homeClntNo',id:'udc_homeClntNo',refDataCollection:'dma_condition',code:'homeClntNo',UpperFlagCode:'0',mandatoryCode:'false',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_homeClntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_homeClntNo_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_homeClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지급공제여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_lc_deductYn',ref:'data:dma_condition.deductYn',search:'start',style:'width:70px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_lc_deductYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지급'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'공제'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'마감여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_closeYn',search:'start',style:'width:70px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.closeYn','ev:onviewchange':'scwin.acb_lc_closeYn_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'YES'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'마감작업 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumnNoMove:'true',fixedColumn:'6'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'거래처코드',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'거래처명',width:'200',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'마감여부',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'공제지급여부',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'지급합계',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'공제합계',width:'100',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'실지급액',width:'100',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',textAlign:'left',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'closeYn',inputType:'checkbox',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductYn',inputType:'text',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoPchsAmt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductPchsAmt',inputType:'text',textAlign:'right',width:'100',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'총계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'expression',textAlign:'right',width:'100',displayFormat:'#,###',dataType:'number',expression:'sum(\'deductNoPchsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',textAlign:'right',width:'100',dataType:'number',displayFormat:'#,###',expression:'sum(\'deductPchsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'expression',textAlign:'right',width:'100',displayFormat:'#,###',dataType:'number',expression:'sum(\'payAmt\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})