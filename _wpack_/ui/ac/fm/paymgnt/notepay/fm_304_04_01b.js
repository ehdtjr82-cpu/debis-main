/*amd /ui/ac/fm/paymgnt/notepay/fm_304_04_01b.xml 21961 f3223bd54d49d780f6e0c3f20b341edd8ba2d98c02ee80869ff17058616174b6 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grid_draftCheckClsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_grid_draftStsCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'draftCheckClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'prtBank',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recDt',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recStDt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'recEndDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueStDt',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueEndDt',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNo',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftStsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'scClsCd',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dueSlipNo',name:'name12',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoFrom',name:'name13',dataType:'text'}},{T:1,N:'w2:key',A:{id:'draftCheckNoTo',name:'name14',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_disuse',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'draftCheckNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bfDraftStsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftStsCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'issueBankNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'recDt',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueDt',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'disuseDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckAmt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipNo',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dueSlipSeq',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'draftCheckDesc',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'refDraftCheckNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'payBankbookNo',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selYn',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cumulDraftAmt',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outbrSummary',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'name29',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveDraft',action:'/ac.fm.paymgnt.notepay.RetrieveDraftCheckContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_disuse","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_disuse","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_disuseDraft',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_disuse","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.comboRtnFlag01;
scwin.interval01;
scwin.NEW;
scwin.GENUIN;
scwin.BLNK;
scwin.ACCMO;
scwin.DUE;
scwin.DISUSE;
scwin.b_disusegb;
scwin.g_sCurrDate;
scwin.onpageload = function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  const codeOptions1 = [{
    grpCd: "FM012",
    compID: "lc_draft_check_cls_cd"
  },
  //구분 코드셋팅처리. 
  {
    grpCd: "FM013",
    compID: "lc_srchdraftStsCd"
  } //그리드의 상태 코드셋팅처리. 
  ];
  $c.data.setCommonCode($p, codeOptions1, scwin.commonCodeCallBack01);
  scwin.interval01 = setInterval(async function () {
    if (scwin.comboRtnFlag01 == true) {
      clearInterval(scwin.interval01);
      //초기화
      await scwin.initOnload();
    }
  }, 300);
};
scwin.initSetVal = function () {
  scwin.NEW = "01"; // 신규
  scwin.GENUIN = "02"; // 진성
  scwin.BLNK = "03"; // 견질
  scwin.ACCMO = "04"; // 융통
  scwin.DUE = "05"; // 만기   
  scwin.DISUSE = "06"; // 폐기

  scwin.b_disusegb = false;
  scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
};
scwin.commonCodeCallBack01 = function () {
  let ds_obj = $p.getComponentById(lc_draft_check_cls_cd.getDataListInfo().id);
  for (var i = 0; i < ds_obj.getRowCount(); i++) {
    ds_grid_draftCheckClsCd.insertRow(i);
    ds_grid_draftCheckClsCd.setCellData(i, "cd", ds_obj.getCellData(i, "cd"));
    ds_grid_draftCheckClsCd.setCellData(i, "cdNm", ds_obj.getCellData(i, "cdNm"));
  }
  ds_obj.setColumnFilter({
    type: 'regExp',
    colIndex: 'fltrCd1',
    key: /10/gi,
    condition: 'and'
  });
  ds_obj.insertRow(0);
  ds_obj.setCellData(0, "cd", "");
  ds_obj.setCellData(0, "cdNm", "전체");
  lc_draft_check_cls_cd.setSelectedIndex(0);
  ds_obj = $p.getComponentById(lc_srchdraftStsCd.getDataListInfo().id);
  for (var i = 0; i < ds_obj.getRowCount(); i++) {
    ds_grid_draftStsCd.insertRow(i);
    ds_grid_draftStsCd.setCellData(i, "cd", ds_obj.getCellData(i, "cd"));
    ds_grid_draftStsCd.setCellData(i, "cdNm", ds_obj.getCellData(i, "cdNm"));
  }
  ds_obj.setColumnFilter({
    type: 'regExp',
    colIndex: 'fltrCd3',
    key: /30/gi,
    condition: 'and'
  });
  ds_obj.insertRow(0);
  ds_obj.setCellData(0, "cd", "");
  ds_obj.setCellData(0, "cdNm", "전체");
  lc_srchdraftStsCd.setSelectedIndex(0);
  scwin.comboRtnFlag01 = true;
};
scwin.initOnload = async function () {
  ica_srchrecDt.setValue(scwin.g_sCurrDate);
};

//-------------------------------------------------------------------------
// 폐기처리
//-------------------------------------------------------------------------
scwin.f_Disuse = async function () {
  scwin.b_disusegb = true;
  var cnt = 0;
  var i = 0;
  if (ds_disuse.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return false;
  } else {
    for (i = 0; i < ds_disuse.getRowCount(); i++) {
      if (Number(ds_disuse.getCellData(i, "selYn")) > 0) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "폐기처리할 자료를 선택하십시오");
      return false;
    }
    for (i = 0; i < ds_disuse.getRowCount(); i++) {
      // 폐기일자 오늘일자 넣어주는거 손현정씨 요청으로 제외 하고 알아서 넣어주기, 그렇지 않으면 에러메시지 출력
      if (ds_disuse.getCellData(i, "disuseDt") == '' && ds_disuse.getCellData(i, "selYn") == "1") {
        await $c.win.alert($p, i + 1 + "번째 행 폐기일자를 입력해 주세요");
        return false;
      }
      if (Number(ds_disuse.getCellData(i, "recDt")) > Number(ds_disuse.getCellData(i, "disuseDt")) && ds_disuse.getCellData(i, "selYn") == "1") {
        await $c.win.alert($p, i + 1 + "번째 행 폐기일자가 수취일자 보다 더 작습니다.");
        return false;
      }
      if (Number(ds_disuse.getCellData(i, "disuseDt")) > Number(scwin.g_sCurrDate) && ds_disuse.getCellData(i, "selYn") == "1") {
        await $c.win.alert($p, i + 1 + "번째 행 폐기일자가 오늘 일자보다 더 큽니다.");
        return false;
      }
    }
    let ret = await $c.gus.cfValidate($p, [gr_disuse]);
    if (ret) {
      let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (confirmResult) {
        for (i = 0; i < ds_disuse.getRowCount(); i++) {
          if (Number(ds_disuse.getCellData(i, "selYn")) > 0) {
            ds_disuse.setCellData(i, "bfDraftStsCd", ds_disuse.getCellData(i, "draftStsCd"));
            ds_disuse.setCellData(i, "draftStsCd", scwin.DISUSE); // 상태값 수취 -> 폐기
          }
        }
        sbm_disuseDraft.action = "/ac.fm.paymgnt.notepay.ProcessDraftCheckDisuseCMD.do";

        //submit 처리.
        let objSubmit = await $c.sbm.execute($p, sbm_disuseDraft);
        if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_disuseDraft_submitdone();
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// 폐기취소
//-------------------------------------------------------------------------
scwin.f_Cancel = async function () {
  scwin.b_disusegb = false;
  var cnt = 0;
  var i = 0;
  if (ds_disuse.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return false;
  } else {
    for (i = 0; i < ds_disuse.getRowCount(); i++) {
      if (Number(ds_disuse.getCellData(i, "selYn")) > 0) {
        cnt++;
      }
    }
    if (cnt <= 0) {
      await $c.win.alert($p, "폐기처리할 자료를 선택하십시오");
      return false;
    }
    let ret = await $c.gus.cfValidate($p, [gr_disuse]);
    if (ret) {
      let confirmResult = await $c.win.confirm($p, MSG_CM_CRM_001);
      if (confirmResult) {
        for (i = 0; i < ds_disuse.getRowCount(); i++) {
          if (Number(ds_disuse.getCellData(i, "selYn")) > 0) {
            ds_disuse.setCellData(i, "draftStsCd", ds_disuse.getCellData(i, "bfDraftStsCd"));
            ds_disuse.setCellData(i, "bfDraftStsCd", scwin.DISUSE);
            ds_disuse.setCellData(i, "disuseDt", "");
          }
        }
        sbm_disuseDraft.action = "/ac.fm.paymgnt.notepay.CancelDraftCheckDisuseCMD.do";

        //submit 처리.
        let objSubmit = await $c.sbm.execute($p, sbm_disuseDraft);
        if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
          await scwin.sbm_disuseDraft_submitdone();
        }
      }
    }
  }
};
scwin.sbm_disuseDraft_submitdone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  $c.gus.cfDisableObjects($p, [btn_disuse, btn_cancel]);
  await scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  dma_condition.set("scClsCd", "2");

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_retrieveDraft);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_retrieveDraft_submitdone();
  }
};
scwin.sbm_retrieveDraft_submitdone = async function (e) {
  tbx_totalRows.setValue(ds_disuse.getRowCount());
  if (ds_disuse.getRowCount() == 0) {
    await $c.win.alert($p, MSG_CM_ERR_003);
    return false;
  }
  if (lc_srchdraftStsCd.getValue() == scwin.DISUSE) {
    $c.gus.cfEnableObjects($p, [btn_cancel]);
    $c.gus.cfDisableObjects($p, [btn_disuse]);
    gr_disuse.setReadOnly("column", "disuseDt", true);
  } else if (lc_srchdraftStsCd.getValue() == scwin.NEW || lc_srchdraftStsCd.getValue() == scwin.BLNK) {
    $c.gus.cfEnableObjects($p, [btn_disuse]);
    $c.gus.cfDisableObjects($p, [btn_cancel]);
    gr_disuse.setReadOnly("column", "disuseDt", false);
  } else {
    $c.gus.cfDisableObjects($p, [btn_disuse, btn_cancel]);
    gr_disuse.setReadOnly("column", "disuseDt", true);
  }
  if (lc_srchdraftStsCd.getValue() == scwin.NEW) {
    gr_disuse.setHeaderClass("column22", "txt-red");
  } else {
    gr_disuse.removeHeaderClass("column22", "txt-red");
  }

  //gr_disuse.ColumnProp('selYn', 'HeadCheck') = "FALSE"
};

//-------------------------------------------							
// 그리드 데이터 엑셀로 다운							
//-------------------------------------------	
scwin.f_runExcel = async function () {
  var totCnt = ds_disuse.getRowCount();
  var sheetTitle = "어음수표폐기처리 ";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle,
        sheetName: sheetTitle,
        type: 1,
        //footerColor: '#D4DAE2',
        useStyle: true
      };
      $c.data.downloadGridViewExcel($p, gr_disuse, options);
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.tbx_totalRows_onclick = function (e) {
  debugger;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_draft_check_cls_cd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'data:dma_condition.draftCheckClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'어음수표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srchdraftCheckNo',style:'width: 150px;',ref:'data:dma_condition.draftCheckNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수취일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_srchrecDt',style:'',displayFormat:'yyyy/MM/dd',ref:'data:dma_condition.recDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_srchdraftStsCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'data:dma_condition.draftStsCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_disuse',id:'udc_topGrd',gridUpYn:'N',templateYn:'N',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_disuse',focusMode:'row',id:'gr_disuse',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'true',rowStatusVisible:'true',rowStatusWidth:'20'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'구분',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'수취일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'어음수표번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'수취은행',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'발행일',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'폐기일자',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'selYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',falseValue:'0',trueValue:'1',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftCheckClsCd',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grid_draftCheckClsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'recDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftCheckNo',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'issueBankNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'draftStsCd',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_grid_draftStsCd'},E:[{T:1,N:'w2:label',A:{ref:'cdNm'}},{T:1,N:'w2:value',A:{ref:'cd'}}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtDt',inputType:'text',style:'',value:'',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'disuseDt',inputType:'calendar',style:'',value:'',width:'100',readOnly:'false',dataType:'date',displayFormat:'yyyy/MM/dd',viewTypeIconImage:'false',allowChar:'0-9'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span','ev:onclick':'scwin.tbx_totalRows_onclick'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_disuse',style:'',type:'button','ev:onclick':'scwin.f_Disuse'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폐기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_cancel',style:'',type:'button','ev:onclick':'scwin.f_Cancel'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'폐기취소'}]}]}]}]}]}]}]}]}]})