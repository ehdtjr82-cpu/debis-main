/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_66p.xml 20357 bea48cd8b633c4677700552f5bb2a00df708276c8b331e3dd301af24752f1574 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true','ev:ondataload':'scwin.ds_master_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:''}},{T:1,N:'w2:column',A:{id:'sellSeq',name:'오더순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'크나우프오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongNm',name:'사업장',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'dmndNo',name:'판매처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'salePlCoNm',name:'거래처명',dataType:''}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'오더종류',dataType:''}},{T:1,N:'w2:column',A:{id:'commClssCd',name:'품목코드',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commClssNm',name:'품목명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntCommCd',name:'품번',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkQty',name:'작업수량',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'qtyUnitCd',name:'작업단위',dataType:''}},{T:1,N:'w2:column',A:{id:'smQty',name:'SM수량',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'smQty1',name:'SM단위',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'wrkWt',name:'작업중량',dataType:''}},{T:1,N:'w2:column',A:{id:'unitCd',name:'중량단위',dataType:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'권역',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd1',name:'권역1',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd2',name:'권역2',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'osideCdNm',name:'우편명',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'tplZip',name:'우편번호',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'odrDt',name:'오더일자',dataType:''}},{T:1,N:'w2:column',A:{id:'ioDt',name:'입출고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfVehclNo',name:'차량번호',dataType:''}},{T:1,N:'w2:column',A:{id:'maxShipwgtVol',name:'차량규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col27',name:'공장코드',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'selpchItemNm',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발지',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizLongCd',name:'사업장',dataType:'',defaultValue:''}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품목코드',dataType:''}},{T:1,N:'w2:column',A:{id:'dptDt',name:'name36',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'name37',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regBranCd',name:'등록점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regBranNm',name:'등록점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'name38',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveLafargeOrderInfoCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.paramData = {};
scwin.odrNo = "";
scwin.mchtOdrNo = "";
scwin.clntNo = "";
scwin.wrkPlCd = "";
scwin.lobranCd = "";
scwin.onpageload = function () {
  scwin.paramData = $c.data.getParameter($p);
  console.log(scwin.paramData);
  debugger;
  if (!scwin.paramData) {
    scwin.paramData = {
      "odrNo": "",
      "mchtOdrNo": "",
      "clntNo": "",
      "wrkPlCd": "",
      "lobranCd": ""
    };
  }
  scwin.odrNo = scwin.paramData.odrNo == null ? "" : scwin.paramData.odrNo;
  scwin.mchtOdrNo = scwin.paramData.mchtOdrNo == null ? "" : scwin.paramData.mchtOdrNo;
  scwin.clntNo = scwin.paramData.clntNo == null ? "" : scwin.paramData.clntNo;
  scwin.wrkPlCd = scwin.paramData.wrkPlCd == null ? "" : "999"; //scwin.paramData.wrkPlCd;
  scwin.lobranCd = scwin.paramData.lobranCd == null ? "" : scwin.paramData.lobranCd;
  dma_Query.set("odrNo", scwin.odrNo);
  dma_Query.set("mchtOdrNo", scwin.mchtOdrNo);
  dma_Query.set("clntNo", scwin.clntNo);
  dma_Query.set("wrkPlCd", scwin.wrkPlCd);
  dma_Query.set("lobranCd", scwin.lobranCd);
  if (scwin.odrNo == "" && scwin.mchtOdrNo == "") {
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

// 조회
scwin.f_Retrieve = async function (e) {
  if ($c.util.isEmpty($p, ed_odrNo.getValue()) && $c.util.isEmpty($p, ed_mchtOdrNo.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["오더번호"]);
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_master.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    totalRows.setValue(ds_master.getRowCount());
  }
};

//화면 종료시
scwin.f_OnUnload = function (row) {
  ds_master.getCellData(row, "odrNo");
  let callbackParam = {
    odrNo: ds_master.getCellData(row, "odrNo"),
    sellSeq: ds_master.getCellData(row, "sellSeq"),
    mchtOdrNo: ds_master.getCellData(row, "mchtOdrNo"),
    bizLongNm: ds_master.getCellData(row, "bizLongNm"),
    dmndNo: ds_master.getCellData(row, "dmndNo"),
    salePlCoNm: ds_master.getCellData(row, "salePlCoNm"),
    wrkPatternCd: ds_master.getCellData(row, "wrkPatternCd"),
    commClssCd: ds_master.getCellData(row, "commClssCd"),
    commClssNm: ds_master.getCellData(row, "commClssNm"),
    clntCommCd: ds_master.getCellData(row, "clntCommCd"),
    commNm: ds_master.getCellData(row, "commNm"),
    wrkQty: ds_master.getCellData(row, "wrkQty"),
    qtyUnitCd: ds_master.getCellData(row, "qtyUnitCd"),
    smQty: ds_master.getCellData(row, "smQty"),
    smQty1: ds_master.getCellData(row, "smQty1"),
    wrkWt: ds_master.getCellData(row, "wrkWt"),
    unitCd: ds_master.getCellData(row, "unitCd"),
    arvWrkPlCd: ds_master.getCellData(row, "arvWrkPlCd"),
    arvWrkPlCd1: ds_master.getCellData(row, "arvWrkPlCd1"),
    arvWrkPlCd2: ds_master.getCellData(row, "arvWrkPlCd2"),
    osideCdNm: ds_master.getCellData(row, "osideCdNm"),
    tplZip: ds_master.getCellData(row, "tplZip"),
    odrDt: ds_master.getCellData(row, "odrDt"),
    ioDt: ds_master.getCellData(row, "ioDt"),
    selfVehclNo: ds_master.getCellData(row, "selfVehclNo"),
    maxShipwgtVol: ds_master.getCellData(row, "maxShipwgtVol"),
    mchtOdrNo: ds_master.getCellData(row, "mchtOdrNo"),
    selpchItemNm: ds_master.getCellData(row, "selpchItemNm"),
    dptWrkPlCd: ds_master.getCellData(row, "dptWrkPlCd"),
    transWrkIndictNo: ds_master.getCellData(row, "transWrkIndictNo"),
    bizLongCd: ds_master.getCellData(row, "bizLongCd"),
    clntNo: ds_master.getCellData(row, "clntNo"),
    commCd: ds_master.getCellData(row, "commCd"),
    dptDt: ds_master.getCellData(row, "dptDt"),
    sellAmt: ds_master.getCellData(row, "sellAmt"),
    regBranCd: ds_master.getCellData(row, "regBranCd"),
    regBranNm: ds_master.getCellData(row, "regBranNm"),
    sellUpr: ds_master.getCellData(row, "sellUpr")
  };
  $c.win.closePopup($p, callbackParam);
};
scwin.ed_odrNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.ed_mchtOdrNo_oneditkeyup = function (info, e) {
  let val = info.newValue;
  this.setValue(val.toUpperCase());
};
scwin.btn_trigger1_onclick = function (e) {
  let rowCnt = ds_master.getRowCount();
  if (rowCnt == 1) {
    scwin.f_OnUnload(0);
  } else {
    scwin.f_OnUnload(gr_master.getFocusedRowIndex());
  }
};
scwin.gr_master_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_OnUnload(rowIndex);
};
scwin.f_FieldClear = function (e) {
  totalRows.setValue(0);
  ed_odrNo.setValue("");
  ed_mchtOdrNo.setValue("");
  ds_master.removeAll();
};
scwin.ds_master_ondataload = function () {
  if (ds_master.getRowCount() == 1) {
    scwin.f_OnUnload(0);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_mainData',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',style:'width:150px;',objType:'data',maxlength:'13',allowChar:'a-zA-Z0-9',ref:'data:dma_Query.odrNo',validateOnInput:'true','ev:oneditkeyup':'scwin.ed_odrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',style:'width:150px;',objType:'data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:dma_Query.mchtOdrNo','ev:oneditkeyup':'scwin.ed_mchtOdrNo_oneditkeyup',validateOnInput:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridDownYn:'N',gridUpYn:'N',grp:'grd_section1',templateYn:'N',style:'',gridID:'gr_master',btnUser:'Y',btnPlusYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_master_oncelldblclick',readOnly:'true',showSortableUseFilter:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더<br/>순서',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'크나우프<br/>오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'사업장',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'판매처번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'거래처명',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'오더종류',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'품목코드',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'품목명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'품번',width:'100'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'column41',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'작업수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'작업단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'SM수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'SM단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'작업중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'중량단위',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',value:'권역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',value:'권역1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column23',value:'권역2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'우편명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'우편번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'오더일자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'입출고일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',value:'차량규격',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'매출입항목',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'출발지',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',value:'작업지시번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'사업장',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'거래처번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'품목코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column63',value:'등록점소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'등록점소명',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellSeq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bizLongNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dmndNo',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'salePlCoNm',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPatternCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClssCd',inputType:'text',width:'70',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'commClssNm',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntCommCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'170',inputType:'text',id:'commNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkQty',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'qtyUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'smQty',displayMode:'label',dataType:'number',displayFormat:'#,##0.0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'smQty1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkWt',displayMode:'label',dataType:'number',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'unitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlCd1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlCd2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'osideCdNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'tplZip',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'odrDt',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'ioDt',displayMode:'label',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selfVehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'maxShipwgtVol',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'selpchItemNm',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'transWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'bizLongCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'regBranCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'regBranNm',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'info-ico',id:'',label:'자가운송건은 조회되지 않습니다.',style:'',tagname:'p'}}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})