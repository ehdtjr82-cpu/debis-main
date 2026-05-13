/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_03_04b.xml 28222 676bc3b23b6732d8d108303c8a86a18bb0c44caf9ee27e0a07db7ff21ea9377e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_cndInfo'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'String',name:'Vessel코드',id:'vsslCd'}},{T:1,N:'w2:key',A:{id:'callsignCd',name:'신호부자코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'String'}},{T:1,N:'w2:key',A:{id:'portCd',name:'항구코드',dataType:'String'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:key',A:{id:'hblNo',name:'H B/L번호',dataType:'String',defaultValue:''}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_blInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_blInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'String'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'number'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairNo',name:'하선신고수리번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shpCoMark',name:'선사부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyMark',name:'선박대리점부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'vsslAgcyNm',name:'선박대리점명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shipwgtPortCd',name:'적재항구코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bodCd',name:'BOD코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkFrgtCd',name:'하선물품코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkBondZoneCd',name:'하선보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkPlcCd',name:'하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnBondZoneCd',name:'배정보세구역코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'적하목록품명명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'number'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'totWt',name:'중량',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'총CBM',dataType:'bigDecimal'}},{T:1,N:'w2:column',A:{id:'lcNo',name:'LC번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark1',name:'특수화물부호1',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark2',name:'특수화물부호2',dataType:'String'}},{T:1,N:'w2:column',A:{id:'speclCargoMark3',name:'특수화물부호3',dataType:'String'}},{T:1,N:'w2:column',A:{id:'bondTransCoMark',name:'보세운송업체부호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cargoAttrCd',name:'화물속성코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'dsmbrkDeclarRepairDtm',name:'하선신고수리일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmFrom',name:'검색일시FROM',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lupDtmTo',name:'검색일시TO',dataType:'String'}},{T:1,N:'w2:column',A:{id:'rettlPosCd',name:'검색기위치코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprNmCmpy',name:'송하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprAddr',name:'송하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'shprTelNo',name:'송하인전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnCrn',name:'수하인사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnNmCmpy',name:'수하인상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnAddr',name:'수하인주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'cnsgnTelNo',name:'수하인전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlCrn',name:'통지처사업자등록번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlNmCmpy',name:'통지처상호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlAddr',name:'통지처주소',dataType:'String'}},{T:1,N:'w2:column',A:{id:'ntcPlTelNo',name:'통지처전화번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'fioBtClsCd',name:'FIO_BT구분코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'lclYn',name:'LCL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bulkYn',name:'벌크여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doYn',name:'DO여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'doConfirmDt',name:'DO확인일자',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmHh',name:'DO확인시간',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doNo',name:'도(행정구역)번호',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmPicId',name:'DO확인담당자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'String'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomDsmbrkPlcCd',name:'당사하선장소코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'mcomLineCd',name:'당사LINE코드',dataType:'String'}},{T:1,N:'w2:column',A:{id:'stdBlYn',name:'기준BL여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'commNm',name:'품명',dataType:'String'}},{T:1,N:'w2:column',A:{id:'doConfirmPicNm',name:'DO확인담당자명',dataType:'String'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveDoConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_cndInfo","key":"IN_DS1"},{"id":"ds_blInfo","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_blInfo","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.sd.odrmgnt.odrprewrk.RegistDoConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_blInfo","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// DateFormat dateFormat = new SimpleDateFormat("yyyyMMddHHmm");
// String curDtm = dateFormat.format(new Date());

// // 세션정보 가져오기
// LoginDTO loginDTO = LoginUtil.getLoginDTO(request);
// String userId = DCheckIf.isNull(loginDTO.getUserId())? "":loginDTO.getUserId();
// String userNm = DCheckIf.isNull(loginDTO.getUserNm())? "":loginDTO.getUserNm();

scwin.curDtm = $c.date.getServerDateTime($p, "yyyyMMddHHmm"); // 현재년월일을 구한다.
scwin.curDate = "";
scwin.curTime = "";

// 세션정보 가져오기
scwin.userId = $c.data.getMemInfo($p, "userId");
scwin.userNm = $c.data.getMemInfo($p, "userNm");

// 화면 로딩시
scwin.onpageload = function () {
  if (scwin.curDtm.trim() != "" && scwin.curDtm.length == 12) {
    scwin.curDate = scwin.curDtm.substring(0, 8);
    scwin.curTime = scwin.curDtm.substring(8);
  }
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  // scwin.f_defaultValue();
};

// 조회 초기화
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_cndArea, null);
};

