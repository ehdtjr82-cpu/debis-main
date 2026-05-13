/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml 20991 eeef6d7c93402b81895f4f3deec782bbaa6702e36c2d82ee39466ca492196f25 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCls',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'workGubun',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptArvCls',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vsslNm',name:'선명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportPortNm',name:'출발항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportPortNm',name:'도착항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDtHh',name:'입항/도착(예정)일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDtHh',name:'출항/출발(예정)일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'적하목록관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslYn',name:'연안선본선구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impPortcntCd',name:'수입항차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'expPortcntCd',name:'수출항차코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deprtportPortCd',name:'출발항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportPortCd',name:'도착항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptIntendHh',name:'출발예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendHh',name:'도착예정시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착시간',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveVesselNamePortCountCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 화면로딩시
scwin.onpageload = function () {
  // 세션정보 가져오기
  scwin.sUserId = $c.data.getMemInfo($p, "userId");
  scwin.sUserClsCd = $c.data.getMemInfo($p, "userClsCd") == null ? "" : $c.data.getMemInfo($p, "userClsCd");
  scwin.sClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "" : $c.data.getMemInfo($p, "clntNo");
  scwin.sClntNm = $c.data.getMemInfo($p, "clntNm") == null ? "" : $c.data.getMemInfo($p, "clntNm");
  scwin.vsslCls = $c.data.getParameter($p, "vsslCls") == null ? "" : $c.data.getParameter($p, "vsslCls"); // default : 연안선, 1 : 본선
  scwin.strToDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.

  const codeOptions = [{
    grpCd: "OP190",
    compID: "co_acb_workGubun"
  }
  // , { grpCd : "OP533", compID : "acb_autoComplete2" }
  // , { grpCd : "A1041", compID : "gr_gridView2:cdNm" }
  ];
  $c.data.setCommonCode($p, codeOptions);
  var vsslClsCd = scwin.vsslCls;
  if (vsslClsCd == "1") {
    vsslCls.setValue(1); //연안선 본선
    dptArvCls.setValue(2); //출발 도착
    dptArvCls.setDisabled(true);
  } else {
    vsslCls.setValue(0);
    dptArvCls.setValue(1);
  }
};
scwin.onUdcCompleted = function () {
  dptIntendDt.setValue(scwin.strToDate);
  arvIntendDt.setValue(scwin.strToDate);
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search, [vsslCls, dptArvCls]);
  dptIntendDt.setValue(scwin.strToDate);
  arvIntendDt.setValue(scwin.strToDate);
  portCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let rtn = await $c.gus.cfValidate($p, [tbl_search]); // 항명코드, 항명 공백 확인
  if (!rtn) {
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, dptIntendDt.getValue(), arvIntendDt.getValue())) {
    await $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_039)); // 시작일자가 종료일자 이전이어야 합니다.
    dptIntendDt.focus();
    return;
  }
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업 열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let windowTitle = "";
  if (vsslCls.getValue() == "1") {
    udc_comCodePort.setSelectId("retrievePortInfo");
    windowTitle = "항구명,항구코드,항구명";
  } else {
    udc_comCodePort.setSelectId("retrieveWrkPortInfo");
    windowTitle = "부두명,부두코드,부두명";
  }
  udc_comCodePort.cfCommonPopUp(scwin.udc_comCodePort_callBackFunc // 팝업 콜백 리턴결과 Array 형태로 SQL Select 순서로 Return
  , pCode // 화면에서의 ??? Code Element의 Value
  , pName // 화면에서의 ??? Name Element의 Value
  , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
  , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) 	MAX:10     null(2)   "5"
  , null // Title명's                         	null    "100,200"
  , null // 보여주는 각 컬럼들의 폭               null    "100,200"
  , null // 컬럼중에서 숨기는 컬럼 지정           null    "7,8,9,10"		
  , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:12개까지 가능     null    "SHIP"
  , null // POP-UP 띄울때 원도우의 사용자 정의 폭              null    "500"
  , null // POP-UP 띄울때 윈도우의 사용자 정의 높이             null    "600"
  , null // 윈도우 위치 Y좌표
  , null // 윈도우 위치 X좌표  
  , null // 중복체크여부
  , pAllSearch // 전체검색허용여부 ("F")
  , windowTitle // POP-UP Window Title 검색어1,2(각화면에서 변경할경우)        null    "Win타이틀,검색어1,검색어2"
  , null // Data건수가 0건일때 Window를 띄우지 않음 리턴
  );
};

