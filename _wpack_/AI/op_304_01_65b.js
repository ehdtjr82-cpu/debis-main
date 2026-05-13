/*amd /AI/op_304_01_65b.xml 12883 bc374876cc71eb3ddfa3557fce51921d2cbc63f6ce3a87ac0a697126a18e4fd1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bizLongCd',name:'사업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtFrom',name:'등록시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtTo',name:'등록종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'messageNo',name:'메시지번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_Fatigue',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'차량단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'message',name:'메세지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coshippingNo',name:'합적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveLafargeDriverFatigueCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_Fatigue","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_Fatigue","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_repClntNo = "";
scwin.hid_wrkPlCd = "";
scwin.onpageload = function () {
  scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  let bizLongCdChoices = [{
    label: "전체",
    value: ""
  }, {
    label: "당진공장",
    value: "5600"
  }, {
    label: "여수공장",
    value: "600"
  }, {
    label: "당진창고",
    value: "3333"
  }];
  lc_bizLongCd.setItemSet(bizLongCdChoices, "label", "value");
  lc_bizLongCd.setValue("");
  let messageChoices = [{
    label: "전체",
    value: ""
  }, {
    label: "전일 3회전 이상 운행 차량",
    value: "001"
  }, {
    label: "장거리 운행 후 금일 2회 이상 배차",
    value: "002"
  }, {
    label: "용차 차량 금일 2회 이상 배차",
    value: "003"
  }];
  lc_message.setItemSet(messageChoices, "label", "value");
  lc_message.setValue("");
};
scwin.onUdcCompleted = function () {
  udc_regDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [udc_regDt]))) {
    return;
  }
  let stDt = ds_Query.get("regDtFrom");
  let edDt = ds_Query.get("regDtTo");
  if (!$c.gus.cfIsAfterDate($p, stDt, edDt)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    return;
  }
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  let rowCnt = ds_Fatigue.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  spa_totalRow.setValue(ds_Fatigue.getTotalRow());
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.getStyle("height");
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.setStyle("height", intHeight + "px");
  }
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_Fatigue.getRowCount();
  let sheetTitle = "크나우프운전자피로도이력관리";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ds_Query]);
  lc_bizLongCd.setValue("");
  lc_message.setValue("");
  udc_regDt.setInitDate(scwin.vCurDate, scwin.vCurDate);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_bizLongCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:ds_Query.bizLongCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'등록일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_regDt',refDataMap:'',refEdDt:'ica_regEndDt',refStDt:'ica_regStDt',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'message',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_message',search:'start',style:'width:230px;',submenuSize:'auto',ref:'data:ds_Query.messageNo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 운전자피로도이력관리조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_Fatigue',id:'gr_Fatigue',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',value:'차량단축번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',value:'차량번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'message',inputType:'text',value:'메세지',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',value:'품명코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',value:'품명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',value:'수량',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coshippingNo',inputType:'text',value:'합적번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',value:'출발코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',value:'출발지명',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',value:'도착코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',value:'도착지명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regDtm',value:'등록일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclShortCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'message',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commNm',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',width:'70',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'coshippingNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regDtm',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})