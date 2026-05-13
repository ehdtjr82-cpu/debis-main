/*amd /ui/ps/rc/sales/cstmrmgnt/rc_120_n1_n07b.xml 26034 54c95e229246ca66546802b8054d47110d784bc0159135ac82bfa694115f08cb */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'regDtm',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regDtm2',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'smsOutbrClsCd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'crn',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntTelNo',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'userNm',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'sendCntctPl',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'rcvMpNo',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'msgNm',name:'name10',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'chk',name:'선택',dataType:'text'}},{T:1,N:'w2:column',A:{id:'procCls',name:'처리결',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sendCntctPl',name:'발송번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rcvMpNo',name:'수신번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'msgNm',name:'메시지',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsOutbrClsCd',name:'발생구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'sndDeg',name:'전송차수',dataType:'text'}},{T:1,N:'w2:column',A:{id:'smsSndSeq',name:'전송번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seqNo',name:'일련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNo',name:'관련번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltNoSeq',name:'관련순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regId',name:'발송자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'userNm',name:'발송자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDtm',name:'생성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'regDate',name:'생성시간',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/ps.rc.sales.RetrieveRentACarSMSConsequenceCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_master","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'scwin.sbm_retrieve_submiterror',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/ps.rc.sales.SaveRentACarSMSRevivalCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_master","key":"IN_DS1"}]',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.vCurDate = $c.date.getServerDateTime($p, "yyyyMMdd"); //날짜형식입니다.

scwin.params = "";
scwin.pop_flag = "";
scwin.regDtm = "";
scwin.regDtm2 = "";
scwin.smsOutbrClsCd = "";
scwin.gbnCd = "";
scwin.clntTelNo = "";

//-------------------------------------------------------------------------
// TOBE : 초기로드(UDC 있으면 scwin.onUdcCompleted 초기값 세팅)
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  scwin.params = $c.data.getParameter($p);

  // 오픈 파라미터
  scwin.pop_flag = scwin.params.pop_flag;
  scwin.regDtm = scwin.params.regDtm;
  scwin.regDtm2 = scwin.params.regDtm2;
  scwin.smsOutbrClsCd = scwin.params.smsOutbrClsCd;
  scwin.gbnCd = scwin.params.gbnCd;
  scwin.clntTelNo = scwin.params.clntTelNo;
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = async function () {
  const codeOptions = [{
    grpCd: "RC935",
    compID: "gr_master:smsOutbrClsCd,lc_smsOutbrClsCd"
  }
  //{ grpCd : "RC935", compID : "lc_smsOutbrClsCd" }
  ];
  await $c.data.setCommonCode($p, codeOptions);
  if (scwin.params.pop_flag == 'Detail') {
    ed_regDtm.setValue(scwin.regDtm);
    ed_regDtm2.setValue(scwin.regDtm2);
    lc_smsOutbrClsCd.setValue(scwin.smsOutbrClsCd);
    lc_gbnCd.setValue(scwin.gbnCd);
    scwin.f_retrieve();
  } else {
    ed_regDtm.setValue(scwin.vCurDate.substring(0, 6) + "01");
    ed_regDtm2.setValue(scwin.vCurDate);
    ed_crn.focus();
  }
};

//-------------------------------------------------------------------------
// 조회
//-------------------------------------------------------------------------
scwin.f_retrieve = async function (e) {
  if (lc_gbnCd.getValue() == "A") {
    //사업자번호
    dma_search.set("crn", ed_crn.getValue().trim());
  } else if (lc_gbnCd.getValue() == "B") {
    //거래처번호
    dma_search.set("clntNo", ed_crn.getValue().trim());
  } else if (lc_gbnCd.getValue() == "C") {
    //전화번호
    dma_search.set("clntTelNo", ed_crn.getValue().trim());
  }
  if (!(await scwin.f_SearchCheck())) {
    return;
  }
  dma_search.set("smsOutbrClsCd", lc_smsOutbrClsCd.getValue());
  dma_search.set("crn", ed_crn.getValue());
  dma_search.set("userNm", ed_userNm.getValue());
  dma_search.set("sendCntctPl", ed_sendCntctPl.getValue());
  dma_search.set("rcvMpNo", ed_rcvMpNo.getValue());
  dma_search.set("msgNm", ed_msgNm.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};
scwin.sbm_retrieve_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    var rowCnt = ds_master.getRowCount();
    if (rowCnt == 0) {
      $c.gus.cfAlertMsg($p, "[SMS전송결과조회] " + MSG_CM_ERR_003);
    }
    totalRows.setValue(rowCnt);
  }
};

