/*amd /ui/ds/op/rscconfirm/transrscconfirm/tb_030_01_02p.xml 20261 9c42a253dc2361836ebca41d935e92d4f29b60e987d21d1addc140ea53682506 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name13',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselMng',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qyrEndDt',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qryStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsNm',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoClntNo',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'name19',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'name21',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'name24',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslPurpsCd',name:'name25',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslPurpsNm',name:'name26',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'name27',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'name28',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_vesselMng","key":"OUT_DS1"}',target:'data:json,{"id":"ds_vesselMng","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loUpperLobranCd;
scwin.args;
scwin.cvsslMgntNo;
scwin.impExpClsCd;
scwin.comboRtnFlag01;
scwin.interval01;
scwin.onpageload = async function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  await scwin.f_OnLoad();
};
scwin.initSetVal = function () {
  scwin.loUpperLobranCd = "4AA"; // 물류상위점소코드

  scwin.cvsslMgntNo = "";
  scwin.impExpClsCd = "";
  if (Object.keys($c.data.getParameter($p)).length > 0) {
    scwin.args = $c.data.getParameter($p)[Object.keys($c.data.getParameter($p))[0]];
    if (scwin.args[0] != undefined && scwin.args[0] != null) {
      scwin.cvsslMgntNo = scwin.args[0].trim();
    }
    if (scwin.args[1] != undefined && scwin.args[1] != null) {
      scwin.impExpClsCd = scwin.args[1];
    }
  }
  scwin.comboRtnFlag01 = false;
};
scwin.f_OnLoad = async function () {
  //점소 조회
  //submit 처리.
  scwin.comboRtnFlag01 = false;
  let objSubmit = await $c.sbm.execute($p, sbm_lobran);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_lobran_submitdone();
  } else {
    scwin.comboRtnFlag01 = false;
  }
  scwin.interval01 = setInterval(async function () {
    if (scwin.comboRtnFlag01 == true) {
      clearInterval(scwin.interval01);
      em_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
      lc_impExpClsCd.setValue(scwin.impExpClsCd);
      scwin.f_setDate();
      lc_lobran.focus();
      await scwin.f_Retrieve();
    }
  }, 150);
};
scwin.sbm_lobran_submitdone = async function (e) {
  //for="ds_lobran" event="OnLoadCompleted
  if (ds_lobran.getRowCount() != 0) {
    ds_lobran.insertRow(0);
    ds_lobran.setCellData(0, "lobranCd", "");
    ds_lobran.setCellData(0, "lobranNm", "전체");
    if (scwin.cvsslMgntNo == "") {
      lc_lobran.setValue(scwin.loUpperLobranCd);
    } else {
      lc_lobran.setValue("");
    }
  }
  scwin.comboRtnFlag01 = true;
};
scwin.f_setDate = function () {
  var dateStr = WebSquare.date.getCurrentServerDate().substring(0, 6);
  if (scwin.cvsslMgntNo != "" && scwin.cvsslMgntNo.length > 4) {
    dateStr = dateStr.substring(0, 2) + scwin.cvsslMgntNo.substring(1, 5);
  }
  var firstDate = dateStr + "01";
  var startDt = firstDate.toDate("YYYYMMDD");
  var endDt = startDt.after(0, 1, 0);
  endDt = endDt.before(0, 0, 1);
  ed_qryStDt.setValue(startDt.format("YYYYMMDD"));
  ed_qryEndDt.setValue(endDt.format("YYYYMMDD"));
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [ed_qryStDt, ed_qryEndDt]);
  if (!ret) {
    return; // 필수조건 : 조회기간
  }
  if (Number(ed_qryStDt.getValue()) > Number(ed_qryEndDt.getValue())) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ed_qryEndDt.focus();
    return;
  }
  var condition = "";
  condition = "?lobranCd=" + lc_lobran.getValue() // 점소코드
  + "&shpCoClntNo=" //+ ed_con_shpCo.getValue().trim()
  + "&vsslCd=" //+ ed_vsslCd.getValue().trim()
  + "&qryStDt=" + ed_qryStDt.getValue() + "&qyrEndDt=" + ed_qryEndDt.getValue() + "&cvsslMgntNo=" + em_cvsslMgntNo.getValue().trim() + "&impExpClsCd=" + lc_impExpClsCd.getValue() + "&mrn=" + ed_mrn.getValue();
  sbm_retrieve.action = "/ds.op.rscconfirm.transrscconfirm.RetrieveTerminalCarryingVesselManagementNumberCMD.do" + condition;

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_retrieve);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_retrieve_submitdone();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  //for=ds_vesselMng event=OnLoadCompleted
  var rowCnt = ds_vesselMng.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else if (rowCnt == 1 && scwin.cvsslMgntNo == ds_vesselMng.getCellData(0, "cvsslMgntNo")) {
    var rtnValues = new Array();
    rtnValues[0] = ds_vesselMng.getCellData(0, "cvsslMgntNo"); // 본선관리번호
    rtnValues[1] = ds_vesselMng.getCellData(0, "vsslCd"); // 선박코드
    rtnValues[2] = ds_vesselMng.getCellData(0, "vsslNm"); // 선박명
    rtnValues[3] = ds_vesselMng.getCellData(0, "closeDt"); // 마감일자
    rtnValues[4] = ds_vesselMng.getCellData(0, "closeHh"); // 마감시간
    rtnValues[5] = ds_vesselMng.getCellData(0, "arvDt"); // 도착(입항)일자
    rtnValues[6] = ds_vesselMng.getCellData(0, "arvHh"); // 도착(입항)시간
    rtnValues[7] = ds_vesselMng.getCellData(0, "dptDt"); // 출발(출항)일자
    rtnValues[8] = ds_vesselMng.getCellData(0, "dptHh"); // 출발(출항)시간
    rtnValues[9] = ds_vesselMng.getCellData(0, "shpCoPortcnt"); // 선사항차
    rtnValues[10] = ""; // 항로
    rtnValues[11] = ds_vesselMng.getCellData(0, "portCd"); // 항구코드
    rtnValues[12] = ds_vesselMng.getCellData(0, "pierCd"); // 부두코드
    rtnValues[13] = ds_vesselMng.getCellData(0, "pierNm"); // 부두코드명
    rtnValues[14] = ds_vesselMng.getCellData(0, "lineCd"); // LINE 코드

    //window.returnValue = rtnValues;
    //window.close();
    $c.win.closePopup($p, rtnValues);
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, [lc_lobran, lc_impExpClsCd]);
  if (scwin.cvsslMgntNo == "") {
    lc_lobran.setValue(scwin.loUpperLobranCd);
  } else {
    lc_lobran.setValue("");
  }
  scwin.f_setDate();
  lc_lobran.focus();
};

//본선관리번호
scwin.em_cvsslMgntNo_onkeyup = function (e) {
  em_cvsslMgntNo.setValue(em_cvsslMgntNo.getValue().toUpperCase());
};

//MRN
scwin.ed_mrn_onkeyup = function (e) {
  ed_mrn.setValue(ed_mrn.getValue().toUpperCase());
};

//for=gr_vesselMng event=OnDblClick
scwin.gr_vesselMng_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  var row = rowIndex;
  var rtnValues = new Array();
  rtnValues[0] = ds_vesselMng.getCellData(row, "cvsslMgntNo"); // 본선관리번호
  rtnValues[1] = ds_vesselMng.getCellData(row, "vsslCd"); // 선박코드
  rtnValues[2] = ds_vesselMng.getCellData(row, "vsslNm"); // 선박명
  rtnValues[3] = ds_vesselMng.getCellData(row, "closeDt"); // 마감일자
  rtnValues[4] = ds_vesselMng.getCellData(row, "closeHh"); // 마감시간
  rtnValues[5] = ds_vesselMng.getCellData(row, "arvDt"); // 도착(입항)일자
  rtnValues[6] = ds_vesselMng.getCellData(row, "arvHh"); // 도착(입항)시간
  rtnValues[7] = ds_vesselMng.getCellData(row, "dptDt"); // 출발(출항)일자
  rtnValues[8] = ds_vesselMng.getCellData(row, "dptHh"); // 출발(출항)시간
  rtnValues[9] = ds_vesselMng.getCellData(row, "shpCoPortcnt"); // 선사항차
  rtnValues[10] = ""; // 항로
  rtnValues[11] = ds_vesselMng.getCellData(row, "portCd"); // 항구코드
  rtnValues[12] = ds_vesselMng.getCellData(row, "pierCd"); // 부두코드
  rtnValues[13] = ds_vesselMng.getCellData(row, "pierNm"); // 부두코드명
  rtnValues[14] = ds_vesselMng.getCellData(row, "lineCd"); // LINE 코드

  //window.returnValue = rtnValues;
  //window.close();
  $c.win.closePopup($p, rtnValues);
};

//onClick="window.close();"
scwin.closeBtn_onclick = function (e) {
  $c.win.closePopup($p);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_lobran',chooseOption:'',style:'width:150px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',displayMode:'value delim label',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'xf:label',A:{ref:'lobranNm'}},{T:1,N:'xf:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_cvsslMgntNo',placeholder:'',style:'width:85px;',objType:'Data',title:'본선관리번호',maxlength:'11',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.em_cvsslMgntNo_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:85px;',objType:'Data',title:'본선관리번호',maxlength:'8',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.ed_mrn_onkeyup'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{id:'lc_impExpClsCd',chooseOption:'',style:'width:150px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',objType:'data',ref:'',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vesselMng',id:'gr_vesselMng',style:'',readOnly:'true','ev:oncelldblclick':'scwin.gr_vesselMng_oncelldblclick',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'선박명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'선박용도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'항차',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'관리<br/>점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'수출입<br/>구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'본선<br/>계획현황',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'오더여부<br/>(수입/수출)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslPurpsNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoPortcnt',inputType:'expression',width:'70',expression:'datalist(\'shpCoPortcnt\') == \'/\' ? \'\':datalist(\'shpCoPortcnt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',width:'100',dataType:'date',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'70',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'expression',width:'80',expression:'datalist(\'impExpClsCd\') == \'I/\'?\'수입\':datalist(\'impExpClsCd\') == \'/O\'?\'수출\':datalist(\'impExpClsCd\') == \'I/O\'?\'수입/수출\':\'\''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planPrscond',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreateYn',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:'display:none;'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'closeBtn',style:'',type:'button','ev:onclick':'scwin.closeBtn_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})