/*amd /ui/ac/fm/collmoneymgnt/rcptmgnt/fm_502_03_02b.xml 12211 6ac7814b0aa044ff264783c4cd87d83f52731a0b48d71fa1a0a47cce395c0fe3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_saveSusRecv'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkClsCd',name:'작업구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'amt',name:'금액',dataType:'number'}},{T:1,N:'w2:key',A:{id:'summary',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 전역변수
scwin.strToDate = WebSquare.date.getCurrentServerDate();
scwin.parentFrame = $c.win.getParent($p);

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  // scwin.f_Header();
  ica_wrkDt.setValue(scwin.strToDate);
  ed_amt.setValue("0");
  $c.gus.cfDisableKey($p);
  $c.gus.cfDisableObjects($p, [ed_amt, ed_clntNm, ed_acctDeptNm]);
  dma_saveSusRecv.set("wrkClsCd", "02"); // 라디오버튼의 선수금전환 기본값 선택 세팅. 
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금귀속부서, 2:조회->등록자
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function (select_code) {
  let param = "";
  let code = "";
  let name = "";
  if (select_code == '1' || select_code == '2') {
    if (!(await $c.gus.cfValidate($p, [$p.parent().$p.getComponentById("ed_coCd")]))) {
      return;
    }
  }
  switch (select_code) {
    // 거래처 PopUp호출
    case '1':
      if (ed_clntNo.getReadOnly() == true || ed_clntNo.getReadOnly() == true) return;
      ed_clntNm.setValue("");
      code = ed_clntNo.getValue();
      param = ",,," + $p.parent().$p.getComponentById("ed_coCd").getValue(); //자회사 회계시스템 추가사항 
      udc_clntList.cfCommonPopUp(scwin.udc_clntList_callBackFunc, code, '', "T", null, null, null, null, param, null, null, null, null); // 거래처
      // if ( rtnList != null ) {
      //     ed_clntNo.setValue(rtnList[0]);	// 거래처코드
      //     ed_clntNm.setValue(rtnList[1]);	// 거래처명
      //     ed_clntNo.options.hidVal = rtnList[0];
      // }
      // else {
      //     ed_clntNo.setValue("");
      //     ed_clntNo.options.hidVal = "";
      // }
      break;
    // 귀속부서 PopUp 호출
    case '2':
      if (ed_acctDeptCd.getReadOnly() == true || ed_acctDeptCd.getReadOnly() == true) return;
      ed_acctDeptNm.setValue("");
      code = ed_acctDeptCd.getValue();
      param = "," + $p.parent().$p.getComponentById("ed_coCd").getValue() + "," + scwin.parentFrame.scwin.txtCoClsCd + ",,,"; //자회사 회계시스템 추가사항
      udc_acctDeptCdInfo6.cfCommonPopUp(scwin.udc_acctDeptCdInfo6_callBackFunc, code, '', "T", null, null, null, null, param, "450", "500", null, null); // 귀속부서			
      // if (rtnList != null ) {
      //     ed_acctDeptCd.setValue(rtnList[0]);	// 관리부서코드
      //     ed_acctDeptNm.setValue(rtnList[1]);	// 관리부서명
      //     ed_acctDeptCd.options.hidVal = rtnList[0];
      // } else {
      //     ed_acctDeptCd.setValue("");
      //     ed_acctDeptCd.options.hidVal = "";
      //     }
      break;
    default:
      await $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_clntList_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_clntNo.setValue(rtnList[0]); // 거래처코드
    ed_clntNm.setValue(rtnList[1]); // 거래처명
    ed_clntNo.options.hidVal = rtnList[0];
  } else {
    ed_clntNo.setValue("");
    ed_clntNo.options.hidVal = "";
  }
};
scwin.udc_acctDeptCdInfo6_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    ed_acctDeptCd.setValue(rtnList[0]); // 관리부서코드
    ed_acctDeptNm.setValue(rtnList[1]); // 관리부서명
    ed_acctDeptCd.options.hidVal = rtnList[0];
  } else {
    ed_acctDeptCd.setValue("");
    ed_acctDeptCd.options.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code) {
  if (orgObjCd.getValue() == orgObjCd.options.hidVal) {
    if (orgObjCd.getValue().trim() == "") {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
    return;
  }
  if (orgObjCd._wTagName.toUpperCase() == "INPUT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  } else if (orgObjCd._wTagName.toUpperCase() == "OBJECT") {
    if (orgObjCd.getValue().trim() != "") {
      scwin.f_openPopUp(select_code);
    } else {
      orgObjNm.setValue("");
      orgObjCd.setValue("");
      orgObjCd.options.hidVal = "";
    }
  }
};

//-------------------------------------------------------------------------
// 저장시 호출 되는 함수
//-------------------------------------------------------------------------

scwin.f_Save = async function () {
  // 필수입력 여부 Check
  if (!(await $c.gus.cfValidate($p, [rd_wrkClsCd, ica_wrkDt, ed_clntNo]))) {
    return;
  }

  // 작업구분이 선수금전환(02)일때 귀속부서&적요 필수입력 여부 Check		
  if (rd_wrkClsCd.getValue() == "02") {
    if (!(await $c.gus.cfValidate($p, [ed_acctDeptCd, ed_summary]))) {
      return;
    }
  }
  $p.parent().scwin.f_Save();
};

//-------------------------------------------------------------------------
// script
//-------------------------------------------------------------------------
scwin.ed_amt_onblur = function (e) {
  $p.parent().scwin.f_ChgAmtClose(ed_amt.getValue().trim());
  if (ed_amt.getValue() == "") {
    ed_amt.setValue(0);
  }
};
scwin.udc_clntList_onclickEvent = function (e) {
  scwin.f_openPopUp('1');
};
scwin.ed_acctDeptCd_onclickEvent = function (e) {
  scwin.f_openPopUp('2');
};
scwin.udc_clntList_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1');
};
scwin.ed_acctDeptCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_acctDeptCd, ed_acctDeptNm, '2');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_wrkClsCd',ref:'data:dma_saveSusRecv.wrkClsCd',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'',objType:'data',mandatory:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'선수금전환'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkDt',style:'',mandatory:'true',displayFormat:'yyyy/MM/dd',objType:'data',ref:'data:dma_saveSusRecv.wrkDt',title:'작업일자'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'retrieveClntList',codeId:'ed_clntNo',validTitle:'거래처번호',nameId:'ed_clntNm',style:'width: 300px;',mandatoryCode:'true',objTypeCode:'data',allowCharCode:'0-9',maxlengthCode:'6',objTypeName:'key',refDataCollection:'dma_saveSusRecv',code:'clntNo',id:'udc_clntList','ev:onclickEvent':'scwin.udc_clntList_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntList_onblurCodeEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'금액',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_amt',style:'width: 200px;',maxlength:'13',allowChar:'0-9',ref:'data:dma_saveSusRecv.amt',dataType:'number',displayFormat:'#,##0',initValue:'0',disabled:'true','ev:onblur':'scwin.ed_amt_onblur',title:'금액'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'귀속부서',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_acctDeptCd',nameId:'ed_acctDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo6',style:'width: 300px;',validTitle:'귀속부서',allowCharCode:'0-9',mandatoryCode:'true',maxlengthCode:'5',maxlengthName:'20',objTypeName:'key',refDataCollection:'dma_saveSusRecv',code:'acctDeptCd',id:'udc_acctDeptCdInfo6','ev:onclickEvent':'scwin.ed_acctDeptCd_onclickEvent','ev:onblurCodeEvent':'scwin.ed_acctDeptCd_onblurCodeEvent',skipOnBlurNameValueEmpty:'N',skipOnBlurCodeValueEmpty:'N'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'적요',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_summary',style:'width: 200px;',ref:'data:dma_saveSusRecv.summary',title:'적요',mandatory:'true'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',objType:'bsave',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'처리'}]}]}]}]}]}]}]})