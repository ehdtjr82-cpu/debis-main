/*amd /ui/ds/op/wrkrslts/cywrkrslts/op_301_02_32b.xml 27998 81dcfacf3ec3a4d1109e48451d12e9113fa36bdda708ee4f086010a6740ade51 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',A:{},E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'srchSelfTransClntNo',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'onReqNo',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bookingNo',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'c3OdrNo',name:'name6',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_out',saveRemovedData:'true','ev:onrowpositionchange':'scwin.ds_out_onrowpositionchange'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'bookingNo',name:'BOOKING NO',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'수출일반오더',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'라인코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizTyeCd',name:'규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'반납지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtWrkPlNm',name:'변경반납지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtYn',name:'반납여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'coparnYn',name:'지정여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtCopinoYn',name:'반납COPINO전송여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDt',name:'FREEDAY',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'모선',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNmCopy',name:'선적지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c3OdrNo',name:'C3오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'cntrSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'odrWrkPathSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'odrWrkStpSeq',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c3DptWrkPlNm',name:'C3상차지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclIdCardNo',name:'차량ID카드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'freeDtYn',name:'freeday여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'name28',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rtWrkPlCd',name:'name30',dataType:'text'}},{T:1,N:'w2:column',A:{id:'shippingWrkPlNm',name:'name37',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c3DptWrkPlCd',name:'name43',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c3ArvWrkPlCd',name:'name45',dataType:'text'}},{T:1,N:'w2:column',A:{id:'c3ArvWrkPlNm',name:'name46',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_srchSelfTransClnt'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'ed_srchSelfTransClntNo',name:'code',dataType:'text'}},{T:1,N:'w2:key',A:{id:'txt_srchSelfTransClntNm',name:'name',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ds.op.wrkrslts.cywrkrslts.RetrieveReturnPlaceConfirmationCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_out","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_out","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'scwin.sbm_retrieve_submit','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'w2:historyInfo',E:[{T:1,N:'w2:history',A:{}}]},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){/**
 * @event 
 * @name onpageload 
 * @description 화면 초기화
 */
scwin.onpageload = async function () {
  await scwin.globalVars();
  scwin.f_OnLoad();
};

/**
 * @method 
 * @name globalVars 
 * @description 전역변수선언
 */
scwin.globalVars = function () {
  const login = $c.data.getMemInfo($p); // 로그인 정보를 가져온다.
  scwin.userClsCd = login.userClsCd;
  const sDate = $c.date.getServerDateTime($p, 'yyyyMMdd');
  scwin.strCurDate = sDate;
  scwin.clntNo = login.clntNo ?? ''; // 거래처번호
  scwin.clntNm = login.clntNm ?? ''; // 거래처명
  scwin.srchSelfTransClntNo = $c.data.getParameter($p, 'srchSelfTransClntNo') ?? ''; // 자가운송사
  scwin.srchSelfTransClntNm = $c.data.getParameter($p, 'srchSelfTransClntNm') ?? ''; // 자가운송사명
  scwin.onReqNo = $c.data.getParameter($p, 'onReqNo') ?? ''; // 상차요청번호
  scwin.cntrNo = $c.data.getParameter($p, 'cntrNo') ?? ''; // 컨테이너번호
  scwin.odrNo = $c.data.getParameter($p, 'odrNo') ?? ''; // 오더번호

  scwin.vUserClsCd = scwin.userClsCd;
  scwin.v_selfTransClntNo = scwin.clntNo;
  scwin.v_selfTransClntNm = scwin.clntNm;
  scwin.v_strCurDate = scwin.strCurDate;
};

/**
 * @method 
 * @name f_OnLoad 
 * @description 화면로딩시
 */
