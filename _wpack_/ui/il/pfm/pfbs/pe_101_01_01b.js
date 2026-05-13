/*amd /ui/il/pfm/pfbs/pe_101_01_01b.xml 22559 9c30a3947d7613bbce1250a5ef41b5252c25a07387e94240c0e7d7e7cea147c4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_mhno',saveRemovedData:'true','ev:ondataload':'scwin.ds_mhno_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_SlipDetail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhvsl',name:'Vessel',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House B/L No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'customernm',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vat',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'total',name:'합계금액',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_mhno',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_mhno","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'scwin.sbm_mhno_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_houseList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_houseList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'$blank','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pfbs.RetrieveSlipDetailListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_SlipDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_SlipDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId; //사용자

scwin.ProcessGb = "";
scwin.hid_kcomcd = ""; //대표거래처 코드

scwin.params = $c.data.getParameter($p);
scwin.kcomcd = "";
scwin.mblno = "";
scwin.blno = "";
scwin.mhno = "";
scwin.seaair = "";
scwin.onpageload = function () {
  scwin.f_getParametrSetting(); //param set
};
scwin.f_getParametrSetting = function () {
  scwin.kcomcd = scwin.params.kcomcd;
  scwin.mblno = scwin.params.mblno;
  scwin.blno = scwin.params.blno;
  scwin.mhno = scwin.params.mhno;
  scwin.seaair = scwin.params.seaair;
  cnd_lc_seaair.setValue(scwin.seaair);
  if (cnd_lc_seaair.getSelectedIndex() < 0) {
    cnd_lc_seaair.setSelectedIndex(0);
    scwin.blno = "";
  }
  if (scwin.kcomcd == "null" || scwin.kcomcd == "" || scwin.kcomcd == undefined) {
    scwin.hid_kcomcd = "DBEX";
  } else {
    scwin.hid_kcomcd = scwin.kcomcd;
  }
  if (cnd_lc_seaair.getSelectedIndex() == 0) {
    cnd_ed_mblno.setValue(scwin.blno);
  } else {
    if (scwin.mblno == "null" || scwin.mblno == "" || scwin.mblno == undefined) {
      cnd_ed_mblno.setValue(scwin.blno);
    } else {
      cnd_ed_mblno.setValue(scwin.mblno);
    }
  }

  // $c.gus.cfDisableObjects([cnd_lc_blno]);
  $p.setTimeout(function () {
    cnd_ed_mblno.focus();
  }, 100);
};

//초기화
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  $c.gus.cfDisableObjects($p, [cnd_lc_blno]);
  ds_mhno.removeAll();
  ds_houseList.removeAll();
  cnd_ed_mblno.focus();
  cnd_ed_slipNo.setValue("");
};
scwin.btn_FieldClear2_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition, null);
  $c.gus.cfDisableObjects($p, [cnd_lc_blno]);
  ds_mhno.removeAll();
  ds_houseList.removeAll();
  cnd_ed_mblno.focus();
  cnd_ed_slipNo.setValue("");
};

//조회
scwin.btn_retrieve_onclick = function (e) {
  dma_search.set("slipNo", cnd_ed_slipNo.getValue());
  dma_search.set("kcomcd", scwin.hid_kcomcd);
  $c.sbm.execute($p, sbm_retrieve);
};

//조회callback
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_SlipDetail.getRowCount();
  if (nCnt == 0) {
    $p.getComponentById("grid-bottom").hide();
  } else {
    $p.getComponentById("grid-bottom").show();
    gr_BookingSheetList.setFocusedCell(0, 0);
    total.setValue(nCnt);
  }
};

//출력(print)
scwin.btn_print_onclick = function (e) {
  let data = "";
  if (lc_mhno.getValue() == "" || lc_mhno.getValue() == "NONE" || lc_mhno.getValue() == null) {
    $c.win.alert($p, "Master BL번호를 확인해주세요.");
    return false;
  } else {
    let printMode = chb_previewCheck.getValue() != "" ? "preview" : "silent";
    if (cnd_lc_seaair.getSelectedIndex() == 0) {
      //해운
      data = {
        reportName: "/il/pfm/pe_101_01_02b.ozr",
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          MHNO: lc_mhno.getValue(),
          MBLNO: cnd_ed_mblno.getValue(),
          HBLNO: cnd_lc_blno.getValue()
        },
        viewerParam: {
          useprogressbar: false,
          mode: printMode
        },
        formParam: {
          //
        }
      };
      scwin.openPopup(data);
    } else {
      data = {
        reportName: "/il/pfm/pe_101_01_01b.ozr",
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          MHNO: lc_mhno.getValue(),
          MBLNO: cnd_ed_mblno.getValue(),
          HBLNO: cnd_lc_blno.getValue()
        },
        viewerParam: {
          useprogressbar: false,
          mode: printMode
        },
        formParam: {
          //
        }
      };
      scwin.openPopup(data);
    }
  }
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//M B/L No (focus out event)
scwin.cnd_ed_mblno_onblur = async function (e) {
  let strClntNo = "";
  strClntNo = cnd_ed_mblno.getValue();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    scwin.ProcessGb = "M";
    if (cnd_lc_seaair.getValue() == "A") {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1;
      await $c.sbm.execute($p, sbm_mhno);
    } else {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1;
      await $c.sbm.execute($p, sbm_mhno);
    }
  } else {
    ds_mhno.removeAll();
  }
};

//M B/L callback
scwin.sbm_mhno_submitdone = function () {
  if (ds_mhno.getRowCount() == 0) {
    if (scwin.ProcessGb == "M") {
      scwin.ProcessGb = "H";
      scwin.f_B_MhnoLoading();
    } else if (scwin.ProcessGb == "H") {
      scwin.ProcessGb = "";
      scwin.f_H_MhnoLoading();
    }
  } else {
    scwin.ProcessGb = "";
    scwin.lc_mhno_onafteredit();
  }
};

//MHNNO 가져오기 마스터 부킹에 서 검색
scwin.f_B_MhnoLoading = async function () {
  let strClntNo = "";
  let jobType = "";
  strClntNo = cnd_ed_mblno.getValue();
  jobType = cnd_lc_seaair.getSelectedIndex();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    if (jobType == "0") {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaMasterMhnoListCombo&param1=" + param1 + "&param2=O";
      await $c.sbm.execute($p, sbm_mhno);
    } else {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirMasterMhnoListCombo&param1=" + param1 + "&param2=O";
      await $c.sbm.execute($p, sbm_mhno);
    }
  } else {
    lc_mhno.setValue("");
  }
};
scwin.f_H_MhnoLoading = async function () {
  let strClntNo = "";
  let jobType = "";
  strClntNo = cnd_ed_mblno.getValue();
  jobType = cnd_lc_seaair.getSelectedIndex();
  if (strClntNo.length > 0) {
    let param1 = strClntNo;
    if (jobType == "0") {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseMhnoListCombo&param1=" + param1;
      await $c.sbm.execute($p, sbm_mhno);
    } else {
      sbm_mhno.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveAirHouseMhnoListCombo&param1=" + param1;
      await $c.sbm.execute($p, sbm_mhno);
    }
  } else {
    lc_mhno.setValue("");
  }
};

//job type change...
scwin.cnd_lc_seaair_onviewchange = function (info) {
  cnd_ed_mblno.setValue("");
  ds_mhno.removeAll();
  ds_houseList.removeAll();
  cnd_ed_mblno.focus();
  if (info["newValue"] == "S") {
    //해운
    $c.gus.cfDisableObjects($p, [cnd_lc_blno]);
  } else {
    $c.gus.cfEnableObjects($p, [cnd_lc_blno]);
  }
};
scwin.lc_mhno_onafteredit = async function () {
  if (cnd_ed_mblno.getValue().trim() == "" || lc_mhno.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, Array("Master B/L No"));
    cnd_ed_mblno.focus();
    return;
  } else {
    let param1 = scwin.hid_kcomcd; //대표거래처 코드
    let param2 = cnd_ed_mblno.getValue();
    let param3 = lc_mhno.getValue();
    ds_houseList.removeAll();
    ds_houseList.insertRow(0);
    ds_houseList.setCellData(0, "code", "");
    ds_houseList.setCellData(0, "name", "");
    if (cnd_lc_seaair.getValue() == "A") {
      sbm_houseList.action = "/cm.zz.RetrieveComboCMD.do?sysCd=AirShippingAdviceEBC&queryId=retriveAirHouseNoListCombo&param1=" + param1 + "&param3=" + param3;
      await $c.sbm.execute($p, sbm_houseList);
    } else {
      sbm_houseList.action = "/cm.zz.RetrieveComboCMD.do?sysCd=ilCommonEBC&queryId=retriveSeaHouseNoListCombo&param1=" + param1 + "&param2=" + param2 + "&param3=" + param3;
      await $c.sbm.execute($p, sbm_houseList);
    }
  }
};
scwin.ds_mhno_ondataload = function () {
  let nCnt = ds_mhno.getRowCount();
  if (nCnt == 0) {
    lc_mhno.setValue("");
  } else {
    lc_mhno.setValue(ds_mhno.getCellData(0, "code"));
  }
};
scwin.ds_houseList_ondataload = function () {
  let nCnt = ds_houseList.getRowCount();
  if (nCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("Master B/L의 House B/L 자료")); //선택된 @이(가) 없습니다.
  } else {
    let singleCodeValue = ds_houseList.getCellData(0, "code");
    cnd_lc_blno.setValue(singleCodeValue);
  }
};
scwin.excelDw = async function () {
  let options = {
    fileName: "전표별 매입 현황.xlsx",
    sheetName: "전표별 매입 현황",
    startRowIndex: 3
  };
  let grdObj = gr_BookingSheetList;
  let infoArr = [{
    rowIndex: 0,
    // 첫 번째 줄
    colIndex: 0,
    // 첫 번째 칸부터
    colSpan: 8,
    // 그리드 전체 너비만큼 병합
    rowSpan: 1,
    text: "전표별 매입 현황",
    textAlign: "center",
    //정렬
    fontSize: 12,
    drawBorder: "white",
    // 테두리
    color: "black",
    // 글자색
    backgroundColor: "white" // 배경색
  }];
  if (ds_SlipDetail.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_searchCondition',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_seaair',chooseOption:'',style:'width:148px; height:21px; ',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',ref:'','ev:onviewchange':'scwin.cnd_lc_seaair_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Sea'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'S'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'M B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:150px;',id:'cnd_ed_mblno',placeholder:'',class:'',maxlength:'20',mandatory:'true','ev:onblur':'scwin.cnd_ed_mblno_onblur',allowChar:'0-9a-zA-Z',displayFormat:'###-#################'}},{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'lc_mhno',emptyItem:'true',class:'',allOption:'',chooseOption:'',ref:'',displayMode:'value','ev:onafteredit':'scwin.lc_mhno_onafteredit'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_mhno'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:autoComplete',A:{search:'start',submenuSize:'auto',editType:'select',style:'width:150px;',id:'cnd_lc_blno',class:'',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_houseList'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]},{T:1,N:'xf:input',A:{style:'width:50px;',id:'ed_hcnt',placeholder:'',class:'',minlength:'3'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'미리보기',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_print',style:'',type:'button','ev:onclick':'scwin.btn_print_onclick',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'Slip Detail',style:'',tagname:'h4'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnUser:'Y',gridUpYn:'N',gridID:'gr_BookingSheetList',gridDownUserAuth:'X',btnPlusYn:'Y',gridDownYn:'Y',gridDownFn:'scwin.excelDw'}}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Slip No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_slipNo',placeholder:'',style:'width:150px; text-transform: uppercase;',maxlength:'10',allowChar:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear2',style:'',type:'button','ev:onclick':'scwin.btn_FieldClear2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_SlipDetail',id:'gr_BookingSheetList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',focusMode:'cell',focusMove:'true',columnMove:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'실적일자',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Vessel',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'House B/L No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'Customer Name',width:'170'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매입금액(외화)',width:'110'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매입금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'부가세',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'합계금액',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'rsltsStdDt',inputType:'calendar',width:'80',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhvsl',inputType:'text',width:'170',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'120',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'customernm',inputType:'text',width:'170',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmtFcrc',inputType:'text',width:'110',dataType:'number',displayFormat:'#,##0.##',textAlign:'right',excelFormat:'#,###.##',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsAmt',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vat',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'total',inputType:'text',width:'100',dataType:'number',displayFormat:'#,##0',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'expression',id:'column26',displayMode:'label',value:'0',dataType:'number',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'pchsAmtFcrc\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column25',displayMode:'label',value:'0',dataType:'number',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column24',displayMode:'label',value:'0',dataType:'number',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'vat\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column23',displayMode:'label',value:'0',dataType:'number',displayFormat:'#,##0',textAlign:'right',expression:'SUM(\'total\')'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'grid-bottom',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})