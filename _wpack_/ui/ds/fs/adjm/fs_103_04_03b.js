/*amd /ui/ds/fs/adjm/fs_103_04_03b.xml 42340 0ac87d51f21b47444174506cc9131ea57d997fc0d3391ca9c0479b32fed732bf */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_itemEachUnitySellingPurchaseList',saveRemovedData:'true','ev:ondataload':'scwin.ds_itemEachUnitySellingPurchaseList_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'transCargoClsNm',name:'화물구분',dataType:'text'}},{T:1,N:'w2:column',A:{id:'itemNm',name:'매출입항목',dataType:'text'}},{T:1,N:'w2:column',A:{id:'odrKndNm',name:'오더종류',dataType:'text'}},{T:1,N:'w2:column',A:{id:'clntNm',name:'거래처',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totQty',name:'합계_수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totWt',name:'합계_중량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totAmt',name:'합계_기본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcscTotAmt',name:'합계_할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'totTotal',name:'합계_금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTwoQty',name:'20_수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTwoAmt',name:'20_기본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcscTwoAmt',name:'20_할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrTwoTot',name:'20_금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFourQty',name:'40_수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFourAmt',name:'40_기본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcscFourAmt',name:'40_할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFourTot',name:'40_금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFiveQty',name:'45_수량',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFiveAmt',name:'45_기본',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dcscFiveAmt',name:'45_할증',dataType:'text'}},{T:1,N:'w2:column',A:{id:'cntrFiveTot',name:'45_금액',dataType:'text'}}]}]},{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'dma_itemEachUnityList_con'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'unityClsCd',name:'name1',dataType:'text'}},{T:1,N:'w2:key',A:{id:'deptCd',name:'name2',dataType:'text'}},{T:1,N:'w2:key',A:{id:'qryConKnd',name:'name3',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtSt',name:'name4',dataType:'text'}},{T:1,N:'w2:key',A:{id:'wrkDtEnd',name:'name5',dataType:'text'}},{T:1,N:'w2:key',A:{id:'transCargoClsCd',name:'name6',dataType:'text'}},{T:1,N:'w2:key',A:{id:'clntNo',name:'name7',dataType:'text'}},{T:1,N:'w2:key',A:{id:'lineCd',name:'name8',dataType:'text'}},{T:1,N:'w2:key',A:{id:'vsslCd',name:'name9',dataType:'text'}},{T:1,N:'w2:key',A:{id:'portcnt',name:'name10',dataType:'text'}},{T:1,N:'w2:key',A:{id:'cvsslMgntNo',name:'name11',dataType:'text'}},{T:1,N:'w2:key',A:{id:'regId',name:'name12',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_itemEachUnityList_retrieve',action:'/ds.fs.adjm.adjmbdcalc.RetrieveItemEachUnitySellingPurchaseCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"dma_itemEachUnityList_con","key":"IN_DS1"},{"id":"ds_itemEachUnitySellingPurchaseList","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_itemEachUnitySellingPurchaseList","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'','ev:submit':'','ev:submitdone':'scwin.sbm_retrieve_submitDone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//-------------------------------------------------------------------------
// 전역변수
//-------------------------------------------------------------------------
scwin.vCurDate = WebSquare.date.getCurrentServerDate(); // 서버를 기준으로 현재 날짜 반환
scwin.vQryStDt = scwin.vCurDate.substring(0, 6) + "01"; // 조회시작일자(현재 날짜가 포함된 달의 시작 일자)

//-------------------------------------------------------------------------
// 화면로딩시
//-------------------------------------------------------------------------
scwin.onpageload = function () {
  rd_unityClsCd.setValue("매입");
  rd_transCargoClsCd.setValue("");
};
scwin.onUdcCompleted = function () {
  ica_wrkDt.setInitDate(scwin.vQryStDt, scwin.vCurDate);
  ed_deptCd.focus();
};

//-------------------------------------------------------------------------
// 대문자 변환
//-------------------------------------------------------------------------
scwin.onkeyup = function (e) {
  // let result = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");

  this.setValue(e.target.value.toUpperCase());
};
scwin.ed_cvsslMgntNo_onkeydown = function (e) {
  let result = e.target.value.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, "");
  this.setValue(result.toUpperCase());
};

//-------------------------------------------------------------------------
// 조회 / ASIS = f_Retrieve()
//-------------------------------------------------------------------------
scwin.btn_retrieve_onClick = async function (e) {
  if (!(await $c.gus.cfValidate($p, [ed_deptCd]))) {
    return;
  }

  //조회시작일자가 더 클경우 체크
  if (!$c.gus.cfIsAfterDate($p, ica_wrkDtSt.getValue(), ica_wrkDtEnd.getValue())) {
    $c.win.alert($p, MSG_CM_ERR_039);
    return;
  }
  dma_itemEachUnityList_con.set("unityClsCd", rd_unityClsCd.getValue()); //조회조건  통합매출입 구분     	
  dma_itemEachUnityList_con.set("deptCd", ed_deptCd.getValue());
  if (acb_qryConKnd.getValue() == "오더") {
    qryConKnd = "오더일자";
  } else if (acb_qryConKnd.getValue() == "실적") {
    qryConKnd = "실적일자";
  } else if (acb_qryConKnd.getValue() == "회계") {
    qryConKnd = "회계일자";
  }
  dma_itemEachUnityList_con.set("qryConKnd", qryConKnd);
  dma_itemEachUnityList_con.set("wrkDtSt", ica_wrkDtSt.getValue());
  dma_itemEachUnityList_con.set("wrkDtEnd", ica_wrkDtEnd.getValue());
  dma_itemEachUnityList_con.set("transCargoClsCd", rd_transCargoClsCd.getValue());
  dma_itemEachUnityList_con.set("clntNo", ed_clntNo.getValue());
  dma_itemEachUnityList_con.set("lineCd", ed_lineCd.getValue());
  dma_itemEachUnityList_con.set("vsslCd", ed_vsslCd.getValue());
  dma_itemEachUnityList_con.set("portcnt", ed_portcnt.getValue());
  dma_itemEachUnityList_con.set("cvsslMgntNo", ed_cvsslMgntNo.getValue());
  dma_itemEachUnityList_con.set("regId", ed_regId.getValue());
  $c.sbm.execute($p, sbm_itemEachUnityList_retrieve);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (매출입부서)
//-------------------------------------------------------------------------
scwin.udc_dept_onClick = async function (e) {
  scwin.f_openCommonPopUp(1, ed_deptCd.getValue(), ed_deptNm.getValue(), "F", "F");
};
scwin.udc_dept_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_deptCd, ed_deptNm, 1);
};
scwin.udc_dept_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_deptNm, ed_deptCd, 1, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(매출입부서)
//-------------------------------------------------------------------------
scwin.udc_dept_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_deptCd, ed_deptNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (거래처)
//-------------------------------------------------------------------------
scwin.udc_clnt_onClick = async function (e) {
  scwin.f_openCommonPopUp(2, ed_clntNo.getValue(), ed_clntNm.getValue(), "F", "F");
};
scwin.udc_clnt_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNm, 2);
};
scwin.udc_clnt_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_clntNo, ed_clntNo, 2, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(거래처)
//-------------------------------------------------------------------------
scwin.udc_clnt_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_clntNo, ed_clntNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (Line)
//-------------------------------------------------------------------------
scwin.udc_line_onClick = async function (e) {
  scwin.f_openCommonPopUp(3, ed_lineCd.getValue(), ed_lineNm.getValue(), "F", "F");
};
scwin.udc_line_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_lineCd, ed_lineNm, 3);
};
scwin.udc_line_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_lineNm, ed_lineCd, 3, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(Line)
//-------------------------------------------------------------------------
scwin.udc_line_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_lineCd, ed_lineNm);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 (오더등록자)
//-------------------------------------------------------------------------
scwin.udc_reg_onClick = async function (e) {
  scwin.f_openCommonPopUp(5, ed_regId.getValue(), ed_regNm.getValue(), "F", "F");
};
scwin.udc_reg_onblurCode = async function (e) {
  scwin.f_chkOpenCommonPopUp(ed_regId, ed_regNm, 5);
};
scwin.udc_reg_onChangeName = async function (info) {
  scwin.f_chkOpenCommonPopUp(ed_regNm, ed_regId, 5, false);
};

