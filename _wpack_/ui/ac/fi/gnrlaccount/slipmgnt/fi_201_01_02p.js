/*amd /ui/ac/fi/gnrlaccount/slipmgnt/fi_201_01_02p.xml 46700 c3b35f38e23b550e1059a17895d265b6002db2f6a21c65ee7a5f36326a065d1c */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_evidac',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}}]}]},{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_parent',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'branchCd',name:'지점코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'branchNm',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemCd',name:'매입항목코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'pchsItemNm',name:'매입항목명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'부서코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'부서명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctCd',name:'계정코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctNm',name:'계정명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amtFcrc',name:'외화금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'costClsCd',name:'지점명',dataType:'text'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'acctClsCd',name:'계정종류코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnNo',name:'거래번호',dataType:'text'}},{T:1,N:'w2:column',A:{id:'txnContSeq',name:'거래내역순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'evidEchAcctSeq',name:'증빙별계정순번',dataType:'text'}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'text'}},{T:1,N:'w2:column',A:{id:'crcCd',name:'통화코드',dataType:'text'}},{T:1,N:'w2:column',A:{id:'exchRt',name:'환율',dataType:'text'}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_201_01_02p
// 이름     : 경비분배
// 경로     : 재무회계/일반회계/전표관리/
// 사용계정 : 내부
// 파라미터 :
//            IN  : evidac
//            OUT : evidac
//
// 비고     : 
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            [호출당함]
//            회계/재무회계/일반회계/전표관리/경비전표입력(fi_201_01_01b.jsp)에서 호출
//            회계/재무회계/일반회계/전표관리/개인형법인카드정산경비전표팝업(fi_201_09_02p.jsp)에서 호출
//            회계/재무회계/세무/증빙관리/e세로증빙등록경비전표입력(e세로증빙등록)(fi_403_01_01p_02.jsp)에서 호출
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호

scwin.txt_sum = "";
scwin.rltSeq = "";
scwin.slipDt = "";
scwin.upperAcctDeptCd = ""; // 상위부서 (아규먼트)
scwin.evidac_param; // ds_evidac 받는 전역변수

// vUpperAcctDeptCd = '<%=upperAcctDeptCd%>';
scwin.vUpperAcctDeptCd = ""; // 상위부서 (로그인)
/*
<input type="hidden" name="check">
*/
scwin.check = "";
scwin.currentRowPosition = 0; // 현재row위치

scwin.upperIsRent = false; // 상위부서 렌터카사업팀(00130) 여부 - 테스트용

scwin.oldCnt = 0; // 초기건수 - 초기화 구분 위해 (건이 있다가 다 지우면 저장)

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
  scwin.vCoCd = coCd; // 동일
  scwin.userId = userId;
  scwin.privAdmin = privAdmin;
  scwin.empNo = empNo;
  console.log("▶▶ vLoginCoCd : " + scwin.vLoginCoCd + "   loginCoClsCd : " + scwin.vLoginCoClsCd);
  console.log("▶▶ vCoCd      : " + scwin.vCoCd + "   empNo : " + scwin.empNo);
  console.log("▶▶ userHomeClsCd : " + scwin.vUserHomeClsCd + "   userId : " + scwin.userId + "   privAdmin : " + scwin.privAdmin);
  console.log("▶▶ memJson : " + JSON.stringify(memJson));

  // String txt_sum  = DCheckIf.isNullToBlank(request.getParameter("sum"));
  // String rltSeq  = DCheckIf.isNullToBlank(request.getParameter("rltSeq"));
  // String slipDt  = DCheckIf.isNullToBlank(request.getParameter("slipDt"));
  // String upperAcctDeptCd = DCheckIf.isNullToBlank(request.getParameter("upperAcctDeptCd"));

  scwin.txt_sum = $c.data.getParameter($p, "sum") == null ? " " : $c.data.getParameter($p, "sum");
  scwin.rltSeq = $c.data.getParameter($p, "rltSeq") == null ? " " : $c.data.getParameter($p, "rltSeq");
  scwin.slipDt = $c.data.getParameter($p, "slipDt") == null ? " " : $c.data.getParameter($p, "slipDt");
  scwin.upperAcctDeptCd = $c.data.getParameter($p, "upperAcctDeptCd") == null ? " " : $c.data.getParameter($p, "upperAcctDeptCd");
  console.log("▶ sum    : " + scwin.txt_sum + "  rltSeq : " + scwin.rltSeq);
  console.log("▶ slipDt : " + scwin.slipDt + "  upperAcctDeptCd : " + scwin.upperAcctDeptCd);
  if (scwin.upperAcctDeptCd == "00130") scwin.upperIsRent = true;

  // KYU_TEST - 00130  렌터카사업팀 테스트
  // scwin.upperIsRent = false;  // 강제로 00130 세팅

  //var ds_parent = window.dialogArguments;  // 의미 없슴

  scwin.evidac_param = $c.data.getParameter($p, "evidac") == null ? "" : $c.data.getParameter($p, "evidac");
  console.log("▶ evidac [" + JSON.stringify(scwin.evidac_param) + "]");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    $c.gus.cfDisableKeyData($p);

    // $c.gus.cfDisableBtnOnly([bCreate]);  --지정받은 버튼이 없슴

    //cfCopyDataSet(ds_parent, ds_evidac, "copyHeader=yes");

    // 배열 ==> ds_evidac 로 복사
    ds_evidac.setArray(scwin.evidac_param, true); // append

    var dc = ds_evidac.getAllArray();
    console.log("  *** ds_evidac (" + ds_evidac.getTotalRow() + ") : " + JSON.stringify(dc));

    /*
    language=JavaScript for=ds_evidac event=OnLoadStarted()>
    	cfShowDSWaitMsg(gr_evidac);
    
    language=JavaScript for=ds_evidac event=OnLoadCompleted(rowCnt)>
    	 cfHideDSWaitMsg(gr_evidac);
    	 cfShowTotalRows(totalRows, rowCnt);
     if( rowCnt == 0 ){
    		cfAlertMsg(MSG_CM_WRN_002);	
    		cfEnableBtnOnly([bCreate]);  --지정받은 버튼이 없슴
     }	 
    */
    // cfHideDSWaitMsg(gr_evidac);
    // cfShowTotalRows(totalRows, rowCnt); : 대상없음

    if (ds_evidac.getTotalRow() == 0) {
      // $c.gus.cfAlertMsg(MSG_CM_WRN_002);
      // $c.gus.cfEnableBtnOnly([bCreate]);   // 행추가 버튼으로 보임 --지정받은 버튼이 없슴
    }

    // 배열 ==> ds_parent 복사 : 삭제시켰을 때 건수 비교하여 변경여부 파악
    ds_parent.setArray(scwin.evidac_param, true); // append

    var dc = ds_parent.getAllArray();
    console.log("  *** ds_parent (" + ds_parent.getTotalRow() + ") : " + JSON.stringify(dc));

    // ed_sum.text='<%=txt_sum%>';
    ed_sum.setValue(scwin.txt_sum);

    // cfDisableObjects([ed_sum,bSave]);
    $c.gus.cfDisableObjects($p, [ed_sum]);
    $c.gus.cfDisableObjects($p, [$c.gus.getctrlBtn($p, 'bSave')]);

    //ds_evidac.UseFilter ="true";
    //ds_evidac.filter();

    var rowCnt = ds_evidac.getRowCount();
    for (i = 0; i < rowCnt; i++) {
      scwin.useFilter(i);
    }

    //$c.data.dataListFilter(ds_evidac, scwin.onFilter() );

    // 00130 (렌터카사업팀) 로직 제거
    // if ( scwin.vUpperAcctDeptCd != "00130" ) { // 렌터카사업팀
    if (scwin.upperIsRent == true) {
      // 신규 : 렌터카사업팀이면 지점/명, 매입항목/명 은 보여야 함
      // gr_evidac.setColumnVisible("branchCd"  , true);
      // gr_evidac.setColumnVisible("branchNm"  , true);
      // gr_evidac.setColumnVisible("pchsItemCd", true);
      // gr_evidac.setColumnVisible("pchsItemNm", true);

      // gr_evidac.ColumnProp("acctDeptCd","Edit")="None";
      // gr_evidac.ColumnProp("acctDeptNm","Edit")="None";
      // gr_evidac.ColumnProp("acctCd","Edit")="None";
      // gr_evidac.ColumnProp("acctNm","Edit")="None";

      // gr_evidac.setReadOnly("column", "acctDeptCd", true);
      // gr_evidac.setReadOnly("column", "acctDeptNm", true);
      // gr_evidac.setReadOnly("column", "acctCd", true);
      // gr_evidac.setReadOnly("column", "acctNm", true);

      // gr_evidac.ColumnProp("acctCd","Width")="60";
      // gr_evidac.ColumnProp("acctNm","Width")="130";
      // gr_evidac.ColumnProp("acctDeptCd","Width")="60";
      // gr_evidac.ColumnProp("acctDeptNm","Width")="130";
      // gr_evidac.ColumnProp("branchCd","Width")="60";
      // gr_evidac.ColumnProp("branchNm","Width")="130";
      // gr_evidac.ColumnProp("pchsItemCd","Width")="80";
      // gr_evidac.ColumnProp("pchsItemNm","Width")="130";
      // gr_evidac.ColumnProp("amt","Width")="110";

      gr_evidac.setColumnWidth("acctCd", 60);
      gr_evidac.setColumnWidth("acctNm", 130);
      gr_evidac.setColumnWidth("acctDeptCd", 60);
      gr_evidac.setColumnWidth("acctDeptNm", 130);
      gr_evidac.setColumnWidth("branchCd", 60);
      gr_evidac.setColumnWidth("branchNm", 130);
      gr_evidac.setColumnWidth("pchsItemCd", 80);
      gr_evidac.setColumnWidth("pchsItemNm", 130);
      gr_evidac.setColumnWidth("amt", 110);

      // 지점/명, 매입항목/명 있으면 계정, 부서 돋보기 버튼 제거
      var rowCnt = ds_evidac.getTotalRow();
      for (i = 0; i < rowCnt; i++) {
        gr_evidac.setCellInputType(i, "acctCd", "text");
        gr_evidac.setCellInputType(i, "acctDeptCd", "text");
      }
    } else {
      // 신규 : 렌터카사업팀이 아니면 지점/명, 매입항목/명 은 보이지 않아야 함
      gr_evidac.setColumnVisible("branchCd", false);
      gr_evidac.setColumnVisible("branchNm", false);
      gr_evidac.setColumnVisible("pchsItemCd", false);
      gr_evidac.setColumnVisible("pchsItemNm", false);
      gr_evidac.setColumnDisabled("branchCd", true);
      gr_evidac.setColumnDisabled("branchNm", true);
      // gr_evidac.setColumnDisabled(columnInfo, disabled);
      // gr_evidac.setColumnDisabled(columnInfo, disabled);

      // gr_evidac.ColumnProp("acctCd","Width")="140";
      // gr_evidac.ColumnProp("acctNm","Width")="140";
      // gr_evidac.ColumnProp("acctDeptCd","Width")="140";
      // gr_evidac.ColumnProp("acctDeptNm","Width")="159";
      // gr_evidac.ColumnProp("amt","Width")="180";

      // 지점/명, 매입항목/명 있으면 계정, 부서 돋보기 버튼 제거
      // var rowCnt = ds_evidac.getTotalRow();
      // for (i=0; i < rowCnt; i++) {
      //     gr_evidac.setCellInputType(i, "acctCd", "textImage");
      //     gr_evidac.setCellInputType(i, "acctDeptCd", "textImage");
      // }

      gr_evidac.setColumnWidth("acctCd", 140);
      gr_evidac.setColumnWidth("acctNm", 140);
      gr_evidac.setColumnWidth("acctDeptCd", 140);
      gr_evidac.setColumnWidth("acctDeptNm", 159);
      gr_evidac.setColumnWidth("amt", 180);
    }

    // alert('<%=rltSeq%>');

    scwin.oldCnt = ds_evidac.getTotalRow(); // 기존건수

    // 그리드 포커싱 (행추가 할 때 포커싱 상태여야 함)
    gr_evidac.setFocusedCell(0, 0);
  }, {
    "delay": 50
  });
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 그리드 이미지 클릭
//-------------------------------------------------------------------------
scwin.gr_evidac_ontextimageclick = function (rowIndex, columnIndex) {
  // console.log("----- gr_evidac_ontextimageclick (그리드 이미지 클릭) ("+ rowIndex +",  "+ columnIndex +") "+ds_evidac.getColumnID(columnIndex));

  // var colid = gr_evidac.getColumnID(columnIndex);
  // var row   = rowIndex;
  // var data  = "";

  // switch (gr_evidac.getColumnID(columnIndex)) {  // grid 임!!
  //     case "branchCd":  // 지점코드
  //             // f_GridPop(colid,row,data,"","F");
  //             scwin.f_openCommPopUpGrid(colid, row, data, "", "F");
  //             break;
  //     case "pchsItemCd":  // 매입항목코드
  //             // f_GridPop(colid,row,data,"","F");
  //             scwin.f_openCommPopUpGrid(colid, row, data, "", "F");
  //             break;
  //     case "acctDeptCd":  // 부서
  //             scwin.f_openCommPopUpGrid(colid, row, data, ds_evidac.getCellData(rowIndex,"acctDeptCd"), "F");
  //             //scwin.f_openCommPopUpGrid(1, rowIndex, ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcNm"), 'F', 'F')
  //             break;

  //     case "acctCd":  // 계정
  //             scwin.f_openCommPopUpGrid(colid, row, data, ds_evidac.getCellData(row,"acctCd"), "F");
  //             break;
  //     default:
  //            break;
  // }
};

