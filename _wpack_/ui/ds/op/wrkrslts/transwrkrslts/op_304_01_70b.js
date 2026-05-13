/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_70b.xml 23316 0f7fe00b5167baebbc27289e8e17d7d37eb04e53208526edb995c387a95d8fee */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BillingrateDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtTrf',name:'',dataType:''}},{T:1,N:'w2:column',A:{id:'newCtrtTrf',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liftIncluYn',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_update',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newCtrtTrf',name:'변경요율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'liftincluYn',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtTrf',name:'기준계약요율',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_selpchItemCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'codeNm',name:'name2',dataType:'text'}}]},{T:1,N:'w2:data',A:{use:'true'},E:[{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'0161'}]},{T:1,N:'codeNm',E:[{T:4,cdata:'공장수요가운송료'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'0163'}]},{T:1,N:'codeNm',E:[{T:4,cdata:'기지수요가운송료'}]}]},{T:1,N:'w2:row',E:[{T:1,N:'code',E:[{T:4,cdata:'0182'}]},{T:1,N:'codeNm',E:[{T:4,cdata:'회수운송료'}]}]}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveKnaufBillingrateListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_BillingrateDTOList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BillingrateDTOList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.transwrkrslts.SaveKnaufBillingrateCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_update","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 세션정보 가져오기
scwin.sUserId = "";
scwin.sUserClsCd = "";
scwin.strFromDate = "";
scwin.onpageload = function () {
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd");
  scwin.strFromDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  var codeOptions1 = [{
    method: "getLuxeComboData",
    param1: "TransResultsEBC",
    param2: "retrieveKnaufContractNumberTrans",
    compID: "acb_ctrtNo"
  }];
  $c.data.setGauceUtil($p, codeOptions1);
  ed_newData1.setValue(0.65);
  ed_newData2.setValue(0.025);
  scwin.f_setting();
};

//조회조건 초기화
scwin.f_FieldClear = function (e) {
  acb_ctrtNo.setValue("");
  scwin.f_setting();
  acb_ctrtNo.focus();
};

// 설정
scwin.f_setting = function () {
  if (scwin.sUserId == "150105") {
    // 조희웅대리 - 공장
    sb_selpchItemCd.showChooseOption(false);
    sb_selpchItemCd.setVisibleColumn("code", "0163");
    sb_selpchItemCd.setValue("0161");
  } else if (scwin.sUserId == "071523") {
    // 박근모과장 - 창고			
    sb_selpchItemCd.showChooseOption(false);
    sb_selpchItemCd.setVisibleColumn("code", "0161");
    sb_selpchItemCd.setValue("0163");
  } else {
    //        sb_selpchItemCd.showChooseOption(true);
    sb_selpchItemCd.setSelectedIndex(-1);
  }
};

// 조회
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

// 일괄셋팅   new data 에 셋팅 , check
scwin.f_settingData = function () {
  // var newData = scwin.wsNum(ed_newData.getValue());
  // var newData1 = scwin.wsNum(ed_newData1.getValue());
  // var newData2 = scwin.wsNum(ed_newData2.getValue());

  // if (newData == "") {
  // 	$c.win.alert("변경할 데이터를 입력 해 주세요");

  // 	return;
  // }
  // 
  // for (i = 0; i < ds_BillingrateDTOList.getRowCount(); i++) {

  // 	if (ds_BillingrateDTOList.getCellData(i, "selpchItemCd") == "0182") {  //회수반송료 일때 
  // 		if (ds_BillingrateDTOList.getCellData(i, "ctrtTrf") > 1) {
  // 			var orgCtrtTrf = ds_BillingrateDTOList.getCellData(i, "orgCtrtTrf");
  // 			ds_BillingrateDTOList.setCellData(i, "newCtrtTrf", Math.round(((orgCtrtTrf + (orgCtrtTrf * newData) + (orgCtrtTrf * newData1 * newData2)) * 0.75) * 100) / 100);
  // 			ds_BillingrateDTOList.setCellData(i, "chk", "1");
  // 		}

  // 	} else {
  // 		if (ds_BillingrateDTOList.getCellData(i, "ctrtTrf") > 1) {
  // 			var orgCtrtTrf = ds_BillingrateDTOList.getCellData(i, "orgCtrtTrf");
  // 			ds_BillingrateDTOList.setCellData(i, "newCtrtTrf", Math.round((orgCtrtTrf + (orgCtrtTrf * newData) + (orgCtrtTrf * newData1 * newData2)) * 100) / 100);
  // 			ds_BillingrateDTOList.setCellData(i, "chk", "1");
  // 		}
  // 	}
  // }

  var newData = $c.num.parseFloat($p, ed_newData.getValue(), 0);
  var newData1 = $c.num.parseFloat($p, ed_newData1.getValue(), 0);
  var newData2 = $c.num.parseFloat($p, ed_newData2.getValue(), 0);
  if (ed_newData.getValue() == "") {
    $c.win.alert($p, "변경할 데이터를 입력 해 주세요");
    ed_newData.focus();
    return;
  }
  for (var i = 0; i < ds_BillingrateDTOList.getRowCount(); i++) {
    if ($c.num.parseFloat($p, ds_BillingrateDTOList.getCellData(i, "ctrtTrf"), 0) > 1) {
      var orgCtrtTrf = $c.num.parseFloat($p, ds_BillingrateDTOList.getCellData(i, "orgCtrtTrf"), 0);
      var calcValue = orgCtrtTrf + orgCtrtTrf * newData + orgCtrtTrf * newData1 * newData2;

      // 회수반송료
      if (ds_BillingrateDTOList.getCellData(i, "selpchItemCd") === "0182") {
        calcValue = calcValue * 0.75;
      }
      ds_BillingrateDTOList.setCellData(i, "newCtrtTrf", Math.round(calcValue * 100) / 100);
      ds_BillingrateDTOList.setCellData(i, "chk", "T");
    }
  }
};
scwin.wsNum = function (v) {
  if (v === null || v === undefined || v === "") return 0;
  return parseFloat(String(v).replace(/,/g, "").trim()) || 0;
};