scwin.f_OnLoad = function () {
  dma_srchSelfTransClnt.set('ed_srchSelfTransClntNo', scwin.v_selfTransClntNo);
  dma_srchSelfTransClnt.set('txt_srchSelfTransClntNm', scwin.v_selfTransClntNm);
  if (scwin.vUserClsCd == '05') {
    // 임시
    udc_srchSelfTransClnt.getChildren()[0].getChildren()[0].options.validExp = '자가 운송사:yes';
    td_c3OdrNo.hide();
    ed_c3OdrNo.hide();
    $c.gus.cfDisableObjects($p, [ed_srchSelfTransClntNo, txt_srchSelfTransClntNm]);
  } else {
    // 임시
    udc_srchSelfTransClnt.getChildren()[0].getChildren()[0].options.validExp = '자가 운송사:yes';
    td_c3OdrNo.show('');
    ed_c3OdrNo.show('');
    $c.gus.cfEnableObjects($p, [ed_srchSelfTransClntNo, txt_srchSelfTransClntNm]);
  }
  ;
  ed_onReqNo.setValue(scwin.onReqNo);
  ed_cntrNo.setValue(scwin.cntrNo);
  ed_odrNo.setValue(scwin.odrNo);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회
 */
scwin.f_Retrieve = function () {
  if (scwin.vUserClsCd == '05') {
    if ($c.gus.cfIsNull($p, ed_bookingNo.getValue()) && $c.gus.cfIsNull($p, ed_cntrNo.getValue()) && $c.gus.cfIsNull($p, ed_odrNo.getValue())) {
      $c.win.alert($p, 'BOOKING NO OR 컨테이너번호는 필수 조회 항목입니다.');
      return;
    }
  } else {
    if ($c.gus.cfIsNull($p, ed_bookingNo.getValue()) && $c.gus.cfIsNull($p, ed_odrNo.getValue()) && $c.gus.cfIsNull($p, ed_c3OdrNo.getValue())) {
      $c.win.alert($p, 'BOOKING NO OR 오더번호는 필수 조회 항목입니다.');
      return;
    }
  }
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 코드 조회 팝업
 * @param {string} id
 * @param {object[]} obj
 * @param {string} param1
 * @param {string} param2
 * @param {string} pWinCloseTF
 * @param {string} pWhere
 */
scwin.f_OpenPopup = function (id, obj, param1, param2, pWinCloseTF, pWhere) {
  pWhere = ',LOGISCLNT2';
  udc_srchSelfTransClnt.setSelectId(id);
  udc_srchSelfTransClnt.cfCommonPopUp(rtnList => {
    if (rtnList != null && rtnList[0] != 'N/A') {
      for (let i = 0; i < obj.length; i++) {
        obj[i].setValue(rtnList[i % 2]);
      }
    } else {
      for (let i = 0; i < obj.length; i++) {
        obj[i].setValue('');
      }
    }
  }, param1, param2, pWinCloseTF, null, null, null, null, pWhere, null, null, null, null);
};

/**
 * @method 
 * @name f_Retrieve 
 * @description 조회조기 필드 Clear
 */
scwin.f_FieldClear = function () {
  $c.gus.cfInitObjects($p, [ed_onReqNo, ed_odrNo, ed_c3OdrNo, ed_bookingNo, ed_cntrNo]);
};

/**
 * @method 
 * @name f_Excel 
 * @description 엑셀 다운로드
 */
scwin.f_Excel = function () {
  if (ds_out.getTotalRow() == 0) return;
  const options = {
    sheetName: "수출오더 반납지 현황",
    fileName: "수출오더 반납지 현황.xlsx"
  };
  $c.data.downloadGridViewExcel($p, gr_out, options);
};

/**
 * @method 
 * @name f_Excel 
 * @description 세금계산서 버튼 클릭
 * @param {boolean} bAlertFlag
 * @param {boolean} bSaveFlag
 * @param {boolean} bTransferFlag
 * @param {number} row
 * @param {boolean} bDeleteFlag
 * @param {string} transWrkIndictNo
 */
scwin.f_crryInOutEDI = function (bAlertFlag, bSaveFlag, bTransferFlag, row, bDeleteFlag, transWrkIndictNo) {
  if (ds_out.getTotalRow() == 0) return;
  let arrParam = new Array();
  let rowData = ds_out.getRowJSON(row);
  let focusedRowData = ds_out.getRowJSON(ds_out.getRowPosition());

  //반입세팅

  arrParam[0] = new Array('1',
  //조회구분 ('' : 운송작업지시, '1' : 반출입)
  transWrkIndictNo, rowData.c3OdrNo, rowData.cntrSeq, rowData.odrWrkPathSeq, rowData.odrWrkStpSeq, '',
  // rowData.vehclShortNo
  rowData.vehclNo, rowData.vehclIdCardNo, '',
  // rowData.wrkStDt
  '',
  // rowData.wrkEndDt
  rowData.cntrNo, rowData.c3DptWrkPlCd, rowData.c3ArvWrkPlCd, rowData.c3DptWrkPlNm, rowData.c3ArvWrkPlNm, '',
  // rowData.crryoutEdiType
  'CO' // rowData.crryinEdiType
  );
  arrParam[1] = new Array(transWrkIndictNo, focusedRowData.vehclNo, focusedRowData.vehclIdCardNo, '',
  // focusedRowData.drvNm
  '',
  // focusedRowData.drvTelNo
  '', '', '',
  // focusedRowData.gateinDth.substring(0,8)
  '',
  // focusedRowData.gateinDth.substring(8,12)
  '',
  // focusedRowData.vehclShortNo
  '') // focusedRowData.eqCd
  ;

  // TODO - 해당 팝업 미존재
  let url = '/ui/ds/op/wrkrslts/cywrkrslts/op_301_02_32p.xml';
  let options = {
    type: 'pageFramePopup',
    popupName: '반출입정보EDI등록'
  };
  let data = {
    crryoutEdiType: rowData.crryoutEdiType,
    crryinEdiType: 'CO',
    arrParam
  };
  $c.win.openPopup($p, url, options, data);
  return true;
};

//-----------------------------------------------------------------------------
//   Submission event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name sbm_retrieve_submitdone 
 * @description Submission 요청 전 선처리. return false시 submission 수행 안함.
 */
scwin.sbm_retrieve_submit = function (e) {
  let jsonData = {
    "srchSelfTransClntNo": ed_srchSelfTransClntNo.getValue(),
    "onReqNo": ed_onReqNo.getValue(),
    "bookingNo": ed_bookingNo.getValue(),
    "odrNo": ed_odrNo.getValue(),
    "cntrNo": ed_cntrNo.getValue(),
    "c3OdrNo": ed_c3OdrNo.getValue()
  };
  dma_search.setJSON(jsonData);
};

/**
 * @event 
 * @name sbm_retrieve_submitdone 
 * @description Response Status 코드 값이 정상 일 경우 동작.
 */
scwin.sbm_retrieve_submitdone = function (e) {
  ds_out.setRowPosition(0);

  // colorChange
  const allData = ds_out.getAllJSON();
  for (let i = 0; i < allData.length; i++) {
    const rowData = allData[i];
    let bgClass = "";
    if (rowData.rtYn === 'N' && rowData.coparnYn === 'Y' && rowData.rtCopinoYn === 'Y' && rowData.freeDtYn === 'Y') {
      bgClass = "blink_pink";
    }
    ;
    gr_out.setCellClass(i, "rtWrkPlNm", bgClass);
  }
  ;
  let copyColData = ds_out.getColData('arvWrkPlNm');
  for (let i = 0; i < copyColData.length; i++) {
    ds_out.setCellData(i, 'arvWrkPlNmCopy', copyColData[i]);
  }
  ;
  let rowcnt = ds_out.getRowCount();
  totalRows.setValue(rowcnt);
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002); // 조회결과가 존재하지 않습니다
    return;
  }
  ;
  gr_out.setFocusedCell(0, 'bookingNo');
};

