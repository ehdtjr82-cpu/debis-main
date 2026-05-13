/*amd /ui/il/seaout/sobk/se_104_01_01b.xml 15189 f0b351f3a07dbbcac35971a32d5d6c7d71b4fa31e3c6d36b84ee5d2f9f343bd0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.hd_kcomcd = "DBEX";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  scwin.loginClntNo = memJson.clntNo;
  scwin.loginClntNm = memJson.clntNm;
  scwin.userClsCd = memJson.userClsCd;
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    cnd_ed_bkEtdFrom.setValue(scwin.strPreDate);
    cnd_ed_bkEtdTo.setValue(scwin.vCurDate);
    cnd_rd_bkbltype.setValue("");
    if (cnd_lc_iogb.getValue() == "O") {
      scwin.f_EtdDisplay();
    } else {
      scwin.f_EtaDisplay();
    }
    cnd_lc_iogb.focus();
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_PopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case "Customer":
      // Customer
      udc_custCd.ilCommonPopUp(scwin.callbackEngClntInfo,
      // XML상의 SELECT ID	                                                   							
      cnd_ed_custCd.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_ed_custNm.getValue(),
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
      // Title순서	                                                           
      '140,300,100,100,100,100,100,,,100',
      // 보여주는 각 컬럼들의 폭	                                               
      '8,9',
      // 컬럼중에서 숨기는	컬럼 지정	                                       
      null,
      // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능              
      '500',
      // POP-UP뛰을때 원도우의	사용자 정의	폭                                 
      '500',
      // POP-UP뛰을때 우도우의	사용자 정의	높이	                           
      null,
      // 윈도우 위치 Y좌표	                                                   
      null,
      // 윈도우 위치 X좌표                                                       
      null,
      // 중복체크여부	("F")                                                      
      "F",
      // 전체검색허용여부	("F")                                                  
      'Customer search,Customer Code,Customer Name');
      //if(typeof(rtnList) != "undefined"){
      //cfSetReturnValue(rtnList, cnd_ed_custCd,cnd_ed_custNm);				
      //}					
      break;
  }
};

//---------------------------------------------------------
// 공통팝업 열기
//---------------------------------------------------------   
scwin.f_OpenCommonPopUp = function (gubun1, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  var rtnList = new Array();
  switch (gubun1) {
    case "Port":
      udc_disCd.ilCommonPopUp(scwin.callbackPortInfo, cnd_ed_disCd.getValue().trim(), cnd_ed_disNm.getValue(), pWinCloseTF, '6', 'Code, Name,,,, UNCODE', '80,160,,,,80', "3,4,5,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Port,Code,Name", pNoDataCloseTF);
      //if(typeof(rtnList) != "undefined"){			      	
      //cfSetReturnValue(rtnList, cnd_ed_disCd, cnd_txt_disNm);
      //}
      break;
  }
};

//-------------------------------------------------------------------------
// print
//-------------------------------------------------------------------------		
scwin.f_Print = function () {
  if (cnd_ed_bkEtdFrom.getValue() == "") {
    //$c.win.alert("Date From은(는) 필수입력항목입니다."); //@는 필수입력항목입니다.			
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Date From"]);
    cnd_ed_bkEtdFrom.focus();
    return false;
  }
  if (cnd_ed_bkEtdTo.getValue() == "") {
    //$c.win.alert("Date To은(는) 필수입력항목입니다."); //@는 필수입력항목입니다.			
    $c.gus.cfAlertMsg($p, E_MSG_CM_ERR_002, ["Date To"]);
    cnd_ed_bkEtdTo.focus();
    return false;
  }

  // alert('reoprt view');

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam) 
  /*
  var odiParam = new ODIParam("se_104_01_01");
      odiParam.add("KCOMCD", hd_kcomcd.value);
      odiParam.add("IOGB", cnd_lc_iogb.BindColVal);			
      odiParam.add("TYPE", cnd_rd_bkbltype.CodeValue);			
      odiParam.add("FROM_DATE", cnd_ed_bkEtdFrom.Text);
      odiParam.add("TO_DATE", cnd_ed_bkEtdTo.Text);
      odiParam.add("PORT", cnd_ed_disCd.Text);
      odiParam.add("PORTNM", cnd_txt_disNm.value);			
      odiParam.add("CUSTOMER", cnd_ed_custCd.Text);	
      odiParam.add("CUSTOMERNM", cnd_txt_custNm.value);						
                                          
  
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var formParam = new FormParam();
          
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar","false");
   cfOZPreview("/il/seaout/se_104_01_01.ozr", odiParam, viewerParam, formParam );	 
  */

  var ozMode = "";
  var data = {
    odiName: "se_104_01_01",
    reportName: "/il/seaout/se_104_01_01.ozr",
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      IOGB: cnd_lc_iogb.getValue(),
      TYPE: cnd_rd_bkbltype.getValue(),
      FROM_DATE: cnd_ed_bkEtdFrom.getValue(),
      TO_DATE: cnd_ed_bkEtdTo.getValue(),
      PORT: cnd_ed_disCd.getValue(),
      PORTNM: cnd_ed_disNm.getValue(),
      CUSTOMER: cnd_ed_custCd.getValue(),
      CUSTOMERNM: cnd_ed_custNm.getValue()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: ozMode
    },
    formParam: {}
  };
  console.log(data.odiParam);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
