/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_21b.xml 29555 21f91ddadf8ff82fa15a35f6043640964e35a0ea5b77c179332ae99525b8be4c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'pickuprgnCd',name:'pickUp 지역',dataType:'text'}},{T:1,N:'w2:key',A:{id:'stDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'endDt',name:'상차요청일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpClsCd',name:'수출입구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'BL번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'라인',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_onReqInfo',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pickuprgnCd',name:'상차지역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'nrm',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNm',name:'화주',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onIntendDt',name:'상차예정일',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'Booking_No',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNm',name:'운송사',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendNo',name:'반출입예정번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfTransClntNo',name:'자가운송사코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'onReqGoodsSeq',name:'품목순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'impExpClsCd',name:'name26',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_deleteCond'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'crryinoutIntendNo',name:'반출입예정번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfTransClntNo',name:'자가운송사',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqNo',name:'상차요청번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqGoodsSeq',name:'품목순번',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onPrgsStsCd',name:'진행상태',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_srchImpExpCls_item',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'code',name:'name1',dataType:'text'}},{T:1,N:'w2:column',A:{id:'label',name:'name2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieveOnRequestInfo',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveCarryInAndCarryOutIntendListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_srchCond","key":"IN_DS1"},{"id":"ds_onReqInfo","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_onReqInfo","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_deleteOnRequestInfo',action:'/ds.op.wrkrslts.cywrkrslts.DeleteCarryInAndCarryOutIntendListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"dma_deleteCond","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = async function () {};

/**
 * @event 
 * @name onUdcCompleted 
 * @description UDC 완료
 */
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "OP206",
    compID: "acb_co_lc_srchPickupRgnCd"
  }, {
    grpCd: "SD060",
    compID: "acb_lc_srchImpExpCls"
  }];
  $c.data.setCommonCode($p, codeOptions, () => {
    acb_lc_srchImpExpCls.addItem("전체", "", null, 0);
    acb_lc_srchImpExpCls.setSelectedIndex(0);
    acb_co_lc_srchPickupRgnCd.setSelectedIndex(1);
  });
};

/**
 * @event 
 * @name ondataload 
 * @description 코드 완료
 */
