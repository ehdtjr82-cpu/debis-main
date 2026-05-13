/*amd /ui/ps/tr/expropmgnt/oilingmgnt/tr_270_06_06b.xml 57784 ddd67be961840fec6efb22a93aa5cfe7f007e06df1ff91a5e8be85ea266c2013 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MonthEachSpotsale',saveRemovedData:'true','ev:onbeforerowpositionchange':'scwin.ds_MonthEachSpotsale_onbeforerowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipYn',name:'check',dataType:'text'}},{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAggrSeq',name:'출고집계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'직매주유소',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'직매주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingPurpsCd',name:'주유용도',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'주유량(L)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'주유금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'zzzz',name:'합계',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totQty',name:'총주유량(L)',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총주유금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totVat',name:'총부가세',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd2',name:'소속구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNoCnt',name:'주유소별건수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNoRow',name:'주유소별행수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAcctDeptCd',name:'부가세귀속부서',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_OilOutContentsQry'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClsCd',name:'주유소구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'oilStatClntCd',name:'주유소거래처코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_MonthEachSpotsaleSlip',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'stdYm',name:'기준년월',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAggrSeq',name:'순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNo',name:'주유소거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatNm',name:'주유소명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilingPurpsCd',name:'주유용도코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outQty',name:'출고수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'outAmt',name:'출고금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crn',name:'사업자번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'homeClsCd',name:'소속구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNoCnt',name:'주유소별 Count',dataType:'text'}},{T:1,N:'w2:column',A:{id:'oilStatClntNoRow',name:'주유소별 SEQ',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vatAcctDeptCd',name:'부가세귀속부서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'name17',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'name18',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_AdminList',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'grpCd',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cd',name:'name2',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cdNm',name:'name3',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_OilOutContentsQry',action:'/ps.tr.expropmgnt.oilingmgnt.RetrieveMonthEachSpotsaleOilStationOilingContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_OilOutContentsQry","key":"IN_DS1"}, {"id":"ds_MonthEachSpotsale","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_MonthEachSpotsale","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_OilOutContentsQry_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveMonthEachSpotsale',action:'/ps.tr.expropmgnt.oilingmgnt.UpdateMonthEachSpotsaleOilStationValueAddedTaxCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_MonthEachSpotsale","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_saveMonthEachSpotsale_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_CreateMonthEachSpotsale',action:'/ps.tr.expropmgnt.oilingmgnt.CreateSpotsaleOilStationPurchaseSlipCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_MonthEachSpotsaleSlip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_CreateMonthEachSpotsale_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_CancelMonthEachSpotsale',action:'/ps.tr.expropmgnt.oilingmgnt.CancelSpotsaleOilStationPurchaseSlipCreationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_MonthEachSpotsaleSlip","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_CancelMonthEachSpotsale_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_AdminList',action:'',method:'post',mediatype:'application/json',ref:'',target:'data:json,{"id":"ds_AdminList","key":"GAUCE"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_AdminList_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.memJson = $c.data.getMemInfo($p);
scwin.userId = scwin.memJson.userId;
scwin.userNm = scwin.memJson.userNm;
scwin.wrkDate = $c.date.getServerDateTime($p, "yyyyMM");
scwin.vatAcctDeptCd = scwin.memJson.acctDeptCd;
scwin.vatAcctDeptNm = scwin.memJson.acctDeptNm;
scwin.empNo = scwin.memJson.empNo;
scwin.empNm = scwin.memJson.empNm;
scwin.cls = '';

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

// UDC에 값 세팅 방법
// UDC값 초기화(scwin.onpageload 이후 세팅됨)
scwin.onUdcCompleted = function () {
  console.log("----------- onUdcCompleted");
  scwin.f_AdminAuth(); // 행추가 버튼 권한

  //조회 조건 초기화
  $c.gus.cfInitObjects($p, [ed_acctDeptCd, txt_acctDeptNm]);

  //cfDisableObjects([txt_acctDeptNm]); //귀속부서명  비활성화 시킴
  $c.gus.cfDisableObjects($p, [ed_acctDeptCd, txt_acctDeptNm]);
  btn_Sav1.setDisabled(true);
  btn_Sav2.setDisabled(true);
  btn_Sav3.setDisabled(true);
  em_stdYm.setValue(scwin.wrkDate);
  lc_homeClsCd.setValue("LO");
  em_stdYm.focus();
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  if (em_stdYm.getValue().trim().length != 6) {
    $c.win.alert($p, "기준년월은 필수입력 입니다.");
    em_stdYm.focus();
    return;
  }
  var homeClsCd = "";
  homeClsCd = lc_homeClsCd.getValue();
  if (homeClsCd.length == 0) {
    $c.win.alert($p, "소속구분은 필수입력 입니다.");
    lc_homeClsCd.focus();
    return;
  }
  ds_OilOutContentsQry.setEmptyValue();
  // ds_OilOutContentsQry.AddRow();
  ds_OilOutContentsQry.set("stdYm", em_stdYm.getValue());
  ds_OilOutContentsQry.set("homeClsCd", lc_homeClsCd.getValue());
  ds_OilOutContentsQry.set("oilStatClsCd", "03"); // 직매주유소
  ds_OilOutContentsQry.set("oilStatClntCd", lc_oilStatClntNo.getValue());
  $c.sbm.execute($p, sbm_OilOutContentsQry);
};

//-------------------------------------------------------------------------
// 금액, 수량, 부가세 유효성 검사
//-------------------------------------------------------------------------
scwin.f_getsum = function (oilStat, get) {
  var sum = 0;
  var obj = oilStat;
  var figure = get;
  var valueSum;
  for (var i = 0; i < ds_MonthEachSpotsale.getTotalRow(); i++) {
    if (ds_MonthEachSpotsale.getCellData(i, "oilStatClntNo") == obj && ds_MonthEachSpotsale.getRowStatusValue(i) != 4 && ds_MonthEachSpotsale.getRowStatusValue(i) != 2) {
      sum += parseInt(ds_MonthEachSpotsale.getCellData(i, figure));
    }
  }
  return sum;
};

// 전표생성 버튼 클릭 이벤트
scwin.btn_Sav1_onclick = function (e) {
  scwin.f_Save(1);
};

// 전표취소 버튼 클릭 이벤트
scwin.btn_Sav2_onclick = function (e) {
  scwin.f_Save(2);
};

// 저장 버튼 클릭 이벤트
scwin.btn_Sav3_onclick = function (e) {
  scwin.f_Save(3);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_Save = async function (cls) {
  scwin.cls = cls;
  var clsstr = "";
  var pathstr = "";
  var outQty = 0;
  var outAmt = 0;
  var vatAmt = 0;
  var totQty = 0;
  var totAmt = 0;
  var totVat = 0;
  let inputVal;
  let rowCount = ds_MonthEachSpotsale.getTotalRow();
  for (var i = 0; i < rowCount; i++) {
    if (ds_MonthEachSpotsale.getRowStatusValue(i) != 4) {
      totQty = ds_MonthEachSpotsale.getCellData(i, "totQty");
      totAmt = ds_MonthEachSpotsale.getCellData(i, "totAmt");
      totVat = ds_MonthEachSpotsale.getCellData(i, "totVat");
      inputVal = ds_MonthEachSpotsale.getCellData(i, "oilStatClntNo");
      outQty = scwin.f_getsum(inputVal, "outQty");
      outAmt = scwin.f_getsum(inputVal, "outAmt");
      vatAmt = scwin.f_getsum(inputVal, "vatAmt");
      if (totQty != outQty) {
        $c.win.alert($p, i + "행의 변경한 주유량의 합계(" + outQty + ")와 해당 주유소의 총 주유량(" + totQty + ")이 일치하지 않습니다.");
        // gr_MonthEachSpotsale.setColumn("outQty"); // to-do
        return;
      }
      if (totAmt != outAmt) {
        $c.win.alert($p, i + "행의 변경한 주유금액의 합계(" + outAmt + ")와 해당 주유소의 총 주유량(" + totAmt + ")이 일치하지 않습니다.");
        // gr_MonthEachSpotsale.setColumn("outAmt");// to-do
        return;
      }
      if (totVat != vatAmt) {
        $c.win.alert($p, i + "행의 변경한 부가세의 합계(" + vatAmt + ")와 해당 주유소의 총 부가세(" + totVat + ")가 일치하지 않습니다.");
        // gr_MonthEachSpotsale.setColumn("vatAmt");// to-do
        return;
      }
    }
  }
  if (ds_MonthEachSpotsale.getTotalRow() == 0) {
    $c.win.alert($p, "조회된 자료가 없습니다. 조회 후 선택하세요.");
    return;
  }
  if (cls == 3) {
    // 저장
    if (!ds_MonthEachSpotsale.getModifiedIndex().length) {
      $c.win.alert($p, "변경된 자료가 없습니다.");
      return;
    }
    if (!$c.gus.cfValidate($p, [gr_MonthEachSpotsale])) return;
    let messageSave = "저장하시겠습니까?";
    $c.win.confirm($p, messageSave, "scwin.saveCallback");
    return;
  }
  if (cls == 1) {
    clsstr = "전표생성";
  } else if (cls == 2) {
    clsstr = "전표취소";
  }
  let boolVal = scwin.f_ValidCheck(cls);
  if (boolVal) {
    const messageStr = "선택한 주유소에 대해 " + clsstr + " 하시겠습니까?";
    await $c.win.confirm($p, messageStr, "scwin.processCallback");
  }
};
scwin.saveCallback = async function (e) {
  if (e.clickValue) {
    await $c.sbm.execute($p, sbm_saveMonthEachSpotsale);
    scwin.f_Retrieve();
  }
};
scwin.processCallback = async function (e) {
  if (e.clickValue) {
    let submitObj = {};
    if (scwin.cls == 1) {
      scwin.vatAcctDeptCd = ed_acctDeptCd.getValue();
      scwin.vatAcctDeptNm = txt_acctDeptNm.getValue();
      submitObj = sbm_CreateMonthEachSpotsale;
    } else if (scwin.cls == 2) {
      submitObj = sbm_CancelMonthEachSpotsale;
    }
    await $c.sbm.execute($p, submitObj);
    // await scwin.f_Retrieve();
  }
};

//-------------------------------------------------------------------------
// 그리드 선택사항 체크 (cls 1:생성,2:취소 )
//-------------------------------------------------------------------------    
scwin.f_ValidCheck = function (cls) {
  var slipYn = 0;
  var slipTot = 0;
  var slipNo = "";
  var rowStatus = "";
  var vatAcctDeptCd = "";
  ds_MonthEachSpotsaleSlip.removeAll();
  let inserData = [];
  const rowCnt = ds_MonthEachSpotsale.getTotalRow();

  // 선택행 값 체크
  for (var i = 0; i < rowCnt; i++) {
    slipYn = ds_MonthEachSpotsale.getCellData(i, "slipYn");
    rowStatus = ds_MonthEachSpotsale.getRowStatusValue(i);
    if (slipYn == 1) {
      if (rowStatus != 4) {
        if (cls == 1) {
          vatAcctDeptCd = ed_acctDeptCd.getValue().trim();
          if (vatAcctDeptCd == "") {
            $c.win.alert($p, "전표생성시 부가세 귀속부서는 필수 입력사항입니다.");
            return;
          }
        }
        slipNo = ds_MonthEachSpotsale.getCellData(i, "slipNo");
        if (slipNo.length > 0 && cls == 1) {
          // 전표번호와 버튼명 체크1
          $c.win.alert($p, i + 1 + "번째 행은 이미 전표생성하였습니다. 전표생성하지 않은 주유소만 생성하실 수 있습니다.");
          return false;
        }
        if (slipNo.length == 0 && cls == 2) {
          // 전표번호와 버튼명 체크2
          $c.win.alert($p, i + 1 + "번째 행은 아직 전표생성하지 않았습니다. 전표생성한 주유소만 취소하실 수 있습니다.");
          return false;
        }
        slipTot += 1;
        const rowData = ds_MonthEachSpotsale.getRowJSON(i);
        inserData.push({
          "stdYm": rowData["stdYm"],
          "outAggrSeq": rowData["outAggrSeq"],
          "oilStatClntNo": rowData["oilStatClntNo"],
          "oilStatNm": rowData["oilStatNm"],
          "acctDeptCd": rowData["acctDeptCd"],
          "acctDeptNm": rowData["acctDeptNm"],
          "outQty": rowData["outQty"],
          "outAmt": rowData["outAmt"],
          "vatAmt": rowData["vatAmt"],
          "slipNo": rowData["slipNo"],
          "crn": rowData["crn"],
          "homeClsCd": rowData["homeClsCd"],
          "vatAcctDeptCd": ed_acctDeptCd.getValue(),
          "oilStatClntNoRow": rowData["oilStatClntNoRow"],
          "oilStatClntNoCnt": rowData["oilStatClntNoCnt"],
          "oilingPurpsCd": rowData["oilingPurpsCd"],
          "acctCd": rowData["acctCd"],
          "acctNm": rowData["acctNm"]
        });

        // ds_MonthEachSpotsaleSlip.UseChangeInfo = 0;
      }
    }
  }
  ds_MonthEachSpotsaleSlip.setJSON(inserData);
  if (slipTot == 0) {
    // 선택한 행수 체크
    $c.win.alert($p, "선택하신 자료가 없습니다. 주유소를 선택하십시요");
    return false;
  }
  return true;
};

// 귀속부서 돋보기 클릭 이벤트
scwin.udc_dept_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_acctDeptCd.getValue(), txt_acctDeptNm.getValue(), "F", "T");
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      //귀속부서 팝업
      rtnList = udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc // XML상의 SELECT ID	
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
      , "귀속부서,귀속코드,부서명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
  }
};

// 귀속부서 콜백 함수
scwin.udc_dept_callBackFunc = function (rtnList) {
  //귀속부서코드		귀속부서명
  $c.gus.cfSetReturnValue($p, rtnList, ed_acctDeptCd, txt_acctDeptNm);
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
// Popup
//-------------------------------------------------------------------------
scwin.f_ofcPopUp - function (em_name, popbool) {
  var tmpofcnm = $p.getComponentById(em_name + "Nm").text;
  var tmpcd = "";
  if (popbool == "T") {
    tmpcd = $p.getComponentById(em_name + "Cd").text;
  }
  var firstList = cfCommonPopUp('retrieveAcctDeptCdInfo', tmpcd, "", popbool, 2, null, null, null, null, null); // 귀속부서조회
  if (firstList != null) {
    if (firstList[0] == "N/A") {
      $p.getComponentById(em_name + "Cd").Text = "";
      $p.getComponentById(em_name + "Nm").Text = "";
    }
    $p.getComponentById(em_name + "Cd").Text = firstList[0]; // 귀속부서코드
    $p.getComponentById(em_name + "Nm").Text = firstList[1]; // 귀속부서명
  } else {
    $p.getComponentById(em_name + "Cd").Text = "";
    $p.getComponentById(em_name + "Nm").Text = "";
  }
};

//-------------------------------------------------------------------------
// 부가세 수정가능 여부 처리
//-------------------------------------------------------------------------
scwin.f_control = function (row, colid) {
  var slipYn = "";
  slipYn = ds_MonthEachSpotsale.getCellData(row, "slipNo");
  if (slipYn == null || slipYn == "") {
    gr_MonthEachSpotsale.setCellReadOnly(row, "outAmt", false);
    gr_MonthEachSpotsale.setCellReadOnly(row, "outQty", false);
    gr_MonthEachSpotsale.setCellReadOnly(row, "vatAmt", false);
    gr_MonthEachSpotsale.setCellReadOnly(row, "acctDeptCd", false);
  } else {
    gr_MonthEachSpotsale.setCellReadOnly(row, "outAmt", true);
    gr_MonthEachSpotsale.setCellReadOnly(row, "outQty", true);
    gr_MonthEachSpotsale.setCellReadOnly(row, "vatAmt", true);
    gr_MonthEachSpotsale.setCellReadOnly(row, "acctDeptCd", true);
  }
};

//-------------------------------------------------------------------------
//  회계전표발행 
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  var param = "";
  if (ds_MonthEachSpotsale.getCellData(ds_MonthEachSpotsale.rowPosition, "slipNo") != "") {
    param = param + "," + ds_MonthEachSpotsale.getCellData(ds_MonthEachSpotsale.rowPosition, "slipNo");
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, Array("데이타"));
    return;
  }
  var odiParam = new ODIParam("fi_201_04_02p");
  odiParam.add("slipNo", param.substring(1));
  // 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  var formParam = new FormParam();

  // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  var viewerParam = new ViewerParam();
  viewerParam.add("viewer.zoom", "100");
  viewerParam.add("viewer.useprogressbar", "true"); //PROGRESSBAR 안보이게....

  $c.gus.cfOZPreview($p, "/ac/fi/gnrlaccount/slipmgnt/fi_201_04_02p.ozr", odiParam, viewerParam, formParam);
};

//-------------------------------------------------------------------------
// 휴지통 처리
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tb_retrieve, null);
  em_stdYm.focus();
};

//-------------------------------------------------------------------------
// 엑셀 출력
//-------------------------------------------------------------------------
scwin.f_Excel = function () {
  var count = ds_MonthEachSpotsale.getTotalRow();
  if (!(count > 0)) return;

  // gr_MonthEachSpotsale.SetExcelTitle(0, ""); // SetExcelTitle 공통에 없는 메소드
  // gr_MonthEachSpotsale.SetExcelTitle(1, "value:직매주유소 매입전표;"
  //     + "font-face:'돋움체';"
  //     + "font-size:12pt;"
  //     + "font-color:black;"
  //     + "bgcolor:#ffffff;"
  //     + "align:center;"
  //     + "line-color:white;"
  //     + "line-width:0pt;"
  //     + "skiprow:1;");
  // scwin.f_setqrynm("기준년월", $c.gus.cfGetFormatStr(em_stdYm.Text, "####/##"));
  // scwin.f_setqrynm("소속", lc_homeClsCd.getValue());
  // scwin.f_setqrynm("직매주유소", lc_oilStatClntNo.getValue());
  // $c.gus.cfGridToExcel(gr_MonthEachSpotsale, "직매주유소 매입전표", "직매주유소 매입전표.xls", 4 + 8 + 16);

  const grdObj = gr_MonthEachSpotsale;
  const infoArr = [];
  const options = {
    fileName: "직매주유소 매입전표.xlsx",
    //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    sheetName: "직매주유소 매입전표"
  };
  $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
};
scwin.f_setqrynm = function (tname, str) {
  // var vSearchOption = ";font-face:굴림체;font-size:10pt;font-color:black;bgcolor:#ffffff;align: left;line-color:red;line-width:0pt;";
  // gr_MonthEachSpotsale.SetExcelTitle(1, "value:" + tname + " [" + str + "]" + vSearchOption);
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  let row = ds_MonthEachSpotsale.rowPosition;
  if (ds_MonthEachSpotsale.getCellData(ds_MonthEachSpotsale.rowPosition, "slipNo") != "") {
    $c.win.alert($p, "전표가 생성된 행에 대해서는 행추가 할 수 없습니다.");
    return;
  }
  ds_MonthEachSpotsale.insertRow(row + 1);
  ds_MonthEachSpotsale.setCellData(row, "stdYm", ds_MonthEachSpotsale.getCellData(row - 1, "stdYm"));
  ds_MonthEachSpotsale.setCellData(row, "oilStatClntNo", ds_MonthEachSpotsale.getCellData(row - 1, "oilStatClntNo"));
  ds_MonthEachSpotsale.setCellData(row, "oilStatNm", ds_MonthEachSpotsale.getCellData(row - 1, "oilStatNm"));
  ds_MonthEachSpotsale.setCellData(row, "homeClsCd", ds_MonthEachSpotsale.getCellData(row - 1, "homeClsCd"));
  ds_MonthEachSpotsale.setCellData(row, "inAggrSeq", ds_MonthEachSpotsale.getCellData(row - 1, "inAggrSeq"));
  ds_MonthEachSpotsale.setCellData(row, "oilCoClntNo", ds_MonthEachSpotsale.getCellData(row - 1, "oilCoClntNo"));
  ds_MonthEachSpotsale.setCellData(row, "oilingPurpsCd", ds_MonthEachSpotsale.getCellData(row - 1, "oilingPurpsCd"));
  ds_MonthEachSpotsale.setCellData(row, "totQty", ds_MonthEachSpotsale.getCellData(row - 1, "totQty"));
  ds_MonthEachSpotsale.setCellData(row, "totAmt", ds_MonthEachSpotsale.getCellData(row - 1, "totAmt"));
  ds_MonthEachSpotsale.setCellData(row, "totVat", ds_MonthEachSpotsale.getCellData(row - 1, "totVat"));
  ds_MonthEachSpotsale.setCellData(row, "acctCd", ds_MonthEachSpotsale.getCellData(row - 1, "acctCd"));
  ds_MonthEachSpotsale.setCellData(row, "acctNm", ds_MonthEachSpotsale.getCellData(row - 1, "acctNm"));
};

//-------------------------------------------------------------------------
// 그리드항목코드팝업
//-------------------------------------------------------------------------
scwin.f_openPopUp = function (row, colid, sFlag) {
  var rtnList = new Array();
  var param = "";
  switch (colid) {
    case "acctDeptCd":
      rtnList = udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, ds_MonthEachSpotsale.getCellData(row, colid), '', sFlag, null, null, null, null, null, null, null, "T", "귀속부서조회,부서코드,귀속부서");
      if (rtnList != null) {
        if (rtnList[0] == "N/A") return;
        ds_MonthEachSpotsale.setCellData(row, "acctDeptCd", rtnList[0]);
        ds_MonthEachSpotsale.setCellData(row, "acctDeptNm", rtnList[1]);
      } else {
        ds_MonthEachSpotsale.setCellData(row, "acctDeptCd", "");
        ds_MonthEachSpotsale.setCellData(row, "acctDeptNm", "");
      }
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 메일발송 버튼 권한 관리 
//-------------------------------------------------------------------------
scwin.f_AdminAuth = function () {
  debugger;

  // ds_AdminList.SyncLoad = true;
  // ds_AdminList.DataID = "/cm.zz.RetrieveCodeCMD.do?grpCd=TR060&cd=&cdNm=";

  sbm_AdminList.action = "/cm.zz.RetrieveCodeCMD.do?grpCd=TR060&cd=&cdNm=";
  $c.sbm.execute($p, sbm_AdminList);
};
scwin.sbm_AdminList_submitdone = function (e) {
  debugger;
  var admin = "";
  var adminCnt = 0;
  for (var i = 0; i < ds_AdminList.getTotalRow(); i++) {
    admin = ds_AdminList.getCellData(i, "cd");
    if (scwin.empNo == admin) {
      adminCnt++;
    }
  }
  if (adminCnt > 0) {
    $c.gus.cfEnableObjects($p, [btn_cont1, btn_cont2, btn_cont3]);
  } else {
    $c.gus.cfDisableObjects($p, [btn_cont1, btn_cont2, btn_cont3]);
  }
};

// <!-- 저장 TR -->    
scwin.sbm_saveMonthEachSpotsale_submitdone = function (e) {
  $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
};

// <!-- 전표생성 TR -->   
scwin.sbm_CreateMonthEachSpotsale_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == -1) {
    scwin.f_Retrieve();
    return;
  }
  scwin.f_Retrieve();
  $c.gus.cfAlertMsg($p, MSG_CM_INF_012, ["직매주유소 매입전표"]); // 성공적으로 생성하였습니다.
};

// <!-- 전표취소 TR -->  
scwin.sbm_CancelMonthEachSpotsale_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code != "-1") {
    scwin.f_Retrieve();
    $c.win.alert($p, "직매주유소 매입전표를 취소하였습니다.");
  }
};

// for=ds_MonthEachSpotsale event=OnLoadCompleted(rowCnt)
scwin.sbm_OilOutContentsQry_submitdone = function (e) {
  var res = e.responseJSON ? e.responseJSON : JSON.parse(e.responseText);
  ds_MonthEachSpotsale.removeAll();

  // OUT_DS1 배열을 DataList에 적재
  ds_MonthEachSpotsale.setJSON(res.OUT_DS1);
  let rowCnt = gr_MonthEachSpotsale.getTotalRow();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    btn_Sav1.setDisabled(true);
    btn_Sav2.setDisabled(true);
    btn_Sav3.setDisabled(true);
    $c.gus.cfDisableObjects($p, [ed_acctDeptCd, txt_acctDeptNm]);
    $c.win.alert($p, MSG_CM_WRN_002);
  } else {
    btn_Sav1.setDisabled(false);
    btn_Sav2.setDisabled(false);
    btn_Sav3.setDisabled(false);
    $c.gus.cfEnableObjects($p, [ed_acctDeptCd]);
  }
  // gr_MonthEachSpotsale.ColumnProp('slipYn', 'HeadCheck') = "false";
  scwin.wrkDate = em_stdYm.getValue();
  gr_MonthEachSpotsale.setColumnStyle("slipNo", "color", "blue"); // 전표번호 색상 파란색
  gr_MonthEachSpotsale.setColumnStyle("slipNo", "text-decoration", "underline"); // 전표번호 underline
};

// for=gr_MonthEachSpotsale event=OnClick(row,colid)
scwin.gr_MonthEachSpotsale_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.f_control(rowIndex, columnId);
  if (columnId == "slipNo" && ds_MonthEachSpotsale.getCellData(rowIndex, "slipNo") != "") {
    $c.gus.cfShowSlipInfo($p, ds_MonthEachSpotsale.getCellData(rowIndex, "slipNo"));
  } else if (columnId == "slipYn") {
    var chkYn = "";
    var newChkYn = "";
    var oilStatClntNo = "";
    chkYn = ds_MonthEachSpotsale.getCellData(rowIndex, "slipYn");
    oilStatClntNo = ds_MonthEachSpotsale.getCellData(rowIndex, "oilStatClntNo");
    if (chkYn == 1) {
      newChkYn = 1;
    } else {
      newChkYn = 0;
    }
    for (var k = 0; k < ds_MonthEachSpotsale.getTotalRow(); k++) {
      if (oilStatClntNo == ds_MonthEachSpotsale.getCellData(k, "oilStatClntNo")) {
        ds_MonthEachSpotsale.setCellData(k, "slipYn", newChkYn);
      }
    }
  }
};

// onbeforerowpositionchange(info)

// for=ds_MonthEachSpotsale event=CanRowPosChange(row)
// to-do 여기서 결함 나오는거 같은데?
scwin.ds_MonthEachSpotsale_onbeforerowpositionchange = function (info) {
  if (ds_MonthEachSpotsale.getCellData(info.newRowIndex, ds_MonthEachSpotsale.getColumnIndex("vatAmt")) == 0) {
    // 소계에 있는 vatAmt에 값이 비어있다고 판단하여 조건을 더 추가하였음.
    if (ds_MonthEachSpotsale.getCellData(info.newRowIndex, ds_MonthEachSpotsale.getColumnIndex("oilStatNm")) != "") {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_013, ['부가세', 1]);
      // OrgNameValue << 확인 필요.
      ds_MonthEachSpotsale.setCellData(info.newRowIndex, "vatAmt", ds_MonthEachSpotsale.getCellData(info.newRowIndex, "vatAmt"));
      gr_MonthEachSpotsale.focus();
      return false;
    }
  } else {
    return true;
  }
};

// for=gr_MonthEachSpotsale event=OnHeadCheckClick(Col,Colid,bCheck)
scwin.gr_MonthEachSpotsale_onheaderclick = function (headerId) {
  if (headerId == "chk_header") {
    let headerVal = gr_MonthEachSpotsale.getHeaderValue(headerId);
    var cr = ds_MonthEachSpotsale.getTotalRow();
    if (headerVal == "1") {
      if (cr > 0) {
        for (var i = 0; i < cr; i++) {
          ds_MonthEachSpotsale.setCellData(i, "slipYn", "1");
        }
      }
    } else {
      if (cr > 0) {
        for (var i = 0; i < cr; i++) {
          ds_MonthEachSpotsale.setCellData(i, "slipYn", "0");
        }
      }
    }
  }
};

// for=gr_MonthEachSpotsale event=OnColumnPosChanged(Row,Colid)
scwin.gr_MonthEachSpotsale_onaftercolumnmove = function (info) {
  switch (info.columnId) {
    case "acctDeptCd":
      gr_MonthEachSpotsale.UrlImages = SEARCH_BTN;
      break;
  }
};
scwin.gr_MonthEachSpotsale_popup = function () {
  let colid = ds_MonthEachSpotsale.getCellData(ds_MonthEachSpotsale.rowPosition, "acctDeptCd");
  if (colid == "acctDeptCd") {
    scwin.f_openPopUp(row, colid, "T");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_retrieve',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준 년/월',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'em_stdYm',style:'',mandatory:'true',validExp:'기준년/월:yes'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'소속구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_homeClsCd',style:'width: 100px;',submenuSize:'fixed',ref:'',displayMode:'label',validExp:'소속구분:yes'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'LO'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'직매주유소명 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_oilStatClntNo',style:'width: 200px;',submenuSize:'fixed',ref:'',displayMode:'value delim label',visibleRowNum:'20'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(주)신동주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'124712'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(주)의왕ICD'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'124715'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동구타이어유류㈜해안주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'124722'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인항주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'124726'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'sk네트웍스만수주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'125115'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'광신석유(주)직영여천주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'125116'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(주)삼양주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'132616'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(주)오케이코리아'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'240549'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(유)현대공단주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'250020'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동구타이어유류(주)해안주유소(전남)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'262878'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'세방(주)매일주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'277781'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'주식회사 의왕ICD(직매)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'283760'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인천주유소(영업)_씨제이대한통운(주)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'324911'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'아포IC주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'518715'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'금당주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'533101'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'상록주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'534736'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'(주)유정주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'539242'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'동해사랑주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'547378'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'경마장주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'558881'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'대경주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'570554'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'제철도촌주유소(고영숙)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'586605'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'3공단주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'587127'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'형제주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'599560'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'용정에너지'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'621198'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'이희선_세경해운주유소'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'642900'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'김정순_용마주유소(진해)'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'649160'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'직매주유소 매입전표생성 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnPlusYn:'Y',gridID:'gr_MonthEachSpotsale',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_MonthEachSpotsale',focusMode:'row',id:'gr_MonthEachSpotsale',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'13',visibleRowNumFix:'true',readOnly:'true','ev:oncellclick':'scwin.gr_MonthEachSpotsale_oncellclick','ev:onheaderclick':'scwin.gr_MonthEachSpotsale_onheaderclick','ev:onaftercolumnmove':'scwin.gr_MonthEachSpotsale_onaftercolumnmove',columnMove:'false',autoFit:'allColumn',autoFitMinWidth:'2000'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk_header',inputType:'checkbox',style:'',value:'',width:'50',colSpan:'',rowSpan:'2',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'기준년월',width:'100',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'출고집계순번',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'직매주유소</br>거래처명',width:'120',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'직매주유소명',width:'200',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column74',value:'소속</br>구분',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column70',value:'부서</br>코드',displayMode:'label',colSpan:'',rowSpan:'2',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column66',value:'귀속부서',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column62',value:'주유</br>용도',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'370',inputType:'text',style:'',id:'column58',value:'세부내역',displayMode:'label',colSpan:'4',rowSpan:''}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'주유소별 합계',width:'340',colSpan:'3',rowSpan:''}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'전표번호',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column94',value:'계정코드',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column90',value:'계정명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column78',value:'사업자번호',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column82',value:'소속구분코드',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column86',value:'주유소별건수',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column110',value:'주유소별행수',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column114',value:'부가세귀속부서',displayMode:'label',colSpan:'',rowSpan:'2',hidden:'true'}}]},{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column59',value:'주유량(L)',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column52',value:'주유금액',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'부가세',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column50',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column49',value:'총주유량(L)',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column107',value:'총주유금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column103',value:'총부가세',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'slipYn',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',readOnly:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'stdYm',inputType:'text',style:'',value:'',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAggrSeq',inputType:'text',style:'',value:'',width:'120',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatClntNo',inputType:'text',style:'',value:'',width:'120',dataType:'number',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'oilStatNm',inputType:'text',style:'',value:'',width:'200'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'homeClsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'물류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'LO'}]}]}]}]},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'acctDeptCd',value:'',displayMode:'label',imageClickFunction:'scwin.gr_MonthEachSpotsale_popup',readOnly:'false',validExp:'acctDeptCd:귀속부서:yes'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',style:'',id:'oilingPurpsCd',value:'',displayMode:'label',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'운행'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'01'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'세척'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'02'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비난방'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'03'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'지점난방'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'04'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'중기용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'05'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정비비'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'06'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'봉고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'07'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수하물'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'08'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'안전관리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'09'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'업무용'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'10'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'기타항목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'11'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'outQty',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'outAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'100',textAlign:'right',dataType:'number',displayFormat:'#,###',validExp:'vatAmt:부가세:no:number&minNumber=1'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'zzzz',inputType:'expression',style:'',value:'',width:'70',textAlign:'right',dataType:'number',displayFormat:'#,###',expression:'Number(display(\'outAmt\'))+Number(display(\'vatAmt\'))'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totQty',inputType:'text',style:'',value:'',width:'120',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'totAmt',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'totVat',value:'',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'crn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'homeClsCd2',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'oilStatClntNoCnt',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'oilStatClntNoRow',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'vatAcctDeptCd',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'oilStatNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row7'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',style:'',id:'column141',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column140',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column139',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column138',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column137',value:'소계',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column136',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column135',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column134',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column133',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column132',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum("outQty")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column131',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum("outAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column130',value:'',displayMode:'label',dataType:'number',displayFormat:'#,###',expression:'sum("vatAmt")',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column129',value:'',displayMode:'label',expression:'sum(\'zzzz\')',dataType:'number',displayFormat:'#,###',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column128',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column127',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column126',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column125',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column124',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column123',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column122',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column121',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column120',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column119',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column118',value:'',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column45',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'column44',value:'총합',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column77',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column73',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column65',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column61',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'outQty\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'outAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',style:'',id:'column42',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'vatAmt\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column41',value:'',displayMode:'label',textAlign:'right',expression:'sum(\'zzzz\')',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column40',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column109',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column105',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column101',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column93',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column81',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column85',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column89',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column113',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column117',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'N',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'Y',btnRowDelYn:'Y',gridID:'gr_MonthEachSpotsale',rowAddFunction:'scwin.f_AddRow',btnRowAddObj:'btn_cont1',btnRowDelObj:'btn_cont2',id:'udc_bttomGrdBtn',btnDelObj:'btn_cont3'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav1',style:'',type:'button','ev:onclick':'scwin.btn_Sav1_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표생성'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav2',style:'',type:'button','ev:onclick':'scwin.btn_Sav2_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전표취소'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'부가세 귀속부서 ',class:'req'}},{T:1,N:'w2:udc_comCode',A:{selectID:'retrieveAcctDeptCdInfo',codeId:'ed_acctDeptCd',popupID:'',validTitle:'',nameId:'txt_acctDeptNm',style:'width:%; height:px; ',id:'udc_dept','ev:onclickEvent':'scwin.udc_dept_onclickEvent',validExp:'귀속부서:yes:format=00000'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Sav3',style:'',type:'button','ev:onclick':'scwin.btn_Sav3_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]},{T:1,N:'w2:textbox',A:{class:'txt-dot txt-blue',id:'',label:'행추가, 행삭제 권한은 공통코드(TR060)로 관리됩니다. 권한관련 문의사항은 IT전략팀으로 연락바랍니다. ',style:''}}]}]}]}]}]})