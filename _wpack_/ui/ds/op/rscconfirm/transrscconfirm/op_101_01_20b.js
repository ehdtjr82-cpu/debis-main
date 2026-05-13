/*amd /ui/ds/op/rscconfirm/transrscconfirm/op_101_01_20b.xml 54270 329af94e3887fe82cc4aebe72f572a13814b5c740110d0be2e12c6e53c240748 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_vehicle',saveRemovedData:'true','ev:ondataload':'scwin.ds_vehicle_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'posnClsCd',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_img',saveRemovedData:'true','ev:ondataload':'scwin.ds_img_ondataload','ev:onrowpositionchange':'scwin.ds_img_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imgFileNm',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'imgFilePathNm',name:'name3',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_queryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_customerPurchaseInformation','ev:ondataload':'scwin.ds_customerPurchaseInformation_ondataload',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'clntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catBusi',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcond',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name9',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtDt',name:'name10',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name11',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtStDt',name:'name12',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtEndDt',name:'name13',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lastModDtm',name:'name14',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'name15',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'jobType',name:'name17',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_ctrtNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_ctrtNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_customerInformation',saveRemovedData:'true','ev:ondataload':'scwin.ds_customerInformation_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'telNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'busiNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mpNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bizcond',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repstNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'catBusi',name:'name7',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coClsCd',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'eqClssCd',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_query'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ctrtNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.rscconfirm.transrscconfirm.RetrievePurchaseInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_customerPurchaseInformation","key":"OUT_DS1"},{"id":"ds_img","key":"OUT_DS2"},{"id":"ds_vehicle","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_customerPurchaseInformation","key":"OUT_DS1"},{"id":"ds_img","key":"OUT_DS2"},{"id":"ds_vehicle","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveCtrtList',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_ctrtList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_ctrtList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_renewal',action:'/ds.op.rscconfirm.transrscconfirm.RenewalPurchaseInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_queryCondition","key":"IN_DS1"},{"id":"ds_customerPurchaseInformation","key":"OUT_DS1"},{"id":"ds_vehicle","key":"OUT_DS3"}]',target:'data:json,[{"id":"ds_customerPurchaseInformation","key":"OUT_DS1"},{"id":"ds_vehicle","key":"OUT_DS3"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.rscconfirm.transrscconfirm.RegistPurchaseInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerPurchaseInformation","key":"IN_DS1"},{"id":"ds_img","key":"IN_DS2"},{"id":"dma_queryCondition","key":"OUT_DS1"}]',target:'data:json,{"id":"dma_queryCondition","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_ctrtNo',action:'/cm.zz.RetrieveComboCMD.do?queryId=retrieveNewContractNumber&sysCd=PurchaseCustomerContractManagementEBC&param1=&param2=',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_ctrtNo","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getClntInfo',action:'/ds.op.rscconfirm.transrscconfirm.RetrieveCustomerBasisInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_customerInformation","key":"OUT_DS1"},{"id":"ds_vehicle","key":"OUT_DS2"},{"id":"dma_query","key":"IN_DS1"}]',target:'data:json,[{"id":"ds_customerInformation","key":"OUT_DS1"},{"id":"ds_vehicle","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_getClntInfo_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.op.rscconfirm.transrscconfirm.RegistPurchaseInformationCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_actionModified_submitdone','ev:submiterror':'',id:'sbm_save_actionModified',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_img","key":"IN_DS2"},{"id":"dma_queryCondition","key":"OUT_DS1"},{"action":"modified","id":"ds_customerPurchaseInformation","key":"IN_DS1"}]',replace:'',target:'data:json,{"id":"dma_queryCondition","key":"OUT_DS1"}',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',scopeVariable:'DFWConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 추가작업
// 저장 , 이미지 미리보기
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환

//파일 업로드 위치
scwin.systemPathKey = DFWConstants.FILE_UPLOAD_SYSTEM_PATH;
scwin.systemPathVal = "/ds/op/rscconfirm/transrscconfirm";
scwin.loUpperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 회원 점소 데이터
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자구분코드
scwin.clntNo = $c.data.getMemInfo($p, "clntNo"); // 거래처번호
scwin.clntNm = $c.data.getMemInfo($p, "clntNm"); // 거래처명

scwin.isRenew = 0; // 0:nothing, 1:New,  2:Renew
scwin.infoRowCnt = 0; // row Count
scwin.FILE_DOWNLOAD_URL = "/s3upload.do";

//-------------------------------------------------------------------------
// 화면 로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};
scwin.onUdcCompleted = function () {
  if (scwin.userClsCd != "01") {
    // 사용자구분이 내부사용자가 아니면

    ed_clntNo.setValue(scwin.clntNo); //거래처번호
    ed_clntNm.setValue(scwin.clntNm); // 거래처명
    $c.gus.cfDisableObjects($p, [udc_clnt]);
  } else {
    $c.gus.cfEnableObjects($p, [udc_clnt]);
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_clnt2, udc_gr_bottom]);
  $c.gus.cfDisableBtn($p, [btn_save]);
  scwin.f_clearData();
  ed_clntNo.focus();
  $c.gus.cfDisableObjects($p, [btn_fileSave]);
  // btn_fileSave.hide();
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.f_clearData = function () {
  dma_queryCondition.setJSON();
  ds_customerPurchaseInformation.removeAll();
  ds_img.removeAll();
  ds_vehicle.removeAll();
  ica_ctrtDt.setValue(scwin.strCurDate);
  ed_telNo.setValue("");
  ed_busiNo.setValue("");
  ed_mpNo.setValue("");
  ed_bizcond.setValue("");
  ed_addr.setValue("");
  ed_repstNm.setValue("");
  ed_catBusi.setValue("");
  ed_clntNm2.setValue("");
  ed_clntNo2.setValue("");
  ed_numOfVehicle.setValue("0");
  $c.gus.cfDisableObjects($p, [ed_ctrtNo2]);
  if (scwin.userClsCd != "01") {
    // 사용자구분이 내부사용자가 아니면
    ed_clntNo.setValue(scwin.clntNo); //거래처번호
    ed_clntNm.setValue(scwin.clntNm); // 거래처명
  }
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [tb_mainData]))) {
    return;
  }
  dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  dma_queryCondition.set("ctrtNo", lc_ctrtNo.getValue());
  $c.sbm.execute($p, sbm_retrieve);
  if (scwin.f_getRowCnt() == 0) {
    scwin.f_clearData();
  }
  $c.gus.cfDisableKeyData($p);
  $c.gus.cfDisableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_clnt2, udc_gr_bottom]);
  $c.gus.cfDisableBtn($p, [btn_save]);
};

//-------------------------------------------------------------------------
// 조회 데이터 완료시
//-------------------------------------------------------------------------
scwin.ds_customerPurchaseInformation_ondataload = function () {
  let rowCnt = ds_customerPurchaseInformation.getTotalRow();
  ds_customerPurchaseInformation.setRowPosition(0);
  if (rowCnt == 0) {
    scwin.f_clearData();
    scwin.f_setRowCnt(rowCnt);
    $c.win.alert($p, "조회된 데이터가 없습니다.");
  } else {
    scwin.f_setRowCnt(rowCnt);
    ed_telNo.setValue(ds_customerPurchaseInformation.getCellData(0, "telNo"));
    ed_busiNo.setValue(ds_customerPurchaseInformation.getCellData(0, "busiNo"));
    ed_mpNo.setValue(ds_customerPurchaseInformation.getCellData(0, "mpNo"));
    ed_bizcond.setValue(ds_customerPurchaseInformation.getCellData(0, "bizcond"));
    ed_addr.setValue(ds_customerPurchaseInformation.getCellData(0, "addr"));
    ed_repstNm.setValue(ds_customerPurchaseInformation.getCellData(0, "repstNm"));
    ed_catBusi.setValue(ds_customerPurchaseInformation.getCellData(0, "catBusi"));
    // ed_clntNm2.setValue(ds_customerPurchaseInformation.getCellData(0 ,"clntNm"));	
    ed_clntNo2.setValue(ds_customerPurchaseInformation.getCellData(0, "clntNo"));
    ica_ctrtStDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtStDt"));
    ica_ctrtEndDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtEndDt"));
    ica_ctrtDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtDt"));
    ed_ctrtNo2.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtNo"));
    acb_coClsCd.setValue(ds_customerPurchaseInformation.getCellData(0, "coClsCd"));
    acb_eqClssCd.setValue(ds_customerPurchaseInformation.getCellData(0, "eqClssCd"));
    scwin.f_chkOpenCommonPopUp(ed_clntNo2, ed_clntNm2, 2);
  }
};

//-------------------------------------------------------------------------
// 조회 데이터 완료시
//-------------------------------------------------------------------------
scwin.f_getRowCnt = function () {
  return scwin.infoRowCnt;
};

//-------------------------------------------------------------------------
// 조회 데이터 완료시
//-------------------------------------------------------------------------
scwin.f_setRowCnt = function (rowCnt) {
  scwin.infoRowCnt = rowCnt;
};

//-------------------------------------------------------------------------
// 조회조건 거래처 UDC 클릭
//-------------------------------------------------------------------------
scwin.udc_Clnt_onClick = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};

//-------------------------------------------------------------------------
// 조회조건 거래처 Code Blur
//-------------------------------------------------------------------------
scwin.udc_Clnt_onBlur = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};

//-------------------------------------------------------------------------
// 조회조건 거래처 Name Change
//-------------------------------------------------------------------------
scwin.udc_Clnt_onChange = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};

//-------------------------------------------------------------------------
// 프리폼 거래처 Code Blur
//-------------------------------------------------------------------------
scwin.udc_clnt2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo2.getValue(), ed_clntNm2.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 프리폼 거래처 Code Change
//-------------------------------------------------------------------------
scwin.udc_clnt2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo2, ed_clntNm2, 2);
};

//-------------------------------------------------------------------------
// 프리폼 거래처 Name Change
//-------------------------------------------------------------------------
scwin.udc_clnt2_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm2, ed_clntNo2, 2, false);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = async function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  // let pVal = ed_clntNo.getValue();
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

//-------------------------------------------------------------------------
// function name : f_openPopUp
// function desc : popup
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let rtnList = new Array();
  switch (disGubun) {
    case 1:
      // 거래처
      udc_clnt.cfCommonPopUp(scwin.udc_Clnt_CallBack, pCode // 화면에서의 ??? Code Element의	Value
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
      , "매입거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      //거래처
      udc_clnt2.cfCommonPopUp(scwin.udc_Clnt_CallBack2, pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '5' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , '150,170' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는	컬럼 지정
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "매입거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

//-------------------------------------------------------------------------
// 거래처 1 콜백
//-------------------------------------------------------------------------
scwin.udc_Clnt_CallBack = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
  let temp_ctrtNo = ed_clntNo.getValue();
  dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  dma_queryCondition.set("ctrtNo", lc_ctrtNo.getValue());
  if (rtnList != null && ed_clntNo.getValue() != "" && ed_clntNm.getValue() != "") {
    $c.sbm.execute($p, sbm_retrieveCtrtList);
  }
};

//-------------------------------------------------------------------------
// 거래처 2 콜백
//-------------------------------------------------------------------------
scwin.udc_Clnt_CallBack2 = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo2, ed_clntNm2);
  let temp_ctrtNo2 = ed_ctrtNo2.getValue();
  // let temp_ctrtNo2 = ed_ctrtNo2.getValue();

  // dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  // dma_queryCondition.set("ctrtNo", lc_ctrtNo.getValue());

  if (rtnList != null && ed_clntNo2.getValue() != "" && ed_clntNm2.getValue() != "") {
    dma_query.set("clntNo", ed_clntNo2.getValue());
    await $c.sbm.execute($p, sbm_getClntInfo);
    if (scwin.f_getRowCnt() == 0) {
      if (ds_customerPurchaseInformation.getTotalRow() == 0) {
        ds_customerPurchaseInformation.insertRow();
      }
      ds_customerPurchaseInformation.setCellData(0, "ctrtNo", temp_ctrtNo2);
    }
  } else {
    ds_customerInformation.setCellData(0, "ctrtNo", temp_ctrtNo2);
  }
};

//-------------------------------------------------------------------------
// 차량 대수
//-------------------------------------------------------------------------
scwin.ds_vehicle_ondataload = function () {
  ed_numOfVehicle.setValue(ds_vehicle.getTotalRow());
  spa_totalRows1.setValue(ds_vehicle.getTotalRow());
  gr_emp.setFocusedCell(0, 0);
};

//-------------------------------------------------------------------------
// 계약 갱신
//-------------------------------------------------------------------------
scwin.btn_Renewal_onClick = function (e) {
  if (ds_customerPurchaseInformation.getCellData(0, "ctrtNo") == "") {
    $c.win.alert($p, "먼저 조회를 하십시요");
    return;
  }
  if (dma_queryCondition.get("ctrtNo").trim() == "" || dma_queryCondition.get("clntNo").trim() == "") {
    dma_queryCondition.set("ctrtNo", ds_customerPurchaseInformation.getCellData(0, "ctrtNo"));
    dma_queryCondition.set("clntNo", ds_customerPurchaseInformation.getCellData(0, "clntNo"));
  }
  dma_queryCondition.set("ctrtNo", lc_ctrtNo.getValue());
  dma_queryCondition.set("clntNo", ed_clntNo.getValue());
  $c.sbm.execute($p, sbm_renewal);
  ds_img.removeAll();
  $c.gus.cfEnableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_gr_bottom, btn_fileSave]);
  $c.gus.cfDisableBtn($p, [btn_create, btn_update, btn_Renewal]);
  scwin.f_InitObjects(tb_mainData);
  scwin.isRenew = 2;
};
scwin.f_InitObjects = function (tb_mainData) {
  $c.gus.cfInitObjects($p, tb_mainData);
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  ds_ctrtList.removeAll();
  lc_ctrtNo.setSelectedIndex(-1);
};

//-------------------------------------------------------------------------
// function name : f_Save
// function desc : 메인 저장
//-------------------------------------------------------------------------
scwin.btn_save_onClick = async function (e) {
  //fileSubmit();

  if (!$c.data.isModified($p, ds_customerPurchaseInformation) && !$c.data.isModified($p, ds_img)) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, new Array("계약관리"))); // 변경된 사항이 없습니다.
    return;
  }
  if (!(await $c.gus.cfValidate($p, ed_clntNo2))) {
    return;
  }
  if (!(await $c.date.isDate($p, ica_ctrtStDt.getValue()))) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, ["계약기간"])); //은(는) 유효한 날자가 아님니다.
    ica_ctrtStDt.focus();
    return;
  }
  if (!(await $c.date.isDate($p, ica_ctrtEndDt.getValue()))) {
    $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_018, ["계약기간"])); //은(는) 유효한 날자가 아님니다.
    ica_ctrtEndDt.focus();
    return;
  }
  if (!$c.gus.cfIsAfterDate($p, ica_ctrtStDt.getValue(), ica_ctrtEndDt.getValue())) {
    $c.win.alert($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ica_ctrtStDt.focus();
    return;
  }
  if (scwin.isRenew == 2) {
    // 전체 dataset 모두 보내 전부 insert처리

    let clntNo = ed_clntNo2.getValue();
    let ctrtDt = ica_ctrtDt.getValue();
    let ctrtStDt = ica_ctrtStDt.getValue();
    let ctrtEndDt = ica_ctrtEndDt.getValue();
    let ctrtNo = ed_ctrtNo2.getValue();
    ds_customerPurchaseInformation.setCellData(0, "clntNo", clntNo);
    ds_customerPurchaseInformation.setCellData(0, "ctrtDt", ctrtDt);
    ds_customerPurchaseInformation.setCellData(0, "ctrtStDt", ctrtStDt);
    ds_customerPurchaseInformation.setCellData(0, "ctrtEndDt", ctrtEndDt);
    ds_customerPurchaseInformation.setCellData(0, "ctrtNo", ctrtNo);
    ds_customerPurchaseInformation.setCellData(0, "coClsCd", ds_customerInformation.getCellData(0, "coClsCd"));
    ds_customerPurchaseInformation.setCellData(0, "eqClssCd", ds_customerInformation.getCellData(0, "eqClssCd"));
    ds_customerPurchaseInformation.modifyRowStatus(0, "C");
    // $c.sbm.execute(sbm_save_actionModified);

    $c.sbm.execute($p, sbm_save);
  } else {
    let clntNo = ed_clntNo2.getValue();
    let ctrtDt = ica_ctrtDt.getValue();
    let ctrtStDt = ica_ctrtStDt.getValue();
    let ctrtEndDt = ica_ctrtEndDt.getValue();
    let ctrtNo = ed_ctrtNo2.getValue();
    if (ds_customerPurchaseInformation.getTotalRow() == 0) {
      let insertRow = ds_customerPurchaseInformation.insertRow();
      ds_customerPurchaseInformation.setCellData(insertRow, "clntNo", clntNo);
      ds_customerPurchaseInformation.setCellData(insertRow, "ctrtDt", ctrtDt);
      ds_customerPurchaseInformation.setCellData(insertRow, "ctrtStDt", ctrtStDt);
      ds_customerPurchaseInformation.setCellData(insertRow, "ctrtEndDt", ctrtEndDt);
      ds_customerPurchaseInformation.setCellData(insertRow, "ctrtNo", ctrtNo);
      ds_customerPurchaseInformation.setCellData(insertRow, "coClsCd", ds_customerInformation.getCellData(0, "coClsCd"));
      ds_customerPurchaseInformation.setCellData(insertRow, "eqClssCd", ds_customerInformation.getCellData(0, "eqClssCd"));
    } else {
      ds_customerPurchaseInformation.setCellData(0, "clntNo", clntNo);
      ds_customerPurchaseInformation.setCellData(0, "ctrtDt", ctrtDt);
      ds_customerPurchaseInformation.setCellData(0, "ctrtStDt", ctrtStDt);
      ds_customerPurchaseInformation.setCellData(0, "ctrtEndDt", ctrtEndDt);
      ds_customerPurchaseInformation.setCellData(0, "ctrtNo", ctrtNo);
      ds_customerPurchaseInformation.setCellData(0, "coClsCd", ds_customerInformation.getCellData(0, "coClsCd"));
      ds_customerPurchaseInformation.setCellData(0, "eqClssCd", ds_customerInformation.getCellData(0, "eqClssCd"));
    }
    // ds_customerPurchaseInformation.modifyRowStatus(0, "C");
    $c.sbm.execute($p, sbm_save_actionModified);
    // 수정된 dataset만 보내는 서브미션
  }
};

//-------------------------------------------------------------------------
// 신규
//-------------------------------------------------------------------------
scwin.btn_create_onclick = function (e) {
  scwin.f_InitObjects(tb_mainData);
  scwin.f_clearData();
  ica_ctrtDt.setValue(scwin.strCurDate);
  ds_customerPurchaseInformation.insertRow();
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfEnableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_clnt2, udc_gr_bottom, btn_fileSave]);
  $c.gus.cfDisableBtn($p, [btn_create, btn_update, btn_Renewal]);
  $c.sbm.execute($p, sbm_ctrtNo);
  scwin.isRenew = 1;
};

//-------------------------------------------------------------------------
// 수정
//-------------------------------------------------------------------------
scwin.btn_update_onclick = function (e) {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableObjects($p, [ed_clntNo2, ed_clntNm2]);
  //calendarPopup_1,calendarPopup_2,calendarPopup_3, bt_fileSave, bt_fileDelete, bt_fileCancel, bt_fileSave, bt_fileDelete, bt_fileCancel
  $c.gus.cfEnableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_gr_bottom, btn_fileSave]);
  $c.gus.cfDisableBtn($p, [btn_update, btn_create]);
};

//-------------------------------------------------------------------------
// 프리폼 거래처 팝업 결과 조회 완료시 수행되는 서브미션 이후
//-------------------------------------------------------------------------
scwin.ds_customerInformation_ondataload = function () {
  let rowCnt = ds_customerInformation.getTotalRow();
  if (rowCnt == 0) {
    scwin.f_setRowCnt(rowCnt);
    $c.win.alert($p, "해당 거래처의 데이터가 없습니다.");
  } else {
    scwin.f_setRowCnt(rowCnt);

    // let clntNo = ed_clntNo2.getValue();
    // let ctrtDt = ica_ctrtDt.getValue();
    // let ctrtStDt = ica_ctrtStDt.getValue();
    // let ctrtEndDt =  ica_ctrtEndDt.getValue();
    // let ctrtNo = ed_ctrtNo2.getValue();

    // let insertRow = ds_customerPurchaseInformation.insertRow();

    // ds_customerPurchaseInformation.setCellData(insertRow, "clntNo", clntNo);
    // ds_customerPurchaseInformation.setCellData(insertRow, "ctrtDt", ctrtDt);
    // ds_customerPurchaseInformation.setCellData(insertRow, "ctrtStDt", ctrtStDt);
    // ds_customerPurchaseInformation.setCellData(insertRow, "ctrtEndDt",ctrtEndDt);
    // ds_customerPurchaseInformation.setCellData(insertRow, "ctrtNo", ctrtNo);

    ed_telNo.setValue(ds_customerInformation.getCellData(0, "telNo"));
    ed_busiNo.setValue(ds_customerInformation.getCellData(0, "busiNo"));
    ed_mpNo.setValue(ds_customerInformation.getCellData(0, "mpNo"));
    ed_bizcond.setValue(ds_customerInformation.getCellData(0, "bizcond"));
    ed_addr.setValue(ds_customerInformation.getCellData(0, "addr"));
    ed_repstNm.setValue(ds_customerInformation.getCellData(0, "repstNm"));
    ed_catBusi.setValue(ds_customerInformation.getCellData(0, "catBusi"));
    acb_coClsCd.setValue(ds_customerInformation.getCellData(0, "coClsCd"));
    acb_eqClssCd.setValue(ds_customerInformation.getCellData(0, "eqClssCd"));
    ica_ctrtDt.setValue(scwin.strCurDate);
  }
};

//-------------------------------------------------------------------------
// 파일 리스트 로드시
//-------------------------------------------------------------------------
scwin.ds_img_ondataload = function () {
  // $c.gus.cfGoPrevPosition(ds_img, ds_img.getRowPosition());

  let rowCnt = ds_img.getTotalRow();
  if (rowCnt == 0) {
    preView.setEventPause("onclick", true);
  } else {
    preView.setEventPause("onclick", false);
  }
  gr_img.setFocusedCell(0, 0);
  scwin.f_previewImg(0);
};
scwin.preView_onclick = function (e) {
  scwin.f_ZoomIn();
};
scwin.f_ZoomIn = function () {
  let opts = {
    id: "Pop",
    popupName: "미리보기",
    modal: true,
    type: "browserPopup",
    title: "pop",
    width: "850",
    height: "700"
  };
  let strUrl = "/cm/xml/zoom.xml";
  let list1NowRow = JSON.stringify(gr_img.getFocusedRowIndex());
  let data = {
    fileName: ds_img.getCellData(ds_img.getRowPosition(), "imgFileNm"),
    filePath: ds_img.getCellData(ds_img.getRowPosition(), "imgFilePathNm")
  };
  $c.win.openPopup($p, strUrl, opts, data);
};

//-------------------------------------------------------------------------
// 파일 저장 클릭시
//-------------------------------------------------------------------------
scwin.fileSaveFn = async function (e) {
  let ret = await $c.win.confirm($p, "저장  하시겠습니까?");
  if (ret) {
    udc_fileUpload.startFileUpload();
  } else {
    return;
  }
  await scwin.saveFile();
  return true;
};
scwin.saveFile = function () {};
scwin.udc_fileUpload_onFileUploadDone = function (isSuccess) {
  console.log("udc_fielUpload_onFileUploadDone");
  if (!isSuccess) {
    return;
  }
  ;
  let row = 0;
  let data = udc_fileUpload.getData();
  for (i = 0; i < data.length; i++) {
    row = ds_img.insertRow();
    ds_img.setCellData(row, "ctrtNo", ed_ctrtNo2.getValue());
    ds_img.setCellData(row, "imgFileNm", ds_img.getCellData(row, "ctrtNo") + "_" + data[i].ORIGIN_FILE_NM);
    ds_img.setCellData(row, "imgFilePathNm", data[i].FILE_STORED_PATH + data[i].STORED_FILE_NM);
  }
  udc_fileUpload.setGridClear();
  scwin.f_previewImg(row);
  spa_totalRows2.setValue(row);
};
scwin.addRow = function () {
  let row = ds_img.insertRow();
  ds_img.setCellData(row, "ctrtNo", "test1234");
  ds_img.setCellData(row, "imgFileNm", "test");
  ds_img.setCellData(row, "imgFilePathNm", "test");
  // spa_totalRows2.setValue(row)    
};

//-------------------------------------------------------------------------
// function name : f_previewImg
// function desc : 이미지 미리보기
//-------------------------------------------------------------------------
scwin.f_previewImg = function (rowNum) {
  if (rowNum == "") {
    rowNum == ds_img.getRowPosition();
  }
  let check = ds_img.getCellData(rowNum, "imgFilePathNm");
  let tempData = ds_img.getCellData(rowNum, "imgFilePathNm");
  let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
  let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
  img_preView.setSrc(scwin.buildDownloadUrl(scwin.buildPreviewParam(rowNum), "Link"));
};
scwin.buildDownloadUrl = function (paramJson, flag) {
  return scwin.FILE_DOWNLOAD_URL + "?" + new URLSearchParams({
    path: scwin.buildStoredFileKey(paramJson.FILE_PATH, paramJson.FILE_NAME),
    fileName: paramJson.FILE_NAME || "",
    fileType: flag == "Link" ? "LINK" : "DOWN",
    direct: "true",
    fallback: "true",
    PGM_ID: paramJson.PGM_ID || "",
    CALLER_URL: paramJson.CALLER_URL || ""
  }).toString();
};
scwin.buildPreviewParam = function (rowIndex) {
  let tempData = ds_img.getCellData(rowIndex, "imgFilePathNm");
  let filePath = tempData.substring(0, tempData.lastIndexOf("/") + 1);
  let fileNm = tempData.substring(tempData.lastIndexOf("/") + 1);
  return {
    "FILE_NAME": fileNm,
    "STORED_FILE_NAME": ds_img.getCellData(rowIndex, "fileNm"),
    "FILE_PATH": filePath,
    "PGM_ID": scwin.pgmId,
    "CALLER_URL": scwin.src,
    "FILE_TYPE": "LINK"
  };
};
scwin.buildStoredFileKey = function (filePath, fileName) {
  if (!filePath) {
    return fileName;
  }
  if (filePath.endsWith(fileName)) {
    return filePath;
  }
  if (filePath.endsWith("/")) {
    return filePath + fileName;
  }
  return filePath + "/" + fileName;
};
scwin.gr_img_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_previewImg(rowIndex);
};
scwin.ds_ctrtNo_ondataload = function () {
  ed_ctrtNo2.setValue(ds_ctrtNo.getCellData(0, "code"));
};
scwin.ds_img_onrowpositionchange = function (info) {
  spa_totalRows2.setValue(ds_img.getTotalRow());
  if (ds_img.getTotalRow() == 0) {
    img_preView.setSrc("");
  }
};
scwin.sbm_getClntInfo_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    let temp_ctrtNo2 = ed_clntNo2.getValue();
    if (scwin.f_getRowCnt() == 0) {
      ds_customerPurchaseInformation.setCellData(0, "ctrtNo", temp_ctrtNo2);
    } else {
      ds_customerInformation.setCellData(0, "ctrtNo", temp_ctrtNo2);
    }
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.sbm_save_actionModified_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    ed_clntNo2.setValue(ds_customerPurchaseInformation.getCellData(0, "clntNo"));
    ica_ctrtStDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtStDt"));
    ica_ctrtEndDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtEndDt"));
    ica_ctrtDt.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtDt"));
    ed_ctrtNo2.setValue(ds_customerPurchaseInformation.getCellData(0, "ctrtNo"));
    acb_coClsCd.setValue(ds_customerPurchaseInformation.getCellData(0, "coClsCd"));
    acb_eqClssCd.setValue(ds_customerPurchaseInformation.getCellData(0, "eqClssCd"));
    $c.win.alert($p, MSG_CM_INF_001);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_save, btn_fileSave]);
    // 다른 컴포넌트들은 objType으로 disable이 다 가능한데 아래 UDC만 안먹어서 따로 진행
    $c.gus.cfDisableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_clnt2, udc_gr_bottom, udc_clnt2]);
    scwin.f_InitObjects(tb_mainData);
    scwin.isRenew = 0;
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};
scwin.sbm_save_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
    $c.win.alert($p, MSG_CM_INF_001);
    $c.gus.cfDisableKeyData($p);
    $c.gus.cfDisableBtn($p, [btn_save, btn_fileSave]);
    // 다른 컴포넌트들은 objType으로 disable이 다 가능한데 아래 UDC만 안먹어서 따로 진행
    $c.gus.cfDisableObjects($p, [ica_ctrtDt, udc_ctrtDt, udc_clnt2, udc_gr_bottom, udc_clnt2]);
    scwin.f_InitObjects(tb_mainData);
    scwin.isRenew = 0;
  } catch (e) {
    console.log("sbm_saveAcctRecvBdebt_submitdone : " + e);
  }
};

//-------------------------------------------------------------------------
// 휴지통 클릭시
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_InitObjects();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fileMultiUpload',type:'page',variableClone:'',src:'/cm/udc/fileMultiUpload.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_mainData',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',mandatoryCode:'true',allowCharCode:'0-9',editTypeCode:'select',maxlengthCode:'6',btnId:'btn_clntNo_popup','ev:onclickEvent':'scwin.udc_Clnt_onClick','ev:onblurCodeEvent':'scwin.udc_Clnt_onBlur','ev:onviewchangeNameEvent':'scwin.udc_Clnt_onChange',selectID:'retrievePchsClntInfo',validTitle:'거래처 번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_ctrtNo',style:'width: 150px;',submenuSize:'fixed',ref:'',displayMode:'value',visibleRowNum:'10'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_ctrtList'},E:[{T:1,N:'xf:label',A:{ref:''}},{T:1,N:'xf:value',A:{ref:'ctrtNo'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:120px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 120px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_ctrtNo2',placeholder:'',style:'width:150px;',maxlength:'11',mandatory:'true','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_customerPurchaseInformation.ctrtNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'거래처번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'width: 250px;',codeId:'ed_clntNo2',nameId:'ed_clntNm2',id:'udc_clnt2',allowCharCode:'0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'6',maxlengthName:'100',objTypeCode:'key',objTypeName:'data',btnId:'btn_clnt2','ev:onclickEvent':'scwin.udc_clnt2_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clnt2_onviewchangeNameEvent',selectID:'retrievePchsClntInfo','ev:onviewchangeCodeEvent':'scwin.udc_clnt2_onblurCodeEvent',refDataCollection:'ds_customerPurchaseInformation',code:'clntNo',name:'clntNm'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업체구분 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_coClsCd',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:ds_customerPurchaseInformation.coClsCd',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'위수탁'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'W'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'G'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비분류 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_eqClssCd',search:'start',style:'width:250px;',submenuSize:'auto',objType:'data',allOption:'',chooseOption:'',ref:'data:ds_customerPurchaseInformation.eqClssCd',searchTarget:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'차량'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LV'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LH'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전화번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_telNo',label:'',style:'',ref:'data:ds_customerPurchaseInformation.telNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'사업자번호 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_busiNo',label:'',style:'',ref:'data:ds_customerPurchaseInformation.busiNo'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업종 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_catBusi',label:'',style:'',ref:'data:ds_customerPurchaseInformation.catBusi'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'업태 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_bizcond',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'주소 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_addr',label:'',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'대표자명 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_repstNm',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약일자 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ctrtDt',pickerType:'dynamic',style:'',objType:'data',ref:'data:ds_customerPurchaseInformation.ctrtDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'휴대전화 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'ed_mpNo',label:'',style:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약차량수 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'ed_numOfVehicle',label:'0',class:''}},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'대',class:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약기간 ',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_ctrtDt',refDataMap:'ds_customerPurchaseInformation',refEdDt:'ctrtEndDt',refStDt:'ctrtStDt',style:'',edFromId:'ica_ctrtStDt',edToId:'ica_ctrtEndDt'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no wfix col3'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox gvwflex'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_vehicle',style:'',autoFit:'allColumn',id:'gr_emp',visibleRowNum:'15',class:'wq_gvw',dataName:'dsVehNum',columnMove:'true',dataDragSelect:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column1',value:'차량/장비번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column17',value:'소유구분',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'vehclNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'posnClsCd',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'spa_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwflex',id:'',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_img',id:'gr_img',style:'',visibleRowNum:'15',visibleRowNumFix:'true',columnMove:'true',rowStatusVisible:'true','ev:oncellclick':'scwin.gr_img_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'계약서번호',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'이미지 파일명',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'File Path',width:'150',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'ctrtNo',inputType:'text',style:'',value:'',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'imgFileNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'imgFilePathNm',inputType:'text',style:'',value:'',width:'150',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'spa_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_gr_bottom',gridID:'gr_img',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'Y',btnCancelYn:'Y',rowAddFunction:'scwin.addRow',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'col',style:'width: 50%;'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'미리보기',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td','ev:onclick':'scwin.preView_onclick',id:'preView'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:image',A:{src:'',style:'height:200px;',id:'img_preView',class:'w-full'}}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'file-wrap no-title'},E:[{T:1,N:'w2:udc_fileMultiUpload',A:{filter:'gif, jpg, bmp, png, zip, txt, ppt, pptx, xls, xlsx, doc, docx, xml, csv, pdf',typeYn:'N',explainYn:'N',maxFileCount:'5',style:'',totalFileSize:'2009715200',maxFileSize:'52428800',id:'udc_fileUpload',saveFn:'scwin.fileSaveFn','ev:onFileUploadDone':'scwin.udc_fileUpload_onFileUploadDone',subDir:'ds/op/rscconfirm/transrscconfirm',addButtonName:'첨부파일 추가',saveButtonId:'btn_fileSave',saveButtonName:'파일 저장',userAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Renewal',label:'저장',style:'',type:'button',objType:'bDelete',userAuth:'C','ev:onclick':'scwin.btn_Renewal_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'계약갱신'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_create',label:'저장',style:'',type:'button',objType:'bCreate',userAuth:'C','ev:onclick':'scwin.btn_create_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'신규'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_update',label:'저장',style:'',type:'button',objType:'bUpdate',userAuth:'U','ev:onclick':'scwin.btn_update_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.btn_save_onClick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})