/*amd /ui/il/seaout/soth/se_110_01_01b.xml 16074 f72bcb0e0d948d0d224c536d89a8914d452d426294dbf746d5ce144641eed461 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)
scwin.strPreDate = WebSquare.date.dateAdd(scwin.vCurDate, -2);
scwin.hd_kcomcd = "DBEX";
scwin.userId = "";
scwin.loginClntNo = "";
scwin.loginClntNm = "";
scwin.userClsCd = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  scwin.userId = memJson.userId;
  scwin.loginClntNo = memJson.clntNo;
  scwin.loginClntNm = memJson.clntNm;
  scwin.userClsCd = memJson.userClsCd;
  const codeOptions = [{
    grpCd: "OP154",
    compID: "lc_stvClsCd",
    opt: {
      "range": "1,S"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    cnd_rd_hhio.setValue("E");
    cnd_ed_hhetdFrom.setValue(scwin.strPreDate);
    cnd_ed_hhetdTo.setValue(scwin.vCurDate);
    cnd_lc_prttype.setValue("");
  }, {
    "delay": 100
  });
};

//---------------------------------------------------------
// 공통팝업 열기
//--------------------------------------------------------- 
scwin.f_PopUp = function (disGubun, chgGubun) {
  var rtnList = new Array();
  switch (disGubun) {
    case "Customer":
      udc_hhactcust.ilCommonPopUp(scwin.callbackEngClntInfo,
      // XML상의 SELECT ID	                                                   							
      cnd_ed_hhactcust.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_ed_hhactcustnm.getValue(),
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
      //cfSetReturnValue(rtnList, cnd_ed_hhactcust,cnd_ed_hhactcustnm);					
      //}
      break;
    case "Liner":
      udc_hhliner.ilCommonPopUp(scwin.callbackEngClntInfo2,
      // XML상의 SELECT ID	                                                   							
      cnd_ed_hhliner.getValue().trim(),
      // 화면에서의 ??? Code Element의	Value                                  
      cnd_ed_hhlinernm.value,
      // 화면에서의 ??? Name Element의	Value                                  
      chgGubun,
      // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)         
      '10',
      // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      'Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN',
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
      'Liner search,Liner Code,Liner Name');
      //if(typeof(rtnList) != "undefined"){
      //cfSetReturnValue(rtnList, cnd_ed_hhliner,cnd_ed_hhlinernm);					
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
    case "Salesman":
      udc_hhsales.ilCommonPopUp(scwin.callbackRetrieveEmpInfo, cnd_ed_hhsales.getValue().trim(), cnd_ed_hhsalesnm.value, pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "Salesman,Code,Name", pNoDataCloseTF);
      //if(typeof(rtnList) != "undefined"){			      	
      //cfSetReturnValue(rtnList, cnd_ed_hhsales, cnd_ed_hhsalesnm);
      //}
      break;
  }
};

//-------------------------------------------------------------------------
// print
//-------------------------------------------------------------------------		
scwin.f_Print = function () {
  if (cnd_ed_hhetdFrom.getValue() == "") {
    $c.win.alert($p, "ETD From은(는) 필수입력항목입니다."); //@는 필수입력항목입니다.				
    cnd_ed_hhetdFrom.focus();
    return false;
  }
  if (cnd_ed_hhetdTo.getValue() == "") {
    $c.win.alert($p, "ETD To(는) 필수입력항목입니다."); //@는 필수입력항목입니다.				
    cnd_ed_hhetdTo.focus();
    return false;
  }
  // alert('reoprt view');

  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  /*
  var odiParam = new ODIParam("se_110_01_01");
      
       
      odiParam.add("CUSTOMER", cnd_ed_hhactcust.Text);		
      odiParam.add("LINER", cnd_ed_hhliner.Text);	
      odiParam.add("SALES", cnd_ed_hhsales.Text);								
      odiParam.add("USERID", "<%=userId%>" );	
  
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var formParam = new FormParam();
          
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  viewerParam.add("viewer.useprogressbar","false");
   cfOZPreview("/il/seaout/se_110_01_01.ozr", odiParam, viewerParam, formParam );	 
  */

  var ozMode = "";
  var data = {
    odiName: "se_110_01_01",
    reportName: "/il/seaout/se_110_01_01.ozr",
    odiParam: {
      KCOMCD: scwin.hd_kcomcd,
      IOGB: cnd_rd_hhio.getValue(),
      TYPE: cnd_lc_prttype.getValue(),
      FROM_DATE: cnd_ed_hhetdFrom.getValue(),
      TO_DATE: cnd_ed_hhetdTo.getValue(),
      CUSTOMER: cnd_ed_hhactcust.getValue(),
      LINER: cnd_ed_hhliner.getValue(),
      SALES: cnd_ed_hhsales.getValue(),
      USERID: scwin.userId
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
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhactcust, cnd_ed_hhactcustnm);
};
scwin.callbackEngClntInfo2 = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhliner, cnd_ed_hhlinernm);
};
scwin.callbackRetrieveEmpInfo = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_hhsales, cnd_ed_hhsalesnm);
};
scwin.udc_hhactcust_onclickEvent = function (e) {
  scwin.f_PopUp('Customer', 'F');
};
scwin.udc_hhactcust_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = cnd_ed_hhactcust.getValue().trim();

  //if (cnd_ed_hhactcust.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_hhactcustnm.setValue("");
    scwin.f_PopUp('Customer', 'T');
  } else {
    cnd_ed_hhactcustnm.setValue("");
  }
  //}
};
scwin.udc_hhliner_onclickEvent = function (e) {
  scwin.f_PopUp('Liner', 'F');
};
scwin.udc_hhliner_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = cnd_ed_hhliner.getValue().trim();

  //if (cnd_ed_hhliner.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_hhlinernm.setValue("");
    scwin.f_PopUp('Liner', 'T');
  } else {
    cnd_ed_hhlinernm.setValue("");
  }
  //}
};
scwin.udc_hhsales_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Salesman', 'F', 'F', 'F');
};
scwin.udc_hhsales_onviewchangeCodeEvent = function (info) {
  var strClntNo = "";
  strClntNo = cnd_ed_hhsales.getValue().trim();

  //if (cnd_ed_hhsales.Modified ) {
  if (strClntNo.length > 0) {
    cnd_ed_hhsalesnm.setValue("");
    scwin.f_OpenCommonPopUp("Salesman", "T", "F", "F");
  } else {
    cnd_ed_hhsalesnm.setValue("");
  }
  //}
};
scwin.btn_Print_onclick = function (e) {
  scwin.f_Print();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'cnd_rd_hhio',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',mandatory:'true',title:'Export/Import'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'E'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'ETD',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'cnd_ed_hhetdFrom',edToId:'cnd_ed_hhetdTo',validChkYn:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'cnd_lc_prttype',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'',chooseOptionLabel:'All'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'House'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'H'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Direct'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bilk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',btnId:'cnd_btn_hhactcust',codeId:'cnd_ed_hhactcust',nameId:'cnd_ed_hhactcustnm',id:'udc_hhactcust',selectID:'retrieveEngClntInfo',readOnlyName:'true','ev:onclickEvent':'scwin.udc_hhactcust_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhactcust_onviewchangeCodeEvent',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Liner',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveEngClntInfo',nameId:'cnd_ed_hhlinernm',codeId:'cnd_ed_hhliner',btnId:'cnd_btn_hhliner',id:'udc_hhliner',readOnlyName:'true','ev:onclickEvent':'scwin.udc_hhliner_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhliner_onviewchangeCodeEvent',allowCharCode:'0-9',maxlengthCode:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Salesman',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'cnd_ed_hhsales',btnId:'cnd_btn_hhsales',id:'udc_hhsales',nameId:'cnd_ed_hhsalesnm',selectID:'retrieveEmpInfo',readOnlyName:'true','ev:onclickEvent':'scwin.udc_hhsales_onclickEvent','ev:onviewchangeCodeEvent':'scwin.udc_hhsales_onviewchangeCodeEvent',allowCharCode:'0-9',maxlengthCode:'8'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Print',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_Print_onclick',userAuth:'P',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'Print'}]}]}]}]}]}]}]}]}]})