scwin.ondataload = function () {
  scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  scwin.today = $c.date.getServerDateTime($p, 'yyyyMMdd');
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  ed_srchFromDate.setValue(scwin.today);
  ed_srchToDate.setValue(scwin.today);
  acb_co_lc_srchPickupRgnCd.focus();
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = async function () {
  const validDate = await $c.gus.cfValidate($p, udc_srchDate);
  if (!validDate) return;
  let beforeDay = ed_srchFromDate.getValue();
  let afterData = ed_srchToDate.getValue();
  if (!$c.gus.cfIsAfterDate($p, beforeDay, afterData)) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    ed_srchFromDate.focus();
    return;
  }
  ;
  const validSrchCond = await $c.gus.cfValidate($p, [tb_srchCond]);
  if (!validSrchCond) return;
  let jsonData = {
    "stDt": ed_srchFromDate.getValue().trim(),
    "endDt": ed_srchToDate.getValue().trim(),
    "blNo": ed_srchBlBkNo.getValue().trim(),
    "odrNo": ed_srchOdrNo.getValue().trim()
  };
  hidden_impImpExpClsCd.setValue(acb_lc_srchImpExpCls.getValue());
  dma_srchCond.setJSON(jsonData);
  scwin.submitExcute(sbm_retrieveOnRequestInfo);
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 조회 조건 초기화
 */
scwin.f_FieldClear = function () {
  acb_co_lc_srchPickupRgnCd.setSelectedIndex(1);
  acb_lc_srchImpExpCls.setSelectedIndex(0);
  $c.gus.cfInitObjects($p, [ed_srchFromDate, ed_srchToDate, ed_srchBlBkNo, ed_srchCopCoCd, txt_srchCopCoNm, ed_srchOdrNo, ed_LineCd, txt_LineNm]);
};

/**
 * @method 
 * @name f_Delete 
 * @description 상차증 삭제
 */
scwin.f_Delete = async function () {
  //삭제하시겠습니까?
  let retConfirm = await $c.win.confirm($p, MSG_CM_CRM_004);
  if (!retConfirm) return;

  //현재 focus의 예정정보번호를 저장
  const focusRow = ds_onReqInfo.getRowPosition();
  const rowJSON = ds_onReqInfo.getRowJSON(focusRow);
  let jsonData = {
    "crryinoutIntendNo": rowJSON["crryinoutIntendNo"],
    "selfTransClntNo": rowJSON["selfTransClntNo"],
    "onReqNo": rowJSON["onReqNo"],
    "onReqGoodsSeq": rowJSON["onReqGoodsSeq"],
    "onPrgsStsCd": "W" //TB_OP414의 flag 변경
  };
  dma_deleteCond.setJSON(jsonData);
  scwin.submitExcute(sbm_deleteOnRequestInfo);
};

/**
 * @method 
 * @name f_FieldClear 
 * @description 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다.
 * @param {number} disGubun
 * @param {string} pCode
 * @param {string} pName
 * @param {string} pClose
 * @param {string} pAllSearch
 */
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  let dmaData = dma_srchCond.getJSON();
  let paramList = "" + dmaData["impExpClsCd"] + "," + dmaData["pickuprgnCd"] + "," + dmaData["stDt"] + "," + dmaData["endDt"];
  let pWhere = ",LOGISCLNT2";
  switch (disGubun) {
    case 1:
      //자가운송사 Pop Up  retrieveClntInfo  retrieveSelfTransClntNo
      udc_srchCopCo.setSelectId("retrieveClntList");
      udc_srchCopCo.cfCommonPopUp(retArray => {
        rtnList = retArray;
        $c.gus.cfSetReturnValue($p, rtnList, ed_srchCopCoCd, txt_srchCopCoNm);
      }, pCode, pName, "T", null, null, null, null, pWhere, null, null, null, null);
      break;
    case 3:
      // B/L or BooKing No 
      if (acb_lc_srchImpExpCls.getValue() == "") {
        $c.win.alert($p, "수출입 구분을 선택하여주세요!");
        return;
      }
      ;

      //I(수입) : B/L No. O(수출) : Booking No.
      pCode = ed_srchBlBkNo.getValue();
      if (acb_lc_srchImpExpCls.getValue() == "I") {
        udc_srchCopCo.setSelectId("retrieveBlNo");
      } else {
        udc_srchCopCo.setSelectId("retrieveBookingNo");
      }
      ;
      udc_srchCopCo.cfCommonPopUp(rtnList => {
        //return value Assign
        if (rtnList != null) {
          ed_srchBlBkNo.setValue(rtnList[0]); //Door코드
        } else {
          ed_srchBlBkNo.setValue(""); //Door코드
        }
        ;
      }, pCode, pName, "T", null, null, null, null, paramList, null, null, null, null);
      break;
    case 4:
      //오더번호
      udc_srchCopCo.setSelectId("retrieveOdrNo");
      udc_srchCopCo.cfCommonPopUp(rtnList => {
        //return value Assign
        if (rtnList != null) {
          ed_srchOdrNo.setValue(rtnList[0]); //오더번호
        } else {
          ed_srchOdrNo.setValue(""); //오더번호
        }
        ;
      }, pCode, pName, "T", null, null, null, null, paramList, null, null, null, null);
      break;
    case 5:
      //Line
      udc_line.setSelectId("retrieveLine");
      udc_line.cfCommonPopUp(rtnList => {
        $c.gus.cfSetReturnValue($p, rtnList, ed_LineCd, txt_LineNm);
      }, pCode, pName, "T", null, null, null, null, paramList, null, null, null, null);
      break;
    default:
      break;
  }
  ;
};

/**
 * @method 
 * @name f_chkOpenCommonPopUpText 
 * @description TEXT BOX 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} codeObj
 * @param {number} disGubun
 * @param {string} hidVal
 */
scwin.f_chkOpenCommonPopUpText = function (inObj, codeObj, disGubun, hidVal) {
  let pCode = "",
    pName = "";

  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.  //inObj.value.trim() == "" || 
  if (inObj.getReadOnly() || inObj.getValue() == hidVal) return;
  if (codeObj != null) {
    codeObj.setValue("");
  }
  ;
  pName = inObj.getValue();
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};

/**
 * @method 
 * @name f_chkOpenCommonPopUpEmEdit 
 * @description EMEDIT 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
 * @param {object} inObj
 * @param {object} chkObj
 * @param {object} txtObj
 * @param {number} disGubun
 */
scwin.f_chkOpenCommonPopUpEmEdit = function (inObj, chkObj, txtObj, disGubun) {
  let pCode = "",
    pName = "";

  // 해당 EMEDIT가 Disable 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (inObj.getReadOnly() || inObj.getDisabled() || inObj.getValue() == chkObj.getValue()) return;
  if (txtObj != null) {
    txtObj.setValue("");
  }
  ;
  pCode = inObj.getValue().replace(/^\s*/, '');

  // 값이 입력이 안된 경우  팝업을 실행하지 않음.
  if (pCode == "" || pCode == null) {
    inObj.setValue("");
    chkObj.setValue("");
    return;
  } else {
    pCode = inObj.getValue();
    pName = txtObj.getValue();
    chkObj.setValue(inObj.getValue());
  }
  ;
  scwin.f_openCommonPopUp(disGubun, pCode, pName, 'T', 'T');
};

/**
 * @method 
 * @name f_ResultsExcel 
 * @description 엑셀파일로 저장
 */