//-------------------------------------------------------------------------
// onafteredit 그리드 팝업 엔터,탭 이벤트 : T
//-------------------------------------------------------------------------
scwin.gr_evidac_onafteredit = function (rowIndex, columnIndex, value) {
  // language=JavaScript for=gr_evidac event=OnExit(row,colid,olddata)>
  //  if(colid=="acctDeptCd"){  // 부서
  // 	f_GridPop(colid, row, data, ds_evidac.NameValue(row,"acctDeptCd"), "T");
  //  }else if(colid=="acctCd"){  // 계정
  //  	f_GridPop(colid, row, data, ds_evidac.NameValue(row,"acctCd"), "T");
  //  }
  // <!-- 부서 그리드  popup -->
  // language=JavaScript for=gr_evidac event=OnPopup(row,colid,data)>
  // 	f_GridPop(colid, row, data, ""," F");

  // function f_GridPop(colid, row, data, str, check){

  // 원본 : function f_GridPop(colid, row, data, str, check){
  // data, str, check 어떤 값이 오는지 확인 필요

  // if ( scwin.vUpperAcctDeptCd == "00130" ){  // 렌터카사업팀 - 부서,계정 : text, readonly
  if (scwin.upperIsRent == true) {
    // 렌터카사업팀 - 부서,계정 : text, readonly
    gr_evidac.setReadOnly("cell", rowIndex, "acctCd", true); //readOnly
    gr_evidac.setReadOnly("cell", rowIndex, "acctDeptCd", true);
  } else {
    gr_evidac.setReadOnly("cell", rowIndex, "acctCd", false);
    gr_evidac.setReadOnly("cell", rowIndex, "acctDeptCd", false);
  }
  var colid = gr_evidac.getColumnID(columnIndex);
  var row = rowIndex;
  var data = "";
  switch (gr_evidac.getColumnID(columnIndex)) {
    // grid 임!!
    case "branchCd":
      // 지점코드
      // f_GridPop(colid,row,data,"","F");
      scwin.f_openCommPopUpGrid(colid, row, data, "", "T");
      break;
    case "pchsItemCd":
      // 매입항목코드
      // f_GridPop(colid,row,data,"","F");
      scwin.f_openCommPopUpGrid(colid, row, data, "", "T");
      break;
    case "acctDeptCd":
      // 부서
      scwin.f_openCommPopUpGrid(colid, row, data, ds_evidac.getCellData(row, "acctDeptCd"), "T");
      //scwin.f_openCommPopUpGrid(1, rowIndex, ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcNm"), 'F', 'F')
      break;
    case "acctCd":
      // 계정
      scwin.f_openCommPopUpGrid(colid, row, data, ds_evidac.getCellData(row, "acctCd"), "T");
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = async function (colid, row, data, str, check) {
  console.log("=== f_openCommPopUpGrid  colid[" + colid + "]  row[" + row + "]  data[" + data + "]  str[" + str + "]  check[" + check + "]");
  switch (colid) {
    case "acctDeptCd":
      // 부서
      ds_evidac.setCellData(row, "acctDeptNm", "");

      //var param = ",<%=slipDt%>,0";
      var param = "," + scwin.slipDt + ",0";
      console.log("  부서popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo2',str,"",check,null,null,null,null,param,null,null,null,null);
      udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo2"); //각 항목별로 공통팝업 항목에 따라 selectId 세팅
      udc_comCode_Grid.cfCommonPopUp(scwin.acctDeptCd_callBackFunc, str, "", check, null, null, null, null, param, null, null, null, null);
      break;
    case "acctCd":
      // 계정

      // 귀속부서먼저체크
      if (ds_evidac.getCellData(row, "acctDeptCd") == "") {
        //cfAlertMsg(MSG_CM_ERR_002,Array("귀속부서"));
        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        //ds_evidac.RowPosition = row;
        ds_evidac.setRowPosition(row);
        //gr_evidac.focus();
        gr_evidac.focus();
        return;
      }
      // 비용구분코드가 없을경우
      if (ds_evidac.getCellData(row, "costClsCd") == "") {
        ds_evidac.setCellData(row, "costClsCd", "04");
      }
      ds_evidac.setCellData(row, "acctNm", "");
      //alert(ds_evidac.NameValue(row,"costClsCd"));
      //var temp = "T,<%=slipDt%>,,,,"+ds_evidac.NameValue(row,"costClsCd");
      var temp = "T," + scwin.slipDt + ",,,," + ds_evidac.getCellData(row, "costClsCd");
      console.log("  계정popup  temp [" + temp + "]");

      //rtnList = cfCommonPopUp('retrieveAcctCdInfo',str,"",check,null,null,null,null,temp,null,null,null,null); 

      udc_comCode_Grid.setSelectId("retrieveAcctCdInfo");
      udc_comCode_Grid.cfCommonPopUp(scwin.acctCd_callBackFunc, str, "", check, null, null, null, null, temp, null, null, null, null);
      break;

    // 미사용 : 00130 (렌터카사업팀) 로직 제거
    case "branchCd":
      // 지점코드
      var acceptOfc = ds_evidac.getCellData(row, "branchCd");
      var acceptOfcNm = ds_evidac.getCellData(row, "branchNm");

      // KYU_TEST 개발중 : returnObject 처리를 고민해야 함
      //var returnObject = RcfBranchAcctDeptForGridPop(acceptOfc, acceptOfcNm,'IMG','1','전체','D', '');

      break;

    // 미사용 : 00130 (렌터카사업팀) 로직 제거
    case "pchsItemCd":
      // 매입항목코드
      // 귀속부서먼저체크
      if (ds_evidac.getCellData(row, "acctDeptCd") == "") {
        //cfAlertMsg(MSG_CM_ERR_002,Array("귀속부서"));
        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_002, "귀속부서"));
        //ds_evidac.RowPosition = row;
        ds_evidac.setRowPosition(row);
        gr_evidac.focus;
        return;
      }
      var pWhere = "";

      // var pWhere = "1,"+ <%=slipDt%> +","+ds_evidac.NameValue(row,"acctDeptCd")+",";
      var pWhere = "1," + scwin.slipDt + "," + ds_evidac.getCellData(row, "acctDeptCd") + ",";
      pTitle = "매입항목코드,매입항목명";
      pWindowTitle = "매입항목코드조회,매입항목코드,매입항목명";
      udc_comCode_Grid.setSelectId("retrieveRcSelpchItemCd"); //각 항목별로 공통팝업 항목에 따라 selectId 세팅
      rtnList = udc_comCode_Grid.cfCommonPopUp(scwin.pchsItemCd_callBackFunc, "retrieveRcSelpchItemCd" // XML상의 SELECT ID
      // ,ds_evidac.NameValue(row,"pchsItemCd")   // 화면에서의 ??? Code Element의    Value
      // ,ds_evidac.NameValue(row,"pchsItemNm")   // 화면에서의 ??? Name Element의    Value
      , ds_evidac.getCellData(row, "pchsItemCd") // 화면에서의 ??? Code Element의    Value
      , ds_evidac.getCellData(row, "pchsItemNm") // 화면에서의 ??? Name Element의    Value
      , check // 결과가 1건 일때  원도우를    AutoClose 여부  (T:Close,F:Opened)
      , '2' // 검색 결과    컬럼의 보여주는 개수 (SELECT절의 순서) MAX:10 - default (2)
      , pTitle // Title순서
      , '150,210' // 보여주는 각 컬럼들의 폭
      , null // 컬럼중에서 숨기는    컬럼 지정
      , pWhere // SQL절의 WHERE절에    원하는 조건을 선택함 MAX:8개까지 가능
      , '440' // POP-UP뛰을때 원도우의    사용자 정의 폭
      , '500' // POP-UP뛰을때 우도우의    사용자 정의 높이
      , null // 윈도우 위치 Y좌표
      , null // 윈도우 위치 X좌표
      , null // 중복체크여부 ("F")
      , 'F' // 전체검색허용여부 ("F")
      , pWindowTitle // POP-UP Window Title 검색어1,2     ("Win타이틀,첫번검색Nm,두번?검색Nm")
      );
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 부서조회(그리드팝업) callBackFunc
//-------------------------------------------------------------------------
scwin.acctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ acctDeptCd_callBackFunc (부서조회(그리드팝업) 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_evidac.getFocusedRowIndex(); // 그리드의 현재 포커스된(선택된) 행 인덱스

  // if ( rtnList != null) {
  //     if (rtnList[0] == "N/A") return;
  //     ds_evidac.NameValue(row,"acctDeptCd") = rtnList[0];	//부서코드
  //     ds_evidac.NameValue(row,"acctDeptNm") = rtnList[1];	//부서명
  //     ds_evidac.NameValue(row,"costClsCd")  = ""+rtnList[9];	//비용구분코드
  // }else{
  //     ds_evidac.NameValue(row,"acctDeptCd") = "";
  //     ds_evidac.NameValue(row,"acctDeptNm") = "";
  //     ds_evidac.NameValue(row,"costClsCd")  = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ds_evidac.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
      ds_evidac.setCellData(rowIdx, "acctDeptNm", ""); //부서명
      ds_evidac.setCellData(rowIdx, "costClsCd", ""); //비용구분코드
      return;
    }
    ds_evidac.setCellData(rowIdx, "acctDeptCd", rtnList[0]); //부서코드
    ds_evidac.setCellData(rowIdx, "acctDeptNm", rtnList[1]); //부서명
    ds_evidac.setCellData(rowIdx, "costClsCd", "" + rtnList[9]); //비용구분코드
  } else {
    ds_evidac.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
    ds_evidac.setCellData(rowIdx, "acctDeptNm", ""); //부서명
    ds_evidac.setCellData(rowIdx, "costClsCd", ""); //비용구분코드
  }
};

//-------------------------------------------------------------------------
// 계정조회(그리드팝업) callBackFunc
//-------------------------------------------------------------------------
scwin.acctCd_callBackFunc = function (rtnList) {
  console.log("▲ acctCd_callBackFunc (계정조회(그리드팝업) 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_evidac.getFocusedRowIndex(); // 현재 포커스된(선택된) 행 인덱스

  console.log("  rowIdx [" + rowIdx + "]");

  // callBack
  // if ( rtnList != null) {
  // 	 	if (rtnList[0] == "N/A") return;
  // 	ds_evidac.NameValue(row,"acctCd") = rtnList[0];	//계정코드
  // 	ds_evidac.NameValue(row,"acctNm") = rtnList[1];	//계정명
  // 	ds_evidac.NameValue(row,"acctClsCd") = rtnList[2];	//계정구분코드
  // }else{
  // 	ds_evidac.NameValue(row,"acctCd") = "";
  // 	ds_evidac.NameValue(row,"acctNm") = "";
  // 	ds_evidac.NameValue(row,"acctClsCd") = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ds_evidac.setCellData(rowIdx, "acctCd", "");
      ds_evidac.setCellData(rowIdx, "acctNm", "");
      ds_evidac.setCellData(rowIdx, "acctClsCd", "");
      return;
    }
    ds_evidac.setCellData(rowIdx, "acctCd", rtnList[0]); //계정코드
    ds_evidac.setCellData(rowIdx, "acctNm", rtnList[1]); //계정명
    ds_evidac.setCellData(rowIdx, "acctClsCd", "" + rtnList[2]); //계정구분코드
  } else {
    ds_evidac.setCellData(rowIdx, "acctCd", "");
    ds_evidac.setCellData(rowIdx, "acctNm", "");
    ds_evidac.setCellData(rowIdx, "acctClsCd", "");
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// useFilter (필터 처리)
//-------------------------------------------------------------------------
scwin.useFilter = function (row) {
  console.log("=== useFilter (필터 처리)");
  /* <!-- 그리드 데이터 필터링-->
   language=JavaScript for=ds_evidac event=OnFilter(row)>
    //var v_val = ds_evidac.NameValue(ds_evidac.row, "rltSeq");
     if(check.value == "Y"){
     		return true;
     }else{
  	  if(ds_evidac.NameValue(row, "rltSeq") =='<%=rltSeq%>'){ 
  	  	cfEnableObjects([bSave]);
  	    return true;
  	  }else{
  	    return false;
  	  }
     }
  */

  if (scwin.check == "Y") {
    return true;
  } else {
    let condition = "rltSeq == '" + scwin.rltSeq + "'";
    console.log("  row [" + row + "]  condition [" + condition + "]");
    if (ds_evidac.getCellData(row, "rltSeq") == scwin.rltSeq) {
      // ds_evidac.removeColumnFilterAll();
      // $c.data.dataListFilter(ds_evidac, condition);

      $c.gus.cfEnableObjects($p, [$c.gus.getctrlBtn($p, 'bSave')]);
      return true;
    } else {
      return false;
    }
  }

  // let condition = "ctrtWrkPathSeq == '" + scwin.hidCtrtWrkPathSeq + "'"
  // console.log("row = " + row + " : condition " + condition)
  // ds_ctrtWorkStep.removeColumnFilterAll();
  // $c.data.dataListFilter(ds_ctrtWorkStep, condition);

  // 그리드에서 원화만 조회되도록 하기
  // ds_evidac.setColumnFilter({
  //     type: "row",
  //     colIndex: "rltSeq",
  //     key: scwin.rtlSeq,
  //     condition: "and",
  //     exactMatch: true
  // })
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  console.log("=== f_AddRow");

  // ds_evidac.AddRow();
  // //alert(ds_evidac.text);
  // ds_evidac.NameValue(ds_evidac.RowPosition, "rltSeq")='<%=rltSeq%>';
  // $c.gus.cfEnableBtnOnly([btn_save]);

  // type 1
  //   그리드 포커싱 (행추가 할 때 포커싱 상태여야 함)
  //    gr_evidac.setFocusedCell(0, 0);
  var rowIndex = ds_evidac.getTotalRow();
  var rltSeq = ds_evidac.getCellData(ds_evidac.getRowPosition(), "rltSeq");
  console.log("--- rltSeq : " + rltSeq);
  if (ds_evidac.getTotalRow() == 0) {
    ds_evidac.insertRow();
    ds_evidac.setRowPosition(0);
    gr_evidac.setFocusedCell(0, "acctDeptCd", false);
  } else {
    ds_evidac.insertRow();
    var row = ds_evidac.getTotalRow() - 1;
    gr_evidac.setFocusedCell(row, "acctDeptCd", false);
  }

  // 재로딩 했을 때 저장버튼 활성화 여부
  ds_evidac.setCellData(ds_evidac.getRowPosition(), "rltSeq", scwin.rltSeq);

  // var rowIndex = ds_evidac.getTotalRow();
  // ds_evidac.insertRow();
  // ds_evidac.setCellData(rowIndex, "rltSeq", scwin.rltSeq)
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  console.log("=== f_DelRow");

  // ds_evidac.DeleteMarked();
  // $c.gus.cfEnableBtnOnly([bSave])

  // 가우스 방식으로 삭제
  // $c.data.deleteRow(ds_evidac);
  // 직접 삭제 - 삭제후 취소 버튼으로 원복이 불가.
  ds_evidac.removeRow(ds_evidac.getRowPosition());
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);

  // 그리드의 row  dptj focus 없애는 건 추후 코딩
};

//-------------------------------------------------------------------------
// 행추가 취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  console.log("=== f_CancelRow");

  //ds_evidac.Undo(ds_evidac.RowPosition);

  // UNDO 처리
  $c.data.undoRow($p, ds_evidac, "Y");
};

