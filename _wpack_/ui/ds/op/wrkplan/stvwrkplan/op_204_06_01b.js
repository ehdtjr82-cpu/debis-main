/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_06_01b.xml 22199 72c17e870e20fc8ce097bbe52d31223af7f1913688e4a986a3e522a071a9d3f8 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'지사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendStDt',name:'작업투입예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkIntendEndDt',name:'작업투입예정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'seq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIntendDt',name:'작업투입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'지사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslDwt',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agencyClntNm',name:'선사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipClntNm',name:'에이전시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipCnt',name:'모선수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commNm',name:'대표화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wt',name:'모선작업',dataType:'number'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStIntendDt',name:'시작예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndIntendDt',name:'종료예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'delYn',name:'삭제',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'agencyClntCd',name:'agencyClntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipClntCd',name:'shipClntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commClntCd',name:'commClntCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'commCd',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'regId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'regDtm',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'modId',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'modDtm',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkIntendInfoPerBranchWharfListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.SaveWorkIntendInfoPerBranchWharfListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_save_submit','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_204_06_01b 
// 이름     : 지사부두별작업예정정보조회
// 경로     : 회계/EIS/물류운영/
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-28
// 사용계정 : 내부
// 비고     :  ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP291",
    compID: "gr_master:lobranCd"
  }, {
    grpCd: "OP570",
    compID: "gr_master:cargoClsCd"
  }, {
    grpCd: "LO102",
    compID: "gr_master:unitCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {}, {
    "delay": 50
  });
};
scwin.commonCodeCallBack = function () {
  //작업예정일 설정(오늘일자);
  ica_wrkIntendStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_wrkIntendEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  acb_lobran.setValue($c.data.getMemInfo($p, "loUpperLobranCd"));
  acb_lobran.focus();

  // $p.setTimeout(function() {
  //     ica_wrkIntendStDt.setValue("20100101");
  //     ica_wrkIntendEndDt.setValue("20101101");

  //     acb_lobran.setValue("6AA");
  // }, {"delay":50});
};

