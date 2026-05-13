/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_02_04p.xml 35268 4f824fb0d63b4c43c41cced6593425698eae9ae75985fd7e5354ef47da472209 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_searchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'hsn',name:'HSN',dataType:'number',defaultValue:''}},{T:1,N:'w2:key',A:{id:'mblNo',name:'MasterB/L',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'hblNo',name:'H B/L',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너',dataType:'text',defaultValue:''}},{T:1,N:'w2:key',A:{id:'gubun',name:'gubun',dataType:'number',defaultValue:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_manifestList',saveRemovedData:'true','ev:onbeforecelldatachange':'scwin.ds_manifestList_onbeforecelldatachange','ev:onaftercolumnfilterchange':'scwin.ds_manifestList_onaftercolumnfilterchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mblNo',name:'M B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hblNo',name:'H B/L',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blTypCd',name:'BL_TYPE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoClsCd',name:'화물구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mfCommNm',name:'품명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packCnt',name:'포장개수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'packUnitCd',name:'포장단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'포장중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totCbm',name:'포장용적',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text',valueType:''}},{T:1,N:'w2:column',A:{id:'callsignCd',name:'신호부자코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dischgPortCd',name:'양육항구코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDt',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnClsCd',name:'배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mcomAssgnClsCd',name:'당사배정구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseCd',name:'배정창고코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'assgnWhouseNm',name:'배정창고명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'colorVal',name:'colorVal',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveManifestOtherWarehouseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_searchCond","key":"IN_DS1"},{"id":"ds_manifestList","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_manifestList","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrprewrk.UpdateManifestOtherWarehouseCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',id:'sbm_save',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"ds_manifestList","key":"IN_DS1"}]',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/ds/co/constants/SdConstants.js',type:'text/javascript',scopeVariable:'DsConstants'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.hid_msn = -1;
scwin.hid_hsn = -1;
// 당사배정구분코드 : 영업장치장(B2)
scwin.MCOM_ASSGN_CLS_CD_B2 = "B2";
scwin.params = $c.data.getParameter($p) || {};
scwin.whereAreYouFrom = scwin.params.whereAreYouFrom ?? "";