//-------------------------------------------------------------------------
// UDC 공통 팝업 콜백(오더등록자)
//-------------------------------------------------------------------------
scwin.udc_reg_callBackFunc = function (ret) {
  $c.gus.cfSetReturnValue($p, ret, ed_regId, ed_regNm);
};

//-------------------------------------------------------------------------
// 팝업 처리시 검색된 데이터인 경우 팝업 처리 안함.
//-------------------------------------------------------------------------
scwin.f_chkOpenCommonPopUp = function (inObj, pairObj, disGubun, isCode) {
  // 값이 입력이 안된 경우, 해당 Text Box가 readonly 인 경우, 이전값과 동일한 경우 팝업을 실행하지 않음.
  if (!$c.gus.cfCanOpenPopup($p, inObj, pairObj)) return;

  // 짝이 되는 오브젝트의 값 제거
  $c.gus.cfClearPairObj($p, pairObj);

  // 검색어 세팅
  var pVal = $c.gus.cfGetValue($p, inObj);

  // inObj가 코드 필드일 경우 팝업

  if (isCode == null || isCode == true) scwin.f_openCommonPopUp(disGubun, pVal, "", "T", "T");
  // inObj가 코드명 필드일 경우 팝업
  else scwin.f_openCommonPopUp(disGubun, "", pVal, "T", "T");
};

