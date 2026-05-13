/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_03_03b.xml 54608 d64b387099130c606a046f1a68075bb0b6612eebf36f5a673222207e03bb54b9 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_bulkAssignQueryCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',name:'MRN',id:'mrn'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'String'}},{T:1,N:'w2:key',A:{id:'msnFrom',name:'#N/A',dataType:'number'}},{T:1,N:'w2:key',A:{id:'msnTo',name:'MFCS수신예정',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsnFrom',name:'#N/A',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsnTo',name:'#N/A',dataType:'number'}},{T:1,N:'w2:key',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크여부',dataType:'String'}},{T:1,N:'w2:key',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'msn',name:'msn',dataType:'number',defaultValue:'-1'}},{T:1,N:'w2:key',A:{id:'hsn',name:'hsn',dataType:'number',defaultValue:'-1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkAssignList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_bulkAssignList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'하선신고수리번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineNm',name:'당사LINE명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항구코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'BOD코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtNm',name:'하선물품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneNm',name:'하선보세명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcNm',name:'하선장소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcNm',name:'당사하선장소명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'배정보세구역명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'배정구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsNm',name:'당사배정구분명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물부호1',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물부호2',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물부호3',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'DO확인일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'DO확인시간',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'DO확인담당자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impCvsslOrder',name:'수입본선오더 생성여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'impGnrlOrder',name:'수입일반오더 생성여부',dataType:'String'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'String'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'신호부자코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'양륙항구코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dischgPortNm',name:'양륙항구명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'모선명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'odrCreateYn',name:'오더생성여부구분',dataType:'String'}},{T:1,N:'w2:column',A:{id:'colorVal',name:'0',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'기준BL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'btProcYn',name:'BT처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fioProcYn',name:'FIO처리여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'changeCheck',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcChangeCheck',name:'0',dataType:'number'}},{T:1,N:'w2:column',A:{id:'autoSetting',name:'0',dataType:'number'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_bulkAssignListSave',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo'}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBulkAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkAssignQueryCondition","key":"IN_DS1"}, {"id":"ds_bulkAssignList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_bulkAssignList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.UpdateBulkAssignListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_bulkAssignList","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/DsConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strBulkOrderUrl = "/ui/ds/sd/odrmgnt/odrreg/sd_402_01_02t.xml"; // 벌크 오더

scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD104",
    compID: "lc_assgnClsCd,gr_bulkAssignList:assgnClsCd"
  },
  // 배정구분
  {
    grpCd: "SD144",
    compID: "lc_mcomAssgnClsCd,gr_bulkAssignList:mcomAssgnClsCd"
  },
  // 당사배정구분
  {
    grpCd: "SD105",
    compID: "lc_fioBtClsCd,gr_bulkAssignList:fioBtClsCd"
  } // FIO/BT구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallbackFunc);
  lc_mcomAssgnClsCd.setSelectedIndex(0);
  lc_assgnClsCd.setSelectedIndex(0);
  scwin.f_defaultValue();
  ds_bulkAssignQueryCondition.set("bulkYn", DsConstants.YN_YES);
};
scwin.colIdList = ["assgnClsCd", "mcomAssgnClsCd", "fioBtClsCd"];
scwin.commonCodeCallbackFunc = function () {
  // 벌크 배정목록 콤보박스 Label에 [코드] 라벨로 보이게 수정
  for (let i = 0; i < scwin.colIdList.length; i++) {
    let columnID = scwin.colIdList[i];
    let dataListInfo = gr_bulkAssignList.getColumnDataListInfo(columnID);
    scwin.setCodeLabel(dataListInfo);
  }
};
scwin.setCodeLabel = function (dataListInfo) {
  let dataList = $p.getComponentById(dataListInfo.id);
  let valueID = dataListInfo.value;
  let labelID = dataListInfo.label;
  let rowCount = dataList.getRowCount();
  for (let idx = 0; idx < rowCount; idx++) {
    let data = dataList.getRowJSON(idx);
    dataList.setCellData(idx, labelID, data[valueID] + " : " + data[labelID]);
  }
};

