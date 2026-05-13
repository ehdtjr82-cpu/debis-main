/*amd /ui/ac/fi/taxbiz/withhold/fi_404_01_10p.xml 23735 390e439ec7ff60fae764aeb49b2c99fe0c2a051d51aa9af3a78f77705df75efd */
define({declaration:{A:{version:'1.0',encoding:'UTF-8'}},E:[{T:1,N:'html',A:{xmlns:'http://www.w3.org/1999/xhtml','xmlns:ev':'http://www.w3.org/2001/xml-events','xmlns:w2':'http://www.inswave.com/websquare','xmlns:xf':'http://www.w3.org/2002/xforms'},E:[{T:1,N:'head',E:[{T:1,N:'w2:type',E:[{T:3,text:'COMPONENT'}]},{T:1,N:'w2:buildDate'},{T:1,N:'w2:MSA'},{T:1,N:'xf:model',E:[{T:1,N:'w2:dataCollection',A:{baseNode:'map'},E:[{T:1,N:'w2:dataList',A:{baseNode:'list',repeatNode:'map',id:'ds_deptdis',saveRemovedData:'true'},E:[{T:1,N:'w2:columnInfo',E:[{T:1,N:'w2:column',A:{id:'acctDeptCd',name:'회계부서코드',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'acctDeptNm',name:'회계부서명',dataType:'text',defaultValue:''}},{T:1,N:'w2:column',A:{id:'amt',name:'금액',dataType:'number',defaultValue:'0'}},{T:1,N:'w2:column',A:{id:'rltSeq',name:'관련사건 저장순번',dataType:'text',defaultValue:''}}]}]}]},{T:1,N:'w2:workflowCollection'}]},{T:1,N:'w2:layoutInfo'},{T:1,N:'w2:publicInfo',A:{method:''}},{T:1,N:'script',A:{lazy:'false',type:'text/javascript'},E:[{T:4,cdata:function(scopeObj){with(scopeObj){//==================================================================================================================
// id       : fi_404_01_10p
// 이름     : 원천세부서배부 (부서배부)
// 경로     : 재무회계/세무/원천세/ 원천세등록
// 사용계정 : 내부
// 파라미터 :
//            IN  : ds_deptdis
//            OUT : ds_deptdis
//
// 비고     : 
//
// 레포트   :
// 업로드   :
// 다운로드 : 
// 호출     :
//            [호출당함]
//            회계/재무회계/세무/원천세/원천세등록(fi_404_01_10b.jsp) 원천세등록 탭 에서 호출  - 부서배부 버튼 클릭
//==================================================================================================================

// 로그인사용자 정보
scwin.vLoginCoCd = ""; // 소속 자회사 
scwin.vLoginCoClsCd = ""; // 회계_회사구분('CO035' : 0:동부 EXPRESS)
scwin.vUserHomeClsCd = ""; // 사용자소속구분코드 
scwin.privAdmin = ""; // 어드민권한
scwin.userId = ""; // 사용자ID
scwin.vCoCd = ""; // 회사코드
scwin.empNo = ""; // 사원번호

// 아규먼트
scwin.totSal = "";
scwin.rltSeq = "";
scwin.slipDt = "";
scwin.deptdis_param; // ds_deptdis 받는 전역변수

// 내부
scwin.check = "";
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
  // console.log("▶▶ memJson : "+ JSON.stringify(memJson));

  // String totSal  = DCheckIf.isNullToBlank(request.getParameter("totSal"));
  // String slipDt  = DCheckIf.isNullToBlank(request.getParameter("slipDt"));
  // String rltSeq  = DCheckIf.isNullToBlank(request.getParameter("rltSeq"));

  scwin.totSal = $c.data.getParameter($p, "totSal") == null ? " " : $c.data.getParameter($p, "totSal");
  scwin.slipDt = $c.data.getParameter($p, "slipDt") == null ? " " : $c.data.getParameter($p, "slipDt");
  scwin.rltSeq = $c.data.getParameter($p, "rltSeq") == null ? " " : $c.data.getParameter($p, "rltSeq");
  console.log("▶ totSal [" + scwin.totSal + "]  rltSeq [" + scwin.rltSeq + "]  slipDt [" + scwin.slipDt + "]");

  // var ds_parent = window.dialogArguments;  // ds_parent 의미 없슴

  scwin.deptdis_param = $c.data.getParameter($p, "deptdis") == null ? "" : $c.data.getParameter($p, "deptdis");
  console.log("▶ deptdis [" + JSON.stringify(scwin.deptdis_param) + "]");
};

//-------------------------------------------------------------------------
// onUdcCompleted : UDC 완료. 그리는 시점 차이 보완. onPageLoad 에서 호출 
//-------------------------------------------------------------------------
scwin.onUdcCompleted = function () {
  console.log("==-==-== onUdcCompleted");
  $p.setTimeout(function () {
    udc_comCode_Grid.hide(); // 그리드 팝업 숨김

    $c.gus.cfDisableKeyData($p);

    // $c.gus.cfDisableBtnOnly([bCreate]);  -- 오타
    // cfCopyDataSet(ds_parent, ds_deptdis, "copyHeader=yes");

    // 배열 ==> ds_deptdis 로 복사
    ds_deptdis.setArray(scwin.deptdis_param, true); // append

    var dc = ds_deptdis.getAllArray();
    console.log("  *** ds_deptdis (" + ds_deptdis.getTotalRow() + ") : " + JSON.stringify(dc));

    // <!-- 증빙별계정  DataSet -->
    //  language=JavaScript for=ds_deptdis event=OnLoadError()>
    // 	cfHideDSWaitMsg(gr_deptdis);
    // 	cfShowError(ds_deptdis);

    //  language=JavaScript for=ds_deptdis event=OnLoadStarted()>
    // 	cfShowDSWaitMsg(gr_deptdis);

    //  language=JavaScript for=ds_deptdis event=OnLoadCompleted(rowCnt)>
    // 	 cfHideDSWaitMsg(gr_deptdis);
    // 	 cfShowTotalRows(totalRows, rowCnt);
    //  if( rowCnt == 0 ){
    // 		cfAlertMsg(MSG_CM_WRN_002);
    // 		cfEnableBtnOnly([bCreate]);
    // }

    // KYU_DEL
    // if( ds_deptdis.getTotalRow() == 0 ){
    //     $c.gus.cfAlertMsg(MSG_CM_WRN_002);	
    // $c.gus.cfEnableBtnOnly([bCreate]);  // 행추가
    // }

    // ed_sum.text='<%=totSal%>';
    ed_sum.setValue(scwin.totSal);
    // cfDisableObjects([ed_sum,bSave]);
    $c.gus.cfDisableObjects($p, [ed_sum]);
    $c.gus.cfDisableObjects($p, [$c.gus.getctrlBtn($p, 'bSave')]);

    // ds_deptdis.UseFilter ="true";
    // ds_deptdis.filter();

    // 필터
    for (i = 0; i < gr_deptdis.getTotalRow(); i++) {
      scwin.useFilter(i);
    }
    scwin.oldCnt = ds_deptdis.getTotalRow(); // 기존건수

    // 그리드 포커싱 (행추가 할 때 포커싱 상태여야 함)
    gr_deptdis.setFocusedCell(0, 0);
  }, {
    "delay": 50
  });
};

// @@ ====== 팝업 ============================================================================== //

//-------------------------------------------------------------------------
// 그리드 팝업 (이미지 클릭)
//-------------------------------------------------------------------------
scwin.gr_deptdis_ontextimageclick = function (rowIndex, columnIndex) {
  // console.log("----- gr_deptdis_ontextimageclick (그리드 팝업) ("+ rowIndex +",  "+ columnIndex +") "+ds_deptdis.getColumnID(columnIndex));

  // var colid = gr_deptdis.getColumnID(columnIndex);
  // var row   = rowIndex;
  // var data  = "";

  // switch (gr_deptdis.getColumnID(columnIndex)) {  // grid 임!!
  //     case "acctDeptCd":  // 부서
  //             scwin.f_openCommPopUpGrid(colid, row, data, ds_deptdis.getCellData(rowIndex,"acctDeptCd"), "F");
  //             //scwin.f_openCommPopUpGrid(1, rowIndex, ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcNm"), 'F', 'F')
  //             break;

  //     default:
  //            break;
  // }
};

//-------------------------------------------------------------------------
// onafteredit 그리드 팝업 엔터,탭 이벤트 : T
//-------------------------------------------------------------------------
scwin.gr_deptdis_onafteredit = function (rowIndex, columnIndex, value) {
  // <!-- 부서 그리드  popup -->
  // <script language=JavaScript for=gr_deptdis event=OnPopup(row,colid,data)>
  // f_GridPop(colid,row,data,"","F");

  var colid = gr_deptdis.getColumnID(columnIndex);
  var row = rowIndex;
  var data = "";
  switch (gr_deptdis.getColumnID(columnIndex)) {
    // grid 임!!
    case "acctDeptCd":
      // 부서
      scwin.f_openCommPopUpGrid(colid, row, data, ds_deptdis.getCellData(rowIndex, "acctDeptCd"), "T");
      //scwin.f_openCommPopUpGrid(1, rowIndex, ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcCd"), ds_cntrAssignList.getCellData(rowIndex, "mcomDsmbrkPlcNm"), 'F', 'F')
      break;
    default:
      break;
  }
};

//-------------------------------------------------------------------------
// 그리드 팝업 호출
//-------------------------------------------------------------------------
scwin.f_openCommPopUpGrid = function (colid, row, data, str, check) {
  console.log("=== f_openCommPopUpGrid  colid[" + colid + "]  row[" + row + "]  data[" + data + "]  str[" + str + "]  check[" + check + "]");
  switch (colid) {
    case "acctDeptCd":
      // 귀속부서

      // ds_deptdis.NameValue(row,"acctDeptNm")="";
      // var param = ",<%=slipDt%>,0,,"+vCoCd;
      // var rtnList = new Array();
      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo2',str,"",check,null,null,null,null,param,null,null,null,null);

      ds_deptdis.setCellData(row, "acctDeptNm", "");
      var param = "," + scwin.slipDt + ",0,," + scwin.vCoCd;
      console.log("  귀속부서(그리드)popup  param [" + param + "]");

      // rtnList = cfCommonPopUp('retrieveAcctDeptCdInfo2',str,"",check,null,null,null,null,param,null,null,null,null);
      udc_comCode_Grid.setSelectId("retrieveAcctDeptCdInfo2"); //각 항목별로 공통팝업 항목에 따라 selectId 세팅
      udc_comCode_Grid.cfCommonPopUp(scwin.acctDeptCd_callBackFunc, str, "", check, null, null, null, null, param, null, null, null, null);
      break;
    default:
      break;
  }
};

// @@ ====== 팝업 callBackFunc ================================================================= //

//-------------------------------------------------------------------------
// 부서조회 callBackFunc
//-------------------------------------------------------------------------
scwin.acctDeptCd_callBackFunc = function (rtnList) {
  console.log("▲ acctDeptCd_callBackFunc (부서조회 팝업 callBackFunc)");
  console.log("   rtnList [" + rtnList + "]");
  var rowIdx = gr_deptdis.getFocusedRowIndex(); // 그리드의 현재 포커스된(선택된) 행 인덱스

  // if ( rtnList != null) {
  // 	 	if (rtnList[0] == "N/A") return;
  // 	ds_deptdis.NameValue(row,"acctDeptCd") = rtnList[0];	//부서코드
  // 	ds_deptdis.NameValue(row,"acctDeptNm") = rtnList[1];	//부서명
  // 	ds_deptdis.NameValue(row,"costClsCd")  = ""+rtnList[9];	//비용구분코드
  // }else{
  // 	ds_deptdis.NameValue(row,"acctDeptCd") = "";
  // 	ds_deptdis.NameValue(row,"acctDeptNm") = "";
  // 	ds_deptdis.NameValue(row,"costClsCd")  = "";
  // }

  if (rtnList != null) {
    if (rtnList[0] == "N/A") {
      // 팝업 그냥 닫음
      ds_deptdis.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
      ds_deptdis.setCellData(rowIdx, "acctDeptNm", ""); //부서명
      ds_deptdis.setCellData(rowIdx, "costClsCd", ""); //비용구분코드
      return;
    }
    ds_deptdis.setCellData(rowIdx, "acctDeptCd", rtnList[0]); //부서코드
    ds_deptdis.setCellData(rowIdx, "acctDeptNm", rtnList[1]); //부서명
    ds_deptdis.setCellData(rowIdx, "costClsCd", "" + rtnList[9]); //비용구분코드
  } else {
    ds_deptdis.setCellData(rowIdx, "acctDeptCd", ""); //부서코드
    ds_deptdis.setCellData(rowIdx, "acctDeptNm", ""); //부서명
    ds_deptdis.setCellData(rowIdx, "costClsCd", ""); //비용구분코드
  }
};

// @@ ====== 이벤트 ============================================================================ //

//-------------------------------------------------------------------------
// useFilter (필터 처리)
//-------------------------------------------------------------------------
scwin.useFilter = function (row) {
  console.log("=== useFilter (필터 처리)  row : " + row);
  // <!-- 그리드 데이터 필터링-->
  // <script language=JavaScript for=ds_deptdis event=OnFilter(row)>
  if (scwin.check == "Y") {
    return true;
  } else {
    console.log("  -- ds.rltSeq [" + ds_deptdis.getCellData(row, "rltSeq") + "]  [" + scwin.rltSeq + "]");
    if (ds_deptdis.getCellData(row, "rltSeq") == scwin.rltSeq) {
      $c.gus.cfEnableObjects($p, [$c.gus.getctrlBtn($p, 'bSave')]);
      return true;
    } else {
      return false;
    }
  }
};

//-------------------------------------------------------------------------
// 행추가
//-------------------------------------------------------------------------
scwin.f_AddRow = function () {
  console.log("=== f_AddRow");

  // ds_deptdis.AddRow();
  // ds_deptdis.NameValue(ds_deptdis.RowPosition, "rltSeq")='<%=rltSeq%>';
  // $c.gus.cfEnableBtnOnly([bSave]);

  if (ds_deptdis.getTotalRow() == 0) {
    ds_deptdis.insertRow();
    ds_deptdis.setRowPosition(0);
    gr_deptdis.setFocusedCell(0, "acctDeptCd", false);
  } else {
    console.log("       KKK");
    ds_deptdis.insertRow();
    // ds_deptdis.setRowPosition(ds_deptdis.getRowPosition()+1);
    var row = ds_deptdis.getTotalRow() - 1;
    gr_deptdis.setFocusedCell(row, "acctDeptCd", false);
  }

  // 재로딩 했을 때 저장버튼 활성화 여부
  ds_deptdis.setCellData(ds_deptdis.getRowPosition(), "rltSeq", scwin.rltSeq);
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);
};

//-------------------------------------------------------------------------
// 행삭제
//-------------------------------------------------------------------------
scwin.f_DelRow = function () {
  // 함수명은 신규
  console.log("=== f_DelRow");

  // ds_deptdis.DeleteMarked();
  // cfEnableBtnOnly([bSave]);

  // var row = ds_deptdis.getRowPosition();
  // if (ds_deptdis.getRowStatus(row) == "C") {
  //     ds_deptdis.removeRow(row)
  // } else {
  //     ds_deptdis.deleteRow(row);
  // }

  // $c.data.deleteRow(ds_deptdis);
  // KYU_TEST : 2026-01-29 : row 직접 삭제
  ds_deptdis.removeRow(ds_deptdis.getRowPosition());
  $c.gus.cfEnableBtnOnly($p, [$c.gus.getctrlBtn($p, 'bSave')]);

  // 그리드의 row  에서 focus 없애는 건 추후 코딩
  // var row = ds_deptdis.getRowPosition();
  // ds_deptdis.removeRow(row);
};

//-------------------------------------------------------------------------
// 행취소
//-------------------------------------------------------------------------
scwin.f_CancelRow = function () {
  // 함수명은 신규
  console.log("=== f_CancelRow");
  // ds_deptdis.Undo(ds_deptdis.RowPosition);

  // UNDO 처리
  $c.data.undoRow($p, ds_deptdis, "Y");
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
  var CountRow = ds_deptdis.getTotalRow();

  // KYU_NEW 기존 > 0 이고 현재 0 이면 초기화
  if (scwin.oldCnt > 0 && CountRow == 0) {
    console.log("  --  -- 초기화 (기존 있다가 모두 지움 )");
    let rtn = await $c.win.confirm($p, MSG_CM_CRM_001); // 문구추가

    if (rtn) {
      // 리턴 처리
      var arrRtnVal = new Array();
      scwin.check = "Y";
      for (i = 0; i < gr_deptdis.getTotalRow(); i++) {
        scwin.useFilter(i);
      }

      // 신규: 응답구조체에 리턴 추가
      arrRtnVal.deptdis = ds_deptdis.getAllArray();
      console.log("  --- arrRtnVal.deptdis [" + JSON.stringify(arrRtnVal.deptdis) + "]");
      let rt = [arrRtnVal.deptdis];
      $c.win.closePopup($p, rt);
    }
  }

  //체크
  // if(ds_deptdis.IsUpdated==false ){
  if (ds_deptdis.getModifiedJSON().length == 0) {
    console.log(" --- 건수에 따라 리턴");

    // if ( CountRow >= 0 ) {
    await $c.win.alert($p, "변경된 사항이 없습니다.");
    return;
    // }
  }

  // 값체크
  var chSum = 0;
  if (CountRow > 0) {
    // for(i=1; i<=ds_deptdis.CountRow; i++){
    for (i = 0; i < CountRow; i++) {
      var j = i + 1; // 메시지용 순서
      var temp = Number(ds_deptdis.getCellData(i, "amt"));

      // KYU_NEW : 2026-02-03 - 금액 0 이면 오류
      if (temp == 0) {
        // 경비분배의 2번째 데이터에서 금액은(는) 다음 문자가 올 수 없습니다. 0  <-- 메시지는 경비분배와 동일

        await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_033, "경비분배의 " + j + "번째 데이터에서 금액", 0));
        ds_deptdis.setRowPosition(i);
        gr_deptdis.focus;
        return;
      }
      chSum = chSum + Number(ds_deptdis.getCellData(i, "amt"));
      console.log("[" + i + "]  acctDeptCd [" + ds_deptdis.getCellData(i, "acctDeptCd") + "]");
    } // end of for	

    console.log("  chSum (현재금액) [" + chSum + "]   amt (총금액) [" + ed_sum.getValue() + "]");
  }

  // 금액체크 : 각 금액의 합 = 총액
  if (ed_sum.getValue().trim() != chSum) {
    // cfAlertMsg(MSG_CM_ERR_055,Array("금액"));
    await $c.gus.cfAlertMsg($p, $c.data.getMessage($p, MSG_CM_ERR_055, "금액"));
    return;
  }

  // 금액은 mandatory = true 제거
  //if (cfValidate([gr_deptdis])) {
  let ret = await $c.gus.cfValidate($p, [gr_deptdis]);
  if (ret) {
    //if(confirm(MSG_CM_CRM_001)==true){

    let rtn = await $c.win.confirm($p, MSG_CM_CRM_001); // 문구추가

    if (rtn) {
      // 리턴 처리
      var arrRtnVal = new Array();
      scwin.check = "Y";

      // gr_deptdis.filter();

      for (i = 0; i < gr_deptdis.getTotalRow(); i++) {
        scwin.useFilter(i);
      }

      // arrRtnVal = ds_deptdis.ExportData(1,ds_deptdis.CountRow,true);

      // 신규: 응답구조체에 리턴 추가
      arrRtnVal.deptdis = ds_deptdis.getAllArray();
      console.log("  --- arrRtnVal.deptdis [" + JSON.stringify(arrRtnVal.deptdis) + "]");

      // window.returnValue = arrRtnVal;
      // window.close();

      let rt = [arrRtnVal.deptdis];
      $c.win.closePopup($p, rt);
    }
  }
};
}}}]},{T:1,N:'w2:require',A:{as:'udc_bottomGrdBtn',type:'page',variableClone:'',src:'/cm/udc/bottomGrdBtn.xml'}},{T:1,N:'w2:require',A:{as:'udc_comCode',type:'page',variableClone:'true',src:'/cm/udc/comCode.xml'}}]},{T:1,N:'body',A:{'ev:onpageload':'scwin.onpageload'},E:[{T:1,N:'xf:group',A:{class:'pop_contents',id:'',style:''},E:[{T:1,N:'w2:wframe',A:{id:'',src:'/cm/xml/contentHeader.xml',style:''}},{T:1,N:'xf:group',A:{class:'shbox',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'shbox-inner',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'w2tb',id:'',style:'',tagname:'table'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:summary'}]},{T:1,N:'xf:group',A:{tagname:'colgroup'},E:[{T:1,N:'xf:group',A:{style:'width:40px;',tagname:'col',class:''}},{T:1,N:'xf:group',A:{style:'',tagname:'col'}}]},{T:1,N:'xf:group',A:{id:'',tagname:'tr'},E:[{T:1,N:'xf:group',A:{class:'w2tb_th',tagname:'th'},E:[{T:1,N:'w2:attributes',E:[{T:1,N:'w2:scope',E:[{T:3,text:'row'}]}]},{T:1,N:'w2:textbox',A:{class:'req',id:'',label:'금액',style:''}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td'},E:[{T:1,N:'w2:attributes'},{T:1,N:'xf:input',A:{class:'tar',id:'ed_sum',style:'width: 150px;',dataType:'number',displayFormat:'#,##0',mandatory:'true',objType:'data',maxlength:'13',title:'금액'}}]},{T:1,N:'xf:group',A:{class:'w2tb_td',tagname:'td',style:';visibility:;'},E:[{T:1,N:'w2:attributes'},{T:1,N:'w2:udc_comCode',A:{codeId:'ed_Cd',id:'udc_comCode_Grid',nameId:'',popupID:'',selectID:'',style:'',validTitle:'',code:'gridCode',name:'gridCodeNm',btnId:'btn_comCode_Grid'}}]}]}]}]}]},{T:1,N:'xf:group',A:{class:'round-box',id:''},E:[{T:1,N:'xf:group',A:{adaptiveThreshold:'',class:'gvwbox',id:'grp_group1',style:''},E:[{T:1,N:'w2:gridView',A:{autoFit:'allColumn',checkReadOnlyOnPasteEnable:'',class:'wq_gvw',dataList:'data:ds_deptdis',focusMode:'cell',id:'gr_deptdis',scrollByColumn:'false',scrollByColumnAdaptive:'false',style:'',visibleRowNum:'10',visibleRowNumFix:'true',rowStatusVisible:'true','ev:onafteredit':'scwin.gr_deptdis_onafteredit'},E:[{T:1,N:'w2:caption',A:{id:'caption1',style:'',value:'this is a grid caption.'}},{T:1,N:'w2:header',A:{id:'header2',style:''},E:[{T:1,N:'w2:row',A:{id:'row3',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column23',value:'부서',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column21',value:'부서명',displayMode:'label',class:'txt-red'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column19',value:'금액',displayMode:'label',class:'txt-red'}}]}]},{T:1,N:'w2:gBody',A:{id:'gBody2',style:''},E:[{T:1,N:'w2:row',A:{id:'row4',style:''},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'textImage',style:'',id:'acctDeptCd',value:'',displayMode:'label',readOnly:'false',mandatory:'true',allowChar:'0-9',maxLength:'5'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'acctDeptNm',value:'',displayMode:'label',readOnly:'true',mandatory:'true'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'amt',value:'',displayMode:'label',dataType:'float',displayFormat:'#,##0',textAlign:'right',maxLength:'10'}}]}]},{T:1,N:'w2:footer',A:{style:'',id:'footer1'},E:[{T:1,N:'w2:row',A:{style:'',id:'row5'},E:[{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column26',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'100',inputType:'text',style:'',id:'column25',value:'',displayMode:'label'}},{T:1,N:'w2:column',A:{width:'70',inputType:'text',style:'',id:'column24',value:'',displayMode:'label'}}]}]}]},{T:1,N:'xf:group',A:{class:'grid-bottom ',id:'',style:''},E:[{T:1,N:'xf:group',A:{class:'left',id:''},E:[{T:1,N:'xf:group',A:{class:'grid-total',id:''},E:[{T:1,N:'w2:textbox',A:{class:'',id:'',label:'총',style:'',tagname:'span'}},{T:1,N:'w2:textbox',A:{class:'num',id:'ed_totalRows',label:'0',style:'',tagname:'span',dataType:'number',displayFormat:'#,##0'}},{T:1,N:'w2:textbox',A:{class:'',id:'',label:'건',style:'',tagname:'span'}}]}]},{T:1,N:'xf:group',A:{class:'right',id:'',style:''},E:[{T:1,N:'w2:udc_bottomGrdBtn',A:{btnDelYn:'N',style:'',btnCancelYn:'Y',gridID:'gr_deptdis',id:'udc_rowControl',rowAddFunction:'scwin.f_AddRow',rowDelFunction:'scwin.f_DelRow',rowAddUserAuth:'C',btnRowDelYn:'Y',btnRowAddYn:'Y',rowDelUserAuth:'D',cancelFunction:'scwin.f_CancelRow'}}]}]}]}]},{T:1,N:'xf:group',A:{class:'pop-btnbox',id:'',style:''},E:[{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_save',style:'',type:'button',objType:'bSave',userAuth:'U','ev:onclick':'scwin.f_Save'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'저장'}]}]},{T:1,N:'xf:trigger',A:{class:'btn',id:'btn_close',style:'',type:'button','ev:onclick':'scwin.btn_close_onclick'},E:[{T:1,N:'xf:label',E:[{T:4,cdata:'닫기'}]}]}]}]}]}]}]})