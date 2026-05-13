/*amd /ui/ac/fi/electaxinvc/fi_900_01_09p.xml 27919 eedb58bb5a5a589e9516af49f2478912b44b9a711fdb0ca85774dd4baf265a6c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataMap',A:{baseNode:'map',id:'ds_search'},E:[{T:1,N:'w2:keyInfo',E:[{T:1,N:'w2:key',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_master',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'fareEngNm',name:'운임영문명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'curr',name:'통화',dataType:'text'}},{T:1,N:'w2:column',A:{id:'qty',name:'수량',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellUpr',name:'판매단가',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'sellAmt',name:'매출액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'vatAmt',name:'부가세금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rmk',name:'비고',dataType:'text'}},{T:1,N:'w2:column',A:{id:'slipNo',name:'DEBIS전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'bidcSlipNo',name:'BIDC전표번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'seq',name:'일련번호',dataType:'number',defaultValue:'0'}}]}]}]},{T:1,N:'w2:workflowCollection'},{T:1,N:'xf:submission',A:{id:'sbm_searchBidcVat',action:'/ac.fi.electaxinvc.RetrieveBidcVatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,[{"id":"ds_search","key":"IN_DS1"},{"id":"ds_master","key":"OUT_DS1"}]',target:'data:json,{"id":"ds_master","key":"OUT_DS1"}',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_searchBidcVat_submitdone','ev:submiterror':'',abortTrigger:''}},{T:1,N:'xf:submission',A:{id:'sbm_saveBidcVat',action:'/ac.fi.electaxinvc.SaveBidcVatCMD.do',method:'post',mediatype:'application/json',ref:'data:json,{"action":"modified","id":"ds_master","key":"IN_DS1"}',target:'',encoding:'UTF-8',instance:'',replace:'',errorHandler:'',customHandler:'',mode:'asynchronous',processMsg:'none','ev:submit':'','ev:submitdone':'scwin.sbm_saveBidcVat_submitdone','ev:submiterror':'',abortTrigger:''}}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{cache:'false',scopeExternal:'false',src:'/ui/ac/am/constants/ACConstants.js',scopeVariable:'',type:'text/javascript'}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_900_01_09b
// 이름     : BIDC 전자세금계산서 발행 확인
// 경로     : 전자세금계산서/
// 사용계정 : BIDC사용자
//            
// 비고     :
//           2026-02-24 품목명 없이 저장 가능, 조회에선 나오지 않음 : 수정예정 (권정민 책임님)
// 업로드   :
// 다운로드 : 
// 레포트   :
//           /ac/fi/taxbiz/vatctrl/fi_bidc_401_01_02p.ozr
// 호출     : 
//            [호출당함]
//              BIDC 
//            회계/전자세금계산서/전자세금계산서 거래처전송-신규(fi_900_01_01b.jsp)에서 호출
//            - 발동 :  발행확인 버튼 클릭
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.user_id = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.userEmpNo = ""; // 사원번호

scwin.isSubCompany = false; // 자회사유무(true:자회사, false:일반)

scwin.pSlipNo = "";
scwin.pSpplyAmt = "";
scwin.pVat = "";
scwin.pSumAmt = "";
scwin.pRemark = "";
scwin.pVatNo = "";
scwin.check_select = true; // 저장가능상태 플래그 (미사용)

scwin.onpageload = function () {
  console.log("====== onpageload ================== v 1.01");

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
  scwin.vCoCd = coCd; // 동일
  scwin.user_id = userId;
  scwin.privAdmin = privAdmin;
  scwin.userEmpNo = empNo;
  scwin.vCoClsCd = coClsCd;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   vCoClsCd : " + scwin.vCoClsCd);
  console.log("▶▶ user_id    : " + scwin.user_id + "   userEmpNo : " + scwin.userEmpNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   privAdmin : " + scwin.privAdmin);
  scwin.pSlipNo = $c.data.getParameter($p, "slipNo") == null ? "" : $c.data.getParameter($p, "slipNo");
  scwin.pSpplyAmt = $c.data.getParameter($p, "spplyAmt") == null ? "" : $c.data.getParameter($p, "spplyAmt");
  scwin.pVat = $c.data.getParameter($p, "vat") == null ? "" : $c.data.getParameter($p, "vat");
  scwin.pSumAmt = $c.data.getParameter($p, "sumAmt") == null ? "" : $c.data.getParameter($p, "sumAmt");
  scwin.pRemark = $c.data.getParameter($p, "remark") == null ? "" : $c.data.getParameter($p, "remark");
  scwin.pVatNo = $c.data.getParameter($p, "vatNo") == null ? "" : $c.data.getParameter($p, "vatNo");
  console.log(" 파라미터  slipNo [" + scwin.pSlipNo + "] [" + scwin.pSpplyAmt + "][" + scwin.pVat + "][" + scwin.pSumAmt + "][" + scwin.pRemark + "] pVatNo[" + scwin.pVatNo + "]");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완.
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    btn_itemRetrieve.hide(); // BIDC 에서는 사용안함
    cbx_printCheck.checkAll(true);
    cbx_previewCheck1.checkAll(true);

    // f_Header();
    ed_textSlipNo.setValue(scwin.pSlipNo);
    ed_textSpplyAmt.setValue(scwin.pSpplyAmt);
    ed_textVatAmt.setValue(scwin.pVat);
    ed_textSumAmtt.setValue(scwin.pSumAmt);
    ed_textRemark.setValue(scwin.pRemark);
    scwin.f_Retrieve();

    // 그리드 포커싱 (행추가 할 때 포커싱 상태여야 함)
    gr_bidcVat.setFocusedCell(0, 0);
  }, {
    "delay": 50
  });
};

// @@ ====== 조회 ============================================================================== //

//-------------------------------------------------------------------------
// 조회 (전자세금계산서 품목)
//-------------------------------------------------------------------------
scwin.f_Retrieve = function () {
  console.log("====== f_Retrieve ==================");

  // tr_searchBidcVat.Post();
  $c.sbm.execute($p, sbm_searchBidcVat);
};

//-------------------------------------------------------------------------
// 조회 (전자세금계산서 품목) submitdone
//-------------------------------------------------------------------------
scwin.sbm_searchBidcVat_submitdone = async function (e) {
  console.log("▷ sbm_searchBidcVat_submitdone (전자세금계산서 품목 조회)");
  if (e.responseJSON.resultDataSet[0].Code != 0) return;

  // 조회된 건수를 Grid 왼쪽 하단에 표시한다.
  // cfShowTotalRows(totalRows,rowCnt);

  var rowCnt = ds_master.getTotalRow();
  ed_totalRows.setValue(rowCnt);
  // cfHideDSWaitMsg(gr_bidcVat);
  if (rowCnt == 0) {
    await $c.gus.cfAlertMsg($p, MSG_CM_ERR_003);
  }
  // 저장가능상태로 Flag변경함.
  scwin.check_select = true;

  // 포커스
  gr_bidcVat.setFocusedCell(0, "fareEngNm", false);

  // submitdone 이후
  // input_textBidcSlipNo.value = ds_master.NameValue(1,"bidcSlipNo");
  ed_textBidcSlipNo.setValue(ds_master.getCellData(0, "bidcSlipNo"));
};

// @@ ====== 그리드 / DS ======================================================================= //

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  console.log("=== f_AddRow");
  // ds_master.AddRow();
  // ds_master.NameValue(ds_master.RowPosition,"bidcSlipNo") = input_textBidcSlipNo.value;

  // var rowIndex = ds_master.getTotalRow();
  // ds_master.insertRow();
  // ds_master.setCellData(rowIndex,"bidcSlipNo", ed_textBidcSlipNo.getValue());

  // // 행추가시 포커스
  // gr_bidcVat.setFocusedCell(rowIndex, "fareEngNm", false );

  if (ds_master.getTotalRow() == 0) {
    ds_master.insertRow();
    ds_master.setRowPosition(0);
    ds_master.setCellData(0, "bidcSlipNo", ed_textBidcSlipNo.getValue());
    gr_bidcVat.setFocusedCell(0, "fareEngNm", false);
  } else {
    ds_master.insertRow();
    var row = ds_master.getTotalRow() - 1;
    ds_master.setCellData(row, "bidcSlipNo", ed_textBidcSlipNo.getValue());
    gr_bidcVat.setFocusedCell(row, "fareEngNm", false);
  }
};

//-------------------------------------------------------------------------
//  행삭제
//-------------------------------------------------------------------------
scwin.f_DeleteRow = function () {
  console.log("=== f_DeleteRow");
  // ds_master.DeleteRow(ds_master.RowPosition);

  // 가우스 방식으로 삭제
  // $c.data.deleteRow(ds_master);

  // 직접 삭제 - 삭제후 취소 버튼으로 원복이 불가.
  ds_master.removeRow(ds_master.getRowPosition());
};

//-------------------------------------------------------------------------
//  행전체삭제 : 기존 주석처리
//-------------------------------------------------------------------------
scwin.f_AllDeleteRow = function () {
  // ds_master.DeleteAll();
};

//-------------------------------------------------------------------------
// 취소
//-------------------------------------------------------------------------
scwin.f_UndoRow = function () {
  console.log("=== f_UndoRow");

  // ds_master.Undo(ds_master.RowPosition);
  $c.data.undoRow($p, ds_master, "Y");
};

// @@ ====== 이벤트 - 버튼 ===================================================================== //

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장시
//-------------------------------------------------------------------------
scwin.f_Save = async function () {
  console.log("====== f_Save (저장)");

  // validFeatures="ignoreStatus=no"
  // validExp="sellAmt:yes:number,  --> 한글,특수문자 입력안됨
  // vatAmt:yes:number"             --> 한글,특수문자 입력안됨 

  var CountRow = ds_master.getTotalRow();
  var chSellAmt = 0;
  var chVatAmt = 0;
  if (CountRow > 0) {
    //for(i=1; i<=ds_master.CountRow; i++){
    for (i = 0; i < CountRow; i++) {
      // row 상태 삭제는 제외
      if (ds_master.getRowStatus(i) != "D") {
        chSellAmt = chSellAmt + Number(ds_master.getCellData(i, "sellAmt"));
        chVatAmt = chVatAmt + Number(ds_master.getCellData(i, "vatAmt"));
      }

      // KYU_NEW : 값 4 개를 모두 0 으로 넣어도 저장됨
      if (chSellAmt < 1 && chVatAmt < 0) {
        // await $c.win.alert("공급가액, 부가세가 모두 0 이면 안됩니다.");
        // return;
      }
    }
  }

  // KYU_TEST : NameSum 주의 : 삭제 row 빼고 합산하는 기능
  // if(ds_master.NameSum("sellAmt",0, 0) != input_textSpplyAmt.value){

  if (chSellAmt != ed_textSpplyAmt.getValue()) {
    await $c.win.alert($p, "공급가액이 맞지 않습니다.");
    return;
  }

  // KYU_TEST : NameSum 주의 : 삭제 row 빼고 합산하는 기능
  // if(ds_master.NameSum("vatAmt",0, 0) != input_textVatAmt.value){

  if (chVatAmt != ed_textVatAmt.getValue()) {
    await $c.win.alert($p, "세액이 맞지 않습니다.");
    return;
  }

  // validExp="sellAmt:yes:number,
  // atAmt:yes:number"

  // KYU_ISSUE : 2026-02-24 품목명 없이 저장 가능, 조회에선 나오지 않음 : 수정예정 (권정민 책임님)
  // 그리드 필수입력사항 확인
  // if ( !cfValidate([gr_bidcVat])) {
  let rtn1 = await $c.gus.cfValidate($p, [gr_bidcVat]);
  if (!rtn1) return;

  // 변경된 사항이 있는지 확인.
  // if ( !ds_master.IsUpdated) {
  if (ds_master.getModifiedIndex().length == 0) {
    await $c.gus.cfAlertMsg($p, "변경된 사항이 없습니다.");
    return;
  }
  var msg = "저장하시겠습니까?";

  //if(cfConfirmMsg(msg)==true){
  let rtn2 = await $c.win.confirm($p, msg);
  if (rtn2) {
    // tr_saveBidcVat.Post();
    $c.sbm.execute($p, sbm_saveBidcVat);
  }
};

//-------------------------------------------------------------------------
// 저장 submitdone
//-------------------------------------------------------------------------
scwin.sbm_saveBidcVat_submitdone = async function (e) {
  console.log("▷ sbm_saveBidcVat_submitdone (저장 submitdone)");
  if (e.responseJSON.resultDataSet[0].Code != 0) ;

  // 상태 R 처리
  ds_master.modifyAllStatus("R");

  // <!-- 조회조건용  Tr -->
  await $c.gus.cfAlertMsg($p, MSG_CM_INF_001);
  scwin.f_Retrieve();
};

// @@ ====== 레포트 ============================================================================ //

//-------------------------------------------------------------------------
//  openPopup 팝업 오픈
//-------------------------------------------------------------------------
scwin.openPopup = async function (data, width, height) {
  if (width == null || width == "") width = 800;
  if (height == null || height == "") height = 800;
  let opts = {
    id: "ozReportPopup",
    popupName: "오즈 리포트",
    modal: true,
    type: "browserPopup",
    width: width,
    height: height,
    title: "오즈 리포트"
  };
  await $c.win.openPopup($p, "/ui/cm/zz/ozreportPopup.xml", opts, data);
};

//-------------------------------------------------------------------------
// 매출세금계산서 (BIDC) 발행
//-------------------------------------------------------------------------
scwin.f_OzReport = function () {
  console.log("=== f_OzReport (매출세금계산서 (BIDC) 발행)");

  //OZStartBatch();
  var param = "";
  param = param + "," + scwin.pVatNo;

  // var odiParam = new ODIParam("fi_bidc_401_01_02p");
  // odiParam.add("pchsSellCls", param.substring(1));
  // //리포트(OZR)에 적용할 파라미터를 설정(OZFormParam)
  // var formParam = new FormParam();

  // // OZ 뷰어에 대한 설정(상세 설정은 'oz report viewer guide.pdf'를 참조)
  // var viewerParam = new ViewerParam();
  // viewerParam.add("viewer.zoom","100");
  // viewerParam.add("viewer.useprogressbar","false");		//PROGRESSBAR 안보이게....

  // cfOZReport("chb_printCheck", "chb_previewCheck1", "/ac/fi/taxbiz/vatctrl/fi_bidc_401_01_02p.ozr", odiParam, viewerParam, formParam);

  let data = {
    odiName: "fi_bidc_401_01_02p",
    reportName: "/ac/fi/taxbiz/vatctrl/fi_bidc_401_01_02p.ozr",
    odiParam: {
      //  sysPath             : "dbl.ac.fi.taxbiz.withhold"
      pchsSellCls: param.substring(1)
    },
    viewerParam: {
      viewer: 100 // 배율 설정
      ,
      useprogressbar: false // 프로그레스바 쓸지 말지
      // ,mode           : "print"  // 인쇄 옵션창 표시 없이 바로 출력
    },
    formParam: {}
  };
  console.log("  매출세금계산서 (BIDC) data [" + JSON.stringify(data) + "]");
  scwin.openPopup(data);
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'BIDC전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textBidcSlipNo',style:'width: 150px;',readOnly:'true',title:'BIDC전표번호',ref:'data:ds_master.bidcSlipNo'}}]},{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'DEBIS전표번호 ',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',id:'',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textSlipNo',style:'width: 150px;',readOnly:'true',ref:'data:ds_search.slipNo',title:'DEBIS전표번호'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'발행비고 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textRemark',readOnly:'true',style:'width: 150px;',title:'발행비고'}}]}]},{T:1,N:'xf:group',A:{tagname:'tr',id:''},E:[{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'공급금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textSpplyAmt',style:'width: 150px;text-align:right;',readOnly:'true',title:'공급금액',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'세액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textVatAmt',style:'width: 150px;text-align:right;',readOnly:'true',title:'세액',dataType:'number',displayFormat:'#,##0'}}]},{T:1,N:'xf:group',A:{tagname:'th',class:'w2tb_th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총금액 ',style:''}}]},{T:1,N:'xf:group',A:{tagname:'td',id:'',class:'w2tb_td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'',id:'ed_textSumAmtt',style:'width: 150px;text-align:right;',readOnly:'true',title:'총금액',dataType:'number',displayFormat:'#,##0'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'btn-shbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn sch',disabled:'',escape:'false',id:'btn_Retireve',style:'',type:'button',userAuth:'R','ev:onclick':'scwin.f_Retrieve'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'조회'}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{class:'title-wrap',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'title',id:''},E:[{T:1,N:'w2:textbox',A:{class:'tit',id:'',label:' BIDC 전자세금계산서 품목 ',style:'',tagname:'h3'}}]}]},{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox gvwfix',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_master',focusMode:'cell',id:'gr_bidcVat',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'5',visibleRowNumFix:'true',rowStatusVisible:'true'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'column23',inputType:'text',style:'',value:'품목명',width:'200',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column21',inputType:'text',style:'',value:'규격',width:'70',class:'txt-blue'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column19',inputType:'text',style:'',value:'수량',width:'70',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column17',inputType:'text',style:'',value:'단가',width:'150',class:'txt-blue',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column13',inputType:'text',style:'',value:'공급가액',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'column15',inputType:'text',style:'',value:'부가세',width:'150',class:'txt-red',sortable:'false'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'lb_rmk',value:'비고',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column31',value:'DEBIS전표번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column34',value:'BIDC전표번호',displayMode:'label',sortable:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column37',value:'순번',displayMode:'label',sortable:'false'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{displayMode:'label',id:'fareEngNm',inputType:'text',style:'',value:'',width:'200',textAlign:'left'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'curr',inputType:'text',style:'',value:'',width:'70'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'qty',inputType:'text',style:'',value:'',width:'70',textAlign:'right',class:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellUpr',inputType:'text',style:'',value:'',width:'150',textAlign:'right',class:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'sellAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',class:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{displayMode:'label',id:'vatAmt',inputType:'text',style:'',value:'',width:'150',textAlign:'right',class:'',displayFormat:'#,##0',dataType:'number'}},{T:1,N:'w2:column',A:{width:'200',inputType:'text',style:'',id:'rmk',value:'',displayMode:'label',textAlign:'left'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'slipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'bidcSlipNo',value:'',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'seq',value:'',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column30',value:'합계',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column29',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{inputType:'expression',style:'',id:'tot_qty',value:'0',displayMode:'label',textAlign:'right',class:'',displayFormat:'#,##0',dataType:'number',expression:'sum(\'qty\')'}},{T:1,N:'w2:column',A:{inputType:'expression',style:'',id:'tot_sellUpr',value:'0',displayMode:'label',textAlign:'right',class:'tar',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sellUpr\')'}},{T:1,N:'w2:column',A:{inputType:'expression',style:'',id:'tot_sellAmt',value:'0',displayMode:'label',textAlign:'right',class:'tar',displayFormat:'#,##0',dataType:'number',expression:'sum(\'sellAmt\')'}},{T:1,N:'w2:column',A:{inputType:'expression',style:'',id:'tot_vatAmt',value:'0',displayMode:'label',textAlign:'right',class:'tar',displayFormat:'#,##0',dataType:'number',expression:'sum(\'vatAmt\')'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column42',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column33',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',style:'',id:'column36',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column39',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',dataType:'number',displayFormat:'#,##0',id:'ed_totalRows',label:'0',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{id:'',class:'right'},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_itemRetrieve',style:'',type:'button'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'품목불러오기'}]}]},{T:1,N:'w2:udc_bottomGrdBtn',A:{btnCancelYn:'Y',style:'',btnRowAddYn:'Y',EngYn:'N',btnDelYn:'N',btnRowDelYn:'Y',cancelFunction:'scwin.f_UndoRow',rowDelFunction:'scwin.f_DeleteRow',rowAddFunction:'scwin.f_AddRow',gridID:'gr_bidcVat',rowDelUserAuth:'D',rowAddUserAuth:'C'}}]}]}]},{T:1,N:'xf:group',A:{class:'btnbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_ozprint',style:'',type:'button',userAuth:'P','ev:onclick':'scwin.f_OzReport'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]}]},{T:1,N:'xf:group',A:{id:'',class:'inner'},E:[{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_printCheck',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'인쇄옵션'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]},{T:1,N:'xf:select',A:{ref:'',appearance:'full',style:'',id:'cbx_previewCheck1',renderType:'checkboxgroup',rows:'',selectedindex:'-1',class:'',cols:''},E:[{T:1,N:'xf:choices',E:[{T:1,N:'xf:item',E:[{T:1,N:'xf:label',E:[{T:4,cdata:'미리보기'}]},{T:1,N:'xf:value',E:[{T:4,cdata:'1'}]}]}]}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',userAuth:'U',objType:'bSave','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})