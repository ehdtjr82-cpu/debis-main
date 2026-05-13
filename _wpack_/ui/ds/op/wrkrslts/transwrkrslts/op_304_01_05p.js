/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.xml 21631 2deb7d14db89bd5ad3a1800bfbf11999688616fcf2a2d5324de3fa97c9fc8ff7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_emp',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'장비종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_empSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'vehclNoOrg',name:'차량번호원본',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text',length:'12'}},{T:1,N:'w2:column',A:{id:'chgItemNm',name:'변경항목명',dataType:'text',length:'20'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'eqNrmCd',name:'장비규격코드',dataType:'text',length:'2'}},{T:1,N:'w2:column',A:{id:'cntrBulkDiv',name:'화물구분',dataType:'text',length:'1'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text',length:'14'}},{T:1,N:'w2:column',A:{id:'transRsltsSeq',name:'운송실적순번',dataType:'number',defaultValue:'0',length:'4'}},{T:1,N:'w2:column',A:{id:'vehclShortCd',name:'단축코드',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'255'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'number',length:'20',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로순번',dataType:'number',length:'20',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계순번',dataType:'number',length:'20',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'copCoClntNo',name:'협력업체거래처번호',dataType:'text',length:'6'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.transwrkrslts.RetrieveVehiclesInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve","key":"IN_DS1"},{"id":"ds_emp","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveEmp',action:'/ds.op.wrkrslts.transwrkrslts.ChangeVehiclesNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_empSave","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveEmp_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * 화 면 명 : 차량번호변경등록
 * 메뉴경로 : 물류(D)/국내 운영/차량번호변경등록
 * ASIS경로 : /dongwon-debis-engine/src/main/webapp/ds/op/wrkrslts/transwrkrslts/op_304_01_05p.jsp
 * 작 성 자 : 유청아
 * 작 업 일 : 2026-03-19
 * 작업내용 :
 *    1. 화면세팅
 *    2. 초기세팅(UDC), 그리드(데이터리스트)
 *    3. 스크립트 TOBE전환
 *    4. 기능확인(버튼)
 * 참고사항

 * 수정이력 :
 *    - 2026-03-19      유청아    최초작성
 *    - 2026-04-13      이진우    T-6791 조치완료(심명관개발자 요청)
 */
scwin.transWrkIndictNo = "";
scwin.transRsltsSeq = "";
scwin.vehclNo = "";
scwin.eqCd = "";
scwin.cntrBulkDiv = "";
scwin.copCoClntNo = "";
scwin.odrNo = "";
scwin.cntrSeq = "";
scwin.wrkPathSeq = "";
scwin.wrkStpSeq = "";
scwin.cntrNo = "";
scwin.wrkStpNm = "";

//input hidden
scwin.vehclNoCd = "";
scwin.clntNo = "";
scwin.eqKndCd = "";
scwin.eqNrmCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  scwin.transWrkIndictNo = scwin.params.transWrkIndictNo;
  scwin.transRsltsSeq = scwin.params.transRsltsSeq;
  scwin.vehclNo = scwin.params.vehclNo;
  scwin.eqCd = scwin.params.eqCd;
  scwin.cntrBulkDiv = scwin.params.cntrBulkDiv;
  scwin.copCoClntNo = scwin.params.copCoClntNo;
  scwin.odrNo = scwin.params.odrNo;
  scwin.cntrSeq = scwin.params.cntrSeq;
  scwin.wrkPathSeq = scwin.params.wrkPathSeq;
  scwin.wrkStpSeq = scwin.params.wrkStpSeq;
  scwin.cntrNo = scwin.params.cntrNo;
  scwin.wrkStpNm = scwin.params.wrkStpNm;
  ds_retrieve.set("eqCd", scwin.eqCd);
  ds_retrieve.set("vehclNo", scwin.vehclNo);
  $c.sbm.execute($p, sbm_retrieve);
  scwin.f_DataSetting();
};
scwin.f_DataSetting = function () {
  ed_cntrNo.setValue(scwin.cntrNo);
  ed_wrkStpNm.setValue(scwin.wrkStpNm);
  ed_odrNo.setValue(scwin.odrNo);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  if (ed_txt_eqCd.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "차량번호"));
    ed_txt_eqCd.focus();
    return;
  }
  if (ed_txt_vehclNo.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "차량번호"));
    ed_txt_vehclNo.focus();
    return;
  }
  if (ed_txt_clntNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "협력업체명"));
    ed_txt_clntNm.focus();
    return;
  }
  if (ed_txt_eqKndNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "차량종류"));
    ed_txt_eqKndNm.focus();
    return;
  }
  if (ed_txt_eqNrmNm.getValue() == "") {
    $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "규격"));
    ed_txt_eqNrmNm.focus();
    return;
  }
  let ret = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (ret) {
    ds_empSave.insertRow(0);
    ds_empSave.setCellData(0, "eqCd", scwin.vehclNoCd);
    ds_empSave.setCellData(0, "vehclNoOrg", ds_emp.getCellData(0, "vehclNo")); //vehclNoOrg;
    ds_empSave.setCellData(0, "vehclNo", ed_txt_vehclNo.getValue());
    ds_empSave.setCellData(0, "chgItemNm", "차량번호변경");
    ds_empSave.setCellData(0, "clntNo", scwin.clntNo);
    ds_empSave.setCellData(0, "eqKndCd", scwin.eqKndCd);
    ds_empSave.setCellData(0, "eqNrmCd", scwin.eqNrmCd);
    ds_empSave.setCellData(0, "cntrBulkDiv", scwin.cntrBulkDiv);
    ds_empSave.setCellData(0, "transWrkIndictNo", scwin.transWrkIndictNo);
    ds_empSave.setCellData(0, "transRsltsSeq", scwin.transRsltsSeq);
    ds_empSave.setCellData(0, "vehclShortCd", ed_txt_eqCd.getValue().trim());
    ds_empSave.setCellData(0, "odrNo", scwin.odrNo);
    ds_empSave.setCellData(0, "cntrSeq", scwin.cntrSeq);
    ds_empSave.setCellData(0, "wrkPathSeq", scwin.wrkPathSeq);
    ds_empSave.setCellData(0, "wrkStpSeq", scwin.wrkStpSeq);
    ds_empSave.setCellData(0, "copCoClntNo", scwin.copCoClntNo);
    $c.sbm.execute($p, sbm_saveEmp);
  }
};

