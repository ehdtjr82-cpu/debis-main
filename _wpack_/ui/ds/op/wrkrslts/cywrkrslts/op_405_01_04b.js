/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_405_01_04b.xml 26068 8fa73ce3015f2f2235d1dc46c11dfeeeca528a584e3cd2e14656c025ec37e954 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'cntrNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtmFrom',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crryinoutDtmTo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrGradeCls',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkPlCd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name7',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_retrieve',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'체크',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gradeCls',name:'등급',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gradeRmk',name:'등급비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gubun',name:'구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlNm',name:'작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPlCd',name:'작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'gradeRegDt',name:'등급 등록일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'fullEmptyClsCd',name:'F/E',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutClsCd',name:'반출입 구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutIntendDt',name:'반입일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'SIZE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'TYPE',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더 번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너 순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkPathSeq',name:'작업경로 순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpSeq',name:'작업단계 순서',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arrvlportDtm2',name:'입항일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'newData',name:'name20',dataType:'text'}},{T:1,N:'w2:column',A:{id:'divsCrryinoutClsCd',name:'분할반입구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutDtm',name:'반입일시',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutPatternCd',name:'반입유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutAccdPattern',name:'반입사고유형',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsNm',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveTslCntrGradeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_retrieve","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_retrieve","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ds.op.wrkrslts.cywrkrslts.UpdateTslCntrGradeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_delete',action:'/ds.op.wrkrslts.cywrkrslts.DeleteCntrGradeListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"id":"ds_retrieve","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_delete_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  const nowDate = new Date();
  const preDate = new Date();
  preDate.setDate(preDate.getDate() - 7);
  const nowYyyy = nowDate.getFullYear();
  const nowMm = String(nowDate.getMonth() + 1).padStart(2, '0');
  const nowDd = String(nowDate.getDate()).padStart(2, '0');
  const preYyyy = preDate.getFullYear();
  const preMm = String(preDate.getMonth() + 1).padStart(2, '0');
  const preDd = String(preDate.getDate()).padStart(2, '0');
  scwin.preYYYYMMDD = preYyyy + preMm + preDd;
  scwin.nowYYYYMMDD = nowYyyy + nowMm + nowDd;

  // 세션정보
  let memJson = $c.data.getMemInfo($p);
  scwin.userId = $c.data.getMemInfo($p, "userId");
  $c.gus.cfDisableBtnOnly($p, [btn_save]);
  const codeOptions = [{
    grpCd: "ZZ627",
    compID: "acb_co_lc_cntrGradeCls, gr_retrieve:gradeCls"
  }];
  $c.data.setCommonCode($p, codeOptions);
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_crryinoutDtm.setInitDate(scwin.preYYYYMMDD, scwin.nowYYYYMMDD);

  // f_RetrieveCommCd();

  if (scwin.userId == "skreng01") {
    ed_lineCd.setValue("SKR");
    scwin.udc_lineCd_openPopup('T');
    ed_lineCd.setDisabled(true); //Enable = false;
    txt_lineNm.setDisabled(true); //disabled = true;
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_fieldClear_onclick = function (e) {
  $c.gus.cfInitObjects($p, [ed_lineCd, txt_lineNm, crryinoutDtmFrom, crryinoutDtmTo, ed_cntrNo, ed_wrkPlCd, acb_co_lc_cntrGradeCls]);
  udc_crryinoutDtm.setInitDate(scwin.preYYYYMMDD, scwin.nowYYYYMMDD);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.btn_retrieve_onclick = async function (e) {
  // 필수항목 체크
  if (ed_lineCd.getValue() == "" || txt_lineNm.getValue() == "") {
    $c.win.alert($p, "LINE은 필수항목입니다.");
    ed_lineCd.focus();
    return;
  }
  if (ed_wrkPlCd.getValue() == "") {
    $c.win.alert($p, "작업장은 필수항목입니다.");
    ed_wrkPlCd.focus();
    return;
  }
  var afterDate = $c.gus.cfIsAfterDate($p, crryinoutDtmFrom.getValue(), crryinoutDtmTo.getValue());
  if (!afterDate) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_039); // 시작일자를 종료일 이전으로 선택[입력]하여 주십시오.
    crryinoutDtmFrom.focus();
    return;
  }
  var diffObj = await $c.gus.cfDifferBetween($p, crryinoutDtmFrom.getValue(), crryinoutDtmTo.getValue());
  if (diffObj.year > 0 || diffObj.month > 0) {
    $c.win.alert($p, "오더기간 이 1개월이 넘습니다 1개월 이상 조회 하실수 없습니다.");
    crryinoutDtmFrom.focus();
    return false;
  }
  ds_retrieve.removeAll();
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    if (ds_retrieve.getRowCount() == 0) {
      totalRows.setValue("0");
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
      $c.gus.cfDisableBtnOnly($p, [btn_save]);
    } else {
      if (ds_retrieve.getCellData(0, "newData") == 0) {
        $c.gus.cfEnableObj($p, btn_save, true);
      } else {
        $c.gus.cfEnableObj($p, btn_save, true);
      }
      totalRows.setValue(ds_retrieve.getRowCount());
      var arrvlDt = "";
      for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
        arrvlDt = ds_retrieve.getCellData(i, "arrvlportDtm").substring(0, 8);
        ds_retrieve.setCellData(i, "arrvlportDtm2", arrvlDt);
        if (ds_retrieve.getCellData(i, "crryinoutAccdPattern") == "") {
          ds_retrieve.setCellData(i, "crryinoutAccdPattern", "OK");
        }
      }
      ds_retrieve.modifyAllStatus('R');
    }
  }
};

