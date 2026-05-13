/*amd /ui/sample/smp_gridInputTypeCustom.xml 8036 e93f7fb5b61d09a78d471908e8fccdb754d2989becbf2a04477459faae9044fb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'DEFAULT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list1',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'col1',name:'전체선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col2',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col3',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col4',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col5',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_list2',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'label',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'value',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'사용'}]},{T:1,N:'value',E:[{T:4,cdata:'1'}]},{T:1,N:'col1',E:[{T:4,cdata:'사용'}]},{T:1,N:'col2',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'미사용'}]},{T:1,N:'value',E:[{T:4,cdata:'2'}]},{T:1,N:'col1',E:[{T:4,cdata:'미사용'}]},{T:1,N:'col2',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'label',E:[{T:4,cdata:'전체'}]},{T:1,N:'value',E:[{T:4,cdata:'3'}]}]}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'key1',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'key2',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {
  var jsonData = [{
    "col1": "1",
    "col2": "name1-1",
    "col3": "name1-2",
    "col4": "name1-3"
  }, {
    "col1": "2",
    "col2": "name2-1",
    "col3": "name2-2",
    "col4": "name2-3"
  }, {
    "col1": "3",
    "col2": "name3-1",
    "col3": "name3-2",
    "col4": "name3-3"
  }, {
    "col1": "3",
    "col2": "name4-1",
    "col3": "name4-2",
    "col4": "name4-3"
  }, {
    "col1": "2",
    "col2": "name5-1",
    "col3": "name5-2",
    "col4": "name5-3"
  }];
  ds_list1.setJSON(jsonData);
};
scwin.grd_list1_onviewchange = function (info) {
  if (info.colId == "col5") {
    let opts = scwin.custom_Info(info.newValue);
    grd_list1.setCellInputType(info.rowIndex, "col1", opts);
  }
};

// type 에 맞는 info 정보 셋팅
scwin.custom_Info = function (type) {
  let ret = "";
  switch (type) {
    case "select":
      ret = {
        inputType: "select",
        options: {
          viewType: "icon",
          chooseOption: true
        },
        itemSet: {
          nodeset: "data:ds_list2",
          label: "label",
          value: "value"
        }
      };
      break;
    case "autoComplete":
      ret = {
        inputType: "autoComplete",
        options: {
          allOption: "",
          chooseOption: "true",
          chooseOptionLabel: "-선택-"
        },
        itemSet: {
          nodeset: "data:ds_list2",
          label: "label",
          value: "value"
        }
      };
      break;
    case "checkbox":
      ret = {
        inputType: "checkbox"
      };
      break;
    case "calendar":
      ret = {
        inputType: "calendar",
        options: {
          calendarValueType: "yearMonthDate"
        }
      };
      break;
    case "textImage":
      ret = {
        inputType: "textImage",
        options: {
          imageClickFunction: "scwin.clickFn"
        }
      };
      break;
    case "radio":
      ret = {
        inputType: "radio"
      };
      break;
    default:
      ret = {
        inputType: "text"
      };
      break;
  }
  return ret;
};
scwin.clickFn = function (a, b) {
  debugger;
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'',id:'grp_group1',style:'position: relative;width: 100%;height: 200px;'},E:[{T:1,N:'w2:textbox',A:{class:'',label:'- 그리드의 inputType 을 다르게 보여 준다<br/>1. 그리드의 setCellInputTypeCustom="true" , 동적으로 표시될 column 의 property에서 inputType 을 custom 으로 선택.<br/>2. 그리드에서 "컬럼선택" 항목의 값을 선택하면 해당 ROW의 "동적컬럼"의 타입이 변경.<br/>3. scwin.custom_Info 에서 options 의 내용은 해당 컴포넌트의 properties 의 값을 넣으시면 됩니다.',style:'font-weight:bold;',escape:'false'}},{T:1,N:'xf:group',A:{class:'',id:'grp_group11',style:'height: 20px;'}},{T:1,N:'xf:group',A:{style:'position: relative;width: 100%;height: 150px;',class:''},E:[{T:1,N:'w2:gridView',A:{id:'grd_list1',ignoreToggleOnDisabled:'false',useShiftKey:'true',style:'position: relative;width: 100%;height: 150px;',useFilterList:'false',scrollByColumn:'false',defaultCellHeight:'20',showSortableUseFilter:'false',scrollByColumnAdaptive:'false',summaryAuto:'false',summaryOnlyAuto:'false',applyAllColumnStyle:'false',dataList:'data:ds_list1',ignoreCellClick:'false',autoFit:'allColumn',editModeEvent:'onclick',setCellInputTypeCustom:'true','ev:onviewchange':'scwin.grd_list1_onviewchange',class:''},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column9',value:'동적컬럼',blockSelect:'false',displayMode:'label',checkboxLabel:'',chooseOptionLabel:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'105',inputType:'text',style:'',id:'column7',value:'name2',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column5',value:'name3',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column3',value:'name4',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column1',value:'컬럼선택',blockSelect:'false',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'custom',style:'',id:'col1',value:'',blockSelect:'false',displayMode:'label',class:'',checkboxLabel:'chk'}},{T:1,N:'w2:column',A:{width:'105',inputType:'textImage',style:'',id:'col2',value:'',blockSelect:'false',displayMode:'label',typeGetter:'',textAlign:''}},{T:1,N:'w2:column',A:{width:'120',inputType:'',style:'',id:'col3',value:'',blockSelect:'false',displayMode:'label',typeGetter:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'col4',value:'',blockSelect:'false',displayMode:'label',typeGetter:''}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'col5',value:'',blockSelect:'false',displayMode:'label',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'-- 변경 --',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'text'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'text'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'select'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'select'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'radio'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'radio'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'calendar'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'calendar'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'autoComplete'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'autoComplete'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'checkbox'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'checkbox'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'textImage'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'textImage'}]}]}]}]}]}]}]}]}]}]}]}]})