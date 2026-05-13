/*amd /ui/sample/smp_linkedDataList.xml 10185 d7b138067911af6c3159a16bdb4498643a67714205dcdbaddddc94a2d1ca50a1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'dlt_list',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'key1',name:'분류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key2',name:'선택1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'key3',name:'선택2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_cdMst',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:linkedDataList',A:{id:'dlt_linkedList',bind:'dlt_cdMst'},E:[{T:1,N:'w2:condition',A:{type:'filter'}},{T:1,N:'w2:condition',A:{type:'sort'}}]},{T:1,N:'w2:dataList',A:{id:'dlt_cd1',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{id:'dlt_cd2',baseNode:'list',saveRemovedData:'true',repeatNode:'map'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'type',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'script',A:{type:'text/javascript',lazy:'false'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 최초 실행
scwin.onpageload = function () {
  // 코드 마스터
  var codeJsonDt = [{
    "cd": "S",
    "cdNm": "시스템",
    "type": "A"
  }, {
    "cd": "B",
    "cdNm": "업무",
    "type": "A"
  }, {
    "cd": "E",
    "cdNm": "오류",
    "type": "B"
  }, {
    "cd": "W",
    "cdNm": "주의",
    "type": "B"
  }, {
    "cd": "I",
    "cdNm": "알림",
    "type": "B"
  }, {
    "cd": "Y",
    "cdNm": "사용",
    "type": "C"
  }, {
    "cd": "N",
    "cdNm": "미사용",
    "type": "C"
  }];
  dlt_cdMst.setJSON(codeJsonDt);

  // 1레벨 분류
  var jsonDt1 = [{
    "cd": "A",
    "cdNm": "대분류"
  }, {
    "cd": "B",
    "cdNm": "중분류"
  }, {
    "cd": "C",
    "cdNm": "소분류"
  }];
  dlt_cd1.setJSON(jsonDt1);

  // 2레벨 분류
  var jsonDt2 = [{
    "cd": "A1",
    "cdNm": "대분류1",
    "type": "A"
  }, {
    "cd": "A2",
    "cdNm": "대분류2",
    "type": "A"
  }, {
    "cd": "A3",
    "cdNm": "대분류3",
    "type": "A"
  }, {
    "cd": "B1",
    "cdNm": "중분류1",
    "type": "B"
  }, {
    "cd": "B2",
    "cdNm": "중분류2",
    "type": "B"
  }, {
    "cd": "B3",
    "cdNm": "중분류3",
    "type": "B"
  }, {
    "cd": "C1",
    "cdNm": "소분류1",
    "type": "C"
  }, {
    "cd": "C2",
    "cdNm": "소분류2",
    "type": "C"
  }, {
    "cd": "C3",
    "cdNm": "소분류3",
    "type": "C"
  }];
  dlt_cd2.setJSON(jsonDt2);

  // 데이터 리스트
  var jsonListDt = [{
    "key1": "분류명1",
    "key2": "A",
    "key3": "A1"
  }, {
    "key1": "분류명2",
    "key2": "B",
    "key3": "B1"
  }, {
    "key1": "분류명3",
    "key2": "C",
    "key3": "C2"
  }, {
    "key1": "분류명1",
    "key2": "A",
    "key3": "A2"
  }, {
    "key1": "분류명3",
    "key2": "B",
    "key3": "B2"
  }];
  dlt_list.setJSON(jsonListDt);
};

// 조회 메시지 내용 select 변경시
scwin.inqDvscd_onchange = function () {
  //debugger;

  if (sel_inqDvscd.getValue() == "1") {
    // 유형
    dlt_linkedList.setCondition("filter", "type == 'A'");
    //			dlt_linkedList.removeColumnFilterAll();
    //			dlt_linkedList.setColumnFilter( {type : "row", colIndex : "type" , key : "A", condition : "and"} )
  } else if (sel_inqDvscd.getValue() == "2") {
    // 목적
    dlt_linkedList.setCondition("filter", "type == 'B'");
    //			dlt_linkedList.removeColumnFilterAll();
    //			dlt_linkedList.setColumnFilter( {type : "row", colIndex : "type" , key : "B", condition : "and"} )
  } else if (sel_inqDvscd.getValue() == "3") {
    // 사용유무
    dlt_linkedList.setCondition("filter", "type == 'C'");
    //			dlt_linkedList.removeColumnFilterAll();
    //			dlt_linkedList.setColumnFilter( {type : "row", colIndex : "type" , key : "C", condition : "and"} )
  } else {
    //			dlt_linkedList.removeColumnFilterAll();
  }
};

// 행추가
scwin.anc_anchor1_onclick = function () {
  dlt_cd2.removeColumnFilterAll(); // 필터 초기화
  dlt_list.insertRow();
};

// 그리드 셀클릭 이벤트 처리
scwin.grd_gridView1_oncellclick = function (row, col) {
  //debugger;
  if (dlt_list.getColumnID(col) == "key3") {
    //선택2 선택시
    var val = dlt_list.getCellData(row, "key2");
    dlt_cd2.removeColumnFilterAll();
    dlt_cd2.setColumnFilter({
      type: "row",
      colIndex: "type",
      key: val,
      condition: "and"
    });
  }
};
}}}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'contents_inner'},E:[{T:1,N:'xf:group',A:{class:'pgtbox',style:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',label:'LinkedDataList 및 DataList 필터 적용 샘플'}}]},{T:1,N:'xf:group',A:{class:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',label:'1. 검색조건의 첫번째 select box 을 선택한다.<br/>2. 2번째 select Box의 dataList는 원본 데이터 리스트에 link 를 걸려있으며, 첫번째 선택값을 받아서 filter 를 걸어서 보여준다.<br/>',style:'font-weight:bold;'}}]},{T:1,N:'xf:group',A:{class:'dfbox',style:''},E:[{T:1,N:'xf:group',A:{class:'fr',id:''}}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'width:100%;',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:130px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:3,text:'검색조건'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'wq_w2selectbox_100',id:'',style:''},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',displayMode:'label',id:'sel_inqDvscd',optionOrder:'false',selectedData:'true',style:'',submenuSize:'auto',ref:'','ev:onchange':'scwin.inqDvscd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메세지유형'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'메세지목적'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사용유무'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td blfno',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{disabledClass:'w2selectbox_disabled',appearance:'minimal',chooseOption:'true',displayMode:'label',allOption:'',submenuSize:'auto',direction:'auto',id:'sel_selectbox1',style:'width: 148px;height: 21px;',disabled:'false',chooseOptionLabel:'전체',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:dlt_linkedList'},E:[{T:1,N:'xf:label',A:{ref:'cdNm'}},{T:1,N:'xf:value',A:{ref:'cd'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'grp_group1',style:'width: 100%;height: 200px;'},E:[{T:1,N:'w2:gridView',A:{dataList:'data:dlt_list',scrollByColumn:'false',defaultCellHeight:'20',scrollByColumnAdaptive:'false',id:'grd_gridView1',style:'width: 800px;height: 150px;',syncScroll:'false','ev:oncellclick':'scwin.grd_gridView1_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'column5',removeBorderStyle:'false',style:'',inputType:'text',width:'167',value:'분류명',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column3',removeBorderStyle:'false',style:'',inputType:'text',width:'282',value:'선택1',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'column1',removeBorderStyle:'false',style:'',width:'252',inputType:'text',value:'선택2',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',id:'key1',removeBorderStyle:'false',style:'',inputType:'text',width:'167',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',id:'key2',removeBorderStyle:'false',style:'',inputType:'select',width:'282',value:'',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_cd1'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{blockSelect:'false',id:'key3',removeBorderStyle:'false',style:'',width:'252',inputType:'select',value:'',displayMode:'label',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',viewType:'icon'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:dlt_cd2'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'grp_group2',style:'width: 100%;height: 30px;'},E:[{T:1,N:'w2:anchor',A:{id:'anc_anchor1',style:'width: 100px;height: 23px;',outerDiv:'false',class:'btn_cm md btn_cm_blue','ev:onclick':'scwin.anc_anchor1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행추가'}]}]}]}]}]}]}]}]})