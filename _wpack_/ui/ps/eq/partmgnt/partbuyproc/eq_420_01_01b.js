/*amd /ui/ps/eq/partmgnt/partbuyproc/eq_420_01_01b.xml 30306 7d5d78948f83a5267abe80a9d89e950c8200e1598f3df3d87c4b2de0dd903065 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPl',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cat',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cls',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'eqModel',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'maker',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partCd',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'partNm',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'apprvStsCd',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_eq411',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modelCd',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modelNm',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partMakerCd',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partCd',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partNm',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUnitCd',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'partUPr',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chgBfUPr',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'distinct_Col',name:'name15',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_repFixWrkPl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cmd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal2',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal3',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'strVal4',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal2',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'intVal3',name:'name8',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_repFixWrkPl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code02',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name02',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'code03',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name03',name:'name6',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_repFixWrkPl',action:'/ps.co.RetrievePsCboCmmCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_repFixWrkPl","key":"IN_DS1"},{"id":"ds_repFixWrkPl","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_repFixWrkPl","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.eq.partmgnt.partbuyproc.RetrievePartsUnitPriceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_eq411","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_eq411","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson;
scwin.udc_objNm;
scwin.interval01;
scwin.comboRtnFlag01;
scwin.comboRtnFlag02;
scwin.onpageload = function () {
  //전역변수값 셋팅함수.
  scwin.initSetVal();
  const codeOptions = [{
    method: "getLuxeComboData",
    param1: "PsCommonEBC",
    param2: "retriveHomeClsList",
    param3: ["CMP"],
    compID: "lc_homeClsCd"
  }];
  $c.data.setGauceUtil($p, codeOptions, scwin.commonCodeCallBack01);
  const codeOptions2 = [{
    grpCd: "EQ005",
    compID: "acb_catCd"
  },
  //계통콤보에 공통코드셋팅처리. 
  {
    grpCd: "EQ028",
    compID: "acb_partMakerCd"
  } //제조사콤보에 공통코드셋팅처리.
  ];
  $c.data.setCommonCode($p, codeOptions2, scwin.commonCodeCallBack02);
  scwin.interval01 = setInterval(async function () {
    if (scwin.comboRtnFlag01 == true && scwin.comboRtnFlag02 == true) {
      clearInterval(scwin.interval01);
      //초기화
      await scwin.f_defaultValue();
    }
  }, 300);
};
scwin.initSetVal = function () {
  scwin.memJson = $c.data.getMemInfo($p);
  scwin.comboRtnFlag01 = false;
  scwin.comboRtnFlag02 = false;
  ;
};
scwin.commonCodeCallBack01 = function () {
  ds_repFixWrkPl.insertRow(0);
  ds_repFixWrkPl.setCellData(0, "code", "");
  ds_repFixWrkPl.setCellData(0, "name", "전체");
  lc_fixWrkPlCd.setSelectedIndex(0);
  scwin.comboRtnFlag01 = true;
};
scwin.commonCodeCallBack02 = function () {
  $p.getComponentById(acb_catCd.getDataListInfo().id).insertRow(0);
  $p.getComponentById(acb_catCd.getDataListInfo().id).setCellData(0, "cd", "");
  $p.getComponentById(acb_catCd.getDataListInfo().id).setCellData(0, "cdNm", "전체");
  $p.getComponentById(acb_catCd.getDataListInfo().id).sort("cd", 0);
  acb_catCd.getSelectedIndex(0);
  $p.getComponentById(acb_partMakerCd.getDataListInfo().id).insertRow(0);
  $p.getComponentById(acb_partMakerCd.getDataListInfo().id).setCellData(0, "cd", "");
  $p.getComponentById(acb_partMakerCd.getDataListInfo().id).setCellData(0, "cdNm", "전체");
  acb_partMakerCd.getSelectedIndex(0);
  scwin.comboRtnFlag02 = true;
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_defaultValue = async function () {
  //불필요한듯.
  //lc_homeClsCd.BindColVal = scwin.memJson.eqHomeClsCd; //정비소속구분코드

  if (scwin.memJson.eqHomeClsCd == undefined || scwin.memJson.eqHomeClsCd == null || scwin.memJson.eqHomeClsCd == "") {
    lc_homeClsCd.setSelectedIndex(0);
  }
  await scwin.f_RetrieveRepFixWrkPl(lc_homeClsCd.getValue());

  //cfDisableObjects와 비슷한 형태로, 오브젝트의 값을 초기화시킨다.
  $c.gus.cfInitObjects($p, [ed_eqModelCd, ed_eqModelNm, ed_clntNo, ed_clntNm, ed_partCd, ed_partNm]);
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  //필수입력항목 체크
  let ret = await $c.gus.cfValidate($p, [lc_homeClsCd]);
  if (!ret) {
    return;
  }

  //dma_search.set(keyId, keyValue);

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_retrieve);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_retrieve_submitdone();
  }
};
scwin.sbm_retrieve_submitdone = async function (e) {
  if (ds_eq411.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }

  /*
  var nRowSpan = 1;
  for(var i=0;i<ds_eq411.getRowCount();i++) {
      if(ds_eq411.getCellData(i, "partCd") == ds_eq411.getCellData(i+1, "partCd") &&
         ds_eq411.getCellData(i, "partNm") == ds_eq411.getCellData(i+1, "partNm") &&
         ds_eq411.getCellData(i, "partUnitCd") == ds_eq411.getCellData(i+1, "partUnitCd") &&
         ds_eq411.getCellData(i, "modelNm") == ds_eq411.getCellData(i+1, "modelNm")
      ) {
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partNm"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partUnitCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("modelNm"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
      } else if(ds_eq411.getCellData(i, "partCd") == ds_eq411.getCellData(i+1, "partCd") &&
                ds_eq411.getCellData(i, "partNm") == ds_eq411.getCellData(i+1, "partNm") &&
                ds_eq411.getCellData(i, "partUnitCd") == ds_eq411.getCellData(i+1, "partUnitCd")) {
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partNm"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partUnitCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
      } else if(ds_eq411.getCellData(i, "partCd") == ds_eq411.getCellData(i+1, "partCd") &&
                ds_eq411.getCellData(i, "partNm") == ds_eq411.getCellData(i+1, "partNm")) {
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partNm"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
      } else if(ds_eq411.getCellData(i, "partCd") == ds_eq411.getCellData(i+1, "partCd")) {
          gr_eq411.mergeCell({"rowIndex" : i, "colIndex" : gr_eq411.getColumnIndex("partCd"), "colSpan" : 1, "rowSpan" : nRowSpan+1});
      } else {
          nRowSpan = 1;
      }
  }
  */

  totalRows.setValue(ds_eq411.getRowCount());
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_eq411, null);
};

