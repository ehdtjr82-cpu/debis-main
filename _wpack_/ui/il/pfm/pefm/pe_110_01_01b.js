/*amd /ui/il/pfm/pefm/pe_110_01_01b.xml 15491 f784f6b79192a7ff21a67805886e2d9c6769d34d20f55779420ade2c7f177c56 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.f_DefaultValue,scwin.f_FieldClear,scwin.f_Print,scwin.openOzPopup,scwin.f_PopUp'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -15);
scwin.params = $c.data.getParameter($p);
scwin.p_linkcheck = scwin.params.linkcheck; // request.getParameter("linkcheck");  //  0:default,1:Booking Search,2:House Search,3:Master Search,4: Booking,5:House,6:master
scwin.p_kcomcd = scwin.params.kcomcd; // request.getParameter("kcomcd");
scwin.p_blno = scwin.params.blno; // request.getParameter("blno");
scwin.p_mhno = scwin.params.mhno; // request.getParameter("mhno");
scwin.p_bkno = scwin.params.bkno; // request.getParameter("bkno");

scwin.PRTTYPE = {
  TYPE_1: "1",
  TYPE_2: "2"
}; // Report Type (국제 영업팀 업무 현황 : 1, 거래처별/선적항구별 현황 : 2)
scwin.POPUP_TYPE = {
  CUSTOMER: "Customer",
  PARTNER: "Partner",
  LINER: "Liner"
};
scwin.POPUP_KIND = {
  SEARCH: "T",
  FIXED: "F"
};
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_DefaultValue();

  // TEST DATA
  //ed_cnd_ed_resultDtFrom.setValue("20221125")
};

// Report Type 변경 시 customer 조회 필드 활성화/비활성화
scwin.acb_cnd_lc_prtType_onchange = function (info) {
  let prtType = acb_cnd_lc_prtType.getValue();
  if (prtType == scwin.PRTTYPE.TYPE_2) {
    $c.gus.cfEnableObjects($p, [cnd_ed_custCd, cnd_txt_custNm]);
  } else {
    $c.gus.cfDisableObjects($p, [cnd_ed_custCd, cnd_txt_custNm]);
    cnd_ed_custCd.setValue("");
    cnd_txt_custNm.setValue("");
  }
};

// Customer Code 입력 후 포커스 아웃 시
scwin.udc_custCd_onblurCodeEvent = function (e) {
  let custCd = (cnd_ed_custCd.getValue() ?? "").trim();
  if (custCd.length > 0) {
    scwin.f_PopUp(scwin.POPUP_TYPE.CUSTOMER, scwin.POPUP_KIND.SEARCH);
  } else {
    cnd_txt_custNm.setValue("");
  }
};

// Customer 조회 클릭 시
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_PopUp(scwin.POPUP_TYPE.CUSTOMER, scwin.POPUP_KIND.FIXED);
};

// Customer Name 변경 시
scwin.udc_custCd_onviewchangeNameEvent = function (info) {
  scwin.f_PopUp(scwin.POPUP_TYPE.CUSTOMER, scwin.POPUP_KIND.SEARCH);
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_DefaultValue
 * @description 항목 초기화
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_DefaultValue = function () {
  acb_cnd_lc_iogb.setSelectedIndex(0);
  acb_cnd_lc_prtType.setSelectedIndex(0);
  acb_cnd_lc_prtType2.setSelectedIndex(1);
  ed_cnd_ed_resultDtFrom.setValue(scwin.strPreDate);
  ed_cnd_ed_resultDtTo.setValue(scwin.strCurDate);
  $c.gus.cfDisableObjects($p, [cnd_ed_custCd, cnd_txt_custNm]);
};

//---------------------------------------------------------
// 조회 조건 지우기
//---------------------------------------------------------
/**
 * @method
 * @name f_FieldClear
 * @description 필드 초기화
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_FieldClear = function (e) {
  acb_cnd_lc_iogb.setSelectedIndex(0);
  acb_cnd_lc_prtType.setSelectedIndex(0);
  acb_cnd_lc_prtType2.setSelectedIndex(1);
  ed_cnd_ed_resultDtFrom.setValue(scwin.strPreDate);
  ed_cnd_ed_resultDtTo.setValue(scwin.strCurDate);
  cnd_ed_custCd.setValue("");
  cnd_txt_custNm.setValue("");
  $c.gus.cfDisableObjects($p, [cnd_ed_custCd, cnd_txt_custNm]);
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_Print
 * @description 오즈리포트를 출력한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_Print = async function (e) {
  //README : ASIS에는 없지만 QA 요청으로 시작~종료일 체크 추가
  let ret = await $c.gus.cfValidate($p, [ed_cnd_ed_resultDtFrom, ed_cnd_ed_resultDtTo]);
  if (!ret) {
    return;
  }
  let prtType = acb_cnd_lc_prtType.getValue();
  let data = undefined;
  switch (prtType) {
    case scwin.PRTTYPE.TYPE_1:
      //국제 영업팀 업무 현황
      data = {
        odiName: 'pe_110_01_01',
        reportName: '/il/pfm/pe_110_01_01.ozr',
        odiParam: {
          FROM_DT: ed_cnd_ed_resultDtFrom.getValue(),
          TO_DT: ed_cnd_ed_resultDtTo.getValue(),
          PRTTYPE: acb_cnd_lc_prtType2.getValue()
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 100,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
    case scwin.PRTTYPE.TYPE_2:
      //거래처별/선적항구별 현황
      let mon = $c.gus.cfMonthsBetween($p, ed_cnd_ed_resultDtFrom.getValue().toDate(), ed_cnd_ed_resultDtTo.getValue().toDate());
      data = {
        odiName: 'pe_110_01_01b',
        reportName: '/il/pfm/pe_110_01_01b.ozr',
        odiParam: {
          FROM_DT: ed_cnd_ed_resultDtFrom.getValue(),
          TO_DT: ed_cnd_ed_resultDtTo.getValue(),
          IOGB: acb_cnd_lc_iogb.getValue(),
          CUST_CD: cnd_ed_custCd.getValue(),
          CUST_NM: cnd_txt_custNm.getValue(),
          MON: mon + 1,
          PRTTYPE: acb_cnd_lc_prtType2.getValue()
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 100,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
  }
  if (data != undefined) {
    scwin.openOzPopup(data);
  }
};

/**
 * @method
 * @name openOzPopup
 * @description 오즈리포트 화면을 띄운다
 * @param {string} data desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.openOzPopup = async function (data) {
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

/**
 * @method
 * @name f_PopUp
 * @description 정보 조회 창을 띄운다.
 * @param {string} disGubun 표시될 사용자 구문자 (scwin.POPUP_TYPE.CUSTOMER, scwin.POPUP_TYPE.PARTNER, scwin.POPUP_TYPE.LINER)
 * @param {string} chgGubun 변경 구분 (scwin.POPUP_KIND.SEARCH: 변경, scwin.POPUP_KIND.FIXED: 고정)
 * @hidden N
 * @exception 
 * @example scwin.f_PopUp(scwin.POPUP_TYPE.CUSTOMER, scwin.POPUP_KIND.SEARCH)
 */