//-------------------------------------------------------------------------
// RETRIEVE;
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  // ds_search.removeAll();
  // ds_search.insertRow();

  ds_search.set("lobranCd", acb_lobran.getValue());
  ds_search.set("wrkIntendStDt", ica_wrkIntendStDt.getValue());
  ds_search.set("wrkIntendEndDt", ica_wrkIntendEndDt.getValue());
  if (!(await $c.gus.cfValidate($p, [ica_wrkIntendStDt, ica_wrkIntendEndDt]))) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_wrkIntendStDt.getValue(), ica_wrkIntendEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ica_wrkIntendStDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  var modifyRowCnt = ds_master.getModifiedIndex().length;
  if (!(modifyRowCnt > 0)) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
  } else {
    // Grid의 필수 입력 항목에 대해서 Check 한다.
    if (!(await $c.gus.cfValidate($p, [gr_master]))) {
      return;
    }
    for (var i = 0; i < ds_master.getRowCount(); i++) {
      if (ds_master.getCellData(i, "wrkStIntendDt") > ds_master.getCellData(i, "wrkEndIntendDt")) {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 작업기간의 시작예정일이 종료예정일보다 큽니다.");
        ds_master.setRowPosition(i);
        return;
      }
      if (ds_master.getCellData(i, "wrkIntendDt") == "" || ds_master.getCellData(i, "lobranCd") == "" || ds_master.getCellData(i, "pierNm") == "") {
        await $c.gus.cfAlertMsg($p, i + 1 + "번째 작업예정일/점소/부두 를 입력해주세요.");
        ds_master.setRowPosition(i);
        return;
      }
    }
    if (await $c.win.confirm($p, "저장하시겠습니까?")) {
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.addRow = function () {
  var rowIdx = ds_master.insertRow();
  ds_master.setRowPosition(rowIdx);
  // await $c.win.alert( ds_out.ExportData( 1, ds_out.CountRow , true ) ) ; 
};
scwin.f_ResetCon = function () {
  acb_lobran.setValue($c.data.getMemInfo($p, "loUpperLobranCd"));
  ica_wrkIntendStDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  ica_wrkIntendEndDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  acb_lobran.focus();
};
scwin.delFormatter = function (a, b, c, d, e, f, g) {
  if (a == "0") {
    return "아니오";
  } else {
    return "예";
  }
};
scwin.excelDown = function () {
  //                     //sheet명       , 저장파일명            , 저장 다이얼로그
  // cfGridToExcel(gr_master, "지사부두별작업예정정보" , "지사부두별작업예정정보.xls" , 4+8+16);
  const infoArr = [];
  const options = {
    fileName: "지사부두별작업예정정보.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "지사부두별작업예정정보",
    type: "1"
    // startRowIndex: 2,
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_master, options, infoArr);
};
scwin.sbm_retrieve_submit = function (e) {};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowcnt = ds_master.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
  txt_totalRows1.setValue(rowcnt);
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.sbm_save_submit = function (e) {};
scwin.sbm_save_submitdone = async function (e) {
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};
scwin.sbm_save_submiterror = function (e) {};
scwin.gr_master_oncellindexchange = function (rowIndex, columnIndex, oldRow, oldColumnIndex) {};
scwin.gr_master_ontextimageclick = function (row, columnIndex) {
  var colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "agencyClntNm":
      udc_commonPop.setSelectId('retrieveClntCrnList');
      udc_commonPop.cfCommonPopUp(function (ref) {
        if (ref != null && ref[0] != "N/A") {
          ds_master.setCellData(row, "agencyClntCd", ref[0]);
          ds_master.setCellData(row, "agencyClntNm", ref[1]);
        }
      }, '', '', null, null, null, null, null, null, null);
      break;
    case "shipClntNm":
      udc_commonPop.setSelectId('retrieveClntCrnList');
      udc_commonPop.cfCommonPopUp(function (ref) {
        if (ref != null && ref[0] != "N/A") {
          ds_master.setCellData(row, "shipClntCd", ref[0]);
          ds_master.setCellData(row, "shipClntNm", ref[1]);
        }
      }, '', '', null, null, null, null, null, null, null);
      break;
    case "commClntNm":
      udc_commonPop.setSelectId('retrieveClntCrnList');
      udc_commonPop.cfCommonPopUp(function (ref) {
        if (ref != null && ref[0] != "N/A") {
          ds_master.setCellData(row, "commClntCd", ref[0]);
          ds_master.setCellData(row, "commClntNm", ref[1]);
        }
      }, '', '', null, null, null, null, null, null, null);
      break;
    //  case "wrkIntendDt":
    //  cfOpenCalendar(gr_master, row, colid);
    //  break;           
    //  case "wrkStIntendDt":
    //  cfOpenCalendar(gr_master, row, colid);
    //  break;
    //  case "wrkEndIntendDt":
    //  cfOpenCalendar(gr_master, row, colid);
    //  break;
  }
  ;
};
scwin.gr_master_onafteredit = function (row, columnIndex, value) {
  var colid = gr_master.getColumnID(columnIndex);
  switch (colid) {
    case "shipCnt":
      if (ds_master.getCellData(row, "shipCnt") == "") {
        ds_master.setCellData(row, "shipCnt", 0);
      }
      break;
    case "wt":
      if (ds_master.getCellData(row, "wt") == "") {
        ds_master.setCellData(row, "wt", 0);
      }
      break;
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'title',src:'/cm/xml/contentHeader.xml',style:'','ev:onwframeload':'scwin.title_onwframeload'}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:' w200',editType:'select',id:'acb_lobran',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'',mandatory:'true',title:'점소','ev:onchange':'scwin.acb_lobran_onchange',emptyIndex:'-1',emptyItem:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'부산지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'인천지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'4AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'영남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'6BB'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당진평택지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전남지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5AA'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'동해지사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2AA'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업투입예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_wrkIntendDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkIntendStDt',edToId:'ica_wrkIntendEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{codeId:'',nameId:'',popupID:'',selectID:'',skipOnBlurCodeValueEmpty:'Y',skipOnBlurNameValueEmpty:'Y',style:'display: none;',validTitle:'',id:'udc_commonPop'}}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_ResetCon'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'지사부두별작업예정정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrdBtn',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.excelDown',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',rowStatusVisible:'true','ev:oncellindexchange':'scwin.gr_master_oncellindexchange','ev:ontextimageclick':'scwin.gr_master_ontextimageclick',visibleRowNum:'15',visibleRowNumFix:'true','ev:onafteredit':'scwin.gr_master_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'순번',width:'70',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'작업투입<br/>예정일',width:'100',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'지사',width:'80',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'부두',width:'80',colSpan:'',rowSpan:'2',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'구분',width:'70',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'모선(DWT)',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래처',width:'210',colSpan:'3',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'모선수',width:'100',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'대표화종',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'모선작업<br/>총물량',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'단위',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column33',value:'작업기간',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'삭제<br/>여부',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column27',value:'비고',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label',value:'선사'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label',value:'에이전시'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',displayMode:'label',value:'화주'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column47',displayMode:'label',value:'시작예정일'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',displayMode:'label',value:'종료예정일'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkIntendDt',inputType:'calendar',width:'100',dataType:'date',dateValidSet:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'autoComplete',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pierNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cargoClsCd',inputType:'autoComplete',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslDwt',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'agencyClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shipClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shipCnt',inputType:'text',width:'100',textAlign:'left',defaultValue:'0',maxLength:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',displayFormat:'#,###[floor]',dataType:'number',defaultValue:'0',maxLength:'15'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',id:'unitCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'wrkStIntendDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'wrkEndIntendDt',displayMode:'label',dataType:'date'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'delYn',displayMode:'label',customFormatter:'scwin.delFormatter',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows1',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn',gridID:'gr_master',btnRowAddYn:'Y',btnRowDelYn:'Y',btnCancelYn:'Y',btnDelYn:'N',EngYn:'N',rowAddUserAuth:'C',cancelUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.addRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})