//-------------------------------------------------------------------------
// 변경차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openPopUp('1', ed_txt_eqCd.getValue(), ed_txt_vehclNo.getValue(), 'F', 'F');
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_txt_eqCd, ed_txt_vehclNo, '1');
};
scwin.udc_vehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_txt_vehclNo, ed_txt_eqCd, '1', false);
};
scwin.udc_vehclNo_callBackFunc = function (ret) {
  //$c.gus.cfSetReturnValue(ret, ed_txt_eqCd, ed_txt_vehclNo);

  if (ret == null) {
    scwin.vehclNoCd = "";
    ed_txt_eqCd.setValue("");
    ed_txt_vehclNo.setValue("");
    ed_txt_clntNm.setValue("");
    ed_txt_clntNm.setValue("");
    ed_txt_eqKndNm.setValue("");
    scwin.eqNrmCd = "";
    ed_txt_eqNrmNm.setValue("");
    scwin.clntNo = "";
  } else if (ret[0] == "N/A") {
    scwin.vehclNoCd = "";
    ed_txt_eqCd.setValue("");
    ed_txt_vehclNo.setValue("");
    ed_txt_clntNm.setValue("");
    ed_txt_clntNm.setValue("");
    ed_txt_eqKndNm.setValue("");
    scwin.eqNrmCd = "";
    ed_txt_eqNrmNm.setValue("");
    scwin.clntNo = "";
  } else {
    scwin.vehclNoCd = ret[0];
    ed_txt_eqCd.setValue(ret[1]);
    ed_txt_vehclNo.setValue(ret[2]);
    ed_txt_clntNm.setValue(ret[3]);
    scwin.eqKndCd = ret[4];
    ed_txt_eqKndNm.setValue(ret[5]);
    scwin.eqNrmCd = ret[6];
    ed_txt_eqNrmNm.setValue(ret[7]);
    scwin.clntNo = ret[8];
    ed_txt_clntNo.setValue(ret[8]);
  }
};
//-------------------------------------------------------------------------
// 변경차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var param1 = "";
  var param2 = "";
  var param3 = "";
  param1 = ed_txt_eqCd.getValue();
  param2 = ed_txt_vehclNo.getValue();
  param3 = ed_vehclNo.getValue() + ",C";
  udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc, param1, param2, "F", 4, null, null, null, param3, null, null, null, null, null, 'F', "차량번호,차량코드,차량명"); // 차량    
};

