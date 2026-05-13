/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml 25554 bb038aecaca9332eb7d09f3d436824bba45d2bb24f84b21629ecded1fac51c6b */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_stockQuery'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'assgnLobranCd',name:'배정점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqKndCd',name:'중기종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ourCoYn',name:'자사여부',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'소속업체',dataType:'text'}},{T:1,N:'w2:key',A:{id:'usblDt',name:'중기사용일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqNo',name:'단축번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'중기FULL번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_stockPresent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'eqShortCd',name:'단축번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'중기FULL번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndNm',name:'중기종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrmNm',name:'장비규격명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'배정점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'소속업체',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currSts',name:'상태',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNm1',name:'기사1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNm2',name:'기사2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNm3',name:'기사3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNm',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqNrm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCd',name:'장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col14',name:'장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKnd',name:'장비종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqKndCd',name:'장비종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNo1',name:'장비기사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNo2',name:'장비기사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqDrvNo3',name:'장비기사번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mp',name:'핸드폰',dataType:'text'}},{T:1,N:'w2:column',A:{id:'houseTel',name:'자택전화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'trs',name:'TRS',dataType:'text'}},{T:1,N:'w2:column',A:{id:'garageNm',name:'차고지명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'currPos',name:'현위치',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkIndictNo',name:'작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltEqCd',name:'관련장비코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltEqNm',name:'관련장비명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'col32',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqCls',name:'장비구분',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eqBun',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_eqBun_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveLogisticsHeavyEquipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_stockQuery","key":"IN_DS1"},{"id":"ds_stockPresent","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_stockPresent","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_eqBun',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_eqBun_search',target:'data:json,ds_eqBun',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : op_101_01_12p 
// 이름     : 중기검색화면
// 경로     : 물류/하역(인천)/계획/배치/장비 및 인력배치
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-27
// 사용계정 : 내부
// 비고     : ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================

scwin.Tfgb = "";
scwin.arrRtnVal = new Array();
scwin.nouse;
scwin.arrParam;
scwin.loUpperLobranCd;
scwin.onpageload = function () {
  // scwin.arrParam = $c.data.getParameter("arrParam");
  scwin.arrParam = $p.getAllParameter().paramData.data;
  scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
  var codeOptions = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_assgnLobranCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.codeCallBack);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(async function () {}, {
    "delay": 150
  });
};
scwin.codeCallBack = async function () {
  acb_assgnLobranCd.addItem("전체", "", "", 0);
  acb_assgnLobranCd.setSelectedIndex(0);

  //장비구분
  ds_eqBun_search.set("sysCd", "EquipmentNonUsableEBC");
  ds_eqBun_search.set("queryId", "retriveEquipCombo");
  var rs = await $c.sbm.execute($p, sbm_eqBun);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_eqBun.setJSON(rs.responseJSON.GAUCE);
  }
  ;
  acb_assgnLobranCd.setValue(scwin.loUpperLobranCd);
  acb_assgnLobranCd.focus(); // 점소코드

  acb_eqCndCd.setValue(scwin.arrParam[1]); // 중기종류
  ed_clntCd.setValue(scwin.arrParam[2]); // 소속업체	
  if (scwin.arrParam[3] == null) {
    // 중기사용일자
    ica_usblDt.setValue($c.date.getServerDateTime($p, "yyyyMMdd"));
  } else if (scwin.arrParam[3] != null) {
    ica_usblDt.setValue(scwin.arrParam[3]);
  }
  ed_eqNo.setValue(scwin.arrParam[4]); // 단축번호

  if (ed_eqNo.getValue() != "" && scwin.loUpperLobranCd == "4BB") {
    //acb_assgnLobranCd.index = acb_assgnLobranCd.IndexOfColumn("lobranCd", scwin.loUpperLobranCd);
    acb_assgnLobranCd.setSelectedIndex(0);
  } else {
    acb_assgnLobranCd.setValue(scwin.loUpperLobranCd);
  }
  ed_eqNm.setValue(scwin.arrParam[5]); // FULL번호
  //scwin.Tfgb = scwin.arrParam[6];									// WINDOW CLOSE 여부, 아직 구현안됐음 

  if (scwin.arrParam[6] == null || scwin.arrParam[6] == "F") {
    //chGb=="F";										// WINDOW CLOSE 여부, F면 무조건 팝업
    scwin.Tfgb = "F";
  } else if (scwin.arrParam[6] == "T") {
    //chGb=="T";										// WINDOW CLOSE 여부, T면 하나조회시 팝업안됨
    scwin.Tfgb = "T";
  }
  if (scwin.arrParam[7] == null) {
    //chGb=="F";										// 일자 수정불가능여부, F면 수정가능
    ica_usblDt.setReadOnly(false);
  } else if (scwin.arrParam[7] == "T") {
    //chGb=="T";										// 일자 수정불가능여부, T면 수정불가능
    ica_usblDt.setReadOnly(true);
  }
  scwin.nouse = scwin.arrParam[8]; // 비가용조회여부, T면 조회가능

  //acb_assgnLobranCd.Focus();

  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// Windows Close
//-------------------------------------------------------------------------
scwin.f_WinClose = function () {
  //scwin.arrRtnVal[0] = "N/A" ;
  $c.win.closePopup($p, scwin.arrRtnVal);
};

//-------------------------------------------------------------------------
// function name : f_equipBunryu
// function desc : 장비분류
//-------------------------------------------------------------------------   
//function f_equipBunryu() {
//	ds_eqBun.DataID = "/cm.zz.RetrieveComboCMD.do?sysCd=EquipmentNonUsableEBC&queryId=retriveEquipCombo";
//	ds_eqBun.Reset();
//}

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// Grid에서 선택된 Row Value   return
//-------------------------------------------------------------------------
scwin.f_rtnValue = function (row) {
  scwin.arrRtnVal[0] = ds_stockPresent.getCellData(row, "eqShortCd");
  scwin.arrRtnVal[1] = ds_stockPresent.getCellData(row, "vehclNo");
  scwin.arrRtnVal[2] = ds_stockPresent.getCellData(row, "eqKndNm");
  scwin.arrRtnVal[3] = ds_stockPresent.getCellData(row, "eqNrmNm");
  scwin.arrRtnVal[4] = ds_stockPresent.getCellData(row, "lobranNm");
  scwin.arrRtnVal[5] = ds_stockPresent.getCellData(row, "clntNm");
  scwin.arrRtnVal[6] = ds_stockPresent.getCellData(row, "currSts");
  scwin.arrRtnVal[7] = ds_stockPresent.getCellData(row, "eqDrvNm1");
  scwin.arrRtnVal[8] = ds_stockPresent.getCellData(row, "eqDrvNm2");
  scwin.arrRtnVal[9] = ds_stockPresent.getCellData(row, "eqDrvNm3");
  scwin.arrRtnVal[10] = ds_stockPresent.getCellData(row, "eqNm");
  scwin.arrRtnVal[11] = ds_stockPresent.getCellData(row, "eqNrm");
  scwin.arrRtnVal[12] = ds_stockPresent.getCellData(row, "eqCd");
  scwin.arrRtnVal[13] = ds_stockPresent.getCellData(row, "eqKnd");
  scwin.arrRtnVal[14] = ds_stockPresent.getCellData(row, "lobranCd");
  scwin.arrRtnVal[15] = ds_stockPresent.getCellData(row, "eqKndCd");
  scwin.arrRtnVal[16] = ds_stockPresent.getCellData(row, "eqDrvNo1");
  scwin.arrRtnVal[17] = ds_stockPresent.getCellData(row, "eqDrvNo2");
  scwin.arrRtnVal[18] = ds_stockPresent.getCellData(row, "eqDrvNo3");
  scwin.arrRtnVal[19] = ds_stockPresent.getCellData(row, "mp");
  scwin.arrRtnVal[20] = ds_stockPresent.getCellData(row, "houseTel");
  scwin.arrRtnVal[21] = ds_stockPresent.getCellData(row, "trs");
  scwin.arrRtnVal[22] = ds_stockPresent.getCellData(row, "garageNm");
  scwin.arrRtnVal[23] = ds_stockPresent.getCellData(row, "currPos");
  scwin.arrRtnVal[24] = ds_stockPresent.getCellData(row, "wrkIndictNo");
  scwin.arrRtnVal[25] = ds_stockPresent.getCellData(row, "wrkPlCd");
  scwin.arrRtnVal[26] = ds_stockPresent.getCellData(row, "rltEqCd");
  scwin.arrRtnVal[27] = ds_stockPresent.getCellData(row, "rltEqNm");
  scwin.arrRtnVal[28] = ds_stockPresent.getCellData(row, "wrkPlNm");
  scwin.arrRtnVal[29] = ds_stockPresent.getCellData(row, "clntNo");
  scwin.arrRtnVal[30] = ds_stockPresent.getCellData(row, "eqCls");
  scwin.arrRtnVal[31] = ds_stockPresent.getCellData(row, "ourCoYn");
  $c.win.closePopup($p, scwin.arrRtnVal);
};

//-------------------------------------------------------------------------
// function name : scwin.f_openPopUp
// function param: disGubun, chgGubun
// function desc : 팝업열기
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (disGubun, chgGubun) {
  switch (disGubun) {
    case 1:
      udc_clnt.setSelectId('retrieveCarKindClntInfo');
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, ed_clntCd.getValue(), ed_clntNm.getValue(), chgGubun, '5', null, '150,170', null, '02', '440', '500', null, null);
      break;
  }
};

