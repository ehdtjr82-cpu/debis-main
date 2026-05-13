/*amd /ui/ds/sd/odrmgnt/odrprewrk/sd_401_05_13b.xml 34337 0625a116cbef2786684ee5ecdc6a5e8b06d30b5b1334542b76d7303a125250fa */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobran',name:'점소코드',dataType:'text',length:'6'}},{T:1,N:'w2:key',A:{id:'stDt',name:'시작일자',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'endDt',name:'종료일자',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'declarStDt',name:'신고일자',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'declarEndDt',name:'신고일자',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'mrn',name:'MRN',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'msn',name:'MSN',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'gubun',name:'구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'alloccarPicId',name:'배차담당자ID',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'bulkYn',name:'벌크여부',dataType:'text',length:'1'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'co_ds_LoBran',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_master',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'docNo',name:'제출번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendBondZoneNm',name:'출발지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'viaBondZoneNm',name:'경유지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvBondZoneNm',name:'도착지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'mrn',name:'MRN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msn',name:'MSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'hsn',name:'화물관리번호-HSN',dataType:'text'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNrm',name:'컨테이너규격',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'사용자명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinoutBasisNo',name:'반출입근거번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndClsCd',name:'발송구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDt',name:'발송일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarDt',name:'신고일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarSeq',name:'신고순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyCont',name:'응답내역',dataType:'text'}},{T:1,N:'w2:column',A:{id:'replyStsCd',name:'응답상태코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rmk1',name:'name22',dataType:'text'}},{T:1,N:'w2:column',A:{id:'declarationYn',name:'name23',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'name24',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_send',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'lobranCd',name:'점소코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lobranNm',name:'점소명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrprewrk.RetrieveBondedTransVehclCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',id:'sbm_search',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',replace:'',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransVehclCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_send_submitdone','ev:submiterror':'',id:'sbm_send',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',replace:'',target:'',style:''}},{T:1,N:'xf:submission',A:{abortTrigger:'',action:'/ds.sd.odrmgnt.odrprewrk.SaveBondedTransVehclCMD.do',customHandler:'',encoding:'UTF-8',errorHandler:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',id:'sbm_save',instance:'',mediatype:'application/json',method:'post',mode:'asynchronous',processMsg:'',ref:'data:json,{"id":"ds_master","key":"IN_DS1"}',replace:'',target:'',style:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'true',src:'/ui/cm/fw/constants/DFWConstants.js',scopeVariable:'DFWConstants',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginDTO = {};
scwin.loUpperLobranCd = "";
scwin.userClsCd = "";
scwin.lobranCd = "";
scwin.strCurDate = "";
scwin.strPreDate = "";

//-------------------------------------------------------------------------
// 화면 로딩
//-------------------------------------------------------------------------
scwin.onpageload = async function () {
  scwin.loginDTO = $c.data.getMemInfo($p);
  scwin.userClsCd = scwin.loginDTO.userClsCd;
  scwin.lobranCd = scwin.loginDTO.lobranCd;
  scwin.loUpperLobranCd = scwin.loginDTO.loUpperLobranCd;
  scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
  scwin.strPreDate = $c.date.addDate($p, scwin.strCurDate, -1);
  scwin.f_fieldClear();

  // 점소코드 조회
  let sbm_co_ds_LoBran = {};
  sbm_co_ds_LoBran.action = "/ds.co.RetreiveLoBranCMD.do";
  let e = await $c.sbm.executeDynamic($p, sbm_co_ds_LoBran);
  co_ds_LoBran.setJSON(e.responseJSON.GAUCE);
  co_ds_LoBran.insertRow(0);
  co_ds_LoBran.setCellData(0, "lobranCd", "");
  co_ds_LoBran.setCellData(0, "lobranNm", "전체");
  lc_con_bran.setValue(scwin.lobranCd);
  chb_bulkYn.setValue("1");
  ed_bulkYn.hide();
  chb_bulkYn.hide();
  $c.gus.cfDisableObjects($p, [btn_save, btn_send]);
};

//-------------------------------------------------------------------------
// UDC 로딩
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);
};

