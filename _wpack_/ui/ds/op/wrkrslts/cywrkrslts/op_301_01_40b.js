/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_01_40b.xml 23427 bcd7de37642b815357928ac3577f9cd3336cff119b19a8d0792b7ea80bd68cb1 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'itemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name4',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grid',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'osideCd',name:'외부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'외부코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'internalCd',name:'내부코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldKey1',name:'OSIDE_CD',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oldKey2',name:'WRK_PL_CD',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inDocCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outDocCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inClntNo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'docCd',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outClntNo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_inItemCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'docCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_outItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_grid","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_grid","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.SaveEdiMappingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_grid","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_docCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inDocCd',target:'data:json,{"id":"ds_outDocCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_docCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_clntNo',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inClntNo',target:'data:json,{"id":"ds_outClntNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_clntNo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_itemCd',action:'/ds.co.RetreiveItemCdCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_inItemCd',target:'data:json,{"id":"ds_outItemCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_itemCd_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.olddata = "";
scwin.oldrow = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //scwin.f_codeList(sbm_docCd);
  dma_inDocCd.set("sysCd", "CarryInAndCarryOutInformationEBC");
  dma_inDocCd.set("queryId", "retrivedocCd");
  $c.sbm.execute($p, sbm_docCd);
  acb_lc_docCd.focus();
};
scwin.f_codeList = async function (dataSet, sysCd, queryId) {
  if (dataSet == 'sbm_docCd') {
    //dataSet.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CarryInAndCarryOutInformationEBC&queryId=retrivedocCd";
    dma_inDocCd.set("sysCd", "CarryInAndCarryOutInformationEBC");
    dma_inDocCd.set("queryId", "retrivedocCd");
  } else if (dataSet == 'sbm_clntNo') {
    //dataSet.action = "/cm.zz.RetrieveComboCMD.do?sysCd=CarryInAndCarryOutInformationEBC&queryId=retriveclntNo&docCd="+acb_lc_docCd.getValue();
    dma_inClntNo.set("sysCd", "CarryInAndCarryOutInformationEBC");
    dma_inClntNo.set("queryId", "retriveclntNo");
    dma_inClntNo.set("docCd", acb_lc_docCd.getValue());
  } else if (dataSet == 'sbm_itemCd') {
    //dataSet.action = "/ds.co.RetreiveItemCdCMD.do?docCd="+acb_lc_docCd.getValue()+"&clntNo="+acb_lc_clntNo.getValue();
    dma_inItemCd.set("docCd", acb_lc_docCd.getValue());
    dma_inItemCd.set("clntNo", acb_lc_clntNo.getValue());
  }
  $c.sbm.execute($p, dataSet);
};
scwin.sbm_docCd_submitdone = function (e) {
  acb_lc_docCd.setSelectedIndex(0);

  //scwin.f_codeList(sbm_clntNo);
  ds_outClntNo.removeAll();
  dma_inClntNo.set("sysCd", "CarryInAndCarryOutInformationEBC");
  dma_inClntNo.set("queryId", "retriveclntNo");
  dma_inClntNo.set("docCd", acb_lc_docCd.getValue());
  $c.sbm.execute($p, sbm_clntNo);
};
scwin.acb_lc_docCd_onchange = function (info) {
  dma_inClntNo.set("sysCd", "CarryInAndCarryOutInformationEBC");
  dma_inClntNo.set("queryId", "retriveclntNo");
  dma_inClntNo.set("docCd", acb_lc_docCd.getValue());
  $c.sbm.execute($p, sbm_clntNo);
};
scwin.sbm_clntNo_submitdone = function (e) {
  acb_lc_clntNo.setSelectedIndex(0);

  //scwin.f_codeList(sbm_itemCd);
  dma_inItemCd.set("docCd", acb_lc_docCd.getValue());
  dma_inItemCd.set("clntNo", acb_lc_clntNo.getValue());
  $c.sbm.execute($p, sbm_itemCd);
};
scwin.sbm_itemCd_submitdone = function (e) {
  acb_lc_itemCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 조회 필드 초기화 Clear
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tbl_cond, []);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  let ret = await $c.gus.cfValidate($p, [acb_lc_docCd, acb_lc_clntNo, acb_lc_itemCd]); // 문서코드, 송수신업체, 항목코드
  if (!ret) {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    totalRows.setValue(ds_grid.getRowCount());
    if (ds_grid.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      return false;
    }
    gr_gridView.setFocusedCell(0, 0, true);
    acb_lc_docCd.focus();
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tbl_cond]); // 문서코드, 송수신업체, 항목코드
  if (!ret) return;
  for (var i = 0; i < ds_grid.getRowCount(); i++) {
    if (ds_grid.getCellData(i, "osideCd").trim() == "") {
      $c.win.alert($p, i + 1 + "번째 데이터에서 외부코드은(는) 필수 입력 항목입니다.");
      return false;
    }
    if (ds_grid.getCellData(i, "osideCdNm").trim() == "") {
      $c.win.alert($p, i + 1 + "번째 데이터에서 외부코드명은(는) 필수 입력 항목입니다.");
      return false;
    }
    if (ds_grid.getCellData(i, "internalCd").trim() == "") {
      $c.win.alert($p, i + 1 + "번째 데이터에서 내부코드은(는) 필수 입력 항목입니다.");
      return false;
    }
  }
  if (ds_grid.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
  } else {
    let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
    if (confirm) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다 
    scwin.btn_retrieve_onclick();
  }
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.udc_wrkPlCd_openPopup('T');
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.udc_wrkPlCd_openPopup('T');
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.udc_wrkPlCd_openPopup('F');
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function param : gubn
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_openPopup = function (pClose) {
  let pCode = ed_txt_wrkPlCd.getValue();
  let pName = txt_wrkPlNm.getValue();
  let pAllSearch = "F";
  udc_wrkPlCd.setSelectId('retrieveWrkPlInfo');
  udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc // XML상의 SELECT ID
  , pCode // 화면에서의 ??? Code Element의	Value
  , pName // 화면에서의 ??? Name Element의	Value
  , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , "5" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서
  , '150,170' // 보여주는 각 컬럼들의 폭
  , null // 컬럼중에서 숨기는 컬럼 지정
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , "440" // POP-UP뛰을때 원도우의	사용자 정의	폭
  , "500" // POP-UP뛰을때 우도우의	사용자 정의	높이
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , pAllSearch // 전체검색허용여부	("F")
  , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_txt_wrkPlCd.setValue(rtnList[0]);
    txt_wrkPlNm.setValue(rtnList[1]);
  } else {
    ed_txt_wrkPlCd.setValue("");
    txt_wrkPlNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// function name : f_Addrow
// function desc : 그리드 칼럼 추가
//-------------------------------------------------------------------------
scwin.f_addRow = async function (intGubun) {
  let ret = await $c.gus.cfValidate($p, [acb_lc_docCd, acb_lc_clntNo, acb_lc_itemCd]); // 문서코드, 송수신업체, 항목코드
  if (!ret) {
    return;
  }
  ds_grid.insertRow();
  gr_gridView.setFocusedCell(ds_grid.getRowCount() - 1, 0);
  ds_grid.setCellData(ds_grid.getRowPosition(), "docCd", acb_lc_docCd.getValue());
  ds_grid.setCellData(ds_grid.getRowPosition(), "clntNo", acb_lc_clntNo.getValue());
  ds_grid.setCellData(ds_grid.getRowPosition(), "itemCd", acb_lc_itemCd.getValue());
  ds_grid.setCellData(ds_grid.getRowPosition(), "regId", "");
  ds_grid.setCellData(ds_grid.getRowPosition(), "regDtm", "");
  ds_grid.setCellData(ds_grid.getRowPosition(), "modId", "");
  ds_grid.setCellData(ds_grid.getRowPosition(), "modDtm", "");
  gr_gridView.setFocusedCell(ds_grid.getRowCount() - 1, "osideCd", true); //포커스의 컬럼위치
};
scwin.f_delRow = function () {
  row = gr_gridView.getFocusedRowIndex();
  if (ds_grid.getRowStatus(row) == "C") {
    ds_grid.removeRow(row);
    return;
  }
  ds_grid.setCellData(row, "chk", "1");
  ds_grid.modifyRowStatus(row, "D");
};
scwin.f_cancel = function () {
  row = gr_gridView.getFocusedRowIndex();
  if (ds_grid.getRowStatus(row) == "C") {
    ds_grid.removeRow(row);
    return;
  }
  ds_grid.undoRow(gr_gridView.getFocusedRowIndex());
};
scwin.gr_gridView_ontextimageclick = function (rowIndex, columnIndex) {
  let colid = gr_gridView.getColumnID(columnIndex);
  if (colid == "wrkPlNm") {
    let wrkPlNm = ds_grid.getCellData(rowIndex, "wrkPlNm");
    scwin.f_openCommonPopUp(1, "", wrkPlNm, 'F', 'F', rowIndex);
  }
};
scwin.gr_gridView_onafteredit = function (rowIndex, columnIndex, value) {
  try {
    //팝업관련
    let colid = gr_gridView.getColumnID(columnIndex);
    if (colid == 'wrkPlNm') {
      var wrkPlNm = ds_grid.getCellData(rowIndex, "wrkPlNm");
      if (wrkPlNm == "") {
        ds_grid.setCellData(rowIndex, "wrkPlNm", "");
        return false;
      }
      scwin.f_openCommonPopUp(1, "", wrkPlNm, 'F', 'F', rowIndex);
      ds_grid.setCellData(rowIndex, "wrkPlNm", "");
    }
  } catch (e) {
    console.log("gr_gridView_onafteredit : " + e);
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch, row) {
  switch (disGubun) {
    case 1:
      udc_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // 작업장검색
      await udc_wrkPlCd.cfCommonPopUp(async function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_grid.setCellData(row, "wrkPlCd", rtnList[0]);
          ds_grid.setCellData(row, "wrkPlNm", rtnList[1]);
        } else {
          ds_grid.setCellData(row, "wrkPlCd", "");
          ds_grid.setCellData(row, "wrkPlNm", "");
        }
      }, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , "T" // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , "5" // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , "150,170" // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , "440" // POP-UP뛰을때 원도우의	사용자 정의	폭
      , "500" // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , 'F' // 전체검색허용여부	("F")
      , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_cond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'문서명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_docCd',search:'start',style:'width:250px;',submenuSize:'auto',ref:'data:dma_cond.docCd',allOption:'',chooseOption:'',mandatory:'true',title:'문서명',visibleRowNum:'10','ev:onchange':'scwin.acb_lc_docCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_outDocCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'송수신업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_clntNo',search:'start',style:'width:250px;',submenuSize:'auto',ref:'data:dma_cond.clntNo',allOption:'',chooseOption:'',mandatory:'true',title:'송수신업체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_outClntNo'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항목코드',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_itemCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_cond.itemCd',allOption:'',chooseOption:'',mandatory:'true',validExp:'항목코드',title:'항목코드'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_outItemCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cdNm'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width:350px;',codeId:'ed_txt_wrkPlCd',nameId:'txt_wrkPlNm',refDataCollection:'dma_cond',code:'wrkPlCd',btnId:'btn_wrkPlCd',id:'udc_wrkPlCd',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_grid',id:'gr_gridView',style:'',rowStatusVisible:'true',visibleRowNum:'18',visibleRowNumFix:'true',editModeEvent:'onclick','ev:ontextimageclick':'scwin.gr_gridView_ontextimageclick','ev:onafteredit':'scwin.gr_gridView_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'외부코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'외부코드명',width:'240',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'내부코드',width:'130',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'작업장',width:'500'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'osideCd',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'osideCdNm',inputType:'text',width:'240',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'internalCd',inputType:'text',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',width:'500',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',gridID:'gr_gridView',btnCancelYn:'Y',btnDelYn:'N',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_addRow',rowDelFunction:'scwin.f_delRow',cancelFunction:'scwin.f_cancel'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'w2:udc_comCode',A:{codeId:'',popupID:'',nameId:'',style:'display: none;',id:'udc_comCodeGrid',hideName:'Y'}},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.btn_save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})