//------------------------------------------------------
// object 데이타 변경시 호출
//------------------------------------------------------
scwin.f_chkField = function (chgValue1, chgValue2, disGubun) {
  var chgObj1 = $p.getComponentById(chgValue1);
  var chgObj2 = $p.getComponentById(chgValue2);
  var objType1 = chgValue1.substr(0, 2);
  var objType2 = chgValue2.substr(0, 2);
  if (objType1 == "ed") {
    if (chgObj1.getValue() == "") {
      chgObj2.setValue("");
    } else {
      // 이 부분에서 인자로 넘겨받은 T, F 값으로 분기를 해서 팝업시 T, F 설정해줘야한다.
      scwin.f_openPopUp(disGubun, "T");
    }
  } else {
    if (chgObj1.getValue() == "") {
      if (objType2 == "ed") {
        chgObj2.setValue("");
      } else {
        chgObj2.setValue("");
      }
    } else {
      if (chgObj1.hidVal != null && chgObj1.value == chgObj1.hidVal) {
        return;
      }
      // 이 부분에서 인자로 넘겨받은 T, F 값으로 분기를 해서 팝업시 T, F 설정해줘야한다.			
      scwin.f_openPopUp(disGubun, "T");
    }
  }
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_chkField('ed_clntNm', 'ed_clntCd', 1);
};
scwin.udc_clnt_onclickEvent = function (e) {
  scwin.f_openPopUp(1, 'T');
};
scwin.udc_clnt_onblurCodeEvent = function (e) {
  scwin.f_chkField('ed_clntCd', 'ed_clntNm', 1);
};
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, tb_mainData);
};
scwin.btn_trigger_onclick = function (e) {
  scwin.f_WinClose();
};
scwin.sbm_retrieve_submit = function (e) {
  ds_stockQuery.set("assgnLobranCd", acb_assgnLobranCd.getValue());
  ds_stockQuery.set("eqKndCd", acb_eqCndCd.getValue());
  ds_stockQuery.set("ourCoYn", acb_ourCoYn.getValue());
  ds_stockQuery.set("clntCd", ed_clntCd.getValue());
  ds_stockQuery.set("usblDt", ica_usblDt.getValue());
  ds_stockQuery.set("eqNo", ed_eqNo.getValue());
  ds_stockQuery.set("vehclNo", ed_eqNm.getValue());
};
scwin.sbm_retrieve_submitdone = async function (e) {
  var rowCnt = ds_stockPresent.getRowCount();
  if (rowCnt == 0) {
    await $c.win.alert($p, "조회된 데이터가 없습니다.");
  }
  // 이부분이 중기조회 팝업 한건조회시 자동 닫히게 함
  if (scwin.Tfgb == "T" && rowCnt == 1) {
    //alert(rowCnt);
    scwin.f_rtnValue(0);
  } else {}
  txt_totalRows.setValue(rowCnt);
  //  if(rowCnt == 1)
  //	scwin.f_rtnValue(0);
  //  totalRows.innerHTML = "총 " + ds_stockPresent.RealCount(0,rowCnt) + "건";	   // 소계 부분을 뺀 실제 데이터 갯수를 Count...
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.gr_stockPresent_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_rtnValue(rowIndex);
};
scwin.udc_clnt_callBackFunc = function (ref) {
  if (ref != null) {
    ed_clntCd.setValue(ref[0]); //매입거래처코드
    ed_clntNm.setValue(ref[1]); //매입거래처명
  } else {
    ed_clntCd.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.ed_eqNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_assgnLobranCd',ref:'',search:'start',style:'width: 230px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'new row'}]},{T:1,N:'w2:value'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_eqCndCd',ref:'',search:'start',style:'width: 230px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_eqBun'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자사여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_ourCoYn',ref:'',search:'start',style:'width: 100px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'타사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속업체',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_clntCd',nameId:'ed_clntNm',id:'udc_clnt',btnId:'btn_clnt',objTypeCode:'data',maxlengthCode:'6','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent',UpperFlagCode:'1',maxlengthName:'50',objTypeName:'data',allowCharCode:'a-zA-Z0-9',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기사용일자',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_usblDt',style:'',title:'기간(To)'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'단축번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNo',placeholder:'',style:'width: 110px;',maxlength:'6',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_eqNo_onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'중기FULL번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_eqNm',placeholder:'',style:'width: 110px;',maxlength:'50'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_stockPresent',focusMode:'row',id:'gr_stockPresent',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_stockPresent_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'단축번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'150',value:'중기FULL번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'중기종류'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'장비규격명'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'배정점소',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'소속업체',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'상태',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'기사1',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'기사2',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'기사3',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqShortCd',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclNo',inputType:'text',removeBorderStyle:'false',width:'150'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqKndNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'eqNrmNm',inputType:'text',removeBorderStyle:'false',width:'100',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'100',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'100',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'currSts',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDrvNm1',inputType:'text',style:'',value:'',width:'70',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'eqDrvNm2',inputType:'text',style:'',value:'',width:'70',class:'',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'eqDrvNm3',value:'',displayMode:'label',class:'',textAlign:'left'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'txt_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_trigger',style:'',type:'button','ev:onclick':'scwin.btn_trigger_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})