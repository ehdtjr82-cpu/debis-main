/*amd /ui/ds/op/wrkrslts/transwrkrslts/op_304_05_04b.xml 28850 d67f70e7d2715f895557d953b1504ebda4c0ac5436686dacdc5fe1d287a8f34e */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_lobran',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'물류점소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranClsCd',name:'물류점소구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'upperLobranCd',name:'상위물류점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fixWrkPlCd',name:'정비작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'useYn',name:'사용여부',dataType:'number'}},{T:1,N:'w2:column',A:{id:'regId',name:'등록자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'등록일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modId',name:'수정자ID',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm',name:'수정일시',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_dataMap1'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'aa',name:'name1',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_lobran',action:'/ds.co.RetreiveLoBranCMD.do',method:'post',mediatype:'application/json',ref:'',target:'data:json,GAUCE',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_lobran_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = WebSquare.date.getCurrentServerDate("yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)
scwin.vQryEndDt = scwin.vCurDate.substring(0, 6) + new Date(scwin.vCurDate.substring(0, 4), scwin.vCurDate.substring(4, 6), 0).getDate(); // 조회종료일자(현재 날짜가 포함된 달의 마지막 일자)

scwin.hid_chkCvsslMgntNo = "";
scwin.hd_eqCd = "";
scwin.cvsslMgntNo = "";
scwin.onpageload = function () {
  let memJson = $c.data.getMemInfo($p);
  console.log(memJson);
  //scwin.loUpperLobranCd = memJson.loUpperLobranCd;
  //scwin.loUpperLobranNm = memJson.loUpperLobranNm;

  const codeOptions = [{
    grpCd: "OP154",
    compID: "lc_stvClsCd",
    opt: {
      "range": "1,S"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);
};
scwin.onUdcCompleted = function () {
  $p.setTimeout(function () {
    $c.gus.cfDisableKey($p);
    ica_FromDate.setValue(scwin.vQryStDt);
    ica_ToDate.setValue(scwin.vCurDate);
    lc_stvClsCd.setValue("");
    lc_stvClsCd.setSelectedIndex(0);
    scwin.f_stvClsSetting();
    $c.sbm.execute($p, sbm_lobran);
    lc_lobranCd.focus();
    chb_printCheck.setValue(1);
    chb_previewCheck.setValue(1);
  }, {
    "delay": 100
  });
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp2 = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pWhere = "";
  switch (disGubun) {
    case 1:
      // 본선관리번호	
      //  			pWhere = lc_odrKndCd.ValueOfIndex("fltrCd2", "I"); 	// 수출입구분코드 : SD060 - 수입(I), 수출(E)

      var arrParam = new Array(2);

      //본선관리번호
      /*
       
      rtnList = window.showModalDialog('./../../../op/wrkplan/stvwrkplan/op_204_01_07p.jsp?paramTitle=본선관리번호검색팝업'
                              ,arrParam
                              ,"dialogWidth:900px; dialogHeight:400px; status:No");
      */
      arrParam[0] = pCode;
      arrParam[1] = "";
      var win_url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1100;
      opts.height = 800;
      opts.popupName = '본선관리번호검색팝업';
      /*
                  var param = {
                      cvsslMgntNo : pCode
                  }
      */
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      console.log("rtnList : ", rtnList);

      //ed_cvsslMgntNo.setValue(rtnList[0]);

      if (rtnList != null) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_cvsslMgntNo, null, [scwin.hid_chkCvsslMgntNo]);
      } else {
        ed_cvsslMgntNo.setValue("");
        scwin.cvsslMgntNo = "";
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 중기호출에 따른 POPUP
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = async function (disGubun, pWinCloseTF) {
  // 선언부
  var sWinCloseTF = pWinCloseTF == null ? "T" : pWinCloseTF;
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 
  var pSelectID = "";
  var pCode = "";
  var pName = "";
  var pWtitleSearch = "";
  var arrParam = new Array();
  var pLobranCd = "";
  var pLobranNm = "";
  switch (disGubun) {
    case 1:
      // 중기 팝업	
      pCode = ed_eqCd.getValue().replace(/\s*$/, ''); // 중기코드
      pName = ed_eqNm.getValue(); // 중기명
      pDate = ica_FromDate.getValue(); // 작업일자

      arrParam[0] = ""; //assgnLobranCd점소코드
      arrParam[1] = ""; //eqKndCd중기종류
      arrParam[2] = ""; //clntCd거래처코드op_101_01_12p
      arrParam[3] = pDate; //usblDt작업계획일자
      arrParam[4] = pCode; //eqNo
      arrParam[5] = ""; //eqNm
      arrParam[6] = sWinCloseTF; //T,F구분
      arrParam[7] = 'T'; //T,F구분

      //rtnList = window.showModalDialog("/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.jsp", arrParam, "dialogHeight:430px; dialogWidth:600px; resizable=no; help:no; status:no; center=true; "); 	

      var win_url = "/ui/ds/op/rscconfirm/transrscconfirm/op_101_01_12p.xml";
      var opts = scwin.opts || {};
      opts.modal = true;
      opts.type = "browserPopup";
      opts.id = scwin.popupID || "pupup";
      opts.width = 1100;
      opts.height = 800;
      opts.popupName = '중기조회';
      /*
                  var param = {
                      cvsslMgntNo : pCode
                  }
      */
      rtnList = await $c.win.openPopup($p, win_url, opts, arrParam);
      console.log("rtnList : ", rtnList);
      if (rtnList != null && rtnList[0] != "" && rtnList[0] != "undefind" && rtnList.length > 0) {
        scwin.hd_eqCd = rtnList[12]; //중기코드
        ed_eqCd.setValue(rtnList[0]); //중기단축코드

        if (rtnList[1] == "undefind" || rtnList[1].trim() == null || rtnList[1].trim() == "") {
          ed_eqNm.setValue(rtnList[2]); //중기명
        } else {
          ed_eqNm.setValue(rtnList[1]); //중기번호
        }
      } else {
        scwin.hd_eqCd = ""; //중기코드
        ed_eqCd.setValue(""); //중기단축코드
        ed_eqNm.setValue(""); //중기명					
      }
      break;
  }
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp2 = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  /*
  if (!$c.gus.cfCanOpenPopup(inObj, pairObj))
      return;
  */
  // 짝이 되는 오브젝트의 값 제거
  //$c.gus.cfClearPairObj(pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) scwin.f_openCommonPopUp2(disGubun, pVal, '', 'T', 'T');
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp2(disGubun, '', pVal, 'T', 'T');
};

//-------------------------------------------------------------------------
// TEXT BOX 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopupText = function (inObj, codeObj, disGubun) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우
  if (inObj.getValue().trim() == "" /*|| inObj.readOnly*/) return;
  /*
      if (codeObj.tagName == "OBJECT") {
      	codeObj.Text = "";
      } else {
      	codeObj.value = "";
      }
  */
  scwin.f_openCommonPopUp(disGubun);
};

//-------------------------------------------------------------------------
// 각 Argument에 따른 PopUp을 호출 한다.
// 1:조회->수금부서
// code변수는 각 항목별 검색요청 값이다.
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  var rtnList = new Array();
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      udc_clntNo.cfCommonPopUp(scwin.callbackClntEmpNoList, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 거래처
      //scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    case '2':
      udc_workNo.cfCommonPopUp(scwin.callbackWrkPlInfo, cd, nm, "T", null, null, null, null, 'F', null, null, null, null); // 작업장
      //scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    case '3':
      udc_copCoClntNo.cfCommonPopUp(scwin.callbackClntEmpNoList2, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 거래처
      //scwin.f_resultPopUp(orgObjCd, orgObjNm,rtnList);
      break;
    default:
      $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};
scwin.callbackClntEmpNoList = function (rtnList) {
  console.log(rtnList);
  if (rtnList != "N/A") {
    scwin.f_resultPopUp(ed_clntNo, ed_clntNm, rtnList);
  } else {
    ed_clntNo.setValue("");
    ed_clntNm.setValue("");
  }
};
scwin.callbackClntEmpNoList2 = function (rtnList) {
  console.log(rtnList);
  if (rtnList != "N/A") {
    scwin.f_resultPopUp(ed_copCoClntNo, ed_copCoClntNm, rtnList);
  } else {
    ed_copCoClntNo.setValue("");
    ed_copCoClntNm.setValue("");
  }
};
scwin.callbackWrkPlInfo = function (rtnList) {
  if (rtnList != "N/A") {
    scwin.f_resultPopUp(ed_workNo, ed_workNm, rtnList);
  } else {
    ed_workNo.setValue("");
    ed_workNm.setValue("");
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag) {
  if (flag == "CD") {
    if (orgObjCd.getValue() == orgObjCd.hidVal) {
      return;
    } else {
      orgObjNm.setValue("");
    }
  } else {
    if (orgObjNm.getValue() == orgObjNm.hidVal) {
      return;
    } else {
      orgObjCd.setValue("");
    }
  }
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO");
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
    orgObjCd.hidVal = "";
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------

scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  if (rtnList != null) {
    if (rtnList[0] == "") {
      return;
    }
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
    /*
    orgObjCd.hidVal = rtnList[0];	// HIDDEN 코드값
    orgObjNm.hidVal = rtnList[1];	// HIDDEN 코드명
    */
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
    /*
    orgObjCd.hidVal = "";
    orgObjNm.hidVal = "";
    */
  }
};

//-------------------------------------------------------------------------
// 하역구분이 본선하역일 경우 본선관리번호 입력가능 , 그이외는 작업장 입력가능
//-------------------------------------------------------------------------
scwin.f_stvClsSetting = function () {
  if (lc_stvClsCd.getValue() == "P" || lc_stvClsCd.getValue() == "") {
    ed_workNo.setValue("");
    ed_workNm.setValue("");
    $c.gus.cfEnableObj($p, ed_workNo, false);
    $c.gus.cfEnableObj($p, ed_workNm, false);
    $c.gus.cfEnableObj($p, ed_cvsslMgntNo, true);
  } else {
    ed_cvsslMgntNo.setValue("");
    scwin.hd_eqCd = "";
    $c.gus.cfEnableObj($p, ed_cvsslMgntNo, false);
    $c.gus.cfEnableObj($p, ed_workNo, true);
    $c.gus.cfEnableObj($p, ed_workNm, true);
  }
};

//-------------------------------------------------------------------------
// 리포트 출력
//-------------------------------------------------------------------------
/*
scwin.f_Report = function () {

    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    var odiParam = new ODIParam("op_304_05_04");
    odiParam.add("lobranCd", lc_lobranCd.getValue());
    odiParam.add("fromDate", ica_FromDate.getValue().trim());
    odiParam.add("toDate", ica_ToDate.getValue().trim());
    odiParam.add("eqCd", scwin.hd_eqCd.trim());
    odiParam.add("cvsslMgntNo", ed_cvsslMgntNo.getValue().trim());
    odiParam.add("workNo", ed_workNo.getValue().trim());
    odiParam.add("clntNo", ed_clntNo.getValue().trim());
    odiParam.add("stvClsCd", lc_stvClsCd.getValue());
    odiParam.add("copCoClntNo", ed_copCoClntNo.getValue().trim());


    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam) 
    var formParam = new FormParam();
    //formParam.add("form1","폼1");
            
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    var viewerParam = new ViewerParam();
    //viewerParam.add("viewer.showtree","false");
    //viewerParam.add("viewer.useprogressbar","true");
    //viewerParam.add("viewer.zoom","100");
    $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/wrkrslts/transwrkrslts/op_304_05_04.ozr", odiParam, viewerParam, formParam);
}
*/

scwin.sbm_lobran_submitdone = function (e) {
  if (e.responseJSON.GAUCE) {
    ds_lobran.setJSON(e.responseJSON.GAUCE);
    //lc_lobranCd.setValue(scwin.loUpperLobranCd);
    /*
            var cnt = ds_lobran.getRowCount();
            if(cnt == 0){
                $c.win.alert("점소 자료 조회에 실패하였습니다");
                return;
            } else {
                lc_lobran.setValue(scwin.loUpperLobranCd);
                ed_lodeptCd.setValue(scwin.loUpperLobranCd);
                ed_lodeptNm.setValue(scwin.loUpperLobranNm);
                
            }
    */
  }
};
scwin.udc_clntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '1', 'NO');
};
scwin.udc_copCoClntNo_onviewchangeNameEvent = function (info) {
  scwin.f_openPopUp(ed_copCoClntNo, ed_copCoClntNm, '3', 'NO');
};
scwin.udc_eqCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, 'F');
};
scwin.udc_eqCd_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopupText(ed_eqNm, ed_eqCd, 1);
};
scwin.btn_cvsslMgntNo_onclick = function (e) {
  scwin.f_openCommonPopUp2(1, ed_cvsslMgntNo.getValue(), '', 'F', 'F');
};
scwin.udc_workNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_workNo, ed_workNm, '2', 'ALL');
};
scwin.btn_report_onclick = function (e) {
  scwin.f_Report();
};
scwin.udc_clntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntNo, ed_clntNm, '1', 'CD');
};
scwin.udc_clntNo_onblurNameEvent = function (e) {
  //scwin.f_CheckPopUp(ed_clntNo,ed_clntNm,'1','NM');
};
scwin.udc_copCoClntNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_copCoClntNo, ed_copCoClntNm, '3', 'CD');
};
scwin.udc_workNo_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_workNo, ed_workNm, '2', 'CD');
};
scwin.lc_stvClsCd_onviewchange = function (info) {
  scwin.f_stvClsSetting();
};
scwin.ed_cvsslMgntNo_onviewchange = function (info) {
  //scwin.f_chkOpenCommonPopUp2(ed_cvsslMgntNo, "", 1, true);
};
scwin.ed_cvsslMgntNo_onblur = function (e) {
  if (scwin.cvsslMgntNo != ed_cvsslMgntNo.getValue()) {
    scwin.cvsslMgntNo = ed_cvsslMgntNo.getValue();
    scwin.f_chkOpenCommonPopUp2(ed_cvsslMgntNo, "", 1, true);
  }
};
scwin.ed_cvsslMgntNo_onchange = function (info) {
  //scwin.f_chkOpenCommonPopUp2(ed_cvsslMgntNo, "", 1, true);
};
scwin.udc_clntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_clntNo, ed_clntNm, '1', 'ALL');
};
scwin.udc_copCoClntNo_onclickEvent = function (e) {
  scwin.f_openPopUp(ed_copCoClntNo, ed_copCoClntNm, '3', 'ALL');
};

