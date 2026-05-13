/*amd /ui/ac/fi/gnrlaccount/settmgnt/fi_204_03_01p.xml 20760 bb869d3eb807916acfdf81240c7e4834554b55c96a7555a5fce29be981accdf2 */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'closeYm',name:'결산년월',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeEndDtm',name:'종료일자',dataType:'text'}},{T:1,N:'w2:key',A:{id:'closeEndDtmView',name:'종료일자2',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_slipNo',saveRemovedData:'true','ev:ondataload':'scwin.ds_slipNo_ondataload'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'전표일자',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_txt',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'checkYn',name:'체크여부',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipDt',name:'작성일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipSeq',name:'전표순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'dsum',name:'차변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'csum',name:'대변합계',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'summary',name:'적요',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postDt',name:'회계처리일자',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postNo',name:'회계처리번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'drawEmpNm',name:'작성자사원명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'postAcctDeptNm',name:'회계처리귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipAcctDeptNm',name:'전표귀속부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipKndNm',name:'전표종류명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'modDtm2',name:'수정일시2',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_search',action:'/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipAddListCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_txt","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_txt","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'처리중...','ev:submit':'','ev:submitdone':'scwin.sbm_search_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_204_03_01p
// 이름     : 월결산전표리스트 (결산정보(결산회차관리))
// 경로     : 재무회계/일반회계/전표관리/ 월결산
// 사용계정 : 내부
// 파라미터 :
//            IN  :
//            OUT :
//
// 비고     : 
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//           회계/재무회계/일반회계/결산관리/월결산(fi_204_03_01b.jsp)에서 호출
//            
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.vCoClsCd = ""; // 소속회사종류 : 회계_회사구분('CO035' : 0:동부 EXPRESS)

scwin.vAdminYn = ""; // 어드민여부
scwin.userEmpNo = ""; // 사용자번호

scwin.isSubCompany = false; // 자회사여부

scwin.valueObject = $c.data.getParameter($p);
scwin.closeYm = "";
scwin.closeEndDtm = ""; // 쿼리에 보내는 값
scwin.closeEndDtmView = ""; // 보여주는 값

// <object id="ds_slipNo" classid="<%=DGauceCLSID.DATASET%>">
//  <param name=SortExpr          value="+slipDt +slipNo">
scwin.sort_options = {};
scwin.sort_options.sortIndex = "slipDt slipNo"; // 컬럼 나열
scwin.sort_options.sortOrder = "1 1"; // 1: 오름차순

scwin.onpageload = function () {
  console.log("====== onpageload ==================");

  // 회원정보를 json 데이터로 모두 받음
  let memJson = $c.data.getMemInfo($p);

  // 로그인 정보 추출
  let coCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coCd")) ? '' : $c.data.getMemInfo($p, "coCd");
  let coClsCd = $c.gus.cfIsNull($p, $c.data.getMemInfo($p, "coClsCd")) ? '' : $c.data.getMemInfo($p, "coClsCd");
  let userHomeClsCd = $c.data.getMemInfo($p, "userHomeClsCd"); // 사용자소속구분코드
  let userId = $c.data.getMemInfo($p, "userId");
  let privAdmin = $c.data.getMemInfo($p, "privAdmin");
  let empNo = $c.data.getMemInfo($p, "empNo");
  scwin.vLoginCoCd = coCd;
  scwin.vLoginCoClsCd = coClsCd;
  scwin.vUserHomeClsCd = userHomeClsCd;
  scwin.vCoCd = coCd;
  scwin.vCoClsCd = coClsCd;
  scwin.userId = userId;
  scwin.vAdminYn = privAdmin;
  scwin.userEmpNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ userId     : " + scwin.userId + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ vUserHomeClsCd : " + scwin.vUserHomeClsCd + "   vAdminYn : " + scwin.vAdminYn);
  //    console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // scwin.closeYm      = scwin.valueObject["closeYm"];

  scwin.closeYm = $c.data.getParameter($p, "closeYm") == null ? "" : $c.data.getParameter($p, "closeYm");
  temp = $c.data.getParameter($p, "closeEndDtm") == null ? "" : $c.data.getParameter($p, "closeEndDtm");
  scwin.closeEndDtmView = $c.data.getParameter($p, "closeEndDtm") == null ? "" : $c.data.getParameter($p, "closeEndDtm");

  // var temp = scwin.valueObject["closeEndDtm"];
  // scwin.closeEndDtmView = scwin.valueObject["closeEndDtm"];  // 보여주는 값

  // yyyy/MM/dd HH:MI:SS  -->  yyyyMMddHHMISS
  var lc_closeEndDtm = temp.substr(0, 4) + temp.substr(5, 2) + temp.substr(8, 2) + temp.substr(11, 2) + temp.substr(14, 2) + temp.substr(17, 2);
  scwin.closeEndDtm = lc_closeEndDtm; // 쿼리에 보내는 값 (YYYYMMDDHHMISS)

  console.log("▶▶ closeYm [" + scwin.closeYm + "]   쿼리용 closeEndDtm [" + scwin.closeEndDtm + "]");
  console.log("▶▶ 보여주는 값 closeEndDtmView [" + scwin.closeEndDtmView + "]");

  // 공통코드 : onPageLoad 에 위치
  // const codeOptions = [
  //      { grpCd : "FI019", compID : "lc_pchsSellCls" }  // 매입매출구분
  // ];
  // console.log(" codeOptions : "+ JSON.stringify(codeOptions));
  // $c.data.setCommonCode(codeOptions);
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    scwin.f_Header();
    scwin.f_Retrieve();
  }, {
    "delay": 50
  });
};

