/*amd /ui/il/seainb/sibl/se_201_01_04p.xml 12627 180ff69b64fcccd6974b3f77f83ac514540886ff72ff2bc2ea40a3cf55431e3d */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'inpdtFrom',name:'입력시작일',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'inpdtTo',name:'입력종료일',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ocrEmail',name:'Email',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'hhio',name:'수출입구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'hhexist',name:'기등록',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_result',saveRemovedData:'true','ev:ondataload':'scwin.ds_result_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HOUSE B/L NO',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'inpdt',name:'입력일',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'hhs1',name:'Shipper Name',dataType:'text',length:'100'}},{T:1,N:'w2:column',A:{id:'ocrEmail',name:'Email',dataType:'text',length:'60'}},{T:1,N:'w2:column',A:{id:'hhexist',name:'기등록',dataType:'text',length:'1'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/il.seainb.sibl.RetrieveOcrListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"}, {"id":"ds_result","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_result","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1);
  scwin.userEmail = $c.data.getMemInfo($p, "email"); //사용자 메일

  scwin.arrRtnVal = new Array();
  scwin.args = $c.data.getParameter($p);
  //scwin.v_hhio = scwin.args[0]; // 수출, 수입 구분
  //scwin.v_hhio = "I" // 수출, 수입 구분
  // console.log("scwin.args = " + scwin.args + " : " + $c.data.getParameter().paramData)    

  let param = "";
  if (typeof scwin.args.param === "undefined") {
    param = scwin.args.data[0];
  } else {
    param = scwin.args.param;
  }
  ds_condition.set("hhio", param);
  ed_cnd_ed_from.setValue(scwin.strPreDate);
  ed_cnd_ed_to.setValue(scwin.strCurDate);
  acb_cnd_lc_hhexist.setSelectedIndex(0);
  var showTitle = "";
  if (scwin.v_hhio == "I") {
    showTitle = "Import ";
  } else {
    showTitle = "Export ";
  }
  tbx_showHhio.setValue(showTitle + "House B/L GPT 검색");
  // scwin.popTitleCh(showTitle);    
};
scwin.popTitleCh = function (showTitle) {
  $c.data.setPopupTitle($p, showTitle);
};

//본인메일 조회
scwin.f_EmailRetrieve = function (e) {
  ed_email.setValue(scwin.userEmail);
  if (ed_email.getValue() == "") {
    $c.win.alert($p, "등록된 메일이 없습니다.");
  }
};

//
scwin.f_Retrieve = async function (e) {
  let ret = await $c.gus.cfValidate($p, [tbl_Search]);
  if (!ret) {
    return false;
  }
  ;

  // // 날짜 범위 확인
  // if( !cfIsAfterDate(cnd_ed_from.Text, cnd_ed_to.Text) ){
  // // cfAlertMsg(E_MSG_CM_ERR_048, new Array("Date From", "Date To"));  //@은(는) 보다 작아야 합니다.
  // // cnd_ed_from.Focus();
  // 	// return;
  // }
  // tr_Retrieve.Post();
  $c.sbm.execute($p, sbm_Retrieve);
};

// 조회 조건 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_Search, null);
};

// 닫기
scwin.f_WinClose = function (e) {
  window.close();
};

// 조회 완료
scwin.sbm_Retrieve_submitdone = function (e) {
  if (ds_result.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_003); //  해당되는 자료가 존재하지 않습니다
  }
};

// 결과 그리드 더블클릭
scwin.gr_result_oncelldblclick = function (row, columnIndex, columnId) {
  scwin.arrRtnVal[0] = ds_result.getCellData(row, "hhblno");
  scwin.arrRtnVal[1] = ds_result.getCellData(row, "kcomcd");
  scwin.arrRtnVal[2] = ds_result.getCellData(row, "hhexist");
  $c.win.closePopup($p, scwin.arrRtnVal);
};
scwin.ed_cnd_ed_hhblno_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ds_result_ondataload = function () {
  tbx_totalRows.setValue(ds_result.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_showHhio',label:'Import House B/L GPT 검색',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_Search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_hhblno',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',validExp:'House No:no',mandatory:'false',ref:'data:ds_condition.hhblno','data-length':'255',maxByteLength:'20','ev:oneditkeyup':'scwin.ed_cnd_ed_hhblno_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'inpdtTo',refStDt:'inpdtFrom',style:'',edFromId:'ed_cnd_ed_from',edToId:'ed_cnd_ed_to',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'form',titleTo:'to',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이메일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_email',placeholder:'',style:'width:150px;',maxlength:'50',ref:'data:ds_condition.ocrEmail','data-length':'255'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기등록 여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_hhexist',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_condition.hhexist',chooseOptionValue:'all',chooseOptionLabel:'전체',objType:'data',mandatory:'false',displayMode:'label','data-length':'255'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_email',style:'',type:'button','ev:onclick':'scwin.f_EmailRetrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본인메일 조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_result',id:'gr_result',style:'','ev:oncelldblclick':'scwin.gr_result_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'House No',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'기등록',width:'60'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Date',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'E-mail',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'Shipper Name',width:'280'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hhblno',inputType:'text',width:'150',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhexist',inputType:'text',width:'60',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inpdt',inputType:'text',width:'100',editFormat:'XXXX/XX/XX',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'ocrEmail',inputType:'text',width:'200',readOnly:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhs1',inputType:'text',width:'280',readOnly:'true',sortable:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',id:'column26',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger3',style:'',type:'button','ev:onclick':'scwin.f_WinClose'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})