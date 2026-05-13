/*amd /ui/ds/op/wrkplan/railroadwrkplan/op_203_01_14f.xml 30065 1e30566472b4e539f851f6543b0b2b14840020ec3a87e3763edffe21ca1524ef */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shippingm',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shippingNo',name:'선적번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'supplier',name:'공급사',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'vol',name:'물량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'shippingPort',name:'선적항(ZZ002:OP652)',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'shippingIntendDt',name:'선적예정일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arrvPort',name:'도착항(ZZ002:OP653)',dataType:'text',defaultValue:'',length:'10'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'qurntCompDt',name:'검역완료일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'qltStdInspDt',name:'품질규격검사일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'cstmclrncDt',name:'통관완료일',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'averageWt',name:'평균중량',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'vslVyg',name:'선명항차',dataType:'text',defaultValue:'',length:'44'}},{T:1,N:'w2:column',A:{id:'regYn',name:'등록여부',dataType:'text',defaultValue:'',length:'8'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_shippingd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'shippingNo',name:'선적번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'planActCls',name:'구분(0:예정,1:실행)',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'shippingSeq',name:'순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'transMd',name:'운송모드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'pathCd',name:'경로(ZZ002:OP654)',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'dptVol',name:'출발지물량',dataType:'number',defaultValue:'0',length:'17'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'arvVol',name:'도착지물량',dataType:'number',defaultValue:'0',length:'17'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_condition',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_detail',action:'/ds.op.wrkplan.railroadwrkplan.RetrieveKoenTransPlanDetailInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_shippingd","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_shippingd","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.railroadwrkplan.SaveKoenTransPlanInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_shippingm","key":"IN_DS1"},{"action":"modified","id":"ds_shippingd","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.preRow = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP651",
    compID: "gr_shippingm:supplier"
  },
  // 공급사
  {
    grpCd: "OP652",
    compID: "gr_shippingm:shippingPort"
  },
  // 선적항
  {
    grpCd: "OP653",
    compID: "gr_shippingm:arrvPort"
  },
  // 도착항
  {
    grpCd: "OP658",
    compID: "gr_shippingd:transMd"
  },
  // 운송모드
  {
    grpCd: "OP654",
    compID: "gr_shippingd:pathCd"
  },
  // 경로
  {
    grpCd: "OP655",
    compID: "gr_shippingd:dptWrkPlCd"
  },
  // 출발지
  {
    grpCd: "OP656",
    compID: "gr_shippingd:arvWrkPlCd"
  } // 도착지
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_shippingm);
  scwin.f_SetGridColumnMaxLength(gr_shippingd);
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 상세 조회
//-------------------------------------------------------------------------
scwin.f_detail = function () {
  $c.sbm.execute($p, sbm_detail);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_addrow = function (param) {
  if (param == 'm') {
    $c.data.insertRow($p, gr_shippingm);
    //ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "planActCls", parent.rd_planActCls.getValue());
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "planActCls", ds_condition.getCellData(0, "planActCls"));
  } else if (param == 'd') {
    if (ds_shippingm.getCellData(ds_shippingm.getRowPosition(), "shippingNo") == "" || ds_shippingm.getCellData(ds_shippingm.getRowPosition(), "shippingNo") == undefined) {
      $c.win.alert($p, "운송계획M의 선적번호를 입력하세요");
    } else {
      $c.data.insertRow($p, gr_shippingd);
      ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "planActCls", ds_shippingm.getCellData(ds_shippingm.getRowPosition(), "planActCls"));
      ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "shippingNo", ds_shippingm.getCellData(ds_shippingm.getRowPosition(), "shippingNo"));
      ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "arvWrkPlCd", "01");
    }
  }
};