// 화면 로딩시
scwin.onpageload = function () {
  scwin.f_defaultValue();

  // TEST DATA
  //ds_searchCond.set("mrn", "06SCLKF0757")
};
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD104",
    compID: "gr_manifestList:assgnClsCd"
  } // 배정구분
  , {
    grpCd: "SD144",
    compID: "gr_manifestList:mcomAssgnClsCd"
  } // 당사배정구분
  ];
  $c.data.setCommonCode($p, codeOptions, scwin.commonCodeCallbackFunc);
};
scwin.colIdList = ["assgnClsCd", "mcomAssgnClsCd"];
scwin.commonCodeCallbackFunc = function () {
  // 벌크 배정목록 콤보박스 Label에 [코드] 라벨로 보이게 수정
  for (let i = 0; i < scwin.colIdList.length; i++) {
    let columnID = scwin.colIdList[i];
    let dataListInfo = gr_manifestList.getColumnDataListInfo(columnID);
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

//-------------------------------------------------------------------------
// function name : f_defaultValue      
// function desc : 화면 open시 초기 데이타 setting
//-------------------------------------------------------------------------
scwin.f_defaultValue = function (e) {
  $c.gus.cfEnableKeyData($p);
  $c.gus.cfDisableKey($p);

  // 버튼 초기화
  $c.gus.cfDisableAllBtn($p); //2006.03.02
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      pName = ed_mrn.getValue();
      // Master B/L 팝업  			
      udc_mBl.cfCommonPopUp(scwin.callbackMasterBLInfo // XML상의 SELECT ID	
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
      , "Master B/L,M B/L,MRN" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 컨테이너(TB_SD304) 팝업
      pName = ed_mrn.getValue();
      udc_cntrNo.cfCommonPopUp(scwin.callbackContainerInfo // XML상의 SELECT ID	
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
      , "컨테이너,컨테이너번호,MRN" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// 콜백
scwin.callbackMasterBLInfo = function (rtnList) {
  if (rtnList[0].trim() == "N/A") {
    return;
  }
  $c.gus.cfSetReturnValue($p, rtnList, ed_mBl, ed_mrn, [ed_msn, ed_hsn]);
};
scwin.callbackContainerInfo = function (rtnList) {
  if (rtnList[0].trim() == "N/A") {
    return;
  }
  $c.gus.cfSetReturnValue($p, rtnList, ed_cntrNo, ed_mrn, [ed_msn, ed_hsn, '', ed_mBl]);
};

// grid 콜백
scwin.callbackGridMcomDsmbrk = function (rtnList) {
  let row = ds_manifestList.getRowPosition();
  if (rtnList != null) {
    if (rtnList[0].trim() != "N/A") {
      ds_manifestList.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정창고코드
      ds_manifestList.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고명

      //  용당구내창고 선택시 "ZZ" 설정, 타 창고 선택시 "B2" 설정
      if (ds_manifestList.getCellData(row, "assgnWhouseCd") == SdConstants.ASSGN_WHOUSE_CD_6W073) {
        // 용당구내창고(6W073)인 경우  당사배정구분코드를 ZZ(관리화물)으로 설정
        ds_manifestList.setCellData(row, "mcomAssgnClsCd", SdConstants.MCOM_ASSGN_CLS_CD_MGNT_CARGO);
      } else {
        // 당사배정구분코드를 B2(영업장치장)으로 설정
        ds_manifestList.setCellData(row, "mcomAssgnClsCd", scwin.MCOM_ASSGN_CLS_CD_B2);
      }
    } else {
      ds_manifestList.setCellData(row, "assgnWhouseCd", ds_manifestList.getOriginalCellData(row, "assgnWhouseCd"));
      ds_manifestList.setCellData(row, "assgnWhouseNm", ds_manifestList.getOriginalCellData(row, "assgnWhouseNm"));
      ds_manifestList.setCellData(row, "mcomAssgnClsCd", ds_manifestList.getOriginalCellData(row, "mcomAssgnClsCd"));
    }
    return true;
  } else {
    ds_manifestList.setCellData(row, "assgnWhouseCd", ""); //배정창고코드
    ds_manifestList.setCellData(row, "assgnWhouseNm", ""); //배정창고명

    ds_manifestList.setCellData(row, "mcomAssgnClsCd", "");
  }
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
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
  var objValue = inObj.getValue().replace(/^\s*/, '');

  // 값이 입력이 안된 경우  팝업을 실행하지 않음.
  if (objValue == "" || objValue == null) {
    inObj.setValue("");
    chkObj.setValue("");
    if (txtObj != null) {
      txtObj.setValue("");
      // txtObj.hidVal = ""
    }
    return;
  }

  // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (inObj.ReadOnly || !inObj.Enable || objValue == chkObj.value) return;
  scwin.f_openCommonPopUp(disGubun);
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch, source) {
  scwin.isPopupOpen = true;
  return new Promise(function (resolve) {
    var pWhere = "";
    let settled = false;
    function safeResolve(data) {
      if (settled) return;
      settled = true;
      scwin.isPopupOpen = false;

      // pendingClick 처리 (여기서 실행)
      if (pClose === 'T' && data && data[0] && scwin.pendingClick) {
        let p = scwin.pendingClick;
        scwin.pendingClick = null;
        let code = ds_manifestList.getCellData(p.row, "assgnWhouseCd");
        let name = ds_manifestList.getCellData(p.row, "assgnWhouseNm");
        scwin.f_openCommPopUpGrid(1, p.row, code, name, 'F', 'F');
      } else {
        scwin.pendingClick = null;
      }
      resolve(data);
    }
    switch (disGubun) {
      case 1:
        // 배정창고코드팝업   retrieveBondZoneRound
        pWhere = "T";
        // retrieveMcomDsmbrk
        udc_comCode_Grid.setSelectId("retrieveMcomDsmbrk");
        udc_comCode_Grid.cfCommonPopUp(function (rtnList) {
          let row = ds_manifestList.getRowPosition();
          if (rtnList != null) {
            if (rtnList[0].trim() != "N/A") {
              ds_manifestList.setCellData(row, "assgnWhouseCd", rtnList[0]); //배정창고코드
              ds_manifestList.setCellData(row, "assgnWhouseNm", rtnList[1]); //배정창고명

              //  용당구내창고 선택시 "ZZ" 설정, 타 창고 선택시 "B2" 설정
              if (ds_manifestList.getCellData(row, "assgnWhouseCd") == SdConstants.ASSGN_WHOUSE_CD_6W073) {
                // 용당구내창고(6W073)인 경우  당사배정구분코드를 ZZ(관리화물)으로 설정
                ds_manifestList.setCellData(row, "mcomAssgnClsCd", SdConstants.MCOM_ASSGN_CLS_CD_MGNT_CARGO);
              } else {
                // 당사배정구분코드를 B2(영업장치장)으로 설정
                ds_manifestList.setCellData(row, "mcomAssgnClsCd", scwin.MCOM_ASSGN_CLS_CD_B2);
              }
            } else {
              ds_manifestList.setCellData(row, "assgnWhouseCd", ds_manifestList.getOriginalCellData(row, "assgnWhouseCd"));
              ds_manifestList.setCellData(row, "assgnWhouseNm", ds_manifestList.getOriginalCellData(row, "assgnWhouseNm"));
              ds_manifestList.setCellData(row, "mcomAssgnClsCd", ds_manifestList.getOriginalCellData(row, "mcomAssgnClsCd"));
            }
          } else {
            ds_manifestList.setCellData(row, "assgnWhouseCd", ""); //배정창고코드
            ds_manifestList.setCellData(row, "assgnWhouseNm", ""); //배정창고명
            ds_manifestList.setCellData(row, "mcomAssgnClsCd", "");
          }
          safeResolve(rtnList);
        }, pCode // 화면에서의 ??? Code Element의	Value
        , pName // 화면에서의 ??? Name Element의	Value
        , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
        , '3' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
        , '작업장코드,작업장명,보세구역코드' // Title순서	
        , '90,150,100' // 보여주는 각 컬럼들의 폭	
        , '4,5,6,7,8,9,10' // 컬럼중에서 숨기는	컬럼 지정	
        , pWhere // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의	사용자 정의	폭
        , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
        , null // 윈도우 위치 Y좌표	
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearch // 전체검색허용여부	("F")
        , "배정창고(타창고),배정창고코드,배정창고명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
        // X닫힘 감지
        try {
          const timeout = setTimeout(function () {
            if (!settled) {
              safeResolve(null);
            }
          }, 700);
        } catch (e) {}
        break;
      default:
        safeResolve(null);
        break;
    }
  });
};

// 저장
scwin.f_save = async function (e) {
  //적하목록의  변경한 데이터가 있는지 체크한다. 
  // if(ds_manifestList.IsUpdated==false){
  if (ds_manifestList.getModifiedIndex().length < 1) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, new Array("목록")); //변경된 정보가 없습니다.
    return;
  }

  // 필수 입력사항을 체크    
  if (await scwin.f_validChk()) {
    if (await $c.win.confirm($p, MSG_CM_CRM_001)) {
      // cfShowDSWaitMsg(gr_manifestList);
      // tr_save.Post();
      $c.sbm.execute($p, sbm_save);
    } else {
      // cfHideDSWaitMsg(gr_manifestList);
    }
  }
};

//-------------------------------------------------------------------------
// 저장전 validation check
//-------------------------------------------------------------------------
scwin.f_validChk = async function () {
  //필수 입력사항을 체크
  if (await $c.gus.cfValidate($p, [gr_manifestList])) {
    //tb_manifestList
    return true;
  } else {
    return false;
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function (e) {
  if (ed_mrn.getValue().trim() == "") {
    // 필수 조회조건 확인 (MRN)
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_002, new Array("MRN"));
    ed_mrn.focus();
    return;
  }
  if (ed_mrn.getValue().length != 11) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_005, new Array("MRN", "11"));
    ed_mrn.focus();
    return;
  }
  if ($c.gus.cfValidate($p, tb_searchCondition)) {
    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(0);

    // MSN 설정
    if ($c.gus.cfIsNull($p, ed_msn.getValue())) {
      ds_searchCond.set("msn", scwin.hid_msn);
    } else {
      ds_searchCond.set("msn", ed_msn.getValue());
    }

    // HSN 설정
    if ($c.gus.cfIsNull($p, ed_hsn.getValue())) {
      ds_searchCond.set("hsn", scwin.hid_hsn);
    } else {
      ds_searchCond.set("hsn", ed_hsn.getValue());
    }
    ds_manifestList.removeAll();
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 Reset
//-------------------------------------------------------------------------
scwin.f_Reset = function (e) {
  $c.gus.cfInitObjects($p, tb_searchCondition);
};

//-------------------------------------------------------------------------
// 닫기
//-------------------------------------------------------------------------
scwin.f_close = function () {
  var arrRtnVal = new Array();
  arrRtnVal[0] = "close";
  window.returnValue = arrRtnVal;
  window.close();
};
scwin.gr_manifestList_ontextimageclick = function (row, columnIndex) {
  // 팝업 열려있으면 나중에 실행
  if (scwin.isPopupOpen) {
    scwin.pendingClick = {
      row,
      columnIndex
    };
    return;
  }
  var code = ds_manifestList.getCellData(row, "assgnWhouseCd");
  var name = ds_manifestList.getCellData(row, "assgnWhouseNm");
  scwin.f_openCommPopUpGrid(1, row, code, name, 'F', 'F');
};
scwin.gr_manifestList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "assgnWhouseNm") {}
};
scwin.isPopupOpen = false;
scwin.gr_manifestList_oneditend = async function (row, columnIndex, value) {
  var colid = gr_manifestList.getColumnID(columnIndex);
  var pName = value;
  var pOrgName = ds_manifestList.getCellData(row, colid);
  switch (colid) {
    case "assgnWhouseNm":
      if (pName && pName.trim() != "" && pName != pOrgName) {
        await scwin.f_openCommPopUpGrid(1, row, '', pName, 'T', 'T');
      } else if (!pName || pName.trim() == "") {
        ds_manifestList.setCellData(row, "assgnWhouseCd", "");
      }
      break;
    case "assgnClsCd":
      if (value == "J") {
        //내장통관
        ds_manifestList.setCellData(row, "mcomAssgnClsCd", "D1"); //내장통관으로 설정
      } else if (value == "L") {
        ds_manifestList.setCellData(row, "mcomAssgnClsCd", "B3");
      }
    default:
      break;
  }
};
scwin.udc_cntrNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_cntrNo.getValue(), ed_mrn.getValue(), 'F', 'F');
};
scwin.udc_cntrNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_cntrNo, ed_cntrNm, 2, true);
};
scwin.udc_mBl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_mBl.getValue(), ed_mrn.getValue(), 'F', 'F');
};
scwin.udc_mBl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_mBl, ed_mBlNm, 1, true);
};

