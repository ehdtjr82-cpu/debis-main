/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_03b.xml 49985 68ebe94c3bf573a5a762db7d4986bcbec2fa7a51e344f1e458f721aa6764edbc */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifestList',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_manifestList_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'msBlNo',name:'MB/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsBlNo',name:'HB/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'B/LType',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsNm',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shpCdMark',name:'선사부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneNm',name:'하선보세구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsNm',name:'배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneNm',name:'배정보세구역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장갯수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totWt',name:'총중량(KG)',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총용적',dataType:'number'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LCNO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shipwgtPortNm',name:'적재항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물코드1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물코드2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물코드3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sealNo1',name:'봉인번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO/BT',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'선박호출부호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'선사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'선사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNationCd',name:'선박국적코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNationNm',name:'선박국적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'양륙항코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortNm',name:'양륙항',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'양항일자',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslNm',name:'모선',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portNm',name:'항구명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'msn',name:'msn',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsn',name:'hsn',dataType:'number'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'LINE',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNm',name:'LINE명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'mblNo',name:'Master B/L',dataType:'text'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'House B/L',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveManifestPresentConditionCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCond","key":"IN_DS1"},{"id":"ds_manifestList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_manifestList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 선박, 항차, 항구 정보 Parameter

scwin.onpageload = function () {
  scwin.param = $c.data.getParameter($p);
  scwin.vsslCd = scwin.param.vsslCd == '' ? '' : scwin.param.vsslCd;
  scwin.vsslNm = scwin.param.vsslNm == '' ? '' : scwin.param.vsslNm;
  scwin.portCnt = scwin.param.portCnt == '' ? '' : scwin.param.portCnt;
  scwin.portCd = scwin.param.portCd == '' ? '' : scwin.param.portCd;
  scwin.portNm = scwin.param.portNm == '' ? '' : scwin.param.portNm;
  scwin.mrn = scwin.param.mrn == '' ? '' : scwin.param.mrn;
  scwin.msn = scwin.param.msn == '' ? -1 : scwin.param.msn;
  scwin.hsn = scwin.param.hsn == '' ? -1 : scwin.param.hsn;
  scwin.mblNo = scwin.param.mblNo == '' ? '' : scwin.param.mblNo;
  scwin.hblNo = scwin.param.hblNo == '' ? '' : scwin.param.hblNo;
  scwin.clntNo = scwin.param.clntNo == '' ? '' : scwin.param.clntNo;
  scwin.clntNm = scwin.param.clntNm == '' ? '' : scwin.param.clntNm;
  scwin.type = scwin.param.type == '' ? '' : scwin.param.type;
  scwin.strManifestMdifyUrl = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_04b.xml";
  scwin.strManifestMdifyListUrl = "/ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_05b.xml";
};
scwin.onUdcCompleted = function () {
  scwin.f_defaultValue();
  if (scwin.type !== "" && scwin.type !== undefined) {
    scwin.f_OpenRetrieve();
  }
};

//-------------------------------------------------------------------------
// function name : f_defaultValue
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function () {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);

  // gr_manifestList.TitleHeight = "30"
  // ds_manifestList.Reset()

  $c.gus.cfDisableObjects($p, [ed_vsslCd, ed_vsslNm, ed_portcnt, ed_portCd, ed_portNm, ed_clntNm]);
  ed_vsslCd.setStyle("background-color", "#ffffff");
  ed_portcnt.setStyle("background-color", "#ffffff");
  ed_portCd.setStyle("background-color", "#ffffff");
};

