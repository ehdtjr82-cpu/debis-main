/*amd /ui/ds/op/wrkplan/stvwrkplan/op_103_01_10p.xml 29462 3e5f5b3efcc7194c37e4c3e5ba051f665a3e76a0e8b7903569304e5bdbb8a614 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_staff',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeNm',name:'직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNo',name:'인원번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'성명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrd',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrdNm',name:'직급명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:''}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeNm',name:'상세직종명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrangePsblYn',name:'배치가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hdofficeCtrtDrtYn',name:'본사계약직여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ecsYn',name:'연근여부',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_search',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'staffNo',name:'사번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'staffNm',name:'사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occptypeCd',name:'직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCd',name:'상세직종코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'직급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'occpgrd',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrangePsblYn',name:'배치가능여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dtlOccptypeCdFlag',name:'상세직종Flag',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shiftClsCd',name:'쉬프트구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_tr_retrieve',action:'/ds.op.RetrieveArrangementPossibleManPowerCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_staff","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_staff","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_tr_retrieve_submit','ev:submitdone':'scwin.sbm_tr_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/_wpack_/cm/gcc/gauss.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.params = $c.data.getParameter($p);
scwin.arrStaffNo = new Array(); //사번          
scwin.arrStaffNm = new Array(); //사원명        
scwin.arrBranCd = new Array(); //점소코드      
scwin.arrBranNm = new Array(); //점소명        
scwin.arrWrkPlCd = new Array(); //작업장코드    
scwin.arrOccptypeCd = new Array(); //직종          
scwin.arrDtlOccptypeCd = new Array(); //상세직종코드  
scwin.arrOccpgrdCd = new Array(); //직급          
scwin.arrWrkDt = new Array(); //작업일 , 작업시작일자, 작업종료일자
scwin.arrArrangePsblYn = new Array(); //배치가능여부
scwin.arrWindowCloseTf; //WINDOW CLOSE 여부
scwin.arrFlag; //상세직종구분
scwin.arrShiftClsCd; //shift구분
scwin.arr13;
scwin.arr14;
scwin.callbackFnStr = "";
scwin.onpageload = function () {
  /*
      scwin.arrStaffNo =  scwin.advancedSplit(arrParam[0], ",", "t");              //사번          
  	scwin.arrStaffNm = scwin.advancedSplit(arrParam[1], ",", "t");               //사원명        
  	scwin.arrBranCd = scwin.advancedSplit(arrParam[2], ",", "t");                //점소코드      
  	scwin.arrBranNm = scwin.advancedSplit(arrParam[3], ",", "t");                //점소명        
  	scwin.arrWrkPlCd = scwin.advancedSplit(arrParam[4], ",", "t");               //작업장코드    
  	scwin.arrOccptypeCd = scwin.advancedSplit(arrParam[5], ",", "t");            //직종          
  	scwin.arrDtlOccptypeCd = scwin.advancedSplit(arrParam[6], ",", "t");         //상세직종코드  
  	scwin.arrOccpgrdCd = scwin.advancedSplit(arrParam[7], ",", "t");             //직급          
  	scwin.arrWrkDt[0] = scwin.advancedSplit(arrParam[8].trim(), ",", "t");                 //작업일        
  	scwin.arrArrangePsblYn = scwin.advancedSplit(arrParam[9], ",", "t");         //배치가능여부  
  */
  var arrParam = scwin.params;

  ///임시 파라미터 세팅
  /*
  arrParam[0] = "190799";
  arrParam[1] = "김선학";
  arrParam[2] = "5A31";
  arrParam[3] = "동원로엑스광양";
  arrParam[4] = "";
  arrParam[5] = "";
  arrParam[6] = "";
  arrParam[7] = "abc,  de";
  arrParam[8] = "";
  arrParam[9] = "abc,  de";
  arrParam[10] = "T";
  arrParam[11] = "";
  arrParam[12] = "";
  arrParam[13] = "";
  arrParam[14] = "";
  */
  ///임시
  //arrParam[13] = "20150101";
  //arrParam[14] = "20250801";

  scwin.arrStaffNo = arrParam[0].advancedSplit(",", "t"); //사번          
  scwin.arrStaffNm = arrParam[1].advancedSplit(",", "t"); //사원명        
  scwin.arrBranCd = arrParam[2].advancedSplit(",", "t"); //점소코드      
  scwin.arrBranNm = arrParam[3].advancedSplit(",", "t"); //점소명        
  scwin.arrWrkPlCd = arrParam[4].advancedSplit(",", "t"); //작업장코드    
  scwin.arrOccptypeCd = arrParam[5].advancedSplit(",", "t"); //직종          
  scwin.arrDtlOccptypeCd = arrParam[6].advancedSplit(",", "t"); //상세직종코드  
  scwin.arrOccpgrdCd = arrParam[7].advancedSplit(",", "t"); //직급          
  scwin.arrWrkDt = arrParam[8].trim().advancedSplit(",", "t"); //작업일        
  scwin.arrArrangePsblYn = arrParam[9].advancedSplit(",", "t"); //배치가능여부  
  scwin.arrWindowCloseTf = arrParam[10]; //WINDOW CLOSE 여부
  scwin.arrFlag = arrParam[11]; //Flag
  scwin.arrShiftClsCd = arrParam[12]; //shift구분
  scwin.arr13 = arrParam[13];
  scwin.arr14 = arrParam[14];
  if (scwin.arr13 != "" && scwin.arr13 == null) {
    scwin.arrWrkDt[1] = scwin.arr13.trim().advancedSplit(",", "t"); //작업시작일
    scwin.arrWrkDt[2] = scwin.arr14.trim().advancedSplit(",", "t"); //작업종료일
  }
  if (scwin.arrFlag == '3') {
    //lc_dtlOccptypeCd.CBData = "^전체,<%=GauceUtil.getCodeList("OP161",3,"1") %>";
  } else {
    //lc_dtlOccptypeCd.CBData = "^전체,<%=GauceUtil.getCodeList("OP161",1,"1") %>";
  }
  ed_staffNo.setValue(scwin.arrStaffNo[0].trim()); //사번
  ed_staffNm.setValue(scwin.arrStaffNm[0].trim()); //사원명
  /* // scwin.onUdcCompleted 으로 이동
  ed_branCd.setValue(scwin.arrBranCd[0].trim());  //점소코드
  ed_branNm.setvalue(scwin.arrBranNm[0].trim());  //점소명
  */
  lc_occptypeCd.setValue(scwin.arrOccptypeCd[0].trim()); //직종
  lc_dtlOccptypeCd.setValue(scwin.arrDtlOccptypeCd[0].trim()); //상세직종코드
  lc_arrangePsblYn.setValue(scwin.arrArrangePsblYn[0].trim()); //배치가능여부  

  if (arrParam[6] == '') {
    lc_dtlOccptypeCd.setSelectedIndex(0);
  }
  if (scwin.arrStaffNo[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNo, false);
  }
  if (scwin.arrStaffNm[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNm, false);
  }
  /* // scwin.onUdcCompleted 으로 이동
  if(arrBranCd[1] == 'D'){
  	$c.gus.cfEnableObj(ed_branCd,false);
  }
  
  if(arrBranNm[1] == 'D'){
  	$c.gus.cfEnableObj(ed_branNm,false);
  }
  */
  if (scwin.arrOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_occptypeCd, false);
  }
  if (scwin.arrDtlOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_dtlOccptypeCd, false);
  }
  if (scwin.arrArrangePsblYn[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_arrangePsblYn, false);
  }
  //f_Retrieve();	// scwin.onUdcCompleted 으로 이동
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //alert(scwin.arrBranCd[0].trim());
    ed_branCd.setValue(scwin.arrBranCd[0].trim()); //점소코드
    ed_branNm.setValue(scwin.arrBranNm[0].trim()); //점소명

    if (scwin.arrBranCd[1] == 'D') {
      $c.gus.cfEnableObj($p, ed_branCd, false);
    }
    if (scwin.arrBranNm[1] == 'D') {
      $c.gus.cfEnableObj($p, ed_branNm, false);
    }

    //ed_branCd.focus();
    //ed_branNm.setDisabled(true);

    scwin.f_Retrieve();
  }, {
    "delay": 50
  });
};
scwin.f_Retrieve = function () {
  /*
  ds_search.NameValue(1,"staffNo") = ed_staffNo.text;  //사번
  ds_search.NameValue(1,"staffNm") = txt_staffNm.value;  //사원명
  ds_search.NameValue(1,"lobranCd") = ed_branCd.text;  //점소코드
  ds_search.NameValue(1,"wrkPlCd") = arrWrkPlCd[0].trim();      //작업장코드
  ds_search.NameValue(1,"occptypeCd") = lc_occptypeCd.BindColVal;      //직종코드
  ds_search.NameValue(1,"dtlOccptypeCd") = lc_dtlOccptypeCd.BindColVal;      //상세직종코드
  ds_search.NameValue(1,"wrkDt") = arrWrkDt[0].toString();      //작업일
  ds_search.NameValue(1,"arrangePsblYn") = lc_arrangePsblYn.BindColVal;      //작업일
  ds_search.NameValue(1,"dtlOccptypeCdFlag") = arrFlag;      //상세직종Flag
  ds_search.NameValue(1,"shiftClsCd") = arrShiftClsCd;      //상세직종Flag
  */

  ds_search.removeAll();
  ds_search.insertRow(0);
  ds_search.setCellData(0, "staffNo", ed_staffNo.text); //사번	
  ds_search.setCellData(0, "staffNm", ed_staffNm.value); //사원명
  ds_search.setCellData(0, "lobranCd", ed_branCd.getValue()); //점소코드
  //ds_search.setCellData(0, "wrkPlCd",         scwin.arrWrkPlCd[0].trim());      //작업장코드
  ds_search.setCellData(0, "wrkPlCd", scwin.arrWrkPlCd[0]); //작업장코드
  ds_search.setCellData(0, "occptypeCd", lc_occptypeCd.getValue()); //직종코드
  ds_search.setCellData(0, "dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종코드
  //ds_search.setCellData(0, "wrkDt",           scwin.arrWrkDt[0].toString());      //작업일
  ds_search.setCellData(0, "wrkDt", scwin.arrWrkDt[0]); //작업일
  ds_search.setCellData(0, "arrangePsblYn", lc_arrangePsblYn.getValue()); //작업일
  ds_search.setCellData(0, "dtlOccptypeCdFlag", scwin.arrFlag); //상세직종Flag
  ds_search.setCellData(0, "shiftClsCd", scwin.arrShiftClsCd); //상세직종Flag

  if (scwin.arr13 != null && scwin.arr13 != "") {
    /*
    ds_search.NameValue(1,"wrkStDt")	= arrWrkDt[1].toString();				//작업시작일
    ds_search.NameValue(1,"wrkEndDt")	= arrWrkDt[2].toString();				//작업종료일
    */
    ds_search.setCellData(0, "wrkStDt", scwin.arrWrkDt[1]); //작업시작일
    ds_search.setCellData(0, "wrkEndDt", scwin.arrWrkDt[2]); //작업종료일
  } else {
    /*
    ds_search.NameValue(1,"wrkStDt")	= arrWrkDt[0].toString();				//작업시작일
    ds_search.NameValue(1,"wrkEndDt")	= arrWrkDt[0].toString();				//작업종료일
    */
    ds_search.setCellData(0, "wrkStDt", scwin.arrWrkDt[0]); //작업시작일
    ds_search.setCellData(0, "wrkEndDt", scwin.arrWrkDt[0]); //작업종료일
  }

  //ds_search.UseChangeInfo = false;

  //dma_search.set("lobranCd", "5A31");
  //ds_search.insertRow(0);
  //ds_search.setCellData(0, "lobranCd", "5A31");

  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 
  //alert("disGubun : "+ disGubun);
  console.log("disGubun : " + disGubun);
  console.log("pCode : " + pCode);
  console.log("pName : " + pName);
  switch (disGubun) {
    case 1:
      //점소
      rtnList = await udc_comCode.openPopup(pCode, pName, ",,,,,,,,,");
      console.log(rtnList);
      /*
      rtnList = $c.gus.cfCommonPopUp('retrieveLogisDeptInfo'
                                      ,pCode
                                      ,pName
                                      ,pClose
                                      ,null
                                      ,null
                                      ,null
                                      ,null
                                      ,null
                                      ,null
                                      ,null
                                      ,null
                                      ,null);//점소
                                      */
      //점소코드  점소명
      $c.gus.cfSetReturnValue($p, rtnList, ed_branCd, ed_branNm);
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.sbm_tr_retrieve_submitdone = function (e) {
  var rowCnt = ds_staff.getRowCount();

  // <script language=JavaScript for=ds_staff event=OnLoadCompleted(rowCnt)>
  //$c.gus.cfHideDSWaitMsg(gr_staff);
  if (ds_staff.getRowCount() == 0) {
    alert("조회된 데이터가 없습니다.");
  } else {
    spa_totCnt.setValue(rowCnt);
    if (rowCnt == 1 && scwin.arrWindowCloseTf == 'T') {
      scwin.f_rtnValue(0);
    }
  }
};
scwin.f_rtnValue = function (row) {
  var arrRtnVal = new Array();
  arrRtnVal[0] = ds_staff.getCellData(row, "occptypeCd");
  arrRtnVal[1] = ds_staff.getCellData(row, "occptypeNm");
  arrRtnVal[2] = ds_staff.getCellData(row, "staffNo");
  arrRtnVal[3] = ds_staff.getCellData(row, "staffNm");
  arrRtnVal[4] = ds_staff.getCellData(row, "occpgrd");
  arrRtnVal[5] = ds_staff.getCellData(row, "occpgrdNm");
  arrRtnVal[6] = ds_staff.getCellData(row, "lobranCd");
  arrRtnVal[7] = ds_staff.getCellData(row, "lobranNm");
  arrRtnVal[8] = ds_staff.getCellData(row, "dtlOccptypeCd");
  arrRtnVal[9] = ds_staff.getCellData(row, "dtlOccptypeNm");
  arrRtnVal[10] = ds_staff.getCellData(row, "arrangePsblYn");
  arrRtnVal[11] = ds_staff.getCellData(row, "hdofficeCtrtDrtYn");
  arrRtnVal[12] = ds_staff.getCellData(row, "ecsYn");
  scwin.closePopup(arrRtnVal, scwin.callbackFnStr);
};
scwin.btn_init_onclick = function (e) {
  scwin.f_init();
};
scwin.f_init = function () {
  //ds_search.removeAll();
  //ds_search.insertRow(0);
  ds_search.setCellData(0, "staffNo", ed_staffNo.getValue()); //사번	
  ds_search.setCellData(0, "staffNm", ed_staffNm.getValue()); //사원명
  ds_search.setCellData(0, "lobranCd", ed_branCd.getValue()); //점소코드
  //ds_search.setCellData(0, "wrkPlCd",         scwin.arrWrkPlCd[0].trim());      //작업장코드
  ds_search.setCellData(0, "wrkPlCd", scwin.arrWrkPlCd[0]); //작업장코드
  ds_search.setCellData(0, "occptypeCd", lc_occptypeCd.getValue()); //직종코드
  ds_search.setCellData(0, "dtlOccptypeCd", lc_dtlOccptypeCd.getValue()); //상세직종코드
  //ds_search.setCellData(0, "wrkDt",           scwin.arrWrkDt[0].toString());      //작업일
  ds_search.setCellData(0, "wrkDt", scwin.arrWrkDt[0]); //작업일
  ds_search.setCellData(0, "arrangePsblYn", lc_arrangePsblYn.getValue()); //작업일
  ds_search.setCellData(0, "dtlOccptypeCdFlag", scwin.arrFlag); //상세직종Flag
  //ds_search.setCellData(0, "shiftClsCd",      scwin.arrShiftClsCd);      //상세직종Flag

  if (scwin.arrStaffNo[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNo, false);
  }
  if (scwin.arrStaffNm[1] == 'D') {
    $c.gus.cfEnableObj($p, ed_staffNm, false);
  }
  /* // scwin.onUdcCompleted 으로 이동
  if(arrBranCd[1] == 'D'){
  	$c.gus.cfEnableObj(ed_branCd,false);
  }
  
  if(arrBranNm[1] == 'D'){
  	$c.gus.cfEnableObj(ed_branNm,false);
  }
  */
  if (scwin.arrOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_occptypeCd, false);
  }
  if (scwin.arrDtlOccptypeCd[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_dtlOccptypeCd, false);
  }
  if (scwin.arrArrangePsblYn[1] == 'D') {
    $c.gus.cfEnableObj($p, lc_arrangePsblYn, false);
  }
};
scwin.btn_close_onclick = function (e) {
  scwin.closePopup(null, "");
};
scwin.udc_comCode_callback = function () {};

////////////////////////////////////////////////////////////////////////////////////////

scwin.btn_search_onclick = function (e) {
  scwin.f_init();
  $c.sbm.execute($p, sbm_tr_retrieve);
};
scwin.udc_comCode_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_branCd.getValue(), ed_branNm.getValue(), 'F', 'F');
};
scwin.udc_comCode_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_branNm, ed_branCd, 1, false);
};
scwin.f_chkOpenCommonPopUpCdBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_branCd, ed_branNm, 1, null);
};
scwin.f_chkOpenCommonPopUpNmBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_branNm, ed_branCd, 1, false);
};