// 초기 설정
scwin.f_defaultValue = function () {
  // Key 비활성화
  $c.gus.cfDisableKey($p);

  // 버튼 비활성화
  $c.gus.cfDisableAllBtn($p);

  // POP-UP 버튼 비활성화
  //$c.gus.cfDisableObjects([btn_ImportCvsslBulkOrder, btn_ImportGnrlBulkOrder])

  // GRID TITLE HEIGHT 설정
  gr_bulkAssignList.headerHeight = "30";
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 필수 조회조건 확인 (모선항차 / MRN)

  if (ed_mrn.getValue().trim() == "") {
    // 모선항차 / MRN 정보가 입력되어야 합니다.
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    return;
  }

  //MSN (From - To) 확인
  var fromVal = ed_msnFrom.getValue().trim();
  var toVal = ed_msnTo.getValue().trim();
  if (fromVal != "" && toVal != "" && Number(fromVal) > Number(toVal)) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_045, new Array("MSN"));
    return;
  }

  // 그리드 조회건수 초기화
  tbx_totalRows.setValue(0);
  $c.gus.cfDisableAllBtn($p);
  $c.sbm.execute($p, sbm_retrieve);
};

// 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  // 조회 성공시
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    // 수정 버튼 활성화
    $c.gus.cfEnableBtnOnly($p, [btn_Update]);

    // POP-UP 버튼 활성화
    $c.gus.cfEnableObjects($p, [btn_ImportCvsslBulkOrder, btn_ImportGnrlBulkOrder]);

    // 그리드 조회건수
    tbx_totalRows.setValue(ds_bulkAssignList.getRowCount());

    // 비수정 모드로 전환
    gr_bulkAssignList.setGridReadOnly(true);

    // 데이타셋 복사
    $c.gus.cfCopyDataSet($p, ds_bulkAssignList, ds_bulkAssignListSave);
    ds_bulkAssignListSave.modifyAllStatus("R");

    // 조회결과 없을 때
    if (ds_bulkAssignList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
    }
  }
};