//-------------------------------------------------------------------------
// 넘어온 값으로 조회
//-------------------------------------------------------------------------
scwin.f_OpenRetrieve = function () {
  // ed_vsslCd.setValue(scwin.vsslCd)
  // ed_vsslNm.setValue(scwin.vsslNm)
  // ed_portcnt.setValue(scwin.portCnt)
  // ed_portCd.setValue(scwin.portCd)
  // ed_portNm.setValue(scwin.portNm)
  // ed_mrn.setValue(scwin.mrn)
  // ed_msn.setValue(scwin.msn)
  // ed_hsn.setValue(scwin.hsn)
  // ed_mBl.setValue(scwin.mblNo)
  // ed_hBl.setValue(scwin.hblNo)
  // ed_clntNo.setValue(scwin.clntNo)
  // ed_clntNm.setValue(scwin.clntNm)

  ds_searchCond.set("vsslCd", scwin.vsslCd);
  ds_searchCond.set("vsslNm", scwin.vsslNm);
  ds_searchCond.set("portcnt", scwin.portCnt);
  ds_searchCond.set("portCd", scwin.portCd);
  ds_searchCond.set("portNm", scwin.portNm);
  ds_searchCond.set("mrn", scwin.mrn);
  ds_searchCond.set("msn", scwin.msn == "" ? -1 : scwin.msn);
  ds_searchCond.set("hsn", scwin.hsn == "" ? -1 : scwin.hsn);
  ds_searchCond.set("clntNo", scwin.clntNo);
  ds_searchCond.set("clntNm", scwin.clntNm);
  ds_searchCond.set("mblNo", scwin.mblNo);
  ds_searchCond.set("hblNo", scwin.hblNo);
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 필수 조회조건 확인 (모선항차 / MRN)
  if (ed_vsslCd.getValue().trim() == "" && ed_portcnt.getValue().trim() == "" && ed_portCd.getValue().trim() == "" && ed_mrn.getValue().trim() == "") {
    // 모선항차 / MRN 정보가 입력되어야 합니다.
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("모선항차 또는 MRN"));
    return;
  }

  // 필수 조회조건 확인 (모선항차)
  if (ed_vsslCd.getValue().trim() != "" || ed_portcnt.getValue().trim() != "" || ed_portCd.getValue().trim() != "") {
    if (ed_vsslCd.getValue() == "") {
      // 선박은 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("선박"));
      ed_vsslCd.focus();
      return;
    } else if (ed_portcnt.getValue().trim() == "") {
      // 항차는 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("항차"));
      ed_portcnt.focus();
      return;
    } else if (ed_portCd.getValue().trim() == "") {
      // 항구는 필수 입력항목입니다.
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("항구"));
      ed_portcnt.focus();
      return;
    }
  } else if (ed_mrn.getValue().trim() == "") {
    // 필수 조회조건 확인 (MRN)
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    ed_mrn.focus();
    return;
  }

  // 조회 결과 초기화
  ds_manifestList.removeAll();
  ds_searchCond.set("msn", ed_msn.getValue() == "" ? -1 : ed_msn.getValue());
  ds_searchCond.set("hsn", ed_hsn.getValue() == "" ? -1 : ed_hsn.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// function name : f_setMasterLayout
// function desc : 선택된 적하목록 Master 정보  Display
//-------------------------------------------------------------------------
scwin.f_setMasterLayout = function () {
  // 적하목록 관리번호 설정
  tbx_mrn.setValue(scwin.f_maskMrn(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn")));
  //tbx_mrn.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn"))
  // 선박명
  tbx_vsslNm.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslCd") + "/" + ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslNm"));
  // 항차
  tbx_portCnt.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "portcnt"));
  // 선박호출부호
  tbx_callsignCd.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "callsignCd"));
  // 선박 국적
  tbx_vsslNation.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslNationCd") + "/" + ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslNationNm"));
  // 양륙항
  tbx_dischgPort.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "dischgPortCd") + "/" + ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "dischgPortNm"));
  // 양륙일자
  tbx_arrvlportDt.setValue(scwin.f_maskDate(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "arrvlportDt")));
  //tbx_arrvlportDt.setValue(ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "arrvlportDt"))
};

