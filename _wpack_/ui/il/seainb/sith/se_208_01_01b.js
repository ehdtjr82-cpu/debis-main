/*amd /ui/il/seainb/sith/se_208_01_01b.xml 14642 bec7ecd101a08e128bdaafa59d02d92244c4b55a1d68308a13a5e11410659cce */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_houseList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = "";
scwin.strPreDate = "";
scwin.sUserId = "";
scwin.hd_kcomcd = "DBEX";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, $c.date.getServerDateTime($p, "yyyyMMdd"), -2, "yyyyMMdd");
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
};
scwin.onUdcCompleted = function () {
  cnd_txt_hhactcustnm.setReadOnly(true);
  cnd_txt_hhlinernm.setReadOnly(true);
  cnd_txt_hhsalesnm.setReadOnly(true);
  cnd_rd_hhio.setValue("I");
  cnd_ed_hhetaFrom.setValue(scwin.strPreDate);
  cnd_ed_hhetaTo.setValue(scwin.strCurDate);
  cnd_lc_prttype.setValue("");
};

//---------------------------------------------------------
// 공통팝업 열기
//--------------------------------------------------------- 
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case "Customer":
      udc_comCodeHhatcust.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhactcust, cnd_txt_hhactcustnm);
      },
      // XML상의 SELECT ID	                                                   							
      cnd_ed_hhactcust.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_txt_hhactcustnm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      "10",
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
      // Title순서	                                                           
      "140,300,100,100,100,100,100,,,100",
      // 보여주는 각 컬럼들의 폭	                                               
      "8,9",
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      "500",
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      "500",
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      "Customer search,Customer Code,Customer Name");
      break;
    case "Liner":
      udc_comCodeHhliner.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhliner, cnd_txt_hhlinernm);
      },
      // XML상의 SELECT ID	                                                   							
      cnd_ed_hhliner.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_txt_hhlinernm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      "10",
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
      // Title순서	                                                           
      "140,300,100,100,100,100,100,,,100",
      // 보여주는 각 컬럼들의 폭	                                               
      "8,9",
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      "500",
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      "500",
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      "Liner search,Liner Code,Liner Name");
      break;
  }
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------  
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (gubun1) {
    case "Salesman":
      udc_comCodeHhsales.ilCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhsales, cnd_txt_hhsalesnm);
      }, cnd_ed_hhsales.getValue().trim(), cnd_txt_hhsalesnm.getValue(), pWinCloseTF, "2", "Code, Name", "80,230", "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      break;
  }
};

//-------------------------------------------------------------------------
// print
//-------------------------------------------------------------------------		
scwin.f_Print = async function () {
  if (cnd_ed_hhetaFrom.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA From"]); //@는 필수입력항목입니다.				
    cnd_ed_hhetaFrom.focus();
    return false;
  }
  if (cnd_ed_hhetaTo.getValue() == "") {
    await $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["ETA To"]); //@는 필수입력항목입니다.			
    cnd_ed_hhetaTo.focus();
    return false;
  }
  let data = {
    odiName: "se_110_01_01",
    reportName: "/il/seaout/se_110_01_01.ozr",
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      IOGB: cnd_rd_hhio.getValue(),
      FROM_DATE: cnd_ed_hhetaFrom.getValue(),
      TO_DATE: cnd_ed_hhetaTo.getValue(),
      TYPE: cnd_lc_prttype.getValue(),
      CUSTOMER: cnd_ed_hhactcust.getValue(),
      LINER: cnd_ed_hhliner.getValue(),
      SALES: cnd_ed_hhsales.getValue(),
      USERID: scwin.sUserId
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 100,
      // 배율 설정
      mode: "preview"
    },
    formParam: {}
  };
  scwin.openPopup(data);
};
scwin.openPopup = function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 880,
    title: "오즈 리포트"
  };
  $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};
scwin.udc_comCodeHhatcust_onblurCodeEvent = function (e) {
  if (cnd_ed_hhactcust.originalValue == cnd_ed_hhactcust.getValue()) {
    return;
  }
  let strClntNo = cnd_ed_hhactcust.getValue().trim();
  cnd_txt_hhactcustnm.setValue("");
  if (strClntNo.length > 0) {
    scwin.f_PopUp("Customer", "T");
  }
};
scwin.udc_comCodeHhliner_onblurCodeEvent = function (e) {
  if (cnd_ed_hhliner.originalValue == cnd_ed_hhliner.getValue()) {
    return;
  }
  let strClntNo = cnd_ed_hhliner.getValue();
  cnd_txt_hhlinernm.setValue("");
  if (strClntNo.length > 0) {
    scwin.f_PopUp("Liner", "T");
  }
};
scwin.udc_comCodeHhsales_onblurCodeEvent = function (e) {
  if (cnd_ed_hhsales.originalValue == cnd_ed_hhsales.getValue()) {
    return;
  }
  let strClntNo = cnd_ed_hhsales.getValue();
  cnd_txt_hhsalesnm.setValue("");
  if (strClntNo.length > 0) {
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  }
};
scwin.udc_comCodeHhatcust_onclickEvent = function (e) {
  scwin.f_PopUp("Customer", "F");
};
scwin.udc_comCodeHhliner_onclickEvent = function (e) {
  scwin.f_PopUp("Liner", "F");
};
scwin.udc_comCodeHhsales_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp("Salesman", "F", "F", "F");
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'tb_retrieve',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_hhio',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'ETA',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'cnd_ed_hhetaFrom',edToId:'cnd_ed_hhetaTo',id:'udc_fromToCalendar',mandatoryFrom:'true',objTypeFrom:'data',objTypeTo:'data',refDataMap:'',refEdDt:'',refStDt:'',style:'',titleFrom:'ETA From',mandatoryTo:'true',titleTo:'ETA To'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',class:'',editType:'select',id:'cnd_lc_prttype',ref:'',search:'none',style:'',submenuSize:'auto',chooseOption:'',validExp:'Type:yes',objType:'Data',emptyItem:'true',hideListOnFocus:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Direct'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{allowCharCode:'0-9',codeId:'cnd_ed_hhactcust',id:'udc_comCodeHhatcust',maxlengthCode:'6',nameId:'cnd_txt_hhactcustnm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'','ev:onclickEvent':'scwin.udc_comCodeHhatcust_onclickEvent',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_comCodeHhatcust_onblurCodeEvent',validExpCode:' Customer:no',validExpName:' Customer Name:no'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Liner',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{allowCharCode:'0-9',codeId:'cnd_ed_hhliner','ev:onclickEvent':'scwin.udc_comCodeHhliner_onclickEvent',id:'udc_comCodeHhliner',maxlengthCode:'6',nameId:'cnd_txt_hhlinernm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveEngClntInfo',style:'',validTitle:'',validExpCode:' Liner:no',validExpName:' Liner Name:no','ev:onblurCodeEvent':'scwin.udc_comCodeHhliner_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{allowCharCode:'0-9',codeId:'cnd_ed_hhsales','ev:onclickEvent':'scwin.udc_comCodeHhsales_onclickEvent',id:'udc_comCodeHhsales',maxlengthCode:'8',nameId:'cnd_txt_hhsalesnm',objTypeCode:'data',objTypeName:'data',popupID:'',selectID:'retrieveEmpInfo',style:'',validTitle:'',validExpCode:' Salesman:no',validExpName:' Salesman Name:no','ev:onblurCodeEvent':'scwin.udc_comCodeHhsales_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]})