//-------------------------------------------------------------------------
// 조회 필드 Clear
//-------------------------------------------------------------------------
scwin.f_fieldClear = function () {
  $c.gus.cfInitObjects($p, tbl_search);
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function () {
  if (dma_search.get("gubun") == "1" && (dma_search.get("declarStDt") == "" || dma_search.get("declarEndDt") == "")) {
    await $c.win.alert($p, "미신고건 조회시 신고일자를 입력하세요");
    return;
  }
  $c.sbm.execute($p, sbm_search);
};

//-------------------------------------------------------------------------
// 공통 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 3:
      // 담당자
      udc_alloccarPicId.cfCommonPopUp(function (rtnList) {
        $c.gus.cfSetReturnValue($p, rtnList, ed_alloccarPicId, txt_alloccarPicNm);
      }, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    default:
      break;
  }
};
scwin.f_openCommPopUpGrid = function (disGubun, row, pCode, pName, pClose, pAllSearch) {
  switch (disGubun) {
    case 1:
      // BL retrieveBondedTransInfoByBL2
      udc_comCode.cfCommonPopUp(function (rtnList) {
        if (rtnList != null && rtnList[0] != "N/A") {
          ds_master.setCellData(row, "blNo", rtnList[0]);
          ds_master.setCellData(row, "declarDt", rtnList[1]);
          ds_master.setCellData(row, "declarSeq", rtnList[2]);
          ds_master.setCellData(row, "crryinoutBasisNo", rtnList[3]);
          ds_master.setCellData(row, "mrn", rtnList[4]);
          ds_master.setCellData(row, "msn", rtnList[5]);
          ds_master.setCellData(row, "hsn", rtnList[6]);
          ds_master.setCellData(row, "sendBondZoneNm", rtnList[7]);
          ds_master.setCellData(row, "viaBondZoneNm", rtnList[8]);
          ds_master.setCellData(row, "arvBondZoneNm", rtnList[9]);
          return true;
        } else {
          ds_master.setCellData(row, "blNo", "");
          ds_master.setCellData(row, "declarDt", "");
          ds_master.setCellData(row, "declarSeq", "");
          ds_master.setCellData(row, "crryinoutBasisNo", "");
          ds_master.setCellData(row, "mrn", "");
          ds_master.setCellData(row, "msn", "");
          ds_master.setCellData(row, "hsn", "");
          ds_master.setCellData(row, "sendBondZoneNm", "");
          ds_master.setCellData(row, "viaBondZoneNm", "");
          ds_master.setCellData(row, "arvBondZoneNm", "");
        }
      }, pCode, pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, "보세운송리스트,BL번호,신고번호");
      break;
    default:
      break;
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) {
    return;
  }

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  let pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  } else {
    // inObj가 코드명 필드일 경우 팝업
    scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
  }
};

//-------------------------------------------------------------------------
// 일괄 전송
//-------------------------------------------------------------------------
scwin.f_send = async function () {
  let msg = await $c.win.confirm($p, "선택된 자료를 강제 전송하시겠습니까?");
  if (msg) {
    for (let i = 0; i < ds_master.getRowCount(); i++) {
      let rowJson = ds_master.getRowJSON(i);
      if (ds_master.getRowStatus(i) == "U") {
        if (rowJson.vehclNo == "") {
          await $c.win.alert($p, i + 1 + "번째 행의 차량번호를 입력하세요");
          return;
        } else if (!(rowJson.replyStsCd == "" || rowJson.replyStsCd == "E")) {
          await $c.win.alert($p, "미신고건이나 오류건만 강제처리할 수 있습니다.");
          return;
        } else {
          ds_master.setCellData(i, "sndClsCd", "9");
        }
      }
    }
    $c.sbm.execute($p, sbm_send);
  }
};