//-----------------------------------------------------------------------------
//   Component event  
//-----------------------------------------------------------------------------

/**
 * @event 
 * @name ds_out_onrowpositionchange 
 * @description 행의 인덱스가 변경된 경우에 발생
 * @param {object} info
 */
scwin.ds_out_onrowpositionchange = function (info) {
  let row = info.newRowIndex;
  let rowData = ds_out.getRowJSON(row);
  spn_detail.setStyle('color', 'red');
  spn_detail.setStyle('font-weight', 'bold');

  // 변경반납지가 null인 경우
  if ($c.gus.cfIsNull($p, rowData.rtWrkPlCd)) {
    // COPINO 전송 불가함.
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("최종반납지 결정이 안되었으므로 대기하시길 바랍니다.");
    return;
  }
  ;

  // 반납지와 변경반납지가 다르고,
  if (rowData.arvWrkPlCd == rowData.rtWrkPlCd) {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("반납지와 변경반납지가 동일합니다. COPINO 전송 불가.");
    return;
  }
  ;

  //변경반납지가 터미널이고,
  if (rowData.rtWrkPlCd.slice(1, 2) != 'P') {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("변경반납지가 터미널이 아닙니다. COPINO 전송 불가.");
    return;
  }
  ;

  //미반납이고, 
  if (rowData.rtYn != 'N') {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("반납이 완료되었습니다. COPINO 전송 불가.");
    return;
  }
  ;

  //지정여부가 Y이고, 
  if (rowData.coparnYn != 'Y') {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("프리즘 선사인 경우 반납지정을 받으시고, 아닌 경우 반입예정정보 등록 하세요.  COPINO 전송 불가.");
    return;
  }
  ;

  //반납COPINO전송여부가 Y인 경우
  if (rowData.rtCopinoYn != 'Y') {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("반납지 COPINO 전송 후 [변경반납지 COPINO전송]이 가능합니다.");
    return;
  }
  ;

  //FREEDT가 시스템일자보다 크면 코피노 전송 불가 
  if ($c.gus.cfIsAfterDate($p, rowData.freeDt, scwin.v_strCurDate, true) == false) {
    $c.gus.cfDisableObjects($p, [btn_Transfer]);
    spn_detail.setValue("FREE DAY 기간입니다. COPINO 전송 불가.");
    return;
  }
  ;
  $c.gus.cfEnableObjects($p, [btn_Transfer]);
  spn_detail.setStyle('color', 'blue');
  spn_detail.setStyle('font-weight', 'bold');
  spn_detail.setValue("변경반납지 COPINO전송이 가능합니다.");
};

