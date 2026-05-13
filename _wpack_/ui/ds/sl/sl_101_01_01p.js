/*amd /ui/ds/sl/sl_101_01_01p.xml 27422 9307f731a112509597d491175d1ff8a39641534353405132f0659aaa69db0aa3 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vesselMng',saveRemovedData:'true','ev:ondataload':'scwin.ds_vesselMng_OnLoadCompleted'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvIntendDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'관리',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslPurpsNm',name:'선박용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCoPortcnt',name:'선사항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'planPrscond',name:'본선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'오더여부',dataType:'text'}},{T:1,N:'w2:column',A:{dataType:'text',name:'마감일자',id:'closeDt'}},{T:1,N:'w2:column',A:{id:'closeHh',name:'마감시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvDt',name:'도착(입항)일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvHh',name:'도착(입항)시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptDt',name:'출발(출항)일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptHh',name:'출발(출항)시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portCd',name:'항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierCd',name:'부두코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pierNm',name:'부두코드명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'name22',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true','ev:ondataload':'scwin.ds_lobran_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'lobranCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'shpCoClntNo',name:'shpCoClntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'vsslCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryStDt',name:'qryStDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qyrEndDt',name:'qyrEndDt',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'cvsslMgntNo',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'impExpClsCd',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'mrn',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveCarryingVesselManagementNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_vesselMng","key":"OUT_DS1"},{"id":"ds_condition","key":"IN_DS1"}]',target:'data:json,{"id":"ds_vesselMng","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_OnSuccess','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : sl_101_01_01p 
// 이름     : 본선관리번호검색화면
// 경로     : 물류/작업실적/작업장하역/계근대/작업지시등록
// 작 성 자 : 조성빈
// 작 업 일 : 2026-01-27
// 사용계정 : 내부
// 비고     : ***
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//==================================================================================================================

scwin.onpageload = async function () {
  scwin.loUpperLobranCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "loUpperLobranCd")) ? "" : $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류상위점소코드
  scwin.userClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "userClsCd")) ? "" : $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
  scwin.clntNo = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNo")) ? "" : $c.data.getMemInfo($p, "clntNo"); // 거래처번호
  scwin.clntNm = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "clntNm")) ? "" : $c.data.getMemInfo($p, "clntNm"); // 거래처명

  scwin.paramTitle = $c.data.getParameter($p, "paramTitle");
  scwin.args = $p.getAllParameter().paramData.data;
  scwin.cvsslMgntNo = scwin.args[0];
  scwin.impExpClsCd = scwin.args[1];

  //점소 조회
  var rs = await $c.sbm.execute($p, sbm_lobran);
  if (rs.responseJSON.resultDataSet[0].Msg == "SUCC") {
    ds_lobran.setJSON(rs.responseJSON.GAUCE);
    var rowCnt = ds_lobran.getRowCount();
    if (rowCnt == 0) return;
    acb_lobran.addItem("전체", "", "", 0);
    acb_lobran.setSelectedIndex(0);
    if (scwin.cvsslMgntNo == "") {
      acb_lobran.setValue(scwin.loUpperLobranCd);
    } else {
      acb_lobran.setSelectedIndex(0);
    }
  }
  ;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(async function () {
    if (scwin.userClsCd != '01') {
      // 사용자구분이 내부사용자가 아니면
      ed_con_shpCo.setValue(scwin.clntNo); //거래처번호
      ed_con_shpCoNm.setValue(scwin.clntNm); // 거래처명
      $c.gus.cfDisableObjects($p, [ed_con_shpCo, ed_con_shpCoNm]);
    } else {
      $c.gus.cfEnableObjects($p, [ed_con_shpCo, ed_con_shpCoNm]);
    }
    ed_cvsslMgntNo.setValue(scwin.cvsslMgntNo);
    // acb_impExpClsCd.Index = acb_impExpClsCd.IndexOfColumn("code", scwin.impExpClsCd);
    acb_impExpClsCd.setValue(scwin.impExpClsCd);
    scwin.f_setDate();

    //acb_lobran.focus();
    acb_lobran.setValue(scwin.loUpperLobranCd);
    $p.setTimeout(async function () {
      scwin.f_Retrieve();
    }, {
      "delay": 300
    });
  }, {
    "delay": 150
  });
};
scwin.f_setDate = function () {
  var date = $c.date.getServerDateTime($p, "yyyyMMdd");
  var dateStr = date.substring(0, 6);
  if (scwin.cvsslMgntNo != "" && scwin.cvsslMgntNo.length > 4) {
    dateStr = dateStr.substring(0, 2) + scwin.cvsslMgntNo.substring(1, 5);
  }
  var firstDate = dateStr + "01";
  var endData = dateStr + $c.date.getLastDateOfMonth($p, dateStr);
  if ($c.date.isDate($p, firstDate)) {
    ica_qryStDt.setValue(firstDate);
  }
  if ($c.date.isDate($p, endData)) {
    ica_qryEndDt.setValue(endData);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------      
scwin.f_Retrieve = async function () {
  if (!(await $c.gus.cfValidate($p, [ica_qryStDt, ica_qryEndDt]))) {
    // 필수조건 : 조회기간
    return;
  }
  if (ica_qryStDt.getValue() > ica_qryEndDt.getValue()) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
    ica_qryEndDt.focus();
    return;
  }
  ds_condition.set("lobranCd", acb_lobran.getValue());
  ds_condition.set("shpCoClntNo", ed_con_shpCo.getValue());
  ds_condition.set("vsslCd", ed_vsslCd.getValue());
  ds_condition.set("qryStDt", ica_qryStDt.getValue());
  ds_condition.set("qyrEndDt", ica_qryEndDt.getValue());
  ds_condition.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  ds_condition.set("impExpClsCd", acb_impExpClsCd.getValue());
  ds_condition.set("mrn", ed_mrn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpEmEdit = function (gubun, chkObj, txtObj, disGubun, pAllSearch) {
  var pCode = "";
  var pName = "";
  if (disGubun == 2) {
    // 선석팝업을 띠우면
    if (scwin.userClsCd != '01') return; // 사용자구분이 내부사용자가 아니면
  }
  if (gubun == 1) {
    txtObj.setValue("");
    if (chkObj.getValue() == "") return;
  } else if (gubun == 2) {
    chkObj.setValue("");
    if (txtObj.getValue() == "") return;
  }
  pCode = chkObj.getValue().replace(/^\s*/, '');
  pName = txtObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', pAllSearch);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  var rtnList = new Array(); // 공통POP-UP -> 요청화면

  switch (disGubun) {
    case 1:
      // 선박 팝업
      udc_vssl.setSelectId('retrieveVsslCdInfo');
      udc_vssl.cfCommonPopUp(scwin.udc_vssl_callBackFunc, pCode, pName, "T", null, null, null, null, null, null, null, null, null, null, pAllSearch);
      break;
    case 2:
      // 선사 팝업
      udc_con_shp.setSelectId('retrieveClntInfo');
      udc_con_shp.cfCommonPopUp(scwin.udc_con_shp_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , 'SHP' // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "선사,선사코드,선사명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  if (scwin.userClsCd != '01') {
    // 사용자구분이 내부사용자가 아니면
    $c.gus.cfInitObjects($p, [acb_lobran, ed_vsslCd, ed_vsslNm, acb_impExpClsCd]);
  } else {
    $c.gus.cfInitObjects($p, [acb_lobran, ed_vsslCd, ed_vsslNm, acb_impExpClsCd, ed_con_shpCo, ed_con_shpCoNm]);
  }
  if (scwin.cvsslMgntNo == "") {
    acb_lobran.setValue(scwin.loUpperLobranCd);
  } else {
    acb_lobran.setSelectedIndex(0);
  }
  scwin.f_setDate();
  acb_lobran.focus();
};
scwin.udc_con_shp_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpEmEdit(2, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};
scwin.udc_con_shp_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(0, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};
scwin.udc_con_shp_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(1, ed_con_shpCo, ed_con_shpCoNm, 2, 'F');
};
scwin.udc_vssl_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpEmEdit(2, ed_vsslCd, ed_vsslNm, 1, 'F');
};
scwin.udc_vssl_onclickEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(0, ed_vsslCd, ed_vsslNm, 1, 'F');
};
scwin.udc_vssl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(1, ed_vsslCd, ed_vsslNm, 1, 'F');
};
scwin.f_impExpClsCd = function (data) {
  var retVal;
  switch (data) {
    case "I/":
      retVal = "수입";
      break;
    case "/O":
      retVal = "수출";
      break;
    case "I/O":
      retVal = "수입/수출";
      break;
    case "/":
      retVal = "";
      break;
    default:
      retVal = "";
      break;
  }
  return retVal;
};
scwin.shpCoPortCntFormatt = function (data) {
  var retVal;
  switch (data) {
    case "/":
      retVal = "";
      break;
    default:
      retVal = data;
      break;
  }
  return retVal;
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.gr_vesselMng_oncelldblclick = function (row, columnIndex, columnId) {
  // if (row == 0) return;
  var rtnValues = new Array();
  rtnValues[0] = ds_vesselMng.getCellData(row, "cvsslMgntNo"); //본선관리번호
  rtnValues[1] = ds_vesselMng.getCellData(row, "vsslCd"); //선박코드
  rtnValues[2] = ds_vesselMng.getCellData(row, "vsslNm"); //선박명
  rtnValues[3] = ds_vesselMng.getCellData(row, "closeDt"); //마감일자
  rtnValues[4] = ds_vesselMng.getCellData(row, "closeHh"); //마감시간
  rtnValues[5] = ds_vesselMng.getCellData(row, "arvDt"); //도착(입항)일자
  rtnValues[6] = ds_vesselMng.getCellData(row, "arvHh"); //도착(입항)시간
  rtnValues[7] = ds_vesselMng.getCellData(row, "dptDt"); //출발(출항)일자
  rtnValues[8] = ds_vesselMng.getCellData(row, "dptHh"); //출발(출항)시간
  rtnValues[9] = ds_vesselMng.getCellData(row, "shpCoPortcnt"); //선사항차
  rtnValues[10] = ""; //항로
  rtnValues[11] = ds_vesselMng.getCellData(row, "portCd"); //항구코드
  rtnValues[12] = ds_vesselMng.getCellData(row, "pierCd"); //부두코드
  rtnValues[13] = ds_vesselMng.getCellData(row, "pierNm"); //부두코드명
  rtnValues[14] = ds_vesselMng.getCellData(row, "lineCd"); //LINE 코드

  $c.win.closePopup($p, rtnValues);
};
scwin.sbm_retrieve_submit = function (e) {};
scwin.sbm_retrieve_OnSuccess = async function (e) {
  var rowCnt = ds_vesselMng.getRowCount();
  txt_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.win.alert($p, MSG_CM_WRN_002);
  } else if (rowCnt == 1 && scwin.cvsslMgntNo == ds_vesselMng.getCellData(0, "cvsslMgntNo")) {
    var rtnValues = new Array();
    rtnValues[0] = ds_vesselMng.getCellData(0, "cvsslMgntNo"); //본선관리번호
    rtnValues[1] = ds_vesselMng.getCellData(0, "vsslCd"); //선박코드
    rtnValues[2] = ds_vesselMng.getCellData(0, "vsslNm"); //선박명
    rtnValues[3] = ds_vesselMng.getCellData(0, "closeDt"); //마감일자
    rtnValues[4] = ds_vesselMng.getCellData(0, "closeHh"); //마감시간
    rtnValues[5] = ds_vesselMng.getCellData(0, "arvDt"); //도착(입항)일자
    rtnValues[6] = ds_vesselMng.getCellData(0, "arvHh"); //도착(입항)시간
    rtnValues[7] = ds_vesselMng.getCellData(0, "dptDt"); //출발(출항)일자
    rtnValues[8] = ds_vesselMng.getCellData(0, "dptHh"); //출발(출항)시간
    rtnValues[9] = ds_vesselMng.getCellData(0, "shpCoPortcnt"); //선사항차
    rtnValues[10] = ""; //항로
    rtnValues[11] = ds_vesselMng.getCellData(0, "portCd"); //항구코드
    rtnValues[12] = ds_vesselMng.getCellData(0, "pierCd"); //부두코드
    rtnValues[13] = ds_vesselMng.getCellData(0, "pierNm"); //부두코드명
    rtnValues[14] = ds_vesselMng.getCellData(0, "lineCd"); //LINE 코드

    $c.win.closePopup($p, rtnValues);
  }
};
scwin.sbm_retrieve_submiterror = function (e) {};
scwin.udc_vssl_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_vsslCd, ed_vsslNm);
};
scwin.udc_con_shp_callBackFunc = function (ref) {
  $c.gus.cfSetReturnValue($p, ref, ed_con_shpCo, ed_con_shpCoNm);
};
scwin.ed_cvsslMgntNo_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_mrn_onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pgtbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'pg-tit',id:''},E:[{T:1,N:'xf:group',A:{class:'tit',id:''},E:[{T:1,N:'w2:textbox',A:{class:'pgt_tit',id:'sp_title',label:'본선관리번호검색화면',style:'',tagname:''}}]},{T:1,N:'xf:trigger',A:{class:'btn ico help',id:'',style:'',type:'button'},E:[{T:1,N:'xf:label'}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'점소 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lobran',search:'start',style:'width:150px;',submenuSize:'auto',displayMode:'value delim label',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',nameId:'ed_con_shpCoNm',codeId:'ed_con_shpCo',id:'udc_con_shp',btnId:'btn_PopUp2','ev:onclickEvent':'scwin.udc_con_shp_onclickEvent',selectID:'',maxlengthCode:'6',UpperFlagCode:'1',objTypeCode:'data',objTypeName:'data','ev:onviewchangeNameEvent':'scwin.udc_con_shp_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_con_shp_onblurCodeEvent',allowCharCode:'a-zA-Z0-9',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width:85px;',maxlength:'11',title:'본선관리번호',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_cvsslMgntNo_onkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width:85px;',title:'본선관리번호',maxlength:'8',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.ed_mrn_onkeyup'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_impExpClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_vsslCd',nameId:'ed_vsslNm',id:'udc_vssl',btnId:'btn_vssl','ev:onclickEvent':'scwin.udc_vssl_onclickEvent',selectID:'',objTypeCode:'data',maxlengthCode:'4',UpperFlagCode:'1','ev:onviewchangeNameEvent':'scwin.udc_vssl_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_vssl_onblurCodeEvent',objTypeName:'key',allowCharCode:'a-zA-Z0-9',UpperFlag:'1'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입항예정일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_qryDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edToId:'ica_qryEndDt',edFromId:'ica_qryStDt',mandatoryFrom:'true',mandatoryTo:'true',objTypeFrom:'data',objTypeTo:'data'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_vesselMng',id:'gr_vesselMng',style:'','ev:oncelldblclick':'scwin.gr_vesselMng_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'본선<br/>관리번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'선박명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'선박코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'입항일자',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수출입<br/>구분',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'관리<br/>점소',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'MRN',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'선박용도',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'항차',width:'70'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'본선<br/>계획현황',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'오더여부<br/>(수입/수출)',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',width:'100',readOnly:'true',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvIntendDtm',inputType:'text',width:'100',displayFormat:'####/##/## ##:##',dataType:'text',customFormatter:'scwin.f_arvIntendDtm',readOnly:'true',textAlign:'center',Mandatory:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'text',width:'80',customFormatter:'scwin.f_impExpClsCd',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslPurpsNm',inputType:'text',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'shpCoPortcnt',inputType:'text',width:'70',customFormatter:'scwin.shpCoPortCntFormatt',readOnly:'true',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'planPrscond',displayMode:'label',readOnly:'true',textAlign:'center',customFormatter:'scwin.shpCoPortCntFormatt'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrCreateYn',displayMode:'label',readOnly:'true',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'txt_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})