//------------------------------------------------------------------------- 
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
scwin.callbackEngClntInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_custCd, cnd_ed_custNm);
};
scwin.callbackPortInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_disCd, cnd_ed_disNm);
};

//-------------------------------------------------------------------------
// f_EtdDisplay
//-------------------------------------------------------------------------		
scwin.f_EtdDisplay = function () {
  /*
  lay_gubun1.style.display = "block";
  lay_gubun2.style.display = "none";		
  */
  lay_gubun1.setValue("ETD");
};

//-------------------------------------------------------------------------
// f_EtaDisplay
//-------------------------------------------------------------------------		
scwin.f_EtaDisplay = function () {
  /*
  lay_gubun1.style.display = "none";
  lay_gubun2.style.display = "block";		
  */
  lay_gubun1.setValue("ETA");
};
scwin.btn_Print_onclick = function (e) {
  scwin.f_Print();
};
scwin.cnd_lc_iogb_onviewchange = function (info) {
  console.log(info);
  var value = info.newValue;
  if (value == "O") {
    scwin.f_EtdDisplay();
  } else {
    scwin.f_EtaDisplay();
  }
};
scwin.udc_disCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Port', 'F', 'F', 'F');
};
scwin.udc_disCd_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = cnd_ed_disCd.getValue().trim();

  //if (cnd_ed_custCd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_disNm.setValue("");
    scwin.f_OpenCommonPopUp("Port", "T", "F", "F");
  } else {
    cnd_ed_disNm.setValue("");
  }
  //}
};
scwin.udc_disCd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = cnd_ed_disCd.getValue().trim();

  //if (cnd_ed_custCd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_disNm.setValue("");
    scwin.f_OpenCommonPopUp("Port", "T", "F", "F");
  } else {
    cnd_ed_disNm.setValue("");
  }
  //}
};
scwin.udc_disCd_onviewchangeNameEvent = function (info) {
  scwin.f_OpenCommonPopUp('Port', 'F', 'F', 'F');
};
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.udc_custCd_onblurCodeEvent = function (e) {
  var strClntNo = "";
  strClntNo = cnd_ed_custCd.getValue().trim();

  //if (cnd_ed_custCd.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_custNm.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    cnd_ed_custNm.setValue("");
  }
  //}
};
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp('Customer', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'IN/OUT',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'','ev:onviewchange':'scwin.cnd_lc_iogb_onviewchange',disableEdit:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_bkbltype',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Container'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'All'}]},{T:1,N:'xf:value'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'lay_gubun1',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_bkEtdFrom',edToId:'cnd_ed_bkEtdTo',mandatoryFrom:'true',mandatoryTo:'true',validChkYn:'Y'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'PORT',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_disCd',btnId:'cnd_btn_disCd',id:'udc_disCd',nameId:'cnd_ed_disNm',selectID:'retrievePortInfo','ev:onclickEvent':'scwin.udc_disCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_disCd_onviewchangeNameEvent',allowCharCode:'A-Z,a-z',maxlengthCode:'5',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_disCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_custCd',btnId:'cnd_btn_custCd',id:'udc_custCd',nameId:'cnd_ed_custNm',selectID:'retrieveEngClntInfo','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',allowCharCode:'0-9',maxlengthCode:'6','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'P',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]})