// 데이타셋 값 변경시
scwin.ds_manifestList_onaftercolumnfilterchange = function () {
  if (ds_manifestList.getRowCount() > 0) ds_manifestList.setRowPosition(0);
};
scwin.ds_manifestList_onbeforecelldatachange = function (info) {
  var colID = info.colID;
  var newValue = info.newValue;

  // 빈값일시 이전값으로 되돌림
  if (colID == "assgnClsCd" && newValue == "") {
    return false;
  }
};

// 조회 SUBMISSION 완료시
scwin.sbm_retrieve_submitdone = function (e) {
  const rowCnt = ds_manifestList.getRowCount();
  if (rowCnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003, new Array("조회결과"));
    // $c.gus.cfHideDSWaitMsg(gr_manifestList);
    // 저장버튼 비활성화
    $c.gus.cfDisableBtnOnly($p, [btn_Save]);
  } else {
    // 그리드 조회건수 초기화
    tbx_totalRows.setValue(ds_manifestList.getRowCount());

    // 저장버튼 활성화
    $c.gus.cfEnableBtnOnly($p, [btn_Save]);
    for (var i = 0; i < rowCnt; i++) {
      if (ds_manifestList.getCellData(i, "colorVal") == "0") {
        gr_manifestList.setCellStyle(i, "mrn", "background-color", "red");
        gr_manifestList.setCellStyle(i, "msn", "background-color", "red");
        gr_manifestList.setCellStyle(i, "hsn", "background-color", "red");
        gr_manifestList.setCellStyle(i, "mblNo", "background-color", "red");
        gr_manifestList.setCellStyle(i, "hblNo", "background-color", "red");
      }
    }
  }
  if (ds_searchCond.get("msn") == -1) {
    ds_searchCond.set("msn", "");
  }
  if (ds_searchCond.get("hsn") == -1) {
    ds_searchCond.set("hsn", "");
  }
};