/**
 * @event 
 * @name udc_srchSelfTransClnt_onblurCodeEvent 
 * @description 자가 운송사 code 포커스를 잃었을 때 발생한다.
 */
scwin.udc_srchSelfTransClnt_onblurCodeEvent = function (e) {
  // 검색조건 자가운송사
  if (ed_srchSelfTransClntNo.getValue().replace(/ /g, '') == '') {
    dma_srchSelfTransClnt.set('txt_srchSelfTransClntNm', '');
    return;
  }
  ;
  scwin.f_OpenPopup('retrieveClntList', [ed_srchSelfTransClntNo, txt_srchSelfTransClntNm, hid_srchSelfTransCoCd, hid_srchSelfTransCoNm], ed_srchSelfTransClntNo.getValue(), '', 'T', '');
};

/**
 * @event 
 * @name udc_srchSelfTransClnt_onviewchangeNameEvent 
 * @description 자가 운송사 name 컴포넌트의 value가 변경되었을 때 발생하는 이벤트
 */
scwin.udc_srchSelfTransClnt_onviewchangeNameEvent = function (info) {
  if (txt_srchSelfTransClntNm.getValue().replace(/ /g, '') == '') {
    dma_srchSelfTransClnt.set('ed_srchSelfTransClntNo', '');
    return;
  }
  ;
  scwin.f_OpenPopup('retrieveClntList', [ed_srchSelfTransClntNo, txt_srchSelfTransClntNm, hid_srchSelfTransCoCd, hid_srchSelfTransCoNm], '', txt_srchSelfTransClntNm.getValue(), 'T', '');
};

/**
 * @event 
 * @name udc_srchSelfTransClnt_onviewchangeNameEvent 
 * @description 자가 운송사 검색 버튼 클릭
 */
scwin.udc_srchSelfTransClnt_onclickEvent = function (e) {
  scwin.f_OpenPopup('retrieveClntList', [ed_srchSelfTransClntNo, txt_srchSelfTransClntNm, hid_srchSelfTransCoCd, hid_srchSelfTransCoNm], ed_srchSelfTransClntNo.getValue(), '', 'F', '');
};

/**
 * @event 
 * @name btn_Transfer_onclick 
 * @description COPINO전송
 */
scwin.btn_Transfer_onclick = function (e) {
  scwin.f_crryInOutEDI(true, false, false, ds_out.getRowPosition(), false, '');
};

/**
 * @method 
 * @name gridFormat 
 * @description 그리드 format
 */
