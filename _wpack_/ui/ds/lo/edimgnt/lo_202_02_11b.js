/*amd /ui/ds/lo/edimgnt/lo_202_02_11b.xml 33632 6ab9e8c0a56311d6e67183ea651f67fa758ac70724f58dd8ed7a033aad6985a5 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'checkbox',dataType:'text'}},{T:1,N:'w2:column',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclYn',name:'차량보유여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSeq',name:'컨테이너순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrSizCd',name:'컨테이너사이즈',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTypCd',name:'컨테이너타입',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlCd',name:'출발작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlNm',name:'출발작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dptWrkPlClsCd',name:'출발작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlCd',name:'도착작업장코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlNm',name:'도착작업장',dataType:'text'}},{T:1,N:'w2:column',A:{id:'arvWrkPlClsCd',name:'도착작업장구분코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStDt',name:'작업시작일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkEndDt',name:'작업종료일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vehclNo',name:'차량번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryoutEdiFlag',name:'반출EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crryinEdiFlag',name:'반입EDI',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkStpCd',name:'작업단계코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkPathSeq',name:'오더작업경로순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrWrkStpSeq',name:'오더작업단계순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transWrkIndictNo',name:'운송작업지시번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'realMchtClntNo',name:'실화주거래처번호',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'lobranCd',name:'점소',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptStDt',name:'출발예정시작일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptEndDt',name:'출발예정종료일',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'selfClsCd',name:'자가구분코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ediSndClsCd',name:'EDI전송구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'ediKndCd',name:'EDI종류',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlCd',name:'출발지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'dptWrkPlNm',name:'출발지명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlCd',name:'도착지코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'arvWrkPlNm',name:'도착지명',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/dbl.ds.lo.edimgnt.RetrieveEdiSendCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_condition","key":"IN_DS1"},{"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_results","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){// Popup Check 용 Hidden 값
scwin.hid_chkBilgClntNo = "";
scwin.grWorkImplementTotCnt = 0;
scwin.onpageload = function () {
  // 사용자 user check
  if ($c.data.getMemInfo($p, "userId") == "281776") {
    //체인포탈 코피노 전송 관련 함수
    scwin.f_sendChainPotalCopino();
  }

  //공통코드
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_lc_odrKndCd",
    opt: {
      "range": "1,C"
    }
  }];
  $c.data.setCommonCode($p, codeOptions);

  //공통 콤보
  const param = [{
    method: "getLuxeComboData",
    param1: "WorkImplementEBC",
    param2: "retriveLobran2CodeList",
    compID: "acb_lc_lobranCd"
  }];
  $c.data.setGauceUtil($p, param);
};
scwin.onUdcCompleted = function () {
  scwin.strCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate);
};
scwin.ondataload = function () {
  scwin.lobranCd = $c.data.getMemInfo($p, "loUpperLobranCd"); //  물류상위점소코드
  acb_lc_lobranCd.setValue(scwin.lobranCd);
};

/**
 * 조회조건 초기화
 */
scwin.btn_fieldClear_onclick = function (e) {
  dma_condition.setEmptyValue();

  // 초기값 설정
  acb_lc_lobranCd.setValue(scwin.lobranCd); // 배차점소
  udc_fromToCalendar.setInitDate(scwin.strCurDate, scwin.strCurDate); // 출발예정일
};

/**
 * 출발지 popup
 */
scwin.udc_comCode_dpt_onclickEvent = function (e) {
  udc_comCode_dpt.cfCommonPopUp(scwin.udc_comCode_dpt_callBackFunc, ed_dptWrkPlCd.getValue(), ed_dptWrkPlNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 출발지 popup callback
 */
scwin.udc_comCode_dpt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_dptWrkPlCd, ed_dptWrkPlNm);
};

/**
 * 출발지 popup code onblur
 */