//-------------------------------------------------------------------------
// 저장 버튼
//-------------------------------------------------------------------------
scwin.btn_save_onclick = async function (e) {
  // 변경한 데이터가 있는지 체크한다.
  if (ds_retrieve.getModifiedIndex().length == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_001, ["Data"]);
    return;
  }
  for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
    if (ds_retrieve.getCellData(i, "chk") == "1") {
      if (ds_retrieve.getCellData(i, "gradeCls") == "") {
        $c.win.alert($p, "컨테이너 등급을 지정해 주세요.");
        return;
      }
    }
  }
  let confirm = await $c.win.confirm($p, "저장하시겠습니까?");
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_001); // 성공적으로 저장하였습니다.
    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 등급삭제 버튼
//-------------------------------------------------------------------------
scwin.btn_delete_onclick = async function (e) {
  var copyData = ds_retrieve.getAllJSON();
  var delCnt = 0;
  for (var i = 0; i < ds_retrieve.getRowCount(); i++) {
    if (ds_retrieve.getCellData(i, "chk") == "1") {
      delCnt++;
    }
  }
  if (delCnt == 0) {
    $c.win.alert($p, "삭제하실 등급을 선택해주세요");
    return;
  } else {
    let confirm = await $c.win.confirm($p, "선택하신 등급을 삭제하시겠습니까?");
    if (confirm) {
      var matchData = ds_retrieve.getMatchedJSON("chk", "1");
      ds_retrieve.removeAll();
      ds_retrieve.setJSON(matchData);
      $c.sbm.execute($p, sbm_delete);
      ds_retrieve.removeAll();
      ds_retrieve.setJSON(copyData);
    }
  }
};
scwin.sbm_delete_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    await $c.win.alert($p, MSG_CM_INF_004); // 성공적으로 삭제하였습니다.
    scwin.btn_retrieve_onclick();
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Line 팝업
//-------------------------------------------------------------------------
scwin.udc_lineCd_onblurCodeEvent = function (e) {
  scwin.udc_lineCd_openPopup('T');
};
scwin.udc_homeClntNo_onviewchangeNameEvent = function (info) {
  scwin.udc_lineCd_openPopup('T');
};
scwin.udc_lineCd_onclickEvent = function (e) {
  scwin.udc_lineCd_openPopup('F');
};
scwin.udc_lineCd_openPopup = function (pClose) {
  let pCode = ed_lineCd.getValue();
  let pName = txt_lineNm.getValue();
  udc_lineCd.cfCommonPopUp(scwin.udc_lineCd_callBackFunc, pCode, pName, pClose, null, null, null, null, "", null, null, null, null, null, "F", "LINE,Line코드,Line명");
};
scwin.udc_lineCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_lineCd.setValue(rtnList[0]); // 코드
    txt_lineNm.setValue(rtnList[1]); // 명
  } else {
    ed_lineCd.setValue(""); // 코드
    txt_lineNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : 작업장 팝업
//-------------------------------------------------------------------------
scwin.udc_wrkPlCd_onblurCodeEvent = function (e) {
  scwin.udc_wrkPlCd_openPopup('T');
};
scwin.udc_wrkPlCd_onviewchangeNameEvent = function (info) {
  if (txt_wrkPlNm.getValue() == "" || txt_wrkPlNm.getValue() == null) {
    ed_wrkPlCd.setValue("");
  } else {
    scwin.udc_wrkPlCd_openPopup('T');
  }
};
scwin.udc_wrkPlCd_onclickEvent = function (e) {
  scwin.udc_wrkPlCd_openPopup('F');
};
scwin.udc_wrkPlCd_openPopup = function (pClose) {
  let pCode = ed_wrkPlCd.getValue();
  let pName = txt_wrkPlNm.getValue();
  udc_wrkPlCd.cfCommonPopUp(scwin.udc_wrkPlCd_callBackFunc, pCode, pName, pClose, null, null, null, null, "", null, null, null, null, null, "F", "작업장,작업장코드,작업장명");
};
scwin.udc_wrkPlCd_callBackFunc = function (rtnList) {
  if (rtnList != null && rtnList[0] != "N/A") {
    ed_wrkPlCd.setValue(rtnList[0]); // 코드
    txt_wrkPlNm.setValue(rtnList[1]); // 명
  } else {
    ed_wrkPlCd.setValue(""); // 코드
    txt_wrkPlNm.setValue(""); // 명
  }
};

//-------------------------------------------------------------------------
// 공통 Popup 처리 : Gubun Code 에 따른 공통 Popup 을 호출한다. - END
//-------------------------------------------------------------------------
// OnDblClick(row,colid) - 그리드 더블 클릭 이벤트 : 전송구분이 오류인 경우 팝업창 호출
scwin.gr_retrieve_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  if (columnId == "crryinoutDeclarNo") {
    if (ds_retrieve.getCellData(rowIndex, "sndClsNm") == "오류") {
      // scwin.f_errorPopUp(row); //TODO : ASIS - 호출 함수 없음.
    }
  }
};