// scwin.sbm_retrieve_submiterror = function(e){
//     $c.win.alert("SMS전송자료를 가져오는데 실패하였습니다.");
//      ds_master.removeAll();
// };

//-------------------------------------------------------------------------
// 당일조회
//-------------------------------------------------------------------------
scwin.f_thisDdRetrieve = function () {
  ed_regDtm.setValue(scwin.vCurDate);
  ed_regDtm2.setValue(scwin.vCurDate);
  scwin.f_retrieve();
};

//-------------------------------------------------------------------------
// 조회시 조건 필드 검사
//-------------------------------------------------------------------------
scwin.f_SearchCheck = async function () {
  if (ed_regDtm.getValue().trim() == "") {
    await $c.win.alert($p, "전송시작일을 입력합시오.");
    ed_regDtm.focus();
    return false;
  }
  if (ed_regDtm2.getValue().trim() == "") {
    await $c.win.alert($p, "전송종료일을 입력합시오.");
    ed_regDtm2.focus();
    return false;
  }
  if (ed_regDtm2.getValue().trim() < ed_regDtm.getValue().trim()) {
    await $c.win.alert($p, "전송종료일이 전송시작일보다 큽니다.");
    ed_regDtm.focus();
    return false;
  }
  return true;
};

//-------------------------------------------------------------------------
// 조건필드 클리어
//-------------------------------------------------------------------------
scwin.f_FieldClear = function (e) {
  $c.gus.cfInitObjects($p, tbl_search, null);
  ed_regDtm.focus();
};

//-------------------------------------------------------------------------
// 사업자번호 / 거래처번호
//-------------------------------------------------------------------------
scwin.f_openPop = async function (arg) {
  if (arg == 1 && ed_crn.getValue().trim() == "") {
    ed_crnNm.setValue("");
    return;
  }
  if (arg == 2 && ed_crnNm.getValue().trim() == "") {
    ed_crn.setValue("");
    return;
  }
  var gbn = lc_gbnCd.getValue();
  var param = {};
  var url = "";
  var opt = {};
  if (gbn == "A") {
    //사업자번호
    // tobe변경 :  rc_120_01_02p화면삭제로 공통팝업으로 대체
    // url    = "/ui/ps/rc/sales/cstmrmgnt/rc_120_01_02p.xml";

    // param = {
    //     crn : ed_crn.getValue().trim(),
    //     repstNm : ed_crnNm.getValue().trim()
    // };

    // opt = {
    //     id : "smpPop",	
    //     popupName : "사업자/주민번호조회",
    //     modal : true,
    //     type : "browserPopup",
    //     width : 535,
    //     height : 520,
    //     title : ""
    // };

    // var result = await $c.win.openPopup(url,opt,param); //상세화면 호출

    // if (result) {
    //     ed_crn.setValue(result[0]);
    //     ed_crnNm.setValue(result[1]);
    // } else {
    //     ed_crn.setValue("");
    //     ed_crnNm.setValue("");
    // }

    udc_crn.setSelectId('retrieveCrnInfo');
    udc_crn.cfCommonPopUp(function (result) {
      if ($c.gus.cfIsNull($p, result)) {
        ed_crn.setValue(result[0]);
        ed_crnNm.setValue(result[1]);
      } else {
        ed_crn.setValue("");
        ed_crnNm.setValue("");
      }
    }, ed_crn.getValue().trim(), ed_crnNm.getValue(), "F", null, null, null, null, "", null, null, null, null, null, null, "사업자/주민번호조회, 사업자/주민번호, 사업자명");
  } else if (gbn == "B" || gbn == "C") {
    //거래처 , 전화번호
    // tobe변경 :  rc_120_01_n03p화면삭제로 공통팝업으로 대체
    // url = "/ui/ps/rc/sales/cstmrmgnt/rc_120_01_n03p.xml";

    // if (gbn == "B") {
    //     param.qryConKnd = "1"
    // } else if (gbn == "C") {
    //     param.qryConKnd = "3"
    // }

    // param.qryConNo = ed_crn.getValue().trim();
    // param.clntNm = ed_crnNm.getValue().trim();

    // if (ed_crn.getValue() != "") {
    //     param.isCdYn = "Y";
    // } else {
    //     param.isCdYn = "N";
    // }

    // opt = {
    //     id: "smpPop",
    //     popupName: "렌터카 거래처 조회 팝업",
    //     modal: true,
    //     type: "browserPopup",
    //     width: 535,
    //     height: 520,
    //     title: ""
    // };

    // var result = await $c.win.openPopup(url, opt, param); //팝업호출

    // if (result) {
    //     ed_crn.setValue(result.clntNo);
    //     ed_crnNm.setValue(result.clntNm);
    // } else {
    //     ed_crn.setValue("");
    //     txt_crnNm.setValue("");
    // }

    udc_crn.setSelectId('retrieveClntList2');
    var param = ",,," + ed_crn.getValue();
    var data = "";
    udc_crn.cfCommonPopUp(function (result) {
      if ($c.gus.cfIsNull($p, result)) {
        ed_crn.setValue(result.clntNo);
        ed_crnNm.setValue(result.clntNm);
      } else {
        ed_crn.setValue("");
        txt_crnNm.setValue("");
      }
    }, ed_crn.getValue().trim(), ed_crnNm.getValue(), "F", null, null, null, null, param, null, null, null, null, null, null, "렌터카 거래처 조회 팝업, 번호, 거래처명 ");
  }
};

