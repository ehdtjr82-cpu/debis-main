/*amd /ui/ds/lo/comninfomgnt/lo_100_01_01b.xml 22429 0e4e105544e2e4fdc1c8b8e4af0a5f59e0dea2fc05ab173a2e60972ce6b3042d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchMap'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'upperWrkStpCd',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workStep',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'상위작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'enable',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerCnt',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'testLvl',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workStepList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'상위작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'enable',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lowerCnt',name:'#N/A',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workStepView',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'upperWrkStpCd',name:'상위작업단계코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'wrkStpNm',name:'작업단계명',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'bizDomCd',name:'사업영역코드',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'lvl',name:'레벨',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'enable',name:'#N/A',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'lowerCnt',name:'#N/A',dataType:'text',defaultValue:'',encYN:'false',ignoreStatus:'',importFormatter:'',length:'',nullYN:'',useFilter:'',valueType:''}},{T:1,N:'w2:column',A:{id:'testLvl',name:'name9',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_createTree',action:'/ds.lo.comninfomgnt.RetrieveWorkStepTreeCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_workStep","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_createTree_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.lo.comninfomgnt.RetrieveWorkStepListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_searchMap","key":"GAUCE"}',target:'data:json,[{"id":"ds_workStepList","key":"GAUCE"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.lo.comninfomgnt.SaveWorkStepListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_workStepList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.MSG_LO_WRN_001 = "하위 레벨이 존재하여 삭제할 수 없습니다.";
scwin.hid_tv_index = 1;
scwin.rowPos = 0;
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_OnLoad
// scwin.desc : 화면로딩시 
//-------------------------------------------------------------------------   
scwin.f_OnLoad = function () {
  grp_sub_title.hide();
  tbx_sub_title.setValue("");
  scwin.f_defaultValue();
  scwin.f_createTree();
};
scwin.onUdcCompleted = function () {
  scwin.f_OnLoad();
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "BusinessDomainEBC",
    param2: "retrieveBusinessDomainComboDTO",
    param3: ["100"],
    compID: "gr_workStepList:bizDomCd"
  }];
  $c.data.setGauceUtil($p, codeOptions);
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_defaultValue
// scwin.desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfDisableKey($p);
  tv_workStep.focus();
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_createTree
// scwin.desc : 화면 우측 Tree데이타 조회
//-------------------------------------------------------------------------
scwin.f_createTree = function () {
  ds_workStep.setJSON([]);
  $c.sbm.execute($p, sbm_createTree);
};
scwin.sbm_createTree_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  var rowcnt = ds_workStep.getRowCount();
  if (rowcnt > 0) {
    ds_workStep.insertRow(0);
    ds_workStep.setCellData(0, "wrkStpCd", "");
    ds_workStep.setCellData(0, "wrkStpNm", "작업단계");
    ds_workStep.setCellData(0, "lvl", 1);
    ds_workStep.setCellData(0, "testLvl", 1);
    for (var i = 0; i < ds_workStep.getRowCount(); i++) {
      if (i != 0) {
        var lvl = parseInt(ds_workStep.getCellData(i, "lvl")) + 1;
        ds_workStep.setCellData(i, "testLvl", lvl);
        //ds_workStep.setCellData(i, "upperWrkStpCd", ds_workStep.getCellData("wrkStpCd"));
      }
    }
    ds_workStepView.setJSON(ds_workStep.getAllJSON());
    ds_workStep.reform();
    ds_workStepView.reform();
    tv_workStep.findNodeByIndex(scwin.hid_tv_index, true);
    scwin.tv_workStep_onviewchange();
  }
};

/*
//-------------------------------------------------------------------------
// scwin.name : scwin.f_createHeader
// scwin.desc : Grid Header정보 Setting
//-------------------------------------------------------------------------
scwin.f_createHeader = function (){
	var str_detail_header="";

	//헤더의 정의 순서는 반드시 서버측의 정의순서와 일치하여야 한다.
	str_detail_header = "wrkStpCd:STRING(3)"                 // 작업단계코드
                             + ",upperWrkStpCd:STRING(3)"            // 상위작업단계코드
                             + ",wrkStpNm:STRING(50)"                // 작업단계명
                             + ",bizDomCd:STRING(3)"                 // 사업영역코드
                             + ",lvl:DECIMAL(1.0)"                   // 레벨
                             + ",useYn:INT(1)";                   // 사용여부

	ds_workStepList.SetDataHeader(str_detail_header);
};
*/

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Addrow
// scwin.desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_Addrow = function () {
  var row = ds_workStepList.insertRow();
  var tvIdx = 0;
  if (tv_workStep.getSelectedIndex() > 0) {
    tvIdx = tv_workStep.getSelectedIndex() - 1;
  }
  let vLvl = tv_workStep.getSelectedNode().depth - 1;
  // console.log("=============tvIdx:"+tvIdx+", getSelectedIndex:"+tv_workStep.getSelectedIndex()+":"+tv_workStep.getSelectedValue()+", vLvl:"+vLvl);

  /* ds_workStepList.setCellData(row, "upperWrkStpCd", ds_workStep.getCellData(tvIdx-1,"wrkStpCd"));
  ds_workStepList.setCellData(row, "lvl", parseInt(ds_workStep.getCellData(tvIdx-1,"lvl")) + 1);
  ds_workStepList.setCellData(row, "useYn", 1);
  ds_workStepList.setCellData(row, "lowerCnt", "0"); */

  ds_workStepList.setCellData(row, "upperWrkStpCd", ds_workStep.getCellData(tvIdx, "wrkStpCd"));
  ds_workStepList.setCellData(row, "lvl", vLvl + 1);
  ds_workStepList.setCellData(row, "useYn", 1);
  ds_workStepList.setCellData(row, "lowerCnt", "0");
  gr_workStepList.setFocusedCell(row, "wrkStpCd", false);

  /*
      if(row > 1){
  	    ds_workStepList.setCellData(row, "lowerCnt", ds_workStepList.getCellData(row-1,"lowerCnt"));
      }else{
          ds_workStepList.setCellData(row, "lowerCnt", "0");
      }
  */
  //gr_workStepList.setFocusedCell(row, "wrkStpCd", false);

  //if (ds_workStep.getCellData(ds_workStep.getRowPosition(),"lvl") < 2 ) 
  //{
  //gr_workStepList.setReadOnly("cell", tvIdx-1, "wrkStpCd", false);
  //}

  //ds_workStepList.AddRow();
  //gr_workStepList.SetColumn("wrkStpCd");

  //ds_workStepList.setCellData(ds_workStepList.getRowPosition(), "upperWrkStpCd", ds_workStep.getCellData(ds_workStep.getRowPosition(),"wrkStpCd"));
  //ds_workStepList.setCellData(ds_workStepList.getRowPosition(), "lvl", parseInt(ds_workStep.getCellData(ds_workStep.getRowPosition(),"lvl")) + 1);
  //ds_workStepList.setCellData(ds_workStepList.getRowPosition(), "useYn", 1);
  //
  //if (ds_workStep.getCellData(ds_workStep.getRowPosition(),"lvl") < 2 ) 
  //{
  //	//gr_workStepList.ColumnProp('wrkStpCd','Edit', "AlphaNum");
  //
  //}
};
scwin.f_Delrow = async function () {
  // console.log("scwin.f_Delrow ~~");
  if (ds_workStepList.getCellData(ds_workStepList.getRowPosition(), "lowerCnt") == 0) {
    if (ds_workStepList.getRowStatus(ds_workStepList.getRowPosition()) == "C") {
      ds_workStepList.removeRow(ds_workStepList.getRowPosition());
    } else {
      ds_workStepList.deleteRow(ds_workStepList.getRowPosition());
    }
    // console.log("==========ds_workStepList.getRowPosition():"+ds_workStepList.getRowPosition()+":"+ds_workStepList.getRowStatus(ds_workStepList.getRowPosition()));
    gr_workStepList.setFocusedCell(ds_workStepList.getRowPosition(), "wrkStpCd", false);
  } else {
    await $c.gus.cfAlertMsg($p, scwin.MSG_LO_WRN_001);
    return;
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Retrieve
// scwin.desc : 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (strwrkStpCd) {
  scwin.rowPos = ds_workStepList.getRowPosition();
  ds_searchMap.set("upperWrkStpCd", strwrkStpCd);
  ds_workStepList.setJSON([]);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    var rowcnt = ds_workStepList.getRowCount();
    tbx_totalRows.setValue(rowcnt);
    if (rowcnt == 0) {
      await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return;
    }
    gr_workStepList.setFocusedCell(scwin.rowPos, "wrkStpCd", false);

    //$c.gus.cfEnableObjects([btn_new, btn_edit]);
    //$c.gus.cfDisableObjects([btn_save,btn_add,btn_del,btn_cls,udc_portDistrictCd,ica_adptDt]);	
  } catch (e) {
    console.log("sbm_retrieve_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// scwin.name : scwin.f_Save
// scwin.desc : 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      scwin.hid_tv_index = tv_workStep.getSelectedIndex();
      console.log("scwin.hid_tv_index save~~" + scwin.hid_tv_index);
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.f_ReqFieldChk = async function () {
  var i;
  //if(ds_workStepList.isUpdated==false){
  if (ds_workStepList.getModifiedJSON().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["기준작업경로 또는 작업경로별 작업단계"]); //변경된 정보가 없습니다.
    return;
  }
  for (var i = 0; i < ds_workStepList.getRowCount(); i++) {
    // console.log("=======lvl:"+ds_workStepList.getCellData(i, "lvl")+", bizDomCd:"+ds_workStepList.getCellData(i, "bizDomCd"));
    if (ds_workStepList.getCellData(i, "lvl") == 2 && ds_workStepList.getCellData(i, "bizDomCd") == "") {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["레벨2일 경우 사업영역구분"]);
      gr_workStepList.setFocusedCell(i, "bizDomCd", false);
      return false;
    }
  }
  if (!(await $c.gus.cfValidate($p, gr_workStepList, null, true))) return;
  /* if ( await $c.gus.cfValidate([gr_workStepList],null,true)) {
   		return true;
  } else {
   		return false;
  } */
  return true;
};

/*
//-------------------------------------------------------------------------
// 작업단계등록 엑셀파일로 저장
//-------------------------------------------------------------------------
scwin.f_workStepExcel = function () {
    //sheet명, 저장파일명,     저장 다이얼로그
	cfGridToExcel(gr_workStepList, "작업단계등록", "작업단계등록.xls", 2+4+8+16);
};
*/

scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
  scwin.f_createTree();
};
scwin.btn_save_onclick = function (e) {
  scwin.f_Save();
};
scwin.tv_workStep_onviewchange = async function (info) {
  // console.log("scwin.tv_workStep_onviewchange");
  //console.log(info);
  var oldVal = "";
  var newVal = "";
  if (undefined != info) {
    oldVal = info.oldNode.value;
    newVal = info.newNode.value;
    newLab = info.newNode.label;
    if (ds_workStep.getModifiedJSON().length > 0) {
      if (!(await $c.win.confirm($p, MSG_CM_CRM_005))) {
        if (oldVal != "") {
          tv_workStep.findNodeByValue(oldVal, true);
        }
        return;
      }
    }
    grp_sub_title.show();
    tbx_sub_title.setValue(tv_workStep.getSelectedLabel());
  } else {
    newVal = tv_workStep.getSelectedValue();

    // console.log("[info is undefined]!!!");
  }
  var lvl = tv_workStep.getSelectedNode().depth - 1;
  //console.log("lvl =="+lvl);
  if (lvl < 2) {
    gr_workStepList.setHeaderClass("wrkStpCd", "col-type1");
  } else {
    gr_workStepList.removeHeaderClass("wrkStpCd", "col-type1");
  }
  if (lvl == 1) {
    gr_workStepList.setHeaderClass("bizDomCd", "txt-blue");
  } else {
    gr_workStepList.removeHeaderClass("bizDomCd", "txt-blue");
  }

  //console.log("newVal~~"+newVal);
  scwin.f_Retrieve(newVal);
};
scwin.gr_workStepList_onrowindexchange = function (rowIndex, oldRow) {
  // console.log("scwin.gr_workStepList_onrowindexchange~~");
  if (ds_workStepList.getRowStatus(rowIndex) == "C" && parseInt(ds_workStepList.getCellData(rowIndex, "lvl")) < 3) {
    //gr_workStepList.ColumnProp('wrkStpCd', 'Edit') = "AlphaNum";
    gr_workStepList.setReadOnly("cell", rowIndex, "wrkStpCd", false);
  } else {
    //gr_workStepList.ColumnProp('wrkStpCd', 'Edit') = "none";
    gr_workStepList.setReadOnly("cell", rowIndex, "wrkStpCd", true);
  }
  if (parseInt(ds_workStepList.getCellData(rowIndex, "lvl")) == 2) {
    //gr_workStepList.ColumnProp('bizDomCd', 'Edit') = "AlphaNum";
    gr_workStepList.setReadOnly("cell", rowIndex, "bizDomCd", false);
  } else {
    //gr_workStepList.ColumnProp('bizDomCd', 'Edit') = "none";
    gr_workStepList.setReadOnly("cell", rowIndex, "bizDomCd", true);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox wfix flex_no'},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 500px;'},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'작업단계Tree',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'',gridUpYn:'N',gridDownYn:'N',btnUser:'N',id:'udc_topGroup',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'tvw-wrap',id:'grd_section1',style:''},E:[{T:1,N:'w2:treeview',A:{dataType:'listed',id:'tv_workStep',style:'',tooltipGroupClass:'false',class:'h-full','ev:onviewchange':'scwin.tv_workStep_onviewchange',renderType:'virtual',showTreeDepth:'1'},E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_workStepView'},E:[{T:1,N:'w2:label',A:{ref:'wrkStpNm'}},{T:1,N:'w2:value',A:{ref:'wrkStpCd'}},{T:1,N:'w2:depth',A:{ref:'testLvl'}},{T:1,N:'w2:folder',A:{ref:'upperWrkStpCd'}},{T:1,N:'w2:checkbox',A:{ref:''}},{T:1,N:'w2:checkboxDisabled',A:{ref:''}},{T:1,N:'w2:image',A:{ref:''}},{T:1,N:'w2:iconImage',A:{ref:''}},{T:1,N:'w2:selectedImage',A:{ref:''}},{T:1,N:'w2:expandedImage',A:{ref:''}},{T:1,N:'w2:leafImage',A:{ref:''}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{class:'title',id:'grp_sub_title',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'tbx_sub_title',label:'1',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_workStepList',grdDownOpts:'{"fileName":"작업단계등록.xlsx","sheetName": "작업단계등록","type":"2+4+8+16","hiddenVisible":"true"}',id:'udc_topGroup2',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workStepList',style:'',autoFit:'allColumn',id:'gr_workStepList',visibleRowNum:'18',class:'wq_gvw',rowStatusVisible:'true',readOnly:'true','ev:onrowindexchange':'scwin.gr_workStepList_onrowindexchange',rowStatusWidth:'30',dataName:'작업단계',validFeatures:'ignoreStatus=no',validExp:'wrkStpNm:작업단계명:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',value:'작업단계코드',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column17',value:'상위작업단계코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'column15',value:'작업단계명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'bizDomCd',value:'사업영역코드',displayMode:'label',class:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column11',value:'레벨',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'사용여부',displayMode:'label',class:'col-type1'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'upperWrkStpCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',id:'wrkStpNm',displayMode:'label',textAlign:'left',readOnly:'false',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'180',inputType:'select',id:'bizDomCd',displayMode:'value delim label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lvl',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'checkbox',id:'useYn',displayMode:'label',readOnly:'false'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'tbx_totalRows',label:'0',class:'num',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_workStepList',btnCancelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.f_Addrow',rowAddUserAuth:'C',delUserAuth:'D',rowDelObjType:'data',rowAddObjType:'data',cancelObjType:'data'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_save_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})