//-------------------------------------------------------------------------
// 적하목록정정, 적하목록정정내역, 하선장소변경내역 팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (popupGubun) {
  let condition = "?";
  let row = ds_manifestList.getRowPosition();
  switch (popupGubun) {
    case 1:
      // "ManifestMdify" - 적하목록정정
      if (row != null) {
        let paramObj = {
          vsslCd: ds_manifestList.getCellData(row, "vsslCd"),
          // 선박코드
          vsslNm: ds_manifestList.getCellData(row, "vsslNm"),
          // 선박명
          portcnt: ds_manifestList.getCellData(row, "portcnt"),
          // 항차
          portCd: ds_manifestList.getCellData(row, "dischgPortCd"),
          // 항구코드
          portNm: ds_manifestList.getCellData(row, "dischgPortNm"),
          // 항구명
          mrn: ds_manifestList.getCellData(row, "mrn"),
          // MRN
          mblNo: ds_manifestList.getCellData(row, "msBlNo"),
          // 선사코드
          type: "ManifestMdify"
        };
        $c.win.openMenu($p, "적하목록정정", scwin.strManifestMdifyUrl, "sd_401_02_04b", paramObj);
      } else {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("적하목록"));
        return;
      }
      break;
    case 2:
      // "ManifestModifyCont" - 적하목록정정내역
      if (row != null) {
        //let mrn = ds_manifestList.getCellAllData(ds_manifestList.getRowPosition(), "mrn")	// 
        //let msn = ds_manifestList.getCellAllData(ds_manifestList.getRowPosition(), "msn")	// 
        //let hsn = ds_manifestList.getCellAllData(ds_manifestList.getRowPosition(), "hsn") 	// 
        //let url = ""

        let paramObj = {
          mrn: ds_manifestList.getCellData(row, "mrn"),
          // MRN
          msn: ds_manifestList.getCellData(row, "msn"),
          // MSN
          hsn: ds_manifestList.getCellData(row, "hsn") // HSN
        };
        $c.win.openMenu($p, "적하목록변경내역", scwin.strManifestMdifyListUrl, "sd_401_02_05b", paramObj);
      }
      break;
    case 3:
      // "DsembrkLocaleChgCont" - 하선장소변경내역
      alert("개발중입니다.");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 선박코드팝업			
      //pCode = ed_vsslCd.Text.replace(/\s*$/, '')		// 선박코드
      //pName = txt_vsslNm.value		// 선박명
      /*
               udc_comCode1 = cfCommonPopUp(scwin.callBackRetrieveVsslCdInfo	// XML상의 SELECT ID	
                   , pCode					// 화면에서의 ??? Code Element의	Value
                   , pName					// 화면에서의 ??? Name Element의	Value
                   , pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                   , null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                   , null					// Title순서	
                   , null					// 보여주는 각 컬럼들의 폭	
                   , null					// 컬럼중에서 숨기는	컬럼 지정	
                   , null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                   , null					// POP-UP뛰을때 원도우의	사용자 정의	폭
                   , null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
                   , null					// 윈도우 위치 Y좌표	
                   , null					// 윈도우 위치 X좌표
                   , null					// 중복체크여부	("F")
                   , pAllSearch					// 전체검색허용여부	("F")
                   , "선박,선박코드,선박명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번
               )
      */
      // 사용하는 곳 주석처리 되어있어 사용x
      break;
    case 2:
      // 항구정보팝업 			
      //pCode = ed_portCd.Text.replace(/\s*$/, '')		// 항구코드
      //pName = txt_portNm.value		// 항구명
      /*
         udc_portCd.cfCommonPopUp('scwin.callBackPortCd'		// XML상의 SELECT ID	
                                 ,pCode					// 화면에서의 ??? Code Element의	Value
                                 ,pName					// 화면에서의 ??? Name Element의	Value
                                 ,pClose					// 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
                                 ,null					// 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
                                 ,null					// Title순서	
                                 ,null					// 보여주는 각 컬럼들의 폭	
                                 ,null					// 컬럼중에서 숨기는	컬럼 지정	
                                 ,null					// SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
                                 ,null					// POP-UP뛰을때 원도우의	사용자 정의	폭
                                 ,null					// POP-UP뛰을때 우도우의	사용자 정의	높이	
                                 ,null					// 윈도우 위치 Y좌표	
                                 ,null					// 윈도우 위치 X좌표
                                 ,null					// 중복체크여부	("F")
                                 ,pAllSearch					// 전체검색허용여부	("F")
                                 ,"항구,항구코드,항구명"				// POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번
                                 ) 
                  cfSetReturnValue(rtnList, ed_portCd, txt_portNm)
      */

      //var win_style = "center:yesdialogwidth:800pxdialogheight:470pxscroll:noresizable:nostatus:yes";
      var win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_02_05p.xml?vsslCls=1";
      let opts = {
        id: "portPop",
        popupName: "선명항차조회",
        style: "center",
        modal: true,
        type: "browserPopup",
        width: "950px",
        height: "500px",
        status: true,
        title: "선명항차조회"
      };
      let data = {
        vsslCls: 1
      };
      let rtnList = await $c.win.openPopup($p, win_url, opts, data);
      if (rtnList != null) {
        if (rtnList[1] == "0") {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[13]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_portCd.setValue(rtnList[4]); //도착항구코드
          ed_portNm.setValue(rtnList[14]); //도착항구명
          ed_mrn.setValue(rtnList[15]); //mrn
        } else {
          ed_vsslCd.setValue(rtnList[0]); //선명코드
          ed_vsslNm.setValue(rtnList[14]); //선명
          ed_portcnt.setValue(rtnList[2]); //항차
          ed_portCd.setValue(rtnList[5]); //도착항구코드
          ed_portNm.setValue(rtnList[15]); //도착항구명
          ed_mrn.setValue(rtnList[16]); //mrn
        }
      }
      break;
    case 3:
      // 선사(LINE)정보팝업 			
      //pCode = ed_clntNo.Text.replace(/\s*$/, '')		// 선사코드
      //pName = txt_clntNm.value		// 선사명

      udc_clnt.cfCommonPopUp(scwin.callBackLineCd // XML상의 SELECT ID	
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
      , "LINE,Line코드,Line명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 공통팝업호출 callBack
//-------------------------------------------------------------------------
// 선사코드
scwin.callBackLineCd = async function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
};
/*
scwin.callBackPortCd = async function(rtnList) {
    $c.gus.cfSetReturnValue(rtnList, ed_portCd, txt_portNm);

};*/