//-------------------------------------------------------------------------
// 팝업창 처리
//-------------------------------------------------------------------------
scwin.f_openCommonPopUp = function (disGubun, pCode, pName, pClose, pAllSearch) {
  // 선언부
  var rtnList = new Array(); // 공통POP-UP -> 요청화면 

  switch (disGubun) {
    case 1:
      // 매입부서 팝업			
      udc_dept.cfCommonPopUp(scwin.udc_dept_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 2:
      // 청구처 팝업			
      udc_clnt.cfCommonPopUp(scwin.udc_clnt_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      break;
    case 3:
      // 라인 팝업			
      udc_line.cfCommonPopUp(scwin.udc_line_callBackFunc, pCode.trim(), pName, pClose, null, null, null, null, null, null, null, null, null, null, pAllSearch, null);
      $c.gus.cfSetReturnValue($p, rtnList, ed_lineCd, txt_lineNm); // 라인코드, 라인명				
      break;
    case 5:
      // 오더등록자			
      udc_reg.cfCommonPopUp(scwin.udc_reg_callBackFunc // XML상의 SELECT ID	
      , pCode // 화면에서의 ??? Code Element의	Value
      , pName // 화면에서의 ??? Name Element의	Value
      , pClose // 결과가 1건 일때  원도우를	AutoClose 여부	(T:Close,F:Opened)
      , null // 검색 결과	컬럼의 보여주는	개수 (SELECT절의 순서) MAX:10 - default (2)
      , null // Title순서	
      , null // 보여주는 각 컬럼들의 폭	
      , null // 컬럼중에서 숨기는	컬럼 지정	
      , null // SQL절의 WHERE절에	원하는 조건을 선택함 MAX:8개까지 가능
      , null // POP-UP뛰을때 원도우의	사용자 정의	폭
      , null // POP-UP뛰을때 우도우의	사용자 정의	높이	
      , null // 윈도우 위치 Y좌표	
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부	("F")
      , pAllSearch // 전체검색허용여부	("F")
      , "등록자,사용자ID,사용자명" // POP-UP Window Title 검색어1,2	 ("Win타이틀,첫번검색Nm,두번?검색Nm")				  			
      );
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 본선 관리 번호 팝업
//-------------------------------------------------------------------------
scwin.btn_cvsslMgntNo_onClick = async function (e) {
  //팝업 화면에 데이터 보내는 방법 1. json형태로 팝업화면에서 getParameter로 받기
  let params = [];
  params[0] = ed_cvsslMgntNo.getValue(); // 화면에서의 ??? Code Element의	Value

  // let params = {
  //     cvsslMgntNo: ed_cvsslMgntNo.getValue()		// 화면에서의 ??? Code Element의	Value
  // };

  let url = "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml";
  let opts = {
    id: "taxPop",
    type: "",
    popupName: "본선관리번호검색팝업",
    title: "본선관리번호검색화면",
    width: 1100,
    height: 650
  };

  // let opts = {
  //     id: "taxPop", 
  //     type: "",
  //     popupName: "본선관리번호검색팝업",
  //     width:  1100,                   
  //     height: 650
  // };

  let rtnValues = await $c.win.openPopup($p, "/ui/ds/op/wrkplan/stvwrkplan/op_204_01_07p.xml", opts, params);
  if (rtnValues != null) {
    $c.gus.cfSetReturnValue($p, rtnValues, ed_cvsslMgntNo);
    ed_cvsslMgntNo.setValue(rtnValues[0]);
  }
};

//-------------------------------------------------------------------------
// 초기화
//-------------------------------------------------------------------------
scwin.btn_init_onClick = function (e) {
  $c.gus.cfInitObjects($p, tbl_search);
  scwin.onUdcCompleted();
  rd_unityClsCd.setValue("매입");
  rd_transCargoClsCd.setValue("");
};

//-------------------------------------------------------------------------
// 데이터 조회 완료시
//-------------------------------------------------------------------------
scwin.ds_itemEachUnitySellingPurchaseList_ondataload = function () {
  if (ds_itemEachUnitySellingPurchaseList.getTotalRow() == 0) {
    $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    spa_totalRows.setValue(ds_itemEachUnitySellingPurchaseList.getTotalRow());
  }
  ;

  // let options = {
  //     sortIndex : "transCargoClsNm",
  //     sortOrder : ""
  // }
};
scwin.runExcel = async function () {
  let rowCnt = ds_itemEachUnitySellingPurchaseList.getTotalRow();
  let options = {
    fileName: "매출입항목별 통합매출입 집계.xlsx",
    sheetName: "매출입항목별 통합매출입 집계",
    useSubTotal: true
  };
  let grdObj = gr_itemEachUnitySellingPurchaseList;
  let infoArr = {};
  if (rowCnt != 0) {
    if (await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?")) {
      $c.data.downloadGridViewExcel($p, grdObj, options, infoArr);
    }
  } else {
    $c.win.alert($p, MSG_CM_WRN_002);
  }
};
scwin.ica_wrkDt_onBlurFrom = function (e) {
  let dateStr = ica_wrkDtSt.getValue();

  // 종료일자 체크
  if (ica_wrkDtSt.getValue() > ica_wrkDtEnd.getValue() && ica_wrkDtEnd.getValue().length == 8) {
    $c.win.alert($p, "시작일자가 종료일자 이전이여야 합니다.");
    ica_wrkDtSt.setValue("");
    ica_wrkDtSt.focus();
    return;
  } else {
    let minY = 1900;
    let maxY = 2099;
    let strY = dateStr.substring(0, 4);

    // 형식 체크
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 8 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
        ica_wrkDtSt.setValue("");
        ica_wrkDtSt.focus();
        return;
      });
    }
  }
  ;
};
scwin.ica_wrkDt_onBlurTo = function (e) {
  let dateStr = ica_wrkDtEnd.getValue();

  // 종료일자 체크
  if (ica_wrkDtSt.getValue() > ica_wrkDtEnd.getValue() && ica_wrkDtEnd.getValue().length == 8) {
    $c.win.alert($p, "종료일자는 시작일자보다 이후여야 합니다.");
    ica_wrkDtEnd.setValue("");
    ica_wrkDtEnd.focus();
    return;
  } else {
    let minY = 1900;
    let maxY = 2099;
    let strY = dateStr.substring(0, 4);

    // 형식 체크
    if (!$c.date.isDate($p, dateStr) && dateStr.length == 8 || parseInt(strY) < minY || parseInt(strY) > maxY) {
      $c.win.alert($p, "날짜 형식이 올바르지 않습니다.", function () {
        ica_wrkDtEnd.setValue("");
        ica_wrkDtEnd.focus();
        return;
      });
    }
  }
  ;
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}},{T:1,N:'w2:require',A:{as:'udc_fromToCalendar',type:'page',variableClone:'true',src:'/cm/udc/fromToCalendar.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'sub_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'tbl_search',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:70px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width: 20%;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:85px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'width:125px;',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th ',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'매출입구분 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_unityClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매출'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'매출'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'매입'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'매입'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'매출입부서',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'매출입부서',style:'',class:'col7',codeId:'ed_deptCd',nameId:'ed_deptNm',UpperFlagCode:'1',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'true',maxlengthCode:'4',validExpCode:'매출입부서:yes',mandatoryName:'false',id:'udc_dept',selectID:'retrieveLobranInfo','ev:onclickEvent':'scwin.udc_dept_onClick','ev:onblurCodeEvent':'scwin.udc_dept_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_dept_onChangeName',validTitle:'매출입부서'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:autoComplete',A:{class:'req',editType:'select',id:'acb_qryConKnd',search:'start',style:'width: 100px;',submenuSize:'auto',allOption:'',chooseOption:'',ref:'',textAlign:'left',displayMode:'label'},E:[{T:1,N:'w2:choices',E:[{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'오더일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'오더'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'실적일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'실적'}]}]},{T:1,N:'w2:item',E:[{T:1,N:'w2:label',E:[{T:4,cdata:'회계처리일자'}]},{T:1,N:'w2:value',E:[{T:4,cdata:'회계'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_fromToCalendar',A:{id:'ica_wrkDt',refDataMap:'',refEdDt:'',refStDt:'',style:'',edFromId:'ica_wrkDtSt',edToId:'ica_wrkDtEnd',mandatoryFrom:'true',mandatoryTo:'true','ev:onBlurFrom':'scwin.ica_wrkDt_onBlurFrom','ev:onBlurTo':'scwin.ica_wrkDt_onBlurTo'}}]}]},{T:1,N:'xf:group',A:{class:'',id:'',style:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'화물구분',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',style:'',tagname:'td'},E:[{T:1,N:'xf:select1',A:{appearance:'full',class:'',cols:'',id:'rd_transCargoClsCd',ref:'',renderType:'radiogroup',rows:'',selectedIndex:'-1',style:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'전체'}]},{T:1,N:'xf:value'}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'Cntr'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'C'}]}]},{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'벌크'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'B'}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'w2tb_th',style:'',tagname:'th'},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'거래처 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',style:'',tagname:'td'},E:[{T:1,N:'w2:udc_comCode',A:{popupID:'거래처',style:'',class:'col7',codeId:'ed_clntNo',nameId:'ed_clntNm',id:'udc_clnt',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'false',maxlengthCode:'6',mandatoryName:'false',UpperFlagCode:'1','ev:onclickEvent':'scwin.udc_clnt_onClick','ev:onblurCodeEvent':'scwin.udc_clnt_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_clnt_onChangeName',selectID:'retrieveClntInfo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',id:'',tagname:'th'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'LINE',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'LINE',style:'',class:'col7',codeId:'ed_lineCd',nameId:'ed_lineNm',id:'udc_line',allowCharCode:'a-zA-Z0-9',editTypeCode:'select',mandatoryCode:'false',maxlengthCode:'5',UpperFlagCode:'1',mandatoryName:'false',selectID:'retrieveLineInfo','ev:onclickEvent':'scwin.udc_line_onClick','ev:onblurCodeEvent':'scwin.udc_line_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_line_onChangeName'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'모선/항차',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{id:'',class:'form-group'},E:[{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_vsslCd',placeholder:'',class:'',allowChar:'a-zA-Z0-9',editType:'select',maxlength:'4','ev:onkeyup':'scwin.onkeyup',validateOnInput:'true'}},{T:1,N:'xf:input',A:{style:'width:80px;',id:'ed_portcnt',placeholder:'',class:'',maxlength:'10',allowChar:'a-zA-Z0-9',editType:'select','ev:onkeyup':'scwin.onkeyup',validateOnInput:'true'}}]}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'본선관리번호 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'',style:''},E:[{T:1,N:'xf:input',A:{class:'',id:'ed_cvsslMgntNo',placeholder:'',style:'width: 85px;',objType:'data',maxlength:'8',allowChar:'a-zA-Z0-9',editType:'select','ev:onkeyup':'scwin.onkeyup',validateOnInput:'true'}},{T:1,N:'xf:trigger',A:{class:'btn ico sch',id:'btn_cvsslMgntNo',style:'',type:'button','ev:onclick':'scwin.btn_cvsslMgntNo_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'버튼'}]}]}]}]},{T:1,N:'xf:group',A:{tagname:'th',id:'',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'오더등록자 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{popupID:'',style:'',class:'col7',codeId:'ed_regId',nameId:'ed_regNm',btnId:'btn_PopUp1',id:'udc_reg',editTypeCode:'select',maxlengthCode:'10',objTypeCode:'Data',readOnlyCode:'false',selectID:'retrieveUserInfo','ev:onclickEvent':'scwin.udc_reg_onClick','ev:onblurCodeEvent':'scwin.udc_reg_onblurCode','ev:onviewchangeNameEvent':'scwin.udc_reg_onChangeName',validTitle:'오더등록자'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn ico refresh',id:'btn_init',style:'',type:'button','ev:onclick':'scwin.btn_init_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'엑셀 UP'}]}]},{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_retrieve',style:'',type:'button','ev:onclick':'scwin.btn_retrieve_onClick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',gridUpYn:'N',gridID:'gr_itemEachUnitySellingPurchaseList',id:'udc_excel',gridDownFn:'scwin.runExcel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_itemEachUnitySellingPurchaseList',focusMode:'row',id:'gr_itemEachUnitySellingPurchaseList',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'14',visibleRowNumFix:'true',resize:'true',columnMove:'true',readOnly:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption10',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column12',inputType:'text',removeBorderStyle:'false',width:'100',value:'화물구분',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column11',inputType:'text',removeBorderStyle:'false',width:'120',value:'매출입항목',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column10',inputType:'text',removeBorderStyle:'false',width:'100',value:'오더종류',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'column9',inputType:'text',removeBorderStyle:'false',width:'100',value:'거래처',colSpan:'',rowSpan:'2',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'합계',width:'350',colSpan:'5',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column89',value:'20',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column73',value:'40',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}},{T:1,N:'w2:column',A:{width:'280',inputType:'text',style:'',id:'column57',value:'45',displayMode:'label',colSpan:'4',rowSpan:'',sortable:'false'}}]},{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column27',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column26',value:'중량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column25',value:'기본',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column24',value:'할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column23',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column90',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column86',value:'기본',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column82',value:'할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column78',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column74',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column70',value:'기본',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column66',value:'할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column62',value:'금액',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'60',inputType:'text',style:'',id:'column58',value:'수량',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column54',value:'기본',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column42',value:'할증',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'90',inputType:'text',style:'',id:'column46',value:'금액',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'transCargoClsNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',colMerge:'true'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'itemNm',inputType:'text',removeBorderStyle:'false',width:'120',textAlign:'left',colMerge:'true',upperColumn:'transCargoClsNm'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'odrKndNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',colMerge:'true',upperColumn:'itemNm'}},{T:1,N:'w2:column',A:{blockSelect:'false',displayMode:'label',id:'clntNm',inputType:'text',removeBorderStyle:'false',width:'100',textAlign:'left',colMerge:'true',minWidth:'0',upperColumn:'odrKndNm'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totQty',inputType:'text',style:'',value:'',width:'60',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totWt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,###.000',dataType:'float',maxLength:'0.3'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'dcscTotAmt',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'totTotal',inputType:'text',style:'',value:'',width:'70',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTwoQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTwoAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcscTwoAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrTwoTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFourQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFourAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcscFourAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFourTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFiveQty',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFiveAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'dcscFiveAmt',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'cntrFiveTot',value:'',displayMode:'label',textAlign:'right',displayFormat:'#,##0',dataType:'number'}}]}]},{T:1,N:'w2:subTotal',A:{targetColumnID:'transCargoClsNm',style:'',id:'subTotal1'},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column100',value:'소계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column99',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column98',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column97',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column96',value:'',displayMode:'label',expression:'sum("totQty")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column95',value:'',displayMode:'label',expression:'sum("totWt")',displayFormat:'#,##0.000[floor]',dataType:'number',textAlign:'right',maxLength:'18.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column94',value:'',displayMode:'label',expression:'sum("totAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column93',value:'',displayMode:'label',expression:'sum("dcscTotAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',expression:'sum("totTotal")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column91',value:'',displayMode:'label',expression:'sum("cntrTwoQty")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column90',value:'',displayMode:'label',expression:'sum("cntrTwoAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column89',value:'',displayMode:'label',expression:'sum("dcscTwoAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',expression:'sum("cntrTwoTot")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column87',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("cntrFourQty")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column86',value:'',displayMode:'label',expression:'sum("cntrFourAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column85',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("dcscFourAmt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',expression:'sum("cntrFourTot")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column83',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("cntrFiveQty")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column82',value:'',displayMode:'label',expression:'sum("cntrFiveAmt")',displayFormat:'#,##0',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column81',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("dcscFiveAmt")',dataType:'number',textAlign:'right'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',displayFormat:'#,##0',expression:'sum("cntrFiveTot")',dataType:'number',textAlign:'right'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row6'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column40',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column38',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'60',inputType:'expression',style:'',id:'column36',value:'',displayMode:'label',textAlign:'right',expression:'sum("totQty")',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column35',value:'',displayMode:'label',textAlign:'right',expression:'sum("totWt")',dataType:'number',displayFormat:'#,###.000',maxLength:'18.3'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column34',value:'',displayMode:'label',textAlign:'right',expression:'sum("totAmt")',dataType:'number',displayFormat:'#,###'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column33',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcscTotAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column32',value:'',displayMode:'label',textAlign:'right',expression:'sum("totTotal")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column92',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrTwoQty")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column88',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrTwoAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column84',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcscTwoAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column80',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrTwoTot")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column76',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFourQty")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column72',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFourAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column68',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcscFourAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column64',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFourTot")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column60',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFiveQty")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column56',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFiveAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column44',value:'',displayMode:'label',textAlign:'right',expression:'sum("dcscFiveAmt")',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:column',A:{width:'70',inputType:'expression',style:'',id:'column48',value:'',displayMode:'label',textAlign:'right',expression:'sum("cntrFiveTot")',dataType:'number',displayFormat:'#,##0'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'spa_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]}]}]}]}]})