//-------------------------------------------------------------------------
// 저장 
//------------------------------------------------------------------------- 
scwin.f_Save = async function (e) {
  if (ds_master.getRowCount() == 0) {
    await $c.win.alert($p, "저장할 자료가 없습니다.");
    return;
  }
  if (ds_master.getModifiedIndex().length < 1) {
    await $c.win.alert($p, "변경된 자료가 없습니다.");
    return;
  }
  for (var i = 0; i < ds_master.getRowCount(); i++) {
    if (gr_master.getCellChecked(i, "chk")) {
      if (!$c.gus.cfSmsTelValidChk($p, ds_master.getRowJSON(i).sendCntctPl)) {
        return;
      }
    }
  }
  if (!(await $c.win.confirm($p, "전송하시겠습니까?"))) {
    return;
  }
  $c.sbm.execute($p, sbm_save);
};
scwin.sbm_save_submitdone = async function (e) {
  if (e.responseJSON.resultDataSet[0].Msg != 'FAIL') {
    await $c.win.alert($p, "성공적으로 발송되었습니다");
    scwin.f_retrieve();
  }
  ;
};

//-------------------------------------------------------------------------
// 엑셀 
//------------------------------------------------------------------------- 
scwin.cfGridToExcel = function () {
  var options = {
    fileName: "SMS전송결과.xlsx",
    sheetName: "SMS전송결과"
  };
  $c.data.downloadGridViewExcel($p, gr_master, options);
};
scwin.udc_crn_onblurCodeEvent = function (e) {
  scwin.f_openPop(1);
};
scwin.udc_crn_onviewchangeCodeEvent = function (info) {
  scwin.f_openPop(2);
};
scwin.udc_crn_onclickEvent = function (e) {
  scwin.f_openPop();
};
scwin.lc_gbnCd_onselected = function () {
  if (lc_gbnCd.getValue() == "A") {
    //ed_crn.setDisplayFormat()
    //ed_crn.style.width   = "90";
    ed_crn.setMaxLength(13);
  } else if (lc_gbnCd.getValue() == "B") {
    //ed_crn.format        = "######";
    //ed_crn.style.width   = "50";
    ed_crn.setMaxLength(6);
  } else if (lc_gbnCd.getValue() == "C") {
    //ed_crn.format        = "###########";
    //ed_crn.style.width   = "70";
    ed_crn.setMaxLength(11);
    $c.gus.cfDisableObjects($p, [ed_crnNm]);
  }
  ed_crn.setValue("");
  ed_crnNm.setValue("");
};