// 저장 완료
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다

  scwin.f_Retrieve();
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 
  var pWhere; // 조회조건

  switch (disGubun) {
    case 1:
      /*  			
      			// 선박코드팝업			
        			
        			rtnList = cfCommonPopUp('retrieveVsslCdInfo'	// XML상의 SELECT ID	
        									,pCode					// 화면에서의 ??? Code Element의	Value
        									,pName					// 화면에서의 ??? Name Element의	Value
        									,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        									,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        									,null					// Title순서	
        									,null					// 보여주는 각 컬럼들의 폭	
        									,null					// 컬럼중에서 숨기는	컬럼 지정	
        									,pWhere					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        									,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
        									,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
        									,null					// 윈도우 위치 Y좌표	
        									,null					// 윈도우 위치 X좌표
        									,null					// 중복체크여부	("F")
        									,pAllSearch					// 전체검색허용여부	("F")
        									,"선박,선박코드,선박명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        									); 
        				
        			cfSetReturnValue(rtnList, ed_vsslCd, txt_vsslNm);
      */
      break;
    case 2:
      // 선사코드팝업			
      //pWhere = "SHP";

      udc_comCode1.cfCommonPopUp(scwin.callBackLineCd // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 하선장소코드팝업   retrieveBondZoneRound

      udc_comCode2.cfCommonPopUp(scwin.callBackMcomDsmbrk // XML상의 SELECT ID	
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
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// 당사 Line 팝업
scwin.udc_comCode1_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_comCode1_onblurCodeEvent = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2);
};
scwin.udc_comCode1_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

// 당사 하선장소 팝업
scwin.udc_comCode2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(4, ed_mcomDsmbrkPlcCd.getValue(), ed_mcomDsmbrkPlcNm.getValue(), 'F', 'F');
};
scwin.udc_comCode2_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm, 4);
};
scwin.udc_comCode2_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(4, ed_mcomDsmbrkPlcCd.getValue(), ed_mcomDsmbrkPlcNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// GRID Popup 처리 : 그리드에서 입력된 코드정보로 공통 팝업 처리
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 하선장소코드팝업	- 물류점소 - 하선장소코드 	
      pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveMcomDsmbrk");
      udc_comCode_Grid.cfCommonPopUp(async function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0].trim() != "N/A") {
            //return value Assign

            ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcCd", rtnList[0]); //하선장소코드
            ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcNm", rtnList[1]); //하선장소

            ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcCd", rtnList[0]); //하선장소코드
            ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcNm", rtnList[1]); //하선장소
          } else {
            ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
            ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소

            ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
            ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소
          }
        } else {
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소

          ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcCd", ""); //하선장소코드
          ds_bulkAssignListSave.setCellData(row, "mcomDsmbrkPlcNm", ""); //하선장소
        }
        if (ds_bulkAssignList.getCellData(row, "mcomDsmbrkPlcCd") == ds_bulkAssignList.getOriginalCellData(row, "mcomDsmbrkPlcCd")) {
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
        } else {
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "하선장소,하선장소코드,하선장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 배정장소코드팝업	- 물류점소 - 보세구분코드 	
      pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveMcomDsmbrk");
      udc_comCode_Grid.cfCommonPopUp(async function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0].trim() != "N/A") {
            //return value Assign
            ds_bulkAssignList.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정장소코드
            ds_bulkAssignList.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고

            ds_bulkAssignListSave.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정장소코드
            ds_bulkAssignListSave.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고
          } else {
            ds_bulkAssignList.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
            ds_bulkAssignList.setCellData(row, "assgnWhouseNm", ""); //배정창고

            ds_bulkAssignListSave.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
            ds_bulkAssignListSave.setCellData(row, "assgnWhouseNm", ""); //배정창고
          }
        } else {
          ds_bulkAssignList.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
          ds_bulkAssignList.setCellData(row, "assgnWhouseNm", ""); //배정창고

          ds_bulkAssignListSave.setCellData(row, "assgnWhouseCd", ""); //배정장소코드
          ds_bulkAssignListSave.setCellData(row, "assgnWhouseNm", ""); //배정창고
        }
        if (ds_bulkAssignList.getCellData(row, "assgnClsCd") == ds_bulkAssignList.getOriginalCellData(row, "assgnClsCd") && ds_bulkAssignList.getCellData(row, "mcomAssgnClsNm") == ds_bulkAssignList.getOriginalCellData(row, "mcomAssgnClsNm") && ds_bulkAssignList.getCellData(row, "assgnWhouseNm") == ds_bulkAssignList.getOriginalCellData(row, "assgnWhouseNm")) {
          ds_bulkAssignList.setCellData(row, "changeCheck", 0);
        } else {
          ds_bulkAssignList.setCellData(row, "changeCheck", 1);
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "배정장소,배정장소코드,배정장소명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 품명팝업 	
      pWhere = ",,,T3";
      udc_comCode_Grid.setSelectId("retrieveCommInfo");
      udc_comCode_Grid.cfCommonPopUp(async function (rtnList) {
        if (rtnList != null) {
          if (rtnList[0].trim() != "N/A") {
            //return value Assign
            ds_bulkAssignList.setCellData(row, "commCd", rtnList[0]); //품명코드
            ds_bulkAssignList.setCellData(row, "commNm", rtnList[1]); //품명

            ds_bulkAssignListSave.setCellData(row, "commCd", rtnList[0]); //품명코드
            ds_bulkAssignListSave.setCellData(row, "commNm", rtnList[1]); //품명
          } else {
            ds_bulkAssignList.setCellData(row, "commCd", "");
            ds_bulkAssignList.setCellData(row, "commNm", "");
            ds_bulkAssignListSave.setCellData(row, "commCd", ""); //품명코드
            ds_bulkAssignListSave.setCellData(row, "commNm", ""); //품명
          }
        } else {
          ds_bulkAssignList.setCellData(row, "commCd", ""); //품명코드
          ds_bulkAssignList.setCellData(row, "commNm", ""); //품명

          ds_bulkAssignListSave.setCellData(row, "commCd", ""); //품명코드
          ds_bulkAssignListSave.setCellData(row, "commNm", ""); //품명
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "품명,품명코드,품명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 4:
      // 당사LINE코드팝업	- 물류점소 - LINE코드 	
      //pWhere = "04";
      udc_comCode_Grid.setSelectId("retrieveLineInfo");
      udc_comCode_Grid.cfCommonPopUp(async function (rtnList) {
        if (rtnList[0] == "N/A") {
          $c.gus.cfSetGridReturnValue($p, scwin.lineCode, ds_bulkAssignList, row, "mcomLineCd", "");

          //ds_bulkAssignList.setCellData(row, "mcomLineCd", scwin.lineCode);

          //ds_bulkAssignListSave.setCellData(row, "mcomLineCd", scwin.lineCode);	
          return;
        }
        $c.gus.cfSetGridReturnValue($p, rtnList, ds_bulkAssignList, row, "mcomLineCd", "");
        scwin.lineCode = rtnList;
        if (ds_bulkAssignList.getCellData(row, "mcomLineCd") == ds_bulkAssignList.getOriginalCellData(row, "mcomLineCd")) {
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 0);
        } else {
          ds_bulkAssignList.setCellData(row, "mcomDsmbrkPlcChangeCheck", 1);
        }
      } // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};
scwin.lineCode = "";
//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 선박코드
// Gubun1로 들어오는 경우가 없어 주석처리(선박코드 팝업 없음)
/* scwin.callBackVsslCd = async function(rtnList) {
	var win_style = "center:yes;dialogwidth:800px;dialogheight:470px;scroll:no;resizable:no;status:yes;";
	var win_url = "/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml?vsslCls=1";  		
	rtnList = window.showModalDialog(win_url,"",win_style);

	if (rtnList != null ) {
		if(rtnList[1] == "0"){
			//ed_vsslCd.setValue(rtnList[0]);          //선명코드
			vsslNm.setValue(rtnList[13]);         //선명
			portcnt.setValue(rtnList[2]);         //항차
			ed_mrn.setValue(rtnList[15]);            //mrn
			
		}
		else{
			//ed_vsslCd.Text = rtnList[0];          //선명코드
			vsslNm.setValue(rtnList[14]);         //선명
			portcnt.setValue(rtnList[2]);         //항차		
			ed_mrn.setValue(rtnList[16]);            //mrn
	
		}
	}
}; */
// 선사코드
scwin.callBackLineCd = async function (rtnList) {
  if (rtnList[0] == "N/A") {
    return;
  }
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};

// 하선장소코드
scwin.callBackMcomDsmbrk = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_mcomDsmbrkPlcCd, ed_mcomDsmbrkPlcNm);
};

// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);
  if (isCode == null || isCode == true) {
    // inObj가 코드 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};

// 수입본선벌크오더
scwin.f_ImportCvsslBulkOrder = function (e) {
  // // 선택된 오더 정보 : 오더번호 / 오더유형
  let paramObj = {
    odrKndCd: DsConstants.ODR_KND_CD_IMP_CVSSL_BULK_ODR,
    type: "create"
  };
  $c.win.openMenu($p, "벌크오더", scwin.strBulkOrderUrl, "sd_402_01_02t", paramObj);
};

// 수입일반벌크오더
scwin.f_ImportGnrlBulkOrder = function (e) {
  // 선택된 오더 정보 : 오더번호 / 오더유형
  let paramObj = {
    odrKndCd: DsConstants.ODR_KND_CD_IMP_GNRL_BULK_ODR,
    type: "create"
  };
  $c.win.openMenu($p, "벌크오더", scwin.strBulkOrderUrl, "sd_402_01_02t", paramObj);
};

//-------------------------------------------------------------------------
// 수정가능 여부 확인 - 컨테이너 배정목록 
//-------------------------------------------------------------------------
scwin.f_chkEditRowBulkAssignList = function () {

  // AS-IS에 impCvsslBulkOrderYn 정의된 PARAM이 아니므로 항상 값은 undefined 로 else 구문 처리
  // ds_bulkAssignList.getCellData(rowIndex, "impCvsslBulkOrderYn") 
  // gr_bulkAssignList.setReadOnly("column", 'mcomLineCd', false)    // 당사LINE명
  // gr_bulkAssignList.setReadOnly("column", 'commNm', false)        // 당사품명
  // gr_bulkAssignList.setReadOnly("column", 'mcomDsmbrkPlcNm', false)   // 당사하선장소
  // gr_bulkAssignList.setReadOnly("column", 'assgnClsCd', false)    // 배정구분
  // gr_bulkAssignList.setReadOnly("column", 'mcomAssgnClsNm', false)    // 당사배정구분
  // gr_bulkAssignList.setReadOnly("column", 'assgnWhouseNm', false)  // 배정창고
  // gr_bulkAssignList.setReadOnly("column", 'fioBtClsCd', false)    // FIO/BT
  // gr_bulkAssignList.setReadOnly("column", 'btProcYn', false)      // BT처리
  // gr_bulkAssignList.setReadOnly("column", 'fioProcYn', false)     // FIO처리
  // gr_bulkAssignList.setAllowChar("column", 'mcomLineCd', "A-Z")

  // if (ds_bulkAssignList.getCellData(rowIndex, "impCvsslBulkOrderYn") == 1 || ds_bulkAssignList.getCellData(rowIndex, "impGnrlBulkOrderYn") == 1) {
  // 본선 오더 또는 일반 오더가 생성된 경우 EDIT : False
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'commNm', true)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'assgnClsCd', true)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'dsmbrkBondZoneNm', true)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'assgnBondZoneNm', true)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'mcomLineCd', true)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'mcomAssgnClsNm', true)
  // } else {
  // 본선 오더 와 일반 오더가 생성되지 않은 경우 EDIT : True
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'commNm', false)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'assgnClsCd', false)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'dsmbrkBondZoneNm', false)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'assgnBondZoneNm', false)
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'mcomLineCd', false)
  // gr_bulkAssignList.setCellAllowChar(rowIndex, 'mcomLineCd', "A-Z")
  // gr_bulkAssignList.setCellReadOnly(rowIndex, 'mcomAssgnClsNm', false)
  // }
};

