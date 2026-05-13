/*amd /ui/ps/eq/opinfomgnt/opinfomgnt/eq_220_01_01b.xml 46273 36fde6b38718d1be5324eb01e86db370dd30e9acf0188baa932a86c69eddb462 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_re_pl'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'사업부문코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_work_pl',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlNm',name:'작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repFixWrkPlCd',name:'대표작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repFixWrkPlNm',name:'대표작업장명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptWages',name:'적용공임',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlRepstNm',name:'작업장대표',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zip',name:'우편번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr1',name:'주소1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'addr2',name:'주소2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telNo',name:'전화번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'faxNo',name:'FAX번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'name15',dataType:'number',defaultValue:'1'}},{T:1,N:'w2:column',A:{id:'regId',name:'name16',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'name18',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'name19',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_delivery',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'작업장코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lux_wrkPlCd',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name',name:'코드명',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_lux_wrkPlCdCondition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'sysCd',name:'시스템코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'queryId',name:'쿼리ID',dataType:'text'}},{T:1,N:'w2:key',A:{id:'param1',name:'파라메터1',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_wrkPlCd',action:'/cm.zz.RetrieveComboCMD.do',method:'post',mediatype:'application/json',ref:'data:json,ds_lux_wrkPlCdCondition',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_wrkPlCd_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_re_pl","key":"IN_DS1"},{"id":"ds_work_pl","key":"OUT_DS1"},{"id":"ds_delivery","key":"OUT_DS2"}]',target:'data:json,[{"id":"ds_work_pl","key":"OUT_DS1"},{"id":"ds_delivery","key":"OUT_DS2"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_SaveRepairShop',action:'/ps.eq.opinfomgnt.opinfomgnt.SaveFixWorkPlaceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_work_pl","key":"IN_DS1"},{"id":"ds_delivery","key":"IN_DS2"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_SaveRepairShop_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//세션 정보를 가지고 온다.
scwin.memJson = $c.data.getMemInfo($p);
scwin.RetrievedRow = 0;

//그리드 변경전 데이터를 담는 정보
scwin.oriRepFixWrkPlCd = "";
scwin.oriAcctDeptCd = "";

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  //공통코드 적용
  const codeOptions = [{
    grpCd: "ZZ205",
    compID: "lc_homeClsCd",
    opt: {
      "range": "1,EQ"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {
  lc_homeClsCd.setValue(scwin.memJson.eqHomeClsCd); // 정비소속구분코드
  lc_homeClsCd.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  sbm_retrieve.action = "/ps.eq.opinfomgnt.opinfomgnt.RetrieveFixWorkPlaceListCMD.do";
  ds_work_pl.removeAll();
  ds_delivery.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
  //RetrievedRow = ds_work_pl.CountRow; 콜백으로이동
};

//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    scwin.RetrievedRow = ds_work_pl.getRowCount();

    // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
    tbx_totalRows.setValue(ds_work_pl.getRowCount());
    gr_work_pl.setFocusedCell(0, "fixWrkPlCd");
    gr_delivery.setFocusedCell(0, "lobranCd");

    //scwin.gr_work_pl_onrowindexchange(0);//s_delivery.filter(); + 그리드카운트 처리
  } catch (e) {
    console.log("sbm_retrieve_submitdone " + e);
  }
};

//-------------------------------------------------------------------------
// 정비작업장 목록 그리드 인덱스가 변경시
//-------------------------------------------------------------------------
scwin.gr_work_pl_onrowindexchange = function (rowIndex, oldRow) {
  try {
    ds_delivery.removeColumnFilterAll();
    // 1. 현재 선택한 행의 기준 값 가져오기
    let v_val = ds_work_pl.getCellData(rowIndex, "fixWrkPlCd");
    let filterLogic = function (cellData, tmpParam, rowIdx) {
      if (ds_delivery.getCellData(rowIdx, "fixWrkPlCd") == v_val) {
        if (v_val == "")
          // 배점소정보중에 작업장코드가 없을 경우는 필터링 대상에서 제외
          return false;else return true;
      } else {
        return false;
      }
    };

    // 2. 함수형 필터 적용
    ds_delivery.setColumnFilter({
      type: "func",
      colIndex: "fixWrkPlCd",
      // 대상 컬럼
      key: filterLogic,
      condition: "and"
    });
    tbx_totalRows2.setValue(ds_delivery.getRowCount());
    gr_delivery.setFocusedCell(0, "lobranCd");
    if (rowIndex < scwin.RetrievedRow) {
      //조회된 카운트보다 작은경우
      gr_work_pl.setReadOnly("cell", rowIndex, "fixWrkPlCd", true); //readOnly Edit none
    } else {
      gr_work_pl.setReadOnly("cell", rowIndex, "fixWrkPlCd", false); //Edit Numeric
    }
  } catch (e) {
    console.log("gr_work_pl_onrowindexchange " + e);
  }
};

//-------------------------------------------------------------------------
// 정비작업장 목록 그리드 정보변경전 변경전 데이터 정의 olddata
//-------------------------------------------------------------------------
scwin.gr_work_pl_onbeforeedit = function (rowIndex, columnIndex, value) {
  try {
    let colid = gr_work_pl.getColumnID(columnIndex);
    if (colid == "repFixWrkPlCd") {
      scwin.oriRepFixWrkPlCd = value;
    }
    if (colid == "acctDeptCd") {
      scwin.oriAcctDeptCd = value;
    }
  } catch (e) {
    console.log("gr_work_pl_onbeforeedit " + e);
  }
};

//-------------------------------------------------------------------------
// 정비작업장 목록 그리드 정보 변경시
//-------------------------------------------------------------------------
scwin.gr_work_pl_onafteredit = async function (rowIndex, columnIndex, value, info) {
  try {
    let colid = gr_work_pl.getColumnID(columnIndex);

    //돋보기 클릭하는 컬럼인경우
    if (colid == "repFixWrkPlCd" || colid == "acctDeptCd" || colid == "zip") {
      if (info.type === 'mousedown') {
        //입력에는 keydown, 이미지클릭시 mousedown 돋보기 클릭만 처리하기 위한 방어코드
        return false; // onafteredit 로직 중단
      }
    }
    let i = 0;
    switch (colid) {
      case "fixWrkPlCd":
        for (i = 0; i < ds_work_pl.getRowCount(); i++) {
          // 작업장코드 중복되면 오류
          if (rowIndex != i && ds_work_pl.getCellData(rowIndex, "fixWrkPlCd") != "" && ds_work_pl.getCellData(rowIndex, "fixWrkPlCd") == ds_work_pl.getCellData(i, "fixWrkPlCd")) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_032, ["작업장코드"])); //$c.gus.cfAlertMsg(MSG_CM_ERR_032, ["작업장코드"]);
            gr_work_pl.setFocusedCell(i, "fixWrkPlCd", true); //gr_work_pl.SetColumn("fixWrkPlCd");
          }

          // 사업부문이 물류이고 작업장코드가 2로 시작하면 오류
          if (lc_homeClsCd.getValue() == "LO" && parseInt(ds_work_pl.getCellData(rowIndex, "fixWrkPlCd")) >= 200) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, ["작업장코드"]));
            gr_work_pl.setFocusedCell(i, "fixWrkPlCd", true);
            return false;
          }

          // 사업부문이 고속이고 작업장코드가 1로 시작하거나 3이상으로 시작하면 오류
          if (lc_homeClsCd.getValue() == "TR" && (parseInt(ds_work_pl.getCellData(rowIndex, "fixWrkPlCd")) < 200 || parseInt(ds_work_pl.getCellData(rowIndex, "fixWrkPlCd")) > 300)) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, ["작업장코드"]));
            gr_work_pl.setFocusedCell(i, "fixWrkPlCd", true);
            return false;
          }
        }
        break;
      case "fixWrkPlNm":
        for (i = 0; i < ds_work_pl.getRowCount(); i++) {
          if (i != rowIndex && ds_work_pl.getCellData(rowIndex, "fixWrkPlNm") != "" && ds_work_pl.getCellData(rowIndex, "fixWrkPlNm") == ds_work_pl.getCellData(i, "fixWrkPlNm")) {
            $c.gus.cfAlertMsg($p, $c.data.MSG_CM_ERR_032($p, MSG_CM_ERR_055, ["작업장명"]));
            gr_work_pl.setFocusedCell(i, "fixWrkPlNm", true); //gr_work_pl.focus();
          }
        }
        break;
      case "repFixWrkPlCd":
        let param3 = ds_work_pl.getCellData(rowIndex, "homeClsCd");
        if (ds_work_pl.getCellData(rowIndex, "repFixWrkPlCd") == ds_work_pl.getCellData(rowIndex, "fixWrkPlCd")) return false;
        if (ds_work_pl.getCellData(rowIndex, colid) != "" && ds_work_pl.getCellData(rowIndex, colid) != scwin.oriRepFixWrkPlCd) {
          ds_work_pl.setCellData(rowIndex, "repFixWrkPlNm", "");
          let param1 = ds_work_pl.getCellData(rowIndex, "repFixWrkPlCd");
          let param2 = ds_work_pl.getCellData(rowIndex, "repFixWrkPlNm");
          ds_work_pl.setCellData(rowIndex, "repFixWrkPlCd", "");

          //popupResult = cfCommonPopUp('retrieveWorkPlaceInfo', param1, param2, "T", null, null, null, null, param3, null, null, null, null); // 작업장
          udc_comCodeGrid.setSelectId('retrieveWorkPlaceInfo');
          udc_comCodeGrid.cfCommonPopUp(scwin.grd_repFixWrkPlCd_callBackFunc // 콜백 함수
          , param1 // 화면에서의  Code Element의 Value
          , param2 // 화면에서의  Name Element의 Value
          , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
          , null, null, null, null, param3, null, null, null, null);
        } else if (ds_work_pl.getCellData(rowIndex, colid) == "") {
          ds_work_pl.setCellData(rowIndex, "repFixWrkPlCd", "");
          ds_work_pl.setCellData(rowIndex, "repFixWrkPlNm", "");
        }
        break;
      case "acctDeptCd":
        if (ds_work_pl.getCellData(rowIndex, colid) != "" && ds_work_pl.getCellData(rowIndex, colid) != scwin.oriAcctDeptCd) {
          ds_work_pl.setCellData(rowIndex, "acctDeptNm", "");
          let param1 = ds_work_pl.getCellData(rowIndex, "acctDeptCd");
          let param2 = ds_work_pl.getCellData(rowIndex, "acctDeptNm");
          let param3 = null;
          ds_work_pl.setCellData(rowIndex, "acctDeptCd", "");
          //popupResult = cfCommonPopUp('retrieveAcctDeptCdInfo', param1, param2, "T", null, null, null, null, param3, null, null, null, null); // 귀속부서
          udc_comCodeGrid.setSelectId('retrieveAcctDeptCdInfo');
          udc_comCodeGrid.cfCommonPopUp(scwin.grd_acctDeptCd_callBackFunc // 콜백 함수
          , param1 // 화면에서의  Code Element의 Value
          , param2 // 화면에서의  Name Element의 Value
          , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
          , null, null, null, null, param3, null, null, null, null);
        } else if (ds_work_pl.getCellData(rowIndex, colid) == "") {
          ds_work_pl.setCellData(rowIndex, "acctDeptCd", "");
          ds_work_pl.setCellData(rowIndex, "acctDeptNm", "");
        }
        break;
      case "zip":
        if (ds_work_pl.getCellData(rowIndex, colid) != "" && ds_work_pl.getCellData(rowIndex, colid) != value) {
          ds_work_pl.setCellData(rowIndex, "addr1", "");
          let param1 = ds_work_pl.getCellData(rowIndex, zip);
          let data = {};
          let popupResult;
          const options = {
            id: "newzipcodePopup",
            type: "popup",
            modal: true,
            popupName: "우편번호",
            width: 530,
            height: 400
          };
          popupResult = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", options, data);
          // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
          if (popupResult != null && popupResult != undefined && popupResult[0] != "N/A") {
            ds_work_pl.setCellData(rowIndex, "zip", popupResult.zip);
            ds_work_pl.setCellData(rowIndex, "addr1", popupResult.addr1);
          }
        }
        break;
    }
  } catch (e) {
    console.log("gr_work_pl_onafteredit " + e);
  }
};

//-------------------------------------------------------------------------
// 정비작업장 목록 이미지 클릭 팝업
//-------------------------------------------------------------------------
scwin.gr_work_pl_ontextimageclick = async function (rowIndex, columnIndex) {
  let colid = gr_work_pl.getColumnID(columnIndex);
  //대표작업장코드 팝업
  if (colid == "repFixWrkPlCd") {
    if (ds_work_pl.getCellData(rowIndex, "homeClsCd") == "") {
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_WRN_007, ["소속코드"]));
      gr_work_pl.setFocusedCell(rowIndex, "homeClsCd", true); //gr_work_pl.SetColumn("homeClsCd");
    }

    //popupResult = cfCommonPopUp('retrieveWorkPlaceInfo' ,ds_work_pl.NameValue(row,"repFixWrkPlCd"),ds_work_pl.NameValue(row,"repFixWrkPlNm"),"F",null,null,null,null,ds_work_pl.NameValue(row,"homeClsCd"),null,null,null,null); // 작업장
    udc_comCodeGrid.setSelectId('retrieveWorkPlaceInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.grd_repFixWrkPlCd_callBackFunc // 콜백 함수
    , ds_work_pl.getCellData(rowIndex, "repFixWrkPlCd") // 화면에서의  Code Element의 Value
    , ds_work_pl.getCellData(rowIndex, "repFixWrkPlNm") // 화면에서의  Name Element의 Value
    , "F" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null, null, null, null, ds_work_pl.getCellData(rowIndex, "homeClsCd"), null, null, null, null);

    //귀속부서 팝업
  } else if (colid == "acctDeptCd") {
    // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
    //popupResult = cfCommonPopUp('retrieveAcctDeptCdInfo',ds_work_pl.NameValue(row,"acctDeptCd"),ds_work_pl.NameValue(row,"acctDeptNm"),"F",null,null,null,null,null,null,null,null,null,null,null); // 귀속부서
    udc_comCodeGrid.setSelectId('retrieveAcctDeptCdInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.grd_acctDeptCd_callBackFunc // 콜백 함수
    , ds_work_pl.getCellData(rowIndex, "acctDeptCd") // 화면에서의  Code Element의 Value
    , ds_work_pl.getCellData(rowIndex, "acctDeptNm") // 화면에서의  Name Element의 Value
    , "F" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null, null, null, null, null, null, null, null, null, null, null);

    //우편번호 팝업
  } else if (colid == "zip") {
    let data = {};
    let popupResult;
    const options = {
      id: "newzipcodePopup",
      type: "popup",
      modal: true,
      popupName: "우편번호",
      width: 530,
      height: 400
    };
    popupResult = await $c.win.openPopup($p, "/ui/cm/zz/newzipcodePopup.xml", options, data);
    // Modal Dialog를 리턴값 없이 닫을 경우에 대비해
    if (popupResult != null && popupResult != undefined && popupResult[0] != "N/A") {
      ds_work_pl.setCellData(rowIndex, "zip", popupResult.zip);
      ds_work_pl.setCellData(rowIndex, "addr1", popupResult.addr1);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 호출 repFixWrkPlCd 콜백
//-------------------------------------------------------------------------
scwin.grd_repFixWrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_work_pl, ds_work_pl.getRowPosition(), "repFixWrkPlCd", "repFixWrkPlNm");
};

//-------------------------------------------------------------------------
// 그리드 호출 acctDeptCd 콜백
//-------------------------------------------------------------------------
scwin.grd_acctDeptCd_callBackFunc = function (ret) {
  $c.gus.cfSetGridReturnValue($p, ret, ds_work_pl, ds_work_pl.getRowPosition(), "acctDeptCd", "acctDeptNm");
};

//-------------------------------------------------------------------------
// Popup 배점소 그리드
//-------------------------------------------------------------------------
scwin.gr_delivery_onafteredit = function (rowIndex, columnIndex, value, info) {
  try {
    let colid = gr_delivery.getColumnID(columnIndex);
    //돋보기 클릭하는 컬럼인경우
    if (colid == "lobranCd") {
      if (info.type === 'mousedown') {
        //입력에는 keydown, 이미지클릭시 mousedown 돋보기 클릭만 처리하기 위한 방어코드
        return false; // onafteredit 로직 중단
      }
    }

    //popupResult = cfCommonPopUp('retrieveLogisDeptInfo', ds_delivery.NameValue(row,"lobranCd"),ds_delivery.NameValue(row,"lobranNm"),"",null,null,null,null,"A,B",null,null,null,null); // 배점소
    udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.grd_lobranCd_callBackFunc // 콜백 함수
    , ds_delivery.getCellData(rowIndex, "lobranCd") // 화면에서의  Code Element의 Value
    , ds_delivery.getCellData(rowIndex, "lobranNm") // 화면에서의  Name Element의 Value
    , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , "A,B" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("gr_delivery_onafteredit " + e);
  }
};

//-------------------------------------------------------------------------
// Popup 배점소 그리드 찾기
//-------------------------------------------------------------------------
scwin.gr_delivery_ontextimageclick = function (rowIndex, columnIndex) {
  try {
    //popupResult = cfCommonPopUp('retrieveLogisDeptInfo', ds_delivery.NameValue(row,"lobranCd"),ds_delivery.NameValue(row,"lobranNm"),"",null,null,null,null,"A,B",null,null,null,null); // 배점소
    udc_comCodeGrid.setSelectId('retrieveLogisDeptInfo');
    udc_comCodeGrid.cfCommonPopUp(scwin.grd_lobranCd_callBackFunc // 콜백 함수
    , ds_delivery.getCellData(rowIndex, "lobranCd") // 화면에서의  Code Element의 Value
    , ds_delivery.getCellData(rowIndex, "lobranNm") // 화면에서의  Name Element의 Value
    , "T" // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
    , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
    , null // Title순서
    , null // 보여주는 각 컬럼들의 폭
    , null // 컬럼중에서 숨기는 컬럼 지정
    , "A,B" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
    , null // POP-UP뛰을때 원도우의 사용자 정의 폭
    , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
    , null // 윈도우 위치 Y좌표
    , null // 윈도우 위치 X좌표
    , null // 중복체크여부	("F")
    , null // 전체검색허용여부	("F")
    , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
    );
  } catch (e) {
    console.log("gr_delivery_ontextimageclick " + e);
  }
};

//-------------------------------------------------------------------------
// 그리드 호출 lobranCd 콜백
//-------------------------------------------------------------------------
scwin.grd_lobranCd_callBackFunc = function (ret) {
  if (ret != null && ret != undefined && ret[0] != "N/A") {
    ds_delivery.setCellData(ds_delivery.getRowPosition(), "lobranCd", ret[0]); //배점소코드
    ds_delivery.setCellData(ds_delivery.getRowPosition(), "lobranNm", ret[1]); //배점소명
  }
  $c.gus.cfSetGridReturnValue($p, ret, ds_delivery, ds_delivery.getRowPosition(), "lobranCd", "lobranNm");
};

//-------------------------------------------------------------------------
// Popup 배점소 그리드 row 선택시
//-------------------------------------------------------------------------
scwin.gr_delivery_onrowindexchange = function (rowIndex, oldRow) {
  try {
    if (ds_delivery.getRowStatus(rowIndex) == 'R') {
      gr_delivery.setReadOnly("cell", rowIndex, "lobranCd", true); //readOnly Edit none
    } else {
      gr_delivery.setReadOnly("cell", rowIndex, "lobranCd", false); //Edit ANY
    }
  } catch (e) {
    console.log("gr_delivery_onrowindexchange " + e);
  }
};

//-------------------------------------------------------------------------
// 조회 조건 지우기
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (value) {
  $c.gus.cfInitObjects($p, tb_wrk, null);
};

//-------------------------------------------------------------------------
// 작업장콤보 DataSet
//-------------------------------------------------------------------------
scwin.lc_homeClsCd_onchange = function (info) {
  try {
    const params = {
      sysCd: "PsCommonEBC",
      queryId: "retriveWrkplList",
      param1: lc_homeClsCd.getValue()
    };

    //데이터셋에 정보설정
    ds_lux_wrkPlCdCondition.setJSON(params);
    $c.sbm.execute($p, sbm_wrkPlCd);
  } catch (e) {
    console.log("lc_homeClsCd_onviewchange : " + e);
  }
};

//-------------------------------------------------------------------------
// 콜백
//-------------------------------------------------------------------------
scwin.sbm_wrkPlCd_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  if (e.responseJSON.GAUCE) {
    ds_lux_wrkPlCd.setJSON(e.responseJSON.GAUCE);
    ds_lux_wrkPlCd.insertRow(0);
    ds_lux_wrkPlCd.setCellData(0, "code", "");
    ds_lux_wrkPlCd.setCellData(0, "name", "전체");
    lc_wrkPlCd.setSelectedIndex(0);
  }
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  try {
    if (ds_work_pl.getModifiedIndex().length == 0 && ds_delivery.getModifiedIndex().length == 0) {
      $c.win.alert($p, $c.data.getMessage($p, MSG_CM_ERR_001, "정비작업장, 점소"));
    } else {
      if (!(await $c.gus.cfValidate($p, [gr_work_pl], null, true))) return false;
      if (ds_work_pl.getModifiedIndex().length > 0) {
        let count = 0;
        for (let i = scwin.RetrievedRow; i < ds_work_pl.getRowCount(); i++) {
          count = i + 1;
          if (ds_work_pl.getCellData(i, "repFixWrkPlCd") == "") {
            $c.win.alert($p, "[" + count + "]번째 대표작업장코드를 입력하세요.");
            return false;
          }
        }
      }
      if ((await $c.gus.cfValidate($p, [gr_work_pl], null, true)) && (await $c.gus.cfValidate($p, [gr_delivery], null, true))) {
        for (let row = 0; row < ds_work_pl.getRowCount(); row++) {
          // 사업부문이 물류이고 작업장코드가 2로 시작하면 오류
          if (lc_homeClsCd.getValue() == "LO" && parseInt(ds_work_pl.getCellData(row, "fixWrkPlCd")) >= 200) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, ["작업장코드"]));
            gr_work_pl.setFocusedCell(i, "fixWrkPlCd", true); //gr_work_pl.SetColumn("fixWrkPlCd");
            return false;
          }

          // 사업부문이 고속이고 작업장코드가 1로 시작하거나 3이상으로 시작하면 오류
          if (lc_homeClsCd.getValue() == "TR" && (parseInt(ds_work_pl.getCellData(row, "fixWrkPlCd")) < 200 || parseInt(ds_work_pl.getCellData(row, "fixWrkPlCd")) > 300)) {
            $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, ["작업장코드"]));
            gr_work_pl.setFocusedCell(i, "fixWrkPlCd", true); //gr_work_pl.SetColumn("fixWrkPlCd");
            return false;
          }
        }
        if (await $c.win.confirm($p, "저장하시겠습니까?")) {
          $c.sbm.execute($p, sbm_SaveRepairShop);
        }
      }
    }
  } catch (e) {
    console.log("f_Save : " + e);
  }
};

//-------------------------------------------------------------------------
// 저장콜백
//------------------------------------------------------------------------
scwin.sbm_SaveRepairShop_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

//-------------------------------------------------------------------------
// 첫번째 그리드추가 - 코드 적용
//------------------------------------------------------------------------
scwin.f_WorkAddRow = function (e) {
  try {
    //ASIS 행이 없을때는 추가하지 않고 있어서 방어코드 추가함
    if (ds_work_pl.getRowCount() > 0) {
      let addRow = ds_work_pl.insertRow();
      ds_work_pl.setCellData(addRow, "homeClsCd", lc_homeClsCd.getValue()); //소속
      gr_work_pl.setReadOnly("cell", addRow, "fixWrkPlCd", false); //Edit Numeric
      gr_work_pl.setFocusedCell(addRow, "fixWrkPlCd", true); //작업장코드
    }
  } catch (e) {
    console.log("f_WorkAddRow : " + e);
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드추가 - 코드 적용
//------------------------------------------------------------------------
scwin.f_CostAddRow = function (e) {
  try {
    //ASIS 행이 없을때는 추가하지 않고 있어서 방어코드 추가함
    if (lc_homeClsCd.getValue() == "LO") {
      let addRow = ds_delivery.insertRow();
      ds_delivery.setCellData(addRow, "fixWrkPlCd", ds_work_pl.getCellData(ds_work_pl.getRowPosition(), "fixWrkPlCd"));
      ds_delivery.setRowPosition(addRow);
      $c.gus.cfGoPrevPosition($p, gr_delivery, addRow);
    }
  } catch (e) {
    console.log("f_CostAddRow : " + e);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드삭제 - 서브데이타도 삭제
//------------------------------------------------------------------------
scwin.f_DelClass = async function (e) {
  try {
    for (let row = 0; row < ds_work_pl.getRowCount(); row++) {
      if (ds_work_pl.getCellData(ds_work_pl.getRowPosition(), "fixWrkPlCd") == ds_work_pl.getCellData(row, "repFixWrkPlCd")) {
        //alert("해당 작업장은 대표작업장으로 사용중입니다.");
        //return;
      }
    }
    if (await $c.win.confirm($p, "작업장코드를 삭제하면 하위코드도 모두 삭제됩니다.<br/>삭제하시겠습니까?")) {
      for (let i = ds_delivery.getRowCount() - 1; i >= 0; i--) {
        //추가등록정보는 삭제, 나머지는 상태값 삭제가 됨
        if (ds_delivery.getRowStatus(i) == "C") {
          ds_delivery.removeRow(i);
        } else {
          let curPos = ds_delivery.getRowPosition();
          ds_delivery.deleteRow(ds_delivery.getRowPosition()); //ds_delivery.DeleteRow(ds_delivery.RowPosition);
          gr_delivery.setFocusedCell(curPos, "lobranCd");
          break;
        }
      }

      //ds_work_pl.setCellData(ds_work_pl.getRowPosition(), "fixWrkPlCd", "");

      if (ds_work_pl.getRowStatus(ds_work_pl.getRowPosition()) == "C") {
        ds_work_pl.removeRow(ds_work_pl.getRowPosition());
      } else {
        let curPos2 = ds_work_pl.getRowPosition();
        ds_work_pl.deleteRow(curPos2);
        gr_work_pl.setEventPause("", true);
        gr_work_pl.setFocusedCell(curPos2, "fixWrkPlCd");
        gr_work_pl.setEventPause("", false);
      }
    }
  } catch (e) {
    console.log("f_DelClass : " + e);
  }
};

//-------------------------------------------------------------------------
// 첫번째 그리드취소 - 서브데이타도 적용
//-------------------------------------------------------------------------
scwin.f_CancelClass = function (e) {
  try {
    if (ds_work_pl.getRowStatus(ds_work_pl.getRowPosition()) == "C") {
      //추가데이타인 경우, 서브데이타삭제
      for (let i = ds_delivery.getRowCount() - 1; i >= 0; i--) {
        ds_delivery.removeRow(i);
      }
    }
    if (ds_work_pl.getRowStatus(ds_work_pl.getRowPosition()) == "C") {
      ds_work_pl.removeRow(ds_work_pl.getRowPosition());
    } else {
      ds_work_pl.undoRow(ds_work_pl.getRowPosition());
      gr_work_pl.setFocusedCell(ds_work_pl.getRowPosition(), "fixWrkPlCd");
    }
  } catch (e) {
    console.log("f_CancelClass : " + e);
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드삭제
//-------------------------------------------------------------------------
scwin.f_DelClass2 = function (e) {
  try {
    if (ds_delivery.getRowStatus(ds_delivery.getRowPosition()) == "C") {
      ds_delivery.removeRow(ds_delivery.getRowPosition());
    } else {
      let curPos = ds_delivery.getRowPosition();
      ds_delivery.deleteRow(curPos);
      gr_delivery.setFocusedCell(curPos, "lobranCd");
    }
  } catch (e) {
    console.log("f_DelClass2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 두번째 그리드취소
//-------------------------------------------------------------------------
scwin.f_CancelClass2 = function (e) {
  try {
    if (ds_delivery.getRowStatus(ds_delivery.getRowPosition()) == "C") {
      ds_delivery.removeRow(ds_delivery.getRowPosition());
    } else {
      ds_delivery.undoRow(ds_delivery.getRowPosition());
    }
  } catch (e) {
    console.log("f_CancelClass2 : " + e);
  }
};

//-------------------------------------------------------------------------
// 엑셀다운로드
//-------------------------------------------------------------------------
scwin.f_GridToExcel = function () {
  const options = {
    fileName: "정비작업장목록.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: "정비작업장목록" //엑셀내 시트명 지정필요시
    ,
    bodyWordwrap: true // 줄바꿈
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_work_pl, options, infoArr);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tb_wrk',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'사업부문 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',mandatory:'true',title:'사업부문',ref:'data:ds_re_pl.homeClsCd','ev:onchange':'scwin.lc_homeClsCd_onchange',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'xf:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_wrkPlCd',style:'width:200px;',submenuSize:'fixed',ref:'data:ds_re_pl.wrkPlCd',visibleRowNum:'15',chooseOptionLabel:'$blank',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:itemset',A:{nodeset:'data:ds_lux_wrkPlCd'},E:[{T:1,N:'xf:label',A:{ref:'name'}},{T:1,N:'xf:value',A:{ref:'code'}}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_Clear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'lybox  wfix',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'col',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'정비작업장 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridDownFn:'scwin.f_GridToExcel',gridID:'gr_work_pl'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_work_pl',focusMode:'cell',id:'gr_work_pl',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true',gridName:'정비작업장','ev:ontextimageclick':'scwin.gr_work_pl_ontextimageclick','ev:onrowindexchange':'scwin.gr_work_pl_onrowindexchange','ev:onafteredit':'scwin.gr_work_pl_onafteredit',resize:'true',columnMove:'true',dataName:'정비작업장',validFeatures:'ignoreStatus=no',validExp:'fixWrkPlCd:작업장코드:yes:length=3:key,fixWrkPlNm:작업장명:yes::key,repFixWrkPlCd:대표작업장코드:yes:length=3:key,acctDeptCd:귀속부서코드:yes:length=5:key,acctDeptNm:귀속부서명:yes::key','ev:onbeforeedit':'scwin.gr_work_pl_onbeforeedit',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',value:'소속코드',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',value:'작업장코드',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',value:'작업장명',width:'150',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',value:'대표<br/>작업장',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',value:'대표<br/>작업장명',width:'150',class:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',value:'귀속부서',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',value:'귀속부서명',width:'150'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column54',value:'적용공임',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column52',value:'작업장<br/>대표',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column50',value:'우편번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'column48',value:'주소1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column46',value:'주소2',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column44',value:'전화번호',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',value:'FAX번호',displayMode:'label',class:'txt-blue'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClsCd',inputType:'text',width:'100',hidden:'true',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',width:'120',textAlign:'center',sortable:'true',allowChar:'0-9',maxLength:'3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlNm',inputType:'text',width:'150',textAlign:'left',sortable:'true',maxByteLength:'30',maxLength:'30'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repFixWrkPlCd',inputType:'textImage',width:'120',textAlign:'center',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'repFixWrkPlNm',inputType:'text',width:'150',textAlign:'left',sortable:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'textImage',width:'120',textAlign:'center',sortable:'true',allowChar:'0-9',maxLength:'5',validateOnInput:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'150',textAlign:'left',sortable:'false',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'adptWages',displayMode:'label',textAlign:'right',sortable:'false',displayFormat:'#,##0',dataType:'number',maxLength:'13',allowChar:'0-9',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlRepstNm',displayMode:'label',textAlign:'left',sortable:'false',maxLength:'20',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'90',inputType:'textImage',id:'zip',displayMode:'label',textAlign:'center',sortable:'false',readOnly:'true',viewType:'icon'}},{T:1,N:'w2:column',A:{width:'250',inputType:'text',id:'addr1',displayMode:'label',textAlign:'left',sortable:'false',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'addr2',displayMode:'label',textAlign:'left',sortable:'false',maxByteLength:'20',maxLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'telNo',displayMode:'label',textAlign:'left',sortable:'false',maxLength:'20',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'faxNo',displayMode:'label',textAlign:'left',sortable:'false',maxByteLength:'20',maxLength:'20'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'udc_addDel1',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D',rowAddFunction:'scwin.f_WorkAddRow',rowDelFunction:'scwin.f_DelClass',cancelFunction:'scwin.f_CancelClass',id:'udc_addDel'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'col',id:'',style:'width: 300px;'},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'',style:'margin-top:32px;'},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_delivery',id:'gr_delivery',style:'',visibleRowNum:'16',visibleRowNumFix:'true',gridName:'배점점소 등록',readOnly:'true','ev:onafteredit':'scwin.gr_delivery_onafteredit','ev:onrowindexchange':'scwin.gr_delivery_onrowindexchange','ev:ontextimageclick':'scwin.gr_delivery_ontextimageclick',rowStatusVisible:'true',dataName:'배점점소 등록',validFeatures:'ignoreStatus=no',validExp:'lobranCd:배점소코드:yes::key',resize:'true',columnMove:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',style:'',value:'물류점소',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'점소명',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'작업장코드',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranCd',inputType:'textImage',style:'',value:'',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lobranNm',inputType:'text',style:'',value:'',width:'70',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fixWrkPlCd',inputType:'text',style:'',value:'',width:'70',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows2',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',style:'',btnCancelYn:'Y',id:'udc_addDel2',rowAddFunction:'scwin.f_CostAddRow',rowDelFunction:'scwin.f_DelClass2',cancelFunction:'scwin.f_CancelClass2',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save',userAuth:'U',objType:'bSave'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{btnId:'',codeId:'',id:'udc_comCodeGrid',nameId:'',popupID:'',selectID:'',style:'display:none'}}]}]}]})