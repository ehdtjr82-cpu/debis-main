/*amd /ui/ja/dnja/workrslts/dnja_400_01_03b.xml 36555 8bd4b879010c85a61f91f48f5d35d6e809f165d0d5c749c1746122b9c9d40999 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'adptYm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vehclNoCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'pchsClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'slipNoYn',name:'name5',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'choice',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNm',name:'소속거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'소속거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'매니저코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'매니저명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'deductNoPchsAmt',name:'지급내역금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'deductPchsAmt',name:'공제내역금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'payAmt',name:'실지급액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bankNm',name:'은행명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bankAcntNo',name:'계좌번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dpstrNm',name:'예금주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSlipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclSlipDt',name:'작성일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_process',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'name4',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name5',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNm',name:'name6',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'name7',dataType:'number'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'name8',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'name9',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_oz',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'vehclNo',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClntNo',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsClntNo',name:'name3',dataType:'text'}},{T:1,N:'w2:column',A:{id:'adptYm',name:'name4',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ja.dnja.workrslts.RetrieveSalPrintCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ac.fm.paymgnt.paymgnt.ProcessTargetVehclSlipListJaCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ac.fm.paymgnt.paymgnt.DeleteTargetVehclSlipListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_process","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p);
scwin.strQryStDt = $c.date.getDateAddMonthDirection($p, scwin.strCurDate, 0, "F"); // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

// 세션정보
scwin.userId = $c.data.getMemInfo($p, "userId");

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  ica_ed_dtFrom.setValue(scwin.strQryStDt);
  ica_ed_slipDt.setValue(scwin.strCurDate);
  cbx_chk_slipNoYn.setValue('0'); //checked = false;
};

//-------------------------------------------------------------------------
// 조회조기 필드 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_portCondtionPart, null);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (ica_ed_dtFrom.getValue() == "") {
    await $c.win.alert($p, "년월은 필수조건 입니다.");
    ica_ed_dtFrom.focus();
    return false;
  }
  //tr_retrieve.post();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    let row = ds_out.getRowCount();
    totalRows.setValue(row);
    if (row > 0) {
      gr_out.setFocusedCell(0, 0);
      for (var i = 0; i < row; i++) {
        if (ds_out.getCellData(i, "realPayAmt")) {}
        ds_out.setCellData(i, "realPayAmt", 0);
      }
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    }
  }
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  if (ed_clntNo.getValue() == '') return;
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 1);
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  if (ed_clntNm.getValue() == '') return;
  scwin.f_chkOpenCommonPopUp(ed_clntNm, ed_clntNo, 1, false);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_clntNo.getValue(), ed_clntNm.getValue(), 'F', 'F');
};
scwin.udc_vehclNoCd_onblurCodeEvent = function (e) {
  if (ed_vehclNoCd.getValue() == '') return;
  scwin.f_chkOpenCommonPopUp(ed_vehclNoCd, ed_cond_vehclNo, 3);
};
scwin.udc_vehclNoCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUp(ed_cond_vehclNo, ed_vehclNoCd, 2, false);
};
scwin.udc_vehclNoCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_vehclNoCd.getValue(), ed_cond_vehclNo.getValue(), 'F', 'T');
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
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      //거래처
      udc_clntNo.setSelectId('retrieveSubsidaryClntListJa');
      udc_clntNo.cfCommonPopUp(scwin.udc_clntNo_callBackFunc // XML상의 SELECT ID
      , pCode // 화면에서의 ??? Code Element의	Value
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
      , "소속거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 3:
      udc_vehclNoCd.setSelectId('retrieveSubsidaryVehclList');
      udc_vehclNoCd.cfCommonPopUp(scwin.udc_vehclNoCd_callBackFunc // XML상의 SELECT ID  
      , pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부    (T:Close,F:Opened)
      , null // 검색 결과    컬럼의 보여주는    개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , null // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , "400" // POP-UP뛰을때 원도우의   사용자 정의  폭
      , null // POP-UP뛰을때 우도우의   사용자 정의  높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부   ("F")
      , pAllSearch // 전체검색허용여부 ("F")
      , "차량번호,차량단축코드,차량번호" // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};
scwin.udc_clntNo_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_clntNo, ed_clntNm);
  }
};
scwin.udc_vehclNoCd_callBackFunc = function (rtnList) {
  if (rtnList != null) {
    $c.gus.cfSetReturnValue($p, rtnList, ed_vehclNoCd, ed_cond_vehclNo);
  }
};

//-------------------------------------------------------------------------
// 발행 버튼 클릭 - 명세서 인쇄
//-------------------------------------------------------------------------
scwin.f_Print = async function (e) {
  var printCnt = 0;
  //$c.gus.OZStartBatch();

  //여기서 짝홀 나누기 해서 다른 ozr과 odi로 넘겨

  ds_oz.removeAll();
  var j = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "1") {
      //ds_oz.AddRow();
      ds_oz.insertRow();
      ds_oz.setCellData(j, "vehclNo", ds_out.getCellData(i, "vehclNo"));
      ds_oz.setCellData(j, "homeClntNo", ds_out.getCellData(i, "homeClntNo"));
      ds_oz.setCellData(j, "pchsClntNo", ds_out.getCellData(i, "pchsClntNo"));
      ds_oz.setCellData(j, "adptYm", ds_out.getCellData(i, "adptYm"));
      j++;
    }
  }
  //var userId = "<%=userId%>";
  var chkAdptYm = ds_oz.getCellData(0, "adptYm");
  var total = ds_oz.getRowCount();
  if (total == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_007, ["월급명세서"]);
    return;
  }
  var remain = total % 2; //나머지
  //var quotent = total / 2; 	//몫
  var lastTarget = "";
  if (remain == 0) {
    lastTarget = "";
  } else {
    lastTarget = total;
  }
  let odiName = "ja_400_01_03b_A";
  for (var i = 0; i < ds_oz.getRowCount(); i++) {
    if (i + 1 < total) {
      let ozReportId = '';
      if (chkAdptYm == '201706') {
        ozReportId = "/ja/dn/workrslts/ja_400_01_03b_A_6.ozr";
      } else {
        ozReportId = "/ja/dn/workrslts/ja_400_01_03b_A.ozr";
      }
      if (chb_previewCheck.getValue() == 1) {
        // 미리보기
        const data = {
          odiName: odiName,
          reportName: ozReportId,
          odiParam: {
            vehclNo: ds_oz.getCellData(i, "vehclNo"),
            homeClntNo: ds_oz.getCellData(i, "homeClntNo"),
            pchsClntNo: ds_oz.getCellData(i, "pchsClntNo"),
            adptYm: ds_oz.getCellData(i, "adptYm"),
            vehclNo2: ds_oz.getCellData(i + 1, "vehclNo"),
            homeClntNo2: ds_oz.getCellData(i + 1, "homeClntNo"),
            pchsClntNo2: ds_oz.getCellData(i + 1, "pchsClntNo"),
            adptYm2: ds_oz.getCellData(i + 1, "adptYm"),
            coCd: "022" //동원TLS
          },
          viewerParam: {
            useprogressbar: false,
            zoom: 100,
            mode: "silent"
          },
          formParam: {}
        };
        await scwin.openPopup(data);
      } else {
        // 다운로드
        const data = {
          odiName: odiName,
          reportName: ozReportId,
          odiParam: {
            vehclNo: ds_oz.getCellData(i, "vehclNo"),
            homeClntNo: ds_oz.getCellData(i, "homeClntNo"),
            pchsClntNo: ds_oz.getCellData(i, "pchsClntNo"),
            adptYm: ds_oz.getCellData(i, "adptYm"),
            vehclNo2: ds_oz.getCellData(i + 1, "vehclNo"),
            homeClntNo2: ds_oz.getCellData(i + 1, "homeClntNo"),
            pchsClntNo2: ds_oz.getCellData(i + 1, "pchsClntNo"),
            adptYm2: ds_oz.getCellData(i + 1, "adptYm"),
            coCd: "022" //동원TLS
          },
          viewerParam: {
            useprogressbar: false,
            zoom: 100,
            mode: "silent"
          },
          formParam: {
            "odiName": odiName
          }
        };
        var opts = {};
        await $c.ext.printOzReport($p, data, opts);
      }
      i++;
    }
    if (i + 1 == total && i + 1 == lastTarget) {
      let ozReportId = '';
      if (chkAdptYm == '201706') {
        ozReportId = "/ja/dn/workrslts/ja_400_01_03b_B_6.ozr";
      } else {
        ozReportId = "/ja/dn/workrslts/ja_400_01_03b_B.ozr";
      }
      if (chb_previewCheck.getValue() == 1) {
        // 미리보기
        const data = {
          odiName: odiName,
          reportName: ozReportId,
          odiParam: {
            vehclNo: ds_oz.getCellData(i, "vehclNo"),
            homeClntNo: ds_oz.getCellData(i, "homeClntNo"),
            pchsClntNo: ds_oz.getCellData(i, "pchsClntNo"),
            adptYm: ds_oz.getCellData(i, "adptYm"),
            coCd: "022" //동원TLS
          },
          viewerParam: {
            useprogressbar: false,
            zoom: 100,
            mode: "silent"
          },
          formParam: {}
        };
        await scwin.openPopup(data);
      } else {
        const data = {
          odiName: odiName,
          reportName: ozReportId,
          odiParam: {
            vehclNo: ds_oz.getCellData(i, "vehclNo"),
            homeClntNo: ds_oz.getCellData(i, "homeClntNo"),
            pchsClntNo: ds_oz.getCellData(i, "pchsClntNo"),
            adptYm: ds_oz.getCellData(i, "adptYm"),
            coCd: "022" //동원TLS
          },
          viewerParam: {
            useprogressbar: false,
            zoom: 100,
            mode: "silent"
          },
          formParam: {
            "odiName": odiName
          }
        };
        var opts = {};
        await $c.ext.printOzReport($p, data, opts);
      }
    }
  }

  //$c.gus.OZExecuteBatch();
};
scwin.openPopup = async function (data) {
  let opts = {
    id: "ozReportPopup_",
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
// 전표일자 일괄적용
//-------------------------------------------------------------------------
scwin.btn_adaptSlipDt_onclick = async function (e) {
  var chkCnt = 0;
  var stPos = ds_out.getRowPosition();
  var slipDt = ica_ed_slipDt.getValue();
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == 1) {
      ds_out.setCellData(i, "vehclSlipDt", slipDt);
      chkCnt++;
    }
  }
  if (chkCnt == 0) {
    await $c.win.alert($p, "선택된 행이 없습니다. 일괄적용할 행들을 선택해 주십시오.");
    return false;
  }
};

//-------------------------------------------------------------------------
// 전표삭제
//-------------------------------------------------------------------------
scwin.f_Delete = async function (e) {
  /*
      if(ds_out.IsUpdated == false) {
          $c.win.alert(MSG_CM_ERR_001.replace("@","자료"));
          return false;
      }
  */
  ds_process.removeAll();
  let confirm = await $c.win.confirm($p, "전표를 삭제 하시겠습니까?");
  if (!confirm) {
    return false;
  }
  var j = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == 1) {
      //전표번호가 없는건은 삭제 할 수 없다.
      if (ds_out.getCellData(i, "vehclSlipNo") == "") {
        await $c.win.alert($p, i + 1 + "번째 건은 삭제 할 수 없습니다..\n\n미발생 전표 삭제 불가!");
        return false;
      }
      scwin.f_setDataSet(i, j);
      j++;
    }
  }
  if (j == 0) {
    await $c.win.alert($p, "선택된건이 없습니다.");
    return false;
  }

  //dataSetDebug(ds_process, true);
  //tr_delete.post();
  $c.sbm.execute($p, sbm_delete);
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 전표생성
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  /*
      if(ds_out.IsUpdated == false) {
          $c.win.alert(MSG_CM_ERR_001.replace("@","자료"));
          return false;
      }
  */
  ds_process.removeAll();
  let confirm = await $c.win.confirm($p, "전표생성 하시겠습니까?");
  if (!confirm) return false;
  var j = 0;
  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, "choice") == "1") {
      //이미 전표생성된 건은 처리 못한다.
      if (ds_out.getCellData(i, "vehclSlipNo") != "") {
        await $c.win.alert($p, i + 1 + "번째 건은 이미 전표생성 되었습니다.\n\n중복생성 불가!");
        return false;
      }

      //전표날짜 세팅이 안된건은 처리 못한다.
      if (ds_out.getCellData(i, "slipDt") == "" || $c.gus.cfIsNull($p, ds_out.getCellData(i, "vehclSlipDt"))) {
        await $c.win.alert($p, i + 1 + "번째 건은 작성일자가 없습니다.");
        return false;
      }

      //실지급액이 마이너스인 건은 처리 못한다.
      if (ds_out.getCellData(i, "payAmt") < 0) {
        await $c.win.alert($p, i + 1 + "번째 건은 실지급액이 마이너스입니다.\n\n전표생성 불가!");
        return false;
      }
      scwin.f_setDataSet(i, j);
      j++;
    }
  }
  if (j == 0) {
    await $c.win.alert($p, "선택된건이 없습니다.");
    return false;
  }

  //dataSetDebug(ds_out, true);
  //dataSetDebug(ds_process, true);

  //tr_save.post();
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
    scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// Save or Del DataSet Setting