// 조회
scwin.f_Retrieve = function (e) {
  ds_cndInfo.set("msn", ed_msn.getValue() == "" ? -1 : ed_msn.getValue());
  ds_cndInfo.set("hsn", ed_hsn.getValue() == "" ? -1 : ed_hsn.getValue());
  if (ds_cndInfo.get("mrn") == "" && ds_cndInfo.get("hblNo") == "") {
    $c.gus.cfAlertMsg($p, "MRN 또는 B/L번호는 필수조회 조건입니다");
    return false;
  }
  if ($c.gus.cfValidate($p, tbl_cndArea)) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

// 저장
scwin.f_Save = async function (e) {
  if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
    //저장하시겠습니까?
    if (ds_blInfo.getModifiedIndex().length > 0) {
      if (await $c.gus.cfValidate($p, gr_blInfo)) {
        $c.sbm.execute($p, sbm_save);
      }
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["컨테이너오더"]); // @은(는) 변경된 사항이 없습니다.
    }
  }
};

// 취소
scwin.f_UndoRow = function (e) {
  if (ds_blInfo.getRowCount() > 0) {
    ds_blInfo.undoRow(ds_blInfo.getRowPosition());
  }
};

// 조회 완료
scwin.sbm_retrieve_submitdone = function (e) {
  ds_cndInfo.set("msn", ds_cndInfo.get("msn") == -1 ? "" : ds_cndInfo.get("msn"));
  ds_cndInfo.set("hsn", ds_cndInfo.get("msn") == -1 ? "" : ds_cndInfo.get("msn"));
  let options = {};
  options.sortIndex = "mrn hsn mblNo hblNo";
  options.sortOrder = "1 1 1 1";
  ds_blInfo.multisort(options);
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_blInfo.getRowCount() > 0) {
      ds_blInfo.setRowPosition(0);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, ["조회결과"]);
    }

    // 그리드 조회건수
    tbx_totalRows.setValue(ds_blInfo.getRowCount());
  }
};

// 저장 완료
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};
scwin.gr_blInfo_oncellclick = function (rowIndex, columnIndex, columnId) {
  console.log("doYn" + ds_blInfo.getCellData(rowIndex, columnId));
  if (columnId == "doYn") {
    if (ds_blInfo.getCellData(rowIndex, columnId) == 1) {
      // DO확인 여부를 체크한 경우
      //그리드컬럼 활성
      gr_blInfo.setCellReadOnly(rowIndex, "doNo", false);
      gr_blInfo.setCellReadOnly(rowIndex, "doConfirmDt", false);
      gr_blInfo.setCellReadOnly(rowIndex, "doConfirmHh", false);

      //값세팅
      ds_blInfo.setCellData(rowIndex, "doConfirmDt", scwin.curDate);
      ds_blInfo.setCellData(rowIndex, "doConfirmHh", scwin.curTime);
      ds_blInfo.setCellData(rowIndex, "doConfirmPicId", scwin.userId);
      ds_blInfo.setCellData(rowIndex, "doConfirmPicNm", scwin.userNm);
    } else {
      //DO확인 여부를 체크하지 않은 경우
      //그리드컬럼 비활성
      gr_blInfo.setCellReadOnly(rowIndex, "doNo", true);
      gr_blInfo.setCellReadOnly(rowIndex, "doConfirmDt", true);
      gr_blInfo.setCellReadOnly(rowIndex, "doConfirmHh", true);

      //값세팅
      ds_blInfo.setCellData(rowIndex, "doConfirmDt", "");
      ds_blInfo.setCellData(rowIndex, "doConfirmHh", "");
      ds_blInfo.setCellData(rowIndex, "doConfirmPicId", "");
      ds_blInfo.setCellData(rowIndex, "doConfirmPicNm", "");
    }
  }
};
scwin.ds_blInfo_onrowpositionchange = function (info) {
  if (ds_blInfo.getCellData(ds_blInfo.getRowPosition(), "doYn") == 1) {
    // DO확인 여부를 체크한 경우
    //그리드컬럼 활성
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doNo", false);
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doConfirmDt", false);
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doConfirmHh", false);
  } else {
    //DO확인 여부를 체크하지 않은 경우
    //그리드컬럼 비활성
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doNo", true);
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doConfirmDt", true);
    gr_blInfo.setCellReadOnly(ds_blInfo.getRowPosition(), "doConfirmHh", true);
  }
};

