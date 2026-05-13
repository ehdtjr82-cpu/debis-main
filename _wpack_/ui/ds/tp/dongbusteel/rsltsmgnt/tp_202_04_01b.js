/*amd /ui/ds/tp/dongbusteel/rsltsmgnt/tp_202_04_01b.xml 36659 a470e11632ba2a1b2c98c94bc29722f889b9b0935e4770c7724778ae7dd645c0 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'wrkDt',name:'배차일자1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDt2',name:'배차일자2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'협력업체',dataType:'text'}},{T:1,N:'w2:key',A:{id:'outNo',name:'운송번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition_detail'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'vbeln',name:'요청거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_condition_detail2',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'tknum',name:'선적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vbeln',name:'요청거래처',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'coCd',name:'회사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tknum',name:'선적번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vbeln',name:'File No(Sales Order No)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name1',name:'고객사명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name3',name:'운송회사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dalbg',name:'상차지시 일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'ualbg',name:'상차지시 시간',dataType:'text'}},{T:1,N:'w2:column',A:{id:'routeText',name:'경로 내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'name4',name:'고객명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsbedText',name:'출하조건 내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wareText',name:'창고 내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lfimgC',name:'지시중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'brgew',name:'중량 - Decimal(10)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zznumbr',name:'길이(매수)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'telInfo',name:'기사명+TEL',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outputYn',name:'출력여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outputQty',name:'출력매수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_reuslts_detail',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'zzarea1',name:'창고영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'charg',name:'배치번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wareText',name:'창고 내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zzsize',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zzpkmethod',name:'포장방법',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zzmaesu',name:'매수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lgmng',name:'재고유지단위로 납품된 실제수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vbelv',name:'판매 문서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zznece',name:'필수구분',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve',action:'/ncall.ds.tp.dongbusteel.rsltsmgnt.RetrieveDongbusteelLoadingReqCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Retrieve_Detail',action:'/ncall.ds.tp.dongbusteel.rsltsmgnt.RetrieveDongbusteelLoadingReqDetailCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition_detail","key":"IN_DS1"},{"id":"ds_reuslts_detail","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_reuslts_detail","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_Retrieve_Detail_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_Update_Print',action:'/ncall.ds.tp.dongbusteel.rsltsmgnt.UpdateDongbusteelLoadingReqCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_condition_detail2","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// 1. 지시일자 필수체크 추가 수정 요청(T-5784 정소희 책임)

scwin.clntNo = $c.data.getMemInfo($p, "clntNo");
scwin.clntNm = $c.data.getMemInfo($p, "clntNm");
scwin.strCurrDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //현재일자

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
// UDC Completed
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    //소스
    ed_dptIntendDd.setValue(scwin.strCurrDate);
    ed_dptIntendDd2.setValue(scwin.strCurrDate);
    ed_clntNo.setValue(scwin.clntNo);
    ed_clntNm.setValue(scwin.clntNm);
    if (scwin.clntNo == null) {
      scwin.clntNo_cond();
    }

    //테스트 데이터
    // ed_dptIntendDd.setValue("20200910"); //20151211
    // ed_dptIntendDd2.setValue("20200910"); //20151211
  }, {
    "delay": 50
  });
};

//-------------------------------------------------------------------------
// 거래처 초기화
//-------------------------------------------------------------------------
scwin.clntNo_cond = function () {
  ed_clntNo.setReadOnly(false);
  ed_clntNo.setValue("");
  ed_clntNm.setValue("");
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  let ret = await $c.gus.cfValidate($p, [tbl_retrieve]);
  if (!ret) {
    return;
  }
  if (!scwin.f_DifferBetweenDate2(ed_dptIntendDd.getValue(), ed_dptIntendDd2.getValue())) {
    $c.gus.cfAlertMsg($p, "시작일자가 종료일자 이전이어야 합니다.");
    return;
  }
  if (!scwin.f_DifferBetweenDate(ed_dptIntendDd.getValue(), ed_dptIntendDd2.getValue())) {
    $c.gus.cfAlertMsg($p, "최대 검색기간은 1달입니다.");
    return;
  }
  ds_reuslts_detail.setJSON([]); //재조회시 Detail Data Clear

  $c.sbm.execute($p, sbm_Retrieve);
};

//-------------------------------------------------------------------------
// 상차지시서 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.downloadExcel1 = function () {
  scwin.f_runExcel(gr_results, "상차지시서");
};

//-------------------------------------------------------------------------
// 상차지시서상세 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.downloadExcel2 = function () {
  scwin.f_runExcel(gr_reuslts_detail, "상차지시서상세");
};

//-------------------------------------------------------------------------
// 그리드 데이터 엑셀로 다운
//-------------------------------------------------------------------------
scwin.f_runExcel = async function (varGrNm, vTitle) {
  var totCnt = varGrNm.getTotalRow();
  var sheetTitle = vTitle;
  if (totCnt != 0) {
    let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
    if (cfrm) {
      const options = {
        fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
        ,
        sheetName: sheetTitle //엑셀내 시트명 지정필요시
      };
      const infoArr = [];
      $c.data.downloadGridViewExcel($p, varGrNm, options, infoArr);
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};

//-------------------------------------------------------------------------
// 조회조건 초기화
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_retrieve);
  ed_dptIntendDd.setValue(scwin.strCurrDate);
  ed_dptIntendDd2.setValue(scwin.strCurrDate);
};

//-------------------------------------------------------------------------
// gr_results 더블클릭시 detail 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve_Detail = function () {
  $c.sbm.execute($p, sbm_Retrieve_Detail);
};
scwin.f_Update_Output = async function () {
  ds_condition_detail2.setJSON([]);
  ds_condition_detail2.insertRow();
  ds_condition_detail2.setCellData(0, "vbeln", ds_results.getCellData(ds_results.getRowPosition(), "vbeln"));
  ds_condition_detail2.setCellData(0, "tknum", ds_results.getCellData(ds_results.getRowPosition(), "tknum"));
  await $c.sbm.execute($p, sbm_Update_Print);
};
scwin.f_Update_Output2 = async function (i) {
  ds_condition_detail2.setJSON([]);
  ds_condition_detail2.insertRow();
  ds_condition_detail2.setCellData(0, "vbeln", ds_results.getCellData(i, "vbeln"));
  ds_condition_detail2.setCellData(0, "tknum", ds_results.getCellData(i, "tknum"));
  await $c.sbm.execute($p, sbm_Update_Print);
};

//-------------------------------------------------------------------------
// 상차지시서 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = async function () {
  await scwin.f_Update_Output();
  var reportNm = "";
  if (ds_results.getCellData(ds_results.getRowPosition(), "coCd") == "2000") {
    reportNm = "/ds/tp/kovra/tp_201_01_01p.ozr";
  } else if (ds_results.getCellData(ds_results.getRowPosition(), "coCd") == "6000") {
    reportNm = "/ds/tp/kovra/tp_201_01_02p.ozr";
  } else if (ds_results.getCellData(ds_results.getRowPosition(), "coCd") == "3000") {
    reportNm = "/ds/tp/kovra/tp_202_01_01p.ozr";
  } else {
    return;
  }
  var data = {
    odiName: "tp_201_01_01p",
    reportName: reportNm,
    odiParam: {
      vbeln: ds_results.getCellData(ds_results.getRowPosition(), "vbeln"),
      tknum: ds_results.getCellData(ds_results.getRowPosition(), "tknum")
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 100 // 배율 설정
    },
    formParam: {}
  };
  scwin.openPopup(data);
};

//-------------------------------------------------------------------------
// 선택발행 버튼 클릭(PDF로 다운)
//-------------------------------------------------------------------------
scwin.f_OzReport2 = async function () {
  var reportNm = "";
  for (i = 0; i < ds_results.getRowCount(); i++) {
    if (ds_results.getCellData(i, "chk") == "T") {
      await scwin.f_Update_Output2(i);
      if (ds_results.getCellData(i, "coCd") == "2000") {
        reportNm = "/ds/tp/kovra/tp_201_01_01p.ozr";
      } else if (ds_results.getCellData(i, "coCd") == "6000") {
        reportNm = "/ds/tp/kovra/tp_201_01_02p.ozr";
      } else if (ds_results.getCellData(i, "coCd") == "3000") {
        reportNm = "/ds/tp/kovra/tp_202_01_01p.ozr";
      } else {
        return;
      }
      let data = {
        odiName: "tp_201_01_01p",
        reportName: reportNm,
        odiParam: {
          vbeln: ds_results.getCellData(i, "vbeln"),
          tknum: ds_results.getCellData(i, "tknum")
        },
        viewerParam: {
          useprogressbar: true,
          // 프로그레스바 쓸지 말지
          zoom: 100 // 배율 설정
        },
        formParam: {}
      };
      let opts = {
        filename: 'tp_201_01_01p_' + (i + 1),
        exportMode: 'view' // silent, view
      };
      await $c.ext.downloadOzReport($p, data, opts);
    }
  }
};

//-------------------------------------------------------------------------
// 오즈 리포트 팝업
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

//-------------------------------------------------------------------------
// 팝업
//------------------------------------------------------------------------- 
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // 협력업체 팝업
      udc_clntNo.setSelectId("retrieveClntInfo2_tpro"); // XML상의 SELECT ID
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
      , pAllSearch // 전체검색허용여부 ("F")
      , "계약 거래처,거래처코드/명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      // 차량번호 팝업            
      udc_vehclNo.setSelectId("retrieveVehiclesNo_tpro"); // XML상의 SELECT ID
      udc_vehclNo.cfCommonPopUp(scwin.udc_vehclNo_callBackFunc // 콜백 함수
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
      , "차량번호,차량번호,차량단축번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
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
// 날짜 차이 체크
//------------------------------------------------------------------------- 
scwin.f_DifferBetweenDate = function (sDateStr, eDateStr, dateFormat, row) {
  if ($c.date.diffDate($p, sDateStr, eDateStr) > 31) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 날짜 크기 체크
//------------------------------------------------------------------------- 
scwin.f_DifferBetweenDate2 = function (sDateStr, eDateStr, dateFormat, row) {
  sDateStr = sDateStr.trim();
  eDateStr = eDateStr.trim();

  // 종료일자가 시작일자 이후인지 확인
  if (sDateStr > eDateStr) {
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 그리드 : 필수 컬럼 displayFormatter
//-------------------------------------------------------------------------
scwin.zzneceExp = function (data) {
  //return $c.gus.decode(data, "1", "Y", "0", "N");
  let ret = $c.gus.decode($p, data, "1", "Y", "0", "N");
  if (ret == null) return "";else return ret;
};

//-------------------------------------------------------------------------
// 협력업체 UDC START
//-------------------------------------------------------------------------
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1, true);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};
//-------------------------------------------------------------------------
// 협력업체 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 차량번호 UDC START
//-------------------------------------------------------------------------
scwin.udc_vehclNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNo.getValue(), ed_vehclNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNo, ed_vehclNm, 3, true);
};
scwin.udc_vehclNo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_vehclNm, ed_vehclNo, 3, false);
};
scwin.udc_vehclNo_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_vehclNo, ed_vehclNm);
};
//-------------------------------------------------------------------------
// 차량번호 UDC END
//-------------------------------------------------------------------------

//-------------------------------------------------------------------------
// 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows.setValue(ds_results.getRowCount());
  if (ds_results.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    gr_results.setFocusedCell(0, "outputYn", false);
  }
};

//-------------------------------------------------------------------------
// 상세 조회 submitdone
//-------------------------------------------------------------------------
scwin.sbm_Retrieve_Detail_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  tbx_totalRows_detail.setValue(ds_reuslts_detail.getRowCount());
  if (ds_reuslts_detail.getRowCount() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  } else {
    gr_reuslts_detail.setFocusedCell(0, "zzarea1", false);
  }
};

//-------------------------------------------------------------------------
// 그리드 더블 클릭
// ASIS : gr_results event=OnDblClick(row,colid)
//-------------------------------------------------------------------------
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  ds_condition_detail.set("vbeln", ds_results.getCellData(rowIndex, "vbeln"));
  scwin.f_Retrieve_Detail();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',refDataCollection:'ds_condition',code:'clntNo',maxlengthCode:'6',allowCharCode:'0-9',codeId:'ed_clntNo',btnId:'btn_clntNo',id:'udc_clntNo',nameId:'ed_clntNm','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent',selectID:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'지시일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'wrkDt2',refStDt:'wrkDt',style:'',mandatoryFrom:'true',mandatoryTo:'true',edFromId:'ed_dptIntendDd',edToId:'ed_dptIntendDd2',titleFrom:'지시시작일자',titleTo:'지시종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',refDataCollection:'ds_condition',codeId:'ed_vehclNo',allowCharCode:'0-9',maxlengthCode:'6',nameId:'ed_vehclNm',btnId:'btn_vehclNo',id:'udc_vehclNo','ev:onclickEvent':'scwin.udc_vehclNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_vehclNo_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclNo_onviewchangeNameEvent',selectID:'',name:'vehclNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'운송번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_outNo',placeholder:'',style:'width:150px;',ref:'data:ds_condition.outNo',maxlength:'20',allowChar:'a-zA-Z0-9'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'상차지시서',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownUserAuth:'X',gridUpYn:'N',templateYn:'N',gridDownYn:'Y',gridDownFn:'scwin.downloadExcel1',gridID:'gr_results'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_results',style:'',id:'gr_results',visibleRowNum:'7',class:'wq_gvw',fixedColumn:'1',readOnly:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column1',value:'선택',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column17',value:'출력여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'출력매수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column13',value:'modId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column11',value:'오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'운송번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column3',value:'납품지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column5',value:'협력업체명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'기사명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',value:'운송회사',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column43',value:'상차지시일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column40',value:'착지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column31',value:'고객명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column34',value:'인도조건',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column37',value:'창고',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column55',value:'지시중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column49',value:'총중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column52',value:'매수(본수)합',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',readOnly:'false',trueValue:'T',falseValue:'F',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outputYn',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'outputQty',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'modId',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'tknum',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'vbeln',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'clntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'name1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'telInfo',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'name3',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'ualbg',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',ioFormat:'yyyyMMddHHmmss',dataType:'date'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'routeText',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'name4',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'vsbedText',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'wareText',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'lfimgC',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'brgew',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'zznumbr',displayMode:'label',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column30',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column28',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column27',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column24',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column22',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column45',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column42',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column33',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column36',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column39',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column57',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column51',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column54',displayMode:'label',textAlign:'right'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'tbx_totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'row-gap-8',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'상차지시서 상세',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_reuslts_detail',gridDownFn:'scwin.downloadExcel2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_reuslts_detail',id:'gr_reuslts_detail',style:'',visibleRowNum:'4',visibleRowNumFix:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'적재위치',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'제품번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'적재위치명/자재번호',width:'220'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SIZE',width:'200'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'포장방향',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'매수(본수)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'중량(KG)',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'주문번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'필수',width:'70'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'zzarea1',inputType:'text',width:'120',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'charg',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wareText',inputType:'text',width:'220',textAlign:'center'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zzsize',inputType:'text',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zzpkmethod',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zzmaesu',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lgmng',inputType:'text',width:'100',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vbelv',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zznece',inputType:'text',width:'70',displayFormatter:'scwin.zzneceExp'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows_detail',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'출도착 정보 입력 후 상차지시서 발행을 생활화 합니다.',class:'txt-dot txt-red'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_selOdr',style:'',type:'button','ev:onclick':'scwin.f_OzReport2',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'선택발행'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Odr',style:'',type:'button','ev:onclick':'scwin.f_OzReport',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]})