//-------------------------------------------------------------------------
// 닫기 버튼 클릭
//-------------------------------------------------------------------------
scwin.btn_close_onclick = function (e) {
  // window.returnValue=null; window.close()"
  $c.win.closePopup($p, ["N/A"]);
};

// @@ ====== 저장 ============================================================================== //

//-------------------------------------------------------------------------
// 저장 버튼 클릭
//    건수가 없으면 그대로 저장시킴 : 초기화 
//-------------------------------------------------------------------------
scwin.f_Save = async function (e) {
  console.log("====== f_Save (저장 - 부모에게 전달)");
  var CountRow = ds_evidac.getTotalRow();

  // KYU_NEW : 기존 > 0 이고 현재 0 이면 초기화
  if (scwin.oldCnt > 0 && CountRow == 0) {
    console.log("  --  -- 초기화 (기존 있다가 모두 지움 )");
    let rtn = await $c.win.confirm($p, MSG_CM_CRM_001); // 문구추가

    if (rtn) {
      // 리턴 처리
      var arrRtnVal = new Array();
      scwin.check = "Y";
      for (i = 0; i < ds_evidac.getTotalRow(); i++) {
        scwin.useFilter(i);
      }

      // 신규: 응답구조체에 리턴 추가
      arrRtnVal.evidac = ds_evidac.getAllArray();
      let rt = [arrRtnVal.evidac];
      $c.win.closePopup($p, rt);
    }
  }

  // KYU_ORDER : 금액 검증 하나 더.  사유 : 분배내역이 삭제되었을 때, 백업과 비교하지 않아도 됨 (DT팀 제안)
  // var chSum = 0;
  // if( CountRow > 0) {
  //     for(i=0; i< CountRow; i++){
  // 		chSum = chSum + Number(ds_evidac.getCellData(i,"amt"));
  //     }

  //     // 금액체크 : 각 금액의 합 = 총액
  //     if(ed_sum.getValue().trim()!=chSum) {
  //         await $c.gus.cfAlertMsg($c.data.getMessage(MSG_CM_ERR_055,"금액"));
  //         return;
  //     }
  // }

  //체크
  if (ds_evidac.getModifiedJSON().length == 0) {
    console.log(" --- 건수에 따라 리턴");

    // if ( CountRow > 0 ) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
    // }
  }

  // 값체크
  chSum = 0;
  if (CountRow > 0) {
    //for(i=1; i<=ds_evidac.CountRow; i++){
    for (i = 0; i < CountRow; i++) {
      var j = i + 1;
      var temp = Number(ds_evidac.getCellData(i, "amt"));

      // KYU_NEW : 2026-02-03 - 금액 0 이면 오류
      if (temp == 0) {
        // 경비분배의 2번째 데이터에서 금액은(는) 다음 문자가 올 수 없습니다. 0

        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "경비분배의 " + j + "번째 데이터에서 금액", 0));
        ds_evidac.setRowPosition(i);
        gr_evidac.focus;
        return;
      }
      chSum = chSum + Number(ds_evidac.getCellData(i, "amt"));
      console.log("[" + i + "]  costClsCd [" + ds_evidac.getCellData(i, "costClsCd") + "]  acctClsCd [" + ds_evidac.getCellData(i, "acctClsCd") + "]");

      // 계정코드와 부서체크
      // 1^자산,2^부채,3^자본,4^수익,5^비용,6^원가
      // 비용구분 : 01^원가,02^판관비,03^원가+판관비
      if (ds_evidac.getCellData(i, "costClsCd") == "01" && ds_evidac.getCellData(i, "acctClsCd") != "6") {
        // cfAlertMsg(MSG_CM_ERR_061,Array("원가부서","원가계정"));
        // ds_evidac.RowPosition = i;
        // gr_evidac.focus();

        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "원가부서", "원가계정"));
        ds_evidac.setRowPosition(i);
        gr_evidac.focus;
        return;
      }
      if (ds_evidac.getCellData(i, "costClsCd") == "02" && ds_evidac.getCellData(i, "acctClsCd") != "5") {
        // cfAlertMsg(MSG_CM_ERR_061,Array("판관비부서","비용계정"));
        // ds_evidac.RowPosition = i;
        // gr_evidac.focus();

        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_061, "판관비부서", "비용계정"));
        ds_evidac.setRowPosition(i);
        gr_evidac.focus;
        return;
      }
      if (ds_evidac.getCellData(i, "costClsCd") == "03" && ds_evidac.getCellData(i, "acctClsCd") != "6" && ds_evidac.getCellData(i, "acctClsCd") != "5") {
        // cfAlertMsg(MSG_CM_ERR_055,Array("부서와 계정"));
        // ds_evidac.RowPosition = i;
        // gr_evidac.focus();

        $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "부서와 계정"));
        ds_evidac.setRowPosition(i);
        gr_evidac.focus;
        return;
      }
    } // end of for	

    console.log("  chSum : " + chSum);
    // 금액체크 : 각 금액의 합 = 총액
    if (ed_sum.getValue().trim() != chSum) {
      // cfAlertMsg(MSG_CM_ERR_055,Array("금액"));
      await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "금액"));
      return;
    }
  }
  console.log("  --- cfValidate 이전");

  // 금액은 mandatory = true 제거
  //if (cfValidate([gr_evidac])) {
  let ret = await $c.gus.cfValidate($p, [gr_evidac]);
  if (ret) {
    //if(confirm(MSG_CM_CRM_001)==true){

    let rtn = await $c.win.confirm($p, MSG_CM_CRM_001); // 문구추가

    if (rtn) {
      // 리턴 처리
      var arrRtnVal = new Array();
      scwin.check = "Y";

      // ds_evidac.filter();

      for (i = 0; i < ds_evidac.getTotalRow(); i++) {
        scwin.useFilter(i);
      }
      // $c.data.dataListFilter(ds_evidac, onFilter() );

      //	alert(ds_evidac.text);
      // arrRtnVal = ds_evidac.ExportData(1,ds_evidac.CountRow,true);

      // 신규: 응답구조체에 리턴 추가
      arrRtnVal.evidac = ds_evidac.getAllArray();
      console.log("  --- arrRtnVal.evidac [" + JSON.stringify(arrRtnVal.evidac) + "]");

      // window.returnValue = arrRtnVal;
      // window.close();

      let rt = [arrRtnVal.evidac];
      $c.win.closePopup($p, rt);
    }
  }
};