//TOBE 필요없음: 웹스퀘어에서 자동지원
// scwin.gr_master_onheaderclick = function (headerId) {
//     var i = 0;
// 	if (Colid == "chk")	{
// 		if (bCheck == "1") {
// 			for (i=1; i<=ds_master.CountRow; i++) {
// 				ds_master.NameValue(i, "chk") = "1";
// 			}
// 		} else {
// 			for (i=1; i<=ds_master.CountRow; i++) {
// 				ds_master.NameValue(i, "chk") = "0";
// 			}
// 		}
// 	}
// };
}}}]},{T:1,N:'w2:require',A:{as:'udc_schInput',type:'page',variableClone:'true',src:'/cm/udc/schInput.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYearMon',type:'page',variableClone:'true',src:'/cm/udc/fromToYearMon.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendarTime',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendarTime.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToYear',type:'page',variableClone:'true',src:'/cm/udc/fromToYear.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:105px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:60px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:90px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'전송기간 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{refStDt:'regDtm',refDataMap:'dma_search',style:'',id:'udc_fromToCalendar3',refEdDt:'regDtm2',edToId:'ed_regDtm2',edFromId:'ed_regDtm',mandatoryFrom:'true',mandatoryTo:'true'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송자 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_userNm',style:'width: 100px;'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_sendCntctPl',style:'width: 100px;',maxByteLength:'11',maxlength:'11',allowChar:'0-9',dataType:'number'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'수신번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_rcvMpNo',style:'width: 100px;',maxlength:'11',maxByteLength:'11',allowChar:'0-9',dataType:'number'}}]}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'xf:select1',A:{allOption:'',appearance:'minimal',chooseOption:'',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_gbnCd',style:'width: 150px;',submenuSize:'fixed',ref:'','ev:onselected':'scwin.lc_gbnCd_onselected',displayMode:'value delim label'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'사업자번호/주민번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'거래처번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전화번호'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:colspan',E:[{T:3,text:'3'}]},{T:1,N:'w2:rowspan',E:[{T:3,text:'1'}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',codeId:'ed_crn',validTitle:'',nameId:'ed_crnNm',style:'',id:'udc_crn','ev:onviewchangeCodeEvent':'scwin.udc_crn_onviewchangeCodeEvent','ev:onblurCodeEvent':'scwin.udc_crn_onblurCodeEvent',UpperFlagCode:'1',btnId:'btn_crn','ev:onclickEvent':'scwin.udc_crn_onclickEvent',maxlengthCode:'13'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select1',A:{allOption:'false',appearance:'minimal',chooseOption:'true',class:'',direction:'auto',disabled:'false',disabledClass:'w2selectbox_disabled',id:'lc_smsOutbrClsCd',style:'width: 100px;',submenuSize:'fixed',chooseOptionLabel:'전체',displayMode:'value delim label'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발송내용 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_msgNm',style:'width: 150px;'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_delete',style:'',type:'button','ev:onclick':'scwin.f_FieldClear'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'새로고침'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_thisDdRetrieve',style:'',type:'button','ev:onclick':'scwin.f_thisDdRetrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'당일조회'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.f_retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'SMS전송결과 ',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',id:'udc_topGrd',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_master',gridDownFn:'scwin.cfGridToExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'row',id:'gr_master',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'15',visibleRowNumFix:'true','ev:onheaderclick':'scwin.gr_master_onheaderclick',columnMove:'true',dataDragSelect:'false'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column30',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column38',inputType:'text',style:'',value:'처리</br>결과',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column36',inputType:'text',style:'',value:'발송번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column34',inputType:'text',style:'',value:'수신번호',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column32',inputType:'text',style:'',value:'메시지',width:'130'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column28',inputType:'text',style:'',value:'발생구분',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column26',inputType:'text',style:'',value:'전송</br>차수',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column22',inputType:'text',style:'',value:'전송</br>번호',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column24',inputType:'text',style:'',value:'일련번호',width:'100'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column44',value:'관련번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'관련</br>순번',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column42',value:'발송자',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column50',value:'발송자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column46',value:'생성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column48',value:'생성시간',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'chk',inputType:'checkbox',style:'',value:'',width:'50',fixColumnWidth:'true',trueValue:'1',falseValue:'0'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'procCls',inputType:'select',style:'',value:'',width:'70',allOption:'',chooseOption:'',ref:'',readOnly:'true'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'처리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'Y'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'미처리'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'N'}]}]}]}]},{T:1,N:'w2:column',A:{displayMode:'label',id:'sendCntctPl',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'rcvMpNo',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'msgNm',inputType:'text',style:'',value:'',width:'130',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'smsOutbrClsCd',inputType:'select',style:'',value:'',width:'100',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sndDeg',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'smsSndSeq',inputType:'text',style:'',value:'',width:'70',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'seqNo',inputType:'text',style:'',value:'',width:'100',textAlign:'right',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'rltNo',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'rltNoSeq',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regId',value:'',displayMode:'label',hidden:'true',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'userNm',value:'',displayMode:'label',textAlign:'left',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDtm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'regDate',value:'',displayMode:'label',hidden:'true',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_Save',style:'',type:'button','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전송'}]}]}]}]}]}]}]}]}]})