// OnExit(row,colid,olddata) - 그리드 Edit CELL 을 빠져나올때 이벤트
scwin.gr_retrieve_onafteredit = function (rowIndex, columnIndex, value) {
  let colid = gr_retrieve.getColumnID(columnIndex);
  if (colid == "crryinoutWt") {
    // scwin.f_openPopUp('3', row, '', '', 'T', 'T');
  } else if (colid == "crryinoutDtm") {
    let val = ds_retrieve.getCellData(rowIndex, "crryinoutDtm");
    let cnt = val.length;
    for (var i = cnt; i < 14; i++) {
      val += '0';
    }
    ds_retrieve.setCellData(rowIndex, "crryinoutDtm", val);
  }
};
scwin.excelDown = async function (gubun) {
  var fileName = "CNTR GRADING";
  await $c.data.downloadGridViewExcel($p, gr_retrieve, {
    fileName: fileName + ".xlsx",
    sheetName: fileName
  });
};

//-------------------------------------------------------------------------
// 대문자 입력
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{src:'/cm/xml/contentHeader.xml',style:'',id:''}},{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'shbox-inner'},E:[{T:1,N:'xf:group',A:{tagname:'table',style:'',id:'',class:'w2tb tb'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col',style:''}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col',style:''}}]},{T:1,N:'xf:group',A:{tagname:'tr',style:'',id:'',class:''},E:[{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th '},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'LINE ',class:'req'}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_comCode',A:{'ev:onclickEvent':'scwin.udc_lineCd_onclickEvent',refDataCollection:'dma_condition',codeId:'ed_lineCd',selectID:'retrieveLineInfo',popupID:'',code:'lineCd',nameId:'txt_lineNm',style:'',id:'udc_lineCd',btnId:'btn_lineCd','ev:onblurCodeEvent':'scwin.udc_lineCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_homeClntNo_onviewchangeNameEvent',mandatoryCode:'true',objTypeCode:'Data',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',maxlengthCode:'6',objTypeName:'key'}}]},{T:1,N:'xf:group',A:{tagname:'th',style:'',class:'w2tb_th'},E:[{T:1,N:'w2:textbox',A:{style:'',id:'',label:'반입기간 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',style:'',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'crryinoutDtmFrom',refDataMap:'dma_condition',edFromId:'crryinoutDtmFrom',edToId:'crryinoutDtmTo',style:'',id:'udc_crryinoutDtm',refEdDt:'crryinoutDtmTo'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{style:'',id:'',label:'컨테이너번호 ',class:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{style:'width: 120px;',id:'ed_cntrNo',placeholder:'',class:'',ref:'data:dma_condition.cntrNo',maxlength:'11',allowChar:'a-zA-Z0-9',UpperFlag:'1','ev:onkeyup':'scwin.onkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'작업장 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',btnId:'btn_wrkPlCd',code:'wrkPlCd',codeId:'ed_wrkPlCd','ev:onclickEvent':'scwin.udc_wrkPlCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_wrkPlCd_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_wrkPlCd_onviewchangeNameEvent',id:'udc_wrkPlCd',mandatoryCode:'true',maxlengthCode:'5',nameId:'txt_wrkPlNm',objTypeCode:'data',popupID:'',refDataCollection:'dma_condition',selectID:'retrieveWrkPlInfo',style:''}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'등급 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:'전체',class:'',editType:'select',id:'acb_co_lc_cntrGradeCls',ref:'data:dma_condition.cntrGradeCls',search:'start',style:'width: 100px;',submenuSize:'auto'},E:[{T:1,N:'w2:choices'}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'btn-shbox'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_fieldClear_onclick',style:'',id:'btn_fieldClear',type:'button',class:'btn ico refresh'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_retrieve_onclick',disabled:'',style:'',id:'btn_retrieve',type:'button',class:'btn sch',escape:'false'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'round-box'},E:[{T:1,N:'xf:group',A:{id:'',class:'row-gap-8'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'컨테이너현황',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'w2:udc_topGrdBtn',A:{gridUpYn:'N',grp:'grd_section1',style:'',id:'udc_topGrd',gridID:'gr_retrieve',gridDownFn:'scwin.excelDown'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'grd_section1',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{visibleRowNumFix:'true',checkAllType:'false',dataList:'data:ds_retrieve',style:'',autoFit:'allColumn',id:'gr_retrieve',visibleRowNum:'16',class:'wq_gvw','ev:oncelldblclick':'scwin.gr_retrieve_oncelldblclick','ev:onafteredit':'scwin.gr_retrieve_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption1',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row1'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'column1',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',value:'등급',class:'col-type1',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column15',value:'등급비고',class:'col-type2',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column13',value:'구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column11',value:'LINE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column9',value:'컨테이너<br/>번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'column3',value:'작업장',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column5',value:'작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column7',value:'등급<br/>등록일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column19',value:'F/E',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column35',value:'반출입<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'반입일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column31',value:'SIZE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column29',value:'TYPE',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column27',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column21',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column23',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column25',value:'컬럼헤더명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'입항일자',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row2'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',id:'chk',displayMode:'label',valueType:'other',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'select',id:'gradeCls',displayMode:'value',chooseOption:'true',chooseOptionLabel:'$blank',selectedData:'false'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'gradeRmk',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'left',width:'100',inputType:'text',id:'gubun',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',id:'wrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkPlCd',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'gradeRegDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'fullEmptyClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'crryinoutClsCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'crryinoutIntendDt',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrSizCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'cntrTypCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'odrNo',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'cntrSeq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkPathSeq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkStpSeq',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'arrvlportDtm2',value:'',displayMode:'label',displayFormat:'####/##/##',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'grid-bottom '},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'xf:group',A:{id:'',class:'grid-total'},E:[{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'총',class:''}},{T:1,N:'w2:textbox',A:{tagname:'span',dataType:'number',displayFormat:'#,##0',style:'',id:'totalRows',label:'0',class:'num'}},{T:1,N:'w2:textbox',A:{tagname:'span',style:'',id:'',label:'건',class:''}}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',class:'btnbox'},E:[{T:1,N:'w2:textbox',A:{ref:'',style:'',userData2:'',id:'',label:'등급구분 : A - 최상, B - 보통, C - 미처리, D - DEMAGE, H - 수리보류, L - 중국선적, M - 빅데미지, N - 미검사',class:'info-txt red'}},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_delete_onclick',style:'',id:'btn_delete',label:'저장',type:'button',class:'btn white'},E:[{T:1,N:'xf:label',E:[{T:3,text:'등급삭제'}]}]},{T:1,N:'xf:trigger',A:{'ev:onclick':'scwin.btn_save_onclick',style:'',id:'btn_save',label:'저장',type:'button',class:'btn'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]}]}]}]}]}]}]}]})