//-------------------------------------------------------------------------
// 행복사
//-------------------------------------------------------------------------
scwin.f_copyrow = function (param) {
  if (param == 'm') {
    if (ds_shippingm.getRowCount() == 0) {
      $c.win.alert($p, "복사할 행이 없습니다.");
      return false;
    }
    scwin.preRow = ds_shippingm.getRowPosition();
    scwin.f_addrow('m');
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "planActCls", ds_shippingm.getCellData(scwin.preRow, "planActCls"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "supplier", ds_shippingm.getCellData(scwin.preRow, "supplier"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "vol", ds_shippingm.getCellData(scwin.preRow, "vol"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "blNo", ds_shippingm.getCellData(scwin.preRow, "blNo"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "shippingPort", ds_shippingm.getCellData(scwin.preRow, "shippingPort"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "shippingIntendDt", ds_shippingm.getCellData(scwin.preRow, "shippingIntendDt"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "arrvPort", ds_shippingm.getCellData(scwin.preRow, "arrvPort"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "arvIntendDt", ds_shippingm.getCellData(scwin.preRow, "arvIntendDt"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "qurntCompDt", ds_shippingm.getCellData(scwin.preRow, "qurntCompDt"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "qltStdInspDt", ds_shippingm.getCellData(scwin.preRow, "qltStdInspDt"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "cstmclrncDt", ds_shippingm.getCellData(scwin.preRow, "cstmclrncDt"));
    ds_shippingm.setCellData(ds_shippingm.getRowPosition(), "shippingNo", ds_shippingm.getCellData(scwin.preRow, "shippingNo"));
  } else if (param == 'd') {
    if (ds_shippingd.getRowCount() == 0) {
      $c.win.alert($p, "복사할 행이 없습니다.");
      return false;
    }
    scwin.preRow = ds_shippingd.getRowPosition();
    scwin.f_addrow('d');
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "planActCls", ds_shippingd.getCellData(scwin.preRow, "planActCls"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "shippingNo", ds_shippingd.getCellData(scwin.preRow, "shippingNo"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "transMd", ds_shippingd.getCellData(scwin.preRow, "transMd"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "pathCd", ds_shippingd.getCellData(scwin.preRow, "pathCd"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "dptWrkPlCd", ds_shippingd.getCellData(scwin.preRow, "dptWrkPlCd"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "dptDt", ds_shippingd.getCellData(scwin.preRow, "dptDt"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "dptVol", ds_shippingd.getCellData(scwin.preRow, "dptVol"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "arvWrkPlCd", ds_shippingd.getCellData(scwin.preRow, "arvWrkPlCd"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "arvDt", ds_shippingd.getCellData(scwin.preRow, "arvDt"));
    ds_shippingd.setCellData(ds_shippingd.getRowPosition(), "arvVol", ds_shippingd.getCellData(scwin.preRow, "arvVol"));
  }
};
scwin.f_Save = async function () {
  let ret = "";

  // 필수입력사항 확인
  ret = await $c.gus.cfValidate($p, [gr_shippingm]);
  if (!ret) {
    return;
  }

  // 해운내역 입력값 체크
  for (var i = 0; i < ds_shippingm.getRowCount(); i++) {
    if (ds_shippingm.getRowStatus(i) == "C") {
      // insert
      if (ds_shippingm.getCellData(i, "planActCls") == "" || ds_shippingm.getCellData(i, "supplier") == "" || ds_shippingm.getCellData(i, "vol") == "" || ds_shippingm.getCellData(i, "shippingPort") == "" || ds_shippingm.getCellData(i, "shippingIntendDt") == "" || ds_shippingm.getCellData(i, "arrvPort") == "" || ds_shippingm.getCellData(i, "arvIntendDt") == "" || ds_shippingm.getCellData(i, "qurntCompDt") == "" || ds_shippingm.getCellData(i, "qltStdInspDt") == "" || ds_shippingm.getCellData(i, "cstmclrncDt") == "" || ds_shippingm.getCellData(i, "shippingNo") == "") {
        ret = await $c.win.confirm($p, "저장하려는 행 중에 빠진 값들이 있습니다. 그래도 진행하시겠습니까?.");
        if (ret) {
          break;
        } else {
          return false;
        }
      }
    }
  }
  ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 상세조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_detail_submitdone = function (e) {
  tbx_totalRows2.setValue(ds_shippingd.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $p.parent().scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 해운내역 그리드 cell click
//-------------------------------------------------------------------------
scwin.gr_shippingm_oncellclick = function (rowIndex, columnIndex, columnId) {
  ds_condition.setCellData(0, "shippingNo", ds_shippingm.getCellData(rowIndex, "shippingNo"));
  ds_condition.setCellData(0, "planActCls", ds_shippingm.getCellData(rowIndex, "planActCls"));
  scwin.f_detail();
};

//-------------------------------------------------------------------------
// 해운내역 그리드 운송내역 등록여부 customFormatter
//-------------------------------------------------------------------------
scwin.regYnExp = function (data, formatData, rowIdx, colIdx) {
  if (data != "등록") {
    gr_shippingm.setCellStyle(rowIdx, colIdx, "background-color", "yellow");
  } else {
    gr_shippingm.setCellStyle(rowIdx, colIdx, "background-color", "white");
  }
  return data;
};

//-------------------------------------------------------------------------
// 운송내역 그리드 : 구분 displayFormatter
//-------------------------------------------------------------------------
scwin.planActClsExp = function (data) {
  return $c.gus.decode($p, data, "0", "계획", "실행");
};

//-------------------------------------------------------------------------
// 해운내역 그리드 행추가 버튼
//-------------------------------------------------------------------------
scwin.addrow1 = function () {
  scwin.f_addrow('m');
};

//-------------------------------------------------------------------------
// 운송내역 그리드 행추가 버튼
//-------------------------------------------------------------------------
scwin.addrow2 = function () {
  scwin.f_addrow('d');
};
scwin.gr_shippingd_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_shippingd.getColumnID(columnIndex);
  let row = rowIndex;
  if (colid == "pathCd") {
    var pathCd = ds_shippingd.getCellData(row, colid);
    if (pathCd == "01" || pathCd == "02" || pathCd == "03") {
      ds_shippingd.setCellData(row, "dptWrkPlCd", "01");
    } else if (pathCd == "04") {
      ds_shippingd.setCellData(row, "dptWrkPlCd", "02");
    } else if (pathCd == "05" || pathCd == "06" || pathCd == "07") {
      ds_shippingd.setCellData(row, "dptWrkPlCd", "03");
    } else if (pathCd == "08") {
      ds_shippingd.setCellData(row, "dptWrkPlCd", "04");
    }
    if (pathCd == "01" || pathCd == "02" || pathCd == "03" || pathCd == "05" || pathCd == "06" || pathCd == "07") {
      ds_shippingd.setCellData(row, "transMd", "01");
    } else {
      ds_shippingd.setCellData(row, "transMd", "02");
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'해운내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"운송계획M.xlsx","sheetName":"운송계획M","type":"2+4+8+16"}',gridUpYn:'N',templateYn:'N',gridID:'gr_shippingm'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_shippingm',style:'',autoFit:'allColumn',id:'gr_shippingm',class:'wq_gvw',visibleRowNum:'4',visibleRowNumFix:'true',rowStatusVisible:'true',readOnly:'false','ev:oncellclick':'scwin.gr_shippingm_oncellclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column1',value:'운송내역<br/>등록여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'선적<br/>번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'공급사',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'물량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column9',value:'W/T<br/>(TON)1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column3',value:'평균중량<br/>(TON)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'BL번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'선명/항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'선적항',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'선적예정일',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column55',value:'도착항',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'도착예정일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'검역/방역<br/>완료일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'품질규격<br/>검사일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'통관완료일',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'regYn',displayMode:'label',customFormatter:'scwin.regYnExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'planActCls',displayMode:'label',readOnly:'false'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'계획'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shippingNo',displayMode:'label',textAlign:'left',readOnly:'false',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'supplier',displayMode:'label',textAlign:'left',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vol',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'averageWt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,###.##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blNo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vslVyg',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'shippingPort',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'shippingIntendDt',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'arrvPort',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'arvIntendDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'qurntCompDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'qltStdInspDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'cstmclrncDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column26',displayMode:'label',textAlign:'right',expression:'sum(\'vol\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyRow1',type:'button',class:'btn sm',objType:'data','ev:onclick':'scwin.f_copyrow(\'m\')'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn1',btnDelYn:'N',rowAddObjType:'data',rowDelObjType:'data',cancelObjType:'data',gridID:'gr_shippingm',rowAddFunction:'scwin.addrow1',btnCancelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'운송내역',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',grdDownOpts:'{"fileName":"운송계획D.xlsx","sheetName":"운송계획D","type":"2+4+8+16"}',gridID:'gr_shippingd',templateYn:'N',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section2',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',dataList:'data:ds_shippingd',style:'',autoFit:'allColumn',id:'gr_shippingd',class:'wq_gvw',visibleRowNum:'4',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_shippingd_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column1',value:'구분',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'선적번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'운송모드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column11',value:'경로',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column9',value:'출발지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column3',value:'출발일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column5',value:'물량',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column7',value:'도착지',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column19',value:'도착일',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'물량',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'planActCls',displayMode:'label',displayFormatter:'scwin.planActClsExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shippingNo',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'shippingSeq',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'select',id:'transMd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'select',id:'pathCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'dptWrkPlCd',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'dptDt',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dptVol',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'select',id:'arvWrkPlCd',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'calendar',id:'arvDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arvVol',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',expression:'sum(\'dptVol\')',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',id:'column33',displayMode:'label',textAlign:'right',expression:'sum(\'arvVol\')',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_copyRow2',type:'button',class:'btn sm','ev:onclick':'scwin.f_copyrow(\'d\')',objType:'data'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_bottomGrdBtn2',btnDelYn:'N',rowAddFunction:'scwin.addrow2',gridID:'gr_shippingd',rowDelObjType:'data',cancelObjType:'data',rowAddObjType:'data',btnCancelYn:'Y'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btnbox'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]})