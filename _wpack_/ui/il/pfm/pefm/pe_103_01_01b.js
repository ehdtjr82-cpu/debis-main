/*amd /ui/il/pfm/pefm/pe_103_01_01b.xml 75024 33ae7125a0cb5a79e2413828dd9ee3ad7df95487d98586d9b3e530d271e95dac */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_close'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeDt',name:'마감일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_closeResult',saveRemovedData:'true','ev:ondataload':'scwin.ds_closeResult_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text',length:'6'}},{T:1,N:'w2:column',A:{id:'closeCnt',name:'#N/A',dataType:'text',length:'3'}},{T:1,N:'w2:column',A:{id:'userId',name:'USER',dataType:'text',length:'8'}},{T:1,N:'w2:column',A:{id:'inpDt',name:'입력일',dataType:'text',length:'19'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_condition'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'kcomcd',name:'법인코드',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'ioGb',name:'수출입구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'seaAir',name:'해운항공구분',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'yymm',name:'년월',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'yymmSeq',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'dept',name:'부서',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'odrNo',name:'오더번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'odrNo2',name:'주문번호2',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'거래처번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'hhactcust',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'rslDtFrom',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'rslDtTo',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'blNo',name:'B/L번호',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'closeDtFrom',name:'#N/A',dataType:'text',length:'255'}},{T:1,N:'w2:key',A:{id:'closeDtTo',name:'#N/A',dataType:'text',length:'255'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_results',saveRemovedData:'true','ev:ondataload':'scwin.ds_results_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'etd',name:'예상출발일시',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'shprNm',name:'SHIPPER명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'bilgClntCd',name:'청구처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'bilgClnt',name:'청구거래처',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'pchsClnt',name:'#N/A',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'운임영문명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액_외화',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액(외화)',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'oper',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'salesman',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_resultsHist',saveRemovedData:'true','ev:ondataload':'scwin.ds_resultsHist_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'closeSeqHist',name:'마감차수이력',dataType:'text',defaultValue:'',length:'7'}},{T:1,N:'w2:column',A:{id:'closeDt',name:'마감일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서코드',dataType:'text',defaultValue:'',length:'4'}},{T:1,N:'w2:column',A:{id:'mhno',name:'Consol No',dataType:'text',defaultValue:'',length:'16'}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L번호',dataType:'text',defaultValue:'',length:'20'}},{T:1,N:'w2:column',A:{id:'etd',name:'예상출발일시',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'eta',name:'ETA',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'shprNm',name:'SHIPPER명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'wt',name:'중량',dataType:'number',defaultValue:'0',length:'18'}},{T:1,N:'w2:column',A:{id:'bilgClntCd',name:'청구처코드',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'bilgClnt',name:'청구거래처',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}},{T:1,N:'w2:column',A:{id:'pchsClnt',name:'#N/A',dataType:'text',defaultValue:'',length:'100'}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'운임영문명',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text',defaultValue:'',length:'3'}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'청구금액_외화',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'청구금액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'매입금액(외화)',dataType:'number',defaultValue:'0',length:'15'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'매입액',dataType:'number',defaultValue:'0',length:'38'}},{T:1,N:'w2:column',A:{id:'odrNo',name:'오더번호',dataType:'text',defaultValue:'',length:'13'}},{T:1,N:'w2:column',A:{id:'oper',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'salesman',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'실적일자',dataType:'text',defaultValue:'',length:'8'}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'#N/A',dataType:'text',defaultValue:'',length:'50'}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'#N/A',dataType:'text',defaultValue:'',length:'6'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_retrieve',action:'/il.pfm.pefm.RetrieveClosingListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_close","key":"IN_DS1"}, {"id":"ds_closeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_closeResult","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_save',action:'/il.pfm.pefm.SaveClosingCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_close","key":"IN_DS1"}, {"id":"ds_closeResult","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_closeResult","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_save_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveResults',action:'/il.pfm.pefm.RetrieveUnsettledListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"}, {"id":"ds_results","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_results","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieveResults_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_retrieveResultsHist',action:'/il.pfm.pefm.RetrieveUnsettledHistListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_condition","key":"IN_DS1"}, {"id":"ds_resultsHist","key":"OUT_DS1"}]',target:'data:json,[{"id":"ds_resultsHist","key":"OUT_DS1"}]',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:'scwin.f_set,scwin.f_FieldClear2,scwin.f_retrueveResults,scwin.f_Print,scwin.f_Close,scwin.f_RunExcel,scwin.f_RunExcel2,scwin.udc_deptCd_callBackFunc,scwin.udc_clntCd_callBackFunc,scwin.udc_clntemp_callBackFunc,scwin.udc_custCd_callBackFunc,scwin.udc_clntemp2_callBackFunc,scwin.f_OpenCommonPopUp,scwin.f_openPopUp,scwin.f_CheckPopUp,scwin.f_resultPopUp,scwin.sbm_save_submitdone,scwin.sbm_retrieveResults_submitdone'}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/js/il/ilcommon.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){scwin.loginClntNo = $c.data.getMemInfo($p, "clntNo") == null ? "" : $c.data.getMemInfo($p, "clntNo");
scwin.loginClntNm = $c.data.getMemInfo($p, "ClntNm"); //거래처명
scwin.userClsCd = $c.data.getMemInfo($p, "userClsCd"); // 사용자 구분코드
scwin.upperLobranCd = $c.data.getMemInfo($p, "loUpperLobranCd");
console.log("upperLobranCd" + $c.data.getMemInfo($p, "loUpperLobranCd"));
//현재 일자 셋팅
scwin.strCurDate = $c.date.getServerDateTime($p, "yyyyMMdd");
scwin.strPreDate = $c.date.addMonth($p, scwin.strCurDate, -1).substring(0, 6) + "01";
scwin.strLastDay = $c.date.getLastDateOfMonth($p, $c.date.addMonth($p, scwin.strCurDate, -1));
scwin.strLastDay2 = parseInt($c.date.getLastDateOfMonth($p, scwin.strCurDate.substring(0, 6)));
scwin.hid_kcomcd = "DBEX"; // 대표거래처 코드
scwin.hid_seq = ""; // 차수
scwin.hid_input = ""; // Input Date

scwin.onpageload = function () {
  // TODO : GridView에 subTotal 적용 후에 엉키는 부분 발견. 확인 요망.
  // TODO : 아래쪽 GridView 크기조절 불가 확인요망.
};

//-------------------------------------------------------------------------
// 화면로딩시 UDC 호출
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  scwin.f_set();
  //  scwin.f_HeaderCreate();
  ed_cnd_ed_sdate.setValue(scwin.strPreDate);
  ed_dept.setValue(scwin.upperLobranCd);
  acb_cnd_lc_jobgb.setValue("C");
  acb_cnd_lc_iogb.setValue("O");

  // for test data
  //ed_cnd_ed_sdate.setValue("201501");

  ds_close.set("closeDt", ed_cnd_ed_sdate.getValue());
  $c.sbm.execute($p, sbm_retrieve);
};

//---------------------------------------------------------
//화면세팅
//---------------------------------------------------------
/**
 * @method 
 * @name f_set
 * @description 화면 컴포넌트를 초기화한다.
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_set = function () {
  //     cfDisableObjects([txt_pnnm, txt_deptnm, ed_chitno]);	
};

/**
 * @method
 * @name f_FieldClear2
 * @description 조회조건을 초기화한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_FieldClear2 = function (e) {
  //실적일
  ed_cnd_ed_rslDtFrom.setValue("");
  ed_cnd_ed_rslDtTo.setValue("");
  //매출거래처
  ed_clntCd.setValue("");
  ed_clntNm.setValue("");
  //House No	
  ed_cnd_ed_hhblno.setValue("");
  //CLOSE DATE	
  ed_cnd_ed_closeDtFrom.setValue("");
  ed_cnd_ed_closeDtTo.setValue("");
  //BL거래처	
  ed_custCd.setValue("");
  ed_custNm.setValue("");
  //이력조회여부
  cbx_histYn.setValue("");
};

//-------------------------------
// search 버튼 클릭시
//-------------------------------
/**
 * @method
 * @name f_retrueveResults
 * @description Search 버튼 클릭시 미확정 실적을 조회한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_retrueveResults = async function (e) {
  ds_condition.set("kcomcd", "DBEX");
  ds_condition.set("yymmSeq", ds_closeResult.getCellData(ds_closeResult.getRowPosition(), "closeCnt"));

  // 필수항목 체크
  let ret = await $c.gus.cfValidate($p, [tbl_searchCondition, tbl_searchCondition2]);
  if (!ret) {
    return;
  }
  if (ed_cnd_ed_rslDtFrom.getValue() == "" && ed_cnd_ed_rslDtTo.getValue() != "" || ed_cnd_ed_rslDtFrom.getValue() != "" && ed_cnd_ed_rslDtTo.getValue() == "") {
    $c.win.alert($p, "실적일 조회시는 시작일과 종료일 모두 입력되어야 합니다.");
    return false;
  }
  if (!$c.gus.cfIsAfterDate($p, ed_cnd_ed_rslDtFrom.getValue(), ed_cnd_ed_rslDtTo.getValue())) {
    $c.win.alert($p, "조회 시작일자는 종료일자 보다 이전 날짜 이어야 합니다.");
    ed_cnd_ed_rslDtFrom.focus();
    return false;
  }
  //실적일자와 result가 같아야함
  if (ed_cnd_ed_rslDtFrom.getValue() != "" || ed_cnd_ed_rslDtTo.getValue() != "") {
    if (ed_cnd_ed_sdate.getValue() != ed_cnd_ed_rslDtFrom.getValue().substring(0, 6) || ed_cnd_ed_sdate.getValue() != ed_cnd_ed_rslDtTo.getValue().substring(0, 6)) {
      $c.win.alert($p, "실적년월은 Result Date와 동일해야 합니다. ");
      ed_cnd_ed_sdate.focus();
      return false;
    }
  }

  //var diffObj = cfDifferBetween(cnd_ed_rslDtFrom.getValue(), cnd_ed_rslDtTo.getValue(),"YYYYMMDD");

  // 조회 기간이 1달 이상인경우 확인
  //if(diffObj.year > 0 || diffObj.month > 0){
  //if(!cfConfirmMsg(["조회기간 이 1개월이 넘습니다.조회하시겠습니까?"])){
  //cnd_ed_rslDtTo.Focus();
  //return false;
  //}
  //} 	

  var odrNo = "";
  var odrNo2 = "";
  var seaAir = acb_cnd_lc_jobgb.getValue();
  var ioGb = acb_cnd_lc_iogb.getValue();
  if (seaAir != "D") {
    // Container+Bulk 인 경우
    odrNo = "L" + seaAir;
    if (ioGb == "O") {
      odrNo = odrNo + "E";
    } else if (ioGb == "I") {
      odrNo = odrNo + "I";
    } else {}
  } else {
    // Container+Bulk 가 아닌 경우
    odrNo = "LC";
    odrNo2 = "LB";
    if (ioGb == "O") {
      odrNo = odrNo + "E";
      odrNo2 = odrNo2 + "E";
    } else if (ioGb == "I") {
      odrNo = odrNo + "I";
      odrNo2 = odrNo2 + "I";
    } else {}
  }
  ds_condition.set("odrNo", odrNo);
  ds_condition.set("odrNo2", odrNo2);
  $c.sbm.execute($p, sbm_retrieveResults);

  //이력조회여부 체크시에만 이력조회함
  if (cbx_histYn.getValue() == "1") {
    $c.sbm.execute($p, sbm_retrieveResultsHist);
  }
};

//-------------------------------------------------------------------------
// 오즈화면
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_Print
 * @description 오즈 리포트를 출력하기 위해 파라미터를 셋팅하고 오즈 팝업을 띄운다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_Print = function (e) {
  let seaair = (acb_cnd_lc_jobgb.getValue() ?? "").trim();
  if ((scwin.hid_seq ?? "") == "") {
    $c.win.alert($p, "Closing 차수를 선택 하세요.");
    return;
  }
  let data = undefined;
  switch (seaair) {
    case "C":
      // Container
      data = {
        odiName: 'pe_103_01_01',
        reportName: '/il/pfm/pe_103_01_01_cntr.ozr',
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: acb_cnd_lc_iogb.getValue(),
          SEAAIR: acb_cnd_lc_jobgb.getValue(),
          YYMM: ed_cnd_ed_sdate.getValue().trim(),
          YYMM_SEQ: scwin.hid_seq,
          DEPT: ed_dept.getValue().trim(),
          INPUT: scwin.hid_input,
          INC_YN: chb_incYn.getValue() == "1" ? "N" : "Y"
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 100,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
    case "B":
      // Bulk
      data = {
        odiName: 'pe_103_01_01',
        reportName: '/il/pfm/pe_103_01_01_bulk.ozr',
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: acb_cnd_lc_iogb.getValue(),
          SEAAIR: acb_cnd_lc_jobgb.getValue(),
          YYMM: ed_cnd_ed_sdate.getValue().trim(),
          YYMM_SEQ: scwin.hid_seq,
          DEPT: ed_dept.getValue().trim(),
          INPUT: scwin.hid_input,
          INC_YN: chb_incYn.getValue() == "1" ? "N" : "Y"
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 100,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
    case "A":
      // Air
      data = {
        odiName: 'pe_103_01_01',
        reportName: '/il/pfm/pe_103_01_01.ozr',
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: acb_cnd_lc_iogb.getValue(),
          SEAAIR: acb_cnd_lc_jobgb.getValue(),
          YYMM: ed_cnd_ed_sdate.getValue().trim(),
          YYMM_SEQ: scwin.hid_seq,
          DEPT: ed_dept.getValue().trim(),
          INPUT: scwin.hid_input,
          INC_YN: chb_incYn.getValue() == "1" ? "N" : "Y"
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 90,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
    case "D":
      // Container+Bulk
      data = {
        odiName: 'pe_103_01_01',
        reportName: '/il/pfm/pe_103_01_01_cntr.ozr',
        odiParam: {
          KCOMCD: scwin.hid_kcomcd,
          IOGB: acb_cnd_lc_iogb.getValue(),
          SEAAIR: acb_cnd_lc_jobgb.getValue(),
          YYMM: ed_cnd_ed_sdate.getValue().trim(),
          YYMM_SEQ: scwin.hid_seq,
          DEPT: ed_dept.getValue().trim(),
          INPUT: scwin.hid_input,
          INC_YN: chb_incYn.getValue() == "1" ? "N" : "Y"
        },
        viewerParam: {
          // OZ 뷰어에 대한 설정
          useprogressbar: false,
          zoom: 90,
          mode: 'print'
        },
        formParam: {// 리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
        }
      };
      break;
  }
  if (data != undefined) {
    scwin.openOzPopup(data);
  }
};

/**
 * @method
 * @name openOzPopup
 * @description 오즈리포트 화면을 띄운다
 * @param {string} data desc
 * @hidden N
 * @exception ㅆ
 * @example ${example}
 */
scwin.openOzPopup = async function (data) {
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: 1000,
    height: 600,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 저장(Close)
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_Close
 * @description Closing 처리하여 저장한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_Close = async function (e) {
  let confirm = await $c.win.confirm($p, $c.data.getMessage($p, E_MSG_CM_CRM_001));
  if (confirm) {
    $c.sbm.execute($p, sbm_save);
  }
};

//-------------------------------------------------------------------------
// 엑셀 다운로드
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_RunExcel
 * @description 미확정매출원가내역서 엑셀 다운로드
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_RunExcel = function () {
  const sheetTitle = "미확정매출원가내역서";
  const options = {
    fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: sheetTitle //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_results, options, infoArr);
};

/**
 * @method
 * @name f_RunExcel2
 * @description 미확정매출원가내역이력  엑셀 다운로드
 * @param
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_RunExcel2 = function () {
  const sheetTitle = "미확정매출원가내역서이력";
  const options = {
    fileName: sheetTitle + ".xlsx" //[default : excel.xlsx] options.fileName 값이 없을 경우 default값 세팅
    ,
    sheetName: sheetTitle //엑셀내 시트명 지정필요시
  };
  const infoArr = [];
  $c.data.downloadGridViewExcel($p, gr_resultsHist, options, infoArr);
};

// Department
scwin.udc_deptCd_onblurCodeEvent = function (e) {
  var strClntNo = ed_dept.getValue().trim();
  if (strClntNo.length > 0) {
    ed_deptNm.setValue("");
    scwin.f_OpenCommonPopUp("Department", "T", "F", "F");
  } else {
    ed_deptNm.setValue("");
  }
};
scwin.udc_deptCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('Department', 'F', 'F', 'F');
};

/**
 * @method
 * @name udc_deptCd_callBackFunc
 * @description Department 팝업에서 선택한 값을 화면에 셋팅한다.
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.udc_deptCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_dept, ed_deptNm);
};

// 매출거래처
scwin.udc_clntCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('CLNT', 'F', 'F', 'F');
};
scwin.udc_clntCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntCd, ed_clntNm, '1', 'CD', '1');
};
scwin.udc_clntCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_clntCd, ed_clntNm, '1', 'NM', '1');
};

/**
 * @method
 * @name udc_clntCd_callBackFunc
 * @description 매출거래처 팝업에서 선택한 값을 화면에 셋팅한다.
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.udc_clntCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_clntCd, ed_clntNm);
};

/**
 * @method
 * @name udc_clntemp_callBackFunc
 * @description 팝업에서 선택한 값을 화면에 셋팅한다.
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.udc_clntemp_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_clntCd, ed_clntNm, rtnList);
};

// BL거래처
scwin.udc_custCd_onclickEvent = function (e) {
  scwin.f_OpenCommonPopUp('CUST', 'F', 'F', 'F');
};
scwin.udc_custCd_onblurCodeEvent = function (e) {
  scwin.f_CheckPopUp(ed_custCd, ed_custNm, '1', 'CD', '2');
};
scwin.udc_custCd_onblurNameEvent = function (e) {
  scwin.f_CheckPopUp(ed_custCd, ed_custNm, '1', 'NM', '2');
};

/**
 * @method
 * @name udc_custCd_callBackFunc
 * @description BL거래처 팝업에서 선택한 값을 화면에 셋팅한다.
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.udc_custCd_callBackFunc = function (rtnList) {
  $c.gus.cfSetReturnValue($p, rtnList, ed_custCd, ed_custNm);
};

/**
 * @method
 * @name udc_clntemp2_callBackFunc
 * @description desc
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.udc_clntemp2_callBackFunc = function (rtnList) {
  scwin.f_resultPopUp(ed_custCd, ed_custNm, rtnList);
};

// 
scwin.acb_cnd_lc_jobgb_onchange = function (info) {
  if (acb_cnd_lc_jobgb.getValue() == "") {
    $c.win.alert($p, "All은 발행에는 적용되지 않습니다. 또 수출입 조건은 무시하고 조회됩니다");
    return false;
  }
};
scwin.gr_closeResult_oncellclick = function (rowIndex, columnIndex, columnId) {
  scwin.hid_seq = ds_closeResult.getCellData(ds_closeResult.getRowPosition(), "closeCnt"); // 차수
  scwin.hid_input = ds_closeResult.getCellData(ds_closeResult.getRowPosition(), "inpDt");
};

// Result Date
scwin.ed_cnd_ed_sdate_onblur = function (e) {
  var sdate = ed_cnd_ed_sdate.getValue().trim();
  ds_close.set("closeDt", ed_cnd_ed_sdate.getValue());
  if (sdate.length > 0) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

//공통팝업 열기
/**
 * @method
 * @name f_OpenCommonPopUp
 * @description 공통 팝업을 열기 위한 함수
 * @param {string} disGubun desc
 * @param {string} pWinCloseTF desc
 * @param {string} pAllSearchTF desc
 * @param {string} pNoDataCloseTF desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_OpenCommonPopUp = function (disGubun, pWinCloseTF, pAllSearchTF, pNoDataCloseTF) {
  switch (disGubun) {
    case "Department":
      //Department
      udc_deptCd.setSelectId('retrieveOpDeptCdInfo'); // XML상의 SELECT ID	
      udc_deptCd.ilCommonPopUp(scwin.udc_deptCd_callBackFunc, ed_dept.getValue().trim() // 화면에서의 ??? Code Element의	Value                                  
      , ed_deptNm.getValue() // 화면에서의 ??? Name Element의	Value                                  
      , pWinCloseTF // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , '2' // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , "Code, Name" // Title순서	
      , '80,230' // 보여주는 각 컬럼들의 폭	
      , "3,4,5,6,7,8,9,10" // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearchTF // 전체검색허용여부	("F")
      , "Department,Code,Name" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")
      , pNoDataCloseTF // Data 건수가 0 일때 Window를 뛰우지 않음 리턴 : "N/A"
      );
      break;
    case "CLNT":
      udc_clntCd.setSelectId('retrieveClntInfo'); // XML상의 SELECT ID	
      udc_clntCd.ilCommonPopUp(scwin.udc_clntCd_callBackFunc, ed_clntCd.getValue().trim(), ed_clntNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "CLNT,Code,Name", pNoDataCloseTF);
      break;
    case "CUST":
      udc_custCd.setSelectId('retrieveClntInfo'); // XML상의 SELECT ID	
      udc_custCd.ilCommonPopUp(scwin.udc_custCd_callBackFunc, ed_custCd.getValue().trim(), ed_custNm.getValue(), pWinCloseTF, '2', "Code, Name", '80,230', "3,4,5,6,7,8,9,10", null, null, null, null, null, null, pAllSearchTF, "CUST,Code,Name", pNoDataCloseTF);
      break;
  }
};

//-------------------------------------------------------------------------
// 거래처코드팝업
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_openPopUp
 * @description 거래처 코드 팝업을 열기 위한 함수
 * @param {string} orgObjCd desc
 * @param {string} orgObjNm desc
 * @param {string} select_code desc
 * @param {string} flag desc
 * @param {string} cdGb desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_openPopUp = async function (orgObjCd, orgObjNm, select_code, flag, cdGb) {
  // POPUP 돋보기 클릭시는 모든값을 조회 할 수 있도록 한다. flag:ALL일 경우는 돋보기 클릭한것임.
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (flag == "ALL") {
    cd = "";
    nm = "";
  } else {
    cd = orgObjCd.getValue();
    nm = orgObjNm.getValue();
  }
  console.log("cdGb = " + cdGb);
  switch (select_code) {
    // 조회조건용 거래처 PopUp 호출
    case '1':
      udc_clntemp.setSelectId('retrieveClntEmpNoList');
      udc_clntemp.cfCommonPopUp(cdGb == "1" ? scwin.udc_clntemp_callBackFunc : scwin.udc_clntemp2_callBackFunc, cd, nm, "T", null, null, null, null, null, null, null, null, null); // 거래처(모든 거래처를 다 조회한다.)
      // scwin.f_resultPopUp(orgObjCd, orgObjNm, rtnList);
      checkSearch = false; // 정상조회여부 확인
      break;
    default:
      $c.win.alert($p, "잘못된 Function호출 입니다. 관리자에게 문의하시기 바랍니다.");
      break;
  }
};

//-------------------------------------------------------------------------
// PopUp창에서 사용되는 각 Cd,Nm에 대해서 POPUP표시 및 해당 값이 없을경우는 코드와 이름을 초기화 시킨다.
// flag값이 CD:코드변경이 없으면 POPUP안뛰움, NM:무조건 POPUP뛰움
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_CheckPopUp
 * @description 팝업에서 선택한 값을 화면에 셋팅하고, 값이 없을 경우 코드와 이름을 초기화한다.
 * @param {string} orgObjCd desc
 * @param {string} orgObjNm desc
 * @param {string} select_code desc
 * @param {string} flag desc
 * @param {string} cdGb desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_CheckPopUp = function (orgObjCd, orgObjNm, select_code, flag, cdGb) {
  if (flag == "CD") {
    orgObjNm.setValue("");
  } else {
    orgObjCd.setValue("");
  }

  // 정상조회여부 확인
  if (select_code != "3") checkSearch = false;
  if (orgObjCd.getValue().trim() != "" || flag == "NM") {
    if (orgObjNm.getValue().trim() != "" || flag == "CD") {
      orgObjCd.setValue(orgObjCd.getValue().trim());
      orgObjNm.setValue(orgObjNm.getValue().trim());
      scwin.f_openPopUp(orgObjCd, orgObjNm, select_code, "NO", cdGb);
    }
  } else {
    orgObjNm.setValue("");
    orgObjCd.setValue("");
  }
};

//-------------------------------------------------------------------------
// 팝업결과
//-------------------------------------------------------------------------
/**
 * @method
 * @name f_resultPopUp
 * @description 팝업에서 선택한 값을 화면에 셋팅한다.
 * @param {string} orgObjCd desc
 * @param {string} orgObjNm desc
 * @param {string} rtnList desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.f_resultPopUp = function (orgObjCd, orgObjNm, rtnList) {
  // 넘어온 OBJ가 EMEdit인지 TextBox인지 구분한다.
  if (rtnList != null) {
    if (rtnList[0] == "N/A") return;
    orgObjCd.setValue(rtnList[0]); // 코드값
    orgObjNm.setValue(rtnList[1]); // 코드명
  } else {
    orgObjCd.setValue("");
    orgObjNm.setValue("");
  }
};

// Closing dataSet
scwin.ds_closeResult_ondataload = function () {
  ds_closeResult.setRowPosition(0);
  gr_closeResult.setFocusedCell(0, 0);
};
scwin.sbm_retrieve_submitdone = function (e) {};

// 저장 완료 처리
/**
 * @method
 * @name sbm_save_submitdone
 * @description 저장 완료 처리 후 조회를 실행한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.sbm_save_submitdone = function (e) {
  if (e.responseJSON.resultDataSet[0].Code == 0) {
    $c.sbm.execute($p, sbm_retrieve);
  }
};

/**
 * @method
 * @name sbm_retrieveResults_submitdone
 * @description 조회 완료 처리 후 결과를 화면에 표시한다.
 * @param {string} e desc
 * @hidden N
 * @exception 
 * @example ${example}
 */
scwin.sbm_retrieveResults_submitdone = function (e) {
  if (ds_results.getRowCount() == 0) {
    $c.win.alert($p, "조회된 데이터가 없습니다.");
    return false;
  }
};

/**
 * 날짜의 구분자를 '-'에서 '/'로 변경하는 포매터 함수
 * @param {String} value - 그리드 셀의 원래 데이터 값
 * @return {String} 포맷팅된 결과 값
 */
scwin.fn_formatDate = function (value) {
  if (value && typeof value === "string") {
    // 정규표현식을 사용하여 모든 하이픈(-)을 슬래시(/)로 전역 치환(g)합니다.
    return value.replace(/-/g, "/");
  }
  return value;
};
scwin.ds_results_ondataload = function () {
  ds_results.sort("hhactcust", 0);
};
scwin.ds_resultsHist_ondataload = function () {
  ds_resultsHist.sort("hhactcust", 0);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_ilcomCode',type:'page',variableClone:'true',src:'/ui/il/common/udc/ilcomCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Job Type',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_jobgb',search:'start',style:'width:150px;',submenuSize:'auto',allOption:'',chooseOption:'true',ref:'data:ds_condition.seaAir',objType:'data','ev:onchange':'scwin.acb_cnd_lc_jobgb_onchange','data-length':'255',displayMode:'value delim label',chooseOptionLabel:'ALL'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Container'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'B'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Air'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'A'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Cntr+Bulk'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'D'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Export/Import',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:autoComplete',A:{class:'',editType:'select',id:'acb_cnd_lc_iogb',search:'start',style:'width:150px;',submenuSize:'auto',objType:'data',ref:'data:ds_condition.ioGb','data-length':'255',displayMode:'value delim label',allOption:'',chooseOption:'true',chooseOptionLabel:'ALL'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Export'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'O'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'Import'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'I'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Result Date',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ed_cnd_ed_sdate',pickerType:'selectbox',placeholderLocaleRef:'yearMonthDate',style:'',ref:'data:ds_condition.yymm','data-length':'255','ev:onblur':'scwin.ed_cnd_ed_sdate_onblur',displayFormat:'yyyy/MM'}}]}]}]},{T:1,N:'w2:udc_comCode',A:{popupID:'',selectID:'',id:'udc_clntemp',codeId:'',validTitle:'',nameId:'',style:'width:%; height:px; display:none'}}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{id:'',class:'lybox'},E:[{T:1,N:'xf:group',A:{id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Print Option',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'}},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{style:'',id:'btn_print',type:'button',class:'btn','ev:onclick':'scwin.f_Print',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Print'}]}]}]}]},{T:1,N:'xf:group',A:{class:'tbbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'caption'}},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:100px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'Department',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_dept',nameId:'ed_deptNm',id:'udc_deptCd',objTypeCode:'data',maxlengthName:'50',UpperFlagCode:'1','ev:onblurCodeEvent':'scwin.udc_deptCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_deptCd_onclickEvent',refDataCollection:'ds_condition',code:'dept',maxlengthCode:'4',allowCharCode:'0-9a-zA-Z'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'chb_incYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Not Inclusive'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{style:'',id:'',class:'col'},E:[{T:1,N:'xf:group',A:{style:'',id:'',class:'title-wrap'},E:[{T:1,N:'xf:group',A:{id:'',class:'title'},E:[{T:1,N:'w2:textbox',A:{tagname:'h3',style:'',id:'',label:'Closing',class:'tit'}}]},{T:1,N:'xf:group',A:{id:'',class:'right'}},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.f_Close',objType:'ctrlBtn',userAuth:'C'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Close'}]}]}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkAllType:'false',class:'wq_gvw',dataList:'data:ds_closeResult',id:'gr_closeResult',style:'',visibleRowNum:'2',visibleRowNumFix:'true','ev:oncellclick':'scwin.gr_closeResult_oncellclick',readOnly:'true',focusMode:'row'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',value:'차수',width:'80',class:'txt-red'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',value:'Input User',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',value:'Input Date',width:'120'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'closeCnt',inputType:'text',width:'80'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'userId',inputType:'text',width:'100'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'inpDt',inputType:'text',width:'120',displayFormatter:'scwin.fn_formatDate'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb ',id:'tbl_searchCondition2',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'실적일',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'rslDtTo',refStDt:'rslDtFrom',style:'',edFromId:'ed_cnd_ed_rslDtFrom',edToId:'ed_cnd_ed_rslDtTo',objTypeFrom:'data',objTypeTo:'data'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출거래처',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_clntCd',nameId:'ed_clntNm',id:'udc_clntCd','ev:onblurCodeEvent':'scwin.udc_clntCd_onblurCodeEvent','ev:onclickEvent':'scwin.udc_clntCd_onclickEvent','ev:onblurNameEvent':'scwin.udc_clntCd_onblurNameEvent',refDataCollection:'ds_condition',code:'clntNo',UpperFlagCode:'1',maxlengthCode:'50'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'House No',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_cnd_ed_hhblno',placeholder:'',style:'',ref:'data:ds_condition.blNo','data-length':'255',maxByteLength:'20',imeMode:'disabled',allowChar:'0-9a-zA-Z'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th '},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'CLOSE DATE',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'',refDataMap:'ds_condition',refEdDt:'closeDtTo',refStDt:'closeDtFrom',style:'',edFromId:'ed_cnd_ed_closeDtFrom',edToId:'ed_cnd_ed_closeDtTo'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BL거래처',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_ilcomCode',A:{hideName:'Y',popupID:'',style:'',codeId:'ed_custCd',nameId:'ed_custNm',id:'udc_custCd','ev:onclickEvent':'scwin.udc_custCd_onclickEvent','ev:onblurCodeEvent':'scwin.udc_custCd_onblurCodeEvent','ev:onblurNameEvent':'scwin.udc_custCd_onblurNameEvent',refDataCollection:'ds_condition',code:'hhactcust'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'이력조회여부',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:select',A:{appearance:'full',class:'',cols:'',id:'cbx_histYn',ref:'',renderType:'checkboxgroup',rows:'',selectedindex:'-1',style:'',objType:'data'},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label'},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_trigger1',style:'',type:'button','ev:onclick':'scwin.f_FieldClear2'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'삭제'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_search2',style:'',type:'button','ev:onclick':'scwin.f_retrueveResults'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Search'}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'미확정매출원가내역서',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section2',style:'',gridUpYn:'N',gridID:'gr_results',gridDownFn:'scwin.f_RunExcel',gridDownUserAuth:'X',id:'udc_topGrdBtn'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section2',style:''},E:[{T:1,N:'w2:gridView',A:{class:'wq_gvw',dataList:'data:ds_results',id:'gr_results',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',autoFit:'allColumn',mergeCol:'deptCd,blNo,etd,eta,bilgClntCd,bilgClnt,oper,salesman,hhactcust,hhactcustnm,pchsClntCd,pchsClnt',mergeCells:'bycol'},E:[{T:1,N:'w2:caption',A:{id:'caption4',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'80',value:'부서',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',width:'80',value:'B/L NO',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'80',value:'ORDER NO',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'80',value:'발생일자',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'80',value:'E.T.D',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'80',value:'E.T.A',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'160',value:'BL거래처',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column7',inputType:'text',width:'160',value:'매출처',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column31',value:'매입처',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column27',value:'VESSEL',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column21',value:'운임명',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column23',value:'화폐',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column79',value:'매출',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column73',value:'원가',displayMode:'label',colSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column67',value:'OPER',displayMode:'label',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column64',value:'Sales',displayMode:'label',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'text',id:'column42',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column41',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column40',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',id:'column39',value:'매출처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column38',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column37',value:'매입처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column80',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column77',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column74',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column71',value:'원화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'deptCd',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:'',editFormat:'XXXX/XX/XX'},E:[{T:3,text:'\n									>\n								'}]},{T:1,N:'w2:column',A:{id:'eta',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:''},E:[{T:3,text:'\n									>\n								'}]},{T:1,N:'w2:column',A:{id:'hhactcust',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0',excelFormat:'#,##0.#0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'oper',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'hhactcust',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{id:'deptCd_tot',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_tot',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo_tot',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt_tot',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eta_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcust_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'expression',style:'',value:'합계',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{id:'hhactcustnm_tot',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt_tot',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt_tot',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm_tot',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm_tot',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd_tot',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'bilgAmtFcrc\')',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'bilgAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'bilgAmt\')',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'pchsAmtFcrc\')',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'pchsAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'pchsAmt\')',style:'',value:'',dataType:'number',maxLength:'0',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'oper_tot',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman_tot',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{id:'deptCd_tot',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_tot',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo_tot',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt_tot',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eta_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcust_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:'합계'}},{T:1,N:'w2:column',A:{id:'hhactcustnm_tot',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt_tot',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt_tot',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm_tot',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm_tot',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd_tot',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'bilgAmtFcrc\')',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'bilgAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'bilgAmt\')',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'pchsAmtFcrc\')',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'pchsAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',expression:'sum(\'pchsAmt\')',style:'',value:'',dataType:'number',maxLength:'0',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{id:'oper_tot',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman_tot',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display:none'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:'미확정매출원가내역서 이력',style:'',tagname:'h3'}}]},{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grp_group5',style:'',gridUpYn:'N',gridID:'gr_resultsHist',gridDownFn:'scwin.f_RunExcel2',gridDownUserAuth:'X',id:'udc_topGrdBtn2'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group5',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',class:'wq_gvw',dataList:'data:ds_resultsHist',id:'gr_resultsHist',readOnly:'true',rowNumHeaderValue:'No',rowNumWidth:'50',style:'',visibleRowNum:'3',visibleRowNumFix:'true',mergeCol:'closeSeqHist,closeDt,deptCd,blNo,hhactcust,hhactcustnm,oper,salesman,etd,eta,bilgClntCd,bilgClnt,pchsClntCd,pchsClnt',mergeCells:'bycol'},E:[{T:1,N:'w2:caption',A:{id:'caption5',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header1',style:''},E:[{T:1,N:'w2:row',A:{id:'row1',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column1',inputType:'text',width:'80',value:'Close<br/>차수',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',width:'80',value:'Close<br/>일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',width:'80',value:'부서',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',width:'80',value:'B/L NO',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column11',inputType:'text',width:'80',value:'ORDER NO',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column9',inputType:'text',width:'80',value:'발생일자',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column3',inputType:'text',width:'80',value:'E.T.D',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column5',inputType:'text',width:'80',value:'E.T.A',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column33',displayMode:'label',value:'BL거래처',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column29',displayMode:'label',value:'매출처',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column25',displayMode:'label',value:'매입처',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column64',value:'VESSEL',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column61',value:'운임명',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column58',value:'화폐',displayMode:'label',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',style:'',id:'column55',value:'매출',displayMode:'label',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',id:'column21',displayMode:'label',value:'원가',colSpan:'2',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',width:'80',value:'OPER',colSpan:'',rowSpan:'2'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column76',value:'Sales',displayMode:'label',colSpan:'',rowSpan:'2'}}]},{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column43',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'거래처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column41',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column40',value:'매출처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column38',value:'매입처명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column56',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column53',value:'원화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'외화',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'80',inputType:'text',style:'',id:'column36',value:'원화',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody1',style:''},E:[{T:1,N:'w2:row',A:{id:'row2',style:''},E:[{T:1,N:'w2:column',A:{id:'closeSeqHist',name:'Close',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'closeDt',name:'Close',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'deptCd',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eta',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'calendar',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcust',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcustnm',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'bilgAmt',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'pchsAmt',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'oper',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'hhactcust',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{id:'closeSeqHist_sut',name:'Close',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'closeDt_sut',name:'Close',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'deptCd_sut',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_sut',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo_sut',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt_sut',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd_sut',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eta_sut',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcust_sut',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'expression',style:'',value:'',expression:'targetColValue()'}},{T:1,N:'w2:column',A:{id:'hhactcustnm_sut',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd_sut',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt_sut',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd_sut',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt_sut',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm_sut',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm_sut',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd_sut',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc_sut',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0',expression:'sum(\'bilgAmtFcrc\')'}},{T:1,N:'w2:column',A:{id:'bilgAmt_sut',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###',expression:'sum(\'bilgAmt\')'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc_sut',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0',expression:'sum(\'pchsAmtFcrc\')'}},{T:1,N:'w2:column',A:{id:'pchsAmt_sut',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'expression',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###',expression:'sum(\'pchsAmt\')'}},{T:1,N:'w2:column',A:{id:'oper_sut',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman_sut',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{id:'closeSeqHist_tot',name:'Close',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'closeDt_tot',name:'Close',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'deptCd_tot',name:'부서',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'blNo_tot',name:'B/L',width:'85',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'odrNo_tot',name:'ORDER',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'rsltsStdDt_tot',name:'발생일자',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'etd_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'eta_tot',name:'E',width:'70',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcust_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'hhactcustnm_tot',name:'거래처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClntCd_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgClnt_tot',name:'매출처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClntCd_tot',name:'코드',width:'50',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'pchsClnt_tot',name:'매입처명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'shprNm_tot',name:'VESSEL',width:'90',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'fareEngNm_tot',name:'운임명',width:'80',textAlign:'left',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'crcCd_tot',name:'화폐',width:'40',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'bilgAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'bilgAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'pchsAmtFcrc_tot',name:'외화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'2',displayFormat:'#,###.#0'}},{T:1,N:'w2:column',A:{id:'pchsAmt_tot',name:'원화',width:'75',textAlign:'right',displayMode:'label',inputType:'text',style:'',value:'',dataType:'float',maxLength:'0',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{id:'oper_tot',name:'OPER',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}},{T:1,N:'w2:column',A:{id:'salesman_tot',name:'Sales',width:'60',textAlign:'center',displayMode:'label',inputType:'text',style:'',value:''}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:'display:none'},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:'',style:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'tbx_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})