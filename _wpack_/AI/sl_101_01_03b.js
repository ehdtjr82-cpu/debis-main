/*amd /AI/sl_101_01_03b.xml 12107 95c372fb147f1a089274cefe1934b3122350ab0deaef5a0a29fca0104a4809d1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdDt',name:'기준일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ordClsCd',name:'색구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockDetailCrs',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'화주코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockWt_',name:'재고중량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumCnt',name:'합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'ordClsCd',name:'색구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_stockAmt',action:'/ds.sl.RetrieveScalePresentStockAmtCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_stockDetail","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_stockDetail","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_stockAmt_submitdone','ev:submiterror':'scwin.sbm_stockAmt_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.curDate = "";
scwin.userNm = "";
scwin.userTel = "";
scwin.userFax = "";
scwin.onpageload = function () {
  scwin.curDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  scwin.userNm = $c.ses.getUserNm();
  scwin.userTel = $c.ses.getEmpTelNo();
  scwin.userFax = $c.ses.getEmpFaxNo();
  ica_stdDt.setValue(scwin.curDate.substring(0, 8));
  ica_stdDt.setFocus();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  if (ica_stdDt.getValue().trim().length != 8) {
    await $c.win.alert($p, "기준일자는 필수입력 입니다.");
    ica_stdDt.setFocus();
    return;
  }
  dma_search.set("stdDt", ica_stdDt.getValue());
  await $c.sbm.execute($p, sbm_stockAmt);
};
scwin.sbm_stockAmt_submitdone = async function (e) {
  if (ds_stockDetail.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
    return;
  }
  // TODO: ds_stockDetail → ds_stockDetailCrs 크로스탭 변환 로직 (GAUCE Logical DataSet GroupExpr/SortExpr 기능은 WebSquare에서 별도 구현 필요)
  scwin.f_buildCrossTab();
};
scwin.sbm_stockAmt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_buildCrossTab = function () {
  // TODO: GAUCE Logical DataSet의 CrossTab(GroupExpr="clntNo:clntNm:ordClsCd,commNm,stockWt", SortExpr="+clntClsCd+ordClsCd") 기능을
  // WebSquare에서 수동 구현해야 합니다. ds_stockDetail 데이터를 기반으로 ds_stockDetailCrs에 크로스탭 결과를 생성하세요.
  // 현재는 ds_stockDetail 데이터를 그대로 ds_stockDetailCrs에 복사하는 임시 처리입니다.
  ds_stockDetailCrs.removeAll();
  for (let i = 0; i < ds_stockDetail.getRowCount(); i++) {
    let newRow = ds_stockDetailCrs.insertRow();
    ds_stockDetailCrs.setCellData(newRow, "clntNo", ds_stockDetail.getCellData(i, "clntNo"));
    ds_stockDetailCrs.setCellData(newRow, "clntNm", ds_stockDetail.getCellData(i, "clntNm"));
    ds_stockDetailCrs.setCellData(newRow, "stockWt_", ds_stockDetail.getCellData(i, "stockWt"));
    ds_stockDetailCrs.setCellData(newRow, "ordClsCd", ds_stockDetail.getCellData(i, "ordClsCd"));
  }
  let totalRow = ds_stockDetailCrs.getRowCount();
  // TODO: spa_totalRow id가 body에 없으므로 총건수 표시 컴포넌트 ID 확인 필요
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_FieldClear = function () {
  ica_stdDt.setValue("");
  ica_stdDt.setFocus();
};
scwin.btn_report_onclick = function (e) {
  scwin.f_pringOz();
};
scwin.f_pringOz = async function () {
  let odiyn = ds_stockDetailCrs.getRowCount();
  if (odiyn == 0) {
    await $c.win.alert($p, "조회후 화주를 선택후 발행버튼을 클릭해주세요");
    return;
  }
  let rowPos = ds_stockDetailCrs.getRowPosition();
  if (ds_stockDetailCrs.getCellData(rowPos, "clntNo") == "102887") {
    let odiParam = new ODIParam("sl_101_01_03_01");
    odiParam.add("stdDt", ica_stdDt.getValue());
    odiParam.add("curDt", scwin.curDate.substring(0, 8));
    odiParam.add("clntNo", ds_stockDetailCrs.getCellData(rowPos, "clntNo"));
    odiParam.add("clntNm", ds_stockDetailCrs.getCellData(rowPos, "clntNm"));
    odiParam.add("userNm", scwin.userNm);
    odiParam.add("userTel", scwin.userTel);
    odiParam.add("userFax", scwin.userFax);
    let formParam = new FormParam();
    let viewerParam = new ViewerParam();
    viewerParam.add("viewer.zoom", "100");
    viewerParam.add("viewer.useprogressbar", "true");
    $c.gus.cfOZReport($p, "chb_printCheck", "chb_previewCheck", " /ds/sl/sl_101_01_03_01.ozr", odiParam, viewerParam, formParam);
    OZExecuteBatch();
  } else {
    let odiParam = new ODIParam("sl_101_01_03");
    odiParam.add("stdDt", ica_stdDt.getValue());
    odiParam.add("curDt", scwin.curDate.substring(0, 8));
    odiParam.add("clntNo", ds_stockDetailCrs.getCellData(rowPos, "clntNo"));
    odiParam.add("clntNm", ds_stockDetailCrs.getCellData(rowPos, "clntNm"));
    odiParam.add("userNm", scwin.userNm);
    odiParam.add("userTel", scwin.userTel);
    odiParam.add("userFax", scwin.userFax);
    let formParam = new FormParam();
    let viewerParam = new ViewerParam();
    viewerParam.add("viewer.zoom", "100");
    viewerParam.add("viewer.useprogressbar", "true");
    $c.gus.cfOZReport($p, "chb_printCheck", "chb_previewCheck", " /ds/sl/sl_101_01_03.ozr", odiParam, viewerParam, formParam);
    OZExecuteBatch();
  }
};
scwin.f_Excel = function () {
  let count = ds_stockDetailCrs.getRowCount();
  if (!(count > 0)) return;
  $c.data.downloadGridViewExcel($p, gr_stockDetailCrs, {
    fileName: "재고조회.xlsx",
    sheetName: "재고조회"
  });
};
scwin.gr_stockDetailCrs_onUserColor = function (rowIndex, eventid) {
  if (eventid == "acolor") {
    let ordClsCd = ds_stockDetailCrs.getCellData(rowIndex, "ordClsCd");
    if (ordClsCd == "1" || ordClsCd == "2" || ordClsCd == "3" || ordClsCd == "4") {
      return "#DAD9FF";
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_stdDt',pickerType:'dynamic',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear','ev:onclick':'scwin.btn_fieldClear_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve','ev:onclick':'scwin.btn_retrieve_onclick',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'현재재고조회',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_stockDetailCrs',id:'gr_stockDetailCrs',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'화주',width:'160',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'화주',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt_',inputType:'text',style:'',value:'{mid(xkeyname_$$,0,20)}',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumCnt',inputType:'text',style:'',value:'합계',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ordClsCd',inputType:'text',style:'',value:'색구분',width:'80',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stockWt_',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumCnt',inputType:'text',style:'',value:'',width:'80',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ordClsCd',inputType:'text',style:'',value:'',width:'80',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'col-gap-14'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value'}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_report','ev:onclick':'scwin.btn_report_onclick',label:'저장',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'재고현황발행'}]}]}]}]}]}]}]}]}]})