// @@ ====== 미사용 ============================================================================ //

//-------------------------------------------------------------------------
// 지점조회 callBackFunc
//-------------------------------------------------------------------------
scwin.branchCd_callBackFunc = function (rtnList) {
  console.log("▲ branchCd_callBackFunc (지점조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_cntrAssignList.getFocusedRowIndex(); // 현재 포커스된(선택된) 행 인덱스

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ds_evidac.setCellData(row, "branchCd", "");
      ds_evidac.setCellData(row, "branchNm", "");
      ds_evidac.setCellData(row, "acctDeptCd", "");
      ds_evidac.setCellData(row, "acctDeptNm", "");
      return;
    }
    ds_evidac.setCellData(row, "branchCd", rtnList.branchCd);
    ds_evidac.setCellData(row, "branchNm", rtnList.branchNm);
    ds_evidac.setCellData(row, "acctDeptCd", rtnList.shtTermAcctDeptCd);
    ds_evidac.setCellData(row, "acctDeptNm", rtnList.shtTermAcctDeptNm);
  } else {
    ds_evidac.setCellData(row, "branchCd", "");
    ds_evidac.setCellData(row, "branchNm", "");
    ds_evidac.setCellData(row, "acctDeptCd", "");
    ds_evidac.setCellData(row, "acctDeptNm", "");
  }
};