// @@ ====== 준비 ============================================================================== //

//-------------------------------------------------------------------------
// 헤더생성
//-------------------------------------------------------------------------
scwin.f_Header = function () {
  ica_closeYm.setValue(scwin.closeYm);
  ica_closeEndDtm.setValue(scwin.closeEndDtmView); // 보여주는 값
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 재조회
//-------------------------------------------------------------------------
scwin.f_SearchClear = function (e) {
  $c.gus.cfInitObjects($p, searchTable);
  scwin.f_Setting();
};

//-------------------------------------------------------------------------
// 조회(거래목록)
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  // if(typeof(valueObject) != "undefined" && valueObject != null){
  // if ( scwin.valueObject != null ) {

  // var closeYm = scwin.valueObject["closeYm"];
  // var closeEndDtm = scwin.valueObject["closeEndDtm"];

  if (scwin.closeYm != null && scwin.closeEndDtm != null) {
    // ds_search.UseChangeInfo = false;
    // tr_search.Action="/ac.fi.gnrlaccount.slipmgnt.RetrieveSlipAddListCMD.do";
    // tr_search.post();

    ds_search.set("closeEndDtm", scwin.closeEndDtm); // 변경된 값

    var dcJSON = ds_search.getJSON();
    console.log("  *** ds_search : " + JSON.stringify(dcJSON));
    $c.sbm.execute($p, sbm_search);
  }
  // }
};

//-------------------------------------------------------------------------
// 조회(거래목록) submitdone
//-------------------------------------------------------------------------
scwin.sbm_search_submitdone = async function (e) {
  console.log("▷ sbm_search_submitdone");
  if (e.responseJSON.resultDataSet[0].Code != 0) retrun;

  // language=JavaScript for=ds_txt event=OnLoadCompleted(rowCnt)>
  //   cfHideDSWaitMsg(gr_txt);
  //   cfShowTotalRows(totalRows, rowCnt);
  var rowCnt = ds_txt.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
  } else {
    ds_slipNo.setCellData(0, "slipNo", ds_txt.getCellData(0, "slipNo"));
  }
  // gr_txt.ColumnProp('checkYn','HeadCheck')="false";
  gr_txt.setHeaderValue("checkYn", false); // 헤더 체크 풀기
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 회계차수 처리
//-------------------------------------------------------------------------
scwin.postNoExp = function (data) {
  return $c.gus.decode($p, data, "0", "", data);
};

//-------------------------------------------------------------------------
// 전표번호 정렬
//-------------------------------------------------------------------------
scwin.ds_slipNo_ondataload = function () {
  ds_txt.multisort(scwin.sort_options);
};