scwin.f_ResultsExcel = function () {
  const sheetName = "상차요청승인현황";
  const options = {
    sheetName: sheetName,
    fileName: sheetName + ".xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_onReqInfo, options);
};

/**
 * @method 
 * @name f_OzReport 
 * @description 발행
 */
scwin.f_OzReport = async function () {
  const focusRowIndex = ds_onReqInfo.getRowPosition();
  const rowData = ds_onReqInfo.getRowJSON(focusRowIndex);
  const printChk = chb_printCheck.getValue();
  const previewChk = chb_previewCheck.getValue();
  const modeVal = printChk === 1 && previewChk === 0 ? 'print' : 'preview';
  let data = {
    odiName: "op_301_02_21r",
    reportName: "/ds/op/wrkrslts/cywrkrslts/op_301_02_21r.ozr",
    // 쿼리(ODI)에 적용할 파라미터를 설정(OZParam)
    odiParam: {
      sysPath: "dbl.ds.op.wrkrslts.cywrkrslts",
      crryinoutIntendNo: rowData.crryinoutIntendNo
    },
    // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
    viewerParam: {
      useprogressbar: false,
      // 프로그레스바 쓸지 말지
      mode: modeVal
    },
    formParam: {}
  };
  let options = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", options, data);
};

/**
 * @method 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};

/**
 * @method 
 * @name submitExcute 
 * @description submit 처리
 */
scwin.submitExcute = async function (sbmObj) {
  const e = await $c.sbm.execute($p, sbmObj);
  if (e.responseJSON.resultDataSet[0].Msg == 'SUCC') {
    if (e.responseJSON.resultDataSet[0].Code == -1) return;
    await scwin.submitdone(e);
  }
  ;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name submitdone 
 * @description submit 정상
 */
scwin.submitdone = async function (e) {
  let submitObj = $p.getComponentById(e.id);
  switch (submitObj) {
    case sbm_retrieveOnRequestInfo:
      gr_onReqInfo.setFocusedCell(0, 0);
      let rowCnt = ds_onReqInfo.getRowCount();
      totalRows.setValue(rowCnt);
      if (rowCnt == 0) {
        totalRows.setValue(0);
        $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      }
      ;
      break;
    case sbm_deleteOnRequestInfo:
      // 성공적으로 삭제하였습니다
      await $c.gus.cfAlertMsg($p, MSG_CM_INF_004);
      scwin.f_Retrieve();
      break;
    default:
      break;
  }
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description B/L or BooKing No 검색 버튼 클릭 시
 */
scwin.btn_trigger11_onclick = function (e) {
  scwin.f_openCommonPopUp(3, '', '', 'T', 'T');
};

/**
 * @event 
 * @name udc_line_onblurCodeEvent 
 * @description Line Code EMEdit Focus 이동시
 */
scwin.udc_line_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(ed_LineCd, hid_LineCd, txt_LineNm, 5);
};

/**
 * @event 
 * @name udc_line_onviewchangeNameEvent 
 * @description Line name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_line_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpText(txt_LineNm, ed_LineCd, 5, info.oldValue);
};

/**
 * @event 
 * @name udc_line_onclickEvent 
 * @description Line 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_line_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(5, ed_LineCd.getValue(), txt_LineNm.getValue(), 'F', 'T');
};

/**
 * @event 
 * @name udc_srchCopCo_onblurCodeEvent 
 * @description 자가 운송사 코드 EMEdit Focus 이동시
 */
scwin.udc_srchCopCo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUpEmEdit(ed_srchCopCoCd, hid_srchCopCoCd, txt_srchCopCoNm, 1);
};

/**
 * @event 
 * @name udc_srchCopCo_onviewchangeNameEvent 
 * @description 자가 운송사 name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트로 focus out 시점에 발생
 */
scwin.udc_srchCopCo_onviewchangeNameEvent = function (info) {
  scwin.f_chkOpenCommonPopUpText(txt_srchCopCoNm, ed_srchCopCoCd, 1, info.oldValue);
};

/**
 * @event 
 * @name udc_srchCopCo_onclickEvent 
 * @description 자가 운송사 마우스로 클릭하거나 컴포넌트에 포커스가 있는 상태에서 스페이스 키를 누를 경우 발생.
 */
scwin.udc_srchCopCo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, '', '', 'T', 'T');
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭 시 발생
 */
scwin.btn_fieldClear_onclick = function (e) {
  scwin.f_FieldClear();
};

/**
 * @event 
 * @name btn_fieldClear_onclick 
 * @description 조회조건 초기화 버튼 클릭 시 발생
 */
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};

/**
 * @event 
 * @name bSave_onclick 
 * @description 발행 버튼 클릭 시 발생
 */
scwin.bSave_onclick = function (e) {
  scwin.f_OzReport();
};

