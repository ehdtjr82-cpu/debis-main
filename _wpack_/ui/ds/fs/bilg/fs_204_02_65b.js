/*amd /ui/ds/fs/bilg/fs_204_02_65b.xml 28902 db5e58f9a1e09590bc49199db5425c90237cbbe368dc5374c8dfd545f1663e28 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_BillContents',saveRemovedData:'true','ev:ondataload':'scwin.ds_BillContents_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'접;수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVatNo',name:'BILL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'confirmDt',name:'청구일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'청구부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'certiNo',name:'거래명세서번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'spplyAmt',name:'청구금액(원화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'spplyAmtFcrc',name:'청구금액(외화)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화;코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fcrcBilgAmt',name:'외화청구금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액_외화',dataType:'number'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fm215SlipNo',name:'채권_전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'수금금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'flag',name:'수금상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'flag2',name:'수금상태2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgAcctDeptCd',name:'청구부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'billRecptConfirmYn',name:'접수상태',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_viewCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryConCrn',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConReceiptYn',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryCollMoneyStatus',name:'name5',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveBillReceiptContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_viewCond","key":"IN_DS1"},{"id":"ds_BillContents","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_BillContents","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_updateBillContents',action:'/ds.fs.bilg.bilgrsltsmgnt.UpdateBillReceiptContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_BillContents","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_updateBillContents_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// hidden 컴포넌트 전역변수 선언
scwin.hid_ctrtNo = "";

// 서버 정보 받아오기
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.strFromDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
// scwin.userClsCd = "03"; // 사용자구분코드
scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호

scwin.pgmId = "fs_204_02_65b.jsp"; // 프로그램ID  
scwin.firstDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.strFromDate = scwin.strCurDate.substring(0, 6) + $c.date.getLastDateOfMonth($p, scwin.strCurDate);

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // if(scwin.userClsCd == "01") {
  //     gr_BillContents.setColumnVisible("slipNo", false);
  // }

  // scwin.onUdcCompleted();

  gr_BillContents.setColumnVisible("column15", false);
  gr_BillContents.setColumnVisible("slipNo", false);
  spa_notice.hide();
};

//-------------------------------------------------------------------------
// 달력UDC default Data Set / 기존 f_setDefaultData / onpage에서 UDC는 못 읽을 수 있기 때문에 해당 함수로 옮김
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar1.setInitDate(scwin.firstDate, scwin.strCurDate);
  if (scwin.userClsCd == "03") {
    // 선사 사용자
    spa_notice.show();
    scwin.f_crnSearch();
  } else if (scwin.userClsCd == "01") {
    // 내부 사용자
    spa_notice.hide();
    ed_crn.focus();
    $c.gus.cfDisableObjects($p, [btn_btnNew]);
  }
  ed_crn.setEditFormat("###-##-#####");
  ed_crn.setDisplayFormat("###-##-#####");
  gr_BillContents.setColumnVisible("column15", false);
  gr_BillContents.setColumnVisible("slipNo", false);
};

//-------------------------------------------------------------------------
// 사용자 코드 03번 (외부사용자) 일 경우에 자동 으로 팝업 실행
//-------------------------------------------------------------------------
scwin.f_crnSearch = function () {
  udc_crn.setSelectId("retrieveLineCoopList");
  udc_crn.cfCommonPopUp(scwin.udc_comCode03_callBackFunc, scwin.userClntNo, "", "T", null, null, null, null, null, null, null, null, null, null, "F", "사업자번호,사업자명,사업자번호조회");
};

//-------------------------------------------------------------------------
// 사용자 코드 03번 (외부사용자)일 경우에 자동 으로 팝업 결과
//-------------------------------------------------------------------------
scwin.udc_comCode03_callBackFunc = function (ret) {
  if (ret != null) {
    ed_crn.setValue(ret[2]);
    ed_clntNm.setValue(ret[1]);
    $c.gus.cfDisableObjects($p, [ed_crn, ed_clntNm, btn_PopUp1]);
  }
};

//-------------------------------------------------------------------------
// 조회버튼 서브미션
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_crn]))) {
    return;
  }
  dma_viewCond.set("qryConCrn", ed_crn.getValue());
  dma_viewCond.set("qryConDtFm", ed_bilgDtFrom1.getValue());
  dma_viewCond.set("qryConDtTo", ed_bilgDtTo1.getValue());
  dma_viewCond.set("qryConReceiptYn", acb_receiptYn.getValue());
  dma_viewCond.set("qryCollMoneyStatus", acb_collMoneyStatus.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// ds_BillContents 조회 완료시 
//-------------------------------------------------------------------------		
scwin.sbm_retrieve_submitDone = function (e) {};

//-------------------------------------------------------------------------
// 데이터 로드 완료시 
//-------------------------------------------------------------------------	
scwin.ds_BillContents_ondataload = function () {
  // 총 검색건수 표시
  let totalRow = ds_BillContents.getTotalRow();
  spa_totalRows.setValue(totalRow);
  if (scwin.userClsCd == "01") {
    gr_BillContents.setColumnVisible("slipNo", true);
  }
  if (totalRow == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  for (i = 0; i < ds_BillContents.getRowCount(); i++) {
    if (ds_BillContents.getCellData(i, "billRecptConfirmYn") == 0) {
      gr_BillContents.setCellReadOnly(i, "chk", false);
    } else {
      gr_BillContents.setCellReadOnly(i, "chk", true);
    }
  }
};

//-------------------------------------------------------------------------
// BILL 접수확인 처리 
//-------------------------------------------------------------------------		
scwin.f_BillReceipt = async function (e) {
  if (ds_BillContents.getModifiedIndex().length == 0) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
  }
  if (await $c.win.confirm($p, "선택한 세금계산서를 직접 수령/접수하였습니다. <br> BILL접수처리를   하시겠습니까?")) {
    $c.sbm.execute($p, sbm_updateBillContents);
  }
};

//-------------------------------------------------------------------------
// BILL 생성정보 Clear/ asis에서도 사용안함
//-------------------------------------------------------------------------
// function f_ClearDetail() {
//     ds_BillContents.ClearData();
//     ds_viewCond.ClearData();
//     cfInitObjects(tb_Conditon,[]);

// }

//-------------------------------------------------------------------------
// 그리드 expression 컬럼 메소드 
//-------------------------------------------------------------------------
scwin.displayFm3 = function (data) {
  return $c.gus.decode($p, data, "1", "정리", "미정리");
};
scwin.gr_confirm_custom = function (data, formattedData, rowIndex, colIndex) {
  let result = "";
  if (ds_BillContents.getCellData(rowIndex, "billRecptConfirmYn") == "1") {
    result = "접수";
  } else {
    result = "미접수";
  }
  return result;
};

// scwin.gr_exchRt_custom = function(data, formattedData, rowIndex, colIndex) {
//     console.log("data"+data);

//     if(ds_BillContents.getCellData(rowIndex, "crcCd") == "USD") {
//         return data;
//     } else {
//         return "";
//     }
// }

scwin.runExcel = function () {
  console.log("1번째 = " + ds_BillContents.getCellData(0, "exchRt"));
  console.log("2번째 = " + ds_BillContents.getCellData(1, "exchRt"));
  let options = {
    fileName: "BILL 접수내역현황.xlsx",
    sheetName: "BILL 접수내역현황"
  };
  let grdObj = gr_BillContents;
  let infoArr = {};
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
scwin.sbm_updateBillContents_submitDone = async function (e) {
  await $c.win.alert($p, MSG_CM_INF_001);
  scwin.btn_retrieve_onClick();
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (내부사용자 사업자번호 조회용)
//-------------------------------------------------------------------------

scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_crn.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_crn, ed_clntNm, 1);
};
scwin.udc_crn_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_crn, 1, false);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pCode = "";
  var pName = "";
  switch (disGubun) {
    case 1:
      udc_crn.setSelectId("retrieveCrnInfo");
      //사업자번호  팝업			
      pCode = ed_crn.getValue().replace(/\s*$/, ''); // 점소 코드
      pName = ed_clntNm.getValue(); // 점소 부서명

      // 사업자번호  공통 팝업			
      udc_crn.cfCommonPopUp(scwin.udc_crn_callBack // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
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
      , pAllSearch // 전체검색허용여부	("F")
      , "사업자번호조회,사업자번호,사업자명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 사업자번호 팝업 Callback
//-------------------------------------------------------------------------
scwin.udc_crn_callBack = function (rtnList) {
  //cfSetReturnValue(rtnList, "", txt_clntNm);  // 사업자번호, 사업자명
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_crn.setValue(rtnList[0]);
    ed_clntNm.setValue(rtnList[1]);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업자번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'btn_PopUp1',style:'',codeId:'ed_crn',nameId:'ed_clntNm',id:'udc_crn',btnId:'btn_PopUp1',maxlengthCode:'12',validExpCode:'사업자번호:yes:csn',objTypeCode:'data',objTypeName:'key',selectID:'',popupTitle:'사업자번호조회,사업자번호,사업자명',popupGridHeadTitle:'사업자번호,사업자명,"","","","","","","",""',popupGridHiddenColumn:'3,4,5,6,7,8,9,10','ev:onclickEvent':'scwin.udc_crn_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_crn_onviewchangeNameEvent',allowCharCode:'a-zA-Z0-9','ev:onviewchangeCodeEvent':'scwin.udc_crn_onblurCodeEvent',validTitle:'사업자번호',mandatoryCode:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_bilgDtFrom1',edToId:'ed_bilgDtTo1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'접수여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_receiptYn',search:'start',style:'width:100px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'true',ref:'',displayMode:'value delim label',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미접수'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수금상태 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_collMoneyStatus',search:'start',style:'width:100px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미정리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_estSrch',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_BillContents',gridDownFn:'scwin.runExcel',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_BillContents',id:'gr_BillContents',style:'',readOnly:'false',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'checkbox',value:'접수',width:'70',checkboxLabelPosition:'right',checkboxLabel:'접수'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'BILL or<br/>세금계산서번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'전표번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'회계일자',width:'100',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'청구일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'청구부서명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'거래명세서번호',width:'120',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'청구금액(원화)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'청구금액(외화)',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'통화<br/>코드',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column61',value:'환율',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column58',value:'부가세',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'청구금액',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'외화청구금액',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column49',value:'청구금액_외화',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column46',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'채권_전표번호',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'수금금액',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column31',value:'수금상태',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'수금상태2',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'청구부서코드',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column64',value:'접수상태',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'70',checkcomboboxUseEdit:'',valueType:'other',trueValue:'T',falseValue:'F',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellVatNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'slipNo',inputType:'text',width:'100',editFormat:'',readOnly:'true',hidden:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'postDt',inputType:'text',width:'100',displayFormat:'XXXX/XX/XX',editFormat:'####/##/##',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'confirmDt',inputType:'text',width:'100',readOnly:'true',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'certiNo',inputType:'text',width:'120',readOnly:'true',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmt',inputType:'text',width:'120',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'spplyAmtFcrc',inputType:'text',width:'120',textAlign:'right',readOnly:'true',expression:'',dataType:'number',displayFormat:'#,##0[floor]'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'crcCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'exchRt',displayMode:'label',textAlign:'right',readOnly:'true',dataType:'number',displayFormat:'#,##0.####'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',readOnly:'true',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgAmt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fcrcBilgAmt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgAmtFcrc',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'summary',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'fm215SlipNo',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'amt',displayMode:'label',textAlign:'right',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'flag',displayMode:'label',displayFormatter:'scwin.displayFm3',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'flag2',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'bilgAcctDeptCd',displayMode:'label',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'billRecptconfirmYn',value:'',displayMode:'label',customFormatter:'scwin.gr_confirm_custom'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',id:'column23',displayMode:'label',textAlign:'right',readOnly:'true',expression:'sum("spplyAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column63',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'expression',id:'column60',displayMode:'label',textAlign:'right',expression:'sum("vatAmt")',displayFormat:'#,###',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{tagname:'p',style:'margin-right: 30px;',id:'spa_notice',label:'* 문의점이 생기실 경우 02) 2136-6325 번으로 연락주십시오.',class:''}},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_btnNew',label:'저장',style:'',type:'button',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.f_BillReceipt'},E:[{T:1,N:'xf:label',E:[{T:3,text:'BILL접수'}]}]}]}]}]}]}]}]}]})