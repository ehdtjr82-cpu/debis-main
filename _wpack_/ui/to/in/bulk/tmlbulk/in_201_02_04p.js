/*amd /ui/to/in/bulk/tmlbulk/in_201_02_04p.xml 32699 75801cf17e03f4202c73bb5683f592855d0c4dfbf5eb4e6c7a9c3eabe40b4c87 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_registBudget',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslNm',name:'선박명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'tmlPortcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'수출입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNo',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repClntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'repKcgCd',name:'화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'commNm',name:'화종',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blBkNo',name:'BL/BK번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoQty',name:'수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoWt',name:'중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cargoCbm',name:'CBM',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPatternCd',name:'작업유형코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gaugePatternCd',name:'측정유형코드',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'stDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repClntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'tmlPortcnt',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blBkNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'repKcgCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'inQryCond',name:'',dataType:'text'}},{T:1,N:'w2:key',A:{id:'kcgCd',name:'name13',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_condition',action:'/to.in.bulk.tmlbulk.RetrieveBulkPreInfoLupContentsCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition", "key":"IN_DS1"}, {"id":"ds_registBudget", "key":"OUT_DS1"}]',target:'data:json,{"id":"ds_registBudget","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_condition_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.CREATE_AUTH = 'C';
scwin.RETRIEVE_AUTH = 'R';
scwin.UPDATE_AUTH = 'U';
scwin.DELETE_AUTH = 'D';
scwin.PRINT_AUTH = 'P';
scwin.EXCEL_AUTH = 'X';
scwin.selectedRowIndex = 0;
scwin.g_mode = 0;
scwin.blBkNo = "";
//---------------------------------------------------------
// 전역변수
//---------------------------------------------------------   
scwin.onpageload = function () {
  scwin.blBkNo = $c.data.getParameter($p, "blBkNo");
  const codeOptions = [{
    grpCd: "SD060",
    compID: "lc_expClsCd"
  }];
  $c.data.setCommonCode($p, codeOptions, scwin.setInit);
  let memJson = $c.data.getMemInfo($p);
  console.log("### onpageload :: " + JSON.stringify(memJson));
};
scwin.setInit = function () {
  scwin.f_retrieve();
};
//---------------------------------------------------------
// UDC
//---------------------------------------------------------    
scwin.onUdcCompleted = function () {
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_stDt.setValue(today);
  ed_endDt.setValue(today);
  em_blBkNo.setValue("");
  rd_inQryCond.setValue("0");
  lc_repKcgCd.setSelectedIndex(0);
  lc_expClsCd.setSelectedIndex(0);
};

//---------------------------------------------------------
// 사용자 함수
//---------------------------------------------------------   
scwin.f_retrieve = async function () {
  if (ed_stDt.getValue() == "") {
    await $c.win.alert($p, "시작일자은(는) 필수 입력 항목입니다.");
    ed_stDt.focus();
    return;
  }
  if (ed_endDt.getValue() == "") {
    await $c.win.alert($p, "종료일자은(는) 필수 입력 항목입니다.");
    ed_endDt.focus();
    return;
  }
  if (scwin.g_mode == 0) {
    em_blBkNo.setValue(scwin.blBkNo);
    ed_lineCd.setValue("");
    txt_lineNm.setValue("");
    ed_impRepClntNo.setValue("");
    txt_impRepClntNm.setValue("");
    ed_tmlPortcnt.setValue("");
    em_conVsslCd.setValue("");
    txt_conVsslNm.setValue("");
    em_conCvsslMgntNo.setValue("");
    em_commCd.setValue("");
    txt_commCdNm.setValue("");
    today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
    strPrevDate = WebSquare.date.dateAdd(today, -7);
    strNextDate = WebSquare.date.dateAdd(today, 7);
    ed_stDt.setValue(strPrevDate);
    ed_endDt.setValue(strNextDate);
    rd_inQryCond.setValue("0");
  } else {
    if (!$c.gus.cfValidate($p, tb_searchCondition)) {
      return;
    }
  }
  ds_condition.set("commCd", em_commCd.getValue());
  ds_condition.set("repKcgCd", em_commCd.getValue());
  $c.sbm.execute($p, sbm_condition);
};
scwin.f_runExcel = async function () {
  if (ds_registBudget.getTotalRow() > 0) {
    sheetTitle = "벌크사전정보";
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, gr_registBudget, {
        fileName: sheetTitle + '.xls',
        sheetName: sheetTitle,
        removeColumns: "15,16"
      });
    }
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  }
};
scwin.f_openCommonPopUp = async function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList; // 공통POP-UP -> 요청화면
  switch (disGubun) {
    case 1:
      // 조회 조건 본선 팝업
      udc_conVssl.setSelectId("retrieveVsslCdInfo");
      udc_conVssl.cfCommonPopUp(scwin.udc_conVssl_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'T' // 전체검색허용여부 ("F")
      , "선박,선박코드,선박명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 7:
      //마스터 LINE 팝업
      udc_line.setSelectId("retrieveTmlLineInfo");
      udc_line.cfCommonPopUp(scwin.udc_line_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "LINE,LINE코드,LINE명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 9:
      //디테일 수입 대표거래처 팝업
      udc_impRep.setSelectId("retrieveCoopList");
      udc_impRep.cfCommonPopUp(scwin.udc_impRep_callbackFunc, pCode // 화면에서의 ??? Code Element의  Value
      , pName // 화면에서의 ??? Name Element의  Value
      , pClose // 결과가 1건 일때  원도우를  AutoClose 여부  (T:Close,F:Opened)
      , null // 검색 결과  컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서
      , null // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는  컬럼 지정
      , null // SQL절의 WHERE절에  원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의  사용자 정의 폭
      , null // POP-UP뛰을때 우도우의  사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , "대표거래처,거래처코드,거래처명" // POP-UP Window Title 검색어1,2   ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    case 14:
      //화종,품목,품명 팝
      let data = {
        repKcgCd: lc_repKcgCd.getValue(),
        cd: pCode,
        nm: pName
      };
      let opts = {
        id: "in_201_02_10p",
        popupName: "벌크 화물 검색",
        modal: true,
        type: "browserPopup",
        //화면 오픈 타입 ("pageFramePopup", "browserPopup")
        title: "벌크 화물 검색",
        //Layer pop
        width: 700,
        height: 650
      };
      let rtnList = await $c.win.openPopup($p, "/ui/to/in/bulk/tmlbulk/in_201_02_10p.xml", opts, data);
      if (rtnList != null) {
        if (rtnList[0] != null) {
          em_commCd.setValue(rtnList[0]);
          txt_commCdNm.setValue(rtnList[1]);
          lc_repKcgCd.setValue(rtnList[2]);
        }
      }
      break;
  }
};
scwin.udc_conVssl_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, em_conVsslCd, txt_conVsslNm);
};
scwin.udc_line_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm);
};
scwin.udc_impRep_callbackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_impRepClntNo, txt_impRepClntNm);
};
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
//---------------------------------------------------------
// 컴포넌트 이벤트
//---------------------------------------------------------   
scwin.sbm_condition_submitdone = async function (e) {
  if (ds_registBudget.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003); // 해당되는 자료가 존재하지 않습니다
  }
  if (scwin.g_mode == 0) {
    today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
    ed_stDt.setValue(today);
    ed_endDt.setValue(today);
  }
  ed_totCnt.setValue(ds_registBudget.getTotalRow());
  scwin.g_mode = 1;
};
scwin.rd_inQryCond_onviewchange = function (info) {
  if (rd_inQryCond.getValue() == 0) {
    gr_registBudget.setHeaderValue("h_cvsslMgntNo", "본선관리번호");
  } else if (rd_inQryCond.getValue() == 1) {
    gr_registBudget.setHeaderValue("h_cvsslMgntNo", "화주요청번호");
  }
  if (rd_inQryCond.getValue() == 1) {
    $c.gus.cfDisableObjects($p, [ed_stDt, ed_endDt]);
  } else if (rd_inQryCond.getValue() == 0) {
    $c.gus.cfEnableObjects($p, [ed_stDt, ed_endDt]);
  }
};
scwin.gr_registBudget_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  row = rowIndex;
  var rtnValues = new Array();
  rtnValues[0] = ds_registBudget.getCellData(row, "cvsslMgntNo"); // 본선 관리번호, 화주 요청
  rtnValues[1] = ds_registBudget.getCellData(row, "repClntNo"); // 화주 코드
  rtnValues[2] = ds_registBudget.getCellData(row, "repClntNm"); // 화주 이름
  rtnValues[3] = ds_registBudget.getCellData(row, "commCd"); //화종 코드
  rtnValues[4] = ds_registBudget.getCellData(row, "commNm"); // 화종 이름
  rtnValues[5] = ds_registBudget.getCellData(row, "impExpClsCd"); // 수출입 코드
  rtnValues[6] = ds_registBudget.getCellData(row, "wrkPatternCd"); // 작업유형 코드
  rtnValues[7] = ds_registBudget.getCellData(row, "gaugePatternCd"); // 측정 유형 코드
  rtnValues[8] = ds_registBudget.getCellData(row, "vsslCd"); // 모선 코드
  rtnValues[9] = ds_registBudget.getCellData(row, "vsslNm"); // 모선명
  rtnValues[10] = ds_registBudget.getCellData(row, "tmlPortcnt"); // 항차
  rtnValues[11] = ds_registBudget.getCellData(row, "lineCd"); // 라인
  rtnValues[12] = ds_registBudget.getCellData(row, "blBkNo"); // BL/BK 번호
  rtnValues[13] = ds_registBudget.getCellData(row, "cargoQty"); // 수량
  rtnValues[14] = ds_registBudget.getCellData(row, "cargoWt"); // 중량
  rtnValues[15] = ds_registBudget.getCellData(row, "cargoCbm"); // CBM
  rtnValues[16] = ds_condition.get("inQryCond"); // 구분
  $c.win.closePopup($p, rtnValues);
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};
scwin.udc_conVssl_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, em_conVsslCd.getValue(), txt_conVsslNm.getValue(), 'F', 'F');
};
scwin.udc_conVssl_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(em_conVsslCd, txt_conVsslNm, 1);
};
scwin.udc_conVssl_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_conVsslNm, em_conVsslCd, 1, false);
};
scwin.udc_impRep_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(9, ed_impRepClntNo.getValue(), txt_impRepClntNm.getValue(), 'F', 'F');
};
scwin.udc_impRep_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_impRepClntNo, txt_impRepClntNm, 9);
};
scwin.udc_impRep_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_impRepClntNm, ed_impRepClntNo, 9, false);
};
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(7, ed_lineCd.getValue(), txt_lineNm.getValue(), 'F', 'F');
};
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, txt_lineNm, 7);
};
scwin.udc_line_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_lineNm, ed_lineCd, 7, false);
};
scwin.udc_comm_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(14, em_commCd.getValue(), txt_commCdNm.getValue(), 'T', 'F');
};
scwin.udc_comm_onblurCodeEvent = function (e) {
  cd = em_commCd.getValue();
  if (cd == "") {
    return;
  } else {
    scwin.f_openCommonPopUp(14, em_commCd.getValue(), txt_commCdNm.getValue(), 'T', 'F');
  }
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_retrieve();
};
scwin.btn_fieldClear_onclick = function (e) {
  ed_lineCd.setValue("");
  txt_lineNm.setValue("");
  ed_impRepClntNo.setValue("");
  txt_impRepClntNm.setValue("");
  ed_tmlPortcnt.setValue("");
  em_blBkNo.setValue("");
  em_conVsslCd.setValue("");
  txt_conVsslNm.setValue("");
  em_conCvsslMgntNo.setValue("");
  em_commCd.setValue("");
  txt_commCdNm.setValue("");
  today = WebSquare.date.getCurrentServerDate("yyyyMMdd");
  ed_stDt.setValue(today);
  ed_endDt.setValue(today);
};
scwin.oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase());
};
scwin.floor = function (d, fd, r, c) {
  return Math.floor(d).toLocaleString();
};
scwin.em_conCvsslMgntNo_oneditkeyup = function (info, e) {
  this.setValue(e.target.value.toUpperCase()); // input
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'조회구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_inQryCond',ref:'data:ds_condition.inQryCond',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:'','ev:onviewchange':'scwin.rd_inQryCond_onviewchange'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'본선'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'화주요청'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar1',refDataMap:'ds_condition',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',mandatory:'true',mandatoryFrom:'Y',mandatoryTo:'Y'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL/BK 번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_blBkNo',style:'',ref:'data:ds_condition.blBkNo',maxlength:'11','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_expClsCd',search:'start',style:'width: 230px;',submenuSize:'fixed',ref:'data:ds_condition.impExpClsCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'항차 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_tmlPortcnt',style:'width: 85px;',ref:'data:ds_condition.tmlPortcnt',maxlength:'8','ev:oneditkeyup':'scwin.oneditkeyup',allowChar:'0-9|a-z|A-Z',validateOnInput:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'em_conCvsslMgntNo',style:'width: 59px;',ref:'data:ds_condition.cvsslMgntNo',allowChar:'0-9|a-z|A-Z',maxlength:'8','ev:oneditkeyup':'scwin.em_conCvsslMgntNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'선박코드 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'em_conVsslCd',nameId:'txt_conVsslNm',btnId:'img_PopUp6',id:'udc_conVssl',refDataCollection:'ds_condition',code:'vsslCd','ev:onclickEvent':'scwin.udc_conVssl_onclickEvent','ev:onblurCodeEvent':'scwin.udc_conVssl_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_conVssl_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'8'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화주 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_impRepClntNo',nameId:'txt_impRepClntNm',btnId:'img_PopUp3',id:'udc_impRep',refDataCollection:'ds_condition',code:'repClntNo','ev:onclickEvent':'scwin.udc_impRep_onclickEvent','ev:onblurCodeEvent':'scwin.udc_impRep_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_impRep_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_lineCd',nameId:'txt_lineNm',btnId:'img_PopUp2',id:'udc_line',refDataCollection:'ds_condition',code:'lineCd','ev:onclickEvent':'scwin.udc_line_onclickEvent','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_line_onblurNameEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'8'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'lc_repKcgCd',search:'start',style:'width: 100px;',submenuSize:'fixed',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'화종'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'em_commCd',nameId:'txt_commCdNm',btnId:'img_PopUp3',id:'udc_comm',refDataCollection:'ds_condition',code:'kcgCd','ev:onclickEvent':'scwin.udc_comm_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comm_onblurCodeEvent',UpperFlagCode:'1',allowCharCode:'0-9|a-z|A-Z',maxlengthCode:'8'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'벌크사전정보검색',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_registBudget',gridUpYn:'N',btnUser:'Y',gridDownFn:'scwin.f_runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'none',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_registBudget',id:'gr_registBudget',style:'',visibleRowNum:'15',visibleRowNumFix:'true',readOnly:'true','ev:oncelldblclick':'scwin.gr_registBudget_oncelldblclick'},E:[{T:1,N:'w2:caption',A:{id:'caption2',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'h_cvsslMgntNo',inputType:'text',value:'본선관리번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'선박명',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'선박명',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'항차',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'수출입구분',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'수출입',width:'90'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'화주',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'화주',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column35',value:'화종',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'화종',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column31',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column29',value:'BL/BK번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'수량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'중량',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'CBM',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column21',value:'작업유형코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column19',value:'측정유형코드',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslCd',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vsslNm',inputType:'text',width:'130',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'tmlPortcnt',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd1',inputType:'text',width:'100',hidden:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'impExpClsCd',inputType:'select',width:'90',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]}]}]},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repClntNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repClntNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'repKcgCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'commNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'lineCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'blBkNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoQty',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###',excelCellType:'number',excelFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoWt',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.###',excelCellType:'number',excelFormat:'#,##0.000'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cargoCbm',displayMode:'label',textAlign:'right',dataType:'number',displayFormat:'#,###.#',excelCellType:'number',excelFormat:'#,##0',customFormatter:'scwin.floor'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'wrkPatternCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'gaugePatternCd',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column57',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column56',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column55',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column54',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column53',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column52',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column49',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column47',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column46',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column45',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column43',value:'',displayMode:'label',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',style:'',id:'column41',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totCnt',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})