// 저장 SUBMISSION 완료시
scwin.sbm_save_submitdone = function (e) {
  $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  // cfHideDSWaitMsg(gr_manifestList);
  scwin.f_Retrieve();
  //ds_manifestList.getCel
};
scwin.toUpperCase = function (e) {
  // toUpperCase
  var val = e.target.value.toUpperCase();
  this.setValue(val);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:'width:calc(100% - 120px);'},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_mrn',placeholder:'',style:'width: 150px;',ref:'data:ds_searchCond.mrn',editType:'select','ev:onkeyup':'scwin.toUpperCase',allowChar:'a-zA-Z0-9',maxlength:'11',readOnly:'false',mandatory:'true',objType:'Data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msn',placeholder:'',style:'width:82px;',editType:'select',readOnly:'false','ev:onkeyup':'scwin.toUpperCase',allowChar:'a-zA-Z0-9',maxlength:'4',objType:'Data',mandatory:'false'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_hsn',placeholder:'',style:'width:82px;',objType:'Data',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.toUpperCase',maxlength:'4',readOnly:'false'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Master B/L',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',code:'mblNo',codeId:'ed_mBl',hideName:'true',id:'udc_mBl',mandatoryCode:'true',allowCharCode:'a-zA-Z0-9',maxlengthCode:'16',nameId:'ed_mBlNm',objTypeCode:'Data',objTypeName:'key',popupID:'',refDataCollection:'ds_searchCond',style:'','ev:onclickEvent':'scwin.udc_mBl_onclickEvent',selectID:'retrieveMasterBLInfo','ev:onblurCodeEvent':'scwin.udc_mBl_onblurCodeEvent',codeWidth:'150'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''}},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',code:'cntrNo',codeId:'ed_cntrNo',id:'udc_cntrNo',mandatoryCode:'true',maxlengthCode:'11',nameId:'ed_cntrNm',objTypeCode:'Data',objTypeName:'key',popupID:'',refDataCollection:'ds_searchCond',style:'',hideName:'true',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_cntrNo_onclickEvent',selectID:'retrieveContainerInfo','ev:onblurCodeEvent':'scwin.udc_cntrNo_onblurCodeEvent',codeWidth:'150'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_reset',style:'',type:'button','ev:onclick':'scwin.f_Reset'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'적하목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownYn:'N',btnUser:'Y',gridID:'gr_manifestList',btnPlusYn:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',rowStatusVisible:'true',class:'wq_gvw',dataList:'data:ds_manifestList',focusMode:'cell',id:'gr_manifestList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_manifestList_ontextimageclick','ev:oncellclick':'scwin.gr_manifestList_oncellclick','ev:oneditend':'scwin.gr_manifestList_oneditend',autoFitCellMinWidth:'150'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'200',value:'MRN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'80',value:'MSN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'80',value:'HSN'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'200',value:'M B/L'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',value:'H B/L',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'배정구분',width:'130',class:'col-type1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'당사배정구분',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'배정창고코드',width:'100'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'배정창고명',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column24',value:'BL_TYPE코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column25',value:'화물구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',value:'품명코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column27',value:'품명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',value:'포장개수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column29',value:'포장단위코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column30',value:'포장중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'포장용적',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column32',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'신호부자코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',value:'양육항구코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'입항일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mrn',inputType:'text',removeBorderStyle:'false',width:'100',class:'req',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'msn',inputType:'text',removeBorderStyle:'false',width:'70',maxByteLength:'5',class:'req',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'hsn',inputType:'text',removeBorderStyle:'false',width:'70',maxByteLength:'4',class:'req',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'mblNo',textAlign:'left',inputType:'text',removeBorderStyle:'false',width:'100',maxByteLength:'20',class:'req',allowChar:'a-zA-Z0-9',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'hblNo',textAlign:'left',inputType:'text',width:'100',maxByteLength:'20',class:'req',allowChar:'a-zA-Z0-9',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnClsCd',textAlign:'left',inputType:'autoComplete',emptyItem:'true',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mcomAssgnClsCd',textAlign:'left',inputType:'autoComplete',emptyItem:'true',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'assgnWhouseCd',inputType:'text',width:'100',textAlign:'left',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'assgnWhouseNm',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'blTypCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cargoClsCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'commCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'mfCommNm',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'packCnt',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'packUnitCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totWt',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'totCbm',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'callsignCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'dischgPortCd',displayMode:'label',hidden:'true',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'arrvlportDt',displayMode:'label',hidden:'true',sortable:'true'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; ;visibility:hidden;',id:'udc_comCode_Grid'}},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'',style:'',type:'button','ev:onclick':'scwin.f_close'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button',objType:'bSave','ev:onclick':'scwin.f_save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})