/*amd /ui/ds/fs/bilg/fs_204_02_04p.xml 20595 2b937f2fcccc08e432644e71c30a24a8ed006afb2d51cd83b4c4adae659bea7c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieveRslts',saveRemovedData:'true','ev:ondataload':'scwin.ds_retrieveRslts_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLodeptCd',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkLodeptNm',name:'명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNo',name:'품번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upr',name:'단가',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'VAT',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'transDst',name:'작업구간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'empNm',name:'이름',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mainMainRsn',name:'사유',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcsnClsNm',name:'확정구분',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieveConds'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryLodeptCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCondDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCondDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryOdrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryClsCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtFm',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryDeleteDtTo',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveDeleteHistoryListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieveConds","key":"IN_DS1"},{"id":"ds_retrieveRslts","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieveRslts","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId"); // 사용자구분코드
scwin.arrParams = "";
// scwin.param = $c.data.getParameter();

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.arrParams = $p.getAllParameter().paramData.data;
  if (scwin.arrParams[3] == "매출") {
    20;
    // if(scwin.param.param3 == "매출"){
    dma_retrieveConds.set("qryClsCd", "매출");
  } else {
    dma_retrieveConds.set("qryClsCd", "매입");
  }
  if (scwin.arrParams[4] != "") {
    // if(scwin.param.param4 != "" ){
    acb_qryConKnd.setValue("오더번호");
    div_qryConKnd1.setStyle("display", "none");
    dma_retrieveConds.set("qryCondDtFm", "");
    dma_retrieveConds.set("qryCondDtTo", "");
    dma_retrieveConds.set("qryDeleteDtFm", "");
    dma_retrieveConds.set("qryDeleteDtTo", "");
    ed_qryOdrNo.setValue(scwin.arrParams[4]);
    // ed_qryOdrNo.setValue(scwin.param.param4);
  } else {
    div_qryConKnd1.show();
    div_qryConKnd2.hide();
    acb_qryConKnd.setValue("실적");
  }

  // ed_qryOdrNo.hide();

  // if(scwin.arrParams[0] != "") {
  //     scwin.udc_bilgLodept_onblurCode();
  //     scwin.btn_retrieve_onClick();
  // };
};

//-------------------------------------------------------------------------
// UDC 기본값
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // let std = scwin.param.rsltsDtSt;
  // let end = scwin.param.rsltsDtEnd
  let lobran = scwin.arrParams[0];
  let std = scwin.arrParams[1];
  let end = scwin.arrParams[2];
  console.log(std);
  console.log(end);
  udc_qryCon.setInitDate(std, end);
  if (scwin.arrParams[0] != "") {
    ed_bilgLodeptCd.setValue(scwin.arrParams[0]);
    scwin.udc_bilgLodept_onblurCode();
  }
  ;
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = function (e) {
  if (ed_bilgLodeptCd.getValue() == "") {
    $c.win.alert($p, "부서는 필수입력 사항입니다. ");
    return false;
  } else {
    dma_retrieveConds.set("qryLodeptCd", ed_bilgLodeptCd.getValue());
  }
  if (acb_qryConKnd.getValue() == "오더번호") {
    if (ed_qryOdrNo.getValue() == "") {
      $c.win.alert($p, "오더번호는  필수입력 사항입니다. ");
      ed_qryOdrNo.focus();
      return false;
    } else {
      dma_retrieveConds.set("qryOrdNo", ed_qryOdrNo.getValue());
    }
  } else if (acb_qryConKnd.getValue() == "실적") {
    if (ed_qryConDtFm.getValue() == "" || ed_qryConDtTo.getValue() == "") {
      $c.win.alert($p, "실적일자는  필수입력 사항입니다. ");
      if (ed_qryConDtFm.getValue() == "") {
        ed_qryConDtFm.focus();
      } else {
        ed_qryConDtTo.focus();
      }
      return false;
    } else {
      dma_retrieveConds.set("qryCondDtFm", ed_qryConDtFm.getValue());
      dma_retrieveConds.set("qryCondDtTo", ed_qryConDtTo.getValue());
    }
  } else if (acb_qryConKnd.getValue() == "삭제") {
    if (ed_qryConDtFm.getValue() == "" || ed_qryConDtTo.getValue() == "") {
      $c.win.alert($p, "삭제일자는  필수입력 사항입니다. ");
      if (ed_qryConDtFm.getValue() == "") {
        ed_qryConDtFm.focus();
      } else {
        ed_qryConDtTo.focus();
      }
      return false;
    } else {
      dma_retrieveConds.set("qryDeleteDtFm", ed_qryConDtFm.getValue());
      dma_retrieveConds.set("qryDeleteDtTo", ed_qryConDtTo.getValue());
    }
  }
  dma_retrieveConds.set("qryClsCd", "매출");
  //gr_retrieveRslts.ReDraw = "False";

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_onClick = async function (e) {
  udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
};
scwin.udc_bilgLodept_onblurCode = async function (e) {
  if (ed_bilgLodeptCd.getValue() != "") {
    udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, ed_bilgLodeptCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_bilgLodeptCd.setValue("");
    ed_bilgLodeptNm.setValue("");
    return;
  }
};
scwin.udc_bilgLodept_onChangeName = async function (info) {
  if (ed_bilgLodeptNm.getValue() != "") {
    udc_bilgLodept.cfCommonPopUp(scwin.udc_bilgLodept_callBackFunc, "", ed_bilgLodeptNm.getValue(), "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  } else {
    ed_bilgLodeptCd.setValue("");
    ed_bilgLodeptNm.setValue("");
    return;
  }
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(부서)
//-------------------------------------------------------------------------
scwin.udc_bilgLodept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_bilgLodeptCd, ed_bilgLodeptNm);
};

//-------------------------------------------------------------------------
// 조회콤보 선택시
//-------------------------------------------------------------------------
scwin.acb_qryConKnd_onChange = function (info) {
  ed_qryConDtFm.setValue("");
  ed_qryConDtTo.setValue("");
  ed_qryOdrNo.setValue("");
  if (acb_qryConKnd.getValue() == "오더번호") {
    div_qryConKnd1.hide();
    div_qryConKnd2.show();
    // div_qryConKnd2.hide(false);
    dma_retrieveConds.set("qryCondDtFm", "");
    dma_retrieveConds.set("qryCondDtTo", "");
    dma_retrieveConds.set("qryDeleteDtFm", "");
    dma_retrieveConds.set("qryDeleteDtTo", "");
  } else if (acb_qryConKnd.getValue() == "실적") {
    div_qryConKnd1.show();
    div_qryConKnd2.hide();
    dma_retrieveConds.set("qryOdrNo", "");
    dma_retrieveConds.set("qryDeleteDtFm", "");
    dma_retrieveConds.set("qryDeleteDtTo", "");
  } else if (acb_qryConKnd.getValue() == "삭제") {
    div_qryConKnd1.show();
    div_qryConKnd2.hide();
    dma_retrieveConds.set("qryOdrNo", "");
    dma_retrieveConds.set("qryCondDtFm", "");
    dma_retrieveConds.set("qryCondDtTo", "");
  }
};
scwin.ds_retrieveRslts_ondataload = function () {
  let rowCnt = ds_retrieveRslts.getTotalRow();
  if (rowCnt == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    return false;
  }
  spa_totalRow.setValue(rowCnt);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'udc_comCode',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',selectID:'retrieveOpDeptCdInfo',popupTitle:'부서조회,부서코드,부서명',id:'udc_bilgLodept','ev:onclickEvent':'scwin.udc_bilgLodept_onClick',popupGridHeadTitle:'부서코드,부서명,"","","","","","","",""',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onblurCodeEvent':'scwin.udc_bilgLodept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_bilgLodept_onChangeName',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width: 80px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',allowChar:'A-Z0-9',displayMode:'label','ev:onchange':'scwin.acb_qryConKnd_onChange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더번호'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더번호'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'삭제일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'삭제'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'div_qryConKnd1'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'',mandatoryTo:'true',refDataMap:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',style:'display: block;',id:'udc_qryCon',refEdDt:''}}]},{T:1,N:'xf:group',A:{id:'div_qryConKnd2'},E:[{T:1,N:'xf:input',A:{editFormatPartialMask:'true',maxlength:'15',editType:'select',style:'display: block;width: 150px;',allowChar:'A-Z0-9',id:'ed_qryOdrNo',placeholder:'',class:'',mandatory:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'삭제이력 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',btnPlusYn:'N',gridID:'gr_retrieveRslts',grdDownOpts:'{"fileName":"삭제이력.xlsx" , "sheetName" : "삭제이력"}'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_retrieveRslts',id:'gr_retrieveRslts',style:'',visibleRowNum:'15',visibleRowNumFix:'true',resize:'true',columnMove:'true',dataDragSelect:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'오더번호',width:'150',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column2',inputType:'text',style:'',value:'부서',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'항목',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column4',inputType:'text',style:'',value:'청구거래처',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'품명',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column6',inputType:'text',style:'',value:'품번',width:'100',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'금액',width:'500',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column8',value:'작업구간',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column9',value:'실적일자',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column10',value:'삭제정보',displayMode:'label',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column11',value:'확정구분',displayMode:'label',colSpan:'',rowSpan:'2',sortable:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column12',value:'코드',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column13',value:'명',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column14',value:'단가',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'금액',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column16',value:'외화',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'VAT',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'합계',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'이름',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column20',value:'일시',displayMode:'label',sortable:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column21',value:'사유',displayMode:'label',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'150',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLodeptCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkLodeptNm',inputType:'text',style:'',value:'',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'upr',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'amtFcrc',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'vatAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'transDst',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rsltsStdDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',ioFormat:'yyyyMMdd',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'empNm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',dataType:'date',ioFormat:'yyyyMMddHHmmSS'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mainMainRsn',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dcsnClsNm',value:'',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})