scwin.f_PopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case scwin.POPUP_TYPE.CUSTOMER:
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_custCd.ilCommonPopUp(scwin.callbackEngClntInfoCust,
      // callback
      (cnd_ed_custCd.getValue() ?? "").trim(),
      // Code
      cnd_txt_custNm.getValue() ?? "",
      // Name (※ 화면 컴포넌트 ID에 맞게 수정)
      chgGubun,
      // AutoClose 여부
      "10",
      // 컬럼 개수
      "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN",
      // Title
      "140,300,100,100,100,100,100,,,100",
      // Width
      "8,9",
      // Hide columns
      null,
      // WHERE 조건
      "500",
      // POP width
      "500",
      // POP height
      null,
      // Y
      null,
      // X
      null,
      // Duplicate check
      "F",
      // 전체검색허용
      "Customer search,Customer Code,Customer Name" // Window title/search labels
      );
      break;
    case scwin.POPUP_TYPE.PARTNER:
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_pnCd.ilCommonPopUp(scwin.callbackEngClntInfoPartner, (cnd_ed_custCd.getValue() ?? "").trim(), cnd_txt_custNm.getValue() ?? "",
      // ※ 화면 컴포넌트 ID에 맞게 수정
      chgGubun, "10", "Customer Code,Customer Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Partner search,Customer Code,Customer Name");
      break;
    case scwin.POPUP_TYPE.LINER:
      udc_custCd.setSelectId('retrieveEngClntInfo');
      udc_linerCd.ilCommonPopUp(scwin.callbackEngClntInfoLiner, (cnd_ed_custCd.getValue() ?? "").trim(), cnd_txt_custNm.getValue() ?? "",
      // ※ 화면 컴포넌트 ID에 맞게 수정
      chgGubun, "10", "Liner Code,Liner Name,Address1,Address2,Address3,Address4,Tel,,,CRN", "140,300,100,100,100,100,100,,,100", "8,9", null, "500", "500", null, null, null, "F", "Liner search,Liner Code,Liner Name");
      break;
    default:
      break;
  }
};

/**
 * @method
 * @name callbackEngClntInfoCust
 * @description Customer 정보를 조회했을 경우 호출되는 함수. 
 * @param {string} rtnList desc
 * @hidden Y
 * @exception 
 */
scwin.callbackEngClntInfoCust = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_custCd, cnd_txt_custNm);
};

/**
 * @method
 * @name callbackEngClntInfoPartner
 * @description Partner 정보를 조회했을 경우 호출되는 함수.
 * @param {string} rtnList desc
 * @hidden Y
 * @exception 
 */
scwin.callbackEngClntInfoPartner = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_custCd, cnd_txt_custNm);
};

/**
 * @method
 * @name callbackEngClntInfoLiner
 * @description Liner 정보를 조회했을 경우 호출되는 함수.
 * @param {string} rtnList desc
 * @hidden Y
 * @exception 
 */
scwin.callbackEngClntInfoLiner = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, cnd_ed_custCd, cnd_txt_custNm);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'',src:'/ui/il/common/udc/ilcomCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Report',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_prtType',search:'start',style:'width:190px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',objType:'data','ev:onchange':'scwin.acb_cnd_lc_prtType_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'국제 영업팀 업무 현황'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'거래처별/선적항구별 현황'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_iogb',search:'start',style:'width:120px;',submenuSize:'auto',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'ALL'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_cnd_ed_resultDtFrom',edToId:'ed_cnd_ed_resultDtTo',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Print Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_prtType2',search:'start',style:'width:150px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Summary'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Detail'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Customer',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_ilcomCode',A:{popupID:'',style:'',codeId:'cnd_ed_custCd',nameId:'cnd_txt_custNm',id:'udc_custCd',objTypeCode:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_custCd_onviewchangeNameEvent',refDataCollection:'',name:'custNm',code:'custCd',allowCharCode:'0-9',maxlengthCode:'6'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]}]}]}]}]}]})