/**
 * @event 
 * @name bDelete_onclick 
 * @description 삭제 버튼 클릭 시 발생
 */
scwin.bDelete_onclick = function (e) {
  scwin.f_Delete();
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tb_srchCond',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'PickUp 지역',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_co_lc_srchPickupRgnCd',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.pickuprgnCd',sortMethod:'ascending',sortOption:'value',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'상차예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_srchDate',refDataMap:'dma_srchCond',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_srchFromDate',edToId:'ed_srchToDate',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'상차요청등록 조회 시작일자',titleTo:'상차요청등록 조회 종료일자'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L or BooKing No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srchBlBkNo',placeholder:'',style:'width: 150px;',maxlength:'20',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',ref:'data:dma_srchCond.blNo'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_trigger11',style:'',type:'button','ev:onclick':'scwin.btn_trigger11_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Line',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',codeId:'ed_LineCd',nameId:'txt_LineNm',id:'udc_line',btnId:'btn_line',refDataCollection:'dma_srchCond',selectID:'retrieveLine','ev:onblurCodeEvent':'scwin.udc_line_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_line_onviewchangeNameEvent','ev:onclickEvent':'scwin.udc_line_onclickEvent',mandatoryName:'false',objTypeName:'data',mandatoryCode:'false',objTypeCode:'data',maxlengthName:'13',maxlengthCode:'5',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',code:'lineCd'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수입/수출',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_srchImpExpCls',search:'start',style:'width:120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_srchCond.impExpClsCd',displayMode:'value delim label'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_srchOdrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',objType:'data',ref:'data:dma_srchCond.odrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가 운송사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',selectID:'retrieveClntList',codeId:'ed_srchCopCoCd',nameId:'txt_srchCopCoNm',id:'udc_srchCopCo',btnId:'btn_srchCopCo','ev:onblurCodeEvent':'scwin.udc_srchCopCo_onblurCodeEvent','ev:onclickEvent':'scwin.udc_srchCopCo_onclickEvent','ev:onviewchangeNameEvent':'scwin.udc_srchCopCo_onviewchangeNameEvent',objTypeCode:'data',objTypeName:'data',maxlengthCode:'6',mandatoryName:'false',maxlengthName:'15',mandatoryCode:'false',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',refDataCollection:'dma_srchCond',code:'selfTransClntNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick',userAuth:'R'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'반출 예정정보 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',btnUser:'Y',gridDownFn:'f_ResultsExcel',gridID:'gr_onReqInfo'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_onReqInfo',id:'gr_onReqInfo',style:'',visibleRowNum:'15',visibleRowNumFix:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'상차지역',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'차량번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'LINE',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'화주',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'상차예정일',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'Booking_No',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'운송사',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'상차요청번호',width:'120'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'반출입예정번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',value:'자가운송사코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column25',value:'품목순번',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'pickuprgnCd',inputType:'text',width:'100',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclNo',inputType:'text',width:'120',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'nrm',inputType:'text',width:'70',textAlign:'center',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'realMchtClntNm',inputType:'text',width:'120',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onIntendDt',inputType:'text',width:'120',textAlign:'center',dataType:'date',displayFormat:'yyyy/MM/dd',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'120',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'selfTransClntNm',inputType:'text',width:'120',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'onReqNo',inputType:'text',width:'120',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'crryinoutIntendNo',displayMode:'label',textAlign:'Left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'selfTransClntNo',displayMode:'label',textAlign:'Left',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'onReqGoodsSeq',displayMode:'label',textAlign:'Left',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'bDelete',label:'저장',style:'',type:'button','ev:onclick':'scwin.bDelete_onclick',userAuth:'D'},E:[{T:1,N:'xf:label',E:[{T:3,text:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'bSave',label:'저장',style:'',type:'button','ev:onclick':'scwin.bSave_onclick',userAuth:'P'},E:[{T:1,N:'xf:label',E:[{T:3,text:'발행'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'display: none;',id:''},E:[{T:1,N:'xf:input',A:{style:'',id:'hid_srchCopCoCd'}},{T:1,N:'xf:input',A:{id:'hid_doorCd',style:''}},{T:1,N:'xf:input',A:{id:'chk_admitClsCd',style:''}},{T:1,N:'xf:input',A:{id:'chk_rowCount',style:''}},{T:1,N:'xf:input',A:{id:'hid_LineCd',style:''}},{T:1,N:'xf:input',A:{style:'',id:'hidden_impImpExpClsCd'}},{T:1,N:'xf:select',A:{appearance:'full',style:'width:148px; height:21px; ',id:'chb_printCheck',selectedindex:'0',cols:'',rows:'',ref:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{appearance:'full',style:'width:148px; height:21px; ',id:'chb_previewCheck',selectedindex:'-1',cols:'',rows:'',ref:'',falseValue:'0'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]})