//-------------------------------------------------------------------------
// Grid에서 선택된 Rows 의  Value 리턴
//-------------------------------------------------------------------------
scwin.f_rtnValue = function (rowIndex) {
  var arrRtnVal = [];
  if (ds_emp.getCellData(rowIndex, "vsslYn") == "0") {
    arrRtnVal[0] = ds_emp.getCellData(rowIndex, "vsslCd"); //선명코드
    arrRtnVal[1] = ds_emp.getCellData(rowIndex, "vsslYn"); //연안선 본선 구분
    arrRtnVal[2] = ds_emp.getCellData(rowIndex, "portcnt"); //항차
    //arrRtnVal[2]  = ds_emp.getCellData(rowIndex, "impPortcntCd");   //수입항차코드
    //arrRtnVal[3]  = ds_emp.getCellData(rowIndex, "expPortcntCd");   //수출항차코드
    arrRtnVal[3] = ds_emp.getCellData(rowIndex, "deprtportPortCd"); //출발항구코드
    arrRtnVal[4] = ds_emp.getCellData(rowIndex, "arrvlportPortCd"); //도착항구코드
    arrRtnVal[5] = ds_emp.getCellData(rowIndex, "dptIntendDt"); //출발예정일자
    arrRtnVal[6] = ds_emp.getCellData(rowIndex, "dptIntendHh"); //출발예정시간
    arrRtnVal[7] = ds_emp.getCellData(rowIndex, "arvIntendDt"); //도착예정일자
    arrRtnVal[8] = ds_emp.getCellData(rowIndex, "arvIntendHh"); //도착예정시간
    arrRtnVal[9] = ds_emp.getCellData(rowIndex, "dptDt"); //출발일자
    arrRtnVal[10] = ds_emp.getCellData(rowIndex, "dptHh"); //출발시간
    arrRtnVal[11] = ds_emp.getCellData(rowIndex, "arvDt"); //도착일자
    arrRtnVal[12] = ds_emp.getCellData(rowIndex, "arvHh"); //도착시간
    arrRtnVal[13] = ds_emp.getCellData(rowIndex, "vsslNm"); //선명
    arrRtnVal[14] = ds_emp.getCellData(rowIndex, "arrvlportPortNm"); //도착항구명
    arrRtnVal[15] = ds_emp.getCellData(rowIndex, "mrn"); //mrn
  } else {
    arrRtnVal[0] = ds_emp.getCellData(rowIndex, "vsslCd"); //선명코드
    arrRtnVal[1] = ds_emp.getCellData(rowIndex, "vsslYn"); //연안선 본선 구분
    arrRtnVal[2] = ds_emp.getCellData(rowIndex, "impPortcntCd"); //수입항차코드
    arrRtnVal[3] = ds_emp.getCellData(rowIndex, "expPortcntCd"); //수출항차코드
    arrRtnVal[4] = ds_emp.getCellData(rowIndex, "deprtportPortCd"); //출발항구코드
    arrRtnVal[5] = ds_emp.getCellData(rowIndex, "arrvlportPortCd"); //도착항구코드
    arrRtnVal[6] = ds_emp.getCellData(rowIndex, "dptIntendDt"); //출발예정일자
    arrRtnVal[7] = ds_emp.getCellData(rowIndex, "dptIntendHh"); //출발예정시간
    arrRtnVal[8] = ds_emp.getCellData(rowIndex, "arvIntendDt"); //도착예정일자
    arrRtnVal[9] = ds_emp.getCellData(rowIndex, "arvIntendHh"); //도착예정시간
    arrRtnVal[10] = ds_emp.getCellData(rowIndex, "dptDt"); //출발일자
    arrRtnVal[11] = ds_emp.getCellData(rowIndex, "dptHh"); //출발시간
    arrRtnVal[12] = ds_emp.getCellData(rowIndex, "arvDt"); //도착일자
    arrRtnVal[13] = ds_emp.getCellData(rowIndex, "arvHh"); //도착시간
    arrRtnVal[14] = ds_emp.getCellData(rowIndex, "vsslNm"); //선명
    arrRtnVal[15] = ds_emp.getCellData(rowIndex, "arrvlportPortNm"); //도착항구명
    arrRtnVal[16] = ds_emp.getCellData(rowIndex, "mrn"); //mrn
  }
  $c.win.closePopup($p, arrRtnVal);
};

