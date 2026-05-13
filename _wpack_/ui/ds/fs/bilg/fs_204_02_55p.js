/*amd /ui/ds/fs/bilg/fs_204_02_55p.xml 39191 fd4820ac4eb8428832d7e8bdbbb2261513d4906d597ee241075242ca8e474f87 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',id:'ds_order',repeatNode:'map',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrDt',name:'발주일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgLodeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptCd',name:'매출귀속',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellLodeptNm',name:'상대부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bilgClntNm',name:'청구거래처명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cvsslMgntNo',name:'본선관리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'lineNm',name:'라인명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:column',A:{id:'wrkDt',name:'작업일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'transDst',name:'#N/A',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellVol',name:'매출물량',dataType:'number'}},{T:1,N:'w2:column',A:{id:'sellUnitCd',name:'매출단위코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmtFcrc',name:'매출금액외화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세',dataType:'number'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'총금액',dataType:'number'}},{T:1,N:'w2:column',A:{id:'bilgIntendDt',name:'청구예정일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'vsslCdNm',name:'name25',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_order_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'bilgLodeptCd',name:'청구물류부서코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd01',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd02',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'impExpDomesticClsCd03',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'bilgClntNo',name:'청구거래처번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConCd2',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cntrNo',name:'컨테이너번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commCd',name:'품명코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'commNm',name:'품명',dataType:'text'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtFm',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConDtTo',name:'#N/A',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'LINE코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'Vessel코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'항차',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'CNTR/BULK 구분',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sellItemCd',name:'매출코드',dataType:'text'}},{T:1,N:'w2:key',A:{id:'odrKndCd',name:'오더종류',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_order_retrieve',action:'/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_order_con","key":"IN_DS1"},{"id":"ds_order","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_order","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_order_retrieve_submitdone','ev:submiterror':'scwin.sbm_order_retrieve_submiterror',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//물류/청구/청구실적관리/   오더조회팝업
//조회조건 : 매출물류부서 : 6P40, 오더일자 : 20250601 ~ 20250831, [수입,수출,내수 : 모두체크]
//메인화면 : 물류>청구>화주청구>수출입거래명세서작성 : 조회조건에서 오더번호 선택 - 오더조회팝업

scwin.onpageload = function () {
  //console.log("onpageload");
};

//scwin.strCurDate = "20200901";// 현재일자를 구한다.
//scwin.strPreDate = "20200901";

scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); // 서버를 기준으로 현재 날짜 반환
scwin.strPreDate = scwin.strCurDate.substring(0, 6) + "01";
scwin.f_OnLoad = function () {
  //f_Retrieve();
  //console.log("fs_204_02_55p.f_OnLoad");
};

//UDC 정보가 처리 완료된 후 처리(TOBE scwin.onpageload밑에 정의)
scwin.onUdcCompleted = function () {
  const codeOptions = [{
    grpCd: "SD113",
    compID: "acb_odrKndCd"
  } // 오더종류
  ];
  $c.data.setCommonCode($p, codeOptions);
  //console.log("fs_204_02_55p.onUdcCompleted");

  ed_qryConDtFm.setValue(scwin.strPreDate);
  ed_qryConDtTo.setValue(scwin.strCurDate);
  //ed_bilgLodeptCd.focus();

  //ed_bilgLodeptCd.setValue("4A2");
  //ed_vsslCd.setValue("CYOK");
};
scwin.f_Retrieve = async function () {
  //console.log('scwin.f_Retrieve');

  //validation check
  if (!(await $c.gus.cfValidate($p, [ed_bilgLodeptCd, ed_qryConDtFm, ed_qryConDtTo]))) {
    return;
  }
  //조회시작일자가 더 클경우 체크
  if (!(await $c.gus.cfIsAfterDate($p, ed_qryConDtFm.getValue(), ed_qryConDtTo.getValue()))) {
    await $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }
  ds_order_con.setEmptyValue();
  ds_order_con.set("bilgClntNo", ed_bilgClntNo.getValue());
  var qryConKnd = "";
  if (acb_qryConKnd.getValue() == "오더") {
    qryConKnd = "오더일자";
  } else if (acb_qryConKnd.getValue() == "실적") {
    qryConKnd = "실적일자";
  } else if (acb_qryConKnd.getValue() == "회계") {
    qryConKnd = "회계일자";
  } else if (acb_qryConKnd.getValue() == "청구인식일") {
    qryConKnd = "청구인식일";
  }
  ds_order_con.set("qryConKnd", qryConKnd);
  ds_order_con.set("qryConDtFm", ed_qryConDtFm.getValue());
  ds_order_con.set("qryConDtTo", ed_qryConDtTo.getValue());
  var qryConKnd2 = "";
  var cntrNo = ed_qryConCd.getValue();
  var commCd = '';
  var commNm = '';
  var blNo = '';
  if (acb_qryConKnd2.getValue() == "CNTR") {
    qryConKnd2 = "CNTR-NO";
    cntrNo = ed_qryConCd.getValue();
    commCd = '';
    commNm = '';
    blNo = '';
  } else if (acb_qryConKnd2.getValue() == "품명") {
    qryConKnd2 = "품명코드";
    commCd = ed_qryConCd.getValue();
    cntrNo = '';
    commNm = '';
    blNo = '';
  } else if (acb_qryConKnd2.getValue() == "품목") {
    qryConKnd2 = "품목명";
    commNm = ed_qryConCd.getValue();
    cntrNo = '';
    commCd = '';
    blNo = '';
  } else if (acb_qryConKnd2.getValue() == "BL") {
    qryConKnd2 = "BL-NO";
    blNo = ed_qryConCd.getValue();
    cntrNo = '';
    commCd = '';
    commNm = '';
  }
  ds_order_con.set("impExpDomesticClsCd01", "");
  ds_order_con.set("impExpDomesticClsCd02", "");
  ds_order_con.set("impExpDomesticClsCd03", "");
  console.log('index=>' + cbx_impExpDomesticClsCd.getSelectedIndex());
  if (cbx_impExpDomesticClsCd.getSelectedIndex().length > 0) {
    var sItm = cbx_impExpDomesticClsCd.getSelectedIndex().split(" ");
    for (var i = 0; i < sItm.length; i++) {
      console.log('sItm[i]=>' + sItm[i]);
      //if(cbx_impExpDomesticClsCd.getSelectedIndex().indexOf("0")){
      if (sItm[i] == 0) {
        ds_order_con.set("impExpDomesticClsCd01", "I");
      }
      if (sItm[i] == 1) {
        ds_order_con.set("impExpDomesticClsCd02", "O");
      }
      if (sItm[i] == 2) {
        ds_order_con.set("impExpDomesticClsCd03", "D");
      }
    }
  }
  var cbxIdx = 0;
  cbxIdx = rd_transCargoClsCd.getSelectedIndex();
  //console.log('cbxIdx=>'+cbxIdx);

  if (1 == cbxIdx) {
    ds_order_con.set("transCargoClsCd", "C");
  } else if (2 == cbxIdx) {
    ds_order_con.set("transCargoClsCd", "B");
  } else {
    ds_order_con.set("transCargoClsCd", "");
  }
  ds_order_con.set("bilgLodeptCd", ed_bilgLodeptCd.getValue());
  ds_order_con.set("qryConKnd2", qryConKnd2);
  ds_order_con.set("qryConCd", ed_qryConCd.getValue());
  ds_order_con.set("cntrNo", cntrNo);
  ds_order_con.set("commCd", commCd);
  ds_order_con.set("commNm", commNm);
  ds_order_con.set("blNo", blNo);
  ds_order_con.set("lineCd", ed_lineCd.getValue());
  ds_order_con.set("vsslCd", ed_vsslCd.getValue());
  ds_order_con.set("portcnt", ed_portcnt.getValue());
  ds_order_con.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  ds_order_con.set("sellItemCd", ed_sellItemCd.getValue());
  ds_order_con.set("odrKndCd", acb_odrKndCd.getValue());

  //sbm_order_retrieve.Action = "/ds.fs.bilg.bilgrsltsmgnt.RetrieveOrderListCMD.do";

  ds_order.setJSON([]);
  $p.executeSubmission(sbm_order_retrieve);
};
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면
  var clntNo = ed_bilgClntNo.getValue();
  switch (disGubun) {
    case 1:
      //청구부서코드팝업
      //rtnList = cfCommonPopUp('retrieveOpDeptCdInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      udc_bilgLodeptCd.setSelectId('retrieveOpDeptCdInfo');
      rtnList = udc_bilgLodeptCd.cfCommonPopUp(scwin.udc_bilgLodeptCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm);  // 청구부서코드, 청구부서명
      break;
    case 2:
      //청구처코드팝업
      //rtnList = cfCommonPopUp('retrieveClntInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      udc_bilgClntNo.setSelectId('retrieveClntInfo');
      rtnList = udc_bilgClntNo.cfCommonPopUp(scwin.udc_bilgClntNoCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_bilgClntNo, ed_bilgClntNm);  // 청구처코드, 청구처명
      break;
    case 3:
      //오더코드팝업
      //rtnList = cfCommonPopUp('',pCode.trim(),pName,pClose,null,null,null,null,null,null,null,null,null,null,pAllSearch,null);

      //cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // 오더코드, 오더명
      break;
    case 4:
      //CNTR-NO코드팝업
      //rtnList = udc_qryConCd.cfCommonPopUp('retrieveConteinerNo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      udc_qryConCd.setSelectId('retrieveConteinerNo');
      rtnList = udc_qryConCd.cfCommonPopUp(scwin.udc_qryConCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // CNTR-NO코드, CNTR-NO명
      break;
    case 5:
      //품명코드팝업
      //rtnList =  udc_qryConCd.cfCommonPopUp('retrieveCommInfo', pCode.trim(), pName, pClose, null, null, null, null, ',,4,,' + clntNo, null, null, null, null, null, pAllSearch, '품명,품명코드,품명');
      udc_qryConCd.setSelectId('retrieveCommInfo');
      rtnList = udc_qryConCd.cfCommonPopUp(scwin.udc_qryConCdCallback, pCode.trim(), pName, pClose, null, null, null, null, ',,4,,' + clntNo, null, null, null, null, null, pAllSearch, '품명,품명코드,품명');

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // 품명코드, 품명명
      break;
    case 6:
      //B/L코드팝업
      //rtnList = udc_qryConCd.cfCommonPopUp('retrieveBlNoList', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      udc_qryConCd.setSelectId('retrieveBlNoList');
      rtnList = udc_qryConCd.cfCommonPopUp(scwin.udc_qryConCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      /*
                  //cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // B/L코드, B/L명
                  if (rtnList != undefined) {
                      $c.gus.cfSetValue(ed_qryConCd, rtnList[1]);
                      $c.gus.cfSetHiddenValue(ed_qryConCd, rtnList[1]);
                  }
      */
      break;
    case 7:
      //품목코드팝업
      //rtnList = cfCommonPopUp('retrieveCommInfo', pCode.trim(), pName, pClose, null, null, null, null, ',,3,,' + clntNo, null, null, null, null, null, pAllSearch, '품목,품목코드,품목');
      udc_qryConCd.setSelectId('retrieveCommInfo');
      rtnList = udc_qryConCd.cfCommonPopUp(scwin.udc_qryConCdCallback, pCode.trim(), pName, pClose, null, null, null, null, ',,3,,' + clntNo, null, null, null, null, null, pAllSearch, '품목,품목코드,품목');

      //$c.gus.cfSetReturnValue(rtnList, ed_qryConCd, ed_qryConNm);  // 품목코드, 품목명
      break;
    case 8:
      //LINE코드팝업
      //rtnList = cfCommonPopUp('retrieveLineInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      udc_qryConCd.setSelectId('retrieveLineInfo');
      rtnList = udc_qryConCd.cfCommonPopUp(scwin.udc_lineCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_lineCd, ed_lineNm);  // LINE코드, LINE명
      break;
    case 10:
      //매출항목팝업
      //rtnList = cfCommonPopUp('retrieveSelpchItemInfo', pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      udc_sellItemCd.setSelectId('retrieveSelpchItemInfo');
      rtnList = udc_sellItemCd.cfCommonPopUp(scwin.udc_sellItemCdCallback, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);

      //$c.gus.cfSetReturnValue(rtnList, ed_sellItemCd, ed_sellItemNm);  // 매출항목코드, 매출항목명
      break;
    default:
      break;
  }
};
scwin.f_QryConPopUp = function () {
  if (acb_qryConKnd2.getValue() == "품명") {
    scwin.f_openCommonPopUp(5, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd2.getValue() == "품목") {
    scwin.f_openCommonPopUp(7, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd2.getValue() == "BL") {
    scwin.f_openCommonPopUp(6, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  } else if (acb_qryConKnd2.getValue() == "CNTR") {
    scwin.f_openCommonPopUp(4, ed_qryConCd.getValue(), ed_qryConNm.getValue(), 'F', 'F');
  }
};
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업
  if (isCode == null || isCode == true) {
    if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "품명") {
      scwin.f_openCommonPopUp(5, pVal, '', 'T', 'T');
    } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "품목") {
      scwin.f_openCommonPopUp(7, pVal, '', 'T', 'T');
    } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "BL") {
      scwin.f_openCommonPopUp(6, pVal, '', 'T', 'T');
    } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "CNTR") {
      scwin.f_openCommonPopUp(4, pVal, '', 'T', 'T');
    } else {
      scwin.f_openCommonPopUp(disGubun, pVal, '', 'T', 'T');
    }
    // inObj가 코드명 필드일 경우 팝업
  } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "품명") {
    scwin.f_openCommonPopUp(5, '', pVal, 'T', 'T');
  } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "품목") {
    scwin.f_openCommonPopUp(7, '', pVal, 'T', 'T');
  } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "BL") {
    scwin.f_openCommonPopUp(6, '', pVal, 'T', 'T');
  } else if (inObj == ed_qryConCd && acb_qryConKnd2.getValue() == "CNTR") {
    scwin.f_openCommonPopUp(4, '', pVal, 'T', 'T');
  } else {
    scwin.f_openCommonPopUp(disGubun, '', pVal, 'T', 'T');
  }
};
scwin.udc_bilgLodeptCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgLodeptCd, ed_bilgLodeptNm); // 청구부서코드, 청구부서명
};
scwin.udc_bilgClntNoCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_bilgClntNo, ed_bilgClntNm); // 청구처코드, 청구처명
};
scwin.udc_qryConCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_qryConCd, ed_qryConNm); // CNTR-NO코드, CNTR-NO명

  if (acb_qryConKnd2.getValue() == 'BL') {
    if (rtnList != undefined) {
      $c.gus.cfSetValue($p, ed_qryConCd, rtnList[1]);
      $c.gus.cfSetHiddenValue($p, ed_qryConCd, rtnList[1]);
    }
  }
};
scwin.udc_sellItemCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_sellItemCd, ed_sellItemNm); // 매출항목코드, 매출항목명
};
scwin.udc_lineCdCallback = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, ed_lineNm); // LINE코드, LINE명
};
scwin.f_FieldClear = function () {
  console.log('scwin.f_FieldClear');
  $c.gus.cfInitObjects($p, tbl_search, [ed_bilgLodeptCd, ed_bilgLodeptNm, ed_qryConDtFm, ed_qryConDtTo]);
};
scwin.f_downExcelSheet = async function (vObjGrd) {
  var vObjGrd;
  var sheetTitle;
  cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    //sheetTitle = "오더 조회 팝업";
    //var objGrd = eval(vObjGrd);
    //objGrd.RunExcelSheet(sheetTitle);

    var sheetTitle = "오더 조회 팝업";
    const options = {
      fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
      ,
      sheetName: sheetTitle //엑셀내 시트명 지정필요시
    };
    const infoArr = [];
    $c.data.downloadGridViewExcel($p, gr_order, options, infoArr);
  }
};
scwin.f_rtnValue = function (row) {
  var arrRtnVal = new Array(3);
  arrRtnVal[0] = ds_order.getCellData(row, "bilgLodeptCd");
  arrRtnVal[1] = ds_order.getCellData(row, "bilgClntNo");
  arrRtnVal[2] = ds_order.getCellData(row, "lineCd");
  arrRtnVal[3] = ds_order.getCellData(row, "odrNo");

  //window.returnValue = arrRtnVal;
  //window.close();

  console.log('return Value~~');
  console.log(arrRtnVal);
  $c.win.closePopup($p, arrRtnVal);
};
scwin.sbm_order_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code < 0) return; //onFail

  var rowcnt = ds_order.getRowCount();
  if (rowcnt == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    ed_bilgLodeptCd.focus();

    //cfAlertMsg(MSG_CM_WRN_002);
    //ed_qryConDtFm.Focus();				
  }
  tbx_totalRows.setValue(rowcnt);
};
scwin.sbm_order_retrieve_submiterror = function (e) {};
scwin.gr_order_oncelldblclick = function (rowIndex, columnIndex, columnId) {
  //var row = ds_order.getRowCount();
  //if(ds_order.getRowCount() > 0 ){
  scwin.f_rtnValue(rowIndex);
  //}
};
scwin.btn_fieldClear_onclick = function (e) {
  //$c.gus.cfInitObjects(tbl_search,[ed_bilgLodeptCd,ed_bilgLodeptNm,ed_qryConDtFm,ed_qryConDtTo]);
  scwin.f_FieldClear();
};
scwin.btn_retrieve_onclick = function (e) {
  scwin.f_Retrieve();
};
scwin.udc_bilgLodeptCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptCd, ed_bilgLodeptNm, 1);
};
scwin.udc_bilgLodeptCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgLodeptNm, ed_bilgLodeptCd, 1, false);
};
scwin.udc_bilgLodeptCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(1, ed_bilgLodeptCd.getValue(), ed_bilgLodeptNm.getValue(), 'F', 'F');
};
scwin.udc_bilgClntNo_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNo, ed_bilgClntNm, 2);
};
scwin.udc_bilgClntNo_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_bilgClntNm, ed_bilgClntNo, 2, false);
};
scwin.udc_bilgClntNo_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(2, ed_bilgClntNo.getValue(), ed_bilgClntNm.getValue(), 'F', 'F');
};
scwin.udc_qryConCd_onblurCodeEvent = function (e) {
  if (acb_qryConKnd2.getValue() == "품명") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd, ed_qryConNm, 11);
  } else if (acb_qryConKnd2.getValue() == "품목") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd, ed_qryConNm, 13);
  } else if (acb_qryConKnd2.getValue() == "화종") {
    scwin.f_chkOpenCommonPopUp(ed_qryConCd, ed_qryConNm, 12);
  }
};
scwin.udc_qryConCd_onblurNameEvent = function (e) {
  scwin.f_QryConPopUp();
};
scwin.udc_qryConCd_onclickEvent = function (e) {
  scwin.f_QryConPopUp();
};
scwin.udc_sellItemCd_onblurCodeEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemCd, ed_sellItemNm, 10);
};
scwin.udc_sellItemCd_onblurNameEvent = function (e) {
  scwin.f_chkOpenCommonPopUp(ed_sellItemNm, ed_sellItemCd, 10, false);
};
scwin.udc_sellItemCd_onclickEvent = function (e) {
  scwin.f_openCommonPopUp(10, ed_sellItemCd.getValue(), ed_sellItemNm.getValue(), 'F', 'F');
};
scwin.acb_qryConKnd2_onviewchange = function (info) {
  //console.log('scwin.acb_qryConKnd2_onviewchange~~');
  //console.log(info);
  if (info.newValue == 'BL' || info.newValue == 'CNTR') {
    ed_qryConNm.hide();
  } else {
    ed_qryConNm.show();
  }
};
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p);
};
scwin.btn_lineCd_onclick = function (e) {
  var str = ed_lineCd.getValue();
  if (!$c.gus.cfIsNull($p, str)) {
    ed_lineCd.setValue(str.toUpperCase());
  }
  scwin.f_openCommonPopUp(8, ed_lineCd.getValue(), ed_lineNm.getValue(), 'F', 'F');
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출물류부서 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{hideName:'Y',popupID:'pop_bilgLodeptCd',style:'',id:'udc_bilgLodeptCd',codeId:'ed_bilgLodeptCd',nameId:'ed_bilgLodeptNm',btnId:'btn_bilgLodeptCd',mandatoryCode:'true',maxlengthCode:'6',UpperFlagCode:'1',selectID:'',validExpName:'청구부서',validExpCode:'청구부서',validTitle:'매출물류부서',objTypeCode:'Data',objTypeName:'key','ev:onblurCodeEvent':'scwin.udc_bilgLodeptCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgLodeptCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgLodeptCd_onclickEvent',allowCharCode:'A-Za-z0-9'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width: 120px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:''},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'회계'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'청구인식일'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'청구인식일'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ed_qryConDtFm',edToId:'ed_qryConDtTo',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_impExpDomesticClsCd',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'I'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'수출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'내수'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'D'}]}]}]}]}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더종류 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_odrKndCd',search:'start',style:'width: 230px;',submenuSize:'auto',ref:'',allOption:'',chooseOption:'true',chooseOptionLabel:'-전체-',visibleRowNum:'17'},E:[{T:1,N:'w2:choices'}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'청구처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_bilgClntNo',style:'',codeId:'ed_bilgClntNo',id:'udc_bilgClntNo',nameId:'ed_bilgClntNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',mandatoryCode:'true',maxlengthCode:'6',selectID:'',validTitle:'청구처',btnId:'btn_bilgClntNo','ev:onblurCodeEvent':'scwin.udc_bilgClntNo_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_bilgClntNo_onblurNameEvent','ev:onclickEvent':'scwin.udc_bilgClntNo_onclickEvent'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:autoComplete',A:{allOption:'',chooseOption:'',class:'',editType:'select',id:'acb_qryConKnd2',ref:'data:ds_order_con.odrKndCd2',search:'start',style:'width: 120px;',submenuSize:'auto','ev:onviewchange':'scwin.acb_qryConKnd2_onviewchange'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품명코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'품명'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'품목코드'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'품목'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'BL-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'BL'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'CNTR-NO'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'CNTR'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'pop_qryConCd',style:'',id:'udc_qryConCd',nameId:'ed_qryConNm',codeId:'ed_qryConCd',btnId:'btn_qryConCd',UpperFlagCode:'1',maxlengthCode:'15',validTitle:'품명코드','ev:onblurCodeEvent':'scwin.udc_qryConCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_qryConCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_qryConCd_onclickEvent',allowCharCode:'A-Za-z0-9'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출항목 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',id:'udc_sellItemCd',codeId:'ed_sellItemCd',nameId:'ed_sellItemNm',btnId:'btn_sellItemCd',maxlengthCode:'5',validTitle:'매출항목','ev:onblurCodeEvent':'scwin.udc_sellItemCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_sellItemCd_onblurNameEvent','ev:onclickEvent':'scwin.udc_sellItemCd_onclickEvent',allowCharCode:'A-Za-z0-9',UpperFlagCode:'1'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_lineCd',placeholder:'',style:'width: 85px;',ref:'',allowChar:'A-Za-z0-9'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_lineCd',style:'',type:'button','ev:onclick':'scwin.btn_lineCd_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]},{T:1,N:'xf:input',A:{class:'',id:'ed_lineNm',placeholder:'',style:'display:none;',ref:''}}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_vsslCd',placeholder:'',style:'width:85px;',ref:'',minlength:'4'}},{T:1,N:'xf:input',A:{class:'',id:'ed_portcnt',placeholder:'',style:'width:85px;',ref:'',maxlength:'10'}}]}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'0',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_fieldClear',style:'',type:'button','ev:onclick':'scwin.btn_fieldClear_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:trigger',A:{style:'display:none',id:'btn_trigger1',type:'button',class:'btn align'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'정렬'}]}]},{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridID:'gr_order',gridDownFn:'f_downExcelSheet',gridUpYn:'N'}}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkAllType:'false',class:'wq_gvw',dataList:'data:ds_order',id:'gr_order',style:'',visibleRowNum:'10',visibleRowNumFix:'true','ev:oncelldblclick':'scwin.gr_order_oncelldblclick',readOnly:'true',sortable:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'오더번호',width:'100',rowSpan:'2',sortable:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'오더<br/>종류',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'오더일자',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',value:'청구<br/>부서',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',value:'매출<br/>부서',width:'70',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',value:'청구거래처',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',value:'본선관리<br/>번호',width:'100',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column70',value:'LINE',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column67',value:'모선/항차',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column64',value:'작업기간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column61',value:'작업구간',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column58',value:'매출물량',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column55',value:'매출<br/>단위',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',id:'column52',value:'매출액',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column46',displayMode:'label',value:'부가세',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column43',displayMode:'label',value:'합계금액',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column40',displayMode:'label',value:'청구인식일',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column53',displayMode:'label',value:'원화'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'column50',displayMode:'label',value:'외화'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'odrNo',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrKndCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'odrDt',inputType:'text',width:'100',displayFormat:'####/##/##'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgLodeptCd',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellLodeptCd',inputType:'text',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'bilgClntNm',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'cvsslMgntNo',inputType:'text',width:'100',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'lineNm',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'expression',id:'vsslCdNm',displayMode:'label',textAlign:'left',dataType:'text',expression:'datalist(\'vsslCd\') + \'/\' + datalist(\'portcnt\')'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'wrkDt',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'transDst',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellVol',displayMode:'label',textAlign:'right',displayFormat:'#,###,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'sellUnitCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'sellAmtFcrc',displayMode:'label',textAlign:'right',displayFormat:'#,###,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'vatAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'totAmt',displayMode:'label',textAlign:'right',displayFormat:'#,###,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',id:'bilgIntendDt',displayMode:'label',displayFormat:'####/##/##'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'tbx_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})