//--------------------
// 이벤트
//--------------------
// 당사 Line 팝업
scwin.udc_clnt_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(3, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clnt_onblurCodeEvent = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 3);
};
scwin.udc_clnt_onviewchangeNameEvent = function (info) {
  scwin.f_openCommonPopUp(3, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};

// 항구
scwin.udc_portCd_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_portCd.getValue(), ed_portNm.getValue(), 'F', 'F');
};
//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  //alert(cfCanOpenPopup(inObj, pairObj) + "/" + inObj.hidVal + "/" + pairObj.hidVal)
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else swcin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// ####미사용#### EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
// scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
//     var objValue = inObj.getValue().replace(/^\s*/, '')

//     // 값이 입력이 안된 경우  팝업을 실행하지 않음.
//     if (objValue == "" || objValue == null) {
//         inObj.setValue("")
//         chkObj.setValue("")
//         if (txtObj != null) {
//             txtObj.setValue("")
//             txtObj.hidVal = ""
//         }
//         return
//     }

//     // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
//     if (inObj.ReadOnly || !inObj.Enable || (objValue == chkObj.value)) return

//     f_openCommonPopUp(disGubun)
// }

//-------------------------------------------------------------------------
// 적하목록 관리번호 Mask 처리
//-------------------------------------------------------------------------
scwin.f_maskMrn = function (sValue) {
  let sNewValue = sValue;
  let iLength = 11;
  let zChar = new Array(' ', '-');
  sNewValue = scwin.f_parseChar(sNewValue, zChar);
  if (isNaN(parseInt(sNewValue))) {
    scwin.ReturnError('적하목록 관리번호');
    return '';
  }
  if (sNewValue.length == 0) return '';else if (sNewValue.length <= iLength) {
    while (sNewValue.length < iLength) sNewValue += '0';
  }
  sNewValue = sNewValue.substring(0, 2) + '-' + sNewValue.substring(2, 6) + '-' + sNewValue.substring(6, 10) + '-' + sNewValue.substring(10, 11);
  return sNewValue;
};

