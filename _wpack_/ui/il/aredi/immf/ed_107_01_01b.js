/*amd /ui/il/aredi/immf/ed_107_01_01b.xml 27097 d9436c67dc6722c2e2e26811bc5c4d11f3a01a4328ecb9a902163efbe3b41668 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'send',name:'전송상태 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtFrom',name:'From  출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtTo',name:'To 출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'name7',dataType:'text',defaultValue:'DBEX'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_AirCargoManifast',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'CHK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'Send',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ediCd',name:'EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Arrival Date',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owner',name:'항공사2코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'FLT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'CG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Gross',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm2',name:'Shipper2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm3',name:'Shipper3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm4',name:'Shipper4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm5',name:'Shipper5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shTel',name:'ShipperT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'Consignee1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm2',name:'Consignee2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm3',name:'Consignee3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm4',name:'Consignee4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm5',name:'Consignee5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnTel',name:'ConsigneeT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'Goods',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm2',name:'Goods2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm3',name:'Goods3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm4',name:'Goods4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'Notify1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm2',name:'Notify2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm3',name:'Notify3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm4',name:'Notify4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm5',name:'Notify5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'장치장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'장치장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarecd',name:'하기장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarenm',name:'하기장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwareClsCd',name:'하기물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ucrNo',name:'UCR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spcCd',name:'Special',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsCd',name:'HS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnRgno',name:'Consignee',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userid',name:'REGISTER',dataType:'text'}},{T:1,N:'w2:column',A:{id:'usernm',name:'REGISTER',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.immf.RetrieveAirImportCargoManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search", "key":"IN_DS1"}, {"id":"ds_AirCargoManifast", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_AirCargoManifast","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.aredi.immf.SaveAirImportCargoManifestCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_AirCargoManifast","key":"IN_DS1"}',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  fromDay = WebSquare.date.dateTimeAdd(today, -7, "day");
  scwin.curDate = $c.gus.cfIsNull($p, $c.data.getParameter($p, "curDate")) ? today : $c.data.getParameter($p, "curDate");
  scwin.preDate = $c.gus.cfIsNull($p, $c.data.getParameter($p, "preDate")) ? fromDay : $c.data.getParameter($p, "preDate");
  scwin.blno = $c.gus.cfIsNull($p, $c.data.getParameter($p, "blno")) ? "" : $c.data.getParameter($p, "blno");
};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  cnd_ed_ondtFrom.setValue(scwin.preDate);
  cnd_ed_ondtTo.setValue(scwin.curDate);
  if (scwin.blno != "") {
    cnd_ed_blno.setValue(scwin.blno);
    scwin.btn_search_onclick();
  }
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   

//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   

scwin.btn_search_onclick = function (e) {
  if (!$c.gus.cfValidate($p, [cnd_ed_ondtFrom, cnd_ed_ondtTo])) {
    //validExp 가 yes일때 check
    return false;
  }
  if (cnd_ed_ondtFrom.getValue().trim() == '') {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["OnBoard Date From"]); //@는 필수입력항목입니다.
    cnd_ed_ondtFrom.focus();
    return false;
  }
  if (cnd_ed_ondtTo.getValue().trim() == '') {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["OnBoard Date To"]); //@는 필수입력항목입니다.
    cnd_ed_ondtTo.focus();
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, cnd_ed_ondtFrom.getValue().trim(), cnd_ed_ondtTo.getValue().trim(), false)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.btn_clean_onclick = function (e) {
  ds_Search.setEmptyValue();
};
scwin.btn_send_onclick = async function (e) {
  if (await scwin.f_ReqFieldChk()) {
    var vChkCnt = 0;
    for (var i = 0; i < ds_AirCargoManifast.getTotalRow(); i++) {
      var vChkYn = ds_AirCargoManifast.getCellData(i, "chk");
      if (vChkYn == 'T') {
        vChkCnt++;
        ds_AirCargoManifast.modifyRowStatus(i, "C"); // insert 상태 로 변경.
        continue;
      }
      if (vChkYn == 'T' && ds_AirCargoManifast.getCellData(i, "sendDt") != "") {
        vChkCnt++;
        ds_AirCargoManifast.modifyRowStatus(i, "U"); // update 상태 로 변경. ( 20080624 재전송일 경우 insert상태로 변경함) 
      }
      if (vChkYn == 'F') {
        ds_AirCargoManifast.modifyRowStatus(i, "R"); // select 상태 로 변경.
      }
    }
    if (vChkCnt < 1) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, ["Row"]); //선택된 @가 없습니다.
      return;
    }
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_ReqFieldChk = async function () {
  let validArray = [{
    id: "kcomcd",
    name: "Kcomcd",
    mandatory: true
  }, {
    id: "mblno",
    name: "Master No",
    mandatory: true
  }, {
    id: "mhno",
    name: "CONSOL NO",
    mandatory: true
  }, {
    id: "owner",
    name: "Owner",
    mandatory: true
  }, {
    id: "fltno",
    name: "Flight No",
    mandatory: true
  }, {
    id: "ondt",
    name: "Onboard",
    mandatory: true
  }, {
    id: "blno",
    name: "House No",
    mandatory: true
  }, {
    id: "cargoType",
    name: "Cargo Type",
    mandatory: true
  }, {
    id: "mftpkg",
    name: "Package",
    mandatory: true
  }, {
    id: "mftwht",
    name: "G/Weight",
    mandatory: true
  }, {
    id: "shnm1",
    name: "Shiper",
    mandatory: true
  }, {
    id: "shnm2",
    name: "Shiper Address",
    mandatory: true
  }, {
    id: "cnnm1",
    name: "Consignee",
    mandatory: true
  }, {
    id: "cnnm2",
    name: "Consignee Address",
    mandatory: true
  }, {
    id: "ngnm1",
    name: "Goods",
    mandatory: true
  }];
  ret = await $c.gus.cfValidateGrid($p, gr_gridView1, null, null, validArray, "항공수입 적하목록 전송");
  return ret;
};
scwin.btn_ktNet_onclick = function (e) {
  sURL = "http://www.ctradeworld.com/ctwpass/userLoginChk.jsp?userid=FFDBEX0001&userpass=DBE123";
  window.open(sURL);
};
scwin.btn_uLogis_onclick = function (e) {
  sURL = "https://www.ulogishub.com/gate_url.jsp?sid=FFDBEX0001&password=DBE123";
  window.open(sURL);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == '-1') {
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.btn_search_onclick();
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_AirCargoManifast.getTotalRow() == 0) {
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    $c.win.alert($p, "Data not found.");
  } else {
    ed_totalRow.setValue(ds_AirCargoManifast.getTotalRow());
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Send Status',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_send',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:ds_Search.send'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'OnBoard Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'ondtFrom',refDataMap:'ds_Search',style:'',id:'udc_ondt',refEdDt:'ondtTo',edFromId:'cnd_ed_ondtFrom',edToId:'cnd_ed_ondtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_fltno',style:'width:150px;',ref:'data:ds_Search.fltno'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',style:'width:150px;',ref:'data:ds_Search.blno'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clean',style:'',type:'button','ev:onclick':'scwin.btn_clean_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_AirCargoManifast',id:'gr_gridView1',style:'',visibleRowNum:'16',visibleRowNumFix:'true',rowStatusVisible:'false',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'Send Date',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'EDI',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Arrival Date',width:'130',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',style:'',value:'법인코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',style:'',value:'Master No',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',style:'',value:'House No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',style:'',value:'CONSOL NO',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',style:'',value:'항공사2코드 (Ex. KE,OZ)',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'FLT No',width:'120',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'CG Type',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'PKG',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column27',value:'Gross WHT',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column21',value:'Shipper',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column23',value:'Shipper Address1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column25',value:'Shipper Address2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column41',value:'Shipper Address3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column39',value:'Shipper Address4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column37',value:'Shipper Telephone',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'column33',value:'Consignee',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column35',value:'Consignee Address1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column53',value:'Consignee Address2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column51',value:'Consignee Address3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column49',value:'Consignee Address4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column47',value:'Consignee Telephone',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column67',value:'Goods',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column65',value:'Goods2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'Goods3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column61',value:'Goods4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column59',value:'Notify',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column57',value:'Notify Address1',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column55',value:'Notify Address2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column43',value:'Notify Address3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column45',value:'Notify Address4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'장치장코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column85',value:'장치장명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column83',value:'하기장소코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column81',value:'하기장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column79',value:'하기물품코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column77',value:'UCR No',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column75',value:'Special Cargo Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column73',value:'HS Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'column71',value:'Consignee 사업자등록번호',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column91',value:'REGISTER ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column89',value:'REGISTER NM',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',valueType:'other',falseValue:'F',trueValue:'T',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sendDt',inputType:'text',style:'',value:'',width:'120',displayFormat:'####/##/##/##:##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ediCd',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'MCFS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'K'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ACPS'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',style:'',value:'',width:'130',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'owner',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fltno',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'cargoType',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'mftpkg',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mftwht',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shnm1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shnm2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shnm3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shnm4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shnm5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'shTel',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'220',inputType:'text',style:'',id:'cnnm1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cnnm2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cnnm3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cnnm4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cnnm5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'cnTel',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ngnm1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ngnm2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ngnm3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ngnm4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ntnm1',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ntnm2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ntnm3',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ntnm4',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'ntnm5',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'warecd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'warenm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'mwarecd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'mwarenm',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'mwareClsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'ucrNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'spcCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'hsCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'hsn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',style:'',id:'cnRgno',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'userid',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'usernm',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ktNet',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_ktNet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KT Net 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_uLogis',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_uLogis_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'uLogisHub 접속'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_send',style:'',type:'button','ev:onclick':'scwin.btn_send_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'EDI Send'}]}]}]}]}]}]}]}]}]})