scwin.udc_comCode_dpt_onblurCodeEvent = function (e) {
  if (ed_dptWrkPlCd.getValue() === "") {
    ed_dptWrkPlNm.setValue("");
  } else {
    udc_comCode_dpt.cfCommonPopUp(scwin.udc_comCode_dpt_callBackFunc, ed_dptWrkPlCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

/**
 * 출발지 popup name onviewchange
 */
scwin.udc_comCode_dpt_onviewchangeNameEvent = function (info) {
  if (ed_dptWrkPlNm.getValue() === "") {
    ed_dptWrkPlCd.setValue("");
  } else {
    udc_comCode_dpt.cfCommonPopUp(scwin.udc_comCode_dpt_callBackFunc, "", info.newValue, "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

/**
 * 도착지 popup
 */
scwin.udc_comCode_arv_onclickEvent = function (e) {
  udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, ed_arvWrkPlCd.getValue(), ed_arvWrkPlNm.getValue(), "F", null, null, null, null, null, null, null, null, null, null, null, null, null);
};

/**
 * 도착지 popup callback
 */
scwin.udc_comCode_arv_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_arvWrkPlCd, ed_arvWrkPlNm);
};

/**
 * 도착지 popup code onblur
 */
scwin.udc_comCode_arv_onblurCodeEvent = function (e) {
  if (ed_arvWrkPlCd.getValue() === "") {
    ed_arvWrkPlNm.setValue("");
  } else {
    udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, ed_arvWrkPlCd.getValue(), "", "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

/**
 * 도착지 popup name onviewchange
 */
scwin.udc_comCode_arv_onviewchangeNameEvent = function (info) {
  if (ed_arvWrkPlNm.getValue() === "") {
    ed_arvWrkPlCd.setValue("");
  } else {
    udc_comCode_arv.cfCommonPopUp(scwin.udc_comCode_arv_callBackFunc, "", info.newValue, "T", null, null, null, null, null, null, null, null, null, null, null, null, null);
  }
};

/**
 * 조회
 */
scwin.btn_retrieve_onclick = async function (e) {
  // From - To 입력 확인
  if (!(await $c.gus.cfValidate($p, [ed_dptStDt, ed_dptEndDt]))) {
    return;
  }

  // keyin
  if (WebSquare.util.parseFloat(ed_dptStDt.getValue()) > WebSquare.util.parseFloat(ed_dptEndDt.getValue())) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.").then(() => {
      ed_dptStDt.focus();
    });
    return false;
  }

  // 오더번호가 입력된 경우 오더번호 형식 확인
  const odrNo = ed_odrNo.getValue();
  if (!$c.util.isEmpty($p, odrNo)) {
    if (!(await $c.gus.cfValidate($p, [ed_odrNo]))) return;
  }
  dma_condition.set("odrNo", ed_odrNo.getValue().toUpperCase());

  // EDI전송구분
  acb_lc_ediSndClsCd.setValue("");
  $c.sbm.execute($p, sbm_retrieve);
};

/**
 * 조회 후처리
 */
scwin.sbm_retrieve_submitdone = function () {
  let nCnt = ds_results.getRowCount();
  if (nCnt > 0) {
    gr_results.setFocusedCell(0, "selfClsCd");
    total.setValue(nCnt);
  } else {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
};

/**
 * EDI전송구분 변경
 */
scwin.acb_lc_ediSndClsCd_onchange = function (info) {
  const {
    newValue
  } = info;
  if ($c.util.isEmpty($p, newValue)) {
    ds_results.clearFilter();
    total.setValue(ds_results.getAllFilteredJSON().length);
    return;
  }
  const fn_tmpFilter = function (cellData, tmpParam, rowIdx) {
    const crryinEdiFlag = ds_results.getCellData(rowIdx, "crryinEdiFlag");
    if (cellData == newValue || crryinEdiFlag == newValue) {
      return true;
    }
    return false;
  };
  ds_results.clearFilter();
  ds_results.setColumnFilter({
    type: 'func',
    colIndex: 'crryoutEdiFlag',
    key: fn_tmpFilter,
    condition: 'and'
  });
  total.setValue(ds_results.getAllFilteredJSON().length);
};

/**
 * 자가구분 formatter
 */
scwin.selfClsCd = function (data) {
  return $c.gus.decode($p, data, "1", "자가", "당사");
};

/**
 * 배차여부 formatter
 */
scwin.vehclYn = function (data) {
  return $c.gus.decode($p, data, "0", "N", "Y");
};

/**
 * 반출EDI formatter
 */
scwin.out_edi = function (data) {
  return $c.gus.decode($p, data, "0", "전송대기", "1", "전송완료", "N", "미등록", "3", "미전송", "5", "항목오류", "");
};

/**
 * 반입EDI formatter
 */
scwin.in_edi = function (data) {
  return $c.gus.decode($p, data, "0", "전송대기", "1", "전송완료", "N", "미등록", "3", "미전송", "5", "항목오류", "");
};

/**
 * grid DBclick
 */
scwin.gr_results_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  const clickVal = ds_results.getCellData(rowIndex, columnId);
  const ediKndCd = acb_lc_ediKndCd.getValue();

  // 2026.02.26 TOBE 변경사항
  // 조회조건 EDI종류가 1(CODECO) 또는 2(MOVEMENT)인 경우 팝업 호출 없음

  // 반출EDI
  if (columnId == "crryoutEdiFlag" && clickVal != "") {
    if (ediKndCd == "0") {
      scwin.f_crryInOutEDI(1, "O");
    }
  }

  // 반입EDI
  if (columnId == "crryinEdiFlag" && clickVal != "") {
    if (ediKndCd == "0") {
      scwin.f_crryInOutEDI(1, "I");
    }
  }
};

/**
 * 연동 페이지 호출
 */
scwin.f_crryInOutEDI = async function (gubun, inoutGubun) {
  if (ds_results.getRowCount() == 0) {
    return;
  }
  const row = ds_results.getRowPosition();
  const {
    odrNo,
    vehclNo,
    cntrNo,
    cntrSeq,
    odrWrkPathSeq,
    odrWrkStpSeq,
    dptWrkPlCd,
    arvWrkPlCd,
    dptWrkPlNm,
    arvWrkPlNm,
    crryinEdiFlag,
    crryoutEdiFlag,
    transWrkIndictNo,
    wrkStDt,
    wrkEndDt
  } = ds_results.getRowJSON(row);
  let url;
  let opts;

  // EDI종류
  switch (gubun) {
    case 1:
      //Copino
      if ($c.util.isEmpty($p, vehclNo)) {
        $c.gus.cfAlertMsg($p, "운송차량이 없습니다");
        return;
      }
      var paramJson = {
        mdiTitle: "반출입정보EDI등록",
        crryoutEdiType: "CO",
        crryinEdiType: "CO",
        arrParam: [["1" // 조회구분 ("" : 운송작업지시, "1" : 반출입)
        , transWrkIndictNo, odrNo, cntrSeq, odrWrkPathSeq, odrWrkStpSeq, "", vehclNo, "", wrkStDt, wrkEndDt, cntrNo, dptWrkPlCd, arvWrkPlCd, dptWrkPlNm, arvWrkPlNm, "CO", "CO"]]
      };
      url = "/ui/ds/op/wrkplan/transwrkplan/op_202_02_21p.xml";
      opts = {
        id: "op_202_02_21p",
        popupName: "반출입예정정보EDI등록",
        modal: true,
        type: "browserPopup",
        title: "반출입예정정보EDI등록",
        width: "1100",
        height: "850"
      };

      // $c.win.openMenu("협력업체차량작업지시등록(컨테이너)", "", pgmId, null, { openAction: "exist", mdiTitle : "협력업체차량작업지시등록(컨테이너)"});
      // $c.win.openMenu("반출입예정정보EDI등록", url, "op_202_02_21p.xml", paramJson);
      $c.win.openPopup($p, url, opts, paramJson);
      break;

    // case 2: //Codeco
    //     if (inoutGubun == "O") {//반출 
    //         v_crryinoutCls = "2";
    //     } else {//반입 
    //         v_crryinoutCls = "1";
    //     }

    //     url = "/ui/ds/lo/edimgnt/lo_300_01_13b.xml";
    //     opts = {
    //         id : "lo_300_01_13b",	
    //         popupName : "CODECO 전송화면",
    //         modal : true,
    //         type : "browserPopup",
    //         title : "반출입예정정보EDI등록",
    //         width : "1100",
    //         height : "850"
    //     }

    //     param1 += "odrNo=" + odrNo + "&cntrSeq=" + cntrSeq + "&wrkPathSeq=" + wrkPathSeq + "&wrkStpSeq=" + wrkStpSeq
    //         + "&wrkPlCd=" + wrkPlCd + "&crryinoutCls=" + crryinoutCls

    //     $c.win.openMenu("CODECO 전송화면", "/ui/ds/lo/edimgnt/lo_300_01_13b.xml", "lo_300_01_13b.xml", param1);
    //     break;

    // case 3: //Movementd
    //     if (inoutGubun == "O") {//반출 
    //         v_crryinoutCls = "O";
    //     } else {//반입 
    //         v_crryinoutCls = "I";
    //     }

    //     param2 += "odrNo=" + odrNo + "&cntrSeq=" + cntrSeq + "&wrkPathSeq=" + wrkPathSeq + "&wrkStpSeq=" + wrkStpSeq
    //         + "&lineCd=" + lineCd + "&realMchtClntNo=" + realMchtClntNo + "&crryinoutCls=" + crryinoutCls

    //     $c.win.openMenu("Movementd 전송화면", "/ui/ds/lo/edimgnt/lo_300_01_14b.xml", "lo_300_01_14b.xml", param2);
    //     break;

    default:
      break;
  }
};

/**
 * [반출등록]
 */
scwin.btn_crryout_onclick = function (e) {
  scwin.f_switchTabMenu(2);
};

/**
 * [반입등록]
 */
scwin.btn_crryin_onclick = function (e) {
  scwin.f_switchTabMenu(1);
};

/**
 * 화면이동
 */
scwin.f_switchTabMenu = function (gubun) {
  let v_msg = "";
  let menuNm = "";
  let url = "";
  let pgmId = "";
  let param = "";
  const rowIndex = ds_results.getRowPosition();
  if (ds_results.getRowCount() == 0 || rowIndex < 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_ERR_056, new Array("오더"));
    return;
  } else {
    const {
      odrNo,
      cntrNo,
      dptWrkPlCd,
      dptWrkPlNm,
      dptWrkPlClsCd,
      arvWrkPlCd,
      arvWrkPlNm,
      arvWrkPlClsCd
    } = ds_results.getRowJSON(rowIndex);
    if ($c.gus.cfIsNull($p, odrNo)) {
      $c.gus.cfAlertMsg($p, "오더를 선택하십시요");
      return;
    }
    switch (gubun) {
      case 1:
        //반입등록 
        if (arvWrkPlClsCd != "C") {
          v_msg = `[오더번호 : ${odrNo} 도착작업장 : ${arvWrkPlNm}]</br>반입등록을 할 수 없는 오더입니다`;
          $c.gus.cfAlertMsg($p, v_msg);
          return;
        }
        menuNm = "반입등록";
        url = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_05b.xml";
        pgmId = "op_301_01_05b.xml";
        param = {
          odrNo: odrNo,
          wrkPlCd: arvWrkPlCd,
          cntrNo: cntrNo
        };
        break;
      case 2:
        //반출등록 
        if (dptWrkPlClsCd != "C") {
          v_msg = `[오더번호 : ${odrNo} 출발작업장 : ${dptWrkPlNm}]</br>반출등록을 할 수 없는 오더입니다`;
          $c.gus.cfAlertMsg($p, v_msg);
          return;
        }
        menuNm = "반출등록";
        url = "/ui/ds/op/wrkrslts/cywrkrslts/op_301_01_06b.xml";
        pgmId = "op_301_01_06b.xml";
        param = {
          odrNo: odrNo,
          wrkPlCd: dptWrkPlCd,
          cntrNo: cntrNo
        };
        break;
      default:
        break;
    }
    $c.win.openMenu($p, menuNm, url, pgmId, param, {
      openAction: "exist"
    });
  }
};

/**
 * 반출EDI / 반입EDI celltype 변경
 */
scwin.setInputType = function (info) {
  const {
    colID,
    colIndex,
    displayRowIndex,
    realRowIndex,
    rowIndex,
    value
  } = info;
  let returnInfo;
  if (colID == "crryoutEdiFlag" || colID == "crryinEdiFlag") {
    const ediKndCd = acb_lc_ediKndCd.getValue();
    if (ediKndCd == "0") {
      returnInfo = {
        id: "dynamic_link_" + rowIndex + "_" + colIndex,
        inputType: "link",
        options: {
          "title": "새창"
        }
      };
    } else {
      returnInfo = {
        id: "dynamic_text_" + rowIndex + "_" + colIndex,
        inputType: "text",
        options: {
          readOnly: true
        }
      };
    }
  }
  return returnInfo;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'배차점소',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_lobranCd',search:'start',style:'width:200px;',submenuSize:'auto',mandatory:'true',visibleRowNum:'10',displayMode:'value delim label',ref:'data:dma_condition.lobranCd'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'출발예정일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'udc_fromToCalendar',refDataMap:'dma_condition',refEdDt:'dptEndDt',refStDt:'dptStDt',style:'',edFromId:'ed_dptStDt',edToId:'ed_dptEndDt',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_odrNo',placeholder:'',style:'width:150px;text-transform: uppercase;',maxlength:'13',allowChar:'0-9A-Za-z',mandatory:'true',ref:'',validateOnInput:'true',title:'오더번호',fixLength:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'자가구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_selfClsCd',search:'start',style:'width:150px;',submenuSize:'auto',ref:'data:dma_condition.selfClsCd',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'자가'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'당사'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EDI전송구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_ediSndClsCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.ediSndClsCd',visibleRowNum:'10','ev:onchange':'scwin.acb_lc_ediSndClsCd_onchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'w2:value'}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미등록'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미전송'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'3'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송대기'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'전송완료'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'항목오류'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'5'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'컨테이너번호',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cntrNo',placeholder:'',style:'width:150px;',maxlength:'13',allowChar:'0-9A-Z',ref:'data:dma_condition.cntrNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'true',chooseOptionLabel:':전체',class:'',editType:'select',id:'acb_lc_odrKndCd',ref:'data:dma_condition.odrKndCd',search:'start',style:'width:200px;',submenuSize:'auto',visibleRowNum:'10'},E:[{T:1,N:'w2:choices'}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'EDI종류',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_lc_ediKndCd',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'data:dma_condition.ediKndCd',visibleRowNum:'10'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'COPINO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'0'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CODECO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'1'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'MOVEMENT'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'2'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'출발지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dptWrkPlCd',nameId:'ed_dptWrkPlNm',id:'udc_comCode_dpt',selectID:'retrieveContainerShuttleWrkPlInfo',maxlengthCode:'6',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_comCode_dpt_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_dpt_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_dpt_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',refDataCollection:'dma_condition',code:'dptWrkPlCd',name:'dptWrkPlNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'도착지',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_arvWrkPlCd',nameId:'ed_arvWrkPlNm',id:'udc_comCode_arv',selectID:'retrieveContainerShuttleWrkPlInfo',UpperFlagCode:'1',maxlengthCode:'6','ev:onclickEvent':'scwin.udc_comCode_arv_onclickEvent','ev:onblurCodeEvent':'scwin.udc_comCode_arv_onblurCodeEvent','ev:onviewchangeNameEvent':'scwin.udc_comCode_arv_onviewchangeNameEvent',allowCharCode:'0-9a-zA-Z',code:'arvWrkPlCd',refDataCollection:'dma_condition',name:'arvWrkPlNm'}}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label'}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'오더작업진행 목록',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridDownYn:'N',gridUpYn:'N',gridID:'gr_results',btnPlusYn:'Y',templateYn:'N',btnUser:'Y'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',style:'',visibleRowNum:'13',visibleRowNumFix:'true',focusMode:'row',focusMove:'true','ev:oncelldblclick':'scwin.gr_results_oncelldblclick',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'hd_chk',inputType:'text',value:'checkbox',width:'70'}},{T:1,N:'w2:column',A:{width:'79',inputType:'text',id:'column39',value:'자가<br/>구분',displayMode:'label'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'배차<br/>여부',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'SEQ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'컨테이너',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'SZ',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'TP',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',value:'출발지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',value:'도착지',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',value:'출발일자',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column47',value:'도착일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column45',value:'차량번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',value:'반출EDI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column41',value:'반입EDI',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column37',value:'출발작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column35',value:'출발작업장구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column33',value:'도착작업장코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column31',value:'도착작업장구분코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column29',value:'작업단계코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column27',value:'작업경로순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'작업단계순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column23',value:'운송작업지시번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column51',value:'LINE코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column53',value:'실화주거래처번호',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'text',width:'70',hidden:'true',hiddenCol:'true'}},{T:1,N:'w2:column',A:{width:'79',inputType:'text',id:'selfClsCd',displayMode:'label',displayFormatter:'scwin.selfClsCd'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vehclYn',inputType:'text',width:'70',displayFormatter:'scwin.vehclYn'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSeq',inputType:'text',width:'70',textAlign:'right'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrSizCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cntrTypCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dptWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'arvWrkPlNm',inputType:'text',width:'80',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'wrkStDt',inputType:'calendar',width:'100',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'calendar',id:'wrkEndDt',displayMode:'label',displayFormat:'yyyy/MM/dd'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vehclNo',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',id:'crryoutEdiFlag',displayMode:'label',displayFormatter:'scwin.out_edi',typeGetter:'scwin.setInputType'}},{T:1,N:'w2:column',A:{width:'100',inputType:'custom',id:'crryinEdiFlag',displayMode:'label',displayFormatter:'scwin.in_edi',typeGetter:'scwin.setInputType'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'dptWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'dptWrkPlClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'arvWrkPlCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'arvWrkPlClsCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'wrkStpCd',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrWrkPathSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'odrWrkStpSeq',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'transWrkIndictNo',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'lineCd',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'realMchtClntNo',value:'',displayMode:'label',hidden:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'total',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_crryout',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_crryout_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반출등록'}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'btn_crryin',label:'저장',style:'',type:'button','ev:onclick':'scwin.btn_crryin_onclick'},E:[{T:1,N:'xf:label',E:[{T:3,text:'반입등록'}]}]}]}]},{T:1,N:'xf:trigger',A:{class:'btn ',id:'trigger4',label:'저장',style:'display: none',type:'button'},E:[{T:1,N:'xf:label',E:[{T:3,text:'운송작업지시등록'}]}]}]}]}]}]}]})