// 모선 팝업
scwin.udc_comCode1_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(1, ed_vsslCd.getValue(), ed_vsslNm.getValue(), 'F', 'F');
};

// 항구 팝업
scwin.udc_comCode2_onclickEvent = async function (e) {
  scwin.f_openCommonPopUp(2, ed_portCd.getValue(), ed_portNm.getValue(), 'F', 'F');
};

//팝업 처리시 검색된 데이터인 경우 팝업 처리 안함
// 모선코드 BLUR
scwin.udc_comCode1_onblurCodeEvent = async function (e) {
  if (!$c.gus.cfCanOpenPopup($p, ed_vsslCd, ed_vsslNm, 1)) return;
  $c.gus.cfClearPairObj($p, ed_vsslNm);
  scwin.f_openCommonPopUp(1, ed_vsslCd.getValue(), '', 'T', 'T');
};
scwin.udc_comCode1_onblurNameEvent = async function (e) {
  scwin.f_openCommonPopUp(1, "", ed_vsslNm.getValue(), 'T', 'T');
};

//공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pWinCloseTF, pAllSearchTF) {
  // 선언부
  let rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      rtnList = await udc_comCode1.cfCommonPopUpAsync("retrieveVsslCdInfo",
      //pSelectID
      pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "선박,선박코드,선박명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      );
      ed_vsslCd.setValue(rtnList[0]);
      ed_vsslNm.setValue(rtnList[1]);
      break;
    case 2:
      rtnList = await udc_comCode2.cfCommonPopUpAsync("retrievePortInfo",
      //pSelectID
      pCode,
      //pCode
      pName,
      //pName
      pWinCloseTF,
      //pWinCloseTF
      null,
      //pDispCnt
      null,
      //pTitle
      null,
      //pWidth
      null,
      //pHidden
      null,
      //pWhere
      null,
      //pW
      null,
      //pH
      null,
      //pTop
      null,
      //pLeft
      null,
      //pExistTF - 중복체크여부	("F")
      pAllSearchTF,
      //pAllSearchTF - 전체검색허용여부	("F")
      "항구,항구코드,항구명",
      //pWtitleSearch - POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      null //Data건수가 0건일때 Window를 뛰우지 않음 리턴:"N/A"
      );
      ed_portCd.setValue(rtnList[0]);
      ed_portNm.setValue(rtnList[1]);
      break;
  }
};

