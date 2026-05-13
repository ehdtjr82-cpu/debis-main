/*amd /ui/ds/op/wrkplan/stvwrkplan/op_204_04_01b.xml 43146 efb3b24f677e028221c999739ad240618cf00db8534234dbe17f17b832e87209 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_cond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blckCd',name:'BLOCK코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfo',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_workPlaceInfo_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'ZONE코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'usblPyCnt',name:'가용평수',dataType:'number',defaultValue:'0',length:'8'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text',defaultValue:'',length:'60'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'21'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_workPlaceInfoDetail',saveRemovedData:'false'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'blckCd',name:'BLOCK코드',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'0',length:'3'}},{T:1,N:'w2:column',A:{id:'stBay',name:'시작BAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'endBay',name:'종료BAY',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'rw',name:'ROW',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'tier',name:'TIER',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'rfpsblYn',name:'RF가능여부',dataType:'number',defaultValue:'0',length:'1'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text',defaultValue:'',length:'21'}},{T:1,N:'w2:column',A:{id:'grpCd',name:'그룹코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'cd',name:'품명분류코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'품명분류',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'orgBlckCd',name:'원작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdEngNmAbbr',name:'코드영문명약어',dataType:'text',defaultValue:'',length:'18'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkplan.stvwrkplan.RetrieveWorkPlaceEachBlockInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfo","key":"OUT_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_workPlaceInfo","key":"OUT_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveSub',action:'/ds.op.wrkplan.stvwrkplan.RetrieveBlockEachTaxSubLocationInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_cond","key":"IN_DS1"},{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_workPlaceInfoDetail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveSub_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkplan.stvwrkplan.SaveWorkPlaceEachLocationInformationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_workPlaceInfo","key":"IN_DS1"},{"action":"modified","id":"ds_workPlaceInfoDetail","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.rowFlag = ""; // 등록, 수정 후 저장 안하고 다른 master row 선택 불가능 구분자
scwin.nowCountRow = 0;
scwin.nowCountRow2 = 0;
scwin.pos_groupCode = 0;
scwin.params = null;
scwin.parent_wrkPlCd = null;

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);
  if (!$c.util.isEmpty($p, scwin.params["wrkPlCd"])) {
    //작업장코드
    scwin.parent_wrkPlCd = scwin.params["wrkPlCd"];
  }

  // 테스트 데이터
  //scwin.parent_wrkPlCd = "1W04";    
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);

    //201609 입고등록 Zone이 없는경우 zone추가popup 후 자동조회
    if (!$c.gus.cfIsNull($p, scwin.parent_wrkPlCd)) {
      ed_con_wrkPlCd.setValue(scwin.parent_wrkPlCd);
      scwin.f_Retrieve();
    }

    // 메뉴명과 타이틀 달라서 다시 SET
    $c.data.setPopupTitle($p, "로케이션관리");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = async function (intGubun) {
  if (ds_workPlaceInfo.getRowCount() - 1 != 0 && ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd") != "") {
    var len = ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd");
    var onelen = len.substring(0, 1);
    if (onelen.match(/^[a-z]+$/ig) == null) {
      await $c.win.alert($p, "작업장별 BLOCK 정보의 첫번째 문자는 영문이여야 합니다.");
      ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd", "");
      return;
    }
  }
  if (intGubun == 'main') {
    $c.gus.cfEnableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    scwin.nowCountRow = ds_workPlaceInfo.getRowCount();
    var newRow = ds_workPlaceInfo.insertRow();
    ds_workPlaceInfo.setRowPosition(newRow);

    // 초기 nowCountRow가 0일경우 wrkPlCd 자동입력 or 팝업창
    if (scwin.nowCountRow == 0) {
      if (ed_con_wrkPlCd.getValue() != "") {
        ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd", ed_con_wrkPlCd.getValue());
      } else if (ed_con_wrkPlCd.getValue() == "") {
        scwin.f_openCommonPopUp(2, '', '', 'T', 'T');
      }
    } else if (scwin.nowCountRow > 0) {
      ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd", ds_workPlaceInfo.getCellData(0, "wrkPlCd"));
    }

    //ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "usblPyCnt", "");
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "rmk", "");
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "regId", "");
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "regDtm", "");
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "modId", "");
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "modDtm", "");

    //ds_workPlaceInfo.filter();
  } else if (intGubun == 'sub') {
    if (ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowCount() - 1, "blckCd") == "") {
      await $c.win.alert($p, "ZONE 항목은 필수 입력입니다.");
      return;
    }
    scwin.nowCountRow2 = ds_workPlaceInfoDetail.getRowCount();
    var newRow = ds_workPlaceInfoDetail.insertRow();
    ds_workPlaceInfoDetail.setRowPosition(newRow);
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "wrkPlCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd"));
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "blckCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "blckCd"));

    //ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "seq", "");

    if (scwin.nowCountRow2 == 0) {
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "stBay", "01");
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "endBay", "02");
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "rw", "01");
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "tier", "1");
    } else if (scwin.nowCountRow2 > 0) {
      var val = parseInt(ds_workPlaceInfoDetail.getCellData(scwin.nowCountRow2 - 1, "endBay"), 10);
      var stVar = val + 1;
      var endVar = val + 2;
      if (stVar > 99 || endVar > 99) {
        await $c.gus.cfAlertMsg($p, "추가 BAY가 없습니다.");
        $c.data.undoRow($p, ds_workPlaceInfoDetail, false);
        return;
      }
      if (stVar < 10) stVar = "0" + stVar;
      if (endVar < 10) endVar = "0" + endVar;
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "stBay", stVar);
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "endBay", endVar);
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "rw", "01");
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "tier", "1");
    }

    //ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "rfpsblYn", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "regId", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "regDtm", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "modId", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "modDtm", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cd", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm", "");
  }
};

//-------------------------------------------------------------------------
// 메인 그리드를 삭제했을 경우 sub그리드의 데이타까지 삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function (gubun) {
  if (gubun == 'main') {
    if (ds_workPlaceInfo.getRowStatus(ds_workPlaceInfo.getRowPosition()) == "C") {
      ds_workPlaceInfo.removeRow(ds_workPlaceInfo.getRowPosition());
    } else {
      $c.data.undoRow($p, ds_workPlaceInfo);
      $c.data.undoRow($p, ds_workPlaceInfoDetail);
      ds_workPlaceInfo.deleteRow(ds_workPlaceInfo.getRowPosition());
    }
    for (var row = 0; row < ds_workPlaceInfoDetail.getRowCount(); row++) {
      if (ds_workPlaceInfoDetail.getRowStatus(ds_workPlaceInfoDetail.getRowPosition()) == "C") {
        //ds_workPlaceInfoDetail.removeRow(ds_workPlaceInfoDetail.getRowPosition())
      } else {
        ds_workPlaceInfoDetail.deleteRow(ds_workPlaceInfoDetail.getRowPosition());
      }
    }
  } else if (gubun == 'sub') {
    if (ds_workPlaceInfoDetail.getRowStatus(ds_workPlaceInfoDetail.getRowPosition()) == "C") {
      ds_workPlaceInfoDetail.removeRow(ds_workPlaceInfoDetail.getRowPosition());
    } else {
      $c.data.undoRow($p, ds_workPlaceInfoDetail);
      ds_workPlaceInfoDetail.deleteRow(ds_workPlaceInfoDetail.getRowPosition());
    }
  }
};

//-------------------------------------------------------------------------
// 메인 그리드를 취소했을 경우 sub그리드까지 취소
//-------------------------------------------------------------------------
scwin.f_Undo = function () {
  $c.data.undoAll($p, ds_workPlaceInfoDetail);
  $c.data.undoRow($p, ds_workPlaceInfo, false);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_search_con]);
  if (!ret) return;
  dma_cond.set("blckCd", "");
  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  // 품목분류코드 중복체크
  let ret = await $c.gus.cfValidate($p, [gr_workPlaceInfo], null, true);
  if (!ret) return;
  ret = await $c.gus.cfValidate($p, [gr_workPlaceInfoDetail], null, true);
  if (!ret) return;
  for (var i = 0; i < ds_workPlaceInfoDetail.getRowCount(); i++) {
    ds_workPlaceInfoDetail.setCellData(i, "blckCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "blckCd"));
    if (ds_workPlaceInfoDetail.getCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm") != "") {
      var tmpRsData = ds_workPlaceInfoDetail.getMatchedIndex("cdNm", ds_workPlaceInfoDetail.getCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm"));
      var chkRow = -1;
      if (tmpRsData.length != 0) {
        chkRow = tmpRsData[0];
      }
      if (chkRow != ds_workPlaceInfoDetail.getRowPosition()) {
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["품목분류"]);
        ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm", "");
        ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cd", "");
        ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "grpCd", "");
        ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdEngNmAbbr", "");
        return;
      }
    }
  }
  if (ds_workPlaceInfo.getModifiedIndex().length == 0 && ds_workPlaceInfoDetail.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
  } else {
    let ret = await $c.win.confirm($p, "저장하시겠습니까?");
    if (ret) {
      scwin.rowFlag = "SAVE";
      var rowStat = ds_workPlaceInfo.getRowStatus(ds_workPlaceInfo.getRowPosition());
      if (rowStat != "D") {
        for (var i = 0; i < ds_workPlaceInfoDetail.getRowCount(); i++) {
          if (ds_workPlaceInfoDetail.getRowStatus(i) != "D") {
            ds_workPlaceInfoDetail.modifyRowStatus(i, "C");
          }
        }
      }
      // else if (rowStat == "D") {
      //     ds_workPlaceInfoDetail.UseChangeInfo = "true";
      // }
      $c.sbm.execute($p, sbm_save);
    }
  }
};

//-------------------------------------------------------------------------
// 조회 조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  scwin.rowFlag = "clear";
  $c.gus.cfInitObjects($p, [ed_con_wrkPlCd, ed_con_wrkPlNm]);
  ds_workPlaceInfo.setJSON([]);
  ds_workPlaceInfoDetail.setJSON([]);
  tbx_totalRows1.setValue("0");
  tbx_totalRows2.setValue("0");
  scwin.rowFlag = "";
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 작업장 검색 팝업
      udc_con_wrkPlCd.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_con_wrkPlCd.cfCommonPopUp(scwin.udc_con_wrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , ',,,1,,,,,' // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")        
      , 'F', "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 2:
      // 그리드 작업장 검색 팝업
      udc_comCode1.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_grd_wrkPlCd_callBackFunc // 콜백 함수
      , pCode // 화면에서의 ??? Code Element의 Value
      , pName // 화면에서의 ??? Name Element의 Value
      , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
      , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는 컬럼 지정
      , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의 사용자 정의 폭
      , null // POP-UP뛰을때 우도우의 사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F', "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
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
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// ZONE별 세부 구획 정보 그리드 품명분류 검색 팝업
//-------------------------------------------------------------------------
scwin.f_gridOnPopup = async function (row, colid, data) {
  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_04_01p.xml";
  let param = ds_workPlaceInfoDetail.getCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm");
  let opts = {
    id: "op_204_04_01p",
    popupName: "로케이션관리",
    modal: true,
    type: "browserPopup",
    width: 900,
    height: 650,
    title: "로케이션관리"
  };
  let paramObj = {
    cdNm: param
  };
  var rtnValue = await $c.win.openPopup($p, win_url, opts, paramObj);
  if (rtnValue != null && !rtnValue) {
    // 중복 팝업
    return;
  }
  if (rtnValue != null) {
    if (rtnValue[0] != "") {
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "grpCd", rtnValue[0]);
    }
    if (rtnValue[1] != "") {
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cd", rtnValue[1]);
    }
    if (rtnValue[2] != "") {
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdEngNmAbbr", rtnValue[2]);
    }
    if (rtnValue[3] != "") {
      ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm", rtnValue[3]);
    }
  } else {
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "grpCd", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cd", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdEngNmAbbr", "");
    ds_workPlaceInfoDetail.setCellData(ds_workPlaceInfoDetail.getRowPosition(), "cdNm", "");
  }
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  tbx_totalRows1.setValue(ds_workPlaceInfo.getRowCount());
  if (ds_workPlaceInfo.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
  } else if (ds_workPlaceInfo.getRowCount() > 0) {
    $c.gus.cfEnableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
    gr_workPlaceInfo.setFocusedCell(0, "wrkPlCd", true);
  }
};

//-------------------------------------------------------------------------
// 상세 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieveSub_submitdone = function (e) {
  tbx_totalRows2.setValue(ds_workPlaceInfoDetail.getRowCount());
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  scwin.rowFlag = ""; // 초기화
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다
  ds_workPlaceInfo.modifyAllStatus("R");
  ds_workPlaceInfoDetail.modifyAllStatus("R");
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 작업장코드 UDC START
//-------------------------------------------------------------------------
scwin.udc_con_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'T');
};
scwin.udc_con_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlCd, ed_con_wrkPlNm, 1);
};
scwin.udc_con_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlNm, ed_con_wrkPlCd, 1, false);
};
scwin.udc_con_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_wrkPlCd, ed_con_wrkPlNm);
};
//-------------------------------------------------------------------------
// 작업장코드 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 : 작업장코드 UDC START
//-------------------------------------------------------------------------
scwin.udc_grd_wrkPlCd_callBackFunc = function (ret) {
  if (ret != null) {
    ds_workPlaceInfo.setCellData(ds_workPlaceInfo.getRowPosition(), "wrkPlCd", ret[0]);
  } else {
    $c.data.undoRow($p, ds_workPlaceInfo, false);
  }
};
//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 : 작업장코드 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 : ZONE 대문자입력
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfo_oneditkeyup = function (info) {
  const inputEl = event.target;
  switch (info.colID) {
    case "blckCd":
      inputEl.value = info.newValue.toUpperCase();
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 편집모드 종료 이벤트
// ASIS : gr_workPlaceInfo event=OnExit(row,colid)
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfo_onafteredit = function (rowIndex, columnIndex, value) {
  let Colid = gr_workPlaceInfo.getColumnID(columnIndex);

  // ZONE코드 중복체크
  if (Colid == "blckCd") {
    //1:blckCd
    if (ds_workPlaceInfo.getRowCount() > 0) {
      if (value != "") {
        var tmpRsData = ds_workPlaceInfo.getMatchedIndex("blckCd", value);
        var chkRow = -1;
        if (tmpRsData.length != 0) {
          chkRow = tmpRsData[0];
        }
        if (chkRow != rowIndex) {
          $c.gus.cfAlertMsg($p, MSG_CM_ERR_032, ["ZONE코드"]);
          ds_workPlaceInfo.setCellData(rowIndex, "blckCd", "");
        }
      }
    }
  }
};

//-------------------------------------------------------------------------
// ZONE별 세부 구획 정보 그리드 편집모드 종료 이벤트
// ASIS : gr_workPlaceInfoDetail OnExit(row,colid)
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfoDetail_oneditend = function (rowIndex, columnIndex, value) {
  scwin.f_gridOnPopup();
};

//-------------------------------------------------------------------------
// ZONE별 세부 구획 정보 그리드 :  품명분류 검색 클릭 이벤트
// ASIS : gr_workPlaceInfoDetail OnPopup(row,colid,data)    
//-------------------------------------------------------------------------
scwin.gr_workPlaceInfoDetail_ontextimageclick = function (rowIndex, columnIndex) {
  scwin.f_gridOnPopup();
};

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 rowposition 변경 이벤트
// ASIS : ds_workPlaceInfo OnRowPosChanged(row)
//-------------------------------------------------------------------------
scwin.ds_workPlaceInfo_onrowpositionchange = async function (info) {
  // ASIS : ds_workPlaceInfo CanRowPosChange(row) 로직
  ds_workPlaceInfoDetail.setRowPosition(0);
  let row = info.newRowIndex;
  if (row < 0 || row == null) return;
  if (scwin.rowFlag == "") {
    if (btn_save.getDisabled() == false && ds_workPlaceInfoDetail.getModifiedIndex().length != 0) {
      let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
      if (ret) {
        if (ds_workPlaceInfo.getRowStatus(info.oldRowIndex) != "C") {
          ds_workPlaceInfo.undoRow(info.oldRowIndex);
        }
        //return true;
      } else {
        ds_workPlaceInfo.setEventPause("", true);
        gr_workPlaceInfo.setFocusedCell(info.oldRowIndex, 0);
        ds_workPlaceInfo.setEventPause("", false);
        return;
      }
    }
  }

  // ASIS : ds_workPlaceInfo OnRowPosChanged(row) 로직
  dma_cond.set("blckCd", ds_workPlaceInfo.getCellData(ds_workPlaceInfo.getRowPosition(), "blckCd")); //조회조건(Block번호)
  $c.sbm.execute($p, sbm_retrieveSub);
  if (ds_workPlaceInfo.getRowStatus(ds_workPlaceInfo.getRowPosition()) == "C") {
    // 신규인경우 Key Data enabled
    $c.gus.cfEnableKeyData($p);
  } else {
    $c.gus.cfDisableKeyData($p);
  }

  // 행추가 취소시 BLOCK 세부 구획 버튼 조작
  if (ds_workPlaceInfo.getRowCount() == 0) {
    $c.gus.cfDisableBtnOnly($p, [btn_subAdd, btn_subDel, btn_subCls]);
  }
};

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 onbeforerowposition 이벤트
// ASIS : ds_workPlaceInfo CanRowPosChange(row)
//-------------------------------------------------------------------------
scwin.ds_workPlaceInfo_onbeforerowpositionchange = async function (info) {
  if (scwin.rowFlag == "") {
    if (btn_save.getDisabled() == false && ds_workPlaceInfoDetail.getModifiedIndex().length != 0) {
      let ret = await $c.win.confirm($p, MSG_CM_CRM_005);
      if (ret) {
        if (ds_workPlaceInfo.getRowStatus(ds_workPlaceInfo.getRowPosition()) != "C") {
          $c.data.undoRow($p, ds_workPlaceInfo, false);
        }
        return true;
      } else {
        return false;
      }
    }
  }
};

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRowMain = function () {
  scwin.f_AddRow('main');
};

//-------------------------------------------------------------------------
// 작업장별 ZONE 정보 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRowMain = function () {
  scwin.f_DelRow('main');
};

//-------------------------------------------------------------------------
// ZONE별 세부 구획 정보 그리드 행추가
//-------------------------------------------------------------------------
scwin.f_AddRowSub = async function () {
  scwin.f_AddRow('sub');
};

//-------------------------------------------------------------------------
// ZONE별 세부 구획 정보 그리드 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRowSub = function () {
  scwin.f_DelRow('sub');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search_con',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_con_wrkPlCd',nameId:'ed_con_wrkPlNm',btnId:'btn_con_wrkPlCd',id:'udc_con_wrkPlCd','ev:onclickEvent':'scwin.udc_con_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_con_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_con_wrkPlCd_onviewchangeNameEvent',validTitle:'작업장',mandatoryCode:'true',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9',UpperFlagCode:'1',refDataCollection:'dma_cond',code:'wrkPlCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox flex_no'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'작업장별 ZONE 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workPlaceInfo',style:'',autoFit:'allColumn',id:'gr_workPlaceInfo',visibleRowNum:'15',class:'wq_gvw','ev:oneditkeyup':'scwin.gr_workPlaceInfo_oneditkeyup','ev:onafteredit':'scwin.gr_workPlaceInfo_onafteredit','ev:oneditend':'scwin.gr_workPlaceInfo_oneditend',rowStatusVisible:'true',dataName:'작업장별 ZONE 정보',validFeatures:'ignoreStatus=no',validExp:'blckCd:ZONE코드:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column1',value:'작업장',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'ZONE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'가용평수',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column11',value:'특기사항',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column22',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'수정일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'wrkPlCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'orgBlckCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blckCd',displayMode:'label',readOnly:'false',mandatory:'true',maxByteLength:'2',allowChar:'a-zA-Z0-9'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'usblPyCnt',displayMode:'label',textAlign:'right',dataType:'float',displayFormat:'#,###.0',maxlength:'7.1'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'rmk',displayMode:'label',textAlign:'left',maxByteLength:'60'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows1',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRowMain',btnRowAddObj:'btn_pathAdd',rowAddUserAuth:'C',rowDelFunction:'scwin.f_DelRowMain',gridID:'gr_workPlaceInfo',btnCancelYn:'Y',btnDelYn:'N',btnRowAddYn:'Y',btnRowDelYn:'Y',cancelFunction:'scwin.f_Undo',rowDelUserAuth:'D',btnRowDelObj:'btn_pathDel',btnCancelObj:'btn_pathCls'}}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:' ZONE별 세부 구획 정보',class:'tit'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grp_group3',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_workPlaceInfoDetail',style:'',autoFit:'allColumn',id:'gr_workPlaceInfoDetail',visibleRowNum:'15',class:'wq_gvw','ev:oneditend':'scwin.gr_workPlaceInfoDetail_oneditend','ev:ontextimageclick':'scwin.gr_workPlaceInfoDetail_ontextimageclick',rowStatusVisible:'true',dataName:'ZONE별 세부 구획',validFeatures:'ignoreStatus=no',validExp:'cdNm:품명분류:yes,cd:품명분류코드:yes'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column16',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column18',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column15',value:'ZONE',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column20',value:'그룹코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'품명분류코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column9',value:'중분류코드',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column3',value:'품명분류',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column22',value:'시작BAY(CELL)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'종료BAY(CELL)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column34',value:'ROW',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column32',value:'TIER',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'RF가능여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column28',value:'등록자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column26',value:'등록일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column24',value:'수정자ID',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'수정일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'wrkPlCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'blckCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'grpCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cd',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'cdEngNmAbbr',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'200',inputType:'textImage',id:'cdNm',displayMode:'label',textAlign:'left',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'stBay',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'endBay',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rw',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'tier',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rfpsblYn',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modId',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'modDtm',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows2',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRowSub',rowAddUserAuth:'C',rowDelUserAuth:'D',rowDelFunction:'scwin.f_DelRowSub',btnRowDelYn:'Y',btnRowAddYn:'Y',btnDelYn:'N',btnCancelYn:'Y',btnRowAddObj:'btn_subAdd',btnRowDelObj:'btn_subDel',btnCancelObj:'btn_subCls',gridID:'gr_workPlaceInfoDetail'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode2',nameId:'',popupID:'',style:'display:none'}}]}]}]})