//-------------------------------------------------------------------------
scwin.f_setDataSet = function (row, col) {
  ds_process.insertRow();
  ds_process.setCellData(col, "slipNo", ds_out.getCellData(row, "vehclSlipNo")); //전표번호
  ds_process.setCellData(col, "clntNo", ds_out.getCellData(row, "homeClntNo")); //소속거래처코드
  ds_process.setCellData(col, "clntNm", ds_out.getCellData(row, "homeClntNm")); //소속거래처명
  ds_process.setCellData(col, "vehclNo", ds_out.getCellData(row, "vehclNo")); //차량번호
  ds_process.setCellData(col, "pchsClntNo", ds_out.getCellData(row, "pchsClntNo")); //매니저코드
  ds_process.setCellData(col, "pchsClntNm", ds_out.getCellData(row, "pchsClntNm")); //매니저명
  ds_process.setCellData(col, "amt", ds_out.getCellData(row, "payAmt")); //실지급액
  ds_process.setCellData(col, "slipDt", ds_out.getCellData(row, "vehclSlipDt")); //작성일자
  ds_process.setCellData(col, "adptYm", ds_out.getCellData(row, "adptYm")); //년월
};

/* 그리드 클릭시 차량번호가 동일하면 멀티 셀렉트 */
scwin.gr_out_oncellclick = function (rowIndex, columnIndex, columnId) {
  var tempVehclNo = ds_out.getCellData(rowIndex, 'vehclNo');
  var sIndex = 0;
  var eIndex = 0;
  var flag = false;
  //ds_out.ClearAllMark();

  for (var i = 0; i < ds_out.getRowCount(); i++) {
    if (ds_out.getCellData(i, 'vehclNo') == tempVehclNo && flag == false) {
      flag = true;
      bIndex = i;
    }
    if (ds_out.getCellData(i, 'vehclNo') != tempVehclNo && flag == true) {
      flag = false;
      eIndex = i - 1;
      //ds_out.MarkRows(bIndex, eIndex);
    }
  }
  if (rowIndex == ds_out.getRowCount() - 1) {
    //ds_out.MarkRows(rowIndex, rowIndex);
  }

  // 전표 번호 없으면 작성일자 수정 가능
  var slipNo = ds_out.getCellData(rowIndex, "vehclSlipNo");
  if (slipNo == null || slipNo == "") {
    // 전표번호 없으면 → 해당 셀만 수정 가능
    gr_out.setReadOnly("cell", rowIndex, "vehclSlipDt", false);
  } else {
    // 전표번호 있으면 → 수정 불가
    gr_out.setReadOnly("cell", rowIndex, "vehclSlipDt", true);
  }
  let Colid = gr_out.getColumnID(columnIndex);
  if (Colid == "vehclSlipNo") {
    if (!(ds_out.getCellData(rowIndex, "vehclSlipNo") == null || ds_out.getCellData(rowIndex, "vehclSlipNo") == "")) {
      $c.gus.cfShowSlipInfo($p, ds_out.getCellData(rowIndex, "vehclSlipNo"));
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_portCondtionPart',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'년월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_ed_dtFrom',pickerType:'dynamic',style:'',ref:'data:dma_condition.adptYm'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'전표번호',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_slipNo',allowChar:'0-9',maxlength:'10',placeholder:'',style:'width:150px;',ref:'data:dma_condition.slipNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'소속거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',maxlengthCode:'6',allowCharCode:'0-9',style:'',codeId:'ed_clntNo',nameId:'ed_clntNm',btnId:'btn_clntNo',id:'udc_clntNo',refDataCollection:'dma_condition',code:'pchsClntNo','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'차량번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',maxlengthCode:'4',allowCharCode:'0-9',codeId:'ed_vehclNoCd',btnId:'btn_vehclNoCd',id:'udc_vehclNoCd',nameId:'ed_cond_vehclNo',refDataCollection:'dma_condition',name:'vehclNoCd','ev:onblurCodeEvent':'scwin.udc_vehclNoCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_vehclNoCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_vehclNoCd_onviewchangeNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_chk_slipNoYn',ref:'data:dma_condition.slipNoYn',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' 차량별 급여명세 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridDownUserAuth:'X',grdDownOpts:'{"fileName" : "차량별 급여명세 현황.xlsx", "sheetName" : "차량별 급여명세 현황" }',gridID:'gr_out',btnUser:'Y',gridUpYn:'N'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',fixedColumnNoMove:'true',rowStatusVisible:'true',readOnly:'true',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',fixedColumn:'6','ev:oncellclick':'scwin.gr_out_oncellclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'column55',value:'',displayMode:'label',colSpan:'',rowSpan:'2',checkboxLabel:'선택'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column1',inputType:'text',rowSpan:'2',style:'',value:'소속거래처',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column59',value:'소속거래처번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column17',inputType:'text',rowSpan:'2',style:'',value:'차량번호',width:'120'}},{T:1,N:'w2:column',A:{colSpan:'2',displayMode:'label',id:'column15',inputType:'text',rowSpan:'',style:'',value:'매니저',width:'140',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'1',displayMode:'label',id:'column11',inputType:'text',rowSpan:'',style:'',value:'지급내역',width:'210',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'1',displayMode:'label',id:'column5',inputType:'text',rowSpan:'',style:'',value:'공제내역',width:'210',sortable:'false'}},{T:1,N:'w2:column',A:{colSpan:'',displayMode:'label',id:'column40',inputType:'text',rowSpan:'2',style:'',value:'실지급액',width:'100'}},{T:1,N:'w2:column',A:{colSpan:'3',displayMode:'label',id:'column31',inputType:'text',rowSpan:'',style:'',value:'계좌정보',width:'210',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'년월',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column67',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column63',value:'작성일자',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}}]},{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column54',inputType:'text',style:'',value:'코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column53',inputType:'text',style:'',value:'명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column51',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column48',inputType:'text',style:'',value:'금액',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column45',inputType:'text',style:'',value:'은행명',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column44',inputType:'text',style:'',value:'계좌번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column43',inputType:'text',style:'',value:'예금주',width:'100'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'checkbox',style:'',id:'choice',value:'',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'homeClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'homeClntNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNo',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pchsClntNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductNoPchsAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'deductPchsAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'payAmt',inputType:'text',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bankAcntNo',inputType:'text',style:'',textAlign:'left',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dpstrNm',inputType:'text',style:'',textAlign:'left',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'adptYm',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclSlipNo',value:'',displayMode:'label',class:'underline',style:'color:#0000FF;'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',style:'',id:'vehclSlipDt',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{id:'footer1',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'text',style:'',value:'합계',width:'140'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column62',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column29',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column27',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column25',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum(\'deductNoPchsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum(\'deductPchsAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column42',inputType:'expression',style:'',textAlign:'right',value:'',width:'100',dataType:'number',displayFormat:'#,##0',expression:'sum(\'payAmt\')'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column33',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column39',inputType:'text',style:'',value:'',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column74',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작성일자',ref:'',style:'',userData2:''}},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonthDate',class:'',id:'ica_ed_slipDt',pickerType:'dynamic',style:''}},{T:1,N:'xf:trigger',A:{style:'',id:'btn_adaptSlipDt',label:'저장',type:'button',class:'btn ',userAuth:'U','ev:onclick':'scwin.btn_adaptSlipDt_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일자일괄적용'}]}]}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_delete',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.f_Delete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'전표삭제'}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_save',label:'저장',type:'button',class:'btn white','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:3,text:'일괄생성'}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'chb_previewCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',label:'저장',type:'button',class:'btn ',userauth:'P','ev:onclick':'scwin.f_Print'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]}]}]}]}]})