//-------------------------------------------------------------------------
// 일자(YYYY/MM/DD) Mask 처리
//-------------------------------------------------------------------------
scwin.f_maskDate = function (sValue) {
  let sNewValue = sValue;
  let iLength = 10;
  let zChar = new Array(' ', '-');
  sNewValue = scwin.f_parseChar(sNewValue, zChar);
  if (isNaN(parseInt(sNewValue))) {
    scwin.ReturnError('양하일자');
    return '';
  }
  if (sNewValue.length == 0) return '';else if (sNewValue.length <= iLength) {
    while (sNewValue.length < iLength) sNewValue += '0';
  }
  sNewValue = sNewValue.substring(0, 4) + '/' + sNewValue.substring(4, 6) + '/' + sNewValue.substring(6, 8);
  return sNewValue;
};

//-------------------------------------------------------------------------
// 문자 Parse : Mask 처리를 위한 공용 함수
//-------------------------------------------------------------------------
scwin.f_parseChar = function (sStr, sChar) {
  let zChar = "";
  if (sChar.length == null) {
    zChar = new Array(sChar); // 제거할 글자들의 배열변수
  } else zChar = sChar;
  let sNewStr = '';
  for (i = 0; i < zChar.length; i++) {
    sNewStr = '';
    let iStart = 0;
    let iEnd = sStr.indexOf(sChar[i]);
    while (iEnd != -1) {
      sNewStr += sStr.substring(iStart, iEnd);
      iStart = iEnd + 1;
      iEnd = sStr.indexOf(sChar[i], iStart);
    }
    sNewStr += sStr.substring(sStr.lastIndexOf(sChar[i]) + 1, sStr.length);
    sStr = sNewStr;
  }
  return sNewStr;
};

//-------------------------------------------------------------------------
// 오류 처리 : Mask 처리를 위한 공용 함수
//-------------------------------------------------------------------------
scwin.ReturnError = function (sMsg) {
  $c.gus.cfAlertMsg($p, MSG_CM_ERR_038, new Array(sMsg));
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function () {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};

// 오즈 리포트 출력
scwin.f_OzPrint = function (prtGubun) {
  if (ds_manifestList.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, "조회 먼저 하십시요.");
    return;
  }
  var ozrId = "/ds/sd/odrmgnt/odrreg/sd_401_02_03.ozr";
  var odiId = "sd_401_02_03";

  /*
     // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
     var odiParam = new ODIParam(odiId)
     odiParam.add("mrn", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn"))
     
     odiParam.add("lineNm", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "lineNm"))			//선박회사명
     odiParam.add("vsslAgcyNm", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslAgcyNm"))	//국내화물운송주선업자명
     odiParam.add("vsslNm", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslNm"))			//선방명
     odiParam.add("arrvlportDt", ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "arrvlportDt"))	//입항일자
      // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
     var formParam = new FormParam()
      // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
     var viewerParam = new ViewerParam()
     viewerParam.add("viewer.useprogressbar", "true")	// 인쇄 진행중 프로그래스바 표시
      $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", ozrId, odiParam, viewerParam, formParam)
  */

  let data = {
    odiName: "sd_401_02_03",
    reportName: "/ds/sd/odrmgnt/odrreg/sd_401_02_03.ozr",
    odiParam: {
      mrn: ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "mrn"),
      msn: "",
      lineCd: "",
      lineNm: ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "lineNm"),
      vsslAgcyNm: ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslAgcyNm"),
      vsslNm: ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "vsslNm"),
      arrvlportDt: ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "arrvlportDt")
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: true // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  if (prtGubun == 1) {
    //전체출력
    data.odiParam.msn = ed_msn.getValue().trim();
    data.odiParam.lineCd = ed_clntNo.getValue().trim();
  } else {
    //BL별 출력
    data.odiParam.msn = ds_manifestList.getCellData(ds_manifestList.getRowPosition(), "msn");
  }

  // wfm_ozReport.getWindow().mf_scwin.reportSearch(data);
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