// 항구코드 BLUR
scwin.udc_comCode2_onblurCodeEvent = async function (e) {
  if (!$c.gus.cfCanOpenPopup($p, ed_portCd, ed_portNm)) return;
  $c.gus.cfClearPairObj($p, ed_portNm);
  scwin.f_openCommonPopUp(2, ed_portCd.getValue(), '', 'T', 'T');
};
scwin.udc_comCode2_onblurNameEvent = function (e) {
  scwin.f_openCommonPopUp(2, "", ed_portNm.getValue(), 'T', 'T');
};
scwin.ed_portcnt_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ed_mrn_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, this);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_cndArea',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveVsslCdInfoPopup',style:'',codeId:'ed_vsslCd',objTypeCode:'Data',UpperFlagCode:'1',maxlengthCode:'4',nameId:'ed_vsslNm',id:'udc_comCode1',refDataCollection:'ds_cndInfo',code:'vsslCd',name:'vsslNm',popupGridHeadTitle:'선박코드,선박명',selectID:'retrieveVsslCdInfo',popupTitle:'선박,선박코드,선박명','ev:onclickEvent':'scwin.udc_comCode1_onclickEvent',objTypeName:'Data','ev:onblurCodeEvent':'scwin.udc_comCode1_onblurCodeEvent',btnId:'btn_comCode1','ev:onblurNameEvent':'scwin.udc_comCode1_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width: 230px',objType:'Data',maxlength:'10',ref:'data:ds_cndInfo.portcnt',allowChar:'a-zA-Z0-9','ev:oneditkeyup':'scwin.ed_portcnt_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항구 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrievePortInfoPopup',style:'',codeId:'ed_portCd',maxlengthCode:'5',UpperFlagCode:'1',objTypeCode:'Data',nameId:'ed_portNm',maxlengthName:'50',objTypeName:'Data',id:'udc_comCode2',refDataCollection:'ds_cndInfo',code:'portCd',name:'portNm',selectID:'retrievePortInfo',popupGridHeadTitle:'항구코드,항구명',popupTitle:'항구,항구코드,항구명','ev:onclickEvent':'scwin.udc_comCode2_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode2_onblurCodeEvent',btnId:'btn_comCode2','ev:onblurNameEvent':'scwin.udc_comCode2_onblurNameEvent',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'',objType:'Data',mandatory:'true',maxlength:'11',allowChar:'a-zA-Z0-9',ref:'data:ds_cndInfo.mrn','ev:oneditkeyup':'scwin.ed_mrn_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'',objType:'Data',maxlength:'4',allowChar:'0-9',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width: 230px;',maxlength:'4',allowChar:'0-9',ref:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'B/L번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_blNo',placeholder:'',style:'width: 230px;',objType:'data',maxlength:'16',mandatory:'true',allowChar:'a-zA-Z0-9',ref:'data:ds_cndInfo.hblNo','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retreive',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' D/O확인등록 ',class:'tit'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_topGrd',gridID:'gr_blInfo',grdDownOpts:'{"fileName": "DO확인등록.xlsx", "sheetName": "DO확인등록", "type": "4+8+16" }'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'row',dataList:'data:ds_blInfo',scrollByColumn:'false',style:'',id:'gr_blInfo',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',fixedColumn:'3',autoFit:'allColumn','ev:oncellclick':'scwin.gr_blInfo_oncellclick',readOnly:'true',visibleRowNumFix:'true',visibleRowNum:'15',autoFitMinWidth:'2000',rowStatusVisible:'true',fixedColumnNoMove:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption10',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column12',value:'MRN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column11',value:'MSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column10',value:'HSN',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'column9',value:'M B/L',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'H B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'200',inputType:'text',id:'column38',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column39',value:'당사품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column44',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',value:'중량(KG)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column42',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column84',value:'D/O확인',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'D/O번호',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column87',value:'D/O일자',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{hidden:'false',width:'100',inputType:'text',id:'column88',value:'D/O시간',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',value:'D/O담당자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'mrn',blockSelect:'false',displayMode:'label',textAlign:'center',colMerge:'true',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'msn',blockSelect:'false',displayMode:'label',textAlign:'center',colMerge:'true',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'hsn',blockSelect:'false',displayMode:'label',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'100',inputType:'text',id:'mblNo',blockSelect:'false',displayMode:'label',textAlign:'center',colMerge:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'hblNo',displayMode:'label',textAlign:'center',colMerge:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'mfCommNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'packCnt',displayMode:'label',textAlign:'right',sortable:'true',dataType:'number',displayFormat:'#,##0',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totWt',displayMode:'label',textAlign:'right',sortable:'true',dataType:'float',displayFormat:'#,##0.000',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totCbm',displayMode:'label',textAlign:'right',sortable:'true',dataType:'bigDecimal',displayFormat:'#,##0.##0',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'checkbox',id:'doYn',displayMode:'label',textAlign:'center',sortable:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'doNo',displayMode:'label',textAlign:'left',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'doConfirmDt',displayMode:'label',textAlign:'center',editFormat:'XXXX/XX/XX',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'doConfirmHh',displayMode:'label',textAlign:'center',editFormat:'XX:XX',sortable:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'doConfirmPicNm',displayMode:'label',textAlign:'center',sortable:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'N',btnRowDelYn:'N',cancelFunction:'scwin.f_UndoRow'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button',objType:'ctrlBtn',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})