//-------------------------------------------------------------------------
// 전표내역팝업 로딩
//-------------------------------------------------------------------------
scwin.gr_txt_oncellclick = function (rowIndex, columnIndex, columnId) {
  var Row = rowIndex;
  var Colid = columnId;
  // <!-- 전표번호클릭시  -->
  // <script language="javascript"  for=gr_txt event=OnClick(Row,Colid)>
  if (Colid == "slipNo" && Row >= 0) {
    $c.gus.cfShowSlipInfo($p, ds_txt.getCellData(Row, "slipNo"));
  }
  if (Row >= 0) {
    ds_slipNo.setCellData(0, "slipNo", ds_txt.getCellData(Row, "slipNo"));
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 파일   ============================================================================ //

//-------------------------------------------------------------------------
// 엑셀 파일 다운로드
//-------------------------------------------------------------------------
scwin.f_Excel = async function () {
  // var objGridName = eval("gr_txt");
  // if (cfConfirmMsg("Excel로 다운로드 하시겠습니까?")) {
  // 	cfGridToExcel(objGridName, "전표내역","전표내역조회.xls",8+16);
  // }
  if (ds_txt.getTotalRow() == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_WRN_002);
    return false;
  }
  var sheetTitle = "전표내역";
  let cfrm = await $c.win.confirm($p, "EXCEL로 다운로드 받으시겠습니까?");
  if (cfrm) {
    let options = {
      fileName: "전표내역조회" + ".xlsx",
      sheetName: sheetTitle
    };
    $c.data.downloadGridViewExcel($p, gr_txt, options);
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'결산연월 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:inputCalendar',A:{calendarValueType:'yearMonth',class:'',id:'ica_closeYm',style:'',displayFormat:'yyyy/MM',objType:'data',ref:'data:ds_search.closeYm',title:'결산연월'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'종료일시 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:group',A:{class:'form-group',id:'grp_group2',style:''},E:[{T:1,N:'xf:input',A:{class:'w150 tac',dataType:'text',id:'ica_closeEndDtm',style:'',ref:'data:ds_search.closeEndDtmView',objType:'data',title:'종료일시'}}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:''},E:[{T:1,N:'w2:udc_topGrdBtn',A:{grp:'grd_section1',style:'',btnPlusYn:'N',btnUser:'Y',gridDownYn:'Y',gridUpYn:'N',templateYn:'N',gridID:'gr_txt',gridDownFn:'scwin.f_Excel'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grd_section1',style:''},E:[{T:1,N:'w2:gridView',A:{checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_txt',focusMode:'cell',id:'gr_txt',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'','ev:oncellclick':'scwin.gr_txt_oncellclick',visibleRowNum:'15'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'column33',value:'',displayMode:'label',fixColumnWidth:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column31',value:'작성일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column29',value:'전표번호',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column27',value:'순번',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'계정코드',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column23',value:'계정명',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'차변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column19',value:'대변금액',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column17',value:'적요',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column13',value:'귀속부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column15',value:'회계일자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column41',value:'회계차수',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column39',value:'작성자',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column35',value:'회계부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column37',value:'작성부서',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'column45',value:'전표종류',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'column43',value:'최종변경일시',displayMode:'label'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'50',inputType:'checkbox',style:'',id:'checkYn',value:'',displayMode:'label',fixColumnWidth:'true',falseValue:'F',trueValue:'T',valueType:'other'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipDt',value:'',displayMode:'label',displayFormat:'yyyy/MM/dd',dataType:'date',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:';color:blue;',id:'slipNo',value:'',displayMode:'label',readOnly:'true',class:'underline'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'slipSeq',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctCd',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'acctNm',value:'',displayMode:'label',class:'tal',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'dsum',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',class:'tar',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'csum',value:'',displayMode:'label',dataType:'number',displayFormat:'#,##0',class:'tar',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'summary',value:'',displayMode:'label',class:'tal',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',class:'tal',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postDt',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postNo',value:'',displayMode:'label',displayFormatter:'scwin.postNoExp',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'drawEmpNm',value:'',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'postAcctDeptNm',value:'',displayMode:'label',class:'tal',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'slipAcctDeptNm',value:'',displayMode:'label',class:'tal',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'150',inputType:'text',style:'',id:'slipKndNm',value:'',displayMode:'label',readOnly:'true',class:'tal'}},{T:1,N:'w2:column',A:{width:'180',inputType:'text',style:'',id:'modDtm2',value:'',displayMode:'label',readOnly:'true'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})