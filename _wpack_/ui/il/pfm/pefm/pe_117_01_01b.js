/*amd /ui/il/pfm/pefm/pe_117_01_01b.xml 28256 6fd181a26dfa65a381c14d783c94bd539250c918534a15fd36d045716d593a79 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'hhio',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhbltype',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'incYn',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsclntcd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhlodcd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhdisccd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetdFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetdTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetaFrom',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hhetaTo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'classification',name:'',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'hhio',name:'수출입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'정산월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'etd',name:'선적월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매입처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매입처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loading',name:'Loading',dataType:'text'}},{T:1,N:'w2:column',A:{id:'loadingName',name:'Loading',dataType:'text'}},{T:1,N:'w2:column',A:{id:'discharge',name:'Discharge',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischargeName',name:'Discharge',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhbuyernm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'Customer',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhsalesnm',name:'Salesman',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fareunit',name:'CNTR',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'QTY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhblno',name:'HBL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hhmblno',name:'MBL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ocfPchsAmt',name:'OCF총금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'othPchsAmt',name:'OCF제외금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'총',dataType:'text'}},{T:1,N:'w2:column',A:{id:'locPtnCls',name:'Partner/Buying',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pefm.RetrieveBlOcfPchsListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search", "key":"IN_DS1"}, {"id":"ds_master", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.onpageload = function () {};

//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_stDt.setValue(WebSquare.date.dateTimeAdd(today.substr(0, 6), -1, "month"));
  ed_endDt.setValue(today.substr(0, 6));
  // udc_dept.getChildren()[0].getChildren()[0].getChildren()[0].setStyle("display", "none"); // code
  // udc_dept.getChildren()[0].getChildren()[0].getChildren()[2].setStyle("display", "none"); // name
};

//---------------------------------------------------------
// 사용자 이벤트
//---------------------------------------------------------    

scwin.f_OpenCommonPopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Department":
      udc_dept.setSelectId("retrieveOpDeptCdInfo"); // XML상의 SELECT ID	
      udc_dept.ilCommonPopUp(scwin.udc_dept_callBackFunc,
      // 콜백 함수                                                   							
      ed_dept.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      txt_deptnm.getValue(),
      // 화면에서의 ??? Name Element의	Value        
      pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name" // Title순서	
      , '80,230' // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
      );
      break;
    case "Loading":
      udc_hhlod.setSelectId("retrievePortInfo"); // XML상의 SELECT ID   
      udc_hhlod.ilCommonPopUp(scwin.udc_hhlod_callBackFunc,
      // 콜백 함수                                            							
      cnd_ed_hhlodcd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_txt_hhlodnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Loading,Code,Name", pNoDataCloseTF);
      break;
    case "Discharge":
      udc_hhdisc.setSelectId("retrievePortInfo"); // XML상의 SELECT ID      
      udc_hhdisc.ilCommonPopUp(scwin.udc_hhdisc_callBackFunc,
      // 콜백 함수                                           							
      cnd_ed_hhdisccd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_txt_hhdiscnm.getValue(),
      // 화면에서의 ??? Name Element의	Value  
      pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Discharge,Code,Name", pNoDataCloseTF);
      break;
    case "BuyingCustomer":
      udc_pchs.setSelectId("retrieveEngClntInfo"); // XML상의 SELECT ID
      udc_pchs.ilCommonPopUp(scwin.udc_pchs_callBackFunc,
      // 콜백 함수
      cnd_ed_pchscd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_txt_pchsnm.getValue(), pWinCloseTF, '6', 'Customer Code,Customer Name', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Customer search,Customer Code,Customer Name", pNoDataCloseTF);
      break;
  }
};
scwin.excel = async function () {
  fileName = "해상 수출입 물동량 정보";
  await $c.data.downloadGridViewExcel($p, gr_master, {
    fileName: fileName + ".xlsx",
    sheetName: fileName,
    type: 1
  });
};
//---------------------------------------------------------
// 컴포넌트 이벤트
//--------------------------------------------------------- 
scwin.btn_retrieve_onclick = function (e) {
  if (ed_stDt.getValue().trim() == "" || ed_endDt.getValue().trim() == "") {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, ["실적일자"]);
    ed_stDt.focus();
    return;
  } else {
    ds_search.set("hhio", cnd_lc_hhio.getValue());
    ds_search.set("hhbltype", cnd_lc_hhbltype.getValue());
    ds_search.set("deptCd", ed_dept.getValue());
    ds_search.set("incYn", chb_incYn.getValue());
    ds_search.set("stDt", ed_stDt.getValue());
    ds_search.set("endDt", ed_endDt.getValue());
    ds_search.set("pchsclntcd", cnd_ed_pchscd.getValue());
    ds_search.set("hhlodcd", cnd_ed_hhlodcd.getValue());
    ds_search.set("hhdisccd", cnd_ed_hhdisccd.getValue());
    ds_search.set("hhetdFrom", cnd_ed_hhetdFrom.getValue());
    ds_search.set("hhetdTo", cnd_ed_hhetdTo.getValue());
    ds_search.set("hhetaFrom", cnd_ed_hhetaFrom.getValue());
    ds_search.set("hhetaTo", cnd_ed_hhetaTo.getValue());
    ds_search.set("classification", cnd_rd_classification.getValue());
    $c.sbm.execute($p, sbm_retrieve);
  }
};
scwin.btn_fieldClear_onclick = function (e) {
  cnd_lc_hhio.setValue("");
  cnd_lc_hhbltype.setValue("");
  ed_dept.setValue("");
  chb_incYn.setValue("");
  ed_stDt.setValue("");
  ed_endDt.setValue("");
  cnd_ed_pchscd.setValue("");
  cnd_ed_hhlodcd.setValue("");
  cnd_ed_hhdisccd.setValue("");
  cnd_ed_hhetdFrom.setValue("");
  cnd_ed_hhetdTo.setValue("");
  cnd_ed_hhetaFrom.setValue("");
  cnd_ed_hhetaTo.setValue("");
  cnd_rd_classification.setSelectedIndex(0);
  txt_deptnm.setValue("");
  cnd_txt_hhlodnm.setValue("");
  cnd_txt_hhdiscnm.setValue("");
  cnd_txt_pchsnm.setValue("");
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_master.getTotalRow() < 1) $c.gus.cfAlertMsg($p, "결과값이 없습니다.");
  ed_sellTotalRows.setValue(ds_master.getTotalRow());
};
scwin.udc_dept_onblurCodeEvent = function (e) {
  var strClntNo = ed_dept.getValue().trim();
  if (strClntNo.length > 0) {
    txt_deptnm.setValue("");
    scwin.f_OpenCommonPopUp("Department", "T", "F", "F");
  } else {
    txt_deptnm.setValue("");
  }
};
scwin.udc_hhlod_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_hhlodcd.getValue().trim();
  if (strClntNo.length > 0) {
    cnd_txt_hhlodnm.setValue("");
    scwin.f_OpenCommonPopUp("Loading", "T", "F", "F");
  } else {
    cnd_txt_hhlodnm.setValue("");
  }
};
scwin.udc_hhdisc_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_hhdisccd.getValue().trim();
  if (strClntNo.length > 0) {
    cnd_txt_hhdiscnm.setValue("");
    scwin.f_OpenCommonPopUp("Discharge", "T", "F", "F");
  } else {
    cnd_txt_hhdiscnm.setValue("");
  }
};
scwin.udc_pchs_onblurCodeEvent = function (e) {
  var strClntNo = cnd_ed_pchscd.getValue().trim();
  if (strClntNo.length > 0) {
    cnd_txt_pchsnm.setValue("");
    scwin.f_OpenCommonPopUp("BuyingCustomer", "T", "F", "F");
  } else {
    cnd_txt_pchsnm.setValue("");
  }
};
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Department', 'F', 'F', 'F');
};
scwin.udc_hhlod_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Loading', 'F', 'F', 'F');
};
scwin.udc_hhdisc_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Discharge', 'F', 'F', 'F');
};
scwin.udc_pchs_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('BuyingCustomer', 'F', 'F', 'F');
};
scwin.udc_dept_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, txt_deptnm);
};
scwin.udc_hhlod_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhlodcd, cnd_txt_hhlodnm);
};
scwin.udc_hhdisc_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhdisccd, cnd_txt_hhdiscnm);
};
scwin.udc_pchs_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_pchscd, cnd_txt_pchsnm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Partner 제외여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_classification',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제외'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'포함'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'}},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'}},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_hhio',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'All'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Cargo Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_hhbltype',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'All'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'FCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'F'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'LCL'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'L'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'form-group'},E:[{T:1,N:'xf:trigger',A:{style:'display : none;',id:'img_dept',type:'button',class:'btn ico sch'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_dept',id:'udc_dept',nameId:'txt_deptnm',popupID:'',selectID:'',style:'',validTitle:'','ev:onblurCodeEvent':'scwin.udc_dept_onblurCodeEvent','ev:onclickEvent':'scwin.udc_dept_onclickEvent'}}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_incYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Not'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'회계일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToYearMon',A:{id:'udc_dt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_stDt',edToId:'ed_endDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Loading',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_hhlodcd',nameId:'cnd_txt_hhlodnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhlod','ev:onblurCodeEvent':'scwin.udc_hhlod_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhlod_onclickEvent',allowCharCode:'a-z|A-Z',UpperFlagCode:'1',maxlengthCode:'5'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Discharge',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_hhdisccd',nameId:'cnd_txt_hhdiscnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_hhdisc','ev:onblurCodeEvent':'scwin.udc_hhdisc_onblurCodeEvent','ev:onclickEvent':'scwin.udc_hhdisc_onclickEvent',allowCharCode:'a-z|A-Z',UpperFlagCode:'1',maxlengthCode:'5'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매입처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{codeId:'cnd_ed_pchscd',nameId:'cnd_txt_pchsnm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_pchs','ev:onblurCodeEvent':'scwin.udc_pchs_onblurCodeEvent','ev:onclickEvent':'scwin.udc_pchs_onclickEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_hhetdDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_hhetdFrom',edToId:'cnd_ed_hhetdTo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_hhetaDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_hhetaFrom',edToId:'cnd_ed_hhetaTo'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'OCF매입처 거래 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_master',btnUser:'Y',gridDownFn:'scwin.excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'수출입',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'정산월',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'선적월',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'매입처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매입처',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'Loading',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'Loading Name',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Discharge',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'Discharge Name',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'부서명',width:'80'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'Customer',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'Salesman',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'CNTR',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'QTY',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'HBL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'MBL',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'OCF총금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column55',value:'OCF제외금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'총 합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'Partner/Buying',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hhio',inputType:'select',width:'80',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'80',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'etd',inputType:'text',width:'80',displayFormat:'####/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loading',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'loadingName',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'discharge',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dischargeName',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hhbuyernm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhactcustnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hhsalesnm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'fareunit',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'qty',displayMode:'label',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhblno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'hhmblno',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ocfPchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'othPchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'pchsAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'locPtnCls',displayMode:'label',textAlign:'right',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bying'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Partner'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_sellTotalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})