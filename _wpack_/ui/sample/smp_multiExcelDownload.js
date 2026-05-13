/*amd /ui/sample/smp_multiExcelDownload.xml 10314 7bc5457d49d033e8304de85b769d66209d5f57e72e80d15080fe4cef76f643a7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dataList1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{id:'dataList2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dataList3',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var jsonData = [{
    "col1": "1",
    "col2": "2000",
    "col3": "2000.12"
  }, {
    "col1": "4",
    "col2": "3000",
    "col3": "300.23"
  }, {
    "col1": "7",
    "col2": "400",
    "col3": "400.1"
  }, {
    "col1": "10",
    "col2": "11",
    "col3": "120"
  }, {
    "col1": "13",
    "col2": "14",
    "col3": "15"
  }, {
    "col1": "16",
    "col2": "17",
    "col3": "18"
  }];
  dataList1.setJSON(jsonData);
  jsonData = [{
    "col1": "가가",
    "col2": "가가",
    "col3": "가가",
    "col4": "가1"
  }, {
    "col1": "나나",
    "col2": "나나",
    "col3": "나나",
    "col4": "나1"
  }];
  dataList2.setJSON(jsonData);
  jsonData = [{
    "col1": "AAA",
    "col2": "CCC",
    "col3": "EEE",
    "col4": "GGG",
    "col5": "III"
  }, {
    "col1": "BBB",
    "col2": "DDD",
    "col3": "FFF",
    "col4": "HHH",
    "col5": "JJJ"
  }];
  dataList3.setJSON(jsonData);
};
scwin.onpageunload = function () {};

/* multi sheet 엑셀 다운로드 */
scwin.trigger1_onclick = function (e) {
  debugger;
  var options = {
    common: {
      fileName: "multipleExcel.xls",
      showProcess: true
    },
    excelInfo: [{
      gridId: gridView1.getID(),
      sheetName: "첫번째 sheet",
      useDataFormat: true,
      decimal: "auto",
      rowNumVisible: true,
      type: "1",
      startRowIndex: 3,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true,
      infoArr: [{
        rowIndex: 1,
        colIndex: 1,
        rowSpan: 1,
        colSpan: 2,
        text: "첫번째 시트",
        textAlign: "center"
      }]
    }, {
      gridId: gridView2.getID(),
      sheetName: "두번째 sheet",
      type: "1",
      startRowIndex: 3,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true,
      infoArr: [{
        rowIndex: 1,
        colIndex: 1,
        rowSpan: 1,
        colSpan: 2,
        text: "두번째 시트",
        textAlign: "center"
      }]
    }, {
      gridId: gridView3.getID(),
      sheetName: "세번째 sheet",
      type: "1",
      startRowIndex: 3,
      startColumnIndex: 0,
      headerColor: "#DBEEF3",
      bodyColor: "#92CDDC",
      mergeCell: true,
      infoArr: [{
        rowIndex: 1,
        colIndex: 1,
        rowSpan: 1,
        colSpan: 2,
        text: "세번째 시트",
        textAlign: "center"
      }]
    }]
  };
  $c.data.downloadMultipleGridView($p, options);
  //WebSquare.util.multipleExcelDownload(options);
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'w2:gridView',A:{id:'gridView1',ignoreToggleOnDisabled:'false',syncScroll:'false',useShiftKey:'true',style:'height: 150px; width:230px; border: 1px solid;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',summaryAuto:'false',summaryOnlyAuto:'false',applyAllColumnStyle:'false',dataList:'data:dataList1',ignoreCellClick:'false',focusFlow:'default'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column5',value:'name1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column3',value:'name2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'column1',value:'name3',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'col2',value:'',blockSelect:'false',displayMode:'label',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{footerDiv:'false',removeBorderStyle:'false',width:'70',inputType:'text',style:'',id:'col3',value:'',blockSelect:'false',displayMode:'label',displayFormat:'#,##0.##',dataType:'number'}}]}]}]},{T:1,N:'w2:gridView',A:{id:'gridView2',ignoreToggleOnDisabled:'false',syncScroll:'false',useShiftKey:'true',style:'height:150px;width:328px; border: 1px solid;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',summaryAuto:'false',summaryOnlyAuto:'false',applyAllColumnStyle:'false',dataList:'data:dataList2',ignoreCellClick:'false',focusFlow:'default'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'name4',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}}]}]}]},{T:1,N:'w2:gridView',A:{id:'gridView3',ignoreToggleOnDisabled:'false',syncScroll:'false',useShiftKey:'true',style:'height:150px;width:372px; border: 1px solid;',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',summaryAuto:'false',summaryOnlyAuto:'false',applyAllColumnStyle:'false',dataList:'data:dataList3',ignoreCellClick:'false',focusFlow:'default'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column9',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column7',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name2',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'name4',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'name5',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'col1',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col2',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col3',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col4',removeBorderStyle:'false',style:'',inputType:'text',width:'70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'col5',removeBorderStyle:'false',style:'',width:'70',inputType:'text',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:trigger',A:{type:'button',style:'position: relative;height:82px;width: 142px;',id:'trigger1','ev:onclick':'scwin.trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'multipleExcelDownload'}]}]}]}]}]})