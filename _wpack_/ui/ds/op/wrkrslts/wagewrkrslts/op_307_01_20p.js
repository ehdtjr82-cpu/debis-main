/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_20p.xml 22801 9393f96bb15647ac5a7bfab4c73c1d016b8960ed56fc63ae0b67d44e921b51bb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'con_shpCo',name:'선사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'선박',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'입항예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qyrEndDt',name:'입항예정일자2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselMng',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'관리점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수입수출',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'Shift',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'본선계획',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_lobran',repeatNode:'map',saveRemovedData:'true','ev:ondataload':'scwin.ds_lobran_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_ds_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_lobran","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_ds_lobran_SubmitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.wagewrkrslts.RetrieveStevedoringWagesCarryingVesselManagementNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_vesselMng","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_vesselMng","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSubmitDone','ev:submiterror':'scwin.sbm_retrieveSubmitError',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 로그인 정보
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.vCurDate); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류상위점소코드
if (scwin.loUpperLobranCd == null) scwin.loUpperLobranCd = "";
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
if (scwin.userClsCd == null) scwin.userClsCd = "";
scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
if (scwin.clntNo == null) scwin.clntNo = "";
scwin.clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명
if (scwin.clntNm == null) scwin.clntNm = "";
scwin.param = "";

//-------------------------------------------------------------------------
// 날짜데이터 설정
//-------------------------------------------------------------------------

scwin.onpageload = function () {
  // 호출페이지로 부터 받는 파라미터 인데 아직 없는듯
  scwin.param = $c.data.getParameter($p);
  $c.data.setPopupTitle($p, "본선관리번호검색");
  scwin.f_setDate(); // 기본 날짜데이터 세팅
  $c.sbm.execute($p, sbm_ds_lobran); // 점소 데이터 서브미션 실행

  // if(scwin.userClsCd != '01') { // 사용자구분이 내부사용자가 아니면
  //     ed_con_shpCo.setValue(scwin.clntNo); // 거래처번호
  //     ed_con_shpCoNmd.setValue(scwin.clntNm); // 거래처명
  //     $c.gus.cfDisableObjects([ed_con_shpCo.getValue() , ed_con_shpCoNmd.getValue()]);
  // } else {
  //     $c.gus.cfEnableObjects([ed_con_shpCo, ed_con_shpCoNmd]);
  // }

  //lc_lobran.focus();
  scwin.popTitleCh();
};
scwin.popTitleCh = function () {
  $c.data.setPopupTitle($p, "본선관리번호 검색");
};

//-------------------------------------------------------------------------
// 기본 날짜데이터 세팅
//-------------------------------------------------------------------------
scwin.f_setDate = function () {
  //udc 달력 from ~ to 세팅정보
  //udc 스크립트 안에 validation 이미 존재
  udc_fromToCalendar.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  lc_lobran.setValue(scwin.loUpperLobranCd);
};
scwin.onUdcComplete = function () {
  udc_fromToCalendar.setInitDate(scwin.vQryStDt, scwin.vQryEndDt);
  lc_lobran.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ed_qryStDt, ed_qryEndDt]))) {
    ed_qryStDt.focus();
    return;
  }
  if (ed_qryStDt.getValue() > ed_qryEndDt.getValue()) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    ed_qryStDt.focus();
    return;
    4;
  }
  dma_condition.set("lobranCd", lc_lobran.getValue());
  dma_condition.set("con_shpCo", ed_con_shpCo.getValue());
  dma_condition.set("impExpClsCd", lc_impExpClsCd.getValue());
  dma_condition.set("vsslCd", ed_vsslCd.getValue());
  dma_condition.set("qryStDt", ed_qryStDt.getValue());
  dma_condition.set("qyrEndDt", ed_qryEndDt.getValue());
  console.log(ed_qryEndDt.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회  서브미션 성공시
//-------------------------------------------------------------------------
scwin.sbm_retrieveSubmitDone = function (e) {
  let rCnt = ds_vesselMng.getTotalRow();
  if (rCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let exCount = ds_vesselMng.getTotalRow();
  spa_totalRow.setValue(exCount);
};

//-------------------------------------------------------------------------
// 초기화 버튼
//-------------------------------------------------------------------------
scwin.btn_FieldClear_onCclick = function (e) {
  if (scwin.userClsCd != '01') {
    $c.gus.cfInitObjects($p, [lc_lobran, ed_vsslCd, ed_vsslNm, lc_impExpClsCd]);
  } else {
    $c.gus.cfInitObjects($p, [lc_lobran, ed_vsslCd, ed_vsslNm, lc_impExpClsCd, ed_con_shpCo, ed_con_shpCoNmd]);
  }
  lc_lobran.setSelectedIndex(0);
  scwin.f_setDate();
  lc_lobran.focus();
};

//-------------------------------------------------------------------------
// decode 함수 사용
//-------------------------------------------------------------------------
scwin.displayFm = function (data) {
  return $c.gus.decode($p, data, "I", "수입", "O", "수출", "");
};
scwin.displayFm2 = function (data) {
  return $c.gus.decode($p, data, "D", "주간", "N", "야간", "");
};

//-------------------------------------------------------------------------
// 그리드 내역 더블클릭시
//-------------------------------------------------------------------------
scwin.gr_vesselMng_ondblClick = function (rowIndex, columnIndex, columnId) {
  let rtnValues = new Array();
  rtnValues[0] = ds_vesselMng.getCellData(rowIndex, "cvsslMgntNo"); //본선관리번호
  rtnValues[1] = ds_vesselMng.getCellData(rowIndex, "impExpClsCd"); //수출입구분
  rtnValues[2] = ds_vesselMng.getCellData(rowIndex, "wrkDt"); //작업일자
  rtnValues[3] = ds_vesselMng.getCellData(rowIndex, "shiftClsCd"); //작업일자

  $c.win.closePopup($p, rtnValues);
};

//-------------------------------------------------------------------------
// 그리드 내역 더블클릭시
//-------------------------------------------------------------------------
scwin.ds_lobran_ondataload = function () {
  lc_lobran.setValue(scwin.loUpperLobranCd);
};

//-------------------------------------------------------------------------
// UDC 팝업 관련
//-------------------------------------------------------------------------
scwin.udc_con_shp_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_con_shpCo.getValue(), ed_con_shpCoNmd.getValue(), 'T', 'T');
};
scwin.udc_con_shp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_shpCo, ed_con_shpCoNmd, 2);
};
scwin.udc_con_shp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_shpCoNmd, ed_con_shpCo, 2, false);
};
scwin.udc_vssl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'T', 'T');
};
scwin.udc_vssl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vsslCd, ed_vsslNm, 1);
};
scwin.udc_vssl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vsslNm, ed_vsslCd, 1, false);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    // inObj가 코드명 필드일 경우 팝업
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // 선박 팝업
      udc_vssl.cfCommonPopUp(scwin.udc_vssl_Callback, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, "T");
      break;
    case 2:
      // 선사 팝업
      udc_con_shp.cfCommonPopUp(scwin.udc_con_shp_CallBack // XML상의 SELECT ID    
      , pCode // 화면에서의 ??? Code Element의    Value
      , pName // 화면에서의 ??? Name Element의    Value
      , pClose // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서    
      , null // 보여주는 각 컬럼들의 폭  
      , null // 컬럼중에서 숨기는    컬럼 지정   
      , ',SHP' // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의    사용자 정의 폭
      , null // POP-UP뛰을때 우도우의    사용자 정의 높이    
      , null // 윈도우 위치 Y좌표    
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 선박 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_vssl_Callback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_vsslCd, ed_vsslNm);
};