//-------------------------------------------------------------------------
// 엑셀 Download
//-------------------------------------------------------------------------
scwin.f_Export = async function () {
  if (ds_master.getRowCount() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return;
  }
  let options = {
    fileName: "보세운송수단배차내역",
    sheetName: "보세운송수단배차내역",
    type: "8+16"
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};

//-------------------------------------------------------------------------
// 저장
//-------------------------------------------------------------------------
scwin.f_save = async function () {
  let msg = await $c.win.confirm($p, MSG_CM_CRM_001);
  if (msg) {
    if (ds_master.getModifiedIndex().length > 0) {
      let chk = await $c.gus.cfValidate($p, [gr_master], null, true);
      if (chk) $c.sbm.execute($p, sbm_save);
    } else {
      $c.gus.cfAlertMsg($p, MSG_CM_ERR_001, ["보세운송신고차량관리"]);
    }
  }
};

//-------------------------------------------------------------------------
// 본선관리번호 validate
//-------------------------------------------------------------------------
scwin.f_checkMrnMsnHsn = async function (inObj) {
  if ($c.gus.cfIsNull($p, $c.gus.cfGetValue($p, inObj))) return;
  if (!$c.gus.cfIsNull($p, ed_blNo.getValue())) {
    let msg = await $c.win.confirm($p, "본선관리번호와 MRN/MSN/HSN은 동시에 입력할 수 없습니다.\n\n입력된 본선관리번호를 지우시겠습니까?");
    if (msg) ed_blNo.setValue("");else $c.util.getComponent($p, inObj).setValue("");
  }
};

// 구분 값 변경 > 컴포넌트 제어
scwin.lc_gubun_onchange = function (info) {
  let value = lc_gubun.getValue();
  if (value != "1") {
    $c.gus.cfEnableBtnOnly($p, [ed_alloccarPicId, txt_alloccarPicNm]);
    ed_bulkYn.hide();
    chb_bulkYn.hide();
    ;
  } else {
    $c.gus.cfDisableBtnOnly($p, [ed_alloccarPicId, txt_alloccarPicNm]);
    ed_alloccarPicId.setValue("");
    txt_alloccarPicNm.setValue("");
    ed_bulkYn.show("");
    chb_bulkYn.show("");
  }
};

// 전송 완료
scwin.sbm_send_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};

// 저장 완료
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_retrieve();
};
scwin.udc_alloccarPicId_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_alloccarPicId, txt_alloccarPicNm, 3);
};

// 조회 완료
scwin.sbm_search_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return;
  let rowCnt = ds_master.getRowCount();
  totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    $c.gus.cfDisableObjects($p, [btn_save, btn_send]);
  } else {
    if (lc_gubun.getValue() == "0" || lc_gubun.getValue() == "1" || lc_gubun.getValue() == "2" || lc_gubun.getValue() == "3") {
      $c.gus.cfEnableObjects($p, [btn_save, btn_send]);
    }
    gr_master.setFocusedCell(0, 0);
  }
};

// 그리드 BL 팝업 호출
scwin.gr_master_ontextimageclick = function (rowIndex, columnIndex) {
  let colId = gr_master.getColumnID(columnIndex);
  let rowJson = ds_master.getRowJSON(rowIndex);
  switch (colId) {
    case "blNo":
      let pCode = rowJson.blNo;
      scwin.f_openCommPopUpGrid(1, rowIndex, pCode, "", "T", "T");
      break;
    default:
      break;
  }
};
scwin.gr_master_onafteredit = function (rowIndex, columnIndex, value) {
  let colId = gr_master.getColumnID(columnIndex);
  let rowJson = ds_master.getRowJSON(rowIndex);
  switch (colId) {
    case "blNo":
      let pCode = rowJson.blNo;
      if (pCode != "") {
        scwin.f_openCommPopUpGrid(1, rowIndex, pCode, "", "F", "T");
      }
      break;
    default:
      break;
  }
};
scwin.ed_mrn_onblur = function (e) {
  scwin.f_checkMrnMsnHsn(ed_mrn);
};
scwin.ed_msn_onblur = function (e) {
  scwin.f_checkMrnMsnHsn(ed_msn);
};
scwin.ed_hsn_onblur = function (e) {
  scwin.f_checkMrnMsnHsn(ed_hsn);
};
scwin.udc_alloccarPicId_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(txt_alloccarPicNm, ed_alloccarPicId, 3, false);
};
scwin.udc_alloccarPicId_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(3, ed_alloccarPicId.getValue(), txt_alloccarPicNm.getValue(), "F", "F");
};
scwin.ed_cntrNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_cntrNo);
};
scwin.ed_blNo_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_blNo);
};
scwin.ed_mrn_oneditkeyup = function (info, e) {
  $c.gus.cfToUpper($p, ed_mrn);
};

