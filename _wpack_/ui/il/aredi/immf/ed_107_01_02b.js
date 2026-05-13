/*amd /ui/il/aredi/immf/ed_107_01_02b.xml 29380 df60d026755a69972ae7ec5d20651546ee015e6aba8dfd1a6f0d3e26a88f31a4 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_DCD',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'CHK',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendDt',name:'Send',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ondt',name:'Arrival',dataType:'text'}},{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblno',name:'Master',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blno',name:'House',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mhno',name:'CONSOL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'owner',name:'항공사2코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fltno',name:'FLT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warecd',name:'배정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'warenm',name:'장치장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarecd',name:'하기장소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwarenm',name:'하기장소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mwareClsCd',name:'하기;물품코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoType',name:'CG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm1',name:'Shipper',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm2',name:'Shipper;Address1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm3',name:'Shipper;Address2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm4',name:'Shipper;Address3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shnm5',name:'Shipper;Address4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shTel',name:'Shipper;Telephone',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cncd',name:'Consignee;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm1',name:'Consignee',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnRgno',name:'Consignee;사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm2',name:'Consignee;Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm3',name:'Consignee;Address2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm4',name:'Consignee;Address3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnnm5',name:'Consignee;Address4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnTel',name:'Consignee;Telephone',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcd',name:'Notifty;Code',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm1',name:'Notifty',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntRgno',name:'Notifty;사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm2',name:'Notifty;Address',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm3',name:'Notifty;Address2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm4',name:'Notifty;Address3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntnm5',name:'Notifty;Address4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntTel',name:'Notifty;Telephone',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm1',name:'Goods',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm2',name:'Goods2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm3',name:'Goods3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ngnm4',name:'Goods4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftpkg',name:'PKG',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mftwht',name:'Gross',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ucrNo',name:'UCR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spcCd',name:'Special',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsCd',name:'HS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_Search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'send',name:'전송상태 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtFrom',name:'From  출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ondtTo',name:'To 출항일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'fltno',name:'편명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blno',name:'Master B/L No',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcomcd',name:'name7',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.aredi.immf.RetrieveDischargingCargoDeclarationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_Search", "key":"IN_DS1"}, {"id":"ds_DCD", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_DCD","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Save',action:'/il.aredi.immf.SaveDischargingCargoDeclarationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_DCD", "key":"IN_DS1"}]',target:'data:json,{}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
date = WebSquare.date.getCurrentServerDate("yyyyMMdd");
scwin.strCurDate = $c.data.getParameter($p, "curDate") == null ? WebSquare.date.dateAdd(date, -7) : $c.data.getParameter($p, "curDate"); //시작일자
scwin.strPreDate = $c.data.getParameter($p, "preDate") == null ? date : $c.data.getParameter($p, "preDate"); //종료일자.
scwin.strblno = $c.data.getParameter($p, "blno") == null ? "" : $c.data.getParameter($p, "blno"); //BLNO.

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  cnd_ed_ondtFrom.setValue(scwin.strCurDate);
  cnd_ed_ondtTo.setValue(scwin.strPreDate);
  scwin.f_Set("INIT");
  cnd_lc_send.setSelectedIndex(0);
  cnd_lc_send.focus();
  var blno = scwin.strblno;
  if (blno != "" || blno != null) {
    cnd_ed_blno.setValue(blno);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 사용자 함수
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // if (!$c.gus.cfValidate([udc_ondt])) {  //validExp 가 yes일때 check
  //     return false;
  // }
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
  ds_Search.set("kcomcd", "DBEX");
  ds_Search.set("send", cnd_lc_send.getValue());
  ds_Search.set("ondtFrom", cnd_ed_ondtFrom.getValue());
  ds_Search.set("ondtTo", cnd_ed_ondtTo.getValue());
  ds_Search.set("fltno", cnd_ed_fltno.getValue());
  ds_Search.set("mblno", "");
  ds_Search.set("blno", cnd_ed_blno.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.f_Set = function (gubun) {
  switch (gubun) {
    case "INIT":
      //초기화
      $c.gus.cfDisableBtnOnly($p, [btn_ediSend]);
      break;
    case "RETRIEVE":
      //조회모드	
      $c.gus.cfEnableKeyData($p);
      $c.gus.cfEnableBtnOnly($p, [btn_ediSend]);
      break;
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
  ret = await $c.gus.cfValidateGrid($p, gr_DCD, null, null, validArray, "수입 하기 신고 목록");
  return ret;
};
scwin.f_Save = async function () {
  if (await scwin.f_ReqFieldChk()) {
    var vChkCnt = 0;
    for (var i = 0; i < ds_DCD.getTotalRow(); i++) {
      var vChkYn = ds_DCD.getCellData(i, "chk");
      if (vChkYn == 'T') {
        vChkCnt++;
        ds_DCD.modifyRowStatus(i, "C"); // insert 상태 로 변경.
      }
      if (vChkYn == 'T' && ds_DCD.getCellData(i, "sendDt") != "") {
        vChkCnt++;
        ds_DCD.modifyRowStatus(i, "U"); // update 상태 로 변경.
      }
      if (vChkYn == 'F') {
        ds_DCD.modifyRowStatus(i, "R"); // select 상태 로 변경.
      }
    }
    if (vChkCnt < 1) {
      // $c.gus.cfAlertMsg(MSG_CM_ERR_056, ["Row"]); //선택된 @가 없습니다.
      $c.win.alert($p, "Nothing bas been selected.");
      return;
    }
    $c.sbm.execute($p, sbm_Save);
  }
};

//-------------------------------------------------------------------------
// 컴포넌트 이벤트
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  cnd_lc_send.setSelectedIndex(0);
  cnd_ed_ondtFrom.setValue("");
  cnd_ed_ondtTo.setValue("");
  cnd_ed_fltno.setValue("");
  cnd_ed_blno.setValue("");
};
scwin.btn_ediSend_onclick = function (e) {
  scwin.f_Save();
};
scwin.btn_ktNet_onclick = function (e) {
  sURL = "http://www.ctradeworld.com/ctwpass/userLoginChk.jsp?userid=FFDBEX0001&userpass=DBE123";
  window.open(sURL);
};
scwin.btn_uLogis_onclick = function (e) {
  sURL = "https://www.ulogishub.com/gate_url.jsp?sid=FFDBEX0001&password=DBE123";
  window.open(sURL);
};
scwin.sbm_retrieve_submitdone = function (e) {
  ed_totCnt.setValue(ds_DCD.getTotalRow());
  if (ds_DCD.getTotalRow() == 0) {
    $c.win.alert($p, "Data not found.");
    $c.gus.cfDisableBtnOnly($p, [btn_ediSend]);
    // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
    return;
  }
  scwin.f_Set("RETRIEVE");
};
scwin.sbm_Save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == '-1') {
    return;
  }
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  scwin.f_Retrieve();
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Send Status',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{id:'cnd_lc_send',chooseOption:'',style:'width: 148px;height: 21px;',submenuSize:'auto',allOption:'',disabled:'false',direction:'auto',appearance:'minimal',disabledClass:'w2selectbox_disabled',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'NotSend'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Send'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'OnBoard Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ondt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_ondtFrom',edToId:'cnd_ed_ondtTo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Flight No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_fltno',placeholder:'',style:'width:150px;',allowChar:'0-9|a-z|A-Z',maxlength:'6',validateOnInput:'true','ev:oneditkeyup':'scwin.oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'cnd_ed_blno',placeholder:'',style:'width:150px;',allowChar:'0-9|a-z|A-Z',maxlength:'20',validateOnInput:'true','ev:oneditkeyup':'scwin.oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_DCD',id:'gr_DCD',style:'',visibleRowNum:'16',columnMove:'false',readOnly:'true',validExp:'kcomcd:Kcomcd:yes&mblno:Master No:yes&mhno:CONSOL NO:yes&owner:Owner:yes&fltno:Flight No:yes&ondt:Onboard:yes&blno:House No:yes&cargoType:Cargo Type:yes&mftpkg:Package:yes&mftwht:G/Weight:yes&shnm1:Shiper:yes&shnm2:Shiper Address:yes&cnnm1:Consignee:yes&cnnm2:Consignee Address:yes&ngnm1:Goods:yes',gridName:'수입 하기 신고 목록'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',width:'40'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',width:'120',value:'Send Date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'100',value:'Arrival Date',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'100',value:'법인코드',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'100',value:'Master No',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'100',value:'House No'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'100',value:'CONSOL NO',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'100',value:'항공사2코드 (Ex. KE,OZ)',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',displayMode:'label',value:'FLT No',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label',value:'배정코드'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',value:'장치장명'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label',value:'하기장소코드',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label',value:'하기장소'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label',value:'하기<br/>물품코드'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',value:'CG Type',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column41',displayMode:'label',value:'Shipper',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label',value:'Shipper;Address1',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label',value:'Shipper;Address2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',displayMode:'label',value:'Shipper;Address3',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label',value:'Shipper;Address4',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',displayMode:'label',value:'Shipper;Telephone',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label',value:'Consignee;Code',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',displayMode:'label',value:'Consignee',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label',value:'Consignee<br/>사업자번호',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',displayMode:'label',value:'Consignee<br/>Address',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',displayMode:'label',value:'Consignee;Address2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'100',value:'Consignee;Address3',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'100',value:'Consignee;Address4',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column89',value:'Consignee;Telephone',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column87',value:'Notifty;Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column85',value:'Notifty',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column83',value:'Notifty<br/>사업자번호',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column81',value:'Notifty<br/>Address',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column79',value:'Notifty;Address2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column77',value:'Notifty;Address3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column75',value:'Notifty;Address4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column73',value:'Notifty<br/>Telephone',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column71',value:'Goods',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column69',value:'Goods2',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'Goods3',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column65',value:'Goods4',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',value:'PKG',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',value:'Gross WHT',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'UCR No',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'Special Cargo Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column91',value:'HS Code',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column93',value:'HSN',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'40',falseValue:'F',trueValue:'T',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sendDt',inputType:'text',width:'120',displayFormat:'####/##/## ##:##',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ondt',inputType:'text',width:'100',displayFormat:'####/##/##',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'kcomcd',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mblno',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'blno',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mhno',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'owner',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fltno',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'warecd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'warenm',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mwarecd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mwarenm',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mwareClsCd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoType',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'shnm1',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shnm2',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shnm3',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shnm4',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shnm5',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'shTel',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cncd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cnnm1',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnRgno',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'cnnm2',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnnm3',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnnm4',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cnnm5',inputType:'text',width:'100',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cnTel',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntcd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'ntnm1',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntRgno',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'ntnm2',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntnm3',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntnm4',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntnm5',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntTel',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngnm1',displayMode:'label',textAlign:'left',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngnm2',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngnm3',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ngnm4',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mftpkg',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'mftwht',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.000',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ucrNo',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'spcCd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hsCd',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hsn',displayMode:'label',ignoreChar:'!|@|#|$|%|^|&|+|[|]|"|\\'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_ktNet',type:'button',class:'btn link','ev:onclick':'scwin.btn_ktNet_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'KT Net 접속'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_uLogis',style:'',type:'button','ev:onclick':'scwin.btn_uLogis_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'uLogisHub 접속'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ediSend',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_ediSend_onclick',disabled:'true'},E:[{T:1,N:'xf:label',E:[{T:3,text:'EDI Send'}]}]}]}]}]}]}]}]}]})