//-------------------------------------------------------------------------
// 팝업에서 선택된 값을 코드와 코드명 히든 필드에 세팅한다.
//-------------------------------------------------------------------------  
scwin.cfSetReturnValue = function (rtnList, codeObj, nameObj, hideObj) {
  // 팝업을 X 버튼으로 닫았을 때
  if (rtnList == null) {
    rtnList = new Array("", "", "");
  }
  // 팝업창 아래의 '닫기' 버튼으로 닫았을 때
  else if (rtnList[0] == "N/A") {
    // EMEdit
    if (cfGetElementType(codeObj) == "GE") {
      if (codeObj.hidVal != null) codeObj.setValue(codeObj.hidVal);else codeObj.setValue("");
    }
    // input type=text 또는 input type=hidden
    else if (cfGetElementType(codeObj) == "TEXT" || cfGetElementType(codeObj) == "HIDDEN") {
      if (codeObj.hidVal != null) codeObj.setValue(codeObj.hidVal);else codeObj.setValue("");
    }

    // EMEdit
    if (cfGetElementType(nameObj) == "GE") {
      if (nameObj.hidVal != null) nameObj.setValue(nameObj.hidVal);else nameObj.setValue("");
    }
    // input type=text 또는 input type=hidden
    else if (cfGetElementType(nameObj) == "TEXT" || cfGetElementType(nameObj) == "HIDDEN") {
      if (nameObj.hidVal != null) nameObj.setValue(nameObj.hidVal);else nameObj.setValue("");
    }

    // input type=text 또는 input type=hidden
    if (cfGetElementType(hideObj) == "TEXT" || cfGetElementType(hideObj) == "HIDDEN") {
      if (hideObj.hidVal != null) hideObj.setValue(hideObj.hidVal);else hideObj.setValue("");
    }
    return;
  }

  // EMEdit
  if (cfGetElementType(codeObj) == "GE") {
    codeObj.setValue(rtnList[0]);
  }
  // input type=text 또는 input type=hidden
  else if (cfGetElementType(codeObj) == "TEXT" || cfGetElementType(codeObj) == "HIDDEN") {
    codeObj.setValue(rtnList[0]);
  }
  codeObj.hidVal = rtnList[0];

  // EMEdit
  if (cfGetElementType(nameObj) == "GE") {
    nameObj.setValue(rtnList[1]);
  }
  // input type=text 또는 input type=hidden
  else if (cfGetElementType(nameObj) == "TEXT" || cfGetElementType(nameObj) == "HIDDEN") {
    nameObj.setValue(rtnList[1]);
  }

  // hideen
  if (cfGetElementType(hideObj) == "TEXT" || cfGetElementType(hideObj) == "HIDDEN") {
    hideObj.setValue(rtnList[2]);
  }
  nameObj.hidVal = rtnList[1];
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
  if (isCode == null || isCode == true) scwin.f_openPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  if (ds_emp.getRowCount() > 0) {
    ds_emp.setRowPosition(0);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveEmp_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.win.alert($p, "성공적으로 처리되었습니다.");
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};

//-------------------------------------------------------------------------
// 닫기 버튼
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  let rt = ["N/A"];
  $c.win.closePopup($p, rt);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'group1',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:'group2'},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'tbx_title',label:'차량변경등록',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width: 30%;'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 10%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경정보',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:' txt-red tac',id:'ed_odrNo',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:' txt-red tac',id:'ed_cntrNo',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:' txt-red tac',id:'ed_wrkStpNm',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac bg-req2'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th bg-req2',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac bg-req2',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac bg-req2',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체코드',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac bg-req2',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th tac bg-req2',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량종류',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th tac bg-req2'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'규격(Ton)',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'기존차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:' ',id:'ed_vehclNo',style:'',readOnly:'true',ref:'data:ds_emp.vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_clntNo',style:'',readOnly:'true',ref:'data:ds_emp.clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_clntNm',style:'',readOnly:'true',ref:'data:ds_emp.clntNm'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_eqKndNm',style:'',readOnly:'true',ref:'data:ds_emp.eqKndNm'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_eqNrmNm',style:'',readOnly:'true',ref:'data:ds_emp.eqNrmNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'변경차량번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveVehiclesInformationPopup',style:'',codeId:'ed_txt_eqCd',nameId:'ed_txt_vehclNo',btnId:'btn_vehclNo',id:'udc_vehclNo',selectID:'retrieveVehiclesInformation',maxlengthCode:'4',mandatoryCode:'true','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclNo_onviewchangeNameEvent',mandatoryName:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_clntNo',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_clntNm',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_eqKndNm',style:'',readOnly:'true'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' ',id:'ed_txt_eqNrmNm',style:'',readOnly:'true'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',title:'엑셀 UP',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Upt',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'차량번호 변경'}]}]}]}]}]}]}]})