//------------------------------------------------------------------------
// [작업장  콤보 조회] 소속 구분에 따른 작업장 리스트 콤보 변경 ( 조회조건 LuxCombo )
//------------------------------------------------------------------------
scwin.f_RetrieveRepFixWrkPl = async function (homeClsCd) {
  /*
  ds_repFixWrkPl.DataID = "/ps.co.RetrievePsCboCmmCMD.do?cmd=retriveFixWrkList&strVal="+homeClsCd+"&intVal=";    
  ds_repFixWrkPl.Reset(); 
  */

  dma_repFixWrkPl.set("cmd", "retriveFixWrkList");
  dma_repFixWrkPl.set("strVal", homeClsCd);
  dma_repFixWrkPl.set("intVal", "0");
  dma_repFixWrkPl.set("intVal2", "0");
  dma_repFixWrkPl.set("intVal3", "0");
  ds_repFixWrkPl.removeAll();

  //submit 처리.
  let objSubmit = await $c.sbm.execute($p, sbm_repFixWrkPl);
  if (objSubmit.responseJSON.resultDataSet[0].Msg == "SUCC") {
    await scwin.sbm_repFixWrkPl_submitdone();
  }
};
scwin.sbm_repFixWrkPl_submitdone = async function (e) {
  // 전체조건 추가
  ds_repFixWrkPl.insertRow(0);
  ds_repFixWrkPl.setCellData(0, "code", "");
  ds_repFixWrkPl.setCellData(0, "name", "전체");
  ds_repFixWrkPl.sort("code", 0);
  lc_fixWrkPlCd.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (callObj, disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    // 장비모델 팝업
    case 1:
      callObj.setSelectId("retrieveEqModelList");
      scwin.udc_objNm = "udc_eqModel";
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "장비모델,모델코드,모델명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번째검색Nm"));
      );
      break;

    // 거래처 PopUp 호출
    case 2:
      callObj.setSelectId("retrieveFixClntList");
      scwin.udc_objNm = "udc_clnt";
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
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
      , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;

    // 부품 PopUp 호출
    case 3:
      callObj.setSelectId("retrievePartInfo");
      scwin.udc_objNm = "udc_part";
      await callObj.cfCommonPopUp(scwin.udc_AllInOne_callBackFunc, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "부품,부품코드,부품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_AllInOne_callBackFunc = function (rtnList) {
  let codeObj;
  let nameObj;
  if (scwin.udc_objNm == "udc_eqModel") {
    codeObj = ed_eqModelCd;
    nameObj = ed_eqModelNm;
  } else if (scwin.udc_objNm == "udc_clnt") {
    codeObj = ed_clntNo;
    nameObj = ed_clntNm;
  } else if (scwin.udc_objNm == "udc_part") {
    codeObj = ed_partCd;
    nameObj = ed_partNm;
  }
  $c.gus.cfSetReturnValue($p, rtnList, codeObj, nameObj);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (callObj, inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }
  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == undefined || isCode == true) {
    await scwin.f_openCommonPopUp(callObj, disGubun, pVal, '', 'T', 'T');
  }
  // inObj가 코드명 필드일 경우 팝업
  else {
    await scwin.f_openCommonPopUp(callObj, disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var sheetTitle = "부품단가목록.xlsx";
  const options = {
    fileName: sheetTitle,
    sheetName: "부품단가목록"
  };
  $c.data.downloadGridViewExcel($p, gr_eq411, options);
};
scwin.ddd_onclick = function (e) {
  debugger;
};
scwin.lc_homeClsCd_onchange = async function (info) {
  var luxIndex = lc_homeClsCd.getValue();
  await scwin.f_RetrieveRepFixWrkPl(luxIndex);
};

//(PopUp EVENT) 장비모델코드 EMEdit Focus 이동시
scwin.udc_eqModel_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(udc_eqModel, ed_eqModelCd, ed_eqModelNm, 1);
};