scwin.gridFormat = function (data, formattedData, rowIndex, colIndex) {
  let colID = this.getColumnID(colIndex);
  let returnVal = '';
  switch (colID) {
    case "rtYn":
      if (data == 'Y') {
        returnVal = '반납완료';
        break;
      }
      ;
      returnVal = '미반납';
      break;
  }
  ;
  return returnVal;
};

/**
 * @event 
 * @name upperFlag 
 * @description 소문자 입력 시 대문자로 변경
 */
scwin.upperFlag = function (e) {
  this.setValue(e.target.value.toUpperCase());
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'style',A:{type:'text/css'},E:[{T:4,cdata:'.blink_pink{animation:blink-animation 1s steps(1,start) infinite;-webkit-animation:blink-animation 1s steps(1,start) infinite}@keyframes blink-animation{0%{background-color:#fbced4}50%{background-color:#fff}100%{background-color:#fbced4}}'}]}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'자가 운송사',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_srchSelfTransClntNo',nameId:'txt_srchSelfTransClntNm',id:'udc_srchSelfTransClnt',btnId:'btn_srchSelfTransClnt',maxlengthCode:'6',maxlengthName:'15',mandatoryCode:'true','ev:onblurCodeEvent':'scwin.udc_srchSelfTransClnt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_srchSelfTransClnt_onviewchangeNameEvent',code:'ed_srchSelfTransClntNo',name:'txt_srchSelfTransClntNm',refDataCollection:'dma_srchSelfTransClnt',mandatoryName:'false','ev:onclickEvent':'scwin.udc_srchSelfTransClnt_onclickEvent',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'상차요청번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_onReqNo',placeholder:'',style:'width:150px;',mandatory:'',maxlength:'12',editFormat:'ZZZZZZZZZZZZ',title:'상차요청번호'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BOOKING NO',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_bookingNo',placeholder:'',style:'width:150px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9','ev:onkeyup':'scwin.upperFlag',editFormat:'SSSS#######',maxlength:'11'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:230px;',allowChar:'a-zA-Z0-9',objType:'data','ev:onkeyup':'scwin.upperFlag',maxlength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'td_c3OdrNo',label:'C3오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'5'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_c3OdrNo',placeholder:'',style:'width:150px;',allowChar:'a-zA-Z0-9',objType:'data','ev:onkeyup':'scwin.upperFlag',maxlength:'13'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'수출오더 반납지 현황',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownFn:'f_Excel',gridID:'gr_out',btnPlusYn:'Y',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridDownUserAuth:'X'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_out',id:'gr_out',style:'',visibleRowNum:'15',visibleRowNumFix:'true',autoFit:'allColumn',rowMouseOver:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'BOOKING NO',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'수출일반오더',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'라인<br/>코드',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'컨테이너',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'규격',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'반납지',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'변경반납지',width:'100',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'반납<br/>여부',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'지정<br/>여부',width:'70',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'반납COPINO<br/>전송여부',width:'120',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column59',value:'FREEDAY',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column57',value:'모선',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'항차',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column53',value:'선적지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column51',value:'C3오더번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'C3상차지',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column39',value:'차량ID카드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column37',value:'freeday여부',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'bookingNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'lineCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizTyeCd',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'80',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtWrkPlNm',inputType:'text',width:'100',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtYn',inputType:'',width:'70',allOption:'',chooseOption:'',ref:'',customFormatter:'scwin.gridFormat',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'반납완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'coparnYn',inputType:'text',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rtCopinoYn',inputType:'text',width:'120',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'freeDt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'vsslCd',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'portcnt',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'arvWrkPlNmCopy',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'c3OdrNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'c3DptWrkPlNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclIdCardNo',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'freeDtYn',displayMode:'label',readOnly:'true',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'left'},E:[{T:1,N:'w2:textbox',A:{style:'height:23px;',id:'spn_detail',label:''}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn white',id:'btn_Transfer',label:'저장',style:'display: none;',type:'button','ev:onclick':'scwin.btn_Transfer_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'COPINO전송'}]}]}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'display: none;'},E:[{T:1,N:'xf:input',A:{style:'width:144px; height:21px; ',id:'hid_srchSelfTransCoCd'}},{T:1,N:'xf:input',A:{id:'hid_srchSelfTransCoNm',style:'width:144px; height:21px; '}}]}]}]}]}]}]})