/*amd /ui/ds/op/wrkrslts/yardwrkrslts/op_302_01_05p.xml 17415 87ebc26f20b96d2e261cfba52b75dd35e08c95b62feb10c099ad089dbef3043d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_zoneStock',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'blck',name:'BLOCK',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'stockMgntNo',name:'재고관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stockQty',name:'재고',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'stockWt',name:'재고중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'stockCbm',name:'재고CBM',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'outQty',name:'납품 수량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'outWt',name:'출고중량',dataType:'number',defaultValue:'0',length:'20'}},{T:1,N:'w2:column',A:{id:'outCbm',name:'출고CBM',dataType:'number',defaultValue:'0',length:'20'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntMgntNo',name:'거래처관리번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.yardwrkrslts.RetrieveZoneStockCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_srchCond","key":"IN_DS1"},{"id":"ds_zoneStock","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_zoneStock","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 개인화 버튼 삭제(T-5790 정소희 책임)
scwin.valueObject = "";
scwin.remainQty = 0;
scwin.remainWt = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.valueObject = $p.getAllParameter().paramData;
  scwin.parent_odrNo = scwin.valueObject.odrNo;
  scwin.parent_repClntNo = scwin.valueObject.repClntNo;
  scwin.parent_commCd = scwin.valueObject.commCd;
  scwin.parent_commSeq = scwin.valueObject.commSeq;
  scwin.parent_wrkPlCd = scwin.valueObject.wrkPlCd;
  scwin.parent_wrkPlNm = scwin.valueObject.wrkPlNm;
  scwin.parent_odrQty = scwin.valueObject.odrQty;
  scwin.parent_odrWt = scwin.valueObject.odrWt;
  scwin.parent_type = scwin.valueObject.type;
  scwin.parent_array = scwin.valueObject.array; //배열

  tbx_wrkPlCd.setValue(scwin.parent_wrkPlCd); //작업장코드
  tbx_wrkPlNm.setValue(scwin.parent_wrkPlNm); //작업장명
  tbx_odrQty.setValue(scwin.parent_odrQty); //오더수량
  tbx_odrWt.setValue(scwin.parent_odrWt); //오더중량

  scwin.remainQty = scwin.parent_odrQty; //남은수량
  tbx_assgnQty.setValue(scwin.remainQty);
  scwin.remainWt = scwin.parent_odrWt; //남은중량
  tbx_assgnWt.setValue(scwin.remainWt);
  ds_srchCond.set("commCd", scwin.parent_commCd);
  ds_srchCond.set("wrkPlCd", scwin.parent_wrkPlCd);
  ds_srchCond.set("odrNo", scwin.parent_odrNo);
  ds_srchCond.set("repClntNo", scwin.parent_repClntNo);

  //테스트 데이터
  //ds_srchCond.set("commCd", "40065998");
  //ds_srchCond.set("wrkPlCd", "3W06");
  //ds_srchCond.set("odrNo", "BLA2509090001");
  //ds_srchCond.set("repClntNo", "502508112");

  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_autoApply = async function () {
  for (var i = 0; i < ds_zoneStock.getRowCount(); i++) {
    if (scwin.remainQty > 0 && ds_zoneStock.getCellData(i, "stockQty") > 0) {
      //수량빼기
      if (scwin.remainQty >= ds_zoneStock.getCellData(i, "stockQty")) {
        ds_zoneStock.setCellData(i, "outQty", ds_zoneStock.getCellData(i, "stockQty"));
        scwin.remainQty = scwin.remainQty - ds_zoneStock.getCellData(i, "stockQty");
        tbx_assgnQty.setValue(scwin.remainQty);
      } else {
        ds_zoneStock.setCellData(i, "outQty", scwin.remainQty);
        scwin.remainQty = scwin.remainQty - scwin.remainQty;
        tbx_assgnQty.setValue(scwin.remainQty);
      }

      //중량빼기
      if (scwin.remainWt >= ds_zoneStock.getCellData(i, "stockWt")) {
        ds_zoneStock.setCellData(i, "outWt", ds_zoneStock.getCellData(i, "stockWt")); //wt도 체크
        scwin.remainWt = scwin.remainWt - ds_zoneStock.getCellData(i, "stockWt"); //wt도 체크
        //20170629 0.02-0.02 해도 0이 안나오고 소수점0.000000001??? 오차발생하여 추가
        scwin.remainWt = Math.round(scwin.remainWt * 100) / 100;
        tbx_assgnWt.setValue(scwin.remainWt);
      } else {
        ds_zoneStock.setCellData(i, "outWt", scwin.remainWt); //wt도 체크
        scwin.remainWt = scwin.remainWt - scwin.remainWt; //wt도 체크
        tbx_assgnWt.setValue(scwin.remainWt); //wt도 체크
      }
    }
  }
};
scwin.f_Apply = async function () {
  if (scwin.remainQty > 0) {
    $c.win.alert($p, "출고되지 않은 수량이 존재 합니다.");
    return;
  } else if (scwin.remainWt > 0) {
    //
    $c.win.alert($p, "출고되지 않은 중량이 존재 합니다.");
    return;
  } else {
    //var rowData;
    //scwin.ds_parent.removeAll();
    //rowData = ds_zoneStock.ExportData(1, ds_zoneStock.getRowCount(), true);
    //scwin.ds_parent.ImportData(rowData);

    //TOBE에서는 json으로 리턴값을 보냄
    let returnValue = ds_zoneStock.getAllJSON();
    $c.win.closePopup($p, returnValue);
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_zoneStock.getRowCount());
  for (var i = 0; i < ds_zoneStock.getRowCount(); i++) {
    ds_zoneStock.setCellData(i, "odrNo", scwin.parent_odrNo);

    //201705 기존에 선택된 재고관리번호별 수량 체크를위해 intendQty intendWt stockMgntNo
    if (scwin.parent_array.length > 0) {
      for (var j = 0; j < scwin.parent_array.length; j++) {
        var p_intendQty = scwin.parent_array[j][0];
        var p_intendWt = scwin.parent_array[j][1];
        s;
        var p_stockMgntNo = scwin.parent_array[j][2];
        if (ds_zoneStock.getCellData(i, "stockMgntNo") == p_stockMgntNo) {
          ds_zoneStock.setCellData(i, "stockQty", p_intendQty);
          ds_zoneStock.setCellData(i, "stockWt", p_intendWt);
        }
      }
    }
  }
  if (scwin.parent_type == "A") {
    await scwin.f_autoApply();
    await scwin.f_Apply();
  }
};
scwin.gr_zoneStock_onafteredit = function (rowIndex, columnIndex, value) {
  if (parseInt(ds_zoneStock.getCellData(rowIndex, "outQty")) > parseInt(ds_zoneStock.getCellData(rowIndex, "stockQty"))) {
    $c.win.alert($p, "출고수량이 재고수량보다 큽니다.");
    ds_zoneStock.setCellData(rowIndex, "outQty", 0);
    return;
  } else if (parseFloat(ds_zoneStock.getCellData(rowIndex, "outWt")) > parseFloat(ds_zoneStock.getCellData(rowIndex, "stockWt"))) {
    $c.win.alert($p, "출고물량이 재고물량보다 큽니다.");
    ds_zoneStock.setCellData(rowIndex, "outWt", 0);
    return;
  } else {
    var odrQty = scwin.parent_odrQty;
    var odrWt = scwin.parent_odrWt;
    var sumQty = 0;
    ds_zoneStock.setCellData(rowIndex, "outWt", odrWt / odrQty * parseInt(ds_zoneStock.getCellData(rowIndex, "outQty")));
    for (var i = 0; i < ds_zoneStock.getRowCount(); i++) {
      sumQty = sumQty + parseInt(ds_zoneStock.getCellData(i, "outQty"));
    }
    scwin.remainQty = odrQty - sumQty;
    tbx_assgnQty.setValue(scwin.remainQty);
    tbx_assgnWt.setValue(scwin.remainWt);
  }
};

//-------------------------------------------------------------------------
// 팝업 닫기
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th tac',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더중량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'남은수량',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'',label:'남은중량',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkPlCd',label:'undefined',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_wrkPlNm',label:'undefined',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_odrQty',label:'undefined',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td tac'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_odrWt',label:'undefined',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'tbx_assgnQty',label:'undefined',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td tac',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'txt-red',id:'tbx_assgnWt',label:'undefined',ref:'',style:'',userData2:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn','ev:onclick':'scwin.f_Apply',id:'trigger2',style:'',type:'button',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]}]}]},{T:1,N:'xf:group',A:{class:'section row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_zoneStock',id:'gr_zoneStock',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',readOnly:'true','ev:onafteredit':'scwin.gr_zoneStock_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'오더번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'품명코드',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'품명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'LOT번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'재고관리번호',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column17',value:'ZONE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',id:'column13',value:'재고수중량',displayMode:'label',colSpan:'3'}},{T:1,N:'w2:column',A:{width:'240',inputType:'text',id:'column40',value:'출고수중량',displayMode:'label',colSpan:'3'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'CBM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'commNm',displayMode:'label',value:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'stockMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'blck',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'stockQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'stockCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outQty',displayMode:'label',readOnly:'false',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})