//(PopUp EVENT) 거래처코드 EMEdit Focus 이동시
scwin.udc_clnt_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(udc_clnt, ed_clntNo, ed_clntNm, 2);
};

//부품코드 focus out 시
scwin.udc_part_onblurCodeEvent = async function (e) {
  await scwin.f_chkOpenCommonPopUp(udc_part, ed_partCd, ed_partNm, 3);
};

//부품코드명 변경시
scwin.udc_part_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(udc_part, ed_partNm, ed_partCd, 3, false);
};

//거래처명 변경시
scwin.udc_clnt_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(udc_clnt, ed_clntNm, ed_clntNo, 2, false);
};

//장비명 변경시
scwin.udc_eqModel_onviewchangeNameEvent = async function (info) {
  await scwin.f_chkOpenCommonPopUp(udc_eqModel, ed_eqModelNm, ed_eqModelCd, 1, false);
};

//부품 돋보기 버튼 클릭시
scwin.udc_part_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(udc_part, 3, ed_partCd.getValue(), ed_partNm.getValue(), 'F', 'T');
};

//거래처 돋보기 버튼 클릭시
scwin.udc_clnt_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(udc_clnt, 2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

//장비모델 돋보기 버튼 클릭시
scwin.udc_eqModel_onclickEvent = async function (e) {
  await scwin.f_openCommonPopUp(udc_eqModel, 1, ed_eqModelCd.getValue(), ed_eqModelNm.getValue(), 'F', 'T');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_eq411',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'false',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 150px;',submenuSize:'fixed',displayMode:'value delim label',ref:'data:dma_search.homeClsCd','ev:onchange':'scwin.lc_homeClsCd_onchange'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fixWrkPlCd',style:'width: 150px;',submenuSize:'fixed',ref:'data:dma_search.wrkPl',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_repFixWrkPl'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'부품 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_partCd',nameId:'ed_partNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_part',code:'partCd',refDataCollection:'dma_search',name:'partNm','ev:onblurCodeEvent':'scwin.udc_part_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_part_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_part_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',nameId:'ed_clntNm',popupID:'',selectID:'',style:'',validTitle:'',id:'udc_clnt',code:'clntCd',refDataCollection:'dma_search','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_clnt_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계통 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_catCd',search:'start',style:'width:150px;',submenuSize:'auto',disabled:'false',allOption:'',chooseOption:'',ref:'data:dma_search.cat',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비모델 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_eqModelCd',nameId:'ed_eqModelNm',popupID:'',selectID:'',style:'',validTitle:'',code:'eqModel',refDataCollection:'dma_search',id:'udc_eqModel','ev:onblurCodeEvent':'scwin.udc_eqModel_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_eqModel_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_eqModel_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'제조사 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'form-control',editType:'select',id:'acb_partMakerCd',search:'start',style:'width:150px;',submenuSize:'auto',disabled:'false',allOption:'',chooseOption:'',ref:'data:dma_search.maker',displayMode:'value delim label'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'ddd',label:'부품단가 목록 ',style:'',tagname:'h3','ev:onclick':'scwin.ddd_onclick'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',btnUser:'Y',gridUpYn:'N',gridID:'gr_eq411',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_eq411',focusMode:'row',id:'gr_eq411',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true',columnMove:'true',fixedColumnNoMove:'true',fixedColumn:'2'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'부품코드',width:'162'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'부품명',width:'162'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'단위',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'장비모델코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'장비모델명',width:'180'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'거래처',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'거래처명',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'작업장코드',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'작업장명',width:'160'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column40',value:'부품단가',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'column42',value:'적용일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'partCd',inputType:'text',style:'',value:'',width:'162',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partNm',inputType:'text',style:'',value:'',width:'162',textAlign:'left',colMerge:'true',upperColumn:'partCd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'partUnitCd',inputType:'text',style:'',value:'',width:'160',colMerge:'true',upperColumn:'partNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modelCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'modelNm',inputType:'text',style:'',value:'',width:'180',textAlign:'left',colMerge:'true',upperColumn:'partUnitCd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNo',inputType:'text',style:'',value:'',width:'160'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'text',style:'',value:'',width:'160',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'130',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',style:'',value:'',width:'160'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'partUPr',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'160',inputType:'text',style:'',id:'adptDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})