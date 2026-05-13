/*amd /ui/sample/smp_groupBy.xml 8623 0303adb3534ce0c9e95d5a356c4bffca7d9e13d5345a44cfde4e147d91c24c96 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{id:'dataList1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'컬럼1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'컬럼2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'컬럼3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'컬럼4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'컬럼5',dataType:'number'}},{T:1,N:'w2:column',A:{id:'col6',name:'컬럼6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var jsonData = [{
    "col1": "1공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "A제품",
    "col5": 100
  }, {
    "col1": "1공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "B제품",
    "col5": 200
  }, {
    "col1": "1공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "D제품",
    "col5": 300
  }, {
    "col1": "1공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "C제품",
    "col5": 10
  }, {
    "col1": "1공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "A제품",
    "col5": 20
  }, {
    "col1": "1공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "B제품",
    "col5": 30
  }, {
    "col1": "2공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "C제품",
    "col5": 40
  }, {
    "col1": "2공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "E제품",
    "col5": 50
  }, {
    "col1": "2공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "F제품",
    "col5": 60
  }, {
    "col1": "2공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "G제품",
    "col5": 70
  }, {
    "col1": "2공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "H제품",
    "col5": 80
  }, {
    "col1": "2공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "Q제품",
    "col5": 90
  }, {
    "col1": "3공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "S제품",
    "col5": 1
  }, {
    "col1": "3공장",
    "col2": "방산",
    "col3": "제품",
    "col4": "D제품",
    "col5": 2
  }, {
    "col1": "3공장",
    "col2": "방산",
    "col3": "기타",
    "col4": "X제품",
    "col5": 3
  }, {
    "col1": "3공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "V제품",
    "col5": 4
  }, {
    "col1": "3공장",
    "col2": "산업",
    "col3": "제품",
    "col4": "Z제품",
    "col5": 5
  }, {
    "col1": "3공장",
    "col2": "산업",
    "col3": "기타",
    "col4": "C제품",
    "col5": 6
  }];
  dataList1.setJSON(jsonData);
};
scwin.onpageunload = function () {};

// groupby event
scwin.gridView1_ongroupby = function (options) {
  options.groupbyHeader = [{
    inputType: "expression",
    expression: "toggle()+depthStr()"
  }];
  options.showOnlyLastDepth = true;
  options.hideHeader = false;
  // options.hideFooter = true;
  gridView1.groupby(options);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload','ev:onpageunload':'scwin.onpageunload'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_group2',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{style:'',id:'grp_group4',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'Y',gridUpYn:'Y',grp:'grp_group4',templateYn:'N',style:'width:268; height:22; ',gridID:'gridView1',btnUser:'Y',btnPlusYn:'Y',id:'udc_topGrd'}}]}]},{T:1,N:'xf:group',A:{style:'',id:'grp_group1',class:'sub_contents'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',dataList:'data:dataList1',drawType:'virtual',scrollByColumn:'false',style:'width:843px;height:546px;margin-top:25px;margin-left:10px;',id:'gridView1',defaultCellHeight:'20','ev:ongroupby':'scwin.gridView1_ongroupby',groupbyZone:'true',groupbyZoneMessage:'header 를 드레그하세요',useFilterList:'false',class:'wq_gvw',autoFit:'allColumn',customFilterBox:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column21',value:'컬럼1',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column19',value:'컬럼2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column17',value:'컬럼3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column15',value:'컬럼4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'141',style:'',inputType:'text',id:'column13',value:'컬럼5',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column11',value:'컬럼6',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',colMerge:'true',style:'',inputType:'text',id:'col1',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'col1',removeBorderStyle:'false',width:'70',colMerge:'true',style:'',inputType:'text',id:'col2',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{upperColumn:'col2',removeBorderStyle:'false',width:'70',colMerge:'true',style:'',inputType:'text',id:'col3',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col4',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'141',displayFormat:'#,##0',style:'',inputType:'text',id:'col5',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'col6',value:'',blockSelect:'false',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'col1',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row8'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'col5\')',dataType:'number',width:'141',displayFormat:'#,###',inputType:'expression',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column52',value:'합계',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',style:'',inputType:'text',id:'column57',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column50',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column49',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{expression:'sum(\'col5\')',removeBorderStyle:'false',width:'141',displayFormat:'#,##0',style:'',inputType:'expression',id:'column48',value:'',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',style:'',inputType:'text',id:'column47',value:'',blockSelect:'false',displayMode:'label'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'grp_group3',style:''}}]}]}]})