/*amd /ui/ds/op/adjmbd/pchstrfmgnt/op_401_01_13b.xml 32462 271457dedabb6f999892aab752a90733f64bcd8c0be47589b19b401dad353139 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_emp2',repeatNode:'map',saveRemovedData:'true',style:''},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'clntPicNm',name:'거래처담당자명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtStDt',name:'계약시작일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtEndDt',name:'계약종료일자'}},{T:1,N:'w2:column',A:{dataType:'text',id:'taxnClsCd',name:'과세구분'}},{T:1,N:'w2:column',A:{dataType:'text',id:'rmk',name:'비고'}},{T:1,N:'w2:column',A:{dataType:'text',id:'mgntTrgtClntYn',name:'관리대상거래처여부'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNo',name:'사원번호'}},{T:1,N:'w2:column',A:{dataType:'text',id:'empNm',name:'사원명'}},{T:1,N:'w2:column',A:{dataType:'text',id:'allocRt',name:'배분율'}},{T:1,N:'w2:column',A:{dataType:'text',id:'ctrtDistrictCd',name:'계약권역코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'crcCd',name:'통화코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regBranCd',name:'등록점소코드'}},{T:1,N:'w2:column',A:{dataType:'text',id:'regBranNm',name:'등록점소명'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'clntNo',name:'거래처번호'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtNo',name:'계약번호'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_coship',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_coship_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'adptDt',name:'적용일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'ctrtNo',name:'계약번호',dataType:'text',defaultValue:'',length:'11'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text',defaultValue:'',length:'70'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업지코드',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업지명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'tpchsAdptUnit',name:'하불적용단위',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'tpchsAdptUnitNm',name:'하불적용단위명',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'coshippingPatternCd',name:'합적유형',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'coshippingPatternNm',name:'합적유형명',dataType:'text',defaultValue:'',length:'300'}},{T:1,N:'w2:column',A:{id:'wrkPlEchAddTrf',name:'작업장별추가요율',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'paletAdptAmt',name:'팔레트적용금액',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'paletUnAdptAmt',name:'팔레트미적용금액',dataType:'number',defaultValue:'0',length:'13'}},{T:1,N:'w2:column',A:{id:'minimumAdptYn',name:'Minimum적용여부',dataType:'text',defaultValue:'',length:'1'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_retrieve2',style:''},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{dataType:'text',id:'ctrtClntNo',name:'계약거래처번호'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.adjmbd.pchstrfmgnt.RetrieveCo_shippingPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_coship","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coship","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveCoship',action:'/ds.op.adjmbd.pchstrfmgnt.SaveCo_shippingPatternCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"action":"modified","id":"ds_coship","key":"IN_DS1"},{"id":"ds_coship","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_coship","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveCoship_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieve2',action:'/ds.sd.odrmgnt.odrreg.RetrieveBulkContractNumberCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_retrieve2","key":"IN_DS1"},{"id":"ds_emp2","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_emp2","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve2_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재년월일을 구한다.
scwin.flag = false;
scwin.eventCnt = 0;
//-------------------------------------------------------------------------
// 페이지로드
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const codeOptions = [{
    grpCd: "OP245",
    compID: "gr_coship:coshippingPatternCd",
    opt: {
      "range": "1"
    }
  },
  //합적유형 
  {
    grpCd: "LO102",
    compID: "gr_coship:tpchsAdptUnit",
    opt: {
      "range": "1"
    }
  } //하불적용단위
  ];
  $c.data.setCommonCode($p, codeOptions);
  ica_wrkStDt.setValue(scwin.strCurDate);
  gr_coship.setReadOnly("column", "adptDt", true);
  gr_coship.setReadOnly("column", "clntNm", true);
  gr_coship.setReadOnly("column", "wrkPlNm", true);
  gr_coship.setReadOnly("column", "tpchsAdptUnitNm", true);
  scwin.f_SetGridColumnMaxLength(gr_coship);

  //테스트 데이터
  // ds_search.set("clntNo", "100285");
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
  //조회
  ds_search.set("clntNo", ed_clntNo.getValue().trim()); //거래처코드
  ds_search.set("wrkPlCd", ed_con_wrkPlCd.getValue().trim()); //작업장코드
  ds_search.set("ctrtNo", lc_ctrtNo.getValue()); //계약번호

  $c.sbm.execute($p, sbm_retrieve);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  let ret = await $c.gus.cfValidate($p, [gr_coship]);
  if (ret) {
    if (lc_ctrtNo.getValue() == "" && ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
      $c.win.alert($p, "계약번호는 필수 입력 사항 입니다.");
      return;
    }
    if (lc_ctrtNo.getValue() == "선택") {
      $c.win.alert($p, "계약서를 선택해 주십시요.");
      return;
    }
    if (ds_coship.getModifiedIndex().length == 0) {
      $c.win.alert($p, "변경된 사항이 없습니다.");
    } else {
      ret = await $c.win.confirm($p, "저장하시겠습니까?");
      if (ret) {
        if (ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
          for (i = 0; i < ds_coship.getRowCount(); i++) {
            ds_coship.setCellData(i, "ctrtNo", lc_ctrtNo.getValue()); //계약번호
          }
        }
        $c.sbm.execute($p, sbm_saveCoship);
      }
    }
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let evNm = arguments[5] || "";
  if (evNm && $c.win.getEventList($p, gr_coship, evNm)) {
    scwin.eventCnt++;
  }
  $p.setTimeout(function () {
    scwin.eventCnt = 0;
  }, {
    delay: 1500
  });
  switch (disGubun) {
    case 1:
      //협력업체(물류매출)
      if (pCode == "clntNm") {
        //그리드 거래처명
        if (scwin.eventCnt == 1) {
          // TOBE : 그리드 공통 팝업 호출 전에 컬럼 값 지우기
          ds_coship.setCellData(ds_coship.getRowPosition(), "clntNo", "");
          ds_coship.setCellData(ds_coship.getRowPosition(), "clntNm", "");
          udc_comCode1.setSelectId("retrieveClntList"); // XML상의 SELECT ID
          udc_comCode1.cfCommonPopUp(scwin.udc_gr_clntNm_callBackFunc // 콜백 함수
          , "" // 화면에서의 ??? Code Element의 Value
          , pName // 화면에서의 ??? Name Element의 Value
          , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
          , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
          , null // Title순서
          , "150,170" // 보여주는 각 컬럼들의 폭
          , null // 컬럼중에서 숨기는 컬럼 지정
          , ",S" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
          , "440" // POP-UP뛰을때 원도우의 사용자 정의 폭
          , "500" // POP-UP뛰을때 우도우의 사용자 정의 높이
          , null // 윈도우 위치 Y좌표
          , null // 윈도우 위치 X좌표
          , null // 중복체크여부 ("F")
          , pAllSearch // 전체검색허용여부 ("F")
          , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
        }
      } else {
        udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // 콜백 함수
        , pCode // 화면에서의 ??? Code Element의 Value
        , pName // 화면에서의 ??? Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를 AutoClose 여부 (T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , "150,170" // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , ",S" // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , "440" // POP-UP뛰을때 원도우의 사용자 정의 폭
        , "500" // POP-UP뛰을때 우도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부 ("F")
        , pAllSearch // 전체검색허용여부 ("F")
        , "거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
      }
      break;
    case 2:
      // 팝업
      if (pCode == "wrkPlNm") {
        //그리드 작업지
        if (scwin.eventCnt == 1) {
          udc_comCode1.setSelectId("retrieveWrkPlInfo"); // XML상의 SELECT ID
          udc_comCode1.cfCommonPopUp(scwin.udc_gr_wrkPlNm_callBackFunc // 콜백 함수
          , "" // 화면에서의 ??? Code Element의 Value
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
          , pAllSearch // 전체검색허용여부 ("F")
          , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
          );
        }
      } else {
        udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc // 콜백 함수
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
        , pAllSearch // 전체검색허용여부 ("F")
        , "작업장,작업장코드,작업장명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
        );
      }
      break;
    default:
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
// 거래처 UDC START
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
  if (ret != null) {
    ds_retrieve2.setEmptyValue();
    ds_retrieve2.set("ctrtClntNo", ret[0]); //화주코드 bilgMchtCd

    $c.sbm.execute($p, sbm_retrieve2);
  }
};
//-------------------------------------------------------------------------
// 거래처 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 작업장 UDC START
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_con_wrkPlCd.getValue(), ed_con_wrkPlNm.getValue(), 'T', 'F');
};
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlCd, ed_con_wrkPlNm, 2);
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_con_wrkPlNm, ed_con_wrkPlCd, 2, false);
};
scwin.udc_wrkPlCd_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_con_wrkPlCd, ed_con_wrkPlNm);
};
//-------------------------------------------------------------------------
// 작업장 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회조건 데이터를 초기화 한다
//-------------------------------------------------------------------------
scwin.f_initData = function () {
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
  lc_ctrtNo.setSelectedIndex(-1);
  ed_con_wrkPlCd.setValue("");
  ed_con_wrkPlNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_coship.getRowCount());
};

//-------------------------------------------------------------------------
// 합적유형저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveCoship_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  $c.win.alert($p, "성공적으로 저장되었습니다.");
  if (ds_coship.getRowCount() > 0) {
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 계약서 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_retrieve2_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  ds_emp2.sort("ctrtNo", 1);
  lc_ctrtNo.setSelectedIndex(0);
};

//-------------------------------------------------------------------------
// 그리드 행추가 
//-------------------------------------------------------------------------
scwin.insertRow = function () {
  $c.data.insertRow($p, gr_coship);
  ds_coship.setCellData(ds_coship.getRowPosition(), "adptDt", ica_wrkStDt.getValue());
};

//-------------------------------------------------------------------------
// 데이터셋 onrowpositionchange(ASIS : OnRowPosChanged)
//-------------------------------------------------------------------------
scwin.ds_coship_onrowpositionchange = function (info) {
  if (ds_coship.getRowStatus(ds_coship.getRowPosition()) == "C") {
    gr_coship.setReadOnly("column", "clntNm", false);
    gr_coship.setReadOnly("column", "wrkPlNm", false);
    gr_coship.setReadOnly("column", "tpchsAdptUnitNm", false);
  } else {
    gr_coship.setReadOnly("column", "adptDt", true);
    gr_coship.setReadOnly("column", "clntNm", true);
    gr_coship.setReadOnly("column", "wrkPlNm", true);
    gr_coship.setReadOnly("column", "tpchsAdptUnitNm", true);
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업
//-------------------------------------------------------------------------
scwin.gr_coship_ontextimageclick = function (rowIndex, columnIndex) {
  let readOnlyYn = gr_coship.getReadOnly("column", columnIndex);
  if (readOnlyYn) return; // readOnly 팝업 열지 않기

  if (columnIndex == 3) {
    //clntNm
    scwin.f_openCommonPopUp(1, "clntNm", ds_coship.getCellData(rowIndex, "clntNm"), 'F', 'T', "ontextimageclick");
  } else if (columnIndex == 5) {
    //wrkPlNm
    scwin.f_openCommonPopUp(2, "wrkPlNm", ds_coship.getCellData(rowIndex, "wrkPlNm"), 'T', 'T', "ontextimageclick");
  }
};

//-------------------------------------------------------------------------
// 그리드 셀 편집 모드 종료 이벤트
//-------------------------------------------------------------------------
scwin.gr_coship_onafteredit = function (rowIndex, columnIndex, value) {
  if (columnIndex == 3) {
    //clntNm
    scwin.f_openCommonPopUp(1, "clntNm", ds_coship.getCellData(rowIndex, "clntNm"), 'F', 'T', 'onafteredit');
  } else if (columnIndex == 5) {
    //wrkPlNm
    scwin.f_openCommonPopUp(2, "wrkPlNm", ds_coship.getCellData(rowIndex, "wrkPlNm"), 'T', 'T', 'onafteredit');
  }
};

//-------------------------------------------------------------------------
// 그리드 거래처명 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_clntNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "clntNo", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "clntNm", ret[1]);
    }
  }
};

//-------------------------------------------------------------------------
// 그리드 거래처명 콜백
//-------------------------------------------------------------------------
scwin.udc_gr_wrkPlNm_callBackFunc = function (ret) {
  if (ret != null) {
    if (ret[0] != "N/A") {
      ds_coship.setCellData(ds_coship.getRowPosition(), "wrkPlCd", ret[0]);
      ds_coship.setCellData(ds_coship.getRowPosition(), "wrkPlNm", ret[1]);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'계약거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveClntListPopup',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',selectID:'retrieveClntList',maxlengthCode:'6',allowCharCode:'a-zA-Z0-9','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',refDataCollection:'ds_search',code:'clntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'계약서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:select1',A:{submenuSize:'auto',chooseOption:'',allOption:'',title:'계약서',mandatory:'true',displayMode:'label',ref:'data:ds_search.ctrtNo',appearance:'minimal',disabledClass:'w2selectbox_disabled',disabled:'false',style:'width: 150px;',id:'lc_ctrtNo',class:'form-control',direction:'auto',emptyItem:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'w2:gridViewItemset',A:{hideHeader:'true',rowMouseOver:'',nodeset:'data:ds_emp2',selectedRowColor:'',width:'550',autoFit:'',label:'ctrtNo',visibleRowNum:'',rowMouseOverColor:'',value:'ctrtNo',height:''},E:[{T:1,N:'w2:item',A:{ref:'ctrtNo',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'clntPicNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtStDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'ctrtEndDt',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'empNm',hidden:'',header:'',style:'',headerStyle:''}},{T:1,N:'w2:item',A:{ref:'rmk',hidden:'',header:'',style:'',headerStyle:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장 코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'retrieveWrkPlInfoPopup',style:'',btnId:'btn_wrkPlNm',id:'udc_wrkPlCd',codeId:'ed_con_wrkPlCd',nameId:'ed_con_wrkPlNm',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',refDataCollection:'ds_search',code:'wrkPlCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'적용일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_wrkStDt',style:'',objType:'Data',displayFormat:'yyyy/MM/dd',calendarDisplayFormat:'yyyy/MM/dd',title:'적용일자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_initData'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',grdDownOpts:'{"fileName":"합적유형등록.xlsx","sheetName":"합적유형등록","type":"4+8+16"}',gridID:'gr_coship',id:'udc_topGrdBtn',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_coship',id:'gr_coship',style:'',autoFit:'allColumn',visibleRowNum:'16',visibleRowNumFix:'true',rowStatusVisible:'true','ev:ontextimageclick':'scwin.gr_coship_ontextimageclick',gridName:'합적유형목록','ev:onafteredit':'scwin.gr_coship_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column32',value:'계약번호',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'적용일자',width:'100',class:'col-type1',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column34',value:'.',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'거래처명',width:'180',class:'col-type1',sortable:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column36',value:'.',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'작업지',width:'170',class:'col-type1',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'합적유형',width:'170',class:'col-type1',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'하불적용단위',width:'120',class:'col-type1',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'착지별추가요율',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'팔레트적용금액',width:'120',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'팔레트미적용금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'Minimum적용여부',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'ctrtNo',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'adptDt',inputType:'text',width:'100',mandatory:'true',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'clntNo',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'clntNm',inputType:'textImage',width:'180',textAlign:'left',mandatory:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'wrkPlCd',displayMode:'label',hidden:'true',readOnly:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlNm',inputType:'textImage',width:'170',textAlign:'left',mandatory:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'coshippingPatternCd',inputType:'select',width:'170',textAlign:'left',mandatory:'true',delimiter:':',readOnly:'false',chooseOption:'true',chooseOptionLabel:'$blank'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'value delim label',id:'tpchsAdptUnit',inputType:'select',width:'120',delimiter:':',textAlign:'left',readOnly:'false',chooseOption:'true',chooseOptionLabel:'$blank',mandatory:'true'},E:[{T:1,N:'w2:choices'}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkPlEchAddTrf',inputType:'text',width:'120',textAlign:'right',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'paletAdptAmt',inputType:'text',width:'120',textAlign:'right',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'paletUnAdptAmt',displayMode:'label',textAlign:'right',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'select',id:'minimumAdptYn',displayMode:'label',readOnly:'false',chooseOptionLabel:'$blank',chooseOption:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Y'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'N'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_coship',btnCancelYn:'Y',btnRowAddYn:'Y',btnRowDelYn:'Y',btnDelYn:'N',rowAddFunction:'scwin.insertRow',gridID:'gr_coship'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',label:'저장',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'a-zA-Z0-9',codeId:'',id:'udc_comCode1',nameId:'',popupID:'',style:'display:none'}}]}]}]}]}]})