// 수정 모드로 전환
scwin.f_Update = function (e) {
  gr_bulkAssignList.setGridReadOnly(false);

  // 해당 목록의 수정 여부 확인
  scwin.f_chkEditRowBulkAssignList();
  $c.gus.cfDisableBtnOnly($p, [btn_Update]);
  $c.gus.cfEnableBtnOnly($p, [btn_Save]);
};

// 저장
scwin.f_Save = async function (e) {
  //벌크 배정목록의  변경한 데이터가 있는지 체크한다. 
  // if(ds_bulkAssignList.IsUpdated==false){
  if (ds_bulkAssignList.getModifiedIndex().length < 1) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("벌크 배정목록")); //변경된 정보가 없습니다.
    gr_bulkAssignList.focus();
    $c.gus.cfGoPrevPosition($p, ds_bulkAssignList, ds_bulkAssignList.getRowPosition());
    gr_bulkAssignList.setFocusedCell(ds_bulkAssignList.getRowPosition(), "assgnClsCd"); // 배정구분
    return;
  }
  let validArray = [{
    id: "commNm",
    name: "당사품명",
    mandatory: true
  }, {
    id: "fioBtClsCd",
    name: "FIO/BT",
    mandatory: true
  }];
  let ret = await $c.gus.cfValidateGrid($p, gr_bulkAssignList, null, null, validArray, "벌크 배정목록");
  if (!ret) {
    return;
  }

  // 필수 입력사항을 체크    
  if (scwin.f_validChk()) {
    // $c.win.alert($c.data.getMessage(MSG_CM_WRN_001, "Data"));
    // let cf = await $c.win.confirm(MSG_CM_CRM_001, "벌크 배정목록")
    let cf = await $c.win.confirm($p, $c.data.getMessage($p, MSG_CM_CRM_001, "벌크 배정목록"));
    if (cf) {
      // disable 처리
      // $c.gus.cfDisableKeyData()
      // $c.gus.cfDisableAllBtn()

      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 저장전 validation check
//-------------------------------------------------------------------------
scwin.f_validChk = function () {
  //필수 입력사항을 체크
  if ($c.gus.cfValidate($p, [gr_bulkAssignList])) {
    return true;
  } else {
    return false;
  }
};
scwin.gr_bulkAssignList_ontextimageclick = function (rowIndex, columnIndex) {
  switch (gr_bulkAssignList.getColumnID(columnIndex)) {
    // 당사하선장소
    case "mcomDsmbrkPlcNm":
      scwin.f_openCommPopUpGrid(1, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), ds_bulkAssignList.getCellData(rowIndex, "mcomDsmbrkPlcNm"), 'F', 'F');
      break;
    // 배정창고
    case "assgnWhouseNm":
      scwin.f_openCommPopUpGrid(2, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "assgnWhouseCd"), ds_bulkAssignList.getCellData(rowIndex, "assgnWhouseNm"), 'F', 'F');
      break;
    // // 당사품명
    case "commNm":
      scwin.f_openCommPopUpGrid(3, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "commCd"), ds_bulkAssignList.getCellData(rowIndex, "commNm"), 'F', 'F');
      break;
    // 당사LINE;
    case "mcomLineCd":
      scwin.f_openCommPopUpGrid(4, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "mcomLineCd"), '', 'F', 'F');
      break;
    default:
      break;
  }
};
scwin.ds_bulkAssignList_onrowpositionchange = function (info) {
  // 수정 모드일때
  if (gr_bulkAssignList.getGridReadOnly()) {
    // 데이터 셋 ROW 가 변경되었을때 해당 ROW 수정여부 확인 (오더 생성 확인)
    scwin.f_chkEditRowBulkAssignList();
  }
};