// 조회완료
scwin.sbm_retrieve_submitdone = function (e) {
  if (ds_searchCond.get("msn") == -1) {
    ds_searchCond.set("msn", "");
  }
  if (ds_searchCond.get("hsn") == -1) {
    ds_searchCond.set("hsn", "");
  }
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    var row = ds_manifestList.getRowCount();
    if (row == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
    }
    if (row > 0) ds_manifestList.setRowPosition(0);
    scwin.ds_manifestList_onrowpositionchange(row);

    // 그리드 조회건수
    tbx_totalRows.setValue(row);
    let options = {};
    options.sortIndex = "msBlNo blTypCd msn mrn";
    options.sortOrder = "1 1 1 1";
    ds_manifestList.multisort(options);
  }
};
scwin.ds_manifestList_onrowpositionchange = function (info) {
  if (!info) return;
  var rowIndex = info.newRowIndex;
  if (rowIndex != null && rowIndex > -1) {
    ds_manifestList.setRowPosition(rowIndex);
    scwin.f_setMasterLayout();
  }
};
// Excel Download
scwin.f_logisDownLoadExcelSheet = async function () {
  var vResultCountRow = ds_manifestList.getRowCount();
  var sheetTitle = "적하목록현황";
  if (vResultCountRow != 0) {
    fileName = sheetTitle;
    var options = {
      fileName: fileName + ".xlsx",
      sheetName: sheetTitle,
      type: "4+8+16",
      hiddenVisible: false,
      //히든값(true : 포함, false : 미포함)
      numberToText: true // 숫자 포맷적용
    };
    await $c.data.downloadGridViewExcel($p, gr_manifestList, options);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:200px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:150px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:280px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:50px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:80px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'모선',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'','ev:onblur':'scwin.emit_onblurCodeEvent',id:'ed_vsslCd',placeholder:'',ref:'data:ds_searchCond.vsslCd',style:'width: 85px;'}},{T:1,N:'xf:input',A:{class:'','ev:onviewchange':'scwin.emit_onviewchangeNameEvent',id:'ed_vsslNm',placeholder:'',style:'width: 142px;',ref:'data:ds_searchCond.vsslNm'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항차',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:150px;',mandatory:'true',objType:'Data',maxlength:'11',disabled:'true',ref:'data:ds_searchCond.portcnt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'항구',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',onloadCallbackFunc:'',selectID:'retrievePortInfo',codeId:'ed_portCd',popupTitle:'',nameId:'ed_portNm',style:'',id:'udc_portCd',code:'portCd',name:'portNm',refDataCollection:'ds_searchCond','ev:onclickEvent':'scwin.udc_portCd_onclickEvent'}},{T:1,N:'xf:input',A:{class:'',id:'ed_portCd',placeholder:'',style:'display: none;',maxlength:'5',mandatory:'true',objType:'Data',allowChar:'A-Z',disabled:'true',editFormat:'#####'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width: 100px;',id:'ed_mrn',placeholder:'',class:'',mandatory:'true',allowChar:'a-zA-Z0-9',maxlength:'11',objType:'data',ref:'data:ds_searchCond.mrn','ev:onkeyup':'scwin.toUpperCase'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_searchCond.msn','ev:onkeyup':'scwin.toUpperCase'}},{T:1,N:'w2:textbox',A:{id:'',label:'-',style:''}},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:50px;',maxlength:'4',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_searchCond.hsn','ev:onkeyup':'scwin.toUpperCase'}}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mblNo',placeholder:'',style:'width: 230px;',maxlength:'20',allowChar:'a-zA-Z0-9',objType:'data',ref:'data:ds_searchCond.mblNo','ev:onkeyup':'scwin.toUpperCase'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_hblNo',placeholder:'',style:'width:150px;',objType:'Data',maxlength:'20',allowChar:'a-zA-Z0-9',ref:'data:ds_searchCond.hblNo','ev:onkeyup':'scwin.toUpperCase'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_clntNo',id:'udc_clnt',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',nameId:'ed_clntNm',objTypeCode:'Data',objTypeName:'Data',popupTitle:'LINE,Line코드,Line명',popupGridHeadTitle:'Line코드,Line명',onloadCallbackFunc:'',popupID:'retrieveLineInfoPopup',selectID:'retrieveLineInfo',style:'',refDataCollection:'ds_searchCond',code:'clntNo',name:'clntNm','ev:onclickEvent':'scwin.udc_clnt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCodeEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:100px;'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'tbx_mrn',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선명',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vsslNm',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선사항차',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_portCnt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박호출부호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td',id:''},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_callsignCd',label:'',ref:'',style:'',userData2:''}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박국적',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_vsslNation',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양륙항',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{id:'tbx_dischgPort',label:'',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'양하일자',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'tbx_arrvlportDt',label:'',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'적하목록현황 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_manifestList',id:'udc_topGrd',gridDownFn:'scwin.f_logisDownLoadExcelSheet',gridUpYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',fixedColumnNoMove:'true',visibleRowNumFix:'true',dataList:'data:ds_manifestList',scrollByColumn:'false',style:'',id:'gr_manifestList',visibleRowNum:'12',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'2'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column12',value:'MSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column11',value:'HSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'M B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'H B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'B/L Type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column19',value:'화물구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'선사부호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column38',value:'선박대리점 부호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'적재항코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'하선보세구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column60',value:'배정구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column62',value:'배정보세구역',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'포장 갯수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'총중량 (KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'총용적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',value:'LC NO',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'송하인상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'수하인상호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',value:'통지처상호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'msn',inputType:'text',displayMode:'label',readOnly:'true',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'hsn',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'msBlNo',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'hsBlNo',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'blTypCd',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'cargoClsNm',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'shpCdMark',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'vsslAgcyMark',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'shipwgtPortCd',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'dsmbrkBondZoneNm',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'assgnClsNm',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'assgnBondZoneNm',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'mfCommNm',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'packCnt',inputType:'text',displayMode:'label',numberExtraction:'true',textAlign:'right',displayFormat:'#,##0',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'totWt',inputType:'text',displayMode:'label',numberExtraction:'true',textAlign:'right',displayFormat:'#,##0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'totCbm',inputType:'text',displayMode:'label',numberExtraction:'true',textAlign:'right',displayFormat:'0.00',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'lcNo',inputType:'text',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'shprNmCmpy',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'cnsgnNmCmpy',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',id:'ntcPlNmCmpy',inputType:'text',displayMode:'label',textAlign:'left',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'inner',id:''},E:[{T:1,N:'w2:button',A:{class:'btn link',id:'btn_ManifestList01',label:'적하목록 정정',style:'','ev:onclick':'scwin.f_openPopUp(1)'}},{T:1,N:'w2:button',A:{class:'btn link',id:'btn_ManifestList02',label:'적하목록변경내역',style:'','ev:onclick':'scwin.f_openPopUp(2)'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print',label:'전체발행',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzPrint(1)'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전체발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_print2',label:'BL별 발행',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzPrint(2)'},E:[{T:1,N:'xf:label',E:[{T:3,text:'BL별 발행'}]}]}]}]}]}]}]}]}]})