/////////////////////////////////////////////////////////////////////////////////////////

scwin.advancedSplit = function (str, delim, options) {
  var arr = new Array();
  var cnt = 0;
  var startIdx = 0;
  var delimIdx = -1;
  var optionI = false;
  var optionT = false;
  options = options.trim().toUpperCase();
  for (var i = 0; i < options.length; i++) {
    if (options.charAt(i) == 'I') {
      optionI = true;
    } else if (options.charAt(i) == 'T') {
      optionT = true;
    }
  }
  while ((delimIdx = str == null ? -1 : str.indexOf(delim, startIdx)) != -1) {
    if (optionI && str.substr(delimIdx - 1, 2) == '\\' + delim) {
      str = str.cut(delimIdx - 1, 1);
      startIdx = delimIdx;
      continue;
    }
    arr[cnt++] = optionT ? str.substring(0, delimIdx).trim() : str.substring(0, delimIdx);
    str = str.substr(delimIdx + 1);
    startIdx = 0;
  }
  arr[cnt] = str == null ? "" : str;
  return arr;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:95px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'물류점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'popupBranCd',style:'',class:'',codeId:'ed_branCd',nameId:'ed_branNm',btnId:'btn_PopUp2',UpperFlagCode:'1',allowCharCode:'A-Z0-9',editTypeCode:'select',maxlengthCode:'5',objTypeCode:'data',validExpCode:'작업장:yes',id:'udc_comCode',validExpName:'물류점소:yes','ev:onclickEvent':'scwin.udc_comCode_onclickEvent',readOnlyCode:'false','ev:onviewchangeNameEvent':'scwin.udc_comCode_onviewchangeNameEvent',selectID:'retrieveLogisDeptInfo','ev:onblurCodeEvent':'scwin.f_chkOpenCommonPopUpCdBlur',onloadCallbackFunc:'scwin.udc_comCode_callback',popupTitle:'물류점소,점소코드,점소명',popupGridHeadTitle:'점소코드,점소명','ev:onblurNameEvent':'scwin.f_chkOpenCommonPopUpNmBlur'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배치가능여부',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_arrangePsblYn',style:'width: 85px;',submenuSize:'auto',ref:'',textAlign:'left',delimiter:'-',displayMode:'label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'N'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_occptypeCd',style:'width: 110px;',submenuSize:'auto',textAlign:'left',delimiter:'-',displayMode:'value delim label',ref:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정규직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'계약직'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'02'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상세직종',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_dtlOccptypeCd',style:'width: 120px;',submenuSize:'auto',ref:'',textAlign:'left',delimiter:'-',displayMode:'value delim label','ev:onchange':'scwin.lc_dtlOccptypeCd_onchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'a'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'b'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'c'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'d'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'4'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'인원',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group ',id:'',style:'width: 230px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_staffNo',placeholder:'',style:'width: 85px;',objType:'data',allowChar:'a-zA-Z0-9',maxlength:'6',editType:'select'}},{T:1,N:'xf:input',A:{class:'form-control',id:'ed_staffNm',placeholder:'',style:''}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.btn_search_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_staff',focusMode:'row',id:'gr_staff',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'직종코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'직종명'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'인원번호'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'성명'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'',value:'직급',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'150',value:'직급명'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'물류점소코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column33',value:'물류점소명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column31',value:'상세직종코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'상세직종명',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'배치가능여부',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column35',value:'본사계약직여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'연근여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occptypeCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occptypeNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNo',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'staffNm',inputType:'text',removeBorderStyle:'false',width:'100'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'occpgrd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'occpgrdNm',inputType:'text',removeBorderStyle:'false',width:'150',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'lobranNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dtlOccptypeNm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arrangePsblYn',inputType:'text',style:'',value:'',width:'150'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hdofficeCtrtDrtYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'ecsYn',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totCnt',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})