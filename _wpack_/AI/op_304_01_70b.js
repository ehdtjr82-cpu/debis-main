/*amd /AI/op_304_01_70b.xml 20043 a6cf9e0cc48f333ca5b516127514c0257d60a41be4a1dbe98e4c476bd0662b7a */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selpchItemCd',name:'요율항목코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BillingrateDTOList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'운송모드계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictNm',name:'출발권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictNm',name:'도착권역명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtTrf',name:'기준계약요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newCtrtTrf',name:'변경요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liftIncluYn',name:'Lift포함여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_update',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selpchItemCd',name:'항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtWrkPathSeq',name:'계약작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transMdCtrtTrfSeq',name:'운송모드계약요율순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDistrictCd',name:'출발권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDistrictCd',name:'도착권역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'unitCd',name:'단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtTrf',name:'요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newCtrtTrf',name:'변경요율',dataType:'text'}},{T:1,N:'w2:column',A:{id:'liftincluYn',name:'Lift포함여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'orgCtrtTrf',name:'기준계약요율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveKnaufBillingrateListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_Query","key":"IN_DS1"},{"id":"ds_BillingrateDTOList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_BillingrateDTOList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.transwrkrslts.SaveKnaufBillingrateCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"ds_update","key":"IN_DS1"}]',target:'data:json,[]','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'scwin.sbm_save_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.sUserId = $c.ses.getUserId();
scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.onpageload = function () {
  scwin.f_setting();
  gr_BillingrateDTOList.setReadOnly("grid", false);
};
scwin.f_setting = function () {
  if (scwin.sUserId == "150105") {
    lc_selpchItemCd.removeItem(1);
    lc_selpchItemCd.removeItem(1);
    lc_selpchItemCd.setValue("0161");
  } else if (scwin.sUserId == "071523") {
    lc_selpchItemCd.removeItem(0);
    lc_selpchItemCd.setValue("0163");
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.f_Retrieve = async function () {
  await $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_BillingrateDTOList.getRowCount() == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  gr_BillingrateDTOList.setColumnProp("chk", "headCheck", false);
};
scwin.sbm_retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.btn_settingData_onclick = function (e) {
  scwin.f_settingData();
};
scwin.f_settingData = async function () {
  let newData = txt_newData.getValue();
  let newData1 = txt_newData1.getValue();
  let newData2 = txt_newData2.getValue();
  if (newData == "") {
    await $c.win.alert($p, "변경할 데이터를 입력 해 주세요");
    return;
  }
  newData = parseFloat(newData);
  newData1 = parseFloat(newData1);
  newData2 = parseFloat(newData2);
  for (let i = 0; i < ds_BillingrateDTOList.getRowCount(); i++) {
    if (ds_BillingrateDTOList.getCellData(i, "selpchItemCd") == "0182") {
      if (parseFloat(ds_BillingrateDTOList.getCellData(i, "ctrtTrf")) > 1) {
        let orgCtrtTrf = parseFloat(ds_BillingrateDTOList.getCellData(i, "orgCtrtTrf"));
        ds_BillingrateDTOList.setCellData(i, "newCtrtTrf", Math.round((orgCtrtTrf + orgCtrtTrf * newData + orgCtrtTrf * newData1 * newData2) * 0.75 * 100) / 100);
        ds_BillingrateDTOList.setCellData(i, "chk", "T");
      }
    } else {
      if (parseFloat(ds_BillingrateDTOList.getCellData(i, "ctrtTrf")) > 1) {
        let orgCtrtTrf = parseFloat(ds_BillingrateDTOList.getCellData(i, "orgCtrtTrf"));
        ds_BillingrateDTOList.setCellData(i, "newCtrtTrf", Math.round((orgCtrtTrf + orgCtrtTrf * newData + orgCtrtTrf * newData1 * newData2) * 100) / 100);
        ds_BillingrateDTOList.setCellData(i, "chk", "T");
      }
    }
  }
};
scwin.btn_Save_onclick = function (e) {
  scwin.f_Save();
};
scwin.f_Save = async function () {
  if (!ds_BillingrateDTOList.isUpdated()) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  ds_update.removeAll();
  let cnt = 0;
  for (let i = 0; i < ds_BillingrateDTOList.getRowCount(); i++) {
    if ("T" == ds_BillingrateDTOList.getCellData(i, "chk")) {
      let newRowIdx = ds_update.insertRow();
      ds_update.setCellData(newRowIdx, "ctrtNo", ds_BillingrateDTOList.getCellData(i, "ctrtNo"));
      ds_update.setCellData(newRowIdx, "selpchItemCd", ds_BillingrateDTOList.getCellData(i, "selpchItemCd"));
      ds_update.setCellData(newRowIdx, "ctrtWrkPathSeq", ds_BillingrateDTOList.getCellData(i, "ctrtWrkPathSeq"));
      ds_update.setCellData(newRowIdx, "transMdCtrtTrfSeq", ds_BillingrateDTOList.getCellData(i, "transMdCtrtTrfSeq"));
      ds_update.setCellData(newRowIdx, "dptDistrictCd", ds_BillingrateDTOList.getCellData(i, "dptDistrictCd"));
      ds_update.setCellData(newRowIdx, "arvDistrictCd", ds_BillingrateDTOList.getCellData(i, "arvDistrictCd"));
      ds_update.setCellData(newRowIdx, "commCd", ds_BillingrateDTOList.getCellData(i, "commCd"));
      ds_update.setCellData(newRowIdx, "unitCd", ds_BillingrateDTOList.getCellData(i, "unitCd"));
      ds_update.setCellData(newRowIdx, "crcCd", ds_BillingrateDTOList.getCellData(i, "crcCd"));
      ds_update.setCellData(newRowIdx, "ctrtTrf", ds_BillingrateDTOList.getCellData(i, "ctrtTrf"));
      ds_update.setCellData(newRowIdx, "newCtrtTrf", ds_BillingrateDTOList.getCellData(i, "newCtrtTrf"));
      ds_update.setCellData(newRowIdx, "liftincluYn", ds_BillingrateDTOList.getCellData(i, "liftIncluYn"));
      cnt++;
    }
  }
  let chk = await $c.win.confirm($p, cnt + "건의 변경된 데이터를 저장 하시겠습니까?");
  if (chk) {
    await $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  await $c.win.alert($p, "저장하였습니다.");
  scwin.f_Retrieve();
  txt_newData.setValue("");
};
scwin.sbm_save_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = ds_BillingrateDTOList.getRowCount();
  let sheetTitle = "청구요율일괄변경";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xlsx",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_grdHeiht = function (gridNm, size) {
  let strHeight = gridNm.style.height;
  let intHeight = parseInt(strHeight.replace("px", ""));
  intHeight = intHeight + size;
  if (intHeight > 0) {
    gridNm.style.height = intHeight + "px";
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_ctrtNo',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_Query.ctrtNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'요율항목',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_selpchItemCd',search:'start',style:'width:200px;',submenuSize:'auto',ref:'data:ds_Query.selpchItemCd',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'크나우프 청구요율 조회 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'단가인상율',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_newData',placeholder:'',class:'tac'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'지수',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_newData1',placeholder:'',class:'tac'}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'소비자지수',class:''}},{T:1,N:'xf:input',A:{style:'width:100px;',id:'txt_newData2',placeholder:'',class:'tac'}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_settingData',type:'button',class:'btn','ev:onclick':'scwin.btn_settingData_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'일괄셋팅'}]}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_BillingrateDTOList',id:'gr_BillingrateDTOList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',value:'계약번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',value:'항목코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',value:'항목명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',value:'계약작업경로순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transMdCtrtTrfSeq',inputType:'text',value:'운송모드계약요율순번',width:'150',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',value:'출발권역코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',value:'출발권역명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',value:'도착권역코드',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',value:'도착권역명',width:'120'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',value:'단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',value:'통화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf',value:'요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orgCtrtTrf',value:'기준계약요율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newCtrtTrf',value:'변경요율',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'liftIncluYn',value:'Lift포함여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',fixColumnWidth:'true',trueValue:'T',falseValue:'F',defaultValue:'F',emptyValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemCd',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selpchItemNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtWrkPathSeq',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transMdCtrtTrfSeq',inputType:'text',width:'150',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDistrictNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictCd',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDistrictNm',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crcCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ctrtTrf',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'orgCtrtTrf',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'newCtrtTrf',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.2',displayFormat:'#,##0.00'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'liftIncluYn',value:'',displayMode:'label',readOnly:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column33',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Save_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})