//저장
scwin.f_Save = async function () {
  // 변경된 사항이 있는지 확인.
  debugger;
  if (ds_BillingrateDTOList.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  ds_update.removeAll();
  var cnt = 0;
  for (i = 0; i <= ds_BillingrateDTOList.getRowCount(); i++) {
    if ("T" == ds_BillingrateDTOList.getCellData(i, "chk")) {
      let nRow = ds_update.insertRow();
      ds_update.setCellData(nRow, "ctrtNo", ds_BillingrateDTOList.getCellData(i, "ctrtNo"));
      ds_update.setCellData(nRow, "selpchItemCd", ds_BillingrateDTOList.getCellData(i, "selpchItemCd"));
      ds_update.setCellData(nRow, "ctrtWrkPathSeq", ds_BillingrateDTOList.getCellData(i, "ctrtWrkPathSeq"));
      ds_update.setCellData(nRow, "transMdCtrtTrfSeq", ds_BillingrateDTOList.getCellData(i, "transMdCtrtTrfSeq"));
      ds_update.setCellData(nRow, "dptDistrictCd", ds_BillingrateDTOList.getCellData(i, "dptDistrictCd"));
      ds_update.setCellData(nRow, "arvDistrictCd", ds_BillingrateDTOList.getCellData(i, "arvDistrictCd"));
      ds_update.setCellData(nRow, "commCd", ds_BillingrateDTOList.getCellData(i, "commCd"));
      ds_update.setCellData(nRow, "unitCd", ds_BillingrateDTOList.getCellData(i, "unitCd"));
      ds_update.setCellData(nRow, "crcCd", ds_BillingrateDTOList.getCellData(i, "crcCd"));
      ds_update.setCellData(nRow, "ctrtTrf", ds_BillingrateDTOList.getCellData(i, "ctrtTrf"));
      ds_update.setCellData(nRow, "newCtrtTrf", ds_BillingrateDTOList.getCellData(i, "newCtrtTrf"));
      ds_update.setCellData(nRow, "liftincluYn", ds_BillingrateDTOList.getCellData(i, "liftincluYn"));
      cnt++;
    }
  }
  let confirm = await $c.win.confirm($p, cnt + "건의 변경된 데이터를 저장 하시겠습니까?");
  if (!confirm) {
    return;
  }
  $c.sbm.execute($p, sbm_save);
};

//-------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------
scwin.f_runExcel = async function (varGrNm) {
  var totCnt = ds_BillingrateDTOList.getRowCount();
  var sheetTitle = "청구요율일괄변경";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle,
        sheetName: sheetTitle
      };
      $c.data.downloadGridViewExcel($p, gr_BillingrateDTOList, options);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_BillingrateDTOList.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  totalRows.setValue(ds_BillingrateDTOList.getRowCount());
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, "저장하였습니다.");
    scwin.f_Retrieve();
    ed_newData.setValue("");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'retrieveCond',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'tb_Cond',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_ctrtNo',search:'start',style:'width:200px;',submenuSize:'auto',allOption:'',chooseOption:'true',chooseOptionLabel:'전체',ref:'data:dma_Query.ctrtNo',searchTarget:'both',displayMode:'label delim value'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'sb_selpchItemCd',chooseOption:'',style:'width:200px; height:21px; ;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:'data:dma_Query.selpchItemCd',chooseOptionLabel:'$blank',valueNotInList:'keepValue',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_selpchItemCd'},E:[{T:1,N:'xf:label',A:{ref:'codeNm'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_selpchItemCd',search:'start',style:'width:200px;display:none;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 청구요율 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'단가인상율',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_newData',placeholder:'',class:'tac',allowChar:'a-zA-Z0-9',maxlength:'9',dataType:'number'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지수',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_newData1',placeholder:'',class:'tac',maxlength:'10',dataType:'number'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'소비자지수',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'ed_newData2',placeholder:'',class:'tac',maxlength:'10',dataType:'number'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_trigger1',type:'button',class:'btn','ev:onclick':'scwin.f_settingData'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄셋팅'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownUserAuth:'X',gridDownFn:'scwin.f_runExcel',gridID:'gr_BillingrateDTOList'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BillingrateDTOList',id:'gr_BillingrateDTOList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',rowStatusWidth:'20',rowStatusVisible:'true',fixedColumnNoMove:'true',fixedColumn:'1'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'30',fixColumnWidth:'true',excelCellType:'text',excelFormat:' ',value:' '}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'항목코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'항목명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'계약작업경로순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'운송모드계약요율순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'출발권역코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출발권역명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착권역코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'도착권역명',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column40',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'기준계약요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'변경요율',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column52',value:'Lift포함여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'30',fixColumnWidth:'true',readOnly:'false',trueValue:'T',falseValue:'F',dataType:'text',valueType:'other'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transMdCtrtTrfSeq',inputType:'text',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'120',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',excelCellType:'number',excelFormat:'#,##0.00',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orgCtrtTrf',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'true',excelCellType:'number',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newCtrtTrf',displayMode:'label',textAlign:'right',dataType:'number',readOnly:'false',maxLength:'5.2',displayFormat:'#0.00',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'liftIncluYn',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})