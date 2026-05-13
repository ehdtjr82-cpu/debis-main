/*amd /ui/il/acc/acetc/ac_303_01_02b.xml 8708 029e791858242e3e2dc626680b3a69f95ec6dd11e15d3522bd5aef7cca10aa12 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_ramtConfirm'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'잔액년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'collMoneyAcctDeptCd',name:'수금귀속부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ver',name:'버젼',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'true',scopeExternal:'false',src:'/common/jquery/jquery-1.8.3.min.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'true',scopeExternal:'false',src:'/common/jquery/jquery-ui-1.9.2.custom.min.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'true',scopeExternal:'false',src:'/oz90/ozhviewer/jquery.dynatree.js',type:'text/javascript'}},{T:1,N:'script',A:{cache:'true',scopeExternal:'false',src:'/oz90/ozhviewer/OZJSViewer.js',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.g_sCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.sAcctDeptCd = $c.data.getMemInfo($p, "acctDeptCd");
scwin.sAppDeptNm = $c.data.getMemInfo($p, "acctDeptNm");
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_stdYm.setValue(scwin.g_sCurrDate.substring(0, 6));
  ed_appDept.setValue(scwin.sAcctDeptCd);
  ed_appDeptNm.setValue(scwin.sAppDeptNm);
};
scwin.f_openPopUp = function (gbn = 2) {
  let searchType = gbn == 2 ? 'T' : 'F';
  udc_comCodeAppDeptNm.ilCommonPopUp(scwin.udc_comCodeAppDeptNm_callBackFunc, ed_appDept.getValue() // 화면에서의 ??? Code Element의	Value
  , ed_appDeptNm.getValue() // 화면에서의 ??? Name Element의	Value
  , searchType // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
  , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
  , null // Title순서	
  , null // 보여주는 각 컬럼들의 폭	
  , null // 컬럼중에서 숨기는	컬럼 지정	
  , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
  , null // POP-UP뛰을때 원도우의	사용자 정의	폭
  , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
  , null // 윈도우 위치 Y좌표	
  , null // 윈도우 위치 X좌표
  , null // 중복체크여부	("F")
  , null // 전체검색허용여부	("F")
  , null // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
  );
};
scwin.udc_comCodeAppDeptNm_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_appDept, ed_appDeptNm);
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);
  scwin.f_openPopUp();
};
scwin.udc_comCodeAppDeptNm_onclickEvent = function (e) {
  scwin.f_openPopUp(1);
};
scwin.udc_comCodeAppDeptNm_onblurCodeEvent = function (e) {
  if (ed_appDept.getValue().trim() == '') {
    ed_appDeptNm.setValue('');
    return;
  }
  scwin.f_chkOpenCommonPopUp(ed_appDept, ed_appDeptNm);
};
scwin.udc_comCodeAppDeptNm_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_appDeptNm, ed_appDept, 1);
};

//-------------------------------------------------------------------------
// 오즈 검색 후 결과를 화면 하단에 표시
//-------------------------------------------------------------------------

scwin.f_Search = async function () {
  if (ed_appDept.getValue() == '') {
    $c.win.alert($p, "사용부서은(는) 필수 입력 항목입니다.");
    return false;
  }
  if (ed_stdYm.getValue() == '') {
    $c.win.alert($p, "사용년월은(는) 필수 입력 항목입니다.");
    return false;
  }
  if (ed_stdYm.getValue().length != 6) {
    $c.win.alert($p, "사용년월은(는) 6자리수만큼 입력하십시오.");
    return false;
  }
  let sPostYn = acb_postYn.getValue() + "";
  let data = {
    reportName: "/il/acc/ac_303_01_02.ozr",
    odiParam: {
      CLOSE_YM: ed_stdYm.getValue(),
      // ds_retrieve.getCellData(row, "cvsslMgntNo"
      DEPT_CD: ed_appDept.getValue(),
      // ds_retrieve.getCellData(row, "rltNo")
      DEPT_NM: ed_appDeptNm.getValue(),
      //ds_retrieve.getCellData(row, "stockMgntNo")
      POST_YN: sPostYn
    },
    viewerParam: {
      useprogressbar: true,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      printcommand: false
    },
    formParam: {}
  };
  wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사용부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_ilcomCode',A:{codeId:'ed_appDept',nameId:'ed_appDeptNm',popupID:'',selectID:'retrieveAcctDeptCdInfo',style:'',validTitle:'',id:'udc_comCodeAppDeptNm',allowCharCode:'0-9',maxlengthCode:'5',objTypeCode:'data',objTypeName:'data',mandatoryCode:'true',refDataCollection:'dma_ramtConfirm',code:'collMoneyAcctDeptCd','ev:onclickEvent':'scwin.udc_comCodeAppDeptNm_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodeAppDeptNm_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사용년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_stdYm',pickerType:'dynamic',placeholderLocaleRef:'yearMonth',style:'',fixLength:'6'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'진행상태',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_postYn',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Search'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'ozWrap',id:'ozFrame',style:''},E:[{T:1,N:'w2:iframe',A:{id:'wfm_ozReport',src:'/ui/cm/zz/ozreportComp.xml',style:''}}]}]}]}]}]}]})