//-------------------------------------------------------------------------
// 매입항목조회 callBackFunc
//-------------------------------------------------------------------------
scwin.pchsItemCd_callBackFunc = function (rtnList) {
  console.log("▲ pchsItemCd_callBackFunc (매입항목조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_cntrAssignList.getFocusedRowIndex(); // 현재 포커스된(선택된) 행 인덱스

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ds_evidac.setCellData(row, "pchsItemCd", "");
      ds_evidac.setCellData(row, "pchsItemNm", "");
      ds_evidac.setCellData(row, "acctCd", "");
      ds_evidac.setCellData(row, "acctNm", "");
      return;
    }
    ds_evidac.setCellData(row, "pchsItemCd", rtnList[0]);
    ds_evidac.setCellData(row, "pchsItemNm", rtnList[1]);
    ds_evidac.setCellData(row, "acctCd", rtnList[3]);
    ds_evidac.setCellData(row, "acctNm", rtnList[4]);
  } else {
    ds_evidac.setCellData(row, "pchsItemCd", "");
    ds_evidac.setCellData(row, "pchsItemNm", "");
    ds_evidac.setCellData(row, "acctCd", "");
    ds_evidac.setCellData(row, "acctNm", "");
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_topGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/topGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'true',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col',class:''}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_sum',placeholder:'',style:'width: 150px;',mandatory:'true',maxlength:'13',objType:'data',dataType:'number',displayFormat:'#,###'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:';visibility:;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_Cd',id:'udc_comCode_Grid',nameId:'',popupID:'',selectID:'',style:'width:250px;visibility:hidden;',validTitle:'',code:'gridCode',name:'gridCodeNm',btnId:'btn_comCode_Grid'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',style:'',id:'',class:'gvwbox'},E:[{T:1,N:'w2:gridView',A:{scrollByColumnAdaptive:'false',focusMode:'cell',dataList:'data:ds_evidac',scrollByColumn:'false',style:'',autoFit:'allColumn',id:'gr_evidac',class:'wq_gvw',checkReadOnlyOnPasteEnable:'',readOnly:'false',rowStatusVisible:'true',rowStatusWidth:'10','ev:onafteredit':'scwin.gr_evidac_onafteredit'},E:[{T:1,N:'w2:caption',A:{style:'',id:'caption2',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{style:'',id:'header2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row3'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'지점',value:'지점',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column33',value:'지점명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column30',value:'매입항목',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column27',value:'매입항목명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column24',value:'부서',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',id:'column11',value:'부서명',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'text',id:'column10',value:'계정',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'140',inputType:'text',id:'column9',value:'계정명',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'110',inputType:'text',id:'column8',value:'금액',class:'txt-red',blockSelect:'false',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column18',value:'비용구분코드',displayMode:'label',hidden:'true'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column21',value:'계정구분코드',displayMode:'label',hidden:'true'}}]}]},{T:1,N:'w2:gBody',A:{style:'',id:'gBody2'},E:[{T:1,N:'w2:row',A:{style:'',id:'row4'},E:[{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'custom',id:'branchCd',blockSelect:'false',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'branchNm',displayMode:'label',readOnly:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'custom',id:'pchsItemCd',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'pchsItemNm',displayMode:'label',readOnly:'false'}},{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',id:'acctDeptCd',displayMode:'label',readOnly:'false',allowChar:'0-9',maxLength:'5',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'130',inputType:'text',id:'acctDeptNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'70',inputType:'textImage',id:'acctCd',blockSelect:'false',displayMode:'label',readOnly:'false',allowChar:'0-9',maxLength:'7',mandatory:'true'}},{T:1,N:'w2:column',A:{removeBorderStyle:'false',width:'140',inputType:'text',id:'acctNm',blockSelect:'false',displayMode:'label',textAlign:'left',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{textAlign:'right',removeBorderStyle:'false',width:'110',inputType:'text',id:'amt',blockSelect:'false',displayMode:'label',readOnly:'false',displayFormat:'#,###',dataType:'float',maxLength:'10'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'costClsCd',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'acctClsCd',displayMode:'label'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column17',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column35',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column32',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column29',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column26',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'130',inputType:'text',id:'column16',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',id:'column15',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'140',inputType:'text',id:'column14',displayMode:'label'}},{T:1,N:'w2:column',A:{textAlign:'right',width:'110',inputType:'expression',id:'amtSum',displayMode:'label',displayFormat:'#,###',dataType:'number',expression:'sum(\'amt\')'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column20',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'120',inputType:'text',id:'column23',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{style:'',btnDelYn:'N',rowAddFunction:'scwin.f_AddRow',btnRowDelYn:'Y',btnCancelYn:'Y',rowDelFunction:'scwin.f_DelRow',cancelFunction:'scwin.f_CancelRow',btnRowAddYn:'Y',rowAddUserAuth:'C',rowDelUserAuth:'D'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]}]}]}]}]}]})