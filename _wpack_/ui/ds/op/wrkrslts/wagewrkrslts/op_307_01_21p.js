/*amd /ui/ds/op/wrkrslts/wagewrkrslts/op_307_01_21p.xml 16762 a24a54adf85c1ad44f8a4295c6fcbd05503f72b8711043fcebf99b3d4badbde5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_QueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lunionOrgCd',name:'코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lunionOrgNm',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_RetrieveWorkResult',saveRemovedData:'true','ev:ondataload':'scwin.ds_RetrieveWorkResult_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lunionOrgCd',name:'노조코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lunionOrgNm',name:'노조명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chiefYn',name:'반장여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'노조원코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'노조원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'prtSeq',name:'인쇄순서',dataType:'number'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.wagewrkrslts.RetrieveSetStaffSequenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_QueryCondition","key":"IN_DS1"},{"id":"ds_RetrieveWorkResult","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_RetrieveWorkResult","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.wagewrkrslts.ModifySetStaffSequenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_RetrieveWorkResult","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_307_01_21p 
// 이름     : 임금명세서인쇄순서설정
// 경로     : 물류/정산/매입승인/노임매입승인
// 작 성 자 : 조성빈
// 작 업 일 : 2026-03-11
// 사용계정 : 내부
// 비고     : 
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================
scwin.onpageload = function () {
  scwin.lunionOrgCd = $c.gus.cfIsNull($p, $c.data.getParameter($p, "lunionOrgCd")) ? "" : $c.data.getParameter($p, "lunionOrgCd");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    scwin.f_Retrieve();
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------      
scwin.f_Retrieve = function () {
  if (scwin.lunionOrgCd == "") {
    ds_QueryCondition.set("lunionOrgCd", ed_lunionOrgCd.getValue());
  } else {
    ds_QueryCondition.set("lunionOrgCd", scwin.lunionOrgCd);
  }

  // ed_lunionOrgCd.setValue("P2204");            
  // ed_lunionOrgCd.focus();
  // ed_lunionOrgCd.blur();

  $c.sbm.execute($p, sbm_retrieve);
  scwin.lunionOrgCd = "";
};
scwin.excelDown = function () {
  //                                    sheet명                    , 저장파일명                        , 저장 다이얼로그
  // cfGridToExcel(gr_RetrieveWorkResult , "임금수령증인쇄순서설정" , "임금수령증인쇄순서설정.xls" , 4+8+16);
  const infoArr = [];
  const options = {
    fileName: "임금수령증인쇄순서설정.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "임금수령증인쇄순서설정",
    type: "1"
    // startRowIndex: 2,
    // removeColumns: "0,21",
    // hiddenVisible : true,
    // useSubTotal :"true", 
    // useSubTotalData  : "true",
    // oddRowBackgroundColor  : "",                        // excel파일에서 그리드 body의 홀수줄의 배경색
    // evenRowBackgroundColor : "#F5FFF5"                  // excel파일에서 그리드 body의 짝수줄의 배경색
  };
  $c.data.downloadGridViewExcel($p, gr_RetrieveWorkResult, options, infoArr);
};
scwin.f_modify = async function () {
  if (ds_RetrieveWorkResult.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  for (var i = 0; i < ds_RetrieveWorkResult.getRowCount(); i++) {
    // alert(ds_RetrieveWorkResult.NameValue(i,"chk"));
    // for(var j = 0 ; j < ds_RetrieveWorkResult.getRowCount() ; j++) {
    //     if (ds_RetrieveWorkResult.getCellData(i, "prtSeq") == 0){
    //         await $c.win.alert("인쇄순서가 정해지지 않았습니다.");
    //         return;
    //     }
    // }

    if (ds_RetrieveWorkResult.getCellData(i, "prtSeq") == 0) {
      await $c.win.alert($p, "인쇄순서가 정해지지 않았습니다.");
      return;
    }
  }
  for (var i = 0; i < ds_RetrieveWorkResult.getRowCount(); i++) {
    // alert(ds_RetrieveWorkResult.NameValue(i,"chk"));
    for (var j = i + 1; j < ds_RetrieveWorkResult.getRowCount(); j++) {
      if (ds_RetrieveWorkResult.getCellData(i, "prtSeq") == ds_RetrieveWorkResult.getCellData(j, "prtSeq")) {
        await $c.win.alert($p, "같은 인쇄순서가 있습니다.");
        // scwin.f_Retrieve();
        return;
      }
    }
  }
  if ((await $c.win.confirm($p, "적용하시겠습니까?")) == true) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.f_delete = async function () {
  if (ds_RetrieveWorkResult.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다.
    return;
  }
  if ((await $c.win.confirm($p, "전체초기화 하시겠습니까?")) == true) {
    for (var i = 0; i < ds_RetrieveWorkResult.getRowCount(); i++) {
      // alert(ds_RetrieveWorkResult.NameValue(i,"chk"));
      ds_RetrieveWorkResult.setCellData(i, "prtSeq", 0);
    }
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  $c.win.closePopup($p);
};

//-------------------------------------------------------------------------
// pop up
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 1:
      // 지급처 팝업
      //  rtnList = cfCommonPopUp('wageLunionOrgCdLevel12',pCode.trim(),pName,pClose,null,null,null,null,null,500,null,null,null); // 노임(반)
      udc_lunionOrg.setSelectId('wageLunionOrgCdLevel3');
      udc_lunionOrg.cfCommonPopUp(scwin.udc_lunionOrg_callBackFunc, pCode, pName, pClose, null, null, null, null, null, 500, null, null, null); // 노임(반)

      // rtnList = cfCommonPopUp('retrieveClntList',pCode.trim(),pName,'Y' ,null,null,null,null,null,null); // 거래처
      // cfSetReturnValue(rtnList, ed_lunionOrgCd, ed_lunionOrgNm);
      break;
  }
};
scwin.udc_lunionOrg_callBackFunc = function (rtnList) {
  if (rtnList == null || rtnList[0] == 'N/A') {
    ed_lunionOrgCd.setValue("");
    ed_lunionOrgNm.setValue("");
  } else {
    ed_lunionOrgCd.setValue(rtnList[2]);
    ed_lunionOrgNm.setValue(rtnList[3]);
  }
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
scwin.udc_lunionOrg_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgNm, ed_lunionOrgCd, 1, false);
};
scwin.udc_lunionOrg_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_lunionOrgCd.getValue(), ed_lunionOrgNm.getValue(), 'F', 'T');
};
scwin.udc_lunionOrg_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lunionOrgCd, ed_lunionOrgNm, 1);
};
scwin.btn_fieldClear_onclick = function (e) {
  // scwin.f_FieldClear();
  ed_lunionOrgCd.setValue("");
  ed_lunionOrgNm.setValue("");
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.btn_trigger2_onclick = function (e) {
  scwin.f_modify();
};
scwin.btn_trigger5_onclick = function (e) {
  scwin.f_delete();
};
scwin.btn_trigger1_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_RetrieveWorkResult.getRowCount();
  txt_totalRows.setValue(rowCnt);

  // cfHideDSWaitMsg(gr_RetrieveWorkResult);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, "[해당반원이] " + MSG_CM_ERR_003);
  }
  //cfShowTotalRows(totalRows,rowCnt);
  // alert("ds_RetrieveSpotVehicles="+ds_RetrieveSpotVehicles.text);
};
scwin.gr_RetrieveWorkResult_onafteredit = function (rowIndex, columnIndex, value) {
  var colid = gr_RetrieveWorkResult.getColumnID(columnIndex);
  if (colid == "prtSeq") {
    if (ds_RetrieveWorkResult.getCellData(rowIndex, "prtSeq") == 0) {
      ds_RetrieveWorkResult.setCellData(rowIndex, "prtSeq", 0);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지급처(노조)',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_lunionOrg',codeId:'ed_lunionOrgCd',nameId:'ed_lunionOrgNm',selectID:'','ev:onclickEvent':'scwin.udc_lunionOrg_onclickEvent',objTypeCode:'data',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',validTitle:'지급처(노조)',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_lunionOrg_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_lunionOrg_onblurCodeEvent',UpperFlag:'1',refDataCollection:'ds_QueryCondition',code:'lunionOrgCd',progressBarSwitch:'N',UpperFlagCode:'1'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'임금수령증 인원 인쇄 순서 설정 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section3',style:'',btnPlusYn:'Y',gridDownYn:'N',templateYn:'N',gridUpYn:'N',gridID:'gr_RetrieveWorkResult',gridDownFn:'scwin.excelDown',id:'udc_topGrdBtn',class:'',btnUser:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section3',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_RetrieveWorkResult',id:'gr_RetrieveWorkResult',style:'',columnMove:'false',visibleRowNumFix:'true',visibleRowNum:'10','ev:onafteredit':'scwin.gr_RetrieveWorkResult_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'노조코드',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'노조명',width:'200',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'반장여부',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'노조원코드',width:'100',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'노조원명',width:'100',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgCd',value:'인쇄순서',width:'70',sortable:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgCd',inputType:'text',width:'100',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lunionOrgNm',inputType:'text',width:'200',textAlign:'left',readOnly:'true',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'chiefYn',inputType:'text',width:'70',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNo',inputType:'text',width:'100',readOnly:'true',textAlign:'left',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'staffNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'prtSeq',inputType:'text',width:'70',dataType:'number',textAlign:'right',displayFormat:'#,###'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.btn_trigger1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger2',style:'',type:'button','ev:onclick':'scwin.btn_trigger2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'적용'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger5',style:'',type:'button','ev:onclick':'scwin.btn_trigger5_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'초기화'}]}]}]}]}]}]}]})