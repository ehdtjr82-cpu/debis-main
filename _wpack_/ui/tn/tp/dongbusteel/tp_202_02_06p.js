/*amd /ui/tn/tp/dongbusteel/tp_202_02_06p.xml 29697 5c159c458e16a53b162d3d3061df761b99927acbcce50dec5c65386cf43830ed */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_outInfo',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'대표거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNo',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'reqClntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mchtOdrNo',name:'화주오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'등록;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'상태;구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'urgentYn',name:'긴급;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jikYn',name:'직영;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'strgArea',name:'창고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapVehclCd',name:'SAP;차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rfidNo',name:'RFID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'협력업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapCoClntCd',name:'SAP;협력사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sapCoClntNm',name:'SAP;협력사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndSeq',name:'전송;순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndYn',name:'전송;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'전송일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndCmplYn',name:'전송완료;여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndCmplDt',name:'전송완료;일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chkSndYn',name:'상차지시서;전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'배차확정시간',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_Query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'repClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtFm',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkStDtTo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sndYn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'reqClntNo2',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mchtOdrNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name8',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ncall.ds.tp.dongbusteel.rsltsmgnt.UpdatedongbusteelAllocationSendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_outInfo","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ncall.ds.tp.dongbusteel.rsltsmgnt.RetrievedongbusteelAllocationSendInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_Query","key":"IN_DS1"},{"id":"ds_outInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_outInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//전역변수  
scwin.currentDate = WebSquare.date.getCurrentServerDate();
scwin.clntNo = $c.data.getMemInfo($p, "clntNo");
scwin.clntNm = $c.data.getMemInfo($p, "clntNm");
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.hid_docCd = "";
scwin.hid_wrkPlCd = "";
scwin.hid_itemCd = "";
scwin.hid_osideCd = "";
scwin.hid_repClntNo = "";
let checkCnt = 0;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  ed_outFromDt.setValue(scwin.currentDate);
  ed_outToDt.setValue(scwin.currentDate);
  ed_clntNo2.setValue(scwin.clntNo);
  txt_clntNm2.setValue(scwin.clntNm);

  //clntNo_cond();
  lc_odrCreatCls.setValue("");
};
scwin.clntNo_cond = function () {
  ed_clntNo.setReadOnly(false);
  ed_clntNo.setValue("");
  txt_clntNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크
  if (!(await $c.gus.cfValidate($p, [tb_condition]))) return;
  dma_Query.set("repClntNo", "000012");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_CheckChk
// function desc : 체크표시된 정보가 있는가
//-------------------------------------------------------------------------
scwin.f_CheckChk = function () {
  for (i = 0; i < ds_outInfo.getRowCount(); i++) {
    if (ds_outInfo.getCellData(i, "chk") == "T") {
      return true;
    }
  }
  return false;
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  if (!scwin.f_CheckChk()) {
    $c.win.alert($p, "선택한  정보가 없습니다");
    return;
  }
  if (ds_outInfo.getModifiedIndex().length > 0 == false) {
    $c.win.alert($p, MSG_CM_ERR_005); //변경된 사항이 없습니다.
    return;
  }
  if ((await $c.win.confirm($p, MSG_CM_CRM_001)) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// ds_information 헤더생성
//-------------------------------------------------------------------------

// function f_createHeader(){
// var str_header="";
// //헤더의 정의 순서는 반드시 서버측의 정의순서와 일치하여야 한다.	

// str_header = "";	
// str_header = "repClntNo:STRING"
//                 + ",reqClntNo:STRING"
//                 + ",wrkStDtFm:STRING"
//                 + ",wrkStDtTo:STRING"
//                 + ",sndYn:STRING"
//                 + ",reqClntNo2:STRING"
//                 + ",mchtOdrNo:STRING"
//                 + ",odrNo:STRING";

// ds_Query.SetDataHeader(str_header);		

// ds_Query.AddRow();

//     }

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_condition, null);
  ed_outFromDt.setValue(scwin.currentDate);
  ed_outToDt.setValue(scwin.currentDate);
  lc_odrCreatCls.setValue('0');
};

//-------------------------------------------------------------------------
// POP-UP Call전 Checking
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!(await $c.gus.cfCanOpenPopup($p, inObj, pairObj))) return;

  // 짝이 되는 오브젝트의 값 제거
  // $c.gus.cfClearPairObj(pairObj);
  pairObj.setValue("");

  // 검색어 세팅
  // let pVal = $c.gus.cfGetValue(inObj);
  let pVal = inObj.getValue();

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------

scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      //거래처
      rtnList = udc_clntList_tpro.cfCommonPopUp(scwin.udc_clntList_tpro_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드/명");

      // cfSetReturnValue(rtnList, ed_clntNo, txt_clntNm);

      break;
    case 2:
      //거래처
      rtnList = udc_clntList_tpro.cfCommonPopUp(scwin.udc_clntList_tpro_callBackFunc, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "거래처,거래처코드/명");

      // cfSetReturnValue(rtnList, ed_clntNo2, txt_clntNm2);

      break;
  }
};

// ======================
// 콜백 함수들
// ======================
scwin.udc_clntList_tpro_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    ed_clntNo.setValue(rtnList[0]);
    txt_clntNm.setValue(rtnList[1]);
    ed_clntNo.options.hidVal = rtnList[0];
    txt_clntNm.options.hidVal = rtnList[1];
  } else {
    ed_clntNo.setValue("");
    txt_clntNm.setValue("");
    ed_clntNo.options.hidVal = "";
    txt_clntNm.options.hidVal = "";
  }
};

// scwin.udc_clntList_tpro_callBackFunc = function(rtnList) {
//     if (rtnList != null) {
//         if (rtnList[0] == "N/A") return;
//         ed_clntNo2.setValue(rtnList[0]);
//         txt_clntNm2.setValue(rtnList[1]);
//         ed_clntNo2.options.hidVal = rtnList[0];
//         txt_clntNm2.options.hidVal = rtnList[1];
//     } else {
//         ed_clntNo2.setValue("");
//         txt_clntNm2.setValue("");
//         ed_clntNo2.options.hidVal = "";
//         txt_clntNm2.options.hidVal = "";
//     }
// };

