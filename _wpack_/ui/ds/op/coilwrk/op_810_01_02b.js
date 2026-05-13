/*amd /ui/ds/op/coilwrk/op_810_01_02b.xml 50467 61f8851292f3372ec93cf32f1ce4b44e8439d2b399111d2229d4e68facf14431 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coilList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',name:'코일번호',id:'coilNo',defaultValue:'',length:'30'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'0',length:'5'}},{T:1,N:'w2:column',A:{id:'thickness',name:'두께',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'width',name:'너비',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'length',name:'길이',dataType:'number',defaultValue:'0',length:'10'}},{T:1,N:'w2:column',A:{id:'material',name:'자재',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'type',name:'Receipt Type',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'grossWgt',name:'총중량(KG)',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'netWgt',name:'순중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'bl',name:'BL',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'화주',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'화주명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'customer',name:'고객사',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'dest',name:'도착지',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'inOdrNo',name:'입고오더번호',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'inYn',name:'입고여부',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'inDt',name:'입고일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'inHh',name:'입고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'outYn',name:'출고상태',dataType:'text',defaultValue:'',length:'1'}},{T:1,N:'w2:column',A:{id:'outDt',name:'생산일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'outHh',name:'출고시간',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'locCd',name:'LOCATION 코드',dataType:'text',defaultValue:'',length:'5'}},{T:1,N:'w2:column',A:{id:'invNo',name:'송장번호',dataType:'text',defaultValue:'',length:'15'}},{T:1,N:'w2:column',A:{id:'outClsCd',name:'출고구분',dataType:'text',defaultValue:'',length:'2'}},{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'outOdrNo',name:'반출오더',dataType:'text',defaultValue:'',length:'15'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inStDt',name:'입고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inEndDt',name:'입고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outStDt',name:'출고일자From',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outEndDt',name:'출고일자To',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ioClsCd',name:'입출고구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'locCd',name:'LOCATION 코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvIntendDt',name:'도착예정일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptIntendDt',name:'출발예정일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobranCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_conLobranCd'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ds.op.coilwrk.RetrieveCoilWrkInOutListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_coilList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coilList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.coilwrk.SaveCoilWrkInOutListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_coilList","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_getLobranCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,dma_conLobranCd',target:'data:json,{"id":"ds_lobranCd","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 1. 2025.12.05  그리드의 입고오더번호(inOdrNo), 출고오더번호(outOdrNo) 팝업호출하지않고 텍스트 입력받는걸로 박주령PM과 협의완료 
// 2. ASIS : 조회전 행추가 시에는 두께, 폭, 길이가 정수밖에 입력이 안되나 조회 후에는 두께, 폭, 길이가 소수점으로 입력됨
//    TOBE : 처음부터 소수점으로 입력받도록 2026.02.06 박주령PM 협의완료
scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); // 물류 점소 코드
scwin.nowDt = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자
scwin.prevDt = $c.date.addDate($p, scwin.nowDt, -30); // ASIS : DDate.getPrevDate(nowDt , 30);
scwin.oldData = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  // 점소 콤보박스 SET
  dma_conLobranCd.set("sysCd", "BerthNonUsableEBC");
  dma_conLobranCd.set("queryId", "retriveLobranCodeList");
  $c.sbm.execute($p, sbm_getLobranCd);
  const codeOptions = [{
    grpCd: "CR003",
    compID: "acb_locCd,gr_coilList:locCd"
  } //로케이션, 그리드:위치
  ];
  $c.data.setCommonCode($p, codeOptions);

  // 그리드 maxlength 설정
  scwin.f_SetGridColumnMaxLength(gr_coilList);
};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    acb_lobranCd.setValue(scwin.lobranCd);
    ed_inStDt.setValue(scwin.prevDt);
    ed_inEndDt.setValue(scwin.nowDt);

    //테스트 데이터
    // ds_search.set("lobranCd", "3AA");
    // ds_search.set("inStDt", "20200511");
    // ds_search.set("inEndDt", "20200511");
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 입력 그리드 maxlength 설정
//-------------------------------------------------------------------------
scwin.f_SetGridColumnMaxLength = function (gridViewObj) {
  for (let i = 0; i < gridViewObj.getTotalCol(); i++) {
    let colNm = gridViewObj.getColumnID(i);
    let dataObj = $c.gus.object($p, gridViewObj.getDataList());
    let colInfo = dataObj.getColumnInfo(colNm);
    if (typeof colInfo != "undefined") {
      gridViewObj.setMaxLength(i, colInfo.length);
    }
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  // 검색조건 필수 입력 체크
  if (ed_clntNo.getValue() == "") {
    if (ed_inStDt.getValue() == "" && ed_outStDt.getValue() == "") {
      $c.win.alert($p, "입고일자 또는 출고일자를 입력해 주시기 바랍니다.");
      return;
    }
  }
  if (ed_inStDt.getValue() != "") {
    if (ed_inStDt.getValue() > ed_inEndDt.getValue()) {
      $c.win.alert($p, "요청일자를 확인해 주시기 바랍니다.");
      ed_inStDt.focus();
      return;
    }
  }
  if (ed_outStDt.getValue() != "") {
    if (ed_outStDt.getValue() > ed_outEndDt.getValue()) {
      $c.win.alert($p, "작업예정일자를 확인해 주시기 바랍니다.");
      ed_outStDt.focus();
      return;
    }
  }
  if (ed_arvIntendDt.getValue() != "") {
    if (ed_arvIntendDt.getValue() > ed_dptIntendDt.getValue()) {
      $c.win.alert($p, "입항일자를 확인해 주시기 바랍니다.");
      ed_arvIntendDt.focus();
      return;
    }
  }
  ds_coilList.setJSON([]);
  $c.sbm.execute($p, sbm_search); // submit(); 과 동일
};

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//-------------------------------------------------------------------------
scwin.f_mainSave2 = async function () {
  // 변경사항 있는지 체크
  if (ds_coilList.getModifiedIndex().length != 0) {
    // 그리드 Validate 체크
    let validArray = [{
      id: "coilNo",
      name: "코일번호",
      mandatory: true
    }, {
      id: "netWgt",
      name: "총중량",
      mandatory: true
    }, {
      id: "clntNo",
      name: "화주",
      mandatory: true
    }, {
      id: "inDt",
      name: "입고일자",
      mandatory: true,
      valid: "date",
      format: "YYYYMMDD"
    }, {
      id: "wrkStHh",
      name: "입고시간",
      mandatory: true,
      valid: "date",
      format: "HHmm"
    }, {
      id: "inOdrNo",
      name: "입고오더번호",
      mandatory: true
    }];
    let ret = await $c.gus.cfValidateGrid($p, gr_coilList, null, null, validArray, "입출고내역");
    //let ret = await $c.gus.cfValidate([gr_coilList]);
    if (!ret) return;
    for (var i = 0; i < ds_coilList.getRowCount(); i++) {
      //신규 저장할때만
      if (ds_coilList.getRowStatus(i) == "C") {
        if (ds_coilList.getCellData(i, "inDt") != "" && ds_coilList.getCellData(i, "outDt") != "") {
          if (ds_coilList.getCellData(i, "inDt") + ds_coilList.getCellData(i, "inHh") > ds_coilList.getCellData(i, "outDt") + ds_coilList.getCellData(i, "outHh")) {
            await $c.win.alert($p, i + "번째 입고일자와 출고일자를 확인해 주시기 바랍니다.");
            //ds_coilList.setRowPosition(i); 포커스가가면 포지션도 SET되므로 필요없을듯
            gr_coilList.setFocusedCell(i, "inDt", true); //edit : true
            return;
          }
        }
        if (ds_coilList.getCellData(i, "netWgt") == "0") {
          await $c.win.alert($p, i + "번째 순중량을 입력해 주시기 바랍니다.");
          //ds_coilList.setRowPosition(i);
          gr_coilList.setFocusedCell(i, "netWgt", true); //edit : true
          return;
        }
        if (ds_coilList.getCellData(i, "outDt") != "") {
          if (ds_coilList.getCellData(i, "outHh") != "") {
            if (ds_coilList.getCellData(i, "outOdrNo") == "") {
              await $c.win.alert($p, i + "번째 출고오더번호를 입력해 주시기 바랍니다.");
              //ds_coilList.setRowPosition(i);   
              gr_coilList.setFocusedCell(i, "outOdrNo", true); //edit : true
              return;
            }
          }
        }
        var inDt = ds_coilList.getCellData(i, "inDt");
        var coilNo = ds_coilList.getCellData(i, "coilNo");
        for (var j = 0; j < ds_coilList.getRowCount(); j++) {
          if (ds_coilList.getRowStatus(j) == "R") {
            var outDt = ds_coilList.getCellData(j, "outDt");
            var inDtt = ds_coilList.getCellData(j, "inDt");
            var coilNoo = ds_coilList.getCellData(j, "coilNo");
            if (outDt != "") {
              if (coilNoo == coilNo && inDt > outDt) {
                ret = await $c.win.confirm($p, "동일한 코일번호로 진행된 입출고내역이 있습니다.<br>" + "입고일자 : " + inDtt + ", 출고일자 : " + outDt + "<br>계속 진행하시겠습니까?");
                if (!ret) {
                  return;
                }
              }
            }
          }
        }
      }
    }
    ret = await $c.win.confirm($p, MSG_CM_CRM_001);
    if (ret) {
      $c.sbm.execute($p, sbm_save);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["입출고내역"]); // @은(는) 변경된 사항이 없습니다
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommPopUpGrid = async function (gubun, row, pClose) {
  // 선언부  
  var pCode = "";
  var pName = "";
  var pClose = "T";
  var win_url = "";
  var opts = null;
  var rtnValues = null;
  switch (gubun) {
    case 4:
      // 그리드 본선관리번호 팝업
      var args = new Array();
      args[0] = ds_coilList.getCellData(row, "cvsslMgntNo"); //본선관리번호
      args[1] = ""; //수출입구분코드

      win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      opts = {
        id: "op_204_01_07p",
        popupName: "본선관리번호검색팝업",
        modal: true,
        type: "browserPopup",
        width: 1200,
        height: 500,
        title: "본선관리번호검색팝업"
      };
      rtnValues = await $c.win.openPopup($p, win_url, opts, args);
      if (rtnValues != null) {
        ds_coilList.setCellData(row, "cvsslMgntNo", rtnValues[0]);
        ds_coilList.setCellData(row, "vsslNm", rtnValues[2]);
        ds_coilList.setCellData(row, "arvIntend", rtnValues[5]);
      }
      break;
    case 5:
      // 그리드 화주 팝업
      pCode = "";
      pName = ds_coilList.getCellData(row, "clntNm"); // 화주명

      // TOBE : 그리드 공통 팝업 호출 전에 컬럼 값 지우기
      ds_coilList.setCellData(row, "clntNo", "");
      ds_coilList.setCellData(row, "clntNm", "");
      udc_comCode1.setSelectId("retrieveCoopList"); // XML상의 SELECT ID
      udc_comCode1.cfCommonPopUp(scwin.udc_gr_clntNm_callBackFunc // 콜백 함수
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
      , 'F' // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 6:
      //입고오더번호 팝업
      var args = new Array();
      args[0] = ds_coilList.getCellData(row, "coilNo"); //본선관리번호
      args[1] = "I"; //수출입구분코드
      args[2] = ds_coilList.getCellData(row, "inDt");
      args[3] = ds_coilList.getCellData(row, "clntNo");
      args[4] = ds_coilList.getCellData(row, "clntNm");
      args[5] = acb_lobranCd.getValue();
      win_url = "/ui/ds/op/coilwrk/op_810_01_02p.xml";
      opts = {
        id: "op_810_01_02p",
        popupName: "오더번호검색팝업",
        modal: true,
        type: "browserPopup",
        width: 1200,
        height: 500,
        title: "오더번호검색팝업"
      };
      rtnValues = await $c.win.openPopup($p, win_url, opts, args);
      if (rtnValues != null) {
        ds_coilList.setCellData(row, "inOdrNo", rtnValues[1]);
      }
      break;
    case 7:
      //출고오더번호 팝업
      var args = new Array();
      args[0] = ds_coilList.getCellData(row, "coilNo"); //본선관리번호
      args[1] = "O"; //수출입구분코드
      args[2] = ds_coilList.getCellData(row, "outDt");
      args[3] = ds_coilList.getCellData(row, "clntNo");
      args[4] = ds_coilList.getCellData(row, "clntNm");
      args[5] = acb_lobranCd.getValue();
      win_url = "/ui/ds/op/coilwrk/op_810_01_02p.xml";
      opts = {
        id: "op_810_01_02p",
        popupName: "오더번호검색팝업",
        modal: true,
        type: "browserPopup",
        width: 1200,
        height: 500,
        title: "오더번호검색팝업"
      };
      var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
      if (rtnValues != null) {
        ds_coilList.setCellData(row, "outOdrNo", rtnValues[1]);
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 본선관리번호검색 팝업창 띄우기
//-------------------------------------------------------------------------
scwin.f_openPopUp = async function () {
  var args = new Array();
  args[0] = ed_cvsslMgntNo.getValue(); //본선관리번호
  args[1] = ""; //수출입구분코드

  let win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "op_204_01_07p",
    popupName: "본선관리번호검색팝업",
    modal: true,
    type: "browserPopup",
    width: 1200,
    height: 500,
    title: "본선관리번호검색팝업"
  };
  var rtnValues = await $c.win.openPopup($p, win_url, opts, args);
  console.log("rtnValues=" + rtnValues[0]);
  if (rtnValues != null) {
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 화주 팝업
      udc_clntNo.setSelectId("retrieveCoopList"); // XML상의 SELECT ID
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
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
      , "F" // 전체검색허용여부 ("F")
      , "화주,화주코드,화주명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
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
// 행복사
//------------------------------------------------------------------------- 
scwin.f_CopyRow = function () {
  var bfRow = ds_coilList.getRowPosition();
  var newRow = ds_coilList.insertRow();
  ds_coilList.setRowPosition(newRow);
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "cvsslMgntNo", ds_coilList.getCellData(bfRow, "cvsslMgntNo"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "clntNo", ds_coilList.getCellData(bfRow, "clntNo"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "clntNm", ds_coilList.getCellData(bfRow, "clntNm"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "thickness", ds_coilList.getCellData(bfRow, "thickness"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "width", ds_coilList.getCellData(bfRow, "width"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "length", ds_coilList.getCellData(bfRow, "length"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "material", ds_coilList.getCellData(bfRow, "material"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "type", ds_coilList.getCellData(bfRow, "type"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "grossWgt", ds_coilList.getCellData(bfRow, "grossWgt"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "netWgt", ds_coilList.getCellData(bfRow, "netWgt"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "bl", ds_coilList.getCellData(bfRow, "bl"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "customer", ds_coilList.getCellData(bfRow, "customer"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "dest", ds_coilList.getCellData(bfRow, "dest"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "inOdrNo", ds_coilList.getCellData(bfRow, "inOdrNo"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "inDt", ds_coilList.getCellData(bfRow, "inDt"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "inHh", ds_coilList.getCellData(bfRow, "inHh"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "outDt", ds_coilList.getCellData(bfRow, "outDt"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "outHh", ds_coilList.getCellData(bfRow, "outHh"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "locCd", ds_coilList.getCellData(bfRow, "locCd"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "outClsCd", ds_coilList.getCellData(bfRow, "outClsCd"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "outOdrNo", ds_coilList.getCellData(bfRow, "outOdrNo"));
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "lobranCd", ds_coilList.getCellData(bfRow, "lobranCd"));
};

//-------------------------------------------------------------------------
// 행추가
//------------------------------------------------------------------------- 
scwin.f_AddRow = function () {
  var newRow = ds_coilList.insertRow();
  ds_coilList.setRowPosition(newRow);
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "lobranCd", acb_lobranCd.getValue());
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "inDt", scwin.nowDt);
  ds_coilList.setCellData(ds_coilList.getRowPosition(), "inHh", "1200");
};

//-------------------------------------------------------------------------
// 행삭제
//------------------------------------------------------------------------- 
scwin.f_deleteRow = function () {
  if (ds_coilList.getCellData(ds_coilList.getRowPosition(), "invNo") != "") {
    $c.win.alert($p, "해당 코일은 송장이 이미 생성되어 삭제할 수 없습니다.");
    return;
  }
  if (ds_coilList.getRowStatus(ds_coilList.getRowPosition()) == "C") {
    ds_coilList.removeRow(ds_coilList.getRowPosition());
  } else {
    ds_coilList.deleteRow(ds_coilList.getRowPosition());
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------  
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_condition, null);
  acb_lobranCd.setValue(scwin.lobranCd);
  ed_clntNo.focus();
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;

  // 총 조회건수 표시
  tbx_totalRows.setValue(ds_coilList.getRowCount());
  if (ds_coilList.getRowCount() == 0) {
    $c.win.alert($p, MSG_CM_WRN_002);
    return false;
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001); // "성공적으로 저장하였습니다."
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

//-------------------------------------------------------------------------
// 화주 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'T', 'T');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
//-------------------------------------------------------------------------
// 화주 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 본선관리번호 onblur 
// ASIS : ed_cvsslMgntNo OnKillFocus
//-------------------------------------------------------------------------
scwin.ed_cvsslMgntNo_onblur = function (e) {
  scwinf_openPopUp();
};

//-------------------------------------------------------------------------
// 그리드 팝업 콜백(화주)
//-------------------------------------------------------------------------
scwin.udc_gr_clntNm_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_coilList, ds_coilList.getRowPosition(), "clntNo", "clntNm");
};

//-------------------------------------------------------------------------
// 그리드 팝업 클릭
//-------------------------------------------------------------------------
scwin.gr_coilList_ontextimageclick = function (rowIndex, columnIndex) {
  switch (columnIndex) {
    case 19:
      //본선관리번호(cvsslMgntNo)
      scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
      break;
    case 10:
      //화주(clntNm)
      scwin.f_openCommPopUpGrid(5, rowIndex, 'F');
      break;
    // case 13: //입고오더번호(inOdrNo) //2025.12.05 팝업호출하지않고 텍스트 입력받는걸로 박주령PM과 협의완료
    //     scwin.f_openCommPopUpGrid(6, rowIndex, 'F');
    //     break;
    // case 16: //출고오더번호(outOdrNo)
    //     scwin.f_openCommPopUpGrid(7, rowIndex, 'F');
    //     break;
  }
};

//-------------------------------------------------------------------------
// 그리드 oncellclick
//-------------------------------------------------------------------------
scwin.gr_coilList_oncellclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "coilNo") {
    if (ds_coilList.getRowStatus(rowIndex) == "C") {
      gr_coilList.setCellReadOnly(rowIndex, columnId, "false");
    } else {
      gr_coilList.setCellReadOnly(rowIndex, columnId, "true");
    }
  } else {
    if (ds_coilList.getCellData(rowIndex, "invNo") != "") {
      gr_coilList.setCellReadOnly(rowIndex, columnId, "true");
    } else {
      gr_coilList.setCellReadOnly(rowIndex, columnId, "false");
    }
  }
};

//-------------------------------------------------------------------------
// 데이터리스트(ds_coilList) onbeforeedit : edit전에 oldData 저장
//-------------------------------------------------------------------------
scwin.gr_coilList_onbeforeedit = function (rowIndex, columnIndex, value) {
  scwin.oldData = value;
};

//-------------------------------------------------------------------------
// 그리드 onafteredit
// ASIS : gr_coilList OnExit(row,colid,olddata)
//-------------------------------------------------------------------------
scwin.gr_coilList_onafteredit = async function (rowIndex, columnIndex, value) {
  switch (columnIndex) {
    case 14:
      // 출고일자(outDt)
      if (value != "" && value != scwin.oldData) {
        if (ds_coilList.getCellData(rowIndex, "inDt") == "") {
          await $c.win.alert($p, "입고일자를 입력해 주시기 바랍니다.");
          //ds_coilList.setRowPosition = i;
          //gr_coilList.SetColumn("inDt");
          gr_coilList.setCellReadOnly(rowIndex, "inDt", "false");
          gr_coilList.setFocusedCell(rowIndex, "inDt", true); //edit : true
        }
      }
      break;
    case 10:
      // 화주(clntNm)
      if (value != "" && value != scwin.oldData) {
        ds_coilList.setCellData(rowIndex, "clntNo", "");
        scwin.f_openCommPopUpGrid(5, rowIndex, 'F');
      } else if (value == "") {
        ds_coilList.setCellData(rowIndex, "clntNo", "");
        ds_coilList.setCellData(rowIndex, "clntNm", "");
      }
      break;
    case 19:
      //본선관리번호(cvsslMgntNo)
      if (value != "" && value != scwin.oldData) {
        scwin.f_openCommPopUpGrid(4, rowIndex, 'F');
      } else if (value == "") {
        ds_coilList.setCellData(rowIndex, "cvsslMgntNo", "");
      }
      break;

    // case "inOdrNo": //입고오더번호(inOdrNo) //2025.12.05 팝업호출하지않고 텍스트 입력받는걸로 박주령PM과 협의완료
    //     if (value != "" && value != scwin.oldData) {
    //         scwin.f_openCommPopUpGrid(6, rowIndex, 'F');
    //     } else if (value == "") {
    //         ds_coilList.setCellData(rowIndex, "inOdrNo", "");
    //     }
    //     break;
    // case "outOdrNo": //출고오더번호(outOdrNo)
    //     if (value != "" && value != scwin.olddata) {
    //         scwin.f_openCommPopUpGrid(7, rowIndex, 'F');
    //     } else if (value == "") {
    //         ds_coilList.setCellData(rowIndex, "outOdrNo", "");
    //     }
    //     break;
  }
};

//-------------------------------------------------------------------------
// 그리드 : 총중량 customFormatter
//-------------------------------------------------------------------------
scwin.grossWgtExp = function (data, formatData, rowIdx, colIdx) {
  if (formatData == null || formatData === "") return "";
  var num = Number(formatData.replace(/,/g, ""));
  if (isNaN(num)) return formatData;

  //num = Math.floor(num * 100) / 100;

  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};

//-------------------------------------------------------------------------
// 그리드 : 순중량 customFormatter
//-------------------------------------------------------------------------
scwin.netWgtExp = function (data, formatData, rowIdx, colIdx) {
  if (formatData == null || formatData === "") return "";
  var num = Number(formatData.replace(/,/g, ""));
  if (isNaN(num)) return formatData;

  //num = Math.floor(num * 100) / 100;

  return num.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_condition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:'width:80px;'}},{T:1,N:'xf:group',A:{style:'width:250px;',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',editType:'select',id:'acb_lobranCd',ref:'data:ds_search.lobranCd',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',validExp:'점소:yes',objType:'key',mandatory:'true',title:'점소',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobranCd'},E:[{T:1,N:'w2:label',A:{ref:'name'}},{T:1,N:'w2:value',A:{ref:'code'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'입고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'inStDt',refDataMap:'ds_search',style:'',id:'udc_inDt',refEdDt:'inEndDt',validExp:'입고일자:yes:date=YYYYMMDD',mandatory:'true',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_inStDt',edToId:'ed_inEndDt'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출고일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_outDt',refDataMap:'ds_search',refEdDt:'outEndDt',refStDt:'outStDt',style:'',validExp:'출고일자:yes:date=YYYYMMDD',mandatory:'true',mandatoryTo:'true',mandatoryFrom:'true',edToId:'ed_outEndDt',edFromId:'ed_outStDt',titleFrom:'출발일',titleTo:'출발일'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'입항일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_IntendDt',refDataMap:'ds_search',refEdDt:'dptIntendDt',refStDt:'arvIntendDt',style:'',mandatory:'false',edFromId:'ed_arvIntendDt',edToId:'ed_dptIntendDt'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_clntNo',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntNo',objTypeCode:'Data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'false',maxlengthCode:'8',objTypeName:'Data',mandatoryName:'false',refDataCollection:'ds_search',code:'clntNo','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:' num',id:'ed_cvsslMgntNo',style:'',objType:'Data',mandatory:'false',allowChar:'a-zA-Z0-9',maxlength:'16',editType:'select','ev:onkeyup':'scwin.onkeyup',ref:'data:ds_search.cvsslMgntNo','ev:onblur':'scwin.ed_cvsslMgntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch','ev:onclick':'scwin.f_openPopUp',id:'btn_cvsslMgntNo',style:'',title:'Search',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'로케이션',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',editType:'select',id:'acb_locCd',ref:'data:ds_search.locCd',search:'start',style:'width: 150px;',submenuSize:'auto',useKeywordHighlight:'false',mandatory:'false',chooseOptionLabel:'전체'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'입출고내역',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',grdDownOpts:'{"fileName":"입출고내역.xlsx","sheetName":"입출고내역","type":"4+8+16"}',templateYn:'N',gridDownYn:'Y',gridID:'gr_coilList',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_coilList',fixedColumn:'0',focusMode:'cell',id:'gr_coilList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:ontextimageclick':'scwin.gr_coilList_ontextimageclick','ev:oncellclick':'scwin.gr_coilList_oncellclick',rowStatusVisible:'true','ev:onbeforeedit':'scwin.gr_coilList_onbeforeedit','ev:onafteredit':'scwin.gr_coilList_onafteredit',gridName:'입출고내역'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',value:'코일번호',width:'150',class:'col-type1'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',value:'두께',width:'90',class:'col-type2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',value:'폭',width:'90',class:'col-type2'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',value:'길이',width:'90',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'재질',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'종류',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',value:'총중량<br/>(KG)',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column26',value:'순중량<br/>(KG)',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'BL',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'화주',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column68',value:'화주',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column20',value:'입고일자',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column50',value:'시간',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column47',value:'입고<br/>오더번호',displayMode:'label',class:'col-type1'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column38',value:'출고일자',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column41',value:'시간',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column53',value:'출고<br/>오더번호',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column56',value:'도착지',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'고객사',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column62',value:'본선<br/>관리번호',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column65',value:'위치',displayMode:'label',class:'col-type2'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column71',value:'송장번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'coilNo',inputType:'text',width:'150',mandatory:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'thickness',inputType:'text',removeBorderStyle:'false',width:'90',dataType:'number',displayFormat:'#,##0.00',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'width',inputType:'text',removeBorderStyle:'false',width:'90',dataType:'number',displayFormat:'#,##0.00',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'length',inputType:'text',removeBorderStyle:'false',width:'90',dataType:'number',displayFormat:'#,##0.00',allowChar:'0-9.'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'material',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'type',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'grossWgt',displayMode:'label',displayFormat:'#,##0.##',dataType:'number',textAlign:'right',allowChar:'0-9.',customFormatter:'scwin.grossWgtExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'netWgt',displayMode:'label',displayFormat:'#,##0.##',dataType:'number',textAlign:'right',mandatory:'true',allowChar:'0-9.',customFormatter:'scwin.netWgtExp'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bl',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',mandatory:'true',hiddenCol:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'textImage',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'calendar',id:'inDt',displayMode:'label',displayFormat:'yyyy/MM/dd',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'inHh',displayMode:'label',displayFormat:'##:##',mandatory:'true',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'inOdrNo',displayMode:'label',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'outDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'outHh',displayMode:'label',displayFormat:'##:##',allowChar:'0-9'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'outOdrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dest',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'customer',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'textImage',id:'cvsslMgntNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'locCd',displayMode:'label',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'invNo',value:'',displayMode:'label',readOnly:'true',hidden:'true',hiddenCol:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column16',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column15',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column14',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column13',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column34',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column31',displayMode:'label',class:'tar',expression:'sum(\'grossWgt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'column28',displayMode:'label',class:'tar',expression:'sum(\'netWgt\')',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column70',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column52',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column43',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column55',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column64',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:'',gridName:'입출고내역'},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_rowCopy',style:'',type:'button',userAuth:'C','ev:onclick':'scwin.f_CopyRow'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'행복사'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_deleteRow',rowAddUserAuth:'C',rowDelUserAuth:'U',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',gridID:'gr_coilList'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'button_main2',style:'',type:'button',userAuth:'U','ev:onclick':'scwin.f_mainSave2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})