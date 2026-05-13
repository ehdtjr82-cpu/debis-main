/*amd /ui/ds/fs/bilg/fs_204_02_56b.xml 45668 e68f925e54f85e3ffacbf5baee789681d9546d86057a0196439150f39609c9b7 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_accEachDecList_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'qryConKnd',name:'조회구분(부서)',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellLodeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'기준일자 시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'기준일자 종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeStdYn',name:'마감기준',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retStd',name:'조회구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감년월',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_accEachDecList',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bizDomNm',name:'사업영역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계귀속부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'매출부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gnrlSellAmt1',name:'일반매출전월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gnrlSellAmt2',name:'일반매출당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'gnrlSellAmt',name:'일반매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fclRentSellAmt1',name:'시설임대매출전월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fclRentSellAmt2',name:'시설임대매출당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'fclRentSellAmt',name:'시설임대매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqRentSellAmt1',name:'장비임대매출전월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqRentSellAmt2',name:'장비임대매출당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'eqRentSellAmt',name:'장비임대매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'consignMgntSellAmt1',name:'위수탁관리매출전월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'consignMgntSellAmt2',name:'위수탁관리매출당월',dataType:'number'}},{T:1,N:'w2:column',A:{id:'consignMgntSellAmt',name:'위수탁관리매출합계',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sumAmt',name:'금액합계',dataType:'number'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_selldecunsetaggr_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'매출부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'기준일자 시작',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'기준일자 종료',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dcsnClsCd',name:'확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'accCd',name:'확정구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'retStd',name:'마감월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeYm',name:'마감월',dataType:'text'}}]}]}]},{T:1,N:'xf:submission',A:{id:'sbm_accEachDecList_retrieve',action:'',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_accEachDecList_con","key":"IN_DS1"},{"id":"ds_accEachDecList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_accEachDecList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_accEachDecList_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 현재일자를 구한다.
scwin.strPreDate = $c.date.getServerDateTime($p, "yyyyMM") + "01";

//조회조건 - 회계부서 : 01185, 기준일자 :2021/12/01~2025/12/11, 마감기준 체크
//1G34 : 20250101~20250105
//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {};

//-------------------------------------------------------------------------
//scwin.onpageload 후 UDC관련 처리
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  ed_qryConDtFm.setValue(scwin.strPreDate);
  ed_qryConDtTo.setValue(scwin.strCurDate);
  ed_sellLodeptCd.focus();
  div_qryConKnd2.hide();
};

//-------------------------------------------------------------------------
// 공통코드가 셋팅이 되고 scwin.ondataload 이벤트가 호출
//-------------------------------------------------------------------------
scwin.ondataload = function () {};

//-------------------------------------------------------------------------
// 매출물류부서코드
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd_onblurCodeEvent = function (e) {
  //매출물류부서
  scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd, ed_txt_sellLodeptNm, '1');
};

//-------------------------------------------------------------------------
// 매출물류부서명
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_txt_sellLodeptNm, ed_sellLodeptCd, '1', false);
};

//-------------------------------------------------------------------------
// 매출물류부서찾기
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp('1', ed_sellLodeptCd.getValue(), ed_txt_sellLodeptNm.getValue(), 'F', 'F');
};

//-------------------------------------------------------------------------
// 회계부서코드
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd2_onblurCodeEvent = function (e) {
  //회계부서
  scwin.f_chkOpenCommonPopUp(ed_sellLodeptCd2, ed_txt_sellLodeptNm2, '2');
};

//-------------------------------------------------------------------------
// 회계부서명
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd2_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_txt_sellLodeptNm2, ed_sellLodeptCd2, '2', false);
  ;
};

//-------------------------------------------------------------------------
// 회계부서찾기
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd2_onclickEvent = function (e) {
  scwin.f_openCommonPopUp('2', ed_sellLodeptCd2.getValue(), ed_txt_sellLodeptNm2.getValue(), 'F', 'F');
  ;
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  try {
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
  } catch (e) {
    console.log("f_chkOpenCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  try {
    switch (disGubun) {
      // 청구부서코드팝업
      case '1':
        //rtnList = cfCommonPopUp('retrieveOpDeptCdInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
        udc_sellLodeptCd.setSelectId('retrieveOpDeptCdInfo');
        udc_sellLodeptCd.cfCommonPopUp(scwin.udc_sellLodeptCd_callBackFunc // 콜백 함수
        , pCode // 화면에서의 ??? Code Element의 Value
        , pName // 화면에서의 ??? Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearch // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      //회계부서코드팝업
      case '2':
        //rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);
        udc_sellLodeptCd2.setSelectId('retrieveAcctDeptCdInfo');
        udc_sellLodeptCd2.cfCommonPopUp(scwin.udc_sellLodeptCd2_callBackFunc // 콜백 함수
        , pCode.trim() // 화면에서의 ??? Code Element의 Value
        , pName // 화면에서의 ??? Name Element의 Value
        , pClose // 결과가 1건 일때 원도우를	AutoClose 여부(T:Close,F:Opened)
        , null // 검색 결과 컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
        , null // Title순서
        , null // 보여주는 각 컬럼들의 폭
        , null // 컬럼중에서 숨기는 컬럼 지정
        , null // SQL절의 WHERE절에 원하는 조건을 선택함 MAX:8개까지 가능
        , null // POP-UP뛰을때 원도우의 사용자 정의 폭
        , null // POP-UP뛰을때 윈도우의 사용자 정의 높이
        , null // 윈도우 위치 Y좌표
        , null // 윈도우 위치 X좌표
        , null // 중복체크여부	("F")
        , pAllSearch // 전체검색허용여부	("F")
        , null // POP-UP Window Title 검색어1,2 ("Win타이틀,첫번검색Nm,두번검색Nm")
        );
        break;
      default:
        break;
    }
  } catch (e) {
    console.log("f_openCommonPopUp : " + e);
  }
};

//-------------------------------------------------------------------------
// 청구부서 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array();
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sellLodeptCd.setValue(rtnList[0]); // 코드값
      ed_txt_sellLodeptNm.setValue(rtnList[1]); // 코드명
      ed_sellLodeptCd.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_txt_sellLodeptNm.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sellLodeptCd.setValue("");
      ed_txt_sellLodeptNm.setValue("");
      ed_sellLodeptCd.hidVal = "";
      ed_txt_sellLodeptNm.hidVal = "";
    }
  } catch (e) {
    console.log("udc_sellLodeptCd_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 회계부서 팝업 콜백(1)
//-------------------------------------------------------------------------
scwin.udc_sellLodeptCd2_callBackFunc = function (ret) {
  try {
    // 선언부
    let rtnList = new Array();
    rtnList = ret;
    if (rtnList != null) {
      if (rtnList[0] == "N/A") return;
      ed_sellLodeptCd2.setValue(rtnList[0]); // 코드값
      ed_txt_sellLodeptNm2.setValue(rtnList[1]); // 코드명
      ed_sellLodeptCd2.hidVal = rtnList[0]; // HIDDEN 코드값
      ed_txt_sellLodeptNm2.hidVal = rtnList[1]; // HIDDEN 코드명
    } else {
      ed_sellLodeptCd2.setValue("");
      ed_txt_sellLodeptNm2.setValue("");
      ed_sellLodeptCd2.hidVal = "";
      ed_txt_sellLodeptNm2.hidVal = "";
    }
  } catch (e) {
    console.log("udc_sellLodeptCd2_callBackFunc :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회조건 Clear
//-------------------------------------------------------------------------
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
scwin.f_downExcelSheet = async function () {
  if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
    const options = {
      fileName: "계정별 확정_미확정 조회.xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,

      sheetName: "계정별 확정_미확정 조회" //엑셀내 시트명 지정필요시
      ,

      useSubTotal: true
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_accEachDecList, options, infoArr);
  }
};

//-------------------------------------------------------------------------
// 부서종류 선택시
//-------------------------------------------------------------------------
scwin.acb_qryConKnd_onviewchange = function (info) {
  if (acb_qryConKnd.getValue() == "매출물류부서") {
    div_qryConKnd1.show("");
    div_qryConKnd2.hide();
  } else if (acb_qryConKnd.getValue() == "회계부서") {
    div_qryConKnd1.hide();
    div_qryConKnd2.show("");
  }
};

//-------------------------------------------------------------------------
// 조회구분 선택시
//-------------------------------------------------------------------------
scwin.acb_retStd_onviewchange = function (info) {
  if (acb_retStd.getValue() == "0") {
    ed_postDt.setStyle("display", "none");
  } else {
    ed_postDt.setStyle("display", "");
  }
};

//-------------------------------------------------------------------------
// 마감월 입력체크
//-------------------------------------------------------------------------
scwin.ed_postDt_onblur = function (e) {
  if (ed_postDt.getValue().length == "6") {
    ed_qryConDtFm.setValue("20000101");
    ed_qryConDtTo.setValue(ed_postDt.getValue() + scwin.GLB_DAYS_IN_MONTH[parseInt(ed_postDt.getValue().substring(4, 6) - 1)]);
  }
  acb_dcsnClsCd.setValue("NODCSN");
};

//-------------------------------------------------------------------------
//  그리드클릭 이벤트처리(더블클릭)
//-------------------------------------------------------------------------
scwin.gr_accEachDecList_oncelldblclick = async function (rowIndex, columnIndex, columnId) {
  try {
    if (ds_accEachDecList.getCellData(rowIndex, "sellLodeptCd") != "") {
      if (acb_dcsnClsCd.getValue() == "ALL") {
        await $c.gus.cfAlertMsg($p, "전체조회시에는 통합매출화면으로 이동할 수 없습니다.");
        return;
      }
      let accCd = "";
      if (columnId == "gnrlSellAmt1" || columnId == "gnrlSellAmt2" || columnId == "gnrlSellAmt") {
        accCd = "GNRL";
      } else if (columnId == "fclRentSellAmt1" || columnId == "fclRentSellAmt2" || columnId == "fclRentSellAmt") {
        accCd = "fCL";
      } else if (columnId == "eqRentSellAmt1" || columnId == "eqRentSellAmt2" || columnId == "eqRentSellAmt") {
        accCd = "EQ";
      } else if (columnId == "consignMgntSellAmt1" || columnId == "consignMgntSellAmt2" || columnId == "consignMgntSellAmt") {
        accCd = "CON";
      } else {
        accCd = "SUM";
      }
      let condition = "";
      //let condition ="?";
      let strOrderDetailUrl = "";
      let menuTitle = "";
      let v_flag = "fs_204_02_56b";

      // 현재 frame창의 이름을 넘겨준다.
      //condition += "flag="+v_flag;
      ds_selldecunsetaggr_con.setEmptyValue();
      ds_selldecunsetaggr_con.set("bilgLodeptCd", ds_accEachDecList.getCellData(rowIndex, "sellLodeptCd"));
      ds_selldecunsetaggr_con.set("qryConDtFm", ed_qryConDtFm.getValue());
      ds_selldecunsetaggr_con.set("qryConDtTo", ed_qryConDtTo.getValue());
      ds_selldecunsetaggr_con.set("dcsnClsCd", acb_dcsnClsCd.getValue());
      ds_selldecunsetaggr_con.set("accCd", accCd);
      if (acb_retStd.getValue() == '0') {
        ds_selldecunsetaggr_con.set("retStd", "0");
      } else {
        ds_selldecunsetaggr_con.set("retStd", ed_postDt.getValuie());
      }
      condition = {
        flag: v_flag,
        ds_selldecunsetaggr_con: ds_selldecunsetaggr_con.getJSON()
      };
      strOrderDetailUrl = "/ui/ds/fs/bilg/fs_204_02_04b.xml"; //통합매출 확정/미확정 조회
      menuTitle = "통합매출 확정/미확정 조회";
      $c.win.openMenu($p, menuTitle, strOrderDetailUrl, "fs_204_02_04b.jsp", condition, {
        openAction: "exist"
      });
    }
  } catch (e) {
    console.log("gr_accEachDecList_oncelldblclick :" + e);
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_Retrieve = async function () {
  try {
    //if (div_qryConKnd1.getStyle("style") == "block"){
    if (div_qryConKnd1.getStyle("display") == "block") {
      let ret = await $c.gus.cfValidate($p, [ed_sellLodeptCd]);
      if (!ret) {
        return false;
      }
    }

    //if (div_qryConKnd2.getStyle("style") == "block"){
    if (div_qryConKnd2.getStyle("display") == "block") {
      let ret2 = await $c.gus.cfValidate($p, [ed_sellLodeptCd2]);
      if (!ret2) {
        return false;
      }
    }
    if (acb_retStd.getValue() == '1') {
      let ret3 = await $c.gus.cfValidate($p, [ed_postDt]);
      if (!ret3) {
        return false;
      }
    }
    let ret4 = await $c.gus.cfValidate($p, [ed_qryConDtFm, ed_qryConDtTo]);
    if (!ret4) {
      return false;
    }
    if (!(await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue()))) {
      await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039);
      return false;
      ;
    }
    ds_accEachDecList_con.set("qryConKnd", acb_qryConKnd.getValue()); //조회조건 매출물류부서/회계부서
    if (div_qryConKnd1.getStyle("display") == "block") {
      ds_accEachDecList_con.set("sellLodeptCd", ed_sellLodeptCd.getValue());
    }
    if (div_qryConKnd2.getStyle("display") == "block") {
      ds_accEachDecList_con.set("sellLodeptCd", ed_sellLodeptCd2.getValue());
    }
    ds_accEachDecList_con.set("qryConDtFm", ed_qryConDtFm.getValue());
    ds_accEachDecList_con.set("qryConDtTo", ed_qryConDtTo.getValue());
    ds_accEachDecList_con.set("dcsnClsCd", acb_dcsnClsCd.getValue());
    ds_accEachDecList_con.set("retStd", acb_retStd.getValue());
    ds_accEachDecList_con.set("closeYm", ed_postDt.getValue());
    if (chb_closeStdYn.getValue() == "1") {
      ds_accEachDecList_con.set("closeStdYn", 1);
    } else {
      ds_accEachDecList_con.set("closeStdYn", 0);
    }
    sbm_accEachDecList_retrieve.action = "/ds.fs.bilg.bilgrsltsmgnt.RetrieveAccountEachDecisionUnsettledCMD.do";
    $c.sbm.execute($p, sbm_accEachDecList_retrieve);
  } catch (e) {
    console.log("f_Retrieve :" + e);
  }
};
//sbm_accEachDecList_retrieve_submitdone  
//-------------------------------------------------------------------------
// 조회결과 콜백
//-------------------------------------------------------------------------
scwin.sbm_accEachDecList_retrieve_submitdone = function (e) {
  try {
    if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

    if (ds_accEachDecList.getRowCount() == 0) {
      $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
      ed_sellLodeptCd.focus();
    } else {
      tbx_totalRows.setValue($c.gus.cfInsertComma($p, ds_accEachDecList.getRowCount()));
      $c.gus.cfGoPrevPosition($p, gr_accEachDecList, 0); //첫번째 row 포지션이동
    }
  } catch (e) {
    console.log("sbm_accEachDecList_retrieve_submitdone : " + e);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'tbl_search',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:autoComplete',A:{class:'form-control w120 req',editType:'select',id:'acb_qryConKnd',search:'start',style:'',submenuSize:'auto',allOption:'',disabled:'false',displayMode:'label',searchTarget:'both',chooseOption:'','ev:onviewchange':'scwin.acb_qryConKnd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'매출물류부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'매출물류부서'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계부서'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'회계부서'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'xf:group',A:{id:'div_qryConKnd1'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',style:'',codeId:'ed_sellLodeptCd',validExpCode:'',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'4',editTypeCode:'select',nameId:'ed_txt_sellLodeptNm',id:'udc_sellLodeptCd',editTypeName:'select',selectID:'retrieveOpDeptCdInfo',validTitle:'매출물류부서',objTypeCode:'Data',objTypeName:'key',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sellLodeptCd_onclickEvent',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_sellLodeptCd_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{id:'div_qryConKnd2'},E:[{T:1,N:'w2:udc_comCode',A:{class:'',popupID:'',codeId:'ed_sellLodeptCd2',validExpCode:'',UpperFlagCode:'1',allowCharCode:'0-9',maxlengthCode:'5',editTypeCode:'select',nameId:'ed_txt_sellLodeptNm2',id:'udc_sellLodeptCd2',editTypeName:'select',selectID:'retrieveAcctDeptCdInfo',validTitle:'회계부서',objTypeCode:'Data',objTypeName:'key',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_sellLodeptCd2_onblurCodeEvent','ev:onclickEvent':'scwin.udc_sellLodeptCd2_onclickEvent',maxlengthName:'20','ev:onviewchangeNameEvent':'scwin.udc_sellLodeptCd2_onblurNameEvent'}}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'기준일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',style:'',edFromId:'ed_qryConDtFm',mandatoryFrom:'true',mandatoryTo:'true',edToId:'ed_qryConDtTo',objTypeTo:'data',objTypeFrom:'data',titleFrom:'조회 시작일자',titleTo:'조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:''},E:[{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOption:'',allOption:'',searchTarget:'both',displayMode:'value delim label',search:'start',editType:'select',style:'',disabled:'false',id:'acb_retStd',class:'form-control w150',objType:'data','ev:onviewchange':'scwin.acb_retStd_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'현재기준'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정기준'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:' cal',id:'ed_postDt',style:'display:none;',title:'마감월',displayFormat:'yyyy/MM','ev:onblur':'scwin.ed_postDt_onblur'}}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'확정구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{submenuSize:'auto',chooseOption:'',allOption:'',searchTarget:'both',displayMode:'value delim label',search:'start',editType:'select',style:'',disabled:'false',id:'acb_dcsnClsCd',class:'form-control w200',objType:'data'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체(확정+미확정)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'ALL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'DCSN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'NODCSN'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정(계산서작성+BILL)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'XXX'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정(거래명세서작성)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미확정(거래명세서작성전)'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_closeStdYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'0',style:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'마감기준'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_FieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:textbox',A:{class:'txt-dot  txt-blue',escape:'false',id:'',label:'마감기준이 선택되면 당월실적중 익월확정분이 포함됩니다.',style:''}},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',id:'udc_excel',gridID:'gr_accEachDecList',gridDownFn:'scwin.f_downExcelSheet',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_accEachDecList',id:'gr_accEachDecList',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',autoFitMinWidth:'1700',readOnly:'true',resize:'true',columnMove:'true','ev:oncelldblclick':'scwin.gr_accEachDecList_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',value:'사업영역',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',value:'회계귀속<br/>부서코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',value:'회계귀속<br/>부서명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',value:'매출부서<br/>코드',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',value:'매출부서명',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',value:'금액합계',width:'120',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'일반매출',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'시설임대매출',width:'210',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column29',value:'장비임대매출',displayMode:'label',colSpan:'3',sortable:'false'}},{T:1,N:'w2:column',A:{width:'210',inputType:'text',id:'column23',value:'위수탁관리매출',displayMode:'label',colSpan:'3',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'gnrlSellAmt1',value:'전월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'gnrlSellAmt2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'gnrlSellAmt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fclRentSellAmt1',value:'전월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fclRentSellAmt2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'fclRentSellAmt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqRentSellAmt1',value:'전월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqRentSellAmt2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'eqRentSellAmt',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'consignMgntSellAmt1',value:'전월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'consignMgntSellAmt2',value:'당월',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'consignMgntSellAmt',value:'합계',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bizDomNm',inputType:'text',width:'100',headers:'gr_gridView1_bizDomNm',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptCd',inputType:'text',width:'100',textAlign:'center',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'acctDeptNm',inputType:'text',width:'100',textAlign:'left',headers:'gr_gridView1_acctDeptNm',colMerge:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sumAmt',inputType:'text',width:'120',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gnrlSellAmt1',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gnrlSellAmt2',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'gnrlSellAmt',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'fclRentSellAmt1',inputType:'text',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fclRentSellAmt2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fclRentSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqRentSellAmt1',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqRentSellAmt2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'eqRentSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'consignMgntSellAmt1',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'consignMgntSellAmt2',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'consignMgntSellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'acctDeptCd',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'귀속부서 소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',textAlign:'right',expression:'sum(\'sumAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column67',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column66',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column65',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column64',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column63',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column62',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column61',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column60',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column59',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column58',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column57',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column56',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt3\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column55',value:'',displayMode:'label',excelCellType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'bizDomNm',style:'',id:'subTotal2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column72',value:'사업영역 소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column71',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column70',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column69',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column68',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'sumAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column67',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column66',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column65',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'gnrlSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column64',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column63',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column62',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'fclRentSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column61',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column60',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column59',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'eqRentSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column58',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt1\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column57',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt2\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column56',value:'',displayMode:'label',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',textAlign:'right',expression:'sum(\'consignMgntSellAmt\')',displayFormat:'#,##0',dataType:'number',style:'',id:'column55',value:'',displayMode:'label',excelCellType:'number'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column51',displayMode:'label',value:'합계'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column49',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column48',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'sumAmt\')',displayFormat:'#,##0',dataType:'number',id:'column46',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'gnrlSellAmt1\')',displayFormat:'#,##0',dataType:'number',id:'column45',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'gnrlSellAmt2\')',displayFormat:'#,##0',dataType:'number',id:'column44',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'120',inputType:'expression',expression:'sum(\'gnrlSellAmt\')',displayFormat:'#,##0',dataType:'number',id:'column43',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'fclRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',id:'column42',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'fclRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',id:'column41',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'fclRentSellAmt\')',displayFormat:'#,##0',dataType:'number',id:'column40',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'eqRentSellAmt1\')',displayFormat:'#,##0',dataType:'number',id:'column39',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'eqRentSellAmt2\')',displayFormat:'#,##0',dataType:'number',id:'column38',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'eqRentSellAmt\')',displayFormat:'#,##0',dataType:'number',id:'column37',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'consignMgntSellAmt1\')',displayFormat:'#,##0',dataType:'number',id:'column36',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'consignMgntSellAmt2\')',displayFormat:'#,##0',dataType:'number',id:'column35',displayMode:'label',textAlign:'right',excelCellType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',expression:'sum(\'consignMgntSellAmt\')',displayFormat:'#,##0',dataType:'number',id:'column54',displayMode:'label',textAlign:'right',excelCellType:'number'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})