//-------------------------------------------------------------------------
// 그리드에서 입력된 코드/명칭 정보로  조회 (Grid PopUp)
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pClose) {
  // 선언부
  let rtnList;
  let pCode = "";
  let pName = "";
  switch (disGubun) {
    case 1:
      //grid popup의 차량번호 및 기사명 조회
      pCode = ds_outInfo.getCellData(row, "shortCd");
      rtnList = udc_drvNmInfo_tpro.cfCommonPopUp(scwin.udc_drvNmInfo_tpro_callBackFunc, pCode, pName, pClose, null, '차량번호,기사명', '120,240', '3,4,5,6,7,8,9,10', null, '440', '500', null, null, null, 'F', '차량번호조회,차량번호,기사명');
      $c.gus.cfSetGridReturnValue($p, rtnList, ds_outInfo, row, "vehclNo", "drvNm");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
scwin.udc_drvNmInfo_tpro_callBackFunc = function (rtnList) {};
scwin.f_excel = function () {
  let fileName = '배차정보';
  let sheetTitle = '배차정보';
  $c.data.downloadGridViewExcel($p, gr_out, {
    fileName: fileName + ".xlsx",
    sheetName: sheetTitle
  });
};
scwin.urgentYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, 1, "긴급", "");
};
scwin.jikYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, 1, "직영", "");
};
scwin.sndCmplYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "1", "완료", "0", "미완료");
};
scwin.chkSndYnDisplayFm = function (data) {
  return $c.gus.decode($p, data, "1", "전송", "0", "미전송");
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) {
    $c.sbm.execute($p, sbm_retrieve);
    return;
  }
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  let rowCnt = ds_outInfo.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  totalRows.setValue(rowCnt);
  checkCnt = 0;
};
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "chk") {
    if (ds_outInfo.getCellData(rowIndex, "chk").trim() != "T") {
      ds_outInfo.setCellData(rowIndex, "chk", "F");
      checkCnt--;
    } else if (ds_outInfo.getCellData(rowIndex, "chk").trim() == "T") {
      checkCnt++;
    }
    if (checkCnt > 20) {
      alert("정보 저장은 20건 이하로 해주세요.");
      ds_outInfo.setCellData(rowIndex, "chk", "F");
      checkCnt--;
      return;
    }
  }
};
scwin.udc_clntList_tpro_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), txt_clntNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'img_PopUp1',style:'',codeId:'ed_clntNo',objType:'data',readOnlyCode:'true',readOnlyName:'true',nameId:'txt_clntNm',id:'udc_clntList_tpro',refDataCollection:'dma_Query',code:'reqClntNo','ev:onclickEvent':'scwin.udc_clntList_tpro_onclickEvent',selectID:'retrieveClntList_tpro'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업시작일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'dma_Query',refEdDt:'wrkStDtTo',refStDt:'wrkStDtFm',style:'',edFromId:'ed_outFromDt',edToId:'ed_outToDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'Data',objTypeTo:'Data',titleFrom:'화주오더일자 From',titleTo:'화주오더일자 To',objTypeBtn:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_clntNo2',placeholder:'',style:'width: 85px;',objType:'data',readOnly:'true',ref:'data:dma_Query.reqClntNo2'}},{T:1,N:'xf:input',A:{class:'',id:'txt_clntNm2',placeholder:'',style:'',objType:'data',disabled:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'동부오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;',maxlength:'13',objType:'data',ref:'data:dma_Query.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mchtOdrNo',placeholder:'',style:'width:150px;',maxlength:'12',objType:'data',ref:'data:dma_Query.mchtOdrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'처리구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_odrCreatCls',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_Query.sndYn'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'배차정보',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'scwin.f_excel',gridID:'gr_out',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_outInfo',id:'gr_out',style:'',visibleRowNum:'13',fixedColumn:'7',autoFit:'none',columnMove:'true',dataDragSelectAutoScroll:'true',editModeEvent:'onclick',readOnly:'true','ev:oncellclick':'scwin.gr_out_oncellclick',rowStatusWidth:'15',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'선택',width:'50'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'대표거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'대표거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'거래처',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'화주오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'작업시작일자',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'작업지시번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'등록<br/>순번',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column82',value:'상태<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column79',value:'긴급<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column76',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column73',value:'직영<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column70',value:'장비코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'SAP<br/>차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'RFID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'협력업체',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'SAP<br/>협력사코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',value:'SAP<br/>협력사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column46',value:'전송<br/>순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',value:'전송<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'전송일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'전송완료<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'전송완료일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column34',value:'상차지시서<br/>전송여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column85',value:'배차확정시간',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',width:'50',trueValue:'T',falseValue:'F',valueType:'other',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repClntNm',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNo',inputType:'text',width:'100',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'reqClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mchtOdrNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'120',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'transWrkIndictNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seq',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'urgentYn',displayMode:'label',displayFormatter:'scwin.urgentYnDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'jikYn',displayMode:'label',displayFormatter:'scwin.jikYnDisplayFm'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'strgArea',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapVehclCd',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'rfidNo',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sapCoClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sndSeq',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'sndYn',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'sndDt',displayMode:'label',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sndCmplYn',displayMode:'label',displayFormatter:'scwin.sndCmplYnDisplayFm',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'',id:'sndCmplDt',displayMode:'label',hidden:'true',displayFormat:'####/##/## ##:##'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'chkSndYn',displayMode:'label',displayFormatter:'scwin.chkSndYnDisplayFm'}},{T:1,N:'w2:column',A:{width:'120',inputType:'',style:'',id:'regDtm',value:'',displayMode:'label',displayFormat:'####/##/## ##:##'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column84',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column81',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column78',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column75',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column72',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column69',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column66',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column63',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column87',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})