//-------------------------------------------------------------------------
// Formatter
//-------------------------------------------------------------------------
scwin.f_customFormatter = function (data, formattedData, rowIndex, colIndex) {
  let colId = gr_master.getColumnID(colIndex);
  if (colId == "sndClsCd") {
    return $c.gus.decode($p, data, "1", "Y", "9", "관세청", "N");
  } else if (colId == "replyStsCd") {
    return $c.gus.decode($p, data, "A", "정상", "E", "오류", "Z", "정상", "대기");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 77px;',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'지사별 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',id:'lc_con_bran',search:'',style:'width:200px;',allOption:'',ref:'data:dma_search.lobran',searchTarget:'value',submenuSize:'auto',visibleRowNum:'11'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:itemset',A:{nodeset:'data:co_ds_LoBran'},E:[{T:1,N:'w2:label',A:{ref:'lobranNm'}},{T:1,N:'w2:value',A:{ref:'lobranCd'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차일자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_search',refEdDt:'endDt',refStDt:'stDt',style:'',edFromId:'ed_stDt',edToId:'ed_endDt',objTypeFrom:'data',objTypeTo:'data',mandatoryFrom:'true',mandatoryTo:'true',titleFrom:'조회시작일',titleTo:'조회종료일'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'1'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width: 120px;',allowChar:'a-zA-Z0-9',maxlength:'11',ref:'data:dma_search.cntrNo','ev:oneditkeyup':'scwin.ed_cntrNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'B/L번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'a-zA-Z0-9',class:'',editType:'focus',id:'ed_blNo',maxlength:'20',objType:'data',placeholder:'',ref:'data:dma_search.blNo',style:'width:230px;','ev:oneditkeyup':'scwin.ed_blNo_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'구분',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'','ev:onchange':'scwin.lc_gubun_onchange',id:'lc_gubun',objType:'key',ref:'data:dma_search.gubun',search:'',searchTarget:'value',style:'width: 100px;',submenuSize:'auto',validExp:'구분:yes',sortOption:'value'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'신고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미신고'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'정상'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:'',style:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'신고일자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{edFromId:'ed_declarStDt',edToId:'ed_declarEndDt',id:'udc_fromToCalendarDeclar',objTypeFrom:'data',objTypeTo:'data',refDataMap:'dma_search',refEdDt:'declarEndDt',refStDt:'declarStDt',style:'',titleFrom:'조회시작일',titleTo:'조회종료일',objTypeBtn:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MRN',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:' w100',id:'ed_mrn',placeholder:'',style:'',allowChar:'a-zA-Z0-9',maxlength:'11',editType:'focus','ev:onblur':'scwin.ed_mrn_onblur',ref:'data:dma_search.mrn',objType:'data','ev:oneditkeyup':'scwin.ed_mrn_oneditkeyup'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'MSN',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:' w70',editType:'focus','ev:onblur':'scwin.ed_msn_onblur',id:'ed_msn',maxlength:'4',placeholder:'',ref:'data:dma_search.msn',style:'',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'HSN ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{allowChar:'0-9',class:'',editType:'focus','ev:onblur':'scwin.ed_hsn_onblur',id:'ed_hsn',maxlength:'4',placeholder:'',ref:'data:dma_search.hsn',style:'width: 120px;',objType:'data'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'담당자',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{allowCharCode:'0-9',btnId:'btn_alloccarPicId',class:'',codeId:'ed_alloccarPicId','ev:onclickEvent':'scwin.udc_alloccarPicId_onclickEvent',id:'udc_alloccarPicId',maxlengthCode:'6',maxlengthName:'50',nameId:'txt_alloccarPicNm',objTypeCode:'Data',objTypeName:'data',popupID:'poupAlloccarPicId',selectID:'retrieveEmpInfo',style:'','ev:onviewchangeNameEvent':'scwin.udc_alloccarPicId_onviewchangeNameEvent',refDataCollection:'dma_search',code:'alloccarPicId','ev:onblurCodeEvent':'scwin.udc_alloccarPicId_onblurCodeEvent',skipOnBlurCodeValueEmpty:'N',skipOnBlurNameValueEmpty:'N','ev:onblurNameEvent':'scwin.udc_alloccarPicId_onblurNameEvent'}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'2'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'ed_bulkYn',label:'BULK 제외',ref:'',style:'',userData2:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_bulkYn',ref:'data:dma_search.bulkYn',renderType:'checkboxgroup',rows:'',selectedindex:'',style:'',refInitSync:'true'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_clear',style:'',type:'button','ev:onclick':'scwin.f_fieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'row-gap-8',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'보세운송신고차량관리',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'',gridDownYn:'Y',templateYn:'N',style:'',gridID:'gr_master',btnPlusYn:'Y',gridDownUserAuth:'X',gridUpYn:'N',id:'udc_topGrdBtn',btnUser:'Y',gridDownFn:'scwin.f_Export'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',autoFit:'lastColumn',visibleRowNum:'14',visibleRowNumFix:'true',validExp:'vehclNo:차량번호:yes',rowStatusVisible:'true',gridName:'보세운송신고차량관리','ev:ontextimageclick':'scwin.gr_master_ontextimageclick','ev:onafteredit':'scwin.gr_master_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column49',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'140',style:'',inputType:'text',id:'column59',value:'제출번호',class:'txt-blue'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'120',value:'컨테이너번호',class:'txt-blue'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'100',value:'차량번호',class:'txt-red'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'140',value:'출발지'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'경유지',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'도착지',width:'140'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'오더번호',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'MRN',width:'120'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'MSN',width:'70'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'HSN',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'text',style:'',id:'column52',value:'B/L',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'컨테이너<br/>종류',displayMode:'label',class:'txt-blue'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column33',value:'배차등록자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column31',value:'신고번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'전송<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column27',value:'전송일시',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'응답<br/>여부',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'column55',value:'오류사유',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'300',style:'',inputType:'text',id:'column61',value:'강제처리사유'}},{T:1,N:'w2:column',A:{width:'90',style:'',inputType:'text',id:'column63',value:'신고여부'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'chk',value:'',displayMode:'label',fixColumnWidth:'true',valueType:'binary'}},{T:1,N:'w2:column',A:{width:'140',style:'',inputType:'text',id:'docNo',value:'',readOnly:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'cntrNo',inputType:'text',removeBorderStyle:'false',width:'120',maxByteLength:'11'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'vehclNo',inputType:'text',removeBorderStyle:'false',width:'100',mandatory:'true',maxByteLength:'12'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'sendBondZoneNm',inputType:'text',removeBorderStyle:'false',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'viaBondZoneNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvBondZoneNm',inputType:'text',style:'',value:'',width:'140',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',style:'',value:'',width:'100',maxByteLength:'13'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'mrn',inputType:'text',style:'',value:'',width:'90',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msn',inputType:'text',style:'',value:'',width:'70',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'hsn',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'110',inputType:'textImage',style:'',id:'blNo',value:'',displayMode:'label',textAlign:'left',mandatory:'true',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'cntrNrm',value:'',displayMode:'label',maxByteLength:'4'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label',maxByteLength:'50'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'crryinoutBasisNo',value:'',displayMode:'label',displayFormat:'#####-######-#-########',maxByteLength:'20'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'sndClsCd',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'sndDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd HH:mm',readOnly:'true',dataType:'date',ioFormat:'yyyyMMddHHmmSS',blockSelect:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'replyStsCd',value:'',displayMode:'label',customFormatter:'scwin.f_customFormatter',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',inputType:'text',style:'',id:'replyCont',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'300',style:'',inputType:'text',id:'rmk1',value:'',textAlign:'center'}},{T:1,N:'w2:column',A:{width:'90',style:'',inputType:'text',id:'declarationYn',value:'',textAlign:'center'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',id:'udc_btGrdBtn',btnCancelYn:'Y',btnDelYn:'N',gridID:'gr_master',btnRowAddYn:'Y',btnRowDelYn:'Y',EngYn:'N'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button','ev:onclick':'scwin.f_save',objType:'bDelete'},E:[{T:1,N:'xf:label',E:[{T:3,text:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_send',style:'',type:'button',objType:'bDelete','ev:onclick':'scwin.f_send'},E:[{T:1,N:'xf:label',E:[{T:3,text:'강제처리'}]}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_comCode',selectID:'retrieveBondedTransInfoByBL2',codeId:'',validTitle:'',nameId:'',style:'display: none;',id:'udc_comCode'}}]}]}]}]}]})