//-------------------------------------------------------------------------
// 선사 팝업 콜백
//-------------------------------------------------------------------------
scwin.udc_con_shp_CallBack = function (rtnList) {
  console.log("옴?" + rtnList);
  $c.gus.cfSetReturnValue($p, rtnList, ed_con_shpCo, ed_con_shpCoNmd);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_lobran',style:'width:150px;',submenuSize:'auto',delimiter:'-',displayMode:'value delim label',textAlign:'left',ref:'',allOption:'',chooseOptionLabel:'전체',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'xf:label',A:{ref:'lobranNm'}},{T:1,N:'xf:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp1',style:'',codeId:'ed_con_shpCo',nameId:'ed_con_shpCoNmd',btnId:'btn_PopUp2',id:'udc_con_shp',allowCharCode:'A-Z0-9',maxlengthCode:'6',editTypeCode:'select',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'Data',popupTitle:'선사,선사코드,선사명',popupGridHeadTitle:'거래처코드,거래처명,거래처구분,거래처구분명,거래처주소,"","","","",""',selectID:'retrieveClntInfo',popupGridHiddenColumn:'6,7,8,9,10','ev:onclickEvent':'scwin.udc_con_shp_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_shp_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_shp_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_impExpClsCd',style:'width:150px;',submenuSize:'auto',ref:'',displayMode:'value delim label',objType:'data',chooseOptionLabel:'전체'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',btnId:'btn_PopUp2',id:'udc_vssl',allowCharCode:'A-Z0-9',editTypeCode:'select',maxlengthCode:'4',objTypeCode:'Data',UpperFlagCode:'1',objTypeName:'key',popupGridHeadTitle:'선박코드,선박명,"","","","","","","",""',popupTitle:'선박정보,선박코드,선박명',selectID:'retrieveVsslCdInfo',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onclickEvent':'scwin.udc_vssl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryStDt',edToId:'ed_qryEndDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',objTypeFrom:'data',objTypeTo:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_FieldClear_onCclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_vesselMng',focusMode:'row',id:'gr_vesselMng',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_vesselMng_ondblClick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'120',value:'본선관리번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'작업일자'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'150',value:'선박명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'항차'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'관리점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'수입수출<br/>구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'Shift',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'본선계획<br/>현황',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cvsslMgntNo',inputType:'text',removeBorderStyle:'false',width:'120'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'wrkDt',inputType:'text',removeBorderStyle:'false',width:'100',editFormat:'####/##/##'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vsslNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'shpCoPortcnt',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',style:'',value:'',width:'100',ioFormat:'yyyyMMddHHii',displayFormat:'yyyy/MM/dd',dataType:'date'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.displayFm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shiftClsCd',inputType:'text',style:'',value:'',width:'100',displayFormatter:'scwin.displayFm2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'planPrscond',inputType:'text',style:'',value:'',width:'100'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRow',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})