// onexit
scwin.gr_bulkAssignList_oneditend = function (rowIndex, columnIndex, value) {
  if (value.length > 0) {
    // 변경된 내역이 있을 시 
    switch (gr_bulkAssignList.getColumnID(columnIndex)) {
      // 당사하선장소
      case "mcomDsmbrkPlcNm":
        if (ds_bulkAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd") == value) {
          scwin.f_openCommPopUpGrid(1, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), value, 'T', 'F');
        } else {
          scwin.f_openCommPopUpGrid(1, rowIndex, "", value, 'T', 'F');
        }
        break;
      // 배정창고
      case "assgnWhouseNm":
        if (ds_bulkAssignList.getCellData(rowIndex, "assgnWhouseCd") == value) {
          scwin.f_openCommPopUpGrid(2, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "assgnWhouseCd"), value, 'T', 'F');
        } else {
          scwin.f_openCommPopUpGrid(2, rowIndex, "", value, 'T', 'F');
        }
        break;
      // // 당사품명
      case "commNm":
        if (ds_bulkAssignList.getCellData(rowIndex, "commNm") == value) {
          scwin.f_openCommPopUpGrid(3, rowIndex, ds_bulkAssignList.getCellData(rowIndex, "commCd"), value, 'T', 'F');
        } else {
          scwin.f_openCommPopUpGrid(3, rowIndex, "", value, 'T', 'F');
        }
        break;
      // 당사LINE;
      case "mcomLineCd":
        scwin.f_openCommPopUpGrid(4, rowIndex, value, '', 'T', 'F');
        break;
      default:
        break;
    }
  }
};
scwin.toUpperCase = function (e) {
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 230px;',maxlength:'11',objType:'data',mandatory:'true',ref:'data:ds_bulkAssignQueryCondition.mrn',allowChar:'0-9a-zA-Z','ev:onkeyup':'scwin.toUpperCase'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:'width:160px;'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_msnFrom',placeholder:'',style:'',objType:'data',maxlength:'5',allowChar:'0-9',ref:'data:ds_bulkAssignQueryCondition.msnFrom'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_msnTo',placeholder:'',style:'',objType:'data',allowChar:'0-9',maxlength:'5',ref:'data:ds_bulkAssignQueryCondition.msnTo'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveLineInfoPopup',style:'',codeId:'ed_clntNo',objTypeCode:'Data',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',objTypeName:'Data',nameId:'ed_clntNm',readOnlyName:'true',id:'udc_comCode1',refDataCollection:'ds_bulkAssignQueryCondition',code:'clntNo',name:'clntNm',btnId:'btn_clntNo',selectID:'retrieveLineInfo',popupTitle:'LINE,Line코드,Line명',popupGridHeadTitle:'Line코드,Line명','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사하선장소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveMcomDsmbrkPopup',style:'',codeId:'ed_mcomDsmbrkPlcCd',id:'udc_comCode2',objType:'data',maxlengthCode:'5',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_mcomDsmbrkPlcNm',refDataCollection:'ds_bulkAssignQueryCondition',code:'mcomDsmbrkPlcCd',name:'mcomDsmbrkPlcNm',selectID:'retrieveMcomDsmbrk',popupTitle:'하선장소,하선장소코드,하선장소명',popupGridHeadTitle:'하선장소코드,하선장소명',btnId:'btn_mcomDsmbrkPlcCd','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',class:' ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_assgnClsCd',ref:'data:ds_bulkAssignQueryCondition.assgnClsCd',renderType:'',style:'width:160px;',submenuSize:'auto',objType:'data',chooseOption:'true',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'당사배정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_mcomAssgnClsCd',ref:'data:ds_bulkAssignQueryCondition.mcomAssgnClsCd',renderType:'',style:'width:230px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'FIO/BT구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'true',class:' ',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_fioBtClsCd',ref:'data:ds_bulkAssignQueryCondition.fioBtClsCd',renderType:'',style:'width: 100px;',submenuSize:'auto',objType:'data',chooseOptionLabel:'전체',displayMode:'label'},E:[{T:1,N:'xf:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'벌크 배정목록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_bulkAssignList',id:'udc_topGrd',grdDownOpts:'{"fileName" : "벌크 배정목록.xlsx", "sheetName" : "벌크 배정목록" ,"type" : "4+8+16" }',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',visibleRowNumFix:'true',dataList:'data:ds_bulkAssignList',scrollByColumn:'false',style:'',id:'gr_bulkAssignList',visibleRowNum:'15',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'4',autoFit:'lastColumn',readOnly:'true','ev:ontextimageclick':'scwin.gr_bulkAssignList_ontextimageclick','ev:oneditend':'scwin.gr_bulkAssignList_oneditend',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'MSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'M B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'HSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'H B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'B/L TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'당사LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'통지인',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column38',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column39',value:'당사품명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'중량(KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'용적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',value:'하선장소',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'당사하선장소',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column87',value:'배정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'120',inputType:'text',id:'column88',value:'당사배정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column48',value:'배정창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'FIO/BT',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column58',value:'BT처리 여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'FIO처리 여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column89',value:'본선오더',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column91',value:'일반오더',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'msn',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',textAlign:'left',id:'mblNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'hsn',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',textAlign:'left',id:'hblNo',blockSelect:'false',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'blTypCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'mcomLineCd',displayMode:'label',allowChar:'a-zA-Z0-9',maxlength:'5'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ntcPlNmCmpy',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',textAlign:'left',id:'mfCommNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',textAlign:'left',id:'commNm',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',textAlign:'right',id:'packCnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',textAlign:'right',id:'totWt',displayMode:'label',readOnly:'true',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',textAlign:'right',id:'totCbm',displayMode:'label',readOnly:'true',displayFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dsmbrkPlcNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'mcomDsmbrkPlcNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',emptyItem:'true',textAlign:'left',id:'assgnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'autoComplete',emptyItem:'true',id:'mcomAssgnClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'textImage',id:'assgnWhouseNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'autoComplete',emptyItem:'true',id:'fioBtClsCd',displayMode:'label',class:'req'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'btProcYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'fioProcYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'impCvsslOrder',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'impGnrlOrder',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ImportCvsslBulkOrder',label:'결제요청',style:'',type:'button','ev:onclick':'scwin.f_ImportCvsslBulkOrder'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수입본선벌크오더'}]}]},{T:1,N:'xf:trigger',A:{class:'btn link',id:'btn_ImportGnrlBulkOrder',label:'결제요청',style:'',type:'button','ev:onclick':'scwin.f_ImportGnrlBulkOrder'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수입일반벌크오더'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Update',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Update'},E:[{T:1,N:'xf:label',E:[{T:3,text:'수정'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',label:'저장',style:'',type:'button',objType:'ctrlBtn','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})