//-------------------------------------------------------------------------
// CLP 발행2  //황창기
//-------------------------------------------------------------------------
scwin.f_Report = async function () {
  /*
  // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
  var odiParam = new ODIParam("op_304_05_04");
  odiParam.add("lobranCd", lc_lobranCd.getValue());
  odiParam.add("fromDate", ica_FromDate.getValue().trim());
  odiParam.add("toDate", ica_ToDate.getValue().trim());
  odiParam.add("eqCd", scwin.hd_eqCd.trim());
  odiParam.add("cvsslMgntNo", ed_cvsslMgntNo.getValue().trim());
  odiParam.add("workNo", ed_workNo.getValue().trim());
  odiParam.add("clntNo", ed_clntNo.getValue().trim());
  odiParam.add("stvClsCd", lc_stvClsCd.getValue());
  odiParam.add("copCoClntNo", ed_copCoClntNo.getValue().trim());
    // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam) 
  var formParam = new FormParam();
  //formParam.add("form1","폼1");
          
  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  //viewerParam.add("viewer.showtree","false");
  //viewerParam.add("viewer.useprogressbar","true");
  //viewerParam.add("viewer.zoom","100");
  $c.gus.cfOZReport("chb_printCheck", "chb_previewCheck", "/ds/op/wrkrslts/transwrkrslts/op_304_05_04.ozr", odiParam, viewerParam, formParam);
  */

  if (ica_FromDate.getValue() == null || ica_FromDate.getValue() == "") {
    await $c.win.alert($p, "기간 시작일을 입력해 주십시오.");
    ica_FromDate.focus();
    return;
  }
  if (ica_ToDate.getValue() == null || ica_ToDate.getValue() == "") {
    await $c.win.alert($p, "기간 종료일을 입력해 주십시오.");
    ica_ToDate.focus();
    return;
  }
  var ozMode = "";
  if (chb_printCheck.getValue() == "1" && chb_previewCheck.getValue() == "1") {
    // 인쇄옵션, 미리보기 둘다 체크된 경우
    ozMode = "preview";
  } else if (chb_printCheck.getValue() == "1") {
    // 인쇄옵션만 체크된 경우
    ozMode = "print";
  } else if (chb_previewCheck.getValue() == "1") {
    // 미리보기만 체크된 경우
    ozMode = "preview";
  }
  var data = {
    odiName: "op_304_05_04",
    reportName: "/ds/op/wrkrslts/transwrkrslts/op_304_05_04.ozr",
    odiParam: {
      lobranCd: lc_lobranCd.getValue(),
      fromDate: ica_FromDate.getValue().trim(),
      toDate: ica_ToDate.getValue().trim(),
      eqCd: scwin.hd_eqCd.trim(),
      cvsslMgntNo: ed_cvsslMgntNo.getValue().trim(),
      workNo: ed_workNo.getValue().trim(),
      clntNo: ed_clntNo.getValue().trim(),
      stvClsCd: lc_stvClsCd.getValue(),
      copCoClntNo: ed_copCoClntNo.getValue().trim()
    },
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      zoom: 90,
      // 배율 설정
      mode: ozMode
    },
    formParam: {}
  };
  scwin.openPopup(data);
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
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'tbbox'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:'width:120px;'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'점소',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_lobranCd',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',chooseOption:'true',chooseOptionLabel:'전체',allOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:ds_lobran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'기간',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_FromDate',edToId:'ica_ToDate',mandatoryFrom:'true',mandatoryTo:'true',objTypeBtn:'data',validChkYn:'Y'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'하역구분',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_stvClsCd',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',chooseOption:'true',chooseOptionLabel:'전체','ev:onviewchange':'scwin.lc_stvClsCd_onviewchange'}},{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'width:250px;',class:'',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clntNo',maxlengthCode:'6',UpperFlagCode:'1',maxlengthName:'50',allowCharCode:'0-9',btnId:'btn_clntNo',selectID:'retrieveClntEmpNoList','ev:onviewchangeNameEvent':'scwin.udc_clntNo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_clntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_clntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_clntNo_onclickEvent'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'협력업체',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'width:250px;',codeId:'ed_copCoClntNo',nameId:'ed_copCoClntNm',allowCharCode:'0-9',UpperFlagCode:'1',id:'udc_copCoClntNo',maxlengthName:'50',maxlengthCode:'6',btnId:'btn_copCoClntNo','ev:onviewchangeNameEvent':'scwin.udc_copCoClntNo_onviewchangeNameEvent','ev:onblurCodeEvent':'scwin.udc_copCoClntNo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_copCoClntNo_onclickEvent',selectID:'retrieveClntEmpNoList'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'장비번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'width:250px;',validExpCode:'장비번호:yes',nameId:'ed_eqNm',codeId:'ed_eqCd',id:'udc_eqCd',maxlengthCode:'6',btnId:'btn_eqCd','ev:onclickEvent':'scwin.udc_eqCd_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_eqCd_onviewchangeNameEvent',allowCharCode:'0-9,A-Z,a-z',UpperFlagCode:'1'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'sch-box ',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'form-control num',id:'ed_cvsslMgntNo',placeholder:'',style:'',maxlength:'8',allowChar:'0-9.A-Z,a-z',objType:'data',ref:'','ev:onkeyup':'scwin.onkeyup','ev:onblur':'scwin.ed_cvsslMgntNo_onblur'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr'},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'작업장',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'width:250px;',codeId:'ed_workNo',nameId:'ed_workNm',id:'udc_workNo',maxlengthName:'50',maxlengthCode:'4',btnId:'btn_workNo',selectID:'retrieveWrkPlInfo','ev:onclickEvent':'scwin.udc_workNo_onclickEvent','ev:onblurCodeEvent':'scwin.udc_workNo_onblurCodeEvent'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_printCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_previewCheck',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_report',label:'저장',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.btn_report_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'출력'}]}]}]}]}]}]}]}]}]})