/*amd /AI/op_305_01_09b.xml 31093 e8dedb7761e03bc45c10f5cb44ca1f405755a9e1927998e4607f7fb3d05e621e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'dptDtFrom',name:'작업일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptDtTo',name:'작업일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transNmCd',name:'운송명의코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착역코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:key',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정미확정구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostSumList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'teu',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCount',name:'갯수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTrans',name:'하불임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTransR',name:'철송임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsOprR',name:'철송조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTestR',name:'철송검수비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsKoreoR',name:'(주)고려차량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsJeOnoffR',name:'자가영업상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptStn',name:'출발역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvStn',name:'도착역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adminfrtcarYn',name:'화차구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trnNo',name:'열차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'frtcarNo',name:'화차번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmClntCd',name:'운송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transNmCd',name:'운송명의',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypShowCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'Type',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'E/F',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTrans',name:'하불임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTransR',name:'철송임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsOprR',name:'철송조작료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsTestR',name:'철송검수비',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsKoreoR',name:'고려차량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsJeOnoffR',name:'자가영업상차료',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RailroadCostClntList'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtNm',name:'화주명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count20',name:'20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'count40',name:'40',dataType:'text'}},{T:1,N:'w2:column',A:{id:'teuCount',name:'TEU',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellTrans',name:'운송료(매출)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsSum',name:'매입합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costRate',name:'원가율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveSummary',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostSummaryListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostSumList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadCostSumList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveSummary_submitdone','ev:submiterror':'scwin.sbm_RetrieveSummary_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadCostList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'scwin.sbm_Retrieve_submiterror'}},{T:1,N:'xf:submission',A:{id:'sbm_RetrieveClnt',action:'/ds.op.wrkrslts.railroadwrkrslts.RetrieveRailroadCostSummaryClntListCMD.do',method:'post',mediatype:'application/json',mode:'asynchronous',encoding:'UTF-8',ref:'data:json,[{"id":"dma_Retrieve","key":"IN_DS1"},{"id":"ds_RailroadCostClntList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_RailroadCostClntList","key":"OUT_DS1"}]','ev:submitdone':'scwin.sbm_RetrieveClnt_submitdone','ev:submiterror':'scwin.sbm_RetrieveClnt_submiterror'}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.dateStr = "";
scwin.selectCol = "";
scwin.onpageload = function () {
  scwin.dateStr = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  lc_transNmCd.removeAll();
  lc_adminfrtcarYn.removeAll();
  lc_adminfrtcarYn.addItem({
    label: "전체",
    value: ""
  });
  lc_adminfrtcarYn.addItem({
    label: "사유",
    value: "0"
  });
  lc_adminfrtcarYn.addItem({
    label: "공사",
    value: "1"
  });
  lc_adminfrtcarYn.addItem({
    label: "저수요",
    value: "2"
  });
  lc_adminfrtcarYn.addItem({
    label: "전용",
    value: "3"
  });
  lc_adminfrtcarYn.setSelectedIndex(0);
};
scwin.onUdcCompleted = function () {
  udc_dptDt.setInitDate(scwin.dateStr, scwin.dateStr);
  let codeOptions = [{
    grpCd: "OP147",
    compID: "lc_transNmCd"
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.f_ProcessBinding = function () {
  dma_Retrieve.set("dptDtFrom", udc_dptDt.getFromValue());
  dma_Retrieve.set("dptDtTo", udc_dptDt.getToValue());
  dma_Retrieve.set("bilgClntNo", em_bilgClntNo.getValue().trim());
  dma_Retrieve.set("transNmCd", lc_transNmCd.getValue());
  dma_Retrieve.set("dptWrkPlCd", em_dptWrkPlCd.getValue().trim());
  dma_Retrieve.set("arvWrkPlCd", em_arvWrkPlCd.getValue().trim());
  dma_Retrieve.set("adminfrtcarYn", lc_adminfrtcarYn.getValue());
};
scwin.f_selectTabMenu = async function (idx) {
  if ($c.gus.cfIsNull($p, idx)) {
    idx = 0;
  }
  scwin.f_ProcessBinding();
  switch (idx) {
    case 0:
      await $c.sbm.execute($p, sbm_Retrieve);
      break;
    case 1:
      await $c.sbm.execute($p, sbm_RetrieveClnt);
      break;
    default:
      break;
  }
};
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [udc_dptDt]))) {
    return;
  }
  let fromDt = udc_dptDt.getFromValue();
  let toDt = udc_dptDt.getToValue();
  if (!$c.gus.cfIsAfterDate($p, fromDt, toDt)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    udc_dptDt.setFocusFrom();
    return;
  }
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_RetrieveSummary);
};
scwin.retrieveButton_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};
scwin.f_openLinePopUp = function (cCode, cName, type) {
  let pCode = "";
  let pName = "";
  if (type == null || type == "" || type == 0) {
    pCode = cCode.getValue().trim();
    pName = cName.getValue().trim();
  } else if (type == 1) {
    pCode = cCode.getValue().trim();
    if (pCode == "") {
      cName.setValue("");
    }
  } else if (type == 2) {
    pName = cName.getValue().trim();
    if (pName == "") {
      cCode.setValue("");
    }
  }
  if (type != 0 && pCode == "" && pName == "") {
    return;
  }
  pName = pName.toUpperCase();
  udc_bilgClnt.ilCommonPopUp(scwin.callbackLinePopUp, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "T", "거래처,거래처코드,거래처명");
};
scwin.callbackLinePopUp = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_bilgClntNo, txt_bilgClntNo);
};
scwin.f_openTrainWorkPlacePopUp = function (cCode, cName, type, udcObj) {
  let pCode = "";
  let pName = "";
  if (type == null || type == "" || type == 0) {
    pCode = cCode.getValue().trim();
    pName = cName.getValue().trim();
  } else if (type == 1) {
    pCode = cCode.getValue().trim();
    if (pCode == "") {
      cName.setValue("");
    }
  } else if (type == 2) {
    pName = cName.getValue().trim();
    if (pName == "") {
      cCode.setValue("");
    }
  }
  if (type != 0 && pCode == "" && pName == "") {
    return;
  }
  pName = pName.toUpperCase();
  udcObj.ilCommonPopUp(function (rtnList) {
    $c.gus.cfSetReturnValue($p, rtnList, cCode, cName);
  }, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "T", "역명조회,작업장코드,작업장명");
};
scwin.udc_bilgClnt_onblurCode = function () {
  scwin.f_openLinePopUp(em_bilgClntNo, txt_bilgClntNo, 1);
};
scwin.udc_bilgClnt_onClick = function () {
  scwin.f_openLinePopUp(em_bilgClntNo, txt_bilgClntNo, 0);
};
scwin.udc_dptWrkPl_onblurCode = function () {
  scwin.f_openTrainWorkPlacePopUp(em_dptWrkPlCd, txt_dptStnNm, 1, udc_dptWrkPl);
};
scwin.udc_dptWrkPl_onClick = function () {
  scwin.f_openTrainWorkPlacePopUp(em_dptWrkPlCd, txt_dptStnNm, 0, udc_dptWrkPl);
};
scwin.udc_arvWrkPl_onblurCode = function () {
  scwin.f_openTrainWorkPlacePopUp(em_arvWrkPlCd, txt_arvStnNm, 1, udc_arvWrkPl);
};
scwin.udc_arvWrkPl_onClick = function () {
  scwin.f_openTrainWorkPlacePopUp(em_arvWrkPlCd, txt_arvStnNm, 0, udc_arvWrkPl);
};
scwin.f_runExcel = async function (varGrNm) {
  let totCnt = varGrNm.getRowCount();
  let sheetTitle = "철송원가율요약";
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      $c.data.downloadGridViewExcel($p, varGrNm, {
        fileName: sheetTitle + ".xls",
        sheetName: sheetTitle
      });
    }
  } else {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_GridToExcel = function () {
  let arrGrdNm = ["컨테이너별", "거래처별"];
  let arrGrdId = [gr_RailroadCostList, gr_RailroadCostClntList];

  // TODO: 탭 컨트롤에서 현재 활성 탭 인덱스를 가져오는 방식으로 대체
  let k = 0;
  // WebSquare tabControl에서는 getSelectedTabIndex()로 현재 탭 확인
  // 참조 body에 tabControl id가 없으므로 기본 방식 사용
  $c.data.downloadGridViewExcel($p, arrGrdId[k], {
    fileName: arrGrdNm[k] + ".xls",
    sheetName: arrGrdNm[k]
  });
};
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, [udc_dptDt]);
  udc_dptDt.setInitDate(scwin.dateStr, scwin.dateStr);
};
scwin.gr_RailroadCostList_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.selectCol = columnId;
};
scwin.sbm_Retrieve_submitdone = function (e) {};
scwin.sbm_Retrieve_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveSummary_submitdone = async function (e) {
  if (ds_RailroadCostSumList.getRowCount() < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.sbm_RetrieveSummary_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.sbm_RetrieveClnt_submitdone = function (e) {};
scwin.sbm_RetrieveClnt_submiterror = function (e) {
  $c.gus.cfShowError($p, e);
};
scwin.ds_RailroadCostList_onloadcompleted = async function (e) {
  let rowCnt = ds_RailroadCostList.getRowCount();
  if (rowCnt < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  $c.gus.cfShowTotalRows($p, totalRows, rowCnt);
};
scwin.ds_RailroadCostSumList_onloadcompleted = async function (e) {
  scwin.f_ProcessBinding();
  await $c.sbm.execute($p, sbm_Retrieve);
  // TODO: cfViewTab(0) — 탭 전환은 WebSquare tabControl API로 대체
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_dptDt',edFromId:'ica_dptDtFrom',edToId:'ica_dptDtTo',refDataMap:'',refEdDt:'',refStDt:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_dptWrkPl',codeId:'em_dptWrkPlCd',nameId:'txt_dptStnNm',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_arvWrkPl',codeId:'em_arvWrkPlCd',nameId:'txt_arvStnNm',hideName:'Y',popupID:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{id:'udc_bilgClnt',codeId:'em_bilgClntNo',nameId:'txt_bilgClntNo',hideName:'Y',popupID:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송명의',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_transNmCd',style:'width:150px;',submenuSize:'auto'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화차구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_adminfrtcarYn',style:'width:150px;',submenuSize:'auto'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'retrieveButton',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'요약',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:''}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'ds_RailroadCostSumList',id:'gr_RailroadCostSumList',style:'',visibleRowNum:'5',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'teu',inputType:'text',value:'구분',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',value:'갯수',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',value:'운송료(매출)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTrans',inputType:'text',value:'하불임',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTransR',inputType:'text',value:'철송임',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsOprR',inputType:'text',value:'철송조작료',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTestR',inputType:'text',value:'철송검수비',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsKoreoR',value:'(주)고려차량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsJeOnoffR',value:'자가영업 상차료',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',value:'매입합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'text',value:'원가율',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'teu',inputType:'text',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',width:'60',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTrans',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTransR',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsOprR',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsTestR',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsKoreoR',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'pchsJeOnoffR',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'text',width:'100',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'철송원가율',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'tabbox'},E:[{T:1,N:'w2:tabControl',A:{alwaysDraw:'false',style:'',id:'',class:'wq_tab'},E:[{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs12',label:'컨테이너별'}},{T:1,N:'w2:tabs',A:{disabled:'false',style:'',id:'tabs13',label:'거래처별'}},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'height: auto;',id:'content12'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'ds_RailroadCostList',id:'gr_RailroadCostList',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'5'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',value:'컨테이너',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',value:'봉인번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'text',value:'출발일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStn',inputType:'text',value:'출발역',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStn',inputType:'text',value:'도착역',width:'90'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'adminfrtcarYn',value:'화차구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'trnNo',value:'열차번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'frtcarNo',value:'화차번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmClntCd',value:'운송명의',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmCd',value:'운송명의',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lineCd',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrTypShowCd',value:'규격',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',value:'Type',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',value:'E/F',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',value:'오더번호',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',value:'화주명',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',value:'청구처',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellTrans',value:'운송료<br/>(매출)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsSum',value:'매입합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTrans',value:'하불임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTransR',value:'철송임',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsOprR',value:'철송<br/>조작료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTestR',value:'철송<br/>검수비',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsKoreoR',value:'고려차량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsJeOnoffR',value:'자가영업<br/>상차료',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'costRate',value:'원가율',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sealNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDt',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptStn',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvStn',inputType:'text',width:'90'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'adminfrtcarYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'trnNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'frtcarNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmClntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'transNmCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'cntrTypShowCd',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fullEmptyClsCd',inputType:'text',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'sellTrans',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsSum',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTrans',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTransR',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsOprR',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsTestR',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsKoreoR',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsJeOnoffR',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'costRate',displayMode:'label',textAlign:'right',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'w2:content',A:{alwaysDraw:'false',style:'',id:'content13'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'ds_RailroadCostClntList',id:'gr_RailroadCostClntList',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'5',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',value:'청구처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',value:'화주명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'count20',inputType:'text',value:'20',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'count40',inputType:'text',value:'40',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',value:'TEU',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',value:'운송료 (매출)',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',value:'매입합계',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'text',value:'원가율',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{class:'col-type2',displayMode:'label',id:'count20',inputType:'text',width:'60',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'count40',inputType:'text',width:'60',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'teuCount',inputType:'text',width:'60',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellTrans',inputType:'text',width:'80',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsSum',inputType:'text',width:'100',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'costRate',inputType:'text',width:'100',dataType:'float',maxLength:'0.1',displayFormat:'#,##0.0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]}]}]}]})