//-------------------------------------------------------------------------
// Windows Close
//  - AS-IS : 정의되어있지만 사용되지 않는 함수
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};

///////////////////////////////////////////// C O M P O N E N T   E V E N T /////////////////////////////////////////

// 연안선 본선 변경 시
scwin.vsslCls_onchange = function (info) {
  if (vsslCls.getValue() == "1") {
    dptArvCls.setValue("2");
    dptArvCls.setDisabled(true);
  } else {
    dptArvCls.setDisabled(false);
  }
};

// 그리드(gr_emp) 셀 OnDoubleClick
scwin.gr_emp_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (rowIndex >= 0) {
    scwin.f_rtnValue(rowIndex);
  }
};

///////////////////////////////////////////// U D C   E V E N T /////////////////////////////////////////

// 부두/항명 클릭시 팝업
scwin.udc_comCodePort_onclickEvent = async function (e) {
  scwin.f_openPopUp('1', portCd.getValue(), portNm.getValue(), "F", "F");
};

// 부두/항명 팝업 콜백함수
scwin.udc_comCodePort_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, portCd, portNm);
};

// 부두/항명 FocusOut
scwin.udc_comCodePort_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(portCd, portNm, '1');
};

// 부두/항명 항명 onChange
scwin.udc_comCodePort_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(portNm, portCd, '1', false);
};

///////////////////////////////////////////// S U B M I S S I O N    E V E N T /////////////////////////////////////////

// 조회
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_emp.getRowCount() == 0) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_WRN_002)); // 조회된 데이터가 없습니다.
  }
  totalRows.setValue(ds_emp.getRowCount());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회대상',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'vsslCls',ref:'data:dma_retrieve.vsslCls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onchange':'scwin.vsslCls_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'연안선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control w110',editType:'select',id:'co_acb_workGubun',search:'start',style:'',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:dma_retrieve.workGubun',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]},{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'rdo-grp',cols:'',id:'dptArvCls',ref:'data:dma_retrieve.dptArvCls',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'출발'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'도착'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'부두/항명',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{id:'udc_comCodePort',codeId:'portCd',nameId:'portNm',selectID:'',refDataCollection:'dma_retrieve',code:'portCd',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',mandatoryName:'true','ev:onclickEvent':'scwin.udc_comCodePort_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCodePort_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCodePort_onviewchangeNameEvent',validTitle:'항명코드'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'예정일시 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',edFromId:'dptIntendDt',edToId:'arvIntendDt',refDataMap:'dma_retrieve',refEdDt:'arvIntendDt',refStDt:'dptIntendDt',style:''}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_emp',id:'gr_emp',style:'',visibleRowNum:'45',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_emp_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선명',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'항차',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'출발항',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'도착항',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'입항/도착(예정)일시',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'출항/출발(예정)일시',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'적하목록관리번호',width:'150'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'portcnt',inputType:'text',width:'140',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deprtportPortNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrvlportPortNm',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvDtHh',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptDtHh',inputType:'text',width:'150'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'150',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})