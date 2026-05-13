/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_04p.xml 10036 914abf9d30abad46a7f994f233b5398e1610ad3dd242267b9f74778fce79ddb4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_QueryCondition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'reqDt',name:'reqDt',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStn',name:'dptStn',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'arvStn',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'false'}}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_CutAmountPriority',saveRemovedData:'true','ev:ondataload':'scwin.ds_CutAmountPriority_ondataload','ev:onbeforecelldatachange':'scwin.ds_CutAmountPriority_onbeforecelldatachange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'No',name:'번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStnWrkPlNm',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStnWrkPlNm',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumulateTeu',name:'누적TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sortKey',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFareSa',name:'사유화차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'railroadFare',name:'공사화차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cutAmount',name:'저감액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqDt',name:'일자',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveCutAmountPriority',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveCutAmountPriorityCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_CutAmountPriority","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_CutAmountPriority","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_RetrieveCutAmountPriority_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.f_sortKey = function (data) {
  var retVal;
  switch (data) {
    case "0":
      retVal = "사유";
      break;
    case "3":
      retVal = "전용";
      break;
  }
  if (retVal == "") {
    retVal = data;
  }
  return retVal;
};
scwin.f_No = function (data, formattedData, rowIndex, colIndex) {
  return rowIndex + 1;
};
scwin.onpageload = function () {
  scwin.popTitleCh();
  var ed_signDt = $c.data.getParameter($p, "ed_signDt");
  //var ed_signDt = "20190715";
  ds_QueryCondition.removeAll();
  ds_QueryCondition.insertRow();
  ds_QueryCondition.setCellData(0, "reqDt", ed_signDt);
  $c.sbm.execute($p, sbm_RetrieveCutAmountPriority);
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "저감액우선순위조회");
};
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};
scwin.ds_CutAmountPriority_OnLoadCompleted = function (rowcnt) {
  totalRows.setValue(rowcnt);
  var reqDt = ds_QueryCondition.getCellData(0, "reqDt");
  var date1 = WebSquare.date.parseDate(reqDt);
  var date2 = WebSquare.date.parseDate("20071000");
  var teuHab = 0;
  for (var i = 0; i < ds_CutAmountPriority.getRowCount(); i++) {
    if (ds_CutAmountPriority.getCellData(i, "cntrSizCd") == "20") {
      teuHab += 1;
    } else {
      teuHab += 2;
    }
    ds_CutAmountPriority.setCellData(i, "cumulateTeu", teuHab);
    if (date1 > date2) {
      if (teuHab == 202) {
        gr_CutAmountPriority.setRowColor(i, "RED");
        gr_CutAmountPriority.setRowBackgroundColor(i, "#DAEAE9");
      } else {
        if (teuHab == 201) {
          gr_CutAmountPriority.setRowColor(i, "RED");
          gr_CutAmountPriority.setRowBackgroundColor(i, "#DAEAE9");
        } else {
          gr_CutAmountPriority.setRowColor(i, "BLUE");
          gr_CutAmountPriority.setRowBackgroundColor(i, "#ffffff");
        }
      }
    } else {
      if (teuHab == 174) {
        gr_CutAmountPriority.setRowColor(i, "RED");
        gr_CutAmountPriority.setRowBackgroundColor(i, "#DAEAE9");
      } else {
        if (teuHab == 173) {
          gr_CutAmountPriority.setRowColor(i, "RED");
          gr_CutAmountPriority.setRowBackgroundColor(i, "#DAEAE9");
        } else {
          gr_CutAmountPriority.setRowColor(i, "BLUE");
          gr_CutAmountPriority.setRowBackgroundColor(i, "#ffffff");
        }
      }
    }
  }
};
scwin.ds_CutAmountPriority_ondataload = function () {
  var rowcnt = ds_CutAmountPriority.getRowCount();
  scwin.ds_CutAmountPriority_OnLoadCompleted(rowcnt);
};
scwin.sbm_RetrieveCutAmountPriority_submitdone = function (e) {
  debugger;
  if (ds_CutAmountPriority.getRowCount() > 0) {
    ds_CutAmountPriority.modifyAllStatus("R");
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_CutAmountPriority',id:'gr_CutAmountPriority',style:'','ev:oncellclick':'scwin.gr_CutAmountPriority_oncellclick',readOnly:'true',selectedCellColor:'   ',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'번호',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'구간',width:'140',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'SIZE',width:'70',colSpan:'',rowSpan:'2',editType:'select'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'F/E구분',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'누적TEU',width:'90',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'화차구분',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'철송단가',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'일자',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column29',value:'출발역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column28',value:'도착역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column23',value:'사유화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'공사화차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'저감액',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'No',inputType:'expression',style:'',value:'',width:'70',textAlign:'center',expression:'rowIndex+1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStnWrkPlNm',inputType:'text',style:'',value:'',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStnWrkPlNm',inputType:'text',style:'',value:'',width:'90',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',style:'',value:'',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cumulateTeu',inputType:'text',style:'',value:'',width:'90',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sortKey',inputType:'text',style:'',value:'',width:'100',customFormatter:'scwin.f_sortKey'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadFareSa',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'railroadFare',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cutAmount',inputType:'text',style:'',value:'',width:'100',textAlign:'right',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'reqDt',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})